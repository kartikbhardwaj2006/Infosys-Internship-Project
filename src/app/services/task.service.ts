import { Injectable, signal, inject } from '@angular/core';
import { Task } from '../models/task.model';
import { AuthService } from './auth.service';

const LEGACY_KEY = 'kartik_task_manager_tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private auth = inject(AuthService);

  private get storageKey(): string {
    const user = this.auth.currentUser();
    return user ? `flowboard_tasks_${user.id}` : LEGACY_KEY;
  }

  private tasksSignal = signal<Task[]>(this.loadFromStorage());

  readonly tasks = this.tasksSignal.asReadonly();

  // ─── Reload signal data from the current user's storage key ───────────────
  reloadForUser(): void {
    this.tasksSignal.set(this.loadFromStorage());
  }

  getTaskById(id: string): Task | undefined {
    return this.tasksSignal().find((t) => t.id === id);
  }

  /** Get tasks in a given column (by column id). */
  getTasksByColumnId(columnId: string): Task[] {
    return this.tasksSignal().filter((t) => t.columnId === columnId);
  }

  addTask(task: Omit<Task, 'id'>): Task {
    const newTask: Task = {
      ...task,
      id: this.generateId(),
    };
    this.tasksSignal.update((list) => [...list, newTask]);
    this.saveToStorage();
    return newTask;
  }

  updateTask(id: string, updates: Partial<Task>): void {
    this.tasksSignal.update((list) =>
      list.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
    this.saveToStorage();
  }

  /** Move all tasks from one column to another (e.g. when deleting a column). */
  reassignTasksFromColumn(fromColumnId: string, toColumnId: string): void {
    this.tasksSignal.update((list) =>
      list.map((t) =>
        t.columnId === fromColumnId ? { ...t, columnId: toColumnId } : t
      )
    );
    this.saveToStorage();
  }

  deleteTask(id: string): void {
    this.tasksSignal.update((list) => list.filter((t) => t.id !== id));
    this.saveToStorage();
  }

  clearTasksByColumnId(columnId: string): void {
    this.tasksSignal.update((list) => list.filter((t) => t.columnId !== columnId));
    this.saveToStorage();
  }

  /** Replace full task list (used after drag-drop reorder). */
  setTasks(tasks: Task[]): void {
    this.tasksSignal.set([...tasks]);
    this.saveToStorage();
  }

  private generateId(): string {
    return `task_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  private loadFromStorage(): Task[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // Migrate old tasks: if they have status but no columnId, set columnId = status
      return parsed.map((t: Task & { status?: string }) => {
        if (t.columnId) return t as Task;
        const columnId = (t as unknown as { status?: string }).status ?? 'todo';
        return { ...t, columnId } as Task;
      });
    } catch {
      return [];
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasksSignal()));
    } catch (e) {
      console.warn('Failed to save tasks to localStorage', e);
    }
  }
}
