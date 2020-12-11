(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"emilio-generator","version":"2.0.7","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~7.1.0","@angular/common":"~7.1.0","@angular/compiler":"~7.1.0","@angular/core":"~7.1.0","@angular/forms":"~7.1.0","@angular/platform-browser":"~7.1.0","@angular/platform-browser-dynamic":"~7.1.0","@angular/router":"~7.1.0","@ngx-loading-bar/core":"^4.2.0","@ngx-loading-bar/router":"^4.2.0","@octokit/request":"^3.0.1","@octokit/rest":"^16.43.1","@types/jquery":"^3.3.34","ace-builds":"^1.4.9","bootstrap":"^4.4.1","chart.js":"^2.9.3","compass-mixins":"^0.12.10","core-js":"^2.6.11","emailjs":"^2.2.0","emailjs-com":"^2.4.1","file-saver":"^2.0.2","jquery":"^3.4.1","jszip":"^3.3.0","moment":"^2.24.0","ng2-ace-editor":"^0.3.9","ng2-charts":"^1.6.0","ngx-markdown":"^7.1.5","popper.js":"^1.16.1","rxjs":"~6.3.3","tslib":"^1.11.1","zone.js":"^0.8.29"},"devDependencies":{"@angular-devkit/build-angular":"^0.13.10","@angular/cli":"^7.3.10","@angular/compiler-cli":"^7.2.16","@angular/language-service":"~7.1.0","@types/chrome":"0.0.78","@types/file-saver":"^2.0.1","@types/jasmine":"^2.8.16","@types/jasminewd2":"^2.0.8","@types/node":"^8.10.59","angular-cli-ghpages":"^0.5.3","codelyzer":"~4.5.0","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"^4.4.1","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"^2.1.1","karma-jasmine":"~1.1.2","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.4.3","ts-node":"~7.0.0","tslint":"~5.11.0","typescript":"~3.1.6","webpack-dev-server":"^3.10.3"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/generate-script/generate-script.module": [
		"./src/app/views/generate-script/generate-script.module.ts",
		"default~views-generate-script-generate-script-module~views-import-export-import-export-module~views-~9cef524b",
		"default~views-generate-script-generate-script-module~views-language-language-module",
		"views-generate-script-generate-script-module"
	],
	"./views/import-export/import-export.module": [
		"./src/app/views/import-export/import-export.module.ts",
		"default~views-generate-script-generate-script-module~views-import-export-import-export-module~views-~9cef524b",
		"views-import-export-import-export-module"
	],
	"./views/instructions/instructions.module": [
		"./src/app/views/instructions/instructions.module.ts",
		"views-instructions-instructions-module"
	],
	"./views/language/language.module": [
		"./src/app/views/language/language.module.ts",
		"default~views-generate-script-generate-script-module~views-import-export-import-export-module~views-~9cef524b",
		"default~views-generate-script-generate-script-module~views-language-language-module",
		"views-language-language-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _views_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home/home.component */ "./src/app/views/home/home/home.component.ts");
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/auth.service */ "./src/app/lib/services/auth.service.ts");





var routes = [
    {
        path: '',
        canActivate: [_lib_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]],
        children: [
            {
                path: '',
                component: _views_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            },
            {
                path: 'instructions',
                loadChildren: './views/instructions/instructions.module#InstructionsModule'
            },
            {
                path: 'language',
                loadChildren: './views/language/language.module#LanguageModule'
            },
            {
                path: 'generate-script',
                loadChildren: './views/generate-script/generate-script.module#GenerateScriptModule'
            },
            {
                path: 'import-export',
                loadChildren: './views/import-export/import-export.module#ImportExportModule'
            }
        ]
    },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- svg icons -->\r\n<eg-icons></eg-icons>\r\n\r\n<ng-container *ngIf=\"auth.validUser == false\">\r\n  <eg-access-loading></eg-access-loading>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"auth.validUser == true\">\r\n\r\n  <ngx-loading-bar [includeSpinner]=\"false\" [height]=\"'3px'\" [color]=\"'#cc00cc'\"></ngx-loading-bar>\r\n\r\n  <!-- layout -->\r\n  <div class=\"eg-layout\">\r\n    <eg-navbar></eg-navbar>\r\n\r\n    <div class=\"eg-content\">\r\n      <div class=\"eg-sidebar\">\r\n        <eg-sidebar></eg-sidebar>\r\n      </div>\r\n      <div class=\"eg-outlet\">\r\n        <router-outlet (window:beforeunload)=\"doBeforeUnload()\"></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/auth.service */ "./src/app/lib/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.doBeforeUnload = function () {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            return false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lib_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lib_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/icons/icons.module */ "./src/app/lib/icons/icons.module.ts");
/* harmony import */ var _lib_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/components.module */ "./src/app/lib/components/components.module.ts");
/* harmony import */ var _views_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home/home.module */ "./src/app/views/home/home.module.ts");
/* harmony import */ var _data_app_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm5/ngx-loading-bar-router.js");
/* harmony import */ var _views_access_loading_access_loading_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/access-loading/access-loading.module */ "./src/app/views/access-loading/access-loading.module.ts");
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/services/auth.service */ "./src/app/lib/services/auth.service.ts");
/* harmony import */ var _lib_services_releases_github_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/services/releases-github-api.service */ "./src/app/lib/services/releases-github-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _lib_icons_icons_module__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                _lib_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _views_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_9__["LoadingBarRouterModule"],
                _views_access_loading_access_loading_module__WEBPACK_IMPORTED_MODULE_10__["AccessLoadingModule"]
            ],
            providers: [
                _data_app_data__WEBPACK_IMPORTED_MODULE_8__["AppData"],
                _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _lib_services_releases_github_api_service__WEBPACK_IMPORTED_MODULE_12__["ReleasesGithubApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/app-data-languages.ts":
/*!********************************************!*\
  !*** ./src/app/data/app-data-languages.ts ***!
  \********************************************/
/*! exports provided: LANGUAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGES", function() { return LANGUAGES; });
/* harmony import */ var _app_language_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-language-es */ "./src/app/data/app-language-es.ts");
/* harmony import */ var _app_language_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-language-en */ "./src/app/data/app-language-en.ts");
/* harmony import */ var _app_language_ca__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-language-ca */ "./src/app/data/app-language-ca.ts");
/* harmony import */ var _app_language_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-language-fr */ "./src/app/data/app-language-fr.ts");
/* harmony import */ var _app_language_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-language-de */ "./src/app/data/app-language-de.ts");
/* harmony import */ var _app_language_zho__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-language-zho */ "./src/app/data/app-language-zho.ts");
/* harmony import */ var _app_language_ar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-language-ar */ "./src/app/data/app-language-ar.ts");
/* harmony import */ var _app_language_chi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-language-chi */ "./src/app/data/app-language-chi.ts");
/* harmony import */ var _app_language_ja__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-language-ja */ "./src/app/data/app-language-ja.ts");
/* harmony import */ var _app_language_it__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-language-it */ "./src/app/data/app-language-it.ts");
/* harmony import */ var _app_language_ko__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-language-ko */ "./src/app/data/app-language-ko.ts");
/* harmony import */ var _app_language_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-language-pt */ "./src/app/data/app-language-pt.ts");
/* harmony import */ var _app_language_eu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-language-eu */ "./src/app/data/app-language-eu.ts");
/* harmony import */ var _app_language_sv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-language-sv */ "./src/app/data/app-language-sv.ts");
/* harmony import */ var _app_language_ru__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-language-ru */ "./src/app/data/app-language-ru.ts");
/* harmony import */ var _app_language_mn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-language-mn */ "./src/app/data/app-language-mn.ts");
/* harmony import */ var _app_language_bg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-language-bg */ "./src/app/data/app-language-bg.ts");
/* harmony import */ var _app_language_ro__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-language-ro */ "./src/app/data/app-language-ro.ts");
/* harmony import */ var _app_language_nl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-language-nl */ "./src/app/data/app-language-nl.ts");
/* harmony import */ var _app_language_hu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-language-hu */ "./src/app/data/app-language-hu.ts");
/* harmony import */ var _app_language_pl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app-language-pl */ "./src/app/data/app-language-pl.ts");
/* harmony import */ var _app_language_sk__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-language-sk */ "./src/app/data/app-language-sk.ts");
/* harmony import */ var _app_language_tr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-language-tr */ "./src/app/data/app-language-tr.ts");
/* harmony import */ var _app_language_th__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app-language-th */ "./src/app/data/app-language-th.ts");
/* harmony import */ var _app_language_lo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-language-lo */ "./src/app/data/app-language-lo.ts");

























var LANGUAGES = {
    1: {
        key: 'es',
        name: 'Spanish',
        emails: _app_language_es__WEBPACK_IMPORTED_MODULE_0__["LANGUAGE_ES"]
    },
    2: {
        key: 'en',
        name: 'English',
        emails: _app_language_en__WEBPACK_IMPORTED_MODULE_1__["LANGUAGE_EN"]
    },
    3: {
        key: 'ca',
        name: 'Catalan',
        emails: _app_language_ca__WEBPACK_IMPORTED_MODULE_2__["LANGUAGE_CA"]
    },
    4: {
        key: 'fr',
        name: 'French',
        emails: _app_language_fr__WEBPACK_IMPORTED_MODULE_3__["LANGUAGE_FR"]
    },
    5: {
        key: 'de',
        name: 'German',
        emails: _app_language_de__WEBPACK_IMPORTED_MODULE_4__["LANGUAGE_DE"]
    },
    6: {
        key: 'zho',
        name: 'Trad. Chinese',
        emails: _app_language_zho__WEBPACK_IMPORTED_MODULE_5__["LANGUAGE_ZHO"]
    },
    7: {
        key: 'ar',
        name: 'Arabic',
        emails: _app_language_ar__WEBPACK_IMPORTED_MODULE_6__["LANGUAGE_AR"]
    },
    10: {
        key: 'chi',
        name: 'Simpl. Chinese',
        emails: _app_language_chi__WEBPACK_IMPORTED_MODULE_7__["LANGUAGE_CHI"]
    },
    11: {
        key: 'ja',
        name: 'Japanese',
        emails: _app_language_ja__WEBPACK_IMPORTED_MODULE_8__["LANGUAGE_JA"]
    },
    12: {
        key: 'ru',
        name: 'Russian',
        emails: _app_language_ru__WEBPACK_IMPORTED_MODULE_14__["LANGUAGE_RU"]
    },
    13: {
        key: 'it',
        name: 'Italian',
        emails: _app_language_it__WEBPACK_IMPORTED_MODULE_9__["LANGUAGE_IT"]
    },
    15: {
        key: 'ko',
        name: 'Korean',
        emails: _app_language_ko__WEBPACK_IMPORTED_MODULE_10__["LANGUAGE_KO"]
    },
    17: {
        key: 'pt',
        name: 'Portuguese',
        emails: _app_language_pt__WEBPACK_IMPORTED_MODULE_11__["LANGUAGE_PT"]
    },
    19: {
        key: 'ro',
        name: 'Romanian',
        emails: _app_language_ro__WEBPACK_IMPORTED_MODULE_17__["LANGUAGE_RO"]
    },
    20: {
        key: 'nl',
        name: 'Dutch',
        emails: _app_language_nl__WEBPACK_IMPORTED_MODULE_18__["LANGUAGE_NL"]
    },
    21: {
        key: 'hu',
        name: 'Hungarian',
        emails: _app_language_hu__WEBPACK_IMPORTED_MODULE_19__["LANGUAGE_HU"]
    },
    22: {
        key: 'sk',
        name: 'Slovak',
        emails: _app_language_sk__WEBPACK_IMPORTED_MODULE_21__["LANGUAGE_SK"]
    },
    24: {
        key: 'eu',
        name: 'Basque',
        emails: _app_language_eu__WEBPACK_IMPORTED_MODULE_12__["LANGUAGE_EU"]
    },
    25: {
        key: 'tr',
        name: 'Turkish',
        emails: _app_language_tr__WEBPACK_IMPORTED_MODULE_22__["LANGUAGE_TR"]
    },
    26: {
        key: 'th',
        name: 'Thai',
        emails: _app_language_th__WEBPACK_IMPORTED_MODULE_23__["LANGUAGE_TH"]
    },
    27: {
        key: 'lo',
        name: 'Lao',
        emails: _app_language_lo__WEBPACK_IMPORTED_MODULE_24__["LANGUAGE_LO"]
    },
    28: {
        key: 'pl',
        name: 'Polish',
        emails: _app_language_pl__WEBPACK_IMPORTED_MODULE_20__["LANGUAGE_PL"]
    },
    31: {
        key: 'mn',
        name: 'Mongolian',
        emails: _app_language_mn__WEBPACK_IMPORTED_MODULE_15__["LANGUAGE_MN"]
    },
    32: {
        key: 'bg',
        name: 'Bulgarian',
        emails: _app_language_bg__WEBPACK_IMPORTED_MODULE_16__["LANGUAGE_BG"]
    },
    34: {
        key: 'sv',
        name: 'Svenska',
        emails: _app_language_sv__WEBPACK_IMPORTED_MODULE_13__["LANGUAGE_SV"]
    }
};


/***/ }),

/***/ "./src/app/data/app-data-preview.ts":
/*!******************************************!*\
  !*** ./src/app/data/app-data-preview.ts ***!
  \******************************************/
/*! exports provided: PREVIEWDATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEWDATA", function() { return PREVIEWDATA; });
var PREVIEWDATA = {
    css: "\n    <style>\n      body{ margin: 0; font-size: 11px; }\n      ::-webkit-scrollbar {\n        width:  4px;\n        height: 4px;\n      }\n      ::-webkit-scrollbar-thumb {\n        background: rgb(207, 207, 210);\n      }\n      ::-webkit-scrollbar-track {\n        background: rgb(244, 244, 244);\n      }\n    </style>\n  ",
    logo: 'data:image/jpeg;base64,/9j/4QnARXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAeAAAAcgEyAAIAAAAUAAAAkIdpAAQAAAABAAAApAAAANAADg+mAAAnEAAOD6YAACcQQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykAMjAxOTowMjowMSAxODoxMDowNwAAA6ABAAMAAAAB//8AAKACA' +
        'AQAAAABAAAA0qADAAQAAAABAAAAUgAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAEeARsABQAAAAEAAAEmASgAAwAAAAEAAgAAAgEABAAAAAEAAAEuAgIABAAAAAEAAAiKAAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMD' +
        'AwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAPgCgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSw' +
        'WIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl' +
        '6e3x//aAAwDAQACEQMRAD8A9VSSSSUpJJJJSkkkklKUS9jXNY5wDnztaTqY1O1SXP8A1j6VnnMxevdMLrcvp0zhk+22p38+ylp9teQ9n/bns/0daS/HESlwmXDd0T+9+i9AuN+u31nzsHJZ0zpz/QeaxbfeAC4Bxc2uqrfLW/R3veuqwM7G6jh1ZuK7fTc3c08EfmuY8fm2Vv8AZYz99ebfXW+u76y5JrIcKmV1OI1G5o3Pb/Z9TagTo2OSxCWYicb4ATR/e+X1Obd1TqmRPr5uR' +
        'aHN2ODrXQWzOxzWlrHNQxl5vqB4y7mWEtHrGyyRt9tb3lrvUd6H/qtCSTHX4YjYAfR9b6LmdOuxK8bDzm578djRbZ6nqPJj+ct3OfZ73fvLRXijH2VWC2p7qrWztsrcWPE6Ha9m1zV6N9TvrN+1aDhZjh+0Mdo9xgesz/SsbP8AOM/7Uf8Abn+ETwXK5rkpYwckTxx/S/ej4vSpJJItJSSSSSlJJJJKf//Q9VSSSSUpJJJJSkkkklObZ9Y+iU3DHvy2UXOIDa7Q6sncdrXD1Ws9m' +
        '78/6CsZ3UsLp1YtzbfRqP8AhHA7B/XsaNlfP+EXPfWjoo631Q4YIbfXgutxnOnbv9VrXV2N/wBHc39G7/R/TWRg9fyLeg5/QeoAszsSsiovPuc2tzd9Fm76V9H/AIPShbbjy0JxjKJO49yF+qMZ/pxbX1ncMLf1Dome/AfmD1MnEIdU28mGOycVt7A37bt/n21/pbav0385/PcXzrMk6kkySTySV6B/jK/5BqA0P2lsHw9ly5rrmDRkZN+T0yi1n2eiq/OpfUavp+w5OJjuYx3ot' +
        '2Odk/4P/CU/4RAtzk8g9qN/pEjiP9ThjESl/helxE9db7bGVViX2ODGCQJc47Wjc6G/SUQQRI1BSIBEHUFNbjcZ0brNj31s6fkl9Ql7fScI/wA8Na7+yur+rf1Iyqchmf1Ox2PbS6aaaHiSC2Hercz6P09np1f56yfqz9aOpYObjYl1xu6fY8VOrsIJZ6h2ttZfZ72trf8A4N9np+mvTE4AOdznMZoeiogSHzR3I/7lSSSSc5qkkkklKSSSSU//0fVUkkklKSSSSUpJJJJTh/aZ+' +
        'tDLRRkGg4po9f0bBWLDY2wM3ln7rf53+Z/4RUfrj9Wftrq+q4Ve7Locw31tEm2trgZa387Ip/M/0lf6L/RLqkkKZo5zCcZQ04Rw/wB4eLyX+MCnKz8GnAwsa/IubaLH+nW4sa3ZYzW2PT+k/wCgxTyOq5DMNl+D0rOPVhjfZq99Jaysu2++57v0VjK7Gep+j9RdNfRXkVOptBLH8gEtPjo9ha9q4n6n1P6s3qYz8zLcMd4bTb9qua6sH1JLXtta327G/wA4kd/NmxSicPqHpwmz/' +
        'W930tT62/VN/TZ6jhAvw3R9oY0fzT/zrmtb/wBp7He5/wD3Hf8A8B/Ncwuz+rV3UuvdK6l0+7Ktu+zOjB6huc1+9wsDW2WMj1mfQsfW/f8Aor/Tt/wa5BuLf9mtyNkMxntqyG/nVl0tY6xv+idYx1O//Sppb/LykBLHkkJTxkRvuJ/Iic3c0t4kRK9e6DnftDo+Jl6zZU3duMnc39HZLvzve1eRL0P/ABduaehWNHLcmwO1nkMd/Z+kjHdi+IxBxCXWMv8ApPUpJJJzkqSSSSUpJ' +
        'JJJT//S9VSSSSUpJJJJSkkkklKSSSSUpeY9A6M7rPTutU49jm5VdjXVBtha1+tv6C9jXCt9du3buf8Aza9Gz/sX2Sz7fs+ywPV9T6MSI3/2lQw/+av2ur7B9i+1a+l9m9PfEHd/Mfm7EC2uWySjCYhGUpEw1iOIR4DY4v77m/UPrNOV089LextOXgaOrADC5k7fVdWP8Kx/6LJ/4X3/AOFWX1TpmVifXI0YYHp9dqex8iQ1rx+vv2/Re+rZ9pZ/wlq6j/sZ/aQ2/Y/2l6hjb6fr+' +
        'pHv+h+m37P5xXrfsX2uj1fT+17bPs+6N+32ev6X53+i9TakkZSMuScMcqlE8cKvgmf/AF4+a/Wj6tW9DyBZVNnTrjFNh1LHH/tPa7/zzZ/hP+MXTf4uag3o19se6zJfJmdGtrYPZ+Yug6r+zv2dkftPZ9h2H1/U+jt/6rd+5s/Sb/5tYf1GpwqKOoV4GQ7KxftO6q5zXNMGuv8AR2MtZX+mq/wj2/zn/gaFC2XLlyT5aUckZRlEx9UokCcf++enSSSTnPUkkkkpSSSSSn//2f/tE' +
        'e5QaG90b3Nob3AgMy4wADhCSU0EJQAAAAAAEAAAAAAAAAAAAAAAAAAAAAA4QklNBDoAAAAAAO8AAAAQAAAAAQAAAAAAC3ByaW50T3V0cHV0AAAABQAAAABQc3RTYm9vbAEAAAAASW50ZWVudW0AAAAASW50ZQAAAABJbWcgAAAAD3ByaW50U2l4dGVlbkJpdGJvb2wAAAAAC3ByaW50ZXJOYW1lVEVYVAAAAAEAAAAAAA9wcmludFByb29mU2V0dXBPYmpjAAAAEQBBAGoAdQBzA' +
        'HQAZQAgAGQAZQAgAHAAcgB1AGUAYgBhAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vb' +
        'AAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQFcJqgAAAAAAAAAKdmVjd' +
        'G9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAA' +
        'AAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABAAXCaoAAEAAgBcJqgAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABA' +
        'FoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABA' +
        'AAAAzhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAANnAAAABgAAAAAAAAAAAAAAUgAAANIAAAAZAG4AZQByAHYALQBsAG8AZwBvAC0AcABuAGcALQB0AHIAYQBuAHMAcABhAHIAZQBuAHQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAANIAAABSAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAE' +
        'AAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABSAAAAAFJnaHRsb25nAAAA0gAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAA' +
        'AxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAAUgAAAABSZ2h0bG9uZwAAANIAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAA' +
        'AEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xpY2VWZXJ0QWxpZ24AAAAHZGVmYXVsdAAAAAtiZ0NvbG9yVHlwZWVudW0AAAARRVNsaWNlQkdDb2xvclR5cGUAAAAATm9uZ' +
        'QAAAAl0b3BPdXRzZXRsb25nAAAAAAAAAApsZWZ0T3V0c2V0bG9uZwAAAAAAAAAMYm90dG9tT3V0c2V0bG9uZwAAAAAAAAALcmlnaHRPdXRzZXRsb25nAAAAAAA4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBBEAAAAAAAEBADhCSU0EFAAAAAAABAAAAAY4QklNBAwAAAAACKYAAAABAAAAoAAAAD4AAAHgAAB0QAAACIoAGAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZ' +
        'QBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAD4AoAMBIgACEQEDEQH/3QAEAAr/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBA' +
        'AAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElB' +
        'haisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/APVUkkklKSSSSUpJJJJSlEvY1zWOcA587Wk6mNTtUlz/ANY+lZ5zMXr3TC63L6dM4ZPttqd/PspafbXkPZ/257P9HWkvxxEpcJlw3dE/vfovQLjfrt9Z87ByWdM6c/0HmsW33gAuAcXNrqq3y1v0d73rqsDOxuo4dWbiu303N3NPB' +
        'H5rmPH5tlb/AGWM/fXm311vru+suSayHCpldTiNRuaNz2/2fU2oE6NjksQlmInG+AE0f3vl9Tm3dU6pkT6+bkWhzdjg610Fszsc1paxzUMZeb6geMu5lhLR6xsskbfbW95a71Heh/6rQkkx1+GI2AH0fW+i5nTrsSvGw85ue/HY0W2ep6jyY/nLdzn2e937y0V4ox9lVgtqe6q1s7bK3FjxOh2vZtc1ejfU76zftWg4WY4ftDHaPcYHrM/0rGz/ADjP+1H/AG5/hE8Fyua5KWMHJ' +
        'E8cf0v3o+L0qSSSLSUkkkkpSSSSSn//0PVUkkklKSSSSUpJJJJTm2fWPolNwx78tlFziA2u0OrJ3Ha1w9VrPZu/P+grGd1LC6dWLc230aj/AIRwOwf17GjZXz/hFz31o6KOt9UOGCG314LrcZzp27/Va11djf8AR3N/Ru/0f01kYPX8i3oOf0HqALM7ErIqLz7nNrc3fRZu+lfR/wCD0oW248tCcYyiTuPchfqjGf6cW19Z3DC39Q6JnvwH5g9TJxCHVNvJhjsnFbewN+27f59tf' +
        '6W2r9N/Ofz3F86zJOpJMkk8klegf4yv+QagND9pbB8PZcua65g0ZGTfk9MotZ9noqvzqX1Gr6fsOTiY7mMd6LdjnZP+D/wlP+EQLc5PIPajf6RI4j/U4YxEpf4XpcRPXW+2xlVYl9jgxgkCXOO1o3Ohv0lEEESNQUiARB1BTW43GdG6zY99bOn5JfUJe30nCP8APDWu/srq/q39SMqnIZn9Tsdj20ummmh4kgth3q3M+j9PZ6dX+esn6s/WjqWDm42Jdcbun2PFTq7CCWeodrbWX' +
        '2e9ra3/AODfZ6fpr0xOADnc5zGaHoqIEh80dyP+5UkkknOapJJJJSkkkklP/9H1VJJJJSkkkklKSSSSU4f2mfrQy0UZBoOKaPX9GwViw2NsDN5Z+63+d/mf+EVH64/Vn7a6vquFXuy6HMN9bRJtra4GWt/OyKfzP9JX+i/0S6pJCmaOcwnGUNOEcP8AeHi8l/jApys/BpwMLGvyLm2ix/p1uLGt2WM1tj0/pP8AoMU8jquQzDZfg9Kzj1YY32avfSWsrLtvvue79FYyuxnqfo/UX' +
        'TX0V5FTqbQSx/IBLT46PYWvauJ+p9T+rN6mM/My3DHeG02/armurB9SS17bWt9uxv8AOJHfzZsUonD6h6cJs/1vd9LU+tv1Tf02eo4QL8N0faGNH80/865rW/8Aaex3uf8A9x3/APAfzXMLs/q1d1Lr3SupdPuyrbvszoweobnNfvcLA1tljI9Zn0LH1v3/AKK/07f8GuQbi3/ZrcjZDMZ7ashv51ZdLWOsb/onWMdTv/0qaW/y8pASx5JCU8ZEb7ifyInN3NLeJESvXug537Q6P' +
        'iZes2VN3bjJ3N/R2S7873tXkS9D/wAXbmnoVjRy3JsDtZ5DHf2fpIx3YviMQcQl1jL/AKT1KSSSc5KkkkklKSSSSU//0vVUkkklKSSSSUpJJJJSkkkklKXmPQOjO6z07rVOPY5uVXY11QbYWtfrb+gvY1wrfXbt27n/AM2vRs/7F9ks+37PssD1fU+jEiN/9pUMP/mr9rq+wfYvtWvpfZvT3xB3fzH5uxAtrlskowmIRlKRMNYjiEeA2OL++5v1D6zTldPPS3sbTl4GjqwAwuZO3' +
        '1XVj/Csf+iyf+F9/wDhVl9U6ZlYn1yNGGB6fXansfIkNa8fr79v0Xvq2faWf8Jauo/7Gf2kNv2P9peoY2+n6/qR7/ofpt+z+cV637F9ro9X0/te2z7Pujft9nr+l+d/ovU2pJGUjLknDHKpRPHCr4Jn/wBePmv1o+rVvQ8gWVTZ064xTYdSxx/7T2u/882f4T/jF03+LmoN6NfbHusyXyZnRra2D2fmLoOq/s79nZH7T2fYdh9f1Po7f+q3fubP0m/+bWH9RqcKijqFeBkOysX7T' +
        'uquc1zTBrr/AEdjLWV/pqv8I9v85/4GhQtly5ck+WlHJGUZRMfVKJAnH/vnp0kkk5z1JJJJKUkkkkp//9k4QklNBCEAAAAAAFUAAAABAQAAAA8AQQBkAG8AYgBlACAAUABoAG8AdABvAHMAaABvAHAAAAATAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwACAAQwBTADYAAAABADhCSU0EBgAAAAAABwAEAQEAAQEA/+EOAGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuM' +
        'C8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvM' +
        'DIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL' +
        '25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDItMDFUMTg6MDA6MDUrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAyLTAxVDE4O' +
        'jEwOjA3KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAyLTAxVDE4OjEwOjA3KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUI1OUNCQjAzNzI2RTkxMTg1MjNBMTlFOEQwMTk1ODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUE1OUNCQjAzNzI2RTkxMTg1M' +
        'jNBMTlFOEQwMTk1ODkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5QTU5Q0JCMDM3MjZFOTExODUyM0ExOUU4RDAxOTU4OSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OUE1OUNCQjAzNzI2RTkxMTg1MjNBMTlFOEQwMTk1ODkiIHN0RXZ0OndoZ' +
        'W49IjIwMTktMDItMDFUMTg6MDA6MDUrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvcG5nIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZ' +
        'UlEPSJ4bXAuaWlkOjlCNTlDQkIwMzcyNkU5MTE4NTIzQTE5RThEMDE5NTg5IiBzdEV2dDp3aGVuPSIyMDE5LTAyLTAxVDE4OjEwOjA3KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmO' +
        'lJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI' +
        'CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/uACFBZG9iZQBkAAAAA' +
        'AEDABADAgMGAAAAAAAAAAAAAAAA/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQcHBw0MDRgQEBgUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCABSANIDAREAAhEBAxEB/8QA4AABAAMBAAMBAAAAAAAAAAAAAAUGBwgBAwQCAQEAAgMBA' +
        'AAAAAAAAAAAAAAAAQIDBAUGEAAABgEEAAQDBgcAAAAAAAABAgMEBQYAEEARBzAxEhMgMwghQSIyFTYjFDQWJhc3EQACAQMCAgUGBgoTAAAAAAABAgMREgQABSEiMTJSExQQQEFRQgZhgWJygiMgMHGSM0NjszQl8JHBssLyU3ODk8MkdLQVNXUWJhIAAgEBAwgHBwUAAAAAAAAAAQIAEhEiMhBAITFCcrIDIPBBcVJiEzBgYbGi0jNwUYGSwv/aAAwDAQECEQMRAAAA6pAAAAABm' +
        'FOxjdO9FM9knU6jy+N8gAAAAAAAAFeja9C1onT5Xxezp9d4e1F0tz9/yeZsE6oAAAAAAAAGd16lgnW5dxexjYygCxzq9U5vGfYxgAAAAAAflNRrvWW2nCxsc+4/T06u+BIzimp19KtydfvwvYgAAAAAAAZfTsU2N/V78XK6dmrxu06u8P0axfib9k8yAAAAAAAAKlG9Xa7XzL1WNzUbcfAaelq1d0ftHX+bw0tOAAAAAAAAeE1Su7bLaMLGxntep8cZL5bm804/WRMZx0Fk8xq1+' +
        'KAAAAAAAAAIGNnPK9SuRt+SgV6cTGbZb8Hc8nnAAAAAAAAABARs4bj9HZJ1L/fmZRTtUWvS0W3K3rJ5oAAAAAAAAAQ0bEFGx8y95tzoeM/qTm9ettd/PgAAAAAAAAAAACAjan51QAAAP//aAAgBAgABBQDxDG4z1DnOBztRwB50N56gYcAedpxxnqDBH4QHjAHY+oNOcN8ABnpHAJsjBzhR4wPM3mIfAU2z+8wYTDefGCHwAOy404wS6BwODqQdqPkTA8zhghoTaj5AHIEHDByBf' +
        'twQ4wm1EMAvGCXQA4wQ5wocDuvv8H//2gAIAQMAAQUA8SNjQVAjBEuAiQMfAkRPaM0yHUft/aVyMD+BoYoCDmMSUx21MifZpKg4IVisJ0EgTJ8DxqVYiqRiG8cA5xOOVOBkxKY7M5SsFFDE1VWKmB5FAuPJgRAxhEdhHufZTkWYLkcfKj+f5RiucxNBDnH8WQS7In9NFv8A2xmiAUzAeGgvDnI1desdBABByl7amwDCuygnijgTg0fn9JCqJmVKsko3UMcmk0jwptGfzpz87r7Gc' +
        'M49SaKwH0nS/h2jL5z137K0y2EQjl/aWfqA3O2clWJOG/BtG6wJmdP/AHwRlDkTOICLl0ZYWjsyB5ZQiqO6D5Hg/wD/2gAIAQEAAQUA8TtntdxWl5Dsm9PyK2CdWHrlW2y1qKHBdnfZKwRtX62tSdkqeduHMfsTRs6ctV6r3Bb4FSkXONtcLs5mHXpM257HpSERY5lWanfgotzfVOdiJiPl2Hjqn9tOW7VqkO4byrN1Fsb5DyL3s2LrTOd1hYGTmnEd1Zfn+UbodJqu3bN2yOw7N' +
        'qadqtXVN6d1Oaq4/wCY9nih/uXsOtQ7Gd0Ic5DdZ9wzKMtsn3/Ue5Otv11l0A/eP4/ssia/dCFEg4yeuNOPFoaIrKoLVGXUmKxsDgYSOKRJL2EPKKqrKId3XreAI/fuatNx8M5o1hq9oimEXM6fT5OJua5tL6YS0n6dDFLCU8DOu7O/q0DKxWCvrxJ8+nF2IP8AaX/9kdf0f+56R0JbGzZbtSt/r9L61jHN2hLZVJWsTH05tEzze0tEC8nI+mdamqK8707DyVlZJOUmlRp0bWELz' +
        'SY22w3ScVOwFz3S/wC+/B//2gAIAQICBj8A/S7X79//2gAIAQMCBj8A9pW+DimhRBYBdw6IWZV8ujbzUBzSsI2da5F69uWw6RNAoPllJ1bJ8Waek5vr+J/8NKaTbAo2R0aTr2WlLDTmNq0sN6Um6YGJWw4b2KX9PhdTj6FraBNLD+L0s5d3zy05iW7K1q3bJ6vL0txrOX3NxQ2eeD1BS/H0C6CxsWZtvr8jKGwN9MUDVe+cJ34otJ5iNdhRvyJiy2GMo2TmRSgUn4tVkUNpolHLR' +
        'LPDb92KWjlctW3uG9K2FDEwFhSeuHKH8Q4c1TeEXugHMxWD+0KHWnDCNTLiXIp781TeES3AR1aDmjSOt6A9hutPVXG92ni+2VLFHxzWqyojDLyi0YTPTIDr5vDLQLBATsrTKhq2liuv752deMbmE/V7L//aAAgBAQEGPwD7YuzbMqNujoJJ8iQXLCrdUBehpGHNzcqroJk7zkFQ4kAjYRUYdH4MJ+1rJMu45L+M/S7pXPe07fHm+PWHt+BueZEj2+LkjnIKY0ZF55iV5R1RTQFSa' +
        'ClT0+aZmXsOL4rPReA9qNCDdKq0PeMnTZ/F1h5hkvzIVEGcD1hNGACT88c/0vJvNTWkiKPuCJPKs+NK8E6cUljYow+4RQ6KyTnc8RyWfHy2ZzUjpWQ1df3uo9wxCEnWiZmN7UUtOK/Cp9hva80l969khZ9kyj/6Ha4h1RWvioV+RWrr872eod1O7Y8mPbciI4aVjStoi69/wFdZ26yrY+ZM0tnZUnlX6K0H2Me4QBpcY8mXiXFVlQin3Ll6yHUWfgTLNjyqGVlINCQGtanQwrxHm' +
        'DvaWsBa1RVjQVoB69eG3bxeDkEXLFNjSAstSLlIBDDh69JueGxy8WSPvoWhFxdaVoo7Xot1kbdjYubLlY3LmQnFkHdEgkCS6ii6nL2tSSbI0uOZGPi9pyIXhkx3IDctwtMb1qoB5fm/YSY22xifKjjMq49yrI6r1hGpIvYDmtXmt1IYdnnjEVbvEUgqR6F70rd8Wlzfegx5amIFNuQtRJCePeMpF1o7PLdpIMeNYYYwFSNAFUACgAA+DzHE2suY8kbXkzYUlaKJklSgfgeRhynUv' +
        'ut7wBoMGSUx/W8PDZFaca/in9r+s7Wve8fl8P8Ayw1t3fLGYbsITCUAoVL8193Lbb011nSe7U4ztphskyTDzx4rzMQsRkFVYVHL2ep1vKHRirDoZTQj4xrC2ffsjxO2ShcaGYpWWN+rGSy8zgnla65vM9r/AOKyfz0ejvm1x/rfET6+JRxyIVHR/OJ7PaXl7Gt4yMyVpp1kx4e8brWRRWID81RTWFDIgkjaTBR42AKsCVqCD0g11umbHhwQbFuOB3W4Y9AsV6OSxs6EQx9NvLy6x' +
        'd72+KU+7u6AyYMktC8YJNI5COFSovQ+0nyrvKk0LmOWJg8bqaFWU1BB9YOts3OUAS5WOjy2movpRuj5Q8xYI1rEEK1K0PoNNQb82/5C52MjQwIsMIhETmrIUpzXdotdrjrdsnbW8Od2dZniCgpHMqlS6j5RNzL2tNv/ALxb5uPfyENJmwQL3cXdgBSe6Ru6A4W6kxsn333jN29ABkd3juYwB/LNHBx/pDptjwMmLdNvxcZIJcdR9bYihVawhXDcOVgvX6up8TAyzl4qmsbOjxSpx' +
        'I7uVHVSsidDeXL2ch++wJu9uPFe7n6AvqoyPw8130jp8DP+bOt6ZyFQTxkseAAEZrqfI92l/Va5MzTvEPqvDkEOfVY7/g/oax97iSmPuaWzkDgJ4gAfv47fvW1jShu/2/PiXIwMwCiyIw4g9mSNuSRPZbyb1iEmjxQyqtOHIzKTX6S+a77/AIGf82db74Vnj3XHmQ4pV2VZAEJMTqDab/ZNOVtZHurmxJj5Tu0mLLaEd2Wt8Uh4FmXrJX5a6zceNLsvGHisX13xAkgfOS5df9Uzb' +
        'o9p2uSXLOWtC4eZLIYlqOAVzJK3Hm6upds3FOZeaGZepLGeh0P7LdbtlMrGSHHjjRwTYBI5LAj0tyLb9LzV9uj3BsHEyEeLLEcaO8iOKUVn6nCvo0/+mbvM+JOytl4s0UbB7QQLWFrIeOm94cXPyNszmdZv7sEoJl/GC4GhanNqKLKn8TkKtJZ7BHee1YOC/FrNhwjcM3KkyWJFLQx5IxxPLGOC6bBygI8mOrYeWBVopP3Ub21/ha3vYtwj7qzHWSVTxVisgEciH0qys3HzvD/Rv' +
        '9un6P0r8NH0/kP7T7V//9k=',
    social: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAQAAADbnPi/AAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJ' +
        'AwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJ' +
        'rBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas' +
        '7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5' +
        'Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAGOElEQVR42tSbW2xURRiAv54tRWJITORh2TR1C0ZTC4VoqQUNUSIGE0KIgpIKCamA9YUn5ckAqSGEKk8SeTCKpRAkSBN4kHoD5SbQgoBc2sqlQGnKRUoopHIpvw/b3e51zpwzczD+8zbnn9nv/Dtn/n/+mcnDhoQoYQyl' +
        'FBNlBE8ylOHc4zY3uU0vHXRwghOcpt/8p/IMW49nGlN4keEa2r0cZCdNHEX4D2Q0yzmD+ChnWM7oR4maz7vs5aEv2Hh5yD7mkh88bAELfdo1u60XUhAcrEM1l6zBxsslqnGCwC3nsHXYeDlMuV3YIazivu7PhyUihRL2hnyfOobYmtaK2cwEtUoEh3JepYxRRMgHbnKVVpo5QCudemZp4W3Om1t3Jj1uFp0u2yS33JG1UqFn8R5mmrqVWvX0FZYaOSs60iyVEtGBrvXvzELUq2HL' +
        '5KB4kU1SqINcT8jfjNuoxl0q3qVfpusMjkbvs3OIrWrcevErH+sMja3erJxHg6q7qGwWE1kqUXfkBi9jeYWqqyL5Skxlic7AWKmLO1s1MxTKKrEhM3QCpNk6uCX0qrqZKXakR8fGvZS44Q7lmKqLQvlLbEm9ziR3jKFq4Dp1B5+ITZmsMyt/qsJ9gQfqyazPKvAuKXIHfpA7knNoVjdeLLalUsfGLbni5QVuQc5p68Cf6wWfC7LhDuOyulmZ2JcevSjuMsMGh0Fcaoiov8cpASxj' +
        'nuAZHbUIH6QDF/CRW6txgSwUn9ZT+zAeDsWB5zDSrc2kQIAn6KmNZE5qxSH3lVq/BCG/6676DiVbuMz9RfODWYtTpP9XlA0Cz9NJ9wQjj+mrzosD5zHLXfthQMAP9FVnkxcDLiPqrn0vIOB/9FWfYlwM+A29DOCtQIA7vChPiwFreYRO3XSIR2n1ojwFHEJU6mmfyGEhPRvd4GrW+mYvwJWEHJ7Vyp4De7LUvcNEXmIkB1zavkUp4xjL0Ywnp7wAD6cEqnQTds9nTPrzE6FLodKt' +
        'VCXi3nDakyt6qZXBUuW4r5ri0p3x5++mOzHCdytaHuJi4tNtSnnyjdcvo9RhlK5uF+tyPitU+sHbSbNuqqPY5PUbjTr6vhHWZyQ2wwnLTVa0m5PQG8ErSfXfJf4hL568TX8EhWVF2hhcIGEJS4X84RLizJeIhOU1uZRSO8l7rr4NrnlpMEauZKT37mpFZfflTlrNar30a2q5hjptkllmWQorj+msmDPLLbw2CctaK8Cv+93A4a535I3GuLO8btokAV/33igqDUa4Nf5xe+G8n4ZF' +
        '8qVv3Cr/uMI1OO6vaVgW+YC9IONNcIU2hxv+wsJutjNW6ZAzZQ0TOerdWSTLFfjaZNM1LG/Kec15eIaZbWNlnUObyQt308hUFmpoTmW7mW0H4n1DYIAzNPGFi85xbyuL3NJuARg62eiiscmGdQcs3E6PeT/nXFa/O+3g9tDu0M9v5j11K+eLVrrsAO+m37H1+i2KZ7/aWnH/ElvmWwHeoXjWYCsnsCsGfIoL5n1dzJkbusV1O7gXOBkDFrbYAD6S40kT7XaAtyDx7KWV/+zHHPXb' +
        'bA2IDZ4S2u5lUg6nHDV3yBkJbVhjYy7OJge85CfVkVOKFNBlaoOw7Mti38V27NuVvilzj8/MncfeLLXf27Hv6sxJyHVj0b1UZgnYwzbsm3VjsY9l5jZO3wD41k7Qs4y+bNUOLaa2SB/FFXZOZjrJkMn7LjWmh75/Ttu/sBBD9PO+akeozswaL6fYt8GGfevU71Ng5kLCKZm26TbcheuRu6jb4VB12ZHAvSujTHF7KM780DJ3WapNbgHsSZqBz5mNXuE93eO5K/1b5bmEhatN7btS' +
        '/93y2OB/FPcOAJeb4W7wdiw3pD7bqio/iYhIm5mPa/R+JLfAL/ISERFZYYbr67JEvvrAc65SYTog1vs/6+B6pDz7cUcR8T8gag3vR7kf2k8vEflBNvvZcLFwaD8mxTYWUBqlOdNN+JUh1OlfPPFVtC+e6Es5RwLDPWL7ak/cjQdxeaozqMtT8dl5EWetwZ5jUZDX0wbn57nsN7wAKOx/NBcAB2U0tb6vWNb6v2L5v7vEmmfF2iFKGEsp0YFrwsN4HLhDH39znQ46OMmfdq4J/zsA' +
        'rVbLLMaKq0kAAAAASUVORK5CYII='
};


/***/ }),

