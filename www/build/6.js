webpackJsonp([6],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListPageModule", function() { return GridListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_list__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GridListPageModule = /** @class */ (function () {
    function GridListPageModule() {
    }
    GridListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__grid_list__["a" /* GridListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__grid_list__["a" /* GridListPage */]),
            ],
        })
    ], GridListPageModule);
    return GridListPageModule;
}());

//# sourceMappingURL=grid-list.module.js.map

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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_CategoryItem__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Helper__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GridListPage = /** @class */ (function () {
    function GridListPage(navCtrl, navParams, categoriesService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categoriesService = categoriesService;
        this.loaded = false;
        this.categoryItems = [];
        this.category = this.navParams.get("category");
        if (this.category) {
            this.title = this.category.name;
        }
    }
    GridListPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GridListPage");
        this.getCategoryMoviesAndShows();
    };
    GridListPage.prototype.getCategoryMoviesAndShows = function () {
        var _this = this;
        // Get movies first
        this.categoriesService
            .getCategoryMovies(this.category)
            .then(function (result) {
            result.categoryMovies.forEach(function (movie) {
                var categoryItem = new __WEBPACK_IMPORTED_MODULE_3__data_CategoryItem__["a" /* CategoryItem */]();
                categoryItem.itemId = movie.movieId;
                categoryItem.name = movie.name;
                categoryItem.picture = movie.picture;
                categoryItem.isMovie = true;
                _this.categoryItems.push(categoryItem);
            });
            // Then get tv shows
            _this.categoriesService
                .getCategoryTvShows(_this.category)
                .then(function (result) {
                result.categoryTvShows.forEach(function (tvShow) {
                    var categoryItem = new __WEBPACK_IMPORTED_MODULE_3__data_CategoryItem__["a" /* CategoryItem */]();
                    categoryItem.itemId = tvShow.tvShowId;
                    categoryItem.name = tvShow.name;
                    categoryItem.picture = tvShow.picture;
                    categoryItem.isMovie = false;
                    _this.categoryItems.push(categoryItem);
                });
                // Finally, shuffle them
                _this.categoryItems = __WEBPACK_IMPORTED_MODULE_4__data_Helper__["a" /* Helper */].shuffle(_this.categoryItems);
                _this.loaded = true;
            });
        });
    };
    GridListPage.prototype.goToCategoryItem = function (categoryItem) {
        if (categoryItem.isMovie) {
            this.navCtrl.push("MovieDetailsPage", { movieId: categoryItem.itemId });
        }
        else {
            this.navCtrl.push("ShowDetailsPage", { tvShowId: categoryItem.itemId });
        }
    };
    GridListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-grid-list",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\grid-list\grid-list.html"*/'<ion-header no-border>\n\n  <ion-navbar align-title="center">\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row *ngIf="loaded && categoryItems.length <= 0">\n\n    <ion-col text-center>\n\n      <img class="demo-image" src="assets/netflix-icon.png">\n\n      <p class="demo-message">There are no movies or shows in this category yet.</p>\n\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own here!</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!loaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="loaded && categoryItems.length > 0" style="padding-left: 0px;">\n\n    <ion-col col-4 *ngFor="let categoryItem of categoryItems">\n\n      <img src="{{categoryItem.picture}}" (click)="goToCategoryItem(categoryItem)" style="width:100%">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\grid-list\grid-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__["a" /* CategoriesService */]])
    ], GridListPage);
    return GridListPage;
}());

//# sourceMappingURL=grid-list.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryItem; });
var CategoryItem = /** @class */ (function () {
    function CategoryItem() {
    }
    return CategoryItem;
}());

//# sourceMappingURL=CategoryItem.js.map

/***/ })

});
//# sourceMappingURL=6.js.map