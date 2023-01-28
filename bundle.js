/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n    background-color: rgb(11, 80, 129);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size:cover;\n    background-position: bottom;\n    background-repeat: no-repeat;\n    min-height: 500px;\n    background-attachment:fixed;\n    background-size:cover;\n}\n\n#header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100px;\n}\n\nform{\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    background: rgba(255,255,255,0.4);\n    border: none;\n    outline: none;\n    width: 400px;\n    height: 30px;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px;\n    color: white;\n    -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);\n    box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);\n}\n\nbutton{\n    border: none;\n    background-color: transparent;\n    padding-left: 20px;\n    padding-top: 5px;\n}\n\n#instantWeather {\n    height: 74vh;\n    font-size: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    min-height: 400px;\n}\n\n.instantData{\n    color: white;\n    font-weight: bold;\n    margin-left: 3rem;\n}\n\n#footer {\n    display: flex;\n    overflow-x: scroll;\n    width: 100%;\n    flex-wrap:nowrap;\n    height: 16vh;\n    min-height: 100px;\n    padding-bottom: 3rem;\n    padding-left: 3rem;\n    \n} \n\n.byhour {\n    height:30%;\n    min-width: 90px;\n    padding-right: 30px;\n}\n\n.datahour{\n    padding-top: 5px;\n    text-align: center;\n    justify-content: center;\n    align-items: flex-end;  \n    color: gray;\n    font-weight:bold; \n    \n}\n\n.icon{\n    display: block;\n    margin:0 auto;\n}\n\n\n@media (max-width:500px) {\n    #header{\n        height: 15vh;\n        display: flex;\n        align-items: center;\n        justify-content:flex-start;\n        padding-left: 2rem;\n        \n    }\n    \n    input{\n        width: 65vw;\n        height: 1.5rem;\n        font-size: 1.1rem;\n        padding: 10px;\n    }\n    \n    \n    #instantWeather {\n        height: 55vh;\n        font-size: 1.1rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        min-height: 300px;\n        padding-left: 2rem;\n    }\n    \n    .instantData{\n        color: white;\n        font-weight: bold;\n        margin-left: 1rem;\n    }\n    \n    #footer {\n        display: flex;\n        overflow-x: scroll;\n        width: 100%;\n        flex-wrap:nowrap;\n        height: 30vh;\n        min-height: 100px;\n        padding-top: 2rem;\n        padding-left: 1rem;\n        \n    } \n    \n    .byhour {\n        height:20%;\n        min-width: 50px;\n        padding-right: 15px;\n    }\n    \n    .datahour{\n        padding-top: 5px;\n        padding-bottom: 10px;\n        text-align: center;\n        font-size: small;\n        justify-content: center;\n        align-items: flex-end;  \n        color: gray;\n        font-weight:bold; \n        \n    }\n    \n    .icon{\n        display: block;\n        margin:0 auto;\n    }\n\n    #myIcon{\n        zoom: 50%;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;IACI,kCAAkC;IAClC,yDAAyC;IACzC,qBAAqB;IACrB,2BAA2B;IAC3B,4BAA4B;IAC5B,iBAAiB;IACjB,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,YAAY;IACZ,kDAAkD;IAClD,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;;AAEtB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;IACX,gBAAgB;;AAEpB;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;;AAGA;IACI;QACI,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,0BAA0B;QAC1B,kBAAkB;;IAEtB;;IAEA;QACI,WAAW;QACX,cAAc;QACd,iBAAiB;QACjB,aAAa;IACjB;;;IAGA;QACI,YAAY;QACZ,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,6BAA6B;QAC7B,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,gBAAgB;QAChB,YAAY;QACZ,iBAAiB;QACjB,iBAAiB;QACjB,kBAAkB;;IAEtB;;IAEA;QACI,UAAU;QACV,eAAe;QACf,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;QAChB,oBAAoB;QACpB,kBAAkB;QAClB,gBAAgB;QAChB,uBAAuB;QACvB,qBAAqB;QACrB,WAAW;QACX,gBAAgB;;IAEpB;;IAEA;QACI,cAAc;QACd,aAAa;IACjB;;IAEA;QACI,SAAS;IACb;AACJ","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody{\n    background-color: rgb(11, 80, 129);\n    background-image: url('./background.jpg');\n    background-size:cover;\n    background-position: bottom;\n    background-repeat: no-repeat;\n    min-height: 500px;\n    background-attachment:fixed;\n    background-size:cover;\n}\n\n#header{\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100px;\n}\n\nform{\n    display: flex;\n    align-items: center;\n}\n\ninput{\n    background: rgba(255,255,255,0.4);\n    border: none;\n    outline: none;\n    width: 400px;\n    height: 30px;\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px;\n    color: white;\n    -webkit-box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);\n    box-shadow: 0 2px 10px 1px rgba(0,0,0,0.5);\n}\n\nbutton{\n    border: none;\n    background-color: transparent;\n    padding-left: 20px;\n    padding-top: 5px;\n}\n\n#instantWeather {\n    height: 74vh;\n    font-size: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    min-height: 400px;\n}\n\n.instantData{\n    color: white;\n    font-weight: bold;\n    margin-left: 3rem;\n}\n\n#footer {\n    display: flex;\n    overflow-x: scroll;\n    width: 100%;\n    flex-wrap:nowrap;\n    height: 16vh;\n    min-height: 100px;\n    padding-bottom: 3rem;\n    padding-left: 3rem;\n    \n} \n\n.byhour {\n    height:30%;\n    min-width: 90px;\n    padding-right: 30px;\n}\n\n.datahour{\n    padding-top: 5px;\n    text-align: center;\n    justify-content: center;\n    align-items: flex-end;  \n    color: gray;\n    font-weight:bold; \n    \n}\n\n.icon{\n    display: block;\n    margin:0 auto;\n}\n\n\n@media (max-width:500px) {\n    #header{\n        height: 15vh;\n        display: flex;\n        align-items: center;\n        justify-content:flex-start;\n        padding-left: 2rem;\n        \n    }\n    \n    input{\n        width: 65vw;\n        height: 1.5rem;\n        font-size: 1.1rem;\n        padding: 10px;\n    }\n    \n    \n    #instantWeather {\n        height: 55vh;\n        font-size: 1.1rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        min-height: 300px;\n        padding-left: 2rem;\n    }\n    \n    .instantData{\n        color: white;\n        font-weight: bold;\n        margin-left: 1rem;\n    }\n    \n    #footer {\n        display: flex;\n        overflow-x: scroll;\n        width: 100%;\n        flex-wrap:nowrap;\n        height: 30vh;\n        min-height: 100px;\n        padding-top: 2rem;\n        padding-left: 1rem;\n        \n    } \n    \n    .byhour {\n        height:20%;\n        min-width: 50px;\n        padding-right: 15px;\n    }\n    \n    .datahour{\n        padding-top: 5px;\n        padding-bottom: 10px;\n        text-align: center;\n        font-size: small;\n        justify-content: center;\n        align-items: flex-end;  \n        color: gray;\n        font-weight:bold; \n        \n    }\n    \n    .icon{\n        display: block;\n        margin:0 auto;\n    }\n\n    #myIcon{\n        zoom: 50%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOM": () => (/* binding */ createDOM)
/* harmony export */ });
/* harmony import */ var _weatherInstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInstant */ "./src/weatherInstant.js");
/* harmony import */ var _weatherWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherWeek */ "./src/weatherWeek.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.png */ "./src/icon.png");
/* harmony import */ var _background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background.jpg */ "./src/background.jpg");







