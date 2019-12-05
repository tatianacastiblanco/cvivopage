webpackJsonp([4],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat__ = __webpack_require__(881);
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
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__chat__["a" /* ChatPage */]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__skeleton_item_skeleton_item__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
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

/***/ 750:
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
            selector: 'skeleton-item',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\components\skeleton-item\skeleton-item.html"*/'<div [ngStyle]="styles"></div>\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\components\skeleton-item\skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(50);
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
            selector: 'menu',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\components\menu\menu.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12 col-lg-2 >\n\n      <ion-navbar align-title="center" transparent >\n\n        <ion-title>\n\n          <img src="assets/imgs/netflix-logo.png">\n\n        </ion-title>   \n\n      </ion-navbar>\n\n    </ion-col>\n\n    <ion-col col-lg-10 >\n\n      <div >\n\n        <ion-segment [(ngModel)]="menuhead">\n\n          <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n          <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n          <ion-segment-button value="canales" class="segmenthead" (click)="canales()"> <ion-icon class="iconhead" name="albums"></ion-icon>   Canales  </ion-segment-button>         \n\n          <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid> \n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\components\menu\menu.html"*/
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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(882);
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
        this.isTyping = '';
        this.photosArray = [];
        this.messages = [];
        this.chatService.getMessages(sessionStorage.getItem('channelName').replace(/ /g, '')).subscribe(function (message) {
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
        this.ConfigCollection = this.db.collection('Config').doc(sessionStorage.getItem('channelName'));
        this.ConfigCollection.valueChanges().subscribe(function (res) {
            if (!res['Vivo']) {
                _this.viewCtrl.dismiss();
            }
            _this.event = res['chatEvent'];
            _this.chatService.joinChat(sessionStorage.getItem('channelName').replace(/ /g, ''))
                .then(function (nickname) {
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
        var _this = this;
        if (this.message !== '') {
            this.chatService.sendMessage(this.message, sessionStorage.getItem('channelName').replace(/ /g, ''))
                .subscribe(function () {
                _this.message = '';
            });
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
        var _this = this;
        this.isTyping = '';
        if (key === 13 && this.message !== '') {
            this.sendMessage();
            this.isTyping = '';
        }
        else {
            this.chatService.isTyping(this.nickname, sessionStorage.getItem('channelName').replace(/ /g, '')).subscribe(function (WhoTyping) {
                _this.isTyping = WhoTyping['nickname'];
            });
        }
    };
    ;
    ChatPage.prototype.isEmpty = function (ev) {
        if (ev.data == null) {
            this.isTyping = '';
            this.chatService.isTyping('', sessionStorage.getItem('channelName').replace(/ /g, ''))
                .subscribe(function () {
            });
        }
    };
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
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\chat\chat.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="close()" >\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>        \n\n      </ion-buttons>     \n\n      <ion-title>Chat</ion-title>  \n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content >\n\n  <div *ngIf="isLoading">\n\n      <div *ngFor="let i of [1,2,3,4]">\n\n          <skeleton-item  height="100px"  class="right-bubble-skeleton " ></skeleton-item>\n\n          <skeleton-item  height="100px"  class="left-bubble-skeleton "> </skeleton-item>\n\n      </div>\n\n  </div>  \n\n    \n\n  \n\n  <div *ngFor="let message of messages" >\n\n      <div class="chat-message" text-right  *ngIf="message?.from === nickname" >\n\n          <div class="right-bubble">\n\n            <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n        </div>\n\n        <div class="chat-message" text-left  *ngIf="message?.from !== nickname" >\n\n          <div class="left-bubble">\n\n              <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n      </div>\n\n  </div>\n\n   \n\n   \n\n  </ion-content>\n\n  <ion-footer>   \n\n   \n\n    <ion-toolbar>\n\n        <ion-note> <span *ngIf="isTyping !== \'\'" > <i> {{isTyping}} esta escribiendo </i>\n\n        </span>  </ion-note>  \n\n      <ion-item class="chat-item">    \n\n        <ion-input class="chat-input" [disabled]="isLoading"  [(ngModel)]="message" type="text" placeholder="Escribe tu mensaje"  (keypress)="keyPress($event.keyCode)" (input)="isEmpty($event)"></ion-input>\n\n      </ion-item>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right color="netflixBlue" (click)="sendMessage()" [disabled]="isLoading">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage2\cvivopage\src\pages\chat\chat.html"*/,
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

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(883);
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(13);
var map_1 = __webpack_require__(395);
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=4.js.map