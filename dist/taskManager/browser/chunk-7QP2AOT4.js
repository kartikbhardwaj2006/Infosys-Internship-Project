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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-3JNIBAEP.js";

// src/app/components/signup/signup.component.ts
function SignupComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29);
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
function SignupComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage(), " ");
  }
}
function SignupComponent_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignupComponent_Conditional_21_Conditional_0_Template, 2, 0, "p", 22)(1, SignupComponent_Conditional_21_Conditional_1_Template, 2, 0, "p", 22);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("email")) == null ? null : tmp_1_0.hasError("required")) ? 0 : ((tmp_1_0 = ctx_r0.form.get("email")) == null ? null : tmp_1_0.hasError("email")) ? 1 : -1);
  }
}
function SignupComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 31)(2, "line", 32);
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 33)(2, "circle", 34);
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 35);
    \u0275\u0275element(2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("Password strength: ", ctx_r0.strengthLabel()));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("strength-weak", ctx_r0.passwordStrength() === "weak")("strength-medium", ctx_r0.passwordStrength() === "medium")("strength-strong", ctx_r0.passwordStrength() === "strong");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-red-500", ctx_r0.passwordStrength() === "weak")("text-yellow-500", ctx_r0.passwordStrength() === "medium")("text-green-500", ctx_r0.passwordStrength() === "strong");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.strengthLabel());
  }
}
function SignupComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 31)(2, "line", 32);
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 33)(2, "circle", 34);
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Please confirm your password.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function SignupComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SignupComponent_Conditional_40_Conditional_0_Template, 2, 0, "p", 22)(1, SignupComponent_Conditional_40_Conditional_1_Template, 2, 0, "p", 22);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r0.form.get("confirmPassword")) == null ? null : tmp_1_0.hasError("required")) ? 0 : (ctx_r0.form.errors == null ? null : ctx_r0.form.errors["mismatch"]) ? 1 : -1);
  }
}
function passwordMatchValidator(group) {
  const pw = group.get("password")?.value ?? "";
  const confirm = group.get("confirmPassword")?.value ?? "";
  return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}
