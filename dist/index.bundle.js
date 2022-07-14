/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/skeleton.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-family: sans-serif;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n\n#base{\n    display: flex;\n    height: 100%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n    cursor: pointer;\n}\n\n\n\n/*Left hand menu bar*/\n#menuBarContainer{\n    width: 15%;\n    border-right: 1pt black solid;\n    \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n   \n}\n/*logo*/\n/*\n#todoListLogoContainer{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    height: 5%;\n    background-color: lightskyblue;\n    width: 100%;\n    border: none;\n}\n#todoListLogo{\n    font-size: 15pt;\n    margin-left: 2%;\n}\n*/\n\n#listHeaderContainer{\n    display: flex;\n    justify-content: space-between;\n    padding: 5pt;\n    background-color: lightskyblue;\n}\n\n.listHeaders{\n    font-size: 20pt;\n\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    height: 80%;\n    width: 100%;\n    gap: 5px;\n}\n\n.selectedList{\n    color:#4267B2;\n}\n\n#currentListsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    gap: 10px;\n}\n\n.listFlexContainer{\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n}\n\n\n    .listBtn, .editListBtn{\n        font-size: 12pt;\n       /* height: 5%;\n */        height: fit-content;\n        border: none;\n        background-color: whitesmoke;\n        cursor: pointer;\n        width: 60%;\n        width: fit-content;\n        overflow-wrap: anywhere;\n        text-align: left;\n    }\n\n\n\n/* right hand tasks display and interactions popup*/\n        #taskAndListContainer{\n            height: 100%;\n            width: 85%;\n            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tiny_Babbling_Brook.jpg/2560px-Tiny_Babbling_Brook.jpg');\n            background-position: center top;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            align-items: center;\n           \n            \n        }\n\n\n\n        #taskPopoutBoxContainer, #taskInfoPopoutContainer{\n            height: 80%;\n            width: 300pt;\n            border-radius: 4%;\n            margin-left: 50pt;\n            justify-content: end;\n            align-items: center;\n            margin-bottom: 3%;;\n        }\n\n        #taskPopoutBox, #taskInfoPopoutBox{\n        height: 100%;\n        width: 100%;\n            background-color: white;\n            border: 1pt #d8d8d8 inset;\n            border-radius: 4%;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n\n        .listDisplayTaskbar, #taskTitleDisplayBox {\n            width: 100%;\n            height: 10%;\n            display: flex;\n            justify-content: space-between;\n            margin: 0;\n        }\n        #listNameDisplay, #taskTitleDisplay{\n            display: flex;\n            align-items: center;\n            padding: 5pt;\n            overflow-wrap: anywhere; /*Really only for it someone types all capital Q or something */\n        }\n\n\n        .listExitBtn{\n            display: flex;\n            flex-shrink: 0;\n            justify-content: center;\n            align-items: center;\n            margin-right: 2pt;\n            margin-top: 2pt;\n            border-radius: 30px;\n            border: none;\n            font-size: 12pt;\n            background-color: white;\n        }\n\n        #taskDisplayContainer, #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n           \n            background-color: whitesmoke;\n            height: 90%;\n            width: 100%;\n            margin: 0;\n\n            \n        }\n        /*taskFlexContainer*/\n        .taskFlex{\n            display: flex;\n            height: fit-content;\n            align-items: center;\n            justify-content: left;\n            background-color: whitesmoke;\n            border: none;\n            gap:2%;\n            font-size: 12pt;\n            cursor: pointer;\n            overflow-wrap: anywhere;\n            text-align-last: left;\n           \n        }\n\n        .taskFlex:hover{\n            border: 1pt blue inset;\n            border-radius: 15px;\n        }\n        .taskCrossBtn{\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            border-radius: 15px;\n            margin-left: 5%;\n            border: 1pt, black, solid;\n            cursor: pointer;\n        }\n\n        .task{\n            display: flex;\n            text-align: left;\n            margin: 0;\n            padding: 5pt;\n            width: 300px;\n            \n           \n            \n        }\n\n        \n\n        /*Crossout achieved with linear gradient, shamelessly took this*/\n        .crossed{\n            background: linear-gradient(180deg, \n                rgba(0,0,0,0) calc(50% - 1px), \n                rgba(192,192,192,1) calc(50%), \n                rgba(0,0,0,0) calc(50% + 1px)\n                );\n        }\n\n        .crossedColors{\n            color: grey;\n\n        }\n        .deleteTaskBtn, .crossedTaskBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            font-size: 11pt;\n            background-color: grey;\n            color: white;\n            border: none;\n            cursor: pointer;\n            \n        }\n        .deleteTaskBtn{\n            margin: 0;\n        }\n        .crossedTaskBtn{\n            font-size: 14pt;\n        }\n\n        #inputContainer{\n            display: flex;\n            gap: 4%;\n            padding-top: 5pt;\n            height: 10%;\n            width: 100%;\n        }\n\n        #userTaskInput{\n            border-radius: 15px;\n            border: 1pt blue solid;\n            margin-left: 2pt;\n            font-size: 10pt;\n            height: 60%;\n            width: 85%;\n        }\n\n        #addTaskBtn{\n            border-radius: 15px;\n            background-color: white;\n            border: 1pt blue solid;\n            font-weight: bold;\n            height: 70%;\n            width: 10%;\n            margin: 0;\n            margin-right: 3pt;\n        }\n\n/*Info and Display Box*/\n        #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            border-radius: 15px;\n        }\n        #dueDateDisplayContainer{\n           height: 20%;\n           width: 100%;\n        }\n            #changeDueDateBtn{\n                height: 30pt;\n            }\n        \n        #descriptionDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            height: 80%;\n            \n          \n        }\n            #descriptionDisplay, #descriptionDisplayInput{\n                display: flex;\n                justify-content: top;\n                align-items: center;\n                overflow-wrap: break-word;\n                width:99%;\n                height: 99%;\n                border: none;\n                border-bottom-left-radius: 15px;\n                border-bottom-right-radius: 15px;\n                resize: none;\n                border-top: 1pt black solid;\n            }\n        .infoTitle{\n            font-size: 15pt;\n            font-weight: bold;\n        }\n\n\n\n/*Add List popout Box*/\n#addListPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n#addListNameDisplay{\n    margin-left: 5pt;\n    flex-shrink: 1;\n\n\n}\n#addListExitBtn{\n    margin-right: 2pt;\n    margin-top: 2pt;\n    border-radius: 30px;\n    border: none;\n    font-size: 12pt;\n}\n\n#addListPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#addListPopoutBox{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 300pt;\n    height: 100pt;\n    background-color: white;\n    /*\n    margin-left: 7%;\n    margin-bottom: 4%;\n    */\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    gap: 15pt;\n    overflow: auto;\n    flex-wrap: nowrap;\n}\n#addListInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 30%;\n    width: 100%;\n}\n\n#userListInputContainer{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n#userListInput{\n    border-radius: 15px;\n    border: 1pt black solid;\n    margin-left: 2pt;\n    width: 85%;\n}\n\n.addNewListInput{\n\n}\n#addListPopupBtn, #addDatePopoutBtn{\n    border-radius: 15px;\n    font-weight: bold;\n    background-color: white;\n    border: 1pt black solid;\n    width: 10%;\n    height: 100%;\n    margin: 0;\n    margin-right: 3pt;\n}\n#addListPopupBtn:hover, #addTaskBtn:hover, #addDatePopoutBtn:hover{\n    background-color: #4267B2;\n}\n\n#calendar{\n    width: 70%;\n    margin-left: 10pt;\n}\n\n/*Editing List Name Popup*/\n#editListBtnContainer{\n    display: flex;\n    justify-content: center;\n    gap: 5pt;\n    align-items: center;\n    height: 18%;\n    width: 100%;\n    margin: 0;\n    margin-bottom: 5pt;\n\n}\n#deleteListBtnFlexContainer, #saveEditedListBtnFlexContainer{\n    display: flex;\n    height: 100%;\n    width: 45%;\n    justify-content: center;\n}\n\n\n#deleteListBtn, #saveEditedListBtn{\n    font-weight: bold;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n\n#deleteListBtn{\n    border: 1pt solid hsl(345deg 100% 47%) ;\n}\n#deleteListBtn:hover{\n    background: hsl(345deg 100% 47%);\n}\n\n#saveEditedListBtn{\n    border: 1pt solid #4267B2;\n}\n\n#saveEditedListBtn:hover{\n    background-color: #4267B2;\n}", "",{"version":3,"sources":["webpack://./src/skeleton.css"],"names":[],"mappings":"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","sourcesContent":["html{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    font-family: sans-serif;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n\n#base{\n    display: flex;\n    height: 100%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n    cursor: pointer;\n}\n\n\n\n/*Left hand menu bar*/\n#menuBarContainer{\n    width: 15%;\n    border-right: 1pt black solid;\n    \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    background-color: whitesmoke;\n   \n}\n/*logo*/\n/*\n#todoListLogoContainer{\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    height: 5%;\n    background-color: lightskyblue;\n    width: 100%;\n    border: none;\n}\n#todoListLogo{\n    font-size: 15pt;\n    margin-left: 2%;\n}\n*/\n\n#listHeaderContainer{\n    display: flex;\n    justify-content: space-between;\n    padding: 5pt;\n    background-color: lightskyblue;\n}\n\n.listHeaders{\n    font-size: 20pt;\n\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    height: 80%;\n    width: 100%;\n    gap: 5px;\n}\n\n.selectedList{\n    color:#4267B2;\n}\n\n#currentListsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    gap: 10px;\n}\n\n.listFlexContainer{\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n}\n\n\n    .listBtn, .editListBtn{\n        font-size: 12pt;\n       /* height: 5%;\n */        height: fit-content;\n        border: none;\n        background-color: whitesmoke;\n        cursor: pointer;\n        width: 60%;\n        width: fit-content;\n        overflow-wrap: anywhere;\n        text-align: left;\n    }\n\n\n\n/* right hand tasks display and interactions popup*/\n        #taskAndListContainer{\n            height: 100%;\n            width: 85%;\n            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Tiny_Babbling_Brook.jpg/2560px-Tiny_Babbling_Brook.jpg');\n            background-position: center top;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            align-items: center;\n           \n            \n        }\n\n\n\n        #taskPopoutBoxContainer, #taskInfoPopoutContainer{\n            height: 80%;\n            width: 300pt;\n            border-radius: 4%;\n            margin-left: 50pt;\n            justify-content: end;\n            align-items: center;\n            margin-bottom: 3%;;\n        }\n\n        #taskPopoutBox, #taskInfoPopoutBox{\n        height: 100%;\n        width: 100%;\n            background-color: white;\n            border: 1pt #d8d8d8 inset;\n            border-radius: 4%;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n\n        .listDisplayTaskbar, #taskTitleDisplayBox {\n            width: 100%;\n            height: 10%;\n            display: flex;\n            justify-content: space-between;\n            margin: 0;\n        }\n        #listNameDisplay, #taskTitleDisplay{\n            display: flex;\n            align-items: center;\n            padding: 5pt;\n            overflow-wrap: anywhere; /*Really only for it someone types all capital Q or something */\n        }\n\n\n        .listExitBtn{\n            display: flex;\n            flex-shrink: 0;\n            justify-content: center;\n            align-items: center;\n            margin-right: 2pt;\n            margin-top: 2pt;\n            border-radius: 30px;\n            border: none;\n            font-size: 12pt;\n            background-color: white;\n        }\n\n        #taskDisplayContainer, #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n           \n            background-color: whitesmoke;\n            height: 90%;\n            width: 100%;\n            margin: 0;\n\n            \n        }\n        /*taskFlexContainer*/\n        .taskFlex{\n            display: flex;\n            height: fit-content;\n            align-items: center;\n            justify-content: left;\n            background-color: whitesmoke;\n            border: none;\n            gap:2%;\n            font-size: 12pt;\n            cursor: pointer;\n            overflow-wrap: anywhere;\n            text-align-last: left;\n           \n        }\n\n        .taskFlex:hover{\n            border: 1pt blue inset;\n            border-radius: 15px;\n        }\n        .taskCrossBtn{\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            border-radius: 15px;\n            margin-left: 5%;\n            border: 1pt, black, solid;\n            cursor: pointer;\n        }\n\n        .task{\n            display: flex;\n            text-align: left;\n            margin: 0;\n            padding: 5pt;\n            width: 300px;\n            \n           \n            \n        }\n\n        \n\n        /*Crossout achieved with linear gradient, shamelessly took this*/\n        .crossed{\n            background: linear-gradient(180deg, \n                rgba(0,0,0,0) calc(50% - 1px), \n                rgba(192,192,192,1) calc(50%), \n                rgba(0,0,0,0) calc(50% + 1px)\n                );\n        }\n\n        .crossedColors{\n            color: grey;\n\n        }\n        .deleteTaskBtn, .crossedTaskBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            font-size: 11pt;\n            background-color: grey;\n            color: white;\n            border: none;\n            cursor: pointer;\n            \n        }\n        .deleteTaskBtn{\n            margin: 0;\n        }\n        .crossedTaskBtn{\n            font-size: 14pt;\n        }\n\n        #inputContainer{\n            display: flex;\n            gap: 4%;\n            padding-top: 5pt;\n            height: 10%;\n            width: 100%;\n        }\n\n        #userTaskInput{\n            border-radius: 15px;\n            border: 1pt blue solid;\n            margin-left: 2pt;\n            font-size: 10pt;\n            height: 60%;\n            width: 85%;\n        }\n\n        #addTaskBtn{\n            border-radius: 15px;\n            background-color: white;\n            border: 1pt blue solid;\n            font-weight: bold;\n            height: 70%;\n            width: 10%;\n            margin: 0;\n            margin-right: 3pt;\n        }\n\n/*Info and Display Box*/\n        #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            border-radius: 15px;\n        }\n        #dueDateDisplayContainer{\n           height: 20%;\n           width: 100%;\n        }\n            #changeDueDateBtn{\n                height: 30pt;\n            }\n        \n        #descriptionDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            height: 80%;\n            \n          \n        }\n            #descriptionDisplay, #descriptionDisplayInput{\n                display: flex;\n                justify-content: top;\n                align-items: center;\n                overflow-wrap: break-word;\n                width:99%;\n                height: 99%;\n                border: none;\n                border-bottom-left-radius: 15px;\n                border-bottom-right-radius: 15px;\n                resize: none;\n                border-top: 1pt black solid;\n            }\n        .infoTitle{\n            font-size: 15pt;\n            font-weight: bold;\n        }\n\n\n\n/*Add List popout Box*/\n#addListPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n#addListNameDisplay{\n    margin-left: 5pt;\n    flex-shrink: 1;\n\n\n}\n#addListExitBtn{\n    margin-right: 2pt;\n    margin-top: 2pt;\n    border-radius: 30px;\n    border: none;\n    font-size: 12pt;\n}\n\n#addListPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#addListPopoutBox{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 300pt;\n    height: 100pt;\n    background-color: white;\n    /*\n    margin-left: 7%;\n    margin-bottom: 4%;\n    */\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    gap: 15pt;\n    overflow: auto;\n    flex-wrap: nowrap;\n}\n#addListInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 30%;\n    width: 100%;\n}\n\n#userListInputContainer{\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n}\n#userListInput{\n    border-radius: 15px;\n    border: 1pt black solid;\n    margin-left: 2pt;\n    width: 85%;\n}\n\n.addNewListInput{\n\n}\n#addListPopupBtn, #addDatePopoutBtn{\n    border-radius: 15px;\n    font-weight: bold;\n    background-color: white;\n    border: 1pt black solid;\n    width: 10%;\n    height: 100%;\n    margin: 0;\n    margin-right: 3pt;\n}\n#addListPopupBtn:hover, #addTaskBtn:hover, #addDatePopoutBtn:hover{\n    background-color: #4267B2;\n}\n\n#calendar{\n    width: 70%;\n    margin-left: 10pt;\n}\n\n/*Editing List Name Popup*/\n#editListBtnContainer{\n    display: flex;\n    justify-content: center;\n    gap: 5pt;\n    align-items: center;\n    height: 18%;\n    width: 100%;\n    margin: 0;\n    margin-bottom: 5pt;\n\n}\n#deleteListBtnFlexContainer, #saveEditedListBtnFlexContainer{\n    display: flex;\n    height: 100%;\n    width: 45%;\n    justify-content: center;\n}\n\n\n#deleteListBtn, #saveEditedListBtn{\n    font-weight: bold;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n\n#deleteListBtn{\n    border: 1pt solid hsl(345deg 100% 47%) ;\n}\n#deleteListBtn:hover{\n    background: hsl(345deg 100% 47%);\n}\n\n#saveEditedListBtn{\n    border: 1pt solid #4267B2;\n}\n\n#saveEditedListBtn:hover{\n    background-color: #4267B2;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMinutes/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMinutes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMinutes)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/skeleton.css":
/*!**************************!*\
  !*** ./src/skeleton.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addNewList.js":
/*!***************************!*\
  !*** ./src/addNewList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewList)
/* harmony export */ });
/* harmony import */ var _closePopups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closePopups */ "./src/closePopups.js");
/* harmony import */ var _displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTaskDetails */ "./src/displayTaskDetails.js");
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");






//Controls the function of the addListPopout. Also controls the addList button on side menu
function addNewList() {
    let removerArray = []


    //This function creates & pins the new lsit buttons on the lefthand menu//
    function createNewButtons() {
        let addListPopoutBox = document.getElementById('addListPopoutBox');
        let taskPopoutBox = document.getElementById('taskPopoutBox')
        let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
        //unappend the popup//
        //const listFlexContainers = document.getElementsByClassName('listFlexContainer')
        const elements = document.getElementsByClassName('listFlexContainer');

        while (removerArray.length > 0) {
            for(let p=0; p<removerArray.length;p++){
                removerArray[p].removeChild(removerArray[p].firstChild);
                removerArray[p].removeChild(removerArray[p].firstChild);
            }
            removerArray = [];
        }
        while (elements.length > 0) {
            currentListsFlexContainer.removeChild(elements[0]);
        }
        
        //for the list menu buttons on left side//
        for (let i = 0; i < _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray.length; i++) {
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i].classList.add('btn', 'listBtn');
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i].id = i;
            let currentListsFlexContainer = document.getElementById('currentListsFlexContainer')
            let listFlexContainer = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer.classList.add('listFlexContainer');
                removerArray.push(listFlexContainer)
            let editListBtn = document.createElement('button');
                editListBtn.id = i+'e';
                editListBtn.innerHTML = '&#9881'
            editListBtn.classList.add('editListBtn', 'btn');
            listFlexContainer.append(_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i]);
            listFlexContainer.append(editListBtn);
            currentListsFlexContainer.append(listFlexContainer);

            //Event listener for the listEdit buttons, iterating off of i so as to save the correct btnArray.innerHTML
            editListBtn.addEventListener('click', () => {
                //lazyHiddenDiv empty//
                const elements2 = document.getElementsByClassName('popoutItem2');
                while (elements2.length > 0) {
                    addListPopoutBox.removeChild(elements2[0]);
        }
                    addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
                    addListNameDisplay.innerHTML = 'Name List';
                    //define these here so they can always be accessed, even when editing the popup elsewhere//
                    let userListInput = document.createElement('input');
                        userListInput.type = 'text';
                        userListInput.id = 'userListInput';
                        userListInput.maxLength = 18;
                        userListInput.value = _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i].innerHTML;
                        userListInput.classList.add('popoutItem');
                    let editListBtnContainer = document.createElement('div');
                        editListBtnContainer.id = 'editListBtnContainer';
                        editListBtnContainer.classList.add('editListBtnContainer');
                    let deleteListBtnFlexContainer = document.createElement('div');
                        deleteListBtnFlexContainer.id = 'deleteListBtnFlexContainer';
                    let deleteListBtn = document.createElement('button');
                        deleteListBtn.id = 'deleteListBtn';
                        deleteListBtn.classList.add('btn', 'deleteListBtn');
                        deleteListBtn.innerHTML = 'Delete';
                    
                        //adds event listeners to the delete button in the popup, buts it out of btn and list array and resets everything//
                deleteListBtn.addEventListener('click', () => {
                            addListPopoutBoxContainer.style.display = 'none';
                            taskPopoutBox.style.display = 'none';
                            taskInfoPopoutBox.style.display = 'none';
                            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray.splice(i, 1);
                                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeButtons)();
                                console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray)
                            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArray.splice(i, 1);
                                (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storelistArray)();
                                console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArray)
                            //displayFlagFalseForDeletingLists(); //change the display flag to avoid an error if nothing is currently displayed//
                            ;(0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__.takeEverythingOffInfoBoard)();
                            createNewButtons();
                            (0,_closePopups__WEBPACK_IMPORTED_MODULE_0__["default"])();
                            removeDeleteAndSave();
                        })
                    let saveEditedListBtnFlexContainer = document.createElement('div');
                        saveEditedListBtnFlexContainer.id = ('saveEditedListBtnFlexContainer')
                    let saveEditedListBtn = document.createElement('button');
                        saveEditedListBtn.id = 'saveEditedListBtn';
                        saveEditedListBtn.classList.add('btn', 'saveEditedListBtn');
                        saveEditedListBtn.innerHTML = 'Save';
                   
                //allows you to change the name of the list//
                saveEditedListBtn.addEventListener('click', () => {
                        let userListInputValue = userListInput.value
                        if(userListInputValue.trim().length === 0){
                            userListInput.value = '';
                            return
                        }
                        else{
                        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i].innerHTML = userListInputValue;
                        addListPopoutBoxContainer.style.display = 'none';
                        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeButtons)();
                        createNewButtons();
                        
                        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray[i].click(); //Calls the clicked button to display it.
                        removeDeleteAndSave();
                        }
                    })
                    //Enter button defaults to saving new name
                    
                    //Remove old delete & save buttons
                    removeDeleteAndSave();
                    //Delete the text input container
                    const elements = document.getElementsByClassName('popoutItem');
                    while (elements.length > 0) {
                        addListInputContainer.removeChild(elements[0]);
                    }

                    //Add the addList materials//
                    addListPopoutBox.append(editListBtnContainer);
                    editListBtnContainer.append(deleteListBtnFlexContainer);
                    deleteListBtnFlexContainer.append(deleteListBtn)
                    editListBtnContainer.append(saveEditedListBtnFlexContainer)
                    saveEditedListBtnFlexContainer.append(saveEditedListBtn)
                    addListInputContainer.append(userListInput);

                    userListInput.focus(); //auto places cursor in input
                    //Allows user to edit text field and hit enter
                    userListInput.addEventListener('keypress', function(e){
                        if (e.key === 'Enter'){
                            let saveEditedListBtn = document.getElementById('saveEditedListBtn');
                            saveEditedListBtn.click();
                            return
                        }
                    })
                })
        }
        (0,_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.assignButtons)();
    }
    
    //remove redundant delete and save buttons
    function removeDeleteAndSave() {
        const elements2 = document.getElementsByClassName('editListBtnContainer');
        while (elements2.length > 0) {
            addListPopoutBox.removeChild(elements2[0]);
        }
    }




    let userListInput
    let userListInputValue
    let userListNewBtn
    //This function alters the btnArray, adding the new input into that array and generating it again//
    function clickBtnAddToBtnArray() {
        userListInput = document.getElementById('userListInput');
        userListInputValue = userListInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
        if (userListInputValue.trim().length === 0) {
            userListInputValue = ''
            return
        }
        //creates new button and puts it in the button array//
        let userListNewBtn = document.createElement('button');
        userListNewBtn.innerHTML = userListInputValue;
        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.btnArray.push(userListNewBtn);
        //if the string is too long, shorten it and add to list//
        //btns should have been objects//
        createNewButtons();
        //assignButtons();

        //puts it in the list array
       
        let userListNewArray = [];
        userListNewArray.innerHTML = userListInputValue;
        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArray.push(userListNewArray);
        userListInput.value = '';
        addListPopoutBoxContainer.style.display = 'none';
        userListNewBtn.click(); //Clicks the new button, opening the new list//
        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeButtons)(); //saves the new button
        //assignButtons();
    }

    //ADD LISTS BUTTON EVENT LISTENER POPUP
    //Event listener to the menu button adding lists, makes sure everything populates in 
    //popup, then calls above function
    addListBtn.addEventListener('click', () => {
        addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
        addListNameDisplay.innerHTML = 'Name New List';
        //define these here so they can always be accessed, even when editing the popup elsewhere//
       
        let userListInput = document.createElement('input');
            userListInput.type = 'text';
            userListInput.id = 'userListInput';
            userListInput.maxLength = 18;
            userListInput.classList.add('popoutItem');
            userListInput.classList.add('addNewListInput');
        let addListPopupBtn = document.createElement('button');
            addListPopupBtn.id = 'addListPopupBtn';
            addListPopupBtn.classList.add('btn', 'popoutItem');
            addListPopupBtn.innerHTML = '+';
        //hiddenDiv is here for CSS, laziness on my part to reuse the popup made it difficult to style.//
        let hiddenDiv = document.createElement('div');
            hiddenDiv.id = 'hiddenDiv';
            hiddenDiv.classList.add('popoutItem2');

        //Empty the popup
        const elements = document.getElementsByClassName('popoutItem');
        while (elements.length > 0) {
            addListInputContainer.removeChild(elements[0]);
        }
        //lazyHiddenDiv empty//
        const elements2 = document.getElementsByClassName('popoutItem2');
        while (elements2.length > 0) {
            addListPopoutBox.removeChild(elements2[0]);
        }
        //Add the addList materials//
        addListInputContainer.append(userListInput);
        addListInputContainer.append(addListPopupBtn);
        addListPopoutBox.append(hiddenDiv);
        userListInput.focus(); //auto places cursor in box//
        addListPopupBtn.addEventListener('click', clickBtnAddToBtnArray); //calls the above function to make sure that lists get appended//
        //add enter key support
        userListInput.addEventListener('keypress', function(e){
            if (e.key === 'Enter'){
                addListPopupBtn.click();
            }
        })
    })


    createNewButtons(); //called at end of function to auto generate buttons for hardcoded lists
}



