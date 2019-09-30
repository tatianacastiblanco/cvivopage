webpackJsonp([9],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(757);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_AuthService__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_help_desk_help_desk__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, emailComposer, ticketService, nativeStorage, formBuilder, alertCtrl, authService, loadingCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailComposer = emailComposer;
        this.ticketService = ticketService;
        this.nativeStorage = nativeStorage;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.segementTickets = 'create';
        this.myTickets = [];
        this.authService.afAuth.user.subscribe(function (user) {
            if (user == null) {
                _this.hideSegment = true;
            }
            _this.userEmail = user.email;
        });
        this.ticketFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            subject: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            type: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            status: [''],
            priority: ['']
        });
        if (this.platform.is('cordova')) {
            this.nativeStorage.getItem('imgSource').then(function (res) {
                if (res) {
                    _this.myPhoto = res;
                }
                else {
                    _this.myPhoto = 'assets/imgs/photo-camera.png';
                }
            }, function (err) { return _this.myPhoto = 'assets/imgs/photo-camera.png'; });
        }
        else {
            this.myPhoto = 'assets/imgs/user.png';
        }
    }
    HelpPage.prototype.getTickets = function () {
        var _this = this;
        this.myTickets = [];
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando tickets..."
        });
        loading.present();
        this.ticketService.getMyTickets().subscribe(function (res) {
            if (res.length == 0) {
                _this.showAlert('No tienes tickets', 'Tickets');
                _this.segementTickets = 'create';
                loading.dismiss();
            }
            var temp = res;
            temp.forEach(function (element) {
                var objTemp = { id: 0, subject: '', created_at: '', status: 0, statusColor: '' };
                switch (element.status) {
                    case 2:
                        objTemp.statusText = 'Abierto';
                        objTemp.statusColor = 'Abierto';
                        break;
                    case 3:
                        objTemp.statusText = 'En progreso';
                        objTemp.statusColor = 'Pendiente';
                        break;
                    case 4:
                        objTemp.statusText = 'Resuelto';
                        objTemp.statusColor = 'Cerrado';
                        break;
                    default:
                        break;
                }
                objTemp.created_at = __WEBPACK_IMPORTED_MODULE_7_moment__(element.created_at).startOf('day').fromNow();
                objTemp.subject = element.subject;
                objTemp.id = element.id;
                _this.myTickets.push(objTemp);
                loading.dismiss();
            });
        }, function (err) {
            console.log(err);
            loading.dismiss();
            _this.showAlert(err, 'Error al cargar tickets');
        });
    };
    ;
    /**
   * Funcion que se ejecuta al hacer swipe down en la pantalla
   * para recargar el video
   * @param refresher
   */
    HelpPage.prototype.doRefresh = function (refresher) {
        this.getTickets();
        refresher.complete();
        setTimeout(function () {
            refresher.complete();
        }, 3000);
    };
    ;
    HelpPage.prototype.createTicket = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Creando ticket..."
        });
        loading.present();
        this.ticketFormGroup.controls.status.setValue(2);
        this.ticketFormGroup.controls.priority.setValue(1);
        this.ticketFormGroup.controls.email.setValue(this.userEmail);
        this.ticketService.createTicket(this.ticketFormGroup.value).subscribe(function (result) {
            _this.ticketFormGroup.reset();
            loading.dismiss();
            _this.showAlert('Tu ticket fue creado con el ID: ' + result['id'], 'Ticket Creado');
        }, function (err) {
            loading.dismiss();
            _this.showAlert(err, 'Error al crear ticket');
        });
    };
    HelpPage.prototype.showAlert = function (message, title) {
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
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\help\help.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ayuda</ion-title>  \n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="segementTickets"   color="netflixRed">\n\n    <ion-segment-button value="create" >Crear ticket\n\n    </ion-segment-button>\n\n    <ion-segment-button value="myTickets" (click)="getTickets()" [disabled]="hideSegment">Mis tickets\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n<ion-content padding>\n\n <ion-grid>\n\n   <ion-row>\n\n     <ion-col >\n\n      <!-- Segmento de creacion de ticket  -->\n\n      <div class="contentLg" *ngIf="segementTickets === \'create\'" >\n\n        <form [formGroup]="ticketFormGroup" (ngSubmit)="createTicket()" class="segmentCreateTicket">\n\n          <ion-item>\n\n            <ion-label>Correo</ion-label>\n\n            <ion-input formControlName="email" type="email" ></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Número Celular</ion-label>\n\n            <ion-input formControlName="phone" type="number" ></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Asunto</ion-label>\n\n            <ion-input formControlName="subject"></ion-input>\n\n          </ion-item>  \n\n          <ion-item >\n\n            <ion-select formControlName="type" placeholder="Selecciona una..." style="color:white">\n\n              <ion-option value="question">Pregunta</ion-option>\n\n              <ion-option value="problem">Problema</ion-option>\n\n              <ion-option value="suggest">Sugerencia</ion-option>\n\n            </ion-select>\n\n          </ion-item>                \n\n          <ion-item>\n\n            <ion-label>Descripción</ion-label>\n\n            <ion-textarea formControlName="description" style="color:white"></ion-textarea >\n\n          </ion-item>                      \n\n          <button ion-button type="submit" [disabled]="!ticketFormGroup.valid" full round>Crear</button>\n\n        </form>\n\n      </div> \n\n     </ion-col>\n\n   </ion-row>\n\n   <ion-row>  <!-- //////////////////////////////////////////// Segmento de mis tickets ////////////////////////////////////////////// -->   \n\n    <ion-col col-12 col-lg-12 >\n\n        <div *ngIf="segementTickets === \'myTickets\'"  >\n\n            <ion-refresher \n\n                (ionRefresh)="doRefresh($event)"\n\n                pullMin=200>\n\n              <ion-refresher-content \n\n                pullingIcon="refresh-circle"\n\n                refreshingSpinner="bubbles">\n\n              </ion-refresher-content>\n\n            </ion-refresher>      \n\n            <ion-card class="cardLg" *ngFor="let ticket of myTickets;let i = index" [ngClass]="(( i % 2) == 0)?\'cardRed\':\'cardWhite\'">\n\n              <ion-item > \n\n                <h2><b>{{ticket.subject}}</b></h2>\n\n                <p>ID:{{ticket.id}}</p>\n\n              </ion-item>\n\n                <ion-row>\n\n                <ion-col>\n\n                  <button ion-button icon-start clear small color="{{ticket.statusColor}}">\n\n                    <ion-icon name="disc"></ion-icon>\n\n                    <div  >{{ticket.statusText}}</div>\n\n                  </button>\n\n                </ion-col >\n\n                <ion-col align-self-center text-center>\n\n                  <ion-note>\n\n                    {{ticket.created_at}}\n\n                  </ion-note>\n\n                </ion-col>\n\n              </ion-row>      \n\n            </ion-card>\n\n          </div>\n\n    </ion-col> \n\n\n\n   </ion-row>\n\n </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\CUN\Desktop\PROYECTOSCEBIAC\CVIVO\cvivo2019\cvivopage\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_help_desk_help_desk__["a" /* HelpDeskProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["m" /* Platform */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=9.js.map