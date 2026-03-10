import {
  ColumnService,
  TaskService
} from "./chunk-6MKIPICL.js";
import {
  ThemeService
} from "./chunk-AE7CYUM6.js";
import {
  ToastService
} from "./chunk-MS4JJGAZ.js";
import {
  AuthService,
  Component,
  Router,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-3JNIBAEP.js";

// src/app/components/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 38);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 39);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 41);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(3, " Sign Out ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatarInitial(), " ");
  }
}
function DashboardComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, " No tasks yet. ");
    \u0275\u0275elementStart(2, "a", 42);
    \u0275\u0275text(3, "Go to the board");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " to add some. ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_66_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 47);
    \u0275\u0275element(9, "div", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(col_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", col_r3.count, " / ", ctx_r1.totalTasks(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", ctx_r1.totalTasks() === 0 ? 0 : (col_r3.count / ctx_r1.totalTasks() * 100).toFixed(0), "%) ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.totalTasks() === 0 ? 0 : col_r3.count / ctx_r1.totalTasks() * 100, "%");
  }
}
function DashboardComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_66_For_2_Template, 10, 6, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.columnStats());
  }
}
var DashboardComponent = class _DashboardComponent {
  taskService = inject(TaskService);
  columnService = inject(ColumnService);
  authService = inject(AuthService);
  themeService = inject(ThemeService);
  toast = inject(ToastService);
  router = inject(Router);
  currentUser = this.authService.currentUser;
  theme = this.themeService.theme;
  /** All tasks for the current user (reactive). */
  allTasks = this.taskService.tasks;
  /** All columns for the current user (reactive). */
  columns = this.columnService.columns;
  /** Total task count. */
  totalTasks = computed(() => this.allTasks().length, ...ngDevMode ? [{ debugName: "totalTasks" }] : []);
  /** Per-column task counts as an array of { id, title, count } for the cards. */
  columnStats = computed(() => {
    const tasks = this.allTasks();
    return this.columns().map((col) => ({
      id: col.id,
      title: col.title,
      count: tasks.filter((t) => t.columnId === col.id).length
    }));
  }, ...ngDevMode ? [{ debugName: "columnStats" }] : []);
  /** Convenience: stat for "To-Do" (first column or match by id/title). */
  todoCount = computed(() => this.countByHeuristic(["todo", "to-do", "to do"]), ...ngDevMode ? [{ debugName: "todoCount" }] : []);
  /** Convenience: stat for "In Progress". */
  inProgressCount = computed(() => this.countByHeuristic(["in-progress", "in progress", "inprogress"]), ...ngDevMode ? [{ debugName: "inProgressCount" }] : []);
  /** Convenience: stat for "Done". */
  doneCount = computed(() => this.countByHeuristic(["done", "finished", "complete", "completed"]), ...ngDevMode ? [{ debugName: "doneCount" }] : []);
  countByHeuristic(keywords) {
    const tasks = this.allTasks();
    const col = this.columns().find((c) => keywords.some((k) => c.id.toLowerCase().includes(k) || c.title.toLowerCase().includes(k)));
    if (!col)
      return 0;
    return tasks.filter((t) => t.columnId === col.id).length;
  }
  /** User display name: name, or email prefix, or 'User'. */
  displayName = computed(() => {
    const u = this.currentUser();
    if (!u)
      return "User";
    return u.name || u.email.split("@")[0];
  }, ...ngDevMode ? [{ debugName: "displayName" }] : []);
  /** Avatar initial. */
  avatarInitial = computed(() => {
    const u = this.currentUser();
    if (!u)
      return "?";
    return (u.name || u.email)[0].toUpperCase();
  }, ...ngDevMode ? [{ debugName: "avatarInitial" }] : []);
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
    this.toast.success("Signed out successfully.");
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 72, vars: 8, consts: [[1, "flex", "flex-col", "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "transition-colors", "duration-200"], [1, "sticky", "top-0", "z-10", "bg-white/80", "dark:bg-gray-900/80", "backdrop-blur-md", "border-b", "border-gray-200", "dark:border-gray-700", "px-4", "py-3"], [1, "max-w-5xl", "mx-auto", "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-xl", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-bold", "shadow"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-gray-100"], [1, "flex", "items-center", "gap-1"], ["routerLink", "/board", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], ["routerLink", "/dashboard", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "bg-blue-50", "dark:bg-blue-900/30", "text-blue-700", "dark:text-blue-300", "transition-colors", "duration-150"], ["routerLink", "/profile", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], [1, "flex", "items-center", "gap-2"], ["type", "button", "aria-label", "Toggle theme", 1, "p-2", "rounded-lg", "text-gray-500", "dark:text-gray-400", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", "duration-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], [1, "flex-1", "px-4", "py-8", "max-w-5xl", "mx-auto", "w-full"], [1, "mb-8"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-gray-100"], [1, "text-blue-600", "dark:text-blue-400"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-1"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-10"], [1, "rounded-2xl", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "p-5", "flex", "flex-col", "gap-2", "hover:shadow-md", "transition-shadow", "duration-200"], [1, "w-10", "h-10", "rounded-xl", "bg-blue-50", "dark:bg-blue-900/30", "flex", "items-center", "justify-center", "text-blue-600", "dark:text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-gray-100"], [1, "text-xs", "font-medium", "text-gray-500", "dark:text-gray-400", "uppercase", "tracking-wide"], [1, "w-10", "h-10", "rounded-xl", "bg-amber-50", "dark:bg-amber-900/30", "flex", "items-center", "justify-center", "text-amber-600", "dark:text-amber-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "w-10", "h-10", "rounded-xl", "bg-purple-50", "dark:bg-purple-900/30", "flex", "items-center", "justify-center", "text-purple-600", "dark:text-purple-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "w-10", "h-10", "rounded-xl", "bg-emerald-50", "dark:bg-emerald-900/30", "flex", "items-center", "justify-center", "text-emerald-600", "dark:text-emerald-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "p-6"], [1, "text-base", "font-semibold", "text-gray-900", "dark:text-gray-100", "mb-4"], [1, "py-10", "text-center", "text-gray-400", "dark:text-gray-500", "text-sm"], [1, "space-y-4"], [1, "mt-6", "flex", "justify-center"], ["routerLink", "/board", 1, "inline-flex", "items-center", "gap-2", "px-6", "py-3", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "text-white", "text-sm", "font-semibold", "shadow-sm", "hover:shadow-md", "transition-all", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"], [1, "w-7", "h-7", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white/80", "dark:bg-gray-800", "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-red-50", "dark:hover:bg-red-900/20", "hover:text-red-600", "dark:hover:text-red-400", "hover:border-red-300", "dark:hover:border-red-800", "focus:outline-none", "focus:ring-2", "focus:ring-red-400", "focus:ring-offset-2", "transition-all", "duration-200", 3, "click"], ["routerLink", "/board", 1, "text-blue-600", "dark:text-blue-400", "hover:underline"], [1, "flex", "items-center", "justify-between", "mb-1"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "ml-1", "text-xs", "text-gray-400", "dark:text-gray-500"], [1, "h-2", "w-full", "rounded-full", "bg-gray-100", "dark:bg-gray-700", "overflow-hidden"], [1, "h-full", "rounded-full", "bg-gradient-to-r", "from-blue-400", "to-indigo-500", "transition-all", "duration-500"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, " FB ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, "FlowBoard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 6)(9, "a", 7);
      \u0275\u0275text(10, " Board ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 8);
      \u0275\u0275text(12, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 9);
      \u0275\u0275text(14, " Profile ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_16_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275conditionalCreate(17, DashboardComponent_Conditional_17_Template, 2, 0, ":svg:svg", 12)(18, DashboardComponent_Conditional_18_Template, 2, 0, ":svg:svg", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, DashboardComponent_Conditional_19_Template, 4, 1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "main", 13)(21, "div", 14)(22, "h2", 15);
      \u0275\u0275text(23, " Welcome back, ");
      \u0275\u0275elementStart(24, "span", 16);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " \u{1F44B} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 17);
      \u0275\u0275text(28, "Here's an overview of your current tasks.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 18)(30, "div", 19)(31, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 12);
      \u0275\u0275element(33, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(34, "p", 22);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 23);
      \u0275\u0275text(37, "Total Tasks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 19)(39, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 12);
      \u0275\u0275element(41, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "p", 22);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 23);
      \u0275\u0275text(45, "To Do");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 19)(47, "div", 26);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 12);
      \u0275\u0275element(49, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "p", 22);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 23);
      \u0275\u0275text(53, "In Progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 19)(55, "div", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 12);
      \u0275\u0275element(57, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "p", 22);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 23);
      \u0275\u0275text(61, "Done");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "div", 30)(63, "h3", 31);
      \u0275\u0275text(64, "Column Breakdown");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(65, DashboardComponent_Conditional_65_Template, 5, 0, "div", 32)(66, DashboardComponent_Conditional_66_Template, 3, 0, "div", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 34)(68, "a", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 36);
      \u0275\u0275element(70, "path", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, " Open Kanban Board ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.theme() === "light" ? 17 : 18);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentUser() ? 19 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.displayName());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalTasks());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.todoCount());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.inProgressCount());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.doneCount());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.totalTasks() === 0 ? 65 : 66);
    }
  }, dependencies: [RouterLink], styles: ["\n\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink], template: `<div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">\r
\r
    <!-- Header -->\r
    <header\r
        class="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 py-3">\r
        <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">\r
            <div class="flex items-center gap-3">\r
                <div\r
                    class="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow">\r
                    FB\r
                </div>\r
                <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">FlowBoard</h1>\r
            </div>\r
\r
            <!-- Nav links -->\r
            <nav class="flex items-center gap-1">\r
                <a routerLink="/board"\r
                    class="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-150">\r
                    Board\r
                </a>\r
                <a routerLink="/dashboard"\r
                    class="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 transition-colors duration-150">\r
                    Dashboard\r
                </a>\r
                <a routerLink="/profile"\r
                    class="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-150">\r
                    Profile\r
                </a>\r
            </nav>\r
\r
            <div class="flex items-center gap-2">\r
                <!-- Theme toggle -->\r
                <button type="button" (click)="toggleTheme()"\r
                    class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"\r
                    aria-label="Toggle theme">\r
                    @if (theme() === 'light') {\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />\r
                    </svg>\r
                    } @else {\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />\r
                    </svg>\r
                    }\r
                </button>\r
\r
                @if (currentUser()) {\r
                <!-- Avatar -->\r
                <div\r
                    class="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">\r
                    {{ avatarInitial() }}\r
                </div>\r
                <!-- Logout -->\r
                <button type="button" (click)="logout()"\r
                    class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all duration-200">\r
                    Sign Out\r
                </button>\r
                }\r
            </div>\r
        </div>\r
    </header>\r
\r
    <!-- Main content -->\r
    <main class="flex-1 px-4 py-8 max-w-5xl mx-auto w-full">\r
\r
        <!-- Welcome -->\r
        <div class="mb-8">\r
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">\r
                Welcome back, <span class="text-blue-600 dark:text-blue-400">{{ displayName() }}</span> \u{1F44B}\r
            </h2>\r
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Here's an overview of your current tasks.</p>\r
        </div>\r
\r
        <!-- Summary cards row -->\r
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">\r
\r
            <!-- Total Tasks -->\r
            <div\r
                class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">\r
                <div\r
                    class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />\r
                    </svg>\r
                </div>\r
                <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ totalTasks() }}</p>\r
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Total Tasks</p>\r
            </div>\r