/***/ "./src/app/data/app-data.ts":
/*!**********************************!*\
  !*** ./src/app/data/app-data.ts ***!
  \**********************************/
/*! exports provided: AppData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppData", function() { return AppData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_data_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-data-languages */ "./src/app/data/app-data-languages.ts");
/* harmony import */ var _app_data_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-data-preview */ "./src/app/data/app-data-preview.ts");
/* harmony import */ var _lib_services_jszip_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/services/jszip.service */ "./src/app/lib/services/jszip.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var AppData = /** @class */ (function () {
    function AppData(jszip, sanitizer) {
        this.jszip = jszip;
        this.sanitizer = sanitizer;
        this.languages = _app_data_languages__WEBPACK_IMPORTED_MODULE_2__["LANGUAGES"];
        this.previewDataInclude = _app_data_preview__WEBPACK_IMPORTED_MODULE_3__["PREVIEWDATA"];
        this.previewData = {
            id: 1,
            name: '',
            options: {
                logo: this.previewDataInclude.logo,
                social: this.previewDataInclude.social
            },
            refresh: 0,
            style: this.previewDataInclude.css
        };
        this.checkAll();
    }
    AppData.prototype.checkAll = function () {
        var copyLanguages = this.languages;
        copyLanguages = this.checkEmptyLanguages(copyLanguages);
        copyLanguages = this.checkTemplatesTags(copyLanguages);
        copyLanguages = this.trimHtml(copyLanguages);
        return this.languages = copyLanguages;
    };
    // set/update languages[x].empty
    AppData.prototype.checkEmptyLanguages = function (languagesObj) {
        var languagesClone = languagesObj;
        for (var langId in languagesClone) {
            var emptyLanguage = true;
            var thisLanguage = languagesClone[langId];
            for (var emailId in thisLanguage.emails.templates) {
                if (thisLanguage.emails.templates[emailId].html.trim().length > 0) {
                    emptyLanguage = false;
                }
            }
            thisLanguage.empty = emptyLanguage;
        }
        return languagesClone;
    };
    // set/update languages[x].emails.header.tags,
    //    languages[x].emails.footer.tags,
    //    languages[x].emails.templates[x].tags
    AppData.prototype.checkTemplatesTags = function (languagesObj) {
        var languagesClone = languagesObj;
        for (var langId in languagesClone) {
            var thisLanguage = languagesClone[langId];
            // set header 'tags' property
            thisLanguage.emails.header.tags = {
                empty: thisLanguage.emails.header.html.trim().length === 0
            };
            // set footer 'tags' property
            thisLanguage.emails.footer.tags = {
                empty: thisLanguage.emails.footer.html.trim().length === 0
            };
            for (var emailId in thisLanguage.emails.templates) {
                // set template 'tags' property
                thisLanguage.emails.templates[emailId].tags = {
                    empty: thisLanguage.emails.templates[emailId].html.trim().length === 0,
                    noSubject: thisLanguage.emails.templates[emailId].subject.trim().length === 0,
                    customHeader: typeof thisLanguage.emails.templates[emailId].header === 'undefined' ? false : true,
                    customFooter: typeof thisLanguage.emails.templates[emailId].footer === 'undefined' ? false : true
                };
                // set custom header 'tags' property
                if (typeof thisLanguage.emails.templates[emailId].header !== 'undefined') {
                    thisLanguage.emails.templates[emailId].header.tags = {
                        empty: thisLanguage.emails.templates[emailId].header.html.trim().length === 0
                    };
                }
                // set custom footer 'tags' property
                if (typeof thisLanguage.emails.templates[emailId].footer !== 'undefined') {
                    thisLanguage.emails.templates[emailId].footer.tags = {
                        empty: thisLanguage.emails.templates[emailId].footer.html.trim().length === 0
                    };
                }
            }
        }
        return languagesClone;
    };
    // get language struct by key 'es'
    AppData.prototype.getLanguage = function (key) {
        var languagesClone = this.languages;
        var findedLang = {};
        var _langId;
        for (var langId in this.languages) {
            var thisLanguage = languagesClone[langId];
            if (thisLanguage.key === key) {
                findedLang = thisLanguage;
                _langId = langId;
            }
        }
        findedLang.id = _langId;
        return findedLang;
    };
    // get language id by key 'es'
    AppData.prototype.getLangIdByKey = function (key) {
        var languagesClone = this.languages;
        var findedLangId;
        for (var langId in this.languages) {
            var thisLanguage = languagesClone[langId];
            if (thisLanguage.key === key) {
                findedLangId = langId;
            }
        }
        return findedLangId;
    };
    // get email data by lang key 'es' and email id 1
    AppData.prototype.getEmailData = function (langKey, emailId) {
        var langData = this.getLanguage(langKey);
        var emailData;
        for (var templateId in langData.emails.templates) {
            var thisTemplate = langData.emails.templates[templateId];
            if (parseInt(templateId) === parseInt(emailId)) {
                emailData = thisTemplate;
            }
        }
        return emailData;
    };
    // set string value 'html' or 'subject'
    AppData.prototype.setStringVal = function (langKey, path, code) {
        var evalPath = 'this.languages';
        for (var langId in this.languages) {
            if (this.languages[langId].key === langKey) {
                evalPath += '[' + langId + ']';
            }
        }
        path.split('.').forEach(function (valueKey) {
            evalPath += '.' + valueKey;
        });
        var toEval = evalPath + '=`' + code + '`;';
        eval(toEval);
        this.languages = this.checkAll();
    };
    // trim all html contents first empty '\n'
    AppData.prototype.trimHtml = function (languagesObj) {
        var languagesClone = languagesObj;
        for (var langId in languagesClone) {
            var thisLanguage = languagesClone[langId];
            thisLanguage.emails.header.html = thisLanguage.emails.header.html.replace(/^\n{1}/i, '');
            thisLanguage.emails.footer.html = thisLanguage.emails.footer.html.replace(/^\n{1}/i, '');
            for (var emailId in thisLanguage.emails.templates) {
                thisLanguage.emails.templates[emailId].html = thisLanguage.emails.templates[emailId].html.replace(/^\n{1}/i, '');
                if (typeof thisLanguage.emails.templates[emailId].header !== 'undefined') {
                    thisLanguage.emails.templates[emailId].header.html = thisLanguage.emails.templates[emailId].header.html.replace(/^\n{1}/i, '');
                }
                if (typeof thisLanguage.emails.templates[emailId].footer !== 'undefined') {
                    thisLanguage.emails.templates[emailId].footer.html = thisLanguage.emails.templates[emailId].footer.html.replace(/^\n{1}/i, '');
                }
            }
        }
        return languagesClone;
    };
    // execute download zip by language key
    AppData.prototype.generateLanguageZip = function (langKey) {
        var data = this.getLanguage(langKey);
        var emailsArray = [];
        for (var templateId in data.emails.templates) {
            var template = data.emails.templates[templateId];
            var thisHeader = data.emails.header.html;
            if (template.tags.customHeader) {
                if (!template.header.tags.empty) {
                    thisHeader = template.header.html;
                }
            }
            var thisBody = template.html;
            var thisFooter = data.emails.footer.html;
            if (template.tags.customFooter) {
                if (!template.footer.tags.empty) {
                    thisFooter = template.footer.html;
                }
            }
            emailsArray.push({
                fileName: template.name + ' [id ' + templateId + '] [' + data.key + '].html',
                content: thisHeader + thisBody + thisFooter
            });
        }
        var zip = this.jszip.setZip(emailsArray);
        this.jszip.saveAsZip(zip, 'emilio-generator [id ' + data.id + '] [' + data.key + '].zip');
    };
    // execute download html by language key and email id
    AppData.prototype.generateEmailHtml = function (langKey, emailId) {
        var data = this.getLanguage(langKey);
        for (var templateId in data.emails.templates) {
            if (parseInt(templateId) === parseInt(emailId)) {
                var template = data.emails.templates[templateId];
                var thisHeader = data.emails.header.html;
                if (template.tags.customHeader) {
                    if (!template.header.tags.empty) {
                        thisHeader = template.header.html;
                    }
                }
                var thisBody = template.html;
                var thisFooter = data.emails.footer.html;
                if (template.tags.customFooter) {
                    if (!template.footer.tags.empty) {
                        thisFooter = template.footer.html;
                    }
                }
                var fileName = template.name + ' [id ' + templateId + '] [' + data.key + '].html';
                var content = thisHeader + thisBody + thisFooter;
                this.jszip.saveAsHtml(content, fileName, 'text/html;charset=utf-8');
                return true;
            }
        }
        return false;
    };
    // set sanitized src for iframe with email preview
    AppData.prototype.setPreviewIframeContent = function (langKey) {
        this.previewSrc = '';
        this.previewData.refresh++;
        var langId = this.getLanguage(langKey).id;
        var header = this.languages[langId].emails.header.html;
        if (this.languages[langId].emails.templates[this.previewData.id].tags.customHeader) {
            header = this.languages[langId].emails.templates[this.previewData.id].header.html;
        }
        var body = this.languages[langId].emails.templates[this.previewData.id].html;
        var footer = this.languages[langId].emails.footer.html;
        if (this.languages[langId].emails.templates[this.previewData.id].tags.customFooter) {
            footer = this.languages[langId].emails.templates[this.previewData.id].footer.html;
        }
        var html = header + body + footer;
        html = this.previewReplaces(html);
        var iframeSrc = 'data:text/html;charset=utf-8,' +
            encodeURI('<html><head><body class="refresh-' + this.previewData.refresh + '">' + this.previewData.style) +
            encodeURI(html) +
            encodeURI('</body></html>');
        // fix chrome set '#'
        iframeSrc = iframeSrc.replace(new RegExp('#', 'g'), '%23');
        this.previewSrc = this.sanitizer.bypassSecurityTrustResourceUrl(iframeSrc);
    };
    AppData.prototype.previewReplaces = function (html) {
        // prevent click empty links
        html = html.replace(new RegExp('href=(["\'])(.*?)\\1', 'g'), 'href="javascript:void(0)"');
        html = html.replace(new RegExp('[%]{1,2}imagesURL[%]{1,2}logoEmail.(jpg|png|gif|jpeg)', 'g'), this.previewData.options.logo);
        html = html.replace(new RegExp('%%BannerImage%%', 'g'), this.previewData.options.social);
        return html;
    };
    // get sanitized src for iframe with email preview
    AppData.prototype.getPreviewIframeContent = function () {
        return this.previewSrc;
    };
    AppData.prototype.delCustomHeader = function (langKey, emailId) {
        var data = this.getEmailData(langKey, emailId);
        delete data.header;
        this.checkAll();
        this.previewData.id = emailId;
        this.setPreviewIframeContent(langKey);
    };
    AppData.prototype.setCustomHeader = function (langKey, emailId) {
        var langData = this.getLanguage(langKey);
        var emailData = this.getEmailData(langKey, emailId);
        emailData.header = {
            html: langData.emails.header.html
        };
        this.checkAll();
        this.previewData.id = emailId;
        this.setPreviewIframeContent(langKey);
    };
    AppData.prototype.delCustomFooter = function (langKey, emailId) {
        var data = this.getEmailData(langKey, emailId);
        delete data.footer;
        this.checkAll();
        this.previewData.id = emailId;
        this.setPreviewIframeContent(langKey);
    };
    AppData.prototype.setCustomFooter = function (langKey, emailId) {
        var langData = this.getLanguage(langKey);
        var emailData = this.getEmailData(langKey, emailId);
        emailData.footer = {
            html: langData.emails.footer.html
        };
        this.checkAll();
        this.previewData.id = emailId;
        this.setPreviewIframeContent(langKey);
    };
    AppData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lib_services_jszip_service__WEBPACK_IMPORTED_MODULE_4__["JszipService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], AppData);
    return AppData;
}());



/***/ }),

/***/ "./src/app/data/app-language-ar.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ar.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_AR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_AR", function() { return LANGUAGE_AR; });
// v3 file template
var LANGUAGE_AR = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-bg.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-bg.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_BG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_BG", function() { return LANGUAGE_BG; });
// v3 file template
var LANGUAGE_BG = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-ca.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ca.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_CA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_CA", function() { return LANGUAGE_CA; });
// v3 file template
var LANGUAGE_CA = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  Per m\u00E9s informaci\u00F3, llegeixi la nostra %%privacy%% i %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Gràcies per donar-se d\'alta a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Benvinguts a %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">Hola  %firstName% %lastName%, <br><br>\n    Ens complau confirmar-li la creaci\u00F3 del seu compte de client a %%ecommerceURL%%.<br><br>\n    Gr\u00E0cies al seu compte de client podr\u00E0 actualitzar el seu perfil i contrasenya, consultar el seu historial de comandes i altra informaci\u00F3 del seu inter\u00E8s.<br><br>Esperem veure'l aviat a <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  Per m\u00E9s informaci\u00F3, llegeixi la nostra %%privacy%% i %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Donar-se de baixa</a> <span style=\"color:#333;font-size:10px;\">de la subscripci\u00F3 de Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Baixa a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmaci\u00F3 de compte eliminat</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>D'acord a la sol\u00B7licitud durant la teva recent visita a %%ecommerceName%%, confirmem que el teu compte d'usuari %%email%% ha sigut eliminat de la nostra base de dades.<br><br>Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Recordar contrasenya de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recordar contrasenya</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%,<br><br>\n    D'acord a la sol\u00B7licitud durant la teva recent visita a %%ecommerceName%%, aqu\u00ED tens la teva direcci\u00F3 d'acc\u00E9s a la zona de recuperaci\u00F3 de contrasenya:<br><br>\n    <a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Fes clic aqu\u00ED per recuperar la teva contrasenya</a><br><br>\n    Aquest enlla\u00E7 nom\u00E9s ser\u00E0 v\u00E0lid durant les 24 hores seg\u00FCents al moment del seu enviament.<br><br>\n    Esperem veure't aviat a <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Canvi de contrasenya de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Canvi de contrasenya</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %%firstName%% %%lastName%%,<br><br>\n    Et confirmem que la teva contrasenya ha sigut modificada.<br><br>\n    Assegura't d'anotar les teves credencials en un lloc segur per futures refer\u00E8ncies.<br><br>\n    Esperem veure't aviat a <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Subscripció a la newsletter a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Subscripci\u00F3 a la newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">Hola<br><br>\n    Gr\u00E0cies per subscriure't al nostre butllet\u00ED de not\u00EDcies. Aviat rebr\u00E0s informaci\u00F3 sobre activitats, not\u00EDcies sobre la nostra empresa i novetats en productes i promocions.<br><br>\n    Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a></span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  Per m\u00E9s informaci\u00F3, llegeixi la nostra %%privacy%% i %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Donar-se de baixa</a> <span style=\"color:#333;font-size:10px;\">de la subscripci\u00F3 de Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% et recomana els seus productes preferits de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomanaci\u00F3 de wishlist</strong><br><br>\n    <span style=\"font-size:15px;\">El teu amic/ga %%anonymousName%% (%%anonymousEmail%%) t'envia aquest producte que pot resultar del teu inter\u00E8s.<br><br>\n    Si necessites m\u00E9s informaci\u00F3 sobre aquest producte pots contactar amb nosaltres a <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n    Atentament, l'equip de  %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productes recomanats</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producte</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preu</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Missatge del teu amic/ga:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% et recomana un producte de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomanaci\u00F3 de producte</strong><br><br>\n    <span style=\"font-size:15px;\"> el teu amic/ga %%anonymousName%% (%%anonymousEmail%%) t'env\u00EDa aquest producte que pot resultar del teu inter\u00E8s.<br><br>\n    Si necessites m\u00E9s informaci\u00F3 sobre aquest producte pots contactar amb nosaltres a<a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n    Atentament, l'equip de  %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productes recomanats</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producte</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preu</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Missatge del teu amic/ga:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Formulari de contacte de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Formulari de contacte</strong><br><br>\n    <span style=\"font-size:15px;\">Nom: %%anonymousFirstName%%<br>Email: %%anonymousEmail%%<br>Tel\u00E8fon: %%anonymousPhone%%<br>Motiu de consulta:  %%queryMotive%%<br>Missatge: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Consulta sobre producte de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Consulta sobre producte</strong><br><br>\n    <span style=\"font-size:15px;\">Nom: %%anonymousFirstName%%<br>Cognoms: %%anonymousLastName%%<br>Email: %%anonymousEmail%%<br>Tel\u00E8fon: %%anonymousPhone%%<br>Missatge: %%comments%%<br><br>Nom del producte: %%name%%<br>Refer\u00E8ncia del producte: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Confirmació de comanda - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmaci\u00F3 de comanda</strong><br><br>\n    <span style=\"font-size:15px;\">Moltes gr\u00E0cies per confiar en nosaltres. La seva compra ha sigut processada correctament. A continuaci\u00F3 et mostrem les dades de la comanda.</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  N\u00FAm. de la comanda:<br>\n                  Data de la comanda:<br>\n                  Estat:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confirmat</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Direcci\u00F3 de facturaci\u00F3:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Direcci\u00F3 d'enviament:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalls de la comanda</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producte</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantitat</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preu</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Descomptes</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Impostos</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Vals</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Total</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Comentaris:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Baixa de la newsletter de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Confirmaci\u00F3 de la baixa de la newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">Hola<br><br>Has sigut dona't de baixa amb \u00E8xit de la nostra newsletter.<br><br>Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'El teu amic et vol apadrinar',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Sol\u00B7licitud d'apadrinament</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>%%firstName%% t'invita a unir-te a  <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    Fes-te soci i registra't aqu\u00ED: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    Gr\u00E0cies pel teu suport<br><br>Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'El teu apadrinament ha realitzat una compra: disfruta del teu descompte.',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Apadrinament completat</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola,<br><br>\n      Un dels teus amics acaba de fer una compra a la nostra botiga de m\u00E9s de XX (\u20AC) de valor, per tant, t'oferim un descompte de XX en la pr\u00F2xima comanda.<br><br>\n      El descompte entrar\u00E1 autom\u00E1ticament en vigor en la teva prxima comanda. <br><br>\n      Gr\u00E0cies pel teu suport.<br><br>Atentament, l'equip de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Petició de devolució %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informaci\u00F3 de la petici\u00F3 de devoluci\u00F3</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%, <br><br>Ens complau confirmar-te la petici\u00F3 de la teva devoluci\u00F3.<br><br>N\u00FAmero de comanda: %%orderNumber%%<br><br>Atentament, l'equip %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Comanda no completada de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informaci\u00F3 d la comanda no completada</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%, <br><br>A la teva ultima visita a la nostra botiga, vas afegir els seg\u00FCents productes a la cistella de la compra, per\u00F2 no has completat la comanda.<br><br>\n      Fes clic <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">aqu\u00ED</a> si desitges recuperar la teva comanda. <br><br>Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalls de la comanda no completada</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producte</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantitat</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preu</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Notificació transportista',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Verificació de correu - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Verificaci\u00F3 de correu</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%,<br><br>\n    Gr\u00E0cies per registrar-te a %%ecommerceURL%%. Per favor activa el teu compte fent clic <a href=\"%verifyLink%\"  style=\"color:#000;\">aqu\u00ED</a>.<br><br>\n    Esperem veure't aviat a <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Activació del compte- %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Activaci\u00F3 del compte</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%,<br><br>\n    Et notifiquem que el teu compte a %%ecommerceURL%% ha sigut activat correctament.<br><br>\n    Per veure les teves dades i tota la informaci\u00F3 referent al teu compte accedeix a trav\u00E9s del panell de control: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Editar el teu perfil</a><br><br>\n    Esperem veure't aviat a <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Stock disponible',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Stock disponible del producte <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>L'article que tant vol\u00EDes ja est\u00E0 disponible!</span>\n    <span style=\"font-size:15px;\">\n      Volem recordar-te que aquest email aporta informaci\u00F3 orientativa sobre la disponibilitat d'aquest art\u00EDcle i depen de molts factors (persones interesades, unitats disponibles).<br>\n      Hem enviat aquest email a tots els clients interessats en l'art\u00EDcle, per tant es posible que s'esgoti molt aviat.<br><br>\n      Atentament, l'equip de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Nou article del blog de %ecommerceName%!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    A continuaci\u00F3 pots llegir els \u00FAltims articles publicats a <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Segueix llegint!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Nou comentari a %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Alg\u00FA acaba de respondre l'article \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n                  %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Segueix llegint!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Benvingut a %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Benvingut a <a href=\"%%blogUrl%%\"  style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>\n    Gracies per subscriure't al nostre blog. Aviat rebr\u00E1s els nous articles per email, informaci\u00F3 sobre descomptes, promocions, regals y dades d'inter\u00E9s relacionats a l'activitat de la botiga online.<br><br>\n    Esperem veure't aviat a <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n    Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Subscripció de stock',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Subscripci\u00F3 de stock del producte <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>T'has subscrit als avisos de stock de %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">En cas de que tornem a rebre aquest art\u00EDcle t'avisarem d'inmediat per a que no se t'escapi.<br><br>Atentament, l'equip de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-chi.ts":
/*!******************************************!*\
  !*** ./src/app/data/app-language-chi.ts ***!
  \******************************************/
