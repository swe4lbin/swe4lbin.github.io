(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sestialli0\Documents\mb\test-project\src\main.ts */"zUnb");


/***/ }),

/***/ "7pUn":
/*!**************************************************!*\
  !*** ./src/app/list-item/list-item.component.ts ***!
  \**************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/db/database.service */ "qzT4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../circle-rating/circle-rating.component */ "TW52");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a0) { return { "even-score": a0 }; };
function ListItemComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-circle-rating", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-circle-rating", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-circle-rating", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-circle-rating", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.index % 2 != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx_r1.listItem.HeritageScore)("showExplanation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx_r1.listItem.GenealogyScore)("showExplanation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx_r1.listItem.UsabilityScore)("showExplanation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx_r1.listItem.CustomerSupportScore)("showExplanation", true);
} }
function ListItemComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListItemComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nej ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListItemComponent_div_0_a_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recension");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " keyboard_arrow_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListItemComponent_div_0_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListItemComponent_div_0_a_43_div_1_Template, 5, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.listItem.ReviewUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.listItem.ReviewUrl && ctx_r4.showMore);
} }
const _c1 = function (a0) { return { "even-logo-wrapper": a0 }; };
const _c2 = function (a0, a1) { return { "even-logo-wrapper": a0, "full-border-radius": a1 }; };
function ListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-circle-rating", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListItemComponent_div_0_div_5_Template, 9, 11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pris ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " SEK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Resultat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " VECKOR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " S\u00E5lda test ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " MILJONER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " S\u00E4ljer vidare DNA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ListItemComponent_div_0_div_31_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ListItemComponent_div_0_div_32_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " keyboard_arrow_right ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "10+ klick idag");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ListItemComponent_div_0_a_43_Template, 2, 2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r0.index % 2 != 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx_r0.listItem.LogoImage, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx_r0.index % 2 != 0, ctx_r0.showBreakDown == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx_r0.listItem.generalScore());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBreakDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.listItem.Price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.listItem.ResultTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.listItem.SoldTests, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listItem.ResellsDNA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.listItem.ResellsDNA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.listItem.AffiliateUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Till ", ctx_r0.listItem.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.listItem.ReviewUrl);
} }
class ListItemComponent {
    constructor(db) {
        this.db = db;
        this.showMore = true;
        this.index = 0;
        this.showBreakDown = true;
    }
    ngOnInit() {
        //If list item name get it from db
        if (this.listItemName) {
            this.listItem = this.db.listItems.find(x => x.Name == this.listItemName);
        }
    }
}
ListItemComponent.ɵfac = function ListItemComponent_Factory(t) { return new (t || ListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
ListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemComponent, selectors: [["app-list-item"]], inputs: { listItem: "listItem", listItemName: "listItemName", showMore: "showMore", index: "index", showBreakDown: "showBreakDown" }, decls: 1, vars: 1, consts: [["class", "list-item", 4, "ngIf"], [1, "list-item"], [1, "logo-wrapper", 3, "ngClass"], [1, "logo"], [1, "main-score-wrapper", 3, "ngClass"], ["explanation", "Betyg", "widthInput", "65px", "heightInput", "65px", 1, "main-score", 3, "percentage"], ["class", "scores-list-wrapper", 3, "ngClass", 4, "ngIf"], [1, "featured-benefits-wrapper"], [1, "featured-benefits"], [1, "featured-benefits-title"], [1, "featured-benefits-value"], [1, "featured-benefits-unit"], ["class", "featured-benefits-value", 4, "ngIf"], [1, "actions-wrapper"], [3, "href"], [1, "open"], [1, "material-icons"], [1, "speech-bubble"], [3, "routerLink", 4, "ngIf"], [1, "scores-list-wrapper", 3, "ngClass"], [1, "score-in-list"], ["stroke", "#ff0032", "explanation", "Ursprung", "widthInput", "45px", "heightInput", "45px", 2, "display", "inline-block", 3, "percentage", "showExplanation"], ["stroke", "#ff0032", "explanation", "Sl\u00E4ktforskning", "widthInput", "45px", "heightInput", "45px", 2, "display", "inline-block", 3, "percentage", "showExplanation"], ["stroke", "#ff0032", "explanation", "Anv\u00E4ndbarhet", "widthInput", "45px", "heightInput", "45px", 2, "display", "inline-block", 3, "percentage", "showExplanation"], ["stroke", "#ff0032", "explanation", "Kundsupport", "widthInput", "45px", "heightInput", "45px", 2, "display", "inline-block", 3, "percentage", "showExplanation"], [3, "routerLink"], ["class", "more", 4, "ngIf"], [1, "more"]], template: function ListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListItemComponent_div_0_Template, 44, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_4__["CircleRatingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".list-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  \n  box-shadow: 0 1px 7px 0 rgba(160, 166, 168, 0.35);\n  border-radius: 15px;\n  background-color: white;\n  margin-top: 15px;\n  padding: 10px;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  width: 200px;\n  height: 170px;\n  background-image: url(/assets/images/myheritage2.png);\n  background-size: 80%;\n  background-position: bottom;\n  background-repeat: no-repeat;\n}\n\n.even-logo-wrapper[_ngcontent-%COMP%] {\n  background-color: #1f2e38 !important;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  background-image: url(/assets/images/myheritage-transparent.png);\n  background-size: 80%;\n  background-position: top;\n  background-repeat: no-repeat;\n}\n\n.main-score-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  padding-top: 35px;\n  padding-left: 55px;\n  vertical-align: top;\n  display: inline-block;\n  width: 180px;\n  height: 180px;\n  background-color: #102b3e;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n\n.full-border-radius[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n\n.even-score[_ngcontent-%COMP%] {\n  background-color: #204358 !important;\n}\n\n.scores-list-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  vertical-align: top;\n  display: inline-block;\n  width: 200px;\n  height: 180px;\n  background-color: #103650;\n  border-top-right-radius: 15px;\n  border-bottom-right-radius: 15px;\n}\n\n.score-in-list[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 50%;\n  margin-top: 4px;\n  text-align: center;\n}\n\n.featured-benefits-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  vertical-align: top;\n  display: inline-block;\n  width: calc(100% - 810px);\n  height: 200px;\n}\n\n.featured-benefits[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  width: calc(50% - 5px);\n  height: 85px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  background-color: #f1f2f3;\n  border-radius: 15px;\n}\n\n.featured-benefits[_ngcontent-%COMP%]:nth-of-type(even) {\n  margin-right: 0;\n}\n\n.actions-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  vertical-align: top;\n  display: inline-block;\n  width: 200px;\n  height: 180px;\n}\n\n.open[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  padding: 5px;\n  background-color: #ff0032;\n  border-bottom: 2px solid #ce0029;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.open[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 40px;\n  vertical-align: top;\n  display: inline-block;\n  color: white;\n}\n\n.more[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  padding: 5px;\n  margin-top: 10px;\n  background-color: #f5f5f5;\n  border-bottom: 2px solid #cacaca;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.more[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 40px;\n  vertical-align: top;\n  display: inline-block;\n  color: black;\n}\n\n.updated-at[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.purchases[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n  font-size: 12px;\n}\n\n.featured-benefits-title[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-align: center;\n  font-size: 13px;\n  background-color: #f1f2f3;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n}\n\n.featured-benefits-value[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  text-align: center;\n  font-size: 18px;\n}\n\n.featured-benefits-unit[_ngcontent-%COMP%] {\n  margin-top: 1px;\n  text-align: center;\n  font-size: 13px;\n}\n\n.speech-bubble[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #a7a7a7;\n  margin-top: 12px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 13px;\n  padding: 5px;\n  display: none;\n}\n\n.speech-bubble[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 10px solid transparent;\n  border-bottom-color: #a7a7a7;\n  border-top: 0;\n  margin-left: -10px;\n  margin-top: -10px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.actions-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.featured-benefits-wrapper[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 0px;\n  width: 100%;\n  height: auto;\n}\n\n.featured-benefits[_ngcontent-%COMP%] {\n  width: calc(25% - 4px);\n  margin: 0;\n  min-height: 70px;\n  margin-left: 5px !important;\n  margin-right: 0px !important;\n}\n\n.featured-benefits[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-left: 0px !important;\n}\n\n.featured-benefits[_ngcontent-%COMP%]:nth-of-type(4) {\n  margin-right: 0px;\n}\n\n.featured-benefits-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.featured-benefits-value[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: 14px;\n}\n\n.featured-benefits-unit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -3px;\n}\n\n.scores-list-wrapper[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 15px;\n  border-top-right-radius: 0;\n  margin-left: 0px;\n  width: 100%;\n  height: auto;\n  padding-bottom: 30px;\n}\n\n.score-in-list[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.logo-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  width: 50%;\n  height: 110px;\n  background-color: #102b3e;\n  background-image: none;\n  border-top-left-radius: 15px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  height: 110px;\n  background-size: 75%;\n  background-position: center;\n}\n\n.main-score-wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 110px;\n  margin-left: 0;\n  padding-top: 0;\n  padding-left: 0;\n  border-top-right-radius: 15px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  text-align: center;\n}\n\n.main-score[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n@media screen and (max-width: 450px) {\n  .featured-benefits-title[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .featured-benefits-value[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 13px;\n  }\n\n  .featured-benefits-unit[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-top: -3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEscURBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLG9DQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdFQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxvQ0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZKOztBQVNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FBTko7O0FBU0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLGVBQUE7QUFOSjs7QUFTQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFQSjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUEo7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFHQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVJKOztBQVdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0VBQ0csNEJBQUE7RUFDSCxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVJEOztBQVlJO0VBQ0ksWUFBQTtBQVRSOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSUjs7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBSOztBQVNJO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBTlI7O0FBUUk7RUFDSSwyQkFBQTtBQUxSOztBQU9JO0VBQ0ksaUJBQUE7QUFKUjs7QUFNSTtFQUNJLGVBQUE7QUFIUjs7QUFLSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBRlI7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFHSTtFQUNJLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBUjs7QUFFSTtFQUNJLFVBQUE7QUFDUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDUjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0FBRVI7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBR1I7O0FBREk7RUFDSSxxQkFBQTtBQUlSOztBQUFFO0VBQ0U7SUFDSSxlQUFBO0VBR047O0VBREU7SUFDSSxlQUFBO0lBQ0EsZUFBQTtFQUlOOztFQUZFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBS047QUFDRiIsImZpbGUiOiJsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIC8qYm94LXNoYWRvdzogMCAycHggNHB4IDAgI2U3ZjBmNzsqL1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggN3B4IDAgcmdiYSgxNjAsMTY2LDE2OCwwLjM1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubG9nby13cmFwcGVyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMTE5LCA1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbXloZXJpdGFnZTIucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmV2ZW4tbG9nby13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjJlMzggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbXloZXJpdGFnZS10cmFuc3BhcmVudC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubWFpbi1zY29yZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzFkNjlhMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDJiM2U7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmZ1bGwtYm9yZGVyLXJhZGl1cyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZXZlbi1zY29yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA0MzU4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY29yZXMtbGlzdC13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDM2NTA7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxQzg5RDY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NvcmUtaW4tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8vIC5zY29yZS1pbi1saXN0Om50aC1vZi10eXBlKGV2ZW4pIHtcclxuLy8gICAgIHdpZHRoOiA0MCU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyB9XHJcblxyXG4uZmVhdHVyZWQtYmVuZWZpdHMtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODEwcHgpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJlbmVmaXRzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MiwgMjQzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1iZW5lZml0czpudGgtb2YtdHlwZShldmVuKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5hY3Rpb25zLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM0Q0M3OTA7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmQ4YzYxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAzMjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjA2LCAwLCA0MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5vcGVuID4gc3BhbiB7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NhY2FjYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1vcmUgPiBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnVwZGF0ZWQtYXQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnB1cmNoYXNlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1iZW5lZml0cy10aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MiwgMjQzKTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJlbmVmaXRzLXZhbHVlIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWJlbmVmaXRzLXVuaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uc3BlZWNoLWJ1YmJsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxQzg5RDY7XHJcbiAgICAvL2NvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2E3YTc7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2E3YTdhNztcclxuXHRib3JkZXItdG9wOiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuXHRtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExNnB4KSB7XHJcbiAgICAubGlzdC1pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYWN0aW9ucy13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5mZWF0dXJlZC1iZW5lZml0cy13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVkLWJlbmVmaXRzIHtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSA0cHgpO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVkLWJlbmVmaXRzOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZWQtYmVuZWZpdHM6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVkLWJlbmVmaXRzLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZWQtYmVuZWZpdHMtdmFsdWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZWQtYmVuZWZpdHMtdW5pdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICB9XHJcbiAgICAuc2NvcmVzLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5zY29yZS1pbi1saXN0IHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgLmxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2OWEwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDJiM2U7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA3NSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1haW4tc2NvcmUtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1haW4tc2NvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuLy8gICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuZmVhdHVyZWQtYmVuZWZpdHMtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICAgIC5mZWF0dXJlZC1iZW5lZml0cy12YWx1ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5mZWF0dXJlZC1iZW5lZml0cy11bml0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-item',
                templateUrl: './list-item.component.html',
                styleUrls: ['./list-item.component.scss']
            }]
    }], function () { return [{ type: _shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }]; }, { listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItemName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showMore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showBreakDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/models */ "RKUb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "o0su");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/db/database.service */ "qzT4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = ["stickyMenu"];
const _c1 = ["top"];
const _c2 = ["stickyMenuStop"];
const _c3 = ["itemWrapper"];
function HomeComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "sort-option-selected": a0 }; };
function HomeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_46_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const k_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.sortBy(k_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, i_r8[1] == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r8[0], " ");
} }
const _c5 = function (a0) { return { "first-item": a0 }; };
function HomeComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-list-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.$implicit;
    const k_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c5, k_r13 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listItem", i_r12)("index", k_r13);
} }
const _c6 = function (a0) { return { "sort-show": a0 }; };
class HomeComponent {
    constructor(title, db, router, metaService) {
        this.title = title;
        this.db = db;
        this.router = router;
        this.metaService = metaService;
        this.listItems = [];
        this.sortOptions = [["Högst betyg", true], ["Mest prisvärd", false,], ["Pris, stigande", false], ["Pris, sjunkande", false], ["Popularitet", false]];
        this.showSortOptions = false;
        this.sticky = false;
        this.title.setTitle('Jämför de bästa DNA-testen för ursprung och släktforskning just nu');
        this.metaService.updateTag({ name: 'description', content: 'Vill du ta reda på ditt ursprung och hitta släktingar du inte kände till? Med ett DNA-test lär du dig mer om dig själv. Vi har jämfört de bästa DNA-testen 2021.' });
        this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    }
    ngOnInit() {
        this.listItems = this.db.listItems;
        this.sortBy(0);
        if (this.menuPosition)
            this.menuPosition = this.menuElement.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
        if (this.stopPosition)
            this.stopPosition = this.stopElement.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
        if (this.itemWrapperHeight)
            this.itemWrapperHeight = this.itemWrapper.nativeElement.offsetHeight;
    }
    ngAfterViewInit() {
        this.menuPosition = this.menuElement.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
        this.stopPosition = this.stopElement.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
        this.itemWrapperHeight = this.itemWrapper.nativeElement.offsetHeight;
    }
    handleScroll() {
        if (window.innerWidth <= 1116) {
            return;
        }
        const windowScroll = window.pageYOffset;
        console.log(this.stopPosition, this.menuPosition);
        if (windowScroll >= this.menuPosition - 5) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
        if (windowScroll > (this.stopPosition - this.menuElement.nativeElement.offsetHeight)) {
            this.sticky = false;
            this.menuElement.nativeElement.style.marginTop = this.itemWrapperHeight - this.menuElement.nativeElement.offsetHeight + "px";
        }
        else {
            this.menuElement.nativeElement.style.marginTop = "15px";
        }
    }
    sortBy(index) {
        for (let option of this.sortOptions) {
            option[1] = false;
        }
        this.sortOptions[index][1] = true;
        if (index == 0) {
            this.listItems.sort((a, b) => (a.generalScore() < b.generalScore()) ? 1 : (a.generalScore() === b.generalScore()) ? ((a.generalScore() < b.generalScore()) ? 1 : -1) : -1);
        }
        else if (index == 1) {
            this.listItems.sort((a, b) => ((a.generalScore() / a.Price) < (b.generalScore() / b.Price)) ? 1 : ((a.generalScore() / a.Price) === (b.generalScore() / b.Price)) ? (((a.generalScore() / a.Price) < (b.generalScore() / b.Price)) ? 1 : -1) : -1);
        }
        else if (index == 2) {
            this.listItems.sort((a, b) => (+a.Price > +b.Price) ? 1 : (+a.Price === +b.Price) ? ((+a.Price > +b.Price) ? 1 : -1) : -1);
        }
        else if (index == 3) {
            this.listItems.sort((a, b) => (+a.Price < +b.Price) ? 1 : (+a.Price === +b.Price) ? ((+a.Price < +b.Price) ? 1 : -1) : -1);
        }
        else if (index == 4) {
            this.listItems.sort((a, b) => (+a.SoldTests < +b.SoldTests) ? 1 : (+a.SoldTests === +b.SoldTests) ? ((+a.SoldTests < +b.SoldTests) ? 1 : -1) : -1);
        }
    }
    toggleSorter() {
        console.log(this.showSortOptions);
        this.showSortOptions = !this.showSortOptions;
    }
    fetchPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var params = {
                "preview": 0,
                "page": 1,
                "page_size": 10,
                "locale": 'en',
                "levels": 2
            };
            var listItems = yield _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].content.retrieve(['product_overviews']);
            console.log(listItems);
            for (let listItem of listItems.data.data.product_overviews) {
                this.listItems.push({
                    Name: listItem.product_name,
                    LogoImage: listItem.logo,
                    ProductImage: listItem.logo,
                    Title: listItem.product_name,
                    HeritageScore: listItem.betyg_ursprung,
                    UsabilityScore: listItem.betyg_anvndbarhet,
                    GenealogyScore: listItem.betyg_slktforskning,
                    CustomerSupportScore: listItem.betyg_kundsupport,
                    Price: listItem.pris,
                    ResultTime: listItem.resultat_tid,
                    SoldTests: listItem.slda_test,
                    ResellsDNA: listItem.sljer_vidare_dna,
                    ShowDailyClicks: false,
                    AffiliateUrl: listItem.affiliate_url,
                    ReviewUrl: listItem.product_review_url ? ('/' + listItem.product_review_url) : null,
                    generalScore: _shared_models_models__WEBPACK_IMPORTED_MODULE_2__["ListItemModel"].prototype.generalScore
                });
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.topElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stopElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemWrapper = _t.first);
    } }, hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 118, vars: 9, consts: [[1, "top"], ["top", ""], [1, "container", "list-container"], [1, "row"], [1, "col-12", "home-catcher-wrapper"], [1, "home-catcher-explanation"], [1, "home-catcher-title"], [1, "home-catcher-text"], [1, "home-catcher-main"], [1, "col-7", "big-catcher"], ["routerLink", "/myheritage-recension"], [1, "big-catcher-box"], [1, "big-catcher-box-gradient"], [1, "big-catcher-box-text"], [1, "big-catcher-box-text-explanation"], [1, "col-5", "other-catchers"], [1, "catcher-box"], ["routerLink", "/hur-fungerar-dna-test"], [1, "catcher-box-gradient"], [1, "catcher-box-text"], [1, "catcher-box-text", "catcher-box-text-two-rows"], [1, "padder"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-11.00,40.95 C149.99,150.00 338.88,-0.48 512.13,75.48 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#f8f8f8"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "sorter-wrapper"], [1, "sorter", 3, "ngClass"], ["stickyMenu", ""], [1, "sort-by-button", "no-select", 3, "click"], [1, "sort-by-icon"], ["class", "material-icons", 4, "ngIf"], [1, "sort-by"], ["class", "sort-option no-select", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "item-wrapper"], ["itemWrapper", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "text-left"], ["stickyMenuStop", ""], [1, "home-title"], [1, "col-12", "mt-2"], [1, "col-4", "grey-box-wrapper"], [1, "grey-box", "h-100"], [1, "grey-box-icon-wrapper"], [1, "material-icons"], [1, "grey-box-title"], [1, "text", "text-center"], [1, "col-12"], [1, "faq-left"], [1, "faq-title"], [1, "faq-text"], [1, "faq-right"], [1, "sort-option", "no-select", 3, "ngClass", "click"], [3, "ngClass"], [3, "listItem", "index"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Uppt\u00E4ck dina r\u00F6tter och hitta nya sl\u00E4ktingar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Vill du ta reda p\u00E5 mer om ditt ursprung och sl\u00E4kthistora? Leta inte mer - v\u00E5r guide \u00E4r skapad av ett team som brinner f\u00F6r just detta. P\u00E5 hemsidan finns en komplett j\u00E4mf\u00F6relse av olika DNA-test, inneh\u00E5llsrika guider samt inspirerande anv\u00E4ndarber\u00E4ttelser som \u00E4r till f\u00F6r att hj\u00E4lpa dig p\u00E5 din DNA-resa. V\u00E4lkommen! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Recension av MyHeritage, DNA-test och sl\u00E4ktforskning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Mest och b\u00E4st f\u00F6r pengarna? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " S\u00E5 fungerar DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Josephine \u00E5terf\u00F6renad med sin pappa efter 30 \u00E5r ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_39_listener() { return ctx.toggleSorter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, HomeComponent_span_41_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, HomeComponent_span_42_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Sortera");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 2, 4, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, HomeComponent_div_49_Template, 2, 5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h1", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Tre steg f\u00F6r att ta reda p\u00E5 mer om dig sj\u00E4lv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "markunread_mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Best\u00E4ll hem ett DNA-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Best\u00E4ll hem det DNA-test som b\u00E4st passar dina \u00F6nskem\u00E5l. F\u00F6lj sedan medf\u00F6ljande instruktioner f\u00F6r att l\u00E4mna ett prov av din saliv.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Skicka tillbaka och v\u00E4nta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Skicka sedan tillbaka ditt DNA-kit f\u00F6r analys. Du hittar ungef\u00E4rlig v\u00E4ntetid f\u00F6r de olika f\u00F6retagen i v\u00E5r j\u00E4mf\u00F6relse ovan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "biotech");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Se ditt resultat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Efter n\u00E5gra veckor har du ditt resultat! Detta skickas med e-post till dig s\u00E5 fort analysen \u00E4r klar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h1", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Vanliga fr\u00E5gor (FAQ)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Hur fungerar DNA-test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " De DNA-test som visas p\u00E5 v\u00E5r hemsida best\u00E5r av ett kit som man best\u00E4ller hem till sin adress. I det kit man best\u00E4llt medkommer en beh\u00E5llare som man sparar sitt saliv inuti. Beh\u00E5llaren skickas sedan tillbaka till f\u00F6retaget i ett medf\u00F6ljande kuvert. DNA extraheras och analyseras sedan f\u00F6r att bland annat identifiera ursprung. Vad mer som analyseras beror p\u00E5 vilket kit du v\u00E4ljer att best\u00E4lla hem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Vilka f\u00F6rdelar finns med att genomf\u00F6ra ett DNA-test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " Det finns flera positiva sk\u00E4l till att genomf\u00F6ra ett DNA-test. Den vanligaste anledningen att best\u00E4lla hem ett DNA-test \u00E4r f\u00F6r att ta reda p\u00E5 mer sitt ursprung. Flera DNA-test hj\u00E4lper dig ocks\u00E5 att hitta sl\u00E4ktingar genom att j\u00E4mf\u00F6ra ditt DNA med andra m\u00E4nniskor som ocks\u00E5 l\u00E5tit sitt DNA analyseras. Man kan ocks\u00E5 genomf\u00F6ra DNA-test f\u00F6r att ta reda p\u00E5 om man b\u00E4r p\u00E5 vissa gener, till exempel gener som p\u00E5verkar h\u00E4lsa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Vad kostar ett DNA-test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " De tj\u00E4nster som erbjuder DNA-test har en prisniv\u00E5 mellan 600-1500 kr. Priserna varierar mellan f\u00F6retagen, men det \u00E4r inte alltid det dyraste testet som \u00E4r b\u00E4st. Anv\u00E4nd v\u00E5r j\u00E4mf\u00F6relse ovan f\u00F6r att se hur vi rankat de olika DNA-testen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Hur p\u00E5litliga \u00E4r DNA-test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " Ju fler personer som genomf\u00F6rt ett DNA-test hos en visst tj\u00E4nst, desto b\u00E4ttre \u00E4r resultatet. Detta beror p\u00E5 att tj\u00E4nsternas analyser blir b\u00E4ttre allt eftersom deras DNA-databaser v\u00E4xer och de har mer material att j\u00E4mf\u00F6ra med. De tj\u00E4nster som vi valt att ranka har funnits i branschen l\u00E4nge och \u00E4r p\u00E5litliga. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\u00C4r det sv\u00E5rt att genomf\u00F6ra ett DNA-test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Nej, det \u00E4r en v\u00E4ldigt enkel process. F\u00F6retagen som erbjuder DNA-test kommersiellt har tagit fram DNA-kit med tydliga instruktioner som \u00E4r enkla att f\u00F6lja. L\u00E4s v\u00E5r guide f\u00F6r att ta reda p\u00E5 hur det fungerar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "N\u00E4r f\u00E5r jag mitt resultat efter att jag skickat tillbaka DNA-provet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " Hur l\u00E5ng tid det tar att f\u00E5 svar efter inskickat prov beror p\u00E5 vilken tj\u00E4nst du valt att anv\u00E4nda, men de flesta av tj\u00E4nsterna ger dig svar efter 4 till 12 veckor. Anv\u00E4nd v\u00E5r j\u00E4mf\u00F6relse f\u00F6r att reda p\u00E5 hur tj\u00E4nsterna m\u00E4ter sig med varandra. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sticky", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c6, ctx.showSortOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sortOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, styles: [".home-title[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.grey-box-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n  line-height: 1.3636;\n  font-weight: 600;\n  margin-bottom: 5px;\n  text-align: center;\n}\n\n.faq-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.faq-text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-size: 17px;\n  font-weight: normal;\n  line-height: 24px;\n}\n\n@media screen and (max-width: 1116px) {\n  .home-title[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxnQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmdyZXktYm94LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM2MzY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmFxLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmZhcS10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTZweCkge1xyXG4gICAgLmhvbWUtdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }]; }, { menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stickyMenu']
        }], topElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['top']
        }], stopElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stickyMenuStop']
        }], itemWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['itemWrapper']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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

