/**
 * Task priority levels for the Kanban board.
 */
export type TaskPriority = 'High' | 'Medium' | 'Low';

/**
 * Task model - represents a single task card.
 * Uses columnId to belong to a column (dynamic columns).
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  dueDate?: string; // ISO date string, optional
  /** Id of the column this task belongs to. Replaces previous status-based placement. */
  columnId: string;
}

/**
 * Column definition for storage (id + title only; tasks are stored separately with columnId).
 */
export interface ColumnDefinition {
  id: string;
  title: string;
}

/**
 * Runtime column model with resolved tasks array (for board view).
 */
export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}
