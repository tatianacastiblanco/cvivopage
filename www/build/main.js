webpackJsonp([21],{

/***/ 131:
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

/***/ 132:
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_UserInfo__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(61);
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(342);
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DownloadService);
    return DownloadService;
}());

//# sourceMappingURL=DownloadService.js.map

/***/ }),

/***/ 259:
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
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		732,
		20
	],
	"../pages/channels/channels.module": [
		733,
		19
	],
	"../pages/chat/chat.module": [
		731,
		4
	],
	"../pages/coming-soon/coming-soon.module": [
		734,
		1
	],
	"../pages/downloads/downloads.module": [
		735,
		9
	],
	"../pages/forgot-password/forgot-password.module": [
		344
	],
	"../pages/grid-list/grid-list.module": [
		736,
		6
	],
	"../pages/help/help.module": [
		737,
		0
	],
	"../pages/home/home.module": [
		750,
		2
	],
	"../pages/horizontal-list/horizontal-list.module": [
		738,
		18
	],
	"../pages/movie-details/movie-details.module": [
		739,
		5
	],
	"../pages/mylist/mylist.module": [
		740,
		8
	],
	"../pages/notifications/notifications.module": [
		741,
		7
	],
	"../pages/profile/profile.module": [
		751,
		17
	],
	"../pages/redeem/redeem.module": [
		742,
		16
	],
	"../pages/search/search.module": [
		743,
		3
	],
	"../pages/settings/settings.module": [
		744,
		15
	],
	"../pages/show-details/show-details.module": [
		745,
		14
	],
	"../pages/sign-in/sign-in.module": [
		346
	],
	"../pages/sign-up/sign-up.module": [
		347
	],
	"../pages/terms/terms.module": [
		746,
		13
	],
	"../pages/testing/testing.module": [
		747,
		12
	],
	"../pages/users/users.module": [
		748,
		11
	],
	"../pages/video-playback/video-playback.module": [
		749,
		10
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
webpackAsyncContext.id = 302;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(697);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(398);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(704);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 390:
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VimeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(61);
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



var VimeoService = /** @class */ (function () {
    function VimeoService(http, db) {
        this.http = http;
        this.db = db;
        this.apiurl = 'https://cvivovimeoapi.herokuapp.com';
        this.vimeoURl = "https://api.vimeo.com";
    }
    ;
    // getHomeScreenGroups() {
    //   this.options = {
    //     headers: this.headersParams
    //   }
    //   return  this.http.get(this.apiurl + '/albums')      
    //    };
    VimeoService.prototype.getCategoriesFromFB = function (channel) {
        return this.db.collection('channels').doc(channel.id).collection('categories').valueChanges();
    };
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
        return this.http.get(this.vimeoURl + '/me/videos?query=' + parameter, this.options);
    };
    ;
    VimeoService.prototype.getChannelsFromFB = function () {
        return this.db.collection('channels').snapshotChanges();
    };
    ;
    VimeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], VimeoService);
    return VimeoService;
}());

//# sourceMappingURL=VimeoService.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import * as io from 'socket.io-client/dist/socket.io.js'

