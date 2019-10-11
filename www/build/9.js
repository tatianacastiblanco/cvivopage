webpackJsonp([9],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downloads__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownloadsPageModule = /** @class */ (function () {
    function DownloadsPageModule() {
    }
    DownloadsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__downloads__["a" /* DownloadsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__downloads__["a" /* DownloadsPage */]),
            ],
        })
    ], DownloadsPageModule);
    return DownloadsPageModule;
}());

//# sourceMappingURL=downloads.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DownloadService__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadsPage = /** @class */ (function () {
    function DownloadsPage(downloadService, alertCtrl, streamingMedia) {
        this.downloadService = downloadService;
        this.alertCtrl = alertCtrl;
        this.streamingMedia = streamingMedia;
        this.downloadType = "movies";
        this.hasAnyDownloads = false;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DownloadsPage");
    };
    DownloadsPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter DownloadsPage");
        this.loadDownloads();
    };
    DownloadsPage.prototype.loadDownloads = function () {
        var _this = this;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
        this.hasAnyDownloads =
            this.downloadService.moviesDownloaded.length > 0 ||
                this.downloadService.episodesDownloaded.length > 0;
        this.downloadService.moviesDownloaded.forEach(function (movie) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = movie.movieId;
            downloadItem.name = movie.name;
            downloadItem.picture = movie.picture;
            downloadItem.isMovie = true;
            downloadItem.downloadUrl = movie.downloadUrl;
            _this.movieDownloadItems.push(downloadItem);
        });
        this.downloadService.episodesDownloaded.forEach(function (episode) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = episode.episodeId;
            downloadItem.name = episode.name;
            downloadItem.picture = episode.picture;
            downloadItem.isMovie = false;
            downloadItem.downloadUrl = episode.downloadUrl;
            _this.episodesDownloadItems.push(downloadItem);
        });
    };
    DownloadsPage.prototype.goToAvailableDownloads = function () {
        // this.navCtrl.push("HorizontalListPage", { title: "Available Downloads" });
    };
    DownloadsPage.prototype.playMovie = function (movieDownloadItem) {
        if (movieDownloadItem.downloadUrl === "") {
            var alert_1 = this.alertCtrl.create({
                title: "This movie has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the movie and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(movieDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.playEpisode = function (episodeDownloadItem) {
        if (episodeDownloadItem.downloadUrl === "") {
            var alert_2 = this.alertCtrl.create({
                title: "This episode has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the episode and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_2.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(episodeDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.deleteMovie = function (movieDownloadItem) {
        this.presentMovieDeleteConfirm(movieDownloadItem);
    };
    DownloadsPage.prototype.presentMovieDeleteConfirm = function (movieDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded movie.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteMovie(movieDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.movieDownloadItems.indexOf(movieDownloadItem);
                            if (index > -1) {
                                _this.movieDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage.prototype.deleteEpisode = function (episodesDownloadItems) {
        this.presentEpisodeDeleteConfirm(episodesDownloadItems);
    };
    DownloadsPage.prototype.presentEpisodeDeleteConfirm = function (episodeDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded episode.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteEpisode(episodeDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.episodesDownloadItems.indexOf(episodeDownloadItem);
                            if (index > -1) {
                                _this.episodesDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-downloads",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\downloads\downloads.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Downloads</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row class="smart-downloads-row">\n\n    <ion-col col-10>\n\n      <ion-row>\n\n        <p class="item-title">Smart Downloads</p>\n\n      </ion-row>\n\n      <ion-row>\n\n        <p class="item-sub-title">Completed episodes will be deleted and replaced with the next episodes, only on Wi-Fi.</p>\n\n      </ion-row>\n\n    </ion-col>\n\n\n\n    <ion-col col-2>\n\n      <ion-toggle checked="false" color="netflixRed"></ion-toggle>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!hasAnyDownloads" class="movies-shows-row">\n\n    <ion-col text-center>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-download\'></ion-icon>\n\n      </button>\n\n\n\n      <p>Movies and TV show that you download appear here.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!hasAnyDownloads" class="find-downloads-row">\n\n    <ion-col text-center>\n\n      <button ion-button icon-start color="netflixWhite" (click)="goToAvailableDownloads()">\n\n        FIND SOMETHING TO DOWNLOAD\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="hasAnyDownloads">\n\n    <div padding>\n\n      <ion-segment color="netflixRed" [(ngModel)]="downloadType">\n\n        <ion-segment-button value="movies">\n\n          Movies\n\n        </ion-segment-button>\n\n\n\n        <ion-segment-button value="tvShows">\n\n          Tv Shows\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="downloadType">\n\n      <div *ngSwitchCase="\'movies\'">\n\n        <ion-list>\n\n          <ion-item *ngFor="let movieDownloadItem of movieDownloadItems">\n\n            <img item-start src="{{movieDownloadItem.picture}}">\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <p class="ellipsis">{{movieDownloadItem.name}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <button (click)="playMovie(movieDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-play"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n\n\n              <ion-col text-center>\n\n                <button (click)="deleteMovie(movieDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'tvShows\'">\n\n        <ion-list>\n\n          <ion-item *ngFor="let episodesDownloadItem of episodesDownloadItems">\n\n            <img item-start src="{{episodesDownloadItem.picture}}">\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <p class="ellipsis">{{episodesDownloadItem.name}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <button (click)="playEpisode(episodesDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-play"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n\n\n              <ion-col text-center>\n\n                <button (click)="deleteEpisode(episodesDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\downloads\downloads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadItem; });
var DownloadItem = /** @class */ (function () {
    function DownloadItem() {
    }
    return DownloadItem;
}());

//# sourceMappingURL=DownloadItem.js.map

/***/ })

});
//# sourceMappingURL=9.js.map