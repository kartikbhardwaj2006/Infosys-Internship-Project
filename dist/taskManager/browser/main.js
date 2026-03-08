import {
  ToastService
} from "./chunk-E33ZDMZZ.js";
import {
  AuthService,
  Component,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  provideBrowserGlobalErrorListeners,
  provideRouter,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XGUUYFSI.js";

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.currentUser()) {
    return true;
  }
  return router.createUrlTree(["/login"]);
};

// src/app/app.routes.ts
var routes = [
  {
    path: "login",
    loadComponent: () => import("./chunk-PMDVSVW6.js").then((m) => m.LoginComponent)
  },
  {
    path: "signup",
    loadComponent: () => import("./chunk-FOAI7V7L.js").then((m) => m.SignupComponent)
  },
  {
    path: "board",
    loadComponent: () => import("./chunk-4E2TQJYK.js").then((m) => m.KanbanBoardComponent),
    canActivate: [authGuard]
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-7GRNM5FK.js").then((m) => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: "profile",
    loadComponent: () => import("./chunk-YAKOAPGA.js").then((m) => m.ProfileComponent),
    canActivate: [authGuard]
  },
  { path: "", redirectTo: "board", pathMatch: "full" },
  { path: "**", redirectTo: "board" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

// src/app/components/toast/toast.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ToastComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 4);
    \u0275\u0275domListener("click", function ToastComponent_For_2_Template_button_click_3_listener() {
      const msg_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(msg_r2.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(4, "svg", 5);
    \u0275\u0275domElement(5, "path", 6);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const msg_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.getTypeClasses(msg_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r2.message);
  }
}
var ToastComponent = class _ToastComponent {
  toastService = inject(ToastService);
  messages = this.toastService.messages;
  getTypeClasses(msg) {
    switch (msg.type) {
      case "success":
        return "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200";
      case "error":
        return "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200";
      default:
        return "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200";
    }
  }
  dismiss(id) {
    this.toastService.dismiss(id);
  }
  static \u0275fac = function ToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastComponent, selectors: [["app-toast"]], decls: 3, vars: 0, consts: [[1, "fixed", "top-6", "right-4", "z-[100]", "flex", "flex-col", "gap-2", "max-w-sm"], [1, "rounded-xl", "border", "shadow-sm", "px-4", "py-3", "flex", "items-center", "justify-between", "gap-3", "animate-in", 3, "class"], [1, "rounded-xl", "border", "shadow-sm", "px-4", "py-3", "flex", "items-center", "justify-between", "gap-3", "animate-in"], [1, "text-sm", "font-medium"], ["type", "button", "aria-label", "Dismiss", 1, "shrink-0", "p-1", "rounded-md", "opacity-70", "hover:opacity-100", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastComponent_For_2_Template, 6, 3, "div", 1, _forTrack0);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.messages());
    }
  }, styles: ["\n\n@keyframes _ngcontent-%COMP%_animate-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animate-in 0.2s ease-out;\n}\n/*# sourceMappingURL=toast.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{ selector: "app-toast", standalone: true, imports: [], template: '<div class="fixed top-6 right-4 z-[100] flex flex-col gap-2 max-w-sm">\r\n  @for (msg of messages(); track msg.id) {\r\n    <div\r\n      class="rounded-xl border shadow-sm px-4 py-3 flex items-center justify-between gap-3 animate-in"\r\n      [class]="getTypeClasses(msg)"\r\n    >\r\n      <span class="text-sm font-medium">{{ msg.message }}</span>\r\n      <button\r\n        type="button"\r\n        (click)="dismiss(msg.id)"\r\n        class="shrink-0 p-1 rounded-md opacity-70 hover:opacity-100"\r\n        aria-label="Dismiss"\r\n      >\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/components/toast/toast.component.css */\n@keyframes animate-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-in {\n  animation: animate-in 0.2s ease-out;\n}\n/*# sourceMappingURL=toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastComponent, { className: "ToastComponent", filePath: "src/app/components/toast/toast.component.ts", lineNumber: 11 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "min-h-screen", "h-screen", "flex", "flex-col", "bg-gray-50", "dark:bg-gray-900", "transition-colors", "duration-200", "overflow-hidden"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "app-toast");
    }
  }, dependencies: [RouterOutlet, ToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, ToastComponent], template: '<!-- Full-viewport dark-aware shell \u2014 wraps every route -->\r\n<div\r\n  class="min-h-screen h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden">\r\n  <router-outlet />\r\n</div>\r\n<app-toast />' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
