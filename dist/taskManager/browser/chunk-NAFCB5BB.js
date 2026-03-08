import {
  Injectable,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-XGUUYFSI.js";

// src/app/services/theme.service.ts
var STORAGE_KEY = "kartik_task_manager_theme";
var ThemeService = class _ThemeService {
  /** Current theme; default is light. Restored from LocalStorage on init. */
  theme = signal(this.loadStoredTheme(), ...ngDevMode ? [{ debugName: "theme" }] : []);
  constructor() {
    effect(() => {
      this.applyTheme(this.theme());
    });
  }
  toggleTheme() {
    this.theme.update((current) => current === "light" ? "dark" : "light");
    this.persistTheme(this.theme());
  }
  setTheme(theme) {
    this.theme.set(theme);
    this.persistTheme(theme);
  }
  applyTheme(theme) {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }
  loadStoredTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light")
        return stored;
    } catch {
    }
    return "light";
  }
  persistTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn("Failed to persist theme", e);
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-NAFCB5BB.js.map
