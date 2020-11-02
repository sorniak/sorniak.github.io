(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dsh/workplace/our_team/ourTeam/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "GDbA":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TeamService {
    constructor(http) {
        this.http = http;
        this.teamUrl = 'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json';
    }
    getMembers() {
        return this.http.get(this.teamUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            console.log(Object.values(res['data'][0]['attributes']['memberCards']));
            return Object.values(res['data'][0]['attributes']['memberCards']);
        }));
        //                                         .pipe(
        //   tap(data => console.log(data).json())
        // )
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team.component */ "mGeP");




class AppComponent {
    constructor() {
        this.title = 'ourTeam';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-team");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _team_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/team.service */ "GDbA");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _team_team_component__WEBPACK_IMPORTED_MODULE_4__["TeamComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/team.service */ "GDbA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "background-image": a0 }; };
function TeamComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + member_r1.imageUrl.w200 + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.block.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.block.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.block.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.block.text);
} }
class TeamComponent {
    constructor(teamService) {
        this.teamService = teamService;
    }
    ngOnInit() {
        this.members = this.teamService.getMembers();
        // this.teamService.getMembers()
        //   .subscribe(
        //     members => this.members = members
        //   )
        // console.log(this.members);
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 5, vars: 3, consts: [[1, "container"], [1, "header__container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "item__member_image", 3, "ngStyle"], [1, "item__info", "title"], [1, "item__info"], [1, "item__info", "margin-top-15", "link"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Our team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TeamComponent_div_3_Template, 10, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.members));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".item[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px 0 0;\n  width: 200px;\n  font-size: 12px;\n  line-height: 22px;\n  font-family: sans-serif;\n}\n\n.item__info[_ngcontent-%COMP%] {\n  margin: 0 0 0 15px;\n}\n\n.item__member_image[_ngcontent-%COMP%] {\n  height: 200px;\n  margin: 0 0 15px 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75%;\n  height: 500px;\n  margin: 0 auto 0 auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n\n.header__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  font-size: 22px;\n  font-weight: bold;\n  font-family: sans-serif;\n  color: #002D4C;\n}\n\n.margin-top-15[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  color: #002D4C;\n}\n\n.link[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #60A5D2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUdBLCtDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNDdkNjO0FEc0NsQjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ2pEYztBRGdEbEI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGNDckRlO0FEb0RuQiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvX3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5pdGVtX19pbmZvIHtcbiAgICBtYXJnaW46IDAgMCAwIDE1cHg7XG59XG5cbi5pdGVtX19tZW1iZXJfaW1hZ2Uge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyX19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAkZGFyay10ZXh0LWNvbG9yO1xufVxuXG4ubWFyZ2luLXRvcC0xNSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG59XG5cbi5saW5re1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAkbGlnaHQtYmx1ZS1jb2xvcjtcbn0iLCIkZGFyay10ZXh0LWNvbG9yOiAjMDAyRDRDO1xuJGxpZ2h0LWJsdWUtY29sb3I6ICM2MEE1RDI7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return [{ type: _services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map