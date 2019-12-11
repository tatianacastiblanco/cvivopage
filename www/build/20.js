webpackJsonp([20],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageModule", function() { return ComingSoonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_us__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_locales_es__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






Object(__WEBPACK_IMPORTED_MODULE_4__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_5__angular_common_locales_es__["a" /* default */]);
var ComingSoonPageModule = /** @class */ (function () {
    function ComingSoonPageModule() {
    }
    ComingSoonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__about_us__["a" /* AboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__about_us__["a" /* AboutUsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__about_us__["a" /* AboutUsPage */]],
        })
    ], ComingSoonPageModule);
    return ComingSoonPageModule;
}());

//# sourceMappingURL=about-us.module.js.map

/***/ }),

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\about-us\about-us.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar transparent color="primary" >\n\n    <ion-title>Acerca de nosotros</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<video width="100%"  autoplay  controlsList="nodownload" controls src="https://player.vimeo.com/external/378532583.sd.mp4?s=9640fd7828bb2f8cd7c4fb41e4eba340fa7668ba&profile_id=164&oauth2_token_id=1180246399"></video>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ })

});
//# sourceMappingURL=20.js.map