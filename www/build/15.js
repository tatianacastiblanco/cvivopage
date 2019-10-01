webpackJsonp([15],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(748);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, viewCtrl, db, chatService, _DomSanitizationService, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.db = db;
        this.chatService = chatService;
        this._DomSanitizationService = _DomSanitizationService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.messages = [];
        this.nickname = '';
        this.emailUserChat = '';
        this.offStatus = false;
        this.photosArray = new Array;
        this.message = '';
        this.isLoading = true;
        this.nickname = "";
        this.photosArray = [];
        this.messages = [];
        this.getChatSection();
        if (this.photosArray.length == 0) {
            this.db.collection('photos').valueChanges().forEach(function (elem) {
                _this.photosArray.push(elem);
            });
        }
        ;
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
    ChatPage.prototype.getChatSection = function () {
        var _this = this;
        this.db.collection('Config').valueChanges().subscribe(function (res) {
            _this.event = res[0]['chatEvent'];
            localStorage.setItem('chatEvent', _this.event);
            if (_this.nickname === '') {
                _this.chatService.joinChat().then(function (nickname) {
                    _this.nickname = nickname.name.toString();
                    _this.emailUserChat = nickname.email.toString();
                    _this.loadMessges();
                }, function (err) { return _this.showAlert(err, 'Error FbConfig'); });
            }
            ;
        });
    };
    ;
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatPage');
        setTimeout(function () {
            if (_this.offStatus === false) {
                _this.content.scrollToBottom(1000);
            }
        }, 50);
    };
    ;
    /**
   * Funcion para mostrar una alerta personalizada
   * @param message mensaje para mostrar en el body de la alerta
   * @param title  titulo para mostrar en el encabezado de la alerta
   */
    ChatPage.prototype.showAlert = function (message, title) {
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
    /**
   * Funcion que envia un mensaje por meido de SOCKET.IO
   */
    ChatPage.prototype.sendMessage = function () {
        if (this.message !== '') {
            this.chatService.sendMessage(this.message);
            this.message = '';
        }
    };
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
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="close()" >\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n      <ion-title>Chat</ion-title>\n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content >\n\n  <div *ngFor="let message of messages">\n\n      <div class="chat-message" text-right  *ngIf="message?.from === nickname" >\n\n          <div class="right-bubble">\n\n            <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n        </div>\n\n        <div class="chat-message" text-left  *ngIf="message?.from !== nickname" >\n\n          <div class="left-bubble">\n\n              <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n      </div>\n\n  </div>\n\n  <ion-spinner name="bubbles" color="primary" text-center *ngIf="isLoading" ></ion-spinner>\n\n  \n\n   \n\n   \n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-item class="chat-item">    \n\n        <ion-input class="chat-input" [disabled]="isLoading"  [(ngModel)]="message" type="text" placeholder="Escribe tu mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      </ion-item>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right color="netflixBlue" (click)="sendMessage()" [disabled]="isLoading">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */]])
    ], ChatPage);
    return ChatPage;
}());

;
var snapshotToArray = function (snapshot) {
    var returnArr = [];
    snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=15.js.map