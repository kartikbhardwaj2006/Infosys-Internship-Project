import {
  ColumnService,
  TaskService
} from "./chunk-6MKIPICL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-RI62GUOS.js";
import {
  AuthService,
  Component,
  Router,
  RouterLink,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-3JNIBAEP.js";

// src/app/components/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 31);
    \u0275\u0275element(2, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage(), " ");
  }
}
function LoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "path", 33)(2, "line", 34);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 27);
    \u0275\u0275element(1, "path", 35)(2, "circle", 36);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
    \u0275\u0275text(1, " Signing in\u2026 ");
  }
}
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  taskService = inject(TaskService);
  columnService = inject(ColumnService);
  router = inject(Router);
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading.set(true);
    this.errorMessage.set("");
    const { email, password } = this.form.value;
    const error = this.auth.login(email, password);
    this.isLoading.set(false);
    if (error) {
      this.errorMessage.set(error);
    } else {
      this.taskService.reloadForUser();
      this.columnService.reloadForUser();
      this.router.navigate(["/board"]);
    }
  }
  onGoogleLogin() {
    this.auth.mockGoogleLogin();
    this.taskService.reloadForUser();
    this.columnService.reloadForUser();
    this.router.navigate(["/board"]);
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 48, vars: 13, consts: [[1, "auth-page"], [1, "auth-brand"], [1, "auth-logo"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"], [1, "auth-title"], [1, "auth-tagline"], [1, "auth-card"], [1, "auth-card-title"], [1, "auth-card-sub"], ["role", "alert", 1, "auth-error"], ["type", "button", 1, "btn-google", 3, "click"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "google-icon"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], [1, "auth-divider"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "login-email", 1, "form-label"], ["id", "login-email", "type", "email", "formControlName", "email", "placeholder", "you@gmail.com", "autocomplete", "email", 1, "form-input"], [1, "field-error"], ["for", "login-password", 1, "form-label"], [1, "input-wrapper"], ["id", "login-password", "formControlName", "password", "placeholder", "Your password", "autocomplete", "current-password", 1, "form-input", 3, "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "auth-switch"], ["routerLink", "/signup", 1, "auth-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "icon"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "FlowBoard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Your personal Kanban, simplified.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h2", 8);
      \u0275\u0275text(11, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Sign in to your account");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, LoginComponent_Conditional_14_Template, 4, 1, "div", 10);
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_15_listener() {
        return ctx.onGoogleLogin();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 12);
      \u0275\u0275element(17, "path", 13)(18, "path", 14)(19, "path", 15)(20, "path", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Continue with Google ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 17)(23, "span");
      \u0275\u0275text(24, "or sign in with email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "form", 18);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_25_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(26, "div", 19)(27, "label", 20);
      \u0275\u0275text(28, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 21);
      \u0275\u0275conditionalCreate(30, LoginComponent_Conditional_30_Template, 2, 0, "p", 22)(31, LoginComponent_Conditional_31_Template, 2, 0, "p", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 19)(33, "label", 23);
      \u0275\u0275text(34, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275element(36, "input", 25);
      \u0275\u0275elementStart(37, "button", 26);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_37_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275conditionalCreate(38, LoginComponent_Conditional_38_Template, 3, 0, ":svg:svg", 27)(39, LoginComponent_Conditional_39_Template, 3, 0, ":svg:svg", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, LoginComponent_Conditional_40_Template, 2, 0, "p", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 28);
      \u0275\u0275conditionalCreate(42, LoginComponent_Conditional_42_Template, 2, 0)(43, LoginComponent_Conditional_43_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 29);
      \u0275\u0275text(45, " Don't have an account? ");
      \u0275\u0275elementStart(46, "a", 30);
      \u0275\u0275text(47, "Sign up");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_8_0;
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.errorMessage() ? 14 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("required")) ? 30 : ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("email")) ? 31 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("input-error", ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.touched));
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword() ? 38 : 39);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_8_0 = ctx.form.get("password")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx.form.get("password")) == null ? null : tmp_8_0.hasError("required")) ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 42 : 43);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8f0fe 50%,\n      #f5f0ff 100%);\n}\n.dark[_nghost-%COMP%]   .auth-page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 50%,\n      #0f172a 100%);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.auth-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0.25rem 0 0;\n}\n.dark[_nghost-%COMP%]   .auth-tagline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-tagline[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.dark[_nghost-%COMP%]   .auth-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.9);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.25rem;\n}\n.dark[_nghost-%COMP%]   .auth-card-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card-title[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.auth-card-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n.dark[_nghost-%COMP%]   .auth-card-sub[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card-sub[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.auth-success[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.dark[_nghost-%COMP%]   .auth-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n}\n.dark[_nghost-%COMP%]   .auth-success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-success[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.15);\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.btn-google[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 1rem;\n}\n.btn-google[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n.dark[_nghost-%COMP%]   .btn-google[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .btn-google[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-color: #334155;\n  color: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .btn-google[_ngcontent-%COMP%]:hover {\n  background: #273344;\n}\n.google-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  color: #94a3b8;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-divider[_ngcontent-%COMP%]::before, \n.auth-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e2e8f0;\n}\n.dark[_nghost-%COMP%]   .auth-divider[_ngcontent-%COMP%]::before, .dark   [_nghost-%COMP%]   .auth-divider[_ngcontent-%COMP%]::before, \n.dark[_nghost-%COMP%]   .auth-divider[_ngcontent-%COMP%]::after, .dark   [_nghost-%COMP%]   .auth-divider[_ngcontent-%COMP%]::after {\n  background: #334155;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.375rem;\n}\n.dark[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 0.625rem 2.75rem 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]    > .form-input[_ngcontent-%COMP%] {\n  padding-right: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.form-input.input-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.dark[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n.dark[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, .dark   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin: 0.375rem 0 0;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  color: #94a3b8;\n  background: none;\n  border: none;\n  padding: 0;\n  transition: color 0.15s;\n}\n.eye-btn[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .eye-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .eye-btn[_ngcontent-%COMP%]:hover {\n  color: #cbd5e1;\n}\n.eye-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.strength-meter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.dark[_nghost-%COMP%]   .strength-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .strength-bar[_ngcontent-%COMP%] {\n  background: #334155;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.3s ease, background-color 0.3s ease;\n  width: 0%;\n}\n.strength-fill.strength-weak[_ngcontent-%COMP%] {\n  width: 33%;\n  background: #ef4444;\n}\n.strength-fill.strength-medium[_ngcontent-%COMP%] {\n  width: 66%;\n  background: #f59e0b;\n}\n.strength-fill.strength-strong[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #22c55e;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-width: 44px;\n  text-align: right;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  letter-spacing: 0.01em;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #4f46e5);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 1.25rem 0 0;\n}\n.dark[_nghost-%COMP%]   .auth-switch[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-switch[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<div class="auth-page">\r
  <!-- Brand -->\r
  <div class="auth-brand">\r
    <div class="auth-logo">\r
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\r
        <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"/>\r
      </svg>\r
    </div>\r
    <h1 class="auth-title">FlowBoard</h1>\r
    <p class="auth-tagline">Your personal Kanban, simplified.</p>\r
  </div>\r
