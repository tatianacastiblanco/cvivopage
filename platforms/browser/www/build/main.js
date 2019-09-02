webpackJsonp([15],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=Movie.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShow; });
var TvShow = /** @class */ (function () {
    function TvShow() {
    }
    return TvShow;
}());

//# sourceMappingURL=TvShow.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_UserInfo__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.addUser = function (user) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(user.uid)
                .set({
                name: user.displayName,
                picture: user.photoURL
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsMoviePartOfMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                moviesFollowedSnapshot.forEach(function (doc) {
                    if (doc.id.toString() === movieId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addMovieToMyList = function (userId, movie) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movie.movieId)
                .set({
                movieId: movie.movieId,
                name: movie.name,
                description: movie.description,
                picture: movie.picture,
                detailsPicture: movie.detailsPicture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeMovieFromMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movieId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsTvShowPartOfMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    if (doc.id === tvShowId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addTvShowToMyList = function (userId, tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShow.tvShowId)
                .set({
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeTvShowFromMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShowId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteMovies = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                var favoriteMovies = [];
                moviesFollowedSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_3__data_Movie__["a" /* Movie */]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    movie.detailsPicture = doc.data().detailsPicture;
                    movie.description = doc.data().description;
                    favoriteMovies.push(movie);
                });
                resolve({ favoriteMovies: favoriteMovies });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteTvShows = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                var favoriteTvShows = [];
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_4__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    favoriteTvShows.push(tvShow);
                });
                resolve({ favoriteTvShows: favoriteTvShows });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ;
    UserService.prototype.getUserInfo = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .get()
                .then(function (doc) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_0__data_UserInfo__["a" /* UserInfo */]();
                userInfo.name = doc.data().name;
                userInfo.email = doc.data().email;
                resolve(userInfo);
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.postLog = function (dataPost) {
        var options = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(dataPost)
        };
        return this.http.post('https://eidoapi.herokuapp.com/cvivo/log', options.body, options);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["HttpClient"]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=UserService.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadService = /** @class */ (function () {
    function DownloadService(transfer, file, platform, storage) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.moviesDownloaded = [];
        this.episodesDownloaded = [];
        this.storageDirectory = "";
        this.movieFileTransfer = this.transfer.create();
        this.episodeFileTransfer = this.transfer.create();
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is("cordova")) {
                return false;
            }
            if (_this.platform.is("ios")) {
                _this.storageDirectory = file.documentsDirectory;
            }
            else if (_this.platform.is("android")) {
                _this.storageDirectory = file.externalRootDirectory + "ionNetflix/";
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    DownloadService.prototype.load = function () {
        // this.storage.clear();
        var _this = this;
        // get all movies and tv shows episodes already stored on device
        this.storage.get("movies").then(function (val) {
            if (val !== null) {
                _this.moviesDownloaded = val;
            }
        });
        this.storage.get("episodes").then(function (val) {
            if (val !== null) {
                _this.episodesDownloaded = val;
                console.log(JSON.stringify(_this.episodesDownloaded));
            }
        });
    };
    DownloadService.prototype.downloadMovie = function (movie) {
        // const promise = new Promise((resolve, reject) => {
        //   this.movieFileTransfer
        //     .download(movie.videoUrl, this.file.dataDirectory + movie.name + ".mp4")
        //     .then(
        //       entry => {
        //         console.log("download complete: " + JSON.stringify(entry.toURL()));
        //         this.moviesDownloaded.push({
        //           movieId: movie.movieId,
        //           name: movie.name,
        //           picture: movie.picture,
        //           detailsPicture: movie.detailsPicture,
        //           downloadUrl: entry.toURL()
        //         });
        //         this.storage.set("movies", this.moviesDownloaded);
        //         resolve({ downloadUrl: entry.toURL() });
        //       },
        //       error => {
        //         console.error(JSON.stringify(error));
        //         reject(error);
        //       }
        //     );
        // });
        // return promise;
    };
    DownloadService.prototype.downloadEpisode = function (episode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.episodeFileTransfer
                .download(episode.videoUrl, _this.file.dataDirectory + episode.name + ".mp4")
                .then(function (entry) {
                console.log("download complete: " + JSON.stringify(entry.toURL()));
                _this.episodesDownloaded.push({
                    episodeId: episode.episodeId,
                    name: episode.name,
                    picture: episode.picture,
                    downloadUrl: entry.toURL()
                });
                _this.storage.set("episodes", _this.episodesDownloaded);
                resolve({ downloadUrl: entry.toURL() });
            }, function (error) {
                console.error(JSON.stringify(error));
                reject(error);
            });
        });
        return promise;
    };
    DownloadService.prototype.isMovieDownloaded = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.moviesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                    var movie = _this.moviesDownloaded[i];
                    if (movie.movieId == movieId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.isEpisodeDownloaded = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.episodesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                    var episode = _this.episodesDownloaded[i];
                    if (episode.episodeId == episodeId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.deleteMovie = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                var movie = _this.moviesDownloaded[i];
                if (movie.movieId == movieId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.moviesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("movies", _this.moviesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService.prototype.deleteEpisode = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                var movie = _this.episodesDownloaded[i];
                if (movie.episodeId == episodeId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.episodesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("episodes", _this.episodesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DownloadService);
    return DownloadService;
}());

//# sourceMappingURL=DownloadService.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VimeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VimeoService = /** @class */ (function () {
    function VimeoService(http) {
        this.http = http;
        this.apiurl = 'https://cvivovimeoapi.herokuapp.com';
        this.vimeoURl = "https://api.vimeo.com";
    }
    VimeoService.prototype.getHomeScreenGroups = function () {
        this.options = {
            headers: this.headersParams
        };
        return this.http.get(this.apiurl + '/albums');
    };
    ;
    VimeoService.prototype.getHomeScreenGroupsVideos = function (hohomeScreenGroup) {
        this.headersParams =
            {
                "Authorization": "Bearer bd5793a910a407ac9960e68a947d320a",
                "Content-Type": "application/json",
                "Accept": "application/vnd.vimeo.*+json;version=3.4",
            };
        this.options = {
            headers: this.headersParams
        };
        return this.http.get(this.vimeoURl + "/me" + hohomeScreenGroup.groupId, this.options);
    };
    VimeoService.prototype.getAllVideos = function () {
        return this.http.get(this.apiurl + '/videos');
    };
    ;
    VimeoService.prototype.searchVideo = function (parameter) {
        return this.http.get(this.vimeoURl + '/me/videos?query=' + parameter);
    };
    ;
    VimeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"]])
    ], VimeoService);
    return VimeoService;
}());

//# sourceMappingURL=VimeoService.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__["a" /* ComingSoonPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        platform.ready().then(function () {
            _this.width = platform.width();
            console.log(_this.width);
            if (_this.width >= 992) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                console.log(_this.width);
            }
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs color="netflixBlack">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Buscar" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Parrilla" tabIcon="md-laptop"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="md-person"></ion-tab>                 \n\n</ion-tabs>\n\n          \n\n \n\n\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 185:
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

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_TvShow__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Category__ = __webpack_require__(692);




var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
    }
    CategoriesService.prototype.getCategories = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .get()
                .then(function (categoriesSnapshot) {
                var categories = [];
                categoriesSnapshot.forEach(function (doc) {
                    var category = new __WEBPACK_IMPORTED_MODULE_3__data_Category__["a" /* Category */](doc.data().name);
                    category.categoryId = doc.id;
                    categories.push(category);
                });
                resolve({ categories: categories });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryMovies = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .get()
                .then(function (categoryMoviesSnapshot) {
                var categoryMovies = [];
                categoryMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.categoryMovieId = doc.id;
                    // movie.movieId = doc.data().movieId;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    categoryMovies.push(movie);
                });
                resolve({ categoryMovies: categoryMovies });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryTvShows = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .get()
                .then(function (categoryTvShowsSnapshot) {
                var categoryTvShows = [];
                categoryTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_1__data_TvShow__["a" /* TvShow */]();
                    tvShow.categoryTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    categoryTvShows.push(tvShow);
                });
                resolve({ categoryTvShows: categoryTvShows });
            });
        });
        return promise;
    };
    return CategoriesService;
}());

//# sourceMappingURL=CategoriesService.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    function MoviesService() {
    }
    MoviesService.prototype.getMovie = function (movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .doc(movieId)
                .get()
                .then(function (doc) {
                var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                // movie.movieId = doc.id;
                // movie.name = doc.data().name;
                // movie.picture = doc.data().picture;
                // movie.detailsPicture = doc.data().detailsPicture;
                // movie.releaseYear = doc.data().releaseYear;
                // movie.rating = doc.data().rating;
                // movie.description = doc.data().description;
                // movie.videoUrl = doc.data().videoUrl;
                resolve({ movie: movie });
            });
        });
        return promise;
    };
    MoviesService.prototype.getAllMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.movieId = doc.id;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.detailsPicture = doc.data().detailsPicture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService.prototype.getRecentlyAddedMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .limit(12)
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.movieId = doc.id;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.detailsPicture = doc.data().detailsPicture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MoviesService);
    return MoviesService;
}());

//# sourceMappingURL=MoviesService.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_TvShow__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Season__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Episode__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowsService = /** @class */ (function () {
    function TvShowsService() {
    }
    TvShowsService.prototype.getAllTvShows = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (tvShowsSnapshot) {
                var tvShows = [];
                tvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.detailsPicture = doc.data().detailsPicture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    tvShows.push(tvShow);
                });
                resolve({ tvShows: tvShows });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getTvShow = function (tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShowId)
                .get()
                .then(function (doc) {
                var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                tvShow.tvShowId = doc.id;
                tvShow.name = doc.data().name;
                tvShow.picture = doc.data().picture;
                tvShow.detailsPicture = doc.data().detailsPicture;
                tvShow.releaseYear = doc.data().releaseYear;
                tvShow.rating = doc.data().rating;
                tvShow.description = doc.data().description;
                resolve({ tvShow: tvShow });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getSeasons = function (tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (tvShowSeasonsSnapshot) {
                var tvShowSeasons = [];
                tvShowSeasonsSnapshot.forEach(function (doc) {
                    var season = new __WEBPACK_IMPORTED_MODULE_3__data_Season__["a" /* Season */]();
                    season.seasonId = doc.id;
                    season.name = doc.data().name;
                    season.tvShowId = doc.data().tvShowId;
                    season.tvShowName = doc.data().tvShowName;
                    tvShowSeasons.push(season);
                });
                resolve({ tvShowSeasons: tvShowSeasons });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.getEpisodes = function (tvShow, season) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (episodesSnapshot) {
                var seasonEpisodes = [];
                episodesSnapshot.forEach(function (doc) {
                    var episode = new __WEBPACK_IMPORTED_MODULE_4__data_Episode__["a" /* Episode */]();
                    episode.episodeId = doc.id;
                    episode.name = doc.data().name;
                    episode.description = doc.data().description;
                    episode.picture = doc.data().picture;
                    episode.seasonId = doc.data().seasonId;
                    episode.seasonName = doc.data().seasonName;
                    episode.tvShowId = doc.data().tvShowId;
                    episode.tvShowName = doc.data().tvShowName;
                    episode.videoUrl = doc.data().videoUrl;
                    seasonEpisodes.push(episode);
                });
                resolve({ seasonEpisodes: seasonEpisodes });
            });
        });
        return promise;
    };
    TvShowsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TvShowsService);
    return TvShowsService;
}());

//# sourceMappingURL=TvShowsService.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 224:
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
            selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\about-us\about-us.html"*/'\n\n<ion-header no-border>\n\n  <ion-navbar transparent >\n\n    <ion-title>Acerca de nosotros</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<video width="100%"  autoplay  controlsList="nodownload" controls src="../../assets/C-VIVO introducción v2.mp4"></video>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coming-soon/coming-soon.module": [
		733,
		14
	],
	"../pages/downloads/downloads.module": [
		742,
		13
	],
	"../pages/forgot-password/forgot-password.module": [
		429
	],
	"../pages/grid-list/grid-list.module": [
		734,
		1
	],
	"../pages/help/help.module": [
		735,
		9
	],
	"../pages/horizontal-list/horizontal-list.module": [
		736,
		8
	],
	"../pages/movie-details/movie-details.module": [
		737,
		7
	],
	"../pages/mylist/mylist.module": [
		738,
		6
	],
	"../pages/notifications/notifications.module": [
		739,
		0
	],
	"../pages/profile/profile.module": [
		740,
		12
	],
	"../pages/search/search.module": [
		741,
		11
	],
	"../pages/settings/settings.module": [
		744,
		5
	],
	"../pages/show-details/show-details.module": [
		743,
		4
	],
	"../pages/sign-in/sign-in.module": [
		431
	],
	"../pages/sign-up/sign-up.module": [
		432
	],
	"../pages/terms/terms.module": [
		745,
		10
	],
	"../pages/users/users.module": [
		746,
		3
	],
	"../pages/video-playback/video-playback.module": [
		747,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 266;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserService__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatService = /** @class */ (function () {
    function ChatService(socket, afAuth, db, UserService, alertCtrl, toastCtrl) {
        this.socket = socket;
        this.afAuth = afAuth;
        this.db = db;
        this.UserService = UserService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ;
    ChatService.prototype.joinChat = function () {
        var _this = this;
        this.socket.connect();
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.authState.subscribe(function (user) {
                if (user) {
                    _this.uid = user.uid;
                    _this.UserService.getUserInfo(_this.uid).then(function (userInfo) {
                        _this.socket.emit('set-nickname', userInfo.name);
                        resolve({ email: userInfo.email, name: userInfo.name });
                    }, function (err) {
                        reject(err);
                        _this.showAlert(err, 'Error userInfo');
                    });
                }
                else {
                    _this.uid = null;
                }
            });
        });
        return promise;
    };
    ;
    ChatService.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ;
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', { text: message });
        // this.message = '';
    };
    ;
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ;
    /**
     * Funcion que trae de base de datos todas las fotos de los usuairos en Base64
     * @returns retorna un array de objetos con la forma [{base64:'',name:''}]
     */
    // getEspecificPhoto(name){
    //   let allPhotos = [];
    //   this.db.collection('photos').valueChanges().subscribe(objResult =>{
    //    objResult.forEach(element => {
    //      console.log
    //      allPhotos.push(element)
    //    })
    //    console.log(allPhotos)
    // }) 
    // photosArray.forEach(element =>{
    //   if(element['name'] === name){
    //     photo = element['base64'];
    //   }    
    // })
    // return photo
    ChatService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ChatService.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatService.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3__UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=ChatService.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroup; });
var HomeScreenGroup = /** @class */ (function () {
    function HomeScreenGroup() {
        this.groupItems = [];
    }
    return HomeScreenGroup;
}());

//# sourceMappingURL=HomeScreenGroup.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(49);
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




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.email = "";
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    /**
     * Funciom para restablecer contraseña de usuario mediante firebase, se enviara un email al correo ingresado.
     * @param email correo ingresado al cual se enviara el correo con instrucciones.
     */
    ForgotPasswordPage.prototype.resetPassword = function (email) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando..."
        });
        loading.present();
        this.authService.forgotPassword(email).then(function () {
            loading.dismiss();
            _this.email = '';
            _this.navCtrl.setRoot('SignInPage');
        }).catch(function () {
            loading.dismiss();
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" text-center >\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n          <img src="assets/imgs/contraseña.png">\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <p class=\'forgot-pass-title\'>¿Olvidaste tu contraseña?</p>\n\n          <p>Por favor ingresa el correo que usaste al momento del registro para obtener las instrucciones de restablecimiento de contraseña</p>\n\n          <ion-item class="inputLg">\n\n            <ion-label floating>Ingresa tu correo</ion-label>\n\n            <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <button ion-button round full (click)="resetPassword(email)">Enviar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n    <!-- <div class="image">\n\n      <img src="assets/imgs/contraseña.png">\n\n    </div>\n\n    <ion-row padding> \n\n     <p class=\'forgot-pass-title\'>¿Olvidaste tu contraseña?</p>\n\n    <p>Por favor ingresa el correo que usaste al momento del registro para obtener las instrucciones de restablecimiento de contraseña</p>\n\n       <ion-item>\n\n        <ion-label floating>Ingresa tu correo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n      <button ion-button round full (click)="resetPassword(email)">Enviar</button>\n\n    </ion-row> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_terms__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, alertCtrl, afAuth, afs, sqlite, viewCtrl, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afs = afs;
        this.sqlite = sqlite;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.signUpSegment = "cancel";
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.errors = { correo: false, confirmPass: false, minLength: false };
        var emailPattern = "^[a-zA-Z0-9._%+-]+@cun.edu.co";
        this.signUpForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(emailPattern)]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password2: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            checked: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue]
        }, { validator: this.checkPasswords });
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignUpPage");
    };
    SignUpPage.prototype.goToHelp = function () {
        this.navCtrl.push("HelpPage");
    };
    SignUpPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    SignUpPage.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.password2.value;
        return pass === confirmPass ? true : { notSame: true };
    };
    SignUpPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.push("SignInPage");
    };
    /**
     * Funcion para crear un registro de nuevo usuario en firebase,
     * dentro de esta funcion se encuentran subfunciones para realizar el regstro
     */
    SignUpPage.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, loading;
            return __generator(this, function (_a) {
                user = this.signUpForm.value;
                loading = this.loadingCtrl.create({
                    spinner: "bubbles",
                    content: "Registrando..."
                });
                loading.present();
                try {
                    /**
                     * funcion de angularFirebase para crear un nuevo usuario con email / password
                     */
                    this.afAuth.auth
                        .createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (userResult) {
                        loading.dismiss();
                        var email = user.email;
                        var name = user.name;
                        var uid = userResult.user.uid;
                        var newUser = userResult.additionalUserInfo.isNewUser;
                        /**
                         * Funcion para crear documento en firebase
                         * con los datos del nuevo usuario (nombre, email, uid).
                         */
                        _this.afs.collection('users')
                            .doc(uid).set({ email: email, name: name, uid: uid })
                            .then(function (fsRes) {
                            console.log(fsRes);
                            if (newUser) {
                                _this.afAuth.auth.currentUser.sendEmailVerification().then(function (res) {
                                    _this.showAlert('Hemos enviado un link al correo ' + email + ' para verificar tu cuenta', 'Verfica tu Email');
                                });
                                _this.navCtrl.push("SignInPage");
                                // this.navCtrl.insert(0,TabsPage);
                                // this.navCtrl.popToRoot();
                            }
                        }, function (err) {
                            loading.dismiss();
                            _this.showAlert(err, 'Error AFST');
                        });
                    }, function (err) {
                        loading.dismiss();
                        switch (err.code) {
                            case 'auth/invalid-email':
                                _this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co', 'Correo Invalido');
                                break;
                            case 'auth/email-already-in-use':
                                _this.showAlert('Este correo ya se encuentra registrado', 'Correo en uso');
                                break;
                            case 'auth/operation-not-allowed':
                                _this.showAlert('Este usuario se encuetra inactivo. ', 'Usuario inactivo');
                                break;
                            case 'auth/weak-password':
                                _this.showAlert('Esta contraseña no cumple con los requerimientos de seguridad  . ', 'Contraseña Insegura');
                                break;
                            default:
                                break;
                        }
                    });
                }
                catch (err) {
                    this.showAlert(err, 'Error FnSgup');
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    SignUpPage.prototype.terminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__terms_terms__["a" /* TermsPage */]);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sign-up",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button class="navbar-button" ion-button clear (click)="signIn()">INICIAR SESIÓN</button>\n\n      <button class="navbar-button" ion-button clear (click)="goToHelp()">AYUDA</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6 >\n\n          <img class="marginLg" src="assets/imgs/netflix-signup.png">\n\n          <p class="title">Aprende y emprende </p>\n\n          <p class="subtitle">No es suficiente solo con ver </p>\n\n      </ion-col>\n\n      <ion-col col-lg-6 pull>\n\n        <div class="formReg">\n\n          <form [formGroup]="signUpForm"  (ngSubmit)="signUp()" padding >\n\n            <p class="sign-up-title"> Registro</p>\n\n            <ion-item>\n\n              <ion-label floating>Nombre completo</ion-label>\n\n              <ion-input type="text" formControlName="name" required  ></ion-input>              \n\n            </ion-item>          \n\n            <ion-item>\n\n              <ion-label floating>Correo</ion-label>\n\n              <ion-input type="email" formControlName="email" [email]="true" required  ></ion-input>                \n\n            </ion-item>     \n\n            <ion-item>\n\n              <ion-label floating>Contraseña</ion-label>\n\n              <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password" required [minlength]=6></ion-input>\n\n              <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Confirmar contraseña</ion-label>\n\n              <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password2"  required></ion-input>                 \n\n            </ion-item>\n\n            <div class="condiciones" col-11 col-lg-11>\n\n              <ion-checkbox  color="netflixRed" formControlName="checked" checked="false"></ion-checkbox>\n\n              <label>Al registrarme estoy Aceptando los <span color="netflixRed" (click)="terminos()">Términos y Condiciones de uso de CVICO</span></label>\n\n           </div>\n\n            <button class="signup-button" color="netflixRed" ion-button round  full  [disabled]=!signUpForm.valid>REGISTRARSE</button>\n\n            <div style="color: #CA5F45" class="alert alert-danger">\n\n              <div *ngIf="signUpForm.hasError(\'notSame\')">\n\n                *Las contraseñas no coinciden.\n\n              </div>\n\n              <div *ngIf="signUpForm.controls[\'email\'].hasError(\'pattern\')">\n\n                * Tu correo tiene que tener el siguiente formato ejemplo@cun.edu.co\n\n              </div>       \n\n              <div  *ngIf="signUpForm.controls[\'password\'].hasError(\'minlength\')">\n\n                * la contraseña debe tener minimo 6 caracteres\n\n              </div>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n<!-- \n\n  <div class="image">\n\n    <img src="assets/imgs/netflix-signup.png">\n\n  </div>\n\n\n\n  <ion-row style="margin-top: -60px;">\n\n    <ion-col text-center>\n\n      <p class="title">Aprende y emprende </p>\n\n      <p class="subtitle">No es suficiente solo con ver </p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <br>\n\n  <form [formGroup]="signUpForm"  (ngSubmit)="signUp()" padding >\n\n  <ion-row>\n\n    <p class="sign-up-title"> Registro</p>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Nombre completo</ion-label>\n\n        <ion-input type="text" formControlName="name" required  ></ion-input>\n\n      \n\n      </ion-item>  \n\n  \n\n      <ion-item>\n\n          <ion-label floating>Correo</ion-label>\n\n          <ion-input type="email" formControlName="email" [email]="true" required  ></ion-input>\n\n        \n\n        </ion-item>     \n\n        <ion-item>\n\n          <ion-label floating>Contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password" required [minlength]=6></ion-input>\n\n          <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Confirmar contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password2"  required></ion-input>\n\n         \n\n        </ion-item>\n\n    \n\n        <button class="signup-button" color="netflixRed" ion-button round  full  [disabled]=!signUpForm.valid>REGISTRARSE</button>\n\n       <br>\n\n        <div style="color: #CA5F45" \n\n          class="alert alert-danger">\n\n         <div *ngIf="signUpForm.hasError(\'notSame\')">\n\n            *Las contraseñas no coinciden.\n\n        </div>\n\n        <div *ngIf="signUpForm.controls[\'email\'].hasError(\'pattern\')">\n\n           * Tu correo tiene que tener el siguiente formato ejemplo@cun.edu.co\n\n        </div>       \n\n        <div  *ngIf="signUpForm.controls[\'password\'].hasError(\'minlength\')">\n\n           * la contraseña debe tener minimo 6 caracteres\n\n        </div>\n\n      </div>\n\n    \n\n  \n\n   </ion-row>\n\n  </form> -->\n\n  <!-- <br>\n\n  <p class="questions">Questions? Phone 1800 071 578</p>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Help Centre</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Terms of Use</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Privacy</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Cookie Preferences</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <p class="footer-text">Netflix Australia</p> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsProvider = /** @class */ (function () {
    function AnalyticsProvider() {
        console.log('Hello AnalyticsProvider Provider');
    }
    AnalyticsProvider.prototype.startTrackerWithId = function (id) {
        ga('create', {
            storage: 'none',
            trackingId: id,
            clientId: localStorage.getItem('ga:clientId')
        });
        ga('set', 'checkProtocolTask', null);
        ga('set', 'transportUrl', 'https://www.google-analytics.com/collect');
        ga(function (tracker) {
            if (!localStorage.getItem('ga:clientId')) {
                localStorage.setItem('ga:clientId', tracker.get('clientId'));
            }
        });
    };
    AnalyticsProvider.prototype.trackView = function (screenName) {
        console.log(screenName);
        ga('set', 'page', screenName);
        ga('send', 'pageview');
    };
    AnalyticsProvider.prototype.trackEvent = function (category, action, label, value) {
        ga('send', 'event', {
            eventCategory: category,
            eventLabel: label,
            eventAction: action,
            eventValue: value
        });
    };
    AnalyticsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnalyticsProvider);
    return AnalyticsProvider;
}());