var ChatService = /** @class */ (function () {
    function ChatService(afAuth, db, ng_socket, UserService, alertCtrl, toastCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.ng_socket = ng_socket;
        this.UserService = UserService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ;
    ChatService.prototype.joinChat = function (room) {
        var _this = this;
        this.emprende = __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default.a.connect("https://chatcvivotest.herokuapp.com/" + room);
        // this.ng_socket.connect();
        // this.ng_socket.emit('room',room)    
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.authState.subscribe(function (user) {
                if (user) {
                    _this.uid = user.uid;
                    _this.UserService.getUserInfo(_this.uid).then(function (userInfo) {
                        _this.emprende.emit('set-nickname', userInfo.name);
                        _this.emprende.on('users-changed', function (data) {
                        });
                        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
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
    // getUsers(){
    //     let observable = new Observable(observer =>{
    //       this.socket.on('users-changed',data =>{
    //         observer.next(data);        
    //       })
    //     })
    //     return observable
    //   };
    ChatService.prototype.sendMessage = function (message, room) {
        var _this = this;
        this.emprende.emit('add-message', { text: message, room: room });
        // this.message = '';
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.emprende.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ;
    ChatService.prototype.getMessages = function (room) {
        var _this = this;
        this.emprende = __WEBPACK_IMPORTED_MODULE_7_socket_io_client___default.a.connect("https://chatcvivotest.herokuapp.com/" + room);
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.emprende.on('message', function (data) {
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
    ChatService.prototype.isTyping = function (nickname, room) {
        var _this = this;
        this.emprende.emit('typing', { nickname: nickname, room: room });
        var observable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            _this.emprende.on('isTyping', function (info) {
                observer.next(info);
            });
        });
        return observable;
    };
    ChatService.prototype.disconnect = function () {
        // var socket = io(`http://localhost:3001/Emprendimiento`);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_0_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_4__UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=ChatService.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthService__ = __webpack_require__(73);
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
                                    _this.navCtrl.setRoot('ChannelsPage');
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
        this.navCtrl.push('TermsPage');
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sign-in",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\sign-in\sign-in.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button class="help" ion-button clear (click)="goToHelp()">Ayuda</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" text-center padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-12>\n\n        <p class="sign-in-title">Inicio de sesión</p>\n\n        <div class="sesionContent">\n\n          <ion-item>\n\n            <ion-label floating>Correo</ion-label>\n\n            <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n\n          </ion-item>      \n\n          <ion-item>\n\n            <ion-label floating>Contraseña</ion-label>\n\n            <ion-input  [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n          </ion-item>      \n\n          <button color="netflixRed" ion-button round full (click)="signIn()" >Iniciar sesión</button>\n\n        </div>        \n\n      </ion-col>\n\n      <ion-col col-12 col-lg-12>\n\n        <p (click)="openForgotPass()">¿Olvidaste tu contraseña?</p>\n\n        <p (click)="goToSignUp()">¿Nuevo en C-vivo?\n\n          <strong>Regístrate ahora.</strong>\n\n        </p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n<!--     \n\n  <ion-row>\n\n    <p class="sign-in-title">Inicio de sesión</p>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Correo</ion-label>\n\n      <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Contraseña</ion-label>\n\n      <ion-input  [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n    </ion-item>\n\n\n\n    <button color="netflixRed" ion-button round full (click)="signIn()" >Iniciar sesión</button>\n\n  </ion-row>  \n\n\n\n  <ion-row style="height: 20%; margin-top: 15%;">\n\n    <ion-col>\n\n      <p (click)="openForgotPass()">¿Olvidaste tu contraseña?</p>\n\n      <p (click)="goToSignUp()">¿Nuevo en C-vivo?\n\n        <strong>Regístrate ahora.</strong>\n\n      </p>\n\n    </ion-col>\n\n  </ion-row> -->\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\sign-in\sign-in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_TvShow__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Category__ = __webpack_require__(698);




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

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDeskProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(61);
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

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(131);
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_TvShow__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Season__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Episode__ = __webpack_require__(703);
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

/***/ 408:
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);




Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["disableDebugTools"])();
Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_forgot_password_forgot_password_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sign_in_sign_in_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up_module__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_twitter_connect__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_AuthService__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_ComingSoonService__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_HomeScreenService__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_MoviesService__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_TvShowsService__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_CategoriesService__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_UserService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_DownloadService__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_sqlite__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng_socket_io__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_ChatService__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ionic2_calendar__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common_locales_es__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_speech_recognition__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_base64__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ionic_image_loader__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_help_desk_help_desk__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_google_analytics__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_analytics_analytics__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































Object(__WEBPACK_IMPORTED_MODULE_37__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_38__angular_common_locales_es__["a" /* default */]);
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
Object(__WEBPACK_IMPORTED_MODULE_19_firebase_app__["initializeApp"])(firebaseConfig);
// EmbedVideo.forRoot()
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_tooltips__["b" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_44_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#ComingSoonPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channels/channels.module#ChannelsPageModule', name: 'ChannelsPage', segment: 'channels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grid-list/grid-list.module#GridListPageModule', name: 'GridListPage', segment: 'grid-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horizontal-list/horizontal-list.module#HorizontalListPageModule', name: 'HorizontalListPage', segment: 'horizontal-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylist/mylist.module#MylistPageModule', name: 'MylistPage', segment: 'mylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redeem/redeem.module#RedeemPageModule', name: 'RedeemPage', segment: 'redeem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-details/show-details.module#ShowDetailsPageModule', name: 'ShowDetailsPage', segment: 'show-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/testing/testing.module#TestingPageModule', name: 'TestingPage', segment: 'testing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-playback/video-playback.module#VideoPlaybackPageModule', name: 'VideoPlaybackPage', segment: 'video-playback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#MovieDetailsPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_22_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_sign_in_sign_in_module__["SignInPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_forgot_password_forgot_password_module__["ForgotPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_36_ionic2_calendar__["a" /* NgCalendarModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_23__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__services_ComingSoonService__["a" /* ComingSoonService */],
                __WEBPACK_IMPORTED_MODULE_25__services_HomeScreenService__["a" /* HomeScreenService */],
                __WEBPACK_IMPORTED_MODULE_26__services_MoviesService__["a" /* MoviesService */],
                __WEBPACK_IMPORTED_MODULE_27__services_TvShowsService__["a" /* TvShowsService */],
                __WEBPACK_IMPORTED_MODULE_28__services_CategoriesService__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_29__services_UserService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_30__services_DownloadService__["a" /* DownloadService */],
                __WEBPACK_IMPORTED_MODULE_34__services_ChatService__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_43__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_45__providers_help_desk_help_desk__["a" /* HelpDeskProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_analytics_analytics__["a" /* AnalyticsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 695:
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

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
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
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="no-scroll" text-center >\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n          <img src="assets/imgs/contraseña.png">\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <p class=\'forgot-pass-title\'>¿Olvidaste tu contraseña?</p>\n\n          <p>Por favor ingresa el correo que usaste al momento del registro para obtener las instrucciones de restablecimiento de contraseña</p>\n\n          <ion-item class="inputLg">\n\n            <ion-label floating>Ingresa tu correo</ion-label>\n\n            <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n          </ion-item>\n\n          <button ion-button round full (click)="resetPassword(email)">Enviar</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n    <!-- <div class="image">\n\n      <img src="assets/imgs/contraseña.png">\n\n    </div>\n\n    <ion-row padding> \n\n     <p class=\'forgot-pass-title\'>¿Olvidaste tu contraseña?</p>\n\n    <p>Por favor ingresa el correo que usaste al momento del registro para obtener las instrucciones de restablecimiento de contraseña</p>\n\n       <ion-item>\n\n        <ion-label floating>Ingresa tu correo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="email"></ion-input>\n\n      </ion-item>\n\n      <button ion-button round full (click)="resetPassword(email)">Enviar</button>\n\n    </ion-row> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 698:
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

/***/ 702:
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

/***/ 703:
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

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
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
    function SignUpPage(navCtrl, alertCtrl, afAuth, afs, sqlite, viewCtrl, loadingCtrl, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afs = afs;
        this.sqlite = sqlite;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.signUpSegment = "cancel";
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.errors = { correo: false, confirmPass: false, minLength: false };
        this.emailPattern = "^[a-zA-Z0-9._%+-]+@cun.edu.co";
        this.signUpForm = this.formBuilder.group({
            name: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(this.emailPattern)]],
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password2: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            checked: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].requiredTrue]
        }, { validator: this.checkPasswords });
    }
    SignUpPage.prototype.goToHelp = function () {
        this.navCtrl.push("HelpPage");
    };
    SignUpPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                    cssClass: "btnalert-cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Ok",
                    cssClass: "btnalert-ok",
                }
            ]
        }).present();
    };
    SignUpPage.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.password2.value;
        return pass === confirmPass ? true : { notSame: true };
    };
    SignUpPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    };
    SignUpPage.prototype.signIn = function () {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navCtrl.setRoot("SignInPage");
        });
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
                        _this.afs.collection("users")
                            .doc(uid).set({ email: email, name: name, uid: uid })
                            .then(function (fsRes) {
                            console.log(fsRes);
                            if (newUser) {
                                _this.afAuth.auth.currentUser.sendEmailVerification().then(function (res) {
                                    _this.showAlert("Hemos enviado un link al correo " + email + " para verificar tu cuenta", "Verfica tu Email");
                                });
                                _this.navCtrl.push("SignInPage");
                                // this.navCtrl.insert(0,TabsPage);
                                // this.navCtrl.popToRoot();
                            }
                        }, function (err) {
                            loading.dismiss();
                            _this.showAlert(err, "Error AFST");
                        });
                    }, function (err) {
                        loading.dismiss();
                        switch (err.code) {
                            case "auth/invalid-email":
                                _this.showAlert("Revisa el formato del correo ejemplo@cun.edu.co", "Correo Invalido");
                                break;
                            case "auth/email-already-in-use":
                                _this.showAlert("Este correo ya se encuentra registrado", "Correo en uso");
                                break;
                            case "auth/operation-not-allowed":
                                _this.showAlert("Este usuario se encuetra inactivo. ", "Usuario inactivo");
                                break;
                            case "auth/weak-password":
                                _this.showAlert("Esta contraseña no cumple con los requerimientos de seguridad  . ", "Contraseña Insegura");
                                break;
                            default:
                                break;
                        }
                    });
                }
                catch (err) {
                    this.showAlert(err, "Error FnSgup");
                }
                return [2 /*return*/];
            });
        });
    };
    SignUpPage.prototype.terminos = function () {
        this.navCtrl.push("TermsPage");
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sign-up",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n    <ion-buttons right>\n\n      <button class="navbar-button" ion-button clear (click)="signIn()">INICIAR SESIÓN</button>\n\n      <button class="navbar-button" ion-button clear (click)="goToHelp()">AYUDA</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6 >\n\n          <img class="marginLg" src="assets/imgs/netflix-signup.png">\n\n          <p class="title">Aprende y emprende </p>\n\n          <p class="subtitle">No es suficiente solo con ver </p>\n\n      </ion-col>\n\n      <ion-col col-lg-6 pull>\n\n        <div class="formReg">\n\n          <form [formGroup]="signUpForm"  (ngSubmit)="signUp()" padding >\n\n            <p class="sign-up-title"> Registro</p>\n\n            <ion-item>\n\n              <ion-label floating>Nombre completo</ion-label>\n\n              <ion-input type="text" formControlName="name" required  ></ion-input>              \n\n            </ion-item>          \n\n            <ion-item>\n\n              <ion-label floating>Correo</ion-label>\n\n              <ion-input type="email" formControlName="email" [email]="true" required  ></ion-input>                \n\n            </ion-item>     \n\n            <ion-item>\n\n              <ion-label floating>Contraseña</ion-label>\n\n              <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password" required [minlength]=6></ion-input>\n\n              <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label floating>Confirmar contraseña</ion-label>\n\n              <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password2"  required></ion-input>                 \n\n            </ion-item>\n\n            <div class="condiciones" col-11 col-lg-11>\n\n              <ion-checkbox  color="netflixRed" formControlName="checked" checked="false"></ion-checkbox>\n\n              <label>Al registrarme estoy Aceptando los <span color="netflixRed" (click)="terminos()">Términos y Condiciones de uso de CVIVO</span></label>\n\n           </div>\n\n            <button class="signup-button" color="netflixRed" ion-button round  full  [disabled]=!signUpForm.valid>REGISTRARSE</button>\n\n            <div style="color: #CA5F45" class="alert alert-danger">\n\n              <div *ngIf="signUpForm.hasError(\'notSame\')">\n\n                *Las contraseñas no coinciden.\n\n              </div>\n\n              <div *ngIf="signUpForm.controls[\'email\'].hasError(\'pattern\')">\n\n                * Tu correo tiene que tener el siguiente formato ejemplo@cun.edu.co\n\n              </div>       \n\n              <div  *ngIf="signUpForm.controls[\'password\'].hasError(\'minlength\')">\n\n                * la contraseña debe tener minimo 6 caracteres\n\n              </div>\n\n            </div>\n\n          </form>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n<!-- \n\n  <div class="image">\n\n    <img src="assets/imgs/netflix-signup.png">\n\n  </div>\n\n\n\n  <ion-row style="margin-top: -60px;">\n\n    <ion-col text-center>\n\n      <p class="title">Aprende y emprende </p>\n\n      <p class="subtitle">No es suficiente solo con ver </p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <br>\n\n  <form [formGroup]="signUpForm"  (ngSubmit)="signUp()" padding >\n\n  <ion-row>\n\n    <p class="sign-up-title"> Registro</p>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Nombre completo</ion-label>\n\n        <ion-input type="text" formControlName="name" required  ></ion-input>\n\n      \n\n      </ion-item>  \n\n  \n\n      <ion-item>\n\n          <ion-label floating>Correo</ion-label>\n\n          <ion-input type="email" formControlName="email" [email]="true" required  ></ion-input>\n\n        \n\n        </ion-item>     \n\n        <ion-item>\n\n          <ion-label floating>Contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password" required [minlength]=6></ion-input>\n\n          <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Confirmar contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password2"  required></ion-input>\n\n         \n\n        </ion-item>\n\n    \n\n        <button class="signup-button" color="netflixRed" ion-button round  full  [disabled]=!signUpForm.valid>REGISTRARSE</button>\n\n       <br>\n\n        <div style="color: #CA5F45" \n\n          class="alert alert-danger">\n\n         <div *ngIf="signUpForm.hasError(\'notSame\')">\n\n            *Las contraseñas no coinciden.\n\n        </div>\n\n        <div *ngIf="signUpForm.controls[\'email\'].hasError(\'pattern\')">\n\n           * Tu correo tiene que tener el siguiente formato ejemplo@cun.edu.co\n\n        </div>       \n\n        <div  *ngIf="signUpForm.controls[\'password\'].hasError(\'minlength\')">\n\n           * la contraseña debe tener minimo 6 caracteres\n\n        </div>\n\n      </div>\n\n    \n\n  \n\n   </ion-row>\n\n  </form> -->\n\n  <!-- <br>\n\n  <p class="questions">Questions? Phone 1800 071 578</p>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Help Centre</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Terms of Use</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Privacy</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Cookie Preferences</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <p class="footer-text">Netflix Australia</p> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\sign-up\sign-up.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_UserService__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_DownloadService__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_analytics_analytics__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__ = __webpack_require__(391);
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
        this.rootPage = "SignInPage";
        this.homeScreenGroups = [];
        // this.initializeApp();
        this.platform.ready().then(function () {
            // okay, so the platform is ready and our plugins are available.
            // here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        // this.downloadService.load();
        this.authService.afAuth.authState.subscribe(function (user) {
            if (user.emailVerified === true) {
                var dataToPost = { email: user.email, timestamp: new Date().toLocaleString() };
                _this.userService.postLog(dataToPost);
                _this.rootPage = "RedeemPage";
                // this.userService.addUser(user);
                // this.zone.run(() => {
                //   this.rootPage = TabsPage;
                // });
            }
        }, function (error) {
            console.error(JSON.stringify(error));
        });
    }
    // tslint:disable-next-line: typedef
    MyApp.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel",
                    cssClass: "btnalert-cancel",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Ok",
                    cssClass: "btnalert-ok"
                }
            ]
        }).present();
    };
    // tslint:disable-next-line: typedef
    MyApp.prototype.ionViewDidEnter = function () {
        this.analyticsProvider.startTrackerWithId("UA-138040570-1");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_7__providers_analytics_analytics__["a" /* AnalyticsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
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


var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.tab1Root = 'HomePage';
        this.tab2Root = 'SearchPage';
        this.tab3Root = 'ComingSoonPage';
        this.tab4Root = 'ProfilePage';
        this.tab5Root = 'ChannelsPage';
        this.homeParams = this.navParams.get('categories');
        platform.ready().then(function () {
            _this.width = platform.width();
            console.log(_this.width);
            if (_this.width >= 992) {
                _this.navCtrl.setRoot('HomePage', _this.homeParams);
                console.log(_this.width);
            }
        });
    }
    ;
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs color="netflixBlack" selectedIndex="0">\n\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home" [rootParams]="homeParams"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Buscar" tabIcon="md-search"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Parrilla" tabIcon="md-laptop"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Canales" tabIcon="albums"></ion-tab>   \n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="md-person"></ion-tab>                 \n\n</ion-tabs>\n\n          \n\n \n\n\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__ = __webpack_require__(727);
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

/***/ 727:
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

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(132);
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_twitter_connect__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import * as firebase from "firebase";
var AuthService = /** @class */ (function () {
    function AuthService(alertCtrl, afAuth, platform, fb, googlePlus, twitter, db) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.twitter = twitter;
        this.db = db;
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
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a
                    .auth()
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
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.FacebookAuthProvider())
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
                var googleCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.GoogleAuthProvider.credential(res.idToken);
                __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a
                    .auth()
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
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.GoogleAuthProvider())
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
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.TwitterAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.GithubAuthProvider())
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
        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth().signOut();
    };
    AuthService.prototype.forgotPassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a
            .app()
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
    ;
    AuthService.prototype.checkCoupon = function (coupon) {
        return this.db.collection('coupons', function (ref) { return ref.where('cupon', "==", coupon); }).valueChanges();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_firestore__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ })

},[411]);
//# sourceMappingURL=main.js.map