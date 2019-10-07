webpackJsonp([17],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function() { return ChannelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channels__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChannelsPageModule = /** @class */ (function () {
    function ChannelsPageModule() {
    }
    ChannelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__channels__["a" /* ChannelsPage */]
            ]
        })
    ], ChannelsPageModule);
    return ChannelsPageModule;
}());

//# sourceMappingURL=channels.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChannelsPage = /** @class */ (function () {
    function ChannelsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slidePages = [
            { text: 'Slide 1', color: 'red' },
            { text: 'Slide 2', color: 'blue' },
            { text: 'Slide 3', color: 'green' },
            { text: 'Slide 4', color: 'orange' },
            { text: 'Slide 5', color: 'magenta' },
        ];
    }
    ChannelsPage.prototype.ionViewDidLoad = function () {
        this.slides.effect = 'coverflow';
        this.slides.centeredSlides = true;
        this.slides.slidesPerView = 1.5;
        this.slides.slidesOffsetBefore = 10;
        this.slides.slidesOffsetAfter = 45;
        this.slides.spaceBetween = 25;
        this.slides.initialSlide = 1;
        this.slides.coverflow = {
            rotate: 20,
            stretch: 50,
            depth: 10,
            modifier: 1,
            slideShadows: true,
        };
    };
    ChannelsPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]) === "function" && _a || Object)
    ], ChannelsPage.prototype, "slides", void 0);
    ChannelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-channels',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\channels\channels.html"*/'\n\n\n\n<ion-content padding>\n\n    <ion-slides \n\n    >\n\n        <ion-slide>\n\n          <img src="assets/channels/1.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/2.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/3.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/4.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/2.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/3.jpg" alt="">\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <img src="assets/channels/4.jpg" alt="">\n\n        </ion-slide>\n\n      </ion-slides>\n\n</ion-content>\n\n\n\n  <!-- <ion-content>\n\n    <ion-slides >\n\n      <ion-slide *ngFor="let slide of slidePages" [style.background-color]="slide.color">\n\n        {{slide.text}}\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-content> -->\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\channels\channels.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _c || Object])
    ], ChannelsPage);
    return ChannelsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=channels.js.map

/***/ })

});
//# sourceMappingURL=17.js.map