\r
  <!-- Card -->\r
  <div class="auth-card">\r
    <h2 class="auth-card-title">Welcome back</h2>\r
    <p class="auth-card-sub">Sign in to your account</p>\r
\r
    <!-- Error banner -->\r
    @if (errorMessage()) {\r
      <div class="auth-error" role="alert">\r
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">\r
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\r
        </svg>\r
        {{ errorMessage() }}\r
      </div>\r
    }\r
\r
    <!-- Google Login -->\r
    <button type="button" class="btn-google" (click)="onGoogleLogin()">\r
      <svg class="google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>\r
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>\r
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>\r
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>\r
      </svg>\r
      Continue with Google\r
    </button>\r
\r
    <div class="auth-divider">\r
      <span>or sign in with email</span>\r
    </div>\r
\r
    <!-- Email / Password form -->\r
    <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
      <div class="form-group">\r
        <label class="form-label" for="login-email">Email</label>\r
        <input\r
          id="login-email"\r
          type="email"\r
          formControlName="email"\r
          class="form-input"\r
          [class.input-error]="form.get('email')?.invalid && form.get('email')?.touched"\r
          placeholder="you@gmail.com"\r
          autocomplete="email"\r
        />\r
        @if (form.get('email')?.touched && form.get('email')?.hasError('required')) {\r
          <p class="field-error">Email is required.</p>\r
        } @else if (form.get('email')?.touched && form.get('email')?.hasError('email')) {\r
          <p class="field-error">Enter a valid email address.</p>\r
        }\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="form-label" for="login-password">Password</label>\r
        <div class="input-wrapper">\r
          <input\r
            id="login-password"\r
            [type]="showPassword() ? 'text' : 'password'"\r
            formControlName="password"\r
            class="form-input"\r
            [class.input-error]="form.get('password')?.invalid && form.get('password')?.touched"\r
            placeholder="Your password"\r
            autocomplete="current-password"\r
          />\r
          <button type="button" class="eye-btn" (click)="togglePassword()" [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'">\r
            @if (showPassword()) {\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>\r
            } @else {\r
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>\r
            }\r
          </button>\r
        </div>\r
        @if (form.get('password')?.touched && form.get('password')?.hasError('required')) {\r
          <p class="field-error">Password is required.</p>\r
        }\r
      </div>\r
\r
      <button type="submit" class="btn-primary" [disabled]="isLoading()">\r
        @if (isLoading()) {\r
          <span class="spinner"></span> Signing in\u2026\r
        } @else {\r
          Sign In\r
        }\r
      </button>\r
    </form>\r
\r
    <p class="auth-switch">\r
      Don't have an account? <a routerLink="/signup" class="auth-link">Sign up</a>\r
    </p>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/components/login/login.component.css */\n.auth-page {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8f0fe 50%,\n      #f5f0ff 100%);\n}\n:host-context(.dark) .auth-page {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 50%,\n      #0f172a 100%);\n}\n.auth-brand {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.auth-logo svg {\n  width: 28px;\n  height: 28px;\n}\n.auth-title {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.auth-tagline {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0.25rem 0 0;\n}\n:host-context(.dark) .auth-tagline {\n  color: #94a3b8;\n}\n.auth-card {\n  width: 100%;\n  max-width: 420px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n:host-context(.dark) .auth-card {\n  background: rgba(30, 41, 59, 0.9);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.25rem;\n}\n:host-context(.dark) .auth-card-title {\n  color: #f1f5f9;\n}\n.auth-card-sub {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n:host-context(.dark) .auth-card-sub {\n  color: #94a3b8;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-error .icon,\n.auth-success .icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n:host-context(.dark) .auth-error {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n}\n:host-context(.dark) .auth-success {\n  background: rgba(22, 163, 74, 0.15);\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.btn-google {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.625rem;\n  width: 100%;\n  padding: 0.625rem 1rem;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  background: white;\n  color: #374151;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-bottom: 1rem;\n}\n.btn-google:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  transform: translateY(-1px);\n}\n:host-context(.dark) .btn-google {\n  background: #1e293b;\n  border-color: #334155;\n  color: #e2e8f0;\n}\n:host-context(.dark) .btn-google:hover {\n  background: #273344;\n}\n.google-icon {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.auth-divider {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  color: #94a3b8;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-divider::before,\n.auth-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e2e8f0;\n}\n:host-context(.dark) .auth-divider::before,\n:host-context(.dark) .auth-divider::after {\n  background: #334155;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-label {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.375rem;\n}\n:host-context(.dark) .form-label {\n  color: #cbd5e1;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 0.625rem 2.75rem 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  box-sizing: border-box;\n}\n.form-group > .form-input {\n  padding-right: 0.875rem;\n}\n.form-input:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.form-input.input-error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n:host-context(.dark) .form-input {\n  background: #0f172a;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n:host-context(.dark) .form-input:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);\n}\n.field-error {\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin: 0.375rem 0 0;\n}\n.eye-btn {\n  position: absolute;\n  right: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  color: #94a3b8;\n  background: none;\n  border: none;\n  padding: 0;\n  transition: color 0.15s;\n}\n.eye-btn:hover {\n  color: #64748b;\n}\n:host-context(.dark) .eye-btn:hover {\n  color: #cbd5e1;\n}\n.eye-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.strength-meter {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n}\n.strength-bar {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n:host-context(.dark) .strength-bar {\n  background: #334155;\n}\n.strength-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.3s ease, background-color 0.3s ease;\n  width: 0%;\n}\n.strength-fill.strength-weak {\n  width: 33%;\n  background: #ef4444;\n}\n.strength-fill.strength-medium {\n  width: 66%;\n  background: #f59e0b;\n}\n.strength-fill.strength-strong {\n  width: 100%;\n  background: #22c55e;\n}\n.strength-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-width: 44px;\n  text-align: right;\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  letter-spacing: 0.01em;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #4f46e5);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-switch {\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 1.25rem 0 0;\n}\n:host-context(.dark) .auth-switch {\n  color: #94a3b8;\n}\n.auth-link {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/components/login/login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-U3I76LJY.js.map
