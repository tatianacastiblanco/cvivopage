webpackJsonp([2,4],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_embed_video__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat_module__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(618);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_1__chat_chat_module__["ChatPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0_ngx_embed_video__["EmbedVideo"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]
            ]
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skeleton_item_skeleton_item__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(620);
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
            selector: 'skeleton-item',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\components\skeleton-item\skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\components\skeleton-item\skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 620:
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
            selector: 'menu',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\components\menu\menu.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12 col-lg-2 >\n\n      <ion-navbar align-title="center" transparent >\n\n        <ion-title>\n\n          <img src="assets/imgs/netflix-logo.png">\n\n        </ion-title>   \n\n      </ion-navbar>\n\n    </ion-col>\n\n    <ion-col col-lg-10 >\n\n      <div >\n\n        <ion-segment [(ngModel)]="menuhead">\n\n          <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n          <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n          <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid> \n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\components\menu\menu.html"*/
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

/***/ 621:
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

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, viewCtrl, db, chatService, _DomSanitizationService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.chatService = chatService;
        this._DomSanitizationService = _DomSanitizationService;
        this.alertCtrl = alertCtrl;
        this.messages = [];
        this.offStatus = false;
        this.photosArray = new Array;
        this.message = '';
        this.isLoading = true;
        this.photosArray = [];
        this.messages = [];
        this.chatService.getMessages().subscribe(function (message) {
            var prueba = _this.getCurrentUserPhoto(message['from']);
            message['picture'] = _this._DomSanitizationService.bypassSecurityTrustResourceUrl(prueba);
            _this.messages.push(message);
            setTimeout(function () {
                if (_this.offStatus === false) {
                    _this.content.scrollToBottom(1000);
                }
            }, 50);
            var objToSave = {
                created: message['created'],
                from: message['from'],
                text: message['text']
            };
            _this.db.collection('chats').doc(_this.event).collection('chatLog').doc('chatLog' + message['created']).set(objToSave);
        });
    }
    ;
    //Fin constructor
    ChatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.getChatSection();
        if (this.photosArray.length == 0) {
            this.db.collection('photos').valueChanges().forEach(function (elem) {
                _this.photosArray.push(elem);
            });
        }
    };
    ;
    /**
     * Observable para desactivar chat o para establecer nickname y evento.
     */
    ChatPage.prototype.getChatSection = function () {
        var _this = this;
        this.ConfigCollection = this.db.collection('Config');
        this.ConfigCollection.valueChanges().subscribe(function (res) {
            if (!res[0]['Vivo']) {
                _this.viewCtrl.dismiss();
            }
            _this.event = res[0]['chatEvent'];
            localStorage.setItem('chatEvent', _this.event);
            _this.chatService.joinChat().then(function (nickname) {
                _this.nickname = nickname.name.toString();
                _this.emailUserChat = nickname.email.toString();
                _this.loadMessges();
            }, function (err) { return _this.showAlert(err, 'Error FbConfig'); });
        });
    };
    ;
    /**
     * Funcion para cargar mensajes y llenar array.
     */
    ChatPage.prototype.loadMessges = function () {
        var _this = this;
        if (this.messages.length === 0) {
            this.event = localStorage.getItem('chatEvent');
            var docref = this.db.collection('chats').doc(this.event).collection('chatLog', function (ref) { return ref.orderBy('created'); });
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
                setTimeout(function () {
                    if (_this.offStatus === false) {
                        _this.content.scrollToBottom(0);
                        _this.isLoading = false;
                    }
                }, 0);
            });
        }
    };
    ;
    /**
     * Funcion que envia un mensaje por meido de SOCKET.IO
     */
    ChatPage.prototype.sendMessage = function () {
        if (this.message !== '') {
            this.chatService.sendMessage(this.message);
            this.message = '';
        }
    };
    ChatPage.prototype.getCurrentUserPhoto = function (name) {
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
    /**
     * Funcion para mostrar una alerta personalizada
     * @param message mensaje para mostrar en el body de la alerta
     * @param title  titulo para mostrar en el encabezado de la alerta
     */
    ChatPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
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
    /**
     * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
     * @param key codigo de la tecla presionada
     */
    ChatPage.prototype.keyPress = function (key) {
        if (key === 13 && this.message !== '') {
            this.sendMessage();
        }
    };
    ;
    ChatPage.prototype.close = function () {
        this.viewCtrl.dismiss();
        this.chatService.disconnect();
        this.nickname = '';
        this.messages = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="close()" >\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n      <ion-title>Chat</ion-title>\n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content >\n\n  <div *ngIf="isLoading">\n\n      <div *ngFor="let i of [1,2,3,4]">\n\n          <skeleton-item  height="100px"  class="right-bubble-skeleton " ></skeleton-item>\n\n          <skeleton-item  height="100px"  class="left-bubble-skeleton "> </skeleton-item>\n\n      </div>\n\n  </div>  \n\n    \n\n  \n\n  <div *ngFor="let message of messages" >\n\n      <div class="chat-message" text-right  *ngIf="message?.from === nickname" >\n\n          <div class="right-bubble">\n\n            <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n        </div>\n\n        <div class="chat-message" text-left  *ngIf="message?.from !== nickname" >\n\n          <div class="left-bubble">\n\n              <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n      </div>\n\n  </div>\n\n   \n\n   \n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-item class="chat-item">    \n\n        <ion-input class="chat-input" [disabled]="isLoading"  [(ngModel)]="message" type="text" placeholder="Escribe tu mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      </ion-item>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right color="netflixBlue" (click)="sendMessage()" [disabled]="isLoading">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], ChatPage);
    return ChatPage;
}());

