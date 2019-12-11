webpackJsonp([16],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemPageModule", function() { return RedeemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redeem__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedeemPageModule = /** @class */ (function () {
    function RedeemPageModule() {
    }
    RedeemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redeem__["a" /* RedeemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redeem__["a" /* RedeemPage */]),
            ],
        })
    ], RedeemPageModule);
    return RedeemPageModule;
}());

//# sourceMappingURL=redeem.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
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
 * Generated class for the RedeemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RedeemPage = /** @class */ (function () {
    function RedeemPage(navCtrl, navParams, Platform, authServie, viewCtrl, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Platform = Platform;
        this.authServie = authServie;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.coupon = { text: "", error: "" };
        this.validRegex = false;
        Platform.ready().then(function () {
            var width = Platform.width();
            if (width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
        this.urlVideo = "https://player.vimeo.com/external/367123294.sd.mp4?s=d5ea4eb860dbb8086b75221f541433a694ad31c3&profile_id=165&oauth2_token_id=1180246399";
    }
    RedeemPage.prototype.signIn = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.setRoot("SignInPage");
        }
    };
    RedeemPage.prototype.checkRegex = function (input) {
        var regex = new RegExp("CP[0-9]+[A-Za-z0-9]+20+[0-9]");
        regex.test(input) === true ? this.validRegex = true : this.validRegex = false;
    };
    RedeemPage.prototype.checkData = function (data) {
        var pass = data.password;
        var confirmPass = data.password2;
        var regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!regex.test(data.email)) {
            this.createToast(" Tu correo tiene que tener el siguiente formato ejemplo@dominio.com");
            return false;
        }
        if (!data.email || !data.name || !data.password || !data.password2) {
            this.createToast("Llena todos los campos");
            return false;
        }
        if (pass.length < 6) {
            this.createToast("la contraseña debe tener minimo 6 caracteres");
            return false;
        }
        if (pass !== confirmPass) {
            this.createToast("Las contraseñas no coinciden");
            return false;
        }
        // return pass === confirmPass ? true : false;
        return true;
    };
    RedeemPage.prototype.checkCoupon = function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // this.navCtrl.push('SignUpPage',{coupon:this.coupon.text});
        this.authServie.checkCoupon(this.coupon.text).subscribe(function (res) {
            var couponRes = res;
            if (res.length === 0) {
                _this.coupon.error = "Este código no existe.";
            }
            else {
                if (couponRes[0].used || couponRes[0].finished) {
                    _this.coupon.error = "Este código ya se usó.";
                }
                else {
                    var alert = _this.alertCtrl.create({
                        title: "Registro",
                        inputs: [
                            {
                                name: "email",
                                placeholder: "Correo",
                                type: "email"
                            },
                            {
                                name: "name",
                                placeholder: "Nombre completo",
                                type: "text"
                            },
                            {
                                name: "password",
                                placeholder: "Contraseña"
                            },
                            {
                                name: "password2",
                                placeholder: "Confirmar contraseña"
                            }
                        ],
                        buttons: [
                            {
                                text: "Cancelar",
                                role: "cancel",
                                cssClass: "btnalert-cancel"
                            },
                            {
                                text: "Registrar",
                                cssClass: "btnalert-ok",
                                handler: function (data) {
                                    if (_this.checkData(data)) {
                                        console.log('bien');
                                    }
                                    else {
                                        console.log('mal');
                                    }
                                }
                            }
                        ]
                    }).present();
                }
            }
        });
    };
    RedeemPage.prototype.createToast = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: "bottom"
        }).present();
    };
    RedeemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-redeem",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\redeem\redeem.html"*/'<ion-header  >\n\n  <ion-navbar  class="test">\n\n    <ion-title >\n\n      <img src="assets/imgs/netflix-logo.png">     \n\n      </ion-title>   \n\n      <ion-buttons end>\n\n        <button color="netflixWhite" ion-button round  (click)="signIn()" >Iniciar sesión</button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <video *ngIf="!menu" autoplay loop [muted]="true"  [src]="urlVideo"></video>\n\n  \n\n  <ion-row > \n\n    <ion-col col-md-3>\n\n      \n\n    </ion-col>\n\n  <ion-col col-12  col-md-6>\n\n      <form (ngSubmit)="checkCoupon()" >\n\n    <br>\n\n    <br>\n\n    <br>\n\n      <div text-center>\n\n          <h2 class="principalText" text-center>Canjea tu código</h2>\n\n          <p class="principalText" text-center>Ingresa el código para empezar.</p>\n\n          \n\n        </div>\n\n       \n\n      <ion-item>\n\n          <ion-label floating>Código o PIN</ion-label>\n\n          <ion-input type="text" clearInput=true [(ngModel)]="coupon.text" name="id" (input)="checkRegex(coupon.text)" ></ion-input>\n\n        </ion-item>  \n\n        <button color="netflixRed" ion-button round full [disabled]=" validRegex == false "  (click)="checkCoupon($event)" >CANJEAR</button>\n\n        <div style="color: #CA5F45" class="alert alert-danger">\n\n            <div *ngIf="coupon.text == \'\'"  >\n\n              *Ingresa un código.\n\n            </div>    \n\n            <div  >\n\n                {{coupon.error}}\n\n              </div>       \n\n          </div>\n\n        </form>\n\n  </ion-col>\n\n  <ion-col col-md-3>\n\n      \n\n    </ion-col>\n\n</ion-row>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\redeem\redeem.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* ToastController */]) === "function" && _g || Object])
    ], RedeemPage);
    return RedeemPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=redeem.js.map

/***/ })

});
//# sourceMappingURL=16.js.map