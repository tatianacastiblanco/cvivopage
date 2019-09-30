webpackJsonp([2,4],{

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

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_image_loader__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(748);
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
                __WEBPACK_IMPORTED_MODULE_0__chat_chat_module__["ChatPageModule"]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
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
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { type: '', nickname: '', message: '' };
        this.messages = [
            {
                from: 'Sergio',
                text: "Prueba",
                created: Date()
            }
        ];
        this.offStatus = false;
        this.roomkey = "testKey";
        this.nickname = "TestName";
        this.data.type = 'message';
        this.data.nickname = this.nickname;
        // let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
        // joinData.set({
        //   type:'join',
        //   user:this.nickname,
        //   message:this.nickname+' has joined this room.',
        //   sendDate:Date()
        // });
        // this.data.message = '';
        // firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => {
        //   this.chats = [];
        //   this.chats = snapshotToArray(resp);
        //   setTimeout(() => {
        //     if(this.offStatus === false) {
        //       this.content.scrollToBottom(300);
        //     }
        //   }, 1000);
        // });
    }
    ;
    ChatPage.prototype.sendMessage = function () {
        var newData = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref('chatrooms/' + this.roomkey + '/chats').push();
        newData.set({
            type: this.data.type,
            user: this.data.nickname,
            message: this.data.message,
            sendDate: Date()
        });
        this.data.message = '';
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n      </ion-buttons>  \n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content>\n\n      <div class="chat-message" text-right >\n\n        <div class="right-bubble">\n\n          <span class="msg-name">Me</span>\n\n          <span class="msg-date">05/05/2019</span>\n\n          <span><img src="assets/imgs/user.png" class="msg-img"></span>\n\n          <p text-wrap><a > Lorem ipsum dolor </a></p>\n\n        </div>\n\n      </div>\n\n      <div class="chat-message" text-left >\n\n        <div class="left-bubble">\n\n          <span><img src="assets/imgs/user.png" class="msg-img"></span>\n\n          <span class="msg-name">Sergio Velandia</span>\n\n          <span class="msg-date">05/05/2019</span>                \n\n          <p text-wrap><a > Lorem ipsum dolor sit </a></p>\n\n        </div>\n\n    </div>\n\n   \n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-item class="chat-item">    \n\n        <ion-input class="chat-input" [(ngModel)]="message" type="text" placeholder="Escribe tu mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n      </ion-item>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right color="netflixBlue" (click)="sendMessage()">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

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

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(179);
var firebase = _interopDefault(__webpack_require__(43));
__webpack_require__(180);
__webpack_require__(342);
__webpack_require__(181);
__webpack_require__(343);
__webpack_require__(344);
__webpack_require__(345);

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");

module.exports = firebase;


/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ChatService__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Helper__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroupItem__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_HomeScreenGroup__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase__);
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
    function HomePage(navCtrl, loadingCtrl, platform, alertCtrl, db, embedService, chatService, toastCtrl, VimeoService, nativeStorage, authService, _DomSanitizationService, events, app, zone, element, modalCtrl) {
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
        this.gethomeVideo();
        this.getChatSection();
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
    }
    ;
    HomePage.prototype.presentProfileModal = function () {
        var options = {
            showBackdrop: false,
            enableBackdropDismiss: true
        };
        var profileModal = this.modalCtrl.create('ChatPage', {}, options);
        profileModal.present();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.gethomeVideo();
        // this.getChatSection(); 
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
        this.nativeStorage.getItem('homeScreenGroups').then(function (res) {
            console.log(res);
        });
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
                        video.detailsPicture = item.pictures.sizes[10].link;
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
            _this.segementHome = _this.chatEnable ? 'chat' : 'list';
            if (_this.chatEnable === true) {
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
            }, 1000);
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
        this.navCtrl.setRoot('HomePage');
    };
    HomePage.prototype.parrilla = function () {
        this.navCtrl.push('ComingSoonPage');
    };
    HomePage.prototype.buscar = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push('ProfilePage');
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
            __WEBPACK_IMPORTED_MODULE_12_firebase___default.a
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
    HomePage.prototype.terminos = function () {
        this.navCtrl.push('TermsPage');
    };
    HomePage.prototype.moveNext = function (index) {
        this.slides.toArray()[index].slideNext();
    };
    HomePage.prototype.movePrev = function (index) {
        this.slides.toArray()[index].slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["QueryList"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-2 >\n\n        <ion-navbar align-title="center" transparent >\n\n          <ion-title>\n\n            <img src="assets/imgs/netflix-logo.png">\n\n          </ion-title>   \n\n        </ion-navbar>\n\n      </ion-col>\n\n      <ion-col col-lg-10 [hidden]="menu">\n\n        <div >\n\n          <ion-segment [(ngModel)]="menuhead">\n\n            <ion-segment-button value="home" class="segmenthead"><ion-icon class="iconhead" name="home"></ion-icon>   Inicio</ion-segment-button>\n\n            <ion-segment-button class="segmenthead" value="buscar" (click)="buscar()"> <ion-icon class="iconhead" name="search" ></ion-icon>   Buscar  </ion-segment-button>\n\n            <ion-segment-button class="segmenthead" value="parrilla" (click)="parrilla()"> <ion-icon class="iconhead" name="md-laptop"></ion-icon>   Parrilla  </ion-segment-button>\n\n            <ion-segment-button value="perfil" class="segmenthead" (click)="perfil()"> <ion-icon class="iconhead" name="md-person"></ion-icon>   Perfil  </ion-segment-button>\n\n            <ion-segment-button value="salir" class="segmenthead" (click)="signOut()"> <ion-icon class="iconhead" name="log-out"></ion-icon>   Salir  </ion-segment-button>\n\n          </ion-segment>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>    \n\n</ion-header>\n\n<ion-content class="list-avatar-page"  padding #pageContent >  \n\n    <ion-fab bottom right >\n\n        <button ion-fab  (click)="presentProfileModal()"><ion-icon name="ios-chatbubbles"  ></ion-icon></button>      \n\n      </ion-fab>\n\n  <!-- Refresher para actualizar el video en vivo -->\n\n  <ion-grid>\n\n    <ion-row pull-lg-9>\n\n      <ion-col col-12 >\n\n        <ion-refresher (ionRefresh)="doRefresh($event)" pullMin=200>\n\n          <ion-refresher-content \n\n            pullingIcon="refresh-circle"\n\n            refreshingSpinner="bubbles">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-lg-6>\n\n          <div [innerHtml]="iframe_html"></div>\n\n      </ion-col>\n\n      <ion-col col-12 col-lg-6>\n\n        <ion-segment [(ngModel)]="segementHome" color="netflixRed">\n\n          <ion-segment-button value="list">\n\n            <ion-icon name="list" ></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="chat" [disabled]=\'!booleanchatEnable\'>\n\n            <ion-icon name="chatbubbles"></ion-icon>\n\n          </ion-segment-button>\n\n        </ion-segment>        \n\n        <div *ngIf="chatEnable == true && segementHome == \'chat\'" >\n\n            <page-chat style="height: 100%"></page-chat>\n\n          <!-- <ion-scroll  scrollY="true" class="test">            \n\n            <ion-list *ngFor="let message of messages ">\n\n              <ion-item no-lines>\n\n                <ion-avatar item-start>           \n\n                    <img [src]="message.picture" >\n\n                </ion-avatar>\n\n                <h3>{{message.from}}</h3>\n\n                <p text-wrap>  <a>  {{message.text}} </a></p>\n\n                <ion-note item-end>{{message.created | date:\' h:mm\' }}</ion-note>\n\n              </ion-item>\n\n            </ion-list>   \n\n          </ion-scroll>  -->\n\n        </div>\n\n          <div  *ngIf="segementHome == \'list\' && loaded" >\n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar>   \n\n            <div *ngIf="homeScreenGroups[6]">\n\n              <div class="item-title">{{homeScreenGroups[0]?.name}} </div>                      \n\n              <ion-slides *ngIf="homeScreenGroups[0].groupItems && homeScreenGroups[0].groupItems.length" autoplay="3000" slidesPerView="3" spaceBetween=12 zoom=true loop=true paginationType="fraction">                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[0].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides>\n\n              <button (click)="movePrev(0)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(0)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[1].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12     >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[1].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(1)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(1)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>\n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[2].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[2].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(2)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(2)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[3].name}} </div> \n\n              <ion-slides slidesPerView="3" spaceBetween=15   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[3].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(3)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(3)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n              <div class="item-title">{{homeScreenGroups[4].name}} </div>   \n\n              <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n                <ion-slide *ngFor="let groupItem of homeScreenGroups[4].groupItems" >\n\n                  <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                </ion-slide>\n\n              </ion-slides> \n\n              <button (click)="movePrev(4)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n              <button (click)="moveNext(4)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n              <hr>\n\n            <div class="item-title">{{homeScreenGroups[5].name}}</div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[5].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides> \n\n            <button (click)="movePrev(5)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button (click)="moveNext(5)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n            <hr>\n\n            <div class="item-title">{{homeScreenGroups[6].name}} </div>   \n\n            <ion-slides slidesPerView="3" spaceBetween=12   >                                             \n\n              <ion-slide *ngFor="let groupItem of homeScreenGroups[6].groupItems" >\n\n                <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n              </ion-slide>\n\n            </ion-slides>\n\n            <button (click)="movePrev(6)" float-left  ion-button class="buttonSlide" ><ion-icon name="arrow-dropleft"></ion-icon></button>   \n\n            <button (click)="moveNext(6)" float-right ion-button class="buttonSlide"><ion-icon name="arrow-dropright"></ion-icon></button>  \n\n          </div>  \n\n          </ion-scroll> \n\n        </div>      \n\n      </ion-col>\n\n    </ion-row>\n\n   </ion-grid>  \n\n  <!--   seccion lista de videos Movil          -->\n\n    <!-- <ion-grid [hidden]="refrescarpag">\n\n      <ion-row>\n\n        <ion-col >\n\n          <div  *ngIf="segementHome == \'list\' && loaded" >\n\n            <ion-scroll scrollY="true"  class="scrollY" scroll-avatar>\n\n              <ion-list>      \n\n                <div *ngFor="let homeScreenGroup of homeScreenGroups; let i = index" >      \n\n                  <div class="item-title">{{homeScreenGroup.name}} </div>  \n\n                  <div class="contentBody">                                                                              \n\n                    <ion-slides slidesPerView="3" spaceBetween=12  [attr.id]="i"  #i page>                                  \n\n                      <ion-slide *ngFor="let groupItem of homeScreenGroup.groupItems" >                     \n\n                        <img class="imgCara"src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n                      </ion-slide>\n\n                    </ion-slides>                             \n\n                  </div>  \n\n                  <hr>\n\n                </div>    \n\n              </ion-list>\n\n            </ion-scroll> \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>    -->\n\n\n\n    \n\n    \n\n    <!-- <div>\n\n      <h1>hoa</h1>\n\n    </div> -->\n\n  \n\n</ion-content>\n\n<!-- <ion-footer col-lg-6 offset-lg-6 [hidden]="segementHome !== \'chat\'">\n\n  <ion-toolbar>  \n\n    <ion-item>    \n\n      <ion-input [(ngModel)]="message" type="text" placeholder="mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n    </ion-item>       \n\n    <ion-buttons end>\n\n      <button ion-button icon-right color="netflixBlue" (click)="sendMessage()">          \n\n        <ion-icon name="send"></ion-icon>\n\n      </button> \n\n    </ion-buttons>              \n\n  </ion-toolbar>\n\n</ion-footer> -->\n\n\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_2__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* ModalController */]])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.js.map