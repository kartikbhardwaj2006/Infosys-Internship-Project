import { Component, input, output, signal, effect, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskPriority } from '../../models/task.model';
import { Column } from '../../models/task.model';

export type DialogMode = 'create' | 'edit';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css',
})
export class TaskDialogComponent {
  task = input<Task | null>(null);
  mode = input<DialogMode>('create');
  /** Default column for new task when opened from a column. */
  initialColumnId = input<string>('todo');
  /** Columns for the "Column" dropdown (id + title). */
  columnOptions = input<Column[]>([]);

  saved = output<Task>();
  cancelled = output<void>();

  protected readonly priorities: TaskPriority[] = ['High', 'Medium', 'Low'];

  protected title = signal('');
  protected description = signal('');
  protected priority = signal<TaskPriority>('Medium');
  protected dueDate = signal('');
  protected columnId = signal<string>('todo');

  constructor() {
    effect(() => {
      const t = this.task();
      const initColId = this.initialColumnId();
      const cols = this.columnOptions();
      if (t) {
        this.title.set(t.title);
        this.description.set(t.description);
        this.priority.set(t.priority);
        this.dueDate.set(t.dueDate ?? '');
        this.columnId.set(t.columnId);
      } else {
        this.title.set('');
        this.description.set('');
        this.priority.set('Medium');
        this.dueDate.set('');
        // Use initial column if it exists in options, else first column
        const validId = cols.some((c) => c.id === initColId) ? initColId : cols[0]?.id ?? initColId;
        this.columnId.set(validId);
      }
    });
  }

  protected onSubmit(): void {
    const title = this.title().trim();
    if (!title) return;

    if (this.mode() === 'edit' && this.task()) {
      this.saved.emit({
        ...this.task()!,
        title,
        description: this.description().trim(),
        priority: this.priority(),
        dueDate: this.dueDate().trim() || undefined,
        columnId: this.columnId(),
      });
    } else {
      this.saved.emit({
        id: '',
        title,
        description: this.description().trim(),
        priority: this.priority(),
        dueDate: this.dueDate().trim() || undefined,
        columnId: this.columnId(),
      } as Task);
    }
  }

  protected onCancel(): void {
    this.cancelled.emit();
  }

  /** Close dialog on Escape key for better keyboard UX. */
  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.onCancel();
  }
}
