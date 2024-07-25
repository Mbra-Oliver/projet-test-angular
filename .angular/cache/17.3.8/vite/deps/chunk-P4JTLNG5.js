import {
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-Q572GOZ6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-outlet.mjs
var _NzStringTemplateOutletDirective = class _NzStringTemplateOutletDirective {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  recreateView() {
    this.viewContainer.clear();
    const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
    const templateRef = isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef;
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
  }
  updateContext() {
    const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
    const newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
    const oldCtx = this.embeddedViewRef.context;
    if (newCtx) {
      for (const propName of Object.keys(newCtx)) {
        oldCtx[propName] = newCtx[propName];
      }
    }
  }
  constructor(viewContainer, templateRef) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
    this.embeddedViewRef = null;
    this.context = new NzStringTemplateOutletContext();
    this.nzStringTemplateOutletContext = null;
    this.nzStringTemplateOutlet = null;
  }
  ngOnChanges(changes) {
    const {
      nzStringTemplateOutletContext,
      nzStringTemplateOutlet
    } = changes;
    const shouldRecreateView = () => {
      let shouldOutletRecreate = false;
      if (nzStringTemplateOutlet) {
        if (nzStringTemplateOutlet.firstChange) {
          shouldOutletRecreate = true;
        } else {
          const isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
          const isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
          shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
        }
      }
      const hasContextShapeChanged = (ctxChange) => {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
          for (const propName of currCtxKeys) {
            if (prevCtxKeys.indexOf(propName) === -1) {
              return true;
            }
          }
          return false;
        } else {
          return true;
        }
      };
      const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
      return shouldContextRecreate || shouldOutletRecreate;
    };
    if (nzStringTemplateOutlet) {
      this.context.$implicit = nzStringTemplateOutlet.currentValue;
    }
    const recreateView = shouldRecreateView();
    if (recreateView) {
      this.recreateView();
    } else {
      this.updateContext();
    }
  }
};
_NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) {
  return new (t || _NzStringTemplateOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_NzStringTemplateOutletDirective.ɵdir = ɵɵdefineDirective({
  type: _NzStringTemplateOutletDirective,
  selectors: [["", "nzStringTemplateOutlet", ""]],
  inputs: {
    nzStringTemplateOutletContext: "nzStringTemplateOutletContext",
    nzStringTemplateOutlet: "nzStringTemplateOutlet"
  },
  exportAs: ["nzStringTemplateOutlet"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzStringTemplateOutletDirective = _NzStringTemplateOutletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStringTemplateOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzStringTemplateOutlet]",
      exportAs: "nzStringTemplateOutlet",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], {
    nzStringTemplateOutletContext: [{
      type: Input
    }],
    nzStringTemplateOutlet: [{
      type: Input
    }]
  });
})();
var NzStringTemplateOutletContext = class {
};
var _NzOutletModule = class _NzOutletModule {
};
_NzOutletModule.ɵfac = function NzOutletModule_Factory(t) {
  return new (t || _NzOutletModule)();
};
_NzOutletModule.ɵmod = ɵɵdefineNgModule({
  type: _NzOutletModule,
  imports: [NzStringTemplateOutletDirective],
  exports: [NzStringTemplateOutletDirective]
});
_NzOutletModule.ɵinj = ɵɵdefineInjector({});
var NzOutletModule = _NzOutletModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOutletModule, [{
    type: NgModule,
    args: [{
      imports: [NzStringTemplateOutletDirective],
      exports: [NzStringTemplateOutletDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/node_modules/@angular/cdk/fesm2022/keycodes.mjs
var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ESCAPE = 27;
var SPACE = 32;
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

export {
  NzStringTemplateOutletDirective,
  NzOutletModule,
  BACKSPACE,
  TAB,
  ENTER,
  SHIFT,
  CONTROL,
  ALT,
  ESCAPE,
  SPACE,
  UP_ARROW,
  DOWN_ARROW,
  META,
  MAC_META,
  hasModifierKey
};
//# sourceMappingURL=chunk-P4JTLNG5.js.map