//# sourceMappingURL=analytics.js.map

/***/ }),

/***/ 479:
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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDeskProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(82);
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



var HelpDeskProvider = /** @class */ (function () {
    function HelpDeskProvider(http, authService) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.userEmail = "";
        this.freshDeskurl = 'https://cvivo.freshdesk.com/api/v2/';
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userEmail = user.email;
        });
    }
    HelpDeskProvider.prototype.getMyTickets = function () {
        var options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "am9IRTRFbWp0V09rZDg2ZU1DVA=="
            }
        };
        return this.http.get(this.freshDeskurl + 'tickets?email=' + this.userEmail + '&order_by=status&order_type=desc ', options);
    };
    HelpDeskProvider.prototype.createTicket = function (ticket) {
        var options = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "am9IRTRFbWp0V09rZDg2ZU1DVA=="
            },
            body: JSON.stringify(ticket)
        };
        return this.http.post(this.freshDeskurl + 'tickets', options.body, options);
    };
    HelpDeskProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AuthService */]])
    ], HelpDeskProvider);
    return HelpDeskProvider;
}());

//# sourceMappingURL=help-desk.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DownloadService__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__ = __webpack_require__(708);
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
            selector: "page-downloads",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\downloads\downloads.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My Downloads</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row class="smart-downloads-row">\n\n    <ion-col col-10>\n\n      <ion-row>\n\n        <p class="item-title">Smart Downloads</p>\n\n      </ion-row>\n\n      <ion-row>\n\n        <p class="item-sub-title">Completed episodes will be deleted and replaced with the next episodes, only on Wi-Fi.</p>\n\n      </ion-row>\n\n    </ion-col>\n\n\n\n    <ion-col col-2>\n\n      <ion-toggle checked="false" color="netflixRed"></ion-toggle>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!hasAnyDownloads" class="movies-shows-row">\n\n    <ion-col text-center>\n\n      <button ion-button clear color="netflixWhite">\n\n        <ion-icon name=\'md-download\'></ion-icon>\n\n      </button>\n\n\n\n      <p>Movies and TV show that you download appear here.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!hasAnyDownloads" class="find-downloads-row">\n\n    <ion-col text-center>\n\n      <button ion-button icon-start color="netflixWhite" (click)="goToAvailableDownloads()">\n\n        FIND SOMETHING TO DOWNLOAD\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <div *ngIf="hasAnyDownloads">\n\n    <div padding>\n\n      <ion-segment color="netflixRed" [(ngModel)]="downloadType">\n\n        <ion-segment-button value="movies">\n\n          Movies\n\n        </ion-segment-button>\n\n\n\n        <ion-segment-button value="tvShows">\n\n          Tv Shows\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n\n\n    <div [ngSwitch]="downloadType">\n\n      <div *ngSwitchCase="\'movies\'">\n\n        <ion-list>\n\n          <ion-item *ngFor="let movieDownloadItem of movieDownloadItems">\n\n            <img item-start src="{{movieDownloadItem.picture}}">\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <p class="ellipsis">{{movieDownloadItem.name}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <button (click)="playMovie(movieDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-play"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n\n\n              <ion-col text-center>\n\n                <button (click)="deleteMovie(movieDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n\n\n      <div *ngSwitchCase="\'tvShows\'">\n\n        <ion-list>\n\n          <ion-item *ngFor="let episodesDownloadItem of episodesDownloadItems">\n\n            <img item-start src="{{episodesDownloadItem.picture}}">\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <p class="ellipsis">{{episodesDownloadItem.name}}</p>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col text-center>\n\n                <button (click)="playEpisode(episodesDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-play"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n\n\n              <ion-col text-center>\n\n                <button (click)="deleteEpisode(episodesDownloadItem)" ion-button icon-only clear>\n\n                  <ion-icon name="md-trash"></ion-icon>\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\downloads\downloads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(603);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = /** @class */ (function () {
    function AuthService(alertCtrl, afAuth, platform, fb, googlePlus, twitter) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.twitter = twitter;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
            else {
                _this.uid = null;
            }
        });
    }
    AuthService.prototype.signInWithFacebookPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.fb
                .login(["email"])
                .then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(facebookCredential)
                    .then(function (res) { }, function (err) {
                    console.error("Error: ", err);
                    throw err;
                });
            })
                .catch(function (error) {
                throw error;
            });
        }
        else {
            return this.signInWithFacebookWeb();
        }
    };
    AuthService.prototype.signInWithFacebookWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGooglePlugin = function () {
        if (this.platform.is("cordova")) {
            return this.googlePlus
                .login({
                webClientId: "818528881307-mhakvit2ptfdo37bc7lrmotifrjr5cj3.apps.googleusercontent.com",
                offline: true
            })
                .then(function (res) {
                var googleCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(googleCredential)
                    .then(function (response) {
                    console.log("Firebase success: " + JSON.stringify(response));
                });
            }, function (err) {
                console.error("Error: ", err);
                throw err;
            });
        }
        else {
            return this.signInWithGoogleWeb();
        }
    };
    AuthService.prototype.signInWithGoogleWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithTwitterPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.twitter.login().then(function (result) {
                console.log("Successful login!");
                console.log(result);
            }, function (error) {
                console.error("Error logging in");
                console.error(error);
                throw error;
            });
        }
        else {
            return this.signInWithTwitterWeb();
        }
    };
    AuthService.prototype.signInWithTwitterWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].TwitterAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GithubAuthProvider())
            .then(function (res) { });
    };
    AuthService.prototype.registerUser = function (email, password) {
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            return res;
        })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password).then(function (res) {
            return res;
        }).catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    AuthService.prototype.forgotPassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["app"]()
            .auth()
            .sendPasswordResetEmail(email)
            .then(function (s) {
            var alert = _this.alertCtrl.create({
                title: "Contraseña restablecida",
                subTitle: "Revisa el correo para cambiar tu contraseña.",
                buttons: ["Entendido"]
            });
            alert.present();
        })
            .catch(function (error) {
            var errorTxt = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorTxt = 'El correo no tiene el formato correcto.';
                    break;
                case 'auth/user-not-found':
                    errorTxt = 'Este usuario no existe en nuestros registros.';
                    break;
                default:
                    break;
            }
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: errorTxt,
                buttons: [
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        cssClass: 'btnalert-cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        cssClass: 'btnalert-ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert.present();
            throw error;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_terms__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, viewCtrl, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginData = { email: "", password: "" };
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignInPage");
    };
    /**
   * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
   * @param key codigo de la tecla presionada
   */
    SignInPage.prototype.keyPress = function (key) {
        if (key === 13) {
            this.signIn();
        }
    };
    ;
    /**
     * Funcion para intercabiar el tipo de input de las contraseñas, para poder revelar y ocultar la  contraseña.
     */
    SignInPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    ;
    /**
     * Funcion para realizar el inicio de sesion en firebase auth, se utiliza el metodo signIn() de authService, retorna resolve o reject.
     */
    SignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: "bubbles",
                            content: "Ingresando..."
                        });
                        loading.present();
                        return [4 /*yield*/, this.authService
                                .signIn(this.loginData.email, this.loginData.password)
                                .then(function (x) {
                                if (x.user.emailVerified === true) {
                                    loading.dismiss();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                                }
                                else {
                                    loading.dismiss();
                                    _this.showAlert('Nos has verificado tu cuenta', 'Error de verificación ');
                                }
                            }, function (error) {
                                loading.dismiss();
                                loading.dismiss();
                                switch (error.code) {
                                    case 'auth/invalid-email':
                                        _this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co', 'Correo Invalido');
                                        break;
                                    case 'auth/user-disabled':
                                        _this.showAlert('Este usuario esta suspendido.', 'Usuario deshabilitado');
                                        break;
                                    case 'auth/user-not-found':
                                        _this.showAlert('No encontramos este usuario en nuestros registros. ', 'Usuario no existe');
                                        break;
                                    case 'auth/wrong-password':
                                        _this.showAlert('La contraseña escrita es incorrecta  . ', 'Contraseña incorrecta');
                                        break;
                                    default:
                                        break;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * Funcion para ir a la pagina de registro
     */
    SignInPage.prototype.goToSignUp = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push("SignUpPage");
        }
    };
    ;
    SignInPage.prototype.goToHelp = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push("HelpPage");
        }
    };
    /**
     * Funcion para incluir en el stack de navegacion la pagina de recuperar contraseña
     */
    SignInPage.prototype.openForgotPass = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    SignInPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    SignInPage.prototype.terminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_terms__["a" /* TermsPage */]);
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-sign-in",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\sign-in\sign-in.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button class="help" ion-button clear (click)="goToHelp()">Ayuda</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" text-center padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-12>\n\n        <p class="sign-in-title">Inicio de sesión</p>\n\n        <div class="sesionContent">\n\n          <ion-item>\n\n            <ion-label floating>Correo</ion-label>\n\n            <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n\n          </ion-item>      \n\n          <ion-item>\n\n            <ion-label floating>Contraseña</ion-label>\n\n            <ion-input  [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n          </ion-item>      \n\n          <button color="netflixRed" ion-button round full (click)="signIn()" >Iniciar sesión</button>\n\n        </div>        \n\n      </ion-col>\n\n      <ion-col col-12 col-lg-12>\n\n        <p (click)="openForgotPass()">¿Olvidaste tu contraseña?</p>\n\n        <p (click)="goToSignUp()">¿Nuevo en C-vivo?\n\n          <strong>Regístrate ahora.</strong>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n<!--     \n\n  <ion-row>\n\n    <p class="sign-in-title">Inicio de sesión</p>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Correo</ion-label>\n\n      <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input  [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n    </ion-item>\n\n\n\n    <button color="netflixRed" ion-button round full (click)="signIn()" >Iniciar sesión</button>\n\n  </ion-row>  \n\n\n\n  <ion-row style="height: 20%; margin-top: 15%;">\n\n    <ion-col>\n\n      <p (click)="openForgotPass()">¿Olvidaste tu contraseña?</p>\n\n      <p (click)="goToSignUp()">¿Nuevo en C-vivo?\n\n        <strong>Regístrate ahora.</strong>\n\n      </p>\n\n    </ion-col>\n\n  </ion-row> -->\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\sign-in\sign-in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_about_us_about_us__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_forgot_password_forgot_password_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_coming_soon_coming_soon__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_downloads_downloads__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sign_in_sign_in__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sign_in_sign_in_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_streaming_media__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_twitter_connect__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_ComingSoonService__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_HomeScreenService__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_MoviesService__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_TvShowsService__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_CategoriesService__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_UserService__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_DownloadService__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_embed_video__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_sqlite__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng_socket_io__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_ChatService__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic2_calendar__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_common_locales_es__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_native_storage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_speech_recognition__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_base64__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_help_desk_help_desk__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_terms_terms__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_analytics__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_analytics_analytics__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































Object(__WEBPACK_IMPORTED_MODULE_46__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_47__angular_common_locales_es__["a" /* default */]);




// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA16S38r7aWz0FJBlZf5c3RVyyPYOkaXY0",
    authDomain: "cvivo-84315.firebaseapp.com",
    databaseURL: "https://cvivo-84315.firebaseio.com",
    projectId: "cvivo-84315",
    storageBucket: "cvivo-84315.appspot.com",
    messagingSenderId: "818528881307",
    timestampsInSnapshots: true
};
var config = { url: 'https://chatcvivotest.herokuapp.com/', options: {} };
__WEBPACK_IMPORTED_MODULE_27_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_terms_terms__["a" /* TermsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_40__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_44__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_39_ngx_embed_video__["EmbedVideo"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_42_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grid-list/grid-list.module#GridListPageModule', name: 'GridListPage', segment: 'grid-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horizontal-list/horizontal-list.module#HorizontalListPageModule', name: 'HorizontalListPage', segment: 'horizontal-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylist/mylist.module#MylistPageModule', name: 'MylistPage', segment: 'mylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-details/show-details.module#ShowDetailsPageModule', name: 'ShowDetailsPage', segment: 'show-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-playback/video-playback.module#VideoPlaybackPageModule', name: 'VideoPlaybackPage', segment: 'video-playback', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_in_sign_in_module__["SignInPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_forgot_password_forgot_password_module__["ForgotPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_45_ionic2_calendar__["a" /* NgCalendarModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_terms_terms__["a" /* TermsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_31__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_32__services_ComingSoonService__["a" /* ComingSoonService */],
                __WEBPACK_IMPORTED_MODULE_33__services_HomeScreenService__["a" /* HomeScreenService */],
                __WEBPACK_IMPORTED_MODULE_34__services_MoviesService__["a" /* MoviesService */],
                __WEBPACK_IMPORTED_MODULE_35__services_TvShowsService__["a" /* TvShowsService */],
                __WEBPACK_IMPORTED_MODULE_36__services_CategoriesService__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_37__services_UserService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_38__services_DownloadService__["a" /* DownloadService */],
                __WEBPACK_IMPORTED_MODULE_43__services_ChatService__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_52__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_53__providers_help_desk_help_desk__["a" /* HelpDeskProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_analytics_analytics__["a" /* AnalyticsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ComingSoonPage = /** @class */ (function () {
    function ComingSoonPage(loadingCtrl, navCtrl, modalCtrl, alertCtrl, Platform, app, zone) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.Platform = Platform;
        this.app = app;
        this.zone = zone;
        this.loaded = false;
        this.eventSource = [];
        this.HorarioLunes = [
            { inicio: 8, final: 9, materia: '' }, { inicio: 10, final: 11, materia: '' }, { inicio: 12, final: 13, materia: 'Opción de grado III' },
            { inicio: 14, final: 15, materia: 'Proyecto de vida' }, { inicio: 16, final: 17, materia: '' },
        ];
        this.HorarioMartes = [
            { inicio: 8, final: 9, materia: '' }, { inicio: 10, final: 11, materia: '' }, { inicio: 12, final: 13, materia: 'Opción de grado II' },
            { inicio: 14, final: 15, materia: '' }, { inicio: 16, final: 17, materia: 'Opción de grado I' },
        ];
        this.HorarioMiercoles = [
            { inicio: 8, final: 9, materia: '' }, { inicio: 10, final: 11, materia: '' }, { inicio: 12, final: 13, materia: 'Espiritu Emprendedor' },
            { inicio: 14, final: 15, materia: 'Proyecto de vida' }, { inicio: 16, final: 17, materia: '' },
        ];
        this.HorarioJueves = [
            { inicio: 8, final: 9, materia: '' }, { inicio: 10, final: 11, materia: '' }, { inicio: 12, final: 13, materia: '' },
            { inicio: 14, final: 15, materia: 'Opción de grado III' }, { inicio: 16, final: 17, materia: 'Opción de grado I' },
        ];
        this.HorarioViernes = [
            { inicio: 8, final: 9, materia: '' }, { inicio: 10, final: 11, materia: '' }, { inicio: 12, final: 13, materia: 'Proyecto de vida' },
            { inicio: 14, final: 15, materia: 'Opción de grado II' }, { inicio: 16, final: 17, materia: ' Opción de grado III' },
        ];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'week',
            currentDate: this.selectedDay,
            labelAllDay: '',
            lockSwipes: false
        };
        this.menu = true;
        this.menuhead = 'parrilla';
        this.events(1, this.HorarioLunes);
        this.events(2, this.HorarioMartes);
        this.events(3, this.HorarioMiercoles);
        this.events(4, this.HorarioJueves);
        this.events(5, this.HorarioViernes);
        Platform.ready().then(function () {
            _this.width = Platform.width();
            _this.heigth = Platform.height();
            console.log(_this.width);
            console.log(_this.heigth + 'height');
            if (_this.width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
    }
    ComingSoonPage_1 = ComingSoonPage;
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ComingSoonPage");
        this.getComingSoon();
    };
    ComingSoonPage.prototype.getComingSoon = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando parrilla..."
        });
        loading.present();
        setTimeout(function () {
            _this.loaded = true;
            loading.dismiss();
        }, 2000);
        // this.comingSoonService.getComingSoon().then((result: any) => {
        //   this.comingSoonList = result.comingSoonList;
        //   this.loaded = true;
        //   loading.dismiss();
        // });
    };
    ComingSoonPage.prototype.onCurrentDateChanged = function ($event) {
    };
    ComingSoonPage.prototype.reloadSource = function (startTime, endTime) { };
    ComingSoonPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).calendar();
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).calendar();
        this.showAlert('<b>Desde:</b> ' + start + '<br><b>Hasta:</b> ' + end, '' + event.title);
    };
    ComingSoonPage.prototype.onViewTitleChanged = function (title) {
        this.title = title;
    };
    ComingSoonPage.prototype.onTimeSelected = function (ev) {
        // this.selectedDay = ev.selectedTime;
    };
    ComingSoonPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    ComingSoonPage.prototype.events = function (index, arrayclasesDia) {
        var _this = this;
        var d = new Date(), year = d.getFullYear();
        d.setDate(index);
        // Get the first Monday in the month
        while (d.getDay() !== index) {
            d.setDate(d.getDate() + 1);
        }
        // Get all the other Mondays in the month
        while (d.getFullYear() === year) {
            var pushDate = new Date(d.getTime());
            arrayclasesDia.forEach(function (clase) {
                var obj = {
                    title: clase.materia,
                    startTime: new Date(pushDate.getFullYear(), pushDate.getMonth(), pushDate.getDate(), clase.inicio, 0),
                    endTime: new Date(pushDate.getFullYear(), pushDate.getMonth(), pushDate.getDate(), clase.final, 0)
                };
                _this.eventSource.push(obj);
            });
            d.setDate(d.getDate() + 7);
        }
        console.log('test');
    };
    ComingSoonPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ComingSoonPage.prototype.parrilla = function () {
        this.navCtrl.push(ComingSoonPage_1);
    };
    ComingSoonPage.prototype.buscar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    ComingSoonPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    ComingSoonPage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ;
    ComingSoonPage = ComingSoonPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-coming-soon",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\coming-soon\coming-soon.html"*/'<ion-header no-border>\n\n    <ion-grid>\n\n      <ion-row class="padTitle">\n\n        <ion-col col-12 col-lg-2 [hidden]="menu" >\n\n          <ion-navbar align-title="center" transparent >\n\n            <ion-title>\n\n              <img src="assets/imgs/netflix-logo.png">\n\n            </ion-title>   \n\n          </ion-navbar>\n\n        </ion-col>\n\n        <ion-col col-lg-10 [hidden]="menu">\n\n          <div >\n\n            <ion-segment [(ngModel)]="menuhead">\n\n              <ion-segment-button value="home"   class="segmenthead"  (click)="home()"> <ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n              <ion-segment-button value="buscar" class="segmenthead"  (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n              <ion-segment-button value="parrilla" class="segmenthead"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n              <ion-segment-button value="perfil"   class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n              <ion-segment-button value="salir"    class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n            </ion-segment>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-lg-12 class="padTitle"> \n\n          <ion-navbar color="netflixRed" >\n\n            <ion-title>{{title}}</ion-title>\n\n          </ion-navbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    \n\n  </ion-header>\n\n<ion-content padding >\n\n\n\n<calendar \n\n[eventSource]="eventSource"\n\nstyle="color:#b3b3b3;"\n\n[allDayLabel]=\'calendar.labelAllDay\'\n\nformatWeekTitle=\'MMMM yyyy \'\n\nformatWeekViewDayHeader=\'EEE\'\n\nstartingDayWeek = \'1\'\n\nscrollToHour = \'8\'\n\nlocale = \'es-Es\'\n\n[lockSwipes] = \'calendar.lockSwipes\'\n\nstartHour = "8"\n\nendHour = "19"\n\n[calendarMode]="calendar.mode"\n\n[currentDate]="calendar.currentDate"\n\n(onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n(onEventSelected)="onEventSelected($event)"\n\n(onTitleChanged)="onViewTitleChanged($event)"\n\n(onTimeSelected)="onTimeSelected($event)"\n\n>\n\n</calendar>\n\n<!-- \n\n  <ion-list no-lines *ngIf="comingSoonList.length > 0">\n\n    <ion-item *ngFor="let comingSoon of comingSoonList">\n\n      <img src="{{ comingSoon.picture }}">\n\n\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <p class="item-title">{{ comingSoon.name }}</p>\n\n        </ion-col>\n\n\n\n        <ion-col col-4>\n\n          <button ion-button clear color="netflixWhite">\n\n            <ion-icon name=\'md-add\'></ion-icon>\n\n            <p>My List</p>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <p class="item-summary line-break">{{ comingSoon.description }}</p>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <p class="coming-date">{{ comingSoon.releaseDate }}</p>\n\n      </ion-row>\n\n\n\n      <br>\n\n    </ion-item>\n\n  </ion-list> -->\n\n<!-- \n\n  <ion-row style="margin-top: 50%;" *ngIf="loaded && comingSoonList.length <= 0">\n\n    <ion-col text-center>\n\n      <img class="demo-image" src="assets/netflix-icon.png">\n\n      <p class="demo-message">There are no items yet.</p>\n\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own coming soon items here!</p>\n\n    </ion-col>\n\n  </ion-row> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\coming-soon\coming-soon.html"*/
        })
        //
        // Planes de negocio 1 2 3  :Planea tu negocio
        // Espíritu y proyecto :Proyectarse para emprender
        // Opciones de grado: Ideas en acción
        // Pensamiento cunista :Transformando con tus ideas
        // //
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ComingSoonPage);
    return ComingSoonPage;
    var ComingSoonPage_1;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_streaming_media__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coming_soon_coming_soon__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__terms_terms__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


