/***/ "QRG1":
/*!****************************************************!*\
  !*** ./src/app/pages/posts/post/post.component.ts ***!
  \****************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/models */ "RKUb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/db/database.service */ "qzT4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








const _c0 = ["stickyMenuStart"];
const _c1 = ["stickyMenuStop"];
const _c2 = ["top"];
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sticky-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listItem", ctx_r0.productOverview);
} }
function PostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.post.data.title);
} }
function PostComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.post.data.summary, " ");
} }
function PostComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 31);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r5.post.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
const _c3 = function (a0) { return { "first-item": a0 }; };
function PostComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-list-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const k_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c3, k_r9 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listItem", i_r8)("index", k_r9)("showBreakDown", false);
} }
class PostComponent {
    constructor(router, db, metaService, title) {
        this.router = router;
        this.db = db;
        this.metaService = metaService;
        this.title = title;
        this.listItems = [];
        this.productOverview = {
            Name: '',
            LogoImage: '',
            ProductImage: '',
            Title: '',
            HeritageScore: 0,
            UsabilityScore: 0,
            GenealogyScore: 0,
            CustomerSupportScore: 0,
            Price: 0,
            ResultTime: 0,
            SoldTests: 0,
            ResellsDNA: false,
            ShowDailyClicks: false,
            AffiliateUrl: '',
            ReviewUrl: '',
            generalScore: src_app_shared_models_models__WEBPACK_IMPORTED_MODULE_2__["ListItemModel"].prototype.generalScore
        };
        this.showMore = false;
        this.summaryBenefits = [];
        this.summaryNegatives = [];
        this.sticky = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listItems = this.db.listItems.slice(0, 2);
            var res = yield this.fetchPosts();
            this.title.setTitle(res.data.data.seo_title);
            this.metaService.updateTag({ name: 'description', content: res.data.data.meta_description });
            this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
            if (this.stickyPosition) {
                this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
            }
        });
    }
    ngAfterViewInit() {
        this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        this.stickyStopPosition = this.stickyMenuStop.nativeElement.offsetTop - 50;
        if (windowScroll >= this.stickyPosition && windowScroll < this.stickyStopPosition) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
        if (this.router.url == '/om-oss') {
            this.sticky = false;
        }
    }
    fetchPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var params = {
                "preview": 0,
                "page": 1,
                "page_size": 10,
                "locale": 'en',
                "levels": 2
            };
            var slug = this.router.url.split('/')[this.router.url.split('/').length - 1];
            var res = yield _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].post.retrieve(slug);
            this.post = res.data;
            console.log(res);
            //Parse updated at time
            this.updatedAt = this.post.data.updated.split("T")[0];
            this.productOverview = this.db.listItems[0];
            return res;
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], viewQuery: function PostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stickyMenuStart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stickyMenuStop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.topElement = _t.first);
    } }, hostBindings: function PostComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function PostComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 36, vars: 6, consts: [["class", "stickyItem", 4, "ngIf"], [1, "top"], ["top", ""], [1, "container", "list-container", 2, "max-width", "1300px"], [1, "row"], [1, "col-12", "home-catcher-wrapper"], [1, "home-catcher-explanation"], ["class", "home-catcher-title", 4, "ngIf"], ["class", "home-catcher-text", 4, "ngIf"], [1, "padder"], ["stickyMenuStart", ""], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-11.00,40.95 C149.99,150.00 338.88,-0.48 512.13,75.48 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#f8f8f8"], [1, "container", "list-container", 2, "margin-top", "30px", "max-width", "1000px"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "col-12", "mt-4"], [3, "innerHTML", 4, "ngIf"], [2, "font-size", "15px"], [1, "col-12", "mt-4", "text-left"], ["stickyMenuStop", ""], [1, "home-title"], [1, "col-12", 2, "padding-bottom", "10px"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-2", "text-center"], ["routerLink", "/alla-test"], [1, "open"], [1, "material-icons"], [1, "stickyItem"], [3, "listItem"], [1, "home-catcher-title"], [1, "home-catcher-text"], [3, "innerHTML"], [3, "ngClass"], [3, "listItem", "index", "showBreakDown"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PostComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PostComponent_div_7_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PostComponent_p_8_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PostComponent_div_16_Template, 1, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "DNA-test med h\u00F6gst betyg just nu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PostComponent_div_27_Template, 2, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Visa alla test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " keyboard_arrow_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Uppdaterad: ", ctx.updatedAt, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listItems);
    } }, styles: [".grey-box-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.3636;\n  font-weight: 600;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.summary-benefit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 34px;\n  background-color: #f1f2f3;\n  color: #144d14;\n  border-radius: 15px;\n  font-weight: normal;\n  line-height: 24px;\n  text-align: left;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.negative[_ngcontent-%COMP%] {\n  background-color: #f1f2f3;\n  color: #a12e26;\n}\n\n.negative.first[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stickyItem[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65x;\n  width: 100%;\n  left: 0;\n  background-color: white;\n  box-shadow: 0 1px 7px 0 rgba(160, 166, 168, 0.35);\n  z-index: 10;\n}\n\n.summary-text-wrapper[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 18px;\n  line-height: 28px;\n}\n\n.home-title[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-weight: bold;\n  font-size: 25px;\n}\n\n.open[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  padding: 5px;\n  background-color: #ffffff;\n  border-bottom: 2px solid #7c858b;\n  border-radius: 15px;\n  cursor: pointer;\n}\n\n.open[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 40px;\n  vertical-align: top;\n  display: inline-block;\n  color: black;\n}\n\n@media screen and (max-width: 1116px) {\n  .summary-benefits[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n  }\n\n  .summary-text-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 15px;\n  }\n\n  .home-title[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBR0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUFBTjs7RUFHRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBQU47O0VBR0U7SUFDSSxnQkFBQTtFQUFOO0FBQ0YiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmV5LWJveC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNjM2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWJlbmVmaXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmMztcclxuICAgIGNvbG9yOnJnYigyMCwgNzcsIDIwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubmVnYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjJmMztcclxuICAgIGNvbG9yOnJnYigxNjEsIDQ2LCAzOCk7XHJcbn1cclxuXHJcbi5uZWdhdGl2ZS5maXJzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc3RpY2t5SXRlbSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDY1eDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggN3B4IDAgcmdiKDE2MCAxNjYgMTY4IC8gMzUlKTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uc3VtbWFyeS10ZXh0LXdyYXBwZXIgPiBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuLmhvbWUtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ub3BlbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM0Q0M3OTA7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMmQ4YzYxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjN2M4NThiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ub3BlbiA+IHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTE2cHgpIHtcclxuICAgIC5zdW1tYXJ5LWJlbmVmaXRzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3VtbWFyeS10ZXh0LXdyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaG9tZS10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }]; }, { stickyMenuStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stickyMenuStart']
        }], stickyMenuStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stickyMenuStop']
        }], topElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['top']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "RKUb":
