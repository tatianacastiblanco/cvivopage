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
    function RedeemPage(navCtrl, navParams, Platform, authServie, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Platform = Platform;
        this.authServie = authServie;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.coupon = { text: '', error: '' };
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
            this.navCtrl.setRoot('SignInPage');
        }
    };
    ;
    RedeemPage.prototype.checkRegex = function (input) {
        var regex = new RegExp('CP[0-9]+[A-Za-z0-9]+20+[0-9]');
        regex.test(input) == true ? this.validRegex = true : this.validRegex = false;
    };
    RedeemPage.prototype.checkCoupon = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.navCtrl.push('SignUpPage', { coupon: this.coupon.text });
        // this.authServie.checkCoupon(this.coupon.text).subscribe((res:any)=>{
        //   let couponRes:Coupon = res;
        //   if(res.length == 0){
        //     this.coupon.error = 'Este código no existe.'
        //   }else{
        //     if(couponRes[0].used || couponRes[0].finished){
        //       this.coupon.error = 'Este código ya se usó.'
        //     }else{
        //       this.navCtrl.pop().then(()=>{
        //         this.navCtrl.push('SignUpPage',{isCoupon:true,coupon:this.coupon.text});
        //       });
        //     }; 
        //   }
        // })
    };
    RedeemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-redeem',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\redeem\redeem.html"*/'<ion-header  >\n  <ion-navbar  class="test">\n    <ion-title >\n      <img src="assets/imgs/netflix-logo.png">     \n      </ion-title>   \n      <ion-buttons end>\n        <button color="netflixWhite" ion-button round  (click)="signIn()" >Iniciar sesión</button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <video *ngIf="!menu" autoplay loop [muted]="true"  [src]="urlVideo"></video>\n  \n  <ion-row > \n    <ion-col col-md-3>\n      \n    </ion-col>\n  <ion-col col-12  col-md-6>\n      <form (ngSubmit)="checkCoupon()" >\n    <br>\n    <br>\n    <br>\n      <div text-center>\n          <h2 class="principalText" text-center>Canjea tu código</h2>\n          <p class="principalText" text-center>Ingresa el código para empezar.</p>\n          \n        </div>\n       \n      <ion-item>\n          <ion-label floating>Código o PIN</ion-label>\n          <ion-input type="text" [(ngModel)]="coupon.text" name="id" (input)="checkRegex(coupon.text)" ></ion-input>\n        </ion-item>  \n        <button color="netflixRed" ion-button round full [disabled]=" validRegex == false "  (click)="checkCoupon($event)" >CANJEAR</button>\n        <div style="color: #CA5F45" class="alert alert-danger">\n            <div *ngIf="coupon.text == \'\'"  >\n              *Ingresa un código.\n            </div>    \n            <div  >\n                {{coupon.error}}\n              </div>       \n          </div>\n        </form>\n  </ion-col>\n  <ion-col col-md-3>\n      \n    </ion-col>\n</ion-row>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\redeem\redeem.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], RedeemPage);
    return RedeemPage;
}());

//# sourceMappingURL=redeem.js.map

/***/ })

});
//# sourceMappingURL=16.js.map