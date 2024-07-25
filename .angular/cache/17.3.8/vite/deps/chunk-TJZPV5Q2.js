import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-Q572GOZ6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs
var _NzTransitionPatchDirective = class _NzTransitionPatchDirective {
  setHiddenAttribute() {
    if (this.hidden) {
      if (typeof this.hidden === "string") {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", this.hidden);
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
      }
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, "hidden");
    }
  }
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.hidden = null;
    this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
  }
  ngOnChanges() {
    this.setHiddenAttribute();
  }
  ngAfterViewInit() {
    this.setHiddenAttribute();
  }
};
_NzTransitionPatchDirective.ɵfac = function NzTransitionPatchDirective_Factory(t) {
  return new (t || _NzTransitionPatchDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_NzTransitionPatchDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTransitionPatchDirective,
  selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"], ["nz-input-group"]],
  inputs: {
    hidden: "hidden"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzTransitionPatchDirective = _NzTransitionPatchDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hidden: [{
      type: Input
    }]
  });
})();
var _NzTransitionPatchModule = class _NzTransitionPatchModule {
};
_NzTransitionPatchModule.ɵfac = function NzTransitionPatchModule_Factory(t) {
  return new (t || _NzTransitionPatchModule)();
};
_NzTransitionPatchModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTransitionPatchModule,
  imports: [NzTransitionPatchDirective],
  exports: [NzTransitionPatchDirective]
});
_NzTransitionPatchModule.ɵinj = ɵɵdefineInjector({});
var NzTransitionPatchModule = _NzTransitionPatchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransitionPatchDirective],
      exports: [NzTransitionPatchDirective]
    }]
  }], null, null);
})();

export {
  NzTransitionPatchDirective,
  NzTransitionPatchModule
};
//# sourceMappingURL=chunk-TJZPV5Q2.js.map