/*!*****************************************!*\
  !*** ./src/app/shared/models/models.ts ***!
  \*****************************************/
/*! exports provided: ListItemModel, ProductReview, SummaryBenefits, SummaryNegatives, PostCategory, BlogPostPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemModel", function() { return ListItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReview", function() { return ProductReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryBenefits", function() { return SummaryBenefits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryNegatives", function() { return SummaryNegatives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCategory", function() { return PostCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostPreview", function() { return BlogPostPreview; });
class ListItemModel {
    constructor() {
    }
    generalScore() {
        return (this.HeritageScore + this.UsabilityScore + this.GenealogyScore + this.CustomerSupportScore) / 4;
    }
}
class ProductReview {
}
class SummaryBenefits {
}
class SummaryNegatives {
}
class PostCategory {
}
class BlogPostPreview {
}


/***/ }),

/***/ "SkT8":
/*!**************************************************************************!*\
  !*** ./src/app/pages/reviews/product-review/product-review.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/models */ "RKUb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "o0su");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/db/database.service */ "qzT4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");








const _c0 = ["stickyMenuStart"];
const _c1 = ["top"];
function ProductReviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sticky-item", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listItem", ctx_r0.productOverview);
} }
function ProductReviewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Recension av ", ctx_r2.post.data.fields.product_review.name_of_product, "");
} }
function ProductReviewComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.post.data.fields.product_review.catcher, " ");
} }
function ProductReviewComponent_h3_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.post.data.fields.product_review.title);
} }
function ProductReviewComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 35);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r6.post.data.fields.product_review.summary, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ProductReviewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r11.Text);
} }
const _c2 = function (a0) { return { "first": a0 }; };
function ProductReviewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    const k_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, k_r14 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r13.Text);
} }
function ProductReviewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sammanlagt betyg: ", ctx_r9.productOverview.generalScore(), " / 100");
} }
function ProductReviewComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 40);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r10.post.data.fields.product_review.blog_post, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class ProductReviewComponent {
    constructor(router, db, title, metaService) {
        this.router = router;
        this.db = db;
        this.title = title;
        this.metaService = metaService;
        this.productOverview = {
            Name: '',
            LogoImage: '',
            ProductImage: '',
            Title: '',
            HeritageScore: 0,
            UsabilityScore: 0,
            GenealogyScore: 0,
            CustomerSupportScore: 0,
            Price: 0,
            ResultTime: 0,
            SoldTests: 0,
            ResellsDNA: false,
            ShowDailyClicks: false,
            AffiliateUrl: '',
            ReviewUrl: '',
            generalScore: src_app_shared_models_models__WEBPACK_IMPORTED_MODULE_2__["ListItemModel"].prototype.generalScore
        };
        this.showMore = false;
        this.summaryBenefits = [];
        this.summaryNegatives = [];
        this.sticky = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var res = yield this.fetchPosts();
            this.title.setTitle(res.data.data.fields.seo.title);
            this.metaService.updateTag({ name: 'description', content: res.data.data.fields.seo.meta_description });
            this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
            if (this.stickyPosition) {
                this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
            }
        });
    }
    ngAfterViewInit() {
        this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.stickyPosition) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
    fetchPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var params = {
                "preview": 0,
                "page": 1,
                "page_size": 10,
                "locale": 'en',
                "levels": 2
            };
            var slug = this.router.url.split('/')[this.router.url.split('/').length - 1];
            var res = yield _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].page.retrieve('recension', slug);
            this.post = res.data;
            console.log(res);
            //Parse benefits and negatives
            var benefits = this.post.data.fields.product_review.benefitsandnegatives;
            var list = benefits.split(",");
            for (let p of list) {
                if (p.indexOf(':') !== -1) {
                    var divide = p.split(":");
                    if (divide && divide.length > 0) {
                        if (divide[1] == "true") {
                            this.summaryBenefits.push({ Text: divide[0] });
                        }
                        else {
                            this.summaryNegatives.push({ Text: divide[0] });
                        }
                    }
                }
            }
            //Parse updated at time
            this.updatedAt = this.post.data.updated.split("T")[0];
            this.productOverview = this.db.listItems.find(x => x.Name == this.post.data.fields.product_review.name_of_product);
            return res;
        });
    }
}
ProductReviewComponent.ɵfac = function ProductReviewComponent_Factory(t) { return new (t || ProductReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"])); };
ProductReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductReviewComponent, selectors: [["app-product-review"]], viewQuery: function ProductReviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stickyMenuStart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.topElement = _t.first);
    } }, hostBindings: function ProductReviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ProductReviewComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 37, vars: 12, consts: [["class", "stickyItem", 4, "ngIf"], [1, "top"], ["top", ""], [1, "container", "list-container", 2, "max-width", "1300px"], [1, "row"], [1, "col-12", "home-catcher-wrapper"], [1, "home-catcher-explanation"], ["class", "home-catcher-title", 4, "ngIf"], ["class", "home-catcher-text", 4, "ngIf"], [1, "home-catcher-main"], [1, "app-list-item-wrapper"], [3, "listItem", "showMore"], [1, "padder"], ["stickyMenuStart", ""], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-11.00,40.95 C149.99,150.00 338.88,-0.48 512.13,75.48 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#f8f8f8"], [1, "container", "list-container", 2, "margin-top", "30px", "max-width", "1000px"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "col-12", "text-center"], [1, "grey-box", "h-100"], ["class", "grey-box-title", 4, "ngIf"], [1, "row", "summary"], ["class", "col-7 summary-text-wrapper", 3, "innerHTML", 4, "ngIf"], [1, "col-5", "summary-benefits"], ["class", "summary-benefit", 4, "ngFor", "ngForOf"], ["class", "summary-benefit negative", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4"], [2, "font-weight", "bold"], [3, "innerHTML", 4, "ngIf"], [2, "font-size", "15px"], [1, "stickyItem"], [3, "listItem"], [1, "home-catcher-title"], [1, "home-catcher-text"], [1, "grey-box-title"], [1, "col-7", "summary-text-wrapper", 3, "innerHTML"], [1, "summary-benefit"], [1, "material-icons", 2, "display", "inline-block", "margin-left", "15px", "margin-top", "-2px", "vertical-align", "top"], [2, "display", "inline-block", "width", "calc(100% - 70px)", "margin-left", "15px", "vertical-align", "top"], [1, "summary-benefit", "negative", 3, "ngClass"], [3, "innerHTML"]], template: function ProductReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductReviewComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductReviewComponent_div_7_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductReviewComponent_p_8_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProductReviewComponent_h3_20_Template, 2, 1, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProductReviewComponent_div_22_Template, 1, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProductReviewComponent_div_24_Template, 5, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProductReviewComponent_div_25_Template, 5, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ProductReviewComponent_div_27_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "V\u00E5ra recensioner av DNA-test betygs\u00E4tter de fyra kategorier som vi bed\u00F6mer \u00E4r viktigast; ursprung, sl\u00E4ktforskning, anv\u00E4ndbarhet och kundsupport. Vi har valt ut dessa kategorier genom att sammanst\u00E4lla information som vi samlat in genom research och tester. Det sammanlagda betyget \u00E4r medelv\u00E4rdet av betygen f\u00F6r de fyra kategorierna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ProductReviewComponent_div_32_Template, 1, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listItem", ctx.productOverview)("showMore", ctx.showMore);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.summaryBenefits);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.summaryNegatives);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productOverview);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Uppdaterad: ", ctx.updatedAt, "");
    } }, styles: [".grey-box-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.3636;\n  font-weight: 600;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.summary-benefit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 34px;\n  background-color: #f1f2f3;\n  color: #144d14;\n  border-radius: 15px;\n  font-weight: normal;\n  line-height: 24px;\n  text-align: left;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.negative[_ngcontent-%COMP%] {\n  background-color: #f1f2f3;\n  color: #a12e26;\n}\n\n.negative.first[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stickyItem[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65x;\n  width: 100%;\n  left: 0;\n  background-color: white;\n  box-shadow: 0 1px 7px 0 rgba(160, 166, 168, 0.35);\n  z-index: 10;\n}\n\n.summary-text-wrapper[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 18px;\n  line-height: 28px;\n}\n\n@media screen and (max-width: 1116px) {\n  .summary-benefits[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n  }\n\n  .summary-text-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZHVjdC1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxpREFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQUVOOztFQUNFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InByb2R1Y3QtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXktYm94LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM2MzY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1bW1hcnktYmVuZWZpdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xyXG4gICAgY29sb3I6cmdiKDIwLCA3NywgMjApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5uZWdhdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xyXG4gICAgY29sb3I6cmdiKDE2MSwgNDYsIDM4KTtcclxufVxyXG5cclxuLm5lZ2F0aXZlLmZpcnN0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zdGlja3lJdGVtIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA3cHggMCByZ2IoMTYwIDE2NiAxNjggLyAzNSUpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXRleHQtd3JhcHBlciA+IHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMTZweCkge1xyXG4gICAgLnN1bW1hcnktYmVuZWZpdHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdW1tYXJ5LXRleHQtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-product-review',
                templateUrl: './product-review.component.html',
                styleUrls: ['./product-review.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_db_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }]; }, { stickyMenuStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['stickyMenuStart']
        }], topElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['top']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");








