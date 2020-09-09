exports.ids = [0];
exports.modules = {

/***/ "cIjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AwardsModule", function() { return /* binding */ AwardsModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-parent.module.ts + 2 modules
var event_parent_module = __webpack_require__("R/nW");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.js
var tslib = __webpack_require__("zOht");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/empty.js
var empty = __webpack_require__("EY2u");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Observable.js + 1 modules
var Observable = __webpack_require__("HDdC");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__("LRne");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__("jtHE");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__("XNiG");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/sampleTime.js
var sampleTime = __webpack_require__("1Ykd");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/share.js
var share = __webpack_require__("w1tV");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__("JX91");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/filter.js
var filter = __webpack_require__("pLZG");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/take.js
var take = __webpack_require__("IzEk");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("5+tZ");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/tap.js
var tap = __webpack_require__("vkgz");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__("lJxs");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/catchError.js
var catchError = __webpack_require__("JIr8");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__("eIep");

// CONCATENATED MODULE: ./node_modules/ng-lazyload-image/__ivy_ngcc__/fesm2015/ng-lazyload-image.js







const cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded'
};
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

function isWindowDefined() {
    return typeof window !== 'undefined';
}
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = `url('${imagePath}')`;
    }
    return element;
}
function setSources(attrName) {
    return (image) => {
        const sources = image.parentElement.getElementsByTagName('source');
        for (let i = 0; i < sources.length; i++) {
            const attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                sources[i].srcset = attrValue;
            }
        }
    };
}
const setSourcesToDefault = setSources('defaultImage');
const setSourcesToLazy = setSources('lazyLoad');
const setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return (element, imagePath, useSrcset) => {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
const setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
const setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
const setImageAndSourcesToError = setImageAndSources(setSourcesToError);

const end = ({ element }) => addCssClassName(element, cssClassNames.loaded);
const loadImage = ({ element, useSrcset, imagePath }) => {
    let img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        const parentClone = element.parentNode.cloneNode(true);
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
    }
    else {
        img = new Image();
        if (isImageElement(element) && element.sizes) {
            img.sizes = element.sizes;
        }
        if (useSrcset) {
            img.srcset = imagePath;
        }
        else {
            img.src = imagePath;
        }
    }
    if (img.decode) {
        return img.decode().then(() => imagePath);
    }
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(imagePath);
        img.onerror = () => reject(null);
    });
};
const setErrorImage = ({ element, errorImagePath, useSrcset }) => {
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
};
const setLoadedImage = ({ element, imagePath, useSrcset }) => {
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
};
const setup = ({ element, defaultImagePath, useSrcset }) => {
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
    }
};
const sharedPreset = {
    finally: end,
    loadImage,
    setErrorImage,
    setLoadedImage,
    setup
};

class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    }
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    intersectsWith(rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    }
    getIntersectionWith(rect) {
        const left = Math.max(this.left, rect.left);
        const top = Math.max(this.top, rect.top);
        const right = Math.min(this.right, rect.right);
        const bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    }
}
Rect.empty = new Rect(0, 0, 0, 0);

const scrollListeners = new WeakMap();
function sampleObservable(obs, scheduler) {
    return obs.pipe(Object(sampleTime["a" /* sampleTime */])(100, scheduler), Object(share["a" /* share */])(), Object(startWith["a" /* startWith */])(''));
}
// Only create one scroll listener per target and share the observable.
// Typical, there will only be one observable per application
const getScrollListener = (scrollTarget) => {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        if (isWindowDefined()) {
            console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        }
        return Object(empty["b" /* empty */])();
    }
    const scrollListener = scrollListeners.get(scrollTarget);
    if (scrollListener) {
        return scrollListener;
    }
    const srollEvent = Observable["a" /* Observable */].create((observer) => {
        const eventName = 'scroll';
        const handler = (event) => observer.next(event);
        const options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return () => scrollTarget.removeEventListener(eventName, handler, options);
    });
    const listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};

const isVisible = ({ element, offset, scrollContainer }, getWindow = () => window) => {
    const elementBounds = Rect.fromElement(element);
    if (elementBounds === Rect.empty) {
        return false;
    }
    const windowBounds = Rect.fromWindow(getWindow());
    elementBounds.inflate(offset);
    if (scrollContainer) {
        const scrollContainerBounds = Rect.fromElement(scrollContainer);
        const intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
};
const getObservable = (attributes) => {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable.pipe(Object(startWith["a" /* startWith */])(''));
    }
    if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
    }
    return getScrollListener(isWindowDefined() ? window : undefined);
};
const scrollPreset = Object.assign({}, sharedPreset, {
    isVisible,
    getObservable
});

function cretateHooks(options) {
    if (!options) {
        return scrollPreset;
    }
    const hooks = {};
    if (options.preset) {
        Object.assign(hooks, options.preset);
    }
    else {
        Object.assign(hooks, scrollPreset);
    }
    Object.keys(options)
        .filter(key => key !== 'preset')
        .forEach(key => {
        hooks[key] = options[key];
    });
    return hooks;
}

function lazyLoadImage(hookSet, attributes) {
    return (scrollObservable) => {
        return scrollObservable.pipe(Object(filter["a" /* filter */])(event => hookSet.isVisible({
            element: attributes.element,
            event: event,
            offset: attributes.offset,
            scrollContainer: attributes.scrollContainer
        })), Object(take["a" /* take */])(1), Object(mergeMap["b" /* mergeMap */])(() => hookSet.loadImage(attributes)), Object(tap["a" /* tap */])(imagePath => hookSet.setLoadedImage({
            element: attributes.element,
            imagePath,
            useSrcset: attributes.useSrcset
        })), Object(map["a" /* map */])(() => true), Object(catchError["a" /* catchError */])(() => {
            hookSet.setErrorImage(attributes);
            return Object(of["a" /* of */])(false);
        }), Object(tap["a" /* tap */])(() => hookSet.finally(attributes)));
    };
}

let ng_lazyload_image_LazyLoadImageDirective = class LazyLoadImageDirective {
    constructor(el, ngZone, platformId, options) {
        this.onLoad = new core["EventEmitter"](); // Callback when an image is loaded
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new ReplaySubject["a" /* ReplaySubject */]();
        this.platformId = platformId;
        this.hooks = cretateHooks(options);
    }
    ngOnChanges() {
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            scrollObservable: this.scrollObservable
        });
    }
    ngAfterContentInit() {
        // Disable lazy load image in server side
        if (Object(common["isPlatformServer"])(this.platformId)) {
            return null;
        }
        this.ngZone.runOutsideAngular(() => {
            this.scrollSubscription = this.propertyChanges$
                .pipe(Object(tap["a" /* tap */])(attributes => this.hooks.setup(attributes)), Object(switchMap["a" /* switchMap */])(attributes => this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes))))
                .subscribe(success => this.onLoad.emit(success));
        });
    }
    ngOnDestroy() {
        if (this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
        }
    }
};
ng_lazyload_image_LazyLoadImageDirective.ɵfac = function LazyLoadImageDirective_Factory(t) { return new (t || ng_lazyload_image_LazyLoadImageDirective)(core["ɵɵdirectiveInject"](core["ElementRef"]), core["ɵɵdirectiveInject"](core["NgZone"]), core["ɵɵdirectiveInject"](core["PLATFORM_ID"]), core["ɵɵdirectiveInject"]('options', 8)); };
ng_lazyload_image_LazyLoadImageDirective.ɵdir = core["ɵɵdefineDirective"]({ type: ng_lazyload_image_LazyLoadImageDirective, selectors: [["", "lazyLoad", ""]], inputs: { lazyImage: ["lazyLoad", "lazyImage"], defaultImage: "defaultImage", errorImage: "errorImage", scrollTarget: "scrollTarget", scrollObservable: "scrollObservable", offset: "offset", useSrcset: "useSrcset" }, outputs: { onLoad: "onLoad" }, features: [core["ɵɵNgOnChangesFeature"]] });
Object(tslib["__decorate"])([
    Object(core["Input"])('lazyLoad'),
    Object(tslib["__metadata"])("design:type", String)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "lazyImage", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", String)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "defaultImage", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", String)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "errorImage", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", Object)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "scrollTarget", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", Observable["a" /* Observable */])
], ng_lazyload_image_LazyLoadImageDirective.prototype, "scrollObservable", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", Number)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "offset", void 0);
Object(tslib["__decorate"])([
    Object(core["Input"])(),
    Object(tslib["__metadata"])("design:type", Boolean)
], ng_lazyload_image_LazyLoadImageDirective.prototype, "useSrcset", void 0);
Object(tslib["__decorate"])([
    Object(core["Output"])(),
    Object(tslib["__metadata"])("design:type", core["EventEmitter"])
], ng_lazyload_image_LazyLoadImageDirective.prototype, "onLoad", void 0);
ng_lazyload_image_LazyLoadImageDirective = Object(tslib["__decorate"])([ Object(tslib["__param"])(2, Object(core["Inject"])(core["PLATFORM_ID"])), Object(tslib["__param"])(3, Object(core["Optional"])()), Object(tslib["__param"])(3, Object(core["Inject"])('options')),
    Object(tslib["__metadata"])("design:paramtypes", [core["ElementRef"], core["NgZone"], Object, Object])
], ng_lazyload_image_LazyLoadImageDirective);

var LazyLoadImageModule_1;
let LazyLoadImageModule = LazyLoadImageModule_1 = class LazyLoadImageModule {
    static forRoot(options) {
        return {
            ngModule: LazyLoadImageModule_1,
            providers: [{ provide: 'options', useValue: options }]
        };
    }
};
LazyLoadImageModule.ɵmod = core["ɵɵdefineNgModule"]({ type: LazyLoadImageModule });
LazyLoadImageModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function LazyLoadImageModule_Factory(t) { return new (t || LazyLoadImageModule)(); } });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ng_lazyload_image_LazyLoadImageDirective, [{
        type: core["Directive"],
        args: [{
                selector: '[lazyLoad]'
            }]
    }], function () { return [{ type: core["ElementRef"] }, { type: core["NgZone"] }, { type: Object, decorators: [{
                type: core["Inject"],
                args: [core["PLATFORM_ID"]]
            }] }, { type: Object, decorators: [{
                type: core["Optional"]
            }, {
                type: core["Inject"],
                args: ['options']
            }] }]; }, { onLoad: [{
            type: core["Output"]
        }], lazyImage: [{
            type: core["Input"],
            args: ['lazyLoad']
        }], defaultImage: [{
            type: core["Input"]
        }], errorImage: [{
            type: core["Input"]
        }], scrollTarget: [{
            type: core["Input"]
        }], scrollObservable: [{
            type: core["Input"]
        }], offset: [{
            type: core["Input"]
        }], useSrcset: [{
            type: core["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](LazyLoadImageModule, { declarations: [ng_lazyload_image_LazyLoadImageDirective], exports: [ng_lazyload_image_LazyLoadImageDirective] }); })();
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](LazyLoadImageModule, [{
        type: core["NgModule"],
        args: [{
                declarations: [ng_lazyload_image_LazyLoadImageDirective],
                exports: [ng_lazyload_image_LazyLoadImageDirective]
            }]
    }], null, null); })();

const observers = new WeakMap();
const intersectionSubject = new Subject["a" /* Subject */]();
function loadingCallback(entrys) {
    entrys.forEach(entry => intersectionSubject.next(entry));
}
const getIntersectionObserver = (attributes) => {
    if (!attributes.scrollContainer && !isWindowDefined()) {
        return Object(empty["b" /* empty */])();
    }
    const options = {
        root: attributes.scrollContainer
    };
    if (attributes.offset) {
        options.rootMargin = `${attributes.offset}px`;
    }
    const scrollContainer = attributes.scrollContainer || window;
    let observer = observers.get(scrollContainer);
    if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainer, observer);
    }
    observer.observe(attributes.element);
    return Observable["a" /* Observable */].create((obs) => {
        const subscription = intersectionSubject.pipe(Object(filter["a" /* filter */])(entry => entry.target === attributes.element)).subscribe(obs);
        return () => {
            subscription.unsubscribe();
            observer.unobserve(attributes.element);
        };
    });
};

const isVisible$1 = ({ event }) => {
    return event.isIntersecting;
};
const getObservable$1 = (attributes, _getInterObserver = getIntersectionObserver) => {
    if (attributes.scrollObservable) {
        return attributes.scrollObservable;
    }
    return _getInterObserver(attributes);
};
const intersectionObserverPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible$1,
    getObservable: getObservable$1
});



//# sourceMappingURL=ng-lazyload-image.js.map
// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/_helpers/guards/user-network.guard.ts
var user_network_guard = __webpack_require__("fTpW");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js
var forkJoin = __webpack_require__("cp0P");

// EXTERNAL MODULE: ./src/app/core/models/event-parent/event-child/event-child.service.ts + 1 modules
var event_child_service = __webpack_require__("nS8h");

// EXTERNAL MODULE: ./src/app/core/models/event-parent/event-child/event-date/event-date.service.ts
var event_date_service = __webpack_require__("TL0x");

// EXTERNAL MODULE: ./src/app/core/models/event-parent/event-parent.service.ts
var event_parent_service = __webpack_require__("8t76");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js
var progress_spinner = __webpack_require__("Xa2L");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/event-date/event-date-block/event-date-block.component.ts
var event_date_block_component = __webpack_require__("otFx");

// CONCATENATED MODULE: ./src/app/awards/profile/event/calendar-tab/calendar-tab.component.ts














function CalendarTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "mat-spinner", 3);
} if (rf & 2) {
    const ctx_r1 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("color", ctx_r1.accent)("strokeWidth", 2)("diameter", 80);
} }
function CalendarTabComponent_ng_container_2_section_1_app_event_date_block_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-event-date-block", 8);
} if (rf & 2) {
    const eventDate_r7 = ctx.$implicit;
    const ctx_r6 = core["ɵɵnextContext"](3);
    core["ɵɵproperty"]("eventDate", eventDate_r7)("eventParent", ctx_r6.eventParent)("eventParentLink", false);
} }
function CalendarTabComponent_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "section", 5);
    core["ɵɵelementStart"](1, "h3", 6);
    core["ɵɵtext"](2, "Dates");
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](3, CalendarTabComponent_ng_container_2_section_1_app_event_date_block_3_Template, 1, 3, "app-event-date-block", 7);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngForOf", ctx_r5.aEventDate);
} }
function CalendarTabComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, CalendarTabComponent_ng_container_2_section_1_Template, 4, 1, "section", 4);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"]();
    const _r3 = core["ɵɵreference"](4);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.aEventDate && ctx_r2.aEventDate.length)("ngIfElse", _r3);
} }
function CalendarTabComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 9);
    core["ɵɵelementStart"](1, "h4", 10);
    core["ɵɵelement"](2, "br");
    core["ɵɵelement"](3, "br");
    core["ɵɵtext"](4, "No dates");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