\r
            <!-- To Do -->\r
            <div\r
                class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">\r
                <div\r
                    class="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />\r
                    </svg>\r
                </div>\r
                <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ todoCount() }}</p>\r
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">To Do</p>\r
            </div>\r
\r
            <!-- In Progress -->\r
            <div\r
                class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">\r
                <div\r
                    class="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />\r
                    </svg>\r
                </div>\r
                <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ inProgressCount() }}</p>\r
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">In Progress</p>\r
            </div>\r
\r
            <!-- Done -->\r
            <div\r
                class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm p-5 flex flex-col gap-2 hover:shadow-md transition-shadow duration-200">\r
                <div\r
                    class="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">\r
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"\r
                        stroke="currentColor">\r
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />\r
                    </svg>\r
                </div>\r
                <p class="text-3xl font-bold text-gray-900 dark:text-gray-100">{{ doneCount() }}</p>\r
                <p class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Done</p>\r
            </div>\r
        </div>\r
\r
        <!-- Per-column breakdown -->\r
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">\r
            <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">Column Breakdown</h3>\r
\r
            @if (totalTasks() === 0) {\r
            <div class="py-10 text-center text-gray-400 dark:text-gray-500 text-sm">\r
                No tasks yet. <a routerLink="/board" class="text-blue-600 dark:text-blue-400 hover:underline">Go to the\r
                    board</a> to add some.\r
            </div>\r
            } @else {\r
            <div class="space-y-4">\r
                @for (col of columnStats(); track col.id) {\r
                <div>\r
                    <div class="flex items-center justify-between mb-1">\r
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ col.title }}</span>\r
                        <span class="text-sm text-gray-500 dark:text-gray-400">\r
                            {{ col.count }} / {{ totalTasks() }}\r
                            <span class="ml-1 text-xs text-gray-400 dark:text-gray-500">\r
                                ({{ totalTasks() === 0 ? 0 : (col.count / totalTasks() * 100).toFixed(0) }}%)\r
                            </span>\r
                        </span>\r
                    </div>\r
                    <div class="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">\r
                        <div class="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500"\r
                            [style.width.%]="totalTasks() === 0 ? 0 : (col.count / totalTasks() * 100)">\r
                        </div>\r
                    </div>\r
                </div>\r
                }\r
            </div>\r
            }\r
        </div>\r
\r
        <!-- Quick action -->\r
        <div class="mt-6 flex justify-center">\r
            <a routerLink="/board"\r
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">\r
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"\r
                    stroke="currentColor">\r
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />\r
                </svg>\r
                Open Kanban Board\r
            </a>\r
        </div>\r
    </main>\r
</div>`, styles: ["/* src/app/components/dashboard/dashboard.component.css */\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/components/dashboard/dashboard.component.ts", lineNumber: 16 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-FYOKIBPA.js.map
