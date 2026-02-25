import { Component, inject } from '@angular/core';
import { ToastService, ToastMessage } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  protected toastService = inject(ToastService);
  protected readonly messages = this.toastService.messages;

  getTypeClasses(msg: ToastMessage): string {
    switch (msg.type) {
      case 'success':
        return 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200';
      default:
        return 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200';
    }
  }

  dismiss(id: string): void {
    this.toastService.dismiss(id);
  }
}
