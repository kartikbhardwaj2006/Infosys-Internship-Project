import { Component, inject, signal, computed } from '@angular/core';
import {
    FormBuilder,
    Validators,
    ReactiveFormsModule,
    AbstractControl,
    ValidationErrors,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// ─── Gmail validator ──────────────────────────────────────────────────────────
function gmailValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = (control.value ?? '').toLowerCase().trim();
    if (!value) return null; // let required handle empty
    return value.endsWith('@gmail.com') ? null : { notGmail: true };
}

// ─── Password match validator ─────────────────────────────────────────────────
function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value ?? '';
    const confirm = group.get('confirmPassword')?.value ?? '';
    return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}

export type PasswordStrength = 'none' | 'weak' | 'medium' | 'strong';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
})
export class SignupComponent {
    private fb = inject(FormBuilder);
    private auth = inject(AuthService);
    private router = inject(Router);

    form = this.fb.group(
        {
            email: ['', [Validators.required, Validators.email, gmailValidator]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        },
        { validators: passwordMatchValidator }
    );

    errorMessage = signal('');
    successMessage = signal('');
    showPassword = signal(false);
    showConfirm = signal(false);

    // ─── Password strength ────────────────────────────────────────────────────
    // Dedicated signal so computed() tracks it as a real reactive dependency.
    _pwValue = signal('');

    passwordStrength = computed<PasswordStrength>(() => {
        const pw = this._pwValue();
        if (!pw) return 'none';
        if (pw.length < 6) return 'weak';
        const hasLetter = /[a-zA-Z]/.test(pw);
        const hasDigit = /\d/.test(pw);
        if (
            pw.length >= 8 &&
            /[A-Z]/.test(pw) &&
            /[a-z]/.test(pw) &&
            hasDigit &&
            /[^a-zA-Z\d]/.test(pw)
        ) {
            return 'strong';
        }
        if (pw.length >= 6 && hasLetter && hasDigit) return 'medium';
        return 'weak';
    });

    strengthLabel = computed(() => {
        const s = this.passwordStrength();
        return s === 'none' ? '' : s.charAt(0).toUpperCase() + s.slice(1);
    });

    onPasswordInput(event: Event): void {
        this._pwValue.set((event.target as HTMLInputElement).value);
    }


    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.errorMessage.set('');
        this.successMessage.set('');

        const { email, password } = this.form.value;
        const error = this.auth.signup(email!, password!);

        if (error) {
            this.errorMessage.set(error);
        } else {
            this.successMessage.set('Account created! Redirecting to login...');
            setTimeout(() => this.router.navigate(['/login']), 1500);
        }
    }

    togglePassword(): void {
        this.showPassword.update((v) => !v);
    }

    toggleConfirm(): void {
        this.showConfirm.update((v) => !v);
    }
}
