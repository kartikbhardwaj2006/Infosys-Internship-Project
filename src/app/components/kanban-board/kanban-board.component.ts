import { Component, inject, signal, computed } from '@angular/core';
import {
  CdkDropListGroup,
  CdkDropList,
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { ColumnService } from '../../services/column.service';
import { ThemeService } from '../../services/theme.service';
import { ToastService } from '../../services/toast.service';
import { Task, Column, ColumnDefinition } from '../../models/task.model';
import { KanbanColumnComponent } from '../kanban-column/kanban-column.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { AddColumnDialogComponent } from '../add-column-dialog/add-column-dialog.component';

type DateFilter = 'all' | 'today' | 'overdue' | 'upcoming';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    KanbanColumnComponent,
    TaskDialogComponent,
    AddColumnDialogComponent,
  ],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css',
})
export class KanbanBoardComponent {
  private taskService = inject(TaskService);
  private columnService = inject(ColumnService);
  private themeService = inject(ThemeService);
  private toast = inject(ToastService);

  /** Today (normalized to midnight) for efficient date comparisons. */
  private readonly today = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  searchQuery = signal('');
  dateFilter = signal<DateFilter>('all');
  showTaskDialog = signal(false);
  showAddColumnDialog = signal(false);
  showDeleteConfirm = signal<{ columnId: string; columnTitle: string } | null>(null);
  showClearColumnConfirm = signal<{ columnId: string; columnTitle: string } | null>(null);
  /** Task pending delete confirmation (null = no dialog). */
  showDeleteTaskConfirm = signal<Task | null>(null);
  dialogMode = signal<'create' | 'edit'>('create');
  editingTask = signal<Task | null>(null);
  /** When opening "Add task", default column for the new task. */
  defaultColumnId = signal<string>('todo');

  private allTasks = this.taskService.tasks;
  /** Raw column definitions (id + title), also used for column drag-drop data. */
  readonly columnDefs = this.columnService.columns;