var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, app, loadingCtrl, zone, authService, camera, streamingMedia, Platform, nativeStorage, db, alertCtrl, base64, _DomSanitizationService, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.authService = authService;
        this.camera = camera;
        this.streamingMedia = streamingMedia;
        this.Platform = Platform;
        this.nativeStorage = nativeStorage;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this._DomSanitizationService = _DomSanitizationService;
        this.events = events;
        this.userName = "";
        this.userPicture = "";
        this.uid = '';
        this.colectionName = '';
        this.isCordova = false;
        this.isCordovaWithoutCamera = false;
        this.isCordovaWithCamera = false;
        this.menu = true;
        this.menuhead = 'perfil';
        Platform.ready().then(function () {
            _this.width = Platform.width();
            _this.heigth = Platform.height();
            console.log(_this.width);
            console.log(_this.heigth + 'height');
            if (_this.width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
        this.constraints = window.constraints = {
            audio: false,
            video: true
        };
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userName = user.email;
            _this.uid = user.uid;
            _this.db.collection('photos').doc(_this.uid).valueChanges().subscribe(function (photo) {
                _this.myPhoto = _this._DomSanitizationService.bypassSecurityTrustResourceUrl(photo['base64']);
            });
        });
    }
    ProfilePage_1 = ProfilePage;
    ;
    ProfilePage.prototype.profilePhotobtn = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var stream, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.Platform.is('cordova')) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(this.constraints)];
                    case 2:
                        stream = _a.sent();
                        this.handleSuccess(stream);
                        e.target.disabled = true;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.name === 'NotFoundError') {
                            this.isCordovaWithCamera = false;
                            this.isCordovaWithoutCamera = true;
                        }
                        else {
                            this.handleError(e_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.openCamera();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * if web rtc video media is succes
     * @param stream
     */
    ProfilePage.prototype.handleSuccess = function (stream) {
        this.isCordova = false;
        this.canvasref = this.canvast.nativeElement;
        this.canvasref.width = 480;
        this.canvasref.height = 360;
        this.isCordovaWithoutCamera = false;
        this.isCordovaWithCamera = true;
        var video = document.querySelector('video');
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', this.constraints);
        console.log("Using video device: " + videoTracks[0].label);
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
    };
    ;
    /**
     * take photo button
     */
    ProfilePage.prototype.snapshotButton = function () {
        var _this = this;
        this.canvasref.getContext('2d').drawImage(this.video, 0, 0, 480, 360);
        var photoBase64 = this.canvasref.toDataURL();
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando..."
        });
        loading.present();
        // Obtener el UID del usuario desde firebase para posteriromente guardar foto en base de datos con el nombre
        this.db.collection('users').doc(this.uid).get().subscribe(function (doc) {
            // Guardar en BD la foto {name:'',base64:''} 
            _this.db.collection('photos').doc(_this.uid).set({ name: doc.data().name, base64: photoBase64 })
                .then(function (res) {
                _this.isCordovaWithCamera = false;
                loading.dismiss();
                _this.showAlert('Tu foto se ha guardado', 'Bien');
                _this.myPhoto = _this._DomSanitizationService.bypassSecurityTrustResourceUrl(photoBase64);
                _this.events.publish('user:photoChanged', photoBase64);
            });
        });
    };
    /**
     *
     * @param error if web rtc video fail
     */
    ProfilePage.prototype.handleError = function (error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            var v = this.constraints.video;
            this.errorMsg("The resolution " + v.width.exact + "x" + v.height.exact + " px is not supported by your device.", v);
        }
        else if (error.name === 'PermissionDeniedError') {
            this.errorMsg('Permissions have not been granted to use your camera and ' +
                'microphone, you need to allow the page access to your devices in ' +
                'order for the demo to work.', error.name);
        }
        this.errorMsg("getUserMedia error: " + error.name, error);
    };
    /**
     * function to control de error of web rtc
     * @param msg
     * @param error
     */
    ProfilePage.prototype.errorMsg = function (msg, error) {
        var errorElement = document.querySelector('#errorMsg');
        errorElement.innerHTML += "<p>" + msg + "</p>";
        if (typeof error !== 'undefined') {
            console.error(error);
        }
    };
    ;
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.video = window.video = document.querySelector('video');
        if (this.Platform.is('cordova')) {
            this.nativeStorage.getItem('imgSource').then(function (res) {
                if (res) {
                    _this.myPhoto;
                }
                else {
                    _this.myPhoto = 'assets/imgs/photo-camera.png';
                }
            }, function (err) { return _this.myPhoto = 'assets/imgs/photo-camera.png'; });
        }
        else {
            this.isCordova = true;
            this.myPhoto = 'assets/imgs/user.png';
        }
    };
    ProfilePage.prototype.goToUsers = function () {
        this.navCtrl.push("UsersPage");
    };
    ProfilePage.prototype.goToHelp = function () {
        this.navCtrl.push("HelpPage");
    };
    ProfilePage.prototype.goToNotifications = function () {
        this.navCtrl.push("NotificationsPage");
    };
    ProfilePage.prototype.goToMyList = function () {
        this.navCtrl.push("MylistPage");
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push("SettingsPage");
    };
    ProfilePage.prototype.goToAboutUs = function () {
        if (this.Platform.is('cordova')) {
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
            this.streamingMedia.playVideo("https://firebasestorage.googleapis.com/v0/b/cvivo-84315.appspot.com/o/C-VIVO%20introducci%C3%B3n%20v2.mp4?alt=media&token=c3610c01-6b2c-4c47-b009-396c513b4899", options);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_us_about_us__["a" /* AboutUsPage */]);
        }
    };
    ;
    ProfilePage.prototype.openCamera = function () {
        var _this = this;
        if (this.Platform.is('cordova')) {
            var loading = this.loadingCtrl.create({
                spinner: "bubbles",
                content: "Cargando..."
            });
            var options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                allowEdit: true,
                targetWidth: 100,
                targetHeight: 100
            };
            // Abrir camara para tomar foto
            this.camera.getPicture(options).then(function (imageData) {
                // Codificar a base64 la foto tomada
                _this.base64.encodeFile(imageData).then(function (res) {
                    loading.present();
                    var imageBase64 = res;
                    // Obtener el UID del usuario desde firebase para posteriromente guardar foto en base de datos con el nombre
                    _this.db.collection('users').doc(_this.uid).get().subscribe(function (doc) {
                        // Guardar en BD la foto {name:'',base64:''} 
                        _this.db.collection('photos').doc(_this.uid).set({ name: doc.data().name, base64: res })
                            .then(function (res) {
                            loading.dismiss();
                            _this.showAlert('Tu foto se ha guardado', 'Bien');
                            _this.myPhoto = _this._DomSanitizationService.bypassSecurityTrustResourceUrl(imageBase64);
                            _this.events.publish('user:photoChanged', imageBase64);
                        })
                            .catch(function (err) { return _this.showAlert(err, 'Error'); });
                    }, function (err) { _this.showAlert(err, 'Error users'); loading.dismiss(); });
                });
                _this.nativeStorage.setItem('imgSource', imageData);
            }, function (err) { _this.showAlert('err', 'Error de camara'); loading.dismiss(); });
        }
    };
    ;
    /**
     * Funcion  que se ejecuta cuando se selecciona una imagen desde web en el input file
     * @param $event recibe el target para obtener el "file"
     */
    ProfilePage.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    /**
     * Funcion que sirve para leer el la foto seleccionada y convertirla en base 64 para poder almacenalra en BD
     * @param inputValue
     */
    ProfilePage.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.image = myReader.result;
            _this.db.collection('users').doc(_this.uid).get().subscribe(function (doc) {
                _this.colectionName = doc.data().name;
                _this.db.collection('photos', function (ref) { return ref.where('name', '==', _this.colectionName); }).stateChanges().subscribe(function (res0) {
                    if (res0.length > 0) {
                        _this.db.collection('photos').doc(res0[0].payload.doc.id).set({ base64: _this.image, name: _this.colectionName }).then(function () {
                            _this.showAlert('Tu foto se ha guardado', 'Bien');
                            _this.events.publish('user:photoChanged', _this.image);
                            _this.myPhoto = _this.image;
                            return;
                        }, function (err) { return _this.showAlert('Tu foto no se guardó ', 'Error'); });
                    }
                    else {
                        _this.db.collection('photos').add({ base64: _this.image, name: _this.colectionName }).then(function () {
                            _this.showAlert('Tu foto se ha guardado', 'Bien');
                            _this.events.publish('user:photoChanged', _this.image);
                            _this.myPhoto = _this.image;
                            return;
                        }, function (err) { return _this.showAlert('Tu foto no se guardó ', 'Error'); });
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        };
        myReader.readAsDataURL(file);
    };
    ;
    /**
     * Alerta personalizada
     * @param message
     * @param title
     */
    ProfilePage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    /**
     * Slair de sesion en firebase
     */
    ProfilePage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__home_home__["a" /* HomePage */]);
    };
    ProfilePage.prototype.parrilla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__coming_soon_coming_soon__["a" /* ComingSoonPage */]);
    };
    ProfilePage.prototype.buscar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__search_search__["a" /* SearchPage */]);
    };
    ProfilePage.prototype.perfil = function () {
        this.navCtrl.push(ProfilePage_1);
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ;
    ProfilePage.prototype.terminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__terms_terms__["a" /* TermsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('snapShotCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], ProfilePage.prototype, "canvast", void 0);
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\profile\profile.html"*/'<ion-header no-border>\n\n    <ion-grid>\n\n      <ion-row class="padTitle">\n\n        <ion-col col-12 col-lg-4>\n\n                <ion-navbar>  \n\n                  <ion-item  no-lines>\n\n                      <ion-avatar item-start>               \n\n                        <img [src]="myPhoto">\n\n                      </ion-avatar>\n\n                      <h2>{{userName}}</h2>       \n\n                    </ion-item>\n\n                </ion-navbar>   \n\n            \n\n        </ion-col>\n\n        <ion-col col-lg-8 [hidden]="menu">\n\n          <div >\n\n            <ion-segment [(ngModel)]="menuhead">\n\n              <ion-segment-button value="home"   class="segmenthead"  (click)="home()"> <ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n              <ion-segment-button value="buscar" class="segmenthead"  (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n              <ion-segment-button value="parrilla" class="segmenthead"(click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n              <ion-segment-button value="perfil"   class="segmenthead" > <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n              <ion-segment-button value="salir"    class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n            </ion-segment>\n\n          </div>         \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    \n\n  </ion-header>\n\n<ion-content padding >\n\n<!-- <ion-header>   \n\n        <ion-navbar>  \n\n          <ion-item  no-lines>\n\n             <ion-avatar item-start>               \n\n               <img [src]="myPhoto">\n\n             </ion-avatar>\n\n             <h2>{{userName}}</h2>       \n\n           </ion-item>\n\n       </ion-navbar>   \n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-list class="top-menu-list">\n\n    <!-- <ion-item (click)="goToNotifications()">\n\n      <ion-icon name="md-notifications" item-start></ion-icon>\n\n      <p>Notifications</p>\n\n    </ion-item> -->\n\n\n\n    <ion-item (click)="goToMyList()">\n\n      <ion-icon name="list-box" item-start></ion-icon>\n\n      <p>Mi lista</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines class="user-menu-list">\n\n\n\n    <!-- Seccion foto de perfil -->\n\n    <ion-item  (click)="profilePhotobtn(handleError)">\n\n        <ion-icon name="camera" item-start color="netflixWhite"  ></ion-icon>\n\n        <p> Foto de perfil</p>\n\n    </ion-item>\n\n    \n\n    <ion-item  [hidden]="!isCordovaWithoutCamera"  >\n\n        <ion-label>Seleccionar foto de perfil</ion-label>\n\n        <br>\n\n        <ion-input type="file" accept="image/*" (change)="changeListener($event)" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item text-center [hidden]="!isCordovaWithCamera">       \n\n            <video id="gum-local" autoplay playsinline width="200px" height="200px" ></video>  \n\n            <button ion-button block round (click)="snapshotButton()"><ion-icon name="camera" ></ion-icon></button>       \n\n      </ion-item>\n\n\n\n      <!-- fin seccion foto de perfil -->\n\n   \n\n\n\n    <ion-item (click)="goToAboutUs()">\n\n        <ion-icon name="body" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Acerca de nosotros</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="terminos()">\n\n        <ion-icon name="clipboard" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Términos y condiciones de uso</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToHelp()">\n\n        <ion-icon name="help-buoy" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Ayuda</p>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <p>Términos y condiciones</p>\n\n    </ion-item> -->\n\n\n\n    <ion-item (click)="signOut()">\n\n        <ion-icon name="log-out" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Cerrar sesión</p>\n\n    </ion-item>\n\n\n\n  </ion-list>  \n\n  \n\n  <canvas #snapShotCanvas [hidden]="true"></canvas>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_7__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 267,
	"./af.js": 267,
	"./ar": 268,
	"./ar-dz": 269,
	"./ar-dz.js": 269,
	"./ar-kw": 270,
	"./ar-kw.js": 270,
	"./ar-ly": 271,
	"./ar-ly.js": 271,
	"./ar-ma": 272,
	"./ar-ma.js": 272,
	"./ar-sa": 273,
	"./ar-sa.js": 273,
	"./ar-tn": 274,
	"./ar-tn.js": 274,
	"./ar.js": 268,
	"./az": 275,
	"./az.js": 275,
	"./be": 276,
	"./be.js": 276,
	"./bg": 277,
	"./bg.js": 277,
	"./bm": 278,
	"./bm.js": 278,
	"./bn": 279,
	"./bn.js": 279,
	"./bo": 280,
	"./bo.js": 280,
	"./br": 281,
	"./br.js": 281,
	"./bs": 282,
	"./bs.js": 282,
	"./ca": 283,
	"./ca.js": 283,
	"./cs": 284,
	"./cs.js": 284,
	"./cv": 285,
	"./cv.js": 285,
	"./cy": 286,
	"./cy.js": 286,
	"./da": 287,
	"./da.js": 287,
	"./de": 288,
	"./de-at": 289,
	"./de-at.js": 289,
	"./de-ch": 290,
	"./de-ch.js": 290,
	"./de.js": 288,
	"./dv": 291,
	"./dv.js": 291,
	"./el": 292,
	"./el.js": 292,
	"./en-SG": 293,
	"./en-SG.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-il": 298,
	"./en-il.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es-us": 303,
	"./es-us.js": 303,
	"./es.js": 301,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./ga": 313,
	"./ga.js": 313,
	"./gd": 314,
	"./gd.js": 314,
	"./gl": 315,
	"./gl.js": 315,
	"./gom-latn": 316,
	"./gom-latn.js": 316,
	"./gu": 317,
	"./gu.js": 317,
	"./he": 318,
	"./he.js": 318,
	"./hi": 319,
	"./hi.js": 319,
	"./hr": 320,
	"./hr.js": 320,
	"./hu": 321,
	"./hu.js": 321,
	"./hy-am": 322,
	"./hy-am.js": 322,
	"./id": 323,
	"./id.js": 323,
	"./is": 324,
	"./is.js": 324,
	"./it": 325,
	"./it-ch": 326,
	"./it-ch.js": 326,
	"./it.js": 325,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ku": 334,
	"./ku.js": 334,
	"./ky": 335,
	"./ky.js": 335,
	"./lb": 336,
	"./lb.js": 336,
	"./lo": 337,
	"./lo.js": 337,
	"./lt": 338,
	"./lt.js": 338,
	"./lv": 339,
	"./lv.js": 339,
	"./me": 340,
	"./me.js": 340,
	"./mi": 341,
	"./mi.js": 341,
	"./mk": 342,
	"./mk.js": 342,
	"./ml": 343,
	"./ml.js": 343,
	"./mn": 344,
	"./mn.js": 344,
	"./mr": 345,
	"./mr.js": 345,
	"./ms": 346,
	"./ms-my": 347,
	"./ms-my.js": 347,
	"./ms.js": 346,
	"./mt": 348,
	"./mt.js": 348,
	"./my": 349,
	"./my.js": 349,
	"./nb": 350,
	"./nb.js": 350,
	"./ne": 351,
	"./ne.js": 351,
	"./nl": 352,
	"./nl-be": 353,
	"./nl-be.js": 353,
	"./nl.js": 352,
	"./nn": 354,
	"./nn.js": 354,
	"./pa-in": 355,
	"./pa-in.js": 355,
	"./pl": 356,
	"./pl.js": 356,
	"./pt": 357,
	"./pt-br": 358,
	"./pt-br.js": 358,
	"./pt.js": 357,
	"./ro": 359,
	"./ro.js": 359,
	"./ru": 360,
	"./ru.js": 360,
	"./sd": 361,
	"./sd.js": 361,
	"./se": 362,
	"./se.js": 362,
	"./si": 363,
	"./si.js": 363,
	"./sk": 364,
	"./sk.js": 364,
	"./sl": 365,
	"./sl.js": 365,
	"./sq": 366,
	"./sq.js": 366,
	"./sr": 367,
	"./sr-cyrl": 368,
	"./sr-cyrl.js": 368,
	"./sr.js": 367,
	"./ss": 369,
	"./ss.js": 369,
	"./sv": 370,
	"./sv.js": 370,
	"./sw": 371,
	"./sw.js": 371,
	"./ta": 372,
	"./ta.js": 372,
	"./te": 373,
	"./te.js": 373,
	"./tet": 374,
	"./tet.js": 374,
	"./tg": 375,
	"./tg.js": 375,
	"./th": 376,
	"./th.js": 376,
	"./tl-ph": 377,
	"./tl-ph.js": 377,
	"./tlh": 378,
	"./tlh.js": 378,
	"./tr": 379,
	"./tr.js": 379,
	"./tzl": 380,
	"./tzl.js": 380,
	"./tzm": 381,
	"./tzm-latn": 382,
	"./tzm-latn.js": 382,
	"./tzm.js": 381,
	"./ug-cn": 383,
	"./ug-cn.js": 383,
	"./uk": 384,
	"./uk.js": 384,
	"./ur": 385,
	"./ur.js": 385,
	"./uz": 386,
	"./uz-latn": 387,
	"./uz-latn.js": 387,
	"./uz.js": 386,
	"./vi": 388,
	"./vi.js": 388,
	"./x-pseudo": 389,
	"./x-pseudo.js": 389,
	"./yo": 390,
	"./yo.js": 390,
	"./zh-cn": 391,
	"./zh-cn.js": 391,
	"./zh-hk": 392,
	"./zh-hk.js": 392,
	"./zh-tw": 393,
	"./zh-tw.js": 393
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 629;

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_CategoriesService__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_TvShowsService__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coming_soon_coming_soon__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, categoriesService, moviesService, speechRecognition, tvShowsService, Platform, vimeoService, loadingCtrl, app, zone) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.categoriesService = categoriesService;
        this.moviesService = moviesService;
        this.speechRecognition = speechRecognition;
        this.tvShowsService = tvShowsService;
        this.Platform = Platform;
        this.vimeoService = vimeoService;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.zone = zone;
        this.categories = [];
        this.loaded = false;
        this.isSearching = false;
        this.searchDone = false;
        this.searchValue = "";
        this.searchItems = [];
        this.matches = [];
        this.icon = '';
        this.recentlyAddedMovies = [];
        this.menu = true;
        this.menuhead = 'buscar';
        this.icon = this.Platform.is('cordova') == true ? 'md-mic' : 'search';
        Platform.ready().then(function () {
            _this.width = Platform.width();
            _this.heigth = Platform.height();
            console.log(_this.width);
            console.log(_this.heigth + 'height');
            if (_this.width <= 992) {
                _this.menu = true;
            }
            else {
                _this.menu = false;
            }
        });
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SearchPage");
        this.listenForSearchInput(500);
        this.getCategories();
    };
    ;
    SearchPage.prototype.startListening = function () {
        var _this = this;
        this.speechRecognition.requestPermission()
            .then(function () {
            var options = {
                language: 'es-Es',
                matches: 1,
                showPartial: true,
                showPopup: true
            };
            _this.speechRecognition.startListening(options)
                .subscribe(function (matches) {
                console.log(matches);
                _this.matches = matches;
                _this.searchValue = matches[0];
                _this.focusMethod();
                _this.searchbar.setFocus();
                _this.search(matches[0]);
            }, function (onerror) { return console.log(onerror); });
        }, function () { return console.log(onerror); });
    };
    ;
    SearchPage.prototype.focusMethod = function () {
        document.getElementById('searchInput').focus();
    };
    SearchPage.prototype.listenForSearchInput = function (timeoutTime) {
        var _this = this;
        var searchInput = (document.getElementById("searchInput"));
        var timeout = null;
        searchInput.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.search(_this.searchValue);
            }, timeoutTime);
        };
    };
    ;
    SearchPage.prototype.search = function (searchValue) {
        var _this = this;
        this.isSearching = true;
        if (searchValue !== "" && searchValue.length >= 3) {
            this.searchItems = [];
            // Search movies first /////////////////////////////
            this.vimeoService.getAllVideos().subscribe(function (result) {
                var videos = result;
                videos.forEach(function (item) {
                    if (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                        var video = new __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                        video.name = item.name;
                        video.picture = item.files[2].link;
                        video.description = item.description;
                        video.detailsPicture = item.pictures.sizes[3].link;
                        video.movieId = item.uri.split('/')[2];
                        _this.searchItems.push(video);
                    }
                });
                _this.loaded = true;
            }, function (err) { return console.log(err); });
            ////////////////////////////////
        }
        else if (searchValue === "") {
            this.clearSearch();
        }
    };
    SearchPage.prototype.onClear = function (event) {
        this.clearSearch();
    };
    SearchPage.prototype.clearSearch = function () {
        this.isSearching = false;
        this.searchDone = false;
        this.searchItems = [];
    };
    SearchPage.prototype.goToSearchItem = function (searchItem) {
        this.navCtrl.push("MovieDetailsPage", { movieId: searchItem });
    };
    SearchPage.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().then(function (result) {
            _this.categories = result.categories;
            _this.loaded = true;
        });
    };
    SearchPage.prototype.openCategory = function (category) {
        this.navCtrl.push("GridListPage", { category: category });
    };
    ////////////////////////////////////////////////////////////////////////////////
    SearchPage.prototype.getRecentlyAddedMovies = function () {
    };
    SearchPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    SearchPage.prototype.parrilla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__coming_soon_coming_soon__["a" /* ComingSoonPage */]);
    };
    SearchPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__profile_profile__["a" /* ProfilePage */]);
    };
    SearchPage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_11_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_12__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Searchbar */])
    ], SearchPage.prototype, "searchbar", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-search",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\search\search.html"*/'<!-- <ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-row>\n\n      <ion-col col-10>\n\n        <ion-searchbar id="searchInput"  #searchbar [(ngModel)]="searchValue" placeholder="Buscar" (ngModelChange)="onChangeModel($event)" \n\n                      (ionClear)="onClear($event)" (ionInput)="onInput($event)"  animated=true></ion-searchbar>\n\n      </ion-col>\n\n\n\n      <ion-col col-2 text-center>\n\n        <button ion-button clear item-end (click)="startListening()">\n\n          <ion-icon name={{icon}}></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n<ion-header no-border>\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 col-lg-2 >\n\n          <ion-navbar align-title="center" transparent >\n\n            <ion-title>\n\n              <img src="assets/imgs/netflix-logo.png">\n\n            </ion-title>   \n\n          </ion-navbar>\n\n        </ion-col>\n\n        <ion-col col-lg-10 [hidden]="menu">\n\n          <div>\n\n            <ion-segment [(ngModel)]="menuhead">\n\n              <ion-segment-button value="home"     class="segmenthead" (click)="home()"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n              <ion-segment-button value="buscar"   class="segmenthead"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n              <ion-segment-button value="parrilla" class="segmenthead" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n              <ion-segment-button value="perfil"   class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n              <ion-segment-button value="salir"    class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n            </ion-segment>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-12 col-lg-12>\n\n          <ion-navbar>\n\n              <ion-row>\n\n                <ion-col col-10>\n\n                  <ion-searchbar id="searchInput"  #searchbar [(ngModel)]="searchValue" placeholder="Buscar" (ngModelChange)="onChangeModel($event)" \n\n                                (ionClear)="onClear($event)" (ionInput)="onInput($event)"  animated=true></ion-searchbar>\n\n                </ion-col>          \n\n                <ion-col col-2 text-center>\n\n                  <button ion-button clear item-end (click)="startListening()">\n\n                    <ion-icon name={{icon}}></ion-icon>\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-navbar>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  \n\n  <ion-row *ngIf="!loaded || (isSearching && !searchDone)">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list *ngIf="loaded && !isSearching" no-lines>\n\n    <ion-item ion-item *ngFor="let category of categories" (click)="openCategory(category)" clear text-center>\n\n      {{category.name}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row *ngIf="isSearching && searchItems.length > 0" style="padding-left: 0px;">\n\n    <ion-col col-4 col-lg-1 *ngFor="let searchItem of searchItems">\n\n      <img src="{{searchItem.detailsPicture}}" (click)="goToSearchItem(searchItem)" style="width:100%">\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="isSearching && searchDone && searchItems.length <= 0">\n\n    <ion-col text-center>\n\n      <img class="demo-image" src="assets/netflix-icon.png">\n\n      <p class="demo-message">No results.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_CategoriesService__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_6__services_TvShowsService__["a" /* TvShowsService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], SearchPage);
    return SearchPage;
}());