class calendar_tab_component_CalendarTabComponent {
    constructor(eventChildService, eventDateService, eventParentService, route, router) {
        this.eventChildService = eventChildService;
        this.eventDateService = eventDateService;
        this.eventParentService = eventParentService;
        this.route = route;
        this.router = router;
        this.bShowResults = false;
    }
    ngOnInit() {
        // Load the data
        this.loadData()
            .subscribe();
        // Listen in on those events going off
        this.router.events
            // Filter for navigation end object
            .switchMap((event) => event instanceof router["b" /* NavigationEnd */] ? Object(of["a" /* of */])(event) : empty["a" /* EMPTY */])
            .switchMap(({ urlAfterRedirects }) => 
        // Check to see if the url matches the awards profile url and if the event parent exists and if the urls do not match
        urlAfterRedirects.includes('/awards/p/') && ((this.eventParent && this.eventParent.urlSlug !== this.getParamEventParentUrlSlug()) || (this.eventChild && this.eventChild.urlSlug !== this.getParamEventChildUrlSlug()))
            // Load in the new event parent
            ? this.loadData()
            // Do nothing
            : Object(of["a" /* of */])({}))
            .subscribe();
    }
    // Load the data
    loadData() {
        // Set the show results flag
        this.bShowResults = false;
        // Return a load of stuff
        return Object(forkJoin["a" /* forkJoin */])([
            // Get the event parent
            this.eventParentService.getEventParentByUrl(this.getParamEventParentUrlSlug())
                // Set the loacl event parent
                .map((eventParent) => this.eventParent = eventParent),
            // Get the event child
            this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
                .map((eventChild) => {
                // Set the local event child
                this.eventChild = eventChild;
                // Return the event child for further processing
                return eventChild;
            })
                // Get the event dates
                .switchMap((eventChild) => this.eventDateService.getEventDatesByEventID(eventChild.eventID))
                // Set the local event child
                .map((aEventDate) => {
                // Set the local dates
                this.aEventDate = aEventDate;
                // Set the show results flag
                this.bShowResults = true;
            })
        ]);
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
calendar_tab_component_CalendarTabComponent.ɵfac = function CalendarTabComponent_Factory(t) { return new (t || calendar_tab_component_CalendarTabComponent)(core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](event_date_service["a" /* EventDateService */]), core["ɵɵdirectiveInject"](event_parent_service["a" /* EventParentService */]), core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](router["c" /* Router */])); };
calendar_tab_component_CalendarTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: calendar_tab_component_CalendarTabComponent, selectors: [["app-calendar-tab"]], decls: 5, vars: 2, consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["nodates", ""], [3, "color", "strokeWidth", "diameter"], ["class", "g-section", 4, "ngIf", "ngIfElse"], [1, "g-section"], [1, "g-section_title", "mat-title"], [3, "eventDate", "eventParent", "eventParentLink", 4, "ngFor", "ngForOf"], [3, "eventDate", "eventParent", "eventParentLink"], [1, "g-flexbox-centering"], [1, "mat-display-1"]], template: function CalendarTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, CalendarTabComponent_ng_template_0_Template, 1, 3, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](2, CalendarTabComponent_ng_container_2_Template, 2, 2, "ng-container", 1);
        core["ɵɵtemplate"](3, CalendarTabComponent_ng_template_3_Template, 5, 0, "ng-template", null, 2, core["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = core["ɵɵreference"](1);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx.bShowResults)("ngIfElse", _r0);
    } }, directives: [common["NgIf"], progress_spinner["c" /* MatSpinner */], common["NgForOf"], event_date_block_component["a" /* EventDateBlockComponent */]], styles: ["app-calendar-tab .g-section{margin-top:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](calendar_tab_component_CalendarTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-calendar-tab',
                templateUrl: './calendar-tab.component.html',
                styleUrls: ['./calendar-tab.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: event_child_service["a" /* EventChildService */] }, { type: event_date_service["a" /* EventDateService */] }, { type: event_parent_service["a" /* EventParentService */] }, { type: router["a" /* ActivatedRoute */] }, { type: router["c" /* Router */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/category/categories/categories.component.ts
var categories_component = __webpack_require__("pL4I");

// CONCATENATED MODULE: ./src/app/awards/profile/event/categories-tab/categories/categories.component.ts








function CategoriesComponent_app_shared_categories_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-shared-categories", 1);
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("eventChild", ctx_r0.eventChild);
} }
class CategoriesComponent {
    constructor(
    // Define the activated route, event child and category services
    // private authenticationService: AuthenticationService,
    route, 
    // private router: Router,
    eventChildService) {
        this.route = route;
        this.eventChildService = eventChildService;
    }
    ngOnInit() {
        // Load the data
        this.loadData()
            .subscribe();
        // // Listen in on those events going off
        // this.router.events
        // // Filter for navigation end object
        // .switchMap((event: any) => event instanceof NavigationEnd ? of(event) : EMPTY)
        // .switchMap(({urlAfterRedirects}: NavigationEnd) =>
        //   // Check to see if the url matches the awards profile url and if the event parent exists and if the urls do not match
        //   urlAfterRedirects.includes('/awards/p/') && (this.eventChild && this.eventChild.urlSlug !== this.getParamEventChildUrlSlug())
        //   // Load in the new event parent
        //   ? this.loadData()
        //   // Do nothing
        //   : EMPTY
        // )
        // .subscribe();
    }
    // Function to get the event parent and event child url slugs
    loadData() {
        // Get the event child
        return this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            // Set the local event child
            .map((eventChild) => this.eventChild = eventChild);
    }
    // Get event parent url slug
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets event child url slug
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */])); };
CategoriesComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 1, vars: 1, consts: [[3, "eventChild", 4, "ngIf"], [3, "eventChild"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, CategoriesComponent_app_shared_categories_0_Template, 1, 1, "app-shared-categories", 0);
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.eventChild);
    } }, directives: [common["NgIf"], categories_component["a" /* CategoriesComponent */]], styles: ["app-categories{display:block;margin-top:32px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CategoriesComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: router["a" /* ActivatedRoute */] }, { type: event_child_service["a" /* EventChildService */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/authentication/authentication.service.ts
var authentication_service = __webpack_require__("9Ku7");

// EXTERNAL MODULE: ./src/app/core/models/event-parent/event-child/category/category.service.ts
var category_service = __webpack_require__("BI15");

// EXTERNAL MODULE: ./src/app/core/models/entry/entry.service.ts
var entry_service = __webpack_require__("9VoG");

// EXTERNAL MODULE: ./src/app/_helpers/guards/show-network-user.directive.ts
var show_network_user_directive = __webpack_require__("8DvC");

// EXTERNAL MODULE: ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js
var flex = __webpack_require__("XiUz");

// EXTERNAL MODULE: ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js
var extended = __webpack_require__("znSr");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js
var fesm2015_button = __webpack_require__("bTqV");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js
var icon = __webpack_require__("NFeN");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js
var tooltip = __webpack_require__("Qu3c");

// CONCATENATED MODULE: ./src/app/awards/profile/event/categories-tab/category/category.component.ts




















function CategoryComponent_header_0_button_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "button", 12);
    core["ɵɵelementStart"](1, "mat-icon", 13);
    core["ɵɵtext"](2, "arrow_back");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("routerLink", "../", ctx_r2.parentCategory.categoryID, "");
} }
function CategoryComponent_header_0_button_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "button", 12);
    core["ɵɵelementStart"](1, "mat-icon", 13);
    core["ɵɵtext"](2, "arrow_back");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("routerLink", "../../medium/", ctx_r3.parentCategory.categoryID, "");
} }
function CategoryComponent_header_0_ng_container_5_a_1_span_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 21);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"]("", category_r9.categoryCode, ": \u00A0 ");
} }
function CategoryComponent_header_0_ng_container_5_a_1_span_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span");
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](category_r9.categoryName);
} }
function CategoryComponent_header_0_ng_container_5_a_1_small_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "small", 22);
    core["ɵɵelementStart"](1, "strong", 23);
    core["ɵɵtext"](2, "NEW");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_5_a_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 17);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_5_a_1_span_1_Template, 2, 1, "span", 18);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_ng_container_5_a_1_span_2_Template, 2, 1, "span", 19);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_ng_container_5_a_1_small_3_Template, 3, 0, "small", 20);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"]().$implicit;
    core["ɵɵpropertyInterpolate1"]("routerLink", "../../medium/", category_r9.categoryID, "");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryCode);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryName);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryNew);
} }
function CategoryComponent_header_0_ng_container_5_a_2_span_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 21);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"]("", category_r9.categoryCode, ": \u00A0 ");
} }
function CategoryComponent_header_0_ng_container_5_a_2_span_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span");
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](category_r9.categoryName);
} }
function CategoryComponent_header_0_ng_container_5_a_2_small_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "small", 22);
    core["ɵɵelementStart"](1, "strong", 23);
    core["ɵɵtext"](2, "NEW");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_5_a_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 17);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_5_a_2_span_1_Template, 2, 1, "span", 18);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_ng_container_5_a_2_span_2_Template, 2, 1, "span", 19);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_ng_container_5_a_2_small_3_Template, 3, 0, "small", 20);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"]().$implicit;
    const ctx_r12 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("routerLink", "../../medium/", ctx_r12.parentCategory.categoryID, "");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryCode);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryName);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryNew);
} }
function CategoryComponent_header_0_ng_container_5_a_3_span_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 21);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"]("", category_r9.categoryCode, ": \u00A0 ");
} }
function CategoryComponent_header_0_ng_container_5_a_3_span_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span");
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](category_r9.categoryName);
} }
function CategoryComponent_header_0_ng_container_5_a_3_small_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "small", 22);
    core["ɵɵelementStart"](1, "strong", 23);
    core["ɵɵtext"](2, "NEW");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_5_a_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 17);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_5_a_3_span_1_Template, 2, 1, "span", 18);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_ng_container_5_a_3_span_2_Template, 2, 1, "span", 19);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_ng_container_5_a_3_small_3_Template, 3, 0, "small", 20);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"]().$implicit;
    const ctx_r13 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("routerLink", "../../medium/", ctx_r13.parentCategory.categoryID, "");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryCode);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryName);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryNew);
} }
function CategoryComponent_header_0_ng_container_5_a_4_span_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 21);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"]("", category_r9.categoryCode, ": \u00A0 ");
} }
function CategoryComponent_header_0_ng_container_5_a_4_span_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span");
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](category_r9.categoryName);
} }
function CategoryComponent_header_0_ng_container_5_a_4_small_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "small", 22);
    core["ɵɵelementStart"](1, "strong", 23);
    core["ɵɵtext"](2, "NEW");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_5_a_4_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 24);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_5_a_4_span_1_Template, 2, 1, "span", 18);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_ng_container_5_a_4_span_2_Template, 2, 1, "span", 19);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_ng_container_5_a_4_small_3_Template, 3, 0, "small", 20);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = core["ɵɵnextContext"]().$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryCode);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryName);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r9.categoryNew);
} }
function CategoryComponent_header_0_ng_container_5_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "mat-icon", 13);
    core["ɵɵtext"](1, "keyboard_arrow_right");
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_5_a_1_Template, 4, 4, "a", 14);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_ng_container_5_a_2_Template, 4, 4, "a", 14);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_ng_container_5_a_3_Template, 4, 4, "a", 14);
    core["ɵɵtemplate"](4, CategoryComponent_header_0_ng_container_5_a_4_Template, 4, 3, "a", 15);
    core["ɵɵtemplate"](5, CategoryComponent_header_0_ng_container_5_mat_icon_5_Template, 2, 0, "mat-icon", 16);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r4 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r4.selectedCategory.aAncestor.length === 2 && i_r10 === 1);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r4.selectedCategory.aAncestor.length === 3 && i_r10 === 1 || ctx_r4.selectedCategory.aAncestor.length === 4 && i_r10 === 1);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r4.selectedCategory.aAncestor.length === 3 && i_r10 === 2 || ctx_r4.selectedCategory.aAncestor.length === 4 && i_r10 === 2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r4.selectedCategory.aAncestor.length === 4 && i_r10 === 3);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", i_r10 !== 0 && i_r10 !== ctx_r4.selectedCategory.aAncestor.length - 1);
} }
function CategoryComponent_header_0_ng_container_8_h2_1_span_4_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span");
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r40 = core["ɵɵnextContext"](2).$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](category_r40.categoryName);
} }
function CategoryComponent_header_0_ng_container_8_h2_1_small_5_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "small", 22);
    core["ɵɵelementStart"](1, "strong", 23);
    core["ɵɵtext"](2, "NEW");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_ng_container_8_h2_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "h2");
    core["ɵɵelementStart"](1, "span", 21);
    core["ɵɵtext"](2);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](3, "span", 25);
    core["ɵɵtemplate"](4, CategoryComponent_header_0_ng_container_8_h2_1_span_4_Template, 2, 1, "span", 19);
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](5, CategoryComponent_header_0_ng_container_8_h2_1_small_5_Template, 3, 0, "small", 20);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r40 = core["ɵɵnextContext"]().$implicit;
    core["ɵɵadvance"](2);
    core["ɵɵtextInterpolate"](category_r40.categoryCode);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngIf", category_r40.categoryName);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", category_r40.categoryNew);
} }
function CategoryComponent_header_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_8_h2_1_Template, 6, 3, "h2", 19);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.index;
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", i_r41 === 0);
} }
function CategoryComponent_header_0_p_10_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "p", 26);
    core["ɵɵelementStart"](1, "em", 27);
    core["ɵɵtext"](2, "No description set");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_p_11_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "a", 30);
    core["ɵɵlistener"]("click", function CategoryComponent_header_0_p_11_a_2_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r50); const ctx_r49 = core["ɵɵnextContext"](3); return ctx_r49.toggleMediumShow = true; });
    core["ɵɵtext"](1, "\u00A0\u00A0 \u2026 more\u00A0");
    core["ɵɵelementEnd"]();
} }
function CategoryComponent_header_0_p_11_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "a", 30);
    core["ɵɵlistener"]("click", function CategoryComponent_header_0_p_11_a_3_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r52); const ctx_r51 = core["ɵɵnextContext"](3); return ctx_r51.toggleMediumShow = false; });
    core["ɵɵtext"](1, "\u00A0Hide\u00A0");
    core["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-collapsed": a0 }; };