class AppComponent {
    constructor(router, pageTitle, metaService) {
        this.router = router;
        this.pageTitle = pageTitle;
        this.metaService = metaService;
        this.title = 'test-dna';
        this.currentYear = new Date().getFullYear();
        this.navToggled = false;
        console.log("test");
        this.pageTitle.setTitle('Jämför de bästa DNA-testen för ursprung och släktforskning just nu');
        this.metaService.addTags([
            { name: 'description', content: 'Vill du ta reda på ditt ursprung och hitta släktingar du inte kände till? Med ett DNA-test lär du dig mer om dig själv. Vi har jämfört de bästa DNA-testen 2021.' },
            { name: 'robots', content: 'index, follow' }
        ]);
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // gtag('config', 'UA-144702517-1', 
                //       {
                //         'page_path': event.urlAfterRedirects
                //       }
                //      );
            }
        });
    }
    toggled() {
        this.navToggled = !this.navToggled;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 70, vars: 8, consts: [[2, "position", "fixed", "top", "0", "z-index", "100", "width", "100%", 3, "mnuOpen", "sidenavToggle"], ["role", "navigation", 3, "autoFocus", "closedStart", "openedStart"], ["sidenav", ""], [3, "click"], [2, "height", "56px"], ["mat-list-item", "", 1, "menu-item", 3, "routerLink"], [1, "footer-curve"], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-11.00,40.95 C149.99,150.00 338.88,-0.48 512.13,75.48 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#102b3e"], [1, "footer"], [1, "container", "list-container"], [1, "row"], [1, "col-12"], [1, "logo-and-info"], [1, "image-wrapper"], ["src", "assets/images/logo.png", 1, "logo-grey"], [1, "footer-info"], [1, "sitemap"], [1, "sitemap-category"], [1, "sitemap-category-title"], [1, "sitemap-category-list"], ["routerLink", "myheritage-recension"], [1, "sitemap-category-list-item"], ["routerLink", "family-tree-dna-recension"], ["routerLink", "living-dna-recension"], ["routerLink", "hur-fungerar-dna-test"], ["routerLink", "slaktforskning"], ["routerLink", "alla-test"], ["routerLink", "om-oss"], ["href", "mailto:kontakt@testdna.se"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_header_sidenavToggle_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_5_listener() { return ctx.toggled(); })("openedStart", function AppComponent_Template_mat_sidenav_openedStart_5_listener() { return ctx.toggled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_nav_list_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " J\u00E4mf\u00F6r DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " S\u00E5 fungerar DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sl\u00E4ktforskning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Inspirerande stories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Kontakta oss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " TestDNA \u00E4r Sveriges b\u00E4sta och fr\u00E4msta hemsida f\u00F6r att j\u00E4mf\u00F6ra DNA-test. P\u00E5 TestDNA.se l\u00E4r du dig om hur DNA-test fungerar och vilket test som b\u00E4st uppn\u00E5r dina krav. Filtrera efter dina \u00F6nskem\u00E5l och v\u00E4lj r\u00E4tt DNA-test att best\u00E4lla hem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Recensioner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " MyHeritage - mest och b\u00E4st f\u00F6r pengarna? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Recension av Family Tree DNA - ditt DNA i detalj ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Recension av Living DNA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Guider och verktyg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " S\u00E5 fungerar DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Sl\u00E4ktforskning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \u00D6verblick \u00F6ver alla DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Om oss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Samarbeta med TestDNA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mnuOpen", ctx.navToggled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoFocus", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/alla-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/hur-fungerar-dna-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/slaktforskning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/inspirerande-stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/kontakta-oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", ctx.currentYear, " - TestDNA.se");
    } }, directives: [_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".mat-drawer-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  display: block;\n  \n  height: auto;\n  margin-top: 64px;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  height: auto !important;\n  overflow: auto;\n}\n\n@media (max-width: 959px) {\n  .mat-drawer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: auto;\n    height: 100vh;\n  }\n\n  .mat-drawer-container[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    -webkit-overflow-scrolling: touch;\n    display: block;\n    overflow: visible;\n    height: auto;\n  }\n\n  .mat-drawer-content[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    display: block;\n    height: auto !important;\n    overflow: visible;\n  }\n}\n\n@media (max-width: 599px) {\n  .mat-drawer-container[_ngcontent-%COMP%] {\n    margin-top: 56px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFDTjs7RUFDRTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUNBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBRU47O0VBQUU7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtFQUdOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLGdCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG59XHJcblxyXG4ubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAubWF0LWRyYXdlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubWF0LWRyYXdlci1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }]; }, null); })();


/***/ }),

