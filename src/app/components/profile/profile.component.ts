import { Component, inject, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { ToastService } from '../../services/toast.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [FormsModule, RouterLink],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
})
export class ProfileComponent {
    private authService = inject(AuthService);
    private themeService = inject(ThemeService);
    private toast = inject(ToastService);
    private router = inject(Router);

    readonly currentUser = this.authService.currentUser;
    readonly theme = this.themeService.theme;

    /** Editable form fields, pre-filled from current user. */
    name = signal(this.authService.currentUser()?.name ?? '');
    bio = signal(this.authService.currentUser()?.bio ?? '');

    /** Read-only email (used for login; changing it would break auth). */
    readonly email = computed(() => this.currentUser()?.email ?? '');

    /** Avatar initial derived from name or email. */
    readonly avatarInitial = computed(() => {
        const u = this.currentUser();
        if (!u) return '?';
        return (u.name || u.email)[0].toUpperCase();
    });

    saveProfile(): void {
        this.authService.updateUser({
            name: this.name().trim(),
            bio: this.bio().trim(),
        });
        this.toast.success('Profile updated successfully!');
    }

    cancel(): void {
        this.router.navigate(['/board']);
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
        this.toast.success('Signed out successfully.');
    }
}