function CategoryComponent_header_0_p_11_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "p", 28);
    core["ɵɵtext"](1);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_p_11_a_2_Template, 2, 0, "a", 29);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_p_11_a_3_Template, 2, 0, "a", 29);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = core["ɵɵnextContext"](2);
    core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](4, _c0, !ctx_r7.toggleMediumShow));
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"](" ", ctx_r7.selectedCategory.fullDesc, " ");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", !ctx_r7.toggleMediumShow && ctx_r7.selectedCategory.fullDesc.length > 350);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r7.toggleMediumShow && ctx_r7.selectedCategory.fullDesc.length > 350);
} }
function CategoryComponent_header_0_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 32);
    core["ɵɵelementStart"](1, "div", 33);
    core["ɵɵelementStart"](2, "a", 34);
    core["ɵɵelementStart"](3, "span");
    core["ɵɵtext"](4, "Entries ");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "span", 35);
    core["ɵɵtext"](6);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = core["ɵɵnextContext"](3);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("fragment", "entries");
    core["ɵɵadvance"](4);
    core["ɵɵtextInterpolate"](ctx_r53.aEntry.length);
} }
function CategoryComponent_header_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, CategoryComponent_header_0_ng_container_12_div_1_Template, 7, 2, "div", 31);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r8.aEntry);
} }
const _c1 = function (a0) { return { "expand-more": a0 }; };
function CategoryComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "header", 2);
    core["ɵɵelementStart"](1, "div", 3);
    core["ɵɵtemplate"](2, CategoryComponent_header_0_button_2_Template, 3, 1, "button", 4);
    core["ɵɵtemplate"](3, CategoryComponent_header_0_button_3_Template, 3, 1, "button", 4);
    core["ɵɵelementStart"](4, "h4", 5);
    core["ɵɵtemplate"](5, CategoryComponent_header_0_ng_container_5_Template, 6, 5, "ng-container", 6);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](6, "div", 7);
    core["ɵɵelementStart"](7, "div", 8);
    core["ɵɵtemplate"](8, CategoryComponent_header_0_ng_container_8_Template, 2, 1, "ng-container", 6);
    core["ɵɵelementStart"](9, "div", 9);
    core["ɵɵtemplate"](10, CategoryComponent_header_0_p_10_Template, 3, 0, "p", 10);
    core["ɵɵtemplate"](11, CategoryComponent_header_0_p_11_Template, 4, 6, "p", 11);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](12, CategoryComponent_header_0_ng_container_12_Template, 2, 1, "ng-container", 1);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngIf", ctx_r0.selectedCategory.aAncestor.length === 1);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r0.selectedCategory.aAncestor.length >= 2);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngForOf", ctx_r0.selectedCategory.aAncestor.slice().reverse());
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngForOf", ctx_r0.selectedCategory.aAncestor.slice().reverse());
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](7, _c1, (ctx_r0.selectedCategory.fullDesc == null ? null : ctx_r0.selectedCategory.fullDesc.length) > 350));
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", !ctx_r0.selectedCategory.fullDesc);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r0.selectedCategory.fullDesc);
} }
function CategoryComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelement"](1, "router-outlet");
    core["ɵɵelementContainerEnd"]();
} }
class category_component_CategoryComponent {
    constructor(authenticationService, categoryService, eventChildService, entryService, route) {
        this.authenticationService = authenticationService;
        this.categoryService = categoryService;
        this.eventChildService = eventChildService;
        this.entryService = entryService;
        this.route = route;
        this.bShowResults = false;
        // Listen to see if any logins or logouts occur
        this.authenticationService.authStatus$
            // Reset the show results flag
            .map(() => this.resetData())
            // Load the data
            .switchMap(() => this.loadData())
            .subscribe();
    }
    ngOnInit() {
        // Load the data
        this.loadData()
            .subscribe();
    }
    // Function to get the event parent and event child url slugs
    loadData() {
        // Get the event child
        return this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            .flatMap((eventChild) => Object(forkJoin["a" /* forkJoin */])([
            Object(forkJoin["a" /* forkJoin */])([
                // Get the categories for the given event id
                this.categoryService.getCategoryByID(this.getParamCategoryID()),
                // Get the levels for the categories
                this.categoryService.getCategoryLevels(eventChild.eventID)
            ])
                .map(([selectedCategory, level]) => {
                // Set the selected category
                this.selectedCategory = selectedCategory;
                // Get the category to return to
                this.parentCategory =
                    // If the levels are 4 for and the 2nd item in the selected category ancestor array exists
                    level === 4 && this.selectedCategory.aAncestor && this.selectedCategory.aAncestor.length > 1
                        // Set it to the "medium"
                        ? this.selectedCategory.aAncestor[1]
                        // Otherwise set it to the "medium" ha ha
                        : this.selectedCategory.aAncestor[0];
            }),
            // If the user is a network user
            this.authenticationService.isNetworkUser()
                // Get the entries for the given event id
                ? this.entryService.getEntriesByEventIDAndCategoryID(eventChild.eventID, this.getParamCategoryID())
                    // Set the local entry array
                    .map((aEntry) => this.aEntry = aEntry)
                // Otherwise do nothing
                : Object(of["a" /* of */])({}),
        ]))
            .map(() => {
            // Set the show results flag
            this.bShowResults = true;
        });
    }
    // Resets all the data for the component
    resetData() {
        // Reset the lot
        this.aEntry = undefined;
        this.bShowResults = false;
        // Return some thing
        return true;
    }
    // Gets the route param
    getParamCategoryID() {
        // Get the param from the route
        return parseInt(this.route.snapshot.paramMap.get('categoryID'));
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
category_component_CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || category_component_CategoryComponent)(core["ɵɵdirectiveInject"](authentication_service["a" /* AuthenticationService */]), core["ɵɵdirectiveInject"](category_service["a" /* CategoryService */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](entry_service["a" /* EntryService */]), core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */])); };
category_component_CategoryComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: category_component_CategoryComponent, selectors: [["app-category"]], decls: 2, vars: 1, consts: [["class", "category-header mat-typography", 4, "ngIf"], [4, "appShowNetworkUser"], [1, "category-header", "mat-typography"], ["fxLayout", "row", "fxLayoutGap", "8px", 1, "category_breadcrumb"], ["mat-icon-button", "", "class", "category_back-button", "aria-label", "Back", 3, "routerLink", 4, "ngIf"], ["fxLayout", "row-reverse"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutGap.gt-sm", "24px"], ["fxFlex", "1 1"], [1, "g-description", "category_description", 3, "ngClass"], ["class", "mat-body-1", 4, "ngIf"], ["class", "mat-body-1 expand-more_panel", 3, "ngClass", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Back", 1, "category_back-button", 3, "routerLink"], ["aria-hidden", "true"], [3, "routerLink", 4, "ngIf"], ["routerLink", "../../", 4, "ngIf"], ["aria-hidden", "true", 4, "ngIf"], [3, "routerLink"], ["class", "category_code", 4, "ngIf"], [4, "ngIf"], ["class", "mat-caption category_new", 4, "ngIf"], [1, "category_code"], [1, "mat-caption", "category_new"], ["matTooltip", "New to this event", 1, "text-highlight"], ["routerLink", "../../"], [1, "category_title", "bg-category"], [1, "mat-body-1"], [1, "text-al-40"], [1, "mat-body-1", "expand-more_panel", 3, "ngClass"], ["class", "expand-button text-link", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "expand-button", "text-link", 3, "click"], ["class", "category_jump-links", 4, "ngIf"], [1, "category_jump-links"], ["fxLayout", "column", "fxLayoutGap", "4px", "fxLayoutAlign", "start end"], ["mat-button", "", "routerLink", ".", "aria-label", "Jump to entries", 3, "fragment"], [1, "text-teal", "number"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, CategoryComponent_header_0_Template, 13, 9, "header", 0);
        core["ɵɵtemplate"](1, CategoryComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.selectedCategory);
    } }, directives: [common["NgIf"], show_network_user_directive["a" /* ShowNetworkUserDirective */], flex["e" /* DefaultLayoutDirective */], flex["f" /* DefaultLayoutGapDirective */], common["NgForOf"], flex["b" /* DefaultFlexDirective */], common["NgClass"], extended["a" /* DefaultClassDirective */], fesm2015_button["b" /* MatButton */], router["d" /* RouterLink */], icon["a" /* MatIcon */], router["f" /* RouterLinkWithHref */], tooltip["a" /* MatTooltip */], flex["d" /* DefaultLayoutAlignDirective */], fesm2015_button["a" /* MatAnchor */], router["h" /* RouterOutlet */]], styles: ["app-category{display:block}app-category .category-header{padding-top:24px;margin-bottom:16px}@media (max-width:959px){app-category .category-header{padding-left:16px}}app-category .category-header .category_breadcrumb{margin-bottom:24px}app-category .category-header .category_back-button{margin-left:-4px}app-category .category-header h4{margin-top:9px;margin-bottom:6px}app-category .category-header h4 a{color:inherit;text-decoration:none}app-category .category-header h4 .mat-icon{vertical-align:bottom;padding:0 4px;opacity:.54}app-category .category-header h2{line-height:1.5}app-category .category-header h2 .category_code{display:block;margin-bottom:8px}app-category .category-header h2 .category_title{padding:3px 6px}app-category .category-header h2 .category_new{-webkit-transform:translateY(-8px);transform:translateY(-8px);padding-left:8px}app-category .category-header .category_code{display:inline-block;padding-right:4px;font-weight:300;color:rgba(0,0,0,.67)}app-category .category-header .bg-category{-webkit-box-decoration-break:clone;box-decoration-break:clone;display:inline}app-category .category-header .category_new{padding-left:4px;font-size:10px;vertical-align:super}app-category .category-header .category_jump-links .mat-button{line-height:24px}app-category .category-header .category_description{margin-top:8px;padding-bottom:0}app-category .judge-slider .g-h-slider_item{min-width:320px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](category_component_CategoryComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: authentication_service["a" /* AuthenticationService */] }, { type: category_service["a" /* CategoryService */] }, { type: event_child_service["a" /* EventChildService */] }, { type: entry_service["a" /* EntryService */] }, { type: router["a" /* ActivatedRoute */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/core/models/thework/thework.service.ts
var thework_service = __webpack_require__("YdDH");

// EXTERNAL MODULE: ./src/app/shared/thework/entry/entry-card/entry-card.component.ts
var entry_card_component = __webpack_require__("mQll");

// CONCATENATED MODULE: ./src/app/awards/profile/event/categories-tab/category/category-overview/category-overview.component.ts





















function CategoryOverviewComponent_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "mat-spinner", 3);
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"](2);
    core["ɵɵproperty"]("color", ctx_r2.accent)("strokeWidth", 2)("diameter", 80);
} }
function CategoryOverviewComponent_ng_container_0_section_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "div", 9);
    core["ɵɵelement"](2, "app-shared-entry-card", 11);
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const ctx_r4 = core["ɵɵnextContext"](3);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("view", "award")("entry", entry_r5)("category", ctx_r4.selectedCategory);
} }
const category_overview_component_c0 = function () { return { "padding": "0 8px" }; };
const category_overview_component_c1 = function () { return { "padding": "0 16px" }; };
const _c2 = function () { return { "padding": "0" }; };
function CategoryOverviewComponent_ng_container_0_section_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "section", 4);
    core["ɵɵelementStart"](1, "h3", 5);
    core["ɵɵtext"](2, " Entries ");
    core["ɵɵelementStart"](3, "span", 6);
    core["ɵɵtext"](4);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "div", 7);
    core["ɵɵtemplate"](6, CategoryOverviewComponent_ng_container_0_section_3_ng_container_6_Template, 3, 3, "ng-container", 8);
    core["ɵɵelementStart"](7, "div", 9);
    core["ɵɵelement"](8, "app-shared-entry-card", 10);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](4);
    core["ɵɵtextInterpolate"]((ctx_r3.aEntry == null ? null : ctx_r3.aEntry.length) ? ctx_r3.aEntry.length : "0");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngStyle", core["ɵɵpureFunction0"](7, category_overview_component_c0))("ngStyle.sm", core["ɵɵpureFunction0"](8, category_overview_component_c1))("ngStyle.gt-sm", core["ɵɵpureFunction0"](9, _c2));
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngForOf", ctx_r3.aEntry);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("view", "award")("category", ctx_r3.selectedCategory);
} }
function CategoryOverviewComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, CategoryOverviewComponent_ng_container_0_ng_template_1_Template, 1, 3, "ng-template", null, 1, core["ɵɵtemplateRefExtractor"]);
    core["ɵɵtemplate"](3, CategoryOverviewComponent_ng_container_0_section_3_Template, 9, 10, "section", 2);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = core["ɵɵreference"](2);
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngIf", ctx_r0.bShowResults)("ngIfElse", _r1);
} }
class category_overview_component_CategoryOverviewComponent {
    constructor(authenticationService, route, categoryService, entryService, eventChildService, theworkService) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.categoryService = categoryService;
        this.entryService = entryService;
        this.eventChildService = eventChildService;
        this.theworkService = theworkService;
        // Initiate the local vars
        this.bShowResults = false;
        // Listen to see if any logins or logouts occur
        this.authenticationService.authStatus$
            // Reset the show results flag
            .map(() => this.resetData())
            // Load the data
            .switchMap(() => this.loadData())
            .subscribe();
    }
    ngOnInit() {
        // Load the data
        this.loadData()
            .subscribe();
    }
    // Function to get all the data
    loadData() {
        // Get the event child
        return this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            .flatMap((eventChild) => 
        // Join the results
        Object(forkJoin["a" /* forkJoin */])([
            // Join the results
            Object(forkJoin["a" /* forkJoin */])([
                // Get the categories for the given event id
                this.categoryService.getCategoryTreeByID(eventChild.eventID, this.getParamCategoryID()),
                // Get the levels for the categories
                this.categoryService.getCategoryLevels(eventChild.eventID)
            ])
                .map(([category, levels]) => {
                // Bind the returned object to a local object for displaying
                this.selectedCategory = category ? category : undefined;
                // Get the category to return to
                this.parentCategory =
                    // If the levels are 4for and the 2nd item in the selected category ancestor array exists
                    levels === 4 && this.selectedCategory.aAncestor && this.selectedCategory.aAncestor[1]
                        // Set it to the "medium"
                        ? this.selectedCategory.aAncestor[1]
                        // Otherwise set it to the "medium" ha ha
                        : this.selectedCategory.aAncestor[0];
            }),
            // If the user is a network user
            this.authenticationService.isNetworkUser()
                // Get the entries for the given event id
                ? this.entryService.getEntriesByEventIDAndCategoryID(eventChild.eventID, this.getParamCategoryID())
                    .switchMap((aEntry) => 
                // If the entry array has entries
                aEntry && aEntry.length
                    // Get the work items associated with the entries
                    ? this.theworkService.getWorks(undefined, undefined, { 'in': aEntry.map(entry => entry.campaignID).join(',') })
                        .map((aTheWork) => 
                    // Loop through the entry array
                    aEntry.filter((entry) => {
                        // Get the work for teh given entry
                        const TheWorkTemp = aTheWork.filter((theWork) => theWork.campaignID === entry.campaignID)[0];
                        // If the work item exists, it should do
                        if (TheWorkTemp) {
                            // Append all the work counts to the entry
                            Object.assign(entry, {
                                'notesCount': TheWorkTemp.notesCount,
                                'entriesCount': TheWorkTemp.entriesCount,
                                'awardsCount': TheWorkTemp.awardsCount
                            });
                        }
                        // Return all entries
                        return true;
                    }))
                    // Otherwise return an emmpty array
                    : Object(of["a" /* of */])([]))
                    // Set the local entry array
                    .map((aEntry) => this.aEntry = aEntry)
                : Object(of["a" /* of */])([])
                    // Set the local entry array
                    .map((aEntry) => this.aEntry = aEntry)
        ]))
            .map(data => {
            // Set the show results flag
            this.bShowResults = true;
        });
    }
    // Resets all the data for the component
    resetData() {
        // Reset the lot
        this.aEntry = undefined;
        this.bShowResults = false;
        this.selectedCategory = undefined;
        this.parentCategory = undefined;
        // Return some thing
        return true;
    }
    // Get the category id
    getParamCategoryID() {
        // Get the param from the route
        return parseInt(this.route.snapshot.paramMap.get('categoryID'));
    }
    // Get the event parent url slug
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Get the event child url slug
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
}
category_overview_component_CategoryOverviewComponent.ɵfac = function CategoryOverviewComponent_Factory(t) { return new (t || category_overview_component_CategoryOverviewComponent)(core["ɵɵdirectiveInject"](authentication_service["a" /* AuthenticationService */]), core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](category_service["a" /* CategoryService */]), core["ɵɵdirectiveInject"](entry_service["a" /* EntryService */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](thework_service["b" /* TheworkService */])); };
category_overview_component_CategoryOverviewComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: category_overview_component_CategoryOverviewComponent, selectors: [["app-category-overview"]], decls: 1, vars: 1, consts: [[4, "appShowNetworkUser"], ["loading", ""], ["class", "g-section", "id", "entries", 4, "ngIf", "ngIfElse"], [3, "color", "strokeWidth", "diameter"], ["id", "entries", 1, "g-section"], [1, "g-section_title", "mat-title"], [1, "text-teal", "number"], ["fxLayout", "row wrap", "fxLayoutAlign", "start stretch", "fxLayoutGap", "8px grid", "fxLayoutGap.gt-xs", "16px grid", 3, "ngStyle", "ngStyle.sm", "ngStyle.gt-sm"], [4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxFlex.sm", "33.33", "fxFlex.gt-sm", "25", 1, "animate-card-waterfall"], [3, "view", "category"], [3, "view", "entry", "category"]], template: function CategoryOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, CategoryOverviewComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
    } if (rf & 2) {
        core["ɵɵproperty"]("appShowNetworkUser", "3");
    } }, directives: [show_network_user_directive["a" /* ShowNetworkUserDirective */], common["NgIf"], progress_spinner["c" /* MatSpinner */], flex["e" /* DefaultLayoutDirective */], flex["d" /* DefaultLayoutAlignDirective */], flex["f" /* DefaultLayoutGapDirective */], common["NgStyle"], extended["c" /* DefaultStyleDirective */], common["NgForOf"], flex["b" /* DefaultFlexDirective */], entry_card_component["a" /* EntryCardComponent */]], styles: [""] });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](category_overview_component_CategoryOverviewComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-category-overview',
                templateUrl: './category-overview.component.html',
                styleUrls: ['./category-overview.component.scss']
            }]
    }], function () { return [{ type: authentication_service["a" /* AuthenticationService */] }, { type: router["a" /* ActivatedRoute */] }, { type: category_service["a" /* CategoryService */] }, { type: entry_service["a" /* EntryService */] }, { type: event_child_service["a" /* EventChildService */] }, { type: thework_service["b" /* TheworkService */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/shared/thework/entry/entry-list/entry-list.component.ts + 1 modules
var entry_list_component = __webpack_require__("Kzmc");

// CONCATENATED MODULE: ./src/app/awards/profile/event/categories-tab/entries/entries.component.ts















function EntriesComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "span", 13);
    core["ɵɵtext"](1);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate"](ctx_r2.category.categoryCode);
} }
function EntriesComponent_div_0_strong_11_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "strong", 14);
    core["ɵɵtext"](1, " NEW ");
    core["ɵɵelementEnd"]();
} }
function EntriesComponent_div_0_div_14_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "a", 18);
    core["ɵɵlistener"]("click", function EntriesComponent_div_0_div_14_a_3_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r8); const ctx_r7 = core["ɵɵnextContext"](3); return ctx_r7.toggleMediumShow = true; });
    core["ɵɵtext"](1, "\u00A0\u00A0 \u2026 more\u00A0");
    core["ɵɵelementEnd"]();
} }
function EntriesComponent_div_0_div_14_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "a", 18);
    core["ɵɵlistener"]("click", function EntriesComponent_div_0_div_14_a_4_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r10); const ctx_r9 = core["ɵɵnextContext"](3); return ctx_r9.toggleMediumShow = false; });
    core["ɵɵtext"](1, "\u00A0Hide\u00A0");
    core["ɵɵelementEnd"]();
} }
const entries_component_c0 = function (a0) { return { "expand-more": a0 }; };
const entries_component_c1 = function (a0) { return { "is-collapsed": a0 }; };
function EntriesComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 15);
    core["ɵɵelementStart"](1, "p", 16);
    core["ɵɵtext"](2);
    core["ɵɵtemplate"](3, EntriesComponent_div_0_div_14_a_3_Template, 2, 0, "a", 17);
    core["ɵɵtemplate"](4, EntriesComponent_div_0_div_14_a_4_Template, 2, 0, "a", 17);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = core["ɵɵnextContext"](2);
    core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](5, entries_component_c0, ctx_r4.category.fullDesc.length > 350));
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](7, entries_component_c1, !ctx_r4.toggleMediumShow));
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"](" ", ctx_r4.category.fullDesc, " ");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", !ctx_r4.toggleMediumShow && ctx_r4.category.fullDesc.length > 350);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r4.toggleMediumShow && ctx_r4.category.fullDesc.length > 350);
} }
function EntriesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 2);
    core["ɵɵelementStart"](1, "div", 3);
    core["ɵɵelementStart"](2, "a", 4);
    core["ɵɵelementStart"](3, "mat-icon", 5);
    core["ɵɵtext"](4, "arrow_back");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "header");
    core["ɵɵelementStart"](6, "h2", 6);
    core["ɵɵtemplate"](7, EntriesComponent_div_0_span_7_Template, 2, 1, "span", 7);
    core["ɵɵelementStart"](8, "span", 8);
    core["ɵɵtext"](9);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](10, "small", 9);
    core["ɵɵtemplate"](11, EntriesComponent_div_0_strong_11_Template, 2, 0, "strong", 10);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](12, "button", 11);
    core["ɵɵtext"](13, "Hide Entries");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](14, EntriesComponent_div_0_div_14_Template, 5, 9, "div", 12);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](7);
    core["ɵɵproperty"]("ngIf", ctx_r0.category.categoryCode);
    core["ɵɵadvance"](2);
    core["ɵɵtextInterpolate"](ctx_r0.category.categoryName);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngIf", ctx_r0.category.categoryNew);
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngIf", ctx_r0.category.fullDesc);
} }
function EntriesComponent_app_entry_list_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-entry-list", 19);
} if (rf & 2) {
    const ctx_r1 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("eventID", ctx_r1.eventChild.eventID)("categoryID", ctx_r1.category.categoryID);
} }
class EntriesComponent {
    constructor(route, eventChildService, categoryService) {
        this.route = route;
        this.eventChildService = eventChildService;
        this.categoryService = categoryService;
    }
    ngOnInit() {
        // Get the event child by urls slugs
        this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            .map((eventChild) => {
            // Set teh local event child
            this.eventChild = eventChild;
            // Return the object for further processing
            return eventChild;
        })
            // Get the category
            .switchMap((eventChild) => this.categoryService.getCategoryTreeByID(eventChild.eventID, this.getParamCategoryID()))
            // Set the local category
            .map((category) => this.category = category)
            .subscribe();
    }
    // Gets the route param
    getParamCategoryID() {
        // Get the param from the route
        return parseInt(this.route.snapshot.paramMap.get('categoryID'));
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
EntriesComponent.ɵfac = function EntriesComponent_Factory(t) { return new (t || EntriesComponent)(core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](category_service["a" /* CategoryService */])); };
EntriesComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EntriesComponent, selectors: [["app-entries"]], decls: 2, vars: 2, consts: [["fxLayout", "", "class", "app-entries_header mat-typography", 4, "ngIf"], [3, "eventID", "categoryID", 4, "ngIf"], ["fxLayout", "", 1, "app-entries_header", "mat-typography"], ["fxFlex", "40px"], ["mat-icon-button", "", "routerLink", "../../../", "aria-label", "Back", 1, "app-entries_back-button"], ["aria-hidden", "true"], ["fxLayout", ""], ["class", "app-entries_code", 4, "ngIf"], [1, "app-entries_title", "bg-medium"], [1, "mat-caption"], ["class", "app-entries_new", "matTooltip", "New category for this event", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "routerLink", "../"], ["class", "g-description", "id", "description", 3, "ngClass", 4, "ngIf"], [1, "app-entries_code"], ["matTooltip", "New category for this event", 1, "app-entries_new"], ["id", "description", 1, "g-description", 3, "ngClass"], [1, "mat-body-1", "expand-more_panel", 3, "ngClass"], ["class", "expand-button text-link", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "expand-button", "text-link", 3, "click"], [3, "eventID", "categoryID"]], template: function EntriesComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, EntriesComponent_div_0_Template, 15, 4, "div", 0);
        core["ɵɵtemplate"](1, EntriesComponent_app_entry_list_1_Template, 1, 2, "app-entry-list", 1);
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.category);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx.eventChild && ctx.category);
    } }, directives: [common["NgIf"], flex["e" /* DefaultLayoutDirective */], flex["b" /* DefaultFlexDirective */], fesm2015_button["a" /* MatAnchor */], router["f" /* RouterLinkWithHref */], icon["a" /* MatIcon */], fesm2015_button["b" /* MatButton */], router["d" /* RouterLink */], tooltip["a" /* MatTooltip */], common["NgClass"], extended["a" /* DefaultClassDirective */], entry_list_component["a" /* EntryListComponent */]], styles: ["app-entries{display:block}app-entries .app-entries_header{padding-top:24px;margin-bottom:16px;padding-left:16px}app-entries .app-entries_header .app-entries_back-button{margin-left:-4px}app-entries .app-entries_header h2{padding-top:3px;margin-top:0;margin-bottom:9px;line-height:1.5}app-entries .app-entries_header h2 .app-entries_code{min-width:40px}app-entries .app-entries_header h2 .app-entries_title{padding:3px 6px}app-entries .app-entries_header h2 .app-entries_new{-webkit-transform:translateY(-8px);transform:translateY(-8px);padding-left:8px}app-entries .app-entries_header h2 .mat-flat-button{margin-left:24px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EntriesComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-entries',
                templateUrl: './entries.component.html',
                styleUrls: ['./entries.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: router["a" /* ActivatedRoute */] }, { type: event_child_service["a" /* EventChildService */] }, { type: category_service["a" /* CategoryService */] }]; }, null); })();

// CONCATENATED MODULE: ./src/app/awards/profile/event/entries-tab/entries-tab.component.ts








function EntriesTabComponent_app_entry_list_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-entry-list", 1);
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("eventID", ctx_r0.eventID);
} }
class EntriesTabComponent {
    constructor(
    // Define the activated route and event child services
    route, eventChildService) {
        this.route = route;
        this.eventChildService = eventChildService;
    }
    ngOnInit() {
        // Get the event from the usr slugs
        this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            .subscribe(eventChild => {
            // Set the local event id
            this.eventID = eventChild.eventID;
        });
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
EntriesTabComponent.ɵfac = function EntriesTabComponent_Factory(t) { return new (t || EntriesTabComponent)(core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */])); };
EntriesTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EntriesTabComponent, selectors: [["app-entries-tab"]], decls: 1, vars: 1, consts: [[3, "eventID", 4, "ngIf"], [3, "eventID"]], template: function EntriesTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, EntriesTabComponent_app_entry_list_0_Template, 1, 1, "app-entry-list", 0);
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.eventID);
    } }, directives: [common["NgIf"], entry_list_component["a" /* EntryListComponent */]], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EntriesTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-entries-tab',
                templateUrl: './entries-tab.component.html',
                styleUrls: ['./entries-tab.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: router["a" /* ActivatedRoute */] }, { type: event_child_service["a" /* EventChildService */] }]; }, null); })();

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js
var tabs = __webpack_require__("wZkO");

// CONCATENATED MODULE: ./src/app/awards/profile/event/event.component.ts








function EventComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "a", 5, 6);
    core["ɵɵtext"](3);
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = core["ɵɵreference"](2);
    const tab_r1 = core["ɵɵnextContext"]().$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("routerLink", tab_r1.urlSlug)("active", _r3.isActive);
    core["ɵɵadvance"](2);
    core["ɵɵtextInterpolate1"](" ", tab_r1.label, " ");
} }
function EventComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, EventComponent_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 4);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("appShowNetworkUser", tab_r1.urlSlug);
} }
class EventComponent {
    constructor(eventChildService) {
        this.eventChildService = eventChildService;
    }
    ngOnInit() {
        // Get the tabs for the menu
        this.eventChildService.getEventChildView()
            .subscribe((tabs) => {
            // Set the local tabs
            this.aTabs = tabs;
        });
    }
}
EventComponent.ɵfac = function EventComponent_Factory(t) { return new (t || EventComponent)(core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */])); };
EventComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EventComponent, selectors: [["app-event"]], decls: 5, vars: 1, consts: [[1, "joined-tab-bar_mask"], ["mat-tab-nav-bar", "", "color", "accent", "id", "tabs", 1, "joined-tab-bar", "mat-elevation-z1"], [4, "ngFor", "ngForOf"], [1, "router-outlet_wrapper"], [4, "appShowNetworkUser"], ["mat-tab-link", "", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function EventComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 0);
        core["ɵɵelementStart"](1, "nav", 1);
        core["ɵɵtemplate"](2, EventComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](3, "div", 3);
        core["ɵɵelement"](4, "router-outlet");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngForOf", ctx.aTabs);
    } }, directives: [tabs["d" /* MatTabNav */], common["NgForOf"], router["h" /* RouterOutlet */], show_network_user_directive["a" /* ShowNetworkUserDirective */], router["f" /* RouterLinkWithHref */], tabs["c" /* MatTabLink */], router["e" /* RouterLinkActive */]], styles: ["app-event{display:block}app-event .mat-tab-nav-bar .mat-tab-link{padding:0 14px;-webkit-box-flex:1;flex:1 1;min-width:-webkit-min-content;min-width:-moz-min-content;min-width:min-content}app-event .router-outlet_wrapper{min-height:calc(100vh - 104px)}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EventComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: event_child_service["a" /* EventChildService */] }]; }, null); })();

// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js
var platform_browser = __webpack_require__("jhN1");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-parent-index/event-parent-index.component.ts
var event_parent_index_component = __webpack_require__("IYfJ");

// CONCATENATED MODULE: ./src/app/awards/index/index.component.ts





class IndexComponent {
    constructor(title) {
        this.title = title;
        title.setTitle('Awards Listing - Adspur');
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(core["ɵɵdirectiveInject"](platform_browser["f" /* Title */])); };
IndexComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-awards-index"]], decls: 1, vars: 0, template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "app-shared-event-parent-index");
    } }, directives: [event_parent_index_component["a" /* EventParentIndexComponent */]], styles: ["app-awards-index{display:block}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](IndexComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-awards-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: platform_browser["f" /* Title */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/category/medium/medium.component.ts
var medium_component = __webpack_require__("Reel");

// CONCATENATED MODULE: ./src/app/awards/profile/event/categories-tab/medium/medium.component.ts









function MediumComponent_app_shared_medium_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-shared-medium", 1);
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("categoryID", ctx_r0.getParamCategoryID())("eventChild", ctx_r0.eventChild);
} }
class medium_component_MediumComponent {
    constructor(eventChildService, route) {
        this.eventChildService = eventChildService;
        this.route = route;
    }
    ngOnInit() {
        // Load the data for the page
        this.loadData()
            .subscribe();
    }
    // Check dom for hash after each rendering
    ngAfterViewChecked() {
        // Scroll to ID
        this.route.fragment.subscribe((hash) => {
            // Check the hash is defined
            if (hash) {
                // Get the element defined by the hash
                const cmp = document.getElementById(hash);
                // Check the element exists on the page
                if (cmp) {
                    // Scrollllllllllll
                    cmp.scrollIntoView();
                }
            }
        });
    }
    // Function to get the event parent and event child url slugs
    loadData() {
        // Round things up, yeeeha
        return Object(forkJoin["a" /* forkJoin */])([
            // Get the event child
            this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
                // Set the local event child
                .map((eventChild) => this.eventChild = eventChild)
        ]);
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamCategoryID() {
        // Get the param from the route
        return parseInt(this.route.snapshot.paramMap.get('categoryID'));
    }
}
medium_component_MediumComponent.ɵfac = function MediumComponent_Factory(t) { return new (t || medium_component_MediumComponent)(core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */])); };
medium_component_MediumComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: medium_component_MediumComponent, selectors: [["app-medium"]], decls: 1, vars: 1, consts: [[3, "categoryID", "eventChild", 4, "ngIf"], [3, "categoryID", "eventChild"]], template: function MediumComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, MediumComponent_app_shared_medium_0_Template, 1, 2, "app-shared-medium", 0);
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.eventChild && ctx.getParamCategoryID());
    } }, directives: [common["NgIf"], medium_component["a" /* MediumComponent */]], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](medium_component_MediumComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-medium',
                templateUrl: './medium.component.html',
                styleUrls: ['./medium.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: event_child_service["a" /* EventChildService */] }, { type: router["a" /* ActivatedRoute */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/core/models/event-parent/social-network/social-network.service.ts
var social_network_service = __webpack_require__("owQd");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js
var card = __webpack_require__("Wp6s");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js
var list = __webpack_require__("MutI");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/event-date/event-date-row/event-date-row.component.ts
var event_date_row_component = __webpack_require__("Eiv1");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js + 1 modules
var fesm2015_core = __webpack_require__("FKr1");

// EXTERNAL MODULE: ./src/app/shared/utility/social-network/social-media-icon-link/social-media-icon-link.component.ts
var social_media_icon_link_component = __webpack_require__("e2hL");

// CONCATENATED MODULE: ./src/app/awards/profile/event/overview-tab/overview-tab.component.ts

























function OverviewTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "mat-spinner", 2);
} if (rf & 2) {
    const ctx_r1 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("color", ctx_r1.accent)("strokeWidth", 2)("diameter", 80);
} }
function OverviewTabComponent_div_2_a_7_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 20);
    core["ɵɵtext"](1, "Visit website");
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate"]("href", ctx_r3.eventChild.eventParentWebsiteURL, core["ɵɵsanitizeUrl"]);
} }
function OverviewTabComponent_div_2_a_8_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 21);
    core["ɵɵtext"](1, "Enter now");
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate"]("href", ctx_r4.eventChild.eventParentEntriesURL, core["ɵɵsanitizeUrl"]);
} }
function OverviewTabComponent_div_2_ng_container_15_app_event_date_row_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-event-date-row", 23);
} if (rf & 2) {
    const eventDate_r11 = ctx.$implicit;
    core["ɵɵproperty"]("eventDate", eventDate_r11)("showEventDetails", false);
} }
function OverviewTabComponent_div_2_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵtemplate"](1, OverviewTabComponent_div_2_ng_container_15_app_event_date_row_1_Template, 1, 2, "app-event-date-row", 22);
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngForOf", ctx_r5.aEventDate);
} }
function OverviewTabComponent_div_2_a_18_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 24);
    core["ɵɵelementStart"](1, "mat-icon", 25);
    core["ɵɵtext"](2, "account_circle");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](3, "h3", 26);
    core["ɵɵtext"](4);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r6.eventParent.contactEmail, "", core["ɵɵsanitizeUrl"]);
    core["ɵɵadvance"](4);
    core["ɵɵtextInterpolate"](ctx_r6.eventParent.contactName);
} }
function OverviewTabComponent_div_2_a_19_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 27);
    core["ɵɵelementStart"](1, "mat-icon", 25);
    core["ɵɵtext"](2, "mail");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](3, "h3", 26);
    core["ɵɵtext"](4);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r7.eventParent.contactEmail, "", core["ɵɵsanitizeUrl"]);
    core["ɵɵpropertyInterpolate1"]("matTooltip", "Email ", ctx_r7.eventParent.contactEmail, "");
    core["ɵɵadvance"](4);
    core["ɵɵtextInterpolate"](ctx_r7.eventParent.contactEmail);
} }
function OverviewTabComponent_div_2_a_20_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "a", 27);
    core["ɵɵelementStart"](1, "mat-icon", 25);
    core["ɵɵtext"](2, "phone");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](3, "h3", 26);
    core["ɵɵtext"](4);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = core["ɵɵnextContext"](2);
    core["ɵɵpropertyInterpolate1"]("href", "tel:", ctx_r8.eventParent.contactPhone, "", core["ɵɵsanitizeUrl"]);
    core["ɵɵpropertyInterpolate1"]("matTooltip", "Call ", ctx_r8.eventParent.contactPhone, "");
    core["ɵɵadvance"](4);
    core["ɵɵtextInterpolate"](ctx_r8.eventParent.contactPhone);
} }
function OverviewTabComponent_div_2_div_21_app_social_media_icon_link_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-social-media-icon-link", 30);
} if (rf & 2) {
    const socialNetwork_r13 = ctx.$implicit;
    core["ɵɵproperty"]("socialNetwork", socialNetwork_r13);
} }
function OverviewTabComponent_div_2_div_21_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 28);
    core["ɵɵtemplate"](1, OverviewTabComponent_div_2_div_21_app_social_media_icon_link_1_Template, 1, 1, "app-social-media-icon-link", 29);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngForOf", ctx_r9.aSocialNetwork);
} }
const overview_tab_component_c0 = function () { return { "padding": "0 16px" }; };
function OverviewTabComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 3);
    core["ɵɵelementStart"](1, "article", 4);
    core["ɵɵelementStart"](2, "h3", 5);
    core["ɵɵtext"](3, "About");
    core["ɵɵelementEnd"]();
    core["ɵɵelement"](4, "div", 6);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "aside", 7);
    core["ɵɵelementStart"](6, "div", 8);
    core["ɵɵtemplate"](7, OverviewTabComponent_div_2_a_7_Template, 2, 1, "a", 9);
    core["ɵɵtemplate"](8, OverviewTabComponent_div_2_a_8_Template, 2, 1, "a", 10);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](9, "section", 11);
    core["ɵɵelementStart"](10, "div", 12);
    core["ɵɵelementStart"](11, "h3", 13);
    core["ɵɵtext"](12, "Dates");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](13, "a", 14);
    core["ɵɵtext"](14, "View All");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](15, OverviewTabComponent_div_2_ng_container_15_Template, 2, 1, "ng-container", 15);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](16, "mat-card");
    core["ɵɵelementStart"](17, "mat-nav-list", 16);
    core["ɵɵtemplate"](18, OverviewTabComponent_div_2_a_18_Template, 5, 2, "a", 17);
    core["ɵɵtemplate"](19, OverviewTabComponent_div_2_a_19_Template, 5, 3, "a", 18);
    core["ɵɵtemplate"](20, OverviewTabComponent_div_2_a_20_Template, 5, 3, "a", 18);
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](21, OverviewTabComponent_div_2_div_21_Template, 2, 1, "div", 19);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"]();
    core["ɵɵproperty"]("ngStyle.lt-md", core["ɵɵpureFunction0"](9, overview_tab_component_c0));
    core["ɵɵadvance"](4);
    core["ɵɵproperty"]("innerHTML", ctx_r2.eventChild.eventOverview, core["ɵɵsanitizeHtml"]);
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventChild == null ? null : ctx_r2.eventChild.eventParentWebsiteURL);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventChild == null ? null : ctx_r2.eventChild.eventParentEntriesURL);
    core["ɵɵadvance"](7);
    core["ɵɵproperty"]("ngIf", ctx_r2.aEventDate && ctx_r2.aEventDate.length);
    core["ɵɵadvance"](3);
    core["ɵɵproperty"]("ngIf", (ctx_r2.eventParent == null ? null : ctx_r2.eventParent.contactName) && (ctx_r2.eventParent == null ? null : ctx_r2.eventParent.contactEmail));
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent == null ? null : ctx_r2.eventParent.contactEmail);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent == null ? null : ctx_r2.eventParent.contactPhone);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.aSocialNetwork && ctx_r2.aSocialNetwork.length);
} }
class overview_tab_component_OverviewTabComponent {
    constructor(eventChildService, eventDateService, eventParentService, socialNetworkService, route, router) {
        this.eventChildService = eventChildService;
        this.eventDateService = eventDateService;
        this.eventParentService = eventParentService;
        this.socialNetworkService = socialNetworkService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // Load up the data
        this.loadData()
            .subscribe();
        // Listen in on those events going off
        this.router.events
            // Filter for navigation end object
            .switchMap((event) => event instanceof router["b" /* NavigationEnd */] ? Object(of["a" /* of */])(event) : empty["a" /* EMPTY */])
            .switchMap(({ urlAfterRedirects }) => 
        // Check to see if the url matches the awards profile url and if the event parent exists and if the urls do not match
        urlAfterRedirects.includes('/awards/p/') && ((this.eventParent && this.eventParent.urlSlug !== this.getParamEventParentUrlSlug()) || (this.eventChild && this.eventChild.urlSlug !== this.getParamEventChildUrlSlug()))
            // Load in the new event parent
            ? this.deleteData()
                .switchMap(() => this.loadData())
            // Do nothing
            : Object(of["a" /* of */])(undefined))
            .subscribe();
    }
    // Function to get the event parent and event child url slugs
    loadData() {
        // Get the url slugs for the event parent and event child
        return Object(forkJoin["a" /* forkJoin */])([
            // Get the event parent and assign to the local var
            this.eventParentService.getEventParentByUrl(this.getParamEventParentUrlSlug())
                .map((eventParent) => {
                // Store the local event parent
                this.eventParent = eventParent;
                // Return for further processing
                return eventParent;
            })
                .switchMap((eventParent) => 
            // Get the social networking for the event parent
            this.socialNetworkService.getSocialNetworkByEventParentID(eventParent.eventParentID)
                // Store the sociak networking locally
                .map((aSocialNetwork) => this.aSocialNetwork = aSocialNetwork)),
            // Get the event child and assign to the local var
            this.eventChildService.getEventChildByUrl(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
                .map((eventChild) => {
                // Store the local event
                this.eventChild = eventChild;
                // Return for further processing
                return eventChild;
            })
                .switchMap((eventChild) => 
            // Get the events dates
            this.eventDateService.getEventDatesByEventID(eventChild.eventID)
                // Store the events dates locally
                .map((aEventDate) => this.aEventDate = aEventDate))
        ]);
    }
    // Function to get the event parent and event child url slugs
    deleteData() {
        // Reset all data
        this.aEventDate = undefined;
        this.aSocialNetwork = undefined;
        this.eventParent = undefined;
        this.eventChild = undefined;
        // Get the url slugs for the event parent and event child
        return Object(of["a" /* of */])(true);
    }
    // Gets the route param
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.parent.parent.snapshot.paramMap.get('urlSlug');
    }
    // Gets the route param
    getParamEventChildUrlSlug() {
        // Get the param from the route
        return this.route.parent.snapshot.paramMap.get('urlSlug');
    }
}
overview_tab_component_OverviewTabComponent.ɵfac = function OverviewTabComponent_Factory(t) { return new (t || overview_tab_component_OverviewTabComponent)(core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](event_date_service["a" /* EventDateService */]), core["ɵɵdirectiveInject"](event_parent_service["a" /* EventParentService */]), core["ɵɵdirectiveInject"](social_network_service["a" /* SocialNetworkService */]), core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](router["c" /* Router */])); };
overview_tab_component_OverviewTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: overview_tab_component_OverviewTabComponent, selectors: [["app-overview-tab"]], decls: 3, vars: 2, consts: [["loading", ""], ["fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutGap.gt-sm", "16px", 3, "ngStyle.lt-md", 4, "ngIf", "ngIfElse"], [3, "color", "strokeWidth", "diameter"], ["fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutGap.gt-sm", "16px", 3, "ngStyle.lt-md"], ["fxFlex", "100", 1, "g-section"], [1, "g-section_title", "mat-title"], [1, "mat-typography", "user-body-content", 3, "innerHTML"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", "fxFlex.gt-md", "352px"], ["fxLayout", "", "fxLayoutGap", "16px"], ["target", "_blank", "fxFlex", "50%", "mat-raised-button", "", "color", "primary", 3, "href", 4, "ngIf"], ["target", "_blank", "fxFlex", "50%", "mat-raised-button", "", "color", "accent", 3, "href", 4, "ngIf"], [1, "g-section"], [1, "g-clearfix"], [1, "g-section_title", "mat-title", "g-fl-l"], ["mat-button", "", "routerLink", "../calendar", 1, "g-fl-r"], [4, "ngIf"], ["id", "contact"], ["mat-list-item", "", 3, "href", 4, "ngIf"], ["mat-list-item", "", 3, "href", "matTooltip", 4, "ngIf"], ["class", "button-row", 4, "ngIf"], ["target", "_blank", "fxFlex", "50%", "mat-raised-button", "", "color", "primary", 3, "href"], ["target", "_blank", "fxFlex", "50%", "mat-raised-button", "", "color", "accent", 3, "href"], [3, "eventDate", "showEventDetails", 4, "ngFor", "ngForOf"], [3, "eventDate", "showEventDetails"], ["mat-list-item", "", 3, "href"], ["aria-hidden", "true", "matListIcon", ""], ["matLine", ""], ["mat-list-item", "", 3, "href", "matTooltip"], [1, "button-row"], [3, "socialNetwork", 4, "ngFor", "ngForOf"], [3, "socialNetwork"]], template: function OverviewTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, OverviewTabComponent_ng_template_0_Template, 1, 3, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
        core["ɵɵtemplate"](2, OverviewTabComponent_div_2_Template, 22, 10, "div", 1);
    } if (rf & 2) {
        const _r0 = core["ɵɵreference"](1);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx.eventParent && ctx.eventChild)("ngIfElse", _r0);
    } }, directives: [common["NgIf"], progress_spinner["c" /* MatSpinner */], flex["e" /* DefaultLayoutDirective */], flex["f" /* DefaultLayoutGapDirective */], extended["c" /* DefaultStyleDirective */], flex["b" /* DefaultFlexDirective */], fesm2015_button["a" /* MatAnchor */], router["f" /* RouterLinkWithHref */], card["a" /* MatCard */], list["f" /* MatNavList */], common["NgForOf"], event_date_row_component["a" /* EventDateRowComponent */], list["c" /* MatListItem */], icon["a" /* MatIcon */], list["b" /* MatListIconCssMatStyler */], fesm2015_core["l" /* MatLine */], tooltip["a" /* MatTooltip */], social_media_icon_link_component["a" /* SocialMediaIconLinkComponent */]], styles: ["app-overview-tab .g-section{margin-top:0}app-overview-tab aside{margin-top:16px;display:block}@media (min-width:960px){app-overview-tab aside{margin-top:72px}}app-overview-tab aside .mat-raised-button{display:block;margin-bottom:8px}app-overview-tab aside .mat-nav-list{margin:-24px -16px 8px;padding:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](overview_tab_component_OverviewTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-overview-tab',
                templateUrl: './overview-tab.component.html',
                styleUrls: ['./overview-tab.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: event_child_service["a" /* EventChildService */] }, { type: event_date_service["a" /* EventDateService */] }, { type: event_parent_service["a" /* EventParentService */] }, { type: social_network_service["a" /* SocialNetworkService */] }, { type: router["a" /* ActivatedRoute */] }, { type: router["c" /* Router */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/core/route-history/route-history.service.ts
var route_history_service = __webpack_require__("LJ+s");

// EXTERNAL MODULE: ./src/app/_helpers/guards/show-super-admin.directive.ts
var show_super_admin_directive = __webpack_require__("qtH5");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js
var form_field = __webpack_require__("kmnG");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js
var fesm2015_select = __webpack_require__("d3UM");

// EXTERNAL MODULE: ./src/app/shared/event-parent/follow-button/follow-button.component.ts
var follow_button_component = __webpack_require__("ZwCc");

// CONCATENATED MODULE: ./src/app/awards/profile/profile.component.ts





























function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div", 4);
    core["ɵɵelementStart"](1, "div", 5);
    core["ɵɵelementStart"](2, "p");
    core["ɵɵelementStart"](3, "strong");
    core["ɵɵtext"](4, "Archived Event:");
    core["ɵɵelementEnd"]();
    core["ɵɵtext"](5, " See the ");
    core["ɵɵelementStart"](6, "a", 6);
    core["ɵɵtext"](7, "latest ");
    core["ɵɵelementStart"](8, "strong");
    core["ɵɵtext"](9);
    core["ɵɵelementEnd"]();
    core["ɵɵtext"](10, " edition of ");
    core["ɵɵelementStart"](11, "strong");
    core["ɵɵtext"](12);
    core["ɵɵelementEnd"]();
    core["ɵɵtext"](13, " here.");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](6);
    core["ɵɵpropertyInterpolate1"]("routerLink", "./e/", ctx_r0.eventParent.aEventObj[0].urlSlug, "/overview");
    core["ɵɵadvance"](3);
    core["ɵɵtextInterpolate"](ctx_r0.eventParent.aEventObj[0].eventName);
    core["ɵɵadvance"](3);
    core["ɵɵtextInterpolate"](ctx_r0.eventParent.eventParentName);
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "div");
    core["ɵɵelementStart"](1, "div", 5);
    core["ɵɵelement"](2, "p", 7);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = core["ɵɵnextContext"]();
    core["ɵɵclassMapInterpolate1"]("mat-typography profile_message-bar ", ctx_r1.selectedEvent.eventAlertStyle, "");
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("innerHTML", ctx_r1.selectedEvent.eventAlert, core["ɵɵsanitizeHtml"]);
} }
function ProfileComponent_mat_card_3_picture_1_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "picture", 24);
    core["ɵɵelement"](1, "source", 25);
    core["ɵɵelement"](2, "source", 26);
    core["ɵɵelement"](3, "img", 27);
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵattribute"]("defaultImage", ctx_r3.eventParent.backgroundImageFile + "&w=400&h=133&q=5")("lazyLoad", ctx_r3.eventParent.backgroundImageFile + "&w=1200&h=400");
    core["ɵɵadvance"](1);
    core["ɵɵattribute"]("defaultImage", ctx_r3.eventParent.backgroundImageFile + "&w=400&h=133&q=5")("lazyLoad", ctx_r3.eventParent.backgroundImageFile + "&w=960&h=330");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("defaultImage", ctx_r3.eventParent.backgroundImageFile + "&w=400&h=133&q=5&blur=250")("lazyLoad", ctx_r3.eventParent.backgroundImageFile + "&w=500&h=166");
} }
function ProfileComponent_mat_card_3_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "a", 32);
    core["ɵɵelementStart"](2, "mat-icon", 30);
    core["ɵɵtext"](3, "settings");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = core["ɵɵnextContext"](3);
    core["ɵɵadvance"](1);
    core["ɵɵpropertyInterpolate1"]("routerLink", "/admin/awardshow/", ctx_r10.eventParent.eventParentID, "/stats");
} }
function ProfileComponent_mat_card_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "div", 28);
    core["ɵɵelementStart"](1, "a", 29);
    core["ɵɵlistener"]("click", function ProfileComponent_mat_card_3_div_2_Template_a_click_1_listener() { core["ɵɵrestoreView"](_r12); const ctx_r11 = core["ɵɵnextContext"](2); return ctx_r11.routeHistoryService.goBackTo(ctx_r11.returnUrl, ctx_r11.defaultReturnUrl); });
    core["ɵɵelementStart"](2, "mat-icon", 30);
    core["ɵɵtext"](3, "arrow_back");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](4, ProfileComponent_mat_card_3_div_2_ng_container_4_Template, 4, 1, "ng-container", 31);
    core["ɵɵelementEnd"]();
} }
function ProfileComponent_mat_card_3_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "a", 32);
    core["ɵɵelementStart"](2, "mat-icon", 30);
    core["ɵɵtext"](3, "settings");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = core["ɵɵnextContext"](3);
    core["ɵɵadvance"](1);
    core["ɵɵpropertyInterpolate1"]("routerLink", "/admin/awardshow/", ctx_r13.eventParent.eventParentID, "/stats");
} }
function ProfileComponent_mat_card_3_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "div", 33);
    core["ɵɵelementStart"](1, "a", 29);
    core["ɵɵlistener"]("click", function ProfileComponent_mat_card_3_div_4_Template_a_click_1_listener() { core["ɵɵrestoreView"](_r15); const ctx_r14 = core["ɵɵnextContext"](2); return ctx_r14.routeHistoryService.goBackTo(ctx_r14.returnUrl, ctx_r14.defaultReturnUrl); });
    core["ɵɵelementStart"](2, "mat-icon", 30);
    core["ɵɵtext"](3, "arrow_back");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](4, ProfileComponent_mat_card_3_div_4_ng_container_4_Template, 4, 1, "ng-container", 31);
    core["ɵɵelementEnd"]();
} }
const profile_component_c0 = function () { return { "height.px": "23" }; };
function ProfileComponent_mat_card_3_div_6_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "div", 34);
} if (rf & 2) {
    core["ɵɵproperty"]("ngStyle", core["ɵɵpureFunction0"](1, profile_component_c0));
} }
const profile_component_c1 = function () { return { "font-size": "16px" }; };
function ProfileComponent_mat_card_3_mat_form_field_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementContainerStart"](0);
    core["ɵɵelementStart"](1, "mat-option", 37);
    core["ɵɵtext"](2);
    core["ɵɵelementEnd"]();
    core["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const eventObj_r17 = ctx.$implicit;
    core["ɵɵadvance"](1);
    core["ɵɵpropertyInterpolate1"]("routerLink", "./e/", eventObj_r17.urlSlug.length ? eventObj_r17.urlSlug : eventObj_r17.eventID, "/overview");
    core["ɵɵproperty"]("value", eventObj_r17.eventID)("ngStyle", core["ɵɵpureFunction0"](4, profile_component_c1));
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"](" ", eventObj_r17.eventName, " ");
} }
function ProfileComponent_mat_card_3_mat_form_field_12_Template(rf, ctx) { if (rf & 1) {
    const _r19 = core["ɵɵgetCurrentView"]();
    core["ɵɵelementStart"](0, "mat-form-field");
    core["ɵɵelementStart"](1, "mat-select", 35);
    core["ɵɵlistener"]("valueChange", function ProfileComponent_mat_card_3_mat_form_field_12_Template_mat_select_valueChange_1_listener($event) { core["ɵɵrestoreView"](_r19); const ctx_r18 = core["ɵɵnextContext"](2); return ctx_r18.selectedEvent.eventID = $event; });
    core["ɵɵtemplate"](2, ProfileComponent_mat_card_3_mat_form_field_12_ng_container_2_Template, 3, 5, "ng-container", 36);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = core["ɵɵnextContext"](2);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("value", ctx_r7.selectedEvent.eventID);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngForOf", ctx_r7.eventParent.aEventObj);
} }
function ProfileComponent_mat_card_3_app_follow_button_15_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelement"](0, "app-follow-button", 38);
} if (rf & 2) {
    const ctx_r8 = core["ɵɵnextContext"](2);
    core["ɵɵproperty"]("eventparentid", ctx_r8.eventParent.eventParentID)("followsourcetypeid", 1);
} }
function ProfileComponent_mat_card_3_mat_list_item_16_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "mat-list-item");
    core["ɵɵelementStart"](1, "mat-icon", 39);
    core["ɵɵtext"](2, "verified_user");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](3, "span", 40);
    core["ɵɵtext"](4, "Verified Adspur");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](5, "h3", 23);
    core["ɵɵtext"](6, "Partner");
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} }
const profile_component_c2 = function () { return { "margin-top": "-63px" }; };
const _c3 = function () { return { "margin-right": "8px" }; };
const _c4 = function () { return { "text-align": "center" }; };
const _c5 = function () { return { "margin-left": "16px" }; };
const _c6 = function () { return { "margin": "0 -16px" }; };
function ProfileComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    core["ɵɵelementStart"](0, "mat-card", 8);
    core["ɵɵtemplate"](1, ProfileComponent_mat_card_3_picture_1_Template, 4, 6, "picture", 9);
    core["ɵɵtemplate"](2, ProfileComponent_mat_card_3_div_2_Template, 5, 0, "div", 10);
    core["ɵɵelementStart"](3, "mat-card-header", 11);
    core["ɵɵtemplate"](4, ProfileComponent_mat_card_3_div_4_Template, 5, 0, "div", 12);
    core["ɵɵelementStart"](5, "div", 13);
    core["ɵɵtemplate"](6, ProfileComponent_mat_card_3_div_6_Template, 1, 2, "div", 14);
    core["ɵɵelementStart"](7, "div", 15);
    core["ɵɵelement"](8, "img", 16);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](9, "div", 17);
    core["ɵɵelementStart"](10, "h1", 18);
    core["ɵɵtext"](11);
    core["ɵɵtemplate"](12, ProfileComponent_mat_card_3_mat_form_field_12_Template, 3, 2, "mat-form-field", 19);
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](13, "mat-list", 20);
    core["ɵɵelementStart"](14, "mat-list-item");
    core["ɵɵtemplate"](15, ProfileComponent_mat_card_3_app_follow_button_15_Template, 1, 2, "app-follow-button", 21);
    core["ɵɵelementEnd"]();
    core["ɵɵtemplate"](16, ProfileComponent_mat_card_3_mat_list_item_16_Template, 7, 0, "mat-list-item", 19);
    core["ɵɵelementStart"](17, "mat-list-item");
    core["ɵɵelementStart"](18, "mat-icon", 22);
    core["ɵɵtext"](19, "location_on");
    core["ɵɵelementEnd"]();
    core["ɵɵelementStart"](20, "h3", 23);
    core["ɵɵtext"](21);
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
    core["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = core["ɵɵnextContext"]();
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent.backgroundImageFile);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent.backgroundImageFile);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngIf", !ctx_r2.eventParent.backgroundImageFile);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngStyle.xs", core["ɵɵpureFunction0"](16, profile_component_c2));
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", !ctx_r2.eventParent.backgroundImageFile);
    core["ɵɵadvance"](2);
    core["ɵɵpropertyInterpolate1"]("alt", "", ctx_r2.eventParent.eventParentName, " Logo");
    core["ɵɵproperty"]("ngStyle.gt-xs", core["ɵɵpureFunction0"](17, _c3))("src", ctx_r2.eventParent.imageFile, core["ɵɵsanitizeUrl"]);
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngStyle.xs", core["ɵɵpureFunction0"](18, _c4))("ngStyle.gt-xs", core["ɵɵpureFunction0"](19, _c5));
    core["ɵɵadvance"](1);
    core["ɵɵtextInterpolate1"](" ", ctx_r2.eventParent.eventParentName, " ");
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.selectedEvent);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngStyle.xs", core["ɵɵpureFunction0"](20, _c6));
    core["ɵɵadvance"](2);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent == null ? null : ctx_r2.eventParent.eventParentID);
    core["ɵɵadvance"](1);
    core["ɵɵproperty"]("ngIf", ctx_r2.eventParent.isVerified);
    core["ɵɵadvance"](5);
    core["ɵɵtextInterpolate"](ctx_r2.eventParent.eventGeoScope);
} }
class profile_component_ProfileComponent {
    constructor(route, router, eventChildService, eventParentService, title, authenticationService, routeHistoryService) {
        this.route = route;
        this.router = router;
        this.eventChildService = eventChildService;
        this.eventParentService = eventParentService;
        this.title = title;
        this.authenticationService = authenticationService;
        this.routeHistoryService = routeHistoryService;
        this.defaultReturnUrl = '/awards';
        // Listen to see if any logins or logouts occur
        this.authenticationService.authStatus$
            .map((loggedInStatus) => 
        // If a user is logged in set the local user
        this.user = loggedInStatus.hasOwnProperty('status') && loggedInStatus.status ? loggedInStatus.user : undefined)
            .subscribe();
    }
    ngOnInit() {
        this.returnUrl = this.router.url;
        // Check to see if the user is logged in
        if (this.authenticationService.isLoggedIn()) {
            // Set the components user
            this.user = this.authenticationService.currentUserValue;
        }
        // Load the data for the page
        this.getEventParent(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug())
            .subscribe();
        // Listen in on those events going off
        this.router.events
            // Filter for navigation end object
            .switchMap((event) => event instanceof router["b" /* NavigationEnd */] ? Object(of["a" /* of */])(event) : empty["a" /* EMPTY */])
            .switchMap(({ urlAfterRedirects }) => 
        // Check to see if the url matches the awards profile url and if the event parent exists and if the urls do not match
        urlAfterRedirects.includes('/awards/p/') && this.eventParent && this.eventParent.urlSlug !== this.getParamEventParentUrlSlug()
            // Load in the new event parent
            ? Object(of["a" /* of */])(this.eventParent)
                // Clear the event parent
                .map(() => this.eventParent = undefined)
                // Get the new event parent
                .switchMap(() => this.getEventParent(this.getParamEventParentUrlSlug(), this.getParamEventChildUrlSlug()))
            // Do nothing
            : empty["a" /* EMPTY */])
            .subscribe();
    }
    // Function to load in the requested event parent
    getEventParent(epUrlSlug, ecUrlSlug) {
        // Get the event parent by it's urls slug
        return this.eventParentService.getEventParentByUrl(epUrlSlug)
            .switchMap((eventParent) => 
        // If the event parent is a valid on
        eventParent
            // If so
            ? Object(of["a" /* of */])(eventParent)
                .map((eventParent) => {
                // Set the local event parent
                this.eventParent = eventParent;
                // Set the title
                this.title.setTitle(`${eventParent.eventParentName} - Adspur`);
                // Return the event parent for further doings
                return eventParent;
            })
                .map((eventParent) => {
                // If the event child url exists
                const eventChild = ecUrlSlug && eventParent.aEventObj.find((eventChild) => eventChild.urlSlug === ecUrlSlug);
                // If the event child is not valid then get the default event child
                return !eventChild ? eventParent.aEventObj.find(eventChild => eventChild.urlSlug === this.eventParentService.getDefaultEventParentEventUrlSlugs(eventParent).eventUrlSlug) : eventChild;
            })
                // Get the event child details
                .switchMap((eventChild) => this.eventChildService.getEventChildByID(eventChild.eventID))
                // Set the local event child object
                .map((eventChild) => this.selectedEvent = eventChild)
                // If the user has arrived at the profile page without loadin gthe child event pagthen go to the selected childs page
                .map(() => this.router.url.split('/').length < 7 && this.router.navigate([`/awards/p/${this.eventParent.urlSlug}/e/${this.selectedEvent.urlSlug}/overview`]))
            // Otherwise got to the awards
            : Object(of["a" /* of */])({})
                .map(() => this.goToAwards()));
    }
    // Get event parent url slug
    getParamEventParentUrlSlug() {
        // Get the param from the route
        return this.route.snapshot.paramMap.get('urlSlug');
    }
    // Gets event child url slug
    getParamEventChildUrlSlug() {
        var _a;
        // Get the param from the route
        return ((_a = this.route.children) === null || _a === void 0 ? void 0 : _a.length) ? this.route.children[0].snapshot.paramMap.get('urlSlug') : undefined;
    }
    // Function to navigate back tp the awards list
    goToAwards() {
        // Re route them to the default event
        this.router.navigate([`/awards`]);
    }
}
profile_component_ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || profile_component_ProfileComponent)(core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */]), core["ɵɵdirectiveInject"](router["c" /* Router */]), core["ɵɵdirectiveInject"](event_child_service["a" /* EventChildService */]), core["ɵɵdirectiveInject"](event_parent_service["a" /* EventParentService */]), core["ɵɵdirectiveInject"](platform_browser["f" /* Title */]), core["ɵɵdirectiveInject"](authentication_service["a" /* AuthenticationService */]), core["ɵɵdirectiveInject"](route_history_service["a" /* RouteHistoryService */])); };
profile_component_ProfileComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: profile_component_ProfileComponent, selectors: [["app-awards-profile"]], decls: 5, vars: 3, consts: [["class", "profile_message-bar mat-typography", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "g-page-width"], ["class", "mat-typography profile_header mat-card--padding", 4, "ngIf"], [1, "profile_message-bar", "mat-typography"], [1, "g-page-width", "text-center"], [1, "text-link", 3, "routerLink"], [3, "innerHTML"], [1, "mat-typography", "profile_header", "mat-card--padding"], ["class", "profile_banner", 4, "ngIf"], ["class", "profile_banner-overlay", "fxLayout", "", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "column"], ["class", "profile_no-banner", "fxLayout", "", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "", "fxLayout.xs", "column", "fxLayoutAlign.xs", "start center", "fxLayout.gt-xs", "row", "fxLayoutAlign.gt-xs", "start start", 3, "ngStyle.xs"], [3, "ngStyle", 4, "ngIf"], ["fxLayout.gt-xs", "100px", 1, "profile_thumbnail"], ["height", "100", "width", "100", 1, "g-img-bg", 3, "alt", "ngStyle.gt-xs", "src"], ["fxFlex", ""], [1, "mat-headline", 3, "ngStyle.xs", "ngStyle.gt-xs"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign.xs", "center center", "fxLayout.gt-xs", "row", "fxLayoutAlign.gt-xs", "start start", 3, "ngStyle.xs"], [3, "eventparentid", "followsourcetypeid", 4, "ngIf"], ["aria-hidden", "true", "matListIcon", ""], ["matLine", ""], [1, "profile_banner"], ["media", "(min-width: 960px)"], ["media", "(min-width: 500px)"], ["alt", "", 1, "g-resp-img", 3, "defaultImage", "lazyLoad"], ["fxLayout", "", "fxLayoutAlign", "space-between center", 1, "profile_banner-overlay"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Back to Awards index", "matTooltip", "Awards", "matTooltipPosition", "after", 1, "mat-elevation-z0", 3, "click"], ["aria-hidden", "true"], [4, "appShowSuperAdmin"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Award admin", "matTooltip", "Award Admin", "matTooltipPosition", "before", 1, "mat-elevation-z0", 3, "routerLink"], ["fxLayout", "", "fxLayoutAlign", "space-between center", 1, "profile_no-banner"], [3, "ngStyle"], [3, "value", "valueChange"], [4, "ngFor", "ngForOf"], [3, "value", "routerLink", "ngStyle"], [3, "eventparentid", "followsourcetypeid"], ["aria-hidden", "true", "matListIcon", "", "color", "accent", "matTooltip", "Verified Adspur partner"], [1, "cdk-visually-hidden"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 14, 3, "div", 0);
        core["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 3, 4, "div", 1);
        core["ɵɵelementStart"](2, "div", 2);
        core["ɵɵtemplate"](3, ProfileComponent_mat_card_3_Template, 22, 21, "mat-card", 3);
        core["ɵɵelement"](4, "router-outlet");
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵproperty"]("ngIf", ctx.eventParent && (ctx.selectedEvent && ctx.selectedEvent.eventID !== ctx.eventParent.aEventObj[0].eventID));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", (ctx.selectedEvent == null ? null : ctx.selectedEvent.eventAlert == null ? null : ctx.selectedEvent.eventAlert.length) && (ctx.selectedEvent == null ? null : ctx.selectedEvent.eventAlertStyle == null ? null : ctx.selectedEvent.eventAlertStyle.length));
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx.eventParent);
    } }, directives: [common["NgIf"], router["h" /* RouterOutlet */], router["f" /* RouterLinkWithHref */], card["a" /* MatCard */], card["e" /* MatCardHeader */], flex["e" /* DefaultLayoutDirective */], flex["d" /* DefaultLayoutAlignDirective */], extended["c" /* DefaultStyleDirective */], flex["b" /* DefaultFlexDirective */], list["a" /* MatList */], list["c" /* MatListItem */], icon["a" /* MatIcon */], list["b" /* MatListIconCssMatStyler */], fesm2015_core["l" /* MatLine */], ng_lazyload_image_LazyLoadImageDirective, fesm2015_button["a" /* MatAnchor */], tooltip["a" /* MatTooltip */], show_super_admin_directive["a" /* ShowSuperAdminDirective */], common["NgStyle"], form_field["c" /* MatFormField */], fesm2015_select["a" /* MatSelect */], common["NgForOf"], fesm2015_core["p" /* MatOption */], router["d" /* RouterLink */], follow_button_component["a" /* FollowButtonComponent */]], styles: ["app-awards-profile{padding-bottom:112px;display:block}app-awards-profile .profile_message-bar{margin:0;padding:16px 0;background:#9acac4;color:#fff}app-awards-profile .profile_message-bar .g-page-width{padding:0 8px}app-awards-profile .profile_message-bar p{margin-bottom:0}app-awards-profile .profile_message-bar a{-webkit-box-shadow:none;box-shadow:none}app-awards-profile .profile_message-bar.danger{background:#f83625;color:#fff}app-awards-profile .profile_message-bar.warning{background:#f39a5b;color:#fff}app-awards-profile .profile_message-bar.success{background:#2ba970;color:#fff}app-awards-profile .profile_message-bar.info{background:#2b89a9;color:#fff}app-awards-profile .profile_header.mat-card--padding{padding-bottom:8px}app-awards-profile .profile_header.mat-card--padding .profile_banner{display:block;background:#ddd;margin:-24px -24px 24px;position:relative;padding-bottom:34.9%;overflow:hidden}app-awards-profile .profile_header.mat-card--padding .profile_banner img{position:absolute;width:100%;height:auto}app-awards-profile .profile_banner-overlay{position:absolute;top:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:14px 16px}app-awards-profile .profile_no-banner{margin-top:-8px;margin-bottom:16px}app-awards-profile .mat-card-header{z-index:1;position:inherit}app-awards-profile .mat-card-header .profile_thumbnail img{border:0 solid #fff}app-awards-profile .mat-card-header .mat-headline{margin-top:7px;margin-bottom:6px;font-weight:400}app-awards-profile .mat-card-header .mat-form-field-type-mat-select .mat-form-field-wrapper{font-size:inherit;margin-bottom:-1.5em}app-awards-profile .mat-card-header .mat-form-field-type-mat-select .mat-form-field-infix{padding:0 0 .25em;border-top:0;min-width:3.45em;width:0}app-awards-profile .mat-card-header .mat-form-field-type-mat-select .mat-form-field-underline{height:0}app-awards-profile .mat-card-header .mat-form-field-type-mat-select .mat-select-value{max-width:none;padding-right:4px}app-awards-profile .mat-card-header .mat-list{padding-top:0}app-awards-profile .mat-card-header .mat-list .mat-list-item-with-avatar{height:48px}app-awards-profile .mat-card-header .mat-list .mat-list-item{width:auto}app-awards-profile .mat-card-header .mat-list .mat-list-item .mat-list-item-content .mat-list-text{padding-left:4px}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](profile_component_ProfileComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-awards-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: router["a" /* ActivatedRoute */] }, { type: router["c" /* Router */] }, { type: event_child_service["a" /* EventChildService */] }, { type: event_parent_service["a" /* EventParentService */] }, { type: platform_browser["f" /* Title */] }, { type: authentication_service["a" /* AuthenticationService */] }, { type: route_history_service["a" /* RouteHistoryService */] }]; }, null); })();

// CONCATENATED MODULE: ./src/app/awards/awards.router.module.ts
















const routes = [
    { path: '', component: IndexComponent, data: { animation: 'AwardIndexPage' } },
    { path: 'p/:urlSlug', component: profile_component_ProfileComponent,
        children: [
            { path: 'e/:urlSlug', component: EventComponent,
                children: [
                    { path: 'overview', component: overview_tab_component_OverviewTabComponent, data: { animation: 'EventOverviewPage' } },
                    { path: 'categories', component: CategoriesComponent, data: { animation: 'EventCategoriesPage' } },
                    { path: 'categories/medium/:categoryID', component: medium_component_MediumComponent },
                    { path: 'categories/medium/:categoryID/entries', component: EntriesComponent },
                    { path: 'categories/category/:categoryID', component: category_component_CategoryComponent,
                        children: [
                            { path: '', component: category_overview_component_CategoryOverviewComponent }
                        ]
                    },
                    { path: 'calendar', component: calendar_tab_component_CalendarTabComponent, data: { animation: 'EventCalenarPage' } },
                    { path: 'entries', component: EntriesTabComponent, data: { animation: 'EventEntriesPage' }, canActivateChild: [user_network_guard["a" /* UserNetworkGuard */]], canActivate: [user_network_guard["a" /* UserNetworkGuard */]] },
                ]
            }
        ]
    }
];
class AwardsRoutingModule {
}
AwardsRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AwardsRoutingModule });
AwardsRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AwardsRoutingModule_Factory(t) { return new (t || AwardsRoutingModule)(); }, imports: [[router["g" /* RouterModule */].forChild(routes)], router["g" /* RouterModule */]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AwardsRoutingModule, { imports: [router["g" /* RouterModule */]], exports: [router["g" /* RouterModule */]] }); })();
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AwardsRoutingModule, [{
        type: core["NgModule"],
        args: [{
                imports: [router["g" /* RouterModule */].forChild(routes)],
                exports: [router["g" /* RouterModule */]]
            }]
    }], null, null); })();