;
//# sourceMappingURL=search.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\terms\terms.html"*/'<ion-header no-border>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-2 >\n\n        <ion-navbar align-title="center" transparent >\n\n          <ion-title>\n\n            <img src="assets/imgs/netflix-logo.png">\n\n          </ion-title>   \n\n        </ion-navbar>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="content">\n\n    <h1><b>Términos de uso de C-VIVO</b></h1> <br>\n\n\n\n    Bienvenido a C-VIVO proporcionado por C-VIVO ("C-VIVO", "nosotros"). Nos complace ofrecerte acceso a nuestro Servicio (como se define más abajo), sujeto a estos términos y condiciones \n\n    (los "Términos de Servicio") y a la Política de Privacidad correspondiente de C-VIVO. Al acceder y utilizar el Servicio, expresas tu consentimiento, acuerdo y entendimiento de los \n\n    Términos de Servicio y la Política de Privacidad. Si no estás de acuerdo con los Términos de Servicio o la Política de Privacidad, no utilices el Servicio.<br><br>\n\n    \n\n    C-VIVO posee y opera el sitio cvivo.digital y la App C-VIVO. Te ofrecemos la posibilidad de aprender diversos temas a través de nuestros servicios en línea (chat, streamings, etc.) \n\n    y de la funcionalidad del sitio.<br><br>\n\n    \n\n    Lo siguiente es un breve resumen de determinados términos y condiciones que se incluyen en estos Términos de Servicio. No obstante, este resumen se te proporciona únicamente para tu \n\n    comodidad; por lo tanto, debes leer todos los Términos de Servicio antes de aceptarlos.<br><br>\n\n\n\n    <ul type="circle">\n\n      <li><p> El Servicio sólo funciona con tu computadora personal y dispositivos compatibles.</p></li><br>\n\n      <li><p> Para utilizar el Servicio, deberás registrarte y abrir una Cuenta.</p></li><br>\n\n      <li><p> Nos reservamos el derecho a realizar actualizaciones periódicas del Servicio, con o sin previo aviso.</p></li><br>\n\n      <li><p> El Servicio incluye funciones relacionadas con la seguridad y la manipulación indebida que, en caso de activarse, podrían ocasionar que el contenido previamente disponible para tú uso, \n\n        deje de estarlo a partir de entonces.</p></li><br>\n\n      <li><p> Debes brindar información correcta, actual y completa. Usted tiene la responsabilidad de actualizar y mantener la veracidad y exactitud de dicha información. Usted acepta que tomemos \n\n        medidas para verificar la información que nos brinda, incluyendo información de contacto de un padre o tutor.</p></li><br>    \n\n      <li><p>Al utilizar el Servicio, tú autorizas la recopilación, procesamiento y utilización de toda aquella información relacionada con el uso que haces del Servicio, la cual se recopila y\n\n        maneja de conformidad con los términos de nuestra Política de Privacidad. Por lo tanto, comprendes que podrás encontrar contenidos que te resulten objetables.</p></li><br>\n\n    </ul> \n\n\n\n    Nos reservamos el derecho, a nuestra discreción, de cambiar estos Términos de Servicio en cualquier momento, sin previo aviso. En caso de algún cambio sustancial, haremos todos\n\n    los esfuerzos comercialmente razonables para notificártelo y obtener tu consentimiento antes de implementar dichos cambios.<br><br>\n\n    \n\n    C-VIVO renuncia, en la máxima medida permitida por la ley, a determinadas declaraciones y garantías relacionadas con el servicio, y limita su responsabilidad con respecto a las mismas.<br><br>\n\n    \n\n    C-VIVO es un repositorio de contenido educativo que permite a nuestra comunidad acceder a contenido multimedia (el “contenido de C-VIVO”), transmitidos a través de internet a cualquier \n\n    dispositivo conectado a internet. <br><br>\n\n    \n\n    Los presentes Términos de uso rigen la utilización que hagas de nuestro servicio. Según se utilice en estos Términos de uso, las frases “el servicio de C-VIVO”, “nuestro servicio” o \n\n    “el servicio” se refieren al servicio brindado por C-VIVO para descubrir y ver contenido de C-VIVO, incluidas todas las características y funcionalidades, el sitio web y las interfaces \n\n    de usuario, además de todo el contenido y software asociado a nuestro servicio.<br><br>\n\n\n\n    <h3><b>1. Definiciones</b></h3><br>\n\n\n\n    <b>"Afiliadas":</b> significa C-VIVO y sus casas matrices directas e indirectas, agentes, empleados, licenciadores, distribuidores, socios comerciales, proveedores y afiliadas (y cada uno de \n\n    los respectivos ejecutivos, directores, empleados y agentes de las entidades anteriores).<br><br>\n\n    <b>"Cuenta de C-VIVO":</b> significa una cuenta de usuario registrada en el Servicio.<br><br>\n\n    <b>"Contenido de C-VIVO":</b> significa la música, imágenes, texto y otros materiales que puedes obtener o a los cuales puede acceder en forma digital desde el Servicio, cuyo contenido es \n\n    propiedad de C-VIVO o de terceros licenciadores.<br><br>\n\n    <b>"Política de Privacidad":</b> significa la Política de Privacidad de C-VIVO que podrá ser enmendada, modificada o revisada en forma ocasional por C-VIVO como se indica en los términos \n\n    de la Política de Privacidad.<br><br>\n\n    <b>"Información de Registro":</b> significa la información que tú proporcionas a C-VIVO o al Servicio cuando te registras para una cuenta de C-VIVO y durante el proceso de instalación \n\n    que lleva a cabo para utilizar el Servicio (incluyendo un nombre único de miembro (usuario), una contraseña y tu dirección válida de correo electrónico).<br><br>\n\n    \n\n      \n\n    <h3><b>2. Permiso para utilizar el Servicio: reserva de derechos.</b></h3><br><br>\n\n    \n\n    Al aceptar estos Términos de Servicio, se te concede un derecho limitado, no exclusivo, intransferible y no sub-licenciable, para entrar, acceder y utilizar el Servicio exclusivamente\n\n    para uso personal y no comercial. Todos los derechos que no se te conceden expresamente en estos Términos de Servicio, están reservados por C-VIVO y sus licenciadores, según corresponda.\n\n    Aceptas que este permiso es para tu uso personal, no comercial y que nadie más que tú va a utilizar el Servicio. No tienes derechos para copiar o reproducir en todo o en parte alguna \n\n    porción del Servicio, incluyendo sin que ello implique limitación alguna, el contenido de C-VIVO. Aparte de la licencia limitada no tienes ningún otro derecho, título ni participación\n\n    en el Servicio. Entiendes y reconoces que, en todas las circunstancias, tus derechos con respecto al Servicio estarán limitados por los derechos de autor o las leyes de propiedad \n\n    intelectual pertinentes y los presentes Términos de Servicio.<br><br>\n\n\n\n    Los Servicios de C-VIVO pueden incluir contenidos u otros materiales proporcionados por C-VIVO y terceros (“Contenidos”). En las relaciones entre tú y nosotros, nosotros poseemos \n\n    todos los derechos de los Servicios y sus Contenidos. Nada te cede derechos sobre los Servicios de la C-VIVO ni sus Contenidos, excepto según lo establecido en estos Términos, \n\n    incluyendo todos los Términos Adicionales correspondientes.<br><br>\n\n\n\n    <h3><b>3. Acceso</b></h3><br><br>\n\n    Todo acceso deberá hacerse por medio de un correo con dominio “@cun.edu.co”.<br><br>\n\n    \n\n    <h3><b>4. Servicio de C-VIVO</b></h3><br><br>\n\n    \n\n    <b>4.1.</b> El servicio de C-VIVO y todo el contenido visto en él son sólo para uso personal, no comercial, y no debe compartirse con personas que no sean miembros de tu hogar. \n\n    Te otorgamos un derecho limitado, no exclusivo e intransferible para acceder al servicio de C-VIVO con el propósito de ver contenido de C-VIVO a través de nuestro servicio de streaming.\n\n      Más allá de esto, no se te transferirá ningún otro derecho, título o interés. Tú aceptas que no usarás el servicio para presentaciones públicas.<br><br>\n\n    \n\n    <b>4.2.</b> En C-VIVO actualizamos el servicio continuamente, incluido tú catálogo de contenido. Además, probamos regularmente varios aspectos de nuestro servicio, incluidos nuestro sitio web, \n\n    las interfaces de usuario, las funciones promocionales y la disponibilidad de contenido de C-VIVO. <br><br>\n\n    \n\n    <b>4.4.</b> Aceptas usar el servicio de C-VIVO, incluidas todas las características y funcionalidades asociadas con éste, bajo conformidad con todas las leyes, normas y reglamentaciones\n\n    vigentes, o cualquier otra restricción al uso del servicio o sus contenidos. Aceptas no archivar, reproducir, distribuir, modificar, mostrar, ejecutar, publicar, otorgar licencias, \n\n    crear obras derivadas basadas en el servicio, u ofrecer en venta, o usar (a excepción de que se autorice explícitamente en estos Términos de uso) contenido e información contenida \n\n    en u obtenida del servicio de C-VIVO. También aceptas: no evitar, eliminar, alterar, desactivar, interferir o burlar las protecciones de contenido del servicio de C-VIVO; no \n\n    usar ningún robot, spider, scraper u otra forma automatizada para acceder al servicio de C-VIVO; ni descompilar, realizar ingeniería inversa, desarmar el software u otro producto\n\n    o proceso a los que se acceda a través del servicio de C-VIVO; introducir de alguna manera un código o producto o manipular el contenido del servicio de C-VIVO; o usar método \n\n    alguno de análisis, extracción u obtención de datos. Asimismo, te comprometes a no subir, publicar, enviar por email ni transmitir de cualquier otra forma ningún material diseñado \n\n    para interrumpir, destruir o limitar la funcionalidad del software de computación, hardware o equipos de telecomunicaciones asociados con el servicio de C-VIVO, incluido material \n\n    que contenga virus de software o cualquier otro código, archivos o programas. Podríamos terminar o restringir tu uso de nuestro servicio si violas cualesquiera de los Términos de \n\n    uso o usas el servicio de forma ilegal o fraudulenta.<br><br>\n\n\n\n      \n\n    <b>4.5.</b> La calidad de la imagen del contenido de C-VIVO puede variar de dispositivo a dispositivo y puede verse afectada por diversos factores, tales como la ubicación, el ancho de banda \n\n    disponible o la velocidad de la conexión a internet. La disponibilidad del contenido en alta definición (HD), depende de tu servicio de internet y del dispositivo en uso. La velocidad \n\n    mínima de conexión para la calidad SD es de 1 Mbps. Sin embargo, te recomendamos una conexión más rápida para mejorar la calidad de video. Se recomienda una velocidad de descarga de, \n\n    al menos, 5 Mbps por stream para recibir contenido HD (definido como una resolución de 720p o más alta). Todos los cargos de acceso a internet correrán por tu cuenta. Solicita a tu \n\n    proveedor de internet información acerca de los posibles cargos de consumo de datos por uso de internet. El tiempo que lleva comenzar a ver contenido de C-VIVO variará según diversos \n\n    factores, incluido el lugar donde te encuentras, el ancho de banda disponible en ese momento y la configuración de tu dispositivo listo para C-VIVO.<br><br>\n\n    \n\n    <b>4.6.</b> El software de C-VIVO es desarrollado por C-VIVO o a pedido de C-VIVO, y fue diseñado para permitir ver contenido a través de dispositivos listos para C-VIVO. Este software puede \n\n    variar según el dispositivo y el medio, y la funcionalidad y las funciones también pueden variar de un dispositivo a otro. Reconoces que el uso del servicio puede requerir software de\n\n    terceros que esté sujeto a licencias de terceros. Aceptas que puedes recibir automáticamente versiones actualizadas del software de C-VIVO o de terceros relacionados.<br><br>\n\n\n\n    <b>4.7.</b>Verificación de cumplimiento. En C-VIVO nos reservamos el derecho de investigar posibles violaciones de estos Términos de Uso. En C-VIVO también nos reservamos el derecho a negar \n\n    el acceso a cualquier persona que a nuestro criterio haya violado estos Términos de Uso.<br><br>\n\n      \n\n      \n\n    <h3><b>5. Contraseñas y acceso a la cuenta.</b></h3><br><br>\n\n    \n\n    El usuario que creó la cuenta de C-VIVO tiene acceso y control sobre la cuenta de C-VIVO y sobre los dispositivos listos para C-VIVO que se usan para acceder a nuestro servicio y es \n\n    responsable de cualquier actividad que ocurra en la cuenta de C-VIVO. Para mantener el control sobre la cuenta y evitar que alguien acceda a la cuenta, el Titular de la cuenta debería\n\n    mantener el control sobre los dispositivos listos para C-VIVO que se utilizan para acceder al servicio y no revelar a nadie la contraseña. Es tu responsabilidad actualizar y mantener \n\n    la exactitud de la información personal que nos brindas respecto de tu cuenta. Podemos decidir cancelar tu cuenta o suspenderla para protegerte a ti, o a C-VIVO contra el robo de \n\n    identidad u otra actividad fraudulenta.<br><br>\n\n    \n\n      <h3><b>6. Renuncia a la acción colectiva.</b></h3><br><br>\n\n    \n\n    En la medida en que las leyes aplicables lo permitan, tú y C-VIVO acuerdan que cada uno puede presentar reclamos contra la otra parte sólo en nombre propio, y no como actora o parte \n\n    de un grupo en una acción colectiva o representativa. Además, si la ley aplicable lo permite, a menos que tanto tú como C-VIVO acuerden lo contrario, el tribunal no podrá acumular las \n\n    causas de más de una persona con su causa o, de lo contrario, no podrá entender en ninguna acción representativa o colectiva.<br><br>\n\n\n\n    <h3><b>7. Misceláneas</b></h3><br><br>    \n\n      \n\n    <b>7.1.</b> Ley vigente. Estos Términos de uso se regirán e interpretarán de conformidad con las leyes de Colombia.<br><br>\n\n\n\n    <b>7.2.</b> Material no solicitado. En C-Vivo no aceptamos materiales ni ideas no solicitados para nuestro contenido, y no somos responsables por la similitud entre los contenidos o la \n\n    programación de cualquier medio con los materiales o ideas transmitidos a C-VIVO.<br><br>\n\n    \n\n    <b>7.3.</b> Servicio al cliente. Si necesitas obtener más información sobre nuestro servicio y sus funciones, o si necesitas asistencia con tu cuenta, crea un ticket en la sección “Ayuda”\n\n    y nos contactaremos contigo. En el caso en que haya un conflicto entre estos Términos de uso y la información recogida por el Servicio al cliente u otras secciones de nuestro sitio web,\n\n    estos Términos de uso serán los que regirán.<br><br>\n\n    \n\n    <b>7.4.</b> Continuación de vigencia. Si alguna de las disposiciones de estos Términos de uso es declarada nula, ilegal o inaplicable, la validez, legalidad y aplicación de las restantes \n\n    disposiciones continuarán en plena vigencia.<br><br>\n\n    \n\n    <b>7.5.</b> Cambios a los Términos de uso y sesión. C-VIVO puede cambiar estos Términos de uso cuando sea necesario. Podemos ceder o transferir nuestro acuerdo contigo, incluidos nuestros \n\n    derechos asociados y nuestras obligaciones en cualquier momento y tú aceptas cooperar con nosotros en relación con dicha cesión o transferencia. Especificar en qué casos esto puede \n\n    cambiar<br><br>     \n\n\n\n    <b>7.6.</b> Comunicaciones electrónicas. Te enviaremos la información relativa a tu cuenta (por ejemplo, autenticación de correo electrónico, los cambios de contraseña, los mensajes de \n\n    confirmación, los avisos) de manera electrónica únicamente, por ejemplo, mediante emails a la dirección de email que proporcionaste durante el registro. <br><br>\n\n      \n\n\n\n    <h3><b>8. Limitaciones del contenido</b></h3><br><br>\n\n    \n\n      Durante el tiempo que el Contenido esté disponible en el Sitio, tu podrás ver el Contenido tantas veces como lo desees, pero una vez que el contenido ya no esté disponible en el sitio,\n\n      ya no tendrás la capacidad de acceder a dicho contenido. C-VIVO se reserva el derecho, a su entera discreción, de deshabilitar el acceso a cualquier contenido en cualquier momento. <br><br>\n\n    \n\n    <h3><b>9. Fuerza mayor</b></h3><br><br>\n\n\n\n    C-VIVO no tendrá ninguna responsabilidad por cualquier retraso o incumplimiento de cualquier obligación bajo el presente si el retraso o incumplimiento es ocasionado por fuerza mayor,\n\n    el cual deberá tratarse de cualquier acontecimiento de la naturaleza, tormenta, incendio, accidentes, huelga, interrupción de energía, falla de un satélite, conflicto laboral, guerra, \n\n    emergencia nacional, una acción gubernamental, u otra causa fuera de su control.<br><br>\n\n    \n\n    <h3><b>10. Restricciones</b></h3><br><br>\n\n    \n\n    El uso del Servicio, por tu parte, está sujeto a las siguientes restricciones:<br><br>\n\n    \n\n    <b>10.1. Normas y políticas de C-VIVO</b><br><br>\n\n    \n\n    Al utilizar el Servicio, estarás sujeto a cualquier otra directriz o norma aplicable a los servicios y características específicas que se publiquen en forma ocasional \n\n    (las "Directrices"). Todas las Directrices se incorporan mediante referencia a estos Términos de Servicio. Estas Directrices se aplicarán en forma general de manera no \n\n    discriminatoria a todos los usuarios finales del Servicio y podrían incluir, por ejemplo, actualizaciones, modificaciones y reinstalaciones del software requeridas o automáticas, \n\n    y la obtención de parches disponibles para, entre otras razones, abordar cuestiones de seguridad, interoperabilidad y/o funcionamiento. Estas actualizaciones, modificaciones y \n\n    operaciones similares pueden realizarse en forma periódica o cuando sea necesario, sin previo aviso. Además, tú entiendes que determinados aspectos del Servicio son capaces de \n\n    controlarse a sí mismos y pueden crear un sistema especial de identificación con fines relacionados con la seguridad y la detección de manipulaciones indebidas. Tu acceso a \n\n    determinadas aplicaciones está sujeto a restricciones por motivos de seguridad o según las políticas de protección de Contenido de C-VIVO consistentemente aplicadas. Entiendes y\n\n    aceptas que es probable que el Contenido de C-VIVO que anteriormente estaba disponible para tu uso, no se encuentre disponible a partir de ese momento.<br><br>\n\n      \n\n    <b>10.2 Conducta prohibida</b><br><br>\n\n    \n\n    No utilizarás el Servicio para transmitir, mostrar, ejecutar o de algún modo poner a disposición mensajes, contenidos o materiales (i) que sean ilegales, obscenos, amenazantes, \n\n    masivos no solicitados o "spam", difamatorios, invasores de la privacidad, o (ii) que violen o infrinjan derechos de autor, marcas registradas, patentes, secretos comerciales y otros \n\n    derechos de propiedad intelectual, derechos de privacidad o publicidad, reglamentos o estatutos de comunicaciones, o cualesquiera otras leyes, incluyendo, sin limitación, las leyes \n\n    sobre difamación, acoso, obscenidad y pornografía; (iii) que constituyan campañas políticas o solicitudes de venta o marketing o que contengan virus informáticos u otro código de \n\n    computadora destinado a interferir con la funcionalidad de los sistemas de computadoras, o (iv) que de alguna manera perjudiquen a los menores. Convienes en no interrumpir ni intentar \n\n    interrumpir la operación o el Servicio de ninguna manera. Durante los Cursos (y en general en relación con todo el contenido), se espera que los estudiantes se comporten de una manera\n\n    adecuada y respetuosa, teniendo en cuenta un alto estándar de educación y progresión de carrera para con las otras personas. <br><br>\n\n    \n\n    Cualquier violación a lo aquí dispuesto, estará sujeta a la revisión y las acciones pertinentes que C-VIVO decida adoptar, a su sola consideración e inclusive proceder al derecho de \n\n    Terminar el Servicio. Además, no podrás utilizar una dirección de correo electrónico falsa o de algún modo engañar a otros miembros en cuanto a su identidad o al origen de un mensaje \n\n    o contenido.<br><br>\n\n    \n\n    <b>10.3. Restricción sobre el uso relacionado con el Servicio<br><br></b>\n\n    \n\n    El Servicio incluye componentes de seguridad por lo que se aplican normas y políticas especiales. No deberás intentar (ni apoyar los intentos de otros) eludir, aplicar ingeniería inversa,\n\n    descifrar, descompilar, desmontar o de algún modo modificar, alterar o interferir con ningún aspecto del Servicio. No podrás distribuir, intercambiar, modificar, vender o revender, o \n\n    transmitir a cualquier otra persona cualquier parte del Servicio, incluyendo, sin limitación, cualquier texto, imagen o audio, para cualquier propósito empresarial, comercial o público.\n\n    Convienes no copiar, vender, distribuir o de algún modo transferir Contenido de C-VIVO, salvo del modo expresamente permitido en el presente.<br><br>\n\n    \n\n    <b>10.4. Restricción sobre el uso relacionado con la Cuenta de C-VIVO</b><br><br>\n\n   \n\n    Sólo puedes abrir una cuenta de C-VIVO para ti mismo, y no para ninguna otra persona, con sujeción a las disposiciones de la sección relacionada con los requisitos de edad. Tu aceptas \n\n    que no permitirás que otras personas utilicen la Información de Registro y/o la Cuenta de C-VIVO y aceptas que tú eres el único responsable de mantener la confidencialidad y seguridad \n\n    de los mismos. Convienes notificar inmediatamente a C-VIVO cualquier uso no autorizado de tu contraseña y/o Cuenta de C-VIVO.<br><br>\n\n   \n\n    <b>10.5. Restricción sobre el uso relacionado con el Contenido de C-VIVO</b><br><br>\n\n    \n\n    Salvo del modo expresamente aquí permitido, los derechos que se te conceden en virtud del presente no se te confieren ninguno de los siguientes: (a) derechos de reproducción o uso \n\n    promocional en el Contenido de C-VIVO, (b) derechos de celebrar acuerdos con cualquier sistema de difusión que genere ingresos (terrestre, satelital, cable y/u otros canales de \n\n    distribución), (c) derechos de distribuir o redistribuir el Contenido de C-VIVO en aplicaciones de streaming (vía Internet, intranets y/u otras redes), (d) derechos de distribuir a \n\n    otras personas el Contenido de C-VIVO en otros sistemas de distribución de contenido (aplicaciones de audio de pago o audio bajo demanda, etc.) o en medios físicos (discos compactos,\n\n    discos digitales versátiles, chips semiconductores, discos duros, tarjetas de memoria y similares), o (e) derechos de uso comercial, venta, reventa, reproducción, distribución o \n\n    promocional para el Contenido de C-VIVO. Cualquier solución de gestión de derechos digitales que se proporciona con el Contenido de C-VIVO es una parte inseparable del mismo, y no \n\n    podrá eludirse, salvo en la medida permitida por la ley aplicable. Si tú estás en posesión o control de Contenido de C-VIVO, es tu responsabilidad no perder, destruir ni dañar dicho \n\n    contenido.<br><br>\n\n    \n\n    <h3><b>11. Notificaciones especiales</b></h3><br><br>\n\n    \n\n    Como usuario del Servicio, ten en cuenta lo siguiente:<br><br>\n\n    \n\n    <b>11.1. Privacidad.</b><br><br>\n\n    \n\n    Al registrarte en el Servicio, otorgas tu consentimiento para la recopilación y procesamiento de toda la información relacionada con el uso que haces del Servicio, incluyendo la \n\n    Información de Registro. C-VIVO recopila y maneja esta información de conformidad con los términos de la Política de Privacidad, que queda expresamente incorporada en estos Términos \n\n    de Servicio mediante referencia. Al aceptar estos Términos de Servicio, también aceptas la Política de Privacidad la cual está disponible en la pestaña “Perfil” de la App C-VIVO<br><br>\n\n   \n\n    <b>11.2. Exactitud de la información.</b><br><br>\n\n    \n\n    Declaras y garantizas que toda la información que proporcionas a C-VIVO es correcta, completa y vigente, y te comprometes a actualizar dicha información cuando sea necesario. \n\n    También admites que cualquier información que proporciones a C-VIVO no violará ninguna ley o reglamento, ni infringirá los derechos de terceros.<br><br>\n\n    \n\n    <b>11.3 Certificación de residencia y capacidad para celebrar contratos.</b><br><br>\n\n    \n\n    Al abrir una Cuenta en el servicio de C-VIVO, declaras y garantizas a C-VIVO que resides en el territorio que has indicado en tu perfil y que tienes capacidad para celebrar contratos \n\n    de conformidad con las leyes de tu jurisdicción.<br><br>\n\n    Tú eres responsable de cumplir con las leyes locales, siempre y cuando las leyes locales sean aplicables. Aceptas específicamente cumplir con todas las leyes aplicables \n\n    concernientes a la transmisión de datos técnicos en Colombia. <br> <br>\n\n    \n\n    <b>11.4 Naturaleza del Contenido.</b><br><br>\n\n    \n\n    Tu entiendes que al utilizar el Servicio y tener acceso al Contenido de C-VIVO, podrás encontrar materiales que puedes llegar a considerar explícitos, ofensivos o de alguna manera \n\n    objetables. C-VIVO podrá incluir, si se encontrara disponible, información relacionada con calificaciones, tipo de contenido y descripciones, si los propietarios correspondientes del \n\n    Contenido de C-VIVO proporcionaran dicha información. Sin embargo, C-VIVO no es responsable de la exactitud de ese tipo de información. Tú convienes lo siguiente, sin importar si el \n\n    Servicio incluye o no incluye las funciones de control por parte de los padres y sin importar las veces que utiliza dichas funciones: (a) es tu responsabilidad determinar qué Contenido\n\n    de C-VIVO o qué materiales que integran el Servicio cumplen con sus estándares, y (b) bajo ninguna circunstancia, C-VIVO o sus Afiliadas o proveedores de contenido serán de ninguna \n\n    forma responsables de ningún Contenido de C-VIVO o materiales a los que tú tengas acceso. Tú aceptas usar el Servicio a tu propio riesgo y que C-VIVO y sus Afiliadas no tendrán \n\n    responsabilidad alguna frente a ti respecto a cualquier contenido o materiales que incluya el Servicio.<br><br>\n\n    \n\n    <b>11.5. Riesgo de uso.</b><br><br>\n\n    \n\n    Ni C-VIVO ni sus Afiliadas asumirán responsabilidad alguna y no serán responsables por ningún daño o virus que provoque algún daño a tu computadora u otra propiedad como consecuencia \n\n    del acceso, uso, descarga o navegación por el Servicio.<br><br>\n\n    \n\n    <b>11.6 El derecho de C-VIVO a cambiar estos Términos de Servicio.</b><br><br>\n\n    \n\n    C-VIVO se reserva el derecho, a su discreción, de cambiar, modificar, añadir o eliminar partes de estos Términos de Servicio en cualquier momento, Sin darte previo aviso. Todos los \n\n    cambios entrarán en vigor de inmediato. En caso de algún cambio sustancial, haremos todos los esfuerzos comercialmente razonables para notificártelo y obtener tu consentimiento antes \n\n    de implementar dichos cambios. Te recomendamos que consultes estos Términos de Servicio en forma periódica para ver si se han registrado cambios. El uso continuado del Servicio por \n\n    tu parte después de la publicación de dichos cambios implica la aceptación de los mismos.<br><br>\n\n    \n\n    <b>11.7 El derecho de C-VIVO a efectuar cambios al Servicio</b><br><br>\n\n    \n\n  \n\n    C-VIVO puede agregar, cambiar, terminar, remover o suspender cualquier material incorporado al Servicio. Además, C-VIVO y/o los propietarios del Contenido de C-VIVO pueden, en forma \n\n    ocasional, sacar el Contenido de C-VIVO del Servicio sin previo aviso, y C-VIVO podrá en cualquier momento perder el derecho a poner a disposición determinado Contenido de C-VIVO. \n\n    En tal caso, tú ya no podrás obtener ni ver determinado contenido.<br><br>\n\n\n\n    Cada vez que tú accedes al uso de los servicios de C-VIVO, estableces u nuevo acuerdo sobre los términos correspondientes al momento. Podemos modificar estos términos sobre en \n\n    cualquier momento, a nuestra sola discreción, y publicar los cambios, los cuales serán efectivos a partir de los cinco (5) días de notificarlo nosotros a usted o de publicar los\n\n    cambios en los Servicios de la CUN. Su acceso o uso continuado de los Servicios de la CUN luego de publicar nuestros cambios a estos Términos será considerado una aceptación \n\n    irrevocable de estos Términos y sus modificaciones. Usted acepta ser notificado acerca de los cambios a estos Términos mediante publicaciones de actualizaciones en los Servicios de la\n\n    CUN (o en cualquier otra forma de aviso razonable que elijamos).<br><br>\n\n    \n\n    <h3><b>12. Propiedad intelectual</b></h3><br><br>\n\n    \n\n    Secretos comerciales y materiales de propiedad exclusiva: el Servicio contiene y/o incorpora secretos comerciales, inventos patentados (y/o con patente pendiente) y / u otros materiales\n\n    de propiedad exclusiva y propiedad intelectual de C-VIVO y/o sus licenciadores. Todos los derechos de título y propiedad en el Servicio, incluyendo sin que signifique limitación alguna \n\n    el contenido C-VIVO y cualquier copia relacionada con el Servicio y el contenido de C-VIVO, permanecen bajo la propiedad de C-VIVO y sus licenciadores, según corresponda. Tú convienes \n\n    en mantener en forma confidencial aquella información contenida en el Servicio que no sea de dominio público, y no revelar dicha información a terceros sin la aprobación previa por \n\n    escrito de C-VIVO.<br><br>\n\n    \n\n    Los estudiantes no están autorizados para tratar de reconfigurar, descomponer o utilizar ingeniería inversa sobre la página web de C-VIVO, el Servicio y/o el Contenido de C-VIVO.<br><br>\n\n    \n\n    <h3><b>13. Derechos de autor</b></h3><br><br>\n\n    \n\n    El Contenido de C-VIVO y otras obras de autoría que se encuentran en el Servicio, o forman parte del mismo (colectivamente, el "Contenido"), están protegidos por las leyes aplicables de\n\n    derechos de autor y los tratados internacionales de derechos de autor, así como por otras leyes y tratados de propiedad intelectual. El Contenido se licencia, no se vende. Tú no puedes \n\n    realizar copias no autorizadas o utilizar ninguna parte del Contenido, salvo como se especifica en este documento y de conformidad con la legislación aplicable. <br>\n\n    Todos los títulos y derechos de autor del Contenido y del Servicio (incluyendo, entre otros, imágenes, fotografías, animaciones, vídeo, audio, código, artículos, \n\n    texto y "applets", incorporados al Servicio), son propiedad de C-VIVO o sus licenciadores. Tú aceptas cumplir con todas las leyes aplicables sobre protección de \n\n    derechos de autor en relación con el uso del Servicio y del Contenido por tu parte. Además de lo estipulado en estos Términos de Servicio, C-VIVO podrá adoptar \n\n    medidas adecuadas para proteger los derechos de autor en el Contenido.<br><br>\n\n   \n\n\n\n    <h3><b>14. Marcas comerciales</b></h3><br><br>\n\n    \n\n    No puedes utilizar ninguna de las marcas comerciales que se encuentran dentro del Servicio, salvo lo especificado en el presente y de conformidad con la legislación aplicable. No puedes \n\n    copiar, exhibir o utilizar ninguna de las marcas comerciales sin el permiso previo por escrito del propietario. Cualquier uso no autorizado podría violar las leyes de marcas comerciales,\n\n    las leyes de privacidad y publicidad, así como las leyes civiles o penales. <br><br>\n\n   \n\n    <h3><b>15. Derechos de C-VIVO respecto a los materiales que usted publica</b></h3><br><br>\n\n    \n\n    Al enviar mensajes, opiniones, ingresar datos o participar en cualquier otra forma de comunicación a través del Servicio (si así lo permite la C-VIVO), tú declaras que tienes todos los \n\n    derechos para publicar dichos materiales, que estos no violan los derechos de terceros, y que aceptas que C-VIVO puede copiar, sub-licenciar, adaptar, transmitir, ejecutar públicamente \n\n    o exhibir cualquiera de tales contenidos para proporcionar y/o promover el Servicio y/o responder a cualquier requisito legal, demanda o amenaza. Si el uso de tales contenidos por parte\n\n    de C-VIVO explota cualquier derecho de propiedad que tú puedas tener sobre dicho material, tú aceptas que C-VIVO tiene un derecho irrestricto, libre de regalías, no exclusivo y perpetuo\n\n    de hacerlo en todo el mundo. Aceptas que toda pérdida o daño de cualquier tipo que se produzca como consecuencia de la utilización de cualquier mensaje, contenido o material que tú \n\n    cargues, publiques, transmites, exhibas o pongas de algún modo a disposición a través del uso que tú haga del Servicio, es exclusivamente responsabilidad tuya.<br><br>\n\n    \n\n    <h3><b>16. Acción por infracción de los derechos de propiedad intelectual</b></h3><br><br>\n\n    \n\n    Si C-VIVO recibe una notificación alegando que tú estás involucrado en una conducta que viola cualquiera de los derechos de propiedad intelectual de C-VIVO o de tus Afiliadas, o de un\n\n    tercero, o razonablemente sospecha esto, C-VIVO podrá suspender o dar por terminado tu acceso al Servicio, sin previo aviso. Si C-VIVO actúa conforme a esta Sección, la misma no \n\n    tendrá responsabilidad alguna frente a ti, incluso por cualquier cantidad que hayas pagado previamente o cualquier crédito que tengas en el Servicio.<br><br>\n\n    \n\n    <h3><b>17. Términos estándar</b></h3><br><br>\n\n    \n\n    <b>17.1. Recursos</b><br><br>\n\n    \n\n    Tú acuerdas que cualquier uso no autorizado del Servicio y de cualquier tecnología contenida en el mismo podría ocasionar un perjuicio irreparable a C-VIVO para quien una compensación \n\n    por daños y perjuicios monetarios no sería insuficiente. Por lo tanto, en tal caso, C-VIVO tendrá derecho, además de otros recursos disponibles de acuerdo al derecho y en equidad, \n\n    a un desagravio por mandato judicial inmediato en contra tuya y para evitar cualquier uso no autorizado. Nada de lo contenido en esta Sección o en otra parte de estos Términos de \n\n    Servicio se interpretará como que limita los recursos disponibles de conformidad con las reclamaciones legales o de otro tipo que C-VIVO pueda tener bajo una autoridad jurídica\n\n    independiente. Entiendes y convienes en que la cancelación de tu cuenta de C-VIVO es tu único derecho y recurso con respecto a cualquier controversia con C-VIVO.<br><br>\n\n    \n\n     <b>17.2. Indemnización</b><br><br>\n\n    \n\n    Tú convienes defender, indemnizar y eximir de toda responsabilidad a C-VIVO respecto a todas y cualesquiera reclamaciones, pérdidas, daños y perjuicios, responsabilidades, \n\n    deficiencias, sentencias, gravámenes, multas, costas y otros gastos (incluidos los honorarios razonables de abogados) que surjan de, o en relación con, el uso que tú haces del \n\n    Servicio, o cualquier incumplimiento por tu parte de estos Términos de Servicio, y convienes en rembolsar a la C-VIVO, a solicitud, cualquier pérdida, costo o gasto en los que \n\n    incurran a causa de ello.<br><br>\n\n   \n\n    <b>17.3. Plazo; terminación</b><br><br>\n\n   \n\n    El plazo de estos Términos de Servicio se mantendrá en efecto hasta que se dé por terminado, según se describe en el presente. Estos Términos de Servicio y los derechos que tienes a \n\n    acceder, descargar y utilizar el Servicio están sujetos a la terminación inmediata, sin previo aviso, (a) si tú incumples (o C-VIVO sospecha razonablemente que tú has incumplido) \n\n    cualquier disposición de estos Términos de Servicio, o (b) tras la interrupción por parte de la C-VIVO de la difusión o apoyo del Servicio. Si dicha terminación sin previo aviso está \n\n    expresamente prohibida por la legislación aplicable, entonces dicha terminación se producirá tras la notificación de cualquiera de dichos incumplimientos. Tras la terminación, debes \n\n    dejar de utilizar el Servicio, por completo. Si C-VIVO da por terminados estos Términos de Servicio, o suspende tu Cuenta de C-VIVO por cualquiera de las razones expuestas en estos \n\n    Términos de Servicio, C-VIVO no tendrá ninguna obligación ni responsabilidad hacia ti y no te devolverá ningún importe que hayas pagado con anterioridad.<br><br>\n\n    \n\n    <h3><b>18. Notas legales; limitación de responsabilidad</b></h3><br><br>\n\n    \n\n    Entiendes y convienes que el uso del servicio es a tu exclusivo riesgo. Salvo lo expresamente establecido en el presente, el servicio se proporciona "en el estado en que se encuentra" \n\n    y sin garantía de ningún tipo por parte de C-VIVO ni de sus afiliadas, según corresponda, y en la máxima medida permitida por la ley aplicable, C-VIVO expresamente renuncia a todas las \n\n    garantías, ya sea expresas o implícitas, incluidas, entre otras, las garantías implícitas de comercialización, idoneidad para un fin determinado, no infracción y título. Salvo lo \n\n    expresamente establecido en el presente, C-VIVO no garantiza ni hace ninguna declaración sobre el uso o los resultados del uso del servicio con respecto al rendimiento, precisión, \n\n    fiabilidad, seguridad, capacidad, actualidad u otros aspectos. Tú no responsabilizarás a C-VIVO ni a sus afiliadas de ningún daño derivado de su acceso (incluyendo cualquier software o \n\n    sistemas que utilice para acceder) al servicio, incluyendo, sin limitación, daños a cualquier computadora, software o sistemas, o dispositivos portátiles registrados que tú utilices \n\n    para acceder al mismo. No te garantizamos que el funcionamiento del servicio sea ininterrumpido ni que esté exento de errores. Ninguna información o asesoramiento oral o escrito\n\n    proporcionado por cualquier persona, constituirá ningún tipo de garantía en relación con C-VIVO o sus Afiliadas.<br><br>\n\n    \n\n    C-VIVO no garantiza que el servicio sea compatible con cualquier computadora personal, reproductor de cd o dvd, grabador de cd o dvd, o dispositivos portátiles registrados. \n\n    Tú eres el único responsable de asegurarte de que tus sistemas funcionen correctamente con el servicio.<br><br>\n\n    \n\n    El servicio puede contener puntos de vista, consejos, declaraciones y opiniones, que representan las opiniones, consejos, opiniones y declaraciones de los autores individuales y no\n\n    necesariamente los de cualquier compañía afiliada. C-VIVO no declara ni avala la exactitud o la confiabilidad de cualquier punto de vista, consejo, opinión, declaración u otra \n\n    información proporcionada por dichos autores. Dichos puntos de vista, opiniones, consejos, declaraciones u otra información son únicamente los de los autores y no pueden ser \n\n    atribuidos a C-VIVO o sus Afiliadas. La confianza que deposites en tales puntos de vista, opiniones, consejos, declaraciones u otra información queda también bajo su propio riesgo.\n\n    C-VIVO no será responsable ante nadie de ninguna inexactitud, error, omisión, interrupción, oportunidad, infracción de cualquier derecho de propiedad intelectual, integridad, \n\n    eliminación, defecto, falla de funcionamiento, falla en las líneas de comunicación, alteración o uso de las obras del autor, independientemente de la causa, o por cualquier daño \n\n    que de allí resulte. C-VIVO no asume responsabilidad alguna, y no será responsable de ningún daño o virus que dañe tu computadora u otra propiedad, debido al acceso por parte tuya \n\n    o al uso de los materiales del autor.<br><br>\n\n    \n\n    En ningún caso, C-VIVO será responsable por daños y perjuicios directos, emergentes, ejemplares, cuantificables, indirectos, accesorios o punitivos, lucro cesante, sin importar su causa,\n\n    que surjan de o en relación con el servicio, estos términos de servicio o el objeto de cualquiera de lo que antecede, bajo ninguna teoría de responsabilidad, incluyendo, entre otros:\n\n    (1) daños y perjuicios derivados de la pérdida de datos, lucro cesante, pérdida del uso del servicio y cualquier descarga o cualquier equipo relacionado, tiempo de inactividad y \n\n    tiempo del usuario, aunque C-VIVO y sus afiliadas hayan sido notificadas sobre la posibilidad de tales daños y perjuicios (2) daños y perjuicios derivados del uso que tu hagas del\n\n    servicio y que infrinjas estos términos de servicio, en particular las limitaciones con respecto al uso. Bajo ninguna circunstancia C-VIVO o sus afiliadas serán responsables por \n\n    el uso no autorizado de cualquier contenido o cualquier uso del servicio para desarrollar, distribuir o utilizar cualquier material que sea difamatorio, calumnioso, injurioso u \n\n    obsceno, que dé una falsa impresión de cualquier persona, que constituya una invasión de cualquier derecho a la privacidad o una infracción de cualquier derecho a la publicidad, \n\n    que viole o infrinja los derechos de cualquier tercero o que infrinja cualquier ley o regulación extranjera, estatal o local.<br><br>\n\n    \n\n    Algunas jurisdicciones no permiten la exclusión o limitación de garantías implícitas o de responsabilidad por daños y perjuicios accesorios o emergentes, de modo que es posible que \n\n    dichas exclusiones o limitaciones no sean aplicables a tu caso. En la medida en que, en una circunstancia determinada, cualquier nota legal o limitación sobre daños y perjuicios o \n\n    responsabilidad aquí establecida esté prohibida por la ley aplicable, entonces, en lugar de las disposiciones del presente en dicha circunstancia determinada, C-VIVO tendrá derecho \n\n    a las máximas renuncias y/o limitaciones sobre daños y perjuicios y las responsabilidades disponibles en derecho y en equidad por dicha ley aplicable en tal circunstancia en particular.\n\n    <br><br>\n\n  \n\n    <h3><b>19. Convenio total y divisibilidad</b></h3><br><br>\n\n    \n\n    Estos Términos de Servicio, la Política de Privacidad, (incluyendo cualquier modificación o revisión realizada por la C-VIVO a cualquiera de estos documentos) constituyen juntos el \n\n    acuerdo total entre tú y C-VIVO, con respecto a su objeto, y remplaza a todos los convenios y entendimientos previos y/o contemporáneos, ya sea escritos u orales, entre tú y C-VIVO\n\n    con respecto al objeto del presente documento. Salvo lo expresamente establecido en el presente, estos Términos de Servicio no podrán de ninguna manera ser enmendados, modificados o \n\n    complementados por las partes, excepto mediante instrumento por escrito firmado por un directivo autorizado de C-VIVO. Si un tribunal de jurisdicción competente determinara que una \n\n    parte de estos Términos de Servicio es inválida o inexigible, el resto de estos Términos de Servicio se interpretará de modo que refleje razonablemente la intención de las partes. \n\n    Los encabezamientos son únicamente a fines de referencia y de ningún modo definen, limitan, interpretan o describen el alcance o el contenido de dicha sección. Ninguna disposición\n\n    del presente se considerará renunciada (por cualquier acto u omisión) a menos que tal renuncia se realice por escrito y esté firmada por un directivo autorizado de C-VIVO. Estos\n\n    Términos de Servicio serán vinculantes y redundarán en beneficio de los sucesores y cesionarios de cada parte, a condición de que usted no pueda ceder o transferir estos Términos \n\n    de Servicio, en su totalidad o en parte, sin el consentimiento previo por escrito de un directivo autorizado de C-VIVO.<br><br>\n\n     \n\n    <h3><b>20. Aceptación de Términos de uso</b></h3><br><br>\n\n    \n\n    Antes de utilizar el Sitio, lee cuidadosamente estos Términos de Uso y nuestro Aviso de Privacidad. Al utilizar, visitar o navegar por el Sitio, tú expresamente aceptas y estás de \n\n    acuerdo con estos Términos de Uso y con nuestro Aviso de Privacidad. Si tú no estás de acuerdo con estos Términos de Uso o con nuestro Aviso de Privacidad, no utilices el Sitio.<br><br>\n\n    \n\n    Para ser considerado como un usuario del Sitio es necesario que crees una cuenta (“Cuenta Registrada”). La creación de una Cuenta Registrada requiere que tú: cumplas con todos los requisitos técnicos y legales exigidos por C-VIVO.<br><br>\n\n    \n\n    <h1>Declaración de privacidad</h1><br><br>\n\n    \n\n    Esta Declaración de privacidad explica nuestras prácticas, incluidas tus preferencias y opciones, en relación con la recogida, utilización y comunicación de determinada información,\n\n    incluida tu información personal, por parte de C-VIVO.<br><br>\n\n    \n\n    Es importante para nosotros resguardar y proteger tu información, así como tu privacidad. Este aviso de privacidad (“Aviso de Privacidad”) ha sido establecido con el fin de explicarte \n\n    nuestras prácticas de información en línea y las opciones que tú tienes sobre la manera en que tu información se recopila y se utiliza en relación con el servicio C-VIVO (el "Sitio").\n\n    Este Aviso de Privacidad también aplica a todos los otros sitios Internet o aplicaciones que compartan un enlace a este Aviso de Privacidad (individual y colectivamente el “Sitio”). \n\n    El Sitio es proporcionado por C-VIVO, Referencia a “tú” en este Aviso de Privacidad también incluye a cualquier usuario del Sitio.<br><br>\n\n    \n\n    Debes revisar los Términos de Uso del Sitio en conjunto con este Aviso de Privacidad.<br><br>\n\n    \n\n    Tu uso del Sitio y tu confirmación indicando que tú has leído y aceptado este Aviso de Privacidad como parte del proceso de registro indicará tu aceptación de este Aviso de Privacidad, \n\n    así como tu consentimiento para la recopilación, almacenamiento, uso, administración, supresión, transferencia, procesamiento y transmisión (en conjunto, el “Tratamiento”) de tu \n\n    información. Por lo tanto, no utilices el Sitio si no estás de acuerdo con el Tratamiento de su información. <br><br>\n\n    \n\n    En C-VIVO nos reservamos el derecho, a entera discreción, de ocasionalmente modificar o actualizar este Aviso de Privacidad. Tu uso continuado del Sitio después de que C-VIVO haya \n\n    modificado o actualizado este Aviso de Privacidad, significará que tú has aceptado el mismo sin ningún tipo de reservas.<br>\n\n    En caso de que haya un cambio material en el Tratamiento de su información personal que aumente nuestro derecho a utilizar Datos Personales (definidos más adelante) que hayamos \n\n    recolectado previamente sobre ti, C-VIVO te notificara ya sea por medio de un correo electrónico dirigido a tu correo electrónico registrado o mediante una publicación destacada en \n\n    el Sitio de conformidad con las leyes aplicables.<br><br>\n\n    \n\n    C-VIVO podrá dar Tratamiento a tu información (incluyendo tus Datos Personales) como se describe más adelante.<br><br>\n\n    \n\n    <h3><b>1. Aspectos claves de la política de privacidad de C-VIVO</b></h3><br><br>\n\n    \n\n    La participación en los cursos de C-VIVO contiene información transparente para el usuario, disponible desde el perfil del usuario, incluyendo: Cursos aprobados y aportes creados \n\n    (discusiones, comentarios). Podrás modificar tu perfil en cualquier momento para ocultar parte de esta información.<br><br>\n\n    \n\n    Al iniciar sesión en C-VIVO nosotros recolectamos información como la dirección IP del dispositivo y el navegador utilizado para acceder a C-VIVO. Utilizamos esta información para \n\n    actualizar el perfil con el país correcto, ofrecer información relevante para tu región o dispositivo.<br><br>\n\n    \n\n    <b>1.1	Contacto</b><br><br>\n\n   \n\n    Si tienes preguntas no dudes en generar un ticket en la sección “Ayuda”, estaremos pendientes de ti. Si tienes dudas concretas acerca de esta Declaración de privacidad, o sobre la \n\n    utilización de tu información personal, cookies o tecnologías similares, puedes contactar a nuestro delegado de Protección de Datos creando un ticket. <br><br>\n\n    \n\n    C-VIVO es el responsable del tratamiento de tu información personal. Ten en cuenta que, si te pones en contacto con nosotros para que te ayudemos, por tu seguridad y por la nuestra, \n\n    puede que tengamos que comprobar tu identidad antes de atender tu solicitud.<br><br>\n\n    \n\n    <h3><b>2. Recogida de información</b></h3><br><br>\n\n    \n\n    Recibimos y almacenamos información relativa a tu persona como, por ejemplo:<br><br>\n\n    \n\n    <b>2.1.	Información que tú nos facilitas:</b><br><br>\n\n    \n\n    Obtenemos la información que tú nos facilitas, incluyendo: tu nombre y dirección de correo electrónico. Obtenemos dicha información de varias maneras, entre ellas cuando la incorporas \n\n    al utilizar nuestro servicio, al contactar con nuestro Servicio de atención al cliente, o al participar en encuestas o promociones de marketing;, la configuración de tu cuenta, o cuando \n\n    nos facilitas información a través de nuestro servicio o de algún otro modo.<br><br>\n\n    \n\n    Podrás proveer información personal a terceros o páginas de marcas afiliadas a través de las cuales proveemos acceso a nuestros servicios ("Redes Afiliadas"). Cuando te registras con \n\n    nosotros, la Red Afiliada de la cual tú ingresaste podría proveernos con tu nombre de usuario y contraseña de dicha Red. Algunas de esas Redes Afiliadas u otras redes podrían compartir \n\n    cualquier otra información que tú compartas, con nosotros. Al usar nuestros servicios, tú estarás de acuerdo en permitirnos a recibir y usar cualquier información, excepto información\n\n    de tarjetas de crédito que tú le proveas a las redes afiliadas, bajo los mismos términos como si nos las hubieras proveído a nosotros directamente. Pase o no que una Red Afiliada \n\n    comparta su información y hasta qué punto la compartan con nosotros dependerá de tu acuerdo con nosotros y tu Política de Privacidad individual o particular.<br><br>\n\n      \n\n    <b> 2.2.	información que obtenemos automáticamente:</b><br><br>\n\n      \n\n    Obtenemos información sobre ti y sobre tu uso de nuestro servicio, de tus interacciones con nosotros y nuestra publicidad, así como información relacionada con tu ordenador u otro \n\n    dispositivo utilizado para acceder a nuestro servicio. Esta información incluye:<br><br>\n\n    \n\n    <ul type="circle">\n\n      <li><P> Tu actividad en el servicio C-VIVO, como selección de títulos, historial de visionados y consultas de búsqueda;</P></li><br>\n\n      <li><P>Detalles relacionados con tus interacciones con el Servicio de atención al cliente, como la fecha, la hora y el motivo de contactar con nosotros, transcripciones de cualquier \n\n      conversación por chat y, si nos llamas, tu número de teléfono y grabaciones de las llamadas;</P></li><br>\n\n      <li><P>ID de dispositivos u otros identificadores inequívocos;</P></li><br>\n\n      <li><P>Identificadores de publicidad, como los de los dispositivos móviles, tabletas y dispositivos de streaming que incluyan dichos identificadores;</P></li><br>\n\n      <li><P>Características de aparatos y programas informáticos (como el tipo y la configuración), información de conexión, estadísticas de vistas de páginas, orígenes de remisiones \n\n      (las URL de referencia, por ejemplo), dirección IP (que puede indicarnos tu ubicación aproximada), navegador e información estándar del registro del servidor web;</P></li><br>\n\n    </ul>  \n\n    <br>\n\n\n\n    <b>2.3	Información proveniente de otras fuentes:</b> <br> <br>\n\n    \n\n    También obtenemos datos a través de otras fuentes. Protegemos esos datos conforme a las prácticas descritas en esta Declaración de privacidad, además de cualquier otra restricción \n\n    impuesta por la fuente de la que proceden los datos. Estas fuentes varían con el transcurso del tiempo, pero podrían incluir las siguientes:<br> <br>\n\n  \n\n    <ul type="circle">  \n\n      <li><P>Proveedores de servicios que nos ayuden a determinar una ubicación basándose en tu dirección IP con el fin de personalizar nuestro servicio y para otros usos conforme a esta \n\n        Declaración de privacidad;</P></li><br>\n\n      <li><P>Socios que permiten que nuestro servicio esté disponible en tu dispositivo o con los que ofrecemos servicios de marca compartida o actividades de marketing conjuntas;</P></li><br>\n\n      <li><P>Proveedores de servicios de pago que nos proporcionen datos sobre la forma de pago basados en su relación contigo;</P></li><br>\n\n      <li><P>Proveedores de servicios por Internet y sin conexión, de los que obtenemos datos demográficos, basados en intereses y relacionados con la publicidad online;</P></li><br>\n\n      <li><P>Fuentes de dominio público tales como las bases de datos gubernamentales.</P></li><br>\n\n    </ul> \n\n    <br>\n\n\n\n    <b>2.4. Utilización de la información</b><br><br>\n\n   \n\n    Utilizamos la información para analizar, administrar, mejorar, personalizar y prestar nuestros servicios y acciones de marketing, entre otros para procesar tu registro, tus pedidos\n\n    y tus pagos, así como para comunicarnos contigo en relación con este y otros temas. Por ejemplo:<br><br>\n\n   \n\n\n\n    <ul type="circle">\n\n      <li><P>Determinar tu ubicación geográfica general, facilitar contenidos localizados, mostrarte recomendaciones personalizadas que creamos que pueden interesarte, determinar tu proveedor de \n\n        servicios de Internet y ayudarnos a responder consultas rápida y eficazmente;</P></li><br><br>\n\n      <li><P>Prevenir, detectar e investigar actividades potencialmente prohibidas o ilegales, incluido el delito de estafa, y hacer cumplir nuestros términos (tales como establecer los\n\n        requisitos para pruebas gratuitas);</P></li><br>\n\n      <li><P>Analizar y entender nuestra audiencia, mejorar nuestro servicio (incluidas nuestras experiencias de interfaces de usuario) y optimizar la selección de contenido, los algoritmos de \n\n        recomendaciones y la entrega de nuestros servicios;</P></li><br>\n\n      <li><P>Comunicarnos contigo acerca de nuestro servicio (por ejemplo, mediante correo electrónico, notificaciones automáticas, SMS y canales de mensajería en línea), para enviarte \n\n        noticias sobre C-VIVO, detalles de nuestras nuevas prestaciones y contenidos disponibles en C-VIVO, anuncios promocionales y encuestas de satisfacción, y para ayudarte en solicitudes\n\n        operacionales tales como peticiones de cambio de contraseña.</P></li> <br>\n\n    </ul>  \n\n    <br>\n\n    <b> 2.4.a. ¿Cómo utilizamos tu información personal?</b><br><br>\n\n    <b>Ofrecer un mejor producto y servicio</b><br><br>\n\n     \n\n    En general, C-VIVO puede usar tu información para proporcionar y mejorar El Servicio. C-VIVO podrá compartir esta información con los proveedores del servicio sobre contenido, \n\n    afiliados y otras entidades de forma no-personal para estudios demográficos e información preferencial para los usuarios del servicio o para otros propósitos. Esta información podrá \n\n    incluir el uso y la data demográfica, pero no incluirá información personal (tal como su dirección de correo electrónico). Si usted provee a C-VIVO con información personal, tomaremos\n\n    razonados y apropiados pasos para proteger esta información. Excepto conforme está descrito en esta Política de Privacidad, C-VIVO no revelará, compartirá, venderá ni rentará \n\n    información personal recolectada en nuestra Website a terceros para su uso promocional sin tu consentimiento a menos que sea para un programa específico al que podrás pedirnos \n\n    no participar. Si tú solicitas recibir información de nuestros estudiantes al seleccionar esta opción en el futuro, podremos compartir tu información de registro e información acerca \n\n    de tus transacciones en nuestro servicio con los estudios y/o nuestros estudiantes. Si tú accedes a nuestros servicios a través de una versión afiliada de nuestra Website que contenga \n\n    un aviso que esa información será compartida con dicho afiliado la cual aparecerá bajo el nombre de la Website afiliada, cualquier información personal o no-personal será compartida \n\n    con dicha Website afiliada. Cualquier uso de esa información de parte de C-VIVO será sujeto a esta Política de Privacidad, y cualquier uso de dicha información por un afiliado estará \n\n    sujeto a esta Política de Privacidad y la Política de Privacidad del afiliado. Nosotros no compartimos la información de tus cuentas de tarjetas de crédito con redes afiliadas ni \n\n    ningún otro tercero, excepto al servicio de procesamiento de tarjetas de crédito descritos abajo.<br><br>\n\n       \n\n    <b>2.5. Acceso a la cuenta y a los perfiles</b><br><br>\n\n  \n\n    Para tu comodidad, puedes acceder rápidamente con la función "Recordarme en este dispositivo" cuando inicies sesión en el sitio web. La tecnología utilizada por esta función nos permite\n\n    ofrecerte acceso directo a la cuenta y ayudarte a administrar el servicio de C-VIVO, pues no tendrás que poner la contraseña ni otros identificadores de usuario cuando tu navegador \n\n    vuelva a visitar el servicio.<br><br>\n\n    \n\n    Si vendes o devuelves un ordenador o un dispositivo compatible con C-VIVO, antes deberás cerrar la sesión y desactivar el dispositivo. Si no mantienes la seguridad de tu contraseña o \n\n    dispositivo, no lo desactivas o no cierras la sesión, los siguientes usuarios podrían acceder a tu cuenta, que incluye tu información personal.<br><br>\n\n   \n\n    <h3><b>3. Opciones</b></h3><br><br>\n\n    \n\n    \n\n    <b>3.a. Notificaciones</b><br><br>\n\n    \n\n    <b>3.1.</b> Puedes optar por recibir notificaciones automáticas de C-VIVO en el móvil. Si luego decides que prefieres no recibir esas notificaciones, desactívalas en los ajustes de tu \n\n    dispositivo móvil.<br><br>\n\n    \n\n    <h3><b>4.	Tu información y tus derechos</b></h3><br><br>\n\n  \n\n    Puedes solicitar acceso a tu información personal, y corregir o actualizar aquellos datos relativos a tu persona que se hayan quedado desactualizados.<br><br>\n\n    \n\n    Para hacerlo, visita el apartado "Perfil" de nuestro sitio web. Desde allí, puedes acceder a información sobre tu cuenta y actualizarla.<br><br>\n\n    \n\n    Si tienes alguna consulta o solicitud acerca de nuestras prácticas de privacidad, crea un ticket en la sección “Ayuda”. Contestamos a todas las solicitudes de individuos que deseen \n\n    ejercer sus derechos de protección de datos según la legislación de protección de datos aplicable. <br><br>\n\n    \n\n    Podemos rechazar peticiones que no sean razonables o que la ley no exija, incluyendo aquellas que resulten extremadamente poco prácticas, requieran un esfuerzo técnico desproporcionado \n\n    o pudieran exponernos a riesgos operativos como fraudes con las pruebas gratuitas. Podemos retener información requerida o permitida por las leyes y normativas vigentes, incluso para \n\n    respetar tus elecciones, para facturación o registros y para cumplir los propósitos descritos en esta Declaración de privacidad. Cuando no sea necesario retener tus datos personales, \n\n    tomaremos las medidas correspondientes para suprimirlos o hacerlos anónimos.<br><br>\n\n   \n\n    <h3><b>5. Publicidad en línea</b></h3><br><br>\n\n    \n\n    Utilizamos servicios de publicidad de terceros, como servicios de publicidad de  Facebook, así como otras redes y servidores de publicidad, para ofrecer publicidad sobre nuestros \n\n    Servicios en otros sitios web y aplicaciones que el usuario utiliza. Los anuncios se pueden basar en nuestros conocimientos sobre el usuario, como sus Datos de uso y sus Datos del\n\n    sistema y en los conocimientos que estos proveedores de servicios de publicidad tienen sobre el usuario según sus datos de seguimiento. Los anuncios se pueden basar en su actividad \n\n    reciente o en la actividad con el paso del tiempo, y en otros sitios y servicios, y se pueden adaptar a sus intereses.<br><br>\n\n    \n\n    En función de los tipos de servicios de publicidad que utilizamos, pueden colocar cookies u otras tecnologías de seguimiento en el equipo, teléfono u otro dispositivo para recopilar \n\n    datos sobre el uso que hace de nuestros Servicios, y pueden acceder a dichas tecnologías de seguimiento para proporcionar estos anuncios personalizados al usuario. Para ayudar a \n\n    ofrecer publicidad personalizada, podemos proporcionar a estos proveedores de servicios una versión oculta y anónima de la dirección de correo electrónico del usuario (en un formato \n\n    ilegible para el ser humano) y del contenido que comparte públicamente en los Servicios.<br><br>\n\n    \n\n    Al utilizar aplicaciones móviles, el usuario también puede recibir anuncios personalizados en las aplicaciones. Android OS y Microsoft Windows proporcionan sus propias instrucciones \n\n    sobre cómo controlar la publicidad personalizada en las aplicaciones. Para otros dispositivos y sistemas operativos, el usuario deberá revisar su configuración de privacidad o ponerse\n\n     en contacto con el operador de la plataforma.<br><br>\n\n    \n\n    <h3><b>6.	Seguridad</b></h3><br><br>\n\n    Empleamos medidas administrativas, lógicas, físicas y de gestión razonables para salvaguardar tu información personal contra pérdidas, sustracción o acceso, utilización o modificación \n\n    no autorizados. Estás medidas están diseñadas para proporcionar el nivel de seguridad adecuado a los riesgos asociados al tratamiento de tus datos personales.<br><br>\n\n    En cualquier momento podemos solicitar una prueba de que estás cumpliendo con las reglas estipuladas. Nos reservamos el derecho a tomar o a abstenernos de tomar, cualquier y todo \n\n    paso disponible en cuanto tomemos conocimiento de cualquier incumplimiento de estas disposiciones. Si tú estás involucrado en cualquier incumplimiento de la seguridad de nuestros \n\n    sistemas, nos reservamos el derecho a divulgar tus detalles a los administradores del sistema en otros sitios, a fines de ayudarles a resolver los incidentes de seguridad.<br><br>\n\n    \n\n    <h3><b>7.	Trabajos realizados por estudiantes</b></h3><br><br>\n\n    Los miembros de C-VIVO que voluntariamente decidan subir contenido a la plataforma, brindan a C-VIVO, la posibilidad de hacer uso de los mismos en términos de reproducción, canales \n\n    de reproducción y contenido. Se trata de los estudiantes que subirán trabajos a la plataforma y que serán libremente compartidos por otros miembros de C-VIVO<br><br>\n\n    \n\n    <h3><b>8. 	Cookies</b></h3><br><br>\n\n    Cuando usted visita nuestra Website o pulsa cualquier hipervínculo que aparece en ella, o usa uno o más de nuestros servicios, podremos usar una tecnología industrial llamada "cookies"\n\n    la cual almacena cierta información en su computadora y que nos permitirá personalizar su experiencia para alinearla con sus intereses y preferencias o simplemente facilitar su acceso \n\n    al usar nuestros servicios. La mayoría de los Navegadores permitirán que usted elimine o bloquee las "cookies" de su computador o su disco duro o alertará las mismas cuando estas se activen. \n\n    Por favor refiérase a las instrucciones de su Navegador para ayuda o para conocer mejor sus funciones. Por favor note, sin embargo, que, si usted bloquea de su Navegador el uso de estas cookies, \n\n    el servicio no podrá ser utilizado o no podrá acceder a nuestra Website o quizás pueda afectar el funcionamiento de la página como tal.\n\n    En este sentido, compartiremos tu información con Google Analytics. De modo que, al aceptar estos términos y condiciones aceptas que conoces y aceptas esta condición. <br><br>\n\n\n\n    \n\n    <h1><b>Poítica de la propiedad intelectual</b></h1><br>\n\n     \n\n    C-VIVO es una plataforma tecnológica que permite a cualquiera crear y compartir cursos educativos en cualquier parte del mundo. Nuestro modelo de tienda virtual supone que no revisamos \n\n    ni editamos los cursos por cuestiones legales ni estamos en posición de determinar la legalidad del contenido de un curso. Sin embargo, para nosotros es importante que los instructores \n\n    que publican cursos en C-VIVO respeten la propiedad intelectual del resto. Cuando los instructores publican cursos en nuestra tienda virtual, dan fe de que poseen la autorización o los \n\n    derechos necesarios para utilizar todo el contenido de sus cursos.<br><br>\n\n\n\n    <b>La actividad infractora no se tolera en nuestra plataforma o a través de ella.</b><br><br>\n\n    Esta política aborda lo que hacemos en el caso de infracciones de derecho de autor de parte de los propietarios de contenido y en el caso de reclamos por infracción de marca de parte \n\n    de los propietarios de marcas con respecto a los cursos que se ofrecen en la plataforma C-VIVO. La política también aborda lo que hacemos cuando los cursos de los instructores de C-VIVO\n\n    y son copiados en plataformas de terceros sin su consentimiento.<br><br>\n\n\n\n    <h3><b>1. Denuncia de infracciones de copyright de terceros</b></h3><br><br>\n\n    La política de C-VIVO es eliminar los cursos de nuestro servicio cuando se denuncia que estos están en infracción en una notificación de violación de derecho de autor recibida del\n\n    propietario del contenido original. También es nuestra política eliminar todos los cursos de cualquier instructor que se determine que es un infractor reincidente \n\n    (para el que C-VIVO ha recibido más de dos avisos de violación de derecho de autor válidos). Nos reservamos el derecho de rescindir la cuenta de un instructor en cualquier momento, \n\n    incluso cuando éste publica contenido que infrinja la propiedad intelectual de terceros.<br><br>\n\n     \n\n    <h3><b>2. Cómo presentar una denuncia</b></h3><br><br>\n\n    \n\n    Si deseas denunciar algún contenido que se encuentra en el mercado de C-VIVO y si eres el propietario, o el agente designado por el titular, de los derechos sobre el contenido que \n\n    consideras que el curso infringe, la forma más eficiente crear un ticket en la sección “Ayuda”<br><br>\n\n   \n\n    Antes de enviar un aviso de infracción de propiedad intelectual, recuerda estos puntos importantes:<br><br>\n\n    \n\n    Tu aviso de violación de derecho de autor tiene que estar suficientemente fundamentada para que podamos abordarla. Esto significa que:<br><br>\n\n\n\n    Debes proporcionarnos información suficiente para que nos podamos comunicar contigo, incluyendo tu nombre legal completo, una dirección de correo electrónico, una dirección física y \n\n    un número de teléfono (opcional).<br><br>\n\n\n\n    Si estás presentando una denuncia en nombre de una organización, debes incluir el nombre de la organización y tu relación con ella.<br><br>\n\n\n\n    Debes identificar con precisión el material original protegido por propiedad intelectual o, si se incluyen múltiples obras protegidas por propiedad intelectual en tu notificación,\n\n    debes proporcionar una lista suficientemente representativa de dicho material original (por ejemplo, una URL donde se encuentra el material);<br><br>\n\n    \n\n    Debes proporcionar información suficiente para que ubiquemos el curso o los cursos presuntamente infractores que se encuentran en el sitio web de C-VIVO (la URL en nuestro sitio web \n\n    y el nombre exacto del curso y del instructor);<br><br>\n\n\n\n    Debes agregar una declaración que diga: "Declaro, bajo pena de perjurio, que la información contenida en esta reclamación es precisa y que soy el propietario de la\n\n    propiedad intelectual o estoy autorizado/a a actuar en nombre del propietario/a de la propiedad intelectual y creo de buena fe que el uso del material de la manera en la que se \n\n    denunció no está autorizado por el propietario/a de la propiedad intelectual, su agente o la ley".<br><br>   \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

