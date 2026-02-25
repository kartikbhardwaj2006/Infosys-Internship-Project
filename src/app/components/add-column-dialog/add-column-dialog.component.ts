import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-column-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-column-dialog.component.html',
  styleUrl: './add-column-dialog.component.css',
})
export class AddColumnDialogComponent {
  columnTitle = signal('');

  saved = output<string>();
  cancelled = output<void>();

  onSubmit(): void {
    const title = this.columnTitle().trim();
    if (title) {
      this.saved.emit(title);
      this.columnTitle.set('');
    }
  }

  onCancel(): void {
    this.columnTitle.set('');
    this.cancelled.emit();
  }
}