// EXTERNAL MODULE: ./src/app/authentication/authentication.module.ts
var authentication_module = __webpack_require__("OpKh");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/event-date/event-date.module.ts
var event_date_module = __webpack_require__("JJVI");

// EXTERNAL MODULE: ./src/app/_helpers/guards/guards.module.ts + 3 modules
var guards_module = __webpack_require__("4ydG");

// EXTERNAL MODULE: ./src/app/shared/material/material.module.ts + 6 modules
var material_module = __webpack_require__("jAig");

// EXTERNAL MODULE: ./src/app/shared/news/news.module.ts
var news_module = __webpack_require__("W/F7");

// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 7 modules
var shared_module = __webpack_require__("PCNd");

// EXTERNAL MODULE: ./src/app/shared/utility/social-network/social-network.module.ts + 1 modules
var social_network_module = __webpack_require__("zOdz");

// EXTERNAL MODULE: ./src/app/shared/thework/thework.module.ts + 15 modules
var thework_module = __webpack_require__("Hm14");

// EXTERNAL MODULE: ./src/app/shared/utility/utility.module.ts + 10 modules
var utility_module = __webpack_require__("4TA+");

// EXTERNAL MODULE: ./src/app/shared/utility/pipes/pipes.module.ts
var pipes_module = __webpack_require__("RTH9");