/*! exports provided: LANGUAGE_CHI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_CHI", function() { return LANGUAGE_CHI; });
// v3 file template
var LANGUAGE_CHI = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u5982\u9700\u8981\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1%%privacy%% and %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '欢迎您登陆 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6B22\u8FCE\u60A8\u767B\u9646 %%ecommerceName%%</strong><br><br>\n      <span style=\"font-size:15px;\">\u60A8\u597D %firstName% %lastName%, <br><br>\u60A8\u7684\u987E\u5BA2\u8D26\u53F7\u5DF2\u6210\u529F\u521B\u5EFA\u3002<br><br>\u8C22\u8C22\u60A8\u4F7F\u7528\u6211\u4EEC\u7684\u987E\u5BA2\u8D26\u6237\uFF0C\u73B0\u5728\u60A8\u53EF\u4EE5\u5B8C\u5584\u60A8\u7684\u4E2A\u4EBA\u4E3B\u9875, \u5BC6\u7801\uFF0C\u5E76\u67E5\u770B\u60A8\u7684\u8BA2\u5355\u4FE1\u606F\u548C\u5176\u4ED6\u60A8\u611F\u5174\u8DA3\u7684\u8BE6\u60C5\u3002<br><br>\n      \u6211\u4EEC\u671F\u5F85\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u5982\u9700\u8981\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1%%privacy%% and %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">\u53D6\u6D88\u8BA2\u9605\u7B80\u62A5</a>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: '注销账户',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u786E\u8BA4\u5220\u9664\u8D26\u6237</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br>\u60A8\u5728\u8BBF\u95EE\u6211\u4EEC\u7684\u9875\u9762\u65F6\u63D0\u51FA\u7684\u6CE8\u9500\u8D26\u6237\u7533\u8BF7\u5DF2\u786E\u8BA4\uFF0C\u60A8\u4ECE\u6211\u4EEC\u7684\u6570\u636E\u5E93\u4E2D\u5220\u9664\u8D26\u6237\u90AE\u7BB1\u6210\u529F\u3002<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '恢复密码 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6062\u590D\u5BC6\u7801</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u5728\u6D4F\u89C8\u9875\u9762 %%ecommerceName%% \u7684\u65F6\u5019\u8FD9\u662F\u60A8\u8FDB\u5165\u9875\u9762\u7684\u5BC6\u7801\u6062\u590D\u90AE\u4EF6<br><br><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">\u70B9\u51FB\u6B64\u5904</a><br><br>\n    \u8BF7\u8BB0\u4F4F\u8BE5\u7F51\u5740\uFF0C\u8BE5\u9A8C\u8BC1\u7F51\u5740\u5C06\u4F1A\u5728\u90AE\u4EF6\u53D1\u9001\u8D7724\u5C0F\u65F6\u5185\u6709\u6548<br><br>\u6211\u4EEC\u671F\u5F85\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a> \u89C1\u5230\u60A8<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '修改密码 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u4FEE\u6539\u5BC6\u7801</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D %%firstName%% %%lastName%%,<br><br>\u6B64\u5C01\u90AE\u4EF6\u901A\u77E5\u60A8\u7684\u8D26\u6237\u5BC6\u7801\u5DF2\u4FEE\u6539\u6210\u529F<br><br>\u786E\u8BA4\u6B64\u90AE\u4EF6\u4E3A\u5B89\u5168\u90AE\u4EF6\u4EE5\u4FDD\u62A4\u60A8\u7684\u8D26\u6237<br><br>\u6211\u4EEC\u671F\u5F85\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: '%%ecommerceName%% 资讯',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u8BA2\u9605\u8D44\u8BAF</strong><br><br>\n    <span style=\"font-size: 15px;\">\n      \u60A8\u597D</span><br><br><span style=\"font-size: 15px;\">\u8C22\u8C22\u60A8\u8BA2\u9605\u6211\u4EEC\u7684\u8D44\u8BAF\uFF0C\u6211\u4EEC\u4F1A\u4E3A\u60A8\u53D1\u9001\u6211\u4EEC\u7684\u516C\u53F8\u76F8\u5173\u7684\u6700\u65B0\u52A8\u6001\uFF0C\u6D3B\u52A8\uFF0C\u70ED\u95E8\u4EA7\u54C1\u548C\u4FC3\u9500\u4FE1\u606F\u3002</span><br><br><span style=\"font-size: 15px;\">\u6211\u4EEC\u671F\u5F85\u80FD\u5728 </span><a href=\"%%ecommerceURL%%\" style=\"font-size: 15px; color: rgb(0, 0, 0);\">%%ecommerceName%%</a><span style=\"font-size: 15px;\"> \u89C1\u5230\u60A8\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u5982\u9700\u8981\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u89C1%%privacy%% and %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">\u53D6\u6D88\u8BA2\u9605\u7B80\u62A5</a>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%%  收藏了喜欢的产品',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\u6536\u85CF\u63A8\u8350</strong><br><br>\n  <span style=\"font-size:15px;\">\u60A8\u7684\u597D\u53CB\u53D1\u9001\u4E86\u60A8\u53EF\u80FD\u611F\u5174\u8DA3\u7684\u4EA7\u54C1\u7ED9\u60A8\u3002<br><br>\u60A8\u82E5\u662F\u60F3\u4E86\u89E3\u66F4\u591A\u4EA7\u54C1\u54A8\u8BE2\u53EF\u4EE5\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a> \u8054\u7CFB\u6211\u4EEC<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n\u4EA7\u54C1\u6B3E\u5F0F </span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u6B3E\u5F0F </td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                      </tr>\n                  </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n             </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>\u6765\u81EA\u597D\u53CB\u7684\u6D88\u606F  \u8BC4\u8BBA</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n            </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '产品推荐',
            html: "\n\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\u6635\u79F0 \u7ED9\u60A8\u63A8\u8350\u4EA7\u54C1</strong><br><br>\n  <span style=\"font-size:15px;\"> Hello %%friendName%%,<br>\u60A8\u7684\u670B\u53CB %%anonymousName%% (%%anonymousEmail%%) \u8BA4\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u662F\u4F60\u559C\u6B22\u7684\u7C7B\u522B <br><br>\u82E5\u4F60\u9700\u8981\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u60A8\u53EF\u4EE5\u8054\u7CFB\u6211\u4EEC\u3002 <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n\u4EA7\u54C1\u6B3E\u5F0F</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u6B3E\u5F0F</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                      </tr>\n                  </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n\n\n                </tbody>\n              </table>\n\n             </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>\u6765\u81EA\u597D\u53CB\u7684\u63A8\u8350:</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n            </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: '来自 %%ecommerceName%% 的联系',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\u8054\u7CFB\u65B9\u5F0F</strong><br><br>\n  <span style=\"font-size:15px;\">\u540D\u5B57: %%anonymousFirstName%%<br>\u59D3\u6C0F: %%anonymousLastName%%<br>\u90AE\u7BB1: %%anonymousEmail%%<br>\u624B\u673A: %%anonymousPhone%%<br>\u67E5\u8BE2\u4FE1\u606F:  %%queryMotive%%<br>\u6D88\u606F\u5185\u5BB9: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: '产品的相关问题',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u95EE\u9898\u5173\u4E8E </strong><br><br>\n    <span style=\"font-size:15px;\">\u540D\u5B57: %%anonymousFirstName%%<br>\u59D3\u6C0F: %%anonymousLastName%%<br>\u90AE\u7BB1: %%anonymousEmail%%<br>\u7535\u8BDD: %%anonymousPhone%%<br>\u6D88\u606F\u5185\u5BB9: %%comments%%<br><br>\u4EA7\u54C1\u540D\u79F0: %%name%%<br>\u4EA7\u54C1\u8D27\u53F7: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '确认订单',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u786E\u8BA4\u8BA2\u5355</strong><br><br>\n    <span style=\"font-size:15px;\">\u4EB2\u7231\u7684 %%firstName%% %%lastname%%,<br>\n\n      \u60A8\u7684\u8BA2\u5355\u5DF2\u786E\u8BA4\u5E76\u6B63\u786E\u5904\u7406\u6210\u529F\u3002<br>\n      \u5DF2\u5C06\u8BA2\u5355\u4FE1\u606F\u4EE5pdf\u7684\u683C\u5F0F\u53D1\u9001\u7ED9\u60A8\u3002 <br>\n    \u6CE8\u610F\u67E5\u6536\u5E76\u67E5\u770B\u60A8\u7684\u8BA2\u5355\u8BE6\u60C5\u3002</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  \u8BA2\u5355\u7F16\u53F7:<br>\n                  \u8BA2\u5355\u65E5\u671F:<br>\n                  \u8BA2\u5355\u72B6\u6001:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>\u5DF2\u786E\u8BA4</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>\u652F\u4ED8\u8D26\u53F7:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>\u90AE\u5BC4\u5730\u5740:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u8BA2\u5355\u8BE6\u60C5</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u540D \uFF08\u6B3E\u5F0F\uFF09 </td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u6570\u91CF</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u6298\u6263</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u5C0F\u8BA1</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u7A0E\u6536</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u4F18\u60E0\u5238</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u603B\u8BA1</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\u8BA2\u5355\u8BC4\u8BBA</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: '退订资讯',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>\u8D44\u8BAF\u9000\u8BA2</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br>\u60A8\u5DF2\u7ECF\u6210\u529F\u9000\u8BA2\u6211\u4EEC\u7684\u8D44\u8BAF\u3002<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: '您的好友要赞助你',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>\u8D5E\u52A9\u8981\u6C42 </strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br> %%firstName%% \u540D\u5B57 \u9080\u8BF7\u60A8\u52A0\u5165 <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\u6210\u4E3A\u5176\u4E2D\u4E00\u5458\u8BF7\u5728\u6B64\u6CE8\u518C: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\u8C22\u8C22\u60A8\u7684\u652F\u6301<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '完成募集',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u60A8\u7684\u52DF\u96C6\u5DF2\u7ECF\u5B8C\u6210\u4E00\u4E2A\u8BA2\u5355\uFF0C\u4EAB\u53D7\u6536\u76CA\u5427\uFF01</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D,<br><br>\u60A8\u7684\u597D\u53CB\u5DF2\u5B8C\u6210\u4E86\u4E00\u4E2A\u8BA2\u5355\uFF0C\u60A8\u53EF\u4EE5\u5728\u4E0B\u4E00\u6B21\u7684\u8BA2\u5355\u4E2D\u4EAB\u53D7     \u6298\u6263\u3002<br><br>\u6298\u6263\u5C06\u4F1A\u81EA\u52A8\u4F7F\u7528\u5728\u60A8\u4E0B\u6B21\u7684\u8BA2\u5355\u3002<br><br>\u8C22\u8C22\u60A8\u7684\u652F\u6301\u3002<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Inquiry from %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u60A8\u7684\u8CFC\u7269\u8ECA\u932F\u904E\u4E86\u60A8</strong><br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D %firstName% %lastName%, <br><br>\u5728\u60A8\u6700\u540E\u4E00\u6B21\u6D4F\u89C8\u6211\u4EEC\u7F51\u9875\u540E\u5C06\u4EE5\u4E0B\u5546\u54C1\u653E\u5165\u8D2D\u7269\u8F66\uFF0C\u4F46\u662F\u60A8\u6CA1\u6709\u5B8C\u6210\u8BA2\u5355\u586B\u5199\u3002\u8BF7\u70B9\u51FB\u8FD9\u91CC\uFF1A <br><br>\n    <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">\u8D2D\u7269\u8F66</a> \u8FD4\u56DE\u60A8\u7684\u8D2D\u7269\u8F66.<br><br>%%ecommerceName%% \u56E2\u961F</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u8D2D\u7269\u8F66:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u540D \uFF08\u6B3E\u5F0F\uFF09</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u6570\u91CF</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Email verification - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Email verification</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %firstName% %lastName%,<br><br>\n      Thanks for registring on %%ecommerceURL%%. Please, follow the link in order to verify your e-mail account: <a href=\"%verifyLink%\"  style=\"color:#000;\">Click here</a>.<br><br>\n      We are looking forward to seeing you on <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Account activated - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Account activated</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %firstName% %lastName%,<br><br>\n      We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully activated.<br><br>\n      You can view and modify all your details at any time by accessing this control panel: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Edit your profile</a><br><br>\n      We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-de.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-de.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_DE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_DE", function() { return LANGUAGE_DE; });
// v3 file template
var LANGUAGE_DE = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n<tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                F\u00FCr mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Vielen Dank für Ihre Anmeldung bei %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Willkommen bei %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%, <br><br>\n      Wir freuen uns, Ihnen die Erstellung Ihres Kundenkontos best\u00E4tigen zu k\u00F6nnen%%ecommerceURL%%.<br><br>\n      Dank Ihres Kundenkonto Sie Ihr Profil und Ihr Passwort aktualisieren, Ihren Bestellverlauf \u00FCberpr\u00FCfen und andere interessante Informationen erhalten.<br><br>\n      Wir hoffen Sie bald begr\u00FC\u00DFen zu d\u00FCrfen, bei <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      Mit freundlichen Gr\u00FC\u00DFen, das Team von %%ecommerceName%%</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                F\u00FCr mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Abmeldung vom</span></a>\n      <span style=\"color:#000;font-size:10px;\">Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Niedriger Benutzer in %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Best\u00E4tigung L\u00F6schung Kundenkonto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo,<br><br>\n      Wie bei Ihrem letzten Besuch bei %%ecommerceName%% angefordert, best\u00E4tigen wir ihnen das Ihr Benutzerkonto %%email%% aus unserer Datenbank entfernt worden ist.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Passwort von %%ecommerceName%% merken',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Passwort erinnern</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%,<br><br>\n      Wie bei Ihren letzten Besuch bei %%ecommerceName%%, , angefordert, haben Sie hier Ihre Zugangsadresse zur Passwort-Wiederherstellungszone:<br><br>\n      <a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Klicken Sie um das Passwort wiederherzustellen</a><br><br>\n      Dieser Link ist nur w\u00E4hrend der n\u00E4chsten 24 Stunden mehr g\u00FCltig.<br><br>\n      Wir hoffen ie bald wieder zu sehen, bei <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Herzlichst, das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Passwortänderung für %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Passwort \u00E4ndern</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %%firstName%% %%lastName%%,<br><br>\n      Wir best\u00E4tigen Ihnen, dass Ihr Passwort ge\u00E4ndert wurde.<br><br>\n      Bewahren Sie Ihre Zugangsdaten an einem sicheren Ort auf .<br><br>\n      Wir hoffen Sie bald begr\u00FC\u00DFen zu d\u00FCrfen, bei <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Abonnieren Sie den Newsletter in %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Newsletter-Abonnement</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo<br><br>\n      Danke f\u00FCr das Abonnement unseres Newsletters. Bald werden Sie Infos \u00FCber Aktivit\u00E4ten, Nachrichten \u00FCber unser Unternehmen, Neuigkeiten \u00FCber Produkte und Angebote erhalten.<br><br>\n      Wir hoffen, Sie bald zu sehen, bei <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n<tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                F\u00FCr mehr Informationen, lesen Sie die %%privacy%% und %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Abmeldung vom</span></a>\n      <span style=\"color:#000;font-size:10px;\">Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% empfiehlt Ihre Lieblingsprodukte von %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Empfehlung f\u00FCr die Wunschliste</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das f\u00FCr Sie von Interesse sein k\u00F6nnte.<br><br>\n      Sollten Sie weitere Informationen zu diesem Produkt ben\u00F6tigen, k\u00F6nnen Sie uns kontaktieren, und zwar unter <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      Mit freundlichen Gr\u00FCssen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Empfohlene Produkte\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preis</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Nachricht Ihres/Ihrer Freund/in:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% empfiehlt ein %%ecommerceName%%-Produkt',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Produktempfehlung</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ihr/e Freund/in %%anonymousName%% (%%anonymousEmail%%) schickt Ihnen dieses Produkt das von Ihrem Interesse sein k\u00F6nnte.<br><br>\n      F\u00FCr weitere Informationen kontaktieren Sie uns bitte unter <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      Herzlichst, das Team von %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Empfohlene Produkte\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preis</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Nachricht von Ihrem Freund:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: '%%ecommerceName%%-Kontaktformular',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Kontaktformular</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Name: %%anonymousFirstName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefon: %%anonymousPhone%%<br>\n      Grund deer Anfrage: %%queryMotive%%<br>\n      Nachricht: %%comments%%\n    </span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Beratung zu %%ecommerceName%%-Produkten',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Produktanfrage</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Name: %%anonymousFirstName%%<br>\n      Familienname: %%anonymousLastName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefon: %%anonymousPhone%%<br>\n      Nachricht: %%comments%%<br><br>\n      Produktname: %%name%%<br>\n      Produktreferenz: %%sku%%\n    </span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Bestellbestätigung - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Bestellbest\u00E4tigung</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Vielen Dank f\u00FCr Ihr Vertrauen. Ihre Bestellung wurde korrekt bearbeitet. Nachfolgend sehen Sie die Bestelldaten\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  Bestellnummer:<br>\n                  Bestelldatum:<br>\n                  Zustand:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Best\u00E4tigt</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Rechnungsadresse:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Lieferadresse:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Bestelldetails\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Betrag</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preis</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\n                    Rabatte\n                  </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    Zwischensumme\n                  </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\n                    Steuern\n                  </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\n                    Gutscheine\n                  </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    Gesamt\n                  </td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Kommentare:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Laden Sie den %%ecommerceName%%-Newsletter herunter',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Best\u00E4tigung der Newsletter-Abmeldung</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo<br><br>\n      Sie wurden erfolgreich vom Newsletter abgemeldet.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Ihr Freund möchte Sie sponsern',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Bewerbung f\u00FCr Sponsoring</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo,<br><br>\n      %%firstName%% l\u00E4dt Sie ein, sich<a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a> anzuschlie\u00DFen<br><br>\n      Werden Sie Mitglied und registrieren Sie sich hier:\n      <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n      Danke f\u00FCr Ihre Unterst\u00FCtzung.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Ihr Sponsor hat einen Einkauf getätigt: Genießen Sie Ihren Rabatt.',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Sponsoring abgeschlossen</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo,<br><br>\n     Einer Ihrer Freunde hat gerade einen Einkauf in unserem Shop im Wert von XX (\u20AC) get\u00E4tigt, deshalb bieten wir Ihnen einen Rabatt von XX auf Ihre n\u00E4chste Bestellung an.<br><br>\n      Der Rabatt gilt automatisch bei Ihrer n\u00E4chsten Bestellung.<br><br>\n      Danke f\u00FCr Ihre Unterst\u00FCtzung.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Rückgabeanforderung - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>R\u00FCcksendeinformationen</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%, <br><br>\n      Wir best\u00E4tigen Ihnen gerne Ihr R\u00FCckgabeansuchen.<br><br>\n      Bestellnummer: %%orderNumber%%<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Unvollständige Bestellung von %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Unvollst\u00E4ndige Bestellinformationen</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%, <br><br>\n      Bei Ihrem letzten Besuch in unserem Shop haben Sie die folgenden Produkte in den Warenkorb gelegt, aber die Bestellung nicht abgeschlossen.<br><br>\n      Klicken Sie auf <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">hier</a> wenn Sie Ihre Bestellung wieder aufrufen m\u00F6chten.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen, das Team %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Details der unvollst\u00E4ndigen Bestellung\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Menge</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Preis</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Trägerbenachrichtigung',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Überprüfung der Post - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00DCberpr\u00FCfung der Email Adresse</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%,<br><br>\n      Danke f\u00FCr Ihre Anmeldung bei %%ecommerceURL%%. Bitte aktivieren Sie Ihr Konto und klicken Sie <a href=\"%verifyLink%\" style=\"color:#000;\">hier-</a>.<br><br>\n      Wir hoffen, Sie bald zu begr\u00FC\u00DFen bei <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Kontoaktivierung - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Kontoaktivierung</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo %firstName% %lastName%,<br><br>\n      Wir benachrichtigen Sie, dass Ihr Konto in %%ecommerceURL%% korrekt aktiviert wurde.<br><br>\n      Um Ihre Daten und alle Informationen \u00FCber Ihr Konto anzuzeigen, gehen Sie auf das Kontrollfeld: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Bearbeiten Sie Ihr Profil</a><br><br>\n      Wir hoffen Sie bald zu sehen bei <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen, das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Lager verfügbar',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Lagerbestand des Produkts <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Hallo,<br><br>Der Artikel, den so sehr wollen, ist bereits verf\u00FCgbar!</span>\n    <span style=\"font-size:15px;\">\n      Wir m\u00F6chten Sie daran erinnern, dass diese E-Mail Informationen \u00FCber die Verf\u00FCgbarkeit dieses Artikels enth\u00E4lt und von vielen Faktoren (Interessenten, verf\u00FCgbare Einheiten) abh\u00E4ngt.\n      Wir haben diese E-Mail an alle Kunden geschickt, die sich f\u00FCr diesen Artikel interessieren, so dass es m\u00F6glich ist, dass er sehr bald wieder vergriffen ist.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen, das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Neuer Artikel im %ecommerceName% Blog!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Unten k\u00F6nnen Sie die neuesten, ver\u00F6ffentlichten Artikel lesen <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Lesen Sie weiter!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Neuer Kommentar in %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Jemand hat gerade auf den Artikel geantwortet \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n          %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Lesen Sie weiter!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Willkommen bei %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Willkommen <a href=\"%%blogUrl%%\" style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hallo,<br><br>\n      Danke f\u00FCr die Anmeldung zu unserem Blog. Bald werden Sie die neuen Artikel per E-Mail erhalten, Informationen \u00FCber Rabatte, Werbeaktionen, Geschenke und interessante Informationen im Zusammenhang mit der Aktivit\u00E4t des Online-Shops.<br><br>\n      Wir hoffen Sie bald begr\u00FC\u00DFen zu d\u00FCrfen unter <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen, das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Aktienabonnement',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Abonnieren Sie den Produktbestand <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hallo,<br><br>Sie haben Sich f\u00FCr den Lagerbestand-Alarm angemeldet, von %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">\n      Wenn wir diesen Artikel wieder erhalten, werden wir Sie sofort informieren, damit er Ihnen nicht entgeht.<br><br>\n      Mit freundlichen Gr\u00FC\u00DFen das Team von %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-en.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-en.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_EN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_EN", function() { return LANGUAGE_EN; });
// v3 file template
var LANGUAGE_EN = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  For more information, read our %%privacy%% and %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Thank you for signup to %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Welcome to %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello  %firstName% %lastName%, <br><br>\n      We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully created.<br><br>\n      Thanks to your customer account now you can update your profile and password, view your order history and other details that may be of your interest.<br><br>\n      We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  For more information, read our %%privacy%% and %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Unsubscribe</a> <span style=\"color:#333;font-size:10px;\">from the Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Unsubscribe - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmation deleted account</strong><br><br>\n    <span style=\"font-size:15px;\">Hello,<br><br>As requested during your recent visit to %%ecommerceName%%, we confirm that your user account %%email%% has been removed from our database.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Password recovery - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Password recovery</strong><br><br>\n    <span style=\"font-size:15px;\">As requested during your recent visit to %%ecommerceName%% here's your address to access the password recovery zone:<br><br><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Click here</a><br><br>\n      Keep in mind that this access code will expire 24 hours after this email was sent.<br><br>We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Change password on %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Change password </strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello  %%firstName%% %%lastName%%,<br><br>This email is to inform you that your customer account password has been changed.<br><br>\n      Be sure to note your credentials in a safe place for future reference.<br><br>We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Subscribe to %%ecommerceName%%  newsletter',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Subscription to the newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello<br><br>Thank you for your registration to our newsletter. Soon you will receive news about our company, information of features and hottest products and promotions.<br><br>\n      We are looking forward to seeing you on <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  For more information, read our %%privacy%% and %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Unsubscribe</a> <span style=\"color:#333;font-size:10px;\">from the Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% recommends their favourite products %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Wishlist recommend</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Your friend %%anonymousName%% (%%anonymousEmail%%) sends you this product that may be of interest for you.<br><br>\n      If you need more information about this product you can contact us on <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n          Recommended products</span></td></tr>\n          <tr><td>&nbsp;</td></tr>\n          <tr>\n            <td style=\"vertical-align: top\">\n              <div style=\"padding: 0 0\">\n                <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                  <tbody>\n                    <tr>\n                      <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Product</td>\n\n                      <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Price</td>\n                    </tr>\n                    <!-- %loop% -->\n                    <tr>\n                      <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                        <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                          <tr>\n                            <td style=\"padding: 10px 0px;\">\n                              <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                            </td>\n                            <td style=\"padding: 10px 0px;\">\n                              %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n\n                      <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                    </tr>\n                    <!-- %/loop% -->\n\n                  </tbody>\n                </table>\n\n              </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>Message from your friend:</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n    </td>\n  </tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% recommends you a product on %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Product recommendation</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %%friendName%%,<br>Your friend %%anonymousName%% (%%anonymousEmail%%) thinks this item could be of your interest.<br><br>\n      If you need further information about this item you can contact us at <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n          Recommended products</span></td></tr>\n          <tr><td>&nbsp;</td></tr>\n          <tr>\n            <td style=\"vertical-align: top\">\n              <div style=\"padding: 0 0\">\n                <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                  <tbody>\n                    <tr>\n                      <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Product</td>\n\n                      <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Price</td>\n                    </tr>\n\n                    <tr>\n                      <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                        <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                          <tr>\n                            <td style=\"padding: 10px 0px;\">\n                              <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                            </td>\n                            <td style=\"padding: 10px 0px;\">\n                              %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n\n                      <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                    </tr>\n\n\n                  </tbody>\n                </table>\n\n              </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>Your friend's personal message:</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n    </td>\n  </tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Contact form of %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Contact form</strong><br><br>\n    <span style=\"font-size:15px;\">Name: %%anonymousFirstName%%<br>Lastname: %%anonymousLastName%%<br>Email: %%anonymousEmail%%<br>Phone: %%anonymousPhone%%<br>Query Motive:  %%queryMotive%%<br>Message: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Question about a product on %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Question about a product</strong><br><br>\n    <span style=\"font-size:15px;\">Name: %%anonymousFirstName%%<br>Lastname: %%anonymousLastName%%<br>Email: %%anonymousEmail%%<br>Phone: %%anonymousPhone%%<br>Message: %%comments%%<br><br>Product name: %%name%%<br>Product sku: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Order confirmation - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Order confirmation </strong><br><br>\n    <span style=\"font-size:15px;\">Dear %%firstName%% %%lastname%%,<br>\n      We confirm your order has been processed correctly.<br>\n      Please find your order attached as a PDF file. <br>\n      Your order details\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  N\u00BA Order:<br>\n                  Order date:<br>\n                  State:<br>\n                </td>\n\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confirmed</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Billing Address:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Shipping Address:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Order details</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Product</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantity</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Price</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Discounts</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Taxes</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Vouchers</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Total</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Comments:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n        <td bgColor=\"#f4f4f4\">\n          <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td style=\"padding: 15px 0px 15px 0px;\">\n                %%textToEmail%%\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Newsletter unsubscribe - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Newsletter unsubscribe</strong><br><br>\n    <span style=\"font-size:15px;\">Hello<br><br>You have been unsubscribed successfully.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Your friend wants to sponsor you',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Sponsorship request</strong><br><br>\n    <span style=\"font-size:15px;\">Hello,<br><br> %%firstName%% invites you to join <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    Become a member and registrer here: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    Thanks for your support.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Your sponsored just finished an order: enjoy the benefits',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Sponsorship completed</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello,<br><br>\n      One of your friends has just done a purchase in our shop for over XX (\u20AC) value, therefore we give you a XX discount in your next order.<br><br>\n      The discount will automatically take effect in your next order.<br><br>\n      Thanks for your support.<br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Return request %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Return Request Information</strong><br><br>\n    <span style=\"font-size:15px;\">Hello %firstName% %lastName%, <br><br>We are pleased to confirm your refund request.<br><br>Order number: %%orderNumber%%<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Incomplete order %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Incomplete order information</strong><br><br>\n    <span style=\"font-size:15px;\">Hello %firstName% %lastName%, <br><br>In your last visit to our store %%ecommerceName%% you placed the following item(s) in the shopping cart, but you did not complete the order. <br><br>\n    Click <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">here</a> to recover your cart.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Shopping Cart:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Product</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantity</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Price</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Carrier notification',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Email verification - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Email verification</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %firstName% %lastName%,<br><br>\n      Thanks for registering on %%ecommerceURL%%. Please, follow the link in order to verify your e-mail account: <a href=\"%verifyLink%\"  style=\"color:#000;\">Click here</a>.<br><br>\n      We are looking forward to seeing you on <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Account activated - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Account activated</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %firstName% %lastName%,<br><br>\n      We are pleased to inform you that your customer account in %%ecommerceURL%% has been successfully activated.<br><br>\n      You can view and modify all your details at any time by accessing this control panel: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Edit your profile</a><br><br>\n      We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Stock available',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Stock available of product <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Hello,<br><br>The article that you want so much is already available!</span>\n    <span style=\"font-size:15px;\">\n      We would like to remind you that this email provides guidance on the availability of this article and depends on many factors (people interested, available units).<br>\n      We have sent this email to all the customers interested in the article, so it is possible to be exhausted very soon.<br><br>\n      The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'New post in %ecommerceName% blog!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Below you can read the latest articles published in <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Read More!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'New comment on %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    There is a new comment on the post \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n          %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Read more!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Welcome to %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Welcome to <a href=\"%%blogUrl%%\"  style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello,<br><br>\n      Thank you for your registration to our blog. Soon you will receive new posts by email, information of features and hottest products and promotions.<br><br>\n      Hope to see you soon at <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Subscription of stock',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Stock subscription of product <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hello,<br><br>You have subscribed to the %name% stock notices</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">In case we receive this article again we will notify you immediately.<br><br>We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-es.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-es.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_ES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_ES", function() { return LANGUAGE_ES; });
// v3 file template
var LANGUAGE_ES = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n",
    },
    footer: {
        html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para m\u00E1s informaci\u00F3n, lee nuestra %%privacy%% y %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Gracias por darte de alta en %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00A1Bienvenido a %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola  %firstName% %lastName%,<br><br>\n      Nos complace confirmarte la creaci\u00F3n de tu cuenta de cliente en %%ecommerceURL%%.<br><br>\n      Gracias a tu cuenta de cliente podr\u00E1s actualizar tu perfil y contrase\u00F1a, consultar tu historial de pedidos y otra informaci\u00F3n de tu inter\u00E9s.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para m\u00E1s informaci\u00F3n, lee nuestra %%privacy%% y %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Darse de baja</span></a>\n      <span style=\"color:#000;font-size:10px;\">de la subscripci\u00F3n de Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Baja en %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmaci\u00F3n de cuenta eliminada</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>Conforme a lo solicitado durante tu reciente visita a %%ecommerceName%%, confirmamos que tu cuenta de usuario %%email%% ha sido eliminada de nuestra base de datos.<br><br>Atentamente, el equipo de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Recordar contraseña de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recordar contrase\u00F1a</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola %firstName% %lastName%,<br><br>\n      Conforme a lo solicitado durante tu reciente visita a %%ecommerceName%%, aqu\u00ED tienes tu direcci\u00F3n de acceso a la zona de recuperaci\u00F3n de contrase\u00F1a:<br><br>\n      <a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Click aqu\u00ED para recuperar contrase\u00F1a</a><br><br>\n      Este enlace solamente ser\u00E1 v\u00E1lido durante las 24 horas siguientes al momento de su env\u00EDo.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Cambio contraseña de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Cambio de contrase\u00F1a</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola %%firstName%% %%lastName%%,<br><br>\n      Te confirmamos que tu contrase\u00F1a ha sido modificada.<br><br>\n      Aseg\u00FArate de anotar tus credenciales en un lugar seguro para futuras referencias.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Subscripción a la newsletter en %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Subscripci\u00F3n a la newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola.<br><br>\n      Gracias por suscribirte a nuestro bolet\u00EDn de noticias. Pronto recibir\u00E1s informaci\u00F3n sobre actividades, noticias sobre nuestra empresa y novedades en productos y promociones.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para m\u00E1s informaci\u00F3n, lee nuestra %%privacy%% y %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Darse de baja</span></a>\n      <span style=\"color:#000;font-size:10px;\">de la subscripci\u00F3n de Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% te recomienda sus productos favoritos de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomendaci\u00F3n de wishlist</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Tu amigo/a %%anonymousName%% (%%anonymousEmail%%) te env\u00EDa este producto que puede resultarte de inter\u00E9s.<br><br>\n      Si necesitas m\u00E1s informaci\u00F3n acerca de este producto puedes contactar con nosotros en <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      Atentamente, el equipo de  %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productos recomendados</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Mensaje de tu amigo/a:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% te recomienda un producto de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomendaci\u00F3n de producto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Tu amigo/a %%anonymousName%% (%%anonymousEmail%%) te env\u00EDa este producto que puede resultarte de inter\u00E9s.<br><br>\n      Si necesitas m\u00E1s informaci\u00F3n acerca de este producto puedes contactar con nosotros en <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      Atentamente, el equipo de  %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productos recomendados</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Mensaje de tu amigo/a:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Formulario de contacto de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Formulario de contacto</strong><br><br>\n    <span style=\"font-size:15px;\">Nombre: %%anonymousFirstName%%<br>Email: %%anonymousEmail%%<br>Tel\u00E9fono: %%anonymousPhone%%<br>Motivo de consulta:  %%queryMotive%%<br>Mensaje: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Consulta sobre producto de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Consulta sobre producto</strong><br><br>\n    <span style=\"font-size:15px;\">Nombre: %%anonymousFirstName%%<br>Apellidos: %%anonymousLastName%%<br>Email: %%anonymousEmail%%<br>Tel\u00E9fono: %%anonymousPhone%%<br>Mensaje: %%comments%%<br><br>Nombre Producto: %%name%%<br>Referencia Producto: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Confirmación de pedido - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmaci\u00F3n de pedido</strong><br><br>\n    <span style=\"font-size:15px;\">Muchas gracias por confiar en nosotros. Su compra ha sido procesada correctamente. A continuaci\u00F3n te mostramos los datos del pedido</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  N\u00BA de pedido:<br>\n                  Fecha del pedido:<br>\n                  Estado:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confirmado</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Direcci\u00F3n de facturaci\u00F3n:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Direcci\u00F3n de env\u00EDo:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalles del pedido</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Cantidad</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Descuentos</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Impuestos</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Vales</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Total</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Comentarios:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Baja de la newsletter de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmaci\u00F3n de la baja de la newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">Hola<br><br>Has sido dado de baja con \u00E9xito de nuestra newsletter.<br><br>Atentamente, el equipo de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Tu amigo te quiere apadrinar',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Solicitud de apadrinamiento</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>\n    %%firstName%% te invita a unirte a  <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    Hazte socio y reg\u00EDstrate aqu\u00ED: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    Gracias por tu apoyo.<br><br>\n    Atentamente, el equipo de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Tu apadrinado ha realizado una compra: disfruta de tu descuento.',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Apadrinamiento completado</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>\n    Uno de tus amigos acaba de hacer una compra en nuestra tienda de m\u00E1s de XX (\u20AC) de valor, por lo tanto, te ofrecemos un descuento de XX en tu pr\u00F3ximo pedido.<br><br>\n    El descuento entrar\u00E1 autom\u00E1ticamente en vigor en tu pr\u00F3ximo pedido. <br><br>\n    Gracias por tu apoyo.<br><br>\n    Atentamente, el equipo de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Petición de devolución %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informaci\u00F3n de la petici\u00F3n de devoluci\u00F3n</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%, <br><br>Nos complace confirmarte la petici\u00F3n de tu devoluci\u00F3n.<br><br>N\u00FAmero de pedido: %%orderNumber%%<br><br>Atentamente, el equipo %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Pedido incompleto de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informaci\u00F3n del pedido incompleto</strong><br><br>\n    <span style=\"font-size:15px;\">Hola %firstName% %lastName%, <br><br>En tu \u00FAltima visita a nuestra tienda, a\u00F1adiste los siguientes productos al carro de la compra, pero no completaste el pedido.<br><br>\n    Haz clic <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">aqu\u00ED</a> si deseas recuperar tu pedido. <br><br>Atentamente, el equipo %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalles del pedido incompleto</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Cantidad</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Notificación transportista',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Verificación de correo - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Verificaci\u00F3n de correo</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola %firstName% %lastName%,<br><br>\n      Gracias por registrarte en %%ecommerceURL%%. Por favor activa tu cuenta clicando <a href=\"%verifyLink%\"  style=\"color:#000;\">aqu\u00ED</a>.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Activación de cuenta - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Activaci\u00F3n de cuenta</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola %firstName% %lastName%,<br><br>\n      Te notificamos que tu cuenta en %%ecommerceURL%% ha sido activada correctamente.<br><br>\n      Para ver tus datos y toda la informaci\u00F3n referente a tu cuenta accede a trav\u00E9s del panel de control: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Editar tu perfil</a><br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Stock disponible',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Stock disponible del producto <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>El art\u00EDculo que tanto quer\u00EDas ya est\u00E1 disponible!</span>\n    <span style=\"font-size:15px;\">\n      Queremos recordarte que este email aporta informaci\u00F3n orientativa sobre la disponibilidad de este art\u00EDculo y depende de muchos factores (personas interesadas, unidades disponibles). <br>\n      Hemos enviado este email a todos los clientes interesados en este art\u00EDculo, por lo que es posible que se agote muy pronto.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '¡Nuevo artículo en el blog de %ecommerceName%!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    A continuaci\u00F3n puedes leer los \u00FAltimos art\u00EDculos publicados en <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Contin\u00FAa Leyendo!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Nuevo comentario en %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Alguien acaba de responder el art\u00EDculo \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n                  %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Contin\u00FAa Leyendo!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '¡Bienvenido a %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00A1Bienvenido a <a href=\"%%blogUrl%%\" style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hola,<br><br>\n      Gracias por suscribirte a nuestro blog. Pronto recibir\u00E1s los nuevos art\u00EDculos por email, informaci\u00F3n sobre descuentos, promociones, regalos y datos de inter\u00E9s relativos a la actividad de la tienda online.<br><br>\n      Esperamos verte pronto en <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Atentamente, el equipo de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Suscripción de stock',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Suscripci\u00F3n de stock del producto <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>Te has suscrito a los avisos de stock de %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">En caso de que volvamos a recibir este art\u00EDculo te avisaremos de inmediato para que no se te escape.<br><br>Atentamente, el equipo de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-eu.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-eu.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_EU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_EU", function() { return LANGUAGE_EU; });
// v3 file template
var LANGUAGE_EU = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-fr.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-fr.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_FR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_FR", function() { return LANGUAGE_FR; });
// v3 file template
var LANGUAGE_FR = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n    <tr>\n      <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-501-Loop%% -->\n                    <td style=\"text-align: center;\">\n                      <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                    </td>\n                  <!-- %%/Pages-501-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n              <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Banners-502-Loop%% -->\n                    <td width=\"30\" style=\"text-align: center;\">\n                      <a href=\"%%BannerLink%%\">\n                        <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                      </a>\n                    </td>\n                  <!-- %%/Banners-502-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-503-Loop%% -->\n                    <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                      <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        %%pageContent%%\n                      </span>\n                    </td>\n                  <!-- %%/Pages-503-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <!-- %%Pages-504-Loop%% -->\n              <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                %%pageContent%%\n              </td>\n            <!-- %%/Pages-504-Loop%% -->\n          </tr>\n          <tr>\n            <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n              Pour plus d'informations, lire notre %%privacy%% i %%termsOfUse%%.\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n  <!--[if (gte mso 9)|(IE)]>\n        </td>\n      </tr>\n    </table>\n  <![endif]-->\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n    <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n  </td>\n</tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Bienvenue a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong> Bienvenue a %%ecommerceName%%</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour, %%firstName%% %%lastName%%:<br><br>\n      Nous avons le plaisir de vous confirmer la cr\u00E9ation de votre compte client sur %%ecommerceURL%%.<br><br>\n      Votre compte client vous permettra de mettre \u00E0 jour votre profil et votre mot de passe, et de consulter votre historique de commandes parmi d\u2019autres informations.<br><br>\n      Nous esp\u00E9rons vous voir bient\u00F4t sur  %%ecommerceURL%%<br><br>\n      Sinc\u00E8res salutations.<br><br>\n      L\u2019\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n    <tr>\n      <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-501-Loop%% -->\n                    <td style=\"text-align: center;\">\n                      <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                    </td>\n                  <!-- %%/Pages-501-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n              <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Banners-502-Loop%% -->\n                    <td width=\"30\" style=\"text-align: center;\">\n                      <a href=\"%%BannerLink%%\">\n                        <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                      </a>\n                    </td>\n                  <!-- %%/Banners-502-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-503-Loop%% -->\n                    <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                      <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        %%pageContent%%\n                      </span>\n                    </td>\n                  <!-- %%/Pages-503-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <!-- %%Pages-504-Loop%% -->\n              <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                %%pageContent%%\n              </td>\n            <!-- %%/Pages-504-Loop%% -->\n          </tr>\n          <tr>\n            <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n              Pour plus d'informations, lire notre %%privacy%% i %%termsOfUse%%.\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n  <!--[if (gte mso 9)|(IE)]>\n        </td>\n      </tr>\n    </table>\n  <![endif]-->\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Se d\u00E9sabonner</a> <span style=\"color:#333;font-size:10px;\">de la Newsletter</span>\n    </span>\n  </td>\n</tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Annulation de compte %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Annulation newsletter </strong><br><br>\n    <span style=\"font-size:15px;\">\n    Bonjour,<br><br>\n    Nous vous confirmons l\u2019annulation de votre inscription au site.<br><br>\n    Cordialement.<br><br>\n    L\u2019\u00E9quipe %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Rappel de mot de passe de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Rappel de mot de passe</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour, %%firstName%% %%lastName%%:<br><br>\n      Conform\u00E9ment \u00E0 votre demande lors de la visite \u00E0 %%ecommerceName%%, voici le lien qui vous donne acc\u00E9s \u00E0 la zone pour la r\u00E9cup\u00E9ration de votre mot de passe:<br><br>\n      <span><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Cliquez ici pour r\u00E9cup\u00E9rer le mot de passe</a></span><br><br>\n      Ce lien sera valable uniquement pendant 24 heures suivant votre demande de r\u00E9cup\u00E9ration:<br><br>\n      Nous esp\u00E9rons vous revoir bient\u00F4t sur.<br><br>\n      Sinc\u00E8res salutations,<br><br>\n      L'\u00E9quipe %%ecommerceName%%<br>\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Changement de mot de passe - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong> Changement de mot de passe </strong><br><br>\n    <span style=\"font-size:15px;\">Bonjour, %%firstName%% %%lastName%%:<br><br>\n    Se il vous pla\u00EEt noter que votre mot de passe a \u00E9t\u00E9 chang\u00E9. <br><br>\n    Au plaisir de vous voir bient\u00F4t <a href=\"%%ecommerceURL%%\" style=\"font-weight:bold\">%%ecommerceName%%</a><br><br>\n    Cordialement,<br><br>L'\u00E9quipe %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Newsletter - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Subscripci\u00F3n a la newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">Bonjour<br><br>\n    Vous \u00EAtes bien inscrit(e) \u00E0 notre newsletter, vous recevrez d\u00E9sormais tous nos e-mails concernant les nouveaut\u00E9s et promotions de la e-boutique.<br><br>\n    Rendez-nous visite sur <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a></span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n    <tr>\n      <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-501-Loop%% -->\n                    <td style=\"text-align: center;\">\n                      <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                    </td>\n                  <!-- %%/Pages-501-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n              <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Banners-502-Loop%% -->\n                    <td width=\"30\" style=\"text-align: center;\">\n                      <a href=\"%%BannerLink%%\">\n                        <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                      </a>\n                    </td>\n                  <!-- %%/Banners-502-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td align=\"center\" >\n              <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                <tr>\n                  <!-- %%Pages-503-Loop%% -->\n                    <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                      <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        %%pageContent%%\n                      </span>\n                    </td>\n                  <!-- %%/Pages-503-Loop%% -->\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <!-- %%Pages-504-Loop%% -->\n              <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                %%pageContent%%\n              </td>\n            <!-- %%/Pages-504-Loop%% -->\n          </tr>\n          <tr>\n            <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n              Pour plus d'informations, lire notre %%privacy%% i %%termsOfUse%%.\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n  <!--[if (gte mso 9)|(IE)]>\n        </td>\n      </tr>\n    </table>\n  <![endif]-->\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Se d\u00E9sabonner</a> <span style=\"color:#333;font-size:10px;\">de la Newsletter</span>\n    </span>\n  </td>\n</tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% vous recommande les produits de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recommande les produits de %%ecommerceName%%</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour,<br><br>Ton ami %%anonymousName%% (%%anonymousEmail%%) vous envoie ce produit qui pourrait int\u00E9resser.<br><br>\n      Si vous avez besoin de plus amples informations sur ce produit, vous pouvez nous contacter \u00E0 <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      Cordialement, L'\u00E9quipe  %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Produits recommand\u00E9s</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produit</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prix</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Message de votre ami:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% vous recommande ce produit de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recommandation d'un produit</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour %%friendName%% <br><br>\n      Un ami %%anonymousName%% (%%anonymousEmail%%) vous envoie ce produit qui pourrait int\u00E9resser.<br><br>\n      Si vous avez besoin de plus amples informations sur ce produit, vous pouvez nous contacter \u00E0 <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      Cordialement, L'\u00E9quipe  %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tr><td>&nbsp;</td></tr>\n      <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Produits recommand\u00E9s</span></td></tr>\n      <tr><td>&nbsp;</td></tr>\n      <tr>\n        <td style=\"vertical-align: top\">\n          <div style=\"padding: 0 0\">\n            <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n              <tr>\n                <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produit</td>\n                <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prix</td>\n              </tr>\n              <tr>\n                <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                  <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                    <tr>\n                      <td style=\"padding: 10px 0px;\">\n                        <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                      </td>\n                      <td style=\"padding: 10px 0px;\">\n                        %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n                <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n              </tr>\n            </table>\n          </div>\n        </td>\n      </tr>\n      <tr><td>&nbsp;</td></tr>\n      <tr>\n        <td>\n          <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n            <tr>\n              <td>\n                <strong>Message \u00E0 votre ami:</strong><br>\n                %%comments%%\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n      <tr><td>&nbsp;</td></tr>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Contacte general de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Contacte general</strong><br><br>\n    <span style=\"font-size:15px;\"><p>Pr\u00E9nom: %%anonymousFirstName%%<br>\n    Nom: %%anonymousLastName%%<br>\n    Email: %%anonymousEmail%%<br>\n    T\u00E9l\u00E9phone: %%anonymousPhone%%<br>\n    Message: %%comments%%</p></span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Question sur un article de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Question sur un article </strong><br><br>\n    <span style=\"font-size:15px;\">\n      <p>Pr\u00E9nom: %%anonymousFirstName%%<br>\n      Nom: %%anonymousLastName%%<br>\n      Email: %%anonymousEmail%%<br>\n      T\u00E9l\u00E9phone: %%anonymousPhone%%<br>\n      Message: %%comments%%</p>\n      <br>\n      Titre de l\u2019article: %%name%%<br>\n      R\u00E9f\u00E9rence de l\u2019article: %%sku%%\n    </span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Confirmation de commande - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirmation de commande</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour %%firstName%% %%lastName%%,<br><br>\n      Nous vous remercions de faire vos achats \u00E0 %%ecommerceName%%. Nous vous confirmons que la commande num\u00E9ro %%orderNumber%% a \u00E9t\u00E9 trait\u00E9e correctement.<br><br>\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  Num\u00E9ro de commande:<br>\n                  Date de la commande:<br>\n                  \u00C9tat:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confirm\u00E9</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Adresse de facturation:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Adresse de livraison:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">D\u00E9tails de la commande</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produit</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantit\u00E9</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prix</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">R\u00E9ductions</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Imposition</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Coupons</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Total</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Commentaires:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Annulation newsletter - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>Annulation newsletter </strong><br><br>\n  <span style=\"font-size:15px;\">\n    Bonjour,<br><br>\n    L\u2019annulation de l\u2019inscription \u00E0 la newsletter s\u2019est effectu\u00E9e correctement.<br><br>\n    Cordialement.<br><br>\n    L\u2019\u00E9quipe %%ecommerceName%%\n  </span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Vous ami veut vous parrainez',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Demande de parrainage</strong><br><br>\n    <span style=\"font-size:15px;\">Bonjour,<br><br>\n    %%firstName%% vous invite \u00E0 rejoindre <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    Devenez membre et inscrivez-vous ici: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    Merci pour votre soutien.<br><br>\n    Cordialement, L'\u00E9quipe %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Votre mentor ont fait un achat: profiter de votre remise.',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Parrainage compl\u00E9t\u00E9</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour,<br><br>\n      Un de vos amis vient de faire un achat dans notre boutique sur XX (\u20AC) valeur, par cons\u00E9quent, nous offrons un rabais de XX sur votre prochaine commande.<br><br>\n      La r\u00E9duction entrera en vigueur automatiquement sur votre prochaine commande.<br><br>\n      Merci pour votre soutien.<br><br>Sinc\u00E8rement, l'\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Demande de retour %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Demande d'information Retour</strong><br><br>\n    <span style=\"font-size:15px;\">Bonjour %firstName% %lastName%, <br><br>Nous sommes heureux de confirmer votre demande de remboursement.<br><br>Num\u00E9ro de commande: %%orderNumber%%<br><br>L'\u00E9quipe %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Demande incomplète %%ecommerceName%%',
            html: "\n    <tr>\n      <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n        <strong>Incomplete demande d'information</strong><br><br>\n        <span style=\"font-size:15px;\">Bonjour %%firstName%% %%lastName%%, <br><br>Sur votre derni\u00E8re visite \u00E0 notre magasin, vous avez ajout\u00E9 les produits suivants \u00E0 votre panier, mais n'a pas termin\u00E9 la commande.<br><br>\n          Cliquez <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">ici</a> pour r\u00E9cup\u00E9rer votre commande. <br><br>Sinc\u00E8rement, l'\u00E9quipe %%ecommerceName%%</span>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"padding: 0px 0px;\" align=\"center\">\n        <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n          <tbody>\n            <tr><td>&nbsp;</td></tr>\n            <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">D\u00E9tails commande incompl\u00E8te</span></td></tr>\n            <tr><td>&nbsp;</td></tr>\n            <tr>\n              <td style=\"vertical-align: top\">\n                <div style=\"padding: 0 0\">\n                  <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                    <tbody>\n                      <tr>\n                        <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produit</td>\n                        <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantit\u00E9</td>\n                        <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prix</td>\n                      </tr>\n                      <!-- %loop% -->\n                      <tr>\n                        <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                          <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                            <tr>\n                              <td style=\"padding: 10px 0px;\">\n                                <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                              </td>\n                              <td style=\"padding: 10px 0px;\">\n                                %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                              </td>\n                            </tr>\n                          </table>\n                        </td>\n                        <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                        <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                      </tr>\n                      <!-- %/loop% -->\n                    </tbody>\n                  </table>\n                </div>\n              </td>\n            </tr>\n            <tr><td>&nbsp;</td></tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    "
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Notification du transporteur',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Vérification e-mail - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>V\u00E9rification e-mail</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour %firstName% %lastName%,<br><br>\n      Merci \u00E0 la signature \u00E0  %%ecommerceURL%%. S'il vous pla\u00EEt activer votre compte, cliquez <a href=\"%verifyLink%\" style=\"color:#000;\">ici </a>.<br><br>\n      Nous esp\u00E9rons vous voir bient\u00F4t dans <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Cordialement, L'\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Activation du compte - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Activation du compte</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour %firstName% %lastName%,<br><br>\n      Nous vous informons que votre compte %%ecommerceURL%% a \u00E9t\u00E9 activ\u00E9 avec succ\u00E8s.<br><br>\n      Pour afficher vos donn\u00E9es et toutes les informations concernant votre compte accessible via le panneau de commande: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Modifier votre profil</a><br><br>\n      Nous esp\u00E9rons vous voir bient\u00F4t dans <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Cordialement, L'\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Stock disponible',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Stock disponible du produit <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br>\n    %productOptions%<br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour,<br><br>\n      L'article que vous voulez tant est d\u00E9j\u00E0 disponible!\n    </span>\n    <span style=\"font-size:15px;\">\n      Nous souhaitons vous rappeler que cet e-mail fournit des conseils sur la disponibilit\u00E9 de cet article et d\u00E9pend de nombreux facteurs (personnes int\u00E9ress\u00E9es, unit\u00E9s disponibles).<br>\n      Nous avons envoy\u00E9 cet email \u00E0 tous les clients int\u00E9ress\u00E9s par l'article, il est donc possible d'\u00EAtre \u00E9puis\u00E9 tr\u00E8s bient\u00F4t.<br><br>\n      L'\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Nouvel article sur le blog de %%ecommerceName%%!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Ci-dessous vous pouvez lire les derniers articles publi\u00E9s dans <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Continuer la lecture!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Nouveau commentaire sur %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Quelqu'un vient de r\u00E9pondre \u00E0 l'article <a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n                  %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Continuer \u00E0 lire!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Bienvenue a %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Bienvenue a <a href=\"%%blogUrl%%\"  style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Bonjour,<br><br>\n      Merci pour votre inscription \u00E0 notre blog. Bient\u00F4t vous recevrez les nouveaux articles par email, des informations sur des remises, des promotions, des cadeaux et des informations g\u00E9n\u00E9rales concernant l'activit\u00E9 du boutique en ligne.<br><br>\n      Nous esp\u00E9rons vous voir bient\u00F4t sur <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      L\u2019\u00E9quipe %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Abonnement de stock',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Abonnement de stock de produit <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Bonjour,<br><br> Vous avez souscrit \u00E0 des avis d'achat %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">Dans le cas o\u00F9 nous recevons \u00E0 nouveau cet article, nous vous en informerons imm\u00E9diatement afin que vous ne puissiez pas vous \u00E9chapper.<br><br>Cordialement, l'\u00E9quipe %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-hu.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-hu.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_HU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_HU", function() { return LANGUAGE_HU; });
// v3 file template
var LANGUAGE_HU = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-it.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-it.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_IT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_IT", function() { return LANGUAGE_IT; });
// v3 file template
var LANGUAGE_IT = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Grazie per esserti registrato a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00A1Benvenuto in %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%, <br><br>\n      Siamo lieti di confermare che il tuo account cliente su %%ecommerceURL%% \u00E8 stato creato.<br><br>\n      Grazie al tuo account cliente potrai aggiornare il tuo profilo e la tua password, consultare il tuo storico ordini ed altre informazioni utili.<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Cancellare</span></a>\n      <span style=\"color:#000;font-size:10px;\">l'iscrizione alla Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Basso in %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Conferma account eliminato</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      Come da te richiesto durante la tua ultima visita su %%ecommerceName%%, ti confermiamo che l'account utente %%email%%  \u00E8 stato eliminato dal nostro database.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Ricorda la password di %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recupero password</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%,<br><br>\n      Come da te richiesto durante la tua ultima visita su %%ecommerceName%%, ti inviamo il link di accesso alla sezione dedicata al recupero della password:<br><br>\n      <a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Clicca qui per recuperare la password</a><br><br>\n      Questo link sar&agrave; attivo solamente per le 24 ore successive al suo invio.<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Cambio della password per %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Modifica password</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao  %%firstName%% %%lastName%%,<br><br>\n      Ti confermiamo che la tua password \u00E8 stata modificata.<br><br>\n      Accertati di conservare le credenziali in un luogo sicuro per gli accessi futuri<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Iscrizione alla newsletter in %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Iscrizione alla newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao<br><br>\n      Grazie per esserti iscritto alla nostra newsletter. Riceverai presto informazioni sulle nostre attivit&agrave;, notizie sulla nostra azienda e le novit&agrave; relative ai prodotti e alle promozioni.<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Per ulteriori informazioni, leggi la nostra %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Cancellare</span></a>\n      <span style=\"color:#000;font-size:10px;\">l'iscrizione alla Newsletter</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% ti consiglia i tuoi prodotti %%ecommerceName%% preferiti',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Wishlist consigliata</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Il tuo amico/a %%anonymousName%% (%%anonymousEmail%%) ti invia questo prodotto a cui potresti essere interessato.<br><br>\n      Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Prodotti consigliati\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prodotto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prezzo</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Prezzo</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% consiglia un prodotto da %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomendaci\u00F3n de producto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Il tuo amico/a %%anonymousName%% (%%anonymousEmail%%) ti invia questo prodotto a cui potresti essere interessato.<br><br>\n      Se desideri maggiori informazioni sul prodotto puoi contattarci su <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Prodotti consigliati\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prodotto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prezzo</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Messaggio del tuo amico/a:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Modulo di contatto %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Modulo di contatto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Nome: %%anonymousFirstName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefono: %%anonymousPhone%%<br>\n      Motivo della richiesta:  %%queryMotive%%<br>\n      Messaggio: %%comments%%\n    </span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Consultazione sul prodotto %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Richiesta relativa al prodotto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Nome: %%anonymousFirstName%%<br>\n      Cognome: %%anonymousLastName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefono: %%anonymousPhone%%<br>\n      Messaggio: %%comments%%<br><br>\n      Nome Prodotto: %%name%%<br>\n      Codice Prodotto: %%sku%%\n    </span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Conferma d\'ordine - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Conferma d'ordine</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ti ringraziamo per la fiducia. Il tuo acquisto \u00E8 andato a buon fine. Qui di seguito potrai visualizzare i dettagli dell'ordine\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  NB: dell'ordine:<br>\n                  Data dell'ordine:<br>\n                  Stato:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confermato</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>Indirizzo di fatturazione:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Indirizzo di spedizione:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Dettagli dell'ordine\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prodotto</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantit</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prezzo</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Sconti</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Totale parziale</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Imposte</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Buoni acquisto</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Totale</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Commenti:</strong><br>\n                  %%orderComments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Scarica la newsletter %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Conferma cancellazione iscrizione newsletter</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao<br><br>\n      La tua iscrizione alla nostra newsletter \u00E8 stata cancellata con successo.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Il tuo amico vuole sponsorizzarti',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Richiesta di sponsorizzazione</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      %%firstName%% ti invita ad unirti a <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n      Diventa socio e registrati qui:\n      <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n      Grazie per il tuo sostegno.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Il tuo sponsorizzato ha effettuato un acquisto: goditi il tuo sconto.',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Sponsorizzazione completata</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      Uno dei tuoi amici ha appena effettuato un acquisto nel nostro negozio per un valore superiore a XX (\u20AC) quindi, ti offriamo uno sconto di XX sul tuo prossimo ordine.<br><br>\n      sul tuo prossimo ordine <br><br>\n      Grazie per il tuo sostegno.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Richiesta di ritorno %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informazioni sulla richiesta di reso</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%, <br><br>\n      Siamo lieti di comunicarti che la tua richiesta di reso \u00E8 stata confermata.<br><br>\n      Numero d'ordine: %%orderNumber%%<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Ordine incompleto di%%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informazioni ordine incompleto</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%, <br><br>\n      Durante la tua ultima visita al nostro negozio, hai aggiunto al carrello i seguenti prodotti, ma non hai completato l'ordine.<br><br>\n      Clicca <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">qui</a> se desideri recuperare il tuo ordine. <br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n              Dettagli dell'ordine incompleto\n            </span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prodotto</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantit</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Prezzo</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Notifica del vettore',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Verifica dell\'indirizzo e-mail - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Verifica dell'indirizzo e-mail</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%,<br><br>\n      Grazie per esserti registrato su %%ecommerceURL%%. Per favore attiva il tuo account cliccando <a href=\"%verifyLink%\" style=\"color:#000;\">qui</a>.<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Attivazione account - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Attivazione account</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao %firstName% %lastName%,<br><br>\n      Ti informiamo che il tuo account su %%ecommerceURL%% \u00E8 stato attivato correttamente.<br><br>\n      Per visualizzare i tuoi dati e tutte le informazioni relative al tuo account accedi tramite il pannello di controllo: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Modifica il tuo profilo</a><br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Stock disponibile',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\n      Disponibilit&agrave; del prodotto <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a>\n    </strong>\n    %productOptions%<br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      L'articolo che tanto desideravi \u00E8 ora disponibile!\n    </span>\n    <span style=\"font-size:15px;\">\n      Ti ricordiamo che questo messaggio e-mail fornisce delle informazioni indicative riguardo alla disponibilit&agrave; dell'articolo e tale disponibilit&agrave; dipende da molti fattori (persone interessate, pezzi disponibili).\n      Questo messaggio \u00E8 stato inviato a tutti i clienti interessati a questo articolo, di conseguenza \u00E8 possibile che molto presto non sia pi&ugrave; disponibile.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Nuovo articolo nel blog di %ecommerceName%!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    In seguito puoi leggere gli ultimi articoli pubblicati su <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Continua a leggere!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Nuovo commento %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Qualcuno ha appena risposto all'articolo \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n                  %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Continua a leggere!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Benvenuto a %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00A1Benvenuto a <a href=\"%%blogUrl%%\" style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      Grazie per esserti iscritto al nostro blog. Riceverai presto via mail i nuovi articoli, le informazioni relative agli sconti, alle promozioni, ai regali e le informazioni importanti che riguardano l'attivit&agrave; del nostro negozio online.<br><br>\n      Ci auguriamo di vederti presto su <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      Cordiali saluti, il team di %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Iscrizione all\'avviso di disponibilit&agrave;',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Iscrizione all'avviso di disponibilit&agrave; del prodotto <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ciao,<br><br>\n      Ti sei iscritto agli avvisi di disponibilit&agrave; del %name%\n    </span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">\n    Nel caso in cui questo articolo fosse nuovamente disponibile ti avviseremo immediatamente per fare in modo che non ti sfugga.<br><br>\n    Cordiali saluti, il team di %%ecommerceName%%\n  </span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-ja.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ja.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_JA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_JA", function() { return LANGUAGE_JA; });
// v3 file template
var LANGUAGE_JA = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-ko.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ko.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_KO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KO", function() { return LANGUAGE_KO; });
// v3 file template
var LANGUAGE_KO = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n\n<tr>\n  <td>\n    <!--[if (gte mso 9)|(IE)]>\n      <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n        <tr>\n          <td>\n    <![endif]-->\n    <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n      <tr>\n        <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n          <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n            <tr>\n              <td >\n                <a href=\"%%ecommerceURL%%\">\n                  <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                </a>\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n"
    },
    footer: {
        html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 %%privacy%% \uACFC %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '%%ecommerceName%% 에 등록해 주셔서 감사합니다',
            html: "\n<tr>\n  <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>%%ecommerceName%% \uC5D0 \uB4F1\uB85D\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4</strong><br><br>\n    <span style=\"font-size:15px;\">\uC548\uB155\uD558\uC138\uC694  %firstName% %lastName%, <br><br>\uACE0\uAC1D \uACC4\uC815\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4 <br><br>\uACE0\uAC1D\uC758 \uACC4\uC815\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4,\uC9C0\uAE08\uC740 \uAC1C\uC778\uD648\uD398\uC774\uC9C0 \uACFC  \uBE44\uBC00\uBC88\uD638\uB97C  \uC5C5\uB370\uC774\uD2B8 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4, \uC8FC\uBB38 \uB0B4\uC5ED\uACFC \uAE30\uD0C0 \uC0AC\uD56D \uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br><br>\n    <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a> \uC5D0\uC11C \uB2F9\uC2E0\uC744 \uBD59\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 %%privacy%% \uACFC %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Unsubscribe</a> <span style=\"color:#333;font-size:10px;\">from the Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: '%%ecommerceName%% 계정 취소하기',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uACC4\uC815 \uC0AD\uC81C\uB97C \uD655\uC778\uD558\uAE30</strong><br><br>\n  <span style=\"font-size:15px;\">\uC548\uB155\uD558\uC138\uC694<br><br>\uD398\uC774\uC9C0\uB97C \uBC29\uBB38\uD558\uBA74\uC5D0\uC11C \uACC4\uC815\uC744 \uCDE8\uC18C\uD55C\uC694\uCC9C\uC774 \uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4,\uC6B0\uB9AC\uC758 \uB370\uC774\uD0C0\uBCA0\uC774\uC2A4\uC5D0\uC11C\uC131 \uACF5\uC801\uC73C\uB85C \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4 <br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '%%ecommerceName%% 의비밀번호를 복구하기 ',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uBE44\uBC00\uBC88\uD638\uB97C \uBCF5\uAD6C\uD558\uAE30</strong><br><br>\n  <span style=\"font-size:15px;\">%%ecommerceName%% \uC758\uD398\uC774\uC9C0 \uBC29\uBB38\uD560\uB54C \uBC14\uB85C \uBE44\uBC00 \uBC88\uD638 \uBCF5\uAD6C \uC601\uC5ED\uC5D0 \uC561\uC138\uC2A4 \uD560<br><br><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">\uC218\uC788\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4 , \uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624</a><br><br>\n  \uC774 \uC774\uBA54\uC77C\uC744 \uBCF4\uB0B8 \uD6C4\uC774 \uC561\uC138\uC2A4 \uCF54\uB4DC\uAC00 24 \uC2DC\uAC04 \uB3D9\uC548 \uC720\uD6A8\uD569\uB2C8\uB2E4 <br><br><a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a> \uC5D0\uC11C \uB2F9\uC2E0\uC744 \uBD59\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '%%ecommerceName%% 의 비밀번호 변경하기',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD\uD558\uAE30 </strong><br><br>\n    <span style=\"font-size:15px;\">\uC548\uB155\uD558\uC138\uC694 %%firstName%% %%lastName%%,<br><br>\uC774 \uBA54\uC77C\uC740 \uACE0\uAC1D \uACC4\uC815\uC758 \uBE44\uBC00\uBC88\uD638\uAC00  \uBCC0\uACBD\uB418\uC5C8\uC74C\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.<br><br>\uB2E8\uC2F1\uC758\uACC4\uC815\uC744\uBCF4\uD638\uD558\uAE30\uC704\uD574\uC11C \uC774\uBA54\uC2DC\uC9C0\uAC00 \uC548\uC804 \uBA54\uC2DC\uC9C0\uB85C \uD655\uC778\uD558\uC138\uC694<br><br><a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\uC5D0\uC11C \uB2F9\uC2E0\uC744 \uBD59\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: '%%ecommerceName%% 을구독하기',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uCF58\uD150\uCE20\uB97C \uAD6C\uB3C5\uD558\uAE30</strong><br><br>\n    <span style=\"font-size:15px;\">\uC548\uB155\uD558\uC138\uC694<br><br>\uC6B0\uB9AC\uC758 \uB274\uC2A4 \uB808\uD130\uC5D0 \uAD6C\uB3C5 \uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.  \uACE7 \uC6B0\uB9AC \uD68C\uC0AC\uC5D0 \uB300\uD574 \uB274\uC2A4,  \uC81C\uD488 \uAE30\uB2A5,\uC778\uAE30 \uC81C\uD488\uACFC \uD310\uCD09\uC744 \uBC1B\uC744 \uAC83\uC785\uB2C8\uB2E4 <br><br><a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a> \uC5D0\uC11C \uB2F9\uC2E0\uC744 \uBD59\uAE30\uB97C \uAE30\uB300\uD569\uB2C8\uB2E4</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 %%privacy%% \uACFC %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Unsubscribe</a> <span style=\"color:#333;font-size:10px;\">from the Newsletter</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% 마음에 드는 제품을소장했습니다',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uCD94\uCC9C\uC744 \uC18C\uC7A5\uD558\uAE30</strong><br><br>\n  <span style=\"font-size:15px;\">\uB2F9\uC2E0\uC758\uCE5C\uAD6C\uB294  \uB2F9\uC2E0\uC774\uAD00\uC2EC\uC774 \uC788\uC744 \uC218 \uC788\uB294\uC81C\uD488\uC744 \uBCF4\uB0B4\uB418\uC5C8\uC2B5\uB2C8\uB2E4 <br><br>\uC880 \uB354 \uC790\uC138\uD55C \uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA74 \uB2F9\uC2E0\uC740 \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4, <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\uC81C\uD488 \uCD94\uCC9C</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC81C\uD488 \uBAA8\uB378 </td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uAC00\uACA9</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                      </tr>\n                  </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n             </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>\uCE5C\uAD6C\uC758 \uBA54\uC2DC\uC9C0             \uB313\uAE00:</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n            </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '제품 추천',
            html: "\n\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uC560\uCE6D   \uB2F9\uC2E0\uC5D0\uAC8C \uCD94\uCC9C\uD55C\uC81C\uD488 </strong><br><br>\n  <span style=\"font-size:15px;\"> Hello %%friendName%%,<br>\uB2F9\uC2E0\uC758 \uCE5C\uAD6C %%anonymousName%% (%%anonymousEmail%%) \uC774 \uC0C1\uD488\uC740 \uAD00\uC2EC\uC774 \uB420 \uC218 \uC788\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4 .<br><br>\uC880 \uB354 \uC790\uC138\uD55C \uC815\uBCF4\uAC00 \uD544\uC694\uD558\uBA74 \uB2F9\uC2E0\uC740 \uBB38\uC758\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4, <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\uC81C\uD488 \uCD94\uCC9C</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC81C\uD488 \uBAA8\uB378</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uAC00\uACA9</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\uCE5C\uAD6C\uC758 \uCD94\uCC9C\uC785\uB2C8\uB2E4 :</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n          </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: '%%ecommerceName%% 에게서 연락을 왔습니다',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uC5F0\uB7ED\uC11C</strong><br><br>\n  <span style=\"font-size:15px;\">\uC774\uB984: %%anonymousFirstName%%<br>\uC131\uC528: %%anonymousLastName%%<br>\uC774\uBA54\uC77C: %%anonymousEmail%%<br>\uD589\uB4DC\uD3F0: %%anonymousPhone%%<br>\uC815\uBCF4\uB97C \uC870\uD68C:  %%queryMotive%%<br>\uC18C\uC2DD\uB0B4\uC6A9: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: '제품의관련한문제',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong>\uC9C8\uBB38\uB300\uD55C</strong><br><br>\n  <span style=\"font-size:15px;\">\uC774\uB984: %%anonymousFirstName%%<br>\uC131\uC528: %%anonymousLastName%%<br>\uC774\uBA54\uC77C: %%anonymousEmail%%<br>\uC804\uD654: %%anonymousPhone%%<br>\uBA54\uC2DC\uC9C0 \uB0B4\uC6A9: %%comments%%<br><br>\uC81C\uD488 \uC774\uB984: %%name%%<br>\uC81C\uD488 \uBAA8\uB378: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '주문을 확인하기',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uC8FC\uBB38\uC744 \uD655\uC778\uD558\uAE30 </strong><br><br>\n    <span style=\"font-size:15px;\">\uC548\uB155\uD5C8\uC138\uC694 %%firstName%% %%lastname%%,<br>\n\n      \uC8FC\uBB38\uC774 \uC62C\uBC14\uB974\uAC8C \uC2DD\uBCC4\uD558\uACE0 \uC131\uACF5\uC801\uC73C\uB85C \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.<br>\n      \uC8FC\uBB38 \uC815\uBCF4\uB294 pdf \uD615\uC2DD\uC73C\uB85C \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4 <br>\n      \uC8FC\uC758\uD558\uC138\uC694. \uB2F9\uC2E0\uC758 \uC8FC\uBB38\uC11C\uB97C \uBCF4\uACE0 \uD655\uC778\uD558\uC138\uC694\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                 \uC8FC\uBB38 \uBC88\uD638:<br>\n                  \uC8FC\uBB38 \uB0A0\uC9DC:<br>\n                  \uC8FC\uBB38 \uC0C1\uD0DC :<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>\uD655\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>\uC9C0\uBD88 \uACC4\uC815 :</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>\uBE44\uC1A1\uC8FC\uC18C:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\uC8FC\uBB38 \uC815\uBCF4</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC81C\uD488 \uC774\uB984 (\uBAA8\uD154)</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC218\uB7C9<</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uAC00\uACA9</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\uD560\uC778</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\uC18C\uACC4</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\uC18D\uC774\uAE30</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\uBC14\uC6B0\uCC98</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\uD569\uACC4</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\uC8FC\uBB38 \uD3C9\uAC00:</strong><br>\n                  %%orderComments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: '수신 거부한콘텐츠',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>\uCF58\uD150\uCE20\uB97C \uC218\uC2E0 \uAC70\uBD80\uD558\uAE30 </strong><br><br>\n    <span style=\"font-size:15px;\">\uC548\uB155\uD558\uC138\uC694<br><br>\uC6B0\uB9AC\uC758\uCF58\uD150\uCE20\uB97C  \uC131\uACF5\uC801\uC73C\uB85C \uC218\uC2E0 \uAC70\uBD80\uD588\uC2B5\uB2C8\uB2E4.<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: '당신의 친구는 신을  찬조할것입니다 ',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uCC2C\uC870\uC694\uAD6C</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \uC548\uB155\uD558\uC138\uC694,<br><br> %%firstName%% \uC5D0\uB2F9\uC2E0\uC744 \uCD08\uCCAD\uD574 \uAC00\uC785\uD569\uB2C8\uB2E4 <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\uD68C\uC6D0\uC774\uB418\uAE30 \uC704\uD574\uC11C\uB294 \uC5EC\uAE30 \uB85C\uADF8\uC778\uD558\uC138\uC694: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\uC9C0\uC9C0\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.<br><br>%%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '모집을완성되었습니다',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uB2F9\uC2E0\uC758\uBAA8\uC9D1\uC740     \uD55C\uC8FC\uBB38\uC744 \uC644\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4,\uC990\uAE30\uC2ED\uC2DC\uC624!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \uC548\uB155\uD558\uC138\uC694,<br><br>\uB529\uC2E0\uC758\uCE5C\uAD6C\uB294 \uD55C\uC8FC\uBB38\uC744 \uC644\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4,\uB2E4\uC74C \uC8FC\uBB38\uC5D0\uC11C (     %)\uD560\uC778\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4<br><br>\uB2E4\uC74C\uC8FC\uBB38\uC5D0  \uD560\uC778\uC774 \uC790\uB3D9\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4<br><br>\uC9C0\uC9C0\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: '반품 요청 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uBC18\uD488 \uC694\uCCAD \uC815\uBCF4</strong><br><br>\n    <span style=\"font-size:15px;\">\uC5EC\uBCF4\uC138\uC694 %firstName% %lastName%, <br><br>\uD658\uBD88 \uC694\uCCAD\uC744 \uD655\uC778\uD558\uAC8C\uB418\uC5B4 \uAE30\uC069\uB2C8\uB2E4.<br><br>\uC8FC\uBB38 \uBC88\uD638: %%orderNumber%%<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: '%%ecommerceName%% 상담',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uB108 \uC1FC\uD551 \uCE74\uD2B8\uAC00 \uADF8\uB9AC\uC6CC.</strong><br><br>\n    <span style=\"font-size:15px;\">\uB2D8 \uC548\uB155\uD558\uC138\uC694 %firstName% %lastName%, <br><br>\uC800\uD76C \uD648\uD398\uC774\uC9C0\uC5D0 \uB9C8\uC9C0\uB9C9 \uCC3E\uC544\uBCFC\uB5BC \uB2E4\uC74C\uC0C1\uD488\uC744 \uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB193\uC558\uC2B5\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uC8FC\uBB38\uC744 \uC644\uC131\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30 \uD074\uB9AD\uD558\uC138\uC694: <br><br>\n    <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">\uC1FC\uD551 \uCE74\uD2B8</a>\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB3CC\uB77C\uAC00\uAE30<br><br>%%ecommerceName%% \uD300</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\uC1FC\uD551 \uCE74\uD2B8:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC81C\uD488 \uC774\uB984 (\uBAA8\uD154)</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uC218\uB7C9</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\uAC00\uACA9</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                      </tr>\n                  </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n             </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '이메일 확인 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Email verification</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \uC5EC\uBCF4\uC138\uC694 %firstName% %lastName%,<br><br>%%ecommerceURL%% \uC5D0 \uB4F1\uB85D \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. , \uC804\uC790 \uBA54\uC77C \uACC4\uC815\uC744 \uD655\uC778\uD558\uAE30 \uC704\uD574 \uB9C1\uD06C\uB97C \uB530\uB974\uC2ED\uC2DC\uC624 : <a href=\"%verifyLink%\" style=\"color:#000;\">\uC5EC\uAE30\uB97C \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624</a>.<br><br>\uC6B0\uB9AC\uB294 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\uC5D0 \uB2F9\uC2E0\uC744\uBCF4\uACE0 \uAE30\uB300\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: '계정 활성화 됨 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\uACC4\uC815 \uD65C\uC131\uD654 \uB428</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \uC5EC\uBCF4\uC138\uC694 %firstName% %lastName%,<br><br>\n      \uC6B0\uB9AC\uB294 %%ecommerceURL%%\uC5D0\uC11C \uACE0\uAC1D \uACC4\uC815\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uD65C\uC131\uD654\uB418\uC5C8\uC74C\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.<br><br>\uC774 \uC81C\uC5B4\uD310\uC5D0 \uC561\uC138\uC2A4\uD558\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uBAA8\uB4E0 \uC138\uBD80 \uC815\uBCF4\uB97C\uBCF4\uACE0 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <a href=\"%%ecommerceURL%%\" style=\"color:#000\">\uD504\uB85C\uD544 \uC218\uC815</a><br><br>\uACE7 \uB9CC\uB098 \uBD59\uAE30\uB97C \uBC14\uB78D\uB2C8\uB2E4. <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>The %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-lo.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-lo.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_LO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_LO", function() { return LANGUAGE_LO; });
// v3 file template
var LANGUAGE_LO = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-mn.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-mn.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_MN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_MN", function() { return LANGUAGE_MN; });
// v3 file template
var LANGUAGE_MN = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-nl.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-nl.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_NL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_NL", function() { return LANGUAGE_NL; });
// v3 file template
var LANGUAGE_NL = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-pl.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-pl.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_PL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_PL", function() { return LANGUAGE_PL; });
// v3 file template
var LANGUAGE_PL = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-pt.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-pt.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_PT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_PT", function() { return LANGUAGE_PT; });
// v3 file template
var LANGUAGE_PT = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n",
    },
    footer: {
        html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para mais informa\u00E7\u00F5es, leia nossa %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Bem-vindo a %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Bem-vindo a %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n     Ol\u00E1 %%firstName%%,<br><br>\n      Temos o prazer de confirmar a cria\u00E7\u00E3o da sua conta de cliente em %%ecommerceURL%%.<br><br>\n      Recomendamos-lhe que guarde este e-mail com os seus dados de acesso \u00E0 nossa loja online, de maneira a que a sua pr\u00F3xima compra seja mais f\u00E1cil e r\u00E1pida.  <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      A equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para mais informa\u00E7\u00F5es, leia nossa %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Anular subscri\u00E7\u00E3o</span></a>\n      <span style=\"color:#000;font-size:10px;\">do boletim informativo</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Baixa em %%ecommerceName%%',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirma\u00E7\u00E3o de conta exclu\u00EDda</strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>Confirmamos que a sua conta foi eliminada da nossa base de dados.\n    Esperamos por si em <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>.<br><br>A equipa  de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a></span>\n  </td>\n</tr>\n\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Recordar a password %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Lembrar senha</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E1, %firstName% %lastName%,<br><br>\n      Conforme solicitado durante sua recente visita a %%ecommerceName%%, aqui est\u00E1 seu endere\u00E7o de acesso \u00E0 \u00E1rea de recupera\u00E7\u00E3o de senha:<br><br>\n      <a href=\"%%lostPasswordLink%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">Clique aqui para recuperar a senha </a> <br> <br>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Este link s\u00F3 ser\u00E1 v\u00E1lido por 24 horas ap\u00F3s o momento de sua entrega. <br> <br>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Esperamos v\u00EA-lo em breve em <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>. <br> <br>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Atenciosamente, a equipe de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Modificação de password %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Modifica\u00E7\u00E3o de password</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E1  %%firstName%% %%lastName%%,<br><br>\n      Confirmamos que a sua password foi modificada..<br><br>\n      Recomendamos-lhe que conserve este email com os seus dados para que a sua futura compra seja mais f\u00E1cil e r\u00E1pida. <br><br>\n      Esperamos por si em  <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">%%ecommerceName%%</a>.<br><br>\n      A equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Subscrição Newsletter %%ecommerceName%%',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n  <strong> Assinatura da newsletter </strong> <br> <br>\n     <span style = \"font-size: 15px;\">\n       Ol\u00E1. <br> <br>\n       Obrigado por se inscrever em nossa newsletter. Em breve voc\u00EA receber\u00E1 informa\u00E7\u00F5es sobre atividades, not\u00EDcias sobre nossa empresa e novidades sobre produtos e promo\u00E7\u00F5es. <br> <br>\n       Esperamos v\u00EA-lo em breve em <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                Para mais informa\u00E7\u00F5es, leia nossa %%privacy%% e %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">Anular subscri\u00E7\u00E3o</span></a>\n      <span style=\"color:#000;font-size:10px;\">do boletim informativo</span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% Recomende os seus produtos preferidos %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomenda\u00E7\u00E3o da lista de desejos</strong><br><br>\n    <span style=\"font-size:15px;\">\n      O seu amigo %%anonymousName%% (%%anonymousEmail%%) envia-lhe os seus produtos preferidos.<br><br>\n     Se necessitar de mais informa\u00E7\u00F5es sobre este produto, pode contactar-nos em <a href=\"%%ecommerceURL%%\" style=\"color:#000\"> %%ecommerceName%% </a> <br> <br>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Atenciosamente, a equipe de %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productos recomendados</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Mensaje de tu amigo/a:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% recomenda-lhe um produto de  %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Recomenda\u00E7\u00E3o de produto</strong><br><br>\n    <span style=\"font-size:15px;\">\n     O seu amigo %%anonymousName%% (%%anonymousEmail%%) envia-lhe os seus produtos preferidos.<br><br>\n     Se necessitar de mais informa\u00E7\u00F5es sobre este produto, pode contactar-nos em <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a> <br> <br>\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Atenciosamente, a equipe de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Productos recomendados</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Mensaje de tu amigo/a:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Contacto Geral de %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Contacto Geral</strong><br><br>\n    <span style=\"font-size:15px;\">Nome: %%anonymousFirstName%%<br>\n    Apelidos: %%anonymousLastName%%<br>\n    Email: %%anonymousEmail%%<br>\n    Telefone: %%anonymousPhone%%<br>\n    Motivo da consulta:  %%queryMotive%%<br>\n    Mensagem: %%comments%%<br></span>\n  </td>\n</tr>\n\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Dúvida sobre um produto %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>D\u00FAvida sobre um produto</strong><br><br>\n    <span style=\"font-size:15px;\"Nome: %%anonymousFirstName%%<br />\n    Apelidos: %%anonymousLastName%%<br />\n    Email: %%anonymousEmail%%<br />\n    Telefone: %%anonymousPhone%%<br />\n    Mensagem: %%comments%%<br />\n    <br />\n    Nome Produto: %%name%%<br />\n    Refer\u00EAncia Produto: %%sku%%</span>\n  </td>\n</tr>\n\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Confirmação pedido %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Confirma\u00E7\u00E3o pedido</strong><br><br>\n    <span style=\"font-size:15px;\">Confirmamos que o seu pedido n\u00FAmero %%orderNumber%% foi processado correctamente.  O total \u00E9 %%total%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  N\u00BA de pedido:<br>\n                  Fecha del pedido:<br>\n                  Estado:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>Confirmado</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>endere\u00E7o de cobran\u00E7a:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>Endere\u00E7o para envio:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalles del pedido</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Producto</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Cantidad</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Precio</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Descuentos</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Impuestos</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%% </span>\n                    </span>\n                  </td>\n                </tr>\n                <!--%%ifOrderBalanceCodes%%-->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Vales</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!--%%/ifOrderBalanceCodes%%-->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Total</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Comentarios:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Baixa da Subscrição %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Baixa da Subscri\u00E7\u00E3o</strong><br><br>\n    <span style=\"font-size:15px;\">Ol\u00E1,<br><br>Confirmamos que foi eliminado da nossa lista de subscri\u00E7\u00E3o.<br><br>A equipa de %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Seu amigo quer te patrocinar',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Pedido de patroc\u00EDnio</strong><br><br>\n    <span style=\"font-size:15px;\">Ol\u00E1,<br><br> %%firstName%% convida voc\u00EA a participar do  <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">%%ecommerceName%%</a><br><br>\n    Torne-se um membro e registrador aqui: : <a href=\"%%urlRegisterSponsorShip%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">%%ecommerceName%%</a><br><br>\n    Obrigado pelo seu apoio.<br><br>a equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a> </span>\n  </td>\n</tr>\n\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Seu patrocinador acabou de concluir um pedido: aproveite os benefícios',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Patroc\u00EDnio conclu\u00EDdo</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E1,<br><br>\n      Um de seus amigos acabou de fazer uma compra em nossa loja por mais de XX (\u20AC), portanto, oferecemos um desconto XX em seu pr\u00F3ximo pedido.<br><br>\n      O desconto entrar\u00E1 automaticamente em vigor no seu pr\u00F3ximo pedido.<br><br>\n      Obrigado por seu apoio.<br><br>\n      a equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a> </span>\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Pedido de devolução %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informa\u00E7\u00F5es sobre pedidos de devolu\u00E7\u00E3o</strong><br><br>\n    <span style=\"font-size:15px;\">Ol\u00E1, %firstName% %lastName%, <br><br>\n    Temos o prazer de confirmar o seu pedido de reembolso.<br><br>N\u00FAmero de encomenda: %%orderNumber%%<br><br> a equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a> </span></span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Encomenda incompleta %%ecommerceName%%',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Informa\u00E7\u00E3o incompleta do pedido</strong><br><br>\n    <span style=\"font-size:15px;\">Ol\u00E1 %firstName% %lastName%, <br><br> Em sua \u00FAltima visita \u00E0 nossa loja %%ecommerceName%% voc\u00EA colocou o (s) item (ns) seguinte (s) nas compras carrinho, mas voc\u00EA n\u00E3o concluiu o pedido. <br><br>\n    Clique <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">aqui </a> recuperar seu carrinho.<br><br>a equipa de %%ecommerceName%% </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Shopping Cart:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Product</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantity</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Price</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Confirmação de e-mail',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Verifica\u00E7\u00E3o de e-mail</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E1 %firstName% %lastName%,<br><br>\n      Obrigado por se registar em  %%ecommerceURL%%. Por favor, siga o link para verificar sua conta de e-mail: <a href=\"%verifyLink%\"  style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">Clique aqui</a>.<br><br>\n      Estamos ansiosos para v\u00EA-lo em <a href=\"%%ecommerceURL%%\"  style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">%%ecommerceName%%</a>.<br><br>\n      a equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Conta ativada - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Conta ativada</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E0 %firstName% %lastName%,<br><br>\n      Temos o prazer de informar que sua conta de cliente em %%ecommerceURL%% foi ativada com sucesso.<br><br>\n      Voc\u00EA pode visualizar e modificar todos os seus detalhes a qualquer momento acessando este painel de controle: <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> Edite seu perfil </a><br><br>\n      We hope to see you soon in <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\">%%ecommerceName%%</a>.<br><br>\n       A equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Disponível em estoque',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Estoque dispon\u00EDvel do produto <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Ol\u00E0,<br><br>O artigo que voc\u00EA quer tanto j\u00E1 est\u00E1 dispon\u00EDvel!</span>\n    <span style=\"font-size:15px;\">\n       Gostar\u00EDamos de lembrar que este e-mail fornece orienta\u00E7\u00F5es sobre a disponibilidade deste artigo e depende de muitos fatores (pessoas interessadas, unidades dispon\u00EDveis).\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Envi\u00E1mos este email a todos os clientes interessados no artigo, pelo que \u00E9 poss\u00EDvel esgotar-se muito em breve.<br><br>\n      A equipa  de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Nova postagem no blog% ecommerceName%!',
            html: "\n<!-- %loop% -->\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    Abaixo voc\u00EA pode ler os \u00FAltimos artigos publicados em <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>Read More!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Novo comentário sobre %%postName%% - %%blogName%%',
            html: "\n<tr>\n <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    H\u00E1 um novo coment\u00E1rio na postagem <a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n          %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>Leia mais!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Bem-vindo ao %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Bem-vindo a <a href=\"%%blogUrl%%\"  style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Ol\u00E0,<br><br>\n      Obrigado por sua inscri\u00E7\u00E3o em nosso blog. Em breve voc\u00EA receber\u00E1 novos posts por e-mail, informa\u00E7\u00F5es de recursos e produtos e promo\u00E7\u00F5es mais quentes.<br><br>\n      Espero ver voc\u00EA em breve em<a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>  A equipa de <a href=\"%%ecommerceURL%%\" style=\"color: #2a3a4a;text-decoration:none;font-weight:bolder;\"> %%ecommerceName%% </a>\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Subscrição de Ações',
            html: "\n<tr>\n  <td style=\"padding: 20px 35px 20px 35px;color: #2a3a4a;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Assinatura de estoque de produtos <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Ol\u00E0,<br><br>Voc\u00EA se inscreveu nos an\u00FAncios de a\u00E7\u00F5es da %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">Caso recebamos este artigo novamente iremos notific\u00E1-lo imediatamente para que ele n\u00E3o escape.<br><br>Atenciosamente, a equipe de %% ecommerceName %%</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-ro.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ro.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_RO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_RO", function() { return LANGUAGE_RO; });
// v3 file template
var LANGUAGE_RO = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-ru.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-ru.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_RU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_RU", function() { return LANGUAGE_RU; });
// v3 file template
var LANGUAGE_RU = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n",
    },
    footer: {
        html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0438 %%privacy%% \u0438 %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Добро пожаловать на %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 %firstName% %lastName%,<br><br>\n      Nos complace confirmarte la creaci\u00F3n de tu cuenta de cliente en %%ecommerceURL%%.<br><br>\n      \u041C\u044B \u0440\u0430\u0434\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u0438 \u043F\u0430\u0440\u043E\u043B\u044C, \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E \u0441\u0432\u043E\u0438\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0438 \u0434\u0440\u0443\u0433\u0443\u044E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.<br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0438 %%privacy%% \u0438 %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439</span></a>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Удаление аккаунта - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430</strong><br><br>\n    <span style=\"font-size:15px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439,<br><br>\u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043D\u0435\u0434\u0430\u0432\u043D\u0435\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F %%ecommerceName%% \u043C\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F %%email%% \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u0437 \u043D\u0430\u0448\u0435\u0439 \u0431\u0430\u0437\u044B \u0434\u0430\u043D\u043D\u044B\u0445.<br><br>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Восстановление пароля - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 %firstName% %lastName%,<br><br>\n      \u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u043C \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u043D\u0435\u0434\u0430\u0432\u043D\u0435\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F %%ecommerceName%%, \u0432\u0430\u0448 \u0430\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0437\u043E\u043D\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u043E\u043B\u044F:<br><br>\n      <a href=\"%%lostPasswordLink%%\" style=\"color:#000\">\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0437\u0434\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</a><br><br>\n      \u042D\u0442\u0430 \u0441\u0441\u044B\u043B\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24 \u0447\u0430\u0441\u043E\u0432 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438.<br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Изменение пароля на %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0421\u043C\u0435\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 %%firstName%% %%lastName%%,<br><br>\n      \u041C\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u043C, \u0447\u0442\u043E \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D.<br><br>\n      \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0438 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0434\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.<br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Подписка на рассылку %%ecommerceName%% ',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u041F\u0440\u0438\u0432\u0435\u0442<br><br>\n      \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u043D\u0430\u0448\u0443 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443. \u0412\u0441\u043A\u043E\u0440\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F\u0445, \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0438 \u0430\u043A\u0446\u0438\u044F\u0445.<br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n      <tr>\n        <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n          <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                    <!-- %%/Pages-501-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                    <!-- %%/Banners-502-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td align=\"center\" >\n                <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                  <tr>\n                    <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                    <!-- %%/Pages-503-Loop%% -->\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n              <!-- %%/Pages-504-Loop%% -->\n            </tr>\n            <tr>\n              <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                \u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0447\u0442\u0438\u0442\u0435 \u043D\u0430\u0448\u0438 %%privacy%% \u0438 %%termsOfUse%%.\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n    <!--[if (gte mso 9)|(IE)]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;padding:10px;\">\n      <a href=\"%linkDeleteSubscription%\" style=\"color: #000;text-decoration: underline;font-size:10px;line-height:13px;\"><span color=\"#000\">\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439</span></a>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% рекомендует Вам понравившиеся товары %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0412\u0430\u0448 \u0434\u0440\u0443\u0433 %%anonymousName%% (%%anonymousEmail%%) \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u0430\u043C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u0441 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C.<br><br>\n      \u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u044D\u0442\u043E\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u043F\u0440\u043E\u0434\u0443\u043A\u0442</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0446\u0435\u043D\u0430</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u0440\u0443\u0433\u0430:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% рекомендует Вам товары на %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 %%anonymousName%% (%%anonymousEmail%%) \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u0430\u043C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u0441 \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u0442\u044C. <br> <br>\n      \u0415\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E\u0431 \u044D\u0442\u043E\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0435, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438 \u043F\u043E <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u043F\u0440\u043E\u0434\u0443\u043A\u0442</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0446\u0435\u043D\u0430</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0434\u0440\u0443\u0433\u0430:</strong><br>\n                  %%comments%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Контактные данные %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435</strong><br><br>\n    <span style=\"font-size:15px;\">\u0418\u043C\u044F: %%anonymousFirstName%%<br>E-mail: %%anonymousEmail%%<br>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: %%anonymousPhone%%<br>\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441:  %%queryMotive%%<br>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438e: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Вопрос о товарах на %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0417\u0430\u043F\u0440\u043E\u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430</strong><br><br>\n    <span style=\"font-size:15px;\">\u0418\u043C\u044F: %%anonymousFirstName%%<br>\u0424\u0430\u043C\u0438\u043B\u0438\u044F: %%anonymousLastName%%<br>E-mail: %%anonymousEmail%%<br>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: %%anonymousPhone%%<br>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: %%comments%%<br><br>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430: %%name%%<br>\u0410\u0440\u0442\u0438\u043A\u0443\u043B: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Подтверждение заказа - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</strong><br><br>\n    <span style=\"font-size:15px;\">\u0411\u043E\u043B\u044C\u0448\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u043A \u043D\u0430\u043C. \u0412\u0430\u0448\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430. \u041D\u0438\u0436\u0435 \u043C\u044B \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  \u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430:<br>\n                  \u0414\u0430\u0442\u0430 \u0437\u0430\u043A\u0430\u0437\u0430:<br>\n                  \u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430:<br>\n                </td>\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441:</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Detalles del pedido</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0422\u043E\u0432\u0430\u0440</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0426\u0435\u043D\u0430</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u0421\u043A\u0438\u0434\u043A\u0438</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0438\u0442\u043E\u0433</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u041D\u0430\u043B\u043E\u0433\u0438</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u0412\u0430\u0443\u0447\u0435\u0440\u044B</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u041E\u0431\u0449\u0435\u0435</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td bgColor=\"#f4f4f4\">\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td style=\"padding: 15px 0px 15px 0px;\">\n                  %%textToEmail%%\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Отказ от рассылок %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A</strong><br><br>\n    <span style=\"font-size:13px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,<br><br>\u0412\u0430\u0448 \u043E\u0442\u043A\u0430\u0437 \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D.<br>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br><br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Приглашение Вашего друга',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0412\u0430\u0448\u0435\u0433\u043E \u0434\u0440\u0443\u0433\u0430</strong><br><br>\n    <span style=\"font-size:13px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,<br><br>\n    %%firstName%% \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u0442 \u0432\u0430\u0441 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    \u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u0447\u043B\u0435\u043D\u043E\u043C \u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0437\u0434\u0435\u0441\u044C: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443.<br><br>\n    \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Ваш друг сделал покупку на нашем сайте. Вам скидка!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0412\u0430\u0448 \u0434\u0440\u0443\u0433 \u0441\u0434\u0435\u043B\u0430\u043B \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435. \u0412\u0430\u043C \u0441\u043A\u0438\u0434\u043A\u0430!</strong><br><br>\n    <span style=\"font-size:13px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,<br><br>\n    \u041E\u0434\u0438\u043D \u0438\u0437 \u0412\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439 \u0441\u0434\u0435\u043B\u0430\u043B \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u043D\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435 \u043D\u0430 \u0441\u0443\u043C\u043C\u0443 XX (\u20AC), \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0412\u0430\u043C \u0441\u043A\u0438\u0434\u043A\u0443 \u043D\u0430 XX \u043F\u0440\u0438 \u0412\u0430\u0448\u0435\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0435.<br>\n    \u0421\u043A\u0438\u0434\u043A\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043D\u0430 \u043F\u0440\u0438 \u0432\u0430\u0448\u0435\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0435. <br><br>\n    \u041D\u0435 \u0437\u0430\u0431\u044B\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u0435\u0449\u0430\u0442\u044C \u043D\u0430\u0441 \u043D\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Запрос на возврат  %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0435 \u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442</strong><br><br>\n    <span style=\"font-size:13px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,% firstName %% lastName%,<br><br>\u041C\u044B \u0440\u0430\u0434\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442.<br><br>\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043A\u0430\u0437\u0430: %%orderNumber%%<br><br>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Нужна помощь на %%ecommerceName%%?',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u043C \u0437\u0430\u043A\u0430\u0437\u0435</strong><br><br>\n    <span style=\"font-size:15px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435 %%firstName%% %lastName%, <br><br>\u041F\u0440\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u043D\u0430\u0448\u0435\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0432\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443, \u043D\u043E \u043D\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u0437\u0430\u043A\u0430\u0437.<br><br>\n    <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">\u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0441\u044E\u0434\u0430</a> \u0435\u0441\u043B\u0438 \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0437\u0430\u043A\u0430\u0437. <br><br>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u041D\u0435\u043F\u043E\u043B\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0422\u043E\u0432\u0430\u0440</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u0426\u0435\u043D\u0430</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: 'Уведомление оператора связи',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Подтверждение аккаунта - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong> \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B </strong> <br> <br>\n    <span style = \"font-size: 13px;\">\n      \u041F\u0440\u0438\u0432\u0435\u0442% firstName %% lastName%, <br> <br>\n      \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u0432 %% ecommerceURL %%. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C, \u043D\u0430\u0436\u0430\u0432 <a href=\"%verifyLink%\" style=\"color:#000;\">\u0437\u0434\u0435\u0441\u044C</a>.<br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n\u00A0\u00A0\u00A0\u00A0 </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Активация аккаунта - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430</strong><br><br>\n    <span style=\"font-size:13px;\"> \n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, %%firstName%% %%lastName%%,<br><br>\n      \u041C\u044B \u0440\u0430\u0434\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u0412\u0430\u043C, \u0447\u0442\u043E \u0432\u0430\u0448\u0430 \u0443\u0447\u0435\u0442\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 %%ecommerceURL%% \u0431\u044B\u043B\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0430.<br><br>\n      \u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0432\u0441\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043A\u0430\u0441\u0430\u044E\u0449\u0443\u044E\u0441\u044F \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438, \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F: <a href=\"%%ecommerceURL%%\" style=\"color:#000\"> \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C</a><br><br>\n      \u041C\u044B \u043D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0432\u0441\u043A\u043E\u0440\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u043D\u0430 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u041A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Доступный запас',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u0422\u043E\u0432\u0430\u0440 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438 \u043D\u0430 \u0441\u043A\u043B\u0430\u0434\u0435 <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,<br><br>\u0421\u0442\u0430\u0442\u044C\u044F, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0442\u0430\u043A \u0445\u043E\u0442\u0435\u043B\u0438, \u0442\u0435\u043F\u0435\u0440\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430!</span>\n    <span style=\"font-size:15px;\">\n      \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C, \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u043C \u043F\u0438\u0441\u044C\u043C\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043C\u043D\u043E\u0433\u0438\u0445 \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 (\u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043B\u0438\u0446, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0435\u0434\u0438\u043D\u0438\u0446). <br>\n      \u041C\u044B \u0440\u0430\u0437\u043E\u0441\u043B\u0430\u043B\u0438 \u044D\u0442\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0432\u0441\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C, \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0432 \u044D\u0442\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0435\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0435 \u0445\u0432\u0430\u0442\u0438\u0442\u044C.<br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: 'Новая статья в блоге %ecommerceName%!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    \u041D\u0438\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438, \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432 <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435!</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Новый комментарий в %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    \u041A\u0442\u043E-\u0442\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u043D\u0430 \u0441\u0442\u0430\u0442\u044C\u044E \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n                  %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0447\u0442\u0435\u043D\u0438\u0435!</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Добро пожаловать в %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u00A1Bienvenido a <a href=\"%%blogUrl%%\" style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439,<br><br>\n      \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043D\u0430 \u043D\u0430\u0448 \u0431\u043B\u043E\u0433. \u0412\u0441\u043A\u043E\u0440\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438, \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u043A\u0438\u0434\u043A\u0430\u0445, \u0430\u043A\u0446\u0438\u044F\u0445, \u043F\u043E\u0434\u0430\u0440\u043A\u0430\u0445 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u0443\u044E \u0441 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430.<br><br>\n      \u041D\u0430\u0434\u0435\u0435\u043C\u0441\u044F \u0441\u043A\u043E\u0440\u043E \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0432<a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br>\n      \u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432 %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Подписка на акции',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u0430\u043A\u0446\u0438\u0438 <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hola,<br><br>\u0412\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0430\u043A\u0446\u0438\u044F\u0445 %name%</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">\u0415\u0441\u043B\u0438 \u043C\u044B \u0441\u043D\u043E\u0432\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u043C \u044D\u0442\u0443 \u0441\u0442\u0430\u0442\u044C\u044E, \u043C\u044B \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u043C \u0432\u0430\u0441, \u0447\u0442\u043E\u0431\u044B \u043E\u043D\u0430 \u043D\u0435 \u0443\u0441\u043A\u043E\u043B\u044C\u0437\u043D\u0443\u043B\u0430 \u043E\u0442 \u0432\u0430\u0441.<br><br>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C, \u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432 %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-sk.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-sk.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_SK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_SK", function() { return LANGUAGE_SK; });
// v3 file template
var LANGUAGE_SK = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-sv.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-sv.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_SV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_SV", function() { return LANGUAGE_SV; });
// v3 file template
var LANGUAGE_SV = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td >\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  F\u00F6r mer information l\u00E4s v\u00E5r %%privacy%% och %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Tack för din registrering på %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>V\u00E4lkommen till %%ecommerceName%%!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej  %firstName% %lastName%, <br><br>\n      Vi \u00E4r glada att informera dig om att ditt kundkonto i %%ecommerceURL%% har skapats.<br><br>\n      Med ditt kundkonto kan du nu uppdatera din profil och ditt l\u00F6senord, visa din orderhistorik och andra detaljer som kan vara av intresse f\u00F6r dig.<br><br>\n      Vi hoppas att vi ses snart <a href=\"%%ecommerceURL%%\" style=\"color: #000;\">%%ecommerceName%%</a><br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  F\u00F6r mer information l\u00E4s v\u00E5r %%privacy%% och %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Avbest\u00E4lla</a> <span style=\"color:#333;font-size:10px;\">nyhetsbrevet</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Avregistrering från - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Ditt konto \u00E4r nu borttaget</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej!<br><br>\n      Enligt din beg\u00E4ran efter ditt bes\u00F6k hos %%ecommerceName%%, kan vi nu bekr\u00E4fta att ditt anv\u00E4ndarkonto %%email%% har blivit borttaget fr\u00E5n v\u00E5r databas.<br><br>\n      Du \u00E4r alltid v\u00E4lkommen tillbaka till oss!<br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: 'Lösenordsåterställning - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>L\u00F6senords\u00E5terst\u00E4llning</strong><br><br>\n    <span style=\"font-size:15px;\">P\u00E5 beg\u00E4ran efter ditt senaste bes\u00F6k p\u00E5 %%ecommerceName%% s\u00E5 kommer h\u00E4r en l\u00E4nk d\u00E4r du kan \u00E5terst\u00E4lla ditt l\u00F6senord:<br><br><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">Klicka h\u00E4r</a><br><br>\n      Observera att koden \u00E4r giltig i 24 timmar efter du mottagit detta mail.<br><br>VHoppas vi syns snart i <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Byt lösenord på %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Byta l\u00F6senord</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej %%firstName%% %%lastName%%,<br><br>Vi vill informera dig om att ditt l\u00F6senord p\u00E5 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a> nu \u00E4r \u00E4ndrat.<br>\n      Skriv ner ditt l\u00F6senord f\u00F6r framtida bes\u00F6k.<br><br>\n      Vi syns i <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      Teamet bakom %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: 'Prenumeration på %%ecommerceName%% nyhetsbrev',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Prenumeration p\u00E5 v\u00E5rat nyhetsbrev</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej!<br><br>Tack f\u00F6r att du registrerat dig till v\u00E5rt nyhetsbrev.<br>\n      Snart kommer du f\u00E5 nyhetesbrev med information om dom hetaste produkterna, kampanjer och ny information.<br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  F\u00F6r mer information l\u00E4s v\u00E5r %%privacy%% och %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">Avbest\u00E4lla</a> <span style=\"color:#333;font-size:10px;\">nyhetsbrevet</span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% rekommenderar sina favoritprodukter %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Wishlist rekommendation</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Er v\u00E4n %%anonymousName%% (%%anonymousEmail%%) Tror att ni kan vara intresserad av denna/dessa produkter.<br><br>\n      Vill ni ha mer information om denna/dessa produkter, v\u00E4nligen kontakta oss p\u00E5 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a><br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n          Rekommenderade produkter</span></td></tr>\n          <tr><td>&nbsp;</td></tr>\n          <tr>\n            <td style=\"vertical-align: top\">\n              <div style=\"padding: 0 0\">\n                <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                  <tbody>\n                    <tr>\n                      <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n\n                      <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Pris</td>\n                    </tr>\n                    <!-- %loop% -->\n                    <tr>\n                      <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                        <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                          <tr>\n                            <td style=\"padding: 10px 0px;\">\n                              <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                            </td>\n                            <td style=\"padding: 10px 0px;\">\n                              %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n\n                      <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                    </tr>\n                    <!-- %/loop% -->\n\n                  </tbody>\n                </table>\n\n              </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>Meddelande fr\u00E5n er v\u00E4n:</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n    </td>\n  </tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% rekommenderar sina favoritprodukter %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Product recommendation</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hello %%friendName%%,<br>Your friend %%anonymousName%% (%%anonymousEmail%%) thinks this item could be of your interest.<br><br>\n      If you need further information about this item you can contact us at <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td align=\"center\">\n            <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Recommended products</span>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Pris</td>\n                  </tr>\n\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>Your friend's personal message:</strong><br>\n                  %%comments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: 'Kontaktformulär från %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Kontaktformul\u00E4r</strong><br><br>\n    <span style=\"font-size:15px;\">\n      F\u00F6rnamn: %%anonymousFirstName%%<br>\n      Efternamn: %%anonymousLastName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefon: %%anonymousPhone%%<br>\n      Typ av fr\u00E5ga: %%queryMotive%%<br>\n      Meddelande: %%comments%%\n    </span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: 'Fråga ang produkt från %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Fr\u00E5ga om en produkt</strong><br><br>\n    <span style=\"font-size:15px;\">\n      F\u00F6rnamn: %%anonymousFirstName%%<br>\n      Efternamn: %%anonymousLastName%%<br>\n      Email: %%anonymousEmail%%<br>\n      Telefon: %%anonymousPhone%%<br>\n      Meddelande: %%comments%%<br><br>\n      Produktnamn: %%name%%<br>\n      Artikelnummer: %%sku%%\n    </span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: 'Orderbekräftelse - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n\tul {\n\t\tlist-style-type: none !important;\n\t\tpadding: 0 !important;\n\t\tmargin: 0 !important;\n\t}\n</style>\n<tr>\n\t<td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\t\t<strong>Orderbekr\u00E4ftelse fr\u00E5n %%ecommerceName%%</strong><br><br>\n\t\t<span style=\"font-size:15px;\">\n\t\t\tHej %%firstName%% %%lastname%%,<br>\n\n\t\t\tTack f\u00F6r att du handlar hos oss. Vi bekr\u00E4ftar h\u00E4rmed att er order har behandlats.<br>\n\t\t\tVi kommer att maila er n\u00E4r er order levereras. Vi bifogar \u00E4ven din order i den inkluderade pdf filen.<br><br>\n\t\t\tDin order\n\t\t</span>\n\t</td>\n</tr>\n<tr>\n\t<td style=\"padding: 0px 0px;\" align=\"center\">\n\t\t<table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n\t\t\t\t\t\t<table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n\t\t\t\t\t\t\t\t\tOrdernummer:<br>\n\t\t\t\t\t\t\t\t\tOrder datum:<br>\n\t\t\t\t\t\t\t\t\tStatus:<br>\n\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t<td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n\t\t\t\t\t\t\t\t\t<strong>%%orderNumber%% </strong><br>\n\t\t\t\t\t\t\t\t\t<strong>%%orderDate%%</strong><br>\n\t\t\t\t\t\t\t\t\t<strong>Bekr\u00E4ftad</strong><br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n\t\t\t\t\t\t<table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n\t\t\t\t\t\t\t\t\t<strong>Faktura adress:</strong><br>\n\t\t\t\t\t\t\t\t\t%%firstName%% %%lastName%%<br>\n\t\t\t\t\t\t\t\t\t%%address%% <br>\n\t\t\t\t\t\t\t\t\t%%zip%%  %%city%%<br>\n\t\t\t\t\t\t\t\t\t%%state%%<br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n\t\t\t\t\t\t\t\t\t<strong>Leveransadress:</strong><br>\n\t\t\t\t\t\t\t\t\t%%shippingFirstName%%  %%shippingLastName%% <br>\n\t\t\t\t\t\t\t\t\t%%shippingAddress%% <br>\n\t\t\t\t\t\t\t\t\t%%shippingZip%%  %%shippingCity%% <br>\n\t\t\t\t\t\t\t\t\t%%shippingState%% <br>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr><td>&nbsp;</td></tr>\n\t\t\t\t<tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Orderdetaljer</span></td></tr>\n\t\t\t\t<tr><td>&nbsp;</td></tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td style=\"vertical-align: top\">\n\t\t\t\t\t\t<div style=\"padding: 0 0\">\n\t\t\t\t\t\t\t<table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Antal</td>\n\t\t\t\t\t\t\t\t\t\t<td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Pris</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<!-- %loop% -->\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t\t<table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 10px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 10px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"font-size: 10px;\">%productOptions%</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<!-- %/loop% -->\n\n\t\t\t\t\t\t\t\t\t<!-- %ifOrderGifts% -->\n\t\t\t\t\t\t\t\t\t<!-- %giftsLoop% -->\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t\t<table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 10px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"padding: 10px 0px;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n\t\t\t\t\t\t\t\t\t\t<td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<!-- %/giftsLoop% -->\n\t\t\t\t\t\t\t\t\t<!-- %/ifOrderGifts% -->\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>%%shippingMethodWithPrice%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>%%paymentMethodPrice%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- %%ifOrderDiscount%% -->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Discount</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>- %%orderDiscounts%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- %%/ifOrderDiscount%% -->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Subtotal</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>%%orderTotalWithoutTaxes%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Taxes</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>%%orderTaxes%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- %%ifOrderBalanceCodes%% -->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">Vouchers</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>- %%orderBalanceCodes%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- %%/ifOrderBalanceCodes%% -->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">Totalt</td>\n\t\t\t\t\t\t\t\t\t<td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t<span>%%total%%</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr><td>&nbsp;</td></tr>\n\t\t\t\t<!-- %%ifComments%% -->\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<strong>Kommentarer:</strong><br>\n\t\t\t\t\t\t\t\t\t%%orderComments%%\n\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<!-- %%/ifComments%% -->\n\t\t\t\t<tr><td>&nbsp;</td></tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgColor=\"#f4f4f4\">\n\t\t\t\t\t\t<table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td style=\"padding: 15px 0px 15px 0px;\">\n\t\t\t\t\t\t\t\t\t%%textToEmail%%\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: 'Avregistrering från nyhetsbrev - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Avregistrering nyhetsbrev</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej<br><br>\n      Din avregistrering \u00E4r nu slutf\u00F6rd.<br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: 'Din vän vill tipsa dig om något',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <strong>Sponsringsf\u00F6rfr\u00E5gan</strong><br><br>\n    <span style=\"font-size:15px;\">Hej,<br><br> %%firstName%% bjuder in dig till <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\n    Registrera dig som medlem h\u00E4r: <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\n    Tack f\u00F6r din support.<br><br>De %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: 'Din sponsring blev precis utförd: njuta av din belöning',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Sponsring</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej!<br><br>\n      En av din v\u00E4nner har just gjort ett k\u00F6p i v\u00E5r webshop f\u00F6r ett v\u00E4rde \u00F6ver XX (\u20AC), d\u00E4rf\u00F6r ger vi dig en XX rabatt p\u00E5 din n\u00E4sta order.<br><br>\n      Rabatten kommer automatiskt att dras av i din n\u00E4sta order.<br><br>\n      Tack f\u00F6r din insats.<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: 'Returförfrågan bekräftad %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Retur information</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej %firstName% %lastName%! <br><br>\n      Din returf\u00F6rfr\u00E5gan \u00E4r nu bekr\u00E4ftad.<br><br>\n      Order nummer: %%orderNumber%%<br><br><br>\n      Med v\u00E4nlig h\u00E4lsning<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: 'Ej slutförd beställning %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Ej slutf\u00F6rd best\u00E4llning</strong><br><br>\n    <span style=\"font-size:15px;\">Hej %firstName% %lastName%!<br><br>I ditt senaste bes\u00F6k hos oss  i %%ecommerceName%% lade du till f\u00F6ljande artiklar i din varukorg, men slutf\u00F6rde inte din best\u00E4llning.<br><br>\n    Klicka <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">h\u00E4r</a> f\u00F6r att \u00E5terg\u00E5 till din varukorg.<br><br><br>Med v\u00E4nliga h\u00E4lsningar<br><br>De %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">Varukorg:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Produkt</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Quantity</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">Pris</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: '%%ecommerceName%% - Leveransbesked',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">\n      Hej %firstName% %lastName%!<br><br>\n      Vi \u00E4r glada \u00F6ver att kunna meddela att er order %orderNumber% har skickats fr\u00E5n v\u00E5rt lager.<br><br>\n      Du kan f\u00F6lja din order via %shippingTypeName% med trackingnummer: %trackingNumber%<br><br><br>\n      Med v\u00E4nlig h\u00E4lsning<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n      "
        },
        17: {
            name: 'Verificación de correo',
            subject: 'Email bekräftelse - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Email bekr\u00E4ftelse</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej %firstName% %lastName%!<br><br>\n      Tack f\u00F6r att du registrerat dig p\u00E5 %%ecommerceURL%%. V\u00E4nligen f\u00F6lj l\u00E4nken f\u00F6r att verifiera din mailadress: <a href=\"%verifyLink%\" style=\"color:#000;\">Klicka h\u00E4r</a>.<br><br>\n      Vi syns p\u00E5 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: 'Konto skapat - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Konto skapat</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej %firstName% %lastName%,<br><br>\n      Ditt konto hos %%ecommerceURL%% har nu blivit skapat.<br><br>\n      Du kan granska och \u00E4ndra dina uppgifter n\u00E4rsomhelst via kontrollpanelen: <a href=\"%%ecommerceURL%%\" style=\"color:#000\">Redigera din profil</a><br><br>\n\n      V\u00E4lkommen till %%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: 'Lager tillgänglig',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Lager i lager av produkt <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">Hej,<br><br>Artikeln du vill ha s\u00E5 mycket \u00E4r redan tillg\u00E4nglig!</span>\n    <span style=\"font-size:15px;\">\n      Vi vill p\u00E5minna dig om att det h\u00E4r meddelandet inneh\u00E5ller v\u00E4gledning om tillg\u00E4ngligheten av den h\u00E4r artikeln och beror p\u00E5 m\u00E5nga faktorer (intresserade personer, tillg\u00E4ngliga enheter).<br>\n      Vi har skickat det h\u00E4r mailet till alla kunder som \u00E4r intresserade av artikeln, s\u00E5 det \u00E4r m\u00F6jligt att bli utmattad snart.<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: ' Nytt blogginlägg! - %ecommerceName%',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    H\u00E4r kan du l\u00E4sa dom senaste inl\u00E4ggen i <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>L\u00E4s mer.</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: 'Det finns en ny kommentar på %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    Det finns en ny kommentar p\u00E5 \"<a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n          %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>L\u00E4s mer.</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: 'Välkommen till %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>V\u00E4lkommen till <a href=\"%%blogUrl%%\"  style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\n      Hej,<br><br>\n      Tack f\u00F6r att du registrerade dig i v\u00E5r blogg.<br>\n      Snart kommer du f\u00E5 nya blogg inl\u00E4gg med information om dom hetaste produkterna, kampanjer och ny information.<br><br>\n      Vi syns p\u00E5 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br><br>\n      Med v\u00E4nliga h\u00E4lsningar<br><br>\n      De %%ecommerceName%% Team\n    </span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: 'Prenumeration av lager',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>Aktieabonnemang p\u00E5 produkt <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">Hej,<br><br>Du har prenumererat p\u00E5 %name% stock notices</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">Om vi f\u00E5r den h\u00E4r artikeln igen, meddelar vi dig omedelbart.<br><br>\n    Vi hoppas att vi ses snart <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>De %%ecommerceName%% Team</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-th.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-th.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_TH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_TH", function() { return LANGUAGE_TH; });
// v3 file template
var LANGUAGE_TH = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-tr.ts":
/*!*****************************************!*\
  !*** ./src/app/data/app-language-tr.ts ***!
  \*****************************************/
