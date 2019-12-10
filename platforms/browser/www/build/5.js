webpackJsonp([5],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MovieDetailsPageModule = /** @class */ (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skeleton_item_skeleton_item__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_0__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuComponent */], __WEBPACK_IMPORTED_MODULE_0__skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroupItem; });
var HomeScreenGroupItem = /** @class */ (function () {
    function HomeScreenGroupItem() {
    }
    return HomeScreenGroupItem;
}());

//# sourceMappingURL=HomeScreenGroupItem.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/**

  # Ionic 3 Skeleton Loader component

  ## Setup

  After clone or download this project.

  Install Ionic CLI

  ```
  $ npm install -g ionic
  ```

  Install dependencies

  ```
  $ cd <project>
  $ npm install
  ```

  Run the app on Localhost

  ```
  $ ionic serve
  ```

  See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

  ## skeleton-item
  `<skeleton-item>` is the main block to build more complex skeleton-style loading screen

  ### Usage

  ```
  <skeleton-item height="50px" width="50px" rounded></skeleton-item>
  ```

  You can add CSS classes or inline CSS as normal HTML element

  ```
  <skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
  ```

  ### Available attributes

  - {height: string} can be px or %, default value is '16px'
  - {width: string} can be px or %, default value is '100%'
  - {radius: string} set border-radius, default value is '4px'
  - {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
  - {no-animated} disable animation effect

 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkeletonItemComponent = /** @class */ (function () {
    function SkeletonItemComponent() {
        this.styles = {};
    }
    SkeletonItemComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "radius", void 0);
    SkeletonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'skeleton-item',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\components\skeleton-item\skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\components\skeleton-item\skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(navCtrl, loadingCtrl, app, zone) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.zone = zone;
        this.menuhead = 'home';
    }
    ;
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------||||||||||||||||||||||||||||||||||||||||||                 
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||        Funciones Nav bar DESKTOP       ||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||----------------------------------------||||||||||||||||||||||||||||||||||||||||||
    MenuComponent.prototype.home = function () {
        this.navCtrl.setRoot('HomePage');
    };
    MenuComponent.prototype.parrilla = function () {
        this.navCtrl.setRoot('ComingSoonPage');
    };
    MenuComponent.prototype.buscar = function () {
        this.navCtrl.setRoot('SearchPage');
    };
    MenuComponent.prototype.perfil = function () {
        this.navCtrl.setRoot('ProfilePage');
    };
    ;
    MenuComponent.prototype.canales = function () {
        this.navCtrl.setRoot('ChannelsPage');
    };
    ;
    MenuComponent.prototype.terminos = function () {
        this.navCtrl.push('TermsPage');
    };
    MenuComponent.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot('SignInPage');
                });
            });
        }, 500);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MenuComponent.prototype, "currentPage", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\components\menu\menu.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12 col-lg-2 >\n\n      <ion-navbar align-title="center" transparent >\n\n        <ion-title>\n\n          <img src="assets/imgs/netflix-logo.png">\n\n        </ion-title>   \n\n      </ion-navbar>\n\n    </ion-col>\n\n    <ion-col col-lg-10 >\n\n      <div >\n\n        <ion-segment [(ngModel)]="menuhead">\n\n          <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n          <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n          <ion-segment-button value="canales" class="segmenthead" (click)="canales()"> <ion-icon class="iconhead" name="albums"></ion-icon>   Canales  </ion-segment-button>         \n\n          <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid> \n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\components\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    return Helper;
}());