// EXTERNAL MODULE: ./src/app/shared/event-parent/event-child/category/category.module.ts
var category_module = __webpack_require__("SL/g");

// EXTERNAL MODULE: ./src/app/shared/thework/entry/entry.module.ts + 8 modules
var entry_module = __webpack_require__("MhWf");

// EXTERNAL MODULE: ./src/app/shared/fullscreen-media-viewer/fullscreen-media-viewer.module.ts
var fullscreen_media_viewer_module = __webpack_require__("FaBH");

// EXTERNAL MODULE: ./src/app/shared/judging/judge-card/judge-card.module.ts + 1 modules
var judge_card_module = __webpack_require__("oSzE");

// EXTERNAL MODULE: ./src/app/shared/jw-video-player/jw-video-player.module.ts
var jw_video_player_module = __webpack_require__("MARa");

// EXTERNAL MODULE: ./src/app/shared/jw-audio-player/jw-audio-player.module.ts
var jw_audio_player_module = __webpack_require__("b36o");

// EXTERNAL MODULE: ./src/app/shared/news/news-card/news-card.component.ts
var news_card_component = __webpack_require__("tTcv");

// CONCATENATED MODULE: ./src/app/awards/profile/event/news-tab/news-tab.component.ts








const news_tab_component_c0 = function () { return { "padding": "0 0 24px" }; };
const news_tab_component_c1 = function () { return { "padding": "0 16px 24px" }; };
const news_tab_component_c2 = function () { return { "margin-bottom": "16px" }; };
class NewsTabComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
}
NewsTabComponent.ɵfac = function NewsTabComponent_Factory(t) { return new (t || NewsTabComponent)(core["ɵɵdirectiveInject"](router["a" /* ActivatedRoute */])); };
NewsTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: NewsTabComponent, selectors: [["app-news-tab"]], decls: 13, vars: 24, consts: [[1, "g-grid-gap-correction", 3, "ngStyle", "ngStyle.gt-xs", "ngStyle.gt-md"], ["fxLayoutAlign", "start stretch", "fxLayout", "column", "fxLayoutGap.xs", "16px", "fxLayout.gt-xs", "row wrap", "fxLayoutGap.gt-xs", "16px grid", "fxLayoutGap.gt-md", "24px grid"], ["fxFlex", "100", "fxFlex.sm", "50", "fxFlex.gt-sm", "33.33", 3, "ngStyle.lt-sm"]], template: function NewsTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵtext"](0, "\nFILTERS ");
        core["ɵɵelementStart"](1, "div", 0);
        core["ɵɵelementStart"](2, "div", 1);
        core["ɵɵelement"](3, "app-news-card", 2);
        core["ɵɵelement"](4, "app-news-card", 2);
        core["ɵɵelement"](5, "app-news-card", 2);
        core["ɵɵelement"](6, "app-news-card", 2);
        core["ɵɵelement"](7, "app-news-card", 2);
        core["ɵɵelement"](8, "app-news-card", 2);
        core["ɵɵelement"](9, "app-news-card", 2);
        core["ɵɵelement"](10, "app-news-card", 2);
        core["ɵɵelement"](11, "app-news-card", 2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵtext"](12, " MAT-PAGINATION\n");
    } if (rf & 2) {
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle", core["ɵɵpureFunction0"](12, news_tab_component_c0))("ngStyle.gt-xs", core["ɵɵpureFunction0"](13, news_tab_component_c1))("ngStyle.gt-md", core["ɵɵpureFunction0"](14, news_tab_component_c0));
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](15, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](16, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](17, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](18, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](19, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](20, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](21, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](22, news_tab_component_c2));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngStyle.lt-sm", core["ɵɵpureFunction0"](23, news_tab_component_c2));
    } }, directives: [common["NgStyle"], extended["c" /* DefaultStyleDirective */], flex["d" /* DefaultLayoutAlignDirective */], flex["e" /* DefaultLayoutDirective */], flex["f" /* DefaultLayoutGapDirective */], news_card_component["a" /* NewsCardComponent */], flex["b" /* DefaultFlexDirective */]], styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NewsTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-news-tab',
                templateUrl: './news-tab.component.html',
                styleUrls: ['./news-tab.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: router["a" /* ActivatedRoute */] }]; }, null); })();

// EXTERNAL MODULE: ./src/app/shared/news/news-article/news-article.component.ts
var news_article_component = __webpack_require__("KWuB");

// EXTERNAL MODULE: ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js
var divider = __webpack_require__("f0Cb");

// CONCATENATED MODULE: ./src/app/awards/profile/event/news-tab/news-item/news-item.component.ts










class NewsItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsItemComponent.ɵfac = function NewsItemComponent_Factory(t) { return new (t || NewsItemComponent)(); };
NewsItemComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: NewsItemComponent, selectors: [["app-news-item"]], decls: 40, vars: 0, consts: [["fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutGap.gt-sm", "24px"], ["fxFlex", "100%", "fxFlex.gt-sm", "67.7%"], ["fxFlex", "100%", "fxFlex.gt-sm", "32.2%"], [1, "mat-list--free-height"], ["fxHide.gt-sm", ""], ["mat-list-item", "", "routerLink", ""], ["matLine", ""], [1, "text-al-66"]], template: function NewsItemComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "mat-card");
        core["ɵɵelementStart"](1, "mat-card-content", 0);
        core["ɵɵelement"](2, "app-news-article", 1);
        core["ɵɵelementStart"](3, "aside", 2);
        core["ɵɵelementStart"](4, "mat-nav-list", 3);
        core["ɵɵelement"](5, "mat-divider", 4);
        core["ɵɵelementStart"](6, "a", 5);
        core["ɵɵelementStart"](7, "span", 6);
        core["ɵɵtext"](8, "Canada's CASSIES Join Global Effie Network to Become Effie Canada ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](9, "span", 6);
        core["ɵɵelementStart"](10, "small", 7);
        core["ɵɵtext"](11, "17th August");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](12, "mat-divider");
        core["ɵɵelementStart"](13, "a", 5);
        core["ɵɵelementStart"](14, "span", 6);
        core["ɵɵtext"](15, "Effie Worldwide Announces Officers and Newly Appointed Members of Board of Directors ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](16, "span", 6);
        core["ɵɵelementStart"](17, "small", 7);
        core["ɵɵtext"](18, "17th August");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](19, "mat-divider");
        core["ɵɵelementStart"](20, "a", 5);
        core["ɵɵelementStart"](21, "span", 6);
        core["ɵɵtext"](22, "Effie Peru Holds 2018 Awards Gala ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](23, "span", 6);
        core["ɵɵelementStart"](24, "small", 7);
        core["ɵɵtext"](25, "17th August");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](26, "mat-divider");
        core["ɵɵelementStart"](27, "a", 5);
        core["ɵɵelementStart"](28, "span", 6);
        core["ɵɵtext"](29, "The Most Effective Marketers In The World Announced: 2018 Global Effie Index Results ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](30, "span", 6);
        core["ɵɵelementStart"](31, "small", 7);
        core["ɵɵtext"](32, "17th August");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](33, "mat-divider");
        core["ɵɵelementStart"](34, "a", 5);
        core["ɵɵelementStart"](35, "span", 6);
        core["ɵɵtext"](36, "The Most Effective Marketers In The World Announced: 2018 Global Effie Index Results ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](37, "span", 6);
        core["ɵɵelementStart"](38, "small", 7);
        core["ɵɵtext"](39, "17th August");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } }, directives: [card["a" /* MatCard */], card["d" /* MatCardContent */], flex["e" /* DefaultLayoutDirective */], flex["f" /* DefaultLayoutGapDirective */], news_article_component["a" /* NewsArticleComponent */], flex["b" /* DefaultFlexDirective */], list["f" /* MatNavList */], divider["a" /* MatDivider */], extended["b" /* DefaultShowHideDirective */], list["c" /* MatListItem */], router["f" /* RouterLinkWithHref */], fesm2015_core["l" /* MatLine */]], styles: ["app-news-item .mat-nav-list .mat-line small{padding-top:6px;display:block;line-height:1.3}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NewsItemComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-news-item',
                templateUrl: './news-item.component.html',
                styleUrls: ['./news-item.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();

// CONCATENATED MODULE: ./src/app/awards/profile/event/reports-tab/reports-tab.component.ts





const reports_tab_component_c0 = function () { return { "padding": "0 16px" }; };
class ReportsTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportsTabComponent.ɵfac = function ReportsTabComponent_Factory(t) { return new (t || ReportsTabComponent)(); };
ReportsTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ReportsTabComponent, selectors: [["app-reports-tab"]], decls: 25, vars: 2, consts: [[1, "g-section"], [1, "g-section_title", "mat-title"], [1, "mat-body-2", "text-op-75"], [3, "ngStyle.lt-md"], [1, "mat-caption"], ["mat-flat-button", "", "color", "accent", "target", "_blank"]], template: function ReportsTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "section", 0);
        core["ɵɵelementStart"](1, "h3", 1);
        core["ɵɵtext"](2, "Reports");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](3, "p", 2);
        core["ɵɵtext"](4, "Please choose from the reports below to download the relevent excel document(s):");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](5, "div", 3);
        core["ɵɵelement"](6, "mat-divider");
        core["ɵɵelementStart"](7, "p", 4);
        core["ɵɵtext"](8, "Download the latest BBDO statistics report (grouped by medium)");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](9, "a", 5);
        core["ɵɵtext"](10, " Download ");
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](11, "br");
        core["ɵɵelement"](12, "br");
        core["ɵɵelement"](13, "mat-divider");
        core["ɵɵelementStart"](14, "p", 4);
        core["ɵɵtext"](15, "Download the latest BBDO statistics report (grouped by office)");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](16, "a", 5);
        core["ɵɵtext"](17, " Download ");
        core["ɵɵelementEnd"]();
        core["ɵɵelement"](18, "br");
        core["ɵɵelement"](19, "br");
        core["ɵɵelement"](20, "mat-divider");
        core["ɵɵelementStart"](21, "p", 4);
        core["ɵɵtext"](22, "View the latest BBDO Omnicom statistics report");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](23, "a", 5);
        core["ɵɵtext"](24, " View Omnicom Reports ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        core["ɵɵadvance"](5);
        core["ɵɵproperty"]("ngStyle.lt-md", core["ɵɵpureFunction0"](1, reports_tab_component_c0));
    } }, directives: [extended["c" /* DefaultStyleDirective */], divider["a" /* MatDivider */], fesm2015_button["a" /* MatAnchor */]], styles: ["app-reports-tab .g-section{margin-top:0}"], encapsulation: 2 });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReportsTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-reports-tab',
                templateUrl: './reports-tab.component.html',
                styleUrls: ['./reports-tab.component.scss'],
                encapsulation: core["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();

// CONCATENATED MODULE: ./src/app/awards/profile/event/winners-tab/winners-tab.component.ts


class WinnersTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
WinnersTabComponent.ɵfac = function WinnersTabComponent_Factory(t) { return new (t || WinnersTabComponent)(); };
WinnersTabComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: WinnersTabComponent, selectors: [["app-winners-tab"]], decls: 4, vars: 0, consts: [[1, "mat-display-1", "text-center"]], template: function WinnersTabComponent_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "h3", 0);
        core["ɵɵelement"](1, "br");
        core["ɵɵelement"](2, "br");
        core["ɵɵtext"](3, " Winners not yet announced\n");
        core["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](WinnersTabComponent, [{
        type: core["Component"],
        args: [{
                selector: 'app-winners-tab',
                templateUrl: './winners-tab.component.html',
                styleUrls: ['./winners-tab.component.scss']
            }]
    }], function () { return []; }, null); })();

