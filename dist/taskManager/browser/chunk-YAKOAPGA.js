import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-ZCCPRT6D.js";
import {
  ThemeService
} from "./chunk-NAFCB5BB.js";
import {
  ToastService
} from "./chunk-E33ZDMZZ.js";
import {
  AuthService,
  Component,
  Router,
  RouterLink,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-XGUUYFSI.js";

// src/app/components/profile/profile.component.ts
function ProfileComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 12);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
var ProfileComponent = class _ProfileComponent {
  authService = inject(AuthService);
  themeService = inject(ThemeService);
  toast = inject(ToastService);
  router = inject(Router);
  currentUser = this.authService.currentUser;
  theme = this.themeService.theme;
  /** Editable form fields, pre-filled from current user. */
  name = signal(this.authService.currentUser()?.name ?? "", ...ngDevMode ? [{ debugName: "name" }] : []);
  bio = signal(this.authService.currentUser()?.bio ?? "", ...ngDevMode ? [{ debugName: "bio" }] : []);
  /** Read-only email (used for login; changing it would break auth). */
  email = computed(() => this.currentUser()?.email ?? "", ...ngDevMode ? [{ debugName: "email" }] : []);
  /** Avatar initial derived from name or email. */
  avatarInitial = computed(() => {
    const u = this.currentUser();
    if (!u)
      return "?";
    return (u.name || u.email)[0].toUpperCase();
  }, ...ngDevMode ? [{ debugName: "avatarInitial" }] : []);
  saveProfile() {
    this.authService.updateUser({
      name: this.name().trim(),
      bio: this.bio().trim()
    });
    this.toast.success("Profile updated successfully!");
  }
  cancel() {
    this.router.navigate(["/board"]);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
    this.toast.success("Signed out successfully.");
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 53, vars: 6, consts: [[1, "flex", "flex-col", "min-h-screen", "bg-gray-50", "dark:bg-gray-900", "transition-colors", "duration-200"], [1, "sticky", "top-0", "z-10", "bg-white/80", "dark:bg-gray-900/80", "backdrop-blur-md", "border-b", "border-gray-200", "dark:border-gray-700", "px-4", "py-3"], [1, "max-w-2xl", "mx-auto", "flex", "items-center", "justify-between", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-xl", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-sm", "font-bold", "shadow"], [1, "text-xl", "font-bold", "text-gray-900", "dark:text-gray-100"], [1, "flex", "items-center", "gap-1"], ["routerLink", "/board", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], ["routerLink", "/dashboard", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], ["routerLink", "/profile", 1, "px-3", "py-1.5", "rounded-lg", "text-sm", "font-medium", "bg-blue-50", "dark:bg-blue-900/30", "text-blue-700", "dark:text-blue-300", "transition-colors", "duration-150"], [1, "flex", "items-center", "gap-2"], ["type", "button", "aria-label", "Toggle theme", 1, "p-2", "rounded-lg", "text-gray-500", "dark:text-gray-400", "hover:bg-gray-100", "dark:hover:bg-gray-700", "transition-colors", "duration-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white/80", "dark:bg-gray-800", "px-3", "py-1.5", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-red-50", "dark:hover:bg-red-900/20", "hover:text-red-600", "dark:hover:text-red-400", "hover:border-red-300", "dark:hover:border-red-800", "transition-all", "duration-200", 3, "click"], [1, "flex-1", "px-4", "py-10", "max-w-2xl", "mx-auto", "w-full"], [1, "flex", "flex-col", "items-center", "gap-3", "mb-8"], [1, "w-20", "h-20", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-3xl", "font-bold", "shadow-lg"], [1, "text-center"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "mt-0.5"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "p-6"], [1, "space-y-5"], ["for", "profile-name", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1.5"], ["id", "profile-name", "type", "text", "placeholder", "Enter your name", 1, "w-full", "rounded-xl", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2.5", "text-sm", "text-gray-900", "dark:text-gray-100", "placeholder-gray-400", "dark:placeholder-gray-500", "shadow-sm", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "focus:outline-none", "transition-shadow", "duration-200", 3, "ngModelChange", "ngModel"], ["for", "profile-email", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1.5"], [1, "text-xs", "text-gray-400", "dark:text-gray-500", "font-normal"], ["id", "profile-email", "type", "email", "disabled", "", 1, "w-full", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50", "dark:bg-gray-800", "px-4", "py-2.5", "text-sm", "text-gray-500", "dark:text-gray-400", "shadow-sm", "cursor-not-allowed", 3, "value"], ["for", "profile-bio", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1.5"], ["id", "profile-bio", "placeholder", "A short description about yourself...", "rows", "3", 1, "w-full", "rounded-xl", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2.5", "text-sm", "text-gray-900", "dark:text-gray-100", "placeholder-gray-400", "dark:placeholder-gray-500", "shadow-sm", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "focus:outline-none", "resize-none", "transition-shadow", "duration-200", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3", "pt-2"], ["type", "button", 1, "flex-1", "rounded-xl", "bg-blue-600", "hover:bg-blue-700", "px-4", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "hover:shadow-md", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", "transition-all", "duration-200", 3, "click"], ["type", "button", 1, "rounded-xl", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", "transition-all", "duration-200", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"]], template: function ProfileComponent_Template(rf, ctx) {
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
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_16_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275conditionalCreate(17, ProfileComponent_Conditional_17_Template, 2, 0, ":svg:svg", 12)(18, ProfileComponent_Conditional_18_Template, 2, 0, ":svg:svg", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_19_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(20, " Sign Out ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "main", 14)(22, "div", 15)(23, "div", 16);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "h2", 5);
      \u0275\u0275text(27, "Edit Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "p", 18);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 19)(31, "div", 20)(32, "div")(33, "label", 21);
      \u0275\u0275text(34, " Display Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 22);
      \u0275\u0275listener("ngModelChange", function ProfileComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.name.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div")(37, "label", 23);
      \u0275\u0275text(38, " Email ");
      \u0275\u0275elementStart(39, "span", 24);
      \u0275\u0275text(40, "(cannot be changed)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div")(43, "label", 26);
      \u0275\u0275text(44, " Bio ");
      \u0275\u0275elementStart(45, "span", 24);
      \u0275\u0275text(46, "(optional)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "textarea", 27);
      \u0275\u0275listener("ngModelChange", function ProfileComponent_Template_textarea_ngModelChange_47_listener($event) {
        return ctx.bio.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 28)(49, "button", 29);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_49_listener() {
        return ctx.saveProfile();
      });
      \u0275\u0275text(50, " Save Changes ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "button", 30);
      \u0275\u0275listener("click", function ProfileComponent_Template_button_click_51_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(52, " Cancel ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275conditional(ctx.theme() === "light" ? 17 : 18);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.avatarInitial(), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.email());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.name());
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.email());
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.bio());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n/*# sourceMappingURL=profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [FormsModule, RouterLink], template: `<div class="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">\r
\r
    <!-- Header -->\r
    <header\r
        class="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-4 py-3">\r
        <div class="max-w-2xl mx-auto flex items-center justify-between gap-4">\r
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
                    class="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-150">\r
                    Dashboard\r
                </a>\r
                <a routerLink="/profile"\r
                    class="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 transition-colors duration-150">\r
                    Profile\r
                </a>\r
            </nav>\r
\r
            <div class="flex items-center gap-2">\r
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
                <button type="button" (click)="logout()"\r
                    class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-800 transition-all duration-200">\r
                    Sign Out\r
                </button>\r
            </div>\r
        </div>\r
    </header>\r
\r
    <!-- Main content -->\r
    <main class="flex-1 px-4 py-10 max-w-2xl mx-auto w-full">\r
\r
        <!-- Avatar + title -->\r
        <div class="flex flex-col items-center gap-3 mb-8">\r
            <div\r
                class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">\r
                {{ avatarInitial() }}\r
            </div>\r
            <div class="text-center">\r
                <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100">Edit Profile</h2>\r
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{{ email() }}</p>\r
            </div>\r
        </div>\r
\r
        <!-- Form card -->\r
        <div class="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">\r
            <div class="space-y-5">\r
\r
                <!-- Name -->\r
                <div>\r
                    <label for="profile-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">\r
                        Display Name\r
                    </label>\r
                    <input id="profile-name" type="text" [ngModel]="name()" (ngModelChange)="name.set($event)"\r
                        placeholder="Enter your name"\r
                        class="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-shadow duration-200" />\r
                </div>\r
\r
                <!-- Email (read-only) -->\r
                <div>\r
                    <label for="profile-email"\r
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">\r
                        Email <span class="text-xs text-gray-400 dark:text-gray-500 font-normal">(cannot be\r
                            changed)</span>\r
                    </label>\r
                    <input id="profile-email" type="email" [value]="email()" disabled\r
                        class="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-500 dark:text-gray-400 shadow-sm cursor-not-allowed" />\r
                </div>\r
\r
                <!-- Bio -->\r
                <div>\r
                    <label for="profile-bio" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">\r
                        Bio <span class="text-xs text-gray-400 dark:text-gray-500 font-normal">(optional)</span>\r
                    </label>\r
                    <textarea id="profile-bio" [ngModel]="bio()" (ngModelChange)="bio.set($event)"\r
                        placeholder="A short description about yourself..." rows="3"\r
                        class="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none resize-none transition-shadow duration-200"></textarea>\r
                </div>\r
\r
                <!-- Actions -->\r
                <div class="flex gap-3 pt-2">\r
                    <button type="button" (click)="saveProfile()"\r
                        class="flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200">\r
                        Save Changes\r
                    </button>\r
                    <button type="button" (click)="cancel()"\r
                        class="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200">\r
                        Cancel\r
                    </button>\r
                </div>\r
            </div>\r
        </div>\r
    </main>\r
</div>`, styles: ["/* src/app/components/profile/profile.component.css */\n/*# sourceMappingURL=profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/components/profile/profile.component.ts", lineNumber: 16 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-YAKOAPGA.js.map