//# sourceMappingURL=UserInfo.js.map

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    return Category;
}());

//# sourceMappingURL=Category.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Season; });
var Season = /** @class */ (function () {
    function Season() {
    }
    return Season;
}());

//# sourceMappingURL=Season.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Episode; });
var Episode = /** @class */ (function () {
    function Episode() {
    }
    return Episode;
}());

//# sourceMappingURL=Episode.js.map

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadItem; });
var DownloadItem = /** @class */ (function () {
    function DownloadItem() {
    }
    return DownloadItem;
}());

//# sourceMappingURL=DownloadItem.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UserService__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authService, userService, downloadService, zone, alertCtrl, ga, analyticsProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.userService = userService;
        this.downloadService = downloadService;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.ga = ga;
        this.analyticsProvider = analyticsProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        //this.initializeApp();
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.downloadService.load();
        this.authService.afAuth.authState.subscribe(function (user) {
            if (user.emailVerified === true) {
                var dataToPost = { email: user.email, timestamp: new Date().toLocaleString() };
                _this.userService.postLog(dataToPost).subscribe(function (res) {
                    console.log(res);
                });
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                // this.userService.addUser(user);
                _this.zone.run(function () {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                });
            }
        }, function (error) {
            console.error(JSON.stringify(error));
        });
    }
    MyApp.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    MyApp.prototype.ionViewDidEnter = function () {
        this.analyticsProvider.startTrackerWithId('UA-138040570-1');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_9__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingSoonService = /** @class */ (function () {
    function ComingSoonService() {
    }
    ComingSoonService.prototype.getComingSoon = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("comingSoon")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (comingSoonSnapshot) {
                var comingSoonList = [];
                comingSoonSnapshot.forEach(function (doc) {
                    var comingSoon = new __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__["a" /* ComingSoon */]();
                    comingSoon.comingSoonId = doc.id;
                    comingSoon.name = doc.data().name;
                    comingSoon.picture = doc.data().picture;
                    comingSoon.description = doc.data().description;
                    comingSoon.releaseDate = doc.data().releaseDate;
                    comingSoonList.push(comingSoon);
                });
                resolve({ comingSoonList: comingSoonList });
            });
        });
        return promise;
    };
    ComingSoonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ComingSoonService);
    return ComingSoonService;
}());

