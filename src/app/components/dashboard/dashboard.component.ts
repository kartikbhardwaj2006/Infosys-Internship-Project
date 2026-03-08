import { Component, inject, computed } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { ColumnService } from '../../services/column.service';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    private taskService = inject(TaskService);
    private columnService = inject(ColumnService);
    private authService = inject(AuthService);
    private themeService = inject(ThemeService);
    private toast = inject(ToastService);
    private router = inject(Router);

    readonly currentUser = this.authService.currentUser;
    readonly theme = this.themeService.theme;

    /** All tasks for the current user (reactive). */
    readonly allTasks = this.taskService.tasks;

    /** All columns for the current user (reactive). */
    readonly columns = this.columnService.columns;

    /** Total task count. */
    readonly totalTasks = computed(() => this.allTasks().length);

    /** Per-column task counts as an array of { id, title, count } for the cards. */
    readonly columnStats = computed(() => {
        const tasks = this.allTasks();
        return this.columns().map((col) => ({
            id: col.id,
            title: col.title,
            count: tasks.filter((t) => t.columnId === col.id).length,
        }));
    });

    /** Convenience: stat for "To-Do" (first column or match by id/title). */
    readonly todoCount = computed(() => this.countByHeuristic(['todo', 'to-do', 'to do']));

    /** Convenience: stat for "In Progress". */
    readonly inProgressCount = computed(() => this.countByHeuristic(['in-progress', 'in progress', 'inprogress']));

    /** Convenience: stat for "Done". */
    readonly doneCount = computed(() => this.countByHeuristic(['done', 'finished', 'complete', 'completed']));

    private countByHeuristic(keywords: string[]): number {
        const tasks = this.allTasks();
        const col = this.columns().find((c) =>
            keywords.some((k) => c.id.toLowerCase().includes(k) || c.title.toLowerCase().includes(k))
        );
        if (!col) return 0;
        return tasks.filter((t) => t.columnId === col.id).length;
    }

    /** User display name: name, or email prefix, or 'User'. */
    readonly displayName = computed(() => {
        const u = this.currentUser();
        if (!u) return 'User';
        return u.name || u.email.split('@')[0];
    });

    /** Avatar initial. */
    readonly avatarInitial = computed(() => {
        const u = this.currentUser();
        if (!u) return '?';
        return (u.name || u.email)[0].toUpperCase();
    });

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
        this.toast.success('Signed out successfully.');
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
