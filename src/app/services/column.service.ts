import { Injectable, signal, computed } from '@angular/core';
import { ColumnDefinition } from '../models/task.model';

const STORAGE_KEY = 'kartik_task_manager_columns';

/** Default columns when none are stored (backward compatibility). */
const DEFAULT_COLUMNS: ColumnDefinition[] = [
  { id: 'todo', title: 'To-Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  private columnsSignal = signal<ColumnDefinition[]>(this.loadFromStorage());

  /** Ordered list of column definitions (id, title). */
  readonly columns = this.columnsSignal.asReadonly();

  /** All column ids in order (for CDK connected drop lists). */
  readonly columnIds = computed(() => this.columnsSignal().map((c) => c.id));

  getColumnById(id: string): ColumnDefinition | undefined {
    return this.columnsSignal().find((c) => c.id === id);
  }

  /** Add a new column with unique id; appends to board and persists. */
  addColumn(title: string): ColumnDefinition {
    const id = this.generateColumnId();
    const column: ColumnDefinition = { id, title: title.trim() || 'Untitled' };
    this.columnsSignal.update((list) => [...list, column]);
    this.saveToStorage();
    return column;
  }

  /** Remove column by id. Caller must ensure it's not the last column and handle tasks. */
  deleteColumn(id: string): void {
    this.columnsSignal.update((list) => list.filter((c) => c.id !== id));
    this.saveToStorage();
  }

  /** Check if this is the only remaining column (deletion should be prevented). */
  isLastColumn(): boolean {
    return this.columnsSignal().length <= 1;
  }

  /** Reorder columns based on drag-and-drop indices and persist the new order. */
  setColumns(columns: ColumnDefinition[]): void {
    this.columnsSignal.set([...columns]);
    this.saveToStorage();
  }

  private generateColumnId(): string {
    return `col_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  private loadFromStorage(): ColumnDefinition[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [...DEFAULT_COLUMNS];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) return [...DEFAULT_COLUMNS];
      return parsed;
    } catch {
      return [...DEFAULT_COLUMNS];
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.columnsSignal()));
    } catch (e) {
      console.warn('Failed to save columns to localStorage', e);
    }
  }
}
