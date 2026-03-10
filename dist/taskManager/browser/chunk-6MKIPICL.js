import {
  AuthService,
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-3JNIBAEP.js";

// src/app/services/task.service.ts
var LEGACY_KEY = "kartik_task_manager_tasks";
var TaskService = class _TaskService {
  auth = inject(AuthService);
  get storageKey() {
    const user = this.auth.currentUser();
    return user ? `flowboard_tasks_${user.id}` : LEGACY_KEY;
  }
  tasksSignal = signal(this.loadFromStorage(), ...ngDevMode ? [{ debugName: "tasksSignal" }] : []);
  tasks = this.tasksSignal.asReadonly();
  // ─── Reload signal data from the current user's storage key ───────────────
  reloadForUser() {
    this.tasksSignal.set(this.loadFromStorage());
  }
  getTaskById(id) {
    return this.tasksSignal().find((t) => t.id === id);
  }
  /** Get tasks in a given column (by column id). */
  getTasksByColumnId(columnId) {
    return this.tasksSignal().filter((t) => t.columnId === columnId);
  }
  addTask(task) {
    const newTask = __spreadProps(__spreadValues({}, task), {
      id: this.generateId()
    });
    this.tasksSignal.update((list) => [...list, newTask]);
    this.saveToStorage();
    return newTask;
  }
  updateTask(id, updates) {
    this.tasksSignal.update((list) => list.map((t) => t.id === id ? __spreadValues(__spreadValues({}, t), updates) : t));
    this.saveToStorage();
  }
  /** Move all tasks from one column to another (e.g. when deleting a column). */
  reassignTasksFromColumn(fromColumnId, toColumnId) {
    this.tasksSignal.update((list) => list.map((t) => t.columnId === fromColumnId ? __spreadProps(__spreadValues({}, t), { columnId: toColumnId }) : t));
    this.saveToStorage();
  }
  deleteTask(id) {
    this.tasksSignal.update((list) => list.filter((t) => t.id !== id));
    this.saveToStorage();
  }
  clearTasksByColumnId(columnId) {
    this.tasksSignal.update((list) => list.filter((t) => t.columnId !== columnId));
    this.saveToStorage();
  }
  /** Replace full task list (used after drag-drop reorder). */
  setTasks(tasks) {
    this.tasksSignal.set([...tasks]);
    this.saveToStorage();
  }
  generateId() {
    return `task_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw)
        return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed))
        return [];
      return parsed.map((t) => {
        if (t.columnId)
          return t;
        const columnId = t.status ?? "todo";
        return __spreadProps(__spreadValues({}, t), { columnId });
      });
    } catch {
      return [];
    }
  }
  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasksSignal()));
    } catch (e) {
      console.warn("Failed to save tasks to localStorage", e);
    }
  }
  static \u0275fac = function TaskService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TaskService, factory: _TaskService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/services/column.service.ts
var LEGACY_KEY2 = "kartik_task_manager_columns";
var DEFAULT_COLUMNS = [
  { id: "todo", title: "To-Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "done", title: "Done" }
];
var ColumnService = class _ColumnService {
  auth = inject(AuthService);
  get storageKey() {
    const user = this.auth.currentUser();
    return user ? `flowboard_columns_${user.id}` : LEGACY_KEY2;
  }
  columnsSignal = signal(this.loadFromStorage(), ...ngDevMode ? [{ debugName: "columnsSignal" }] : []);
  /** Ordered list of column definitions (id, title). */
  columns = this.columnsSignal.asReadonly();
  /** All column ids in order (for CDK connected drop lists). */
  columnIds = computed(() => this.columnsSignal().map((c) => c.id), ...ngDevMode ? [{ debugName: "columnIds" }] : []);
  // ─── Reload signal data from the current user's storage key ───────────────
  reloadForUser() {
    this.columnsSignal.set(this.loadFromStorage());
  }
  getColumnById(id) {
    return this.columnsSignal().find((c) => c.id === id);
  }
  /** Add a new column with unique id; appends to board and persists. */
  addColumn(title) {
    const id = this.generateColumnId();
    const column = { id, title: title.trim() || "Untitled" };
    this.columnsSignal.update((list) => [...list, column]);
    this.saveToStorage();
    return column;
  }
  /** Remove column by id. Caller must ensure it's not the last column and handle tasks. */
  deleteColumn(id) {
    this.columnsSignal.update((list) => list.filter((c) => c.id !== id));
    this.saveToStorage();
  }
  /** Check if this is the only remaining column (deletion should be prevented). */
  isLastColumn() {
    return this.columnsSignal().length <= 1;
  }
  /** Reorder columns based on drag-and-drop indices and persist the new order. */
  setColumns(columns) {
    this.columnsSignal.set([...columns]);
    this.saveToStorage();
  }
  generateColumnId() {
    return `col_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }
  loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw)
        return [...DEFAULT_COLUMNS];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0)
        return [...DEFAULT_COLUMNS];
      return parsed;
    } catch {
      return [...DEFAULT_COLUMNS];
    }
  }
  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.columnsSignal()));
    } catch (e) {
      console.warn("Failed to save columns to localStorage", e);
    }
  }
  static \u0275fac = function ColumnService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColumnService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ColumnService, factory: _ColumnService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  TaskService,
  ColumnService
};
//# sourceMappingURL=chunk-6MKIPICL.js.map