//Create DOM
async function createDOM() {

    const myBG = new Image();
    myBG.src = _background_jpg__WEBPACK_IMPORTED_MODULE_4__;
    //header
    const body = document.querySelector("body");
    const header = document.createElement("header");
    header.setAttribute("id", "header");
    body.appendChild(header);
    const form=document.createElement('form');
    form.setAttribute('id','myForm');
    form.setAttribute('class','myForm');
    header.appendChild(form);
    const label=document.createElement('label');
    label.setAttribute('for','myInput');
    form.appendChild(label);
    const input=document.createElement('input');
    input.setAttribute("id", "city-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter city name");
    form.appendChild(input);
    
    //content
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    body.appendChild(content);
    
    
    const sendButton=document.createElement('button');
    sendButton.setAttribute('type','submit');
    sendButton.setAttribute('id','sendButton');
    const myIcon = new Image();
    myIcon.setAttribute('id','myIcon');
    myIcon.src = _icon_png__WEBPACK_IMPORTED_MODULE_3__;
    sendButton.innerHTML='';
    sendButton.appendChild(myIcon);
    form.appendChild(sendButton);
    sendButton.addEventListener("click",async (e)=>{
        e.preventDefault();
        const location=document.getElementById('city-input').value;

        //Instant weather at content div
        let weatherInstantData = await (0,_weatherInstant__WEBPACK_IMPORTED_MODULE_0__.weatherInstant)(location);
        console.log(weatherInstantData);
        if(weatherInstantData){
            cityName.innerHTML=`Place:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.name}`;
            cityTemp.innerHTML=`Temperature:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.temp.toFixed(0)} °C`;
            cityFeelsLike.innerHTML=`Feels like:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.feels_like.toFixed(0)} °C`;
            cityHumidity.innerHTML=`Humidity:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.main.humidity.toFixed(0)}%`;
            cityDescription.innerHTML=`Weather:&nbsp;&nbsp;&nbsp;&nbsp;${weatherInstantData.weather[0].main}`;
            cityWind.innerHTML=`Wind:&nbsp;&nbsp;&nbsp;&nbsp;${(weatherInstantData.wind.speed*3.6).toFixed(1)} km/h`;
            cityTimeD.innerHTML=`Date:&nbsp;&nbsp;&nbsp;&nbsp;${(new Date(weatherInstantData.dt*1000)).toLocaleDateString("en-US",{
                weekday: 'long', year:'numeric', month:'short', day:'numeric'
            })}`;
            let date = new Date(weatherInstantData.dt*1000);
            let offset = new Date().getTimezoneOffset();
            date.setTime(date.getTime() + (weatherInstantData.timezone*1000+offset*60*1000)); //subtracting one hour in milliseconds
            cityTimeH.innerHTML=`Time:&nbsp;&nbsp;&nbsp;&nbsp;${date.toLocaleTimeString("en-US",{hour:'2-digit', minute:'2-digit', hour12: true})}`;            
        }else{
            cityName.innerHTML=`City not found`;
            cityTemp.innerHTML='';
            cityFeelsLike.innerHTML='';
            cityHumidity.innerHTML='';
            cityDescription.innerHTML='';
            cityWind.innerHTML='';
            cityTimeD.innerHTML='';
            cityTimeH.innerHTML='';
        }

        let weatherWeekData = await (0,_weatherWeek__WEBPACK_IMPORTED_MODULE_1__.weatherWeek)(location);
        if(weatherWeekData){
            cityPop.innerHTML=`Chance of rain: ${weatherWeekData[2][0].toFixed(0)}%`;
        }else{
            cityPop.innerHTML='';
        }

        //Week weather at footer div
        
        footer.innerHTML='';
        for (let j=0;j<40;j++){
            const byhour=document.createElement('div');
            const iconbyhour=document.createElement('img');
            const timebyhour=document.createElement('div');
            const tempbyhour=document.createElement('div');
            const popbyhour=document.createElement('div');
            
            byhour.setAttribute('class','byhour');
            iconbyhour.setAttribute('class','icon');
            timebyhour.setAttribute('class','datahour');
            tempbyhour.setAttribute('class','datahour');
            popbyhour.setAttribute('class','datahour');
            
            if(weatherWeekData){
                iconbyhour.setAttribute('src',`https://openweathermap.org/img/wn/${weatherWeekData[3][j]}.png`);    
                timebyhour.innerHTML=`${weatherWeekData[0][j]}`;
                tempbyhour.innerHTML=`${weatherWeekData[1][j].toFixed(0)} °C`;
                popbyhour.innerHTML=`${weatherWeekData[2][j].toFixed(0)}%`;
            }else{
                iconbyhour.innerHTML='';
                timebyhour.innerHTML='';
                tempbyhour.innerHTML='';
                popbyhour.innerHTML='';
            }
            footer.appendChild(byhour);
            byhour.appendChild(iconbyhour);
            byhour.appendChild(timebyhour);
            byhour.appendChild(tempbyhour);
            byhour.appendChild(popbyhour);
        }
        
        document.getElementById('city-input').value='';
    })
    //Content DOM
    const instantWeather = document.createElement("div");
    instantWeather.setAttribute("id", "instantWeather");
    content.appendChild(instantWeather);
    const cityName=document.createElement('div');
    const cityTimeD=document.createElement('div');
    const cityTimeH=document.createElement('div');
    const cityTemp=document.createElement('div');
    const cityDescription=document.createElement('div');
    const cityFeelsLike=document.createElement('div');
    const cityHumidity=document.createElement('div');
    const cityWind=document.createElement('div');
    const cityPop=document.createElement('div');
    cityName.setAttribute('class','instantData');
    cityTemp.setAttribute('class','instantData');
    cityFeelsLike.setAttribute('class','instantData');
    cityHumidity.setAttribute('class','instantData');
    cityDescription.setAttribute('class','instantData');
    cityWind.setAttribute('class','instantData');
    cityTimeD.setAttribute('class','instantData');
    cityTimeH.setAttribute('class','instantData');
    cityPop.setAttribute('class','instantData');
    cityName.innerHTML='Place: ';
    cityTemp.innerHTML='Temperature: ';
    cityFeelsLike.innerHTML='Feels like: ';
    cityHumidity.innerHTML='Humidity: ';
    cityDescription.innerHTML='Weather: ';
    cityWind.innerHTML='Wind: ';
    cityTimeD.innerHTML='Date: ';
    cityTimeH.innerHTML='Time: ';
    cityPop.innerHTML='Chance of rain: ';
    instantWeather.appendChild(cityName);
    instantWeather.appendChild(cityTimeD);
    instantWeather.appendChild(cityTimeH);
    instantWeather.appendChild(cityTemp);
    instantWeather.appendChild(cityDescription);
    instantWeather.appendChild(cityFeelsLike);
    instantWeather.appendChild(cityHumidity);
    instantWeather.appendChild(cityPop);
    instantWeather.appendChild(cityWind);
    
    


    //Footer DOM
    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer");
    body.appendChild(footer);
    

}