/***/ "TW52":
/*!**********************************************************!*\
  !*** ./src/app/circle-rating/circle-rating.component.ts ***!
  \**********************************************************/
/*! exports provided: CircleRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleRatingComponent", function() { return CircleRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CircleRatingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx_r0.explanationFontSize)("margin-top", ctx_r0.explanationTop)("margin-left", ctx_r0.explanationLeft)("width", ctx_r0.explanationWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.explanation);
} }
class CircleRatingComponent {
    constructor() {
        this.showExplanation = true;
        this.widthInput = "70px";
        this.heightInput = "70px";
    }
    ngOnInit() {
        if (this.widthInput && this.heightInput) {
            this.width = +this.widthInput.replace("px", "");
            this.height = +this.heightInput.replace("px", "");
            this.scoreFontSize = ((this.height / 70) * 25) + "px";
            this.explanationFontSize = ((this.width / 70) * 18) - 1 + "px";
            this.scoreTop = ((this.height / 2) - (+this.scoreFontSize.replace("px", "") / 2)) + "px";
            this.explanationTop = ((this.width / 70) * -5) + "px";
            this.explanationLeft = (this.width / 2 * -1) + "px";
            this.explanationWidth = (this.width * 2) + "px";
        }
    }
}
CircleRatingComponent.ɵfac = function CircleRatingComponent_Factory(t) { return new (t || CircleRatingComponent)(); };
CircleRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircleRatingComponent, selectors: [["app-circle-rating"]], inputs: { percentage: "percentage", showExplanation: "showExplanation", widthInput: "widthInput", heightInput: "heightInput", stroke: "stroke", explanation: "explanation" }, decls: 6, vars: 18, consts: [[1, "wrapper"], [1, "score"], ["viewBox", "0 0 36 36", 1, "circular-chart"], ["d", "M18 2.0845\n        a 15.9155 15.9155 0 0 1 0 31.831\n        a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["class", "score-text", 3, "fontSize", "marginTop", "marginLeft", "width", 4, "ngIf"], [1, "score-text"]], template: function CircleRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CircleRatingComponent_div_5_Template, 2, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthInput)("height", ctx.heightInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.scoreFontSize)("top", ctx.scoreTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.percentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthInput)("height", ctx.heightInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dasharray", ctx.percentage)("stroke", ctx.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showExplanation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px auto;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  stroke: #ff0032;\n  fill: none;\n  stroke-width: 3;\n  stroke-linecap: round;\n  animation: progress 1s ease-out forwards;\n}\n\n@keyframes progress {\n  0% {\n    stroke-dasharray: 0 100;\n  }\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 70px;\n  max-height: 70px;\n}\n\n.score[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 25px;\n  left: 0;\n  text-align: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.score-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 100%;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNpcmNsZS1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsdUJBQUE7RUFDSjtBQUNGOztBQUVFO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFFRTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ047O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImNpcmNsZS1yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY3VsYXItY2hhcnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG1heC13aWR0aDogNzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjZmYwMDMyO1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMy4wO1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBwcm9ncmVzcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDAgMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1heC13aWR0aDogNzBweDtcclxuICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICB9XHJcbiAgLnNjb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnNjb3JlLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circle-rating',
                templateUrl: './circle-rating.component.html',
                styleUrls: ['./circle-rating.component.scss']
            }]
    }], function () { return []; }, { percentage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showExplanation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], widthInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heightInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stroke: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], explanation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WptP":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "9vUh");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
];
class RoutingModule {
}
RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoutingModule });
RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoutingModule_Factory(t) { return new (t || RoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabled' })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initApp, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing/routing.module */ "WptP");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/header/header.component */ "umHo");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list-item/list-item.component */ "7pUn");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rating/rating.component */ "n7cG");
/* harmony import */ var _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./circle-rating/circle-rating.component */ "TW52");
/* harmony import */ var _pages_myheritage_myheritage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/myheritage/myheritage.component */ "mEL0");
/* harmony import */ var _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sticky-item/sticky-item.component */ "spNu");
/* harmony import */ var _pages_reviews_livingdna_livingdna_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/reviews/livingdna/livingdna.component */ "x9xr");
/* harmony import */ var _pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/reviews/product-review/product-review.component */ "SkT8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_db_database_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/db/database.service */ "qzT4");
/* harmony import */ var _pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/posts/post/post.component */ "QRG1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






























