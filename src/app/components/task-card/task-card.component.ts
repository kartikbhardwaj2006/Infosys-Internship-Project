import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Task, TaskPriority } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  task = input.required<Task>();
  onEdit = output<Task>();
  onDelete = output<Task>();

  /** Priority badge color classes */
  getPriorityClasses(priority: TaskPriority): string {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200';
      case 'Low':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  }

  /** Priority left border (High=red, Medium=yellow, Low=green) */
  getPriorityBorderClasses(priority: TaskPriority): string {
    switch (priority) {
      case 'High':
        return 'border-l-red-500';
      case 'Medium':
        return 'border-l-yellow-500';
      case 'Low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-300 dark:border-l-gray-600';
    }
  }

  formatDueDate(isoDate?: string): string {
    if (!isoDate) return '';
    const d = new Date(isoDate);
    return d.toLocaleDateString(undefined, { dateStyle: 'short' });
  }

  isOverdue(isoDate?: string): boolean {
    if (!isoDate) return false;
    const due = new Date(isoDate);
    const today = new Date();
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return due.getTime() < today.getTime();
  }

  handleEdit(): void {
    this.onEdit.emit(this.task());
  }

  handleDelete(event: Event): void {
    event.stopPropagation();
    this.onDelete.emit(this.task());
  }
}