/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
//This factory function creates tasks with a name, description, and dueDate//
function addTask(taskName, description, dueDate, 
    priority, completeStatus, deleteEligible, formerArrayPosition, currentArrayPosition,){
    this.taskName = taskName
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completeStatus = completeStatus
    this.deleteEligible = deleteEligible
    this.formerArrayPosition = formerArrayPosition
    this.currentArrayPosition = currentArrayPosition
}



/***/ }),

/***/ "./src/closePopups.js":
/*!****************************!*\
  !*** ./src/closePopups.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closePopups)
/* harmony export */ });
//This function closes popups using their x buttons//
function closePopups(){
//x makes the popup invisible again. Probably need to reset it, do so later//

//Not sure if it is more/less coupled to declare the arrays here rather than making the arrays in the skeleton and importing them over.
//I think it is a little clearer where the data for the arrays is coming from over here
//The only foreseeable problem would be if a variable name is changed there it would have to be changed here as well

//array of the x's//
let closePopupsArray = [];

let closeTaskPopup = document.getElementById('listExitBtn');
    closePopupsArray.push(closeTaskPopup)
const addListExitBtn = document.getElementById('addListExitBtn');
    closePopupsArray.push(addListExitBtn)


//array of the popouts//
let popoutArray = []; 

let taskPopoutBox = document.getElementById('taskPopoutBox');
    popoutArray.push(taskPopoutBox);
const addListPopoutBoxContainer = document.getElementById('addListPopoutBoxContainer');
    popoutArray.push(addListPopoutBoxContainer);
let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
let addListPopoutBox = document.getElementById('addListPopoutBox')

//In order, link the arrays 1 to 1 and assign the event listener to close that item of the array//
for(let i=0; i<closePopupsArray.length;i++){
closePopupsArray[i].addEventListener('click', () =>{
     popoutArray[i].style.display = 'none'; //Erasing popup display from sight until clicking a list//
    if (popoutArray[i] == taskPopoutBox){//not elegant//
        taskInfoPopoutBox.style.display = 'none';
    }
    //removes the add/remove from the edit list when clicking off them
    const elements2 = document.getElementsByClassName('editListBtnContainer');
    while(elements2.length > 0){ 
        addListPopoutBox.removeChild(elements2[0]);
    }
    })
}
}




/***/ }),

/***/ "./src/deleteTasks.js":
/*!****************************!*\
  !*** ./src/deleteTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crossedTasks": () => (/* binding */ crossedTasks),
/* harmony export */   "deleteTasks": () => (/* binding */ deleteTasks)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTaskDetails */ "./src/displayTaskDetails.js");
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");




let crossedTasks = [];
function deleteTasks(){
    let prototypeTrackerBecauseIIsOutOfScope
    let corralEligibiltyTracker
    let deleteEligibleArray = []
    //let deleteTaskTracker

    //allows switching between crossed & uncrossed
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.makeCrossed = function(){
        if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
            crossedTasks.push(_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArrayCurrent[prototypeTrackerBecauseIIsOutOfScope]); //Move my corresponding listArrayCurrent member into crossedTasks
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArrayCurrent.splice(prototypeTrackerBecauseIIsOutOfScope,1); //Remove him from the list array
            this.completeStatus = 'crossed'; //changes to crossed out & moves to bottom array//
        }
        else if(this.completeStatus == 'crossed'){ //if crossed
            this.completeStatus = 'incomplete';
        }
    }
    //assigns the event listeners to the crossed tasks button, allowing them to actually cross//
    function assignCrossedTasksEventListeners(){
        for(let i=0; i<_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.currentCrossTaskButtonsArray.length; i++){
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.currentCrossTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                prototypeTrackerBecauseIIsOutOfScope = i
                _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.taskDisplayArray[i].makeCrossed(); //Change the task to either crossed or uncrossed
                (0,_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.pinList)(); //Put everyone back on the board
                event.stopImmediatePropagation();                  
                })
            }
            crossedTasks = [] //empty crossed tasks since all of these gents are in listArrayCurrent back in pinList
    }

    //Following functions are for deleting already crossed tasks
    //Puts all the eligible for delete tasks into an array//
     function corralDeleteEligibleIntoArray(){
        for(let i=0; i<_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.taskDisplayArray.length; i++){
            corralEligibiltyTracker = i;//Track i to be used in prototype
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.taskDisplayArray[i].deleteEligibleHerder();
        }
    }
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.deleteEligibleHerder = function(){
        if(this.deleteEligible == 'eligible'){ //If eligbile for deletion
            deleteEligibleArray.push(_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.taskDisplayArray[corralEligibiltyTracker])//Put into the delete array
        }
    }

    //Saves tasks current position in the listArray so they can be accurately deleted when crossed//
    function currentArrayPositionTracker (){
        for(let p = 0; p < _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArrayCurrent.length; p++){ //loop through current array assigning tracking number
            currentArrayPositionTracker = p;//tracker for i
            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArrayCurrent[p].saveCurrentArrayPosition(); //saves current position through prototype
            
        }    
    }
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.saveCurrentArrayPosition = function(){
        this.currentArrayPosition = currentArrayPositionTracker;//current position is tracker position
    }
    //Assigns event listeners to the delete buttons for deletion//
    function assignDeleteTasksEventListeners(){
        for(let i=0; i<_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.deleteTaskButtonsArray.length; i++){
                _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.deleteTaskButtonsArray[i].addEventListener('click', () =>{ //for every button on the list, when I am clicked
                    currentArrayPositionTracker(); //Find the current position of my task
                    deleteEligibleArray[i].deleteTask();//delete that task, finding it in my array of eligible deletions
                    //If the deleted item is the current item, default the info display to the original, if not then keep it on current item//
                    if(deleteEligibleArray[i] == _displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__.currentTask){ //currentTask imported from displayTaskDetails//
                        (0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__.takeEverythingOffInfoBoard)(); //Delete info board, setting flag to false and pinning first item on list//
                        }
                    (0,_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.pinList)(); //Put everyone back on the board
                    //let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
                    
                    event.stopImmediatePropagation();   //stops it from bubbling to outside button
                  })
            };
    }
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.deleteTask = function(){
        let currentPositionTracker = this.currentArrayPosition//find current position
        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArrayCurrent.splice(currentPositionTracker,1)//remove it from the currentListArray
    }

    assignCrossedTasksEventListeners();//assign event listeners for cross buttons
    corralDeleteEligibleIntoArray(); //corral all my eligible deletions
    assignDeleteTasksEventListeners(); //assign event listeners for deletions
}





/***/ }),

/***/ "./src/displayTaskDetails.js":
/*!***********************************!*\
  !*** ./src/displayTaskDetails.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentTask": () => (/* binding */ currentTask),
/* harmony export */   "displayFlagFalseForDeletingLists": () => (/* binding */ displayFlagFalseForDeletingLists),
/* harmony export */   "displayTaskDetails": () => (/* binding */ displayTaskDetails),
/* harmony export */   "takeEverythingOffInfoBoard": () => (/* binding */ takeEverythingOffInfoBoard)
/* harmony export */ });
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addMinutes/index.js");
//let currentDisplayedTasksArray = []

//called from pinlist




//Display flag must be declared up here so it can be edited safely
let displayedFlag
let changeDueDateBtn
let currentTask //Define here so we can edit throughout



//separated from the other larger function so that it can be exported
// and called when creating new lists or in deleting tasks to display the correct 
//task
function takeEverythingOffInfoBoard(){
    let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox');
    let taskInfoDisplayContainer = document.getElementById('taskInfoDisplayContainer')
    let dueDateDisplayContainer = document.getElementById('dueDateDisplayContainer')
    let dueDateTitle = document.getElementById('dueDateTitle')
    let dueDateDisplay = document.getElementById('dueDateDisplay')
    let changeDueDateBtn = document.getElementById('changeDueDateBtn')
    let descriptionDisplayContainer = document.getElementById('descriptionDisplayContainer')
    let descriptionTitle = document.getElementById('descriptionTitle')
    let descriptionDisplay = document.getElementById('descriptionDisplay')
    //This is for deleting lists if nothing is displayed, otherwise the deleteFunction will error and exit here because there is no popupBox to remove//
    if(displayedFlag == false || _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.firstListOpenFlag == false ){
        return
    }
    else{
        taskInfoPopoutBox.removeChild(taskInfoDisplayContainer);
        taskInfoDisplayContainer.removeChild(dueDateDisplayContainer);
        dueDateDisplayContainer.removeChild(dueDateTitle);
        dueDateDisplayContainer.removeChild(dueDateDisplay);
        dueDateDisplayContainer.removeChild(changeDueDateBtn);
        taskInfoDisplayContainer.removeChild(descriptionDisplayContainer);
        descriptionDisplayContainer.removeChild(descriptionTitle);
        descriptionDisplayContainer.removeChild(descriptionDisplay);
        displayedFlag = false; //allows you to click when deleting an item//
    }
}
//solely for deleting lists if no tasks are displayed//
function displayFlagFalseForDeletingLists(){
   displayedFlag = false;
}




function displayTaskDetails(){

    
    //let currentTask
    let calendarValue
    let taskInfoDisplayContainer 
    let dueDateDisplayContainer 
    let dueDateTitle
    let dueDateDisplay 
    let changeDueDateBtn 
    let descriptionDisplayContainer 
    let descriptionTitle 
    let descriptionDisplay 
   

    function putEverythingOnInfoBoard(){
        let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox');
         taskInfoDisplayContainer = document.createElement('div');
            taskInfoDisplayContainer.id = 'taskInfoDisplayContainer'
            taskInfoPopoutBox.append(taskInfoDisplayContainer)
         dueDateDisplayContainer = document.createElement('div');
            dueDateDisplayContainer.id = "dueDateDisplayContainer"
            taskInfoDisplayContainer.append(dueDateDisplayContainer);
                 dueDateTitle = document.createElement('div');
                    dueDateTitle.id = 'dueDateTitle';
                    dueDateTitle.classList.add('infoTitle');
                    dueDateTitle.innerHTML = 'Finish by';
                    dueDateDisplayContainer.append(dueDateTitle);
                 dueDateDisplay = document.createElement('div');
                    dueDateDisplay.id = 'dueDateDisplay';
                    dueDateDisplayContainer.append(dueDateDisplay);
                 changeDueDateBtn = document.createElement('button');
                    changeDueDateBtn.id = 'changeDueDateBtn';
                    changeDueDateBtn.classList.add('btn');
                    dueDateDisplayContainer.append(changeDueDateBtn)
         descriptionDisplayContainer = document.createElement('div');
            descriptionDisplayContainer.id = "descriptionDisplayContainer"
            taskInfoDisplayContainer.append(descriptionDisplayContainer);
                 descriptionTitle = document.createElement('div');
                    descriptionTitle.id = 'descriptionTitle';
                    descriptionTitle.classList.add('infoTitle');
                    descriptionTitle.innerHTML = 'Notes';
                    descriptionDisplayContainer.append(descriptionTitle);
                 descriptionDisplay = document.createElement('textarea')
                    descriptionDisplay.placeholder = 'Type your notes here'
                    descriptionDisplay.id = 'descriptionDisplay';
                    descriptionDisplayContainer.append(descriptionDisplay);
            displayedFlag = true;
    }

   
   
    //Posts the decriptions to those saved in the object
    _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.postTaskDetails = function(){
        let changeDueDateBtn = document.getElementById('changeDueDateBtn');
        let descriptionDisplay = document.getElementById('descriptionDisplay');
        taskTitleDisplay.innerHTML = this.taskName;
        if(this.taskName.length>20){
            let shortenedName = this.taskName.substring(0,20)
            let addPlus = shortenedName + '...';
            taskTitleDisplay.innerHTML = addPlus;
        }
        changeDueDateBtn.innerHTML = this.dueDate;
        //priorityDisplay.innerHTML = this.priority;
        descriptionDisplay.value = this.description;
    }

    //puts event listeners on the clickable tasks
    function taskButtonDisplayAssigner(){
        let allTaskFlexContainers = document.querySelectorAll('.taskFlex');
        for(let i=0;i<allTaskFlexContainers.length;i++){
            allTaskFlexContainers[i].addEventListener('click', ()=>{
                currentTask = _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[i];//Make the clicked task the current task for editing throughout
                removeAndReAdd();
                _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[i].postTaskDetails();
            })
        }
    }

    function removeAndReAdd(){
         takeEverythingOffInfoBoard();
         putEverythingOnInfoBoard();
         changeDueDateBtnEventListener();
    }

    //event listeners for changing lists
    function listButtonDisplayAssigner(){
        for(let i=0;i<_menuDisplay__WEBPACK_IMPORTED_MODULE_0__.btnArray.length;i++){ 
            _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.btnArray[i].addEventListener('click', ()=>{
                removeAndReAdd();
                taskButtonDisplayAssigner();
                _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[0].postTaskDetails(); //auto displays first task in list//
                currentTask = _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[0];
            })
        }
    }
       

        _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.saveDescriptionPrototype = function(){
            if(descriptionDisplay.value != null){ 
                let descriptionDisplay = document.getElementById('descriptionDisplay');
                this.description = descriptionDisplay.value;
            }
            return
        }

        function saveDescription(){
            console.log(currentTask)
            currentTask.saveDescriptionPrototype();
        }
        //lets you click off anywhere to save
        function baseEventListenerAdder(){
            base.addEventListener('click',saveDescription, true);
        }
    
    //These three control updating calendar
    function changeDueDate(){
            let calendar = document.getElementById('calendar')
            calendarValue = calendar.value;
            calendarValue = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(calendarValue), "PPPp")
            currentTask.changeDueDateProperty();
            addListPopoutBoxContainer.style.display = 'none';

        }
        _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.changeDueDateProperty = function(){
            let changeDueDateBtn = document.getElementById('changeDueDateBtn')
            this.dueDate = calendarValue;
            changeDueDateBtn.innerHTML = this.dueDate;
        }
    function changeDueDateBtnEventListener(){
        //Due date Btn displays popup and edits it to display due date edit info//
        let changeDueDateBtn = document.getElementById('changeDueDateBtn')
        changeDueDateBtn.addEventListener('click', () =>{
            let calendar = document.createElement('input');
                calendar.type = 'datetime-local';
                calendar.id = 'calendar';
                //default time stuff
                    let now = new Date(); //new date
                    now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); //calc current time
                    let intermediateTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(now, 5); //add 5 minutes
                    calendar.value = intermediateTime.toISOString().slice(0,16); //convert to ISO and set as default
                calendar.classList.add('popoutItem');
            let addDatePopoutBtn = document.createElement('button');
                addDatePopoutBtn.id = 'addDatePopoutBtn';
                addDatePopoutBtn.classList.add('btn','popoutItem');
                addDatePopoutBtn.innerHTML = '+';
            addListPopoutBoxContainer.style.display = 'block'; //this is now just the main popout;
            addListNameDisplay.innerHTML = 'Pick Date';
             //hiddenDiv is here for CSS, laziness on my part to reuse the popup made it difficult to style.//
            let hiddenDiv = document.createElement('div');
                hiddenDiv.id = 'hiddenDiv';
                hiddenDiv.classList.add('popoutItem2');
            //Have to put these here so it can grab the ID before emptying;
            //Empty the popup
            const elements = document.getElementsByClassName('popoutItem');
            while(elements.length > 0){ 
                addListInputContainer.removeChild(elements[0]);
            }
            //lazyHiddenDiv empty//
            const elements2 = document.getElementsByClassName('popoutItem2');
            while (elements2.length > 0) {
                addListPopoutBox.removeChild(elements2[0]);
        }
            //Add the addList materials//
            addListInputContainer.append(calendar);
            addListInputContainer.append(addDatePopoutBtn);
            addListPopoutBox.append(hiddenDiv);
            addDatePopoutBtn.addEventListener('click', changeDueDate);
        })
    }
     //controls this whole thing, only function called
     function infoDisplayController(){
        //This is for keeping persistence when crossing items. Info display stays on crossed item
        if(displayedFlag == true){
            removeAndReAdd();
            currentTask.postTaskDetails();
        }
        //This is for adding new tasks, makes them the displayed task//
        else if(_menuDisplay__WEBPACK_IMPORTED_MODULE_0__.newlyAddedTask != undefined){
                currentTask = _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.newlyAddedTask; //need to make current task this, otherwise value gets messed up down pipe//
                putEverythingOnInfoBoard(); // don't need to remove and readd bc everything already taken off//
                currentTask.postTaskDetails();
            }
        //If there is nothng on board IE first time opening a list, then default it to 0
        else{
            putEverythingOnInfoBoard();
            _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[0].postTaskDetails(); //auto displays first task in list//
            currentTask = _menuDisplay__WEBPACK_IMPORTED_MODULE_0__.listArrayCurrent[0];
        }
        changeDueDateBtnEventListener();
        taskButtonDisplayAssigner();
        listButtonDisplayAssigner();
        baseEventListenerAdder();
    }
    //InfoDisplay is the only thing that fires//
    infoDisplayController();
}


/***/ }),

/***/ "./src/menuDisplay.js":
/*!****************************!*\
  !*** ./src/menuDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignButtons": () => (/* binding */ assignButtons),
/* harmony export */   "btnArray": () => (/* binding */ btnArray),
/* harmony export */   "currentCrossTaskButtonsArray": () => (/* binding */ currentCrossTaskButtonsArray),
/* harmony export */   "deleteTaskButtonsArray": () => (/* binding */ deleteTaskButtonsArray),
/* harmony export */   "easyExport": () => (/* binding */ easyExport),
/* harmony export */   "firstListOpenFlag": () => (/* binding */ firstListOpenFlag),
/* harmony export */   "listArray": () => (/* binding */ listArray),
/* harmony export */   "listArrayCurrent": () => (/* binding */ listArrayCurrent),
/* harmony export */   "listArrayCurrentName": () => (/* binding */ listArrayCurrentName),
/* harmony export */   "newlyAddedTask": () => (/* binding */ newlyAddedTask),
/* harmony export */   "openLists": () => (/* binding */ openLists),
/* harmony export */   "pinList": () => (/* binding */ pinList),
/* harmony export */   "taskDisplayArray": () => (/* binding */ taskDisplayArray)
/* harmony export */ });
/* harmony import */ var _addNewList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addNewList */ "./src/addNewList.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _deleteTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTasks */ "./src/deleteTasks.js");
/* harmony import */ var _displayTaskDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTaskDetails */ "./src/displayTaskDetails.js");
/* harmony import */ var _rearrangeTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rearrangeTasks */ "./src/rearrangeTasks.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.js");









//declare listArray here for export later
let listArray = []
let btnArray = []
let listArrayCurrent
let listArrayCurrentName
let currentCrossTaskButtonsArray = []
let deleteTaskButtonsArray = []
let taskDisplayArray = []
let sortTracker
let iTracker//itracker here connects directly above to pinLists. Lets me change the original array in
let formerArrayPositionTracker
let newlyAddedTask
let firstListOpenFlag //This flag will allow for deletion of lists when none are open at start of program exported to displayTaskDetails//
let idCounterForTasksInPinList //these set id's available for dragging and dropping//
let idCounterForTasksInPinList2

//This function controls display on the popup. This includes clicks from the side menu, additions from the popup//
function openLists (){
    taskPopoutBox.style.display = 'none'; //Defaults popup to invisible before a list is clicked
    taskInfoPopoutBox.style.display = 'none';
    
    //Displays the addToList popup when clicked in menu
   
        //Preset lists//
            const mondayGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Oranges',
                '',
                'Set Time',
                'High'
            )
            const wedGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Pears',
                '',
                'Set Time',
                'Medium'
            )
            const fridayGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Grapes',
                '',
                'Set Time',
                'Low'
            )
            let groceryListArray = [mondayGrocery, wedGrocery, fridayGrocery,];
                groceryListArray.innerHTML = 'Groceries';

                const laundry = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    'Laundry',
                    '',
                    'Set Time',
                    'High'
                )
                const laundry2 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    'Vacuum',
                    '',
                    'Set Time',
                    'High'
                )
                const laundry3 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    'Scrub toilets',
                    '',
                    'Set Time',
                    'High'
                )
                const laundry4 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    'Dust',
                    '',
                    'Set Time',
                    'High'
                )
            let houseListArray = [laundry, laundry2, laundry3, laundry4,];
                houseListArray.innerHTML = 'Weekly Housework';
        //these ID's were defined in the skeleton//
            let groceryBtn = document.getElementById('0');
            let houseBtn = document.getElementById('1');

            //check if this is the first time this user has ever loaded the lists app, if it is, then default to original settings//
            let firstLoad = localStorage.getItem('firstLoad');
            let btnArraySavedChecker = localStorage.getItem('btnArray');
            let listArraySavedChecker = localStorage.getItem('listArray');
            console.log(firstLoad);
            
            if(firstLoad == 'false' && btnArraySavedChecker != null && listArraySavedChecker != null){
                (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getButtons)();
                (0,_storage__WEBPACK_IMPORTED_MODULE_5__.produceListArray)();
            }
            else{
                localStorage.setItem('firstLoad', false);
                
                console.log(firstLoad);
                btnArray = [groceryBtn, houseBtn,];
                listArray = [groceryListArray, houseListArray,];
            }
}   

   //This prototype is being called to display the categories from the lists on to the popup, it also creates the buttons//
   _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.displayList = function(){
       //the taskFlexContainers really should be objects//
        let taskFlexContainer = document.createElement('button'); //It being a button makes it clickable
            //taskFlexContainer.id = 'taskFlexContainer';
            taskFlexContainer.classList = 'taskFlex'
            taskFlexContainer.id = idCounterForTasksInPinList; //Giving ID to crossedITEMS

        //buttons to cross a task off, moving it to bottom of the array//
        let taskCrossBtn = document.createElement('button');
            taskCrossBtn.classList.add('taskCrossBtn', 'btn');
            currentCrossTaskButtonsArray.push(taskCrossBtn); //array of buttons for crossing tasks//
        let taskDisplayElement = document.createElement('p');
            taskDisplayElement.innerHTML = this.taskName;
            taskDisplayElement.classList = 'task';
            taskDisplayElement.id = idCounterForTasksInPinList2; //Giving ID to crossedITEMS
        //buttons to remove a task from the array after being crossed off
        let deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.classList.add('deleteTaskBtn', 'btn', 'taskCrossBtn');
            deleteTaskBtn.innerHTML = '&#10006;';
        //append everything
        let taskDisplayContainer = document.getElementById('taskDisplayContainer');
        taskDisplayContainer.append(taskFlexContainer);
        taskFlexContainer.append(taskCrossBtn);
        taskFlexContainer.append(taskDisplayElement);
        //if crossed, make it look crossed and append the final delete button
        if(this.completeStatus == 'crossed'){ //tracks complete status modified in deleteTasks//
            taskDisplayElement.classList.add('crossed');
            taskFlexContainer.classList.add('crossedColors');
            taskCrossBtn.classList.add('crossedTaskBtn');
            taskCrossBtn.innerHTML = '\u2713';
            this.deleteEligible = 'eligible';//Make it eligible for deletion
            deleteTaskButtonsArray.push(deleteTaskBtn); //push to an array of buttons for deleting tasks, needs to be here so that it doesn't append invisible buttons//
            taskFlexContainer.append(deleteTaskBtn);
        }
        //Make sure something can't be deleted//
        else{
            this.deleteEligible = 'ineligible';
            taskCrossBtn.innerHTML = '';
        }
 }

//These two prototypes work with pinList to sort the displayed by checked/unchecked
    _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.sortUncheckedDisplayArray = function(){
        if(this.completeStatus == undefined || this.completeStatus == 'incomplete'){ //if uncrossed
            taskDisplayArray.push(sortTracker) //sortTracker is listArrayCurrent
            taskDisplayArray.sort((a,b) => {
                return a.formerArrayPosition - b.formerArrayPosition;
            });
        }
        else{
            return
        }
    }

    _addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.sortCheckedDisplayArray = function(){
        if(this.completeStatus == 'crossed'){
            taskDisplayArray.push(sortTracker);
        }
        else{
            return
        }
    }



 //pin list and assign buttons are fundamentally connected because of listArrayCurrent, which is the array within the array//

 //sorts the array between what is 
