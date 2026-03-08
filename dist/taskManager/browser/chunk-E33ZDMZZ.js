import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-XGUUYFSI.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  messagesSignal = signal([], ...ngDevMode ? [{ debugName: "messagesSignal" }] : []);
  messages = this.messagesSignal.asReadonly();
  show(message, type = "info") {
    const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    this.messagesSignal.update((list) => [...list, { id, message, type }]);
    setTimeout(() => this.dismiss(id), 3e3);
  }
  success(message) {
    this.show(message, "success");
  }
  info(message) {
    this.show(message, "info");
  }
  error(message) {
    this.show(message, "error");
  }
  dismiss(id) {
    this.messagesSignal.update((list) => list.filter((m) => m.id !== id));
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-E33ZDMZZ.js.map
