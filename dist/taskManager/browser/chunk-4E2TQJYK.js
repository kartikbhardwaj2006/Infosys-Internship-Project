import {
  ColumnService,
  TaskService
} from "./chunk-NAVESERO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-ZCCPRT6D.js";
import {
  ThemeService
} from "./chunk-NAFCB5BB.js";
import {
  ToastService
} from "./chunk-E33ZDMZZ.js";
import {
  APP_ID,
  ApplicationRef,
  AuthService,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgClass,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Router,
  RouterLink,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  computed,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  input,
  interval,
  isObservable,
  isPlatformBrowser,
  map,
  merge,
  numberAttribute,
  of,
  output,
  pairwise,
  setClassMetadata,
  shareReplay,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-XGUUYFSI.js";

// node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}

// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
  _appRef;
  _injector = inject(Injector);
  _environmentInjector = inject(EnvironmentInjector);
  load(loader) {
    const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
    let data = appsWithLoaders.get(appRef);
    if (!data) {
      data = {
        loaders: /* @__PURE__ */ new Set(),
        refs: []
      };
      appsWithLoaders.set(appRef, data);
      appRef.onDestroy(() => {
        appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
        appsWithLoaders.delete(appRef);
      });
    }
    if (!data.loaders.has(loader)) {
      data.loaders.add(loader);
      data.refs.push(createComponent(loader, {
        environmentInjector: this._environmentInjector
      }));
    }
  }
  static \u0275fac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __CdkPrivateStyleLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __CdkPrivateStyleLoader,
    factory: __CdkPrivateStyleLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_platform-chunk.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  _platformId = inject(PLATFORM_ID);
  isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
  EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
  TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
  BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
  WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
  IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
  FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
  ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
  SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  constructor() {
  }
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_directionality-chunk.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: () => inject(DOCUMENT)
});
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  get value() {
    return this.valueSignal();
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  change = new EventEmitter();
  constructor() {
    const _document = inject(DIR_DOCUMENT, {
      optional: true
    });
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Directionality_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Directionality)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Directionality,
    factory: _Directionality.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir = class _Dir {
  _isInitialized = false;
  _rawDir = "";
  change = new EventEmitter();
  get dir() {
    return this.valueSignal();
  }
  set dir(value) {
    const previousValue = this.valueSignal();
    this.valueSignal.set(_resolveDirectionality(value));
    this._rawDir = value;
    if (previousValue !== this.valueSignal() && this._isInitialized) {
      this.change.emit(this.valueSignal());
    }
  }
  get value() {
    return this.dir;
  }
  valueSignal = signal("ltr", ...ngDevMode ? [{
    debugName: "valueSignal"
  }] : []);
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static \u0275fac = function Dir_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dir)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Dir,
    selectors: [["", "dir", ""]],
    hostVars: 1,
    hostBindings: function Dir_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("dir", ctx._rawDir);
      }
    },
    inputs: {
      dir: "dir"
    },
    outputs: {
      change: "dirChange"
    },
    exportAs: ["dir"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: Directionality,
      useExisting: _Dir
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir"
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static \u0275fac = function BidiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidiModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BidiModule,
    imports: [Dir],
    exports: [Dir]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
  _data;
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
  viewCacheSize = 20;
  _viewCache = [];
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  _scrolledIndexChange = new Subject();
  scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
  _viewport = null;
  _itemSize;
  _minBufferPx;
  _maxBufferPx;
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentScrolled() {
    this._updateRenderedRange();
  }
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  onContentRendered() {
  }
  onRenderedOffsetChanged() {
  }
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  _itemSize = 20;
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  _minBufferPx = 100;
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  _maxBufferPx = 200;
  _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static \u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFixedSizeVirtualScroll,
    selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
    inputs: {
      itemSize: "itemSize",
      minBufferPx: "minBufferPx",
      maxBufferPx: "maxBufferPx"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLL_STRATEGY,
      useFactory: _fixedSizeVirtualScrollStrategyFactory,
      deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupGlobalListener;
  constructor() {
  }
  _scrolled = new Subject();
  _scrolledCount = 0;
  scrollContainers = /* @__PURE__ */ new Map();
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._cleanupGlobalListener) {
        this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._cleanupGlobalListener?.();
          this._cleanupGlobalListener = void 0;
        }
      };
    });
  }
  ngOnDestroy() {
    this._cleanupGlobalListener?.();
    this._cleanupGlobalListener = void 0;
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
  }
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  static \u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollDispatcher)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollDispatcher,
    factory: _ScrollDispatcher.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkScrollable = class _CdkScrollable {
  elementRef = inject(ElementRef);
  scrollDispatcher = inject(ScrollDispatcher);
  ngZone = inject(NgZone);
  dir = inject(Directionality, {
    optional: true
  });
  _scrollElement = this.elementRef.nativeElement;
  _destroyed = new Subject();
  _renderer = inject(Renderer2);
  _cleanupScroll;
  _elementScrolled = new Subject();
  constructor() {
  }
  ngOnInit() {
    this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this._cleanupScroll?.();
    this._elementScrolled.complete();
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  elementScrolled() {
    return this._elementScrolled;
  }
  getElementRef() {
    return this.elementRef;
  }
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  measureScrollOffset(from) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from == "top") {
      return el.scrollTop;
    }
    if (from == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from == "start") {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      from = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static \u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkScrollable,
    selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]"
    }]
  }], () => [], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  _platform = inject(Platform);
  _listeners;
  _viewportSize = null;
  _change = new Subject();
  _document = inject(DOCUMENT);
  constructor() {
    const ngZone = inject(NgZone);
    const renderer = inject(RendererFactory2).createRenderer(null, null);
    ngZone.runOutsideAngular(() => {
      if (this._platform.isBrowser) {
        const changeListener = (event) => this._change.next(event);
        this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    this._listeners?.forEach((cleanup) => cleanup());
    this._change.complete();
  }
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output2 = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output2;
  }
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body?.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body?.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static \u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewportRuler)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ViewportRuler,
    factory: _ViewportRuler.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor() {
    super();
  }
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static \u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollable)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollable,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
    optional: true
  });
  scrollable = inject(VIRTUAL_SCROLLABLE, {
    optional: true
  });
  _platform = inject(Platform);
  _detachedSubject = new Subject();
  _renderedRangeSubject = new Subject();
  _renderedContentOffsetSubject = new Subject();
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  _orientation = "vertical";
  appendOnly = false;
  scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
  _contentWrapper;
  renderedRangeStream = this._renderedRangeSubject;
  renderedContentOffset = this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged());
  _totalContentSize = 0;
  _totalContentWidth = signal("", ...ngDevMode ? [{
    debugName: "_totalContentWidth"
  }] : []);
  _totalContentHeight = signal("", ...ngDevMode ? [{
    debugName: "_totalContentHeight"
  }] : []);
  _renderedContentTransform;
  _renderedRange = {
    start: 0,
    end: 0
  };
  _dataLength = 0;
  _viewportSize = 0;
  _forOf = null;
  _renderedContentOffset = 0;
  _renderedContentOffsetNeedsRewrite = false;
  _changeDetectionNeeded = signal(false, ...ngDevMode ? [{
    debugName: "_changeDetectionNeeded"
  }] : []);
  _runAfterChangeDetection = [];
  _viewportChanges = Subscription.EMPTY;
  _injector = inject(Injector);
  _isDestroyed = false;
  constructor() {
    super();
    const viewportRuler = inject(ViewportRuler);
    if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
    const ref = effect(() => {
      if (this._changeDetectionNeeded()) {
        this._doChangeDetection();
      }
    }, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "ref"
    } : {}), {
      injector: inject(ApplicationRef).injector
    }));
    inject(DestroyRef).onDestroy(() => void ref.destroy());
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  getDataLength() {
    return this._dataLength;
  }
  getViewportSize() {
    return this._viewportSize;
  }
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  measureScrollOffset(from) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  measureViewportOffset(from) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from) {
      fromRect = from;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range, this.orientation);
  }
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (untracked(this._changeDetectionNeeded)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        this.ngZone.run(() => {
          this._changeDetectionNeeded.set(true);
        });
      });
    });
  }
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
      afterNextRender(() => {
        this._changeDetectionNeeded.set(false);
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  _calculateSpacerSize() {
    this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
    this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
  }
  static \u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkVirtualScrollViewport,
    selectors: [["cdk-virtual-scroll-viewport"]],
    viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
      }
    },
    hostAttrs: [1, "cdk-virtual-scroll-viewport"],
    hostVars: 4,
    hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
      }
    },
    inputs: {
      orientation: "orientation",
      appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
    },
    outputs: {
      scrolledIndexChange: "scrolledIndexChange"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkScrollable,
      useFactory: () => inject(VIRTUAL_SCROLLABLE, {
        optional: true
      }) || inject(_CdkVirtualScrollViewport)
    }, {
      provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
      useExisting: _CdkVirtualScrollViewport
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c1,
    decls: 4,
    vars: 4,
    consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
    template: function CdkVirtualScrollViewport_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 1, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
      }
    },
    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useFactory: () => inject(VIRTUAL_SCROLLABLE, {
          optional: true
        }) || inject(CdkVirtualScrollViewport)
      }, {
        provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
        useExisting: CdkVirtualScrollViewport
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"]
    }]
  }], () => [], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  _viewContainerRef = inject(ViewContainerRef);
  _template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  _viewRepeater = new _RecycleViewRepeaterStrategy();
  _viewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    skipSelf: true
  });
  viewChange = new Subject();
  _dataSourceChanges = new Subject();
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  _cdkVirtualForOf;
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  _cdkVirtualForTrackBy;
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  dataStream = this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1));
  _differ = null;
  _data = [];
  _renderedItems = [];
  _renderedRange = {
    start: 0,
    end: 0
  };
  _needsUpdate = false;
  _destroyed = new Subject();
  constructor() {
    const ngZone = inject(NgZone);
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
      this._renderedRange = range;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }
    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - this._renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static ngTemplateContextGuard(directive, context) {
    return true;
  }
  static \u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualForOf)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualForOf,
    selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
    inputs: {
      cdkVirtualForOf: "cdkVirtualForOf",
      cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
      cdkVirtualForTemplate: "cdkVirtualForTemplate",
      cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]"
    }]
  }], () => [], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor() {
    super();
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
  }
  static \u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableElement)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableElement,
    selectors: [["", "cdkVirtualScrollingElement", ""]],
    hostAttrs: [1, "cdk-virtual-scrollable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableElement
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor() {
    super();
    const document2 = inject(DOCUMENT);
    this.elementRef = new ElementRef(document2.documentElement);
    this._scrollElement = document2;
  }
  measureBoundingClientRectWithScrollOffset(from) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from];
  }
  static \u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkVirtualScrollableWindow,
    selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: VIRTUAL_SCROLLABLE,
      useExisting: _CdkVirtualScrollableWindow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }]
    }]
  }], () => [], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static \u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkScrollableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkScrollableModule,
    imports: [CdkScrollable],
    exports: [CdkScrollable]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static \u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollingModule,
    imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
    exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
  }
  static \u0275fac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets{.cdk-drag-preview{background:none;border:none;padding:0;color:inherit;inset:auto}}.cdk-drag-placeholder *,.cdk-drag-preview *{pointer-events:none !important}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  _dropInstances = /* @__PURE__ */ new Set();
  _dragInstances = /* @__PURE__ */ new Set();
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  _globalListeners;
  _draggingPredicate = (item) => item.isDragging();
  _domNodesToDirectives = null;
  pointerMove = new Subject();
  pointerUp = new Subject();
  constructor() {
  }
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions$1);
      });
    }
  }
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [["scroll", (e) => this._scroll.next(e), capturingEventOptions], ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions$1]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set(["position"]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      "pointer-events": "none",
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set(["position"]);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler), injector.get(DragDropRegistry), renderer);
}
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = new Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = Subscription.EMPTY;
  _pointerUpSubscription = Subscription.EMPTY;
  _scrollSubscription = Subscription.EMPTY;
  _resizeSubscription = Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /* @__PURE__ */ new Set();
  _dropContainer;
  _direction = "ltr";
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = new Subject();
  started = new Subject();
  released = new Subject();
  ended = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = "vertical";
  direction = "ltr";
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler));
}
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  sorted = new Subject();
  receivingStarted = new Subject();
  receivingStopped = new Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /* @__PURE__ */ new Set();
  _viewportScrollSubscription = Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = new Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var DragDrop = class _DragDrop {
  _injector = inject(Injector);
  constructor() {
  }
  createDrag(element, config) {
    return createDragRef(this._injector, element, config);
  }
  createDropList(element) {
    return createDropListRef(this._injector, element);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _stateChanges = new Subject();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate = null;
  _placeholderTemplate = null;
  _dragRef;
  data;
  lockAxis = null;
  rootElementSelector;
  boundaryElement;
  dragStartDelay;
  freeDragPosition;
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled = false;
  constrainPosition;
  previewClass;
  previewContainer;
  scale = 1;
  started = new EventEmitter();
  released = new EventEmitter();
  ended = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  dropped = new EventEmitter();
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    this._dragRef = createDragRef(this._injector, this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  reset() {
    this._dragRef.reset();
  }
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  _setupHandlesListener() {
    this._handles.pipe(tap((handles) => {
      const handleElements = handles.map((handle) => handle.element);
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }), switchMap((handles) => {
      return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
    }), takeUntil(this._destroyed)).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  _items = /* @__PURE__ */ new Set();
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  _latestSortedRefs;
  _destroyed = new Subject();
  _scrollableParentsResolved = false;
  static _dropLists = [];
  _dropListRef;
  connectedTo = [];
  data;
  orientation = "vertical";
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  lockAxis = null;
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled = false;
  sortingDisabled = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  autoScrollDisabled = false;
  autoScrollStep;
  elementContainerSelector = null;
  hasAnchor = false;
  dropped = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  sorted = new EventEmitter();
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const injector = inject(Injector);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = createDropListRef(injector, this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/components/task-card/task-card.component.ts
var _c02 = (a0, a1) => [a0, a1];
function TaskCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.task().description);
  }
}
function TaskCardComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275element(1, "span", 14);
    \u0275\u0275text(2, " Overdue ");
    \u0275\u0275elementEnd();
  }
}
function TaskCardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, TaskCardComponent_Conditional_15_Conditional_2_Template, 3, 0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.formatDueDate(ctx_r0.task().dueDate));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isOverdue(ctx_r0.task().dueDate) ? 2 : -1);
  }
}
var TaskCardComponent = class _TaskCardComponent {
  task = input.required(...ngDevMode ? [{ debugName: "task" }] : []);
  onEdit = output();
  onDelete = output();
  /** Priority badge color classes */
  getPriorityClasses(priority) {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200";
      case "Medium":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200";
      case "Low":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  }
  /** Priority left border (High=red, Medium=yellow, Low=green) */
  getPriorityBorderClasses(priority) {
    switch (priority) {
      case "High":
        return "border-l-red-500";
      case "Medium":
        return "border-l-yellow-500";
      case "Low":
        return "border-l-green-500";
      default:
        return "border-l-gray-300 dark:border-l-gray-600";
    }
  }
  formatDueDate(isoDate) {
    if (!isoDate)
      return "";
    const d = new Date(isoDate);
    return d.toLocaleDateString(void 0, { dateStyle: "short" });
  }
  isOverdue(isoDate) {
    if (!isoDate)
      return false;
    const due = new Date(isoDate);
    const today = /* @__PURE__ */ new Date();
    due.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return due.getTime() < today.getTime();
  }
  handleEdit() {
    this.onEdit.emit(this.task());
  }
  handleDelete(event) {
    event.stopPropagation();
    this.onDelete.emit(this.task());
  }
  static \u0275fac = function TaskCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskCardComponent, selectors: [["app-task-card"]], inputs: { task: [1, "task"] }, outputs: { onEdit: "onEdit", onDelete: "onDelete" }, decls: 16, vars: 10, consts: [[1, "group", "relative", "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "border-l-4", "px-4", "py-3.5", "text-left", "cursor-grab", "active:cursor-grabbing", "hover:shadow-md", "hover:-translate-y-0.5", "active:scale-[0.98]", "transition-all", "duration-200", 3, "ngClass"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "font-semibold", "text-gray-900", "dark:text-gray-200", "text-sm", "leading-tight", "flex-1", "min-w-0", "pr-8"], [1, "absolute", "top-3", "right-3", "flex", "items-center", "gap-0.5", "opacity-0", "group-hover:opacity-100", "transition-opacity", "duration-200"], ["type", "button", "aria-label", "Edit task", 1, "p-1.5", "rounded-lg", "text-gray-400", "hover:text-gray-600", "dark:hover:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", "transition-colors", "duration-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], ["type", "button", "aria-label", "Delete task", 1, "p-1.5", "rounded-lg", "text-gray-400", "hover:text-red-600", "dark:hover:text-red-400", "hover:bg-red-50", "dark:hover:bg-red-900/20", "focus:outline-none", "focus:ring-2", "focus:ring-red-500/20", "transition-colors", "duration-200", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-gray-600", "dark:text-gray-400", "text-xs", "mt-2", "line-clamp-2"], [1, "flex", "flex-wrap", "items-center", "gap-2", "mt-3"], [1, "px-2", "py-0.5", "rounded-full", "text-xs", "font-medium"], [1, "text-xs", "text-gray-500", "dark:text-gray-400"], [1, "inline-flex", "items-center", "gap-1", "rounded-full", "bg-red-50", "dark:bg-red-900/40", "text-red-700", "dark:text-red-200", "text-[10px]", "font-semibold", "uppercase", "tracking-wide", "px-2", "py-0.5"], [1, "inline-block", "h-1.5", "w-1.5", "rounded-full", "bg-red-500"]], template: function TaskCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
      \u0275\u0275listener("click", function TaskCardComponent_Template_button_click_5_listener() {
        return ctx.handleEdit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "button", 7);
      \u0275\u0275listener("click", function TaskCardComponent_Template_button_click_8_listener($event) {
        return ctx.handleDelete($event);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 5);
      \u0275\u0275element(10, "path", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(11, TaskCardComponent_Conditional_11_Template, 2, 1, "p", 9);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, TaskCardComponent_Conditional_15_Template, 3, 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c02, ctx.getPriorityBorderClasses(ctx.task().priority), ctx.task().dueDate && ctx.isOverdue(ctx.task().dueDate) ? "ring-1 ring-red-100 dark:ring-red-500/30" : ""));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.task().title, " ");
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.task().description ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classMap(ctx.getPriorityClasses(ctx.task().priority));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.task().priority, " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.task().dueDate ? 15 : -1);
    }
  }, dependencies: [NgClass], styles: ["\n\n/*# sourceMappingURL=task-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskCardComponent, [{
    type: Component,
    args: [{ selector: "app-task-card", standalone: true, imports: [NgClass], template: `<div\r
  class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 border-l-4 px-4 py-3.5 text-left cursor-grab active:cursor-grabbing hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"\r
  [ngClass]="[getPriorityBorderClasses(task().priority), task().dueDate && isOverdue(task().dueDate) ? 'ring-1 ring-red-100 dark:ring-red-500/30' : '']"\r
>\r
  <div class="flex items-start justify-between gap-2">\r
    <h3 class="font-semibold text-gray-900 dark:text-gray-200 text-sm leading-tight flex-1 min-w-0 pr-8">\r
      {{ task().title }}\r
    </h3>\r
    <!-- Quick actions: visible on hover only, top-right -->\r
    <div\r
      class="absolute top-3 right-3 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"\r
    >\r
      <button\r
        type="button"\r
        (click)="handleEdit()"\r
        class="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"\r
        aria-label="Edit task"\r
      >\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />\r
        </svg>\r
      </button>\r
      <button\r
        type="button"\r
        (click)="handleDelete($event)"\r
        class="p-1.5 rounded-lg text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors duration-200"\r
        aria-label="Delete task"\r
      >\r
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />\r
        </svg>\r
      </button>\r
    </div>\r
  </div>\r
  @if (task().description) {\r
    <p class="text-gray-600 dark:text-gray-400 text-xs mt-2 line-clamp-2">{{ task().description }}</p>\r
  }\r
  <div class="flex flex-wrap items-center gap-2 mt-3">\r
    <span\r
      class="px-2 py-0.5 rounded-full text-xs font-medium"\r
      [class]="getPriorityClasses(task().priority)"\r
    >\r
      {{ task().priority }}\r
    </span>\r
    @if (task().dueDate) {\r
      <span class="text-xs text-gray-500 dark:text-gray-400">{{ formatDueDate(task().dueDate) }}</span>\r
      @if (isOverdue(task().dueDate)) {\r
        <span\r
          class="inline-flex items-center gap-1 rounded-full bg-red-50 dark:bg-red-900/40 text-red-700 dark:text-red-200 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5"\r
        >\r
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-red-500"></span>\r
          Overdue\r
        </span>\r
      }\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/task-card/task-card.component.css */\n/*# sourceMappingURL=task-card.component.css.map */\n"] }]
  }], null, { task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: true }] }], onEdit: [{ type: Output, args: ["onEdit"] }], onDelete: [{ type: Output, args: ["onDelete"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskCardComponent, { className: "TaskCardComponent", filePath: "src/app/components/task-card/task-card.component.ts", lineNumber: 12 });
})();

// src/app/components/kanban-column/kanban-column.component.ts
var _c03 = ["*"];
var _forTrack0 = ($index, $item) => $item.id;
function KanbanColumnComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function KanbanColumnComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearColumn.emit());
    });
    \u0275\u0275text(1, " Clear ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function KanbanColumnComponent_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteColumn.emit());
    });
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd()();
  }
}
function KanbanColumnComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "app-task-card", 16);
    \u0275\u0275listener("onEdit", function KanbanColumnComponent_For_15_Template_app_task_card_onEdit_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editTask.emit($event));
    })("onDelete", function KanbanColumnComponent_For_15_Template_app_task_card_onDelete_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteTask.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    \u0275\u0275property("cdkDragData", task_r4);
    \u0275\u0275advance();
    \u0275\u0275property("task", task_r4);
  }
}
function KanbanColumnComponent_ForEmpty_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 17);
    \u0275\u0275element(2, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, " No tasks yet. Drag one here. ");
    \u0275\u0275elementEnd()();
  }
}
var KanbanColumnComponent = class _KanbanColumnComponent {
  columnId = input.required(...ngDevMode ? [{ debugName: "columnId" }] : []);
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  tasks = input.required(...ngDevMode ? [{ debugName: "tasks" }] : []);
  /** Total tasks across ALL columns (for percentage calculation). */
  totalTasks = input(0, ...ngDevMode ? [{ debugName: "totalTasks" }] : []);
  /** All column ids for CDK drop list connection. */
  connectedListIds = input([], ...ngDevMode ? [{ debugName: "connectedListIds" }] : []);
  /** When false, hide the delete column button (e.g. last column). */
  canDelete = input(true, ...ngDevMode ? [{ debugName: "canDelete" }] : []);
  /** Percentage of total tasks in this column (0–100). */
  percentage = computed(() => {
    const total = this.totalTasks();
    return total === 0 ? 0 : Math.round(this.tasks().length / total * 100);
  }, ...ngDevMode ? [{ debugName: "percentage" }] : []);
  dropped = output();
  editTask = output();
  deleteTask = output();
  deleteColumn = output();
  clearColumn = output();
  downloadColumn = output();
  static \u0275fac = function KanbanColumnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanColumnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanColumnComponent, selectors: [["app-kanban-column"]], inputs: { columnId: [1, "columnId"], title: [1, "title"], tasks: [1, "tasks"], totalTasks: [1, "totalTasks"], connectedListIds: [1, "connectedListIds"], canDelete: [1, "canDelete"] }, outputs: { dropped: "dropped", editTask: "editTask", deleteTask: "deleteTask", deleteColumn: "deleteColumn", clearColumn: "clearColumn", downloadColumn: "downloadColumn" }, ngContentSelectors: _c03, decls: 18, vars: 11, consts: [["cdkDropList", "", 1, "rounded-2xl", "bg-white", "dark:bg-gray-800", "border", "border-gray-200", "dark:border-gray-700", "shadow-sm", "hover:shadow-md", "min-h-[280px]", "h-full", "flex", "flex-col", "p-5", "transition-shadow", "duration-200", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo"], [1, "flex", "items-center", "justify-between", "gap-3", "pb-2", "mb-1", "border-b", "border-gray-100", "dark:border-gray-700/80"], [1, "font-semibold", "text-gray-900", "dark:text-gray-100", "text-sm", "tracking-tight", "truncate"], [1, "ml-1", "text-xs", "font-normal", "text-gray-500", "dark:text-gray-400"], [1, "flex", "items-center", "gap-1.5", "shrink-0"], ["type", "button", "aria-label", "Download tasks in column", 1, "p-1.5", "rounded-lg", "text-gray-400", "dark:text-gray-500", "hover:text-blue-600", "dark:hover:text-blue-400", "hover:bg-blue-50/60", "dark:hover:bg-blue-900/20", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/30", "transition-colors", "duration-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4 4m0 0l-4-4m4 4V4"], [1, "mb-3", "h-1.5", "w-full", "rounded-full", "bg-gray-100", "dark:bg-gray-700", "overflow-hidden"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "h-full", "rounded-full", "bg-gradient-to-r", "from-blue-400", "to-indigo-500", "transition-all", "duration-500", "ease-out"], [1, "flex-1", "space-y-3", "overflow-y-auto", "pr-1", "custom-column-scroll"], ["cdkDrag", "", 1, "cdk-drag-handle", 3, "cdkDragData"], [1, "flex", "flex-col", "items-center", "justify-center", "py-10", "px-5", "rounded-xl", "bg-gray-50/50", "dark:bg-gray-800/50", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "min-h-[140px]"], ["type", "button", "aria-label", "Clear all tasks in column", 1, "px-2", "py-1", "rounded-lg", "text-[11px]", "font-medium", "text-amber-700", "dark:text-amber-300", "bg-amber-50/80", "dark:bg-amber-900/30", "hover:bg-amber-100", "dark:hover:bg-amber-900/50", "focus:outline-none", "focus:ring-2", "focus:ring-amber-500/40", "transition-colors", "duration-200", 3, "click"], ["type", "button", "aria-label", "Delete column", 1, "p-1.5", "rounded-lg", "text-gray-400", "dark:text-gray-500", "hover:text-red-600", "dark:hover:text-red-400", "hover:bg-red-50", "dark:hover:bg-red-900/20", "focus:outline-none", "focus:ring-2", "focus:ring-red-500/20", "transition-colors", "duration-200", 3, "click"], ["aria-hidden", "true"], [3, "onEdit", "onDelete", "task"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "aria-hidden", "true", 1, "h-8", "w-8", "text-gray-300", "dark:text-gray-600", "mb-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M4 6h16M4 10h16M4 14h16M4 18h7"], [1, "text-sm", "text-gray-500", "dark:text-gray-400", "text-center"]], template: function KanbanColumnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("cdkDropListDropped", function KanbanColumnComponent_Template_div_cdkDropListDropped_0_listener($event) {
        return ctx.dropped.emit($event);
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "h2", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
      \u0275\u0275listener("click", function KanbanColumnComponent_Template_button_click_7_listener() {
        return ctx.downloadColumn.emit();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 6);
      \u0275\u0275element(9, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, KanbanColumnComponent_Conditional_10_Template, 5, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275element(12, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275repeaterCreate(14, KanbanColumnComponent_For_15_Template, 2, 2, "div", 11, _forTrack0, false, KanbanColumnComponent_ForEmpty_16_Template, 5, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("id", ctx.columnId())("cdkDropListData", ctx.tasks())("cdkDropListConnectedTo", ctx.connectedListIds());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("(", ctx.tasks().length, ") \u2013 ", ctx.percentage(), "%");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.canDelete() ? 10 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.percentage(), "%");
      \u0275\u0275attribute("aria-valuenow", ctx.percentage());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.tasks());
    }
  }, dependencies: [CdkDropList, CdkDrag, TaskCardComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  opacity: 0.98;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-radius: 1rem;\n  transform: scale(1.02);\n  transition: box-shadow 200ms ease, transform 200ms ease;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  transition: opacity 200ms ease;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.cdk-drag-dragging[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  transition: opacity 200ms ease;\n}\n/*# sourceMappingURL=kanban-column.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanColumnComponent, [{
    type: Component,
    args: [{ selector: "app-kanban-column", standalone: true, imports: [CdkDropList, CdkDrag, TaskCardComponent], template: '<div cdkDropList [id]="columnId()" [cdkDropListData]="tasks()" [cdkDropListConnectedTo]="connectedListIds()"\r\n  (cdkDropListDropped)="dropped.emit($event)"\r\n  class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md min-h-[280px] h-full flex flex-col p-5 transition-shadow duration-200">\r\n  <div class="flex items-center justify-between gap-3 pb-2 mb-1 border-b border-gray-100 dark:border-gray-700/80">\r\n    <h2 class="font-semibold text-gray-900 dark:text-gray-100 text-sm tracking-tight truncate">\r\n      {{ title() }}\r\n      <span class="ml-1 text-xs font-normal text-gray-500 dark:text-gray-400">({{ tasks().length }}) \u2013 {{ percentage()\r\n        }}%</span>\r\n    </h2>\r\n    <div class="flex items-center gap-1.5 shrink-0">\r\n      <button type="button" (click)="downloadColumn.emit()"\r\n        class="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-colors duration-200"\r\n        aria-label="Download tasks in column">\r\n        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r\n            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4 4m0 0l-4-4m4 4V4" />\r\n        </svg>\r\n      </button>\r\n      @if (canDelete()) {\r\n      <button type="button" (click)="clearColumn.emit()"\r\n        class="px-2 py-1 rounded-lg text-[11px] font-medium text-amber-700 dark:text-amber-300 bg-amber-50/80 dark:bg-amber-900/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-colors duration-200"\r\n        aria-label="Clear all tasks in column">\r\n        Clear\r\n      </button>\r\n      <button type="button" (click)="deleteColumn.emit()"\r\n        class="p-1.5 rounded-lg text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors duration-200"\r\n        aria-label="Delete column">\r\n        <span aria-hidden="true">\u2715</span>\r\n      </button>\r\n      }\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Progress bar -->\r\n  <div class="mb-3 h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">\r\n    <div class="h-full rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500 ease-out"\r\n      [style.width.%]="percentage()" role="progressbar" [attr.aria-valuenow]="percentage()" aria-valuemin="0"\r\n      aria-valuemax="100">\r\n    </div>\r\n  </div>\r\n\r\n  <div class="flex-1 space-y-3 overflow-y-auto pr-1 custom-column-scroll">\r\n    @for (task of tasks(); track task.id) {\r\n    <div cdkDrag [cdkDragData]="task" class="cdk-drag-handle">\r\n      <app-task-card [task]="task" (onEdit)="editTask.emit($event)" (onDelete)="deleteTask.emit($event)" />\r\n    </div>\r\n    }\r\n    @empty {\r\n    <div\r\n      class="flex flex-col items-center justify-center py-10 px-5 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 border-2 border-dashed border-gray-200 dark:border-gray-700 min-h-[140px]">\r\n      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300 dark:text-gray-600 mb-3" fill="none"\r\n        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h7" />\r\n      </svg>\r\n      <p class="text-sm text-gray-500 dark:text-gray-400 text-center">\r\n        No tasks yet. Drag one here.\r\n      </p>\r\n    </div>\r\n    }\r\n  </div>\r\n  <ng-content />\r\n</div>', styles: ["/* src/app/components/kanban-column/kanban-column.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.cdk-drag-preview {\n  opacity: 0.98;\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-radius: 1rem;\n  transform: scale(1.02);\n  transition: box-shadow 200ms ease, transform 200ms ease;\n}\n.cdk-drag-placeholder {\n  opacity: 0.35;\n  transition: opacity 200ms ease;\n}\n.cdk-drag-animating {\n  transition: transform 200ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.cdk-drag-dragging {\n  opacity: 0.55;\n  transition: opacity 200ms ease;\n}\n/*# sourceMappingURL=kanban-column.component.css.map */\n"] }]
  }], null, { columnId: [{ type: Input, args: [{ isSignal: true, alias: "columnId", required: true }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], tasks: [{ type: Input, args: [{ isSignal: true, alias: "tasks", required: true }] }], totalTasks: [{ type: Input, args: [{ isSignal: true, alias: "totalTasks", required: false }] }], connectedListIds: [{ type: Input, args: [{ isSignal: true, alias: "connectedListIds", required: false }] }], canDelete: [{ type: Input, args: [{ isSignal: true, alias: "canDelete", required: false }] }], dropped: [{ type: Output, args: ["dropped"] }], editTask: [{ type: Output, args: ["editTask"] }], deleteTask: [{ type: Output, args: ["deleteTask"] }], deleteColumn: [{ type: Output, args: ["deleteColumn"] }], clearColumn: [{ type: Output, args: ["clearColumn"] }], downloadColumn: [{ type: Output, args: ["downloadColumn"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanColumnComponent, { className: "KanbanColumnComponent", filePath: "src/app/components/kanban-column/kanban-column.component.ts", lineNumber: 13 });
})();

// src/app/components/task-dialog/task-dialog.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function TaskDialogComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("value", p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2);
  }
}
function TaskDialogComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    \u0275\u0275property("value", col_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r3.title);
  }
}
var TaskDialogComponent = class _TaskDialogComponent {
  task = input(null, ...ngDevMode ? [{ debugName: "task" }] : []);
  mode = input("create", ...ngDevMode ? [{ debugName: "mode" }] : []);
  /** Default column for new task when opened from a column. */
  initialColumnId = input("todo", ...ngDevMode ? [{ debugName: "initialColumnId" }] : []);
  /** Columns for the "Column" dropdown (id + title). */
  columnOptions = input([], ...ngDevMode ? [{ debugName: "columnOptions" }] : []);
  saved = output();
  cancelled = output();
  priorities = ["High", "Medium", "Low"];
  title = signal("", ...ngDevMode ? [{ debugName: "title" }] : []);
  description = signal("", ...ngDevMode ? [{ debugName: "description" }] : []);
  priority = signal("Medium", ...ngDevMode ? [{ debugName: "priority" }] : []);
  dueDate = signal("", ...ngDevMode ? [{ debugName: "dueDate" }] : []);
  columnId = signal("todo", ...ngDevMode ? [{ debugName: "columnId" }] : []);
  constructor() {
    effect(() => {
      const t = this.task();
      const initColId = this.initialColumnId();
      const cols = this.columnOptions();
      if (t) {
        this.title.set(t.title);
        this.description.set(t.description);
        this.priority.set(t.priority);
        this.dueDate.set(t.dueDate ?? "");
        this.columnId.set(t.columnId);
      } else {
        this.title.set("");
        this.description.set("");
        this.priority.set("Medium");
        this.dueDate.set("");
        const validId = cols.some((c) => c.id === initColId) ? initColId : cols[0]?.id ?? initColId;
        this.columnId.set(validId);
      }
    });
  }
  onSubmit() {
    const title = this.title().trim();
    if (!title)
      return;
    if (this.mode() === "edit" && this.task()) {
      this.saved.emit(__spreadProps(__spreadValues({}, this.task()), {
        title,
        description: this.description().trim(),
        priority: this.priority(),
        dueDate: this.dueDate().trim() || void 0,
        columnId: this.columnId()
      }));
    } else {
      this.saved.emit({
        id: "",
        title,
        description: this.description().trim(),
        priority: this.priority(),
        dueDate: this.dueDate().trim() || void 0,
        columnId: this.columnId()
      });
    }
  }
  onCancel() {
    this.cancelled.emit();
  }
  /** Close dialog on Escape key for better keyboard UX. */
  handleEscape() {
    this.onCancel();
  }
  static \u0275fac = function TaskDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TaskDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDialogComponent, selectors: [["app-task-dialog"]], hostBindings: function TaskDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function TaskDialogComponent_keydown_escape_HostBindingHandler() {
        return ctx.handleEscape();
      }, \u0275\u0275resolveDocument);
    }
  }, inputs: { task: [1, "task"], mode: [1, "mode"], initialColumnId: [1, "initialColumnId"], columnOptions: [1, "columnOptions"] }, outputs: { saved: "saved", cancelled: "cancelled" }, decls: 38, vars: 7, consts: [["taskForm", "ngForm"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "task-dialog-title", 1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "dark:bg-black/60", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "w-full", "max-w-md", "max-h-[90vh]", "overflow-y-auto", 3, "click", "keydown.escape"], [1, "p-6"], ["id", "task-dialog-title", 1, "text-lg", "font-semibold", "text-gray-900", "dark:text-gray-200", "mb-4"], [1, "space-y-4", 3, "ngSubmit"], ["for", "title", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], [1, "text-red-500"], ["id", "title", "type", "text", "name", "title", "required", "", "minlength", "1", "placeholder", "Task title", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], ["id", "description", "name", "description", "rows", "3", "placeholder", "Optional description", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], ["for", "priority", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], ["id", "priority", "name", "priority", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "dueDate", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], ["id", "dueDate", "type", "date", "name", "dueDate", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], ["for", "columnId", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], ["id", "columnId", "name", "columnId", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3", "pt-2"], ["type", "submit", 1, "flex-1", "rounded-lg", "bg-blue-600", "px-4", "py-2", "text-sm", "font-medium", "text-white", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", 3, "click"]], template: function TaskDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275listener("click", function TaskDialogComponent_Template_div_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementStart(1, "div", 2);
      \u0275\u0275listener("click", function TaskDialogComponent_Template_div_click_1_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView($event.stopPropagation());
      })("keydown.escape", function TaskDialogComponent_Template_div_keydown_escape_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275elementStart(2, "div", 3)(3, "h2", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 5, 0);
      \u0275\u0275listener("ngSubmit", function TaskDialogComponent_Template_form_ngSubmit_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(7, "div")(8, "label", 6);
      \u0275\u0275text(9, "Title ");
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275listener("ngModelChange", function TaskDialogComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.title.set($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div")(14, "label", 9);
      \u0275\u0275text(15, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "textarea", 10);
      \u0275\u0275listener("ngModelChange", function TaskDialogComponent_Template_textarea_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.description.set($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div")(18, "label", 11);
      \u0275\u0275text(19, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 12);
      \u0275\u0275listener("ngModelChange", function TaskDialogComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.priority.set($event));
      });
      \u0275\u0275repeaterCreate(21, TaskDialogComponent_For_22_Template, 2, 2, "option", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div")(24, "label", 14);
      \u0275\u0275text(25, "Due Date (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 15);
      \u0275\u0275listener("ngModelChange", function TaskDialogComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.dueDate.set($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "label", 16);
      \u0275\u0275text(29, "Column");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "select", 17);
      \u0275\u0275listener("ngModelChange", function TaskDialogComponent_Template_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.columnId.set($event));
      });
      \u0275\u0275repeaterCreate(31, TaskDialogComponent_For_32_Template, 2, 2, "option", 13, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 18)(34, "button", 19);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function TaskDialogComponent_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onCancel());
      });
      \u0275\u0275text(37, " Cancel ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mode() === "edit" ? "Edit Task" : "New Task", " ");
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.title());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.description());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.priority());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.priorities);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.dueDate());
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.columnId());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.columnOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.mode() === "edit" ? "Save" : "Add Task", " ");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ["\n\n/*# sourceMappingURL=task-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDialogComponent, [{
    type: Component,
    args: [{ selector: "app-task-dialog", standalone: true, imports: [FormsModule], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60"\r
  (click)="onCancel()"\r
  role="dialog"\r
  aria-modal="true"\r
  aria-labelledby="task-dialog-title"\r
>\r
  <div\r
    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto"\r
    (click)="$event.stopPropagation()"\r
    (keydown.escape)="onCancel()"\r
  >\r
    <div class="p-6">\r
      <h2 id="task-dialog-title" class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">\r
        {{ mode() === 'edit' ? 'Edit Task' : 'New Task' }}\r
      </h2>\r
      <form (ngSubmit)="onSubmit()" class="space-y-4" #taskForm="ngForm">\r
        <div>\r
          <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title <span class="text-red-500">*</span></label>\r
          <input\r
            id="title"\r
            type="text"\r
            [ngModel]="title()"\r
            (ngModelChange)="title.set($event)"\r
            name="title"\r
            required\r
            minlength="1"\r
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r
            placeholder="Task title"\r
          />\r
        </div>\r
        <div>\r
          <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>\r
          <textarea\r
            id="description"\r
            [ngModel]="description()"\r
            (ngModelChange)="description.set($event)"\r
            name="description"\r
            rows="3"\r
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r
            placeholder="Optional description"\r
          ></textarea>\r
        </div>\r
        <div>\r
          <label for="priority" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Priority</label>\r
          <select\r
            id="priority"\r
            [ngModel]="priority()"\r
            (ngModelChange)="priority.set($event)"\r
            name="priority"\r
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r
          >\r
            @for (p of priorities; track p) {\r
              <option [value]="p">{{ p }}</option>\r
            }\r
          </select>\r
        </div>\r
        <div>\r
          <label for="dueDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Due Date (optional)</label>\r
          <input\r
            id="dueDate"\r
            type="date"\r
            [ngModel]="dueDate()"\r
            (ngModelChange)="dueDate.set($event)"\r
            name="dueDate"\r
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r
          />\r
        </div>\r
        <div>\r
          <label for="columnId" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Column</label>\r
          <select\r
            id="columnId"\r
            [ngModel]="columnId()"\r
            (ngModelChange)="columnId.set($event)"\r
            name="columnId"\r
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r
          >\r
            @for (col of columnOptions(); track col.id) {\r
              <option [value]="col.id">{{ col.title }}</option>\r
            }\r
          </select>\r
        </div>\r
        <div class="flex gap-3 pt-2">\r
          <button\r
            type="submit"\r
            class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"\r
          >\r
            {{ mode() === 'edit' ? 'Save' : 'Add Task' }}\r
          </button>\r
          <button\r
            type="button"\r
            (click)="onCancel()"\r
            class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"\r
          >\r
            Cancel\r
          </button>\r
        </div>\r
      </form>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/components/task-dialog/task-dialog.component.css */\n/*# sourceMappingURL=task-dialog.component.css.map */\n"] }]
  }], () => [], { task: [{ type: Input, args: [{ isSignal: true, alias: "task", required: false }] }], mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }], initialColumnId: [{ type: Input, args: [{ isSignal: true, alias: "initialColumnId", required: false }] }], columnOptions: [{ type: Input, args: [{ isSignal: true, alias: "columnOptions", required: false }] }], saved: [{ type: Output, args: ["saved"] }], cancelled: [{ type: Output, args: ["cancelled"] }], handleEscape: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDialogComponent, { className: "TaskDialogComponent", filePath: "src/app/components/task-dialog/task-dialog.component.ts", lineNumber: 15 });
})();

// src/app/components/add-column-dialog/add-column-dialog.component.ts
var AddColumnDialogComponent = class _AddColumnDialogComponent {
  columnTitle = signal("", ...ngDevMode ? [{ debugName: "columnTitle" }] : []);
  saved = output();
  cancelled = output();
  onSubmit() {
    const title = this.columnTitle().trim();
    if (title) {
      this.saved.emit(title);
      this.columnTitle.set("");
    }
  }
  onCancel() {
    this.columnTitle.set("");
    this.cancelled.emit();
  }
  static \u0275fac = function AddColumnDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddColumnDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddColumnDialogComponent, selectors: [["app-add-column-dialog"]], outputs: { saved: "saved", cancelled: "cancelled" }, decls: 15, vars: 1, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "dark:bg-black/60", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-lg", "w-full", "max-w-sm", 3, "click"], [1, "p-6"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-gray-200", "mb-4"], [1, "space-y-4", 3, "ngSubmit"], ["for", "columnTitle", 1, "block", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "mb-1"], ["id", "columnTitle", "type", "text", "name", "columnTitle", "placeholder", "e.g. Backlog", 1, "w-full", "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-700", "dark:text-gray-200", "px-3", "py-2", "shadow-sm", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3", "pt-2"], ["type", "submit", 1, "flex-1", "rounded-lg", "bg-blue-600", "px-4", "py-2", "text-sm", "font-medium", "text-white", "hover:bg-blue-700", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", 3, "click"]], template: function AddColumnDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddColumnDialogComponent_Template_div_click_0_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddColumnDialogComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Add Column");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "form", 4);
      \u0275\u0275listener("ngSubmit", function AddColumnDialogComponent_Template_form_ngSubmit_5_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div")(7, "label", 5);
      \u0275\u0275text(8, "Column name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 6);
      \u0275\u0275listener("ngModelChange", function AddColumnDialogComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.columnTitle.set($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "button", 8);
      \u0275\u0275text(12, " Add ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function AddColumnDialogComponent_Template_button_click_13_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(14, " Cancel ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.columnTitle());
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n\n/*# sourceMappingURL=add-column-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddColumnDialogComponent, [{
    type: Component,
    args: [{ selector: "app-add-column-dialog", standalone: true, imports: [FormsModule], template: '<div\r\n  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60"\r\n  (click)="onCancel()"\r\n>\r\n  <div\r\n    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-sm"\r\n    (click)="$event.stopPropagation()"\r\n  >\r\n    <div class="p-6">\r\n      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">Add Column</h2>\r\n      <form (ngSubmit)="onSubmit()" class="space-y-4">\r\n        <div>\r\n          <label for="columnTitle" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Column name</label>\r\n          <input\r\n            id="columnTitle"\r\n            type="text"\r\n            [ngModel]="columnTitle()"\r\n            (ngModelChange)="columnTitle.set($event)"\r\n            name="columnTitle"\r\n            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"\r\n            placeholder="e.g. Backlog"\r\n          />\r\n        </div>\r\n        <div class="flex gap-3 pt-2">\r\n          <button\r\n            type="submit"\r\n            class="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"\r\n          >\r\n            Add\r\n          </button>\r\n          <button\r\n            type="button"\r\n            (click)="onCancel()"\r\n            class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"\r\n          >\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/add-column-dialog/add-column-dialog.component.css */\n/*# sourceMappingURL=add-column-dialog.component.css.map */\n"] }]
  }], null, { saved: [{ type: Output, args: ["saved"] }], cancelled: [{ type: Output, args: ["cancelled"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddColumnDialogComponent, { className: "AddColumnDialogComponent", filePath: "src/app/components/add-column-dialog/add-column-dialog.component.ts", lineNumber: 11 });
})();

// src/app/components/kanban-board/kanban-board.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function KanbanBoardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 27);
    \u0275\u0275elementEnd();
  }
}
function KanbanBoardComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 20);
    \u0275\u0275element(1, "path", 28);
    \u0275\u0275elementEnd();
  }
}
function KanbanBoardComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 32);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_37_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(7, " Sign Out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.avatarInitial(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.displayName() || ctx_r1.currentUser().email, " ");
  }
}
function KanbanBoardComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "app-kanban-column", 33);
    \u0275\u0275listener("dropped", function KanbanBoardComponent_For_41_Template_app_kanban_column_dropped_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    })("editTask", function KanbanBoardComponent_For_41_Template_app_kanban_column_editTask_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditTask($event));
    })("deleteTask", function KanbanBoardComponent_For_41_Template_app_kanban_column_deleteTask_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestDeleteTask($event));
    })("deleteColumn", function KanbanBoardComponent_For_41_Template_app_kanban_column_deleteColumn_1_listener() {
      const col_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestDeleteColumn(col_r4.id, col_r4.title));
    })("clearColumn", function KanbanBoardComponent_For_41_Template_app_kanban_column_clearColumn_1_listener() {
      const col_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.requestClearColumn(col_r4.id, col_r4.title));
    })("downloadColumn", function KanbanBoardComponent_For_41_Template_app_kanban_column_downloadColumn_1_listener() {
      const col_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadColumnTasks(col_r4.id, col_r4.title));
    });
    \u0275\u0275elementStart(2, "button", 34);
    \u0275\u0275listener("click", function KanbanBoardComponent_For_41_Template_button_click_2_listener() {
      const col_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddTask(col_r4.id));
    });
    \u0275\u0275text(3, " + Add task ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDragData", col_r4);
    \u0275\u0275advance();
    \u0275\u0275property("columnId", col_r4.id)("title", col_r4.title)("tasks", col_r4.tasks)("totalTasks", ctx_r1.allTaskCount())("connectedListIds", ctx_r1.connectedListIds())("canDelete", ctx_r1.columns().length > 1);
  }
}
function KanbanBoardComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-task-dialog", 35);
    \u0275\u0275listener("saved", function KanbanBoardComponent_Conditional_42_Template_app_task_dialog_saved_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTaskDialogSaved($event));
    })("cancelled", function KanbanBoardComponent_Conditional_42_Template_app_task_dialog_cancelled_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTaskDialogCancelled());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("task", ctx_r1.editingTask())("mode", ctx_r1.dialogMode())("initialColumnId", ctx_r1.defaultColumnId())("columnOptions", ctx_r1.columns());
  }
}
function KanbanBoardComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-add-column-dialog", 36);
    \u0275\u0275listener("saved", function KanbanBoardComponent_Conditional_43_Template_app_add_column_dialog_saved_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddColumnSaved($event));
    })("cancelled", function KanbanBoardComponent_Conditional_43_Template_app_add_column_dialog_cancelled_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddColumnCancelled());
    });
    \u0275\u0275elementEnd();
  }
}
function KanbanBoardComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelClearColumn());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_44_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 39);
    \u0275\u0275text(3, "Clear column?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "button", 42);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmClearColumn());
    });
    \u0275\u0275text(8, " Clear column ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_44_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelClearColumn());
    });
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(' All tasks in "', ctx_r1.showClearColumnConfirm().columnTitle, '" will be permanently removed from this column. This cannot be undone. ');
  }
}
function KanbanBoardComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTask());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_45_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 39);
    \u0275\u0275text(3, "Delete task?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 41)(7, "button", 42);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_45_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteTask());
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_45_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteTask());
    });
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(' "', ctx.title, '" will be permanently removed. This cannot be undone. ');
  }
}
function KanbanBoardComponent_Conditional_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(' "', ctx_r1.showDeleteConfirm().columnTitle, '" has ', ctx_r1.getDeleteConfirmTaskCount(), " task(s). They will be moved to another column. ");
  }
}
function KanbanBoardComponent_Conditional_46_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' Are you sure you want to delete "', ctx_r1.showDeleteConfirm().columnTitle, '"? ');
  }
}
function KanbanBoardComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_46_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteColumn());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_46_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2", 39);
    \u0275\u0275text(3, "Delete column?");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, KanbanBoardComponent_Conditional_46_Conditional_4_Template, 2, 2, "p", 40)(5, KanbanBoardComponent_Conditional_46_Conditional_5_Template, 2, 1, "p", 40);
    \u0275\u0275elementStart(6, "div", 41)(7, "button", 42);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_46_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDeleteColumn());
    });
    \u0275\u0275text(8, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 43);
    \u0275\u0275listener("click", function KanbanBoardComponent_Conditional_46_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelDeleteColumn());
    });
    \u0275\u0275text(10, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.getDeleteConfirmTaskCount() > 0 ? 4 : 5);
  }
}
var KanbanBoardComponent = class _KanbanBoardComponent {
  taskService = inject(TaskService);
  columnService = inject(ColumnService);
  themeService = inject(ThemeService);
  toast = inject(ToastService);
  authService = inject(AuthService);
  router = inject(Router);
  /** Today (normalized to midnight) for efficient date comparisons. */
  today = (() => {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  dateFilter = signal("all", ...ngDevMode ? [{ debugName: "dateFilter" }] : []);
  showTaskDialog = signal(false, ...ngDevMode ? [{ debugName: "showTaskDialog" }] : []);
  showAddColumnDialog = signal(false, ...ngDevMode ? [{ debugName: "showAddColumnDialog" }] : []);
  showDeleteConfirm = signal(null, ...ngDevMode ? [{ debugName: "showDeleteConfirm" }] : []);
  showClearColumnConfirm = signal(null, ...ngDevMode ? [{ debugName: "showClearColumnConfirm" }] : []);
  /** Task pending delete confirmation (null = no dialog). */
  showDeleteTaskConfirm = signal(null, ...ngDevMode ? [{ debugName: "showDeleteTaskConfirm" }] : []);
  dialogMode = signal("create", ...ngDevMode ? [{ debugName: "dialogMode" }] : []);
  editingTask = signal(null, ...ngDevMode ? [{ debugName: "editingTask" }] : []);
  /** When opening "Add task", default column for the new task. */
  defaultColumnId = signal("todo", ...ngDevMode ? [{ debugName: "defaultColumnId" }] : []);
  allTasks = this.taskService.tasks;
  /** Raw column definitions (id + title), also used for column drag-drop data. */
  columnDefs = this.columnService.columns;
  /** Current user display info */
  currentUser = this.authService.currentUser;
  /** Total unfiltered task count — used to calculate column progress percentages. */
  allTaskCount = computed(() => this.allTasks().length, ...ngDevMode ? [{ debugName: "allTaskCount" }] : []);
  /** User display name: prefers name field, falls back to email prefix. */
  displayName = computed(() => {
    const u = this.currentUser();
    if (!u)
      return "";
    return u.name || u.email.split("@")[0];
  }, ...ngDevMode ? [{ debugName: "displayName" }] : []);
  /** Avatar initial from name or email. */
  avatarInitial = computed(() => {
    const u = this.currentUser();
    if (!u)
      return "?";
    return (u.name || u.email)[0].toUpperCase();
  }, ...ngDevMode ? [{ debugName: "avatarInitial" }] : []);
  filteredTasks = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const filter2 = this.dateFilter();
    const list = this.allTasks() ?? [];
    return list.filter((t) => {
      const matchesQuery = !query || t.title.toLowerCase().includes(query);
      if (!matchesQuery)
        return false;
      if (filter2 === "all")
        return true;
      if (!t.dueDate)
        return false;
      const due = new Date(t.dueDate);
      due.setHours(0, 0, 0, 0);
      const dueTime = due.getTime();
      const todayTime = this.today.getTime();
      switch (filter2) {
        case "today":
          return dueTime === todayTime;
        case "overdue":
          return dueTime < todayTime;
        case "upcoming":
          return dueTime > todayTime;
        default:
          return true;
      }
    });
  }, ...ngDevMode ? [{ debugName: "filteredTasks" }] : []);
  /** Dynamic columns with their tasks (filtered by search). Order matches column service. */
  columns = computed(() => {
    const cols = this.columnDefs();
    const tasks = this.filteredTasks() ?? [];
    return cols.map((col) => ({
      id: col.id,
      title: col.title,
      tasks: tasks.filter((t) => t.columnId === col.id)
    }));
  }, ...ngDevMode ? [{ debugName: "columns" }] : []);
  /** All column ids for CDK drop list connection. */
  connectedListIds = this.columnService.columnIds;
  /** Theme for template (light/dark). */
  theme = this.themeService.theme;
  todayLabel = new Intl.DateTimeFormat(void 0, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(this.today);
  setDateFilter(filter2) {
    this.dateFilter.set(filter2);
  }
  onDrop(event) {
    const task = event.item.data;
    const prevId = event.previousContainer.id;
    const currId = event.container.id;
    const prevIndex = event.previousIndex;
    const currIndex = event.currentIndex;
    const colIds = this.columnService.columnIds();
    const getTasksFor = (columnId) => [...this.taskService.getTasksByColumnId(columnId)];
    const removeFrom = (arr, id) => arr.filter((t) => t.id !== id);
    const insertAt = (arr, t, index) => {
      const out = arr.filter((x) => x.id !== t.id);
      out.splice(index, 0, t);
      return out;
    };
    const updatedTask = __spreadProps(__spreadValues({}, task), { columnId: currId });
    if (prevId === currId) {
      const list = getTasksFor(prevId);
      const reordered = [...list];
      const [removed] = reordered.splice(prevIndex, 1);
      reordered.splice(currIndex, 0, removed);
      const newOrdered = [];
      for (const cid of colIds) {
        const tasksForCol = cid === prevId ? reordered : getTasksFor(cid);
        newOrdered.push(...tasksForCol);
      }
      this.taskService.setTasks(newOrdered);
    } else {
      const newOrdered = [];
      for (const cid of colIds) {
        let tasksForCol = getTasksFor(cid);
        if (cid === prevId)
          tasksForCol = removeFrom(tasksForCol, task.id);
        if (cid === currId)
          tasksForCol = insertAt(tasksForCol, updatedTask, currIndex);
        newOrdered.push(...tasksForCol);
      }
      this.taskService.setTasks(newOrdered);
      const col = this.columnService.getColumnById(currId);
      this.toast.success(`Moved to ${col?.title ?? currId}`);
    }
  }
  onColumnDrop(event) {
    if (event.previousIndex === event.currentIndex)
      return;
    const current = [...this.columnDefs()];
    moveItemInArray(current, event.previousIndex, event.currentIndex);
    this.columnService.setColumns(current);
  }
  openAddTask(columnId = "todo") {
    this.defaultColumnId.set(columnId);
    this.editingTask.set(null);
    this.dialogMode.set("create");
    this.showTaskDialog.set(true);
  }
  openEditTask(task) {
    this.editingTask.set(task);
    this.dialogMode.set("edit");
    this.showTaskDialog.set(true);
  }
  onTaskDialogSaved(payload) {
    if (this.dialogMode() === "edit" && payload.id) {
      this.taskService.updateTask(payload.id, payload);
      this.toast.success("Task updated");
    } else {
      this.taskService.addTask(payload);
      this.toast.success("Task added");
    }
    this.showTaskDialog.set(false);
  }
  onTaskDialogCancelled() {
    this.showTaskDialog.set(false);
  }
  /** Request delete: show confirmation dialog instead of deleting immediately. */
  requestDeleteTask(task) {
    this.showDeleteTaskConfirm.set(task);
  }
  confirmDeleteTask() {
    const task = this.showDeleteTaskConfirm();
    if (!task)
      return;
    this.taskService.deleteTask(task.id);
    this.showDeleteTaskConfirm.set(null);
    this.toast.success("Task deleted");
  }
  cancelDeleteTask() {
    this.showDeleteTaskConfirm.set(null);
  }
  openAddColumnDialog() {
    this.showAddColumnDialog.set(true);
  }
  onAddColumnSaved(title) {
    const col = this.columnService.addColumn(title);
    this.showAddColumnDialog.set(false);
    this.toast.success(`Column "${col.title}" added`);
  }
  onAddColumnCancelled() {
    this.showAddColumnDialog.set(false);
  }
  requestDeleteColumn(columnId, columnTitle) {
    if (this.columnService.isLastColumn()) {
      this.toast.info("Cannot delete the last column.");
      return;
    }
    this.showDeleteConfirm.set({ columnId, columnTitle });
  }
  confirmDeleteColumn() {
    const data = this.showDeleteConfirm();
    if (!data)
      return;
    const { columnId, columnTitle } = data;
    const colIds = this.columnService.columnIds();
    const targetId = colIds.find((id) => id !== columnId);
    if (targetId) {
      this.taskService.reassignTasksFromColumn(columnId, targetId);
    }
    this.columnService.deleteColumn(columnId);
    this.showDeleteConfirm.set(null);
    this.toast.success(`Column "${columnTitle}" deleted.`);
  }
  cancelDeleteColumn() {
    this.showDeleteConfirm.set(null);
  }
  requestClearColumn(columnId, columnTitle) {
    this.showClearColumnConfirm.set({ columnId, columnTitle });
  }
  confirmClearColumn() {
    const data = this.showClearColumnConfirm();
    if (!data)
      return;
    const { columnId, columnTitle } = data;
    const taskCount = this.taskService.getTasksByColumnId(columnId).length;
    if (taskCount > 0) {
      this.taskService.clearTasksByColumnId(columnId);
      this.toast.success(`Cleared ${taskCount} task(s) from "${columnTitle}".`);
    }
    this.showClearColumnConfirm.set(null);
  }
  cancelClearColumn() {
    this.showClearColumnConfirm.set(null);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
    const newTheme = this.themeService.theme();
    this.toast.success(newTheme === "dark" ? "Dark mode on" : "Light mode on");
  }
  /** Task count for the column currently in delete-confirm dialog (for message). */
  getDeleteConfirmTaskCount() {
    const data = this.showDeleteConfirm();
    if (!data)
      return 0;
    return this.taskService.getTasksByColumnId(data.columnId).length;
  }
  // ─── Logout ───────────────────────────────────────────────────────────────
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
    this.toast.success("Signed out successfully.");
  }
  // ─── TXT Download (Feature 7) ─────────────────────────────────────────────
  downloadFilteredTasks() {
    const tasks = this.filteredTasks() ?? [];
    const cols = this.columnDefs();
    this.downloadAsTxt(tasks, cols, "flowboard-tasks.txt");
    this.toast.info("Downloaded tasks as .txt");
  }
  downloadColumnTasks(columnId, columnTitle) {
    const tasks = this.taskService.getTasksByColumnId(columnId);
    const col = this.columnService.getColumnById(columnId);
    this.downloadAsTxt(tasks, col ? [col] : [], "flowboard-tasks.txt");
    this.toast.info(`Downloaded tasks for "${columnTitle}".`);
  }
  downloadAsTxt(tasks, cols, filename) {
    try {
      const lines = [];
      if (cols.length === 0) {
        for (const t of tasks) {
          const due = t.dueDate ?? "N/A";
          lines.push(`* ${t.title} (${t.priority}) - Due: ${due}`);
        }
      } else {
        for (const col of cols) {
          const colTasks = tasks.filter((t) => t.columnId === col.id);
          if (colTasks.length === 0)
            continue;
          lines.push(`=== ${col.title.toUpperCase()} ===`);
          lines.push("");
          for (const t of colTasks) {
            const due = t.dueDate ?? "N/A";
            lines.push(`* ${t.title} (${t.priority}) - Due: ${due}`);
          }
          lines.push("");
        }
      }
      const content = lines.join("\n").trim();
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      this.toast.error("Unable to download tasks.");
      console.error(e);
    }
  }
  static \u0275fac = function KanbanBoardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KanbanBoardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanBoardComponent, selectors: [["app-kanban-board"]], decls: 47, vars: 69, consts: [[1, "flex", "flex-col", "h-full", "px-4", "pt-4", "pb-2", "max-w-[1600px]", "w-full", "mx-auto", "overflow-hidden"], [1, "sticky", "top-0", "z-10", "-mx-4", "px-4", "py-4", "mb-6", "-mt-6", "bg-white/80", "dark:bg-gray-900/80", "backdrop-blur-md", "border-b", "border-gray-200", "dark:border-gray-700", "transition-shadow", "duration-200"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-4"], [1, "flex", "flex-col", "gap-1"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-gray-100"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], [1, "flex", "flex-wrap", "items-center", "gap-2", "sm:gap-3"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "search", "placeholder", "Search tasks by title...", 1, "rounded-xl", "border", "border-gray-300", "dark:border-gray-600", "dark:bg-gray-800", "dark:text-gray-200", "px-3", "py-2", "text-sm", "text-gray-900", "shadow-sm", "focus:border-blue-500", "focus:ring-2", "focus:ring-blue-500/20", "focus:outline-none", "min-w-[200px]", "transition-shadow", "duration-200", 3, "input", "value"], ["role", "radiogroup", "aria-label", "Filter tasks by due date", 1, "flex", "items-center", "gap-1", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "px-2", "py-1"], ["type", "button", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-1", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "px-2", "py-1"], ["routerLink", "/board", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "bg-blue-500", "text-white", "shadow-sm"], ["routerLink", "/dashboard", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], ["routerLink", "/profile", 1, "px-2.5", "py-1", "rounded-lg", "text-xs", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-gray-100", "dark:hover:bg-gray-700/60", "transition-colors", "duration-150"], [1, "flex", "items-center", "gap-2", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700", "bg-gray-50/50", "dark:bg-gray-800/50", "p-1"], ["type", "button", 1, "rounded-lg", "border", "border-transparent", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-white", "dark:hover:bg-gray-700", "hover:shadow-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-900", "transition-all", "duration-200", 3, "click"], ["type", "button", 1, "rounded-lg", "bg-blue-500", "px-3", "py-2", "text-sm", "font-medium", "text-white", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-900", "transition-all", "duration-200", 3, "click"], ["type", "button", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white/80", "dark:bg-gray-800", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-700", "hover:shadow-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-900", "transition-all", "duration-200", 3, "click"], ["type", "button", 1, "rounded-lg", "p-2", "text-gray-500", "dark:text-gray-400", "hover:bg-white", "dark:hover:bg-gray-700", "hover:text-gray-700", "dark:hover:text-gray-200", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-900", "transition-all", "duration-200", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5"], [1, "flex", "items-center", "gap-2", "pl-1"], ["cdkDropListGroup", "", 1, "flex-1", "min-h-0", "min-w-0", "flex", "overflow-hidden"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "grid", "gap-4", "flex-1", "min-w-0", "h-full", "overflow-x-auto", "pb-2", "items-stretch", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "h-full", "cursor-grab", "active:cursor-grabbing", "select-none", 3, "cdkDragData"], [3, "task", "mode", "initialColumnId", "columnOptions"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "dark:bg-black/60"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"], [1, "flex", "items-center", "gap-2", "rounded-xl", "border", "border-indigo-100", "dark:border-indigo-900/60", "bg-indigo-50/70", "dark:bg-indigo-900/30", "px-3", "py-1.5"], [1, "w-6", "h-6", "rounded-full", "bg-gradient-to-br", "from-blue-500", "to-indigo-600", "flex", "items-center", "justify-center", "text-white", "text-xs", "font-bold", "flex-shrink-0"], [1, "text-xs", "font-medium", "text-indigo-700", "dark:text-indigo-300", "max-w-[130px]", "truncate", "hidden", "sm:block"], ["type", "button", "id", "logout-btn", 1, "rounded-lg", "border", "border-gray-300", "dark:border-gray-600", "bg-white/80", "dark:bg-gray-800", "px-3", "py-2", "text-sm", "font-medium", "text-gray-600", "dark:text-gray-300", "hover:bg-red-50", "dark:hover:bg-red-900/20", "hover:text-red-600", "dark:hover:text-red-400", "hover:border-red-300", "dark:hover:border-red-800", "focus:outline-none", "focus:ring-2", "focus:ring-red-400", "focus:ring-offset-2", "dark:focus:ring-offset-gray-900", "transition-all", "duration-200", 3, "click"], [3, "dropped", "editTask", "deleteTask", "deleteColumn", "clearColumn", "downloadColumn", "columnId", "title", "tasks", "totalTasks", "connectedListIds", "canDelete"], ["type", "button", 1, "mt-2", "w-full", "text-sm", "text-gray-500", "dark:text-gray-400", "hover:text-blue-600", "dark:hover:text-blue-400", "hover:bg-gray-50", "dark:hover:bg-gray-700/50", "border", "border-dashed", "border-gray-300", "dark:border-gray-600", "rounded-xl", "py-2.5", "transition-colors", "duration-200", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500/20", 3, "click"], [3, "saved", "cancelled", "task", "mode", "initialColumnId", "columnOptions"], [3, "saved", "cancelled"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-black/40", "dark:bg-black/60", 3, "click"], [1, "bg-white", "dark:bg-gray-800", "rounded-2xl", "shadow-lg", "w-full", "max-w-sm", "p-6", 3, "click"], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-gray-200", "mb-2"], [1, "text-sm", "text-gray-600", "dark:text-gray-400", "mb-4"], [1, "flex", "gap-3"], ["type", "button", 1, "flex-1", "rounded-xl", "bg-red-500", "px-4", "py-2.5", "text-sm", "font-medium", "text-white", "hover:bg-red-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", "transition-colors", "duration-200", 3, "click"], ["type", "button", 1, "rounded-xl", "border", "border-gray-300", "dark:border-gray-600", "bg-white", "dark:bg-gray-700", "px-4", "py-2.5", "text-sm", "font-medium", "text-gray-700", "dark:text-gray-200", "hover:bg-gray-50", "dark:hover:bg-gray-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "dark:focus:ring-offset-gray-800", "transition-colors", "duration-200", 3, "click"]], template: function KanbanBoardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
      \u0275\u0275text(5, "FlowBoard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "input", 8);
      \u0275\u0275listener("input", function KanbanBoardComponent_Template_input_input_10_listener($event) {
        return ctx.searchQuery.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_12_listener() {
        return ctx.setDateFilter("all");
      });
      \u0275\u0275text(13, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 10);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_14_listener() {
        return ctx.setDateFilter("today");
      });
      \u0275\u0275text(15, " Due today ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_16_listener() {
        return ctx.setDateFilter("overdue");
      });
      \u0275\u0275text(17, " Overdue ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 10);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_18_listener() {
        return ctx.setDateFilter("upcoming");
      });
      \u0275\u0275text(19, " Upcoming ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "nav", 11)(21, "a", 12);
      \u0275\u0275text(22, " Board ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 13);
      \u0275\u0275text(24, " Dashboard ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 14);
      \u0275\u0275text(26, " Profile ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 15)(28, "button", 16);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_28_listener() {
        return ctx.openAddColumnDialog();
      });
      \u0275\u0275text(29, " + Add Column ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 17);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_30_listener() {
        let tmp_0_0;
        return ctx.openAddTask((tmp_0_0 = ctx.columns()[0]) == null ? null : tmp_0_0.id);
      });
      \u0275\u0275text(31, " Add Task ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 18);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_32_listener() {
        return ctx.downloadFilteredTasks();
      });
      \u0275\u0275text(33, " \u2193 Download ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275listener("click", function KanbanBoardComponent_Template_button_click_34_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275conditionalCreate(35, KanbanBoardComponent_Conditional_35_Template, 2, 0, ":svg:svg", 20)(36, KanbanBoardComponent_Conditional_36_Template, 2, 0, ":svg:svg", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, KanbanBoardComponent_Conditional_37_Template, 8, 2, "div", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 22)(39, "div", 23);
      \u0275\u0275listener("cdkDropListDropped", function KanbanBoardComponent_Template_div_cdkDropListDropped_39_listener($event) {
        return ctx.onColumnDrop($event);
      });
      \u0275\u0275repeaterCreate(40, KanbanBoardComponent_For_41_Template, 4, 7, "div", 24, _forTrack03);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(42, KanbanBoardComponent_Conditional_42_Template, 1, 4, "app-task-dialog", 25);
      \u0275\u0275conditionalCreate(43, KanbanBoardComponent_Conditional_43_Template, 1, 0, "app-add-column-dialog");
      \u0275\u0275conditionalCreate(44, KanbanBoardComponent_Conditional_44_Template, 11, 1, "div", 26);
      \u0275\u0275conditionalCreate(45, KanbanBoardComponent_Conditional_45_Template, 11, 1, "div", 26);
      \u0275\u0275conditionalCreate(46, KanbanBoardComponent_Conditional_46_Template, 11, 1, "div", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_39_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" Today, ", ctx.todayLabel, " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.searchQuery());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-blue-500", ctx.dateFilter() === "all")("text-white", ctx.dateFilter() === "all")("shadow-sm", ctx.dateFilter() === "all")("text-gray-600", ctx.dateFilter() !== "all")("dark:text-gray-300", ctx.dateFilter() !== "all")("hover:bg-gray-100", ctx.dateFilter() !== "all")("dark:hover:bg-gray-700/60", ctx.dateFilter() !== "all");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-blue-500", ctx.dateFilter() === "today")("text-white", ctx.dateFilter() === "today")("shadow-sm", ctx.dateFilter() === "today")("text-gray-600", ctx.dateFilter() !== "today")("dark:text-gray-300", ctx.dateFilter() !== "today")("hover:bg-gray-100", ctx.dateFilter() !== "today")("dark:hover:bg-gray-700/60", ctx.dateFilter() !== "today");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-red-500", ctx.dateFilter() === "overdue")("text-white", ctx.dateFilter() === "overdue")("shadow-sm", ctx.dateFilter() === "overdue")("text-gray-600", ctx.dateFilter() !== "overdue")("dark:text-gray-300", ctx.dateFilter() !== "overdue")("hover:bg-gray-100", ctx.dateFilter() !== "overdue")("dark:hover:bg-gray-700/60", ctx.dateFilter() !== "overdue");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-emerald-500", ctx.dateFilter() === "upcoming")("text-white", ctx.dateFilter() === "upcoming")("shadow-sm", ctx.dateFilter() === "upcoming")("text-gray-600", ctx.dateFilter() !== "upcoming")("dark:text-gray-300", ctx.dateFilter() !== "upcoming")("hover:bg-gray-100", ctx.dateFilter() !== "upcoming")("dark:hover:bg-gray-700/60", ctx.dateFilter() !== "upcoming");
      \u0275\u0275advance(16);
      \u0275\u0275attribute("aria-label", ctx.theme() === "light" ? "Switch to dark mode" : "Switch to light mode");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme() === "light" ? 35 : 36);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentUser() ? 37 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("grid-template-columns", "repeat(" + ctx.columns().length + ", minmax(260px, 1fr))");
      \u0275\u0275property("cdkDropListData", ctx.columnDefs());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.columns());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showTaskDialog() ? 42 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddColumnDialog() ? 43 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showClearColumnConfirm() ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_39_0 = ctx.showDeleteTaskConfirm()) ? 45 : -1, tmp_39_0);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showDeleteConfirm() ? 46 : -1);
    }
  }, dependencies: [
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    KanbanColumnComponent,
    TaskDialogComponent,
    AddColumnDialogComponent,
    RouterLink
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0%;\n  min-height: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=kanban-board.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanBoardComponent, [{
    type: Component,
    args: [{ selector: "app-kanban-board", standalone: true, imports: [
      CdkDropListGroup,
      CdkDropList,
      CdkDrag,
      KanbanColumnComponent,
      TaskDialogComponent,
      AddColumnDialogComponent,
      RouterLink
    ], template: `<div class="flex flex-col h-full px-4 pt-4 pb-2 max-w-[1600px] w-full mx-auto overflow-hidden">\r
  <!-- Sticky header: translucent background, backdrop blur, subtle border -->\r
  <header\r
    class="sticky top-0 z-10 -mx-4 px-4 py-4 mb-6 -mt-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-shadow duration-200">\r
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">\r
      <div class="flex flex-col gap-1">\r
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100">FlowBoard</h1>\r
        <p class="text-sm text-gray-500 dark:text-gray-400">\r
          Today, {{ todayLabel }}\r
        </p>\r
      </div>\r
      <div class="flex flex-wrap items-center gap-2 sm:gap-3">\r
        <div class="flex flex-wrap items-center gap-2">\r
          <input type="search" [value]="searchQuery()" (input)="searchQuery.set($any($event.target).value)"\r
            placeholder="Search tasks by title..."\r
            class="rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none min-w-[200px] transition-shadow duration-200" />\r
          <div\r
            class="flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-2 py-1"\r
            role="radiogroup" aria-label="Filter tasks by due date">\r
            <button type="button" (click)="setDateFilter('all')"\r
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"\r
              [class.bg-blue-500]="dateFilter() === 'all'" [class.text-white]="dateFilter() === 'all'"\r
              [class.shadow-sm]="dateFilter() === 'all'" [class.text-gray-600]="dateFilter() !== 'all'"\r
              [class.dark:text-gray-300]="dateFilter() !== 'all'" [class.hover:bg-gray-100]="dateFilter() !== 'all'"\r
              [class.dark:hover:bg-gray-700/60]="dateFilter() !== 'all'">\r
              All\r
            </button>\r
            <button type="button" (click)="setDateFilter('today')"\r
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"\r
              [class.bg-blue-500]="dateFilter() === 'today'" [class.text-white]="dateFilter() === 'today'"\r
              [class.shadow-sm]="dateFilter() === 'today'" [class.text-gray-600]="dateFilter() !== 'today'"\r
              [class.dark:text-gray-300]="dateFilter() !== 'today'" [class.hover:bg-gray-100]="dateFilter() !== 'today'"\r
              [class.dark:hover:bg-gray-700/60]="dateFilter() !== 'today'">\r
              Due today\r
            </button>\r
            <button type="button" (click)="setDateFilter('overdue')"\r
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"\r
              [class.bg-red-500]="dateFilter() === 'overdue'" [class.text-white]="dateFilter() === 'overdue'"\r
              [class.shadow-sm]="dateFilter() === 'overdue'" [class.text-gray-600]="dateFilter() !== 'overdue'"\r
              [class.dark:text-gray-300]="dateFilter() !== 'overdue'"\r
              [class.hover:bg-gray-100]="dateFilter() !== 'overdue'"\r
              [class.dark:hover:bg-gray-700/60]="dateFilter() !== 'overdue'">\r
              Overdue\r
            </button>\r
            <button type="button" (click)="setDateFilter('upcoming')"\r
              class="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"\r
              [class.bg-emerald-500]="dateFilter() === 'upcoming'" [class.text-white]="dateFilter() === 'upcoming'"\r
              [class.shadow-sm]="dateFilter() === 'upcoming'" [class.text-gray-600]="dateFilter() !== 'upcoming'"\r
              [class.dark:text-gray-300]="dateFilter() !== 'upcoming'"\r
              [class.hover:bg-gray-100]="dateFilter() !== 'upcoming'"\r
              [class.dark:hover:bg-gray-700/60]="dateFilter() !== 'upcoming'">\r
              Upcoming\r
            </button>\r
          </div>\r
        </div>\r
        <!-- Navigation links -->\r
        <nav\r
          class="flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 px-2 py-1">\r
          <a routerLink="/board" class="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500 text-white shadow-sm">\r
            Board\r
          </a>\r
          <a routerLink="/dashboard"\r
            class="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-150">\r
            Dashboard\r
          </a>\r
          <a routerLink="/profile"\r
            class="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/60 transition-colors duration-150">\r
            Profile\r
          </a>\r
        </nav>\r
        <div\r
          class="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-1">\r
          <button type="button" (click)="openAddColumnDialog()"\r
            class="rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">\r
            + Add Column\r
          </button>\r
          <button type="button" (click)="openAddTask(columns()[0]?.id)"\r
            class="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">\r
            Add Task\r
          </button>\r
          <button type="button" (click)="downloadFilteredTasks()"\r
            class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">\r
            \u2193 Download\r
          </button>\r
          <button type="button" (click)="toggleTheme()"\r
            class="rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200"\r
            [attr.aria-label]="theme() === 'light' ? 'Switch to dark mode' : 'Switch to light mode'">\r
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
        </div>\r
\r
        <!-- User info + Logout -->\r
        @if (currentUser()) {\r
        <div class="flex items-center gap-2 pl-1">\r
          <div\r
            class="flex items-center gap-2 rounded-xl border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-900/30 px-3 py-1.5">\r
            <div\r
              class="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">\r
              {{ avatarInitial() }}\r
            </div>\r
            <span\r
              class="text-xs font-medium text-indigo-700 dark:text-indigo-300 max-w-[130px] truncate hidden sm:block">\r
              {{ displayName() || currentUser()!.email }}\r
            </span>\r
          </div>\r
          <button type="button" id="logout-btn" (click)="logout()"\r
            class="rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-300 dark:hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200">\r
            Sign Out\r
          </button>\r
        </div>\r
        }\r
      </div>\r
    </div>\r
  </header>\r
\r
  <!-- Dynamic Kanban columns -->\r
  <div cdkDropListGroup class="flex-1 min-h-0 min-w-0 flex overflow-hidden">\r
    <div cdkDropList cdkDropListOrientation="horizontal" [cdkDropListData]="columnDefs()"\r
      (cdkDropListDropped)="onColumnDrop($event)"\r
      class="grid gap-4 flex-1 min-w-0 h-full overflow-x-auto pb-2 items-stretch"\r
      [style.grid-template-columns]="'repeat(' + columns().length + ', minmax(260px, 1fr))'">\r
      @for (col of columns(); track col.id) {\r
      <div cdkDrag [cdkDragData]="col" class="h-full cursor-grab active:cursor-grabbing select-none">\r
        <app-kanban-column [columnId]="col.id" [title]="col.title" [tasks]="col.tasks" [totalTasks]="allTaskCount()"\r
          [connectedListIds]="connectedListIds()" [canDelete]="columns().length > 1" (dropped)="onDrop($event)"\r
          (editTask)="openEditTask($event)" (deleteTask)="requestDeleteTask($event)"\r
          (deleteColumn)="requestDeleteColumn(col.id, col.title)" (clearColumn)="requestClearColumn(col.id, col.title)"\r
          (downloadColumn)="downloadColumnTasks(col.id, col.title)">\r
          <button type="button" (click)="openAddTask(col.id)"\r
            class="mt-2 w-full text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-dashed border-gray-300 dark:border-gray-600 rounded-xl py-2.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20">\r
            + Add task\r
          </button>\r
        </app-kanban-column>\r
      </div>\r
      }\r
    </div>\r
  </div>\r
\r
  @if (showTaskDialog()) {\r
  <app-task-dialog [task]="editingTask()" [mode]="dialogMode()" [initialColumnId]="defaultColumnId()"\r
    [columnOptions]="columns()" (saved)="onTaskDialogSaved($event)" (cancelled)="onTaskDialogCancelled()" />\r
  }\r
\r
  @if (showAddColumnDialog()) {\r
  <app-add-column-dialog (saved)="onAddColumnSaved($event)" (cancelled)="onAddColumnCancelled()" />\r
  }\r
\r
  <!-- Clear column confirmation -->\r
  @if (showClearColumnConfirm()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60"\r
    (click)="cancelClearColumn()">\r
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-sm p-6" (click)="$event.stopPropagation()">\r
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Clear column?</h2>\r
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
        All tasks in "{{ showClearColumnConfirm()!.columnTitle }}" will be permanently removed from this column.\r
        This cannot be undone.\r
      </p>\r
      <div class="flex gap-3">\r
        <button type="button" (click)="confirmClearColumn()"\r
          class="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Clear column\r
        </button>\r
        <button type="button" (click)="cancelClearColumn()"\r
          class="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Cancel\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- Delete task confirmation -->\r
  @if (showDeleteTaskConfirm(); as taskToDelete) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60"\r
    (click)="cancelDeleteTask()">\r
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-sm p-6" (click)="$event.stopPropagation()">\r
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Delete task?</h2>\r
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
        "{{ taskToDelete.title }}" will be permanently removed. This cannot be undone.\r
      </p>\r
      <div class="flex gap-3">\r
        <button type="button" (click)="confirmDeleteTask()"\r
          class="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Delete\r
        </button>\r
        <button type="button" (click)="cancelDeleteTask()"\r
          class="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Cancel\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- Delete column confirmation -->\r
  @if (showDeleteConfirm()) {\r
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60"\r
    (click)="cancelDeleteColumn()">\r
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-sm p-6" (click)="$event.stopPropagation()">\r
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Delete column?</h2>\r
      @if (getDeleteConfirmTaskCount() > 0) {\r
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
        "{{ showDeleteConfirm()!.columnTitle }}" has {{ getDeleteConfirmTaskCount() }} task(s). They will be moved to\r
        another column.\r
      </p>\r
      } @else {\r
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">\r
        Are you sure you want to delete "{{ showDeleteConfirm()!.columnTitle }}"?\r
      </p>\r
      }\r
      <div class="flex gap-3">\r
        <button type="button" (click)="confirmDeleteColumn()"\r
          class="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Delete\r
        </button>\r
        <button type="button" (click)="cancelDeleteColumn()"\r
          class="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200">\r
          Cancel\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
  }\r
</div>`, styles: ["/* src/app/components/kanban-board/kanban-board.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0%;\n  min-height: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=kanban-board.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanBoardComponent, { className: "KanbanBoardComponent", filePath: "src/app/components/kanban-board/kanban-board.component.ts", lineNumber: 37 });
})();
export {
  KanbanBoardComponent
};
//# sourceMappingURL=chunk-4E2TQJYK.js.map