/***/ }),

/***/ "./src/weatherInstant.js":
/*!*******************************!*\
  !*** ./src/weatherInstant.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherInstant": () => (/* binding */ weatherInstant)
/* harmony export */ });

async function weatherInstant(location){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c3425ef9bd020696fa52ff8f448fb263&units=metric`);
        const data = await response.json();
        if (response.status === 404){
            throw new Error('Location not found');
        }
        return data;
    }catch(err){
        console.log(err);
    }
}


/***/ }),

/***/ "./src/weatherWeek.js":
/*!****************************!*\
  !*** ./src/weatherWeek.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherWeek": () => (/* binding */ weatherWeek)
/* harmony export */ });
async function weatherWeek(location){
    
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c3425ef9bd020696fa52ff8f448fb263&units=metric`);
        const data = await response.json();
        console.log(data);
        let iconData={};
        let timeData={};
        let tempData={};
        let popData={};
        
        for (let i=0;i<40;i++){
            iconData[i]=data.list[i].weather[0].icon;
            
            //let date = new Date(weatherInstantData.dt*1000);
            //let offset = new Date().getTimezoneOffset();
            //date.setTime(date.getTime() + (weatherInstantData.timezone*1000+offset*60*1000)); //subtracting one hour in milliseconds
            //cityTimeH.innerHTML=`Time:&nbsp;&nbsp;&nbsp;&nbsp;${date.toLocaleTimeString("en-US",{hour:'2-digit', minute:'2-digit', hour12: true})}`;            
            
            timeData[i]=new Date(data.list[i].dt*1000);
            let offset = new Date().getTimezoneOffset();
            timeData[i].setTime(timeData[i].getTime() + (data.city.timezone*1000+offset*60*1000)); //subtracting one hour in milliseconds
            timeData[i]=timeData[i].toLocaleTimeString("en-US",{hour:'2-digit', minute:'2-digit', hour12: true});

            //timeData[i]=new Date(data.list[i].dt*1000).toLocaleDateString("en-US",{
              //  weekday: 'short', hour:'numeric', hour12: true
            //});

            
            

            tempData[i]=data.list[i].main.temp;
            popData[i]=data.list[i].pop*100;
        }
        console.log(iconData);
        console.log(timeData);
        console.log(tempData);
        console.log(popData);
        return [timeData,tempData,popData,iconData];
    } catch(error){
        console.log(error);
    }
}









