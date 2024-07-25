import {
  MediaMatcher,
  NzBreakpointService,
  gridResponsiveMap
} from "./chunk-TEQDSSMB.js";
import {
  Directionality
} from "./chunk-73JY6KPG.js";
import {
  isNotNil
} from "./chunk-OYP37FM6.js";
import {
  Platform
} from "./chunk-PSIBVKLZ.js";
import {
  Directive,
  ElementRef,
  Host,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵstyleProp
} from "./chunk-Q572GOZ6.js";
import {
  ReplaySubject,
  Subject,
  takeUntil
} from "./chunk-JMJQA5TZ.js";
import {
  __spreadValues
} from "./chunk-X6JV76XL.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-grid.mjs
var _NzRowDirective = class _NzRowDirective {
  getGutter() {
    const results = [null, null];
    const gutter = this.nzGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object" && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen) => {
          const bp = screen;
          if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
            results[index] = g[bp];
          }
        });
      } else {
        results[index] = Number(g) || null;
      }
    });
    return results;
  }
  setGutterStyle() {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name, gutter) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter("margin-left", horizontalGutter);
    renderGutter("margin-right", horizontalGutter);
    renderGutter("margin-top", verticalGutter);
    renderGutter("margin-bottom", verticalGutter);
  }
  constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.mediaMatcher = mediaMatcher;
    this.ngZone = ngZone;
    this.platform = platform;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
    this.nzAlign = null;
    this.nzJustify = null;
    this.nzGutter = null;
    this.actualGutter$ = new ReplaySubject(1);
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setGutterStyle();
  }
  ngOnChanges(changes) {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.setGutterStyle();
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzRowDirective.ɵfac = function NzRowDirective_Factory(t) {
  return new (t || _NzRowDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(MediaMatcher), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(Directionality, 8));
};
_NzRowDirective.ɵdir = ɵɵdefineDirective({
  type: _NzRowDirective,
  selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
  hostAttrs: [1, "ant-row"],
  hostVars: 20,
  hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-space-evenly", ctx.nzJustify === "space-evenly")("ant-row-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAlign: "nzAlign",
    nzJustify: "nzJustify",
    nzGutter: "nzGutter"
  },
  exportAs: ["nzRow"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzRowDirective = _NzRowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-row],nz-row,nz-form-item",
      exportAs: "nzRow",
      host: {
        class: "ant-row",
        "[class.ant-row-top]": `nzAlign === 'top'`,
        "[class.ant-row-middle]": `nzAlign === 'middle'`,
        "[class.ant-row-bottom]": `nzAlign === 'bottom'`,
        "[class.ant-row-start]": `nzJustify === 'start'`,
        "[class.ant-row-end]": `nzJustify === 'end'`,
        "[class.ant-row-center]": `nzJustify === 'center'`,
        "[class.ant-row-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-row-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-row-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-row-rtl]": `dir === "rtl"`
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: MediaMatcher
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzBreakpointService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAlign: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzGutter: [{
      type: Input
    }]
  });
})();
var _NzColDirective = class _NzColDirective {
  setHostClassMap() {
    const hostClassMap = __spreadValues({
      ["ant-col"]: true,
      [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan),
      [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
      [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
      [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull),
      [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush),
      ["ant-col-rtl"]: this.dir === "rtl"
    }, this.generateClass());
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = __spreadValues({}, hostClassMap);
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }
  setHostFlexStyle() {
    this.hostFlexStyle = this.parseFlex(this.nzFlex);
  }
  parseFlex(flex) {
    if (typeof flex === "number") {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === "string") {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }
  generateClass() {
    const listOfSizeInputName = ["nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"];
    const listClassMap = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace("nz", "").toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === "number" || typeof this[name] === "string") {
          listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name];
          const prefixArray = ["span", "pull", "push", "offset", "order"];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === "span" ? "-" : `-${prefix}-`;
            listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }
  constructor(elementRef, nzRowDirective, renderer, directionality) {
    this.elementRef = elementRef;
    this.nzRowDirective = nzRowDirective;
    this.renderer = renderer;
    this.directionality = directionality;
    this.classMap = {};
    this.destroy$ = new Subject();
    this.hostFlexStyle = null;
    this.dir = "ltr";
    this.nzFlex = null;
    this.nzSpan = null;
    this.nzOrder = null;
    this.nzOffset = null;
    this.nzPush = null;
    this.nzPull = null;
    this.nzXs = null;
    this.nzSm = null;
    this.nzMd = null;
    this.nzLg = null;
    this.nzXl = null;
    this.nzXXl = null;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setHostClassMap();
    });
    this.setHostClassMap();
    this.setHostFlexStyle();
  }
  ngOnChanges(changes) {
    this.setHostClassMap();
    const {
      nzFlex
    } = changes;
    if (nzFlex) {
      this.setHostFlexStyle();
    }
  }
  ngAfterViewInit() {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
        const renderGutter = (name, gutter) => {
          const nativeElement = this.elementRef.nativeElement;
          if (gutter !== null) {
            this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
          }
        };
        renderGutter("padding-left", horizontalGutter);
        renderGutter("padding-right", horizontalGutter);
        renderGutter("padding-top", verticalGutter);
        renderGutter("padding-bottom", verticalGutter);
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzColDirective.ɵfac = function NzColDirective_Factory(t) {
  return new (t || _NzColDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzRowDirective, 9), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8));
};
_NzColDirective.ɵdir = ɵɵdefineDirective({
  type: _NzColDirective,
  selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
  hostVars: 2,
  hostBindings: function NzColDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("flex", ctx.hostFlexStyle);
    }
  },
  inputs: {
    nzFlex: "nzFlex",
    nzSpan: "nzSpan",
    nzOrder: "nzOrder",
    nzOffset: "nzOffset",
    nzPush: "nzPush",
    nzPull: "nzPull",
    nzXs: "nzXs",
    nzSm: "nzSm",
    nzMd: "nzMd",
    nzLg: "nzLg",
    nzXl: "nzXl",
    nzXXl: "nzXXl"
  },
  exportAs: ["nzCol"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzColDirective = _NzColDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
      exportAs: "nzCol",
      host: {
        "[style.flex]": "hostFlexStyle"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzRowDirective,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzFlex: [{
      type: Input
    }],
    nzSpan: [{
      type: Input
    }],
    nzOrder: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzPush: [{
      type: Input
    }],
    nzPull: [{
      type: Input
    }],
    nzXs: [{
      type: Input
    }],
    nzSm: [{
      type: Input
    }],
    nzMd: [{
      type: Input
    }],
    nzLg: [{
      type: Input
    }],
    nzXl: [{
      type: Input
    }],
    nzXXl: [{
      type: Input
    }]
  });
})();
var _NzGridModule = class _NzGridModule {
};
_NzGridModule.ɵfac = function NzGridModule_Factory(t) {
  return new (t || _NzGridModule)();
};
_NzGridModule.ɵmod = ɵɵdefineNgModule({
  type: _NzGridModule,
  imports: [NzColDirective, NzRowDirective],
  exports: [NzColDirective, NzRowDirective]
});
_NzGridModule.ɵinj = ɵɵdefineInjector({});
var NzGridModule = _NzGridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGridModule, [{
    type: NgModule,
    args: [{
      imports: [NzColDirective, NzRowDirective],
      exports: [NzColDirective, NzRowDirective]
    }]
  }], null, null);
})();

export {
  NzRowDirective,
  NzColDirective,
  NzGridModule
};
//# sourceMappingURL=chunk-H7NBY2RL.js.map