function pinList(){
    taskDisplayArray = [] //Empty the taskDisplay array from last run so that it doesn't overflow with old values
    const elements = document.getElementsByClassName('taskFlex');
    //Empties the visual display for repinning
    while(elements.length > 0){ 
        taskDisplayContainer.removeChild(elements[0]);
      
        currentCrossTaskButtonsArray = []; //Need to reset this array so that the i in deleteTasks doesn't continually count. Perhaps a bit too entertwined//
        deleteTaskButtonsArray = []; //same
    }

    for(let p = 0; p < listArrayCurrent.length; p++){ //push the unchecked items listArray to the taskDisplay array
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortUncheckedDisplayArray();
    } 
    for(let p = 0; p < listArrayCurrent.length; p++){ //push the checked off items to the taskDisplay array so they pin below
        sortTracker = listArrayCurrent[p]
        listArrayCurrent[p].sortCheckedDisplayArray();
    }
    listArrayCurrent = [] //empty listArray for refill at bottom of function

    for(let p = 0; p < _deleteTasks__WEBPACK_IMPORTED_MODULE_2__.crossedTasks.length; p++){ //push crossed tasks array from deleteTasks to display array. This will make them appear at the bottom.
        taskDisplayArray.push(_deleteTasks__WEBPACK_IMPORTED_MODULE_2__.crossedTasks[p])
    }
    idCounterForTasksInPinList = 0
    idCounterForTasksInPinList2 = 0
    for(let p = 0; p < taskDisplayArray.length; p++){  //display the taskDisplayArray
        taskDisplayArray[p].displayList();
        idCounterForTasksInPinList++ //increases to add ID's to tasks
        idCounterForTasksInPinList2++
    } 
    (0,_deleteTasks__WEBPACK_IMPORTED_MODULE_2__.deleteTasks)(); //run delete tasks to assign event listener to new checkoff buttons

    for(let p = 0; p < taskDisplayArray.length; p++){//push all the display array to the previously emptied current list array for display if changing lists//
        listArrayCurrent.push(taskDisplayArray[p]) //saves temporary copy for when list is selected
     } 
     console.log('listArrayCurrentAtEndOfPinning')
     console.log(listArrayCurrent);
     listArray[iTracker] = listArrayCurrent; //changes original array so that modifications save whens switching b/w lists
     (0,_storage__WEBPACK_IMPORTED_MODULE_5__.storelistArray)(); //saves new listArray. Kind of have to do it here instead of adding it just when adding a task because of how I used listArrayCurrent and listArray previously
     if(listArrayCurrent.length == 0){
        taskInfoPopoutBox.style.display = "none";
        return
    }
     (0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_3__.displayTaskDetails)();
     (0,_rearrangeTasks__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }


//listArrays directly so that it doesn't reset when hitting the list button
//for loop here assigns event listener to menu list buttons to display task information from storage arrays - IIFE//
function assignButtons(){
    for(let i=0; i < btnArray.length;i++){ //Goes through each item in button array and assigns said event listener
        btnArray[i].addEventListener('click', assignButtonsEventListener)
    }
};

firstListOpenFlag = false;
//event instead of event listener?
function assignButtonsEventListener(event){
    let taskPopoutBox = document.getElementById('taskPopoutBox');
    const clickedBtn = event.target;
            let taskInfoPopoutBox = document.getElementById('taskInfoPopoutBox')
          
                //selects the number in the listArray equivalent with the position in the buttonArray, allowing selection of the correct list//
                //Button array cycles through at start of function & assigns the i valueto select the correct item in the array. This is PRE-DONE at beginning of function.
                listArrayCurrent = listArray[clickedBtn.id];    //sets variable to be used so in nested loop so that nested loop doesn't move through to different part of the array through accidental incrementing//
                iTracker = clickedBtn.id
                taskPopoutBox.style.display = 'flex'; //makes the popout list box appear when clicking the list button on side menu
                let listNameDisplay = document.getElementById('listNameDisplay');
                    listNameDisplay.innerHTML = btnArray[clickedBtn.id].innerHTML;
                if(listArrayCurrent.length > 0){ //determines if the details screen shows up. Won't show if no tasks to display details for//
                    taskInfoPopoutBox.style.display = 'flex';
                }
                else if (listArrayCurrent.length <= 0){
                    taskInfoPopoutBox.style.display = 'none';
                
                }
          
                listArrayCurrentName = listNameDisplay.innerHTML;
                //clear selected list for reassignment
                console.log(btnArray)
                //the button array and the pinned buttons are no longer 1-1 connected
                let collectionOfListBtns = document.getElementsByClassName('listBtn')
                for(let i=0; i < collectionOfListBtns.length;i++){
                    collectionOfListBtns[i].classList.remove('selectedList') 
                }
                clickedBtn.classList.add('selectedList') //turns currently selected list blue
            console.log(btnArray)
            firstListOpenFlag = true;
            assignFormerPositions();
            pinList();
}


//this prototype saves positions for tracking
_addTask__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.saveFormerArrayPosition = function(){
    this.formerArrayPosition = formerArrayPositionTracker;
}

    //Assigns former array position for sorting
function assignFormerPositions(){
    
    //sorts the current list to make sure everything gets its correct position number.
    //This means crossed items retain their original position
    listArrayCurrent.sort((a,b) => {
        return a.formerArrayPosition - b.formerArrayPosition;
    });
    for(let p = 0; p < listArrayCurrent.length; p++){ //loop through current array assigning tracking number
        formerArrayPositionTracker = p;
        listArrayCurrent[p].saveFormerArrayPosition(); //saves current position through prototype
        
    }    
}


//This controls the built in adding of tasks by user input located on the tasks display popup --IIFE//
//Located here because of pinList//
function addTaskToList () {
    let addTaskButton = document.getElementById('addTaskBtn');
    let userTaskInput = document.getElementById('userTaskInput');
    //would this be cleaner just put into to event listener rather than calling function at end?//
    function addTaskWhenClickBtn (){
      //  let userTaskInput = document.getElementById('userTaskInput');
        let userTaskInputValue = userTaskInput.value
        //If statement catches edge case of not having a value or only putting in spaces//
            if(userTaskInputValue.trim().length === 0){
                userTaskInputValue = ''
                return
            }
            else{
            //creates new addtask, pushes it to current array, pins it to board, erases what is typed//
            let userAddTask = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                userTaskInputValue,
                '',
                'Set Time',
                'High',
                'incomplete'
            )
        newlyAddedTask = userAddTask; //assigns value so that it may be displayed to info panel//
        listArrayCurrent.push(userAddTask);
        assignFormerPositions();
        pinList();
        //dis displays info box when hitting the + button
        if(listArrayCurrent.length > 0){ //If the new list is empty, make it show up, take everything off it, then pin the newly added task
            taskInfoPopoutBox.style.display = 'flex';
            (0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_3__.takeEverythingOffInfoBoard)();
           (0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_3__.displayTaskDetails)();
           newlyAddedTask = undefined;
            
        }
        else if (listArrayCurrent.length <= 0){
            taskInfoPopoutBox.style.display = 'none';
        }
        userTaskInput.value = ''
                }
       

            }
    addTaskButton.addEventListener('click', addTaskWhenClickBtn);
    //enter key functionality//
    userTaskInput.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            addTaskButton.click();
        }
        
    })
    };



function easyExport(){
    openLists();
    //pinListAtLoad
    assignButtons();
    addTaskToList();
}




 

/***/ }),

/***/ "./src/rearrangeTasks.js":
/*!*******************************!*\
  !*** ./src/rearrangeTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rearrangeTasks)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");




function rearrangeTasks(){
    let allTaskFlexContainers = document.querySelectorAll('.taskFlex');
    let clickedTask
    let dropZone
    let draggableElement
    let id
    let indexOfDropPosition
    for (let i = 0; i < allTaskFlexContainers.length; i++) { 
        allTaskFlexContainers[i].draggable = true;
        allTaskFlexContainers[i].ondragstart = taskIsClicked;
        allTaskFlexContainers[i].ondragover = onDragOver;
        allTaskFlexContainers[i].ondrop = onDrop;
       // allTaskFlexContainers[i].addEventListener('ondragstart', taskIsClicked);
        //allTaskFlexContainers[i].addEventListener('mouseup', drop);
    }
    //Get the ID of the thing clicked
    function taskIsClicked(event){
        event.dataTransfer.setData('text/plain', event.target.id)
        console.log(event.dataTransfer.getData('text'))
    }
    //This allows the dragging to actually take place//
    function onDragOver(event){
        event.preventDefault();
        console.log('I am firing')
        //event.target.appendChild(clickedTask);
    }
    //On the drop, get the id, change the positions, and pin it//
    function onDrop(event){
        event.preventDefault();
        id = event.dataTransfer.getData('text');
        draggableElement = document.getElementById(id);
        console.log('draggableElement')
        console.log(draggableElement);
        dropZone = event.target;
            console.log('dropZone')
            console.log(dropZone);
        changeArrayPositonsWhenDragged();
        console.log('list array current after drag')
        console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent);
        (0,_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.pinList)();
        event.dataTransfer.clearData();
    }
   
    //On the drop it finds the indexes of the draggee and the drop position, removes and adds to the list array accordingly
    //then calls the prototype below to change their former position so they aren't reordered by pinlist//
    //Functions off of ID's set when originally pinning. The tasks and taskContainers have the same ID
    //Which I feel like is messy but works well enough for this.
    function changeArrayPositonsWhenDragged(){
        indexOfDropPosition = dropZone.id;
        let indexOfHeldItem = id; //maybe unnecessary but easier to read for me;
        let heldItemActualObject = _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent[indexOfHeldItem];
            console.log(heldItemActualObject)
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent.splice(indexOfHeldItem,1)
            console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent);
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent.splice(indexOfDropPosition,0,heldItemActualObject)
            console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent);
        heldItemActualObject.changeHeldPosition();
        indexOfDropPosition = ''
    }
    
    _addTask__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.changeHeldPosition = function (){
        this.formerArrayPosition = indexOfDropPosition;
    }

    
}

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ skeleton)
/* harmony export */ });
/* harmony import */ var _skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.css */ "./src/skeleton.css");


//this function defines the basic layout for the webpage//
function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    document.body.append(base);


//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

        let todoListLogoContainer = document.createElement('div');
            todoListLogoContainer.id = 'todoListLogoContainer'
            menuBarContainer.append(todoListLogoContainer)
            /* Add a list from one button
            let newTodo = document.createElement('button');
                newTodo.id = 'newTodo';
                newTodo.innerHTML = 'New Task'
                todoListLogoContainer.append(newTodo);
    

    let todoListLogo = document.createElement('div');
        todoListLogo.id = 'todoListLogo';
        todoListLogo.innerHTML = 'Todo Lists'
        todoListLogoContainer.append(todoListLogo);
*/
        let overallListMenuContainer = document.createElement('div');
            overallListMenuContainer.id = 'overallListMenuContainer';
            menuBarContainer.append(overallListMenuContainer);

            let listHeaderContainer = document.createElement('div');
                listHeaderContainer.id = 'listHeaderContainer';
                overallListMenuContainer.append(listHeaderContainer);
                let currentListsHeader = document.createElement('div');
                    currentListsHeader.classList = 'listHeaders'
                    currentListsHeader.innerHTML = 'Lists'
                    listHeaderContainer.append(currentListsHeader);
                let addListBtn = document.createElement('button');
                    addListBtn.id = 'addListBtn';
                    addListBtn.classList = 'btn';
                    addListBtn.innerHTML = '+';
                    listHeaderContainer.append(addListBtn);

        let currentListsFlexContainer = document.createElement('div');
            currentListsFlexContainer.id = 'currentListsFlexContainer'
            overallListMenuContainer.append(currentListsFlexContainer);
            //hardcoded ListFlexContainers that are replaced after first new list created//
            let listFlexContainer1 = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer1.classList.add('listFlexContainer');
             let listFlexContainer2 = document.createElement('div'); //Created so that x button for lists can be styled//
                listFlexContainer2.classList.add('listFlexContainer');

                let groceryList = document.createElement('button');
                    groceryList.classList = 'list';
                    groceryList.innerHTML = 'Groceries'
                    groceryList.id = '0';
                    groceryList.classList.add('btn', 'listBtn')
                    listFlexContainer1.append(groceryList)
                    currentListsFlexContainer.append(listFlexContainer1)

                let houseList = document.createElement('button');
                    houseList.classList = 'list';
                    houseList.innerHTML = 'Weekly housework'
                    houseList.id = '1';
                    houseList.classList.add('btn', 'listBtn')
                    listFlexContainer2.append(houseList)
                    currentListsFlexContainer.append(listFlexContainer2)
            
//Right hand popup for tasks and interactions includes popout boxes//
    let taskAndListContainer = document.createElement('div');
        taskAndListContainer.id = 'taskAndListContainer';

    //Task popout box//
    let taskPopoutBoxContainer = document.createElement('div');
        taskPopoutBoxContainer.id = 'taskPopoutBoxContainer';
        taskAndListContainer.append(taskPopoutBoxContainer)
        let taskPopoutBox = document.createElement('div');
            taskPopoutBox.id = 'taskPopoutBox';
            taskPopoutBox.classList.add('taskPopoutBox')
            taskPopoutBoxContainer.append(taskPopoutBox);

            let listDisplayTaskbar = document.createElement('div');
                listDisplayTaskbar.id = 'listDisplayTaskbar';
                listDisplayTaskbar.classList = 'listDisplayTaskbar';
                taskPopoutBox.append(listDisplayTaskbar);
                let listNameDisplay = document.createElement('div');
                    listNameDisplay.id = 'listNameDisplay';
                    listNameDisplay.classList = 'listHeaders';
                    listDisplayTaskbar.append(listNameDisplay);
                let listExitBtn = document.createElement('button');
                    listExitBtn.id = 'listExitBtn';
                    listExitBtn.classList.add('btn','listExitBtn');
                    listExitBtn.innerHTML = '&#10006;'
                    listDisplayTaskbar.append(listExitBtn);

            let taskDisplayContainer = document.createElement('div');
                taskDisplayContainer.id = 'taskDisplayContainer'
                taskPopoutBox.append(taskDisplayContainer)

            //where user types new tasks into popup/
            let inputContainer = document.createElement('div');
                inputContainer.id = 'inputContainer';
                taskPopoutBox.append(inputContainer)
                let userTaskInput = document.createElement('input');
                    userTaskInput.type = 'text';
                    userTaskInput.maxLength = 80;
                    userTaskInput.placeholder = 'Add a task'
                    userTaskInput.id = 'userTaskInput';
                    inputContainer.append(userTaskInput);
                let addTaskBtn = document.createElement('button');
                    addTaskBtn.id = 'addTaskBtn';
                    addTaskBtn.classList = 'btn';
                    addTaskBtn.innerHTML = '+';
                    inputContainer.append(addTaskBtn);


//Task info right next to task popout box//
let taskInfoPopoutContainer = document.createElement('div');
    taskInfoPopoutContainer.id = 'taskInfoPopoutContainer';
    taskAndListContainer.append(taskInfoPopoutContainer)
let taskInfoPopoutBox = document.createElement('div');
    taskInfoPopoutBox.id = 'taskInfoPopoutBox';
    taskInfoPopoutBox.classList.add('taskPopoutBox')
    taskInfoPopoutContainer.append(taskInfoPopoutBox);
//title display
    let taskTitleDisplayBox = document.createElement('div');
        taskTitleDisplayBox.id = 'taskTitleDisplayBox';
        taskTitleDisplayBox.classList = 'listHeaders';
        taskInfoPopoutBox.append(taskTitleDisplayBox);
        let taskTitleDisplay = document.createElement('div');
            taskTitleDisplay.id = 'taskTitleDisplay';
            taskTitleDisplay.classList = 'listHeaders';
            taskTitleDisplayBox.append(taskTitleDisplay);

    //addList popout box - created so that it disallows clicking outside the box//
    let addListPopoutBoxContainer = document.createElement('div');
        addListPopoutBoxContainer.id = 'addListPopoutBoxContainer';
        addListPopoutBoxContainer.style.display = 'none';
        taskAndListContainer.append(addListPopoutBoxContainer)
    let addListPopoutBoxFlexContainer = document.createElement('div');
        addListPopoutBoxFlexContainer.id = 'addListPopoutBoxFlexContainer';
        addListPopoutBoxContainer.append(addListPopoutBoxFlexContainer);
    let addListPopoutBox = document.createElement('div');
            addListPopoutBox.id = 'addListPopoutBox';
            addListPopoutBoxFlexContainer.append(addListPopoutBox);

        let addListDisplayTaskbar = document.createElement('div');
                addListDisplayTaskbar.id = 'addListDisplayTaskbar';
                addListDisplayTaskbar.classList = 'listDisplayTaskbar';
                addListPopoutBox.append(addListDisplayTaskbar);
            let addListNameDisplay = document.createElement('div');
                    addListNameDisplay.id = 'addListNameDisplay';
                    addListNameDisplay.classList.add('listHeaders');
                    addListDisplayTaskbar.append(addListNameDisplay);
            let addListExitBtn = document.createElement('button');
                    addListExitBtn.id = 'addListExitBtn';
                    addListExitBtn.classList = 'btn';
                    addListExitBtn.innerHTML = '&#10006;'
                    addListDisplayTaskbar.append(addListExitBtn);
        //addList input box//
        let addListInputContainer = document.createElement('div');
                addListInputContainer.id = 'addListInputContainer';
                addListPopoutBox.append(addListInputContainer)
        
    base.append(menuBarContainer);
    base.append(taskAndListContainer);
};

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getButtons": () => (/* binding */ getButtons),
/* harmony export */   "newBeautifulListArray": () => (/* binding */ newBeautifulListArray),
/* harmony export */   "parsedListArray": () => (/* binding */ parsedListArray),
/* harmony export */   "parsedListArrayCurrent": () => (/* binding */ parsedListArrayCurrent),
/* harmony export */   "produceListArray": () => (/* binding */ produceListArray),
/* harmony export */   "storeButtons": () => (/* binding */ storeButtons),
/* harmony export */   "storelistArray": () => (/* binding */ storelistArray)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");






let parsedListArrayCurrent
let parsedListArray
let assignedListArrayCurrent
let reobjectedListArrayCurrent = []
let reobjectedListArray = []
let newBeautifulListArray = []
//called in clickBtnAddToBtnArray
function storeButtons(){
    let arrayOfBtnHTML = [];
    //need to get the innerHTML of the buttons, as the buttons themselves are meaningless converted to strings//
    for(let i=0; i<_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray.length;i++){
        let textOfBtn = _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray[i].innerHTML;
        arrayOfBtnHTML.push(textOfBtn);
    }
    const btnArrayObj = JSON.stringify(arrayOfBtnHTML); //stringify the array
    //console.log('listArrayCurrentObj')
    //console.log(listArrayCurrentObj);
    console.log('btnArrayObj');
    console.log(btnArrayObj);

    localStorage.setItem('btnArray', btnArrayObj); //set the key to the array & save

    let str = localStorage.getItem('btnArray'); //recall
    let parsedBtnArray = JSON.parse(str); //parse back to object
    console.log('parseBtn')
    console.log(parsedBtnArray);
    console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray)
    
    let startingBtnArrayLength = _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray.length; //need to define length here because the btnArray length will change as it is shifted out
    for(let i=0;i<startingBtnArrayLength;i++){
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray.shift();
        console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray)
    }
    console.log('btnArray')
    console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray);
    //alter the btnArray itself to re-add the HTML
    for(let i=0;i<parsedBtnArray.length;i++){
        let btn = document.createElement('button');
        btn.innerHTML = parsedBtnArray[i];
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray.push(btn);
    }
    console.log('btnArray')
    console.log(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray)
}

//for loading on page start//
function getButtons(){
    let str = localStorage.getItem('btnArray'); //recall
    console.log(str)
    let parsedBtnArray = JSON.parse(str); //parse back to object
    for(let i=0;i<parsedBtnArray.length;i++){
        let btn = document.createElement('button');
        btn.innerHTML = parsedBtnArray[i];
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.btnArray.push(btn);
    }
}

//firstBtn
/*
function firstBtn(){
    let firstLoad = localStorage.getItem('firstLoad');
    if(firstLoad == false){
        getButtons;
    }
    else{
        localStorage.setItem('firstLoad', false)
        btnArray = [groceryBtn, houseBtn,];
    }
}
*/



//saves the CURRENTLY SELECTED LIST 
function storelistArray(){
    const listArrayCurrentObj = JSON.stringify(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArrayCurrent)
    const listArrayObj = JSON.stringify(_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArray)
   
    localStorage.setItem('listArrayCurrent', listArrayCurrentObj);
    localStorage.setItem('listArray', listArrayObj);
}

function produceListArray(){
    let str2 = localStorage.getItem('listArray');
    parsedListArray = JSON.parse(str2);
    let parsedListArrayLength = parsedListArray.length;
   // let startingListArrayLength = listArray.length; //need to define length here because the btnArray length will change as it is shifted out
    
    for(let i=0;i<parsedListArrayLength;i++){ //for the length of the whole of parsed list array
       let newInteriorArray = [];
        for(let i2=0;i2<parsedListArray[i].length;i2++){ //for the length of the i selected item in parsed list array
            let currentInteriorArray = parsedListArray[i] //identify the current object
            let currentObject = currentInteriorArray[i2];
            let reformedObject = new _addTask__WEBPACK_IMPORTED_MODULE_0__["default"](currentObject.taskName, currentObject.description, currentObject.dueDate, currentObject.priority, currentObject.completeStatus, currentObject.deleteEligible, currentObject.formerArrayPosition, currentObject.currentArrayPosition); //Make it into an addTask
            currentObject = reformedObject
            newInteriorArray.push(reformedObject);
        }
        _menuDisplay__WEBPACK_IMPORTED_MODULE_1__.listArray.push(newInteriorArray)
    }

    console.log('parsedListArrayCurrent')
    console.log(parsedListArrayCurrent);
}




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ "./src/skeleton.js");
/* harmony import */ var _menuDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuDisplay */ "./src/menuDisplay.js");
/* harmony import */ var _addNewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewList */ "./src/addNewList.js");
/* harmony import */ var _closePopups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./closePopups */ "./src/closePopups.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


//import assignButtons from './assignButtons';



//import displayTaskDetails from './displayTaskDetails';