// CONCATENATED MODULE: ./src/app/awards/awards.module.ts



// import { MaterialModule } from '../shared/material/material.module';

// import { SharedModule } from '../shared/shared.module';
































const aImport = [
    authentication_module["a" /* AuthenticationModule */],
    event_parent_module["a" /* EventParentModule */],
    LazyLoadImageModule,
    // MaterialModule,
    AwardsRoutingModule,
    // SharedModule
    event_date_module["a" /* EventDateModule */],
    guards_module["a" /* GuardsModule */],
    material_module["a" /* MaterialModule */],
    news_module["a" /* NewsModule */],
    shared_module["a" /* SharedModule */],
    social_network_module["a" /* SocialNetworkModule */],
    thework_module["a" /* TheworkModule */],
    utility_module["a" /* UtilityModule */],
    pipes_module["a" /* PipesModule */],
    category_module["a" /* CategoryModule */],
    entry_module["a" /* EntryModule */],
    fullscreen_media_viewer_module["a" /* FullscreenMediaViewerModule */],
    judge_card_module["a" /* JudgeCardModule */],
    jw_video_player_module["a" /* JwVideoPlayerModule */],
    jw_audio_player_module["a" /* JwAudioPlayerModule */]
];
class AwardsModule {
}
AwardsModule.ɵmod = core["ɵɵdefineNgModule"]({ type: AwardsModule });
AwardsModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function AwardsModule_Factory(t) { return new (t || AwardsModule)(); }, imports: [aImport] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](AwardsModule, { declarations: [IndexComponent, profile_component_ProfileComponent, calendar_tab_component_CalendarTabComponent, EntriesTabComponent, EventComponent, overview_tab_component_OverviewTabComponent, NewsTabComponent, NewsItemComponent, ReportsTabComponent, WinnersTabComponent, CategoriesComponent, medium_component_MediumComponent, category_component_CategoryComponent, category_overview_component_CategoryOverviewComponent, EntriesComponent], imports: [authentication_module["a" /* AuthenticationModule */],
        event_parent_module["a" /* EventParentModule */],
        LazyLoadImageModule,
        // MaterialModule,
        AwardsRoutingModule,
        // SharedModule
        event_date_module["a" /* EventDateModule */],
        guards_module["a" /* GuardsModule */],
        material_module["a" /* MaterialModule */],
        news_module["a" /* NewsModule */],
        shared_module["a" /* SharedModule */],
        social_network_module["a" /* SocialNetworkModule */],
        thework_module["a" /* TheworkModule */],
        utility_module["a" /* UtilityModule */],
        pipes_module["a" /* PipesModule */],
        category_module["a" /* CategoryModule */],
        entry_module["a" /* EntryModule */],
        fullscreen_media_viewer_module["a" /* FullscreenMediaViewerModule */],
        judge_card_module["a" /* JudgeCardModule */],
        jw_video_player_module["a" /* JwVideoPlayerModule */],
        jw_audio_player_module["a" /* JwAudioPlayerModule */]] }); })();
/*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AwardsModule, [{
        type: core["NgModule"],
        args: [{
                imports: aImport,
                declarations: [IndexComponent, profile_component_ProfileComponent, calendar_tab_component_CalendarTabComponent, EntriesTabComponent, EventComponent, overview_tab_component_OverviewTabComponent, NewsTabComponent, NewsItemComponent, ReportsTabComponent, WinnersTabComponent, CategoriesComponent, medium_component_MediumComponent, category_component_CategoryComponent, category_overview_component_CategoryOverviewComponent, EntriesComponent]
            }]
    }], null, null); })();


/***/ })

};;