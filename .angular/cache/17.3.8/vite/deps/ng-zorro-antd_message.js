import {
  moveUpMotion
} from "./chunk-UBHORG42.js";
import {
  ComponentPortal,
  Overlay
} from "./chunk-H3KX533V.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-P4JTLNG5.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule
} from "./chunk-R2U6PY3Y.js";
import "./chunk-DGCTJNR5.js";
import "./chunk-AYCHNDWH.js";
import "./chunk-MZSNSXVE.js";
import {
  NzSingletonService
} from "./chunk-TEQDSSMB.js";
import "./chunk-73JY6KPG.js";
import {
  toCssPixel
} from "./chunk-OYP37FM6.js";
import "./chunk-PSIBVKLZ.js";
import {
  NgClass,
  NgForOf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-RGSDY6KV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-Q572GOZ6.js";
import "./chunk-SB7K7NPI.js";
import "./chunk-XLRD4WBL.js";
import {
  Subject,
  filter,
  take,
  takeUntil
} from "./chunk-JMJQA5TZ.js";
import {
  __spreadValues
} from "./chunk-X6JV76XL.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-message.mjs
function NzMessageComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 10);
  }
}
function NzMessageComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
  }
}
function NzMessageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
}
function NzMessageComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
}
function NzMessageComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 14);
  }
}
function NzMessageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r0.instance.content, ɵɵsanitizeHtml);
  }
}
function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-message", 2);
    ɵɵlistener("destroyed", function NzMessageContainerComponent_nz_message_1_Template_nz_message_destroyed_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event.id, $event.userAction));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const instance_r3 = ctx.$implicit;
    ɵɵproperty("instance", instance_r3);
  }
}
var globalCounter = 0;
var NzMNService = class {
  constructor(nzSingletonService, overlay, injector) {
    this.nzSingletonService = nzSingletonService;
    this.overlay = overlay;
    this.injector = injector;
  }
  remove(id) {
    if (this.container) {
      if (id) {
        this.container.remove(id);
      } else {
        this.container.removeAll();
      }
    }
  }
  getInstanceId() {
    return `${this.componentPrefix}-${globalCounter++}`;
  }
  withContainer(ctor) {
    let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
    if (containerInstance) {
      return containerInstance;
    }
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global()
    });
    const componentPortal = new ComponentPortal(ctor, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    const overlayWrapper = overlayRef.hostElement;
    overlayWrapper.style.zIndex = "1010";
    if (!containerInstance) {
      this.container = containerInstance = componentRef.instance;
      this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
      this.container.afterAllInstancesRemoved.subscribe(() => {
        this.container = void 0;
        this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix);
        overlayRef.dispose();
      });
    }
    return containerInstance;
  }
};
var _NzMNContainerComponent = class _NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.instances = [];
    this._afterAllInstancesRemoved = new Subject();
    this.afterAllInstancesRemoved = this._afterAllInstancesRemoved.asObservable();
    this.destroy$ = new Subject();
    this.updateConfig();
  }
  ngOnInit() {
    this.subscribeConfigChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  create(data) {
    const instance = this.onCreate(data);
    if (this.instances.length >= this.config.nzMaxStack) {
      this.instances = this.instances.slice(1);
    }
    this.instances = [...this.instances, instance];
    this.readyInstances();
    return instance;
  }
  remove(id, userAction = false) {
    this.instances.map((instance, index) => ({
      index,
      instance
    })).filter(({
      instance
    }) => instance.messageId === id).forEach(({
      index,
      instance
    }) => {
      this.instances.splice(index, 1);
      this.instances = [...this.instances];
      this.onRemove(instance, userAction);
      this.readyInstances();
    });
    if (!this.instances.length) {
      this.onAllInstancesRemoved();
    }
  }
  removeAll() {
    this.instances.forEach((i) => this.onRemove(i, false));
    this.instances = [];
    this.readyInstances();
    this.onAllInstancesRemoved();
  }
  onCreate(instance) {
    instance.options = this.mergeOptions(instance.options);
    instance.onClose = new Subject();
    return instance;
  }
  onRemove(instance, userAction) {
    instance.onClose.next(userAction);
    instance.onClose.complete();
  }
  onAllInstancesRemoved() {
    this._afterAllInstancesRemoved.next();
    this._afterAllInstancesRemoved.complete();
  }
  readyInstances() {
    this.cdr.detectChanges();
  }
  mergeOptions(options) {
    const {
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    } = this.config;
    return __spreadValues({
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    }, options);
  }
};
_NzMNContainerComponent.ɵfac = function NzMNContainerComponent_Factory(t) {
  return new (t || _NzMNContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService));
};
_NzMNContainerComponent.ɵdir = ɵɵdefineDirective({
  type: _NzMNContainerComponent
});
var NzMNContainerComponent = _NzMNContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNContainerComponent, [{
    type: Directive
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var _NzMNComponent = class _NzMNComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.destroyed = new EventEmitter();
    this.animationStateChanged = new Subject();
    this.userAction = false;
  }
  ngOnInit() {
    this.options = this.instance.options;
    if (this.options.nzAnimate) {
      this.instance.state = "enter";
      this.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "leave"), take(1)).subscribe(() => {
        clearTimeout(this.closeTimer);
        this.destroyed.next({
          id: this.instance.messageId,
          userAction: this.userAction
        });
      });
    }
    this.autoClose = this.options.nzDuration > 0;
    if (this.autoClose) {
      this.initErase();
      this.startEraseTimeout();
    }
  }
  ngOnDestroy() {
    if (this.autoClose) {
      this.clearEraseTimeout();
    }
    this.animationStateChanged.complete();
  }
  onEnter() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.clearEraseTimeout();
      this.updateTTL();
    }
  }
  onLeave() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.startEraseTimeout();
    }
  }
  destroy(userAction = false) {
    this.userAction = userAction;
    if (this.options.nzAnimate) {
      this.instance.state = "leave";
      this.cdr.detectChanges();
      this.closeTimer = setTimeout(() => {
        this.closeTimer = void 0;
        this.destroyed.next({
          id: this.instance.messageId,
          userAction
        });
      }, 200);
    } else {
      this.destroyed.next({
        id: this.instance.messageId,
        userAction
      });
    }
  }
  initErase() {
    this.eraseTTL = this.options.nzDuration;
    this.eraseTimingStart = Date.now();
  }
  updateTTL() {
    if (this.autoClose) {
      this.eraseTTL -= Date.now() - this.eraseTimingStart;
    }
  }
  startEraseTimeout() {
    if (this.eraseTTL > 0) {
      this.clearEraseTimeout();
      this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
      this.eraseTimingStart = Date.now();
    } else {
      this.destroy();
    }
  }
  clearEraseTimeout() {
    if (this.eraseTimer !== null) {
      clearTimeout(this.eraseTimer);
      this.eraseTimer = void 0;
    }
  }
};
_NzMNComponent.ɵfac = function NzMNComponent_Factory(t) {
  return new (t || _NzMNComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzMNComponent.ɵdir = ɵɵdefineDirective({
  type: _NzMNComponent
});
var NzMNComponent = _NzMNComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNComponent, [{
    type: Directive
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var _NzMessageComponent = class _NzMessageComponent extends NzMNComponent {
  constructor(cdr) {
    super(cdr);
    this.destroyed = new EventEmitter();
  }
};
_NzMessageComponent.ɵfac = function NzMessageComponent_Factory(t) {
  return new (t || _NzMessageComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzMessageComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzMessageComponent,
  selectors: [["nz-message"]],
  inputs: {
    instance: "instance"
  },
  outputs: {
    destroyed: "destroyed"
  },
  exportAs: ["nzMessage"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 10,
  vars: 9,
  consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]],
  template: function NzMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("@moveUpMotion.done", function NzMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) {
        return ctx.animationStateChanged.next($event);
      })("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() {
        return ctx.onEnter();
      })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() {
        return ctx.onLeave();
      });
      ɵɵelementStart(1, "div", 1)(2, "div", 2);
      ɵɵelementContainerStart(3, 3);
      ɵɵtemplate(4, NzMessageComponent_span_4_Template, 1, 0, "span", 4)(5, NzMessageComponent_span_5_Template, 1, 0, "span", 5)(6, NzMessageComponent_span_6_Template, 1, 0, "span", 6)(7, NzMessageComponent_span_7_Template, 1, 0, "span", 7)(8, NzMessageComponent_span_8_Template, 1, 0, "span", 8);
      ɵɵelementContainerEnd();
      ɵɵtemplate(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("@moveUpMotion", ctx.instance.state);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", "ant-message-" + ctx.instance.type);
      ɵɵadvance();
      ɵɵproperty("ngSwitch", ctx.instance.type);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "success");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "info");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "warning");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "error");
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", "loading");
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.instance.content);
    }
  },
  dependencies: [NgClass, NgSwitch, NgSwitchCase, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [moveUpMotion]
  },
  changeDetection: 0
});
var NzMessageComponent = _NzMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-message",
      exportAs: "nzMessage",
      preserveWhitespaces: false,
      animations: [moveUpMotion],
      template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container [ngSwitch]="instance.type">
            <span *ngSwitchCase="'success'" nz-icon nzType="check-circle"></span>
            <span *ngSwitchCase="'info'" nz-icon nzType="info-circle"></span>
            <span *ngSwitchCase="'warning'" nz-icon nzType="exclamation-circle"></span>
            <span *ngSwitchCase="'error'" nz-icon nzType="close-circle"></span>
            <span *ngSwitchCase="'loading'" nz-icon nzType="loading"></span>
          </ng-container>
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `,
      imports: [NgClass, NgSwitch, NgSwitchCase, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    instance: [{
      type: Input
    }],
    destroyed: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_COMPONENT_NAME = "message";
var NZ_MESSAGE_DEFAULT_CONFIG = {
  nzAnimate: true,
  nzDuration: 3e3,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzTop: 24,
  nzDirection: "ltr"
};
var _NzMessageContainerComponent = class _NzMessageContainerComponent extends NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    super(cdr, nzConfigService);
    this.dir = "ltr";
    const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
    this.dir = config?.nzDirection || "ltr";
  }
  subscribeConfigChange() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateConfig();
      const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
      if (config) {
        const {
          nzDirection
        } = config;
        this.dir = nzDirection || this.dir;
      }
    });
  }
  updateConfig() {
    this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    this.top = toCssPixel(this.config.nzTop);
    this.cdr.markForCheck();
  }
};
_NzMessageContainerComponent.ɵfac = function NzMessageContainerComponent_Factory(t) {
  return new (t || _NzMessageContainerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService));
};
_NzMessageContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzMessageContainerComponent,
  selectors: [["nz-message-container"]],
  exportAs: ["nzMessageContainer"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "destroyed", "instance"]],
  template: function NzMessageContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzMessageContainerComponent_nz_message_1_Template, 1, 1, "nz-message", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("top", ctx.top);
      ɵɵclassProp("ant-message-rtl", ctx.dir === "rtl");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.instances);
    }
  },
  dependencies: [NzMessageComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzMessageContainerComponent = _NzMessageContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-message-container",
      exportAs: "nzMessageContainer",
      preserveWhitespaces: false,
      template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      <nz-message
        *ngFor="let instance of instances"
        [instance]="instance"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-message>
    </div>
  `,
      imports: [NzMessageComponent, NgForOf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var _NzMessageModule = class _NzMessageModule {
};
_NzMessageModule.ɵfac = function NzMessageModule_Factory(t) {
  return new (t || _NzMessageModule)();
};
_NzMessageModule.ɵmod = ɵɵdefineNgModule({
  type: _NzMessageModule,
  imports: [NzMessageContainerComponent, NzMessageComponent]
});
_NzMessageModule.ɵinj = ɵɵdefineInjector({
  imports: [NzMessageContainerComponent, NzMessageComponent]
});
var NzMessageModule = _NzMessageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageModule, [{
    type: NgModule,
    args: [{
      imports: [NzMessageContainerComponent, NzMessageComponent]
    }]
  }], null, null);
})();
var _NzMessageService = class _NzMessageService extends NzMNService {
  constructor(nzSingletonService, overlay, injector) {
    super(nzSingletonService, overlay, injector);
    this.componentPrefix = "message-";
  }
  success(content, options) {
    return this.createInstance({
      type: "success",
      content
    }, options);
  }
  error(content, options) {
    return this.createInstance({
      type: "error",
      content
    }, options);
  }
  info(content, options) {
    return this.createInstance({
      type: "info",
      content
    }, options);
  }
  warning(content, options) {
    return this.createInstance({
      type: "warning",
      content
    }, options);
  }
  loading(content, options) {
    return this.createInstance({
      type: "loading",
      content
    }, options);
  }
  create(type, content, options) {
    return this.createInstance({
      type,
      content
    }, options);
  }
  createInstance(message, options) {
    this.container = this.withContainer(NzMessageContainerComponent);
    return this.container.create(__spreadValues(__spreadValues({}, message), {
      createdAt: /* @__PURE__ */ new Date(),
      messageId: this.getInstanceId(),
      options
    }));
  }
};
_NzMessageService.ɵfac = function NzMessageService_Factory(t) {
  return new (t || _NzMessageService)(ɵɵinject(NzSingletonService), ɵɵinject(Overlay), ɵɵinject(Injector));
};
_NzMessageService.ɵprov = ɵɵdefineInjectable({
  token: _NzMessageService,
  factory: _NzMessageService.ɵfac,
  providedIn: "root"
});
var NzMessageService = _NzMessageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzSingletonService
  }, {
    type: Overlay
  }, {
    type: Injector
  }], null);
})();
export {
  NzMNComponent,
  NzMNContainerComponent,
  NzMNService,
  NzMessageComponent,
  NzMessageContainerComponent,
  NzMessageModule,
  NzMessageService
};
//# sourceMappingURL=ng-zorro-antd_message.js.map
