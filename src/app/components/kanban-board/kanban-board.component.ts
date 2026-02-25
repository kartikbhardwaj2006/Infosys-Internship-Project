import { Component, inject, signal, computed } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { TaskService } from '../../services/task.service';
import { ColumnService } from '../../services/column.service';
import { ThemeService } from '../../services/theme.service';
import { ToastService } from '../../services/toast.service';
import { Task, Column } from '../../models/task.model';
import { KanbanColumnComponent } from '../kanban-column/kanban-column.component';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { AddColumnDialogComponent } from '../add-column-dialog/add-column-dialog.component';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [
    CdkDropListGroup,
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

  searchQuery = signal('');
  showTaskDialog = signal(false);
  showAddColumnDialog = signal(false);
  showDeleteConfirm = signal<{ columnId: string; columnTitle: string } | null>(null);
  /** Task pending delete confirmation (null = no dialog). */
  showDeleteTaskConfirm = signal<Task | null>(null);
  dialogMode = signal<'create' | 'edit'>('create');
  editingTask = signal<Task | null>(null);
  /** When opening "Add task", default column for the new task. */
  defaultColumnId = signal<string>('todo');

  private allTasks = this.taskService.tasks;
  private columnDefs = this.columnService.columns;

  private filteredTasks = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const list = this.allTasks() ?? [];
    if (!query) return list;
    return list.filter((t) => t.title.toLowerCase().includes(query));
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

  onDrop(event: import('@angular/cdk/drag-drop').CdkDragDrop<Task[]>): void {
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
}
