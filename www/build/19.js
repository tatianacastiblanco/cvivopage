webpackJsonp([19],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsPageModule", function() { return ChannelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channels__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__ = __webpack_require__(401);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__channels__["a" /* ChannelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__channels__["a" /* ChannelsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["b" /* TooltipsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__channels__["a" /* ChannelsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_tooltips__["a" /* TooltipController */]
            ]
        })
    ], ChannelsPageModule);
    return ChannelsPageModule;
}());

//# sourceMappingURL=channels.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_VimeoService__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelsPage = /** @class */ (function () {
    function ChannelsPage(authService, navCtrl, loadingCtrl, Platform, vimeoService, navParams) {
        var _this = this;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.Platform = Platform;
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
        this.channels = [];
        this.showVideo = false;
        this.authService.afAuth.authState.subscribe(function (user) {
            if (user === null) {
                _this.navCtrl.setRoot('SignInPage');
            }
        }, function (error) {
            console.error(JSON.stringify(error));
        });
        Platform.ready().then(function () {
            var width = Platform.width();
            if (width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
    }
    ChannelsPage.prototype.ionViewDidLoad = function () {
        this.getChannels();
    };
    ;
    ChannelsPage.prototype.getChannels = function () {
        var _this = this;
        var subs = this.vimeoService.getChannelsFromFB().subscribe(function (_channels) {
            _this.channels = [];
            _channels.forEach(function (_channel) {
                var id = _channel.payload.doc.id;
                var img = 'assets/channels/2.jpg';
                var data = _channel.payload.doc.data();
                _this.channels.push(__assign({ id: id, img: img }, data));
            });
        });
    };
    ;
    ChannelsPage.prototype.goToChannel = function (channel) {
        var _this = this;
        this.vimeoService.getCategoriesFromFB(channel).subscribe(function (categoriesArray) {
            sessionStorage.setItem('categories', JSON.stringify(categoriesArray));
            sessionStorage.setItem('channelName', channel.name);
            _this.navCtrl.setRoot('HomePage', { channelName: channel.name });
        });
    };
    ChannelsPage.prototype.playVideo = function (channel) {
        this.showVideo = true;
        this.urlVideo = channel.urlVideo;
    };
    ChannelsPage.prototype.ngOnInit = function () {
    };
    ;
    ChannelsPage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.navCtrl.setRoot('SignInPage');
                _this.navCtrl.popAll();
                _this.navCtrl.popToRoot();
            });
        }, 500);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], ChannelsPage.prototype, "slides", void 0);
    ChannelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-channels',template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\channels\channels.html"*/'\n\n\n\n<ion-content >\n\n    <video *ngIf="showVideo && !menu" autoplay loop [muted]="true"  [src]="urlVideo"></video>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-left>\n\n          <img src="assets/netflix-icon.png" alt="" width="100px">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col text-center >\n\n        <h1 style="color:white;font-size: 30px">¿Qué quieres ver hoy?</h1>\n\n       \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row style="padding:0 10%;">\n\n      <ion-col col-6 col-md-2 *ngFor="let channel of channels">\n\n          <ion-card  (click)="channel.isDisabled ? $event.stopPropagation() : goToChannel(channel)"  (mouseover)="playVideo(channel)" (mouseout)="showVideo=false">\n\n              <img  [src]="channel.img"/> \n\n                   \n\n            </ion-card>\n\n            <button ion-button icon-only clear id="infoIcon" \n\n            tooltip="{{channel.description}}" \n\n            positionV="bottom" \n\n            desktopEvent="hover"\n\n            mobileEvent="click"\n\n            duration=1500\n\n            arrow> \n\n              <ion-icon name="information-circle"  ></ion-icon>\n\n            </button>\n\n            \n\n           <!-- (click)="goToChannel(channel)" -->\n\n            <!-- <div class="card-title" >{{channel.name}}</div> -->\n\n            <!-- <div class="card-subtitle">{{channel.description}}</div> -->\n\n      </ion-col>   \n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-fab center bottom  \n\n  tooltip="Salir"\n\n  positionH="right" \n\n  arrow desktopEvent="hover"\n\n  mobileEvent="press"\n\n  duration=1500 \n\n  (click)="signOut()">\n\n      <button  ion-fab color="netflixRed" mini><ion-icon name="log-out"  ></ion-icon></button>\n\n    \n\n    </ion-fab>\n\n        \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\channels\channels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__services_VimeoService__["a" /* VimeoService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ChannelsPage);
    return ChannelsPage;
}());

//# sourceMappingURL=channels.js.map

/***/ })

});
//# sourceMappingURL=19.js.map