//# sourceMappingURL=ComingSoonService.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoon; });
var ComingSoon = /** @class */ (function () {
    function ComingSoon() {
    }
    return ComingSoon;
}());

//# sourceMappingURL=ComingSoon.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenService = /** @class */ (function () {
    function HomeScreenService() {
    }
    HomeScreenService.prototype.getHomeScreenGroups = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                var homeScreenGroups = [];
                homeScreenGroupsSnapshot.forEach(function (doc) {
                    var group = new __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                    group.groupId = doc.id;
                    group.name = doc.data().name;
                    homeScreenGroups.push(group);
                });
                resolve({ homeScreenGroups: homeScreenGroups });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupMovies = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .get()
                .then(function (homeScreenGroupsMoviesSnapshot) {
                var homeScreenGroupMovies = [];
                homeScreenGroupsMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_3__data_Movie__["a" /* Movie */]();
                    // movie.homeScreenGroupMovieId = doc.id;
                    // movie.movieId = doc.data().movieId;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    homeScreenGroupMovies.push(movie);
                });
                resolve({ homeScreenGroupMovies: homeScreenGroupMovies });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupTvShows = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .get()
                .then(function (homeScreenGroupTvShowsSnapshot) {
                var homeScreenGroupTvShows = [];
                homeScreenGroupTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_4__data_TvShow__["a" /* TvShow */]();
                    tvShow.homeScreenGroupTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    homeScreenGroupTvShows.push(tvShow);
                });
                resolve({ homeScreenGroupTvShows: homeScreenGroupTvShows });
            });
        });
        return promise;
    };
    HomeScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomeScreenService);
    return HomeScreenService;
}());

