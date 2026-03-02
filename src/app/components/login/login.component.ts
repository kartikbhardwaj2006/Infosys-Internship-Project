import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';
import { ColumnService } from '../../services/column.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private taskService = inject(TaskService);
    private columnService = inject(ColumnService);
    private router = inject(Router);

    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
    });

    errorMessage = signal('');
    isLoading = signal(false);
    showPassword = signal(false);

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.isLoading.set(true);
        this.errorMessage.set('');

        const { email, password } = this.form.value;
        const error = this.auth.login(email!, password!);
        this.isLoading.set(false);

        if (error) {
            this.errorMessage.set(error);
        } else {
            // Reload per-user data after login
            this.taskService.reloadForUser();
            this.columnService.reloadForUser();
            this.router.navigate(['/board']);
        }
    }

    onGoogleLogin(): void {
        this.auth.mockGoogleLogin();
        this.taskService.reloadForUser();
        this.columnService.reloadForUser();
        this.router.navigate(['/board']);
    }

    togglePassword(): void {
        this.showPassword.update((v) => !v);
    }
}
