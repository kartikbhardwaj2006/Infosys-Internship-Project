import { Injectable, signal, effect } from '@angular/core';

const STORAGE_KEY = 'kartik_task_manager_theme';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** Current theme; default is light. Restored from LocalStorage on init. */
  readonly theme = signal<Theme>(this.loadStoredTheme());

  constructor() {
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  toggleTheme(): void {
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    this.persistTheme(this.theme());
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.persistTheme(theme);
  }

  private applyTheme(theme: Theme): void {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  private loadStoredTheme(): Theme {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore
    }
    return 'light';
  }

  private persistTheme(theme: Theme): void {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Failed to persist theme', e);
    }
  }
}
