webpackJsonp([12],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingPageModule", function() { return TestingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__testing__ = __webpack_require__(914);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TestingPageModule = /** @class */ (function () {
    function TestingPageModule() {
    }
    TestingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__testing__["a" /* TestingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__testing__["a" /* TestingPage */]),
            ],
        })
    ], TestingPageModule);
    return TestingPageModule;
}());

//# sourceMappingURL=testing.module.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestingPage = /** @class */ (function () {
    function TestingPage(navCtrl, navParams, http, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.db = db;
        this.db.collection('coupons', function (ref) { return ref.where('Id', '==', '1250'); }).valueChanges().subscribe(function (res) {
            console.log(res);
        });
        this.http.get('assets/cupones_tabla.json').subscribe(function (res) {
            var list = res['codes'];
            // list.forEach(el => {        
            //  this.db.collection('coupons').doc(el.cupon).set(el).then(resDb=>{
            //   console.log('saved')
            //  }).catch(err=>{
            //    console.log(err)
            //  })
            // });
        });
    }
    TestingPage.prototype.ionViewDidLoad = function () {
        // var offsetRef = firebase.database().ref(".info/serverTimeOffset");
        // offsetRef.on("value", function(snap) {
        //   var offset = snap.val();
        //   var estimatedServerTimeMs = new Date().getTime() + offset;
        //   console.log(estimatedServerTimeMs);
        // });
    };
    TestingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-testing',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\testing\testing.html"*/'<!--\n  Generated template for the TestingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>testing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\testing\testing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], TestingPage);
    return TestingPage;
}());

//# sourceMappingURL=testing.js.map

/***/ })

});
//# sourceMappingURL=12.js.map