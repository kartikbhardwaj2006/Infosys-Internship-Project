import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

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
     * Attempt login. Returns null on success, error message string on failure.
     */
    login(email: string, password: string): string | null {
        const users = this.getAllUsers();
        const user = users.find(
            (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
        if (!user) return 'Invalid email or password.';
        this.startSession(user);
        return null;
    }

    /**
     * Register a new user. Returns null on success, error message string on failure.
     */
    signup(email: string, password: string): string | null {
        const users = this.getAllUsers();
        const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
        if (exists) return 'An account with this email already exists.';
        const newUser: User = {
            id: `user_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            email: email.toLowerCase().trim(),
            password,
        };
        users.push(newUser);
        this.saveAllUsers(users);
        return null;
    }

    /**
     * Clear session only (preserves task/column data in localStorage).
     */
    logout(): void {
        try {
            localStorage.removeItem(SESSION_KEY);
        } catch {
            // ignore
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

    private startSession(user: User): void {
        try {
            localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        } catch {
            // ignore
        }
        this._currentUser.set(user);
    }

    private getAllUsers(): User[] {
        try {
            const raw = localStorage.getItem(USERS_KEY);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    private saveAllUsers(users: User[]): void {
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
        } catch (e) {
            console.warn('Failed to save users', e);
        }
    }

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
