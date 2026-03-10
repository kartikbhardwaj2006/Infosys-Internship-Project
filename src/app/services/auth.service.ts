import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

// ─── LocalStorage keys ────────────────────────────────────────────────────────
const USERS_KEY = 'flowboard_users';
const SESSION_KEY = 'flowboard_current_user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _currentUser = signal<User | null>(this.loadSession());

    /** Read-only signal for the currently logged-in user. */
    readonly currentUser = this._currentUser.asReadonly();

    // ─── Public API ───────────────────────────────────────────────────────────

    /**
     * STEP 2 & 3 — Login validation with normalized comparison + safe empty-list handling.
     * Returns null on success, error message string on failure.
     */
    login(email: string, password: string): string | null {
        // STEP 1 — Read users array from LocalStorage safely (STEP 3: empty-safe)
        const users = this.getAllUsers();

        // STEP 6 — Temporary debug logs (remove after confirming fix)
        console.debug('[AuthService] login() — users in LocalStorage:', users);
        console.debug('[AuthService] login() — email input:', email);

        // STEP 2 — Normalize email: trim whitespace + lowercase
        const normalizedEmail = email.trim().toLowerCase();

        // STEP 2 — Compare with stored email (already normalized at signup time)
        const user = users.find(
            (u) => u.email.trim().toLowerCase() === normalizedEmail && u.password === password
        );

        // STEP 6 — Log match result
        console.debug('[AuthService] login() — matched user:', user ?? 'none');

        if (!user) return 'Invalid email or password.';

        // STEP 5 — Persist current user session in LocalStorage + update signal
        this.startSession(user);
        return null;
    }

    /**
     * STEP 4 — Signup: create unique user id, push into array, save to LocalStorage.
     * Also auto-logs the new user in (STEP 5) so they land on the board immediately.
     * Returns null on success, error message string on failure.
     */
    signup(email: string, password: string): string | null {
        // STEP 1 — Read existing users safely
        const users = this.getAllUsers();

        // STEP 2 — Normalize email before storing
        const normalizedEmail = email.trim().toLowerCase();

        const exists = users.some((u) => u.email.trim().toLowerCase() === normalizedEmail);
        if (exists) return 'An account with this email already exists.';

        // STEP 4 — Build new user with unique id
        const newUser: User = {
            id: `user_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            email: normalizedEmail,
            password,
        };

        // STEP 4 — Push and persist
        users.push(newUser);
        this.saveAllUsers(users);

        // STEP 5 — Auto-login: start session immediately after signup
        this.startSession(newUser);
        return null;
    }

    /**
     * Clear session only (preserves task/column data in LocalStorage).
     */
    logout(): void {
        try {
            localStorage.removeItem(SESSION_KEY);
        } catch {
            // ignore — storage may be unavailable
        }
        this._currentUser.set(null);
    }

    /**
     * Update the currently logged-in user's profile fields (name, bio).
     * Persists changes to both the users list and the active session.
     */
    updateUser(updates: Partial<Pick<User, 'name' | 'bio'>>): void {
        const current = this._currentUser();
        if (!current) return;
        const updated: User = { ...current, ...updates };
        // Update in user registry
        const users = this.getAllUsers().map((u) =>
            u.id === current.id ? updated : u
        );
        this.saveAllUsers(users);
        // Update current session
        try {
            localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
        } catch {
            // ignore
        }
        this._currentUser.set(updated);
    }

    /**
     * Mock Google login — generates a fake @gmail.com account and logs in.
     */
    mockGoogleLogin(): void {
        const email = `user_${Date.now()}@gmail.com`;
        const password = `google_${Math.random().toString(36).slice(2, 10)}`;
        const users = this.getAllUsers();
        let user = users.find((u) => u.email === email);
        if (!user) {
            user = {
                id: `user_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
                email,
                password,
            };
            users.push(user);
            this.saveAllUsers(users);
        }
        this.startSession(user);
    }

    // ─── Private Helpers ──────────────────────────────────────────────────────

    /**
     * STEP 5 — Persist user session to LocalStorage and update the reactive signal.
     */
    private startSession(user: User): void {
        try {
            localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        } catch {
            // ignore — storage may be unavailable
        }
        this._currentUser.set(user);
    }

    /**
     * STEP 1 & 3 — Read users from LocalStorage.
     * Returns an empty array if storage is empty or data is corrupt (never throws).
     */
    private getAllUsers(): User[] {
        try {
            const raw = localStorage.getItem(USERS_KEY);
            if (!raw) return [];                           // STEP 3: empty-safe
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];   // STEP 3: corrupt-safe
        } catch {
            return [];
        }
    }

    /**
     * STEP 4 — Overwrite the users array in LocalStorage.
     */
    private saveAllUsers(users: User[]): void {
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        } catch (e) {
            console.warn('[AuthService] Failed to save users to LocalStorage', e);
        }
    }

    /**
     * STEP 5 — Restore session from LocalStorage on app init.
     */
    private loadSession(): User | null {
        try {
            const raw = localStorage.getItem(SESSION_KEY);
            if (!raw) return null;
            return JSON.parse(raw) as User;
        } catch {
            return null;
        }
    }
}