var SignupComponent = class _SignupComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  taskService = inject(TaskService);
  columnService = inject(ColumnService);
  router = inject(Router);
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  }, { validators: passwordMatchValidator });
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  successMessage = signal("", ...ngDevMode ? [{ debugName: "successMessage" }] : []);
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  showConfirm = signal(false, ...ngDevMode ? [{ debugName: "showConfirm" }] : []);
  // ─── Password strength ────────────────────────────────────────────────────
  // Dedicated signal so computed() tracks it as a real reactive dependency.
  _pwValue = signal("", ...ngDevMode ? [{ debugName: "_pwValue" }] : []);
  passwordStrength = computed(() => {
    const pw = this._pwValue();
    if (!pw)
      return "none";
    if (pw.length < 6)
      return "weak";
    const hasLetter = /[a-zA-Z]/.test(pw);
    const hasDigit = /\d/.test(pw);
    if (pw.length >= 8 && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && hasDigit && /[^a-zA-Z\d]/.test(pw)) {
      return "strong";
    }
    if (pw.length >= 6 && hasLetter && hasDigit)
      return "medium";
    return "weak";
  }, ...ngDevMode ? [{ debugName: "passwordStrength" }] : []);
  strengthLabel = computed(() => {
    const s = this.passwordStrength();
    return s === "none" ? "" : s.charAt(0).toUpperCase() + s.slice(1);
  }, ...ngDevMode ? [{ debugName: "strengthLabel" }] : []);
  onPasswordInput(event) {
    this._pwValue.set(event.target.value);
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.errorMessage.set("");
    this.successMessage.set("");
    const { email, password } = this.form.value;
    const error = this.auth.signup(email, password);
    if (error) {
      this.errorMessage.set(error);
    } else {
      this.taskService.reloadForUser();
      this.columnService.reloadForUser();
      this.router.navigate(["/board"]);
    }
  }
  togglePassword() {
    this.showPassword.update((v) => !v);
  }
  toggleConfirm() {
    this.showConfirm.update((v) => !v);
  }
  static \u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 47, vars: 19, consts: [[1, "auth-page"], [1, "auth-brand"], [1, "auth-logo"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z"], [1, "auth-title"], [1, "auth-tagline"], [1, "auth-card"], [1, "auth-card-title"], [1, "auth-card-sub"], ["role", "alert", 1, "auth-error"], ["role", "status", 1, "auth-success"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "signup-email", 1, "form-label"], ["id", "signup-email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email", 1, "form-input"], ["for", "signup-password", 1, "form-label"], [1, "input-wrapper"], ["id", "signup-password", "formControlName", "password", "placeholder", "Create a strong password", "autocomplete", "new-password", 1, "form-input", 3, "input", "type"], ["type", "button", 1, "eye-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "strength-meter", 3, "aria-label"], [1, "field-error"], ["for", "signup-confirm", 1, "form-label"], ["id", "signup-confirm", "formControlName", "confirmPassword", "placeholder", "Repeat your password", "autocomplete", "new-password", 1, "form-input", 3, "type"], ["type", "submit", 1, "btn-primary"], [1, "auth-switch"], ["routerLink", "/login", 1, "auth-link"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "icon"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], [1, "strength-bar"], [1, "strength-fill"], [1, "strength-label"]], template: function SignupComponent_Template(rf, ctx) {
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
      \u0275\u0275text(8, "Create your free account today.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "h2", 8);
      \u0275\u0275text(11, "Create account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Start managing tasks in seconds");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(14, SignupComponent_Conditional_14_Template, 4, 1, "div", 10);
      \u0275\u0275conditionalCreate(15, SignupComponent_Conditional_15_Template, 4, 1, "div", 11);
      \u0275\u0275elementStart(16, "form", 12);
      \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "div", 13)(18, "label", 14);
      \u0275\u0275text(19, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 15);
      \u0275\u0275conditionalCreate(21, SignupComponent_Conditional_21_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "label", 16);
      \u0275\u0275text(24, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17)(26, "input", 18);
      \u0275\u0275listener("input", function SignupComponent_Template_input_input_26_listener($event) {
        return ctx.onPasswordInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 19);
      \u0275\u0275listener("click", function SignupComponent_Template_button_click_27_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275conditionalCreate(28, SignupComponent_Conditional_28_Template, 3, 0, ":svg:svg", 20)(29, SignupComponent_Conditional_29_Template, 3, 0, ":svg:svg", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(30, SignupComponent_Conditional_30_Template, 5, 15, "div", 21);
      \u0275\u0275conditionalCreate(31, SignupComponent_Conditional_31_Template, 2, 0, "p", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 13)(33, "label", 23);
      \u0275\u0275text(34, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 17);
      \u0275\u0275element(36, "input", 24);
      \u0275\u0275elementStart(37, "button", 19);
      \u0275\u0275listener("click", function SignupComponent_Template_button_click_37_listener() {
        return ctx.toggleConfirm();
      });
      \u0275\u0275conditionalCreate(38, SignupComponent_Conditional_38_Template, 3, 0, ":svg:svg", 20)(39, SignupComponent_Conditional_39_Template, 3, 0, ":svg:svg", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(40, SignupComponent_Conditional_40_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 25);
      \u0275\u0275text(42, " Create Account ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p", 26);
      \u0275\u0275text(44, " Already have an account? ");
      \u0275\u0275elementStart(45, "a", 27);
      \u0275\u0275text(46, "Sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_11_0;
      let tmp_15_0;
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.errorMessage() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.successMessage() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.touched) ? 21 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275property("type", ctx.showPassword() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showPassword() ? 28 : 29);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_9_0 = ctx.form.get("password")) == null ? null : tmp_9_0.value) ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx.form.get("password")) == null ? null : tmp_10_0.hasError("required")) ? 31 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ((ctx.form.errors == null ? null : ctx.form.errors["mismatch"]) || ((tmp_11_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_11_0.hasError("required"))) && ((tmp_11_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_11_0.touched));
      \u0275\u0275property("type", ctx.showConfirm() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showConfirm() ? "Hide password" : "Show password");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showConfirm() ? 38 : 39);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(((tmp_15_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_15_0.touched) ? 40 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8f0fe 50%,\n      #f5f0ff 100%);\n}\n.dark[_nghost-%COMP%]   .auth-page[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-page[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 50%,\n      #0f172a 100%);\n}\n.auth-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.auth-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.auth-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.auth-tagline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0.25rem 0 0;\n}\n.dark[_nghost-%COMP%]   .auth-tagline[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-tagline[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n.dark[_nghost-%COMP%]   .auth-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card[_ngcontent-%COMP%] {\n  background: rgba(30, 41, 59, 0.9);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-card-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.25rem;\n}\n.dark[_nghost-%COMP%]   .auth-card-title[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card-title[_ngcontent-%COMP%] {\n  color: #f1f5f9;\n}\n.auth-card-sub[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n.dark[_nghost-%COMP%]   .auth-card-sub[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-card-sub[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-error[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.auth-success[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.dark[_nghost-%COMP%]   .auth-error[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-error[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n}\n.dark[_nghost-%COMP%]   .auth-success[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-success[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.15);\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.375rem;\n}\n.dark[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 0.625rem 2.75rem 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]    > .form-input[_ngcontent-%COMP%] {\n  padding-right: 0.875rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.form-input.input-error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.dark[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  background: #0f172a;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n.dark[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus, .dark   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin: 0.375rem 0 0;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  color: #94a3b8;\n  background: none;\n  border: none;\n  padding: 0;\n  transition: color 0.15s;\n}\n.eye-btn[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n.dark[_nghost-%COMP%]   .eye-btn[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .eye-btn[_ngcontent-%COMP%]:hover {\n  color: #cbd5e1;\n}\n.eye-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.strength-meter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.dark[_nghost-%COMP%]   .strength-bar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .strength-bar[_ngcontent-%COMP%] {\n  background: #334155;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.3s ease, background-color 0.3s ease;\n  width: 0%;\n}\n.strength-fill.strength-weak[_ngcontent-%COMP%] {\n  width: 33%;\n  background: #ef4444;\n}\n.strength-fill.strength-medium[_ngcontent-%COMP%] {\n  width: 66%;\n  background: #f59e0b;\n}\n.strength-fill.strength-strong[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #22c55e;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-width: 44px;\n  text-align: right;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  letter-spacing: 0.01em;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #4f46e5);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 1.25rem 0 0;\n}\n.dark[_nghost-%COMP%]   .auth-switch[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-switch[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ selector: "app-signup", standalone: true, imports: [ReactiveFormsModule, RouterLink], template: `<div class="auth-page">\r
    <!-- Brand -->\r
    <div class="auth-brand">\r
        <div class="auth-logo">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\r
                <path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" />\r
            </svg>\r
        </div>\r
        <h1 class="auth-title">FlowBoard</h1>\r
        <p class="auth-tagline">Create your free account today.</p>\r
    </div>\r
\r
    <!-- Card -->\r
    <div class="auth-card">\r
        <h2 class="auth-card-title">Create account</h2>\r
        <p class="auth-card-sub">Start managing tasks in seconds</p>\r
\r
        <!-- Error banner -->\r
        @if (errorMessage()) {\r
        <div class="auth-error" role="alert">\r
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">\r
                <path fill-rule="evenodd"\r
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"\r
                    clip-rule="evenodd" />\r
            </svg>\r
            {{ errorMessage() }}\r
        </div>\r
        }\r
\r
        <!-- Success banner -->\r
        @if (successMessage()) {\r
        <div class="auth-success" role="status">\r
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">\r
                <path fill-rule="evenodd"\r
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\r
                    clip-rule="evenodd" />\r
            </svg>\r
            {{ successMessage() }}\r
        </div>\r
        }\r
\r
        <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>\r
            <!-- Email -->\r
            <div class="form-group">\r
                <label class="form-label" for="signup-email">Email Address</label>\r
                <input id="signup-email" type="email" formControlName="email" class="form-input"\r
                    [class.input-error]="form.get('email')?.invalid && form.get('email')?.touched"\r
                    placeholder="you@example.com" autocomplete="email" />\r
                @if (form.get('email')?.touched) {\r
                @if (form.get('email')?.hasError('required')) {\r
                <p class="field-error">Email is required.</p>\r
                } @else if (form.get('email')?.hasError('email')) {\r
                <p class="field-error">Enter a valid email address.</p>\r
                }\r
                }\r
            </div>\r
\r
            <!-- Password -->\r
            <div class="form-group">\r
                <label class="form-label" for="signup-password">Password</label>\r
                <div class="input-wrapper">\r
                    <input id="signup-password" [type]="showPassword() ? 'text' : 'password'" formControlName="password"\r
                        class="form-input"\r
                        [class.input-error]="form.get('password')?.invalid && form.get('password')?.touched"\r
                        placeholder="Create a strong password" autocomplete="new-password"\r
                        (input)="onPasswordInput($event)" />\r
                    <button type="button" class="eye-btn" (click)="togglePassword()"\r
                        [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'">\r
                        @if (showPassword()) {\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2">\r
                            <path\r
                                d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />\r
                            <line x1="1" y1="1" x2="23" y2="23" />\r
                        </svg>\r
                        } @else {\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2">\r
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\r
                            <circle cx="12" cy="12" r="3" />\r
                        </svg>\r
                        }\r
                    </button>\r
                </div>\r
\r
                <!-- Strength meter -->\r
                @if (form.get('password')?.value) {\r
                <div class="strength-meter" aria-label="Password strength: {{ strengthLabel() }}">\r
                    <div class="strength-bar">\r
                        <div class="strength-fill" [class.strength-weak]="passwordStrength() === 'weak'"\r
                            [class.strength-medium]="passwordStrength() === 'medium'"\r
                            [class.strength-strong]="passwordStrength() === 'strong'"></div>\r
                    </div>\r
                    <span class="strength-label" [class.text-red-500]="passwordStrength() === 'weak'"\r
                        [class.text-yellow-500]="passwordStrength() === 'medium'"\r
                        [class.text-green-500]="passwordStrength() === 'strong'">{{ strengthLabel() }}</span>\r
                </div>\r
                }\r
                @if (form.get('password')?.touched && form.get('password')?.hasError('required')) {\r
                <p class="field-error">Password is required.</p>\r
                }\r
            </div>\r
\r
            <!-- Confirm Password -->\r
            <div class="form-group">\r
                <label class="form-label" for="signup-confirm">Confirm Password</label>\r
                <div class="input-wrapper">\r
                    <input id="signup-confirm" [type]="showConfirm() ? 'text' : 'password'"\r
                        formControlName="confirmPassword" class="form-input"\r
                        [class.input-error]="(form.errors?.['mismatch'] || form.get('confirmPassword')?.hasError('required')) && form.get('confirmPassword')?.touched"\r
                        placeholder="Repeat your password" autocomplete="new-password" />\r
                    <button type="button" class="eye-btn" (click)="toggleConfirm()"\r
                        [attr.aria-label]="showConfirm() ? 'Hide password' : 'Show password'">\r
                        @if (showConfirm()) {\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2">\r
                            <path\r
                                d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />\r
                            <line x1="1" y1="1" x2="23" y2="23" />\r
                        </svg>\r
                        } @else {\r
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
                            stroke-width="2">\r
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />\r
                            <circle cx="12" cy="12" r="3" />\r
                        </svg>\r
                        }\r
                    </button>\r
                </div>\r
                @if (form.get('confirmPassword')?.touched) {\r
                @if (form.get('confirmPassword')?.hasError('required')) {\r
                <p class="field-error">Please confirm your password.</p>\r
                } @else if (form.errors?.['mismatch']) {\r
                <p class="field-error">Passwords do not match.</p>\r
                }\r
                }\r
            </div>\r
\r
            <button type="submit" class="btn-primary">\r
                Create Account\r
            </button>\r
        </form>\r
\r
        <p class="auth-switch">\r
            Already have an account? <a routerLink="/login" class="auth-link">Sign in</a>\r
        </p>\r
    </div>\r
</div>`, styles: ["/* src/app/components/signup/signup.component.css */\n.auth-page {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #e8f0fe 50%,\n      #f5f0ff 100%);\n}\n:host-context(.dark) .auth-page {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 50%,\n      #0f172a 100%);\n}\n.auth-brand {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  margin-bottom: 0.75rem;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.auth-logo svg {\n  width: 28px;\n  height: 28px;\n}\n.auth-title {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.5px;\n  margin: 0;\n}\n.auth-tagline {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0.25rem 0 0;\n}\n:host-context(.dark) .auth-tagline {\n  color: #94a3b8;\n}\n.auth-card {\n  width: 100%;\n  max-width: 420px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  border-radius: 20px;\n  padding: 2rem;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.04);\n}\n:host-context(.dark) .auth-card {\n  background: rgba(30, 41, 59, 0.9);\n  border-color: rgba(255, 255, 255, 0.08);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);\n}\n.auth-card-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 0.25rem;\n}\n:host-context(.dark) .auth-card-title {\n  color: #f1f5f9;\n}\n.auth-card-sub {\n  font-size: 0.875rem;\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n:host-context(.dark) .auth-card-sub {\n  color: #94a3b8;\n}\n.auth-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #16a34a;\n  border-radius: 10px;\n  padding: 0.75rem 1rem;\n  font-size: 0.8125rem;\n  margin-bottom: 1rem;\n}\n.auth-error .icon,\n.auth-success .icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n:host-context(.dark) .auth-error {\n  background: rgba(220, 38, 38, 0.15);\n  border-color: rgba(220, 38, 38, 0.3);\n}\n:host-context(.dark) .auth-success {\n  background: rgba(22, 163, 74, 0.15);\n  border-color: rgba(22, 163, 74, 0.3);\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-label {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.375rem;\n}\n:host-context(.dark) .form-label {\n  color: #cbd5e1;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.form-input {\n  width: 100%;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 0.625rem 2.75rem 0.625rem 0.875rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  box-sizing: border-box;\n}\n.form-group > .form-input {\n  padding-right: 0.875rem;\n}\n.form-input:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.form-input.input-error {\n  border-color: #ef4444;\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n:host-context(.dark) .form-input {\n  background: #0f172a;\n  border-color: #334155;\n  color: #f1f5f9;\n}\n:host-context(.dark) .form-input:focus {\n  border-color: #818cf8;\n  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);\n}\n.field-error {\n  font-size: 0.75rem;\n  color: #dc2626;\n  margin: 0.375rem 0 0;\n}\n.eye-btn {\n  position: absolute;\n  right: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n  color: #94a3b8;\n  background: none;\n  border: none;\n  padding: 0;\n  transition: color 0.15s;\n}\n.eye-btn:hover {\n  color: #64748b;\n}\n:host-context(.dark) .eye-btn:hover {\n  color: #cbd5e1;\n}\n.eye-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.strength-meter {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-top: 0.5rem;\n}\n.strength-bar {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n:host-context(.dark) .strength-bar {\n  background: #334155;\n}\n.strength-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.3s ease, background-color 0.3s ease;\n  width: 0%;\n}\n.strength-fill.strength-weak {\n  width: 33%;\n  background: #ef4444;\n}\n.strength-fill.strength-medium {\n  width: 66%;\n  background: #f59e0b;\n}\n.strength-fill.strength-strong {\n  width: 100%;\n  background: #22c55e;\n}\n.strength-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-width: 44px;\n  text-align: right;\n}\n.btn-primary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #6366f1);\n  color: white;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  margin-top: 0.5rem;\n  letter-spacing: 0.01em;\n}\n.btn-primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #4f46e5);\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.auth-switch {\n  text-align: center;\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin: 1.25rem 0 0;\n}\n:host-context(.dark) .auth-switch {\n  color: #94a3b8;\n}\n.auth-link {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.auth-link:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=signup.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/components/signup/signup.component.ts", lineNumber: 30 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=chunk-7QP2AOT4.js.map