//# sourceMappingURL=Helper.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UserService__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AuthService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_Helper__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_DownloadService__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_image_loader__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MovieDetailsPage = /** @class */ (function () {
    function MovieDetailsPage(navCtrl, navParams, streamingMedia, moviesService, userService, downloadService, toastController, alertController, platform, vimeoService, authService, imageLoaderConfig) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.moviesService = moviesService;
        this.userService = userService;
        this.downloadService = downloadService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
        this.vimeoService = vimeoService;
        this.authService = authService;
        this.imageLoaderConfig = imageLoaderConfig;
        this.userId = "";
        this.movieId = "";
        this.urlPathVideo = "";
        this.homeScreenGroups = [];
        this.recentlyAddedMovies = [];
        this.loaded = false;
        this.isPartOfMyList = false;
        this.isDownloading = false;
        this.isDownloaded = false;
        platform.ready().then(function () {
            _this.width = platform.width();
            _this.heigth = platform.height();
            if (_this.width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
        this.imageLoaderConfig.enableDebugMode();
        this.imageLoaderConfig.setCacheDirectoryName('my-custom-cache-directory-name');
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.movie = this.navParams.get("movieId");
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        this.getMovie();
        this.getRecentlyAddedMovies();
    };
    MovieDetailsPage.prototype.getMovie = function () {
        this.title = this.movie.name;
        this.detailsPicture = this.movie.detailsPicture;
        this.description = this.movie.description;
        this.urlPathVideo = this.movie.picture;
        this.movieId = this.movie.movieId;
        this.getIsPartOfMyList();
    };
    // getCategoryMovies(){
    //   this.vimeoService.getHomeScreenGroups().subscribe(result => {
    //     this.homeScreenGroups = []
    //     let category:any = result;      
    //   })
    // }
    MovieDetailsPage.prototype.getRecentlyAddedMovies = function () {
        var _this = this;
        this.vimeoService.getAllVideos().subscribe(function (result) {
            var videos = result;
            videos.forEach(function (item) {
                if (item.files[2] && item.pictures.sizes[3]) {
                    var video = new __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                    video.name = item.name;
                    video.picture = item.files[2].link;
                    video.description = item.description;
                    video.detailsPicture = item.pictures.sizes[6].link;
                    video.movieId = item.uri.split('/')[2];
                    _this.recentlyAddedMovies.push(video);
                    _this.recentlyAddedMovies = __WEBPACK_IMPORTED_MODULE_8__data_Helper__["a" /* Helper */].shuffle(_this.recentlyAddedMovies);
                }
            });
            _this.loaded = true;
        }, function (err) { return console.log(err); });
    };
    MovieDetailsPage.prototype.getIsPartOfMyList = function () {
        var _this = this;
        this.userService
            .getIsMoviePartOfMyList(this.userId, this.movieId)
            .then(function (result) {
            _this.isPartOfMyList = result.isPartOfMyList;
        });
    };
    MovieDetailsPage.prototype.addToMyList = function () {
        var _this = this;
        this.userService
            .addMovieToMyList(this.userId, this.movie)
            .then(function (result) {
            _this.isPartOfMyList = true;
            _this.showPartOfMyListToast(true);
        });
    };
    MovieDetailsPage.prototype.removeFromMyList = function () {
        var _this = this;
        this.userService
            .removeMovieFromMyList(this.userId, this.movieId)
            .then(function (result) {
            _this.isPartOfMyList = false;
            _this.showPartOfMyListToast(false);
        });
    };
    MovieDetailsPage.prototype.showPartOfMyListToast = function (added) {
        var toast = this.toastController.create({
            message: added ? "Agregado a mi lista" : "Removido de mi lista",
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    MovieDetailsPage.prototype.goToMovie = function (movie) {
        var _this = this;
        //this.navCtrl.push("MovieDetailsPage", { movieId: movie });
        this.navCtrl.pop().then(function () {
            _this.navCtrl.push("MovieDetailsPage", { movieId: movie });
        });
    };
    MovieDetailsPage.prototype.newMethod = function () {
        return "MovieDetailsPage";
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-movie-details",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\pages\movie-details\movie-details.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen padding>\n\n  <video [src]=urlPathVideo [autoplay]=false class="video" controls controlsList="nodownload" poster="https://i.vimeocdn.com/portrait/30313759_300x300"></video> \n\n  <p class="title">{{title}}</p>\n\n  <ion-row class="movie-details-row">\n\n    <!-- <p class="match-percentage">99% Match</p> -->\n\n    <p style="color: #00aced">2019</p>\n\n    <!-- <p>25</p> -->\n\n    <!-- <p>2h 2m</p> -->\n\n  </ion-row>\n\n  <ion-row class="movie-summary-row">\n\n    <p>{{description}}</p>\n\n  </ion-row>\n\n  <ion-row class="list-like-download-row">\n\n    <ion-col text-center col-3>\n\n      <button *ngIf="!isPartOfMyList" (click)="addToMyList()" ion-button icon-only clear color="netflixBlue">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n      <button class="isPartOfMyList" *ngIf="isPartOfMyList" (click)="removeFromMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-checkmark"></ion-icon>\n\n      </button>\n\n      <p>Mi lista</p>\n\n    </ion-col>\n\n    <ion-col col-25></ion-col>\n\n  </ion-row>\n\n  <p class="more-like-this-title">Mas como este</p>\n\n  <!-- <ion-row *ngIf="!loaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row> -->\n\n  <ion-row [hidden]="!loaded" class="movieLg"> \n\n    <ion-col col-4 col-lg-2 *ngFor="let movie of recentlyAddedMovies">       \n\n        <img  class="imgCara" (click)="goToMovie(movie)" src="{{movie.detailsPicture}}" style="width:100%">\n\n    </ion-col>    \n\n  </ion-row>\n\n\n\n  <ion-grid *ngIf="!loaded">    \n\n      <ion-row>\n\n        <ion-col col-4 col-lg-2 *ngFor="let item of [1,2,3,4,5,6,7,8,9,10,11,12]">\n\n            <skeleton-item  *ngIf="!menu"  height="295px" style="border-radius: 00px"></skeleton-item>\n\n            <skeleton-item  *ngIf="menu"  height="120px" ></skeleton-item>\n\n        </ion-col>     \n\n      </ion-row>  \n\n    </ion-grid>      \n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage(IONIC)\src\pages\movie-details\movie-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_7__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_image_loader__["a" /* ImageLoaderConfig */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

// showDownloadOnDeviceOnlyToast() {
//   let toast = this.toastController.create({
//     message: 'You can only download on a device!',
//     duration: 2000,
//     position: "bottom"
//   });
//   toast.present();
// }
// showDownloadToast(movieName: string) {
//   let toast = this.toastController.create({
//     message: 'Movie "' + movieName + '" successfully downloaded!',
//     duration: 2000,
//     position: "bottom"
//   });
//   toast.present();
// }
//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map