/*! exports provided: LANGUAGE_TR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_TR", function() { return LANGUAGE_TR; });
// v3 file template
var LANGUAGE_TR = {
    header: {
        html: ""
    },
    footer: {
        html: ""
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: '',
            html: ""
        },
        2: {
            name: 'Baja de usuarios',
            subject: '',
            html: ""
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '',
            html: ""
        },
        4: {
            name: 'Cambio de contraseña',
            subject: '',
            html: ""
        },
        5: {
            name: 'Registro de newsletter',
            subject: '',
            html: ""
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '',
            html: ""
        },
        7: {
            name: 'Recomendación de producto',
            subject: '',
            html: ""
        },
        8: {
            name: 'Contacto general',
            subject: '',
            html: ""
        },
        9: {
            name: 'Consulta de producto',
            subject: '',
            html: ""
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '',
            html: ""
        },
        11: {
            name: 'Baja de newsletter',
            subject: '',
            html: ""
        },
        12: {
            name: 'Apadrinamiento',
            subject: '',
            html: ""
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '',
            html: ""
        },
        14: {
            name: 'Petición devolución',
            subject: '',
            html: ""
        },
        15: {
            name: 'Pedido incompleto',
            subject: '',
            html: ""
        },
        16: {
            name: 'Notificación transportista',
            subject: '',
            html: ""
        },
        17: {
            name: 'Verificación de correo',
            subject: '',
            html: ""
        },
        18: {
            name: 'Cuenta activada',
            subject: '',
            html: ""
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '',
            html: ""
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '',
            html: ""
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '',
            html: ""
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '',
            html: ""
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '',
            html: ""
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/data/app-language-zho.ts":
/*!******************************************!*\
  !*** ./src/app/data/app-language-zho.ts ***!
  \******************************************/