;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(754);
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(13);
var map_1 = __webpack_require__(334);
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(28);
var embed_video_service_1 = __webpack_require__(756);
__export(__webpack_require__(756));
var EmbedVideo = /** @class */ (function () {
    function EmbedVideo() {
    }
    EmbedVideo_1 = EmbedVideo;
    EmbedVideo.forRoot = function () {
        return {
            ngModule: EmbedVideo_1,
            providers: [embed_video_service_1.EmbedVideoService]
        };
    };
    var EmbedVideo_1;
    EmbedVideo = EmbedVideo_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [],
            exports: [],
            providers: [embed_video_service_1.EmbedVideoService]
        })
    ], EmbedVideo);
    return EmbedVideo;
}());
exports.EmbedVideo = EmbedVideo;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(51);
var platform_browser_1 = __webpack_require__(47);
var operators_1 = __webpack_require__(24);
var EmbedVideoService = /** @class */ (function () {
    function EmbedVideoService(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.validYouTubeOptions = [
            'default',
            'mqdefault',
            'hqdefault',
            'sddefault',
            'maxresdefault'
        ];
        this.validVimeoOptions = [
            'thumbnail_small',
            'thumbnail_medium',
            'thumbnail_large'
        ];
        this.validDailyMotionOptions = [
            'thumbnail_60_url',
            'thumbnail_120_url',
            'thumbnail_180_url',
            'thumbnail_240_url',
            'thumbnail_360_url',
            'thumbnail_480_url',
            'thumbnail_720_url',
            'thumbnail_1080_url'
        ];
    }
    EmbedVideoService.prototype.embed = function (url, options) {
        var id;
        url = new URL(url);
        id = this.detectYoutube(url);
        if (id) {
            return this.embed_youtube(id, options);
        }
        id = this.detectVimeo(url);
        if (id) {
            return this.embed_vimeo(id, options);
        }
        id = this.detectDailymotion(url);
        if (id) {
            return this.embed_dailymotion(id, options);
        }
    };
    EmbedVideoService.prototype.embed_youtube = function (id, options) {
        options = this.parseOptions(options);
        return this.sanitize_iframe('<iframe src="https://www.youtube.com/embed/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_vimeo = function (id, options) {
        options = this.parseOptions(options);
        return this.sanitize_iframe('<iframe src="https://player.vimeo.com/video/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_dailymotion = function (id, options) {
        options = this.parseOptions(options);
        return this.sanitize_iframe('<iframe src="https://www.dailymotion.com/embed/video/'
            + id + options.query + '"' + options.attr
            + ' frameborder="0" allowfullscreen></iframe>');
    };
    EmbedVideoService.prototype.embed_image = function (url, options) {
        var id;
        url = new URL(url);
        id = this.detectYoutube(url);
        if (id) {
            return this.embed_youtube_image(id, options);
        }
        id = this.detectVimeo(url);
        if (id) {
            return this.embed_vimeo_image(id, options);
        }
        id = this.detectDailymotion(url);
        if (id) {
            return this.embed_dailymotion_image(id, options);
        }
    };
    EmbedVideoService.prototype.embed_youtube_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validYouTubeOptions.indexOf(options.image) > 0 ? options.image : 'default';
        var src = 'https://img.youtube.com/vi/' + id + '/' + options.image + '.jpg';
        var result = {
            link: src,
            html: '<img src="' + src + '"/>'
        };
        return new Promise(function (resolve) {
            resolve(result);
        });
    };
    EmbedVideoService.prototype.embed_vimeo_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validVimeoOptions.indexOf(options.image) >= 0 ? options.image : 'thumbnail_large';
        return this.http.get('https://vimeo.com/api/v2/video/' + id + '.json').pipe(operators_1.map(function (res) {
            return {
                'link': res[0][options.image],
                'html': '<img src="' + res[0][options.image] + '"/>'
            };
        }))
            .toPromise()
            .catch(function (error) { return console.log(error); });
    };
    EmbedVideoService.prototype.embed_dailymotion_image = function (id, options) {
        if (typeof options === 'function') {
            options = {};
        }
        options = options || {};
        options.image = this.validDailyMotionOptions.indexOf(options.image) >= 0 ? options.image : 'thumbnail_480_url';
        return this.http.get('https://api.dailymotion.com/video/' + id + '?fields=' + options.image)
            .pipe(operators_1.map(function (res) {
            return {
                'link': res[options.image],
                'html': '<img src="' + res[options.image] + '"/>'
            };
        }))
            .toPromise()
            .catch(function (error) { return console.log(error); });
    };
    EmbedVideoService.prototype.parseOptions = function (options) {
        var queryString = '', attributes = '';
        if (options && options.hasOwnProperty('query')) {
            queryString = '?' + this.serializeQuery(options.query);
        }
        if (options && options.hasOwnProperty('attr')) {
            var temp_1 = [];
            Object.keys(options.attr).forEach(function (key) {
                temp_1.push(key + '="' + (options.attr[key]) + '"');
            });
            attributes = ' ' + temp_1.join(' ');
        }
        return {
            query: queryString,
            attr: attributes
        };
    };
    EmbedVideoService.prototype.serializeQuery = function (query) {
        var queryString = [];
        for (var p in query) {
            if (query.hasOwnProperty(p)) {
                queryString.push(encodeURIComponent(p) + '=' + encodeURIComponent(query[p]));
            }
        }
        return queryString.join('&');
    };
    EmbedVideoService.prototype.sanitize_iframe = function (iframe) {
        return this.sanitizer.bypassSecurityTrustHtml(iframe);
    };
    EmbedVideoService.prototype.detectVimeo = function (url) {
        return (url.hostname === 'vimeo.com') ? url.pathname.split('/')[1] : null;
    };
    EmbedVideoService.prototype.detectYoutube = function (url) {
        if (url.hostname.indexOf('youtube.com') > -1) {
            return url.search.split('=')[1];
        }
        if (url.hostname === 'youtu.be') {
            return url.pathname.split('/')[1];
        }
        return '';
    };
    EmbedVideoService.prototype.detectDailymotion = function (url) {
        if (url.hostname.indexOf('dailymotion.com') > -1) {
            return url.pathname.split('/')[2].split('_')[0];
        }
        if (url.hostname === 'dai.ly') {
            return url.pathname.split('/')[1];
        }
        return '';
    };
    EmbedVideoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            platform_browser_1.DomSanitizer])
    ], EmbedVideoService);
    return EmbedVideoService;
}());
exports.EmbedVideoService = EmbedVideoService;
//# sourceMappingURL=embed-video.service.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ChatService__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_Helper__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_HomeScreenGroupItem__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroup__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_embed_video__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_embed_video__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    //slides: any;
    function HomePage(navCtrl, platform, alertCtrl, db, embedService, chatService, toastCtrl, VimeoService, events, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.embedService = embedService;
        this.chatService = chatService;
        this.toastCtrl = toastCtrl;
        this.VimeoService = VimeoService;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.homeScreenGroups = [];
        this.segementHome = 'list';
        this.chatEnable = false;
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
        this.isModalOpen = false;
        this.badge = 0;
        this.hideBadge = true;
        this.currentPageVar = 'home';
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
                _this.widthFrame = "92%";
                _this.heightFrame = 500;
            }
        });
        this.db.collection('Config').valueChanges().subscribe(function (res) {
            _this.event = res[0]['chatEvent'];
            _this.chatEnable = res[0]['Vivo'];
            _this.hideBadge = !_this.chatEnable;
            console.log(res[0]['Vivo']);
            localStorage.setItem('chatEvent', _this.event);
        });
    }
    ;
    //Fin cosntructor
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||                 
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||    Inicio funciones    ||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||
    // Funicone de ciclo de vida (lifecycle)
    HomePage.prototype.ionViewWillLeave = function () {
        this.iframe_html = '';
    };
    ;
    HomePage.prototype.ionViewDidLeave = function () {
        this.iframe_html = '';
    };
    ;
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.event = localStorage.getItem('chatEvent');
        var docref = this.db.collection('chats').doc(this.event).collection('chatLog', function (ref) { return ref.orderBy('created'); });
        docref.valueChanges().subscribe(function (res) {
            if (!_this.isModalOpen && res.length > 0 && _this.chatEnable) {
                _this.badge += 1;
                _this.hideBadge = false;
            }
        });
        this.gethomeVideo().then(function () { });
    };
    /**
     *Funcion de ciclo de vida que se ejecuta cuando la vista ha cargado,
     * ejecuta la funcion gethomeVideo() y posteriormente getHomeGroups()
     * @memberof HomePage
     */
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.gethomeVideo().then(function () {
            _this.getHomeGroups().then(function () {
                setTimeout(function () {
                    _this.loaded = true;
                }, 2000);
            }).catch(function (err) {
                _this.showAlert(err, 'Error de conexion');
            });
        }, function (err) {
            _this.showAlert(err, 'Error de conexion');
        });
    };
    ;
    // Fin funciones ciclo de vida
    /**
     * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
     * seguro para efectuar el INNERHTML en el DOM.
     * @returns
     * @memberof HomePage
     */
    HomePage.prototype.gethomeVideo = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('Config').valueChanges().subscribe(function (res) {
                _this.iframe_html = _this.embedService.embed_vimeo(res[0]['Idvivo'], {
                    query: { autoplay: 1, loop: 1, color: 'ffff', portrait: 0 },
                    attr: { width: _this.widthFrame, height: _this.heightFrame, }
                });
                resolve({ videoConfig: res });
            }, function (err) { reject(err); });
        });
        return promise;
    };
    ;
    //Fin gethomeVideo()
    /**
     *funcion que utiliza la api de vimeo para traer las categorias de Vimeo
     *
     * @returns
     * @memberof HomePage
     */
    HomePage.prototype.getHomeGroups = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.VimeoService.getHomeScreenGroups().subscribe(function (res) {
                _this.homeScreenGroups = [];
                var collection = res;
                collection.forEach(function (element) {
                    var homeGropuModel = new __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                    homeGropuModel.name = element.name;
                    homeGropuModel.groupId = element.metadata.connections.videos.uri;
                    homeGropuModel.groupItems = [];
                    _this.homeScreenGroups.push(homeGropuModel);
                    _this.homeScreenGroups = __WEBPACK_IMPORTED_MODULE_5__data_Helper__["a" /* Helper */].shuffle(_this.homeScreenGroups);
                });
                _this.homeScreenGroups.forEach(function (element) {
                    /************************** En  esta seccion se recorre cada categoria y se obtiene los videos de la misma por meido de la api de vimeo *******************************************/
                    _this.VimeoService.getHomeScreenGroupsVideos(element).subscribe(function (result) {
                        var videos = result;
                        videos.data.forEach(function (item) {
                            var video = new __WEBPACK_IMPORTED_MODULE_6__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                            video.name = item.name;
                            video.picture = item.files[2].link;
                            video.description = item.description;
                            video.detailsPicture = item.pictures.sizes[6].link;
                            video.movieId = item.uri.split('/')[2];
                            element.groupItems.push(video);
                            element = __WEBPACK_IMPORTED_MODULE_5__data_Helper__["a" /* Helper */].shuffle(element);
                        });
                    }, function (err) { return reject(err); });
                });
                resolve();
            }, function (err) { return reject(err); }); //Fin subscripcion getHomeScreenGroups()
        }); //Fin promesa
        return promise;
    };
    ;
    // Fin getHomeGroups()
    /**
     * FUncion que abre la modal de chatPage
     *
     * @memberof HomePage
     */
    HomePage.prototype.presentChatModal = function () {
        var _this = this;
        var CcssClass = this.menu == true ? '' : 'custom-modal';
        var options = {
            showBackdrop: false,
            enableBackdropDismiss: true,
            cssClass: CcssClass
        };
        var chatModal = this.modalCtrl.create('ChatPage', {}, options);
        chatModal.onWillDismiss(function () {
            _this.isModalOpen = false;
        });
        chatModal.present().then(function () {
            _this.isModalOpen = true;
            _this.badge = 0;
            _this.hideBadge = true;
        });
    };
    ;
    //Fin presentChatModal()
    /**
     *
     *Funcion para abrir la pagina de detalles del video
     * @param {HomeScreenGroupItem} groupItem objeto con la informacion del video
     * @memberof HomePage
     */
    HomePage.prototype.goToGroupItemDetails = function (groupItem) {
        this.navCtrl.push("MovieDetailsPage", { movieId: groupItem });
    };
    ;
    /**
     * Funcion para mover un slide hacia la derecha
     * @param {number} index
     * @memberof HomePage
     */
    HomePage.prototype.moveNext = function (index) {
        this.slides.toArray()[index].slideNext();
    };
    ;
    //Fin moveNext()
    /**
     * Funcion para mover un slide hacia la izquierda
     * @param {number} index
     * @memberof HomePage
     */
    HomePage.prototype.movePrev = function (index) {
        this.slides.toArray()[index].slidePrev();
    };
    ;
    //Fin movePrev()
    /**
     * Funcion que se ejecuta al hacer swipe down en la pantalla
     * para recargar el video
     * @param {*} refresher
     * @memberof HomePage
     */
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.loaded = false;
        this.gethomeVideo().then(function (res) {
            _this.getHomeGroups().then(function () {
                refresher.complete();
                _this.loaded = true;
            });
        }, function (err) {
            _this.showAlert(err, 'Error al cargar');
            refresher.complete();
        }).catch(function () { return refresher.complete(); });
        setTimeout(function () {
            refresher.complete();
        }, 3000);
    };
    ;
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||                 
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||        Helpers         ||||||||||||||||||||||||||||||||||||||||||
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||------------------------||||||||||||||||||||||||||||||||||||||||||
    /**
     * Funcion para mostrar un toaster con cualuiqer funcion/metodo
     *
     * @param {*} msg cadena de texto para mostrar
     * @memberof HomePage
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
     * @memberof HomePage
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <menu  [hidden]="menu" [currentPage]="currentPageVar"></menu> \n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page"  padding #pageContent >  \n\n    \n\n    <ion-fab bottom right >\n\n        <ion-badge color="netflixBlue" [hidden]="hideBadge">{{badge}}</ion-badge>   \n\n        <button ion-fab [disabled]="!chatEnable" (click)="presentChatModal()" *ngIf="loaded"><ion-icon name="ios-chatbubbles"></ion-icon>        \n\n        </button>         \n\n        <skeleton-item height="50px" width="50px" rounded  *ngIf="!loaded" ></skeleton-item>\n\n    </ion-fab>\n\n\n\n  <!-- Refresher para actualizar el video en vivo -->\n\n  <ion-grid>\n\n    <ion-row pull-lg-9>\n\n      <ion-col col-12 >\n\n        <ion-refresher (ionRefresh)="doRefresh($event)" pullMin=200>\n\n          <ion-refresher-content \n\n            pullingIcon="refresh-circle"\n\n            refreshingSpinner="bubbles">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6>\n\n        <div  *ngIf="!loaded">\n\n            <skeleton-item  *ngIf="!menu" height="400px" style="margin: 20px"></skeleton-item>\n\n            <skeleton-item  *ngIf="menu" height="200px"></skeleton-item>\n\n        </div>\n\n        \n\n          <div [innerHtml]="iframe_html" [ngClass]="{\'iframe\': !menu}"  [hidden]="!loaded"></div>\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-6>\n\n          <br>  \n\n          <skeleton-item  height="56px" *ngIf="!loaded"></skeleton-item>      \n\n        <ion-toolbar color="primary"  *ngIf="segementHome == \'list\' && loaded">\n\n            <ion-title color="light">Categorias</ion-title>\n\n          </ion-toolbar>\n\n          <br>\n\n\n\n          \n\n          <ion-grid *ngIf="!loaded" >\n\n            <ion-row>\n\n                <div class="item-title" > \n\n                  <skeleton-item  *ngIf="!menu"  height="22px" width="170px"></skeleton-item>\n\n                  <skeleton-item  *ngIf="menu"    width="120px"></skeleton-item>\n\n                </div> \n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col >\n\n                  <skeleton-item  *ngIf="!menu"  height="366px" style="border-radius: 00px"></skeleton-item>\n\n                  <skeleton-item  *ngIf="menu"  height="180px" ></skeleton-item>\n\n              </ion-col>\n\n              <ion-col >\n\n                  <skeleton-item  *ngIf="!menu"  height="366px"></skeleton-item>\n\n                  <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n              </ion-col>\n\n              <ion-col >\n\n                  <skeleton-item   *ngIf="!menu"  height="366px"></skeleton-item>\n\n                  <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <div class="item-title"> \n\n                  <skeleton-item   *ngIf="!menu" height="22px" width="170px"></skeleton-item> \n\n                  <skeleton-item  *ngIf="menu"    width="120px"></skeleton-item>\n\n                 </div> \n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"  height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"   height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"   height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <div class="item-title"> \n\n                  <skeleton-item   *ngIf="!menu" height="22px" width="170px"></skeleton-item> \n\n                  <skeleton-item  *ngIf="menu"    width="120px"></skeleton-item>\n\n                 </div> \n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"  height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"   height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n                <ion-col >\n\n                    <skeleton-item  *ngIf="!menu"   height="366px"></skeleton-item>\n\n                    <skeleton-item  *ngIf="menu"   height="180px" ></skeleton-item>\n\n                </ion-col>\n\n              </ion-row>\n\n          </ion-grid>                   \n\n          \n\n\n\n          <div   >             \n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar >   \n\n            <div >\n\n              \n\n              <div class="item-title">{{homeScreenGroups[0]?.name}} </div>                      \n\n              <ion-slides *ngIf="homeScreenGroups[0]?.groupItems && homeScreenGroups[0]?.groupItems.length" autoplay="3000" slidesPerView="3" spaceBetween=12 zoom=true loop=true paginationType="fraction">                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[0]?.groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides>\n\n              <button *ngIf="!menu" (click)="movePrev(0)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button  *ngIf="!menu" (click)="moveNext(0)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[1]?.name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12     >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[1]?.groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(1)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(1)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>\n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[2]?.name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[2]?.groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(2)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button  *ngIf="!menu" (click)="moveNext(2)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[3]?.name}} </div> \n\n              <ion-slides slidesPerView="3" spaceBetween=15   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[3]?.groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(3)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(3)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[4]?.name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[4]?.groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(4)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(4)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n            <div class="item-title">{{homeScreenGroups[5]?.name}}</div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[5]?.groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides> \n\n            <button *ngIf="!menu" (click)="movePrev(5)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button  *ngIf="!menu" (click)="moveNext(5)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[6]?.name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[6]?.groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides>\n\n            <button  *ngIf="!menu"(click)="movePrev(6)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button  *ngIf="!menu"(click)="moveNext(6)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n          </div>  \n\n          </ion-scroll> \n\n        </div>      \n\n      </ion-col>\n\n    </ion-row>\n\n   </ion-grid>  \n\n  </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ngx_embed_video__["EmbedVideoService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_1__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ModalController */]])
    ], HomePage);
    return HomePage;
    var _a;
}()); // Fin homePage

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map