//# sourceMappingURL=HomeScreenService.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Helper__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroupItem__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_HomeScreenGroup__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coming_soon_coming_soon__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sign_in_sign_in__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__terms_terms__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















//cierre de sesion



var HomePage = /** @class */ (function () {
    //slides: any;
    function HomePage(navCtrl, loadingCtrl, platform, alertCtrl, db, embedService, chatService, toastCtrl, VimeoService, nativeStorage, authService, _DomSanitizationService, events, app, zone, element) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.embedService = embedService;
        this.chatService = chatService;
        this.toastCtrl = toastCtrl;
        this.VimeoService = VimeoService;
        this.nativeStorage = nativeStorage;
        this.authService = authService;
        this._DomSanitizationService = _DomSanitizationService;
        this.events = events;
        this.app = app;
        this.zone = zone;
        this.element = element;
        //Configuration for each Slider
        // @ContentChildren(Slides, {descendants: true}) i:Slides; 
        this.homeScreenGroups = [];
        this.segementHome = 'list';
        this.booleanchatEnable = false;
        this.messages = [];
        this.nickname = '';
        this.emailUserChat = '';
        this.message = '';
        this.photosArray = new Array;
        this.loaded = false;
        this.out = true;
        this.menu = true;
        this.refrescarpag = false;
        this.menuhead = 'home';
        platform.ready().then(function () {
            _this.width = platform.width();
            _this.heigth = platform.height();
            if (_this.width <= 992) {
                _this.menu = true;
                _this.refrescarpag = false;
                _this.widthFrame = "100%";
                _this.heightFrame = 200;
            }
            else {
                _this.menu = false;
                _this.refrescarpag = true;
                _this.widthFrame = "95%";
                _this.heightFrame = 650;
            }
        });
        this.chatService.getMessages().subscribe(function (message) {
            var prueba = _this.getCurrentUserPhoto(message['from']);
            message['picture'] = _this._DomSanitizationService.bypassSecurityTrustResourceUrl(prueba);
            _this.messages.push(message);
            var objToSave = {
                created: message['created'],
                from: message['from'],
                text: message['text']
            };
            _this.db.collection('chats').doc(_this.event).collection('chatLog').doc('chatLog' + message['created']).set(objToSave);
        });
        this.gethomeVideo();
        this.getChatSection();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.gethomeVideo();
        this.getChatSection();
        this.events.subscribe('user:photoChanged', function (imageBase64) {
            _this.photosArray = [];
            _this.messages = [];
            _this.db.collection('photos').valueChanges().forEach(function (elem) {
                _this.photosArray.push(elem);
                // this.messages = [];
            });
            _this.loadMessges();
        });
        if (this.photosArray.length == 0) {
            this.db.collection('photos').valueChanges().forEach(function (elem) {
                _this.photosArray.push(elem);
            });
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.iframe_html = '';
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.iframe_html = '';
    };
    /**
     * funcion que utiliza la api de vimeo para traer las categorias de Vimeo
    **/
    HomePage.prototype.getHomeGroups = function () {
        var _this = this;
        this.VimeoService.getHomeScreenGroups().subscribe(function (res) {
            _this.homeScreenGroups = [];
            var collection = res;
            collection.forEach(function (element) {
                var homeGropuModel = new __WEBPACK_IMPORTED_MODULE_8__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                homeGropuModel.name = element.name;
                homeGropuModel.groupId = element.metadata.connections.videos.uri;
                homeGropuModel.groupItems = [];
                _this.homeScreenGroups.push(homeGropuModel);
                _this.homeScreenGroups = __WEBPACK_IMPORTED_MODULE_6__data_Helper__["a" /* Helper */].shuffle(_this.homeScreenGroups);
            });
            _this.homeScreenGroups.forEach(function (element) {
                /************************** En  esta seccion se recorre cada categoria y se obtiene los videos de la misma por meido de la api de vimeo *******************************************/
                _this.VimeoService.getHomeScreenGroupsVideos(element).subscribe(function (result) {
                    var videos = result;
                    videos.data.forEach(function (item) {
                        var video = new __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                        video.name = item.name;
                        video.picture = item.files[2].link;
                        video.description = item.description;
                        video.detailsPicture = item.pictures.sizes[3].link;
                        video.movieId = item.uri.split('/')[2];
                        element.groupItems.push(video);
                        element = __WEBPACK_IMPORTED_MODULE_6__data_Helper__["a" /* Helper */].shuffle(element);
                    });
                });
            });
        });
    };
    /**
     * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
     * @param key codigo de la tecla presionada
     */
    HomePage.prototype.keyPress = function (key) {
        if (key === 13 && this.message !== '') {
            this.sendMessage();
        }
    };
    ;
    /**
     * Funcion que sirve para obtener los mensajes de BD cuando el usuario cierra la aplicacion
     */
    HomePage.prototype.loadMessges = function () {
        var _this = this;
        if (this.messages.length === 0) {
            this.db.collection('Config').valueChanges().subscribe(function (res) {
                _this.event = res[0]['chatEvent'];
                if (res[0]['Vivo']) {
                    var docref = _this.db.collection('chats').doc(_this.event).collection('chatLog', function (ref) { return ref.orderBy('created'); });
                    docref.get().subscribe(function (result) {
                        result.forEach(function (res) {
                            if (res.data().from !== undefined) {
                                var ObjtResult = void 0;
                                // this.photosArray[0].forEach(photo =>{  
                                for (var index = 0; index < _this.photosArray[0].length; index++) {
                                    if (_this.photosArray[0][index]['name'] === res.data().from) {
                                        ObjtResult = {
                                            created: res.data().created,
                                            from: res.data().from,
                                            text: res.data().text,
                                            picture: _this._DomSanitizationService.bypassSecurityTrustResourceUrl(_this.photosArray[0][index]['base64'])
                                        };
                                        break;
                                    }
                                    else {
                                        ObjtResult = {
                                            created: res.data().created,
                                            from: res.data().from,
                                            text: res.data().text,
                                            picture: 'assets/imgs/user.png'
                                        };
                                    }
                                }
                                _this.messages.push(ObjtResult);
                            }
                            else {
                                var ObjtResult = void 0;
                                ObjtResult = {
                                    created: res.data().created,
                                    from: res.data().from,
                                    text: res.data().text,
                                    picture: 'assets/imgs/user.png'
                                };
                                _this.messages.push(ObjtResult);
                            }
                        });
                    });
                }
            });
        }
    };
    ;
    /**
     * Funcion que se ejecuta cuando se activa la seccion del chat, al mismo tiempo
     * realiza la conexion con SOCKET.io, y llama la funcion getMessages() para obtener los mensajes del Socket
     */
    HomePage.prototype.getChatSection = function () {
        var _this = this;
        this.db.collection('Config').valueChanges().subscribe(function (res) {
            _this.chatEnable = res[0]['Vivo'];
            _this.event = res[0]['chatEvent'];
            _this.segementHome = _this.chatEnable === 'true' ? 'chat' : 'list';
            if (_this.chatEnable === 'true') {
                _this.booleanchatEnable = true;
                if (_this.nickname === '') {
                    _this.chatService.joinChat().then(function (nickname) {
                        _this.nickname = nickname.name.toString();
                        _this.emailUserChat = nickname.email.toString();
                    });
                }
            }
            else {
                _this.booleanchatEnable = false;
                _this.chatService.disconnect();
                _this.nickname = '';
                _this.messages = [];
            }
            ;
        }, function (err) { return _this.showAlert(err, 'Error FbConfig'); });
    };
    ;
    /**
     * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
     * seguro para efectuar el INNERHTML en el DOM.
     */
    HomePage.prototype.gethomeVideo = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('Config').valueChanges().subscribe(function (res) {
                _this.iframe_html = _this.embedService.embed_vimeo(res[0]['Idvivo'], {
                    query: { autoplay: 1, loop: 1, color: 'ffff', portrait: 0 },
                    attr: { width: _this.widthFrame, height: _this.heightFrame }
                });
                resolve({ videoConfig: res });
            }, function (err) { reject(err); });
        });
        return promise;
    };
    ;
    /**
     * Funcion que se ejecuta automaticamnete cuando la vista termina de cargar.
     */
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.slides;
        //console.log(this.slides)
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando..."
        });
        loading.present();
        this.getHomeGroups();
        this.gethomeVideo().then(function () {
            _this.loadMessges();
            _this.getHomeGroups();
            setTimeout(function () {
                loading.dismiss();
            }, 2000);
        }, function (err) {
            loading.dismiss();
            _this.showAlert(err, 'Error de conexion');
        });
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
        this.loaded = true;
    };
    /**
     * Funcion que envia un mensaje por meido de SOCKET.IO
     */
    HomePage.prototype.sendMessage = function () {
        if (this.message !== '') {
            this.chatService.sendMessage(this.message);
            this.message = '';
        }
    };
    /**
     * Funcion para abrir la pagina de detalles del video
     * @param groupItem objeto con la informacion del video
     */
    HomePage.prototype.goToGroupItemDetails = function (groupItem) {
        this.navCtrl.push("MovieDetailsPage", { movieId: groupItem });
    };
    ;
    /**
     * Funcion que se ejecuta al hacer swipe down en la pantalla
     * para recargar el video
     * @param refresher
     */
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.photosArray = [];
        this.messages = [];
        this.db.collection('photos').valueChanges().forEach(function (elem) {
            _this.photosArray.push(elem);
            // this.messages = [];
        });
        this.loadMessges();
        this.getHomeGroups();
        this.gethomeVideo().then(function (res) {
            console.log(res);
            refresher.complete();
        }, function (err) {
            _this.showAlert(err, 'Error al cargar');
            refresher.complete();
        }).catch(function () { return refresher.complete(); });
        setTimeout(function () {
            refresher.complete();
        }, 3000);
    };
    ;
    /**
     * Funcion para mostrar un toaster con cualuiqer funcion/metodo
     * @param msg mensaje para mostrar en el toaster
     */
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ;
    /**
     * Funcion para mostrar una alerta personalizada
     * @param message mensaje para mostrar en el body de la alerta
     * @param title  titulo para mostrar en el encabezado de la alerta
     */
    HomePage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) { }
                }
            ]
        }).present();
    };
    ;
    HomePage.prototype.getCurrentUserPhoto = function (name) {
        var photo;
        var tmp = true;
        var index = 0;
        if (name == undefined) {
            photo = 'assets/imgs/user.png';
        }
        else {
            do {
                if (this.photosArray[0][index]['name'] === name) {
                    photo = (this.photosArray[0][index]['base64']);
                    tmp = false;
                }
                else {
                    index += 1;
                }
                ;
                if (index == this.photosArray[0].length) {
                    photo = 'assets/imgs/user.png';
                    tmp = false;
                }
            } while (tmp);
        }
        return photo;
    };
    HomePage.prototype.getOtherUserPhoto = function (name) {
        return this.db.collection('photos', function (ref) { return ref.where('name', '==', name); }).valueChanges();
    };
    ///////////////////////////////////////////////////////////  FUNCIONES NO UTLIZADAS EN ESTA VERSION /////////////////////////////////////////////////////////
    // getHomeScreenGroups() {
    //   var loading = this.loadingCtrl.create({
    //     spinner: "bubbles",
    //     content: "Loading Home..."
    //   });
    //   loading.present();
    //   this.homeScreenService.getHomeScreenGroups().then((result: any) => {
    //     this.homeScreenGroups = result.homeScreenGroups;
    //     this.homeScreenGroups.forEach(homeScreenGroup => {
    //       // Get home screen movies first
    //       this.homeScreenService
    //         .getHomeScreenGroupMovies(homeScreenGroup)
    //         .then((result: any) => {
    //           result.homeScreenGroupMovies.forEach((movie: Movie) => {
    //             var movieGroupItem = new HomeScreenGroupItem();
    //             movieGroupItem.itemId = movie.movieId;
    //             movieGroupItem.picture = movie.picture;
    //             movieGroupItem.isMovie = true;
    //             homeScreenGroup.groupItems.push(movieGroupItem);
    //           });
    //           // Then get home screen tv shows
    //           this.homeScreenService
    //             .getHomeScreenGroupTvShows(homeScreenGroup)
    //             .then((result: any) => {
    //               result.homeScreenGroupTvShows.forEach((tvShow: TvShow) => {
    //                 var movieGroupItem = new HomeScreenGroupItem();
    //                 movieGroupItem.itemId = tvShow.tvShowId;
    //                 movieGroupItem.picture = tvShow.picture;
    //                 movieGroupItem.isMovie = false;
    //                 homeScreenGroup.groupItems.push(movieGroupItem);
    //               });
    //               // Finally, shuffle them
    //               homeScreenGroup.groupItems = Helper.shuffle(
    //                 homeScreenGroup.groupItems
    //               );
    //             });
    //         });
    //     });
    //     loading.dismiss();
    //   });
    // }
    // playVideoTrailer() {
    //   if (!this.platform.is("cordova")) {
    //     let alert = this.alertController.create({
    //       title: "Run on device",
    //       subTitle: "This feature is only available on a device!",
    //       buttons: ["Dismiss"]
    //     });
    //     alert.present();
    //     return;
    //   }
    //   let options: StreamingVideoOptions = {
    //     successCallback: () => {
    //       console.log("Video played");
    //     },
    //     errorCallback: e => {
    //       console.log("Error streaming");
    //     },
    //     orientation: "landscape",
    //     shouldAutoClose: true,
    //     controls: true
    //   };
    //   this.streamingMedia.playVideo(
    //     "https://firebasestorage.googleapis.com/v0/b/ionnetflix-72e25.appspot.com/o/Watch%20the%20Black%20Lightning%20Trailer.mp4?alt=media&token=3331cd39-f38b-4add-8d83-cec4c213b571",
    //     options
    //   );
    // };
    HomePage.prototype.home = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.parrilla = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__coming_soon_coming_soon__["a" /* ComingSoonPage */]);
    };
    HomePage.prototype.buscar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cerrando sesión..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_16_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_15__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ;
    HomePage.prototype.terminos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__terms_terms__["a" /* TermsPage */]);
    };
    HomePage.prototype.moveNext = function (index) {
        this.slides.toArray()[index].slideNext();
    };
    HomePage.prototype.movePrev = function (index) {
        this.slides.toArray()[index].slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["QueryList"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-2 >\n\n        <ion-navbar align-title="center" transparent >\n\n          <ion-title>\n\n            <img src="assets/imgs/netflix-logo.png">\n\n          </ion-title>   \n\n        </ion-navbar>\n\n      </ion-col>\n\n      <ion-col col-lg-10 [hidden]="menu">\n\n        <div >\n\n          <ion-segment [(ngModel)]="menuhead">\n\n            <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n            <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n            <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n            <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n            <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>    \n\n</ion-header>\n\n<ion-content class="list-avatar-page"  padding #pageContent >  \n\n  <!-- Refresher para actualizar el video en vivo -->\n\n  <ion-grid>\n\n    <ion-row pull-lg-9>\n\n      <ion-col col-12 >\n\n        <ion-refresher (ionRefresh)="doRefresh($event)" pullMin=200>\n\n          <ion-refresher-content \n\n            pullingIcon="refresh-circle"\n\n            refreshingSpinner="bubbles">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6>\n\n          <div [innerHtml]="iframe_html"></div>\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-6>\n\n        <ion-segment [(ngModel)]="segementHome" color="netflixRed">\n\n          <ion-segment-button value="list">\n\n            <ion-icon name="list" ></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="chat" [disabled]=\'!booleanchatEnable\'>\n\n            <ion-icon name="chatbubbles"></ion-icon>\n\n          </ion-segment-button>\n\n        </ion-segment>        \n\n        <div *ngIf="chatEnable == \'true\' && segementHome == \'chat\'">\n\n          <ion-scroll  scrollY="true" class="test">            \n\n            <ion-list *ngFor="let message of messages ">\n\n              <ion-item no-lines>\n\n                <ion-avatar item-start>\n\n                    <!-- Imagen de perfil en el chat solo cuando es Cordova -->\n\n                    <!-- <img src="{{myPhoto}}" *ngIf="message.from === nickname " > -->\n\n                    <!-- Imagen por defecto cuando no es el usuario, y cuando es Cordova -->\n\n                    <img [src]="message.picture" >\n\n                    <!-- Imagen por defecto en chat cuando es web -->\n\n                    <!-- <img src="assets/imgs/user.png" *ngIf="!iscordova">-->\n\n                </ion-avatar>\n\n                <h3>{{message.from}}</h3>\n\n                <p text-wrap>  <a>  {{message.text}} </a></p>\n\n                <ion-note item-end>{{message.created | date:\' h:mm\' }}</ion-note>\n\n              </ion-item>\n\n            </ion-list>   \n\n          </ion-scroll> \n\n        </div>\n\n          <div [hidden]="menu" *ngIf="segementHome == \'list\' && loaded" >\n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar>   \n\n            <div *ngIf="homeScreenGroups[6]">\n\n              <div class="item-title">{{homeScreenGroups[0].name}} </div>                      \n\n              <ion-slides *ngIf="homeScreenGroups[0].groupItems && homeScreenGroups[0].groupItems.length" autoplay="3000" slidesPerView="3" spaceBetween=12 zoom=true loop=true paginationType="fraction">                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[0].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides>\n\n              <button (click)="movePrev(0)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(0)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[1].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12     >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[1].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(1)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(1)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>\n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[2].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[2].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(2)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(2)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[3].name}} </div> \n\n              <ion-slides slidesPerView="3" spaceBetween=15   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[3].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(3)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(3)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[4].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[4].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(4)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(4)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n            <div class="item-title">{{homeScreenGroups[5].name}}</div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[5].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides> \n\n            <button (click)="movePrev(5)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button (click)="moveNext(5)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[6].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[6].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides>\n\n            <button (click)="movePrev(6)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button (click)="moveNext(6)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n          </div>  \n\n          </ion-scroll> \n\n        </div>      \n\n      </ion-col>\n\n    </ion-row>\n\n   </ion-grid>  \n\n  <!--   seccion lista de videos Movil          -->\n\n    <ion-grid [hidden]="refrescarpag">\n\n      <ion-row>\n\n        <ion-col >\n\n          <div  *ngIf="segementHome == \'list\' && loaded" >\n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar>\n\n              <ion-list>      \n\n                <div *ngFor="let homeScreenGroup of homeScreenGroups; let i = index" >      \n\n                  <div class="item-title">{{homeScreenGroup.name}} </div>  \n\n                  <div class="contentBody">                                                                              \n\n                    <ion-slides slidesPerView="3" spaceBetween=12  [attr.id]="i"  #i page>                                  \n\n                      <ion-slide *ngFor="let groupItem of homeScreenGroup.groupItems" >\n\n                        <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                      </ion-slide>\n\n                    </ion-slides>                             \n\n                  </div>  \n\n                  <hr>\n\n                </div>    \n\n              </ion-list>\n\n            </ion-scroll> \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>       \n\n</ion-content>\n\n<ion-footer col-lg-6 offset-lg-6 [hidden]="segementHome !== \'chat\'">\n\n  <ion-toolbar>  \n\n    <ion-item>    \n\n      <ion-input [(ngModel)]="message" type="text" placeholder="mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n    </ion-item>       \n\n    <ion-buttons end>\n\n      <button ion-button icon-right color="netflixBlue" (click)="sendMessage()">          \n\n        <ion-icon name="send"></ion-icon>\n\n      </button> \n\n    </ion-buttons>              \n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"C:\Users\leidy_castiblanco\Desktop\Cvivo2\cvivo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"]])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[485]);
//# sourceMappingURL=main.js.map