  private filteredTasks = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const filter = this.dateFilter();
    const list = this.allTasks() ?? [];
    return list.filter((t) => {
      const matchesQuery = !query || t.title.toLowerCase().includes(query);
      if (!matchesQuery) return false;
      if (filter === 'all') return true;
      if (!t.dueDate) return false;

      const due = new Date(t.dueDate);
      due.setHours(0, 0, 0, 0);
      const dueTime = due.getTime();
      const todayTime = this.today.getTime();

      switch (filter) {
        case 'today':
          return dueTime === todayTime;
        case 'overdue':
          return dueTime < todayTime;
        case 'upcoming':
          return dueTime > todayTime;
        default:
          return true;
      }
    });
  });

  /** Dynamic columns with their tasks (filtered by search). Order matches column service. */
  columns = computed<Column[]>(() => {
    const cols = this.columnDefs();
    const tasks = this.filteredTasks() ?? [];
    return cols.map((col) => ({
      id: col.id,
      title: col.title,
      tasks: tasks.filter((t) => t.columnId === col.id),
    }));
  });

  /** All column ids for CDK drop list connection. */
  connectedListIds = this.columnService.columnIds;

  /** Theme for template (light/dark). */
  theme = this.themeService.theme;

  readonly todayLabel = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(this.today);

  setDateFilter(filter: DateFilter): void {
    this.dateFilter.set(filter);
  }

  onDrop(event: CdkDragDrop<Task[]>): void {
    const task = event.item.data as Task;
    const prevId = event.previousContainer.id as string;
    const currId = event.container.id as string;
    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;

    const colIds = this.columnService.columnIds();
    const getTasksFor = (columnId: string) =>
      [...this.taskService.getTasksByColumnId(columnId)];

    const removeFrom = (arr: Task[], id: string) => arr.filter((t) => t.id !== id);
    const insertAt = (arr: Task[], t: Task, index: number): Task[] => {
      const out = arr.filter((x) => x.id !== t.id);
      out.splice(index, 0, t);
      return out;
    };

    const updatedTask = { ...task, columnId: currId };

    if (prevId === currId) {
      const list = getTasksFor(prevId);
      const reordered = [...list];
      const [removed] = reordered.splice(prevIndex, 1);
      reordered.splice(currIndex, 0, removed);
      const newOrdered: Task[] = [];
      for (const cid of colIds) {
        const tasksForCol = cid === prevId ? reordered : getTasksFor(cid);
        newOrdered.push(...tasksForCol);
      }
      this.taskService.setTasks(newOrdered);
    } else {
      const newOrdered: Task[] = [];
      for (const cid of colIds) {
        let tasksForCol = getTasksFor(cid);
        if (cid === prevId) tasksForCol = removeFrom(tasksForCol, task.id);
        if (cid === currId) tasksForCol = insertAt(tasksForCol, updatedTask, currIndex);
        newOrdered.push(...tasksForCol);
      }
      this.taskService.setTasks(newOrdered);
      const col = this.columnService.getColumnById(currId);
      this.toast.success(`Moved to ${col?.title ?? currId}`);
    }
  }

  onColumnDrop(event: CdkDragDrop<ColumnDefinition[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    const current = [...this.columnDefs()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.columnService.setColumns(current);
  }

  openAddTask(columnId: string = 'todo'): void {
    this.defaultColumnId.set(columnId);
    this.editingTask.set(null);
    this.dialogMode.set('create');
    this.showTaskDialog.set(true);
  }

  openEditTask(task: Task): void {
    this.editingTask.set(task);
    this.dialogMode.set('edit');
    this.showTaskDialog.set(true);
  }

  onTaskDialogSaved(payload: Task): void {
    if (this.dialogMode() === 'edit' && payload.id) {
      this.taskService.updateTask(payload.id, payload);
      this.toast.success('Task updated');
    } else {
      this.taskService.addTask(payload);
      this.toast.success('Task added');
    }
    this.showTaskDialog.set(false);
  }

  onTaskDialogCancelled(): void {
    this.showTaskDialog.set(false);
  }

  /** Request delete: show confirmation dialog instead of deleting immediately. */
  requestDeleteTask(task: Task): void {
    this.showDeleteTaskConfirm.set(task);
  }

  confirmDeleteTask(): void {
    const task = this.showDeleteTaskConfirm();
    if (!task) return;
    this.taskService.deleteTask(task.id);
    this.showDeleteTaskConfirm.set(null);
    this.toast.success('Task deleted');
  }

  cancelDeleteTask(): void {
    this.showDeleteTaskConfirm.set(null);
  }

  openAddColumnDialog(): void {
    this.showAddColumnDialog.set(true);
  }

  onAddColumnSaved(title: string): void {
    const col = this.columnService.addColumn(title);
    this.showAddColumnDialog.set(false);
    this.toast.success(`Column "${col.title}" added`);
  }

  onAddColumnCancelled(): void {
    this.showAddColumnDialog.set(false);
  }

  requestDeleteColumn(columnId: string, columnTitle: string): void {
    if (this.columnService.isLastColumn()) {
      this.toast.info('Cannot delete the last column.');
      return;
    }
    this.showDeleteConfirm.set({ columnId, columnTitle });
  }

  confirmDeleteColumn(): void {
    const data = this.showDeleteConfirm();
    if (!data) return;
    const { columnId, columnTitle } = data;
    const colIds = this.columnService.columnIds();
    const targetId = colIds.find((id) => id !== columnId);
    if (targetId) {
      this.taskService.reassignTasksFromColumn(columnId, targetId);
    }
    this.columnService.deleteColumn(columnId);
    this.showDeleteConfirm.set(null);
    this.toast.success(`Column "${columnTitle}" deleted.`);
  }

  cancelDeleteColumn(): void {
    this.showDeleteConfirm.set(null);
  }

  requestClearColumn(columnId: string, columnTitle: string): void {
    this.showClearColumnConfirm.set({ columnId, columnTitle });
  }

  confirmClearColumn(): void {
    const data = this.showClearColumnConfirm();
    if (!data) return;
    const { columnId, columnTitle } = data;
    const taskCount = this.taskService.getTasksByColumnId(columnId).length;
    if (taskCount > 0) {
      this.taskService.clearTasksByColumnId(columnId);
      this.toast.success(`Cleared ${taskCount} task(s) from "${columnTitle}".`);
    }
    this.showClearColumnConfirm.set(null);
  }

  cancelClearColumn(): void {
    this.showClearColumnConfirm.set(null);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    const newTheme = this.themeService.theme();
    this.toast.success(newTheme === 'dark' ? 'Dark mode on' : 'Light mode on');
  }

  /** Task count for the column currently in delete-confirm dialog (for message). */
  getDeleteConfirmTaskCount(): number {
    const data = this.showDeleteConfirm();
    if (!data) return 0;
    return this.taskService.getTasksByColumnId(data.columnId).length;
  }

  downloadAllTasks(): void {
    const tasks = this.allTasks() ?? [];
    this.downloadAsJson(tasks, 'tasks-all.json');
    this.toast.info('Downloaded all tasks.');
  }

  downloadFilteredTasks(): void {
    const tasks = this.filteredTasks() ?? [];
    const filename =
      this.dateFilter() === 'all' && !this.searchQuery().trim()
        ? 'tasks-all.json'
        : 'tasks-filtered.json';
    this.downloadAsJson(tasks, filename);
    this.toast.info('Downloaded filtered tasks.');
  }

  downloadColumnTasks(columnId: string, columnTitle: string): void {
    const tasks = this.taskService.getTasksByColumnId(columnId);
    const safeId = columnId.toLowerCase().replace(/\s+/g, '-');
    const filename = `tasks-${safeId}.json`;
    this.downloadAsJson(tasks, filename);
    this.toast.info(`Downloaded tasks for "${columnTitle}".`);
  }

  private downloadAsJson(data: unknown, filename: string): void {
    try {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      this.toast.error('Unable to download tasks.');
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }
}