;
function initApp(db, router) {
    return () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return router.config.concat(yield db.fetch()); });
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: initApp, deps: [_shared_db_database_service__WEBPACK_IMPORTED_MODULE_24__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]], multi: true },
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"],
        _rating_rating_component__WEBPACK_IMPORTED_MODULE_17__["RatingComponent"],
        _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_18__["CircleRatingComponent"],
        _pages_myheritage_myheritage_component__WEBPACK_IMPORTED_MODULE_19__["MyheritageComponent"],
        _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_20__["StickyItemComponent"],
        _pages_reviews_livingdna_livingdna_component__WEBPACK_IMPORTED_MODULE_21__["LivingdnaComponent"],
        _pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_22__["ProductReviewComponent"],
        _pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"],
                    _rating_rating_component__WEBPACK_IMPORTED_MODULE_17__["RatingComponent"],
                    _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_18__["CircleRatingComponent"],
                    _pages_myheritage_myheritage_component__WEBPACK_IMPORTED_MODULE_19__["MyheritageComponent"],
                    _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_20__["StickyItemComponent"],
                    _pages_reviews_livingdna_livingdna_component__WEBPACK_IMPORTED_MODULE_21__["LivingdnaComponent"],
                    _pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_22__["ProductReviewComponent"],
                    _pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                    _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"]
                ],
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: initApp, deps: [_shared_db_database_service__WEBPACK_IMPORTED_MODULE_24__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]], multi: true },
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_22__["ProductReviewComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_20__["StickyItemComponent"],
    _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetComponentScope"](_pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_20__["StickyItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_16__["ListItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterLinkWithHref"]], []);


/***/ }),

/***/ "mEL0":
/*!**********************************************************!*\
  !*** ./src/app/pages/myheritage/myheritage.component.ts ***!
  \**********************************************************/
/*! exports provided: MyheritageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyheritageComponent", function() { return MyheritageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../list-item/list-item.component */ "7pUn");
/* harmony import */ var _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sticky-item/sticky-item.component */ "spNu");