(0,_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"]) ();
(0,_menuDisplay__WEBPACK_IMPORTED_MODULE_1__.easyExport)();
//assignButtons();
//displayTaskDetails();
(0,_addNewList__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_closePopups__WEBPACK_IMPORTED_MODULE_3__["default"])();
//storeButtons();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFNBQVMsWUFBWSxNQUFNLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxVQUFVLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0saUJBQWlCLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxjQUFjLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsd0JBQXdCLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLFNBQVMsWUFBWSxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxLQUFLLEtBQUssV0FBVyxhQUFhLGNBQWMsY0FBYyxZQUFZLFdBQVcsV0FBVyxhQUFhLGNBQWMsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FB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VDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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V0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QixTQUFTLHFFQUFlO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjBDO0FBQ1c7QUFDSztBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ00sQ0FBQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkVBQW9DO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckV1Qjs7QUFFdkI7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLaUM7QUFDRDtBQUNzQzs7OztBQUl0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLHlEQUFlLENBQUM7QUFDbkMsd0JBQXdCLGtEQUFRO0FBQ2hDO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1EOztBQUVuRCxnREFBZ0Q7QUFDaEQsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7QUFDQSxpQ0FBaUMseURBQWUsRUFBRTtBQUNsRCxnQkFBZ0IseUJBQXlCO0FBQ3pDLFFBQVEsd0RBQWM7QUFDdEIsb0JBQW9CLGtEQUFRO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCO0FBQ0E7QUFDQSxnQkFBZ0Isa0RBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBLDBDQUEwQztBQUMxQyxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsK0NBQStDLDBEQUFnQjtBQUMvRCx3Q0FBd0MsbURBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxnQkFBZ0Isd0JBQXdCLE1BQU07QUFDOUM7QUFDQSxxQkFBcUIsNkJBQTZCLE9BQU87QUFDekQ7QUFDQTtBQUNBLHFDQUFxQyxnREFBTyx1T0FBdU87QUFDblI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzVHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNPO0FBQ3hDO0FBQ3NDO0FBQ0M7QUFDd0I7QUFDL0Q7OztBQUdBLHFEQUFRO0FBQ1Isd0RBQVU7QUFDVjtBQUNBO0FBQ0EsdURBQVU7QUFDVix3REFBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2tlbGV0b24uY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaW51dGVzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9za2VsZXRvbi5jc3M/M2VmYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZE5ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbG9zZVBvcHVwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZWxldGVUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5VGFza0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWVudURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcmVhcnJhbmdlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2tlbGV0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYmFzZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKkxlZnQgaGFuZCBtZW51IGJhciovXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGJvcmRlci1yaWdodDogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICBcXG59XFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgXFxufVxcbi8qbG9nbyovXFxuLypcXG4jdG9kb0xpc3RMb2dvQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuI3RvZG9MaXN0TG9nb3tcXG4gICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxufVxcbiovXFxuXFxuI2xpc3RIZWFkZXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5saXN0SGVhZGVyc3tcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcblxcbn1cXG5cXG4jb3ZlcmFsbExpc3RNZW51Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uc2VsZWN0ZWRMaXN0e1xcbiAgICBjb2xvcjojNDI2N0IyO1xcbn1cXG5cXG4jY3VycmVudExpc3RzRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuXFxuXFxuICAgIC5saXN0QnRuLCAuZWRpdExpc3RCdG57XFxuICAgICAgICBmb250LXNpemU6IDEycHQ7XFxuICAgICAgIC8qIGhlaWdodDogNSU7XFxuICovICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG5cXG5cXG4vKiByaWdodCBoYW5kIHRhc2tzIGRpc3BsYXkgYW5kIGludGVyYWN0aW9ucyBwb3B1cCovXFxuICAgICAgICAjdGFza0FuZExpc3RDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzUvNTAvVGlueV9CYWJibGluZ19Ccm9vay5qcGcvMjU2MHB4LVRpbnlfQmFiYmxpbmdfQnJvb2suanBnJyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuXFxuXFxuICAgICAgICAjdGFza1BvcG91dEJveENvbnRhaW5lciwgI3Rhc2tJbmZvUG9wb3V0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAzMDBwdDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0JTtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBwdDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMlOztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0YXNrUG9wb3V0Qm94LCAjdGFza0luZm9Qb3BvdXRCb3h7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCAjZDhkOGQ4IGluc2V0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubGlzdERpc3BsYXlUYXNrYmFyLCAjdGFza1RpdGxlRGlzcGxheUJveCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgI2xpc3ROYW1lRGlzcGxheSwgI3Rhc2tUaXRsZURpc3BsYXl7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTsgLypSZWFsbHkgb25seSBmb3IgaXQgc29tZW9uZSB0eXBlcyBhbGwgY2FwaXRhbCBRIG9yIHNvbWV0aGluZyAqL1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgLmxpc3RFeGl0QnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJwdDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycHQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Rhc2tEaXNwbGF5Q29udGFpbmVyLCAjdGFza0luZm9EaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLyp0YXNrRmxleENvbnRhaW5lciovXFxuICAgICAgICAudGFza0ZsZXh7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGdhcDoyJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcXG4gICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2tGbGV4OmhvdmVye1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0IGJsdWUgaW5zZXQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrQ3Jvc3NCdG57XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCwgYmxhY2ssIHNvbGlkO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNre1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuXFxuICAgICAgICAvKkNyb3Nzb3V0IGFjaGlldmVkIHdpdGggbGluZWFyIGdyYWRpZW50LCBzaGFtZWxlc3NseSB0b29rIHRoaXMqL1xcbiAgICAgICAgLmNyb3NzZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgXFxuICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgY2FsYyg1MCUgLSAxcHgpLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgxOTIsMTkyLDE5MiwxKSBjYWxjKDUwJSksIFxcbiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDApIGNhbGMoNTAlICsgMXB4KVxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyb3NzZWRDb2xvcnN7XFxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxuXFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0biwgLmNyb3NzZWRUYXNrQnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZVRhc2tCdG57XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmNyb3NzZWRUYXNrQnRue1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNpbnB1dENvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogNCU7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN1c2VyVGFza0lucHV0e1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDYwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2FkZFRhc2tCdG57XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIHNvbGlkO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B0O1xcbiAgICAgICAgfVxcblxcbi8qSW5mbyBhbmQgRGlzcGxheSBCb3gqL1xcbiAgICAgICAgI3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAjZHVlRGF0ZURpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICBoZWlnaHQ6IDIwJTtcXG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgICAgICNjaGFuZ2VEdWVEYXRlQnRue1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAjZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2Rlc2NyaXB0aW9uRGlzcGxheSwgI2Rlc2NyaXB0aW9uRGlzcGxheUlucHV0e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6OTklO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk5JTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHQgYmxhY2sgc29saWQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgLmluZm9UaXRsZXtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuXFxuXFxuLypBZGQgTGlzdCBwb3BvdXQgQm94Ki9cXG4jYWRkTGlzdFBvcG91dEJveENvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAgLCAwLCAwLjUpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNhZGRMaXN0TmFtZURpc3BsYXl7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHQ7XFxuICAgIGZsZXgtc2hyaW5rOiAxO1xcblxcblxcbn1cXG4jYWRkTGlzdEV4aXRCdG57XFxuICAgIG1hcmdpbi1yaWdodDogMnB0O1xcbiAgICBtYXJnaW4tdG9wOiAycHQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbn1cXG5cXG4jYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkTGlzdFBvcG91dEJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMzAwcHQ7XFxuICAgIGhlaWdodDogMTAwcHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKlxcbiAgICBtYXJnaW4tbGVmdDogNyU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xcbiAgICAqL1xcbiAgICBib3JkZXI6IDFwdCAjZDhkOGQ4IGluc2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcXG4gICAgZ2FwOiAxNXB0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbiNhZGRMaXN0SW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdXNlckxpc3RJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3VzZXJMaXN0SW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICBtYXJnaW4tbGVmdDogMnB0O1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4uYWRkTmV3TGlzdElucHV0e1xcblxcbn1cXG4jYWRkTGlzdFBvcHVwQnRuLCAjYWRkRGF0ZVBvcG91dEJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgd2lkdGg6IDEwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1yaWdodDogM3B0O1xcbn1cXG4jYWRkTGlzdFBvcHVwQnRuOmhvdmVyLCAjYWRkVGFza0J0bjpob3ZlciwgI2FkZERhdGVQb3BvdXRCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3QjI7XFxufVxcblxcbiNjYWxlbmRhcntcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHQ7XFxufVxcblxcbi8qRWRpdGluZyBMaXN0IE5hbWUgUG9wdXAqL1xcbiNlZGl0TGlzdEJ0bkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE4JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB0O1xcblxcbn1cXG4jZGVsZXRlTGlzdEJ0bkZsZXhDb250YWluZXIsICNzYXZlRWRpdGVkTGlzdEJ0bkZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbiNkZWxldGVMaXN0QnRuLCAjc2F2ZUVkaXRlZExpc3RCdG57XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZWxldGVMaXN0QnRue1xcbiAgICBib3JkZXI6IDFwdCBzb2xpZCBoc2woMzQ1ZGVnIDEwMCUgNDclKSA7XFxufVxcbiNkZWxldGVMaXN0QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiBoc2woMzQ1ZGVnIDEwMCUgNDclKTtcXG59XFxuXFxuI3NhdmVFZGl0ZWRMaXN0QnRue1xcbiAgICBib3JkZXI6IDFwdCBzb2xpZCAjNDI2N0IyO1xcbn1cXG5cXG4jc2F2ZUVkaXRlZExpc3RCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjY3QjI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9za2VsZXRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7O0FBSUEscUJBQXFCO0FBQ3JCO0lBQ0ksVUFBVTtJQUNWLDZCQUE2Qjs7QUFFakM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw0QkFBNEI7O0FBRWhDO0FBQ0EsT0FBTztBQUNQOzs7Ozs7Ozs7Ozs7OztDQWNDOztBQUVEO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxT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Q3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNiYXNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRue1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qTGVmdCBoYW5kIG1lbnUgYmFyKi9cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHQgYmxhY2sgc29saWQ7XFxuICAgIFxcbn1cXG5cXG5cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICBcXG59XFxuLypsb2dvKi9cXG4vKlxcbiN0b2RvTGlzdExvZ29Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jdG9kb0xpc3RMb2dve1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuKi9cXG5cXG4jbGlzdEhlYWRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmxpc3RIZWFkZXJze1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuXFxufVxcblxcbiNvdmVyYWxsTGlzdE1lbnVDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zZWxlY3RlZExpc3R7XFxuICAgIGNvbG9yOiM0MjY3QjI7XFxufVxcblxcbiNjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0RmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5cXG4gICAgLmxpc3RCdG4sIC5lZGl0TGlzdEJ0bntcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgICAgLyogaGVpZ2h0OiA1JTtcXG4gKi8gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcblxcblxcbi8qIHJpZ2h0IGhhbmQgdGFza3MgZGlzcGxheSBhbmQgaW50ZXJhY3Rpb25zIHBvcHVwKi9cXG4gICAgICAgICN0YXNrQW5kTGlzdENvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNS81MC9UaW55X0JhYmJsaW5nX0Jyb29rLmpwZy8yNTYwcHgtVGlueV9CYWJibGluZ19Ccm9vay5qcGcnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG5cXG5cXG4gICAgICAgICN0YXNrUG9wb3V0Qm94Q29udGFpbmVyLCAjdGFza0luZm9Qb3BvdXRDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Rhc2tQb3BvdXRCb3gsICN0YXNrSW5mb1BvcG91dEJveHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0RGlzcGxheVRhc2tiYXIsICN0YXNrVGl0bGVEaXNwbGF5Qm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAjbGlzdE5hbWVEaXNwbGF5LCAjdGFza1RpdGxlRGlzcGxheXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlOyAvKlJlYWxseSBvbmx5IGZvciBpdCBzb21lb25lIHR5cGVzIGFsbCBjYXBpdGFsIFEgb3Igc29tZXRoaW5nICovXFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAubGlzdEV4aXRCdG57XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB0O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJwdDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGFza0Rpc3BsYXlDb250YWluZXIsICN0YXNrSW5mb0Rpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAvKnRhc2tGbGV4Q29udGFpbmVyKi9cXG4gICAgICAgIC50YXNrRmxleHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFza0ZsZXg6aG92ZXJ7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBpbnNldDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2tDcm9zc0J0bntcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0LCBibGFjaywgc29saWQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2t7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG5cXG4gICAgICAgIC8qQ3Jvc3NvdXQgYWNoaWV2ZWQgd2l0aCBsaW5lYXIgZ3JhZGllbnQsIHNoYW1lbGVzc2x5IHRvb2sgdGhpcyovXFxuICAgICAgICAuY3Jvc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwKSBjYWxjKDUwJSAtIDFweCksIFxcbiAgICAgICAgICAgICAgICByZ2JhKDE5MiwxOTIsMTkyLDEpIGNhbGMoNTAlKSwgXFxuICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgY2FsYyg1MCUgKyAxcHgpXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3Jvc3NlZENvbG9yc3tcXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZWxldGVUYXNrQnRuLCAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0bntcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2lucHV0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA0JTtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3VzZXJUYXNrSW5wdXR7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIHNvbGlkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjYWRkVGFza0J0bntcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0IGJsdWUgc29saWQ7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxuICAgICAgICB9XFxuXFxuLypJbmZvIGFuZCBEaXNwbGF5IEJveCovXFxuICAgICAgICAjdGFza0luZm9EaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNkdWVEYXRlRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2NoYW5nZUR1ZURhdGVCdG57XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBwdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICNkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAjZGVzY3JpcHRpb25EaXNwbGF5LCAjZGVzY3JpcHRpb25EaXNwbGF5SW5wdXR7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgICAgICAgICB3aWR0aDo5OSU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTklO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuaW5mb1RpdGxle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG5cXG5cXG4vKkFkZCBMaXN0IHBvcG91dCBCb3gqL1xcbiNhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCAsIDAsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2FkZExpc3ROYW1lRGlzcGxheXtcXG4gICAgbWFyZ2luLWxlZnQ6IDVwdDtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuXFxuXFxufVxcbiNhZGRMaXN0RXhpdEJ0bntcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHQ7XFxuICAgIG1hcmdpbi10b3A6IDJwdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxufVxcblxcbiNhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRMaXN0UG9wb3V0Qm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMDBwdDtcXG4gICAgaGVpZ2h0OiAxMDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qXFxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgICovXFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBnYXA6IDE1cHQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuI2FkZExpc3RJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1c2VyTGlzdElucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jdXNlckxpc3RJbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAxcHQgYmxhY2sgc29saWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5hZGROZXdMaXN0SW5wdXR7XFxuXFxufVxcbiNhZGRMaXN0UG9wdXBCdG4sICNhZGREYXRlUG9wb3V0QnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxufVxcbiNhZGRMaXN0UG9wdXBCdG46aG92ZXIsICNhZGRUYXNrQnRuOmhvdmVyLCAjYWRkRGF0ZVBvcG91dEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcXG59XFxuXFxuI2NhbGVuZGFye1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBwdDtcXG59XFxuXFxuLypFZGl0aW5nIExpc3QgTmFtZSBQb3B1cCovXFxuI2VkaXRMaXN0QnRuQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTglO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHQ7XFxuXFxufVxcbiNkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lciwgI3NhdmVFZGl0ZWRMaXN0QnRuRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2RlbGV0ZUxpc3RCdG4sICNzYXZlRWRpdGVkTGlzdEJ0bntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlbGV0ZUxpc3RCdG57XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGhzbCgzNDVkZWcgMTAwJSA0NyUpIDtcXG59XFxuI2RlbGV0ZUxpc3RCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgzNDVkZWcgMTAwJSA0NyUpO1xcbn1cXG5cXG4jc2F2ZUVkaXRlZExpc3RCdG57XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkICM0MjY3QjI7XFxufVxcblxcbiNzYXZlRWRpdGVkTGlzdEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwO1xuLyoqXG4gKiBAbmFtZSBhZGRNaW51dGVzXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaW51dGVzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaW51dGVzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAzMCBtaW51dGVzIHRvIDEwIEp1bHkgMjAxNCAxMjowMDowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbnV0ZXMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjozMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbnV0ZXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBhbW91bnQgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgY2xvc2VQb3B1cHMgZnJvbSBcIi4vY2xvc2VQb3B1cHNcIjtcbmltcG9ydCB7IHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkLCBkaXNwbGF5VGFza0RldGFpbHMsIGRpc3BsYXlGbGFnRmFsc2VGb3JEZWxldGluZ0xpc3RzIH0gZnJvbSBcIi4vZGlzcGxheVRhc2tEZXRhaWxzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXksIGFzc2lnbkJ1dHRvbnMsIGJ0bkFycmF5LCBwaW5MaXN0LCBsaXN0QXJyYXlDdXJyZW50IH0gZnJvbSBcIi4vbWVudURpc3BsYXlcIjtcbmltcG9ydCB7c3RvcmVCdXR0b25zLCBzdG9yZWxpc3RBcnJheX0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vL0NvbnRyb2xzIHRoZSBmdW5jdGlvbiBvZiB0aGUgYWRkTGlzdFBvcG91dC4gQWxzbyBjb250cm9scyB0aGUgYWRkTGlzdCBidXR0b24gb24gc2lkZSBtZW51XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuICAgIGxldCByZW1vdmVyQXJyYXkgPSBbXVxuXG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gY3JlYXRlcyAmIHBpbnMgdGhlIG5ldyBsc2l0IGJ1dHRvbnMgb24gdGhlIGxlZnRoYW5kIG1lbnUvL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0J1dHRvbnMoKSB7XG4gICAgICAgIGxldCBhZGRMaXN0UG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3RQb3BvdXRCb3gnKTtcbiAgICAgICAgbGV0IHRhc2tQb3BvdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcG91dEJveCcpXG4gICAgICAgIGxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpXG4gICAgICAgIC8vdW5hcHBlbmQgdGhlIHBvcHVwLy9cbiAgICAgICAgLy9jb25zdCBsaXN0RmxleENvbnRhaW5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0RmxleENvbnRhaW5lcicpXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdEZsZXhDb250YWluZXInKTtcblxuICAgICAgICB3aGlsZSAocmVtb3ZlckFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvcihsZXQgcD0wOyBwPHJlbW92ZXJBcnJheS5sZW5ndGg7cCsrKXtcbiAgICAgICAgICAgICAgICByZW1vdmVyQXJyYXlbcF0ucmVtb3ZlQ2hpbGQocmVtb3ZlckFycmF5W3BdLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIHJlbW92ZXJBcnJheVtwXS5yZW1vdmVDaGlsZChyZW1vdmVyQXJyYXlbcF0uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW1vdmVyQXJyYXkgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY3VycmVudExpc3RzRmxleENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vZm9yIHRoZSBsaXN0IG1lbnUgYnV0dG9ucyBvbiBsZWZ0IHNpZGUvL1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBidG5BcnJheVtpXS5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpO1xuICAgICAgICAgICAgYnRuQXJyYXlbaV0uaWQgPSBpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExpc3RzRmxleENvbnRhaW5lcicpXG4gICAgICAgICAgICBsZXQgbGlzdEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9DcmVhdGVkIHNvIHRoYXQgeCBidXR0b24gZm9yIGxpc3RzIGNhbiBiZSBzdHlsZWQvL1xuICAgICAgICAgICAgICAgIGxpc3RGbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RGbGV4Q29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlckFycmF5LnB1c2gobGlzdEZsZXhDb250YWluZXIpXG4gICAgICAgICAgICBsZXQgZWRpdExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBlZGl0TGlzdEJ0bi5pZCA9IGkrJ2UnO1xuICAgICAgICAgICAgICAgIGVkaXRMaXN0QnRuLmlubmVySFRNTCA9ICcmIzk4ODEnXG4gICAgICAgICAgICBlZGl0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0TGlzdEJ0bicsICdidG4nKTtcbiAgICAgICAgICAgIGxpc3RGbGV4Q29udGFpbmVyLmFwcGVuZChidG5BcnJheVtpXSk7XG4gICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lci5hcHBlbmQoZWRpdExpc3RCdG4pO1xuICAgICAgICAgICAgY3VycmVudExpc3RzRmxleENvbnRhaW5lci5hcHBlbmQobGlzdEZsZXhDb250YWluZXIpO1xuXG4gICAgICAgICAgICAvL0V2ZW50IGxpc3RlbmVyIGZvciB0aGUgbGlzdEVkaXQgYnV0dG9ucywgaXRlcmF0aW5nIG9mZiBvZiBpIHNvIGFzIHRvIHNhdmUgdGhlIGNvcnJlY3QgYnRuQXJyYXkuaW5uZXJIVE1MXG4gICAgICAgICAgICBlZGl0TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2xhenlIaWRkZW5EaXYgZW1wdHkvL1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcG91dEl0ZW0yJyk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnRzMi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3gucmVtb3ZlQ2hpbGQoZWxlbWVudHMyWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvL3RoaXMgaXMgbm93IGp1c3QgdGhlIG1haW4gcG9wb3V0O1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0TmFtZURpc3BsYXkuaW5uZXJIVE1MID0gJ05hbWUgTGlzdCc7XG4gICAgICAgICAgICAgICAgICAgIC8vZGVmaW5lIHRoZXNlIGhlcmUgc28gdGhleSBjYW4gYWx3YXlzIGJlIGFjY2Vzc2VkLCBldmVuIHdoZW4gZWRpdGluZyB0aGUgcG9wdXAgZWxzZXdoZXJlLy9cbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5pZCA9ICd1c2VyTGlzdElucHV0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQubWF4TGVuZ3RoID0gMTg7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdElucHV0LnZhbHVlID0gYnRuQXJyYXlbaV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlZGl0TGlzdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdExpc3RCdG5Db250YWluZXIuaWQgPSAnZWRpdExpc3RCdG5Db250YWluZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdExpc3RCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdExpc3RCdG5Db250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGV0ZUxpc3RCdG5GbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lci5pZCA9ICdkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVMaXN0QnRuLmlkID0gJ2RlbGV0ZUxpc3RCdG4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnZGVsZXRlTGlzdEJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBkZWxldGUgYnV0dG9uIGluIHRoZSBwb3B1cCwgYnV0cyBpdCBvdXQgb2YgYnRuIGFuZCBsaXN0IGFycmF5IGFuZCByZXNldHMgZXZlcnl0aGluZy8vXG4gICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnRuQXJyYXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVsaXN0QXJyYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdEFycmF5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGxheUZsYWdGYWxzZUZvckRlbGV0aW5nTGlzdHMoKTsgLy9jaGFuZ2UgdGhlIGRpc3BsYXkgZmxhZyB0byBhdm9pZCBhbiBlcnJvciBpZiBub3RoaW5nIGlzIGN1cnJlbnRseSBkaXNwbGF5ZWQvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3QnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGVsZXRlQW5kU2F2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhdmVFZGl0ZWRMaXN0QnRuRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUVkaXRlZExpc3RCdG5GbGV4Q29udGFpbmVyLmlkID0gKCdzYXZlRWRpdGVkTGlzdEJ0bkZsZXhDb250YWluZXInKVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2F2ZUVkaXRlZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuLmlkID0gJ3NhdmVFZGl0ZWRMaXN0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzYXZlRWRpdGVkTGlzdEJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUVkaXRlZExpc3RCdG4uaW5uZXJIVE1MID0gJ1NhdmUnO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vYWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGxpc3QvL1xuICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJMaXN0SW5wdXRWYWx1ZSA9IHVzZXJMaXN0SW5wdXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXJMaXN0SW5wdXRWYWx1ZS50cmltKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQXJyYXlbaV0uaW5uZXJIVE1MID0gdXNlckxpc3RJbnB1dFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkFycmF5W2ldLmNsaWNrKCk7IC8vQ2FsbHMgdGhlIGNsaWNrZWQgYnV0dG9uIHRvIGRpc3BsYXkgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVEZWxldGVBbmRTYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vRW50ZXIgYnV0dG9uIGRlZmF1bHRzIHRvIHNhdmluZyBuZXcgbmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy9SZW1vdmUgb2xkIGRlbGV0ZSAmIHNhdmUgYnV0dG9uc1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVEZWxldGVBbmRTYXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vRGVsZXRlIHRoZSB0ZXh0IGlucHV0IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgYWRkTGlzdCBtYXRlcmlhbHMvL1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmFwcGVuZChlZGl0TGlzdEJ0bkNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0QnRuQ29udGFpbmVyLmFwcGVuZChkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG5GbGV4Q29udGFpbmVyLmFwcGVuZChkZWxldGVMaXN0QnRuKVxuICAgICAgICAgICAgICAgICAgICBlZGl0TGlzdEJ0bkNvbnRhaW5lci5hcHBlbmQoc2F2ZUVkaXRlZExpc3RCdG5GbGV4Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgICAgICBzYXZlRWRpdGVkTGlzdEJ0bkZsZXhDb250YWluZXIuYXBwZW5kKHNhdmVFZGl0ZWRMaXN0QnRuKVxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXRDb250YWluZXIuYXBwZW5kKHVzZXJMaXN0SW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuZm9jdXMoKTsgLy9hdXRvIHBsYWNlcyBjdXJzb3IgaW4gaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLy9BbGxvd3MgdXNlciB0byBlZGl0IHRleHQgZmllbGQgYW5kIGhpdCBlbnRlclxuICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYXZlRWRpdGVkTGlzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlRWRpdGVkTGlzdEJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhc3NpZ25CdXR0b25zKCk7XG4gICAgfVxuICAgIFxuICAgIC8vcmVtb3ZlIHJlZHVuZGFudCBkZWxldGUgYW5kIHNhdmUgYnV0dG9uc1xuICAgIGZ1bmN0aW9uIHJlbW92ZURlbGV0ZUFuZFNhdmUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRMaXN0QnRuQ29udGFpbmVyJyk7XG4gICAgICAgIHdoaWxlIChlbGVtZW50czIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5yZW1vdmVDaGlsZChlbGVtZW50czJbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgbGV0IHVzZXJMaXN0SW5wdXRcbiAgICBsZXQgdXNlckxpc3RJbnB1dFZhbHVlXG4gICAgbGV0IHVzZXJMaXN0TmV3QnRuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGFsdGVycyB0aGUgYnRuQXJyYXksIGFkZGluZyB0aGUgbmV3IGlucHV0IGludG8gdGhhdCBhcnJheSBhbmQgZ2VuZXJhdGluZyBpdCBhZ2Fpbi8vXG4gICAgZnVuY3Rpb24gY2xpY2tCdG5BZGRUb0J0bkFycmF5KCkge1xuICAgICAgICB1c2VyTGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJMaXN0SW5wdXQnKTtcbiAgICAgICAgdXNlckxpc3RJbnB1dFZhbHVlID0gdXNlckxpc3RJbnB1dC52YWx1ZVxuICAgICAgICAvL0lmIHN0YXRlbWVudCBjYXRjaGVzIGVkZ2UgY2FzZSBvZiBub3QgaGF2aW5nIGEgdmFsdWUgb3Igb25seSBwdXR0aW5nIGluIHNwYWNlcy8vXG4gICAgICAgIGlmICh1c2VyTGlzdElucHV0VmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY3JlYXRlcyBuZXcgYnV0dG9uIGFuZCBwdXRzIGl0IGluIHRoZSBidXR0b24gYXJyYXkvL1xuICAgICAgICBsZXQgdXNlckxpc3ROZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdXNlckxpc3ROZXdCdG4uaW5uZXJIVE1MID0gdXNlckxpc3RJbnB1dFZhbHVlO1xuICAgICAgICBidG5BcnJheS5wdXNoKHVzZXJMaXN0TmV3QnRuKTtcbiAgICAgICAgLy9pZiB0aGUgc3RyaW5nIGlzIHRvbyBsb25nLCBzaG9ydGVuIGl0IGFuZCBhZGQgdG8gbGlzdC8vXG4gICAgICAgIC8vYnRucyBzaG91bGQgaGF2ZSBiZWVuIG9iamVjdHMvL1xuICAgICAgICBjcmVhdGVOZXdCdXR0b25zKCk7XG4gICAgICAgIC8vYXNzaWduQnV0dG9ucygpO1xuXG4gICAgICAgIC8vcHV0cyBpdCBpbiB0aGUgbGlzdCBhcnJheVxuICAgICAgIFxuICAgICAgICBsZXQgdXNlckxpc3ROZXdBcnJheSA9IFtdO1xuICAgICAgICB1c2VyTGlzdE5ld0FycmF5LmlubmVySFRNTCA9IHVzZXJMaXN0SW5wdXRWYWx1ZTtcbiAgICAgICAgbGlzdEFycmF5LnB1c2godXNlckxpc3ROZXdBcnJheSk7XG4gICAgICAgIHVzZXJMaXN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB1c2VyTGlzdE5ld0J0bi5jbGljaygpOyAvL0NsaWNrcyB0aGUgbmV3IGJ1dHRvbiwgb3BlbmluZyB0aGUgbmV3IGxpc3QvL1xuICAgICAgICBzdG9yZUJ1dHRvbnMoKTsgLy9zYXZlcyB0aGUgbmV3IGJ1dHRvblxuICAgICAgICAvL2Fzc2lnbkJ1dHRvbnMoKTtcbiAgICB9XG5cbiAgICAvL0FERCBMSVNUUyBCVVRUT04gRVZFTlQgTElTVEVORVIgUE9QVVBcbiAgICAvL0V2ZW50IGxpc3RlbmVyIHRvIHRoZSBtZW51IGJ1dHRvbiBhZGRpbmcgbGlzdHMsIG1ha2VzIHN1cmUgZXZlcnl0aGluZyBwb3B1bGF0ZXMgaW4gXG4gICAgLy9wb3B1cCwgdGhlbiBjYWxscyBhYm92ZSBmdW5jdGlvblxuICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vdGhpcyBpcyBub3cganVzdCB0aGUgbWFpbiBwb3BvdXQ7XG4gICAgICAgIGFkZExpc3ROYW1lRGlzcGxheS5pbm5lckhUTUwgPSAnTmFtZSBOZXcgTGlzdCc7XG4gICAgICAgIC8vZGVmaW5lIHRoZXNlIGhlcmUgc28gdGhleSBjYW4gYWx3YXlzIGJlIGFjY2Vzc2VkLCBldmVuIHdoZW4gZWRpdGluZyB0aGUgcG9wdXAgZWxzZXdoZXJlLy9cbiAgICAgICBcbiAgICAgICAgbGV0IHVzZXJMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5pZCA9ICd1c2VyTGlzdElucHV0JztcbiAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQubWF4TGVuZ3RoID0gMTg7XG4gICAgICAgICAgICB1c2VyTGlzdElucHV0LmNsYXNzTGlzdC5hZGQoJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnYWRkTmV3TGlzdElucHV0Jyk7XG4gICAgICAgIGxldCBhZGRMaXN0UG9wdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5pZCA9ICdhZGRMaXN0UG9wdXBCdG4nO1xuICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICBhZGRMaXN0UG9wdXBCdG4uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAvL2hpZGRlbkRpdiBpcyBoZXJlIGZvciBDU1MsIGxhemluZXNzIG9uIG15IHBhcnQgdG8gcmV1c2UgdGhlIHBvcHVwIG1hZGUgaXQgZGlmZmljdWx0IHRvIHN0eWxlLi8vXG4gICAgICAgIGxldCBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhpZGRlbkRpdi5pZCA9ICdoaWRkZW5EaXYnO1xuICAgICAgICAgICAgaGlkZGVuRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcG91dEl0ZW0yJyk7XG5cbiAgICAgICAgLy9FbXB0eSB0aGUgcG9wdXBcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXRDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vbGF6eUhpZGRlbkRpdiBlbXB0eS8vXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcG91dEl0ZW0yJyk7XG4gICAgICAgIHdoaWxlIChlbGVtZW50czIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5yZW1vdmVDaGlsZChlbGVtZW50czJbMF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vQWRkIHRoZSBhZGRMaXN0IG1hdGVyaWFscy8vXG4gICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5hcHBlbmQodXNlckxpc3RJbnB1dCk7XG4gICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcHVwQnRuKTtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveC5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICAgICAgdXNlckxpc3RJbnB1dC5mb2N1cygpOyAvL2F1dG8gcGxhY2VzIGN1cnNvciBpbiBib3gvL1xuICAgICAgICBhZGRMaXN0UG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0J0bkFkZFRvQnRuQXJyYXkpOyAvL2NhbGxzIHRoZSBhYm92ZSBmdW5jdGlvbiB0byBtYWtlIHN1cmUgdGhhdCBsaXN0cyBnZXQgYXBwZW5kZWQvL1xuICAgICAgICAvL2FkZCBlbnRlciBrZXkgc3VwcG9ydFxuICAgICAgICB1c2VyTGlzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG5cblxuICAgIGNyZWF0ZU5ld0J1dHRvbnMoKTsgLy9jYWxsZWQgYXQgZW5kIG9mIGZ1bmN0aW9uIHRvIGF1dG8gZ2VuZXJhdGUgYnV0dG9ucyBmb3IgaGFyZGNvZGVkIGxpc3RzXG59XG5cbiIsIi8vVGhpcyBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgdGFza3Mgd2l0aCBhIG5hbWUsIGRlc2NyaXB0aW9uLCBhbmQgZHVlRGF0ZS8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgXG4gICAgcHJpb3JpdHksIGNvbXBsZXRlU3RhdHVzLCBkZWxldGVFbGlnaWJsZSwgZm9ybWVyQXJyYXlQb3NpdGlvbiwgY3VycmVudEFycmF5UG9zaXRpb24sKXtcbiAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWVcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9IGNvbXBsZXRlU3RhdHVzXG4gICAgdGhpcy5kZWxldGVFbGlnaWJsZSA9IGRlbGV0ZUVsaWdpYmxlXG4gICAgdGhpcy5mb3JtZXJBcnJheVBvc2l0aW9uID0gZm9ybWVyQXJyYXlQb3NpdGlvblxuICAgIHRoaXMuY3VycmVudEFycmF5UG9zaXRpb24gPSBjdXJyZW50QXJyYXlQb3NpdGlvblxufVxuXG4iLCIvL1RoaXMgZnVuY3Rpb24gY2xvc2VzIHBvcHVwcyB1c2luZyB0aGVpciB4IGJ1dHRvbnMvL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvc2VQb3B1cHMoKXtcbi8veCBtYWtlcyB0aGUgcG9wdXAgaW52aXNpYmxlIGFnYWluLiBQcm9iYWJseSBuZWVkIHRvIHJlc2V0IGl0LCBkbyBzbyBsYXRlci8vXG5cbi8vTm90IHN1cmUgaWYgaXQgaXMgbW9yZS9sZXNzIGNvdXBsZWQgdG8gZGVjbGFyZSB0aGUgYXJyYXlzIGhlcmUgcmF0aGVyIHRoYW4gbWFraW5nIHRoZSBhcnJheXMgaW4gdGhlIHNrZWxldG9uIGFuZCBpbXBvcnRpbmcgdGhlbSBvdmVyLlxuLy9JIHRoaW5rIGl0IGlzIGEgbGl0dGxlIGNsZWFyZXIgd2hlcmUgdGhlIGRhdGEgZm9yIHRoZSBhcnJheXMgaXMgY29taW5nIGZyb20gb3ZlciBoZXJlXG4vL1RoZSBvbmx5IGZvcmVzZWVhYmxlIHByb2JsZW0gd291bGQgYmUgaWYgYSB2YXJpYWJsZSBuYW1lIGlzIGNoYW5nZWQgdGhlcmUgaXQgd291bGQgaGF2ZSB0byBiZSBjaGFuZ2VkIGhlcmUgYXMgd2VsbFxuXG4vL2FycmF5IG9mIHRoZSB4J3MvL1xubGV0IGNsb3NlUG9wdXBzQXJyYXkgPSBbXTtcblxubGV0IGNsb3NlVGFza1BvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RFeGl0QnRuJyk7XG4gICAgY2xvc2VQb3B1cHNBcnJheS5wdXNoKGNsb3NlVGFza1BvcHVwKVxuY29uc3QgYWRkTGlzdEV4aXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdEV4aXRCdG4nKTtcbiAgICBjbG9zZVBvcHVwc0FycmF5LnB1c2goYWRkTGlzdEV4aXRCdG4pXG5cblxuLy9hcnJheSBvZiB0aGUgcG9wb3V0cy8vXG5sZXQgcG9wb3V0QXJyYXkgPSBbXTsgXG5cbmxldCB0YXNrUG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQb3BvdXRCb3gnKTtcbiAgICBwb3BvdXRBcnJheS5wdXNoKHRhc2tQb3BvdXRCb3gpO1xuY29uc3QgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyJyk7XG4gICAgcG9wb3V0QXJyYXkucHVzaChhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyKTtcbmxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpXG5sZXQgYWRkTGlzdFBvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0UG9wb3V0Qm94JylcblxuLy9JbiBvcmRlciwgbGluayB0aGUgYXJyYXlzIDEgdG8gMSBhbmQgYXNzaWduIHRoZSBldmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGF0IGl0ZW0gb2YgdGhlIGFycmF5Ly9cbmZvcihsZXQgaT0wOyBpPGNsb3NlUG9wdXBzQXJyYXkubGVuZ3RoO2krKyl7XG5jbG9zZVBvcHVwc0FycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgIHBvcG91dEFycmF5W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vRXJhc2luZyBwb3B1cCBkaXNwbGF5IGZyb20gc2lnaHQgdW50aWwgY2xpY2tpbmcgYSBsaXN0Ly9cbiAgICBpZiAocG9wb3V0QXJyYXlbaV0gPT0gdGFza1BvcG91dEJveCl7Ly9ub3QgZWxlZ2FudC8vXG4gICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIC8vcmVtb3ZlcyB0aGUgYWRkL3JlbW92ZSBmcm9tIHRoZSBlZGl0IGxpc3Qgd2hlbiBjbGlja2luZyBvZmYgdGhlbVxuICAgIGNvbnN0IGVsZW1lbnRzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRMaXN0QnRuQ29udGFpbmVyJyk7XG4gICAgd2hpbGUoZWxlbWVudHMyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveC5yZW1vdmVDaGlsZChlbGVtZW50czJbMF0pO1xuICAgIH1cbiAgICB9KVxufVxufVxuXG5cbiIsImltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRhc2tcIjtcbmltcG9ydCB7IHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkLCBjdXJyZW50VGFzayB9IGZyb20gXCIuL2Rpc3BsYXlUYXNrRGV0YWlsc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5Q3VycmVudCwgdGFza0Rpc3BsYXlBcnJheSxcbiAgICAgICAgY3VycmVudENyb3NzVGFza0J1dHRvbnNBcnJheSwgIGRlbGV0ZVRhc2tCdXR0b25zQXJyYXksIHBpbkxpc3R9IGZyb20gXCIuL21lbnVEaXNwbGF5XCJcblxubGV0IGNyb3NzZWRUYXNrcyA9IFtdO1xuZnVuY3Rpb24gZGVsZXRlVGFza3MoKXtcbiAgICBsZXQgcHJvdG90eXBlVHJhY2tlckJlY2F1c2VJSXNPdXRPZlNjb3BlXG4gICAgbGV0IGNvcnJhbEVsaWdpYmlsdHlUcmFja2VyXG4gICAgbGV0IGRlbGV0ZUVsaWdpYmxlQXJyYXkgPSBbXVxuICAgIC8vbGV0IGRlbGV0ZVRhc2tUcmFja2VyXG5cbiAgICAvL2FsbG93cyBzd2l0Y2hpbmcgYmV0d2VlbiBjcm9zc2VkICYgdW5jcm9zc2VkXG4gICAgYWRkVGFzay5wcm90b3R5cGUubWFrZUNyb3NzZWQgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlU3RhdHVzID09IHVuZGVmaW5lZCB8fCB0aGlzLmNvbXBsZXRlU3RhdHVzID09ICdpbmNvbXBsZXRlJyl7IC8vaWYgdW5jcm9zc2VkXG4gICAgICAgICAgICBjcm9zc2VkVGFza3MucHVzaChsaXN0QXJyYXlDdXJyZW50W3Byb3RvdHlwZVRyYWNrZXJCZWNhdXNlSUlzT3V0T2ZTY29wZV0pOyAvL01vdmUgbXkgY29ycmVzcG9uZGluZyBsaXN0QXJyYXlDdXJyZW50IG1lbWJlciBpbnRvIGNyb3NzZWRUYXNrc1xuICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudC5zcGxpY2UocHJvdG90eXBlVHJhY2tlckJlY2F1c2VJSXNPdXRPZlNjb3BlLDEpOyAvL1JlbW92ZSBoaW0gZnJvbSB0aGUgbGlzdCBhcnJheVxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9ICdjcm9zc2VkJzsgLy9jaGFuZ2VzIHRvIGNyb3NzZWQgb3V0ICYgbW92ZXMgdG8gYm90dG9tIGFycmF5Ly9cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuY29tcGxldGVTdGF0dXMgPT0gJ2Nyb3NzZWQnKXsgLy9pZiBjcm9zc2VkXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gJ2luY29tcGxldGUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vYXNzaWducyB0aGUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBjcm9zc2VkIHRhc2tzIGJ1dHRvbiwgYWxsb3dpbmcgdGhlbSB0byBhY3R1YWxseSBjcm9zcy8vXG4gICAgZnVuY3Rpb24gYXNzaWduQ3Jvc3NlZFRhc2tzRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8Y3VycmVudENyb3NzVGFza0J1dHRvbnNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57IC8vZm9yIGV2ZXJ5IGJ1dHRvbiBvbiB0aGUgbGlzdCwgd2hlbiBJIGFtIGNsaWNrZWRcbiAgICAgICAgICAgICAgICBwcm90b3R5cGVUcmFja2VyQmVjYXVzZUlJc091dE9mU2NvcGUgPSBpXG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlBcnJheVtpXS5tYWtlQ3Jvc3NlZCgpOyAvL0NoYW5nZSB0aGUgdGFzayB0byBlaXRoZXIgY3Jvc3NlZCBvciB1bmNyb3NzZWRcbiAgICAgICAgICAgICAgICBwaW5MaXN0KCk7IC8vUHV0IGV2ZXJ5b25lIGJhY2sgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyb3NzZWRUYXNrcyA9IFtdIC8vZW1wdHkgY3Jvc3NlZCB0YXNrcyBzaW5jZSBhbGwgb2YgdGhlc2UgZ2VudHMgYXJlIGluIGxpc3RBcnJheUN1cnJlbnQgYmFjayBpbiBwaW5MaXN0XG4gICAgfVxuXG4gICAgLy9Gb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSBmb3IgZGVsZXRpbmcgYWxyZWFkeSBjcm9zc2VkIHRhc2tzXG4gICAgLy9QdXRzIGFsbCB0aGUgZWxpZ2libGUgZm9yIGRlbGV0ZSB0YXNrcyBpbnRvIGFuIGFycmF5Ly9cbiAgICAgZnVuY3Rpb24gY29ycmFsRGVsZXRlRWxpZ2libGVJbnRvQXJyYXkoKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGFza0Rpc3BsYXlBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb3JyYWxFbGlnaWJpbHR5VHJhY2tlciA9IGk7Ly9UcmFjayBpIHRvIGJlIHVzZWQgaW4gcHJvdG90eXBlXG4gICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5W2ldLmRlbGV0ZUVsaWdpYmxlSGVyZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkVGFzay5wcm90b3R5cGUuZGVsZXRlRWxpZ2libGVIZXJkZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmRlbGV0ZUVsaWdpYmxlID09ICdlbGlnaWJsZScpeyAvL0lmIGVsaWdiaWxlIGZvciBkZWxldGlvblxuICAgICAgICAgICAgZGVsZXRlRWxpZ2libGVBcnJheS5wdXNoKHRhc2tEaXNwbGF5QXJyYXlbY29ycmFsRWxpZ2liaWx0eVRyYWNrZXJdKS8vUHV0IGludG8gdGhlIGRlbGV0ZSBhcnJheVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9TYXZlcyB0YXNrcyBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBsaXN0QXJyYXkgc28gdGhleSBjYW4gYmUgYWNjdXJhdGVseSBkZWxldGVkIHdoZW4gY3Jvc3NlZC8vXG4gICAgZnVuY3Rpb24gY3VycmVudEFycmF5UG9zaXRpb25UcmFja2VyICgpe1xuICAgICAgICBmb3IobGV0IHAgPSAwOyBwIDwgbGlzdEFycmF5Q3VycmVudC5sZW5ndGg7IHArKyl7IC8vbG9vcCB0aHJvdWdoIGN1cnJlbnQgYXJyYXkgYXNzaWduaW5nIHRyYWNraW5nIG51bWJlclxuICAgICAgICAgICAgY3VycmVudEFycmF5UG9zaXRpb25UcmFja2VyID0gcDsvL3RyYWNrZXIgZm9yIGlcbiAgICAgICAgICAgIGxpc3RBcnJheUN1cnJlbnRbcF0uc2F2ZUN1cnJlbnRBcnJheVBvc2l0aW9uKCk7IC8vc2F2ZXMgY3VycmVudCBwb3NpdGlvbiB0aHJvdWdoIHByb3RvdHlwZVxuICAgICAgICAgICAgXG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIGFkZFRhc2sucHJvdG90eXBlLnNhdmVDdXJyZW50QXJyYXlQb3NpdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEFycmF5UG9zaXRpb24gPSBjdXJyZW50QXJyYXlQb3NpdGlvblRyYWNrZXI7Ly9jdXJyZW50IHBvc2l0aW9uIGlzIHRyYWNrZXIgcG9zaXRpb25cbiAgICB9XG4gICAgLy9Bc3NpZ25zIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZGVsZXRlIGJ1dHRvbnMgZm9yIGRlbGV0aW9uLy9cbiAgICBmdW5jdGlvbiBhc3NpZ25EZWxldGVUYXNrc0V2ZW50TGlzdGVuZXJzKCl7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGRlbGV0ZVRhc2tCdXR0b25zQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGRlbGV0ZVRhc2tCdXR0b25zQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgLy9mb3IgZXZlcnkgYnV0dG9uIG9uIHRoZSBsaXN0LCB3aGVuIEkgYW0gY2xpY2tlZFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QXJyYXlQb3NpdGlvblRyYWNrZXIoKTsgLy9GaW5kIHRoZSBjdXJyZW50IHBvc2l0aW9uIG9mIG15IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRWxpZ2libGVBcnJheVtpXS5kZWxldGVUYXNrKCk7Ly9kZWxldGUgdGhhdCB0YXNrLCBmaW5kaW5nIGl0IGluIG15IGFycmF5IG9mIGVsaWdpYmxlIGRlbGV0aW9uc1xuICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBkZWxldGVkIGl0ZW0gaXMgdGhlIGN1cnJlbnQgaXRlbSwgZGVmYXVsdCB0aGUgaW5mbyBkaXNwbGF5IHRvIHRoZSBvcmlnaW5hbCwgaWYgbm90IHRoZW4ga2VlcCBpdCBvbiBjdXJyZW50IGl0ZW0vL1xuICAgICAgICAgICAgICAgICAgICBpZihkZWxldGVFbGlnaWJsZUFycmF5W2ldID09IGN1cnJlbnRUYXNrKXsgLy9jdXJyZW50VGFzayBpbXBvcnRlZCBmcm9tIGRpc3BsYXlUYXNrRGV0YWlscy8vXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWtlRXZlcnl0aGluZ09mZkluZm9Cb2FyZCgpOyAvL0RlbGV0ZSBpbmZvIGJvYXJkLCBzZXR0aW5nIGZsYWcgdG8gZmFsc2UgYW5kIHBpbm5pbmcgZmlyc3QgaXRlbSBvbiBsaXN0Ly9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGluTGlzdCgpOyAvL1B1dCBldmVyeW9uZSBiYWNrIG9uIHRoZSBib2FyZFxuICAgICAgICAgICAgICAgICAgICAvL2xldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgICAvL3N0b3BzIGl0IGZyb20gYnViYmxpbmcgdG8gb3V0c2lkZSBidXR0b25cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgICBhZGRUYXNrLnByb3RvdHlwZS5kZWxldGVUYXNrID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGN1cnJlbnRQb3NpdGlvblRyYWNrZXIgPSB0aGlzLmN1cnJlbnRBcnJheVBvc2l0aW9uLy9maW5kIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudC5zcGxpY2UoY3VycmVudFBvc2l0aW9uVHJhY2tlciwxKS8vcmVtb3ZlIGl0IGZyb20gdGhlIGN1cnJlbnRMaXN0QXJyYXlcbiAgICB9XG5cbiAgICBhc3NpZ25Dcm9zc2VkVGFza3NFdmVudExpc3RlbmVycygpOy8vYXNzaWduIGV2ZW50IGxpc3RlbmVycyBmb3IgY3Jvc3MgYnV0dG9uc1xuICAgIGNvcnJhbERlbGV0ZUVsaWdpYmxlSW50b0FycmF5KCk7IC8vY29ycmFsIGFsbCBteSBlbGlnaWJsZSBkZWxldGlvbnNcbiAgICBhc3NpZ25EZWxldGVUYXNrc0V2ZW50TGlzdGVuZXJzKCk7IC8vYXNzaWduIGV2ZW50IGxpc3RlbmVycyBmb3IgZGVsZXRpb25zXG59XG5cblxuZXhwb3J0IHtkZWxldGVUYXNrcywgY3Jvc3NlZFRhc2tzfVxuIiwiLy9sZXQgY3VycmVudERpc3BsYXllZFRhc2tzQXJyYXkgPSBbXVxuXG4vL2NhbGxlZCBmcm9tIHBpbmxpc3RcbmltcG9ydCB7IGxpc3RBcnJheUN1cnJlbnQsIGJ0bkFycmF5LCBsaXN0QXJyYXksIG5ld2x5QWRkZWRUYXNrLCBmaXJzdExpc3RPcGVuRmxhZyB9IGZyb20gXCIuL21lbnVEaXNwbGF5XCI7XG5pbXBvcnQgYWRkVGFzayBmcm9tIFwiLi9hZGRUYXNrXCI7XG5pbXBvcnQgeyBmb3JtYXQsYWRkTWludXRlcyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG4vL0Rpc3BsYXkgZmxhZyBtdXN0IGJlIGRlY2xhcmVkIHVwIGhlcmUgc28gaXQgY2FuIGJlIGVkaXRlZCBzYWZlbHlcbmxldCBkaXNwbGF5ZWRGbGFnXG5sZXQgY2hhbmdlRHVlRGF0ZUJ0blxubGV0IGN1cnJlbnRUYXNrIC8vRGVmaW5lIGhlcmUgc28gd2UgY2FuIGVkaXQgdGhyb3VnaG91dFxuXG5cblxuLy9zZXBhcmF0ZWQgZnJvbSB0aGUgb3RoZXIgbGFyZ2VyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgY2FuIGJlIGV4cG9ydGVkXG4vLyBhbmQgY2FsbGVkIHdoZW4gY3JlYXRpbmcgbmV3IGxpc3RzIG9yIGluIGRlbGV0aW5nIHRhc2tzIHRvIGRpc3BsYXkgdGhlIGNvcnJlY3QgXG4vL3Rhc2tcbmZ1bmN0aW9uIHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkKCl7XG4gICAgbGV0IHRhc2tJbmZvUG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbmZvUG9wb3V0Qm94Jyk7XG4gICAgbGV0IHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb0Rpc3BsYXlDb250YWluZXInKVxuICAgIGxldCBkdWVEYXRlRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlRGlzcGxheUNvbnRhaW5lcicpXG4gICAgbGV0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlVGl0bGUnKVxuICAgIGxldCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlRGlzcGxheScpXG4gICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlRHVlRGF0ZUJ0bicpXG4gICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXInKVxuICAgIGxldCBkZXNjcmlwdGlvblRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uVGl0bGUnKVxuICAgIGxldCBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25EaXNwbGF5JylcbiAgICAvL1RoaXMgaXMgZm9yIGRlbGV0aW5nIGxpc3RzIGlmIG5vdGhpbmcgaXMgZGlzcGxheWVkLCBvdGhlcndpc2UgdGhlIGRlbGV0ZUZ1bmN0aW9uIHdpbGwgZXJyb3IgYW5kIGV4aXQgaGVyZSBiZWNhdXNlIHRoZXJlIGlzIG5vIHBvcHVwQm94IHRvIHJlbW92ZS8vXG4gICAgaWYoZGlzcGxheWVkRmxhZyA9PSBmYWxzZSB8fCBmaXJzdExpc3RPcGVuRmxhZyA9PSBmYWxzZSApe1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3gucmVtb3ZlQ2hpbGQodGFza0luZm9EaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgZHVlRGF0ZURpc3BsYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZHVlRGF0ZURpc3BsYXkpO1xuICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGFuZ2VEdWVEYXRlQnRuKTtcbiAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lcik7XG4gICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lci5yZW1vdmVDaGlsZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uRGlzcGxheSk7XG4gICAgICAgIGRpc3BsYXllZEZsYWcgPSBmYWxzZTsgLy9hbGxvd3MgeW91IHRvIGNsaWNrIHdoZW4gZGVsZXRpbmcgYW4gaXRlbS8vXG4gICAgfVxufVxuLy9zb2xlbHkgZm9yIGRlbGV0aW5nIGxpc3RzIGlmIG5vIHRhc2tzIGFyZSBkaXNwbGF5ZWQvL1xuZnVuY3Rpb24gZGlzcGxheUZsYWdGYWxzZUZvckRlbGV0aW5nTGlzdHMoKXtcbiAgIGRpc3BsYXllZEZsYWcgPSBmYWxzZTtcbn1cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tEZXRhaWxzKCl7XG5cbiAgICBcbiAgICAvL2xldCBjdXJyZW50VGFza1xuICAgIGxldCBjYWxlbmRhclZhbHVlXG4gICAgbGV0IHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lciBcbiAgICBsZXQgZHVlRGF0ZURpc3BsYXlDb250YWluZXIgXG4gICAgbGV0IGR1ZURhdGVUaXRsZVxuICAgIGxldCBkdWVEYXRlRGlzcGxheSBcbiAgICBsZXQgY2hhbmdlRHVlRGF0ZUJ0biBcbiAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyIFxuICAgIGxldCBkZXNjcmlwdGlvblRpdGxlIFxuICAgIGxldCBkZXNjcmlwdGlvbkRpc3BsYXkgXG4gICBcblxuICAgIGZ1bmN0aW9uIHB1dEV2ZXJ5dGhpbmdPbkluZm9Cb2FyZCgpe1xuICAgICAgICBsZXQgdGFza0luZm9Qb3BvdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0luZm9Qb3BvdXRCb3gnKTtcbiAgICAgICAgIHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmlkID0gJ3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcidcbiAgICAgICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LmFwcGVuZCh0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIpXG4gICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXlDb250YWluZXIuaWQgPSBcImR1ZURhdGVEaXNwbGF5Q29udGFpbmVyXCJcbiAgICAgICAgICAgIHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZURpc3BsYXlDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVRpdGxlLmlkID0gJ2R1ZURhdGVUaXRsZSc7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvVGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVRpdGxlLmlubmVySFRNTCA9ICdGaW5pc2ggYnknO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXkuaWQgPSAnZHVlRGF0ZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZURpc3BsYXkpO1xuICAgICAgICAgICAgICAgICBjaGFuZ2VEdWVEYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uaWQgPSAnY2hhbmdlRHVlRGF0ZUJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChjaGFuZ2VEdWVEYXRlQnRuKVxuICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuaWQgPSBcImRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lclwiXG4gICAgICAgICAgICB0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5pZCA9ICdkZXNjcmlwdGlvblRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvVGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5pbm5lckhUTUwgPSAnTm90ZXMnO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uVGl0bGUpO1xuICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheS5wbGFjZWhvbGRlciA9ICdUeXBlIHlvdXIgbm90ZXMgaGVyZSdcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5LmlkID0gJ2Rlc2NyaXB0aW9uRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25EaXNwbGF5KTtcbiAgICAgICAgICAgIGRpc3BsYXllZEZsYWcgPSB0cnVlO1xuICAgIH1cblxuICAgXG4gICBcbiAgICAvL1Bvc3RzIHRoZSBkZWNyaXB0aW9ucyB0byB0aG9zZSBzYXZlZCBpbiB0aGUgb2JqZWN0XG4gICAgYWRkVGFzay5wcm90b3R5cGUucG9zdFRhc2tEZXRhaWxzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlRHVlRGF0ZUJ0bicpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRGlzcGxheScpO1xuICAgICAgICB0YXNrVGl0bGVEaXNwbGF5LmlubmVySFRNTCA9IHRoaXMudGFza05hbWU7XG4gICAgICAgIGlmKHRoaXMudGFza05hbWUubGVuZ3RoPjIwKXtcbiAgICAgICAgICAgIGxldCBzaG9ydGVuZWROYW1lID0gdGhpcy50YXNrTmFtZS5zdWJzdHJpbmcoMCwyMClcbiAgICAgICAgICAgIGxldCBhZGRQbHVzID0gc2hvcnRlbmVkTmFtZSArICcuLi4nO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheS5pbm5lckhUTUwgPSBhZGRQbHVzO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uaW5uZXJIVE1MID0gdGhpcy5kdWVEYXRlO1xuICAgICAgICAvL3ByaW9yaXR5RGlzcGxheS5pbm5lckhUTUwgPSB0aGlzLnByaW9yaXR5O1xuICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkudmFsdWUgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIC8vcHV0cyBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGNsaWNrYWJsZSB0YXNrc1xuICAgIGZ1bmN0aW9uIHRhc2tCdXR0b25EaXNwbGF5QXNzaWduZXIoKXtcbiAgICAgICAgbGV0IGFsbFRhc2tGbGV4Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRmxleCcpO1xuICAgICAgICBmb3IobGV0IGk9MDtpPGFsbFRhc2tGbGV4Q29udGFpbmVycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGFsbFRhc2tGbGV4Q29udGFpbmVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSBsaXN0QXJyYXlDdXJyZW50W2ldOy8vTWFrZSB0aGUgY2xpY2tlZCB0YXNrIHRoZSBjdXJyZW50IHRhc2sgZm9yIGVkaXRpbmcgdGhyb3VnaG91dFxuICAgICAgICAgICAgICAgIHJlbW92ZUFuZFJlQWRkKCk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudFtpXS5wb3N0VGFza0RldGFpbHMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbmRSZUFkZCgpe1xuICAgICAgICAgdGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQoKTtcbiAgICAgICAgIHB1dEV2ZXJ5dGhpbmdPbkluZm9Cb2FyZCgpO1xuICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bkV2ZW50TGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVycyBmb3IgY2hhbmdpbmcgbGlzdHNcbiAgICBmdW5jdGlvbiBsaXN0QnV0dG9uRGlzcGxheUFzc2lnbmVyKCl7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YnRuQXJyYXkubGVuZ3RoO2krKyl7IFxuICAgICAgICAgICAgYnRuQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgICAgIHJlbW92ZUFuZFJlQWRkKCk7XG4gICAgICAgICAgICAgICAgdGFza0J1dHRvbkRpc3BsYXlBc3NpZ25lcigpO1xuICAgICAgICAgICAgICAgIGxpc3RBcnJheUN1cnJlbnRbMF0ucG9zdFRhc2tEZXRhaWxzKCk7IC8vYXV0byBkaXNwbGF5cyBmaXJzdCB0YXNrIGluIGxpc3QvL1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gbGlzdEFycmF5Q3VycmVudFswXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgXG5cbiAgICAgICAgYWRkVGFzay5wcm90b3R5cGUuc2F2ZURlc2NyaXB0aW9uUHJvdG90eXBlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKGRlc2NyaXB0aW9uRGlzcGxheS52YWx1ZSAhPSBudWxsKXsgXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkRpc3BsYXknKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25EaXNwbGF5LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzYXZlRGVzY3JpcHRpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKVxuICAgICAgICAgICAgY3VycmVudFRhc2suc2F2ZURlc2NyaXB0aW9uUHJvdG90eXBlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9sZXRzIHlvdSBjbGljayBvZmYgYW55d2hlcmUgdG8gc2F2ZVxuICAgICAgICBmdW5jdGlvbiBiYXNlRXZlbnRMaXN0ZW5lckFkZGVyKCl7XG4gICAgICAgICAgICBiYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzYXZlRGVzY3JpcHRpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgXG4gICAgLy9UaGVzZSB0aHJlZSBjb250cm9sIHVwZGF0aW5nIGNhbGVuZGFyXG4gICAgZnVuY3Rpb24gY2hhbmdlRHVlRGF0ZSgpe1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyJylcbiAgICAgICAgICAgIGNhbGVuZGFyVmFsdWUgPSBjYWxlbmRhci52YWx1ZTtcbiAgICAgICAgICAgIGNhbGVuZGFyVmFsdWUgPSBmb3JtYXQobmV3IERhdGUoY2FsZW5kYXJWYWx1ZSksIFwiUFBQcFwiKVxuICAgICAgICAgICAgY3VycmVudFRhc2suY2hhbmdlRHVlRGF0ZVByb3BlcnR5KCk7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgfVxuICAgICAgICBhZGRUYXNrLnByb3RvdHlwZS5jaGFuZ2VEdWVEYXRlUHJvcGVydHkgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlRHVlRGF0ZUJ0bicpXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBjYWxlbmRhclZhbHVlO1xuICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5pbm5lckhUTUwgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VEdWVEYXRlQnRuRXZlbnRMaXN0ZW5lcigpe1xuICAgICAgICAvL0R1ZSBkYXRlIEJ0biBkaXNwbGF5cyBwb3B1cCBhbmQgZWRpdHMgaXQgdG8gZGlzcGxheSBkdWUgZGF0ZSBlZGl0IGluZm8vL1xuICAgICAgICBsZXQgY2hhbmdlRHVlRGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VEdWVEYXRlQnRuJylcbiAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgbGV0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjYWxlbmRhci50eXBlID0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5pZCA9ICdjYWxlbmRhcic7XG4gICAgICAgICAgICAgICAgLy9kZWZhdWx0IHRpbWUgc3R1ZmZcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7IC8vbmV3IGRhdGVcbiAgICAgICAgICAgICAgICAgICAgbm93LnNldE1pbnV0ZXMobm93LmdldE1pbnV0ZXMoKSAtIG5vdy5nZXRUaW1lem9uZU9mZnNldCgpKTsgLy9jYWxjIGN1cnJlbnQgdGltZVxuICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJtZWRpYXRlVGltZSA9IGFkZE1pbnV0ZXMobm93LCA1KTsgLy9hZGQgNSBtaW51dGVzXG4gICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyLnZhbHVlID0gaW50ZXJtZWRpYXRlVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTYpOyAvL2NvbnZlcnQgdG8gSVNPIGFuZCBzZXQgYXMgZGVmYXVsdFxuICAgICAgICAgICAgICAgIGNhbGVuZGFyLmNsYXNzTGlzdC5hZGQoJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgIGxldCBhZGREYXRlUG9wb3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgYWRkRGF0ZVBvcG91dEJ0bi5pZCA9ICdhZGREYXRlUG9wb3V0QnRuJztcbiAgICAgICAgICAgICAgICBhZGREYXRlUG9wb3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgICAgICBhZGREYXRlUG9wb3V0QnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vdGhpcyBpcyBub3cganVzdCB0aGUgbWFpbiBwb3BvdXQ7XG4gICAgICAgICAgICBhZGRMaXN0TmFtZURpc3BsYXkuaW5uZXJIVE1MID0gJ1BpY2sgRGF0ZSc7XG4gICAgICAgICAgICAgLy9oaWRkZW5EaXYgaXMgaGVyZSBmb3IgQ1NTLCBsYXppbmVzcyBvbiBteSBwYXJ0IHRvIHJldXNlIHRoZSBwb3B1cCBtYWRlIGl0IGRpZmZpY3VsdCB0byBzdHlsZS4vL1xuICAgICAgICAgICAgbGV0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5pZCA9ICdoaWRkZW5EaXYnO1xuICAgICAgICAgICAgICAgIGhpZGRlbkRpdi5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtMicpO1xuICAgICAgICAgICAgLy9IYXZlIHRvIHB1dCB0aGVzZSBoZXJlIHNvIGl0IGNhbiBncmFiIHRoZSBJRCBiZWZvcmUgZW1wdHlpbmc7XG4gICAgICAgICAgICAvL0VtcHR5IHRoZSBwb3B1cFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXsgXG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbGF6eUhpZGRlbkRpdiBlbXB0eS8vXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50czIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BvdXRJdGVtMicpO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnRzMi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5yZW1vdmVDaGlsZChlbGVtZW50czJbMF0pO1xuICAgICAgICB9XG4gICAgICAgICAgICAvL0FkZCB0aGUgYWRkTGlzdCBtYXRlcmlhbHMvL1xuICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmFwcGVuZChjYWxlbmRhcik7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXRDb250YWluZXIuYXBwZW5kKGFkZERhdGVQb3BvdXRCdG4pO1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICAgICAgICAgIGFkZERhdGVQb3BvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VEdWVEYXRlKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgIC8vY29udHJvbHMgdGhpcyB3aG9sZSB0aGluZywgb25seSBmdW5jdGlvbiBjYWxsZWRcbiAgICAgZnVuY3Rpb24gaW5mb0Rpc3BsYXlDb250cm9sbGVyKCl7XG4gICAgICAgIC8vVGhpcyBpcyBmb3Iga2VlcGluZyBwZXJzaXN0ZW5jZSB3aGVuIGNyb3NzaW5nIGl0ZW1zLiBJbmZvIGRpc3BsYXkgc3RheXMgb24gY3Jvc3NlZCBpdGVtXG4gICAgICAgIGlmKGRpc3BsYXllZEZsYWcgPT0gdHJ1ZSl7XG4gICAgICAgICAgICByZW1vdmVBbmRSZUFkZCgpO1xuICAgICAgICAgICAgY3VycmVudFRhc2sucG9zdFRhc2tEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9UaGlzIGlzIGZvciBhZGRpbmcgbmV3IHRhc2tzLCBtYWtlcyB0aGVtIHRoZSBkaXNwbGF5ZWQgdGFzay8vXG4gICAgICAgIGVsc2UgaWYobmV3bHlBZGRlZFRhc2sgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzayA9IG5ld2x5QWRkZWRUYXNrOyAvL25lZWQgdG8gbWFrZSBjdXJyZW50IHRhc2sgdGhpcywgb3RoZXJ3aXNlIHZhbHVlIGdldHMgbWVzc2VkIHVwIGRvd24gcGlwZS8vXG4gICAgICAgICAgICAgICAgcHV0RXZlcnl0aGluZ09uSW5mb0JvYXJkKCk7IC8vIGRvbid0IG5lZWQgdG8gcmVtb3ZlIGFuZCByZWFkZCBiYyBldmVyeXRoaW5nIGFscmVhZHkgdGFrZW4gb2ZmLy9cbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5wb3N0VGFza0RldGFpbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgLy9JZiB0aGVyZSBpcyBub3Robmcgb24gYm9hcmQgSUUgZmlyc3QgdGltZSBvcGVuaW5nIGEgbGlzdCwgdGhlbiBkZWZhdWx0IGl0IHRvIDBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHB1dEV2ZXJ5dGhpbmdPbkluZm9Cb2FyZCgpO1xuICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudFswXS5wb3N0VGFza0RldGFpbHMoKTsgLy9hdXRvIGRpc3BsYXlzIGZpcnN0IHRhc2sgaW4gbGlzdC8vXG4gICAgICAgICAgICBjdXJyZW50VGFzayA9IGxpc3RBcnJheUN1cnJlbnRbMF07XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bkV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgdGFza0J1dHRvbkRpc3BsYXlBc3NpZ25lcigpO1xuICAgICAgICBsaXN0QnV0dG9uRGlzcGxheUFzc2lnbmVyKCk7XG4gICAgICAgIGJhc2VFdmVudExpc3RlbmVyQWRkZXIoKTtcbiAgICB9XG4gICAgLy9JbmZvRGlzcGxheSBpcyB0aGUgb25seSB0aGluZyB0aGF0IGZpcmVzLy9cbiAgICBpbmZvRGlzcGxheUNvbnRyb2xsZXIoKTtcbn1cbmV4cG9ydCB7dGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQsIGRpc3BsYXlUYXNrRGV0YWlscywgY3VycmVudFRhc2ssIGRpc3BsYXlGbGFnRmFsc2VGb3JEZWxldGluZ0xpc3RzfSIsImltcG9ydCB7IGZvcm1hdElTTzkwNzUsIHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGFkZE5ld0xpc3QgZnJvbSAnLi9hZGROZXdMaXN0JztcbmltcG9ydCBhZGRUYXNrIGZyb20gJy4vYWRkVGFzayc7XG5pbXBvcnQge2RlbGV0ZVRhc2tzLCBjcm9zc2VkVGFza3N9IGZyb20gJy4vZGVsZXRlVGFza3MnO1xuaW1wb3J0IHtkaXNwbGF5VGFza0RldGFpbHMsIHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkfSBmcm9tICcuL2Rpc3BsYXlUYXNrRGV0YWlscyc7XG5pbXBvcnQgcmVhcnJhbmdlVGFza3MgZnJvbSAnLi9yZWFycmFuZ2VUYXNrcyc7XG5pbXBvcnQgeyBnZXRCdXR0b25zLCBuZXdCZWF1dGlmdWxMaXN0QXJyYXksIHBhcnNlZExpc3RBcnJheUN1cnJlbnQsIHByb2R1Y2VMaXN0QXJyYXksIHJlb2JqZWN0ZWRMaXN0QXJyYXlDdXJyZW50LCBzdG9yZUJ1dHRvbnMsIHN0b3JlbGlzdEFycmF5IH0gZnJvbSAnLi9zdG9yYWdlJztcblxuXG4vL2RlY2xhcmUgbGlzdEFycmF5IGhlcmUgZm9yIGV4cG9ydCBsYXRlclxubGV0IGxpc3RBcnJheSA9IFtdXG5sZXQgYnRuQXJyYXkgPSBbXVxubGV0IGxpc3RBcnJheUN1cnJlbnRcbmxldCBsaXN0QXJyYXlDdXJyZW50TmFtZVxubGV0IGN1cnJlbnRDcm9zc1Rhc2tCdXR0b25zQXJyYXkgPSBbXVxubGV0IGRlbGV0ZVRhc2tCdXR0b25zQXJyYXkgPSBbXVxubGV0IHRhc2tEaXNwbGF5QXJyYXkgPSBbXVxubGV0IHNvcnRUcmFja2VyXG5sZXQgaVRyYWNrZXIvL2l0cmFja2VyIGhlcmUgY29ubmVjdHMgZGlyZWN0bHkgYWJvdmUgdG8gcGluTGlzdHMuIExldHMgbWUgY2hhbmdlIHRoZSBvcmlnaW5hbCBhcnJheSBpblxubGV0IGZvcm1lckFycmF5UG9zaXRpb25UcmFja2VyXG5sZXQgbmV3bHlBZGRlZFRhc2tcbmxldCBmaXJzdExpc3RPcGVuRmxhZyAvL1RoaXMgZmxhZyB3aWxsIGFsbG93IGZvciBkZWxldGlvbiBvZiBsaXN0cyB3aGVuIG5vbmUgYXJlIG9wZW4gYXQgc3RhcnQgb2YgcHJvZ3JhbSBleHBvcnRlZCB0byBkaXNwbGF5VGFza0RldGFpbHMvL1xubGV0IGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0IC8vdGhlc2Ugc2V0IGlkJ3MgYXZhaWxhYmxlIGZvciBkcmFnZ2luZyBhbmQgZHJvcHBpbmcvL1xubGV0IGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0MlxuXG4vL1RoaXMgZnVuY3Rpb24gY29udHJvbHMgZGlzcGxheSBvbiB0aGUgcG9wdXAuIFRoaXMgaW5jbHVkZXMgY2xpY2tzIGZyb20gdGhlIHNpZGUgbWVudSwgYWRkaXRpb25zIGZyb20gdGhlIHBvcHVwLy9cbmZ1bmN0aW9uIG9wZW5MaXN0cyAoKXtcbiAgICB0YXNrUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vRGVmYXVsdHMgcG9wdXAgdG8gaW52aXNpYmxlIGJlZm9yZSBhIGxpc3QgaXMgY2xpY2tlZFxuICAgIHRhc2tJbmZvUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG4gICAgLy9EaXNwbGF5cyB0aGUgYWRkVG9MaXN0IHBvcHVwIHdoZW4gY2xpY2tlZCBpbiBtZW51XG4gICBcbiAgICAgICAgLy9QcmVzZXQgbGlzdHMvL1xuICAgICAgICAgICAgY29uc3QgbW9uZGF5R3JvY2VyeSA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgICdPcmFuZ2VzJyxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAnU2V0IFRpbWUnLFxuICAgICAgICAgICAgICAgICdIaWdoJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3Qgd2VkR3JvY2VyeSA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgICdQZWFycycsXG4gICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAnTWVkaXVtJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgZnJpZGF5R3JvY2VyeSA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgICdHcmFwZXMnLFxuICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICdTZXQgVGltZScsXG4gICAgICAgICAgICAgICAgJ0xvdydcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxldCBncm9jZXJ5TGlzdEFycmF5ID0gW21vbmRheUdyb2NlcnksIHdlZEdyb2NlcnksIGZyaWRheUdyb2NlcnksXTtcbiAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdEFycmF5LmlubmVySFRNTCA9ICdHcm9jZXJpZXMnO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGF1bmRyeSA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAnTGF1bmRyeScsXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAnU2V0IFRpbWUnLFxuICAgICAgICAgICAgICAgICAgICAnSGlnaCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY29uc3QgbGF1bmRyeTIgPSBuZXcgYWRkVGFzayhcbiAgICAgICAgICAgICAgICAgICAgJ1ZhY3V1bScsXG4gICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAnU2V0IFRpbWUnLFxuICAgICAgICAgICAgICAgICAgICAnSGlnaCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY29uc3QgbGF1bmRyeTMgPSBuZXcgYWRkVGFzayhcbiAgICAgICAgICAgICAgICAgICAgJ1NjcnViIHRvaWxldHMnLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdW5kcnk0ID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICdEdXN0JyxcbiAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICdTZXQgVGltZScsXG4gICAgICAgICAgICAgICAgICAgICdIaWdoJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGxldCBob3VzZUxpc3RBcnJheSA9IFtsYXVuZHJ5LCBsYXVuZHJ5MiwgbGF1bmRyeTMsIGxhdW5kcnk0LF07XG4gICAgICAgICAgICAgICAgaG91c2VMaXN0QXJyYXkuaW5uZXJIVE1MID0gJ1dlZWtseSBIb3VzZXdvcmsnO1xuICAgICAgICAvL3RoZXNlIElEJ3Mgd2VyZSBkZWZpbmVkIGluIHRoZSBza2VsZXRvbi8vXG4gICAgICAgICAgICBsZXQgZ3JvY2VyeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwJyk7XG4gICAgICAgICAgICBsZXQgaG91c2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMScpO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhpcyB1c2VyIGhhcyBldmVyIGxvYWRlZCB0aGUgbGlzdHMgYXBwLCBpZiBpdCBpcywgdGhlbiBkZWZhdWx0IHRvIG9yaWdpbmFsIHNldHRpbmdzLy9cbiAgICAgICAgICAgIGxldCBmaXJzdExvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJyk7XG4gICAgICAgICAgICBsZXQgYnRuQXJyYXlTYXZlZENoZWNrZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRuQXJyYXknKTtcbiAgICAgICAgICAgIGxldCBsaXN0QXJyYXlTYXZlZENoZWNrZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEFycmF5Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaXJzdExvYWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmaXJzdExvYWQgPT0gJ2ZhbHNlJyAmJiBidG5BcnJheVNhdmVkQ2hlY2tlciAhPSBudWxsICYmIGxpc3RBcnJheVNhdmVkQ2hlY2tlciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBnZXRCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgcHJvZHVjZUxpc3RBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpcnN0TG9hZCk7XG4gICAgICAgICAgICAgICAgYnRuQXJyYXkgPSBbZ3JvY2VyeUJ0biwgaG91c2VCdG4sXTtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXkgPSBbZ3JvY2VyeUxpc3RBcnJheSwgaG91c2VMaXN0QXJyYXksXTtcbiAgICAgICAgICAgIH1cbn0gICBcblxuICAgLy9UaGlzIHByb3RvdHlwZSBpcyBiZWluZyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcmllcyBmcm9tIHRoZSBsaXN0cyBvbiB0byB0aGUgcG9wdXAsIGl0IGFsc28gY3JlYXRlcyB0aGUgYnV0dG9ucy8vXG4gICBhZGRUYXNrLnByb3RvdHlwZS5kaXNwbGF5TGlzdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgLy90aGUgdGFza0ZsZXhDb250YWluZXJzIHJlYWxseSBzaG91bGQgYmUgb2JqZWN0cy8vXG4gICAgICAgIGxldCB0YXNrRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL0l0IGJlaW5nIGEgYnV0dG9uIG1ha2VzIGl0IGNsaWNrYWJsZVxuICAgICAgICAgICAgLy90YXNrRmxleENvbnRhaW5lci5pZCA9ICd0YXNrRmxleENvbnRhaW5lcic7XG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza0ZsZXgnXG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5pZCA9IGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0OyAvL0dpdmluZyBJRCB0byBjcm9zc2VkSVRFTVNcblxuICAgICAgICAvL2J1dHRvbnMgdG8gY3Jvc3MgYSB0YXNrIG9mZiwgbW92aW5nIGl0IHRvIGJvdHRvbSBvZiB0aGUgYXJyYXkvL1xuICAgICAgICBsZXQgdGFza0Nyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQ3Jvc3NCdG4uY2xhc3NMaXN0LmFkZCgndGFza0Nyb3NzQnRuJywgJ2J0bicpO1xuICAgICAgICAgICAgY3VycmVudENyb3NzVGFza0J1dHRvbnNBcnJheS5wdXNoKHRhc2tDcm9zc0J0bik7IC8vYXJyYXkgb2YgYnV0dG9ucyBmb3IgY3Jvc3NpbmcgdGFza3MvL1xuICAgICAgICBsZXQgdGFza0Rpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGFza05hbWU7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0ID0gJ3Rhc2snO1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlFbGVtZW50LmlkID0gaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyOyAvL0dpdmluZyBJRCB0byBjcm9zc2VkSVRFTVNcbiAgICAgICAgLy9idXR0b25zIHRvIHJlbW92ZSBhIHRhc2sgZnJvbSB0aGUgYXJyYXkgYWZ0ZXIgYmVpbmcgY3Jvc3NlZCBvZmZcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J0bicsICdidG4nLCAndGFza0Nyb3NzQnRuJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrQnRuLmlubmVySFRNTCA9ICcmIzEwMDA2Oyc7XG4gICAgICAgIC8vYXBwZW5kIGV2ZXJ5dGhpbmdcbiAgICAgICAgbGV0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEaXNwbGF5Q29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0YXNrRmxleENvbnRhaW5lcik7XG4gICAgICAgIHRhc2tGbGV4Q29udGFpbmVyLmFwcGVuZCh0YXNrQ3Jvc3NCdG4pO1xuICAgICAgICB0YXNrRmxleENvbnRhaW5lci5hcHBlbmQodGFza0Rpc3BsYXlFbGVtZW50KTtcbiAgICAgICAgLy9pZiBjcm9zc2VkLCBtYWtlIGl0IGxvb2sgY3Jvc3NlZCBhbmQgYXBwZW5kIHRoZSBmaW5hbCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGlmKHRoaXMuY29tcGxldGVTdGF0dXMgPT0gJ2Nyb3NzZWQnKXsgLy90cmFja3MgY29tcGxldGUgc3RhdHVzIG1vZGlmaWVkIGluIGRlbGV0ZVRhc2tzLy9cbiAgICAgICAgICAgIHRhc2tEaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkQ29sb3JzJyk7XG4gICAgICAgICAgICB0YXNrQ3Jvc3NCdG4uY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIHRhc2tDcm9zc0J0bi5pbm5lckhUTUwgPSAnXFx1MjcxMyc7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVsaWdpYmxlID0gJ2VsaWdpYmxlJzsvL01ha2UgaXQgZWxpZ2libGUgZm9yIGRlbGV0aW9uXG4gICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uc0FycmF5LnB1c2goZGVsZXRlVGFza0J0bik7IC8vcHVzaCB0byBhbiBhcnJheSBvZiBidXR0b25zIGZvciBkZWxldGluZyB0YXNrcywgbmVlZHMgdG8gYmUgaGVyZSBzbyB0aGF0IGl0IGRvZXNuJ3QgYXBwZW5kIGludmlzaWJsZSBidXR0b25zLy9cbiAgICAgICAgICAgIHRhc2tGbGV4Q29udGFpbmVyLmFwcGVuZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgfVxuICAgICAgICAvL01ha2Ugc3VyZSBzb21ldGhpbmcgY2FuJ3QgYmUgZGVsZXRlZC8vXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVsaWdpYmxlID0gJ2luZWxpZ2libGUnO1xuICAgICAgICAgICAgdGFza0Nyb3NzQnRuLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gfVxuXG4vL1RoZXNlIHR3byBwcm90b3R5cGVzIHdvcmsgd2l0aCBwaW5MaXN0IHRvIHNvcnQgdGhlIGRpc3BsYXllZCBieSBjaGVja2VkL3VuY2hlY2tlZFxuICAgIGFkZFRhc2sucHJvdG90eXBlLnNvcnRVbmNoZWNrZWREaXNwbGF5QXJyYXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlU3RhdHVzID09IHVuZGVmaW5lZCB8fCB0aGlzLmNvbXBsZXRlU3RhdHVzID09ICdpbmNvbXBsZXRlJyl7IC8vaWYgdW5jcm9zc2VkXG4gICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5LnB1c2goc29ydFRyYWNrZXIpIC8vc29ydFRyYWNrZXIgaXMgbGlzdEFycmF5Q3VycmVudFxuICAgICAgICAgICAgdGFza0Rpc3BsYXlBcnJheS5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5mb3JtZXJBcnJheVBvc2l0aW9uIC0gYi5mb3JtZXJBcnJheVBvc2l0aW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVGFzay5wcm90b3R5cGUuc29ydENoZWNrZWREaXNwbGF5QXJyYXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlU3RhdHVzID09ICdjcm9zc2VkJyl7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5LnB1c2goc29ydFRyYWNrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAvL3BpbiBsaXN0IGFuZCBhc3NpZ24gYnV0dG9ucyBhcmUgZnVuZGFtZW50YWxseSBjb25uZWN0ZWQgYmVjYXVzZSBvZiBsaXN0QXJyYXlDdXJyZW50LCB3aGljaCBpcyB0aGUgYXJyYXkgd2l0aGluIHRoZSBhcnJheS8vXG5cbiAvL3NvcnRzIHRoZSBhcnJheSBiZXR3ZWVuIHdoYXQgaXMgXG5mdW5jdGlvbiBwaW5MaXN0KCl7XG4gICAgdGFza0Rpc3BsYXlBcnJheSA9IFtdIC8vRW1wdHkgdGhlIHRhc2tEaXNwbGF5IGFycmF5IGZyb20gbGFzdCBydW4gc28gdGhhdCBpdCBkb2Vzbid0IG92ZXJmbG93IHdpdGggb2xkIHZhbHVlc1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0ZsZXgnKTtcbiAgICAvL0VtcHRpZXMgdGhlIHZpc3VhbCBkaXNwbGF5IGZvciByZXBpbm5pbmdcbiAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXsgXG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcbiAgICAgIFxuICAgICAgICBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5ID0gW107IC8vTmVlZCB0byByZXNldCB0aGlzIGFycmF5IHNvIHRoYXQgdGhlIGkgaW4gZGVsZXRlVGFza3MgZG9lc24ndCBjb250aW51YWxseSBjb3VudC4gUGVyaGFwcyBhIGJpdCB0b28gZW50ZXJ0d2luZWQvL1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uc0FycmF5ID0gW107IC8vc2FtZVxuICAgIH1cblxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCBsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aDsgcCsrKXsgLy9wdXNoIHRoZSB1bmNoZWNrZWQgaXRlbXMgbGlzdEFycmF5IHRvIHRoZSB0YXNrRGlzcGxheSBhcnJheVxuICAgICAgICBzb3J0VHJhY2tlciA9IGxpc3RBcnJheUN1cnJlbnRbcF1cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudFtwXS5zb3J0VW5jaGVja2VkRGlzcGxheUFycmF5KCk7XG4gICAgfSBcbiAgICBmb3IobGV0IHAgPSAwOyBwIDwgbGlzdEFycmF5Q3VycmVudC5sZW5ndGg7IHArKyl7IC8vcHVzaCB0aGUgY2hlY2tlZCBvZmYgaXRlbXMgdG8gdGhlIHRhc2tEaXNwbGF5IGFycmF5IHNvIHRoZXkgcGluIGJlbG93XG4gICAgICAgIHNvcnRUcmFja2VyID0gbGlzdEFycmF5Q3VycmVudFtwXVxuICAgICAgICBsaXN0QXJyYXlDdXJyZW50W3BdLnNvcnRDaGVja2VkRGlzcGxheUFycmF5KCk7XG4gICAgfVxuICAgIGxpc3RBcnJheUN1cnJlbnQgPSBbXSAvL2VtcHR5IGxpc3RBcnJheSBmb3IgcmVmaWxsIGF0IGJvdHRvbSBvZiBmdW5jdGlvblxuXG4gICAgZm9yKGxldCBwID0gMDsgcCA8IGNyb3NzZWRUYXNrcy5sZW5ndGg7IHArKyl7IC8vcHVzaCBjcm9zc2VkIHRhc2tzIGFycmF5IGZyb20gZGVsZXRlVGFza3MgdG8gZGlzcGxheSBhcnJheS4gVGhpcyB3aWxsIG1ha2UgdGhlbSBhcHBlYXIgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgdGFza0Rpc3BsYXlBcnJheS5wdXNoKGNyb3NzZWRUYXNrc1twXSlcbiAgICB9XG4gICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QgPSAwXG4gICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyID0gMFxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCB0YXNrRGlzcGxheUFycmF5Lmxlbmd0aDsgcCsrKXsgIC8vZGlzcGxheSB0aGUgdGFza0Rpc3BsYXlBcnJheVxuICAgICAgICB0YXNrRGlzcGxheUFycmF5W3BdLmRpc3BsYXlMaXN0KCk7XG4gICAgICAgIGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0KysgLy9pbmNyZWFzZXMgdG8gYWRkIElEJ3MgdG8gdGFza3NcbiAgICAgICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyKytcbiAgICB9IFxuICAgIGRlbGV0ZVRhc2tzKCk7IC8vcnVuIGRlbGV0ZSB0YXNrcyB0byBhc3NpZ24gZXZlbnQgbGlzdGVuZXIgdG8gbmV3IGNoZWNrb2ZmIGJ1dHRvbnNcblxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCB0YXNrRGlzcGxheUFycmF5Lmxlbmd0aDsgcCsrKXsvL3B1c2ggYWxsIHRoZSBkaXNwbGF5IGFycmF5IHRvIHRoZSBwcmV2aW91c2x5IGVtcHRpZWQgY3VycmVudCBsaXN0IGFycmF5IGZvciBkaXNwbGF5IGlmIGNoYW5naW5nIGxpc3RzLy9cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudC5wdXNoKHRhc2tEaXNwbGF5QXJyYXlbcF0pIC8vc2F2ZXMgdGVtcG9yYXJ5IGNvcHkgZm9yIHdoZW4gbGlzdCBpcyBzZWxlY3RlZFxuICAgICB9IFxuICAgICBjb25zb2xlLmxvZygnbGlzdEFycmF5Q3VycmVudEF0RW5kT2ZQaW5uaW5nJylcbiAgICAgY29uc29sZS5sb2cobGlzdEFycmF5Q3VycmVudCk7XG4gICAgIGxpc3RBcnJheVtpVHJhY2tlcl0gPSBsaXN0QXJyYXlDdXJyZW50OyAvL2NoYW5nZXMgb3JpZ2luYWwgYXJyYXkgc28gdGhhdCBtb2RpZmljYXRpb25zIHNhdmUgd2hlbnMgc3dpdGNoaW5nIGIvdyBsaXN0c1xuICAgICBzdG9yZWxpc3RBcnJheSgpOyAvL3NhdmVzIG5ldyBsaXN0QXJyYXkuIEtpbmQgb2YgaGF2ZSB0byBkbyBpdCBoZXJlIGluc3RlYWQgb2YgYWRkaW5nIGl0IGp1c3Qgd2hlbiBhZGRpbmcgYSB0YXNrIGJlY2F1c2Ugb2YgaG93IEkgdXNlZCBsaXN0QXJyYXlDdXJyZW50IGFuZCBsaXN0QXJyYXkgcHJldmlvdXNseVxuICAgICBpZihsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgIGRpc3BsYXlUYXNrRGV0YWlscygpO1xuICAgICByZWFycmFuZ2VUYXNrcygpO1xuICAgIH1cblxuXG4vL2xpc3RBcnJheXMgZGlyZWN0bHkgc28gdGhhdCBpdCBkb2Vzbid0IHJlc2V0IHdoZW4gaGl0dGluZyB0aGUgbGlzdCBidXR0b25cbi8vZm9yIGxvb3AgaGVyZSBhc3NpZ25zIGV2ZW50IGxpc3RlbmVyIHRvIG1lbnUgbGlzdCBidXR0b25zIHRvIGRpc3BsYXkgdGFzayBpbmZvcm1hdGlvbiBmcm9tIHN0b3JhZ2UgYXJyYXlzIC0gSUlGRS8vXG5mdW5jdGlvbiBhc3NpZ25CdXR0b25zKCl7XG4gICAgZm9yKGxldCBpPTA7IGkgPCBidG5BcnJheS5sZW5ndGg7aSsrKXsgLy9Hb2VzIHRocm91Z2ggZWFjaCBpdGVtIGluIGJ1dHRvbiBhcnJheSBhbmQgYXNzaWducyBzYWlkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGJ0bkFycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXNzaWduQnV0dG9uc0V2ZW50TGlzdGVuZXIpXG4gICAgfVxufTtcblxuZmlyc3RMaXN0T3BlbkZsYWcgPSBmYWxzZTtcbi8vZXZlbnQgaW5zdGVhZCBvZiBldmVudCBsaXN0ZW5lcj9cbmZ1bmN0aW9uIGFzc2lnbkJ1dHRvbnNFdmVudExpc3RlbmVyKGV2ZW50KXtcbiAgICBsZXQgdGFza1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUG9wb3V0Qm94Jyk7XG4gICAgY29uc3QgY2xpY2tlZEJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9zZWxlY3RzIHRoZSBudW1iZXIgaW4gdGhlIGxpc3RBcnJheSBlcXVpdmFsZW50IHdpdGggdGhlIHBvc2l0aW9uIGluIHRoZSBidXR0b25BcnJheSwgYWxsb3dpbmcgc2VsZWN0aW9uIG9mIHRoZSBjb3JyZWN0IGxpc3QvL1xuICAgICAgICAgICAgICAgIC8vQnV0dG9uIGFycmF5IGN5Y2xlcyB0aHJvdWdoIGF0IHN0YXJ0IG9mIGZ1bmN0aW9uICYgYXNzaWducyB0aGUgaSB2YWx1ZXRvIHNlbGVjdCB0aGUgY29ycmVjdCBpdGVtIGluIHRoZSBhcnJheS4gVGhpcyBpcyBQUkUtRE9ORSBhdCBiZWdpbm5pbmcgb2YgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudCA9IGxpc3RBcnJheVtjbGlja2VkQnRuLmlkXTsgICAgLy9zZXRzIHZhcmlhYmxlIHRvIGJlIHVzZWQgc28gaW4gbmVzdGVkIGxvb3Agc28gdGhhdCBuZXN0ZWQgbG9vcCBkb2Vzbid0IG1vdmUgdGhyb3VnaCB0byBkaWZmZXJlbnQgcGFydCBvZiB0aGUgYXJyYXkgdGhyb3VnaCBhY2NpZGVudGFsIGluY3JlbWVudGluZy8vXG4gICAgICAgICAgICAgICAgaVRyYWNrZXIgPSBjbGlja2VkQnRuLmlkXG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvL21ha2VzIHRoZSBwb3BvdXQgbGlzdCBib3ggYXBwZWFyIHdoZW4gY2xpY2tpbmcgdGhlIGxpc3QgYnV0dG9uIG9uIHNpZGUgbWVudVxuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWVEaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5pbm5lckhUTUwgPSBidG5BcnJheVtjbGlja2VkQnRuLmlkXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaWYobGlzdEFycmF5Q3VycmVudC5sZW5ndGggPiAwKXsgLy9kZXRlcm1pbmVzIGlmIHRoZSBkZXRhaWxzIHNjcmVlbiBzaG93cyB1cC4gV29uJ3Qgc2hvdyBpZiBubyB0YXNrcyB0byBkaXNwbGF5IGRldGFpbHMgZm9yLy9cbiAgICAgICAgICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdEFycmF5Q3VycmVudC5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxpc3RBcnJheUN1cnJlbnROYW1lID0gbGlzdE5hbWVEaXNwbGF5LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAvL2NsZWFyIHNlbGVjdGVkIGxpc3QgZm9yIHJlYXNzaWdubWVudFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkFycmF5KVxuICAgICAgICAgICAgICAgIC8vdGhlIGJ1dHRvbiBhcnJheSBhbmQgdGhlIHBpbm5lZCBidXR0b25zIGFyZSBubyBsb25nZXIgMS0xIGNvbm5lY3RlZFxuICAgICAgICAgICAgICAgIGxldCBjb2xsZWN0aW9uT2ZMaXN0QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3RCdG4nKVxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgY29sbGVjdGlvbk9mTGlzdEJ0bnMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25PZkxpc3RCdG5zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdCcpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGlja2VkQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdCcpIC8vdHVybnMgY3VycmVudGx5IHNlbGVjdGVkIGxpc3QgYmx1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coYnRuQXJyYXkpXG4gICAgICAgICAgICBmaXJzdExpc3RPcGVuRmxhZyA9IHRydWU7XG4gICAgICAgICAgICBhc3NpZ25Gb3JtZXJQb3NpdGlvbnMoKTtcbiAgICAgICAgICAgIHBpbkxpc3QoKTtcbn1cblxuXG4vL3RoaXMgcHJvdG90eXBlIHNhdmVzIHBvc2l0aW9ucyBmb3IgdHJhY2tpbmdcbmFkZFRhc2sucHJvdG90eXBlLnNhdmVGb3JtZXJBcnJheVBvc2l0aW9uID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLmZvcm1lckFycmF5UG9zaXRpb24gPSBmb3JtZXJBcnJheVBvc2l0aW9uVHJhY2tlcjtcbn1cblxuICAgIC8vQXNzaWducyBmb3JtZXIgYXJyYXkgcG9zaXRpb24gZm9yIHNvcnRpbmdcbmZ1bmN0aW9uIGFzc2lnbkZvcm1lclBvc2l0aW9ucygpe1xuICAgIFxuICAgIC8vc29ydHMgdGhlIGN1cnJlbnQgbGlzdCB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBnZXRzIGl0cyBjb3JyZWN0IHBvc2l0aW9uIG51bWJlci5cbiAgICAvL1RoaXMgbWVhbnMgY3Jvc3NlZCBpdGVtcyByZXRhaW4gdGhlaXIgb3JpZ2luYWwgcG9zaXRpb25cbiAgICBsaXN0QXJyYXlDdXJyZW50LnNvcnQoKGEsYikgPT4ge1xuICAgICAgICByZXR1cm4gYS5mb3JtZXJBcnJheVBvc2l0aW9uIC0gYi5mb3JtZXJBcnJheVBvc2l0aW9uO1xuICAgIH0pO1xuICAgIGZvcihsZXQgcCA9IDA7IHAgPCBsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aDsgcCsrKXsgLy9sb29wIHRocm91Z2ggY3VycmVudCBhcnJheSBhc3NpZ25pbmcgdHJhY2tpbmcgbnVtYmVyXG4gICAgICAgIGZvcm1lckFycmF5UG9zaXRpb25UcmFja2VyID0gcDtcbiAgICAgICAgbGlzdEFycmF5Q3VycmVudFtwXS5zYXZlRm9ybWVyQXJyYXlQb3NpdGlvbigpOyAvL3NhdmVzIGN1cnJlbnQgcG9zaXRpb24gdGhyb3VnaCBwcm90b3R5cGVcbiAgICAgICAgXG4gICAgfSAgICBcbn1cblxuXG4vL1RoaXMgY29udHJvbHMgdGhlIGJ1aWx0IGluIGFkZGluZyBvZiB0YXNrcyBieSB1c2VyIGlucHV0IGxvY2F0ZWQgb24gdGhlIHRhc2tzIGRpc3BsYXkgcG9wdXAgLS1JSUZFLy9cbi8vTG9jYXRlZCBoZXJlIGJlY2F1c2Ugb2YgcGluTGlzdC8vXG5mdW5jdGlvbiBhZGRUYXNrVG9MaXN0ICgpIHtcbiAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG4gICAgbGV0IHVzZXJUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclRhc2tJbnB1dCcpO1xuICAgIC8vd291bGQgdGhpcyBiZSBjbGVhbmVyIGp1c3QgcHV0IGludG8gdG8gZXZlbnQgbGlzdGVuZXIgcmF0aGVyIHRoYW4gY2FsbGluZyBmdW5jdGlvbiBhdCBlbmQ/Ly9cbiAgICBmdW5jdGlvbiBhZGRUYXNrV2hlbkNsaWNrQnRuICgpe1xuICAgICAgLy8gIGxldCB1c2VyVGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJUYXNrSW5wdXQnKTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSW5wdXRWYWx1ZSA9IHVzZXJUYXNrSW5wdXQudmFsdWVcbiAgICAgICAgLy9JZiBzdGF0ZW1lbnQgY2F0Y2hlcyBlZGdlIGNhc2Ugb2Ygbm90IGhhdmluZyBhIHZhbHVlIG9yIG9ubHkgcHV0dGluZyBpbiBzcGFjZXMvL1xuICAgICAgICAgICAgaWYodXNlclRhc2tJbnB1dFZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXRWYWx1ZSA9ICcnXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9jcmVhdGVzIG5ldyBhZGR0YXNrLCBwdXNoZXMgaXQgdG8gY3VycmVudCBhcnJheSwgcGlucyBpdCB0byBib2FyZCwgZXJhc2VzIHdoYXQgaXMgdHlwZWQvL1xuICAgICAgICAgICAgbGV0IHVzZXJBZGRUYXNrID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICdTZXQgVGltZScsXG4gICAgICAgICAgICAgICAgJ0hpZ2gnLFxuICAgICAgICAgICAgICAgICdpbmNvbXBsZXRlJ1xuICAgICAgICAgICAgKVxuICAgICAgICBuZXdseUFkZGVkVGFzayA9IHVzZXJBZGRUYXNrOyAvL2Fzc2lnbnMgdmFsdWUgc28gdGhhdCBpdCBtYXkgYmUgZGlzcGxheWVkIHRvIGluZm8gcGFuZWwvL1xuICAgICAgICBsaXN0QXJyYXlDdXJyZW50LnB1c2godXNlckFkZFRhc2spO1xuICAgICAgICBhc3NpZ25Gb3JtZXJQb3NpdGlvbnMoKTtcbiAgICAgICAgcGluTGlzdCgpO1xuICAgICAgICAvL2RpcyBkaXNwbGF5cyBpbmZvIGJveCB3aGVuIGhpdHRpbmcgdGhlICsgYnV0dG9uXG4gICAgICAgIGlmKGxpc3RBcnJheUN1cnJlbnQubGVuZ3RoID4gMCl7IC8vSWYgdGhlIG5ldyBsaXN0IGlzIGVtcHR5LCBtYWtlIGl0IHNob3cgdXAsIHRha2UgZXZlcnl0aGluZyBvZmYgaXQsIHRoZW4gcGluIHRoZSBuZXdseSBhZGRlZCB0YXNrXG4gICAgICAgICAgICB0YXNrSW5mb1BvcG91dEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgdGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQoKTtcbiAgICAgICAgICAgZGlzcGxheVRhc2tEZXRhaWxzKCk7XG4gICAgICAgICAgIG5ld2x5QWRkZWRUYXNrID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGlzdEFycmF5Q3VycmVudC5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICB0YXNrSW5mb1BvcG91dEJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIHVzZXJUYXNrSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrV2hlbkNsaWNrQnRuKTtcbiAgICAvL2VudGVyIGtleSBmdW5jdGlvbmFsaXR5Ly9cbiAgICB1c2VyVGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICB9O1xuXG5cblxuZnVuY3Rpb24gZWFzeUV4cG9ydCgpe1xuICAgIG9wZW5MaXN0cygpO1xuICAgIC8vcGluTGlzdEF0TG9hZFxuICAgIGFzc2lnbkJ1dHRvbnMoKTtcbiAgICBhZGRUYXNrVG9MaXN0KCk7XG59XG5cblxuZXhwb3J0IHtsaXN0QXJyYXksIGJ0bkFycmF5LCBsaXN0QXJyYXlDdXJyZW50LCB0YXNrRGlzcGxheUFycmF5LCBsaXN0QXJyYXlDdXJyZW50TmFtZSwgXG4gICAgICAgIGN1cnJlbnRDcm9zc1Rhc2tCdXR0b25zQXJyYXksIGRlbGV0ZVRhc2tCdXR0b25zQXJyYXksIG5ld2x5QWRkZWRUYXNrLCBmaXJzdExpc3RPcGVuRmxhZ31cblxuZXhwb3J0IHtvcGVuTGlzdHMsIGVhc3lFeHBvcnQsYXNzaWduQnV0dG9ucywgcGluTGlzdH0gIiwiaW1wb3J0IHsgaXNUaGlzU2Vjb25kIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgYWRkVGFzayBmcm9tIFwiLi9hZGRUYXNrXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXlDdXJyZW50LCBwaW5MaXN0IH0gZnJvbSBcIi4vbWVudURpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhcnJhbmdlVGFza3MoKXtcbiAgICBsZXQgYWxsVGFza0ZsZXhDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tGbGV4Jyk7XG4gICAgbGV0IGNsaWNrZWRUYXNrXG4gICAgbGV0IGRyb3Bab25lXG4gICAgbGV0IGRyYWdnYWJsZUVsZW1lbnRcbiAgICBsZXQgaWRcbiAgICBsZXQgaW5kZXhPZkRyb3BQb3NpdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza0ZsZXhDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgICBhbGxUYXNrRmxleENvbnRhaW5lcnNbaV0uZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgYWxsVGFza0ZsZXhDb250YWluZXJzW2ldLm9uZHJhZ3N0YXJ0ID0gdGFza0lzQ2xpY2tlZDtcbiAgICAgICAgYWxsVGFza0ZsZXhDb250YWluZXJzW2ldLm9uZHJhZ292ZXIgPSBvbkRyYWdPdmVyO1xuICAgICAgICBhbGxUYXNrRmxleENvbnRhaW5lcnNbaV0ub25kcm9wID0gb25Ecm9wO1xuICAgICAgIC8vIGFsbFRhc2tGbGV4Q29udGFpbmVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdvbmRyYWdzdGFydCcsIHRhc2tJc0NsaWNrZWQpO1xuICAgICAgICAvL2FsbFRhc2tGbGV4Q29udGFpbmVyc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZHJvcCk7XG4gICAgfVxuICAgIC8vR2V0IHRoZSBJRCBvZiB0aGUgdGhpbmcgY2xpY2tlZFxuICAgIGZ1bmN0aW9uIHRhc2tJc0NsaWNrZWQoZXZlbnQpe1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZClcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKSlcbiAgICB9XG4gICAgLy9UaGlzIGFsbG93cyB0aGUgZHJhZ2dpbmcgdG8gYWN0dWFsbHkgdGFrZSBwbGFjZS8vXG4gICAgZnVuY3Rpb24gb25EcmFnT3ZlcihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJIGFtIGZpcmluZycpXG4gICAgICAgIC8vZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKGNsaWNrZWRUYXNrKTtcbiAgICB9XG4gICAgLy9PbiB0aGUgZHJvcCwgZ2V0IHRoZSBpZCwgY2hhbmdlIHRoZSBwb3NpdGlvbnMsIGFuZCBwaW4gaXQvL1xuICAgIGZ1bmN0aW9uIG9uRHJvcChldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlkID0gZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RyYWdnYWJsZUVsZW1lbnQnKVxuICAgICAgICBjb25zb2xlLmxvZyhkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgZHJvcFpvbmUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcFpvbmUnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZHJvcFpvbmUpO1xuICAgICAgICBjaGFuZ2VBcnJheVBvc2l0b25zV2hlbkRyYWdnZWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgYXJyYXkgY3VycmVudCBhZnRlciBkcmFnJylcbiAgICAgICAgY29uc29sZS5sb2cobGlzdEFycmF5Q3VycmVudCk7XG4gICAgICAgIHBpbkxpc3QoKTtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgIFxuICAgIC8vT24gdGhlIGRyb3AgaXQgZmluZHMgdGhlIGluZGV4ZXMgb2YgdGhlIGRyYWdnZWUgYW5kIHRoZSBkcm9wIHBvc2l0aW9uLCByZW1vdmVzIGFuZCBhZGRzIHRvIHRoZSBsaXN0IGFycmF5IGFjY29yZGluZ2x5XG4gICAgLy90aGVuIGNhbGxzIHRoZSBwcm90b3R5cGUgYmVsb3cgdG8gY2hhbmdlIHRoZWlyIGZvcm1lciBwb3NpdGlvbiBzbyB0aGV5IGFyZW4ndCByZW9yZGVyZWQgYnkgcGlubGlzdC8vXG4gICAgLy9GdW5jdGlvbnMgb2ZmIG9mIElEJ3Mgc2V0IHdoZW4gb3JpZ2luYWxseSBwaW5uaW5nLiBUaGUgdGFza3MgYW5kIHRhc2tDb250YWluZXJzIGhhdmUgdGhlIHNhbWUgSURcbiAgICAvL1doaWNoIEkgZmVlbCBsaWtlIGlzIG1lc3N5IGJ1dCB3b3JrcyB3ZWxsIGVub3VnaCBmb3IgdGhpcy5cbiAgICBmdW5jdGlvbiBjaGFuZ2VBcnJheVBvc2l0b25zV2hlbkRyYWdnZWQoKXtcbiAgICAgICAgaW5kZXhPZkRyb3BQb3NpdGlvbiA9IGRyb3Bab25lLmlkO1xuICAgICAgICBsZXQgaW5kZXhPZkhlbGRJdGVtID0gaWQ7IC8vbWF5YmUgdW5uZWNlc3NhcnkgYnV0IGVhc2llciB0byByZWFkIGZvciBtZTtcbiAgICAgICAgbGV0IGhlbGRJdGVtQWN0dWFsT2JqZWN0ID0gbGlzdEFycmF5Q3VycmVudFtpbmRleE9mSGVsZEl0ZW1dO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGVsZEl0ZW1BY3R1YWxPYmplY3QpXG4gICAgICAgIGxpc3RBcnJheUN1cnJlbnQuc3BsaWNlKGluZGV4T2ZIZWxkSXRlbSwxKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdEFycmF5Q3VycmVudCk7XG4gICAgICAgIGxpc3RBcnJheUN1cnJlbnQuc3BsaWNlKGluZGV4T2ZEcm9wUG9zaXRpb24sMCxoZWxkSXRlbUFjdHVhbE9iamVjdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheUN1cnJlbnQpO1xuICAgICAgICBoZWxkSXRlbUFjdHVhbE9iamVjdC5jaGFuZ2VIZWxkUG9zaXRpb24oKTtcbiAgICAgICAgaW5kZXhPZkRyb3BQb3NpdGlvbiA9ICcnXG4gICAgfVxuICAgIFxuICAgIGFkZFRhc2sucHJvdG90eXBlLmNoYW5nZUhlbGRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpe1xuICAgICAgICB0aGlzLmZvcm1lckFycmF5UG9zaXRpb24gPSBpbmRleE9mRHJvcFBvc2l0aW9uO1xuICAgIH1cblxuICAgIFxufSIsImltcG9ydCAnLi9za2VsZXRvbi5jc3MnXG5cbi8vdGhpcyBmdW5jdGlvbiBkZWZpbmVzIHRoZSBiYXNpYyBsYXlvdXQgZm9yIHRoZSB3ZWJwYWdlLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZWxldG9uICgpe1xuICAgIGxldCBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhc2UuaWQgPSAnYmFzZSc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFzZSk7XG5cblxuLy9MZWZ0IGhhbmQgbWVudSBiYXIvL1xuICAgIGxldCBtZW51QmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vVGhpcyBpcyB0aGUgbWVudS9uYXYgYmFyIG9uIGxlZnQgc2lkZSBvZiBzY3JlZW5cbiAgICAgICAgbWVudUJhckNvbnRhaW5lci5pZCA9ICdtZW51QmFyQ29udGFpbmVyJztcblxuICAgICAgICBsZXQgdG9kb0xpc3RMb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvTGlzdExvZ29Db250YWluZXIuaWQgPSAndG9kb0xpc3RMb2dvQ29udGFpbmVyJ1xuICAgICAgICAgICAgbWVudUJhckNvbnRhaW5lci5hcHBlbmQodG9kb0xpc3RMb2dvQ29udGFpbmVyKVxuICAgICAgICAgICAgLyogQWRkIGEgbGlzdCBmcm9tIG9uZSBidXR0b25cbiAgICAgICAgICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgbmV3VG9kby5pZCA9ICduZXdUb2RvJztcbiAgICAgICAgICAgICAgICBuZXdUb2RvLmlubmVySFRNTCA9ICdOZXcgVGFzaydcbiAgICAgICAgICAgICAgICB0b2RvTGlzdExvZ29Db250YWluZXIuYXBwZW5kKG5ld1RvZG8pO1xuICAgIFxuXG4gICAgbGV0IHRvZG9MaXN0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdExvZ28uaWQgPSAndG9kb0xpc3RMb2dvJztcbiAgICAgICAgdG9kb0xpc3RMb2dvLmlubmVySFRNTCA9ICdUb2RvIExpc3RzJ1xuICAgICAgICB0b2RvTGlzdExvZ29Db250YWluZXIuYXBwZW5kKHRvZG9MaXN0TG9nbyk7XG4qL1xuICAgICAgICBsZXQgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuaWQgPSAnb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyJztcbiAgICAgICAgICAgIG1lbnVCYXJDb250YWluZXIuYXBwZW5kKG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBsaXN0SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGlzdEhlYWRlckNvbnRhaW5lci5pZCA9ICdsaXN0SGVhZGVyQ29udGFpbmVyJztcbiAgICAgICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKGxpc3RIZWFkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGlzdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpc3RzSGVhZGVyLmNsYXNzTGlzdCA9ICdsaXN0SGVhZGVycydcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpc3RzSGVhZGVyLmlubmVySFRNTCA9ICdMaXN0cydcbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlYWRlckNvbnRhaW5lci5hcHBlbmQoY3VycmVudExpc3RzSGVhZGVyKTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0QnRuLmlkID0gJ2FkZExpc3RCdG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0QnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0QnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlYWRlckNvbnRhaW5lci5hcHBlbmQoYWRkTGlzdEJ0bik7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIuaWQgPSAnY3VycmVudExpc3RzRmxleENvbnRhaW5lcidcbiAgICAgICAgICAgIG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lci5hcHBlbmQoY3VycmVudExpc3RzRmxleENvbnRhaW5lcik7XG4gICAgICAgICAgICAvL2hhcmRjb2RlZCBMaXN0RmxleENvbnRhaW5lcnMgdGhhdCBhcmUgcmVwbGFjZWQgYWZ0ZXIgZmlyc3QgbmV3IGxpc3QgY3JlYXRlZC8vXG4gICAgICAgICAgICBsZXQgbGlzdEZsZXhDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQ3JlYXRlZCBzbyB0aGF0IHggYnV0dG9uIGZvciBsaXN0cyBjYW4gYmUgc3R5bGVkLy9cbiAgICAgICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lcjEuY2xhc3NMaXN0LmFkZCgnbGlzdEZsZXhDb250YWluZXInKTtcbiAgICAgICAgICAgICBsZXQgbGlzdEZsZXhDb250YWluZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQ3JlYXRlZCBzbyB0aGF0IHggYnV0dG9uIGZvciBsaXN0cyBjYW4gYmUgc3R5bGVkLy9cbiAgICAgICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnbGlzdEZsZXhDb250YWluZXInKTtcblxuICAgICAgICAgICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5jbGFzc0xpc3QgPSAnbGlzdCc7XG4gICAgICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LmlubmVySFRNTCA9ICdHcm9jZXJpZXMnXG4gICAgICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LmlkID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RGbGV4Q29udGFpbmVyMS5hcHBlbmQoZ3JvY2VyeUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIuYXBwZW5kKGxpc3RGbGV4Q29udGFpbmVyMSlcblxuICAgICAgICAgICAgICAgIGxldCBob3VzZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgaG91c2VMaXN0LmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICAgICAgaG91c2VMaXN0LmlubmVySFRNTCA9ICdXZWVrbHkgaG91c2V3b3JrJ1xuICAgICAgICAgICAgICAgICAgICBob3VzZUxpc3QuaWQgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgIGhvdXNlTGlzdC5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgICAgIGxpc3RGbGV4Q29udGFpbmVyMi5hcHBlbmQoaG91c2VMaXN0KVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyLmFwcGVuZChsaXN0RmxleENvbnRhaW5lcjIpXG4gICAgICAgICAgICBcbi8vUmlnaHQgaGFuZCBwb3B1cCBmb3IgdGFza3MgYW5kIGludGVyYWN0aW9ucyBpbmNsdWRlcyBwb3BvdXQgYm94ZXMvL1xuICAgIGxldCB0YXNrQW5kTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5pZCA9ICd0YXNrQW5kTGlzdENvbnRhaW5lcic7XG5cbiAgICAvL1Rhc2sgcG9wb3V0IGJveC8vXG4gICAgbGV0IHRhc2tQb3BvdXRCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1BvcG91dEJveENvbnRhaW5lci5pZCA9ICd0YXNrUG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgdGFza0FuZExpc3RDb250YWluZXIuYXBwZW5kKHRhc2tQb3BvdXRCb3hDb250YWluZXIpXG4gICAgICAgIGxldCB0YXNrUG9wb3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmlkID0gJ3Rhc2tQb3BvdXRCb3gnO1xuICAgICAgICAgICAgdGFza1BvcG91dEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wb3V0Qm94JylcbiAgICAgICAgICAgIHRhc2tQb3BvdXRCb3hDb250YWluZXIuYXBwZW5kKHRhc2tQb3BvdXRCb3gpO1xuXG4gICAgICAgICAgICBsZXQgbGlzdERpc3BsYXlUYXNrYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbGlzdERpc3BsYXlUYXNrYmFyLmlkID0gJ2xpc3REaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgbGlzdERpc3BsYXlUYXNrYmFyLmNsYXNzTGlzdCA9ICdsaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guYXBwZW5kKGxpc3REaXNwbGF5VGFza2Jhcik7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZURpc3BsYXkuaWQgPSAnbGlzdE5hbWVEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgbGlzdE5hbWVEaXNwbGF5LmNsYXNzTGlzdCA9ICdsaXN0SGVhZGVycyc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQobGlzdE5hbWVEaXNwbGF5KTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEV4aXRCdG4uaWQgPSAnbGlzdEV4aXRCdG4nO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdsaXN0RXhpdEJ0bicpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RXhpdEJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNjsnXG4gICAgICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQobGlzdEV4aXRCdG4pO1xuXG4gICAgICAgICAgICBsZXQgdGFza0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUNvbnRhaW5lci5pZCA9ICd0YXNrRGlzcGxheUNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZCh0YXNrRGlzcGxheUNvbnRhaW5lcilcblxuICAgICAgICAgICAgLy93aGVyZSB1c2VyIHR5cGVzIG5ldyB0YXNrcyBpbnRvIHBvcHVwL1xuICAgICAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuaWQgPSAnaW5wdXRDb250YWluZXInO1xuICAgICAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guYXBwZW5kKGlucHV0Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIGxldCB1c2VyVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0lucHV0Lm1heExlbmd0aCA9IDgwO1xuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0lucHV0LnBsYWNlaG9sZGVyID0gJ0FkZCBhIHRhc2snXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXQuaWQgPSAndXNlclRhc2tJbnB1dCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZCh1c2VyVGFza0lucHV0KTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmlkID0gJ2FkZFRhc2tCdG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGFkZFRhc2tCdG4pO1xuXG5cbi8vVGFzayBpbmZvIHJpZ2h0IG5leHQgdG8gdGFzayBwb3BvdXQgYm94Ly9cbmxldCB0YXNrSW5mb1BvcG91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbmZvUG9wb3V0Q29udGFpbmVyLmlkID0gJ3Rhc2tJbmZvUG9wb3V0Q29udGFpbmVyJztcbiAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5hcHBlbmQodGFza0luZm9Qb3BvdXRDb250YWluZXIpXG5sZXQgdGFza0luZm9Qb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5mb1BvcG91dEJveC5pZCA9ICd0YXNrSW5mb1BvcG91dEJveCc7XG4gICAgdGFza0luZm9Qb3BvdXRCb3guY2xhc3NMaXN0LmFkZCgndGFza1BvcG91dEJveCcpXG4gICAgdGFza0luZm9Qb3BvdXRDb250YWluZXIuYXBwZW5kKHRhc2tJbmZvUG9wb3V0Qm94KTtcbi8vdGl0bGUgZGlzcGxheVxuICAgIGxldCB0YXNrVGl0bGVEaXNwbGF5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guaWQgPSAndGFza1RpdGxlRGlzcGxheUJveCc7XG4gICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guYXBwZW5kKHRhc2tUaXRsZURpc3BsYXlCb3gpO1xuICAgICAgICBsZXQgdGFza1RpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheS5pZCA9ICd0YXNrVGl0bGVEaXNwbGF5JztcbiAgICAgICAgICAgIHRhc2tUaXRsZURpc3BsYXkuY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guYXBwZW5kKHRhc2tUaXRsZURpc3BsYXkpO1xuXG4gICAgLy9hZGRMaXN0IHBvcG91dCBib3ggLSBjcmVhdGVkIHNvIHRoYXQgaXQgZGlzYWxsb3dzIGNsaWNraW5nIG91dHNpZGUgdGhlIGJveC8vXG4gICAgbGV0IGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5pZCA9ICdhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcG91dEJveENvbnRhaW5lcilcbiAgICBsZXQgYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIuaWQgPSAnYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXInO1xuICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLmFwcGVuZChhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lcik7XG4gICAgbGV0IGFkZExpc3RQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3guaWQgPSAnYWRkTGlzdFBvcG91dEJveCc7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcG91dEJveCk7XG5cbiAgICAgICAgbGV0IGFkZExpc3REaXNwbGF5VGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5pZCA9ICdhZGRMaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5jbGFzc0xpc3QgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmFwcGVuZChhZGRMaXN0RGlzcGxheVRhc2tiYXIpO1xuICAgICAgICAgICAgbGV0IGFkZExpc3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0TmFtZURpc3BsYXkuaWQgPSAnYWRkTGlzdE5hbWVEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXJzJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQoYWRkTGlzdE5hbWVEaXNwbGF5KTtcbiAgICAgICAgICAgIGxldCBhZGRMaXN0RXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RXhpdEJ0bi5pZCA9ICdhZGRMaXN0RXhpdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RFeGl0QnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RXhpdEJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNjsnXG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQoYWRkTGlzdEV4aXRCdG4pO1xuICAgICAgICAvL2FkZExpc3QgaW5wdXQgYm94Ly9cbiAgICAgICAgbGV0IGFkZExpc3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5pZCA9ICdhZGRMaXN0SW5wdXRDb250YWluZXInO1xuICAgICAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3guYXBwZW5kKGFkZExpc3RJbnB1dENvbnRhaW5lcilcbiAgICAgICAgXG4gICAgYmFzZS5hcHBlbmQobWVudUJhckNvbnRhaW5lcik7XG4gICAgYmFzZS5hcHBlbmQodGFza0FuZExpc3RDb250YWluZXIpO1xufTsiLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5LCBidG5BcnJheSwgbGlzdEFycmF5Q3VycmVudCB9IGZyb20gXCIuL21lbnVEaXNwbGF5XCI7XG5cblxuXG5sZXQgcGFyc2VkTGlzdEFycmF5Q3VycmVudFxubGV0IHBhcnNlZExpc3RBcnJheVxubGV0IGFzc2lnbmVkTGlzdEFycmF5Q3VycmVudFxubGV0IHJlb2JqZWN0ZWRMaXN0QXJyYXlDdXJyZW50ID0gW11cbmxldCByZW9iamVjdGVkTGlzdEFycmF5ID0gW11cbmxldCBuZXdCZWF1dGlmdWxMaXN0QXJyYXkgPSBbXVxuLy9jYWxsZWQgaW4gY2xpY2tCdG5BZGRUb0J0bkFycmF5XG5mdW5jdGlvbiBzdG9yZUJ1dHRvbnMoKXtcbiAgICBsZXQgYXJyYXlPZkJ0bkhUTUwgPSBbXTtcbiAgICAvL25lZWQgdG8gZ2V0IHRoZSBpbm5lckhUTUwgb2YgdGhlIGJ1dHRvbnMsIGFzIHRoZSBidXR0b25zIHRoZW1zZWx2ZXMgYXJlIG1lYW5pbmdsZXNzIGNvbnZlcnRlZCB0byBzdHJpbmdzLy9cbiAgICBmb3IobGV0IGk9MDsgaTxidG5BcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IHRleHRPZkJ0biA9IGJ0bkFycmF5W2ldLmlubmVySFRNTDtcbiAgICAgICAgYXJyYXlPZkJ0bkhUTUwucHVzaCh0ZXh0T2ZCdG4pO1xuICAgIH1cbiAgICBjb25zdCBidG5BcnJheU9iaiA9IEpTT04uc3RyaW5naWZ5KGFycmF5T2ZCdG5IVE1MKTsgLy9zdHJpbmdpZnkgdGhlIGFycmF5XG4gICAgLy9jb25zb2xlLmxvZygnbGlzdEFycmF5Q3VycmVudE9iaicpXG4gICAgLy9jb25zb2xlLmxvZyhsaXN0QXJyYXlDdXJyZW50T2JqKTtcbiAgICBjb25zb2xlLmxvZygnYnRuQXJyYXlPYmonKTtcbiAgICBjb25zb2xlLmxvZyhidG5BcnJheU9iaik7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnRuQXJyYXknLCBidG5BcnJheU9iaik7IC8vc2V0IHRoZSBrZXkgdG8gdGhlIGFycmF5ICYgc2F2ZVxuXG4gICAgbGV0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdidG5BcnJheScpOyAvL3JlY2FsbFxuICAgIGxldCBwYXJzZWRCdG5BcnJheSA9IEpTT04ucGFyc2Uoc3RyKTsgLy9wYXJzZSBiYWNrIHRvIG9iamVjdFxuICAgIGNvbnNvbGUubG9nKCdwYXJzZUJ0bicpXG4gICAgY29uc29sZS5sb2cocGFyc2VkQnRuQXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKGJ0bkFycmF5KVxuICAgIFxuICAgIGxldCBzdGFydGluZ0J0bkFycmF5TGVuZ3RoID0gYnRuQXJyYXkubGVuZ3RoOyAvL25lZWQgdG8gZGVmaW5lIGxlbmd0aCBoZXJlIGJlY2F1c2UgdGhlIGJ0bkFycmF5IGxlbmd0aCB3aWxsIGNoYW5nZSBhcyBpdCBpcyBzaGlmdGVkIG91dFxuICAgIGZvcihsZXQgaT0wO2k8c3RhcnRpbmdCdG5BcnJheUxlbmd0aDtpKyspe1xuICAgICAgICBidG5BcnJheS5zaGlmdCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhidG5BcnJheSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2J0bkFycmF5JylcbiAgICBjb25zb2xlLmxvZyhidG5BcnJheSk7XG4gICAgLy9hbHRlciB0aGUgYnRuQXJyYXkgaXRzZWxmIHRvIHJlLWFkZCB0aGUgSFRNTFxuICAgIGZvcihsZXQgaT0wO2k8cGFyc2VkQnRuQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IHBhcnNlZEJ0bkFycmF5W2ldO1xuICAgICAgICBidG5BcnJheS5wdXNoKGJ0bik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdidG5BcnJheScpXG4gICAgY29uc29sZS5sb2coYnRuQXJyYXkpXG59XG5cbi8vZm9yIGxvYWRpbmcgb24gcGFnZSBzdGFydC8vXG5mdW5jdGlvbiBnZXRCdXR0b25zKCl7XG4gICAgbGV0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdidG5BcnJheScpOyAvL3JlY2FsbFxuICAgIGNvbnNvbGUubG9nKHN0cilcbiAgICBsZXQgcGFyc2VkQnRuQXJyYXkgPSBKU09OLnBhcnNlKHN0cik7IC8vcGFyc2UgYmFjayB0byBvYmplY3RcbiAgICBmb3IobGV0IGk9MDtpPHBhcnNlZEJ0bkFycmF5Lmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBwYXJzZWRCdG5BcnJheVtpXTtcbiAgICAgICAgYnRuQXJyYXkucHVzaChidG4pO1xuICAgIH1cbn1cblxuLy9maXJzdEJ0blxuLypcbmZ1bmN0aW9uIGZpcnN0QnRuKCl7XG4gICAgbGV0IGZpcnN0TG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdExvYWQnKTtcbiAgICBpZihmaXJzdExvYWQgPT0gZmFsc2Upe1xuICAgICAgICBnZXRCdXR0b25zO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgZmFsc2UpXG4gICAgICAgIGJ0bkFycmF5ID0gW2dyb2NlcnlCdG4sIGhvdXNlQnRuLF07XG4gICAgfVxufVxuKi9cblxuXG5cbi8vc2F2ZXMgdGhlIENVUlJFTlRMWSBTRUxFQ1RFRCBMSVNUIFxuZnVuY3Rpb24gc3RvcmVsaXN0QXJyYXkoKXtcbiAgICBjb25zdCBsaXN0QXJyYXlDdXJyZW50T2JqID0gSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5Q3VycmVudClcbiAgICBjb25zdCBsaXN0QXJyYXlPYmogPSBKU09OLnN0cmluZ2lmeShsaXN0QXJyYXkpXG4gICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEFycmF5Q3VycmVudCcsIGxpc3RBcnJheUN1cnJlbnRPYmopO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0QXJyYXknLCBsaXN0QXJyYXlPYmopO1xufVxuXG5mdW5jdGlvbiBwcm9kdWNlTGlzdEFycmF5KCl7XG4gICAgbGV0IHN0cjIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEFycmF5Jyk7XG4gICAgcGFyc2VkTGlzdEFycmF5ID0gSlNPTi5wYXJzZShzdHIyKTtcbiAgICBsZXQgcGFyc2VkTGlzdEFycmF5TGVuZ3RoID0gcGFyc2VkTGlzdEFycmF5Lmxlbmd0aDtcbiAgIC8vIGxldCBzdGFydGluZ0xpc3RBcnJheUxlbmd0aCA9IGxpc3RBcnJheS5sZW5ndGg7IC8vbmVlZCB0byBkZWZpbmUgbGVuZ3RoIGhlcmUgYmVjYXVzZSB0aGUgYnRuQXJyYXkgbGVuZ3RoIHdpbGwgY2hhbmdlIGFzIGl0IGlzIHNoaWZ0ZWQgb3V0XG4gICAgXG4gICAgZm9yKGxldCBpPTA7aTxwYXJzZWRMaXN0QXJyYXlMZW5ndGg7aSsrKXsgLy9mb3IgdGhlIGxlbmd0aCBvZiB0aGUgd2hvbGUgb2YgcGFyc2VkIGxpc3QgYXJyYXlcbiAgICAgICBsZXQgbmV3SW50ZXJpb3JBcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IGkyPTA7aTI8cGFyc2VkTGlzdEFycmF5W2ldLmxlbmd0aDtpMisrKXsgLy9mb3IgdGhlIGxlbmd0aCBvZiB0aGUgaSBzZWxlY3RlZCBpdGVtIGluIHBhcnNlZCBsaXN0IGFycmF5XG4gICAgICAgICAgICBsZXQgY3VycmVudEludGVyaW9yQXJyYXkgPSBwYXJzZWRMaXN0QXJyYXlbaV0gLy9pZGVudGlmeSB0aGUgY3VycmVudCBvYmplY3RcbiAgICAgICAgICAgIGxldCBjdXJyZW50T2JqZWN0ID0gY3VycmVudEludGVyaW9yQXJyYXlbaTJdO1xuICAgICAgICAgICAgbGV0IHJlZm9ybWVkT2JqZWN0ID0gbmV3IGFkZFRhc2soY3VycmVudE9iamVjdC50YXNrTmFtZSwgY3VycmVudE9iamVjdC5kZXNjcmlwdGlvbiwgY3VycmVudE9iamVjdC5kdWVEYXRlLCBjdXJyZW50T2JqZWN0LnByaW9yaXR5LCBjdXJyZW50T2JqZWN0LmNvbXBsZXRlU3RhdHVzLCBjdXJyZW50T2JqZWN0LmRlbGV0ZUVsaWdpYmxlLCBjdXJyZW50T2JqZWN0LmZvcm1lckFycmF5UG9zaXRpb24sIGN1cnJlbnRPYmplY3QuY3VycmVudEFycmF5UG9zaXRpb24pOyAvL01ha2UgaXQgaW50byBhbiBhZGRUYXNrXG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0ID0gcmVmb3JtZWRPYmplY3RcbiAgICAgICAgICAgIG5ld0ludGVyaW9yQXJyYXkucHVzaChyZWZvcm1lZE9iamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgbGlzdEFycmF5LnB1c2gobmV3SW50ZXJpb3JBcnJheSlcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygncGFyc2VkTGlzdEFycmF5Q3VycmVudCcpXG4gICAgY29uc29sZS5sb2cocGFyc2VkTGlzdEFycmF5Q3VycmVudCk7XG59XG5cblxuZXhwb3J0IHtzdG9yZUJ1dHRvbnMsIGdldEJ1dHRvbnMsIHN0b3JlbGlzdEFycmF5LCBwcm9kdWNlTGlzdEFycmF5LCBwYXJzZWRMaXN0QXJyYXlDdXJyZW50LCBwYXJzZWRMaXN0QXJyYXksIG5ld0JlYXV0aWZ1bExpc3RBcnJheX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNrZWxldG9uIGZyb20gJy4vc2tlbGV0b24nXG5pbXBvcnQge2Vhc3lFeHBvcnR9IGZyb20gJy4vbWVudURpc3BsYXknXG4vL2ltcG9ydCBhc3NpZ25CdXR0b25zIGZyb20gJy4vYXNzaWduQnV0dG9ucyc7XG5pbXBvcnQgYWRkTmV3TGlzdCBmcm9tICcuL2FkZE5ld0xpc3QnO1xuaW1wb3J0IGNsb3NlUG9wdXBzIGZyb20gJy4vY2xvc2VQb3B1cHMnXG5pbXBvcnQge3N0b3JlQnV0dG9ucywgcGFyc2VkTGlzdEFycmF5Q3VycmVudH0gZnJvbSAnLi9zdG9yYWdlJztcbi8vaW1wb3J0IGRpc3BsYXlUYXNrRGV0YWlscyBmcm9tICcuL2Rpc3BsYXlUYXNrRGV0YWlscyc7XG5cblxuc2tlbGV0b24gKCk7XG5lYXN5RXhwb3J0KCk7XG4vL2Fzc2lnbkJ1dHRvbnMoKTtcbi8vZGlzcGxheVRhc2tEZXRhaWxzKCk7XG5hZGROZXdMaXN0KCk7XG5jbG9zZVBvcHVwcygpO1xuLy9zdG9yZUJ1dHRvbnMoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9