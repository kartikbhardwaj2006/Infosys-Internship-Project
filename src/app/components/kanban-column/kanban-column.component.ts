import { Component, input, output } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CdkDropList, CdkDrag, TaskCardComponent],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.css',
})
export class KanbanColumnComponent {
  columnId = input.required<string>();
  title = input.required<string>();
  tasks = input.required<Task[]>();
  /** All column ids for CDK drop list connection. */
  connectedListIds = input<string[]>([]);
  /** When false, hide the delete column button (e.g. last column). */
  canDelete = input<boolean>(true);

  dropped = output<CdkDragDrop<Task[]>>();
  editTask = output<Task>();
  deleteTask = output<Task>();
  deleteColumn = output<void>();
}