const _c0 = ["stickyMenuStart"];
const _c1 = ["top"];
function MyheritageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sticky-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MyheritageComponent {
    constructor() {
        this.showMore = false;
        this.sticky = false;
    }
    ngOnInit() {
        if (this.stickyPosition) {
            this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
        }
    }
    ngAfterViewInit() {
        this.stickyPosition = this.stickyMenuStart.nativeElement.offsetTop - this.topElement.nativeElement.offsetTop;
    }
    handleScroll() {
        const windowScroll = window.pageYOffset;
        if (windowScroll >= this.stickyPosition) {
            this.sticky = true;
        }
        else {
            this.sticky = false;
        }
    }
}
MyheritageComponent.ɵfac = function MyheritageComponent_Factory(t) { return new (t || MyheritageComponent)(); };
MyheritageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyheritageComponent, selectors: [["app-myheritage"]], viewQuery: function MyheritageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stickyMenuStart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.topElement = _t.first);
    } }, hostBindings: function MyheritageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MyheritageComponent_scroll_HostBindingHandler($event) { return ctx.handleScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 135, vars: 2, consts: [["class", "stickyItem", 4, "ngIf"], [1, "top"], ["top", ""], [1, "container", "list-container", 2, "max-width", "1300px"], [1, "row"], [1, "col-12", "home-catcher-wrapper"], [1, "home-catcher-explanation"], [1, "home-catcher-title"], [1, "home-catcher-text"], [1, "home-catcher-main"], [1, "app-list-item-wrapper"], ["listItemName", "MyHeritage", 3, "showMore"], [1, "padder"], ["stickyMenuStart", ""], ["viewBox", "0 0 500 150", "preserveAspectRatio", "none", 2, "height", "100%", "width", "100%"], ["d", "M-11.00,40.95 C149.99,150.00 338.88,-0.48 512.13,75.48 L500.00,150.00 L0.00,150.00 Z", 2, "stroke", "none", "fill", "#f8f8f8"], [1, "container", "list-container", 2, "margin-top", "30px", "max-width", "1000px"], [1, "row", 2, "margin-left", "0", "margin-right", "0"], [1, "col-12", "text-center"], [1, "grey-box", "h-100"], [1, "grey-box-title"], [1, "row", "summary"], [1, "col-7", "summary-text-wrapper"], [1, "summary-text", "text-left"], ["href", ""], [1, "col-5", "summary-benefits"], [1, "summary-benefit"], [1, "material-icons", 2, "display", "inline-block", "margin-left", "15px", "margin-top", "-2px", "vertical-align", "top"], [2, "display", "inline-block", "width", "calc(100% - 70px)", "margin-left", "15px", "vertical-align", "top"], [1, "summary-benefit", "negative", "first"], [1, "summary-benefit", "negative"], [1, "col-12", "mt-4"], [1, "bread-text", "text-left", 2, "font-weight", "bold"], [1, "bread-text", "text-left"], [1, "bread-image"], [2, "font-size", "15px"], [1, "stickyItem"], ["listItemName", "MyHeritage"]], template: function MyheritageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyheritageComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recension av MyHeritage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " MyHeritage erbjuder s\u00E5v\u00E4l DNA-test som sl\u00E4ktforskning. Forts\u00E4tt l\u00E4sa artikeln f\u00F6r att ta reda p\u00E5 hur pass bra tj\u00E4nsten m\u00E4ter sig med sina konkurrenter. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Summering av MyHeritage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "MyHeritage har p\u00E5 bara n\u00E5gra \u00E5r vuxit till att bli en av de st\u00F6rsta akt\u00F6rerna i branschen. F\u00F6rutom DNA-test f\u00F6r att ta reda p\u00E5 din etniska bakgrund erbjuder MyHeritage \u00E4ven goda m\u00F6jligheter f\u00F6r sl\u00E4ktforskning. MyHeritage har \u00E4ven en del andra smarta funtkioner, till exempel deras tj\u00E4nst f\u00F6r att f\u00E4rgs\u00E4tta svartvita eller blekta foton.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Med den st\u00F6rsta internationella databasen f\u00F6r avl\u00E4gsna sl\u00E4ktingar \u00E4r MyHeritage det b\u00E4sta alternativet om du vill hitta sl\u00E4ktingar som du inte tidigare k\u00E4nde till. MyHeritage erbjuder f\u00F6r tillf\u00E4llet inte ett h\u00E4lsotest. Om du vill ta reda p\u00E5 mer om genetiska egenskaper som p\u00E5verkar h\u00E4lsa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "rekommenderar vi andra test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "J\u00E4mf\u00F6r ditt DNA med 2114 geografiska regioner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Det mest prisv\u00E4rda testet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Bra verktyg f\u00F6r sl\u00E4ktforskning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "St\u00F6rst internationell databas f\u00F6r avl\u00E4gsna sl\u00E4ktingar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Resultat p\u00E5 svenska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Porto ing\u00E5r inte i priset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Erbjuder inte test f\u00F6r h\u00E4lsa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sammanlagt betyg: 97 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "V\u00E5ra recensioner av DNA-test betygs\u00E4tter de fyra kategorier som vi bed\u00F6mer \u00E4r viktigast; ursprung, sl\u00E4ktforskning, anv\u00E4ndbarhet och kundsupport. Vi har valt ut dessa kategorier genom att sammanst\u00E4lla information som vi samlat in genom research och tester. Det sammanlagda betyget \u00E4r medelv\u00E4rdet av betygen f\u00F6r de fyra kategorierna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Ursprung: 96 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "MyHeritages fr\u00E4msta och mest popul\u00E4ra produkt \u00E4r deras DNA-test f\u00F6r ursprung, MyHeritage DNA. Testet fungerar som de flesta andra test i branschen. Du best\u00E4ller hem ett DNA-kit och samlar sj\u00E4lv in ett prov av ditt DNA. Insamlingen sker enkelt genom att svabba insidan av kinden med medf\u00F6ljande tops. Det kit som du f\u00E5r hem hemskickat inneh\u00E5ller f\u00F6ljande: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "- Tv\u00E5 beh\u00E5llare f\u00F6r att f\u00F6rvara dit DNA-prov under transport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "- En ziplock p\u00E5se ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "- Returkuvert (ej f\u00F6rfrankerat) - du betalar f\u00F6r porto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "- Kort med aktiveringskod ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "- Instruktioner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ditt resultat - etnicitetskarta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "3-4 veckor efter att DNA-provet har skickats tillbaka till MyHeritage \u00E4r analysen av ditt DNA-prov klar och resultat finns tillg\u00E4ngligt p\u00E5 MyHeritages hemsida. P\u00E5 hemsidan kommer du att se en karta som visar var du h\u00E4rstammar ifr\u00E5n. Det finns \u00E4ven en procentuell uppdelning av ditt ursprung efter etnicitet. Etnicitetskartan uppdaterades i december 2020 och j\u00E4mf\u00F6r nu DNA med \u00F6ver 2100 regioner, vilket g\u00F6r att MyHeritage just nu har det mest detaljerade testet p\u00E5 marknaden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "F\u00F6rutom att ta reda p\u00E5 mer om ditt ursprung kan ditt DNA-test avsl\u00F6ja avl\u00E4gsna sl\u00E4ktingar. MyHeritage j\u00E4mf\u00F6r ditt DNA med andra anv\u00E4ndare f\u00F6r att hitta matchningar. Ifall du f\u00E5r matchningar kan du kontakta dessa personer genom en chattfunktion p\u00E5 Myheritages hemsida. Ut\u00F6ver att hitta levande sl\u00E4ktingar kan du \u00E4ven med MyHeritage sl\u00E4ktforska bak\u00E5t i tiden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Sl\u00E4ktforskning: 96 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "MyHeritage erbjuder f\u00F6rutom sitt DNA-test \u00E4ven sl\u00E4ktforskning. Med deras tj\u00E4nst f\u00F6r sl\u00E4ktforskning f\u00E5r du tillg\u00E5ng till ett v\u00E4rdsomsp\u00E4nnande arkiv. I arkivet finns till exempel scannade kopior p\u00E5 pass, tidningsartiklar, kyrkb\u00F6cker. Arkivet \u00E4r givetvis s\u00F6kbart, vilket g\u00F6r att det \u00E4r m\u00E5nga g\u00E5nger snabbare att anv\u00E4nda j\u00E4mf\u00F6rt med att bl\u00E4ddra i fysiska arkiv. I Sverige har kyrkan f\u00F6rt anteckningar \u00F6ver samtliga dop, gifterm\u00E5l och begravningar sedan 1686, vilket \u00E4r positivt f\u00F6r dig som vill sl\u00E4ktforska svenska f\u00F6rf\u00E4der. Arkivet ut\u00F6kas \u00E4ven st\u00E4ndigt. I slutet av mars 2021 uppdaterade MyHeritage det svenska arkivet med 19,35 miljoner nya historiska poster i form av husf\u00F6rh\u00F6rsl\u00E4ngder.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "F\u00F6r underl\u00E4tta din sl\u00E4ktforskning finns flera verktyg p\u00E5 MyHeritages hemsida. Bland annat kan du skapa ett sl\u00E4kttr\u00E4d. Du kan sj\u00E4lv l\u00E4gga till den information som du vet om din familj. Med hj\u00E4lp av den information som du har lagt till genomf\u00F6rs sedan automatiskt en s\u00F6kning i MyHeritages arkiv och miljoner andra sl\u00E4kttr\u00E4d f\u00F6r uppt\u00E4cka sl\u00E4ktingar och f\u00F6rf\u00E4der.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Anv\u00E4ndbarhet: 97 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Det \u00E4r tydligt att MyHeritage har arbetat ordentligt med att f\u00F6rb\u00E4ttra upplevelsen f\u00F6r sina anv\u00E4ndare under det senaste \u00E5ret. J\u00E4mf\u00F6rt med tidigare har b\u00E5de resultat f\u00F6r DNA-test, skapandet av sl\u00E4kttr\u00E4d och andra funktioner p\u00E5 hemsidan blivit mer avancerade men samtidigt blivit enklare att anv\u00E4nda. MyHeritage erbjuder \u00E4ven n\u00E5got som de kallar f\u00F6r \"MyHeritage Utbildning\". Som namnet antyder \u00E4r detta en resurs som hj\u00E4lper dig att b\u00E4ttre f\u00F6rst\u00E5 deras olika sl\u00E4ktforskningsverktyg. MyHeritage Utbildning inneh\u00E5ller artiklar, webbseminarier och instruktionsvideor f\u00F6r att hj\u00E4lpa dig p\u00E5 din sl\u00E4ktforskningsresa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "MyHeritage annonserar p\u00E5 sin hemsida att deras tj\u00E4nst fungerar lika bra p\u00E5 mobilen, surfplattan eller datorn. Fr\u00E5n v\u00E5ra tester h\u00E5ller vi med delvis. \u00C4ven om verktygen f\u00F6r sl\u00E4ktforskning g\u00E5r att anv\u00E4nda p\u00E5 mindre enheter f\u00E5r du den b\u00E4sta upplevelsen n\u00E4r du sitter vid en dator.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Kundsupport: 99 / 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "MyHeritage har ett hj\u00E4lpcenter d\u00E4r de har svarat p\u00E5 de flesta fr\u00E5gor som kan uppkomma. Du kan \u00E4ven ringa till deras callcenter m\u00E5n-tors kl 09-20 och fredagar kl 09-14:30, d\u00E4r du f\u00E5r hj\u00E4lp p\u00E5 svenska.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "F\u00F6rutom hj\u00E4lpcentret och telefonsupport finns information och guider i MyHeritage Kunskapsbas. Sammantaget har MyHeritage den b\u00E4sta kundsupporten av de tj\u00E4nster vi testat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Uppdaterad: 2021-04-02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMore", ctx.showMore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__["ListItemComponent"], _sticky_item_sticky_item_component__WEBPACK_IMPORTED_MODULE_3__["StickyItemComponent"]], styles: [".grey-box-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.3636;\n  font-weight: 600;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.summary-benefit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 34px;\n  background-color: #f1f2f3;\n  color: #144d14;\n  border-radius: 15px;\n  font-weight: normal;\n  line-height: 24px;\n  text-align: left;\n  margin-bottom: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.negative[_ngcontent-%COMP%] {\n  background-color: #f1f2f3;\n  color: #a12e26;\n}\n\n.negative.first[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.stickyItem[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 65x;\n  width: 100%;\n  left: 0;\n  background-color: white;\n  box-shadow: 0 1px 7px 0 rgba(160, 166, 168, 0.35);\n  z-index: 10;\n}\n\n@media screen and (max-width: 1116px) {\n  .summary-benefits[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n  }\n\n  .summary-text-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    margin-top: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteWhlcml0YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQUNOOztFQUVFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFDTjtBQUNGIiwiZmlsZSI6Im15aGVyaXRhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JleS1ib3gtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzYzNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3VtbWFyeS1iZW5lZml0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjM7XHJcbiAgICBjb2xvcjpyZ2IoMjAsIDc3LCAyMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm5lZ2F0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjM7XHJcbiAgICBjb2xvcjpyZ2IoMTYxLCA0NiwgMzgpO1xyXG59XHJcblxyXG4ubmVnYXRpdmUuZmlyc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN0aWNreUl0ZW0ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDdweCAwIHJnYigxNjAgMTY2IDE2OCAvIDM1JSk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExNnB4KSB7XHJcbiAgICAuc3VtbWFyeS1iZW5lZml0cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1bW1hcnktdGV4dC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyheritageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myheritage',
                templateUrl: './myheritage.component.html',
                styleUrls: ['./myheritage.component.scss']
            }]
    }], function () { return []; }, { stickyMenuStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stickyMenuStart']
        }], topElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['top']
        }], handleScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "n7cG":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function (a0) { return { "width.px": a0 }; };
class RatingComponent {
    constructor() {
        this.width = 50;
    }
    set stars(val) {
        this.width = val * 18;
    }
    ngOnInit() {
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { stars: "stars" }, decls: 1, vars: 3, consts: [[1, "stars", 3, "ngStyle"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.width));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]], styles: [".stars[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/5-stars-transparent.png\");\n  background-repeat: no-repeat;\n  background-size: 90px auto;\n  height: 20px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtEQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6InJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFycyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy81LXN0YXJzLXRyYW5zcGFyZW50LnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwcHggYXV0bztcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.scss']
            }]
    }], function () { return []; }, { stars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "o0su":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: butterService, ButterCMSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _butter_cms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./butter-cms.service */ "uG8c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "butterService", function() { return _butter_cms_service__WEBPACK_IMPORTED_MODULE_0__["butterService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButterCMSService", function() { return _butter_cms_service__WEBPACK_IMPORTED_MODULE_0__["ButterCMSService"]; });




/***/ }),

/***/ "qzT4":
/*!***********************************************!*\
  !*** ./src/app/shared/db/database.service.ts ***!
  \***********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models */ "RKUb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "o0su");
/* harmony import */ var src_app_pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/reviews/product-review/product-review.component */ "SkT8");
/* harmony import */ var src_app_pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/posts/post/post.component */ "QRG1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








class DatabaseService {
    constructor(router) {
        this.router = router;
        this.listItems = [];
        this.productReviews = [];
        this.routes = [];
        this.blogPostPreviews = [];
    }
    fetch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var params = {
                "preview": 0,
                "page": 1,
                "page_size": 10,
                "locale": 'en',
                "levels": 2
            };
            //Fetch list items from ButterCMS :)
            //Hi Albin, if you come back and read this after a long time - I hope everything is alright! I believe it will be :) 2021-04-28
            var listItems = yield _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].content.retrieve(['product_overviews']);
            //Fetch and convert product overviews to listItem type
            for (let listItem of listItems.data.data.product_overviews) {
                this.listItems.push({
                    Name: listItem.product_name,
                    LogoImage: listItem.logo,
                    ProductImage: listItem.logo,
                    Title: listItem.product_name,
                    HeritageScore: listItem.betyg_ursprung,
                    UsabilityScore: listItem.betyg_anvndbarhet,
                    GenealogyScore: listItem.betyg_slktforskning,
                    CustomerSupportScore: listItem.betyg_kundsupport,
                    Price: listItem.pris,
                    ResultTime: listItem.resultat_tid,
                    SoldTests: listItem.slda_test,
                    ResellsDNA: listItem.sljer_vidare_dna,
                    ShowDailyClicks: false,
                    AffiliateUrl: listItem.affiliate_url,
                    ReviewUrl: listItem.product_review_url ? ('/' + listItem.product_review_url) : null,
                    generalScore: _models_models__WEBPACK_IMPORTED_MODULE_2__["ListItemModel"].prototype.generalScore
                });
                //Push the path to router
                this.router.config.push({ path: listItem.product_review_url, component: src_app_pages_reviews_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_4__["ProductReviewComponent"] });
            }
            //Sort list items by score
            this.listItems.sort((a, b) => (a.generalScore() < b.generalScore()) ? 1 : (a.generalScore() === b.generalScore()) ? ((a.generalScore() < b.generalScore()) ? 1 : -1) : -1);
            //Fetch blog post
            var blogPosts = yield _services__WEBPACK_IMPORTED_MODULE_3__["butterService"].post.list({
                "exclude_body": true
            });
            for (let post of blogPosts.data.data) {
                this.router.config.push({ path: post.url, component: src_app_pages_posts_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] });
            }
            // var blogPosts = await butterService.post.retrieve('blog_post_preview');
            // for (let post of blogPosts.data.data.blog_post_preview) {
            //   this.blogPostPreviews.push(
            //     {
            //       Title: post.title,
            //       Preview: post.preview,
            //       Url: post.url,
            //       Image: post.image ? post.image : null
            //     }
            //   );
            // }
            return this.routes;
        });
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "spNu":
/*!******************************************************!*\
  !*** ./src/app/sticky-item/sticky-item.component.ts ***!
  \******************************************************/