/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbc6f5aa096712d3543.jpg";

/***/ }),

/***/ "./src/icon.png":
/*!**********************!*\
  !*** ./src/icon.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9b76e3dc4b47941f6d0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



(0,_dom__WEBPACK_IMPORTED_MODULE_1__.createDOM)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2E7O0FBRWxDLCtDQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL3dlYXRoZXJJbnN0YW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvd2VhdGhlcldlZWsuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEsIDgwLCAxMjkpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDpmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuI2luc3RhbnRXZWF0aGVyIHtcXG4gICAgaGVpZ2h0OiA3NHZoO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLmluc3RhbnREYXRhe1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtd3JhcDpub3dyYXA7XFxuICAgIGhlaWdodDogMTZ2aDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgIFxcbn0gXFxuXFxuLmJ5aG91ciB7XFxuICAgIGhlaWdodDozMCU7XFxuICAgIG1pbi13aWR0aDogOTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmRhdGFob3Vye1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7ICBcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxcbiAgICBcXG59XFxuXFxuLmljb257XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46MCBhdXRvO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICAjaGVhZGVye1xcbiAgICAgICAgaGVpZ2h0OiAxNXZoO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICBpbnB1dHtcXG4gICAgICAgIHdpZHRoOiA2NXZ3O1xcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIFxcbiAgICAjaW5zdGFudFdlYXRoZXIge1xcbiAgICAgICAgaGVpZ2h0OiA1NXZoO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5pbnN0YW50RGF0YXtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgICNmb290ZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZmxleC13cmFwOm5vd3JhcDtcXG4gICAgICAgIGhlaWdodDogMzB2aDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICBcXG4gICAgfSBcXG4gICAgXFxuICAgIC5ieWhvdXIge1xcbiAgICAgICAgaGVpZ2h0OjIwJTtcXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG4gICAgXFxuICAgIC5kYXRhaG91cntcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxcbiAgICAgICAgY29sb3I6IGdyYXk7XFxuICAgICAgICBmb250LXdlaWdodDpib2xkOyBcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAuaWNvbntcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcXG4gICAgfVxcblxcbiAgICAjbXlJY29ue1xcbiAgICAgICAgem9vbTogNTAlO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHlEQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0RBQWtEO0lBQ2xELDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7OztBQUdBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsa0JBQWtCOztJQUV0Qjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsa0JBQWtCOztJQUV0Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExLCA4MCwgMTI5KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OmZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4jaW5zdGFudFdlYXRoZXIge1xcbiAgICBoZWlnaHQ6IDc0dmg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uaW5zdGFudERhdGF7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC13cmFwOm5vd3JhcDtcXG4gICAgaGVpZ2h0OiAxNnZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgXFxufSBcXG5cXG4uYnlob3VyIHtcXG4gICAgaGVpZ2h0OjMwJTtcXG4gICAgbWluLXdpZHRoOiA5MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGF0YWhvdXJ7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgIFxcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDsgXFxuICAgIFxcbn1cXG5cXG4uaWNvbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjowIGF1dG87XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAgICNoZWFkZXJ7XFxuICAgICAgICBoZWlnaHQ6IDE1dmg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0e1xcbiAgICAgICAgd2lkdGg6IDY1dnc7XFxuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbiAgICBcXG4gICAgXFxuICAgICNpbnN0YW50V2VhdGhlciB7XFxuICAgICAgICBoZWlnaHQ6IDU1dmg7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmluc3RhbnREYXRhe1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgI2Zvb3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBmbGV4LXdyYXA6bm93cmFwO1xcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICAgIFxcbiAgICB9IFxcbiAgICBcXG4gICAgLmJ5aG91ciB7XFxuICAgICAgICBoZWlnaHQ6MjAlO1xcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRhdGFob3Vye1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyAgXFxuICAgICAgICBjb2xvcjogZ3JheTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7IFxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuICAgIC5pY29ue1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46MCBhdXRvO1xcbiAgICB9XFxuXFxuICAgICNteUljb257XFxuICAgICAgICB6b29tOiA1MCU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHdlYXRoZXJJbnN0YW50IH0gZnJvbSAnLi93ZWF0aGVySW5zdGFudCc7XG5pbXBvcnQgeyB3ZWF0aGVyV2VlayB9IGZyb20gXCIuL3dlYXRoZXJXZWVrXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcnO1xuaW1wb3J0IEJHIGZyb20gJy4vYmFja2dyb3VuZC5qcGcnO1xuXG5cbi8vQ3JlYXRlIERPTVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURPTSgpIHtcblxuICAgIGNvbnN0IG15QkcgPSBuZXcgSW1hZ2UoKTtcbiAgICBteUJHLnNyYyA9IEJHO1xuICAgIC8vaGVhZGVyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCBmb3JtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdteUZvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdteUZvcm0nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgY29uc3QgbGFiZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ215SW5wdXQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb25zdCBpbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eS1pbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIGNpdHkgbmFtZVwiKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBcbiAgICAvL2NvbnRlbnRcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IHNlbmRCdXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2VuZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcbiAgICBzZW5kQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdzZW5kQnV0dG9uJyk7XG4gICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbXlJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCdteUljb24nKTtcbiAgICBteUljb24uc3JjID0gSWNvbjtcbiAgICBzZW5kQnV0dG9uLmlubmVySFRNTD0nJztcbiAgICBzZW5kQnV0dG9uLmFwcGVuZENoaWxkKG15SWNvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZW5kQnV0dG9uKTtcbiAgICBzZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFzeW5jIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LWlucHV0JykudmFsdWU7XG5cbiAgICAgICAgLy9JbnN0YW50IHdlYXRoZXIgYXQgY29udGVudCBkaXZcbiAgICAgICAgbGV0IHdlYXRoZXJJbnN0YW50RGF0YSA9IGF3YWl0IHdlYXRoZXJJbnN0YW50KGxvY2F0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckluc3RhbnREYXRhKTtcbiAgICAgICAgaWYod2VhdGhlckluc3RhbnREYXRhKXtcbiAgICAgICAgICAgIGNpdHlOYW1lLmlubmVySFRNTD1gUGxhY2U6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7JHt3ZWF0aGVySW5zdGFudERhdGEubmFtZX1gO1xuICAgICAgICAgICAgY2l0eVRlbXAuaW5uZXJIVE1MPWBUZW1wZXJhdHVyZTombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDske3dlYXRoZXJJbnN0YW50RGF0YS5tYWluLnRlbXAudG9GaXhlZCgwKX0gwrBDYDtcbiAgICAgICAgICAgIGNpdHlGZWVsc0xpa2UuaW5uZXJIVE1MPWBGZWVscyBsaWtlOiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyR7d2VhdGhlckluc3RhbnREYXRhLm1haW4uZmVlbHNfbGlrZS50b0ZpeGVkKDApfSDCsENgO1xuICAgICAgICAgICAgY2l0eUh1bWlkaXR5LmlubmVySFRNTD1gSHVtaWRpdHk6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7JHt3ZWF0aGVySW5zdGFudERhdGEubWFpbi5odW1pZGl0eS50b0ZpeGVkKDApfSVgO1xuICAgICAgICAgICAgY2l0eURlc2NyaXB0aW9uLmlubmVySFRNTD1gV2VhdGhlcjombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDske3dlYXRoZXJJbnN0YW50RGF0YS53ZWF0aGVyWzBdLm1haW59YDtcbiAgICAgICAgICAgIGNpdHlXaW5kLmlubmVySFRNTD1gV2luZDombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDskeyh3ZWF0aGVySW5zdGFudERhdGEud2luZC5zcGVlZCozLjYpLnRvRml4ZWQoMSl9IGttL2hgO1xuICAgICAgICAgICAgY2l0eVRpbWVELmlubmVySFRNTD1gRGF0ZTombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDskeyhuZXcgRGF0ZSh3ZWF0aGVySW5zdGFudERhdGEuZHQqMTAwMCkpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIse1xuICAgICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJywgeWVhcjonbnVtZXJpYycsIG1vbnRoOidzaG9ydCcsIGRheTonbnVtZXJpYydcbiAgICAgICAgICAgIH0pfWA7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJJbnN0YW50RGF0YS5kdCoxMDAwKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAod2VhdGhlckluc3RhbnREYXRhLnRpbWV6b25lKjEwMDArb2Zmc2V0KjYwKjEwMDApKTsgLy9zdWJ0cmFjdGluZyBvbmUgaG91ciBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNpdHlUaW1lSC5pbm5lckhUTUw9YFRpbWU6Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7JHtkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIse2hvdXI6JzItZGlnaXQnLCBtaW51dGU6JzItZGlnaXQnLCBob3VyMTI6IHRydWV9KX1gOyAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNpdHlOYW1lLmlubmVySFRNTD1gQ2l0eSBub3QgZm91bmRgO1xuICAgICAgICAgICAgY2l0eVRlbXAuaW5uZXJIVE1MPScnO1xuICAgICAgICAgICAgY2l0eUZlZWxzTGlrZS5pbm5lckhUTUw9Jyc7XG4gICAgICAgICAgICBjaXR5SHVtaWRpdHkuaW5uZXJIVE1MPScnO1xuICAgICAgICAgICAgY2l0eURlc2NyaXB0aW9uLmlubmVySFRNTD0nJztcbiAgICAgICAgICAgIGNpdHlXaW5kLmlubmVySFRNTD0nJztcbiAgICAgICAgICAgIGNpdHlUaW1lRC5pbm5lckhUTUw9Jyc7XG4gICAgICAgICAgICBjaXR5VGltZUguaW5uZXJIVE1MPScnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdlYXRoZXJXZWVrRGF0YSA9IGF3YWl0IHdlYXRoZXJXZWVrKGxvY2F0aW9uKTtcbiAgICAgICAgaWYod2VhdGhlcldlZWtEYXRhKXtcbiAgICAgICAgICAgIGNpdHlQb3AuaW5uZXJIVE1MPWBDaGFuY2Ugb2YgcmFpbjogJHt3ZWF0aGVyV2Vla0RhdGFbMl1bMF0udG9GaXhlZCgwKX0lYDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjaXR5UG9wLmlubmVySFRNTD0nJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vV2VlayB3ZWF0aGVyIGF0IGZvb3RlciBkaXZcbiAgICAgICAgXG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUw9Jyc7XG4gICAgICAgIGZvciAobGV0IGo9MDtqPDQwO2orKyl7XG4gICAgICAgICAgICBjb25zdCBieWhvdXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBpY29uYnlob3VyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY29uc3QgdGltZWJ5aG91cj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBieWhvdXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBwb3BieWhvdXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ5aG91ci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYnlob3VyJyk7XG4gICAgICAgICAgICBpY29uYnlob3VyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpY29uJyk7XG4gICAgICAgICAgICB0aW1lYnlob3VyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkYXRhaG91cicpO1xuICAgICAgICAgICAgdGVtcGJ5aG91ci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGF0YWhvdXInKTtcbiAgICAgICAgICAgIHBvcGJ5aG91ci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGF0YWhvdXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYod2VhdGhlcldlZWtEYXRhKXtcbiAgICAgICAgICAgICAgICBpY29uYnlob3VyLnNldEF0dHJpYnV0ZSgnc3JjJyxgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlcldlZWtEYXRhWzNdW2pdfS5wbmdgKTsgICAgXG4gICAgICAgICAgICAgICAgdGltZWJ5aG91ci5pbm5lckhUTUw9YCR7d2VhdGhlcldlZWtEYXRhWzBdW2pdfWA7XG4gICAgICAgICAgICAgICAgdGVtcGJ5aG91ci5pbm5lckhUTUw9YCR7d2VhdGhlcldlZWtEYXRhWzFdW2pdLnRvRml4ZWQoMCl9IMKwQ2A7XG4gICAgICAgICAgICAgICAgcG9wYnlob3VyLmlubmVySFRNTD1gJHt3ZWF0aGVyV2Vla0RhdGFbMl1bal0udG9GaXhlZCgwKX0lYDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGljb25ieWhvdXIuaW5uZXJIVE1MPScnO1xuICAgICAgICAgICAgICAgIHRpbWVieWhvdXIuaW5uZXJIVE1MPScnO1xuICAgICAgICAgICAgICAgIHRlbXBieWhvdXIuaW5uZXJIVE1MPScnO1xuICAgICAgICAgICAgICAgIHBvcGJ5aG91ci5pbm5lckhUTUw9Jyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnlob3VyKTtcbiAgICAgICAgICAgIGJ5aG91ci5hcHBlbmRDaGlsZChpY29uYnlob3VyKTtcbiAgICAgICAgICAgIGJ5aG91ci5hcHBlbmRDaGlsZCh0aW1lYnlob3VyKTtcbiAgICAgICAgICAgIGJ5aG91ci5hcHBlbmRDaGlsZCh0ZW1wYnlob3VyKTtcbiAgICAgICAgICAgIGJ5aG91ci5hcHBlbmRDaGlsZChwb3BieWhvdXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1pbnB1dCcpLnZhbHVlPScnO1xuICAgIH0pXG4gICAgLy9Db250ZW50IERPTVxuICAgIGNvbnN0IGluc3RhbnRXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnN0YW50V2VhdGhlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImluc3RhbnRXZWF0aGVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5zdGFudFdlYXRoZXIpO1xuICAgIGNvbnN0IGNpdHlOYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNpdHlUaW1lRD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjaXR5VGltZUg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2l0eVRlbXA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2l0eURlc2NyaXB0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNpdHlGZWVsc0xpa2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2l0eUh1bWlkaXR5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNpdHlXaW5kPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNpdHlQb3A9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2l0eU5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2luc3RhbnREYXRhJyk7XG4gICAgY2l0eVRlbXAuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2luc3RhbnREYXRhJyk7XG4gICAgY2l0eUZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaW5zdGFudERhdGEnKTtcbiAgICBjaXR5SHVtaWRpdHkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2luc3RhbnREYXRhJyk7XG4gICAgY2l0eURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpbnN0YW50RGF0YScpO1xuICAgIGNpdHlXaW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdpbnN0YW50RGF0YScpO1xuICAgIGNpdHlUaW1lRC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaW5zdGFudERhdGEnKTtcbiAgICBjaXR5VGltZUguc2V0QXR0cmlidXRlKCdjbGFzcycsJ2luc3RhbnREYXRhJyk7XG4gICAgY2l0eVBvcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnaW5zdGFudERhdGEnKTtcbiAgICBjaXR5TmFtZS5pbm5lckhUTUw9J1BsYWNlOiAnO1xuICAgIGNpdHlUZW1wLmlubmVySFRNTD0nVGVtcGVyYXR1cmU6ICc7XG4gICAgY2l0eUZlZWxzTGlrZS5pbm5lckhUTUw9J0ZlZWxzIGxpa2U6ICc7XG4gICAgY2l0eUh1bWlkaXR5LmlubmVySFRNTD0nSHVtaWRpdHk6ICc7XG4gICAgY2l0eURlc2NyaXB0aW9uLmlubmVySFRNTD0nV2VhdGhlcjogJztcbiAgICBjaXR5V2luZC5pbm5lckhUTUw9J1dpbmQ6ICc7XG4gICAgY2l0eVRpbWVELmlubmVySFRNTD0nRGF0ZTogJztcbiAgICBjaXR5VGltZUguaW5uZXJIVE1MPSdUaW1lOiAnO1xuICAgIGNpdHlQb3AuaW5uZXJIVE1MPSdDaGFuY2Ugb2YgcmFpbjogJztcbiAgICBpbnN0YW50V2VhdGhlci5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XG4gICAgaW5zdGFudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY2l0eVRpbWVEKTtcbiAgICBpbnN0YW50V2VhdGhlci5hcHBlbmRDaGlsZChjaXR5VGltZUgpO1xuICAgIGluc3RhbnRXZWF0aGVyLmFwcGVuZENoaWxkKGNpdHlUZW1wKTtcbiAgICBpbnN0YW50V2VhdGhlci5hcHBlbmRDaGlsZChjaXR5RGVzY3JpcHRpb24pO1xuICAgIGluc3RhbnRXZWF0aGVyLmFwcGVuZENoaWxkKGNpdHlGZWVsc0xpa2UpO1xuICAgIGluc3RhbnRXZWF0aGVyLmFwcGVuZENoaWxkKGNpdHlIdW1pZGl0eSk7XG4gICAgaW5zdGFudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY2l0eVBvcCk7XG4gICAgaW5zdGFudFdlYXRoZXIuYXBwZW5kQ2hpbGQoY2l0eVdpbmQpO1xuICAgIFxuICAgIFxuXG5cbiAgICAvL0Zvb3RlciBET01cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgXG5cbn0iLCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3ZWF0aGVySW5zdGFudChsb2NhdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPWMzNDI1ZWY5YmQwMjA2OTZmYTUyZmY4ZjQ0OGZiMjYzJnVuaXRzPW1ldHJpY2ApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMb2NhdGlvbiBub3QgZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gd2VhdGhlcldlZWsobG9jYXRpb24pe1xuICAgIFxuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtsb2NhdGlvbn0mYXBwaWQ9YzM0MjVlZjliZDAyMDY5NmZhNTJmZjhmNDQ4ZmIyNjMmdW5pdHM9bWV0cmljYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBsZXQgaWNvbkRhdGE9e307XG4gICAgICAgIGxldCB0aW1lRGF0YT17fTtcbiAgICAgICAgbGV0IHRlbXBEYXRhPXt9O1xuICAgICAgICBsZXQgcG9wRGF0YT17fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk9MDtpPDQwO2krKyl7XG4gICAgICAgICAgICBpY29uRGF0YVtpXT1kYXRhLmxpc3RbaV0ud2VhdGhlclswXS5pY29uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2xldCBkYXRlID0gbmV3IERhdGUod2VhdGhlckluc3RhbnREYXRhLmR0KjEwMDApO1xuICAgICAgICAgICAgLy9sZXQgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgLy9kYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAod2VhdGhlckluc3RhbnREYXRhLnRpbWV6b25lKjEwMDArb2Zmc2V0KjYwKjEwMDApKTsgLy9zdWJ0cmFjdGluZyBvbmUgaG91ciBpbiBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIC8vY2l0eVRpbWVILmlubmVySFRNTD1gVGltZTombmJzcDsmbmJzcDsmbmJzcDsmbmJzcDske2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIix7aG91cjonMi1kaWdpdCcsIG1pbnV0ZTonMi1kaWdpdCcsIGhvdXIxMjogdHJ1ZX0pfWA7ICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRpbWVEYXRhW2ldPW5ldyBEYXRlKGRhdGEubGlzdFtpXS5kdCoxMDAwKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICB0aW1lRGF0YVtpXS5zZXRUaW1lKHRpbWVEYXRhW2ldLmdldFRpbWUoKSArIChkYXRhLmNpdHkudGltZXpvbmUqMTAwMCtvZmZzZXQqNjAqMTAwMCkpOyAvL3N1YnRyYWN0aW5nIG9uZSBob3VyIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICAgICAgdGltZURhdGFbaV09dGltZURhdGFbaV0udG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIix7aG91cjonMi1kaWdpdCcsIG1pbnV0ZTonMi1kaWdpdCcsIGhvdXIxMjogdHJ1ZX0pO1xuXG4gICAgICAgICAgICAvL3RpbWVEYXRhW2ldPW5ldyBEYXRlKGRhdGEubGlzdFtpXS5kdCoxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLHtcbiAgICAgICAgICAgICAgLy8gIHdlZWtkYXk6ICdzaG9ydCcsIGhvdXI6J251bWVyaWMnLCBob3VyMTI6IHRydWVcbiAgICAgICAgICAgIC8vfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHRlbXBEYXRhW2ldPWRhdGEubGlzdFtpXS5tYWluLnRlbXA7XG4gICAgICAgICAgICBwb3BEYXRhW2ldPWRhdGEubGlzdFtpXS5wb3AqMTAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGljb25EYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2codGltZURhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcERhdGEpO1xuICAgICAgICByZXR1cm4gW3RpbWVEYXRhLHRlbXBEYXRhLHBvcERhdGEsaWNvbkRhdGFdO1xuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tICcuL2RvbSc7XG5cbmNyZWF0ZURPTSgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=