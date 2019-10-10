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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_VimeoService__ = __webpack_require__(331);
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
    function ChannelsPage(navCtrl, vimeoService, navParams) {
        this.navCtrl = navCtrl;
        this.vimeoService = vimeoService;
        this.navParams = navParams;
        this.slidePages = [
            { text: 'Slide 1', color: 'red' },
            { text: 'Slide 2', color: 'blue' },
            { text: 'Slide 3', color: 'green' },
            { text: 'Slide 4', color: 'orange' },
            { text: 'Slide 5', color: 'magenta' },
            { text: 'Slide 6', color: 'brown' },
            { text: 'Slide 7', color: 'gray' },
            { text: 'Slide 8', color: 'yellow' },
            { text: 'Slide 9', color: 'orange' },
            { text: 'Slide 10', color: 'magenta' },
        ];
        this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
        var subs = this.vimeoService.getChannelsFromFB().subscribe(function (res) {
            console.log(res);
        });
    }
    ChannelsPage.prototype.ionViewDidLoad = function () {
    };
    ChannelsPage.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]) === "function" && _a || Object)
    ], ChannelsPage.prototype, "slides", void 0);
    ChannelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-channels',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\channels\channels.html"*/'\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n          <img src="assets/netflix-icon.png" alt="" width="100px">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col >\n\n          <ion-card *ngFor="let item of images" >\n\n              <img src="assets/channels/{{item}}"/>\n\n              <div class="card-title">Madison</div>\n\n              <div class="card-subtitle">28 Listings</div>\n\n            </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n \n\n        \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\channels\channels.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_VimeoService__["a" /* VimeoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_VimeoService__["a" /* VimeoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object])
    ], ChannelsPage);
    return ChannelsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=channels.js.map

/***/ })

});
//# sourceMappingURL=17.js.map