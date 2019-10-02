webpackJsonp([2,15],{

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

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(769);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_0__chat_chat_module__["ChatPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]
            ]
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 620:
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

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* unused harmony export snapshotToArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(339);
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
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\chat\chat.html"*/'\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only (click)="close()" >\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n      <ion-title>Chat</ion-title>\n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content >\n\n  <div *ngFor="let message of messages">\n\n      <div class="chat-message" text-right  *ngIf="message?.from === nickname" >\n\n          <div class="right-bubble">\n\n            <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n        </div>\n\n        <div class="chat-message" text-left  *ngIf="message?.from !== nickname" >\n\n          <div class="left-bubble">\n\n              <span class="msg-name">{{message.from}}</span>\n\n            <span class="msg-date">{{message.created | date:\' h:mm\' }}</span>\n\n            <span><img [src]="message.picture" class="msg-img"></span>\n\n            <p text-wrap><a >  {{message.text}} </a></p>\n\n          </div>\n\n      </div>\n\n  </div>\n\n  <ion-spinner name="bubbles" color="primary" text-center *ngIf="isLoading" ></ion-spinner>\n\n  \n\n   \n\n   \n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-item class="chat-item">    \n\n        <ion-input class="chat-input" [disabled]="isLoading"  [(ngModel)]="message" type="text" placeholder="Escribe tu mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      </ion-item>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right color="netflixBlue" (click)="sendMessage()" [disabled]="isLoading">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\chat\chat.html"*/,
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

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ChatService__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_Helper__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_HomeScreenGroupItem__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroup__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_embed_video__ = __webpack_require__(344);
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
    function HomePage(navCtrl, loadingCtrl, platform, alertCtrl, db, embedService, chatService, toastCtrl, VimeoService, events, modalCtrl) {
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
        this.events = events;
        this.modalCtrl = modalCtrl;
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
        this.isModalOpen = false;
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
    /**
     *Funcion de ciclo de vida que se ejecuta cuando la vista ha cargado,
     * ejecuta la funcion gethomeVideo() y posteriormente getHomeGroups()
     * @memberof HomePage
     */
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando..."
        });
        loading.present();
        this.gethomeVideo().then(function () {
            _this.getHomeGroups().then(function () {
                setTimeout(function () {
                    loading.dismiss();
                    _this.loaded = true;
                }, 3000);
            }).catch(function (err) {
                loading.dismiss();
                _this.showAlert(err, 'Error de conexion');
            });
        }, function (err) {
            loading.dismiss();
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
                    attr: { width: _this.widthFrame, height: _this.heightFrame }
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
                            video.detailsPicture = item.pictures.sizes[10].link;
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
        var options = {
            showBackdrop: false,
            enableBackdropDismiss: true,
            cssClass: 'custom-modal'
        };
        var chatModal = this.modalCtrl.create('ChatPage', {}, options);
        chatModal.present().then(function () {
            _this.badge = 0;
        }, function (res) {
            console.log("close");
        });
        chatModal.onWillDismiss(function (res) {
            console.log(res);
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
            selector: "page-home",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <menu  [hidden]="menu"></menu> \n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page"  padding #pageContent >  \n\n\n\n    <ion-fab bottom right >\n\n        <ion-badge color="netflixBlue">{{badge}}</ion-badge>   \n\n        <button ion-fab [disabled]="true" (click)="presentChatModal()"><ion-icon name="ios-chatbubbles"></ion-icon>        \n\n        </button>         \n\n    </ion-fab>\n\n\n\n  <!-- Refresher para actualizar el video en vivo -->\n\n  <ion-grid>\n\n    <ion-row pull-lg-9>\n\n      <ion-col col-12 >\n\n        <ion-refresher (ionRefresh)="doRefresh($event)" pullMin=200>\n\n          <ion-refresher-content \n\n            pullingIcon="refresh-circle"\n\n            refreshingSpinner="bubbles">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6>\n\n          <div [innerHtml]="iframe_html" class="iframe"></div>\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-6>        \n\n        <ion-toolbar color="primary"  *ngIf="segementHome == \'list\' && loaded">\n\n            <ion-title color="light">Categorias</ion-title>\n\n          </ion-toolbar>\n\n          <br>\n\n\n\n          <div  *ngIf="segementHome == \'list\' && loaded" >\n\n              \n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar>   \n\n            <div *ngIf="homeScreenGroups[6]">\n\n              <div class="item-title">{{homeScreenGroups[0]?.name}} </div>                      \n\n              <ion-slides *ngIf="homeScreenGroups[0].groupItems && homeScreenGroups[0].groupItems.length" autoplay="3000" slidesPerView="3" spaceBetween=12 zoom=true loop=true paginationType="fraction">                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[0].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides>\n\n              <button *ngIf="!menu" (click)="movePrev(0)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button  *ngIf="!menu" (click)="moveNext(0)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[1].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12     >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[1].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(1)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(1)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>\n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[2].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[2].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(2)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button  *ngIf="!menu" (click)="moveNext(2)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[3].name}} </div> \n\n              <ion-slides slidesPerView="3" spaceBetween=15   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[3].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(3)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(3)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[4].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[4].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button *ngIf="!menu" (click)="movePrev(4)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button *ngIf="!menu" (click)="moveNext(4)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n            <div class="item-title">{{homeScreenGroups[5].name}}</div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[5].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides> \n\n            <button *ngIf="!menu" (click)="movePrev(5)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button  *ngIf="!menu" (click)="moveNext(5)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[6].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[6].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides>\n\n            <button  *ngIf="!menu"(click)="movePrev(6)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button  *ngIf="!menu"(click)="moveNext(6)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n          </div>  \n\n          </ion-scroll> \n\n        </div>      \n\n      </ion-col>\n\n    </ion-row>\n\n   </ion-grid>  \n\n  </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* LoadingController */],
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

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__menu_menu__["a" /* MenuComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__menu_menu__["a" /* MenuComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(38);
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
        this.navCtrl.push('ComingSoonPage');
    };
    MenuComponent.prototype.buscar = function () {
        this.navCtrl.push('SearchPage');
    };
    MenuComponent.prototype.perfil = function () {
        this.navCtrl.push('ProfilePage');
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
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu',template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\components\menu\menu.html"*/'<ion-grid>\n\n  <ion-row>\n\n    <ion-col col-12 col-lg-2 >\n\n      <ion-navbar align-title="center" transparent >\n\n        <ion-title>\n\n          <img src="assets/imgs/netflix-logo.png">\n\n        </ion-title>   \n\n      </ion-navbar>\n\n    </ion-col>\n\n    <ion-col col-lg-10 >\n\n      <div >\n\n        <ion-segment [(ngModel)]="menuhead">\n\n          <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n          <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n          <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n          <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid> \n\n'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo2019\cvivopage\src\components\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=2.js.map