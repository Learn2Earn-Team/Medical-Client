(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"extra_header\">\n            <div class=\"flex_div\">\n                <div>\n                    <ion-label class=\"logo_text\">MEDI<span>CO</span></ion-label>\n                    <ion-label class=\"small_text\">\n                        Changing the way you receive healthcare with medical excellence \n                    </ion-label>\n                </div>\n                <div>\n                    <img src=\"assets/imgs/medical-app.png\">\n                </div>\n            </div>\n            <ion-input type=\"text\" placeholder=\"Search for medicine and Doctors..\">\n                <ion-icon name=\"search\"></ion-icon>\n            </ion-input>\n        </div>\n\n        <div class=\"content_div\">\n            <div class=\"grid_box\">\n                <div class=\"box_div\" (click)=\"goToPharmacy()\">\n                    <img src=\"assets/imgs/pills.png\">\n                    <ion-label>Pharmacy</ion-label>\n                </div>\n                <div class=\"box_div\" (click)=\"goToDoctors()\">\n                    <img src=\"assets/imgs/pills.png\">\n                    <ion-label>Doctors</ion-label>\n                </div>\n            </div>\n\n            <div class=\"grid_box\">\n                <div class=\"box_div\" (click)=\"goToReminders()\">\n                    <img src=\"assets/imgs/pills.png\">\n                    <ion-label>Set Reminders</ion-label>\n                </div>\n                <div class=\"box_div\" (click)=\"goToEmergancy()\">\n                    <img src=\"assets/imgs/pills.png\">\n                    <ion-label>Emergancy</ion-label>\n                </div>\n            </div>\n\n            <ion-label class=\"title_lbl\">Find Doctors in top Specialities</ion-label>\n            <div class=\"flex_slider\">\n                <div *ngFor=\"let item of doctors\" class=\"inner_slide\" (click)=\"goToDoctorList()\">\n                    <img src=\"assets/imgs/doc.png\">\n                    <ion-label>{{item}}</ion-label>\n                </div>\n            </div>\n\n        </div>\n\n        \n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .extra_header {\n  background: var(--ion-color-app-light);\n  padding: 35px;\n  position: relative;\n}\n.main_content_div .extra_header .flex_div {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .extra_header .flex_div .logo_text {\n  font-size: 20px;\n  font-family: \"bold\";\n}\n.main_content_div .extra_header .flex_div .logo_text span {\n  font-family: \"bold\";\n  color: var(--ion-color-primary);\n}\n.main_content_div .extra_header .flex_div .small_text {\n  font-size: 14px;\n}\n.main_content_div .extra_header .flex_div img {\n  width: 200px;\n  margin-left: 16px;\n}\n.main_content_div .extra_header ion-input {\n  box-shadow: 0pc 3px 6px rgba(0, 0, 0, 0.2);\n  height: 50px;\n  --padding-start: 8px;\n  --padding-end: 16px;\n  border-radius: 25px;\n  background: white;\n  width: 80%;\n  position: absolute;\n  bottom: -25px;\n  font-family: \"medium\";\n}\n.main_content_div .extra_header ion-input ion-icon {\n  margin-left: 16px;\n  color: grey;\n  font-size: 20px;\n}\n.main_content_div .content_div {\n  padding: 16px;\n  padding-top: 40px;\n}\n.main_content_div .content_div .grid_box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.main_content_div .content_div .grid_box .box_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 140px;\n  margin: 16px;\n}\n.main_content_div .content_div .grid_box .box_div img {\n  width: 70px;\n}\n.main_content_div .content_div .grid_box .box_div ion-label {\n  text-align: center;\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  margin-top: 10px;\n}\n.main_content_div .content_div .title_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  margin-top: 16px;\n}\n.main_content_div .content_div .flex_slider {\n  display: flex;\n  width: 100%;\n  overflow-y: scroll;\n}\n.main_content_div .content_div .flex_slider .inner_slide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: 10px;\n}\n.main_content_div .content_div .flex_slider .inner_slide img {\n  width: 50px !important;\n  min-width: 50px;\n}\n.main_content_div .content_div .flex_slider .inner_slide ion-label {\n  margin-top: 7px;\n  font-size: 13px;\n  display: block;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxXQUFBO0FBbEJKO0FBb0JJO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQlI7QUFvQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFsQlo7QUFvQlk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFsQmhCO0FBb0JnQjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUFsQnBCO0FBcUJZO0VBQ0ksZUFBQTtBQW5CaEI7QUFxQlk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFuQmhCO0FBdUJRO0VBQ0ksMENBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFyQlo7QUF1Qlk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBckJoQjtBQTBCSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQXhCUjtBQTBCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeEJaO0FBeUJZO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQXZCaEI7QUF5QmdCO0VBQ0ksV0FBQTtBQXZCcEI7QUEwQmdCO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBeEJwQjtBQTZCUTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBM0JaO0FBOEJRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTVCWjtBQThCWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE1QmhCO0FBOEJnQjtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQTVCcEI7QUErQmdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUE3QnBCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuLy8gICAgICBpb24tdGl0bGUge1xuLy8gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuLy8gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICB9XG4gXG4vLyAgICAgIGlvbi1idXR0b257XG4vLyAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuIFxuLy8gICAgICAgICAgaW9uLWljb24ge1xuLy8gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuLy8gICAgICAgICAgfVxuLy8gICAgICB9XG4vLyB9XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZXh0cmFfaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuZmxleF9kaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5sb2dvX3RleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF90ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcGMgM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMjVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuXG4gICAgICAgIC5ncmlkX2JveCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLmJveF9kaXYge1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZV9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXhfc2xpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgICAgICAgICAgLmlubmVyX3NsaWRlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let HomePage = class HomePage {
    constructor(route) {
        this.route = route;
        this.doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health',
            'Dentists', 'ENT', 'Audiologist', 'Psychiatrists', 'Radiologist', 'Neurologist'];
    }
    ngOnInit() {
    }
    goToPharmacy() {
        this.route.navigate(['/pharmacy']);
    }
    goToDoctors() {
        this.route.navigate(['/doctors']);
    }
    goToReminders() {
        this.route.navigate(['/set-reminder']);
    }
    goToEmergancy() {
        this.route.navigate(['/emergancy']);
    }
    goToDoctorList() {
        this.route.navigate(['/doctor-list']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map