/*! exports provided: LANGUAGE_ZHO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_ZHO", function() { return LANGUAGE_ZHO; });
// v3 file template
var LANGUAGE_ZHO = {
    header: {
        html: "\n<table width=\"100%\" bgcolor=\"#eee\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding:25px;background-color:#eee;padding-bottom:0px;\">\n\n  <tr>\n    <td>\n      <!--[if (gte mso 9)|(IE)]>\n        <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">\n          <tr>\n            <td>\n      <![endif]-->\n      <table bgcolor=\"#ffffff\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"width: 100%;max-width: 600px;\">\n\n        <tr>\n          <td bgcolor=\"#fff\" style=\"padding: 20px;\">\n            <table width=\"100%\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"text-align:center;\">\n              <tr>\n                <td>\n                  <a href=\"%%ecommerceURL%%\">\n                    <img src=\"%%imagesURL%%logoEmail.jpg\" width=\"210\" height=\"auto\" border=\"0\" alt=\"%%ecommerceName%%\" style=\"height: auto;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n\n          </td>\n        </tr>\n"
    },
    footer: {
        html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \u6709\u95DC\u66F4\u591A\u4FE1\u606F\uFF0C\u8ACB\u95B1\u8B80\u6211\u5011\u7684 %%privacy%% \u548C %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td align=\"center\" style=\"font-family: sans-serif;font-size: 14px;color: #ffffff;\">\n      <span style=\"color:#000;font-size:10px;\">&nbsp; </span>\n    </td>\n  </tr>\n</table>\n"
    },
    templates: {
        1: {
            name: 'Bienvenida',
            subject: 'Thank you for signup to %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6B61\u8FCE\u60A8\u767B\u9678&nbsp;%%ecommerceName%%</strong>\n    <br><br>\n    <span style=\"font-size: 15px;\">\u60A8\u597D %firstName% %lastName%,</span>\n    <br><br>\n    <span style=\"font-size: 15px;\">\u60A8\u7684\u9867\u5BA2\u8CEC\u865F\u5DF2\u6210\u529F\u5275\u5EFA\u3002</span>\n    <br><br>\n    <span style=\"font-size: 15px;\">\u8B1D\u8B1D\u60A8\u4F7F\u7528\u6211\u5011\u7684\u9867\u5BA2\u8CEC\u6236\uFF0C\u73FE\u5728\u60A8\u53EF\u4EE5\u5B8C\u5584\u60A8\u7684\u500B\u4EBA\u4E3B\u9801, \u5BC6\u78BC\uFF0C\u4E26\u67E5\u770B\u60A8\u7684\u8A02\u55AE\u4FE1\u606F\u548C\u5176\u4ED6\u60A8\u611F\u8208\u8DA3\u7684\u8A73\u60C5\u3002</span><div><span style=\"font-size: 15px;\"><br></span></div><div><span style=\"font-size: 15px;\">\u6211\u5011\u671F\u5F85\u80FD\u5728&nbsp;</span>\n    <a href=\"%%ecommerceURL%%\" style=\"font-size: 15px; color: rgb(0, 0, 0);\">%%ecommerceName%%</a>\n    <br><br>\n    <span style=\"font-size: 15px;\">%%ecommerceName%%</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \u6709\u95DC\u66F4\u591A\u4FE1\u606F\uFF0C\u8ACB\u95B1\u8B80\u6211\u5011\u7684 %%privacy%% \u548C %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">\u53D6\u6D88\u8A02\u95B1\u6642\u4E8B\u901A\u8A0A</a> <span style=\"color:#333;font-size:10px;\"></span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        2: {
            name: 'Baja de usuarios',
            subject: 'Unsubscribe - %%ecommerceName%%',
            html: "\n<tr>\n  <td class=\"innerpadding bodycopy borderbottom\" style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u786E\u8BA4\u5220\u9664\u8D26\u6237</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br>\u60A8\u5728\u8BBF\u95EE\u6211\u4EEC\u7684\u9875\u9762\u65F6\u63D0\u51FA\u7684\u6CE8\u9500\u8D26\u6237\u7533\u8BF7\u5DF2\u786E\u8BA4\uFF0C\u60A8\u4ECE\u6211\u4EEC\u7684\u6570\u636E\u5E93\u4E2D\u5220\u9664\u8D26\u6237\u90AE\u7BB1\u6210\u529F\u3002<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        3: {
            name: 'Recordarios de contraseña',
            subject: '恢复密码 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6062\u5FA9\u5BC6\u78BC</strong><br><br>\n    <span style=\"font-size:15px;\">\n    \u60A8\u5728\u700F\u89BD\u9801\u9762 %%ecommerceName%% \u7684\u6642\u5019\u9019\u662F\u60A8\u9032\u5165\u9801\u9762\u7684\u5BC6\u78BC\u6062\u5FA9\u90F5\u4EF6<br><br><a href=\"%%lostPasswordLink%%\" style=\"color:#000\">\u9EDE\u64CA\u6B64\u8655</a><br><br>\u8ACB\u8A18\u4F4F\u8A72\u7DB2\u5740\uFF0C\u8A72\u9A57\u8B49\u7DB2\u5740\u5C07\u6703\u5728\u90F5\u4EF6\u767C\u9001\u8D7724\u5C0F\u6642\u5167\u6709\u6548<br><br>\u6211\u5011\u671F\u5F85\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a> \u898B\u5230\u60A8<br><br>%%ecommerceName%%\n    </span>\n  </td>\n</tr>\n"
        },
        4: {
            name: 'Cambio de contraseña',
            subject: 'Change password on %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u4FEE\u6539\u5BC6\u7801</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D %%firstName%% %%lastName%%,<br><br>\u6B64\u5C01\u90AE\u4EF6\u901A\u77E5\u60A8\u7684\u8D26\u6237\u5BC6\u7801\u5DF2\u4FEE\u6539\u6210\u529F<br><br>\u786E\u8BA4\u6B64\u90AE\u4EF6\u4E3A\u5B89\u5168\u90AE\u4EF6\u4EE5\u4FDD\u62A4\u60A8\u7684\u8D26\u6237<br><br>\u6211\u4EEC\u671F\u5F85\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        5: {
            name: 'Registro de newsletter',
            subject: '%%ecommerceName%% 資訊',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u8A02\u95B1\u8CC7\u8A0A</strong><br><br>\n    <span style=\"font-size: 15px;\">\u60A8\u597D</span><br><br>\n    <span style=\"font-size: 15px;\">\u8B1D\u8B1D\u60A8\u8A02\u95B1\u6211\u5011\u7684\u8CC7\u8A0A\uFF0C\u6211\u5011\u6703\u70BA\u60A8\u767C\u9001\u6211\u5011\u7684\u516C\u53F8\u76F8\u95DC\u7684\u6700\u65B0\u52D5\u614B\uFF0C\u6D3B\u52D5\uFF0C\u71B1\u9580\u7522\u54C1\u548C\u4FC3\u92B7\u4FE1\u606F\u3002</span><br><br><span style=\"font-size: 15px;\">\u6211\u5011\u671F\u5F85\u80FD\u5728</span><a href=\"%%ecommerceURL%%\" style=\"font-size: 15px; color: rgb(0, 0, 0);\">%%ecommerceName%%</a><span style=\"font-size: 15px;\">&nbsp;\u898B\u5230\u60A8</span>\n  </td>\n</tr>\n",
            footer: {
                html: "\n        <tr>\n          <td bgcolor=\"#E8E8E8\" style=\"background-color: #E8E8E8;padding: 30px 30px 15px 30px;\">\n            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-501-Loop%% -->\n                      <td style=\"text-align: center;\">\n                        <a href=\"%%pageLink%%\" style=\"padding:6px 10px;color:#454545;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-decoration:none;\" target=\"%%pageTarget%%\"> %%pageName%% </a>\n                      </td>\n                      <!-- %%/Pages-501-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" style=\"padding: 12px 0 12px 0px;\">\n                  <table border=\"0\" cellspacing=\"8\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Banners-502-Loop%% -->\n                      <td width=\"30\" style=\"text-align: center;\">\n                        <a href=\"%%BannerLink%%\">\n                          <img src=\"%%BannerImage%%\" width=\"30\" height=\"auto\" alt=\"%%BannerAlt%%\" border=\"0\" style=\"height: auto;\">\n                        </a>\n                      </td>\n                      <!-- %%/Banners-502-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align=\"center\" >\n                  <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n                    <tr>\n                      <!-- %%Pages-503-Loop%% -->\n                      <td style=\"text-align: center; padding: 15px 25px 25px 25px;color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                        <span style=\"color:#999;font-family:Arial, sans-serif;font-size:14px;line-height:20px;\">\n                          %%pageContent%%\n                        </span>\n                      </td>\n                      <!-- %%/Pages-503-Loop%% -->\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <!-- %%Pages-504-Loop%% -->\n                <td align=\"center\" style=\"font-family:Arial, sans-serif;font-size: 13px;color: #454545;\">\n                  %%pageContent%%\n                </td>\n                <!-- %%/Pages-504-Loop%% -->\n              </tr>\n              <tr>\n                <td align=\"center\" heigth=\"50\" style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\">\n                  \u6709\u95DC\u66F4\u591A\u4FE1\u606F\uFF0C\u8ACB\u95B1\u8B80\u6211\u5011\u7684 %%privacy%% \u548C %%termsOfUse%%.\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n\n      </table>\n      <!--[if (gte mso 9)|(IE)]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding: 0 20px 20px 20px;color: #999;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n      <span style=\"font-family:Arial, sans-serif;font-size: 11px;color: #999;height:15px;\">\n        <a href=\"%linkDeleteSubscription%\" style=\"color: #333;text-decoration: underline;font-size:10px;line-height:13px;\">\u53D6\u6D88\u8A02\u95B1\u6642\u4E8B\u901A\u8A0A</a> <span style=\"color:#333;font-size:10px;\"></span>\n      </span>\n    </td>\n  </tr>\n</table>\n"
            }
        },
        6: {
            name: 'Recomendación de wishlist',
            subject: '%%anonymousName%% 收藏了喜欢的产品',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6536\u85CF\u63A8\u8350</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u7684\u597D\u53CB\u53D1\u9001\u4E86\u60A8\u53EF\u80FD\u611F\u5174\u8DA3\u7684\u4EA7\u54C1\u7ED9\u60A8\u3002<br><br>\u60A8\u82E5\u662F\u60F3\u4E86\u89E3\u66F4\u591A\u4EA7\u54C1\u54A8\u8BE2\u53EF\u4EE5\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a> \u8054\u7CFB\u6211\u4EEC<br><br>The %%ecommerceName%% Team</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n          \u4EA7\u54C1\u6B3E\u5F0F</span></td></tr>\n          <tr><td>&nbsp;</td></tr>\n          <tr>\n            <td style=\"vertical-align: top\">\n              <div style=\"padding: 0 0\">\n                <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                  <tbody>\n                    <tr>\n                      <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u6B3E\u5F0F</td>\n\n                      <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                    </tr>\n                    <!-- %loop% -->\n                    <tr>\n                      <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                        <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                          <tr>\n                            <td style=\"padding: 10px 0px;\">\n                              <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                            </td>\n                            <td style=\"padding: 10px 0px;\">\n                              %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n\n                      <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                    </tr>\n                    <!-- %/loop% -->\n\n                  </tbody>\n                </table>\n\n              </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>\u6765\u81EA\u597D\u53CB\u7684\u6D88\u606F \u8BC4\u8BBA</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n    </td>\n  </tr>\n"
        },
        7: {
            name: 'Recomendación de producto',
            subject: '%%anonymousName%% 产品推荐',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6635\u79F0 \u7ED9\u60A8\u63A8\u8350\u4EA7\u54C1</strong><br><br>\n    <span style=\"font-size:15px;\"> Hello %%friendName%%,<br>\u60A8\u7684\u670B\u53CB %%anonymousName%% (%%anonymousEmail%%) \u8BA4\u4E3A\u8FD9\u6B3E\u4EA7\u54C1\u662F\u4F60\u559C\u6B22\u7684\u7C7B\u522B <br><br>\u82E5\u4F60\u9700\u8981\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u60A8\u53EF\u4EE5\u8054\u7CFB\u6211\u4EEC\u3002 <a href=\"%%ecommerceURL%%\" style=\"color:#000 \">%%ecommerceName%%</a><br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\n          \u4EA7\u54C1\u6B3E\u5F0F</span></td></tr>\n          <tr><td>&nbsp;</td></tr>\n          <tr>\n            <td style=\"vertical-align: top\">\n              <div style=\"padding: 0 0\">\n                <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                  <tbody>\n                    <tr>\n                      <td width=\"80%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u6B3E\u5F0F</td>\n\n                      <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                    </tr>\n\n                    <tr>\n                      <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                        <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                          <tr>\n                            <td style=\"padding: 10px 0px;\">\n                              <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                            </td>\n                            <td style=\"padding: 10px 0px;\">\n                              %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            </td>\n                          </tr>\n                        </table>\n                      </td>\n\n                      <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                    </tr>\n\n\n                  </tbody>\n                </table>\n\n              </div>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n          <tr>\n            <td>\n              <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n                <tr>\n                  <td>\n                    <strong>\u6765\u81EA\u597D\u53CB\u7684\u63A8\u8350</strong><br>\n                    %%comments%%\n\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr><td>&nbsp;</td></tr>\n\n        </tbody>\n      </table>\n    </td>\n  </tr>\n"
        },
        8: {
            name: 'Contacto general',
            subject: '来自 %%ecommerceName%% 的联系',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u8054\u7CFB\u65B9\u5F0F</strong><br><br>\n    <span style=\"font-size:15px;\">\u540D\u5B57: %%anonymousFirstName%%<br>\u59D3\u6C0F: %%anonymousLastName%%<br>\u90AE\u7BB1: %%anonymousEmail%%<br>\u624B\u673A: %%anonymousPhone%%<br>\u67E5\u8BE2\u4FE1\u606F:  %%queryMotive%%<br>\u6D88\u606F\u5185\u5BB9: %%comments%%</span>\n  </td>\n</tr>\n"
        },
        9: {
            name: 'Consulta de producto',
            subject: '产品的相关问题 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u95EE\u9898\u5173\u4E8E </strong><br><br>\n    <span style=\"font-size:15px;\">\u540D\u5B57: %%anonymousFirstName%%<br>\u59D3\u6C0F: %%anonymousLastName%%<br>\u90AE\u7BB1: %%anonymousEmail%%<br>\u7535\u8BDD: %%anonymousPhone%%<br>\u6D88\u606F\u5185\u5BB9: %%comments%%<br><br>\u4EA7\u54C1\u540D\u79F0: %%name%%<br>\u4EA7\u54C1\u8D27\u53F7: %%sku%%</span>\n  </td>\n</tr>\n"
        },
        10: {
            name: 'Confirmación de pedido',
            subject: '訂單確認 - %%orderNumber%% - %%ecommerceName%%',
            html: "\n<style type=\"text/css\">\n  ul {\n    list-style-type: none !important;\n    padding: 0 !important;\n    margin: 0 !important;\n  }\n</style>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u78BA\u8A8D\u8A02\u55AE</strong><br><br>\n    <span style=\"font-size:15px;\">\u4EB2\u7231\u7684 %%firstName%% %%lastname%%,<br>\n      \u60A8\u7684\u8BA2\u5355\u5DF2\u786E\u8BA4\u5E76\u6B63\u786E\u5904\u7406\u6210\u529F\u3002<br>\n      \u5DF2\u5C06\u8BA2\u5355\u4FE1\u606F\u4EE5pdf\u7684\u683C\u5F0F\u53D1\u9001\u7ED9\u60A8\u3002 <br>\n      \u6CE8\u610F\u67E5\u6536\u5E76\u67E5\u770B\u60A8\u7684\u8BA2\u5355\u8BE6\u60C5\u3002\n    </span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"30%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  \u8BA2\u5355\u7F16\u53F7<br>\n                  \u8BA2\u5355\u65E5\u671F<br>\n                  \u8BA2\u5355\u72B6\u6001<br>\n                </td>\n\n                <td width=\"80%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>%%orderNumber%% </strong><br>\n                  <strong>%%orderDate%%</strong><br>\n                  <strong>\u5DF2\u786E\u8BA4</strong><br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td style=\"vertical-align: middle;font-family: sans-serif;\" align=\"right\">\n            <table width=\"100%\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"50%\" style=\"vertical-align: middle;background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-left:40px;\" >\n                  <strong>\u652F\u4ED8\u8D26\u53F7</strong><br>\n                  %%firstName%% %%lastName%%<br>\n                  %%address%% <br>\n                  %%zip%%  %%city%%<br>\n                  %%state%%<br>\n                </td>\n                <td width=\"50%\" style=\"vertical-align: middle; background:#E8E8E8;padding:15px 15px;line-height:20px;font-family: Arial, Helvetica, sans-serif;font-size:14px;color:#454545;padding-right:40px;\" >\n                  <strong>\u90AE\u5BC4\u5730\u5740</strong><br>\n                  %%shippingFirstName%%  %%shippingLastName%% <br>\n                  %%shippingAddress%% <br>\n                  %%shippingZip%%  %%shippingCity%% <br>\n                  %%shippingState%% <br>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u8BA2\u5355\u8BE6\u60C5</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u540D \uFF08\u6B3E\u5F0F\uFF09</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u6570\u91CF</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                            <div style=\"font-size: 10px;\">%productOptions%</div>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                  <!-- %ifOrderGifts% -->\n                  <!-- %giftsLoop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family:sans-serif;font-size:14px;vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\">&nbsp;</td>\n                  </tr>\n                  <!-- %/giftsLoop% -->\n                  <!-- %/ifOrderGifts% -->\n\n                </tbody>\n              </table>\n              <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" width=\"88%\" style=\"color:#454545;font-family:Arial, Helvetica, sans-serif;font-size:14px;\">\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%shipperName%%  %%shippingTypeName%%</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%shippingMethodWithPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">%%paymentMethod%% </td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%paymentMethodPrice%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u6298\u6263</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderDiscounts%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderDiscount%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u5C0F\u8A08</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTotalWithoutTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u7A05\u6536</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>%%orderTaxes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;\">\u512A\u60E0\u5238</td>\n                  <td height=\"32\" width=\"75\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;\">\n                    <span>\n                      <span>- %%orderBalanceCodes%%</span>\n                    </span>\n                  </td>\n                </tr>\n                <!-- %%/ifOrderBalanceCodes%% -->\n                <tr>\n                  <td height=\"32\" width=\"120\" bgColor=\"#f4f4f4\" style=\"vertical-align: middle;text-align:left;padding-left:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\u7E3D</td>\n                  <td height=\"32\" width=\"75\" bgColor=\"#f4f4f4\" style=\"text-align:right;padding-right:10px; border-bottom:1px solid #dcdcdc;font-weight:bold;\">\n                    <span>\n                      <span>%%total%%</span>\n                    </span>\n                  </td>\n                </tr>\n\n              </table>\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n        <!-- %%ifComments%% -->\n        <tr>\n          <td>\n            <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:16px;\">\n              <tr>\n                <td>\n                  <strong>\u8BA2\u5355\u8BC4\u8BBA</strong><br>\n                  %%orderComments%%\n\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <!-- %%/ifComments%% -->\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n        <td bgColor=\"#f4f4f4\">\n          <table width=\"88%\" align=\"center\" style=\"font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#454545;line-height:18px;\" cellspacing=\"0\" cellpadding=\"0\">\n            <tr>\n              <td style=\"padding: 15px 0px 15px 0px;\">\n                %%textToEmail%%\n              </td>\n            </tr>\n          </table>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        11: {
            name: 'Baja de newsletter',
            subject: '退订资讯 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u8D44\u8BAF\u9000\u8BA2</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br>\u60A8\u5DF2\u7ECF\u6210\u529F\u9000\u8BA2\u6211\u4EEC\u7684\u8D44\u8BAF\u3002<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        12: {
            name: 'Apadrinamiento',
            subject: '您的好友要赞助你',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u8D5E\u52A9\u8981\u6C42 </strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D<br><br> %%firstName%% \u540D\u5B57 \u9080\u8BF7\u60A8\u52A0\u5165 <a style=\"color:#000;\" href=\"%%ecommerceURL%%\">%%ecommerceName%%</a><br><br>\u6210\u4E3A\u5176\u4E2D\u4E00\u5458\u8BF7\u5728\u6B64\u6CE8\u518C:\n    <a href=\"%%urlRegisterSponsorShip%%\" style=\"color:#000;\">%%ecommerceName%%</a><br><br>\u8C22\u8C22\u60A8\u7684\u652F\u6301<br><br>%%ecommerceName%% </span>\n  </td>\n</tr>\n"
        },
        13: {
            name: 'Apadrinamiento completo',
            subject: '完成募集',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u60A8\u7684\u52DF\u96C6\u5DF2\u7ECF\u5B8C\u6210\u4E00\u4E2A\u8BA2\u5355\uFF0C\u4EAB\u53D7\u6536\u76CA\u5427\uFF01\u3000\u3000</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D,<br><br>\u60A8\u7684\u597D\u53CB\u5DF2\u5B8C\u6210\u4E86\u4E00\u4E2A\u8BA2\u5355\uFF0C\u60A8\u53EF\u4EE5\u5728\u4E0B\u4E00\u6B21\u7684\u8BA2\u5355\u4E2D\u4EAB\u53D7     \u6298\u6263\u3002<br><br>\u6298\u6263\u5C06\u4F1A\u81EA\u52A8\u4F7F\u7528\u5728\u60A8\u4E0B\u6B21\u7684\u8BA2\u5355\u3002<br><br>\u8C22\u8C22\u60A8\u7684\u652F\u6301\u3002<br><br>%%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        14: {
            name: 'Petición devolución',
            subject: '退貨請求 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u9000\u8CA8\u7533\u8ACB\u4FE1\u606F</strong><br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D %firstName% %lastName%, <br><br>\u6211\u5011\u5F88\u9AD8\u8208\u78BA\u8A8D\u60A8\u7684\u9000\u6B3E\u7533\u8ACB\u3002<br><br>\u8A02\u55AE\u865F: %%orderNumber%%<br><br> %%ecommerceName%%</span>\n  </td>\n</tr>\n"
        },
        15: {
            name: 'Pedido incompleto',
            subject: '來自的詢問 %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, Helvetica, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u60A8\u7684\u8CFC\u7269\u8ECA\u932F\u904E\u4E86\u60A8</strong><br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D %firstName% %lastName%, <br><br>\u5728\u60A8\u6700\u5F8C\u4E00\u6B21\u700F\u89BD\u6211\u5011\u7DB2\u9801\u5F8C\u5C07\u4EE5\u4E0B\u5546\u54C1\u653E\u5165\u8CFC\u7269\u8ECA\uFF0C\u4F46\u662F\u60A8\u6C92\u6709\u5B8C\u6210\u8A02\u55AE\u586B\u5BEB\u3002\u8ACB\u9EDE\u64CA\u9019\u88E1\uFF1A <br><br>\n    <a target=\"_blank\" href=\"%recoverOrderLink%\" style=\"color:#000;\">\u8CFC\u7269\u8ECA</a> \u8FD4\u56DE\u60A8\u7684\u8CFC\u7269\u8ECA.<br><br>%%ecommerceName%% \u5718\u968A</span>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 0px 0px;\" align=\"center\">\n    <table style=\"width: 100%; color: #000; font-family: sans-serif; font-size: 15px;border-collapse:collapse;\">\n      <tbody>\n\n\n        <tr><td>&nbsp;</td></tr>\n        <tr><td align=\"center\"><span style=\"font-family:Arial, Helvetica, sans-serif;font-size:18px;color:#454545;font-weight:bold;\">\u8CFC\u7269\u8ECA:</span></td></tr>\n        <tr><td>&nbsp;</td></tr>\n        <tr>\n          <td style=\"vertical-align: top\">\n            <div style=\"padding: 0 0\">\n              <table style=\"border-bottom:2px solid #dcdcdc;color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" width=\"88%\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\">\n                <tbody>\n                  <tr>\n                    <td width=\"60%\" height=\"32\" style=\"color:#454545;text-align: left; padding-left:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EA7\u54C1\u540D \uFF08\u6B3E\u5F0F\uFF09</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: center;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u6570\u91CF</td>\n                    <td width=\"20%\" height=\"32\" style=\"color:#454545;text-align: right; padding-right:10px;font-size:14px;font-family:Arial, Helvetica, sans-serif;font-weight:bold;\" bgColor=\"#F4F4F4\">\u4EF7\u683C</td>\n                  </tr>\n                  <!-- %loop% -->\n                  <tr>\n                    <td style=\"text-align: left;font-family:Arial, Helvetica, sans-serif;font-size:14px;border-bottom:1px solid #dcdcdc;\">\n                      <table style=\"color: #454545; font-family: sans-serif; font-size: 14px; vertical-align: middle;\" >\n                        <tr>\n                          <td style=\"padding: 10px 0px;\">\n                            <img width=\"60\" src=\"%smallImage%\" alt=\"%name%\" onerror=\"this.style.display='none';\">\n                          </td>\n                          <td style=\"padding: 10px 0px;\">\n                            %sku% - <a href=\" %productLink%\" title=\"%name%\" target=\"_blank\" rel=\"noreferrer\" style=\"text-decoration:none;\"><span style=\"color: #454545; text-decoration: none\">%name%</span></a>\n                          </td>\n                        </tr>\n                      </table>\n                    </td>\n                    <td style=\"text-align: center;border-bottom:1px solid #dcdcdc;\">%quantity%</td>\n                    <td style=\"text-align: right;padding-right:8px;border-bottom:1px solid #dcdcdc;\"><span><span>%price%</span></span></td>\n                  </tr>\n                  <!-- %/loop% -->\n\n                </tbody>\n              </table>\n\n            </div>\n          </td>\n        </tr>\n        <tr><td>&nbsp;</td></tr>\n\n      </tbody>\n    </table>\n  </td>\n</tr>\n"
        },
        16: {
            name: 'Notificación transportista',
            subject: '送貨公告 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u60A8\u7684\u8A02\u55AE\u5728\u904B\u9001\u4E2D\u3002\u6211\u5011\u548C\u60A8\u4E00\u6A23\u8208\u596E\u5730\u671F\u5F85\uFF01</strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D  %firstName% %lastName%, <br><br>\u60A8\u7684\u8A02\u55AE %orderNumber% \u5DF2\u7D93\u5F9E\u6211\u5011\u7684\u5009\u5EAB\u6D3E\u51FA\u3002<br><br>\u6211\u5011\u7684\u904B\u8F38\u901A\u4FE1\u54E1\u5C07\u5F88\u5FEB\u8207\u60A8\u806F\u7E6B\uFF0C\u4E26\u63D0\u4F9B\u6709\u95DC\u88DD\u904B\u7684\u66F4\u591A\u7D30\u7BC0\u3002 <br><br>\n  </td>\n</tr>\n"
        },
        17: {
            name: 'Verificación de correo',
            subject: '電子郵件驗證 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u96FB\u5B50\u90F5\u4EF6\u9A57\u8B49</strong><br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D %firstName% %lastName%,<br><br>\u611F\u8B1D\u60A8\u8A3B\u518A%% ecommerceURL %%\u3002 \u8ACB\u6309\u7167\u93C8\u63A5\u9A57\u8B49\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6\u5E33\u6236\uFF1A <a href=\"%verifyLink%\"  style=\"color:#000;\">\u9EDE\u64CA\u9019\u88E1</a>.<br><br>\u6211\u5011\u671F\u5F85\u8457\u8207\u60A8\u76F8\u898B <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a>.<br><br> %%ecommerceName%% \u7403\u968A</span>\n  </td>\n</tr>\n"
        },
        18: {
            name: 'Cuenta activada',
            subject: '帳戶已激活 - %%ecommerceName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u5E33\u6236\u5DF2\u6FC0\u6D3B</strong><br><br>\n    <span style=\"font-size:15px;\">\n      \u60A8\u597D %firstName% %lastName%,<br><br>\u6211\u5011\u5F88\u9AD8\u8208\u5730\u901A\u77E5\u60A8\uFF0C%%ecommerceURL%% \u4E2D\u7684\u5BA2\u6236\u5E33\u6236\u5DF2\u6210\u529F\u6FC0\u6D3B\u3002<br><br>\u60A8\u53EF\u4EE5\u901A\u904E\u8A2A\u554F\u6B64\u63A7\u5236\u9762\u677F\u96A8\u6642\u67E5\u770B\u548C\u4FEE\u6539\u6240\u6709\u8A73\u7D30\u4FE1\u606F <a href=\"%%ecommerceURL%%\" style=\"color:#000\">\u7DE8\u8F2F\u60A8\u7684\u500B\u4EBA\u8CC7\u6599</a><br><br>\u6211\u5011\u5E0C\u671B\u5F88\u5FEB\u80FD\u898B\u5230\u4F60 <a href=\"%%ecommerceURL%%\" style=\"color:#000\">%%ecommerceName%%</a>.<br><br>%%ecommerceName%% \u7403\u968A\n    </span>\n  </td>\n</tr>\n"
        },
        19: {
            name: 'Aviso a proveedores',
            subject: '',
            html: ""
        },
        20: {
            name: 'Stock disponible',
            subject: '現貨供應',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u5EAB\u5B58\u53EF\u7528\u7522\u54C1 <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong>%productOptions%<br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D,<br><br>\u4F60\u60F3\u8981\u7684\u90A3\u7BC7\u6587\u7AE0\u5DF2\u7D93\u6709\u4E86\uFF01</span>\n    <span style=\"font-size:15px;\">\u6211\u5011\u60F3\u63D0\u9192\u60A8\uFF0C\u6B64\u96FB\u5B50\u90F5\u4EF6\u63D0\u4F9B\u4E86\u6709\u95DC\u672C\u6587\u53EF\u7528\u6027\u7684\u6307\u5C0E\uFF0C\u4E26\u53D6\u6C7A\u65BC\u8A31\u591A\u56E0\u7D20\uFF08\u6709\u8208\u8DA3\u7684\u4EBA\uFF0C\u53EF\u7528\u55AE\u4F4D\uFF09\u3002 \u6211\u5011\u5DF2\u5C07\u6B64\u96FB\u5B50\u90F5\u4EF6\u767C\u9001\u7D66\u5C0D\u8A72\u6587\u7AE0\u611F\u8208\u8DA3\u7684\u6240\u6709\u5BA2\u6236\uFF0C\u56E0\u6B64\u53EF\u80FD\u5F88\u5FEB\u5C31\u6703\u7528\u76E1\u3002<br><br>%%ecommerceName%% \u7403\u968A</span>\n  </td>\n</tr>\n"
        },
        22: {
            name: 'Blog - Notificación de Nuevo Artículo',
            subject: '新帖子 %ecommerceName% blog!',
            html: "\n<!-- %loop% -->\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    \u60A8\u53EF\u4EE5\u5728\u4E0B\u9762\u95B1\u8B80\u767C\u8868\u7684\u6700\u65B0\u6587\u7AE0 <a href=\"%%blogUrl%%\" style=\"color:#000\">%%blogName%%</a>.<br><br>\n    <strong><a href=\"%%postLink%%\" style=\"color:#000;font-size:18px;text-decoration:none;\">%%postName%%</a></strong>\n  </td>\n</tr>\n<tr>\n  <td align=\"center\" >\n    <table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n      <tr>\n        <td width=\"30\" style=\"text-align: center;\">\n          <a href=\"%%postLink%%\" style=\"color:#000;\">\n            <img src=\"%%postSmallImage%%\" height=\"auto\" width=\"115\" border=\"0\" style=\"height: auto;\" alt=\"%%postName%%\">\n          </a>\n        </td>\n      </tr>\n    </table>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <span style=\"font-size:15px;\">%%postShortText%%<br><br><a href=\"%%postLink%%\" style=\"color:#000;text-decoration:none;\"><strong>\u95B1\u8B80\u66F4\u591A\uFF01</strong></a>.</span>\n  </td>\n</tr>\n<!-- %/loop% -->\n"
        },
        23: {
            name: 'Blog - Notificación de Nuevo Comentario',
            subject: '新評論 %%postName%% - %%blogName%%',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 15px;line-height: 20px;text-align:center;\">\n    \u9019\u7BC7\u6587\u7AE0\u6709\u65B0\u7684\u8A55\u8AD6 <a href=\"%%postLink%%\" style=\"color:#000\">%%postName%%</a>.<br><br>\n  </td>\n</tr>\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n\n    <table border=\"0\" cellspacing=\"10\" cellpadding=\"0\" width=\"100%\">\n      <tr>\n        <td style=\"text-align:right;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"30%\">\n          <img src=\"%%commentGravatar%%?d=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fuser-23%2F512%2FUser_Thief.png&s=75\" width=\"75\" border=\"0\" height=\"75\">\n        </td>\n        <td style=\"text-align:left;font-family:Arial, sans-serif;font-size: 11px;color: #999;height:20px;\" width=\"70%\">\n          <a style=\"color:#000;text-decoration:none;\" href=\"%%postLink%%#comment%%commentId%%\">%%commentNick%%</a><br>\n          %%commentContent%%<br><br>\n          <span style=\"font-size:15px;\"><a href=\"%%postLink%%#comment%%commentId%%\" style=\"color:#000;text-decoration:none;\"><strong>\u95B1\u8B80\u66F4\u591A\uFF01</strong></a>.</span>\n        </td>\n      </tr>\n    </table>\n\n  </td>\n</tr>\n"
        },
        24: {
            name: 'Blog - Email de Bienvenida',
            subject: '歡迎來到 %%blogName%%!',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u6B61\u8FCE\u4F86\u5230 <a href=\"%%blogUrl%%\" style=\"color:#000;\">%%blogName%%</a>!</strong><br><br>\n    <span style=\"font-size:15px;\">\u4F60\u597D %firstName% %lastName%,<br><br>\u611F\u8B1D\u60A8\u8A3B\u518A\u6211\u5011\u7684\u535A\u5BA2\u3002 \u5F88\u5FEB\uFF0C\u60A8\u5C07\u901A\u904E\u96FB\u5B50\u90F5\u4EF6\uFF0C\u529F\u80FD\u4FE1\u606F\u4EE5\u53CA\u6700\u71B1\u9580\u7684\u7522\u54C1\u548C\u4FC3\u92B7\u6D3B\u52D5\u6536\u5230\u65B0\u5E16\u5B50\u3002<br><br>\u5E0C\u671B\u5F88\u5FEB\u80FD\u5728 <a href=\"%%ecommerceURL%%\" style=\"color:#000;\">%%ecommerceName%%</a> \u898B\u5230\u4F60.<br><br>%%ecommerceName%% \u7403\u968A</span>\n  </td>\n</tr>\n"
        },
        25: {
            name: 'Confirmar suscripción de Stock',
            subject: '認購股票',
            html: "\n<tr>\n  <td style=\"padding: 20px 20px 20px 20px;color: #000;font-family: Arial, sans-serif;font-size: 18px;line-height: 20px;text-align:center;\">\n    <strong>\u5EAB\u5B58\u8A02\u8CFC\u7522\u54C1 <a href=\"%productLink%\" style=\"color:#000;font-size:15px;\">%name%</a></strong><br><br>\n    <span style=\"font-size:15px;\">\u60A8\u597D,<br><br>\u60A8\u5DF2\u8A02\u95B1 %name% \u80A1\u7968\u901A\u77E5</span>\n    %productOptions%<br>\n    <span style=\"font-size:15px;\">\u5982\u679C\u6211\u5011\u518D\u6B21\u6536\u5230\u9019\u7BC7\u6587\u7AE0\uFF0C\u6211\u5011\u6703\u7ACB\u5373\u901A\u77E5\u60A8\u3002<br><br>\u6211\u5011\u5E0C\u671B\u5F88\u5FEB\u80FD\u898B\u5230\u4F60.<br><br>%%ecommerceName%% \u7403\u968A</span>\n  </td>\n</tr>\n"
        },
        26: {
            name: 'SocialCurrency - Socialización',
            subject: '',
            html: ""
        },
        27: {
            name: 'SocialCurrency - Notificación incentivos',
            subject: '',
            html: ""
        },
        32: {
            name: 'Documento de pedido',
            subject: '',
            html: ""
        },
        33: {
            name: 'Documento de albarán de entrega',
            subject: '',
            html: ""
        },
        34: {
            name: 'Documento de factura',
            subject: '',
            html: ""
        },
        35: {
            name: 'Documento de factura rectificativa',
            subject: '',
            html: ""
        },
        36: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        37: {
            name: 'Activación Two Factor Auth',
            subject: '',
            html: ""
        },
        38: {
            name: 'Enviar código dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
        39: {
            name: 'Notificar Bloqueo de Dispositivo Two Factor Auth',
            subject: '',
            html: ""
        },
    } // end emails
};


/***/ }),

