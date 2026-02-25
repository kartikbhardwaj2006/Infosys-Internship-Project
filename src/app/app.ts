import { Component } from '@angular/core';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [KanbanBoardComponent, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
