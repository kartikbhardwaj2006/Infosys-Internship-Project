import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messagesSignal = signal<ToastMessage[]>([]);
  readonly messages = this.messagesSignal.asReadonly();

  show(message: string, type: ToastType = 'info'): void {
    const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    this.messagesSignal.update((list) => [...list, { id, message, type }]);
    // Auto remove after 3 seconds
    setTimeout(() => this.dismiss(id), 3000);
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  info(message: string): void {
    this.show(message, 'info');
  }

  error(message: string): void {
    this.show(message, 'error');
  }

  dismiss(id: string): void {
    this.messagesSignal.update((list) => list.filter((m) => m.id !== id));
  }
}