/***/ "./src/app/lib/components/components.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lib/components/components.module.ts ***!
  \*****************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/lib/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/lib/components/sidebar/sidebar.component.ts");
/* harmony import */ var _sidebar_languages_list_languages_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/languages-list/languages-list.component */ "./src/app/lib/components/sidebar/languages-list/languages-list.component.ts");
/* harmony import */ var _navbar_sidebar_toggle_sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/sidebar-toggle/sidebar-toggle.component */ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
                _sidebar_languages_list_languages_list_component__WEBPACK_IMPORTED_MODULE_6__["LanguagesListComponent"],
                _navbar_sidebar_toggle_sidebar_toggle_component__WEBPACK_IMPORTED_MODULE_7__["SidebarToggleComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            providers: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/lib/components/navbar/navbar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lib/components/navbar/navbar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">{{ title }}</a>\r\n\r\n  <div class=\"toggle-sidebar\">\r\n    <eg-sidebar-toggle></eg-sidebar-toggle>\r\n  </div>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n          data-target=\"#navbar-collap\" aria-controls=\"navbar-collap\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbar-collap\">\r\n\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <!-- <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n      </li> -->\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" routerLink=\"/import-export\">Import / Export</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"http://10.254.1.55:8090/display/RD/Plantillas+de+email#Plantillasdeemail-Usodecomodines\" target=\"_blank\" rel=\"nofollow\">Email tags</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <a class=\"nav-link\" routerLink=\"/instructions\">Instructions</a>\r\n      </li>\r\n\r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"https://trello.com/b/tBQU3RSN/emilio-generator\" target=\"_blank\" rel=\"nofollow\">Trello</a>\r\n      </li> -->\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"https://github.com/joelthorner/emilio-generator/issues\" target=\"_blank\" rel=\"nofollow\">Issues/bugs</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link version-link\" href=\"https://github.com/joelthorner/emilio-generator/releases/tag/v{{ version }}\" target=\"_blank\" rel=\"nofollow\">Version: <b class=\"version\">{{ version }}</b></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/lib/components/navbar/navbar.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/lib/components/navbar/navbar.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  padding: 0 30px;\n  height: 60px; }\n\n.navbar-brand {\n  font-family: \"Ubuntu\";\n  font-weight: 700;\n  font-size: 22px;\n  width: 190px;\n  margin-right: 30px;\n  line-height: 1; }\n\n.version {\n  color: #cc00cc; }\n\n.navbar .navbar-nav .nav-link.version-link {\n  color: #FFF; }\n\n@media (min-width: 992px) {\n  .navbar .navbar-nav .nav-link {\n    padding-right: 15px;\n    padding-left: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGliL2NvbXBvbmVudHMvbmF2YmFyL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFxsaWJcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saWIvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRIdWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQ2lDOEI7RURoQzlCLFlDWTRCLEVBQUE7O0FEVjlCO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBd0I7RUFDeEIsa0JDeUI4QjtFRHhCOUIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNDVnNCLEVBQUE7O0FEYXhCO0VBRUksV0FBVyxFQUFBOztBQUdiO0VBTEY7SUFNSSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEsRUFFckIiLCJmaWxlIjoic3JjL2FwcC9saWIvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzLXV0aWxzJztcclxuQGltcG9ydCAnc3R5bGVzLXZhcmlhYmxlcyc7XHJcblxyXG4ubmF2YmFyIHtcclxuICBwYWRkaW5nOiAwICRncmlkLWd1dHRlci13aWR0aDtcclxuICBoZWlnaHQ6ICRuYXZiYXItaDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LWZhbWlseTogXCJVYnVudHVcIjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB3aWR0aDogJHNpZGViYXItdyAtIDYwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi52ZXJzaW9uIHtcclxuICBjb2xvcjogJHBpbmstMTtcclxufVxyXG5cclxuLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICYudmVyc2lvbi1saW5rIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGJnLWxpZ2h0OiAgICAgICAjZjdmN2ZhO1xyXG4kbGlnaHQtYm9yZGVyOiAgICNmN2VmZjY7IC8vIGJvcmRlciBvdmVyIHdoaXRlXHJcbiRibGFjay0xOiAgICAgICAgIzIyMWIyNjtcclxuXHJcbiRibHVlLTE6ICAgICAgICAgIzVjNjQ5YztcclxuJGJsdWUtMjogICAgICAgICAjOWNhMWI5O1xyXG4kcGluay0xOiAgICAgICAgICNjYzAwY2M7XHJcblxyXG4kc2hhZG93LTE6ICAgICAgICNlOWRkZjc7IC8vIHNoYWRvdyBib3ggY29sb3JcclxuXHJcbiRkaXNhYmxlZC1iZzogICAgIzg4ODtcclxuJGRpc2FibGVkLXRleHQ6ICAjNjY2O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRzaWRlYmFyLXc6ICAgICAgICAgICAgICAgMjUwcHg7XHJcbiRzaWRlYmFyLWl0ZW0taDogICAgICAgICAgNjBweDtcclxuJG5hdmJhci1oOiAgICAgICAgICAgICAgICA2MHB4O1xyXG4kc2lkZWJhci1iYWRnZS1zaXplOiAgICAgIDIzcHg7XHJcbiRzbWFsbC1icmVha3BvaW50czogICAgICAgMTM2NnB4O1xyXG5cclxuXHJcbi8vIEJUIG92ZXJyaXRlc1xyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAjZmYwMDY2ICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAgICAgI2ZmOTkwMCAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICAgICAgICAgICAgICMwMDk5Y2MgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJGJnLWxpZ2h0ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtMSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkcGluay0xLCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgIFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250LWZhbWlseS1tb25vc3BhY2U6ICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgMC44NzVyZW0gIWRlZmF1bHQ7IC8vIDE0cHhcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkY2FyZC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xyXG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lib/components/navbar/navbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lib/components/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].title;
        this.version = __webpack_require__(/*! ../../../../../package.json */ "./package.json").version;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/lib/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/lib/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-dark toggle-sidebar\" type=\"button\" (click)=\"toggleCollapseSidebar()\">\r\n  <svg class=\"icon\"><use xlink:href=\"#menu\"></use></svg>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toggle-sidebar {\n  fill: #FFF;\n  padding: 0;\n  display: block;\n  float: left;\n  width: 40px;\n  height: 40px;\n  margin-left: -10px;\n  margin-right: 15px; }\n  .toggle-sidebar .icon {\n    width: 24px;\n    height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGliL2NvbXBvbmVudHMvbmF2YmFyL3NpZGViYXItdG9nZ2xlL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFxsaWJcXGNvbXBvbmVudHNcXG5hdmJhclxcc2lkZWJhci10b2dnbGVcXHNpZGViYXItdG9nZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQXVCO0VBQ3ZCLFlBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQVJwQjtJQVdJLFdBQVc7SUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saWIvY29tcG9uZW50cy9uYXZiYXIvc2lkZWJhci10b2dnbGUvc2lkZWJhci10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMtdXRpbHMnO1xyXG5AaW1wb3J0ICdzdHlsZXMtdmFyaWFibGVzJztcclxuXHJcbi50b2dnbGUtc2lkZWJhciB7XHJcbiAgZmlsbDogI0ZGRjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAkbmF2YmFyLWggLSAyMHB4O1xyXG4gIGhlaWdodDogJG5hdmJhci1oIC0gMjBweDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAuaWNvbiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SidebarToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarToggleComponent", function() { return SidebarToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarToggleComponent = /** @class */ (function () {
    function SidebarToggleComponent(renderer) {
        this.renderer = renderer;
        this.active = false;
    }
    SidebarToggleComponent.prototype.ngOnInit = function () {
    };
    SidebarToggleComponent.prototype.toggleCollapseSidebar = function () {
        if (this.active) {
            this.renderer.removeClass(document.body, 'sidebar-collapsed');
        }
        else {
            this.renderer.addClass(document.body, 'sidebar-collapsed');
        }
        this.active = !this.active;
    };
    SidebarToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-sidebar-toggle',
            template: __webpack_require__(/*! ./sidebar-toggle.component.html */ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-toggle.component.scss */ "./src/app/lib/components/navbar/sidebar-toggle/sidebar-toggle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], SidebarToggleComponent);
    return SidebarToggleComponent;
}());



/***/ }),

/***/ "./src/app/lib/components/sidebar/languages-list/languages-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/lib/components/sidebar/languages-list/languages-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-unstyled\">\r\n  <li\r\n    *ngFor=\"let itemKey of objectKeys(listItems)\"\r\n    [ngClass]=\"{ 'empty': listItems[itemKey].empty, 'active-s': router.url.indexOf('generate-script/' + listItems[itemKey].key) > -1 }\"\r\n    routerLinkActive=\"active\"\r\n    [routerLinkActiveOptions]=\"{ exact: true }\"\r\n    [style.order]=\"listItems[itemKey].empty ? 10 : 1\"\r\n  >\r\n    <a routerLink=\"/language/{{ listItems[itemKey].key }}\">\r\n\r\n      <span\r\n        class=\"badge badge-primary\"\r\n        [ngClass]=\"{ 'small-badge': listItems[itemKey].key.length >= 3 }\"\r\n      >\r\n        {{ listItems[itemKey].key | uppercase }}\r\n      </span>\r\n\r\n      <span class=\"name\">{{ listItems[itemKey].name }}</span>\r\n      <svg class=\"icon\"><use xlink:href=\"#chevron-right\"></use></svg>\r\n\r\n    </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/lib/components/sidebar/languages-list/languages-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/lib/components/sidebar/languages-list/languages-list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  display: flex;\n  flex-direction: column; }\n\n.badge {\n  padding: 0;\n  border-radius: 3px;\n  width: 23px;\n  height: 23px;\n  display: block;\n  margin-right: 15px;\n  font-size: 12px;\n  text-align: center;\n  line-height: 23px;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;\n  font-family: \"Ubuntu\", sans-serif; }\n\n.badge.small-badge {\n    font-size: 10px;\n    letter-spacing: -0.2px; }\n\n.name {\n  white-space: nowrap;\n  overflow: hidden;\n  line-height: 1; }\n\n.icon {\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  fill: #221b26;\n  transform: translateY(-50%);\n  transition: all 0.2s ease-in-out; }\n\nli > a {\n  color: #221b26;\n  height: 60px;\n  position: relative;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 0 30px;\n  border-bottom: 1px solid #f7eff6;\n  background-color: #fff;\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out; }\n\nli > a > * {\n    flex: 0 0 auto; }\n\nli > a:hover {\n    color: purple;\n    background-color: #f7f7fa; }\n\nli > a:hover .badge {\n      background-color: purple; }\n\nli > a:hover .icon {\n      fill: purple; }\n\nli.empty:not(.active):not(.active-s) > a {\n  color: #666;\n  background-color: #FFF; }\n\nli.empty:not(.active):not(.active-s) > a .badge {\n    background-color: #888;\n    color: #FFF; }\n\nli.empty:not(.active):not(.active-s) > a .icon {\n    fill: #666; }\n\nli.empty:not(.active):not(.active-s) > a:hover {\n    color: #404040;\n    background-color: #f7f7fa; }\n\nli.empty:not(.active):not(.active-s) > a:hover .badge {\n      background-color: #626262; }\n\nli.empty:not(.active):not(.active-s) > a:hover .icon {\n      fill: #404040; }\n\nli.active-s > a,\nli.active > a {\n  background-color: #cc00cc;\n  color: #FFF; }\n\nli.active-s > a .badge,\n  li.active > a .badge {\n    background-color: #fff;\n    color: #cc00cc; }\n\nli.active-s > a .icon,\n  li.active > a .icon {\n    fill: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGliL2NvbXBvbmVudHMvc2lkZWJhci9sYW5ndWFnZXMtbGlzdC9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXGFwcFxcbGliXFxjb21wb25lbnRzXFxzaWRlYmFyXFxsYW5ndWFnZXMtbGlzdFxcbGFuZ3VhZ2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpYi9jb21wb25lbnRzL3NpZGViYXIvbGFuZ3VhZ2VzLWxpc3QvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRIdWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0NNNEI7RURMNUIsWUNLNEI7RURKNUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQ0E0QjtFREM1QixxRUFBcUU7RUFDckUsaUNBQWlDLEVBQUE7O0FBWG5DO0lBY0ksZUFBZTtJQUNmLHNCQUFzQixFQUFBOztBQUcxQjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUVoQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUNuQ3NCO0VEb0N0QiwyQkFBMkI7RUFDM0IsZ0NDSzZDLEVBQUE7O0FERi9DO0VBQ0UsY0N6Q3NCO0VEMEN0QixZQzdCNEI7RUQ4QjVCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQ2I4QjtFRGM5QixnQ0NqRHNCO0VEa0R0QixzQkFBc0I7RUFDdEIscUVBQXFFLEVBQUE7O0FBVnZFO0lBYUksY0FBYyxFQUFBOztBQWJsQjtJQWlCSSxhQzFCNEM7SUQyQjVDLHlCQzVEb0IsRUFBQTs7QUQwQ3hCO01BcUJNLHdCQzlCMEMsRUFBQTs7QURTaEQ7TUF3Qk0sWUNqQzBDLEVBQUE7O0FEc0NoRDtFQUNFLFdDN0RtQjtFRDhEbkIsc0JBQXNCLEVBQUE7O0FBRnhCO0lBS0ksc0JDbEVpQjtJRG1FakIsV0FBVyxFQUFBOztBQU5mO0lBU0ksVUNyRWlCLEVBQUE7O0FENERyQjtJQWFJLGNBQWtDO0lBQ2xDLHlCQ3JGb0IsRUFBQTs7QUR1RXhCO01BaUJNLHlCQUEyQyxFQUFBOztBQWpCakQ7TUFvQk0sYUFBaUMsRUFBQTs7QUFLdkM7O0VBRUUseUJDNUZzQjtFRDZGdEIsV0FBVyxFQUFBOztBQUhiOztJQU1JLHNCQUFzQjtJQUN0QixjQ2pHb0IsRUFBQTs7QUQwRnhCOztJQVVJLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYi9jb21wb25lbnRzL3NpZGViYXIvbGFuZ3VhZ2VzLWxpc3QvbGFuZ3VhZ2VzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzLXZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3R5bGVzLXV0aWxzXCI7XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogJHNpZGViYXItYmFkZ2Utc2l6ZTtcclxuICBoZWlnaHQ6ICRzaWRlYmFyLWJhZGdlLXNpemU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6ICRzaWRlYmFyLWJhZGdlLXNpemU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAmLnNtYWxsLWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgfVxyXG59XHJcbi5uYW1lIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLmljb24ge1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgcmlnaHQ6IDI0cHg7XHJcbiAgZmlsbDogJGJsYWNrLTE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uLWJhc2U7XHJcbn1cclxuXHJcbmxpID4gYSB7XHJcbiAgY29sb3I6ICRibGFjay0xO1xyXG4gIGhlaWdodDogJHNpZGViYXItaXRlbS1oO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodC1ib3JkZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQsIGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gID4gKiB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xyXG5cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICBmaWxsOiAkbGluay1ob3Zlci1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmxpLmVtcHR5Om5vdCguYWN0aXZlKTpub3QoLmFjdGl2ZS1zKSA+IGEge1xyXG4gIGNvbG9yOiAkZGlzYWJsZWQtdGV4dDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWJnO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5pY29uIHtcclxuICAgIGZpbGw6ICRkaXNhYmxlZC10ZXh0O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya2VuKCRkaXNhYmxlZC10ZXh0LCAxNSUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xyXG5cclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkZGlzYWJsZWQtYmcsIDE1JSk7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGZpbGw6IGRhcmtlbigkZGlzYWJsZWQtdGV4dCwgMTUlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmxpLmFjdGl2ZS1zID4gYSxcclxubGkuYWN0aXZlID4gYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgY29sb3I6ICNGRkY7XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICBmaWxsOiAjRkZGO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGJnLWxpZ2h0OiAgICAgICAjZjdmN2ZhO1xyXG4kbGlnaHQtYm9yZGVyOiAgICNmN2VmZjY7IC8vIGJvcmRlciBvdmVyIHdoaXRlXHJcbiRibGFjay0xOiAgICAgICAgIzIyMWIyNjtcclxuXHJcbiRibHVlLTE6ICAgICAgICAgIzVjNjQ5YztcclxuJGJsdWUtMjogICAgICAgICAjOWNhMWI5O1xyXG4kcGluay0xOiAgICAgICAgICNjYzAwY2M7XHJcblxyXG4kc2hhZG93LTE6ICAgICAgICNlOWRkZjc7IC8vIHNoYWRvdyBib3ggY29sb3JcclxuXHJcbiRkaXNhYmxlZC1iZzogICAgIzg4ODtcclxuJGRpc2FibGVkLXRleHQ6ICAjNjY2O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRzaWRlYmFyLXc6ICAgICAgICAgICAgICAgMjUwcHg7XHJcbiRzaWRlYmFyLWl0ZW0taDogICAgICAgICAgNjBweDtcclxuJG5hdmJhci1oOiAgICAgICAgICAgICAgICA2MHB4O1xyXG4kc2lkZWJhci1iYWRnZS1zaXplOiAgICAgIDIzcHg7XHJcbiRzbWFsbC1icmVha3BvaW50czogICAgICAgMTM2NnB4O1xyXG5cclxuXHJcbi8vIEJUIG92ZXJyaXRlc1xyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAjZmYwMDY2ICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAgICAgI2ZmOTkwMCAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICAgICAgICAgICAgICMwMDk5Y2MgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJGJnLWxpZ2h0ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtMSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkcGluay0xLCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgIFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250LWZhbWlseS1tb25vc3BhY2U6ICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgMC44NzVyZW0gIWRlZmF1bHQ7IC8vIDE0cHhcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkY2FyZC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xyXG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/lib/components/sidebar/languages-list/languages-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/lib/components/sidebar/languages-list/languages-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LanguagesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesListComponent", function() { return LanguagesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data/app-data */ "./src/app/data/app-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LanguagesListComponent = /** @class */ (function () {
    function LanguagesListComponent(appData, router) {
        this.appData = appData;
        this.router = router;
        this.objectKeys = Object.keys;
        this.listItems = {};
        this.listItems = this.appData.languages;
    }
    LanguagesListComponent.prototype.ngOnInit = function () {
    };
    LanguagesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-languages-list',
            template: __webpack_require__(/*! ./languages-list.component.html */ "./src/app/lib/components/sidebar/languages-list/languages-list.component.html"),
            styles: [__webpack_require__(/*! ./languages-list.component.scss */ "./src/app/lib/components/sidebar/languages-list/languages-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_app_data__WEBPACK_IMPORTED_MODULE_2__["AppData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LanguagesListComponent);
    return LanguagesListComponent;
}());



/***/ }),

