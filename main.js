(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItZGV0YWlscy9hbmd1bGFyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  angular-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.ts ***!
  \**************************************************************/
/*! exports provided: AngularDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDetailsComponent", function() { return AngularDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularDetailsComponent = /** @class */ (function () {
    function AngularDetailsComponent() {
    }
    AngularDetailsComponent.prototype.ngOnInit = function () {
    };
    AngularDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-details',
            template: __webpack_require__(/*! ./angular-details.component.html */ "./src/app/angular-details/angular-details.component.html"),
            styles: [__webpack_require__(/*! ./angular-details.component.css */ "./src/app/angular-details/angular-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularDetailsComponent);
    return AngularDetailsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


//import { CommonModule } from '@angular/common';


var routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: "full"
    },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageContentWrapper {\r\n  min-height: calc(100vh - 95px);\r\n  padding-top: 70px;\r\n}\r\n.footerText {\r\n  color: white;\r\n  margin: 0 auto;\r\n}\r\n.nav-link {\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.Myopia {\r\n  color: white;\r\n  font-size: 15px;\r\n  font-weight: bolder;\r\n}\r\n.navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n.img-responsive {\r\n  height: 35px;\r\n  width: 35px;\r\n  background-image: none;\r\n}\r\n.feedback {\r\n  color: white;\r\n  padding: 10px 20px;\r\n  border-radius: 4px;\r\n  border-color: #46b8da;\r\n}\r\n.feedback1 {\r\n  color: white;\r\n  padding: 10px 60px;\r\n  border-radius: 4px;\r\n  border-color: #46b8da;\r\n}\r\n#mybutton {\r\n  position: fixed;\r\n  bottom: 8px;\r\n  right: 0px;\r\n}\r\n.navbar-brand {\r\n  padding: 0 0px;\r\n  height: 28px;\r\n  line-height: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHlRQUF5UTtBQUMzUTtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlQ29udGVudFdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG4uZm9vdGVyVGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5NeW9waWEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDAuOSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcbi5pbWctcmVzcG9uc2l2ZSB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuLmZlZWRiYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItY29sb3I6ICM0NmI4ZGE7XHJcbn1cclxuLmZlZWRiYWNrMSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNDZiOGRhO1xyXG59XHJcbiNteWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcGFkZGluZzogMCAwcHg7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg lg-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\">\r\n    <span class=\"Myopia\">Quiz App</span>\r\n  </a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ show: navbarOpen }\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/quiz\">Quiz?</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <br />\r\n</nav>\r\n\r\n<br />\r\n<div class=\"w-100 p-8 mt-5\">\r\n  <body>\r\n    <div class=\"pageContentWrapper\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </body>\r\n</div>\r\n\r\n<div class=\"footer navbar navbar-expand-lg navbar-dark bg-secondary\">\r\n  <div class=\"footerText\">\r\n    <p>Copyright &copy; 2019 Quiz App</p>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"mybutton\">\r\n  <a class=\"feedback1\" href=\"https://www.facebook.com/florence.torres.1441\"\r\n    ><img\r\n      alt=\"img\"\r\n      class=\"img-responsive rounded-circle\"\r\n      src=\"assets/img/fb.png\"\r\n    />\r\n  </a>\r\n  <div id=\"mybutton\">\r\n    <a class=\"feedback\" href=\"mailto:FlorencioTorres1122@gmail.com\"\r\n      ><img\r\n        alt=\"img\"\r\n        class=\"img-responsive rounded-circle\"\r\n        src=\"assets/img/email4.png\"\r\n      />\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "rence-script-website";
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_details_angular_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-details/angular-details.component */ "./src/app/angular-details/angular-details.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _angular_details_angular_details_component__WEBPACK_IMPORTED_MODULE_7__["AngularDetailsComponent"]],
            imports: [_angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Coded with love by Mutiullah Samim */\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  background: white !important;\r\n  /* background: #60a3bc !important; */\r\n}\r\n.user_card {\r\n  height: 470px;\r\n  width: 350px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  background: #f39c12;\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\r\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\r\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 5px;\r\n}\r\n.brand_logo_container {\r\n  position: absolute;\r\n  height: 170px;\r\n  width: 170px;\r\n  top: -75px;\r\n  border-radius: 50%;\r\n  background: #60a3bc;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n.brand_logo {\r\n  height: 150px;\r\n  width: 150px;\r\n  border-radius: 50%;\r\n  border: 2px solid white;\r\n}\r\n.form_container {\r\n  margin-top: 100px;\r\n}\r\n.login_btn {\r\n  width: 100%;\r\n  background: #c0392b !important;\r\n  color: white !important;\r\n}\r\n.login_btn:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n.login_container {\r\n  padding: 0 2rem;\r\n}\r\n.input-group-text {\r\n  background: #c0392b !important;\r\n  color: white !important;\r\n  border: 0 !important;\r\n  border-radius: 0.25rem 0 0 0.25rem !important;\r\n}\r\n.input_user,\r\n.input_pass:focus {\r\n  box-shadow: none !important;\r\n  outline: 0px !important;\r\n}\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #c0392b !important;\r\n}\r\n.alert {\r\n  text-align: center;\r\n  /* height: 200px; */\r\n  width: 200px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw0RUFBNEU7RUFDNUU7b0NBQ2tDO0VBQ2xDO29DQUNrQztFQUNsQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsNkNBQTZDO0FBQy9DO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb2RlZCB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltICovXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC8qIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDsgKi9cclxufVxyXG4udXNlcl9jYXJkIHtcclxuICBoZWlnaHQ6IDQ3MHB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2YzOWMxMjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIHRvcDogLTc1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICM2MGEzYmM7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJyYW5kX2xvZ28ge1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZm9ybV9jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbi5sb2dpbl9idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5fYnRuOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ2luX2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG59XHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dF91c2VyLFxyXG4uaW5wdXRfcGFzczpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xyXG59XHJcbi5hbGVydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGhlaWdodDogMjAwcHg7ICovXHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <title></title>\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\"\r\n      integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\"\r\n      crossorigin=\"anonymous\"\r\n    />\r\n  </head>\r\n  <!--Coded with love by Mutiullah Samim-->\r\n  <body>\r\n    <div class=\"container h-100\">\r\n      <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"user_card\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <div class=\"brand_logo_container\">\r\n              <img\r\n                src=\"assets/img/renceSad.jpg\"\r\n                class=\"brand_logo\"\r\n                alt=\"Logo\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"d-flex justify-content-center form_container\">\r\n            <form>\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\"\r\n                    ><i class=\"fas fa-user\"></i\r\n                  ></span>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"firstname\"\r\n                  class=\"form-control input_user\"\r\n                  value=\"\"\r\n                  placeholder=\"firstname\"\r\n                  [(ngModel)]=\"user.firstname\"\r\n                />\r\n              </div>\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\"\r\n                    ><i class=\"fas fa-user\"></i\r\n                  ></span>\r\n                </div>\r\n                <input\r\n                  type=\"text\"\r\n                  name=\"lastname\"\r\n                  class=\"form-control input_user\"\r\n                  value=\"\"\r\n                  placeholder=\"lastname\"\r\n                  [(ngModel)]=\"user.lastname\"\r\n                />\r\n              </div>\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-append\">\r\n                  <span class=\"input-group-text\"\r\n                    ><i class=\"fas fa-key\"></i\r\n                  ></span>\r\n                </div>\r\n                <input\r\n                  type=\"password\"\r\n                  name=\"password\"\r\n                  class=\"form-control input_pass\"\r\n                  value=\"\"\r\n                  placeholder=\"password\"\r\n                  [(ngModel)]=\"user.password\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    class=\"custom-control-input\"\r\n                    id=\"customControlInline\"\r\n                  />\r\n                  <label class=\"custom-control-label\" for=\"customControlInline\"\r\n                    >Remember me</label\r\n                  >\r\n                </div>\r\n              </div>\r\n              <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n                <button\r\n                  type=\"button\"\r\n                  name=\"button\"\r\n                  class=\"btn login_btn\"\r\n                  (click)=\"add()\"\r\n                >\r\n                  Login\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"mt-4\">\r\n            <div class=\"d-flex justify-content-center links\">\r\n              Don't have an account? <a href=\"#\" class=\"ml-2\">Sign Up</a>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center links\">\r\n              <a href=\"#\">Forgot your password?</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n\r\n  <!-- <div class=\"alert alert-success\" role=\"alert\">\r\n    Successfully Login!\r\n  </div> -->\r\n</html>\r\n\r\n<!-- <p>\r\n  You can pass an existing component as content of the modal window. In this\r\n  case remember to add content component as an\r\n  <code>entryComponents</code> section of your <code>NgModule</code>.\r\n</p>\r\n\r\n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">\r\n  Launch demo modal\r\n</button> -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_quizapp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/quizapp.service */ "./src/app/services/quizapp.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);




// import * as Swal from "sweetalert2";

var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["Users"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchUser();
    };
    HomeComponent.prototype.fetchUser = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (userArray) { return (_this.userArray = userArray); }, function (error) { return (_this.userArray = error); });
    };
    HomeComponent.prototype.add = function () {
        var _this = this;
        this.userService.addUsers(this.user).subscribe(function () {
            _this.user.firstname = null;
            _this.user.lastname = null;
            _this.user.password = null;
            _this.fetchUser();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Successfully Login!", "You clicked the button!", "success");
        }, function (error) { return (_this.userArray = error); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-documentation",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quizapp_service__WEBPACK_IMPORTED_MODULE_3__["QuizAppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/services/quizapp.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/quizapp.service.ts ***!
  \*********************************************/
/*! exports provided: QuizAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizAppService", function() { return QuizAppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



 //angular 6, before import { Observable } from 'rxjs/Observable';
 //angular 6, before import 'rxjs/add/operator/map';

var httpOptions = {
    HEADERS: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ "Content-Type": "application/json" })
};
var QuizAppService = /** @class */ (function () {
    function QuizAppService(http) {
        this.http = http;
        this.API_KEY = "YOUR_API_KEY";
        this.heroesUrl = "api/heroes";
        this.userUrl = "https://quizapp-dfdb.restdb.io/rest/profile?apikey=5e003489b68f0802dd3e5c67";
    }
    QuizAppService.prototype.getUsers = function () {
        return this.http.get(this.userUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error || "Server error");
        }));
    };
    QuizAppService.prototype.addUsers = function (user) {
        var myObj = {
            firstname: user.firstname,
            lastname: user.lastname,
            password: user.password
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ "Content-Type": "application/json" });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        return this.http.post(this.userUrl, myObj, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.json().error || "Server error");
        }));
    };
    QuizAppService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    QuizAppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }) //angular 6
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], QuizAppService);
    return QuizAppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\quizapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map