/*! exports provided: StickyItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyItemComponent", function() { return StickyItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/db/database.service */ "qzT4");
/* harmony import */ var _circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circle-rating/circle-rating.component */ "TW52");




class StickyItemComponent {
    constructor(db) {
        this.db = db;
    }
    ngOnInit() {
        //If list item name get it from db
        if (this.listItemName) {
            this.listItem = this.db.listItems.find(x => x.Name == this.listItemName);
        }
    }
}
StickyItemComponent.ɵfac = function StickyItemComponent_Factory(t) { return new (t || StickyItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
StickyItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickyItemComponent, selectors: [["app-sticky-item"]], inputs: { listItem: "listItem", listItemName: "listItemName" }, decls: 11, vars: 6, consts: [[1, "stickyItem-wrapper"], [1, "stickyItem"], [1, "stickyItem-logo"], [1, "stickyItem-score-wrapper"], ["stroke", "#ff0032", "explanation", "Betyg", "widthInput", "45px", "heightInput", "45px", 1, "stickyItem-score", 2, "display", "inline-block", 3, "percentage", "showExplanation"], [3, "href"], [1, "stickyItem-action"], [1, "material-icons"]], template: function StickyItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-circle-rating", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bes\u00F6k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " keyboard_arrow_right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.listItem.LogoImage, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percentage", ctx.listItem.generalScore())("showExplanation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.listItem.AffiliateUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_circle_rating_circle_rating_component__WEBPACK_IMPORTED_MODULE_2__["CircleRatingComponent"]], styles: [".stickyItem-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0 1px 7px 0 rgba(160, 166, 168, 0.35);\n}\n\n.stickyItem[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.stickyItem-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  width: calc(33% - 7px);\n  height: 80px;\n  background-size: 65%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #102b3e;\n  border-radius: 15px;\n}\n\n.stickyItem-score-wrapper[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: inline-block;\n  vertical-align: top;\n  width: calc(33% - 7px);\n  height: 80px;\n  background-color: #102b3e;\n  border-radius: 15px;\n}\n\n.stickyItem-score[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-left: calc(50% - 22px);\n}\n\n.stickyItem-action[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  display: inline-block;\n  vertical-align: top;\n  width: calc(33% - 7px);\n  height: 80px;\n  background-size: 75%;\n  background-color: #ff0032;\n  border-bottom: 2px solid #ce0029;\n  border-radius: 15px;\n  text-align: center;\n  color: white;\n}\n\n.stickyItem-action[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  line-height: 80px;\n  vertical-align: top;\n  display: inline-block;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0aWNreS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlEQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoic3RpY2t5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5SXRlbS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDdweCAwIHJnYigxNjAgMTY2IDE2OCAvIDM1JSk7XHJcbn1cclxuXHJcbi5zdGlja3lJdGVtIHtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uc3RpY2t5SXRlbS1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogY2FsYygzMyUgLSA3cHgpO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA2NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMmIzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zdGlja3lJdGVtLXNjb3JlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgd2lkdGg6IGNhbGMoMzMlIC0gN3B4KTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDJiM2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc3RpY2t5SXRlbS1zY29yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gMjJweCk7XHJcbn1cclxuXHJcbi5zdGlja3lJdGVtLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB3aWR0aDogY2FsYygzMyUgLSA3cHgpO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA3NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDMyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjZTAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RpY2t5SXRlbS1hY3Rpb24gPiBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickyItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticky-item',
                templateUrl: './sticky-item.component.html',
                styleUrls: ['./sticky-item.component.scss']
            }]
    }], function () { return [{ type: _shared_db_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }]; }, { listItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listItemName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uG8c":
/*!************************************************!*\
  !*** ./src/app/services/butter-cms.service.ts ***!
  \************************************************/
/*! exports provided: butterService, ButterCMSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "butterService", function() { return butterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButterCMSService", function() { return ButterCMSService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buttercms */ "s5YY");
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_1__);



const butterService = buttercms__WEBPACK_IMPORTED_MODULE_1___default()('dc0087c62534d0cc24f818dab7a4f2c4f657b926');
class ButterCMSService {
    constructor() { }
}
ButterCMSService.ɵfac = function ButterCMSService_Factory(t) { return new (t || ButterCMSService)(); };
ButterCMSService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ButterCMSService, factory: ButterCMSService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButterCMSService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "umHo":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function HeaderComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TestDNA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuOpen = true;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.setAsActive();
            }
        });
    }
    get mnuOpen() { return this.menuOpen; }
    set mnuOpen(name) {
        this.menuOpen = !this.menuOpen;
        console.log(this.menuOpen);
    }
    ngOnInit() {
        this.setAsActive();
    }
    onToggleSidenav(event) {
        this.sidenavToggle.emit(event);
    }
    setAsActive(active = null) {
        if (!active) {
            var url = window.location.pathname;
            url = url.slice(1);
            for (let r of this.router.config) {
                if (url == r.path)
                    this.activePage = r.path;
            }
        }
        else {
            this.activePage = active;
        }
    }
    goHome() {
        this.router.navigate(['/']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { menuOpen: "menuOpen", mnuOpen: "mnuOpen" }, outputs: { sidenavToggle: "sidenavToggle" }, decls: 21, vars: 12, consts: [["mat-icon-button", "", 1, "menu-icon", 3, "click"], [4, "ngIf"], ["src", "assets/images/logo.png", 1, "logo", 3, "click"], [1, "menu-spacer", 2, "display", "inline-block", "width", "20px"], [1, "menu-toolbar"], ["mat-button", "", 3, "ngClass", "routerLink"], [1, "contact-us"], [3, "routerLink"], ["mat-button", "", "color", "accent"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener($event) { return ctx.onToggleSidenav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_mat_icon_3_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_mat_icon_4_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_h1_5_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_6_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " J\u00E4mf\u00F6r DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " S\u00E5 fungerar DNA-test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sl\u00E4ktforskning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Inspirerande stories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Kontakta oss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activePage == "" ? "selected" : "unselected")("routerLink", "/home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activePage == "hur-fungerar-dna-test" ? "selected" : "unselected")("routerLink", "/hur-fungerar-dna-test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activePage == "/slaktforskning" ? "selected" : "unselected")("routerLink", "/slaktforskning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activePage == "/inspirerande-stories" ? "selected" : "unselected")("routerLink", "/inspirerande-stories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/om-oss");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #b9cedc;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: white;\n  color: #ff0032;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  background-color: #102b3e;\n  color: white;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  display: none;\n  font-weight: bold;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px !important;\n}\n\n.menu-toolbar[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n  text-transform: uppercase;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 110px;\n  image-rendering: -webkit-optimize-contrast;\n  cursor: pointer;\n}\n\n.contact-us[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 155px;\n  image-rendering: -webkit-optimize-contrast;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.selected[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n@media (max-width: 959px) {\n  .menu-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-toolbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: calc(50% - 95px);\n  }\n\n  .contact-us[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7QUFGSjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFXQTtFQUNJO0lBQ0ksY0FBQTtFQVJOOztFQVVFO0lBQ0ksYUFBQTtFQVBOOztFQVNFO0lBQ0ksNkJBQUE7RUFOTjs7RUFRRTtJQUNJLGFBQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNiOWNlZGM7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogI2ZmMDAzMjtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbXMge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMmIzZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxZDY5YTA7XHJcbiAgICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFkNjlhMDtcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lbnUtdG9vbGJhciB7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhY3QtdXMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTU1cHg7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvLyBjb2xvcjogIzFDODlENjtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNlbGVjdGVkOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8gLmhpZ2hsaWdodCB7XHJcbi8vICAgICBjb2xvcjogIzFDODlENjtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQzg5RDY7XHJcbi8vIH1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAubWVudS1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5tZW51LXRvb2xiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoNTAlIC0gOTVweCk7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { sidenavToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], menuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mnuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "x9xr":
/*!****************************************************************!*\
  !*** ./src/app/pages/reviews/livingdna/livingdna.component.ts ***!
  \****************************************************************/
/*! exports provided: LivingdnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivingdnaComponent", function() { return LivingdnaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LivingdnaComponent {
    constructor() { }
    ngOnInit() {
    }
}
LivingdnaComponent.ɵfac = function LivingdnaComponent_Factory(t) { return new (t || LivingdnaComponent)(); };
LivingdnaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LivingdnaComponent, selectors: [["app-livingdna"]], decls: 2, vars: 0, template: function LivingdnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "livingdna works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZpbmdkbmEuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LivingdnaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-livingdna',
                templateUrl: './livingdna.component.html',
                styleUrls: ['./livingdna.component.scss']
            }]
    }], function () { return []; }, null); })();


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