/***/ "./src/app/lib/components/sidebar/sidebar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/lib/components/sidebar/sidebar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\r\n  <eg-languages-list></eg-languages-list>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/lib/components/sidebar/sidebar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/lib/components/sidebar/sidebar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "aside {\n  height: 100%;\n  box-shadow: 2px 0 10px 0px #e9ddf7;\n  background-color: #FFF;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGliL2NvbXBvbmVudHMvc2lkZWJhci9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXGFwcFxcbGliXFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saWIvY29tcG9uZW50cy9zaWRlYmFyL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcc2Nzc1xcc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBWTtFQUNaLGtDQ0lzQjtFREh0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGliL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzLXV0aWxzJztcclxuQGltcG9ydCAnc3R5bGVzLXZhcmlhYmxlcyc7XHJcblxyXG5hc2lkZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDJweCAwIDEwcHggMHB4IHJnYmEoJHNoYWRvdy0xLCAxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYmctbGlnaHQ6ICAgICAgICNmN2Y3ZmE7XHJcbiRsaWdodC1ib3JkZXI6ICAgI2Y3ZWZmNjsgLy8gYm9yZGVyIG92ZXIgd2hpdGVcclxuJGJsYWNrLTE6ICAgICAgICAjMjIxYjI2O1xyXG5cclxuJGJsdWUtMTogICAgICAgICAjNWM2NDljO1xyXG4kYmx1ZS0yOiAgICAgICAgICM5Y2ExYjk7XHJcbiRwaW5rLTE6ICAgICAgICAgI2NjMDBjYztcclxuXHJcbiRzaGFkb3ctMTogICAgICAgI2U5ZGRmNzsgLy8gc2hhZG93IGJveCBjb2xvclxyXG5cclxuJGRpc2FibGVkLWJnOiAgICAjODg4O1xyXG4kZGlzYWJsZWQtdGV4dDogICM2NjY7XHJcblxyXG4vLyBMYXlvdXRcclxuJHNpZGViYXItdzogICAgICAgICAgICAgICAyNTBweDtcclxuJHNpZGViYXItaXRlbS1oOiAgICAgICAgICA2MHB4O1xyXG4kbmF2YmFyLWg6ICAgICAgICAgICAgICAgIDYwcHg7XHJcbiRzaWRlYmFyLWJhZGdlLXNpemU6ICAgICAgMjNweDtcclxuJHNtYWxsLWJyZWFrcG9pbnRzOiAgICAgICAxMzY2cHg7XHJcblxyXG5cclxuLy8gQlQgb3ZlcnJpdGVzXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICAgICAgICAgICAgICAgICNmZjAwNjYgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAjZmY5OTAwICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgICAgICAgICAgICAgIzAwOTljYyAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkYmctbGlnaHQgIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYmx1ZS0xICFkZWZhdWx0O1xyXG5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRwaW5rLTEgIWRlZmF1bHQ7XHJcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgZGFya2VuKCRwaW5rLTEsIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgXCJOdW5pdG9cIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDsgLy8gMTRweFxyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgN3B4ICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/lib/components/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/lib/components/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/lib/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/lib/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/lib/icons/icons.module.ts":
/*!*******************************************!*\
  !*** ./src/app/lib/icons/icons.module.ts ***!
  \*******************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/lib/icons/icons/icons.component.ts");




var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]
            ]
        })
    ], IconsModule);
    return IconsModule;
}());



/***/ }),

/***/ "./src/app/lib/icons/icons/icons.component.html":
/*!******************************************************!*\
  !*** ./src/app/lib/icons/icons/icons.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"d-none\">\r\n\r\n  <symbol id=\"chevron-right\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"menu\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"search\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"close\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"download\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"tree-dots\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"timer\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M14 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-2 13c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm7.03-6.61l.75-.75c.38-.38.39-1.01 0-1.4l-.01-.01c-.39-.39-1.01-.38-1.4 0l-.75.75C16.07 4.74 14.12 4 12 4c-4.8 0-8.88 3.96-9 8.76C2.87 17.84 6.94 22 12 22c4.98 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"copy\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path xmlns=\"http://www.w3.org/2000/svg\" d=\"M15 1H4c-1.1 0-2 .9-2 2v13c0 .55.45 1 1 1s1-.45 1-1V4c0-.55.45-1 1-1h10c.55 0 1-.45 1-1s-.45-1-1-1zm.59 4.59l4.83 4.83c.37.37.58.88.58 1.41V21c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h6.17c.53 0 1.04.21 1.42.59zM15 12h4.5L14 6.5V11c0 .55.45 1 1 1z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"settings\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z\"/>\r\n  </symbol>\r\n\r\n  <symbol id=\"preview\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"none\" d=\"M0 0h24v24H0V0z\"/>\r\n    <path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"/>\r\n  </symbol>\r\n\r\n</svg>\r\n<svg style=\"width:0;height:0;position:absolute;\" aria-hidden=\"true\" focusable=\"false\">\r\n  <linearGradient id=\"gradient-pink\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\" spreadMethod=\"pad\">\r\n    <stop offset=\"0%\" stop-color=\"#fa2487\" />\r\n    <stop offset=\"100%\" stop-color=\"#cc00cc\" />\r\n  </linearGradient>\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/lib/icons/icons/icons.component.ts":
/*!****************************************************!*\
  !*** ./src/app/lib/icons/icons/icons.component.ts ***!
  \****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/lib/icons/icons/icons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/lib/services/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/lib/services/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.validUser = false;
        this.checkedExtension = false;
    }
    AuthService.prototype.canActivate = function () {
        var _this = this;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authForceError) {
            this.validUser = false;
            this.checkedExtension = true;
            return false;
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].infiniteLoading) {
            this.validUser = false;
            this.checkedExtension = false;
            return false;
        }
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            this.validUser = true;
            this.checkedExtension = true;
            return true;
        }
        if (!this.validUser && !this.checkedExtension) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                var accessAllowed;
                chrome.runtime.sendMessage('jaimlomiojjmdhipacahmpnfefpbbeig', { message: 'version' }, function (reply) {
                    if (reply) {
                        if (reply.version) {
                            if (reply.version.includes('1.') || reply.version.includes('2.') || reply.version.includes('3.')) {
                                accessAllowed = true;
                            }
                            else {
                                accessAllowed = false;
                            }
                        }
                        else {
                            accessAllowed = false;
                        }
                    }
                    else {
                        accessAllowed = false;
                    }
                });
                setTimeout(function () {
                    _this.validUser = accessAllowed;
                    _this.checkedExtension = true;
                    observer.next(accessAllowed);
                    observer.complete();
                }, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].loadingAuth);
            });
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/lib/services/jszip.service.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/services/jszip.service.ts ***!
  \***********************************************/
