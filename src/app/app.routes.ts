import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () =>
            import('./components/login/login.component').then((m) => m.LoginComponent),
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./components/signup/signup.component').then((m) => m.SignupComponent),
    },
    {
        path: 'board',
        loadComponent: () =>
            import('./components/kanban-board/kanban-board.component').then(
                (m) => m.KanbanBoardComponent
            ),
        canActivate: [authGuard],
    },
    { path: '', redirectTo: 'board', pathMatch: 'full' },
    { path: '**', redirectTo: 'board' },
];
