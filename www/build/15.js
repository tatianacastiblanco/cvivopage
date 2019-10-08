webpackJsonp([15],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AuthService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__ = __webpack_require__(348);
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
            this.navCtrl.push('AboutUsPage');
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
        this.navCtrl.setRoot('HomePage');
    };
    ProfilePage.prototype.parrilla = function () {
        this.navCtrl.setRoot('ComingSoonPage');
    };
    ProfilePage.prototype.buscar = function () {
        this.navCtrl.setRoot('SearchPage');
    };
    ProfilePage.prototype.perfil = function () {
        this.navCtrl.setRoot('ProfilePage');
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
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a
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
    ProfilePage.prototype.terminos = function () {
        this.navCtrl.push('TermsPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('snapShotCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], ProfilePage.prototype, "canvast", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\profile\profile.html"*/'<ion-header no-border>\n\n    <ion-grid>\n\n      <ion-row class="padTitle">\n\n        <ion-col col-12 col-lg-4>\n\n                <ion-navbar>  \n\n                  <ion-item  no-lines>\n\n                      <ion-avatar item-start>               \n\n                        <img [src]="myPhoto">\n\n                      </ion-avatar>\n\n                      <h2>{{userName}}</h2>       \n\n                    </ion-item>\n\n                </ion-navbar>   \n\n            \n\n        </ion-col>\n\n        <ion-col col-lg-8 [hidden]="menu">\n\n          <div >\n\n            <ion-segment [(ngModel)]="menuhead">\n\n              <ion-segment-button value="home"   class="segmenthead"  (click)="home()"> <ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n              <ion-segment-button value="buscar" class="segmenthead"  (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n              <ion-segment-button value="parrilla" class="segmenthead"(click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n              <ion-segment-button value="perfil"   class="segmenthead" > <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n              <ion-segment-button value="salir"    class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n            </ion-segment>\n\n          </div>         \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    \n\n  </ion-header>\n\n<ion-content padding >\n\n<!-- <ion-header>   \n\n        <ion-navbar>  \n\n          <ion-item  no-lines>\n\n             <ion-avatar item-start>               \n\n               <img [src]="myPhoto">\n\n             </ion-avatar>\n\n             <h2>{{userName}}</h2>       \n\n           </ion-item>\n\n       </ion-navbar>   \n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n  <ion-list class="top-menu-list">\n\n    <!-- <ion-item (click)="goToNotifications()">\n\n      <ion-icon name="md-notifications" item-start></ion-icon>\n\n      <p>Notifications</p>\n\n    </ion-item> -->\n\n\n\n    <ion-item (click)="goToMyList()">\n\n      <ion-icon name="list-box" item-start></ion-icon>\n\n      <p>Mi lista</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list no-lines class="user-menu-list">\n\n\n\n    <!-- Seccion foto de perfil -->\n\n    <ion-item  (click)="profilePhotobtn(handleError)">\n\n        <ion-icon name="camera" item-start color="netflixWhite"  ></ion-icon>\n\n        <p> Foto de perfil</p>\n\n    </ion-item>\n\n    \n\n    <ion-item  [hidden]="!isCordovaWithoutCamera"  >\n\n        <ion-label>Seleccionar foto de perfil</ion-label>\n\n        <br>\n\n        <ion-input type="file" accept="image/*" (change)="changeListener($event)" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item text-center [hidden]="!isCordovaWithCamera">       \n\n            <video id="gum-local" autoplay playsinline width="200px" height="200px" ></video>  \n\n            <button ion-button block round (click)="snapshotButton()"><ion-icon name="camera" ></ion-icon></button>       \n\n      </ion-item>\n\n\n\n      <!-- fin seccion foto de perfil -->\n\n   \n\n\n\n    <ion-item (click)="goToAboutUs()">\n\n        <ion-icon name="body" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Acerca de nosotros</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="terminos()">\n\n        <ion-icon name="clipboard" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Términos y condiciones de uso</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="goToHelp()">\n\n        <ion-icon name="help-buoy" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Ayuda</p>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <p>Términos y condiciones</p>\n\n    </ion-item> -->\n\n\n\n    <ion-item (click)="signOut()">\n\n        <ion-icon name="log-out" item-start color="netflixWhite" ></ion-icon>\n\n      <p>Cerrar sesión</p>\n\n    </ion-item>\n\n\n\n  </ion-list>  \n\n  \n\n  <canvas #snapShotCanvas [hidden]="true"></canvas>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=15.js.map