/*! exports provided: JszipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JszipService", function() { return JszipService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);




var JszipService = /** @class */ (function () {
    function JszipService() {
    }
    JszipService.prototype.setZip = function (filesArr) {
        var zip = new jszip__WEBPACK_IMPORTED_MODULE_2__();
        filesArr.forEach(function (file) {
            zip.file(file.fileName, file.content);
        });
        return zip;
    };
    JszipService.prototype.saveAsZip = function (zip, zipName) {
        zip.generateAsync({ type: 'blob' })
            .then(function (content) {
            // see FileSaver.js
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(content, zipName);
        });
    };
    JszipService.prototype.saveAsHtml = function (content, fileName, type) {
        var blob = new Blob([content], {
            type: type
        });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, fileName);
    };
    JszipService.prototype.saveAsEmilioGenerator = function (json, fileName, type) {
        var blob = new Blob([JSON.stringify(json)], {
            type: type
        });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(blob, fileName);
    };
    JszipService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JszipService);
    return JszipService;
}());



/***/ }),

/***/ "./src/app/lib/services/releases-github-api.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/lib/services/releases-github-api.service.ts ***!
  \*************************************************************/
/*! exports provided: ReleasesGithubApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesGithubApiService", function() { return ReleasesGithubApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ReleasesGithubApiService = /** @class */ (function () {
    function ReleasesGithubApiService(http) {
        this.http = http;
        this.clientid = 'a2617b4a55282dfdbef1';
        this.clientsecret = '995753279547b58ff77098acee74d2c04a4788db';
        this.username = 'joelthorner';
    }
    ReleasesGithubApiService.prototype.getLastsReleases = function () {
        return this.http.get("https://api.github.com/repos/" + this.username + "/emilio-generator/releases?client_id=" + this.clientid + "&client_secret=" + this.clientsecret + "&per_page=3");
    };
    ReleasesGithubApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReleasesGithubApiService);
    return ReleasesGithubApiService;
}());



/***/ }),

/***/ "./src/app/views/access-loading/access-loading.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/access-loading/access-loading.module.ts ***!
  \***************************************************************/
/*! exports provided: AccessLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessLoadingModule", function() { return AccessLoadingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _access_loading_access_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-loading/access-loading.component */ "./src/app/views/access-loading/access-loading/access-loading.component.ts");




var AccessLoadingModule = /** @class */ (function () {
    function AccessLoadingModule() {
    }
    AccessLoadingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_access_loading_access_loading_component__WEBPACK_IMPORTED_MODULE_3__["AccessLoadingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _access_loading_access_loading_component__WEBPACK_IMPORTED_MODULE_3__["AccessLoadingComponent"]
            ]
        })
    ], AccessLoadingModule);
    return AccessLoadingModule;
}());



/***/ }),

/***/ "./src/app/views/access-loading/access-loading/access-loading.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/access-loading/access-loading/access-loading.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n    <div class=\"card\">\r\n      <div class=\"slider\" [hidden]=\"!(!auth.validUser && !auth.checkedExtension)\">\r\n        <div class=\"line\"></div>\r\n        <div class=\"subline inc\"></div>\r\n        <div class=\"subline dec\"></div>\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"title\">\r\n            <h1>Welcome to <b>{{ title }}</b></h1>\r\n          </div>\r\n\r\n          <div class=\"icon-wrap\" [ngClass]=\"!auth.validUser && auth.checkedExtension ? 'error' : ''\">\r\n            <span class=\"icon\" [innerText]=\"!auth.validUser && !auth.checkedExtension ? '🦄' : '🤕'\"></span>\r\n            <!-- <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V4c-4.42 0-8 3.58-8 8 0 1.04.2 2.04.57 2.95.27.67 1.13.85 1.64.34.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6zm5.79 2.71c-.27.27-.38.69-.23 1.04.28.7.44 1.46.44 2.25 0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V20c4.42 0 8-3.58 8-8 0-1.04-.2-2.04-.57-2.95-.27-.67-1.13-.85-1.64-.34z\"/></svg> -->\r\n            <span class=\"text\" [innerText]=\"!auth.validUser && !auth.checkedExtension ? 'Checking access...' : 'Access error!'\"></span>\r\n          </div>\r\n\r\n          <div class=\"disclaimer\">\r\n            <a href=\"https://chrome.google.com/webstore/detail/tlmanager/jaimlomiojjmdhipacahmpnfefpbbeig\" target=\"_blank\">Chrome extension</a> required for app access\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/access-loading/access-loading/access-loading.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/access-loading/access-loading/access-loading.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500000000000;\n  background-color: #f7f7fa;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: auto;\n  padding: 30px; }\n\nh1 {\n  line-height: 1;\n  font-weight: 300;\n  font-size: 48px; }\n\nh1 b {\n    font-weight: bold;\n    font-family: \"Ubuntu\", sans-serif; }\n\n.icon-wrap {\n  color: #9ca1b9; }\n\n.icon-wrap.error {\n    color: #ff0066; }\n\n.icon-wrap.error .icon {\n      -webkit-animation: bounce 1s infinite linear;\n              animation: bounce 1s infinite linear; }\n\n.icon-wrap .icon {\n    fill: #9ca1b9;\n    height: 36px;\n    width: 36px;\n    -webkit-animation: spin 1s infinite linear;\n            animation: spin 1s infinite linear;\n    margin: 0 auto;\n    font-size: 24px;\n    line-height: 34px;\n    text-align: center; }\n\n.icon-wrap span {\n    display: block; }\n\n.card {\n  width: 800px;\n  height: 420px;\n  margin: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.card .card-body {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding-bottom: 90px; }\n\n.slider {\n  position: absolute;\n  width: 110%;\n  height: 4px;\n  overflow-x: hidden;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n.slider .line {\n    position: absolute;\n    opacity: 0.4;\n    background-color: #cc00cc;\n    width: 150%;\n    height: 4px; }\n\n.slider .subline {\n    position: absolute;\n    background-color: #cc00cc;\n    height: 5px; }\n\n.slider .inc {\n    -webkit-animation: increase 2s infinite;\n            animation: increase 2s infinite; }\n\n.slider .dec {\n    -webkit-animation: decrease 2s 0.5s infinite;\n            animation: decrease 2s 0.5s infinite; }\n\n.disclaimer {\n  position: absolute;\n  bottom: 30px;\n  left: 30px;\n  right: 30px;\n  color: #9ca1b9;\n  font-size: 12px; }\n\n.disclaimer a {\n    text-decoration: underline;\n    color: #9ca1b9; }\n\n@-webkit-keyframes spin {\n  100% {\n    transform: rotate(-360deg); } }\n\n@keyframes spin {\n  100% {\n    transform: rotate(-360deg); } }\n\n@-webkit-keyframes increase {\n  from {\n    left: -5%;\n    width: 5%; }\n  to {\n    left: 130%;\n    width: 100%; } }\n\n@keyframes increase {\n  from {\n    left: -5%;\n    width: 5%; }\n  to {\n    left: 130%;\n    width: 100%; } }\n\n@-webkit-keyframes decrease {\n  from {\n    left: -80%;\n    width: 80%; }\n  to {\n    left: 110%;\n    width: 10%; } }\n\n@keyframes decrease {\n  from {\n    left: -80%;\n    width: 80%; }\n  to {\n    left: 110%;\n    width: 10%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWNjZXNzLWxvYWRpbmcvYWNjZXNzLWxvYWRpbmcvQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRIdWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxhcHBcXHZpZXdzXFxhY2Nlc3MtbG9hZGluZ1xcYWNjZXNzLWxvYWRpbmdcXGFjY2Vzcy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hY2Nlc3MtbG9hZGluZy9hY2Nlc3MtbG9hZGluZy9DOlxcVXNlcnNcXGpvZWwudG9ybmVyXFxEb2N1bWVudHNcXEdpdEh1YlxcZW1pbGlvLWdlbmVyYXRvci9zcmNcXHNjc3NcXHN0eWxlcy12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHlCQ1RzQjtFRFV0QixrQkFBa0I7RUFFbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUVkLGFDbUI4QixFQUFBOztBRGhCaEM7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFIakI7SUFNSSxpQkFBaUI7SUFDakIsaUNBQWlDLEVBQUE7O0FBSXJDO0VBQ0UsY0MzQnNCLEVBQUE7O0FEMEJ4QjtJQUdJLGNDVitCLEVBQUE7O0FET25DO01BTU0sNENBQW9DO2NBQXBDLG9DQUFvQyxFQUFBOztBQU4xQztJQVdJLGFDckNvQjtJRHNDcEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQWxCdEI7SUFzQkksY0FBYyxFQUFBOztBQUlsQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QiwwQkFBMEIsRUFBQTs7QUFMNUI7SUFRSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUU3QixvQkFBc0MsRUFBQTs7QUFJMUM7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBUFY7SUFVSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQy9Fb0I7SURnRnBCLFdBQVc7SUFDWCxXQUFXLEVBQUE7O0FBZGY7SUFrQkksa0JBQWtCO0lBQ2xCLHlCQ3RGb0I7SUR1RnBCLFdBQVcsRUFBQTs7QUFwQmY7SUF1QkksdUNBQStCO1lBQS9CLCtCQUErQixFQUFBOztBQXZCbkM7SUEwQkksNENBQW9DO1lBQXBDLG9DQUFvQyxFQUFBOztBQUl4QztFQUNFLGtCQUFrQjtFQUNsQixZQ3JFOEI7RURzRTlCLFVDdEU4QjtFRHVFOUIsV0N2RThCO0VEd0U5QixjQ3ZHc0I7RUR3R3RCLGVBQWUsRUFBQTs7QUFOakI7SUFTSSwwQkFBMEI7SUFDMUIsY0M1R29CLEVBQUE7O0FEZ0h4QjtFQUNFO0lBQ0UsMEJBQXlCLEVBQUEsRUFBQTs7QUFGN0I7RUFDRTtJQUNFLDBCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsU0FBUyxFQUFBO0VBRVg7SUFDRSxVQUFVO0lBQ1YsV0FBVyxFQUFBLEVBQUE7O0FBUGY7RUFDRTtJQUNFLFNBQVM7SUFDVCxTQUFTLEVBQUE7RUFFWDtJQUNFLFVBQVU7SUFDVixXQUFXLEVBQUEsRUFBQTs7QUFHZjtFQUNFO0lBQ0UsVUFBVTtJQUNWLFVBQVcsRUFBQTtFQUViO0lBQ0UsVUFBVTtJQUNWLFVBQVUsRUFBQSxFQUFBOztBQVBkO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsVUFBVyxFQUFBO0VBRWI7SUFDRSxVQUFVO0lBQ1YsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hY2Nlc3MtbG9hZGluZy9hY2Nlc3MtbG9hZGluZy9hY2Nlc3MtbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMtdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzdHlsZXMtdXRpbHNcIjtcclxuXHJcbi5sb2dpbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA1MDAwMDAwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpZ2h0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBwYWRkaW5nOiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuXHJcbiAgYiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmljb24td3JhcCB7XHJcbiAgY29sb3I6ICRibHVlLTI7XHJcbiAgJi5lcnJvciB7XHJcbiAgICBjb2xvcjogJGRhbmdlcjtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIGFuaW1hdGlvbjogYm91bmNlIDFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGZpbGw6ICRibHVlLTI7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiA0MjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAkZ3JpZC1ndXR0ZXItd2lkdGggKiAzO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDExMCU7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG5cclxuICAubGluZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rLTE7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1YmxpbmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluay0xO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5pbmN7XHJcbiAgICBhbmltYXRpb246IGluY3JlYXNlIDJzIGluZmluaXRlO1xyXG4gIH1cclxuICAuZGVje1xyXG4gICAgYW5pbWF0aW9uOiBkZWNyZWFzZSAycyAwLjVzIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmRpc2NsYWltZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206ICRncmlkLWd1dHRlci13aWR0aDtcclxuICBsZWZ0OiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgcmlnaHQ6ICRncmlkLWd1dHRlci13aWR0aDtcclxuICBjb2xvcjogJGJsdWUtMjtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogJGJsdWUtMjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBpbmNyZWFzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGxlZnQ6IDEzMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBkZWNyZWFzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICBsZWZ0OiAtODAlO1xyXG4gICAgd2lkdGg6ICA4MCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGxlZnQ6IDExMCU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGJnLWxpZ2h0OiAgICAgICAjZjdmN2ZhO1xyXG4kbGlnaHQtYm9yZGVyOiAgICNmN2VmZjY7IC8vIGJvcmRlciBvdmVyIHdoaXRlXHJcbiRibGFjay0xOiAgICAgICAgIzIyMWIyNjtcclxuXHJcbiRibHVlLTE6ICAgICAgICAgIzVjNjQ5YztcclxuJGJsdWUtMjogICAgICAgICAjOWNhMWI5O1xyXG4kcGluay0xOiAgICAgICAgICNjYzAwY2M7XHJcblxyXG4kc2hhZG93LTE6ICAgICAgICNlOWRkZjc7IC8vIHNoYWRvdyBib3ggY29sb3JcclxuXHJcbiRkaXNhYmxlZC1iZzogICAgIzg4ODtcclxuJGRpc2FibGVkLXRleHQ6ICAjNjY2O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRzaWRlYmFyLXc6ICAgICAgICAgICAgICAgMjUwcHg7XHJcbiRzaWRlYmFyLWl0ZW0taDogICAgICAgICAgNjBweDtcclxuJG5hdmJhci1oOiAgICAgICAgICAgICAgICA2MHB4O1xyXG4kc2lkZWJhci1iYWRnZS1zaXplOiAgICAgIDIzcHg7XHJcbiRzbWFsbC1icmVha3BvaW50czogICAgICAgMTM2NnB4O1xyXG5cclxuXHJcbi8vIEJUIG92ZXJyaXRlc1xyXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgJHBpbmstMSAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICAgICAgICAgICAgICAgICMzMzMgIWRlZmF1bHQ7XHJcbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAjZmYwMDY2ICFkZWZhdWx0O1xyXG4kd2FybmluZzogICAgICAgICAgICAgICAgICAgI2ZmOTkwMCAhZGVmYXVsdDtcclxuJGluZm86ICAgICAgICAgICAgICAgICAgICAgICMwMDk5Y2MgIWRlZmF1bHQ7XHJcblxyXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJGJnLWxpZ2h0ICFkZWZhdWx0O1xyXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtMSAhZGVmYXVsdDtcclxuXHJcbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcclxuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgIGRhcmtlbigkcGluay0xLCAxNSUpICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgbm9uZSAhZGVmYXVsdDtcclxuXHJcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAzMHB4ICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgIFwiTnVuaXRvXCIsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbi8vICRmb250LWZhbWlseS1tb25vc3BhY2U6ICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgMC44NzVyZW0gIWRlZmF1bHQ7IC8vIDE0cHhcclxuXHJcbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgMTVweCAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoICFkZWZhdWx0O1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAwcHggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgIDdweCAhZGVmYXVsdDtcclxuLy8gJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkY2FyZC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG4kY2FyZC1jYXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xyXG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAjRkZGICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XHJcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xyXG5cclxuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAjY2VkNGRhICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/access-loading/access-loading/access-loading.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/access-loading/access-loading/access-loading.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccessLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessLoadingComponent", function() { return AccessLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_lib_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/services/auth.service */ "./src/app/lib/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AccessLoadingComponent = /** @class */ (function () {
    function AccessLoadingComponent(auth) {
        this.auth = auth;
        this.title = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].title;
    }
    AccessLoadingComponent.prototype.ngOnInit = function () {
    };
    AccessLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-access-loading',
            template: __webpack_require__(/*! ./access-loading.component.html */ "./src/app/views/access-loading/access-loading/access-loading.component.html"),
            styles: [__webpack_require__(/*! ./access-loading.component.scss */ "./src/app/views/access-loading/access-loading/access-loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_lib_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AccessLoadingComponent);
    return AccessLoadingComponent;
}());



/***/ }),

/***/ "./src/app/views/home/changelog-card/changelog-card.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/home/changelog-card/changelog-card.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n      {{ cardTitle }}\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"card-items\">\r\n        <div class=\"card-item\" *ngFor=\"let release of changeLogItems\">\r\n          <span class=\"card-title\">\r\n            <a href=\"{{ release.html_url }}\" target=\"_blank\" rel=\"nofollow\">{{ release.name }}</a>\r\n          </span>\r\n          <markdown class=\"card-text mb-0\" [data]=\"release.body\"></markdown>\r\n          <div class=\"card-bottom\">{{ release.published_at | date }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/home/changelog-card/changelog-card.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/home/changelog-card/changelog-card.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvY2hhbmdlbG9nLWNhcmQvY2hhbmdlbG9nLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/home/changelog-card/changelog-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/home/changelog-card/changelog-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChangelogCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogCardComponent", function() { return ChangelogCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_lib_services_releases_github_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/services/releases-github-api.service */ "./src/app/lib/services/releases-github-api.service.ts");



var ChangelogCardComponent = /** @class */ (function () {
    function ChangelogCardComponent(service) {
        this.service = service;
        this.cardTitle = 'Changelog';
        this.changeLogItems = [];
    }
    ChangelogCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getLastsReleases().subscribe(function (result) {
            var arr = [];
            for (var key in result) {
                if (result.hasOwnProperty(key)) {
                    arr.push(result[key]);
                }
            }
            if (result) {
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var item = arr_1[_i];
                    item.body = item.body
                        .replace('Changelog', '')
                        .replace('changelog', '')
                        .replace(/-{6,}/i, '');
                }
                _this.changeLogItems = arr;
            }
        }, function (error) {
            console.log(error); // for development only.
        });
    };
    ChangelogCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-changelog-card',
            template: __webpack_require__(/*! ./changelog-card.component.html */ "./src/app/views/home/changelog-card/changelog-card.component.html"),
            styles: [__webpack_require__(/*! ./changelog-card.component.scss */ "./src/app/views/home/changelog-card/changelog-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_lib_services_releases_github_api_service__WEBPACK_IMPORTED_MODULE_2__["ReleasesGithubApiService"]])
    ], ChangelogCardComponent);
    return ChangelogCardComponent;
}());



/***/ }),

/***/ "./src/app/views/home/credits-card/credits-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/home/credits-card/credits-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{ cardTitle }}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"card-items\">\r\n      <div class=\"card-item\" *ngFor=\"let credit of credits\">\r\n        <span class=\"card-title\" [innerHTML]=\"credit.title\"></span>\r\n        <p class=\"card-text mb-0\" [innerHTML]=\"credit.description\"></p>\r\n        <span class=\"card-bottom\" [innerHTML]=\"credit.bottom\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home/credits-card/credits-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/home/credits-card/credits-card.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvY3JlZGl0cy1jYXJkL2NyZWRpdHMtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home/credits-card/credits-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/home/credits-card/credits-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreditsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsCardComponent", function() { return CreditsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreditsCardComponent = /** @class */ (function () {
    function CreditsCardComponent() {
        this.cardTitle = 'Credits';
        this.credits = [
            {
                title: '<a href="https://github.com/joelthorner" target="_blank" rel="nofollow">Joelthorner</a>',
                description: 'Designer and developer',
                bottom: 'First angular 7x app'
            },
            {
                title: 'AAMH',
                description: 'Associació d\'Afectats per Mails HTML',
                bottom: 'HTML Email Affected Association'
            },
            {
                title: 'Welcome photo',
                description: 'by <a href="https://unsplash.com/@samferrara?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Samuel Ferrara">Samuel Ferrara</a>',
                bottom: 'on Unsplash'
            }
        ];
    }
    CreditsCardComponent.prototype.ngOnInit = function () {
    };
    CreditsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-credits-card',
            template: __webpack_require__(/*! ./credits-card.component.html */ "./src/app/views/home/credits-card/credits-card.component.html"),
            styles: [__webpack_require__(/*! ./credits-card.component.scss */ "./src/app/views/home/credits-card/credits-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreditsCardComponent);
    return CreditsCardComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home/home.component.ts");
/* harmony import */ var _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jumbotron/jumbotron.component */ "./src/app/views/home/jumbotron/jumbotron.component.ts");
/* harmony import */ var _credits_card_credits_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credits-card/credits-card.component */ "./src/app/views/home/credits-card/credits-card.component.ts");
/* harmony import */ var _changelog_card_changelog_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelog-card/changelog-card.component */ "./src/app/views/home/changelog-card/changelog-card.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _jumbotron_jumbotron_component__WEBPACK_IMPORTED_MODULE_4__["JumbotronComponent"],
                _credits_card_credits_card_component__WEBPACK_IMPORTED_MODULE_5__["CreditsCardComponent"],
                _changelog_card_changelog_card_component__WEBPACK_IMPORTED_MODULE_6__["ChangelogCardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"].forRoot({
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkedOptions"],
                        useValue: {
                            gfm: true,
                            tables: true,
                            breaks: false,
                            pedantic: true,
                            sanitize: false,
                            smartLists: true,
                            smartypants: false,
                        },
                    },
                }),
            ],
            exports: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/home/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/home/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view view-home\">\r\n  <eg-jumbotron></eg-jumbotron>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <eg-credits-card></eg-credits-card>\r\n    </div>\r\n\r\n    <div class=\"col\">\r\n      <eg-changelog-card></eg-changelog-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/home/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row > .col {\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcYXBwXFx2aWV3c1xcaG9tZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9ob21lL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcc2Nzc1xcc3R5bGVzLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJDaUM4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzLXZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3R5bGVzLXV0aWxzXCI7XHJcblxyXG4ucm93ID4gLmNvbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYmctbGlnaHQ6ICAgICAgICNmN2Y3ZmE7XHJcbiRsaWdodC1ib3JkZXI6ICAgI2Y3ZWZmNjsgLy8gYm9yZGVyIG92ZXIgd2hpdGVcclxuJGJsYWNrLTE6ICAgICAgICAjMjIxYjI2O1xyXG5cclxuJGJsdWUtMTogICAgICAgICAjNWM2NDljO1xyXG4kYmx1ZS0yOiAgICAgICAgICM5Y2ExYjk7XHJcbiRwaW5rLTE6ICAgICAgICAgI2NjMDBjYztcclxuXHJcbiRzaGFkb3ctMTogICAgICAgI2U5ZGRmNzsgLy8gc2hhZG93IGJveCBjb2xvclxyXG5cclxuJGRpc2FibGVkLWJnOiAgICAjODg4O1xyXG4kZGlzYWJsZWQtdGV4dDogICM2NjY7XHJcblxyXG4vLyBMYXlvdXRcclxuJHNpZGViYXItdzogICAgICAgICAgICAgICAyNTBweDtcclxuJHNpZGViYXItaXRlbS1oOiAgICAgICAgICA2MHB4O1xyXG4kbmF2YmFyLWg6ICAgICAgICAgICAgICAgIDYwcHg7XHJcbiRzaWRlYmFyLWJhZGdlLXNpemU6ICAgICAgMjNweDtcclxuJHNtYWxsLWJyZWFrcG9pbnRzOiAgICAgICAxMzY2cHg7XHJcblxyXG5cclxuLy8gQlQgb3ZlcnJpdGVzXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICAgICAgICAgICAgICAgICNmZjAwNjYgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAjZmY5OTAwICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgICAgICAgICAgICAgIzAwOTljYyAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkYmctbGlnaHQgIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYmx1ZS0xICFkZWZhdWx0O1xyXG5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRwaW5rLTEgIWRlZmF1bHQ7XHJcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgZGFya2VuKCRwaW5rLTEsIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgXCJOdW5pdG9cIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDsgLy8gMTRweFxyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgN3B4ICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/home/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/jumbotron/jumbotron.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/home/jumbotron/jumbotron.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-jumbo\">\r\n  <div class=\"home-jumbo-inset\">\r\n    <h1>Welcome to <b>{{ title }}</b></h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home/jumbotron/jumbotron.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/home/jumbotron/jumbotron.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-jumbo {\n  margin-top: -30px;\n  margin-left: -30px;\n  margin-right: -30px;\n  height: 0;\n  padding-bottom: 22.6%;\n  position: relative;\n  background-image: url('home-bg.png');\n  background-size: cover;\n  background-position: center right;\n  margin-bottom: 30px; }\n  @media (max-width: 1365px) {\n    .home-jumbo {\n      height: 14.375rem; } }\n  .home-jumbo .home-jumbo-inset {\n    position: absolute;\n    top: 30px;\n    bottom: 30px;\n    left: 30px;\n    right: 30px;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center; }\n  h1 {\n  line-height: 1;\n  color: #FFF;\n  font-weight: 300;\n  font-size: 48px; }\n  h1 b {\n    font-family: \"Ubuntu\", sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9qdW1ib3Ryb24vQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRIdWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxhcHBcXHZpZXdzXFxob21lXFxqdW1ib3Ryb25cXGp1bWJvdHJvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9qdW1ib3Ryb24vQzpcXFVzZXJzXFxqb2VsLnRvcm5lclxcRG9jdW1lbnRzXFxHaXRIdWJcXGVtaWxpby1nZW5lcmF0b3Ivc3JjXFxzY3NzXFxzdHlsZXMtdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2hvbWUvanVtYm90cm9uL0M6XFxVc2Vyc1xcam9lbC50b3JuZXJcXERvY3VtZW50c1xcR2l0SHViXFxlbWlsaW8tZ2VuZXJhdG9yL3NyY1xcc2Nzc1xcc3R5bGVzLXV0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxpQkNpQzhCO0VEaEM5QixrQkNnQzhCO0VEL0I5QixtQkMrQjhCO0VEOUI5QixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQ0FBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxtQkN3QjhCLEVBQUE7RUR0QjlCO0lBWkY7TUFhSSxpQkVrQndELEVBQUEsRUZIM0Q7RUE1QkQ7SUFpQkksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7RUFJdEI7RUFDRSxjQUFjO0VBRWQsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFMakI7SUFTSSxpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvanVtYm90cm9uL2p1bWJvdHJvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy11dGlscyc7XHJcbkBpbXBvcnQgJ3N0eWxlcy12YXJpYWJsZXMnO1xyXG5cclxuLmhvbWUtanVtYm8ge1xyXG4gIG1hcmdpbi10b3A6IC0kZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0kZ3JpZC1ndXR0ZXItd2lkdGg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG4gIGhlaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjIuNiU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaG9tZS1iZy5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHNtYWxsLWJyZWFrcG9pbnRzIC0gMXB4KSB7XHJcbiAgICBoZWlnaHQ6IHJlbSgyMzBweCk7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1qdW1iby1pbnNldCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuXHJcblxyXG4gIGIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYmctbGlnaHQ6ICAgICAgICNmN2Y3ZmE7XHJcbiRsaWdodC1ib3JkZXI6ICAgI2Y3ZWZmNjsgLy8gYm9yZGVyIG92ZXIgd2hpdGVcclxuJGJsYWNrLTE6ICAgICAgICAjMjIxYjI2O1xyXG5cclxuJGJsdWUtMTogICAgICAgICAjNWM2NDljO1xyXG4kYmx1ZS0yOiAgICAgICAgICM5Y2ExYjk7XHJcbiRwaW5rLTE6ICAgICAgICAgI2NjMDBjYztcclxuXHJcbiRzaGFkb3ctMTogICAgICAgI2U5ZGRmNzsgLy8gc2hhZG93IGJveCBjb2xvclxyXG5cclxuJGRpc2FibGVkLWJnOiAgICAjODg4O1xyXG4kZGlzYWJsZWQtdGV4dDogICM2NjY7XHJcblxyXG4vLyBMYXlvdXRcclxuJHNpZGViYXItdzogICAgICAgICAgICAgICAyNTBweDtcclxuJHNpZGViYXItaXRlbS1oOiAgICAgICAgICA2MHB4O1xyXG4kbmF2YmFyLWg6ICAgICAgICAgICAgICAgIDYwcHg7XHJcbiRzaWRlYmFyLWJhZGdlLXNpemU6ICAgICAgMjNweDtcclxuJHNtYWxsLWJyZWFrcG9pbnRzOiAgICAgICAxMzY2cHg7XHJcblxyXG5cclxuLy8gQlQgb3ZlcnJpdGVzXHJcbiRwcmltYXJ5OiAgICAgICAgICAgICAgICAgICAkcGluay0xICFkZWZhdWx0O1xyXG4kZGFyazogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcclxuJGRhbmdlcjogICAgICAgICAgICAgICAgICAgICNmZjAwNjYgIWRlZmF1bHQ7XHJcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAjZmY5OTAwICFkZWZhdWx0O1xyXG4kaW5mbzogICAgICAgICAgICAgICAgICAgICAgIzAwOTljYyAhZGVmYXVsdDtcclxuXHJcbiRib2R5LWJnOiAgICAgICAgICAgICAgICAgICAkYmctbGlnaHQgIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYmx1ZS0xICFkZWZhdWx0O1xyXG5cclxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRwaW5rLTEgIWRlZmF1bHQ7XHJcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICBub25lICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgZGFya2VuKCRwaW5rLTEsIDE1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICBub25lICFkZWZhdWx0O1xyXG5cclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgIDMwcHggIWRlZmF1bHQ7XHJcblxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgXCJOdW5pdG9cIiwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuLy8gJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDsgLy8gMTRweFxyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAxNXB4ICFkZWZhdWx0O1xyXG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggIWRlZmF1bHQ7XHJcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgIDBweCAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgN3B4ICFkZWZhdWx0O1xyXG4vLyAkY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XHJcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICNGRkYgIWRlZmF1bHQ7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcclxuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xyXG5cclxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XHJcblxyXG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICNjZWQ0ZGEgIWRlZmF1bHQ7XHJcbiIsIiRyZW0tYmFzZWxpbmU6IDE2cHggIWRlZmF1bHQ7XHJcbiRyZW0tZmFsbGJhY2s6IGZhbHNlICFkZWZhdWx0O1xyXG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuQGZ1bmN0aW9uIHJlbS1zZXBhcmF0b3IoJGxpc3QsICRzZXBhcmF0b3I6IGZhbHNlKSB7XHJcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcclxuICAgIEByZXR1cm4gYXBwZW5kKCRsaXN0LCBudWxsLCAkc2VwYXJhdG9yKTtcclxuICB9XHJcblxyXG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PSB0cnVlIHtcclxuICAgIEByZXR1cm4gbGlzdC1zZXBhcmF0b3IoJGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgLy8gbGlzdC1zZXBhcmF0b3IgcG9seWZpbGwgYnkgSHVnbyBHaXJhdWRlbCAoaHR0cHM6Ly9zYXNzLWNvbXBhdGliaWxpdHkuZ2l0aHViLmlvLyNsaXN0X3NlcGFyYXRvcl9mdW5jdGlvbilcclxuICAkdGVzdC1saXN0OiAoKTtcclxuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XHJcbiAgICAkdGVzdC1saXN0OiBhcHBlbmQoJHRlc3QtbGlzdCwgJGl0ZW0sIHNwYWNlKTtcclxuICB9XHJcblxyXG4gIEByZXR1cm4gaWYoJHRlc3QtbGlzdCA9PSAkbGlzdCwgc3BhY2UsIGNvbW1hKTtcclxufVxyXG5cclxuQG1peGluIHJlbS1iYXNlbGluZSgkem9vbTogMTAwJSkge1xyXG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xyXG4gICRyZXN1bHQ6ICgpO1xyXG4gICRzZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlcyk7XHJcblxyXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcclxuICAgIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicmVtXCIgYW5kICR0byA9PSBcInB4XCIge1xyXG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gMXJlbSAqICRyZW0tYmFzZWxpbmUsICRzZXBhcmF0b3IpO1xyXG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xyXG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gJHJlbS1iYXNlbGluZSAqIDFyZW0sICRzZXBhcmF0b3IpO1xyXG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJsaXN0XCIge1xyXG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XHJcbiAgICAgICR2YWx1ZTogcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWUuLi4pO1xyXG4gICAgICAkdmFsdWU6IHJlbS1zZXBhcmF0b3IoJHZhbHVlLCAkdmFsdWUtc2VwYXJhdG9yKTtcclxuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcclxuICBAaWYgJHJlbS1weC1vbmx5IHtcclxuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHJlbSgkcHJvcGVydGllcywgJHZhbHVlcy4uLikge1xyXG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiBtYXAta2V5cygkcHJvcGVydGllcykge1xyXG4gICAgICBAaW5jbHVkZSByZW0oJHByb3BlcnR5LCBtYXAtZ2V0KCRwcm9wZXJ0aWVzLCAkcHJvcGVydHkpKTtcclxuICAgIH1cclxuICB9IEBlbHNlIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XHJcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XHJcbiAgICAgIH1cclxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xyXG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBzY3JvbGxiYXJzKCRzaXplLCAkZm9yZWdyb3VuZC1jb2xvciwgJGJhY2tncm91bmQtY29sb3IpIHtcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAgJHNpemU7XHJcbiAgICBoZWlnaHQ6ICRzaXplO1xyXG4gIH1cclxuXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICB9XHJcblxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG5cclxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcclxuICBib2R5IHtcclxuICAgIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcclxuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY2xlYXJmaXgoKSB7XHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9ybS1jb250cm9sLWZvY3VzKCRpbnB1dC1mb2N1cy1jb2xvciwgJGlucHV0LWZvY3VzLWJnLCAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdykge1xyXG4gICY6Zm9jdXMsICYuYWNlX2ZvY3VzIHtcclxuICAgIC8vIGNvbG9yOiAkaW5wdXQtZm9jdXMtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZm9jdXMtYmc7XHJcbiAgICBib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/home/jumbotron/jumbotron.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/home/jumbotron/jumbotron.component.ts ***!
  \*************************************************************/
/*! exports provided: JumbotronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronComponent", function() { return JumbotronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");



var JumbotronComponent = /** @class */ (function () {
    function JumbotronComponent() {
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].title;
    }
    JumbotronComponent.prototype.ngOnInit = function () {
    };
    JumbotronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'eg-jumbotron',
            template: __webpack_require__(/*! ./jumbotron.component.html */ "./src/app/views/home/jumbotron/jumbotron.component.html"),
            styles: [__webpack_require__(/*! ./jumbotron.component.scss */ "./src/app/views/home/jumbotron/jumbotron.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JumbotronComponent);
    return JumbotronComponent;
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
    production: false,
    title: 'Emilio Generator',
    loadingAuth: 1000,
    authForceError: false,
    infiniteLoading: false
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

module.exports = __webpack_require__(/*! C:\Users\joel.torner\Documents\GitHub\emilio-generator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map