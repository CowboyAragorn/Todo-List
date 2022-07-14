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
                            _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArray.splice(i, 1);
                            //displayFlagFalseForDeletingLists(); //change the display flag to avoid an error if nothing is currently displayed//
                            (0,_displayTaskDetails__WEBPACK_IMPORTED_MODULE_1__.takeEverythingOffInfoBoard)();
                            (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeButtons)();
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
        (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeButtons)(); //saves the new button
        createNewButtons();
        (0,_menuDisplay__WEBPACK_IMPORTED_MODULE_2__.assignButtons)();

        //puts it in the list array
       
        let userListNewArray = [];
        userListNewArray.innerHTML = userListInputValue;
        _menuDisplay__WEBPACK_IMPORTED_MODULE_2__.listArray.push(userListNewArray);
        userListInput.value = '';
        addListPopoutBoxContainer.style.display = 'none';
        userListNewBtn.click(); //Clicks the new button, opening the new list//

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
            let descriptionDisplay = document.getElementById('descriptionDisplay');
            this.description = descriptionDisplay.value;
        }

        function saveDescription(){
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
    //taskPopoutBox.style.display = 'none'; //Defaults popup to invisible before a list is clicked
    //taskInfoPopoutBox.style.display = 'none';
    
    //Displays the addToList popup when clicked in menu
   
        //Preset lists//
            const mondayGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Oranges',
                'List for Week 4/4',
                'Set Time',
                'High'
            )
            const wedGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Pears',
                'List for Week 4/4',
                'Set Time',
                'Medium'
            )
            const fridayGrocery = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                'Grapes',
                'List for Week 4/4',
                'Set Time',
                'Low'
            )
            let groceryListArray = [mondayGrocery, wedGrocery, fridayGrocery,];
                groceryListArray.innerHTML = 'Groceries';

                const laundry = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    '1',
                    'List for Week 4/4',
                    'Set Time',
                    'High'
                )
                const laundry2 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    '2',
                    'List for Week 4/4',
                    'Set Time',
                    'High'
                )
                const laundry3 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    '3',
                    'List for Week 4/4',
                    'Set Time',
                    'High'
                )
                const laundry4 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    '4',
                    'List for Week 4/4',
                    'Set Time',
                    'High'
                )
                const laundry5 = new _addTask__WEBPACK_IMPORTED_MODULE_1__["default"](
                    '5',
                    'List for Week 4/4',
                    'Set Time',
                    'High'
                )
            let houseListArray = [laundry, laundry2, laundry3, laundry4, laundry5,];
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
                for(let i=0; i < btnArray.length;i++){
                    btnArray[i].classList.remove('selectedList') 
                }
                clickedBtn.classList.add('selectedList') //turns currently selected list blue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFNBQVMsWUFBWSxNQUFNLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxVQUFVLGtCQUFrQixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0saUJBQWlCLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxjQUFjLFNBQVMsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsd0JBQXdCLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxhQUFhLFNBQVMsWUFBWSxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxLQUFLLEtBQUssV0FBVyxhQUFhLGNBQWMsY0FBYyxZQUFZLFdBQVcsV0FBVyxhQUFhLGNBQWMsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FB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VDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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V0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsZUFBZSxtRUFBUztBQUN4QixTQUFTLHFFQUFlO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQjBDO0FBQ1c7QUFDSztBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ00sQ0FBQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNyRXVCOztBQUV2QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSxxRUFBcUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtpQztBQUNEO0FBQ3NDOzs7O0FBSXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUseURBQWUsQ0FBQztBQUNuQyx3QkFBd0Isa0RBQVE7QUFDaEM7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7O0FBRW5ELGdEQUFnRDtBQUNoRCwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLGdCQUFnQixrREFBUTtBQUN4QjtBQUNBLGlDQUFpQyx5REFBZSxFQUFFO0FBQ2xELGdCQUFnQix5QkFBeUI7QUFDekMsUUFBUSx3REFBYztBQUN0QixvQkFBb0Isa0RBQVE7QUFDNUI7QUFDQTtBQUNBLGdCQUFnQixrREFBUTtBQUN4QjtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQixrREFBUTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsMENBQTBDO0FBQzFDLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwrQ0FBK0MsMERBQWdCO0FBQy9ELHdDQUF3QyxtREFBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLGdCQUFnQix3QkFBd0IsTUFBTTtBQUM5QztBQUNBLHFCQUFxQiw2QkFBNkIsT0FBTztBQUN6RDtBQUNBO0FBQ0EscUNBQXFDLGdEQUFPLHVPQUF1TztBQUNuUjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ087QUFDeEM7QUFDc0M7QUFDQztBQUN3QjtBQUMvRDs7O0FBR0EscURBQVE7QUFDUix3REFBVTtBQUNWO0FBQ0E7QUFDQSx1REFBVTtBQUNWLHdEQUFXO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3NrZWxldG9uLmNzcz8zZWZjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkTmV3TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Nsb3NlUG9wdXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RlbGV0ZVRhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrRGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tZW51RGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9yZWFycmFuZ2VUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9za2VsZXRvbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNiYXNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRue1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qTGVmdCBoYW5kIG1lbnUgYmFyKi9cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHQgYmxhY2sgc29saWQ7XFxuICAgIFxcbn1cXG5cXG5cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICBcXG59XFxuLypsb2dvKi9cXG4vKlxcbiN0b2RvTGlzdExvZ29Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG4jdG9kb0xpc3RMb2dve1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuKi9cXG5cXG4jbGlzdEhlYWRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmxpc3RIZWFkZXJze1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuXFxufVxcblxcbiNvdmVyYWxsTGlzdE1lbnVDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5zZWxlY3RlZExpc3R7XFxuICAgIGNvbG9yOiM0MjY3QjI7XFxufVxcblxcbiNjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0RmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG5cXG4gICAgLmxpc3RCdG4sIC5lZGl0TGlzdEJ0bntcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgICAgLyogaGVpZ2h0OiA1JTtcXG4gKi8gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcblxcblxcblxcbi8qIHJpZ2h0IGhhbmQgdGFza3MgZGlzcGxheSBhbmQgaW50ZXJhY3Rpb25zIHBvcHVwKi9cXG4gICAgICAgICN0YXNrQW5kTGlzdENvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNS81MC9UaW55X0JhYmJsaW5nX0Jyb29rLmpwZy8yNTYwcHgtVGlueV9CYWJibGluZ19Ccm9vay5qcGcnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG5cXG5cXG4gICAgICAgICN0YXNrUG9wb3V0Qm94Q29udGFpbmVyLCAjdGFza0luZm9Qb3BvdXRDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Rhc2tQb3BvdXRCb3gsICN0YXNrSW5mb1BvcG91dEJveHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0RGlzcGxheVRhc2tiYXIsICN0YXNrVGl0bGVEaXNwbGF5Qm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAjbGlzdE5hbWVEaXNwbGF5LCAjdGFza1RpdGxlRGlzcGxheXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlOyAvKlJlYWxseSBvbmx5IGZvciBpdCBzb21lb25lIHR5cGVzIGFsbCBjYXBpdGFsIFEgb3Igc29tZXRoaW5nICovXFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAubGlzdEV4aXRCdG57XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB0O1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJwdDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGFza0Rpc3BsYXlDb250YWluZXIsICN0YXNrSW5mb0Rpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAvKnRhc2tGbGV4Q29udGFpbmVyKi9cXG4gICAgICAgIC50YXNrRmxleHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbi1sYXN0OiBsZWZ0O1xcbiAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFza0ZsZXg6aG92ZXJ7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBpbnNldDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgLnRhc2tDcm9zc0J0bntcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0LCBibGFjaywgc29saWQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2t7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgXFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICBcXG5cXG4gICAgICAgIC8qQ3Jvc3NvdXQgYWNoaWV2ZWQgd2l0aCBsaW5lYXIgZ3JhZGllbnQsIHNoYW1lbGVzc2x5IHRvb2sgdGhpcyovXFxuICAgICAgICAuY3Jvc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwKSBjYWxjKDUwJSAtIDFweCksIFxcbiAgICAgICAgICAgICAgICByZ2JhKDE5MiwxOTIsMTkyLDEpIGNhbGMoNTAlKSwgXFxuICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgY2FsYyg1MCUgKyAxcHgpXFxuICAgICAgICAgICAgICAgICk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3Jvc3NlZENvbG9yc3tcXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgIC5kZWxldGVUYXNrQnRuLCAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0bntcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2lucHV0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA0JTtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3VzZXJUYXNrSW5wdXR7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIHNvbGlkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjYWRkVGFza0J0bntcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0IGJsdWUgc29saWQ7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxuICAgICAgICB9XFxuXFxuLypJbmZvIGFuZCBEaXNwbGF5IEJveCovXFxuICAgICAgICAjdGFza0luZm9EaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIH1cXG4gICAgICAgICNkdWVEYXRlRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2NoYW5nZUR1ZURhdGVCdG57XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBwdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICNkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAjZGVzY3JpcHRpb25EaXNwbGF5LCAjZGVzY3JpcHRpb25EaXNwbGF5SW5wdXR7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgICAgICAgICB3aWR0aDo5OSU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTklO1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAuaW5mb1RpdGxle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG5cXG5cXG4vKkFkZCBMaXN0IHBvcG91dCBCb3gqL1xcbiNhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCAsIDAsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2FkZExpc3ROYW1lRGlzcGxheXtcXG4gICAgbWFyZ2luLWxlZnQ6IDVwdDtcXG4gICAgZmxleC1zaHJpbms6IDE7XFxuXFxuXFxufVxcbiNhZGRMaXN0RXhpdEJ0bntcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHQ7XFxuICAgIG1hcmdpbi10b3A6IDJwdDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxufVxcblxcbiNhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRMaXN0UG9wb3V0Qm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAzMDBwdDtcXG4gICAgaGVpZ2h0OiAxMDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qXFxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgICovXFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBnYXA6IDE1cHQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuI2FkZExpc3RJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN1c2VyTGlzdElucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jdXNlckxpc3RJbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAxcHQgYmxhY2sgc29saWQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5hZGROZXdMaXN0SW5wdXR7XFxuXFxufVxcbiNhZGRMaXN0UG9wdXBCdG4sICNhZGREYXRlUG9wb3V0QnRue1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxufVxcbiNhZGRMaXN0UG9wdXBCdG46aG92ZXIsICNhZGRUYXNrQnRuOmhvdmVyLCAjYWRkRGF0ZVBvcG91dEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcXG59XFxuXFxuI2NhbGVuZGFye1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTBwdDtcXG59XFxuXFxuLypFZGl0aW5nIExpc3QgTmFtZSBQb3B1cCovXFxuI2VkaXRMaXN0QnRuQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTglO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHQ7XFxuXFxufVxcbiNkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lciwgI3NhdmVFZGl0ZWRMaXN0QnRuRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2RlbGV0ZUxpc3RCdG4sICNzYXZlRWRpdGVkTGlzdEJ0bntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlbGV0ZUxpc3RCdG57XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkIGhzbCgzNDVkZWcgMTAwJSA0NyUpIDtcXG59XFxuI2RlbGV0ZUxpc3RCdG46aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IGhzbCgzNDVkZWcgMTAwJSA0NyUpO1xcbn1cXG5cXG4jc2F2ZUVkaXRlZExpc3RCdG57XFxuICAgIGJvcmRlcjogMXB0IHNvbGlkICM0MjY3QjI7XFxufVxcblxcbiNzYXZlRWRpdGVkTGlzdEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNjdCMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NrZWxldG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7Ozs7QUFJQSxxQkFBcUI7QUFDckI7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCOztBQUVqQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDRCQUE0Qjs7QUFFaEM7QUFDQSxPQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0NBY0M7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOzs7SUFHSTtRQUNJLGVB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N0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2Jhc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5idG57XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLypMZWZ0IGhhbmQgbWVudSBiYXIqL1xcbiNtZW51QmFyQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBib3JkZXItcmlnaHQ6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgXFxufVxcblxcblxcbiNtZW51QmFyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgIFxcbn1cXG4vKmxvZ28qL1xcbi8qXFxuI3RvZG9MaXN0TG9nb0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbiN0b2RvTGlzdExvZ297XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG4qL1xcblxcbiNsaXN0SGVhZGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4ubGlzdEhlYWRlcnN7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG5cXG59XFxuXFxuI292ZXJhbGxMaXN0TWVudUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnNlbGVjdGVkTGlzdHtcXG4gICAgY29sb3I6IzQyNjdCMjtcXG59XFxuXFxuI2N1cnJlbnRMaXN0c0ZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3RGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcblxcbiAgICAubGlzdEJ0biwgLmVkaXRMaXN0QnRue1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICAgICAvKiBoZWlnaHQ6IDUlO1xcbiAqLyAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB9XFxuXFxuXFxuXFxuLyogcmlnaHQgaGFuZCB0YXNrcyBkaXNwbGF5IGFuZCBpbnRlcmFjdGlvbnMgcG9wdXAqL1xcbiAgICAgICAgI3Rhc2tBbmRMaXN0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi81LzUwL1RpbnlfQmFiYmxpbmdfQnJvb2suanBnLzI1NjBweC1UaW55X0JhYmJsaW5nX0Jyb29rLmpwZycpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcblxcblxcbiAgICAgICAgI3Rhc2tQb3BvdXRCb3hDb250YWluZXIsICN0YXNrSW5mb1BvcG91dENvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgICAgICB3aWR0aDogMzAwcHQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTs7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGFza1BvcG91dEJveCwgI3Rhc2tJbmZvUG9wb3V0Qm94e1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0JTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmxpc3REaXNwbGF5VGFza2JhciwgI3Rhc2tUaXRsZURpc3BsYXlCb3gge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICNsaXN0TmFtZURpc3BsYXksICN0YXNrVGl0bGVEaXNwbGF5e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7IC8qUmVhbGx5IG9ubHkgZm9yIGl0IHNvbWVvbmUgdHlwZXMgYWxsIGNhcGl0YWwgUSBvciBzb21ldGhpbmcgKi9cXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgIC5saXN0RXhpdEJ0bntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHQ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0YXNrRGlzcGxheUNvbnRhaW5lciwgI3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC8qdGFza0ZsZXhDb250YWluZXIqL1xcbiAgICAgICAgLnRhc2tGbGV4e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBnYXA6MiU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduLWxhc3Q6IGxlZnQ7XFxuICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrRmxleDpob3ZlcntcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIGluc2V0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICB9XFxuICAgICAgICAudGFza0Nyb3NzQnRue1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQsIGJsYWNrLCBzb2xpZDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFza3tcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFxcblxcbiAgICAgICAgLypDcm9zc291dCBhY2hpZXZlZCB3aXRoIGxpbmVhciBncmFkaWVudCwgc2hhbWVsZXNzbHkgdG9vayB0aGlzKi9cXG4gICAgICAgIC5jcm9zc2Vke1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIFxcbiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDApIGNhbGMoNTAlIC0gMXB4KSwgXFxuICAgICAgICAgICAgICAgIHJnYmEoMTkyLDE5MiwxOTIsMSkgY2FsYyg1MCUpLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwKSBjYWxjKDUwJSArIDFweClcXG4gICAgICAgICAgICAgICAgKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcm9zc2VkQ29sb3Jze1xcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xcblxcbiAgICAgICAgfVxcbiAgICAgICAgLmRlbGV0ZVRhc2tCdG4sIC5jcm9zc2VkVGFza0J0bntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC5kZWxldGVUYXNrQnRue1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAgIC5jcm9zc2VkVGFza0J0bntcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjaW5wdXRDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDQlO1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdXNlclRhc2tJbnB1dHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0IGJsdWUgc29saWQ7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJwdDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNhZGRUYXNrQnRue1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNwdDtcXG4gICAgICAgIH1cXG5cXG4vKkluZm8gYW5kIERpc3BsYXkgQm94Ki9cXG4gICAgICAgICN0YXNrSW5mb0Rpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2R1ZURhdGVEaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgICAgICAjY2hhbmdlRHVlRGF0ZUJ0bntcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgI2Rlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgICAgICNkZXNjcmlwdGlvbkRpc3BsYXksICNkZXNjcmlwdGlvbkRpc3BsYXlJbnB1dHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICAgICAgICAgIHdpZHRoOjk5JTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5OSU7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5pbmZvVGl0bGV7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcblxcblxcbi8qQWRkIExpc3QgcG9wb3V0IEJveCovXFxuI2FkZExpc3RQb3BvdXRCb3hDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwgMCwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jYWRkTGlzdE5hbWVEaXNwbGF5e1xcbiAgICBtYXJnaW4tbGVmdDogNXB0O1xcbiAgICBmbGV4LXNocmluazogMTtcXG5cXG5cXG59XFxuI2FkZExpc3RFeGl0QnRue1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJwdDtcXG4gICAgbWFyZ2luLXRvcDogMnB0O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTJwdDtcXG59XFxuXFxuI2FkZExpc3RQb3BvdXRCb3hGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZExpc3RQb3BvdXRCb3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDMwMHB0O1xcbiAgICBoZWlnaHQ6IDEwMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLypcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcXG4gICAgKi9cXG4gICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgIGdhcDogMTVwdDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4jYWRkTGlzdElucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3VzZXJMaXN0SW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiN1c2VyTGlzdElucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJwdDtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLmFkZE5ld0xpc3RJbnB1dHtcXG5cXG59XFxuI2FkZExpc3RQb3B1cEJ0biwgI2FkZERhdGVQb3BvdXRCdG57XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHQgYmxhY2sgc29saWQ7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDNwdDtcXG59XFxuI2FkZExpc3RQb3B1cEJ0bjpob3ZlciwgI2FkZFRhc2tCdG46aG92ZXIsICNhZGREYXRlUG9wb3V0QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N0IyO1xcbn1cXG5cXG4jY2FsZW5kYXJ7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB0O1xcbn1cXG5cXG4vKkVkaXRpbmcgTGlzdCBOYW1lIFBvcHVwKi9cXG4jZWRpdExpc3RCdG5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVwdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxOCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVwdDtcXG5cXG59XFxuI2RlbGV0ZUxpc3RCdG5GbGV4Q29udGFpbmVyLCAjc2F2ZUVkaXRlZExpc3RCdG5GbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4jZGVsZXRlTGlzdEJ0biwgI3NhdmVFZGl0ZWRMaXN0QnRue1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVsZXRlTGlzdEJ0bntcXG4gICAgYm9yZGVyOiAxcHQgc29saWQgaHNsKDM0NWRlZyAxMDAlIDQ3JSkgO1xcbn1cXG4jZGVsZXRlTGlzdEJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogaHNsKDM0NWRlZyAxMDAlIDQ3JSk7XFxufVxcblxcbiNzYXZlRWRpdGVkTGlzdEJ0bntcXG4gICAgYm9yZGVyOiAxcHQgc29saWQgIzQyNjdCMjtcXG59XFxuXFxuI3NhdmVFZGl0ZWRMaXN0QnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI2N0IyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDA7XG4vKipcbiAqIEBuYW1lIGFkZE1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnV0ZXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDMwIG1pbnV0ZXMgdG8gMTAgSnVseSAyMDE0IDEyOjAwOjAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWludXRlcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDApLCAzMClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjMwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWludXRlcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmltcG9ydCBjbG9zZVBvcHVwcyBmcm9tIFwiLi9jbG9zZVBvcHVwc1wiO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQsIGRpc3BsYXlUYXNrRGV0YWlscywgZGlzcGxheUZsYWdGYWxzZUZvckRlbGV0aW5nTGlzdHMgfSBmcm9tIFwiLi9kaXNwbGF5VGFza0RldGFpbHNcIjtcbmltcG9ydCB7IGxpc3RBcnJheSwgYXNzaWduQnV0dG9ucywgYnRuQXJyYXksIHBpbkxpc3QsIGxpc3RBcnJheUN1cnJlbnQgfSBmcm9tIFwiLi9tZW51RGlzcGxheVwiO1xuaW1wb3J0IHtzdG9yZUJ1dHRvbnN9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy9Db250cm9scyB0aGUgZnVuY3Rpb24gb2YgdGhlIGFkZExpc3RQb3BvdXQuIEFsc28gY29udHJvbHMgdGhlIGFkZExpc3QgYnV0dG9uIG9uIHNpZGUgbWVudVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcbiAgICBsZXQgcmVtb3ZlckFycmF5ID0gW11cblxuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgJiBwaW5zIHRoZSBuZXcgbHNpdCBidXR0b25zIG9uIHRoZSBsZWZ0aGFuZCBtZW51Ly9cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdCdXR0b25zKCkge1xuICAgICAgICBsZXQgYWRkTGlzdFBvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0UG9wb3V0Qm94Jyk7XG4gICAgICAgIGxldCB0YXNrUG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQb3BvdXRCb3gnKVxuICAgICAgICBsZXQgdGFza0luZm9Qb3BvdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0luZm9Qb3BvdXRCb3gnKVxuICAgICAgICAvL3VuYXBwZW5kIHRoZSBwb3B1cC8vXG4gICAgICAgIC8vY29uc3QgbGlzdEZsZXhDb250YWluZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGlzdEZsZXhDb250YWluZXInKVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpc3RGbGV4Q29udGFpbmVyJyk7XG5cbiAgICAgICAgd2hpbGUgKHJlbW92ZXJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IobGV0IHA9MDsgcDxyZW1vdmVyQXJyYXkubGVuZ3RoO3ArKyl7XG4gICAgICAgICAgICAgICAgcmVtb3ZlckFycmF5W3BdLnJlbW92ZUNoaWxkKHJlbW92ZXJBcnJheVtwXS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICByZW1vdmVyQXJyYXlbcF0ucmVtb3ZlQ2hpbGQocmVtb3ZlckFycmF5W3BdLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVtb3ZlckFycmF5ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2ZvciB0aGUgbGlzdCBtZW51IGJ1dHRvbnMgb24gbGVmdCBzaWRlLy9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYnRuQXJyYXlbaV0uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2xpc3RCdG4nKTtcbiAgICAgICAgICAgIGJ0bkFycmF5W2ldLmlkID0gaTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMaXN0c0ZsZXhDb250YWluZXInKVxuICAgICAgICAgICAgbGV0IGxpc3RGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vQ3JlYXRlZCBzbyB0aGF0IHggYnV0dG9uIGZvciBsaXN0cyBjYW4gYmUgc3R5bGVkLy9cbiAgICAgICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0RmxleENvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIHJlbW92ZXJBcnJheS5wdXNoKGxpc3RGbGV4Q29udGFpbmVyKVxuICAgICAgICAgICAgbGV0IGVkaXRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZWRpdExpc3RCdG4uaWQgPSBpKydlJztcbiAgICAgICAgICAgICAgICBlZGl0TGlzdEJ0bi5pbm5lckhUTUwgPSAnJiM5ODgxJ1xuICAgICAgICAgICAgZWRpdExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdExpc3RCdG4nLCAnYnRuJyk7XG4gICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lci5hcHBlbmQoYnRuQXJyYXlbaV0pO1xuICAgICAgICAgICAgbGlzdEZsZXhDb250YWluZXIuYXBwZW5kKGVkaXRMaXN0QnRuKTtcbiAgICAgICAgICAgIGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIuYXBwZW5kKGxpc3RGbGV4Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgLy9FdmVudCBsaXN0ZW5lciBmb3IgdGhlIGxpc3RFZGl0IGJ1dHRvbnMsIGl0ZXJhdGluZyBvZmYgb2YgaSBzbyBhcyB0byBzYXZlIHRoZSBjb3JyZWN0IGJ0bkFycmF5LmlubmVySFRNTFxuICAgICAgICAgICAgZWRpdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9sYXp5SGlkZGVuRGl2IGVtcHR5Ly9cbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50czIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb3BvdXRJdGVtMicpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50czIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LnJlbW92ZUNoaWxkKGVsZW1lbnRzMlswXSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy90aGlzIGlzIG5vdyBqdXN0IHRoZSBtYWluIHBvcG91dDtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmlubmVySFRNTCA9ICdOYW1lIExpc3QnO1xuICAgICAgICAgICAgICAgICAgICAvL2RlZmluZSB0aGVzZSBoZXJlIHNvIHRoZXkgY2FuIGFsd2F5cyBiZSBhY2Nlc3NlZCwgZXZlbiB3aGVuIGVkaXRpbmcgdGhlIHBvcHVwIGVsc2V3aGVyZS8vXG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyTGlzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuaWQgPSAndXNlckxpc3RJbnB1dCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdElucHV0Lm1heExlbmd0aCA9IDE4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RJbnB1dC52YWx1ZSA9IGJ0bkFycmF5W2ldLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdExpc3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0QnRuQ29udGFpbmVyLmlkID0gJ2VkaXRMaXN0QnRuQ29udGFpbmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRMaXN0QnRuQ29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVMaXN0QnRuRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bkZsZXhDb250YWluZXIuaWQgPSAnZGVsZXRlTGlzdEJ0bkZsZXhDb250YWluZXInO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsZXRlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5pZCA9ICdkZWxldGVMaXN0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2RlbGV0ZUxpc3RCdG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgZGVsZXRlIGJ1dHRvbiBpbiB0aGUgcG9wdXAsIGJ1dHMgaXQgb3V0IG9mIGJ0biBhbmQgbGlzdCBhcnJheSBhbmQgcmVzZXRzIGV2ZXJ5dGhpbmcvL1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5BcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BsYXlGbGFnRmFsc2VGb3JEZWxldGluZ0xpc3RzKCk7IC8vY2hhbmdlIHRoZSBkaXNwbGF5IGZsYWcgdG8gYXZvaWQgYW4gZXJyb3IgaWYgbm90aGluZyBpcyBjdXJyZW50bHkgZGlzcGxheWVkLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlRXZlcnl0aGluZ09mZkluZm9Cb2FyZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlQnV0dG9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld0J1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURlbGV0ZUFuZFNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGxldCBzYXZlRWRpdGVkTGlzdEJ0bkZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuRmxleENvbnRhaW5lci5pZCA9ICgnc2F2ZUVkaXRlZExpc3RCdG5GbGV4Q29udGFpbmVyJylcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhdmVFZGl0ZWRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlRWRpdGVkTGlzdEJ0bi5pZCA9ICdzYXZlRWRpdGVkTGlzdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlRWRpdGVkTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnc2F2ZUVkaXRlZExpc3RCdG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuLmlubmVySFRNTCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2FsbG93cyB5b3UgdG8gY2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBsaXN0Ly9cbiAgICAgICAgICAgICAgICAgICAgc2F2ZUVkaXRlZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckxpc3RJbnB1dFZhbHVlID0gdXNlckxpc3RJbnB1dC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlckxpc3RJbnB1dFZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5BcnJheVtpXS5pbm5lckhUTUwgPSB1c2VyTGlzdElucHV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZU5ld0J1dHRvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQXJyYXlbaV0uY2xpY2soKTsgLy9DYWxscyB0aGUgY2xpY2tlZCBidXR0b24gdG8gZGlzcGxheSBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZURlbGV0ZUFuZFNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy9FbnRlciBidXR0b24gZGVmYXVsdHMgdG8gc2F2aW5nIG5ldyBuYW1lXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvL1JlbW92ZSBvbGQgZGVsZXRlICYgc2F2ZSBidXR0b25zXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZURlbGV0ZUFuZFNhdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy9EZWxldGUgdGhlIHRleHQgaW5wdXQgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIHRoZSBhZGRMaXN0IG1hdGVyaWFscy8vXG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3guYXBwZW5kKGVkaXRMaXN0QnRuQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZWRpdExpc3RCdG5Db250YWluZXIuYXBwZW5kKGRlbGV0ZUxpc3RCdG5GbGV4Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bkZsZXhDb250YWluZXIuYXBwZW5kKGRlbGV0ZUxpc3RCdG4pXG4gICAgICAgICAgICAgICAgICAgIGVkaXRMaXN0QnRuQ29udGFpbmVyLmFwcGVuZChzYXZlRWRpdGVkTGlzdEJ0bkZsZXhDb250YWluZXIpXG4gICAgICAgICAgICAgICAgICAgIHNhdmVFZGl0ZWRMaXN0QnRuRmxleENvbnRhaW5lci5hcHBlbmQoc2F2ZUVkaXRlZExpc3RCdG4pXG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5hcHBlbmQodXNlckxpc3RJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5mb2N1cygpOyAvL2F1dG8gcGxhY2VzIGN1cnNvciBpbiBpbnB1dFxuICAgICAgICAgICAgICAgICAgICAvL0FsbG93cyB1c2VyIHRvIGVkaXQgdGV4dCBmaWVsZCBhbmQgaGl0IGVudGVyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhdmVFZGl0ZWRMaXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVFZGl0ZWRMaXN0QnRuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUVkaXRlZExpc3RCdG4uY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vcmVtb3ZlIHJlZHVuZGFudCBkZWxldGUgYW5kIHNhdmUgYnV0dG9uc1xuICAgIGZ1bmN0aW9uIHJlbW92ZURlbGV0ZUFuZFNhdmUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRMaXN0QnRuQ29udGFpbmVyJyk7XG4gICAgICAgIHdoaWxlIChlbGVtZW50czIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5yZW1vdmVDaGlsZChlbGVtZW50czJbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgbGV0IHVzZXJMaXN0SW5wdXRcbiAgICBsZXQgdXNlckxpc3RJbnB1dFZhbHVlXG4gICAgbGV0IHVzZXJMaXN0TmV3QnRuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGFsdGVycyB0aGUgYnRuQXJyYXksIGFkZGluZyB0aGUgbmV3IGlucHV0IGludG8gdGhhdCBhcnJheSBhbmQgZ2VuZXJhdGluZyBpdCBhZ2Fpbi8vXG4gICAgZnVuY3Rpb24gY2xpY2tCdG5BZGRUb0J0bkFycmF5KCkge1xuICAgICAgICB1c2VyTGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJMaXN0SW5wdXQnKTtcbiAgICAgICAgdXNlckxpc3RJbnB1dFZhbHVlID0gdXNlckxpc3RJbnB1dC52YWx1ZVxuICAgICAgICAvL0lmIHN0YXRlbWVudCBjYXRjaGVzIGVkZ2UgY2FzZSBvZiBub3QgaGF2aW5nIGEgdmFsdWUgb3Igb25seSBwdXR0aW5nIGluIHNwYWNlcy8vXG4gICAgICAgIGlmICh1c2VyTGlzdElucHV0VmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dFZhbHVlID0gJydcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY3JlYXRlcyBuZXcgYnV0dG9uIGFuZCBwdXRzIGl0IGluIHRoZSBidXR0b24gYXJyYXkvL1xuICAgICAgICBsZXQgdXNlckxpc3ROZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdXNlckxpc3ROZXdCdG4uaW5uZXJIVE1MID0gdXNlckxpc3RJbnB1dFZhbHVlO1xuICAgICAgICBidG5BcnJheS5wdXNoKHVzZXJMaXN0TmV3QnRuKTtcbiAgICAgICAgLy9pZiB0aGUgc3RyaW5nIGlzIHRvbyBsb25nLCBzaG9ydGVuIGl0IGFuZCBhZGQgdG8gbGlzdC8vXG4gICAgICAgIC8vYnRucyBzaG91bGQgaGF2ZSBiZWVuIG9iamVjdHMvL1xuICAgICAgICBzdG9yZUJ1dHRvbnMoKTsgLy9zYXZlcyB0aGUgbmV3IGJ1dHRvblxuICAgICAgICBjcmVhdGVOZXdCdXR0b25zKCk7XG4gICAgICAgIGFzc2lnbkJ1dHRvbnMoKTtcblxuICAgICAgICAvL3B1dHMgaXQgaW4gdGhlIGxpc3QgYXJyYXlcbiAgICAgICBcbiAgICAgICAgbGV0IHVzZXJMaXN0TmV3QXJyYXkgPSBbXTtcbiAgICAgICAgdXNlckxpc3ROZXdBcnJheS5pbm5lckhUTUwgPSB1c2VyTGlzdElucHV0VmFsdWU7XG4gICAgICAgIGxpc3RBcnJheS5wdXNoKHVzZXJMaXN0TmV3QXJyYXkpO1xuICAgICAgICB1c2VyTGlzdElucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdXNlckxpc3ROZXdCdG4uY2xpY2soKTsgLy9DbGlja3MgdGhlIG5ldyBidXR0b24sIG9wZW5pbmcgdGhlIG5ldyBsaXN0Ly9cblxuICAgIH1cblxuICAgIC8vQUREIExJU1RTIEJVVFRPTiBFVkVOVCBMSVNURU5FUiBQT1BVUFxuICAgIC8vRXZlbnQgbGlzdGVuZXIgdG8gdGhlIG1lbnUgYnV0dG9uIGFkZGluZyBsaXN0cywgbWFrZXMgc3VyZSBldmVyeXRoaW5nIHBvcHVsYXRlcyBpbiBcbiAgICAvL3BvcHVwLCB0aGVuIGNhbGxzIGFib3ZlIGZ1bmN0aW9uXG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy90aGlzIGlzIG5vdyBqdXN0IHRoZSBtYWluIHBvcG91dDtcbiAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmlubmVySFRNTCA9ICdOYW1lIE5ldyBMaXN0JztcbiAgICAgICAgLy9kZWZpbmUgdGhlc2UgaGVyZSBzbyB0aGV5IGNhbiBhbHdheXMgYmUgYWNjZXNzZWQsIGV2ZW4gd2hlbiBlZGl0aW5nIHRoZSBwb3B1cCBlbHNld2hlcmUvL1xuICAgICAgIFxuICAgICAgICBsZXQgdXNlckxpc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB1c2VyTGlzdElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICB1c2VyTGlzdElucHV0LmlkID0gJ3VzZXJMaXN0SW5wdXQnO1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5tYXhMZW5ndGggPSAxODtcbiAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgdXNlckxpc3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdhZGROZXdMaXN0SW5wdXQnKTtcbiAgICAgICAgbGV0IGFkZExpc3RQb3B1cEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmlkID0gJ2FkZExpc3RQb3B1cEJ0bic7XG4gICAgICAgICAgICBhZGRMaXN0UG9wdXBCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgIC8vaGlkZGVuRGl2IGlzIGhlcmUgZm9yIENTUywgbGF6aW5lc3Mgb24gbXkgcGFydCB0byByZXVzZSB0aGUgcG9wdXAgbWFkZSBpdCBkaWZmaWN1bHQgdG8gc3R5bGUuLy9cbiAgICAgICAgbGV0IGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGlkZGVuRGl2LmlkID0gJ2hpZGRlbkRpdic7XG4gICAgICAgICAgICBoaWRkZW5EaXYuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbTInKTtcblxuICAgICAgICAvL0VtcHR5IHRoZSBwb3B1cFxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9sYXp5SGlkZGVuRGl2IGVtcHR5Ly9cbiAgICAgICAgY29uc3QgZWxlbWVudHMyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wb3V0SXRlbTInKTtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnRzMi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LnJlbW92ZUNoaWxkKGVsZW1lbnRzMlswXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9BZGQgdGhlIGFkZExpc3QgbWF0ZXJpYWxzLy9cbiAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmFwcGVuZCh1c2VyTGlzdElucHV0KTtcbiAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmFwcGVuZChhZGRMaXN0UG9wdXBCdG4pO1xuICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmFwcGVuZChoaWRkZW5EaXYpO1xuICAgICAgICB1c2VyTGlzdElucHV0LmZvY3VzKCk7IC8vYXV0byBwbGFjZXMgY3Vyc29yIGluIGJveC8vXG4gICAgICAgIGFkZExpc3RQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQnRuQWRkVG9CdG5BcnJheSk7IC8vY2FsbHMgdGhlIGFib3ZlIGZ1bmN0aW9uIHRvIG1ha2Ugc3VyZSB0aGF0IGxpc3RzIGdldCBhcHBlbmRlZC8vXG4gICAgICAgIC8vYWRkIGVudGVyIGtleSBzdXBwb3J0XG4gICAgICAgIHVzZXJMaXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcblxuXG4gICAgY3JlYXRlTmV3QnV0dG9ucygpOyAvL2NhbGxlZCBhdCBlbmQgb2YgZnVuY3Rpb24gdG8gYXV0byBnZW5lcmF0ZSBidXR0b25zIGZvciBoYXJkY29kZWQgbGlzdHNcbn1cblxuIiwiLy9UaGlzIGZhY3RvcnkgZnVuY3Rpb24gY3JlYXRlcyB0YXNrcyB3aXRoIGEgbmFtZSwgZGVzY3JpcHRpb24sIGFuZCBkdWVEYXRlLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBcbiAgICBwcmlvcml0eSwgY29tcGxldGVTdGF0dXMsIGRlbGV0ZUVsaWdpYmxlLCBmb3JtZXJBcnJheVBvc2l0aW9uLCBjdXJyZW50QXJyYXlQb3NpdGlvbiwpe1xuICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gY29tcGxldGVTdGF0dXNcbiAgICB0aGlzLmRlbGV0ZUVsaWdpYmxlID0gZGVsZXRlRWxpZ2libGVcbiAgICB0aGlzLmZvcm1lckFycmF5UG9zaXRpb24gPSBmb3JtZXJBcnJheVBvc2l0aW9uXG4gICAgdGhpcy5jdXJyZW50QXJyYXlQb3NpdGlvbiA9IGN1cnJlbnRBcnJheVBvc2l0aW9uXG59XG5cbiIsIi8vVGhpcyBmdW5jdGlvbiBjbG9zZXMgcG9wdXBzIHVzaW5nIHRoZWlyIHggYnV0dG9ucy8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9zZVBvcHVwcygpe1xuLy94IG1ha2VzIHRoZSBwb3B1cCBpbnZpc2libGUgYWdhaW4uIFByb2JhYmx5IG5lZWQgdG8gcmVzZXQgaXQsIGRvIHNvIGxhdGVyLy9cblxuLy9Ob3Qgc3VyZSBpZiBpdCBpcyBtb3JlL2xlc3MgY291cGxlZCB0byBkZWNsYXJlIHRoZSBhcnJheXMgaGVyZSByYXRoZXIgdGhhbiBtYWtpbmcgdGhlIGFycmF5cyBpbiB0aGUgc2tlbGV0b24gYW5kIGltcG9ydGluZyB0aGVtIG92ZXIuXG4vL0kgdGhpbmsgaXQgaXMgYSBsaXR0bGUgY2xlYXJlciB3aGVyZSB0aGUgZGF0YSBmb3IgdGhlIGFycmF5cyBpcyBjb21pbmcgZnJvbSBvdmVyIGhlcmVcbi8vVGhlIG9ubHkgZm9yZXNlZWFibGUgcHJvYmxlbSB3b3VsZCBiZSBpZiBhIHZhcmlhYmxlIG5hbWUgaXMgY2hhbmdlZCB0aGVyZSBpdCB3b3VsZCBoYXZlIHRvIGJlIGNoYW5nZWQgaGVyZSBhcyB3ZWxsXG5cbi8vYXJyYXkgb2YgdGhlIHgncy8vXG5sZXQgY2xvc2VQb3B1cHNBcnJheSA9IFtdO1xuXG5sZXQgY2xvc2VUYXNrUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdEV4aXRCdG4nKTtcbiAgICBjbG9zZVBvcHVwc0FycmF5LnB1c2goY2xvc2VUYXNrUG9wdXApXG5jb25zdCBhZGRMaXN0RXhpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMaXN0RXhpdEJ0bicpO1xuICAgIGNsb3NlUG9wdXBzQXJyYXkucHVzaChhZGRMaXN0RXhpdEJ0bilcblxuXG4vL2FycmF5IG9mIHRoZSBwb3BvdXRzLy9cbmxldCBwb3BvdXRBcnJheSA9IFtdOyBcblxubGV0IHRhc2tQb3BvdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcG91dEJveCcpO1xuICAgIHBvcG91dEFycmF5LnB1c2godGFza1BvcG91dEJveCk7XG5jb25zdCBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3RQb3BvdXRCb3hDb250YWluZXInKTtcbiAgICBwb3BvdXRBcnJheS5wdXNoKGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIpO1xubGV0IHRhc2tJbmZvUG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbmZvUG9wb3V0Qm94JylcbmxldCBhZGRMaXN0UG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZExpc3RQb3BvdXRCb3gnKVxuXG4vL0luIG9yZGVyLCBsaW5rIHRoZSBhcnJheXMgMSB0byAxIGFuZCBhc3NpZ24gdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoYXQgaXRlbSBvZiB0aGUgYXJyYXkvL1xuZm9yKGxldCBpPTA7IGk8Y2xvc2VQb3B1cHNBcnJheS5sZW5ndGg7aSsrKXtcbmNsb3NlUG9wdXBzQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgcG9wb3V0QXJyYXlbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy9FcmFzaW5nIHBvcHVwIGRpc3BsYXkgZnJvbSBzaWdodCB1bnRpbCBjbGlja2luZyBhIGxpc3QvL1xuICAgIGlmIChwb3BvdXRBcnJheVtpXSA9PSB0YXNrUG9wb3V0Qm94KXsvL25vdCBlbGVnYW50Ly9cbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgLy9yZW1vdmVzIHRoZSBhZGQvcmVtb3ZlIGZyb20gdGhlIGVkaXQgbGlzdCB3aGVuIGNsaWNraW5nIG9mZiB0aGVtXG4gICAgY29uc3QgZWxlbWVudHMyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdExpc3RCdG5Db250YWluZXInKTtcbiAgICB3aGlsZShlbGVtZW50czIubGVuZ3RoID4gMCl7IFxuICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LnJlbW92ZUNoaWxkKGVsZW1lbnRzMlswXSk7XG4gICAgfVxuICAgIH0pXG59XG59XG5cblxuIiwiaW1wb3J0IGFkZFRhc2sgZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHsgdGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQsIGN1cnJlbnRUYXNrIH0gZnJvbSBcIi4vZGlzcGxheVRhc2tEZXRhaWxzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXlDdXJyZW50LCB0YXNrRGlzcGxheUFycmF5LFxuICAgICAgICBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5LCAgZGVsZXRlVGFza0J1dHRvbnNBcnJheSwgcGluTGlzdH0gZnJvbSBcIi4vbWVudURpc3BsYXlcIlxuXG5sZXQgY3Jvc3NlZFRhc2tzID0gW107XG5mdW5jdGlvbiBkZWxldGVUYXNrcygpe1xuICAgIGxldCBwcm90b3R5cGVUcmFja2VyQmVjYXVzZUlJc091dE9mU2NvcGVcbiAgICBsZXQgY29ycmFsRWxpZ2liaWx0eVRyYWNrZXJcbiAgICBsZXQgZGVsZXRlRWxpZ2libGVBcnJheSA9IFtdXG4gICAgLy9sZXQgZGVsZXRlVGFza1RyYWNrZXJcblxuICAgIC8vYWxsb3dzIHN3aXRjaGluZyBiZXR3ZWVuIGNyb3NzZWQgJiB1bmNyb3NzZWRcbiAgICBhZGRUYXNrLnByb3RvdHlwZS5tYWtlQ3Jvc3NlZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuY29tcGxldGVTdGF0dXMgPT0gdW5kZWZpbmVkIHx8IHRoaXMuY29tcGxldGVTdGF0dXMgPT0gJ2luY29tcGxldGUnKXsgLy9pZiB1bmNyb3NzZWRcbiAgICAgICAgICAgIGNyb3NzZWRUYXNrcy5wdXNoKGxpc3RBcnJheUN1cnJlbnRbcHJvdG90eXBlVHJhY2tlckJlY2F1c2VJSXNPdXRPZlNjb3BlXSk7IC8vTW92ZSBteSBjb3JyZXNwb25kaW5nIGxpc3RBcnJheUN1cnJlbnQgbWVtYmVyIGludG8gY3Jvc3NlZFRhc2tzXG4gICAgICAgICAgICBsaXN0QXJyYXlDdXJyZW50LnNwbGljZShwcm90b3R5cGVUcmFja2VyQmVjYXVzZUlJc091dE9mU2NvcGUsMSk7IC8vUmVtb3ZlIGhpbSBmcm9tIHRoZSBsaXN0IGFycmF5XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlU3RhdHVzID0gJ2Nyb3NzZWQnOyAvL2NoYW5nZXMgdG8gY3Jvc3NlZCBvdXQgJiBtb3ZlcyB0byBib3R0b20gYXJyYXkvL1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5jb21wbGV0ZVN0YXR1cyA9PSAnY3Jvc3NlZCcpeyAvL2lmIGNyb3NzZWRcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVTdGF0dXMgPSAnaW5jb21wbGV0ZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9hc3NpZ25zIHRoZSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGNyb3NzZWQgdGFza3MgYnV0dG9uLCBhbGxvd2luZyB0aGVtIHRvIGFjdHVhbGx5IGNyb3NzLy9cbiAgICBmdW5jdGlvbiBhc3NpZ25Dcm9zc2VkVGFza3NFdmVudExpc3RlbmVycygpe1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGN1cnJlbnRDcm9zc1Rhc2tCdXR0b25zQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PnsgLy9mb3IgZXZlcnkgYnV0dG9uIG9uIHRoZSBsaXN0LCB3aGVuIEkgYW0gY2xpY2tlZFxuICAgICAgICAgICAgICAgIHByb3RvdHlwZVRyYWNrZXJCZWNhdXNlSUlzT3V0T2ZTY29wZSA9IGlcbiAgICAgICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5W2ldLm1ha2VDcm9zc2VkKCk7IC8vQ2hhbmdlIHRoZSB0YXNrIHRvIGVpdGhlciBjcm9zc2VkIG9yIHVuY3Jvc3NlZFxuICAgICAgICAgICAgICAgIHBpbkxpc3QoKTsgLy9QdXQgZXZlcnlvbmUgYmFjayBvbiB0aGUgYm9hcmRcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Jvc3NlZFRhc2tzID0gW10gLy9lbXB0eSBjcm9zc2VkIHRhc2tzIHNpbmNlIGFsbCBvZiB0aGVzZSBnZW50cyBhcmUgaW4gbGlzdEFycmF5Q3VycmVudCBiYWNrIGluIHBpbkxpc3RcbiAgICB9XG5cbiAgICAvL0ZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIGZvciBkZWxldGluZyBhbHJlYWR5IGNyb3NzZWQgdGFza3NcbiAgICAvL1B1dHMgYWxsIHRoZSBlbGlnaWJsZSBmb3IgZGVsZXRlIHRhc2tzIGludG8gYW4gYXJyYXkvL1xuICAgICBmdW5jdGlvbiBjb3JyYWxEZWxldGVFbGlnaWJsZUludG9BcnJheSgpe1xuICAgICAgICBmb3IobGV0IGk9MDsgaTx0YXNrRGlzcGxheUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvcnJhbEVsaWdpYmlsdHlUcmFja2VyID0gaTsvL1RyYWNrIGkgdG8gYmUgdXNlZCBpbiBwcm90b3R5cGVcbiAgICAgICAgICAgIHRhc2tEaXNwbGF5QXJyYXlbaV0uZGVsZXRlRWxpZ2libGVIZXJkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRUYXNrLnByb3RvdHlwZS5kZWxldGVFbGlnaWJsZUhlcmRlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKHRoaXMuZGVsZXRlRWxpZ2libGUgPT0gJ2VsaWdpYmxlJyl7IC8vSWYgZWxpZ2JpbGUgZm9yIGRlbGV0aW9uXG4gICAgICAgICAgICBkZWxldGVFbGlnaWJsZUFycmF5LnB1c2godGFza0Rpc3BsYXlBcnJheVtjb3JyYWxFbGlnaWJpbHR5VHJhY2tlcl0pLy9QdXQgaW50byB0aGUgZGVsZXRlIGFycmF5XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1NhdmVzIHRhc2tzIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGxpc3RBcnJheSBzbyB0aGV5IGNhbiBiZSBhY2N1cmF0ZWx5IGRlbGV0ZWQgd2hlbiBjcm9zc2VkLy9cbiAgICBmdW5jdGlvbiBjdXJyZW50QXJyYXlQb3NpdGlvblRyYWNrZXIgKCl7XG4gICAgICAgIGZvcihsZXQgcCA9IDA7IHAgPCBsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aDsgcCsrKXsgLy9sb29wIHRocm91Z2ggY3VycmVudCBhcnJheSBhc3NpZ25pbmcgdHJhY2tpbmcgbnVtYmVyXG4gICAgICAgICAgICBjdXJyZW50QXJyYXlQb3NpdGlvblRyYWNrZXIgPSBwOy8vdHJhY2tlciBmb3IgaVxuICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudFtwXS5zYXZlQ3VycmVudEFycmF5UG9zaXRpb24oKTsgLy9zYXZlcyBjdXJyZW50IHBvc2l0aW9uIHRocm91Z2ggcHJvdG90eXBlXG4gICAgICAgICAgICBcbiAgICAgICAgfSAgICBcbiAgICB9XG4gICAgYWRkVGFzay5wcm90b3R5cGUuc2F2ZUN1cnJlbnRBcnJheVBvc2l0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5jdXJyZW50QXJyYXlQb3NpdGlvbiA9IGN1cnJlbnRBcnJheVBvc2l0aW9uVHJhY2tlcjsvL2N1cnJlbnQgcG9zaXRpb24gaXMgdHJhY2tlciBwb3NpdGlvblxuICAgIH1cbiAgICAvL0Fzc2lnbnMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBkZWxldGUgYnV0dG9ucyBmb3IgZGVsZXRpb24vL1xuICAgIGZ1bmN0aW9uIGFzc2lnbkRlbGV0ZVRhc2tzRXZlbnRMaXN0ZW5lcnMoKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZGVsZXRlVGFza0J1dHRvbnNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZGVsZXRlVGFza0J1dHRvbnNBcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+eyAvL2ZvciBldmVyeSBidXR0b24gb24gdGhlIGxpc3QsIHdoZW4gSSBhbSBjbGlja2VkXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBcnJheVBvc2l0aW9uVHJhY2tlcigpOyAvL0ZpbmQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgbXkgdGFza1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVFbGlnaWJsZUFycmF5W2ldLmRlbGV0ZVRhc2soKTsvL2RlbGV0ZSB0aGF0IHRhc2ssIGZpbmRpbmcgaXQgaW4gbXkgYXJyYXkgb2YgZWxpZ2libGUgZGVsZXRpb25zXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlIGRlbGV0ZWQgaXRlbSBpcyB0aGUgY3VycmVudCBpdGVtLCBkZWZhdWx0IHRoZSBpbmZvIGRpc3BsYXkgdG8gdGhlIG9yaWdpbmFsLCBpZiBub3QgdGhlbiBrZWVwIGl0IG9uIGN1cnJlbnQgaXRlbS8vXG4gICAgICAgICAgICAgICAgICAgIGlmKGRlbGV0ZUVsaWdpYmxlQXJyYXlbaV0gPT0gY3VycmVudFRhc2speyAvL2N1cnJlbnRUYXNrIGltcG9ydGVkIGZyb20gZGlzcGxheVRhc2tEZXRhaWxzLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkKCk7IC8vRGVsZXRlIGluZm8gYm9hcmQsIHNldHRpbmcgZmxhZyB0byBmYWxzZSBhbmQgcGlubmluZyBmaXJzdCBpdGVtIG9uIGxpc3QvL1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwaW5MaXN0KCk7IC8vUHV0IGV2ZXJ5b25lIGJhY2sgb24gdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIC8vbGV0IHRhc2tJbmZvUG9wb3V0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbmZvUG9wb3V0Qm94JylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpOyAgIC8vc3RvcHMgaXQgZnJvbSBidWJibGluZyB0byBvdXRzaWRlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIGFkZFRhc2sucHJvdG90eXBlLmRlbGV0ZVRhc2sgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uVHJhY2tlciA9IHRoaXMuY3VycmVudEFycmF5UG9zaXRpb24vL2ZpbmQgY3VycmVudCBwb3NpdGlvblxuICAgICAgICBsaXN0QXJyYXlDdXJyZW50LnNwbGljZShjdXJyZW50UG9zaXRpb25UcmFja2VyLDEpLy9yZW1vdmUgaXQgZnJvbSB0aGUgY3VycmVudExpc3RBcnJheVxuICAgIH1cblxuICAgIGFzc2lnbkNyb3NzZWRUYXNrc0V2ZW50TGlzdGVuZXJzKCk7Ly9hc3NpZ24gZXZlbnQgbGlzdGVuZXJzIGZvciBjcm9zcyBidXR0b25zXG4gICAgY29ycmFsRGVsZXRlRWxpZ2libGVJbnRvQXJyYXkoKTsgLy9jb3JyYWwgYWxsIG15IGVsaWdpYmxlIGRlbGV0aW9uc1xuICAgIGFzc2lnbkRlbGV0ZVRhc2tzRXZlbnRMaXN0ZW5lcnMoKTsgLy9hc3NpZ24gZXZlbnQgbGlzdGVuZXJzIGZvciBkZWxldGlvbnNcbn1cblxuXG5leHBvcnQge2RlbGV0ZVRhc2tzLCBjcm9zc2VkVGFza3N9XG4iLCIvL2xldCBjdXJyZW50RGlzcGxheWVkVGFza3NBcnJheSA9IFtdXG5cbi8vY2FsbGVkIGZyb20gcGlubGlzdFxuaW1wb3J0IHsgbGlzdEFycmF5Q3VycmVudCwgYnRuQXJyYXksIGxpc3RBcnJheSwgbmV3bHlBZGRlZFRhc2ssIGZpcnN0TGlzdE9wZW5GbGFnIH0gZnJvbSBcIi4vbWVudURpc3BsYXlcIjtcbmltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRhc2tcIjtcbmltcG9ydCB7IGZvcm1hdCxhZGRNaW51dGVzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbi8vRGlzcGxheSBmbGFnIG11c3QgYmUgZGVjbGFyZWQgdXAgaGVyZSBzbyBpdCBjYW4gYmUgZWRpdGVkIHNhZmVseVxubGV0IGRpc3BsYXllZEZsYWdcbmxldCBjaGFuZ2VEdWVEYXRlQnRuXG5sZXQgY3VycmVudFRhc2sgLy9EZWZpbmUgaGVyZSBzbyB3ZSBjYW4gZWRpdCB0aHJvdWdob3V0XG5cblxuXG4vL3NlcGFyYXRlZCBmcm9tIHRoZSBvdGhlciBsYXJnZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBjYW4gYmUgZXhwb3J0ZWRcbi8vIGFuZCBjYWxsZWQgd2hlbiBjcmVhdGluZyBuZXcgbGlzdHMgb3IgaW4gZGVsZXRpbmcgdGFza3MgdG8gZGlzcGxheSB0aGUgY29ycmVjdCBcbi8vdGFza1xuZnVuY3Rpb24gdGFrZUV2ZXJ5dGhpbmdPZmZJbmZvQm9hcmQoKXtcbiAgICBsZXQgdGFza0luZm9Qb3BvdXRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0luZm9Qb3BvdXRCb3gnKTtcbiAgICBsZXQgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcicpXG4gICAgbGV0IGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVEaXNwbGF5Q29udGFpbmVyJylcbiAgICBsZXQgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVUaXRsZScpXG4gICAgbGV0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVEaXNwbGF5JylcbiAgICBsZXQgY2hhbmdlRHVlRGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VEdWVEYXRlQnRuJylcbiAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lcicpXG4gICAgbGV0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25UaXRsZScpXG4gICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkRpc3BsYXknKVxuICAgIC8vVGhpcyBpcyBmb3IgZGVsZXRpbmcgbGlzdHMgaWYgbm90aGluZyBpcyBkaXNwbGF5ZWQsIG90aGVyd2lzZSB0aGUgZGVsZXRlRnVuY3Rpb24gd2lsbCBlcnJvciBhbmQgZXhpdCBoZXJlIGJlY2F1c2UgdGhlcmUgaXMgbm8gcG9wdXBCb3ggdG8gcmVtb3ZlLy9cbiAgICBpZihkaXNwbGF5ZWRGbGFnID09IGZhbHNlIHx8IGZpcnN0TGlzdE9wZW5GbGFnID09IGZhbHNlICl7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0YXNrSW5mb1BvcG91dEJveC5yZW1vdmVDaGlsZCh0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIpO1xuICAgICAgICB0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZHVlRGF0ZURpc3BsYXlDb250YWluZXIpO1xuICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5yZW1vdmVDaGlsZChkdWVEYXRlVGl0bGUpO1xuICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5yZW1vdmVDaGlsZChkdWVEYXRlRGlzcGxheSk7XG4gICAgICAgIGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNoYW5nZUR1ZURhdGVCdG4pO1xuICAgICAgICB0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlc2NyaXB0aW9uVGl0bGUpO1xuICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZGVzY3JpcHRpb25EaXNwbGF5KTtcbiAgICAgICAgZGlzcGxheWVkRmxhZyA9IGZhbHNlOyAvL2FsbG93cyB5b3UgdG8gY2xpY2sgd2hlbiBkZWxldGluZyBhbiBpdGVtLy9cbiAgICB9XG59XG4vL3NvbGVseSBmb3IgZGVsZXRpbmcgbGlzdHMgaWYgbm8gdGFza3MgYXJlIGRpc3BsYXllZC8vXG5mdW5jdGlvbiBkaXNwbGF5RmxhZ0ZhbHNlRm9yRGVsZXRpbmdMaXN0cygpe1xuICAgZGlzcGxheWVkRmxhZyA9IGZhbHNlO1xufVxuXG5cblxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza0RldGFpbHMoKXtcblxuICAgIFxuICAgIC8vbGV0IGN1cnJlbnRUYXNrXG4gICAgbGV0IGNhbGVuZGFyVmFsdWVcbiAgICBsZXQgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyIFxuICAgIGxldCBkdWVEYXRlRGlzcGxheUNvbnRhaW5lciBcbiAgICBsZXQgZHVlRGF0ZVRpdGxlXG4gICAgbGV0IGR1ZURhdGVEaXNwbGF5IFxuICAgIGxldCBjaGFuZ2VEdWVEYXRlQnRuIFxuICAgIGxldCBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIgXG4gICAgbGV0IGRlc2NyaXB0aW9uVGl0bGUgXG4gICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheSBcbiAgIFxuXG4gICAgZnVuY3Rpb24gcHV0RXZlcnl0aGluZ09uSW5mb0JvYXJkKCl7XG4gICAgICAgIGxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpO1xuICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIuaWQgPSAndGFza0luZm9EaXNwbGF5Q29udGFpbmVyJ1xuICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guYXBwZW5kKHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lcilcbiAgICAgICAgIGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5pZCA9IFwiZHVlRGF0ZURpc3BsYXlDb250YWluZXJcIlxuICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlRGlzcGxheUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuaWQgPSAnZHVlRGF0ZVRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuaW5uZXJIVE1MID0gJ0ZpbmlzaCBieSc7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlVGl0bGUpO1xuICAgICAgICAgICAgICAgICBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGlzcGxheS5pZCA9ICdkdWVEYXRlRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlRGlzcGxheSk7XG4gICAgICAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5pZCA9ICdjaGFuZ2VEdWVEYXRlQnRuJztcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXlDb250YWluZXIuYXBwZW5kKGNoYW5nZUR1ZURhdGVCdG4pXG4gICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lci5pZCA9IFwiZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyXCJcbiAgICAgICAgICAgIHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlkID0gJ2Rlc2NyaXB0aW9uVGl0bGUnO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlubmVySFRNTCA9ICdOb3Rlcyc7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5LnBsYWNlaG9sZGVyID0gJ1R5cGUgeW91ciBub3RlcyBoZXJlJ1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkuaWQgPSAnZGVzY3JpcHRpb25EaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkRpc3BsYXkpO1xuICAgICAgICAgICAgZGlzcGxheWVkRmxhZyA9IHRydWU7XG4gICAgfVxuXG4gICBcbiAgIFxuICAgIC8vUG9zdHMgdGhlIGRlY3JpcHRpb25zIHRvIHRob3NlIHNhdmVkIGluIHRoZSBvYmplY3RcbiAgICBhZGRUYXNrLnByb3RvdHlwZS5wb3N0VGFza0RldGFpbHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgY2hhbmdlRHVlRGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VEdWVEYXRlQnRuJyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25EaXNwbGF5Jyk7XG4gICAgICAgIHRhc2tUaXRsZURpc3BsYXkuaW5uZXJIVE1MID0gdGhpcy50YXNrTmFtZTtcbiAgICAgICAgaWYodGhpcy50YXNrTmFtZS5sZW5ndGg+MjApe1xuICAgICAgICAgICAgbGV0IHNob3J0ZW5lZE5hbWUgPSB0aGlzLnRhc2tOYW1lLnN1YnN0cmluZygwLDIwKVxuICAgICAgICAgICAgbGV0IGFkZFBsdXMgPSBzaG9ydGVuZWROYW1lICsgJy4uLic7XG4gICAgICAgICAgICB0YXNrVGl0bGVEaXNwbGF5LmlubmVySFRNTCA9IGFkZFBsdXM7XG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5pbm5lckhUTUwgPSB0aGlzLmR1ZURhdGU7XG4gICAgICAgIC8vcHJpb3JpdHlEaXNwbGF5LmlubmVySFRNTCA9IHRoaXMucHJpb3JpdHk7XG4gICAgICAgIGRlc2NyaXB0aW9uRGlzcGxheS52YWx1ZSA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgLy9wdXRzIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgY2xpY2thYmxlIHRhc2tzXG4gICAgZnVuY3Rpb24gdGFza0J1dHRvbkRpc3BsYXlBc3NpZ25lcigpe1xuICAgICAgICBsZXQgYWxsVGFza0ZsZXhDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tGbGV4Jyk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8YWxsVGFza0ZsZXhDb250YWluZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgYWxsVGFza0ZsZXhDb250YWluZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzayA9IGxpc3RBcnJheUN1cnJlbnRbaV07Ly9NYWtlIHRoZSBjbGlja2VkIHRhc2sgdGhlIGN1cnJlbnQgdGFzayBmb3IgZWRpdGluZyB0aHJvdWdob3V0XG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5kUmVBZGQoKTtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXlDdXJyZW50W2ldLnBvc3RUYXNrRGV0YWlscygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFuZFJlQWRkKCl7XG4gICAgICAgICB0YWtlRXZlcnl0aGluZ09mZkluZm9Cb2FyZCgpO1xuICAgICAgICAgcHV0RXZlcnl0aGluZ09uSW5mb0JvYXJkKCk7XG4gICAgICAgICBjaGFuZ2VEdWVEYXRlQnRuRXZlbnRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciBjaGFuZ2luZyBsaXN0c1xuICAgIGZ1bmN0aW9uIGxpc3RCdXR0b25EaXNwbGF5QXNzaWduZXIoKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxidG5BcnJheS5sZW5ndGg7aSsrKXsgXG4gICAgICAgICAgICBidG5BcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5kUmVBZGQoKTtcbiAgICAgICAgICAgICAgICB0YXNrQnV0dG9uRGlzcGxheUFzc2lnbmVyKCk7XG4gICAgICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudFswXS5wb3N0VGFza0RldGFpbHMoKTsgLy9hdXRvIGRpc3BsYXlzIGZpcnN0IHRhc2sgaW4gbGlzdC8vXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSBsaXN0QXJyYXlDdXJyZW50WzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICBcblxuICAgICAgICBhZGRUYXNrLnByb3RvdHlwZS5zYXZlRGVzY3JpcHRpb25Qcm90b3R5cGUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkRpc3BsYXknKTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbkRpc3BsYXkudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzYXZlRGVzY3JpcHRpb24oKXtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLnNhdmVEZXNjcmlwdGlvblByb3RvdHlwZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vbGV0cyB5b3UgY2xpY2sgb2ZmIGFueXdoZXJlIHRvIHNhdmVcbiAgICAgICAgZnVuY3Rpb24gYmFzZUV2ZW50TGlzdGVuZXJBZGRlcigpe1xuICAgICAgICAgICAgYmFzZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsc2F2ZURlc2NyaXB0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIFxuICAgIC8vVGhlc2UgdGhyZWUgY29udHJvbCB1cGRhdGluZyBjYWxlbmRhclxuICAgIGZ1bmN0aW9uIGNoYW5nZUR1ZURhdGUoKXtcbiAgICAgICAgICAgIGxldCBjYWxlbmRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxlbmRhcicpXG4gICAgICAgICAgICBjYWxlbmRhclZhbHVlID0gY2FsZW5kYXIudmFsdWU7XG4gICAgICAgICAgICBjYWxlbmRhclZhbHVlID0gZm9ybWF0KG5ldyBEYXRlKGNhbGVuZGFyVmFsdWUpLCBcIlBQUHBcIilcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNoYW5nZUR1ZURhdGVQcm9wZXJ0eSgpO1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIH1cbiAgICAgICAgYWRkVGFzay5wcm90b3R5cGUuY2hhbmdlRHVlRGF0ZVByb3BlcnR5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBjaGFuZ2VEdWVEYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYW5nZUR1ZURhdGVCdG4nKVxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlID0gY2FsZW5kYXJWYWx1ZTtcbiAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uaW5uZXJIVE1MID0gdGhpcy5kdWVEYXRlO1xuICAgICAgICB9XG4gICAgZnVuY3Rpb24gY2hhbmdlRHVlRGF0ZUJ0bkV2ZW50TGlzdGVuZXIoKXtcbiAgICAgICAgLy9EdWUgZGF0ZSBCdG4gZGlzcGxheXMgcG9wdXAgYW5kIGVkaXRzIGl0IHRvIGRpc3BsYXkgZHVlIGRhdGUgZWRpdCBpbmZvLy9cbiAgICAgICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlRHVlRGF0ZUJ0bicpXG4gICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGxldCBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuaWQgPSAnY2FsZW5kYXInO1xuICAgICAgICAgICAgICAgIC8vZGVmYXVsdCB0aW1lIHN0dWZmXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpOyAvL25ldyBkYXRlXG4gICAgICAgICAgICAgICAgICAgIG5vdy5zZXRNaW51dGVzKG5vdy5nZXRNaW51dGVzKCkgLSBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKSk7IC8vY2FsYyBjdXJyZW50IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVybWVkaWF0ZVRpbWUgPSBhZGRNaW51dGVzKG5vdywgNSk7IC8vYWRkIDUgbWludXRlc1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhci52YWx1ZSA9IGludGVybWVkaWF0ZVRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLDE2KTsgLy9jb252ZXJ0IHRvIElTTyBhbmQgc2V0IGFzIGRlZmF1bHRcbiAgICAgICAgICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICBsZXQgYWRkRGF0ZVBvcG91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGFkZERhdGVQb3BvdXRCdG4uaWQgPSAnYWRkRGF0ZVBvcG91dEJ0bic7XG4gICAgICAgICAgICAgICAgYWRkRGF0ZVBvcG91dEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICAgICAgYWRkRGF0ZVBvcG91dEJ0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAvL3RoaXMgaXMgbm93IGp1c3QgdGhlIG1haW4gcG9wb3V0O1xuICAgICAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmlubmVySFRNTCA9ICdQaWNrIERhdGUnO1xuICAgICAgICAgICAgIC8vaGlkZGVuRGl2IGlzIGhlcmUgZm9yIENTUywgbGF6aW5lc3Mgb24gbXkgcGFydCB0byByZXVzZSB0aGUgcG9wdXAgbWFkZSBpdCBkaWZmaWN1bHQgdG8gc3R5bGUuLy9cbiAgICAgICAgICAgIGxldCBoaWRkZW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuaWQgPSAnaGlkZGVuRGl2JztcbiAgICAgICAgICAgICAgICBoaWRkZW5EaXYuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbTInKTtcbiAgICAgICAgICAgIC8vSGF2ZSB0byBwdXQgdGhlc2UgaGVyZSBzbyBpdCBjYW4gZ3JhYiB0aGUgSUQgYmVmb3JlIGVtcHR5aW5nO1xuICAgICAgICAgICAgLy9FbXB0eSB0aGUgcG9wdXBcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgd2hpbGUoZWxlbWVudHMubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2xhenlIaWRkZW5EaXYgZW1wdHkvL1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncG9wb3V0SXRlbTInKTtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50czIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3gucmVtb3ZlQ2hpbGQoZWxlbWVudHMyWzBdKTtcbiAgICAgICAgfVxuICAgICAgICAgICAgLy9BZGQgdGhlIGFkZExpc3QgbWF0ZXJpYWxzLy9cbiAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5hcHBlbmQoY2FsZW5kYXIpO1xuICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmFwcGVuZChhZGREYXRlUG9wb3V0QnRuKTtcbiAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3guYXBwZW5kKGhpZGRlbkRpdik7XG4gICAgICAgICAgICBhZGREYXRlUG9wb3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlRHVlRGF0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgICAvL2NvbnRyb2xzIHRoaXMgd2hvbGUgdGhpbmcsIG9ubHkgZnVuY3Rpb24gY2FsbGVkXG4gICAgIGZ1bmN0aW9uIGluZm9EaXNwbGF5Q29udHJvbGxlcigpe1xuICAgICAgICAvL1RoaXMgaXMgZm9yIGtlZXBpbmcgcGVyc2lzdGVuY2Ugd2hlbiBjcm9zc2luZyBpdGVtcy4gSW5mbyBkaXNwbGF5IHN0YXlzIG9uIGNyb3NzZWQgaXRlbVxuICAgICAgICBpZihkaXNwbGF5ZWRGbGFnID09IHRydWUpe1xuICAgICAgICAgICAgcmVtb3ZlQW5kUmVBZGQoKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLnBvc3RUYXNrRGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICAgIC8vVGhpcyBpcyBmb3IgYWRkaW5nIG5ldyB0YXNrcywgbWFrZXMgdGhlbSB0aGUgZGlzcGxheWVkIHRhc2svL1xuICAgICAgICBlbHNlIGlmKG5ld2x5QWRkZWRUYXNrICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSBuZXdseUFkZGVkVGFzazsgLy9uZWVkIHRvIG1ha2UgY3VycmVudCB0YXNrIHRoaXMsIG90aGVyd2lzZSB2YWx1ZSBnZXRzIG1lc3NlZCB1cCBkb3duIHBpcGUvL1xuICAgICAgICAgICAgICAgIHB1dEV2ZXJ5dGhpbmdPbkluZm9Cb2FyZCgpOyAvLyBkb24ndCBuZWVkIHRvIHJlbW92ZSBhbmQgcmVhZGQgYmMgZXZlcnl0aGluZyBhbHJlYWR5IHRha2VuIG9mZi8vXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2sucG9zdFRhc2tEZXRhaWxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vSWYgdGhlcmUgaXMgbm90aG5nIG9uIGJvYXJkIElFIGZpcnN0IHRpbWUgb3BlbmluZyBhIGxpc3QsIHRoZW4gZGVmYXVsdCBpdCB0byAwXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwdXRFdmVyeXRoaW5nT25JbmZvQm9hcmQoKTtcbiAgICAgICAgICAgIGxpc3RBcnJheUN1cnJlbnRbMF0ucG9zdFRhc2tEZXRhaWxzKCk7IC8vYXV0byBkaXNwbGF5cyBmaXJzdCB0YXNrIGluIGxpc3QvL1xuICAgICAgICAgICAgY3VycmVudFRhc2sgPSBsaXN0QXJyYXlDdXJyZW50WzBdO1xuICAgICAgICB9XG4gICAgICAgIGNoYW5nZUR1ZURhdGVCdG5FdmVudExpc3RlbmVyKCk7XG4gICAgICAgIHRhc2tCdXR0b25EaXNwbGF5QXNzaWduZXIoKTtcbiAgICAgICAgbGlzdEJ1dHRvbkRpc3BsYXlBc3NpZ25lcigpO1xuICAgICAgICBiYXNlRXZlbnRMaXN0ZW5lckFkZGVyKCk7XG4gICAgfVxuICAgIC8vSW5mb0Rpc3BsYXkgaXMgdGhlIG9ubHkgdGhpbmcgdGhhdCBmaXJlcy8vXG4gICAgaW5mb0Rpc3BsYXlDb250cm9sbGVyKCk7XG59XG5leHBvcnQge3Rha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkLCBkaXNwbGF5VGFza0RldGFpbHMsIGN1cnJlbnRUYXNrLCBkaXNwbGF5RmxhZ0ZhbHNlRm9yRGVsZXRpbmdMaXN0c30iLCJpbXBvcnQgeyBmb3JtYXRJU085MDc1LCBwYXJzZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBhZGROZXdMaXN0IGZyb20gJy4vYWRkTmV3TGlzdCc7XG5pbXBvcnQgYWRkVGFzayBmcm9tICcuL2FkZFRhc2snO1xuaW1wb3J0IHtkZWxldGVUYXNrcywgY3Jvc3NlZFRhc2tzfSBmcm9tICcuL2RlbGV0ZVRhc2tzJztcbmltcG9ydCB7ZGlzcGxheVRhc2tEZXRhaWxzLCB0YWtlRXZlcnl0aGluZ09mZkluZm9Cb2FyZH0gZnJvbSAnLi9kaXNwbGF5VGFza0RldGFpbHMnO1xuaW1wb3J0IHJlYXJyYW5nZVRhc2tzIGZyb20gJy4vcmVhcnJhbmdlVGFza3MnO1xuaW1wb3J0IHsgZ2V0QnV0dG9ucywgbmV3QmVhdXRpZnVsTGlzdEFycmF5LCBwYXJzZWRMaXN0QXJyYXlDdXJyZW50LCBwcm9kdWNlTGlzdEFycmF5LCByZW9iamVjdGVkTGlzdEFycmF5Q3VycmVudCwgc3RvcmVCdXR0b25zLCBzdG9yZWxpc3RBcnJheSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cblxuLy9kZWNsYXJlIGxpc3RBcnJheSBoZXJlIGZvciBleHBvcnQgbGF0ZXJcbmxldCBsaXN0QXJyYXkgPSBbXVxubGV0IGJ0bkFycmF5ID0gW11cbmxldCBsaXN0QXJyYXlDdXJyZW50XG5sZXQgbGlzdEFycmF5Q3VycmVudE5hbWVcbmxldCBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5ID0gW11cbmxldCBkZWxldGVUYXNrQnV0dG9uc0FycmF5ID0gW11cbmxldCB0YXNrRGlzcGxheUFycmF5ID0gW11cbmxldCBzb3J0VHJhY2tlclxubGV0IGlUcmFja2VyLy9pdHJhY2tlciBoZXJlIGNvbm5lY3RzIGRpcmVjdGx5IGFib3ZlIHRvIHBpbkxpc3RzLiBMZXRzIG1lIGNoYW5nZSB0aGUgb3JpZ2luYWwgYXJyYXkgaW5cbmxldCBmb3JtZXJBcnJheVBvc2l0aW9uVHJhY2tlclxubGV0IG5ld2x5QWRkZWRUYXNrXG5sZXQgZmlyc3RMaXN0T3BlbkZsYWcgLy9UaGlzIGZsYWcgd2lsbCBhbGxvdyBmb3IgZGVsZXRpb24gb2YgbGlzdHMgd2hlbiBub25lIGFyZSBvcGVuIGF0IHN0YXJ0IG9mIHByb2dyYW0gZXhwb3J0ZWQgdG8gZGlzcGxheVRhc2tEZXRhaWxzLy9cbmxldCBpZENvdW50ZXJGb3JUYXNrc0luUGluTGlzdCAvL3RoZXNlIHNldCBpZCdzIGF2YWlsYWJsZSBmb3IgZHJhZ2dpbmcgYW5kIGRyb3BwaW5nLy9cbmxldCBpZENvdW50ZXJGb3JUYXNrc0luUGluTGlzdDJcblxuLy9UaGlzIGZ1bmN0aW9uIGNvbnRyb2xzIGRpc3BsYXkgb24gdGhlIHBvcHVwLiBUaGlzIGluY2x1ZGVzIGNsaWNrcyBmcm9tIHRoZSBzaWRlIG1lbnUsIGFkZGl0aW9ucyBmcm9tIHRoZSBwb3B1cC8vXG5mdW5jdGlvbiBvcGVuTGlzdHMgKCl7XG4gICAgLy90YXNrUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vRGVmYXVsdHMgcG9wdXAgdG8gaW52aXNpYmxlIGJlZm9yZSBhIGxpc3QgaXMgY2xpY2tlZFxuICAgIC8vdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBcbiAgICAvL0Rpc3BsYXlzIHRoZSBhZGRUb0xpc3QgcG9wdXAgd2hlbiBjbGlja2VkIGluIG1lbnVcbiAgIFxuICAgICAgICAvL1ByZXNldCBsaXN0cy8vXG4gICAgICAgICAgICBjb25zdCBtb25kYXlHcm9jZXJ5ID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgJ09yYW5nZXMnLFxuICAgICAgICAgICAgICAgICdMaXN0IGZvciBXZWVrIDQvNCcsXG4gICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAnSGlnaCdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHdlZEdyb2NlcnkgPSBuZXcgYWRkVGFzayhcbiAgICAgICAgICAgICAgICAnUGVhcnMnLFxuICAgICAgICAgICAgICAgICdMaXN0IGZvciBXZWVrIDQvNCcsXG4gICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAnTWVkaXVtJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgZnJpZGF5R3JvY2VyeSA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgICdHcmFwZXMnLFxuICAgICAgICAgICAgICAgICdMaXN0IGZvciBXZWVrIDQvNCcsXG4gICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAnTG93J1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0QXJyYXkgPSBbbW9uZGF5R3JvY2VyeSwgd2VkR3JvY2VyeSwgZnJpZGF5R3JvY2VyeSxdO1xuICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0QXJyYXkuaW5uZXJIVE1MID0gJ0dyb2Nlcmllcyc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsYXVuZHJ5ID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ0xpc3QgZm9yIFdlZWsgNC80JyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdW5kcnkyID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICcyJyxcbiAgICAgICAgICAgICAgICAgICAgJ0xpc3QgZm9yIFdlZWsgNC80JyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdW5kcnkzID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICczJyxcbiAgICAgICAgICAgICAgICAgICAgJ0xpc3QgZm9yIFdlZWsgNC80JyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdW5kcnk0ID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICc0JyxcbiAgICAgICAgICAgICAgICAgICAgJ0xpc3QgZm9yIFdlZWsgNC80JyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdW5kcnk1ID0gbmV3IGFkZFRhc2soXG4gICAgICAgICAgICAgICAgICAgICc1JyxcbiAgICAgICAgICAgICAgICAgICAgJ0xpc3QgZm9yIFdlZWsgNC80JyxcbiAgICAgICAgICAgICAgICAgICAgJ1NldCBUaW1lJyxcbiAgICAgICAgICAgICAgICAgICAgJ0hpZ2gnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgbGV0IGhvdXNlTGlzdEFycmF5ID0gW2xhdW5kcnksIGxhdW5kcnkyLCBsYXVuZHJ5MywgbGF1bmRyeTQsIGxhdW5kcnk1LF07XG4gICAgICAgICAgICAgICAgaG91c2VMaXN0QXJyYXkuaW5uZXJIVE1MID0gJ1dlZWtseSBIb3VzZXdvcmsnO1xuICAgICAgICAvL3RoZXNlIElEJ3Mgd2VyZSBkZWZpbmVkIGluIHRoZSBza2VsZXRvbi8vXG4gICAgICAgICAgICBsZXQgZ3JvY2VyeUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwJyk7XG4gICAgICAgICAgICBsZXQgaG91c2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMScpO1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhpcyB1c2VyIGhhcyBldmVyIGxvYWRlZCB0aGUgbGlzdHMgYXBwLCBpZiBpdCBpcywgdGhlbiBkZWZhdWx0IHRvIG9yaWdpbmFsIHNldHRpbmdzLy9cbiAgICAgICAgICAgIGxldCBmaXJzdExvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJyk7XG4gICAgICAgICAgICBsZXQgYnRuQXJyYXlTYXZlZENoZWNrZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRuQXJyYXknKTtcbiAgICAgICAgICAgIGxldCBsaXN0QXJyYXlTYXZlZENoZWNrZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdEFycmF5Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmaXJzdExvYWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmaXJzdExvYWQgPT0gJ2ZhbHNlJyAmJiBidG5BcnJheVNhdmVkQ2hlY2tlciAhPSBudWxsICYmIGxpc3RBcnJheVNhdmVkQ2hlY2tlciAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBnZXRCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgcHJvZHVjZUxpc3RBcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmlyc3RMb2FkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpcnN0TG9hZCk7XG4gICAgICAgICAgICAgICAgYnRuQXJyYXkgPSBbZ3JvY2VyeUJ0biwgaG91c2VCdG4sXTtcbiAgICAgICAgICAgICAgICBsaXN0QXJyYXkgPSBbZ3JvY2VyeUxpc3RBcnJheSwgaG91c2VMaXN0QXJyYXksXTtcbiAgICAgICAgICAgIH1cbn0gICBcblxuICAgLy9UaGlzIHByb3RvdHlwZSBpcyBiZWluZyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgY2F0ZWdvcmllcyBmcm9tIHRoZSBsaXN0cyBvbiB0byB0aGUgcG9wdXAsIGl0IGFsc28gY3JlYXRlcyB0aGUgYnV0dG9ucy8vXG4gICBhZGRUYXNrLnByb3RvdHlwZS5kaXNwbGF5TGlzdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgLy90aGUgdGFza0ZsZXhDb250YWluZXJzIHJlYWxseSBzaG91bGQgYmUgb2JqZWN0cy8vXG4gICAgICAgIGxldCB0YXNrRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL0l0IGJlaW5nIGEgYnV0dG9uIG1ha2VzIGl0IGNsaWNrYWJsZVxuICAgICAgICAgICAgLy90YXNrRmxleENvbnRhaW5lci5pZCA9ICd0YXNrRmxleENvbnRhaW5lcic7XG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5jbGFzc0xpc3QgPSAndGFza0ZsZXgnXG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5pZCA9IGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0OyAvL0dpdmluZyBJRCB0byBjcm9zc2VkSVRFTVNcblxuICAgICAgICAvL2J1dHRvbnMgdG8gY3Jvc3MgYSB0YXNrIG9mZiwgbW92aW5nIGl0IHRvIGJvdHRvbSBvZiB0aGUgYXJyYXkvL1xuICAgICAgICBsZXQgdGFza0Nyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQ3Jvc3NCdG4uY2xhc3NMaXN0LmFkZCgndGFza0Nyb3NzQnRuJywgJ2J0bicpO1xuICAgICAgICAgICAgY3VycmVudENyb3NzVGFza0J1dHRvbnNBcnJheS5wdXNoKHRhc2tDcm9zc0J0bik7IC8vYXJyYXkgb2YgYnV0dG9ucyBmb3IgY3Jvc3NpbmcgdGFza3MvL1xuICAgICAgICBsZXQgdGFza0Rpc3BsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGFza05hbWU7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0ID0gJ3Rhc2snO1xuICAgICAgICAgICAgdGFza0Rpc3BsYXlFbGVtZW50LmlkID0gaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyOyAvL0dpdmluZyBJRCB0byBjcm9zc2VkSVRFTVNcbiAgICAgICAgLy9idXR0b25zIHRvIHJlbW92ZSBhIHRhc2sgZnJvbSB0aGUgYXJyYXkgYWZ0ZXIgYmVpbmcgY3Jvc3NlZCBvZmZcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J0bicsICdidG4nLCAndGFza0Nyb3NzQnRuJyk7XG4gICAgICAgICAgICBkZWxldGVUYXNrQnRuLmlubmVySFRNTCA9ICcmIzEwMDA2Oyc7XG4gICAgICAgIC8vYXBwZW5kIGV2ZXJ5dGhpbmdcbiAgICAgICAgbGV0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEaXNwbGF5Q29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0YXNrRmxleENvbnRhaW5lcik7XG4gICAgICAgIHRhc2tGbGV4Q29udGFpbmVyLmFwcGVuZCh0YXNrQ3Jvc3NCdG4pO1xuICAgICAgICB0YXNrRmxleENvbnRhaW5lci5hcHBlbmQodGFza0Rpc3BsYXlFbGVtZW50KTtcbiAgICAgICAgLy9pZiBjcm9zc2VkLCBtYWtlIGl0IGxvb2sgY3Jvc3NlZCBhbmQgYXBwZW5kIHRoZSBmaW5hbCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGlmKHRoaXMuY29tcGxldGVTdGF0dXMgPT0gJ2Nyb3NzZWQnKXsgLy90cmFja3MgY29tcGxldGUgc3RhdHVzIG1vZGlmaWVkIGluIGRlbGV0ZVRhc2tzLy9cbiAgICAgICAgICAgIHRhc2tEaXNwbGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkJyk7XG4gICAgICAgICAgICB0YXNrRmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcm9zc2VkQ29sb3JzJyk7XG4gICAgICAgICAgICB0YXNrQ3Jvc3NCdG4uY2xhc3NMaXN0LmFkZCgnY3Jvc3NlZFRhc2tCdG4nKTtcbiAgICAgICAgICAgIHRhc2tDcm9zc0J0bi5pbm5lckhUTUwgPSAnXFx1MjcxMyc7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVsaWdpYmxlID0gJ2VsaWdpYmxlJzsvL01ha2UgaXQgZWxpZ2libGUgZm9yIGRlbGV0aW9uXG4gICAgICAgICAgICBkZWxldGVUYXNrQnV0dG9uc0FycmF5LnB1c2goZGVsZXRlVGFza0J0bik7IC8vcHVzaCB0byBhbiBhcnJheSBvZiBidXR0b25zIGZvciBkZWxldGluZyB0YXNrcywgbmVlZHMgdG8gYmUgaGVyZSBzbyB0aGF0IGl0IGRvZXNuJ3QgYXBwZW5kIGludmlzaWJsZSBidXR0b25zLy9cbiAgICAgICAgICAgIHRhc2tGbGV4Q29udGFpbmVyLmFwcGVuZChkZWxldGVUYXNrQnRuKTtcbiAgICAgICAgfVxuICAgICAgICAvL01ha2Ugc3VyZSBzb21ldGhpbmcgY2FuJ3QgYmUgZGVsZXRlZC8vXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVsaWdpYmxlID0gJ2luZWxpZ2libGUnO1xuICAgICAgICAgICAgdGFza0Nyb3NzQnRuLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gfVxuXG4vL1RoZXNlIHR3byBwcm90b3R5cGVzIHdvcmsgd2l0aCBwaW5MaXN0IHRvIHNvcnQgdGhlIGRpc3BsYXllZCBieSBjaGVja2VkL3VuY2hlY2tlZFxuICAgIGFkZFRhc2sucHJvdG90eXBlLnNvcnRVbmNoZWNrZWREaXNwbGF5QXJyYXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlU3RhdHVzID09IHVuZGVmaW5lZCB8fCB0aGlzLmNvbXBsZXRlU3RhdHVzID09ICdpbmNvbXBsZXRlJyl7IC8vaWYgdW5jcm9zc2VkXG4gICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5LnB1c2goc29ydFRyYWNrZXIpIC8vc29ydFRyYWNrZXIgaXMgbGlzdEFycmF5Q3VycmVudFxuICAgICAgICAgICAgdGFza0Rpc3BsYXlBcnJheS5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5mb3JtZXJBcnJheVBvc2l0aW9uIC0gYi5mb3JtZXJBcnJheVBvc2l0aW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkVGFzay5wcm90b3R5cGUuc29ydENoZWNrZWREaXNwbGF5QXJyYXkgPSBmdW5jdGlvbigpe1xuICAgICAgICBpZih0aGlzLmNvbXBsZXRlU3RhdHVzID09ICdjcm9zc2VkJyl7XG4gICAgICAgICAgICB0YXNrRGlzcGxheUFycmF5LnB1c2goc29ydFRyYWNrZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAvL3BpbiBsaXN0IGFuZCBhc3NpZ24gYnV0dG9ucyBhcmUgZnVuZGFtZW50YWxseSBjb25uZWN0ZWQgYmVjYXVzZSBvZiBsaXN0QXJyYXlDdXJyZW50LCB3aGljaCBpcyB0aGUgYXJyYXkgd2l0aGluIHRoZSBhcnJheS8vXG5cbiAvL3NvcnRzIHRoZSBhcnJheSBiZXR3ZWVuIHdoYXQgaXMgXG5mdW5jdGlvbiBwaW5MaXN0KCl7XG4gICAgdGFza0Rpc3BsYXlBcnJheSA9IFtdIC8vRW1wdHkgdGhlIHRhc2tEaXNwbGF5IGFycmF5IGZyb20gbGFzdCBydW4gc28gdGhhdCBpdCBkb2Vzbid0IG92ZXJmbG93IHdpdGggb2xkIHZhbHVlc1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFza0ZsZXgnKTtcbiAgICAvL0VtcHRpZXMgdGhlIHZpc3VhbCBkaXNwbGF5IGZvciByZXBpbm5pbmdcbiAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXsgXG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcbiAgICAgIFxuICAgICAgICBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5ID0gW107IC8vTmVlZCB0byByZXNldCB0aGlzIGFycmF5IHNvIHRoYXQgdGhlIGkgaW4gZGVsZXRlVGFza3MgZG9lc24ndCBjb250aW51YWxseSBjb3VudC4gUGVyaGFwcyBhIGJpdCB0b28gZW50ZXJ0d2luZWQvL1xuICAgICAgICBkZWxldGVUYXNrQnV0dG9uc0FycmF5ID0gW107IC8vc2FtZVxuICAgIH1cblxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCBsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aDsgcCsrKXsgLy9wdXNoIHRoZSB1bmNoZWNrZWQgaXRlbXMgbGlzdEFycmF5IHRvIHRoZSB0YXNrRGlzcGxheSBhcnJheVxuICAgICAgICBzb3J0VHJhY2tlciA9IGxpc3RBcnJheUN1cnJlbnRbcF1cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudFtwXS5zb3J0VW5jaGVja2VkRGlzcGxheUFycmF5KCk7XG4gICAgfSBcbiAgICBmb3IobGV0IHAgPSAwOyBwIDwgbGlzdEFycmF5Q3VycmVudC5sZW5ndGg7IHArKyl7IC8vcHVzaCB0aGUgY2hlY2tlZCBvZmYgaXRlbXMgdG8gdGhlIHRhc2tEaXNwbGF5IGFycmF5IHNvIHRoZXkgcGluIGJlbG93XG4gICAgICAgIHNvcnRUcmFja2VyID0gbGlzdEFycmF5Q3VycmVudFtwXVxuICAgICAgICBsaXN0QXJyYXlDdXJyZW50W3BdLnNvcnRDaGVja2VkRGlzcGxheUFycmF5KCk7XG4gICAgfVxuICAgIGxpc3RBcnJheUN1cnJlbnQgPSBbXSAvL2VtcHR5IGxpc3RBcnJheSBmb3IgcmVmaWxsIGF0IGJvdHRvbSBvZiBmdW5jdGlvblxuXG4gICAgZm9yKGxldCBwID0gMDsgcCA8IGNyb3NzZWRUYXNrcy5sZW5ndGg7IHArKyl7IC8vcHVzaCBjcm9zc2VkIHRhc2tzIGFycmF5IGZyb20gZGVsZXRlVGFza3MgdG8gZGlzcGxheSBhcnJheS4gVGhpcyB3aWxsIG1ha2UgdGhlbSBhcHBlYXIgYXQgdGhlIGJvdHRvbS5cbiAgICAgICAgdGFza0Rpc3BsYXlBcnJheS5wdXNoKGNyb3NzZWRUYXNrc1twXSlcbiAgICB9XG4gICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QgPSAwXG4gICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyID0gMFxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCB0YXNrRGlzcGxheUFycmF5Lmxlbmd0aDsgcCsrKXsgIC8vZGlzcGxheSB0aGUgdGFza0Rpc3BsYXlBcnJheVxuICAgICAgICB0YXNrRGlzcGxheUFycmF5W3BdLmRpc3BsYXlMaXN0KCk7XG4gICAgICAgIGlkQ291bnRlckZvclRhc2tzSW5QaW5MaXN0KysgLy9pbmNyZWFzZXMgdG8gYWRkIElEJ3MgdG8gdGFza3NcbiAgICAgICAgaWRDb3VudGVyRm9yVGFza3NJblBpbkxpc3QyKytcbiAgICB9IFxuICAgIGRlbGV0ZVRhc2tzKCk7IC8vcnVuIGRlbGV0ZSB0YXNrcyB0byBhc3NpZ24gZXZlbnQgbGlzdGVuZXIgdG8gbmV3IGNoZWNrb2ZmIGJ1dHRvbnNcblxuICAgIGZvcihsZXQgcCA9IDA7IHAgPCB0YXNrRGlzcGxheUFycmF5Lmxlbmd0aDsgcCsrKXsvL3B1c2ggYWxsIHRoZSBkaXNwbGF5IGFycmF5IHRvIHRoZSBwcmV2aW91c2x5IGVtcHRpZWQgY3VycmVudCBsaXN0IGFycmF5IGZvciBkaXNwbGF5IGlmIGNoYW5naW5nIGxpc3RzLy9cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudC5wdXNoKHRhc2tEaXNwbGF5QXJyYXlbcF0pIC8vc2F2ZXMgdGVtcG9yYXJ5IGNvcHkgZm9yIHdoZW4gbGlzdCBpcyBzZWxlY3RlZFxuICAgICB9IFxuICAgICBjb25zb2xlLmxvZygnbGlzdEFycmF5Q3VycmVudEF0RW5kT2ZQaW5uaW5nJylcbiAgICAgY29uc29sZS5sb2cobGlzdEFycmF5Q3VycmVudCk7XG4gICAgIGxpc3RBcnJheVtpVHJhY2tlcl0gPSBsaXN0QXJyYXlDdXJyZW50OyAvL2NoYW5nZXMgb3JpZ2luYWwgYXJyYXkgc28gdGhhdCBtb2RpZmljYXRpb25zIHNhdmUgd2hlbnMgc3dpdGNoaW5nIGIvdyBsaXN0c1xuICAgICBzdG9yZWxpc3RBcnJheSgpOyAvL3NhdmVzIG5ldyBsaXN0QXJyYXkuIEtpbmQgb2YgaGF2ZSB0byBkbyBpdCBoZXJlIGluc3RlYWQgb2YgYWRkaW5nIGl0IGp1c3Qgd2hlbiBhZGRpbmcgYSB0YXNrIGJlY2F1c2Ugb2YgaG93IEkgdXNlZCBsaXN0QXJyYXlDdXJyZW50IGFuZCBsaXN0QXJyYXkgcHJldmlvdXNseVxuICAgICBpZihsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aCA9PSAwKXtcbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgIGRpc3BsYXlUYXNrRGV0YWlscygpO1xuICAgICByZWFycmFuZ2VUYXNrcygpO1xuICAgIH1cblxuXG4vL2xpc3RBcnJheXMgZGlyZWN0bHkgc28gdGhhdCBpdCBkb2Vzbid0IHJlc2V0IHdoZW4gaGl0dGluZyB0aGUgbGlzdCBidXR0b25cbi8vZm9yIGxvb3AgaGVyZSBhc3NpZ25zIGV2ZW50IGxpc3RlbmVyIHRvIG1lbnUgbGlzdCBidXR0b25zIHRvIGRpc3BsYXkgdGFzayBpbmZvcm1hdGlvbiBmcm9tIHN0b3JhZ2UgYXJyYXlzIC0gSUlGRS8vXG5mdW5jdGlvbiBhc3NpZ25CdXR0b25zKCl7XG4gICAgZm9yKGxldCBpPTA7IGkgPCBidG5BcnJheS5sZW5ndGg7aSsrKXsgLy9Hb2VzIHRocm91Z2ggZWFjaCBpdGVtIGluIGJ1dHRvbiBhcnJheSBhbmQgYXNzaWducyBzYWlkIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGJ0bkFycmF5W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXNzaWduQnV0dG9uc0V2ZW50TGlzdGVuZXIpXG4gICAgfVxufTtcblxuZmlyc3RMaXN0T3BlbkZsYWcgPSBmYWxzZTtcbi8vZXZlbnQgaW5zdGVhZCBvZiBldmVudCBsaXN0ZW5lcj9cbmZ1bmN0aW9uIGFzc2lnbkJ1dHRvbnNFdmVudExpc3RlbmVyKGV2ZW50KXtcbiAgICBsZXQgdGFza1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUG9wb3V0Qm94Jyk7XG4gICAgY29uc3QgY2xpY2tlZEJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5mb1BvcG91dEJveCcpXG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9zZWxlY3RzIHRoZSBudW1iZXIgaW4gdGhlIGxpc3RBcnJheSBlcXVpdmFsZW50IHdpdGggdGhlIHBvc2l0aW9uIGluIHRoZSBidXR0b25BcnJheSwgYWxsb3dpbmcgc2VsZWN0aW9uIG9mIHRoZSBjb3JyZWN0IGxpc3QvL1xuICAgICAgICAgICAgICAgIC8vQnV0dG9uIGFycmF5IGN5Y2xlcyB0aHJvdWdoIGF0IHN0YXJ0IG9mIGZ1bmN0aW9uICYgYXNzaWducyB0aGUgaSB2YWx1ZXRvIHNlbGVjdCB0aGUgY29ycmVjdCBpdGVtIGluIHRoZSBhcnJheS4gVGhpcyBpcyBQUkUtRE9ORSBhdCBiZWdpbm5pbmcgb2YgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgbGlzdEFycmF5Q3VycmVudCA9IGxpc3RBcnJheVtjbGlja2VkQnRuLmlkXTsgICAgLy9zZXRzIHZhcmlhYmxlIHRvIGJlIHVzZWQgc28gaW4gbmVzdGVkIGxvb3Agc28gdGhhdCBuZXN0ZWQgbG9vcCBkb2Vzbid0IG1vdmUgdGhyb3VnaCB0byBkaWZmZXJlbnQgcGFydCBvZiB0aGUgYXJyYXkgdGhyb3VnaCBhY2NpZGVudGFsIGluY3JlbWVudGluZy8vXG4gICAgICAgICAgICAgICAgaVRyYWNrZXIgPSBjbGlja2VkQnRuLmlkXG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvL21ha2VzIHRoZSBwb3BvdXQgbGlzdCBib3ggYXBwZWFyIHdoZW4gY2xpY2tpbmcgdGhlIGxpc3QgYnV0dG9uIG9uIHNpZGUgbWVudVxuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdE5hbWVEaXNwbGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5pbm5lckhUTUwgPSBidG5BcnJheVtjbGlja2VkQnRuLmlkXS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaWYobGlzdEFycmF5Q3VycmVudC5sZW5ndGggPiAwKXsgLy9kZXRlcm1pbmVzIGlmIHRoZSBkZXRhaWxzIHNjcmVlbiBzaG93cyB1cC4gV29uJ3Qgc2hvdyBpZiBubyB0YXNrcyB0byBkaXNwbGF5IGRldGFpbHMgZm9yLy9cbiAgICAgICAgICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdEFycmF5Q3VycmVudC5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxpc3RBcnJheUN1cnJlbnROYW1lID0gbGlzdE5hbWVEaXNwbGF5LmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAvL2NsZWFyIHNlbGVjdGVkIGxpc3QgZm9yIHJlYXNzaWdubWVudFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpIDwgYnRuQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkFycmF5W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkTGlzdCcpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGlja2VkQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkTGlzdCcpIC8vdHVybnMgY3VycmVudGx5IHNlbGVjdGVkIGxpc3QgYmx1ZVxuICAgICAgICAgICAgZmlyc3RMaXN0T3BlbkZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgYXNzaWduRm9ybWVyUG9zaXRpb25zKCk7XG4gICAgICAgICAgICBwaW5MaXN0KCk7XG59XG5cblxuLy90aGlzIHByb3RvdHlwZSBzYXZlcyBwb3NpdGlvbnMgZm9yIHRyYWNraW5nXG5hZGRUYXNrLnByb3RvdHlwZS5zYXZlRm9ybWVyQXJyYXlQb3NpdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5mb3JtZXJBcnJheVBvc2l0aW9uID0gZm9ybWVyQXJyYXlQb3NpdGlvblRyYWNrZXI7XG59XG5cbiAgICAvL0Fzc2lnbnMgZm9ybWVyIGFycmF5IHBvc2l0aW9uIGZvciBzb3J0aW5nXG5mdW5jdGlvbiBhc3NpZ25Gb3JtZXJQb3NpdGlvbnMoKXtcbiAgICBcbiAgICAvL3NvcnRzIHRoZSBjdXJyZW50IGxpc3QgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgZ2V0cyBpdHMgY29ycmVjdCBwb3NpdGlvbiBudW1iZXIuXG4gICAgLy9UaGlzIG1lYW5zIGNyb3NzZWQgaXRlbXMgcmV0YWluIHRoZWlyIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgbGlzdEFycmF5Q3VycmVudC5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEuZm9ybWVyQXJyYXlQb3NpdGlvbiAtIGIuZm9ybWVyQXJyYXlQb3NpdGlvbjtcbiAgICB9KTtcbiAgICBmb3IobGV0IHAgPSAwOyBwIDwgbGlzdEFycmF5Q3VycmVudC5sZW5ndGg7IHArKyl7IC8vbG9vcCB0aHJvdWdoIGN1cnJlbnQgYXJyYXkgYXNzaWduaW5nIHRyYWNraW5nIG51bWJlclxuICAgICAgICBmb3JtZXJBcnJheVBvc2l0aW9uVHJhY2tlciA9IHA7XG4gICAgICAgIGxpc3RBcnJheUN1cnJlbnRbcF0uc2F2ZUZvcm1lckFycmF5UG9zaXRpb24oKTsgLy9zYXZlcyBjdXJyZW50IHBvc2l0aW9uIHRocm91Z2ggcHJvdG90eXBlXG4gICAgICAgIFxuICAgIH0gICAgXG59XG5cblxuLy9UaGlzIGNvbnRyb2xzIHRoZSBidWlsdCBpbiBhZGRpbmcgb2YgdGFza3MgYnkgdXNlciBpbnB1dCBsb2NhdGVkIG9uIHRoZSB0YXNrcyBkaXNwbGF5IHBvcHVwIC0tSUlGRS8vXG4vL0xvY2F0ZWQgaGVyZSBiZWNhdXNlIG9mIHBpbkxpc3QvL1xuZnVuY3Rpb24gYWRkVGFza1RvTGlzdCAoKSB7XG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J0bicpO1xuICAgIGxldCB1c2VyVGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJUYXNrSW5wdXQnKTtcbiAgICAvL3dvdWxkIHRoaXMgYmUgY2xlYW5lciBqdXN0IHB1dCBpbnRvIHRvIGV2ZW50IGxpc3RlbmVyIHJhdGhlciB0aGFuIGNhbGxpbmcgZnVuY3Rpb24gYXQgZW5kPy8vXG4gICAgZnVuY3Rpb24gYWRkVGFza1doZW5DbGlja0J0biAoKXtcbiAgICAgIC8vICBsZXQgdXNlclRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyVGFza0lucHV0Jyk7XG4gICAgICAgIGxldCB1c2VyVGFza0lucHV0VmFsdWUgPSB1c2VyVGFza0lucHV0LnZhbHVlXG4gICAgICAgIC8vSWYgc3RhdGVtZW50IGNhdGNoZXMgZWRnZSBjYXNlIG9mIG5vdCBoYXZpbmcgYSB2YWx1ZSBvciBvbmx5IHB1dHRpbmcgaW4gc3BhY2VzLy9cbiAgICAgICAgICAgIGlmKHVzZXJUYXNrSW5wdXRWYWx1ZS50cmltKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICB1c2VyVGFza0lucHV0VmFsdWUgPSAnJ1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vY3JlYXRlcyBuZXcgYWRkdGFzaywgcHVzaGVzIGl0IHRvIGN1cnJlbnQgYXJyYXksIHBpbnMgaXQgdG8gYm9hcmQsIGVyYXNlcyB3aGF0IGlzIHR5cGVkLy9cbiAgICAgICAgICAgIGxldCB1c2VyQWRkVGFzayA9IG5ldyBhZGRUYXNrKFxuICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAnU2V0IFRpbWUnLFxuICAgICAgICAgICAgICAgICdIaWdoJyxcbiAgICAgICAgICAgICAgICAnaW5jb21wbGV0ZSdcbiAgICAgICAgICAgIClcbiAgICAgICAgbmV3bHlBZGRlZFRhc2sgPSB1c2VyQWRkVGFzazsgLy9hc3NpZ25zIHZhbHVlIHNvIHRoYXQgaXQgbWF5IGJlIGRpc3BsYXllZCB0byBpbmZvIHBhbmVsLy9cbiAgICAgICAgbGlzdEFycmF5Q3VycmVudC5wdXNoKHVzZXJBZGRUYXNrKTtcbiAgICAgICAgYXNzaWduRm9ybWVyUG9zaXRpb25zKCk7XG4gICAgICAgIHBpbkxpc3QoKTtcbiAgICAgICAgLy9kaXMgZGlzcGxheXMgaW5mbyBib3ggd2hlbiBoaXR0aW5nIHRoZSArIGJ1dHRvblxuICAgICAgICBpZihsaXN0QXJyYXlDdXJyZW50Lmxlbmd0aCA+IDApeyAvL0lmIHRoZSBuZXcgbGlzdCBpcyBlbXB0eSwgbWFrZSBpdCBzaG93IHVwLCB0YWtlIGV2ZXJ5dGhpbmcgb2ZmIGl0LCB0aGVuIHBpbiB0aGUgbmV3bHkgYWRkZWQgdGFza1xuICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIHRha2VFdmVyeXRoaW5nT2ZmSW5mb0JvYXJkKCk7XG4gICAgICAgICAgIGRpc3BsYXlUYXNrRGV0YWlscygpO1xuICAgICAgICAgICBuZXdseUFkZGVkVGFzayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxpc3RBcnJheUN1cnJlbnQubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICB1c2VyVGFza0lucHV0LnZhbHVlID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgICAgIH1cbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFza1doZW5DbGlja0J0bik7XG4gICAgLy9lbnRlciBrZXkgZnVuY3Rpb25hbGl0eS8vXG4gICAgdXNlclRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgfTtcblxuXG5cbmZ1bmN0aW9uIGVhc3lFeHBvcnQoKXtcbiAgICBvcGVuTGlzdHMoKTtcbiAgICAvL3Bpbkxpc3RBdExvYWRcbiAgICBhc3NpZ25CdXR0b25zKCk7XG4gICAgYWRkVGFza1RvTGlzdCgpO1xufVxuXG5cbmV4cG9ydCB7bGlzdEFycmF5LCBidG5BcnJheSwgbGlzdEFycmF5Q3VycmVudCwgdGFza0Rpc3BsYXlBcnJheSwgbGlzdEFycmF5Q3VycmVudE5hbWUsIFxuICAgICAgICBjdXJyZW50Q3Jvc3NUYXNrQnV0dG9uc0FycmF5LCBkZWxldGVUYXNrQnV0dG9uc0FycmF5LCBuZXdseUFkZGVkVGFzaywgZmlyc3RMaXN0T3BlbkZsYWd9XG5cbmV4cG9ydCB7b3Blbkxpc3RzLCBlYXN5RXhwb3J0LGFzc2lnbkJ1dHRvbnMsIHBpbkxpc3R9ICIsImltcG9ydCB7IGlzVGhpc1NlY29uZCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5Q3VycmVudCwgcGluTGlzdCB9IGZyb20gXCIuL21lbnVEaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlYXJyYW5nZVRhc2tzKCl7XG4gICAgbGV0IGFsbFRhc2tGbGV4Q29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrRmxleCcpO1xuICAgIGxldCBjbGlja2VkVGFza1xuICAgIGxldCBkcm9wWm9uZVxuICAgIGxldCBkcmFnZ2FibGVFbGVtZW50XG4gICAgbGV0IGlkXG4gICAgbGV0IGluZGV4T2ZEcm9wUG9zaXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tGbGV4Q29udGFpbmVycy5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgYWxsVGFza0ZsZXhDb250YWluZXJzW2ldLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIGFsbFRhc2tGbGV4Q29udGFpbmVyc1tpXS5vbmRyYWdzdGFydCA9IHRhc2tJc0NsaWNrZWQ7XG4gICAgICAgIGFsbFRhc2tGbGV4Q29udGFpbmVyc1tpXS5vbmRyYWdvdmVyID0gb25EcmFnT3ZlcjtcbiAgICAgICAgYWxsVGFza0ZsZXhDb250YWluZXJzW2ldLm9uZHJvcCA9IG9uRHJvcDtcbiAgICAgICAvLyBhbGxUYXNrRmxleENvbnRhaW5lcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignb25kcmFnc3RhcnQnLCB0YXNrSXNDbGlja2VkKTtcbiAgICAgICAgLy9hbGxUYXNrRmxleENvbnRhaW5lcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRyb3ApO1xuICAgIH1cbiAgICAvL0dldCB0aGUgSUQgb2YgdGhlIHRoaW5nIGNsaWNrZWRcbiAgICBmdW5jdGlvbiB0YXNrSXNDbGlja2VkKGV2ZW50KXtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0JykpXG4gICAgfVxuICAgIC8vVGhpcyBhbGxvd3MgdGhlIGRyYWdnaW5nIHRvIGFjdHVhbGx5IHRha2UgcGxhY2UvL1xuICAgIGZ1bmN0aW9uIG9uRHJhZ092ZXIoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnSSBhbSBmaXJpbmcnKVxuICAgICAgICAvL2V2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChjbGlja2VkVGFzayk7XG4gICAgfVxuICAgIC8vT24gdGhlIGRyb3AsIGdldCB0aGUgaWQsIGNoYW5nZSB0aGUgcG9zaXRpb25zLCBhbmQgcGluIGl0Ly9cbiAgICBmdW5jdGlvbiBvbkRyb3AoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkcmFnZ2FibGVFbGVtZW50JylcbiAgICAgICAgY29uc29sZS5sb2coZHJhZ2dhYmxlRWxlbWVudCk7XG4gICAgICAgIGRyb3Bab25lID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bab25lJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyb3Bab25lKTtcbiAgICAgICAgY2hhbmdlQXJyYXlQb3NpdG9uc1doZW5EcmFnZ2VkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IGFycmF5IGN1cnJlbnQgYWZ0ZXIgZHJhZycpXG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheUN1cnJlbnQpO1xuICAgICAgICBwaW5MaXN0KCk7XG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5jbGVhckRhdGEoKTtcbiAgICB9XG4gICBcbiAgICAvL09uIHRoZSBkcm9wIGl0IGZpbmRzIHRoZSBpbmRleGVzIG9mIHRoZSBkcmFnZ2VlIGFuZCB0aGUgZHJvcCBwb3NpdGlvbiwgcmVtb3ZlcyBhbmQgYWRkcyB0byB0aGUgbGlzdCBhcnJheSBhY2NvcmRpbmdseVxuICAgIC8vdGhlbiBjYWxscyB0aGUgcHJvdG90eXBlIGJlbG93IHRvIGNoYW5nZSB0aGVpciBmb3JtZXIgcG9zaXRpb24gc28gdGhleSBhcmVuJ3QgcmVvcmRlcmVkIGJ5IHBpbmxpc3QvL1xuICAgIC8vRnVuY3Rpb25zIG9mZiBvZiBJRCdzIHNldCB3aGVuIG9yaWdpbmFsbHkgcGlubmluZy4gVGhlIHRhc2tzIGFuZCB0YXNrQ29udGFpbmVycyBoYXZlIHRoZSBzYW1lIElEXG4gICAgLy9XaGljaCBJIGZlZWwgbGlrZSBpcyBtZXNzeSBidXQgd29ya3Mgd2VsbCBlbm91Z2ggZm9yIHRoaXMuXG4gICAgZnVuY3Rpb24gY2hhbmdlQXJyYXlQb3NpdG9uc1doZW5EcmFnZ2VkKCl7XG4gICAgICAgIGluZGV4T2ZEcm9wUG9zaXRpb24gPSBkcm9wWm9uZS5pZDtcbiAgICAgICAgbGV0IGluZGV4T2ZIZWxkSXRlbSA9IGlkOyAvL21heWJlIHVubmVjZXNzYXJ5IGJ1dCBlYXNpZXIgdG8gcmVhZCBmb3IgbWU7XG4gICAgICAgIGxldCBoZWxkSXRlbUFjdHVhbE9iamVjdCA9IGxpc3RBcnJheUN1cnJlbnRbaW5kZXhPZkhlbGRJdGVtXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhlbGRJdGVtQWN0dWFsT2JqZWN0KVxuICAgICAgICBsaXN0QXJyYXlDdXJyZW50LnNwbGljZShpbmRleE9mSGVsZEl0ZW0sMSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RBcnJheUN1cnJlbnQpO1xuICAgICAgICBsaXN0QXJyYXlDdXJyZW50LnNwbGljZShpbmRleE9mRHJvcFBvc2l0aW9uLDAsaGVsZEl0ZW1BY3R1YWxPYmplY3QpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0QXJyYXlDdXJyZW50KTtcbiAgICAgICAgaGVsZEl0ZW1BY3R1YWxPYmplY3QuY2hhbmdlSGVsZFBvc2l0aW9uKCk7XG4gICAgICAgIGluZGV4T2ZEcm9wUG9zaXRpb24gPSAnJ1xuICAgIH1cbiAgICBcbiAgICBhZGRUYXNrLnByb3RvdHlwZS5jaGFuZ2VIZWxkUG9zaXRpb24gPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgdGhpcy5mb3JtZXJBcnJheVBvc2l0aW9uID0gaW5kZXhPZkRyb3BQb3NpdGlvbjtcbiAgICB9XG5cbiAgICBcbn0iLCJpbXBvcnQgJy4vc2tlbGV0b24uY3NzJ1xuXG4vL3RoaXMgZnVuY3Rpb24gZGVmaW5lcyB0aGUgYmFzaWMgbGF5b3V0IGZvciB0aGUgd2VicGFnZS8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2VsZXRvbiAoKXtcbiAgICBsZXQgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYXNlLmlkID0gJ2Jhc2UnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhc2UpO1xuXG5cbi8vTGVmdCBoYW5kIG1lbnUgYmFyLy9cbiAgICBsZXQgbWVudUJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL1RoaXMgaXMgdGhlIG1lbnUvbmF2IGJhciBvbiBsZWZ0IHNpZGUgb2Ygc2NyZWVuXG4gICAgICAgIG1lbnVCYXJDb250YWluZXIuaWQgPSAnbWVudUJhckNvbnRhaW5lcic7XG5cbiAgICAgICAgbGV0IHRvZG9MaXN0TG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb0xpc3RMb2dvQ29udGFpbmVyLmlkID0gJ3RvZG9MaXN0TG9nb0NvbnRhaW5lcidcbiAgICAgICAgICAgIG1lbnVCYXJDb250YWluZXIuYXBwZW5kKHRvZG9MaXN0TG9nb0NvbnRhaW5lcilcbiAgICAgICAgICAgIC8qIEFkZCBhIGxpc3QgZnJvbSBvbmUgYnV0dG9uXG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIG5ld1RvZG8uaWQgPSAnbmV3VG9kbyc7XG4gICAgICAgICAgICAgICAgbmV3VG9kby5pbm5lckhUTUwgPSAnTmV3IFRhc2snXG4gICAgICAgICAgICAgICAgdG9kb0xpc3RMb2dvQ29udGFpbmVyLmFwcGVuZChuZXdUb2RvKTtcbiAgICBcblxuICAgIGxldCB0b2RvTGlzdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xpc3RMb2dvLmlkID0gJ3RvZG9MaXN0TG9nbyc7XG4gICAgICAgIHRvZG9MaXN0TG9nby5pbm5lckhUTUwgPSAnVG9kbyBMaXN0cydcbiAgICAgICAgdG9kb0xpc3RMb2dvQ29udGFpbmVyLmFwcGVuZCh0b2RvTGlzdExvZ28pO1xuKi9cbiAgICAgICAgbGV0IG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmlkID0gJ292ZXJhbGxMaXN0TWVudUNvbnRhaW5lcic7XG4gICAgICAgICAgICBtZW51QmFyQ29udGFpbmVyLmFwcGVuZChvdmVyYWxsTGlzdE1lbnVDb250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgbGlzdEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxpc3RIZWFkZXJDb250YWluZXIuaWQgPSAnbGlzdEhlYWRlckNvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZChsaXN0SGVhZGVyQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudExpc3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0c0hlYWRlci5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0c0hlYWRlci5pbm5lckhUTUwgPSAnTGlzdHMnXG4gICAgICAgICAgICAgICAgICAgIGxpc3RIZWFkZXJDb250YWluZXIuYXBwZW5kKGN1cnJlbnRMaXN0c0hlYWRlcik7XG4gICAgICAgICAgICAgICAgbGV0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdEJ0bi5pZCA9ICdhZGRMaXN0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdEJ0bi5jbGFzc0xpc3QgPSAnYnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdEJ0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RIZWFkZXJDb250YWluZXIuYXBwZW5kKGFkZExpc3RCdG4pO1xuXG4gICAgICAgIGxldCBjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyLmlkID0gJ2N1cnJlbnRMaXN0c0ZsZXhDb250YWluZXInXG4gICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIpO1xuICAgICAgICAgICAgLy9oYXJkY29kZWQgTGlzdEZsZXhDb250YWluZXJzIHRoYXQgYXJlIHJlcGxhY2VkIGFmdGVyIGZpcnN0IG5ldyBsaXN0IGNyZWF0ZWQvL1xuICAgICAgICAgICAgbGV0IGxpc3RGbGV4Q29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL0NyZWF0ZWQgc28gdGhhdCB4IGJ1dHRvbiBmb3IgbGlzdHMgY2FuIGJlIHN0eWxlZC8vXG4gICAgICAgICAgICAgICAgbGlzdEZsZXhDb250YWluZXIxLmNsYXNzTGlzdC5hZGQoJ2xpc3RGbGV4Q29udGFpbmVyJyk7XG4gICAgICAgICAgICAgbGV0IGxpc3RGbGV4Q29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL0NyZWF0ZWQgc28gdGhhdCB4IGJ1dHRvbiBmb3IgbGlzdHMgY2FuIGJlIHN0eWxlZC8vXG4gICAgICAgICAgICAgICAgbGlzdEZsZXhDb250YWluZXIyLmNsYXNzTGlzdC5hZGQoJ2xpc3RGbGV4Q29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QuY2xhc3NMaXN0ID0gJ2xpc3QnO1xuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5pbm5lckhUTUwgPSAnR3JvY2VyaWVzJ1xuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5pZCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2xpc3RCdG4nKVxuICAgICAgICAgICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lcjEuYXBwZW5kKGdyb2NlcnlMaXN0KVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyLmFwcGVuZChsaXN0RmxleENvbnRhaW5lcjEpXG5cbiAgICAgICAgICAgICAgICBsZXQgaG91c2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGhvdXNlTGlzdC5jbGFzc0xpc3QgPSAnbGlzdCc7XG4gICAgICAgICAgICAgICAgICAgIGhvdXNlTGlzdC5pbm5lckhUTUwgPSAnV2Vla2x5IGhvdXNld29yaydcbiAgICAgICAgICAgICAgICAgICAgaG91c2VMaXN0LmlkID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICBob3VzZUxpc3QuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2xpc3RCdG4nKVxuICAgICAgICAgICAgICAgICAgICBsaXN0RmxleENvbnRhaW5lcjIuYXBwZW5kKGhvdXNlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudExpc3RzRmxleENvbnRhaW5lci5hcHBlbmQobGlzdEZsZXhDb250YWluZXIyKVxuICAgICAgICAgICAgXG4vL1JpZ2h0IGhhbmQgcG9wdXAgZm9yIHRhc2tzIGFuZCBpbnRlcmFjdGlvbnMgaW5jbHVkZXMgcG9wb3V0IGJveGVzLy9cbiAgICBsZXQgdGFza0FuZExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0FuZExpc3RDb250YWluZXIuaWQgPSAndGFza0FuZExpc3RDb250YWluZXInO1xuXG4gICAgLy9UYXNrIHBvcG91dCBib3gvL1xuICAgIGxldCB0YXNrUG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQb3BvdXRCb3hDb250YWluZXIuaWQgPSAndGFza1BvcG91dEJveENvbnRhaW5lcic7XG4gICAgICAgIHRhc2tBbmRMaXN0Q29udGFpbmVyLmFwcGVuZCh0YXNrUG9wb3V0Qm94Q29udGFpbmVyKVxuICAgICAgICBsZXQgdGFza1BvcG91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1BvcG91dEJveC5pZCA9ICd0YXNrUG9wb3V0Qm94JztcbiAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guY2xhc3NMaXN0LmFkZCgndGFza1BvcG91dEJveCcpXG4gICAgICAgICAgICB0YXNrUG9wb3V0Qm94Q29udGFpbmVyLmFwcGVuZCh0YXNrUG9wb3V0Qm94KTtcblxuICAgICAgICAgICAgbGV0IGxpc3REaXNwbGF5VGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5pZCA9ICdsaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5jbGFzc0xpc3QgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZChsaXN0RGlzcGxheVRhc2tiYXIpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE5hbWVEaXNwbGF5LmlkID0gJ2xpc3ROYW1lRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGxpc3ROYW1lRGlzcGxheSk7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RFeGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmlkID0gJ2xpc3RFeGl0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgbGlzdEV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnbGlzdEV4aXRCdG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEV4aXRCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDY7J1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGxpc3RFeGl0QnRuKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250YWluZXIuaWQgPSAndGFza0Rpc3BsYXlDb250YWluZXInXG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5hcHBlbmQodGFza0Rpc3BsYXlDb250YWluZXIpXG5cbiAgICAgICAgICAgIC8vd2hlcmUgdXNlciB0eXBlcyBuZXcgdGFza3MgaW50byBwb3B1cC9cbiAgICAgICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmlkID0gJ2lucHV0Q29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZChpbnB1dENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICBsZXQgdXNlclRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC5tYXhMZW5ndGggPSA4MDtcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgYSB0YXNrJ1xuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0lucHV0LmlkID0gJ3VzZXJUYXNrSW5wdXQnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQodXNlclRhc2tJbnB1dCk7XG4gICAgICAgICAgICAgICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGRUYXNrQnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QgPSAnYnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuKTtcblxuXG4vL1Rhc2sgaW5mbyByaWdodCBuZXh0IHRvIHRhc2sgcG9wb3V0IGJveC8vXG5sZXQgdGFza0luZm9Qb3BvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5mb1BvcG91dENvbnRhaW5lci5pZCA9ICd0YXNrSW5mb1BvcG91dENvbnRhaW5lcic7XG4gICAgdGFza0FuZExpc3RDb250YWluZXIuYXBwZW5kKHRhc2tJbmZvUG9wb3V0Q29udGFpbmVyKVxubGV0IHRhc2tJbmZvUG9wb3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm9Qb3BvdXRCb3guaWQgPSAndGFza0luZm9Qb3BvdXRCb3gnO1xuICAgIHRhc2tJbmZvUG9wb3V0Qm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BvdXRCb3gnKVxuICAgIHRhc2tJbmZvUG9wb3V0Q29udGFpbmVyLmFwcGVuZCh0YXNrSW5mb1BvcG91dEJveCk7XG4vL3RpdGxlIGRpc3BsYXlcbiAgICBsZXQgdGFza1RpdGxlRGlzcGxheUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrVGl0bGVEaXNwbGF5Qm94LmlkID0gJ3Rhc2tUaXRsZURpc3BsYXlCb3gnO1xuICAgICAgICB0YXNrVGl0bGVEaXNwbGF5Qm94LmNsYXNzTGlzdCA9ICdsaXN0SGVhZGVycyc7XG4gICAgICAgIHRhc2tJbmZvUG9wb3V0Qm94LmFwcGVuZCh0YXNrVGl0bGVEaXNwbGF5Qm94KTtcbiAgICAgICAgbGV0IHRhc2tUaXRsZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZURpc3BsYXkuaWQgPSAndGFza1RpdGxlRGlzcGxheSc7XG4gICAgICAgICAgICB0YXNrVGl0bGVEaXNwbGF5LmNsYXNzTGlzdCA9ICdsaXN0SGVhZGVycyc7XG4gICAgICAgICAgICB0YXNrVGl0bGVEaXNwbGF5Qm94LmFwcGVuZCh0YXNrVGl0bGVEaXNwbGF5KTtcblxuICAgIC8vYWRkTGlzdCBwb3BvdXQgYm94IC0gY3JlYXRlZCBzbyB0aGF0IGl0IGRpc2FsbG93cyBjbGlja2luZyBvdXRzaWRlIHRoZSBib3gvL1xuICAgIGxldCBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuaWQgPSAnYWRkTGlzdFBvcG91dEJveENvbnRhaW5lcic7XG4gICAgICAgIGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGFza0FuZExpc3RDb250YWluZXIuYXBwZW5kKGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIpXG4gICAgbGV0IGFkZExpc3RQb3BvdXRCb3hGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZExpc3RQb3BvdXRCb3hGbGV4Q29udGFpbmVyLmlkID0gJ2FkZExpc3RQb3BvdXRCb3hGbGV4Q29udGFpbmVyJztcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIpO1xuICAgIGxldCBhZGRMaXN0UG9wb3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmlkID0gJ2FkZExpc3RQb3BvdXRCb3gnO1xuICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIuYXBwZW5kKGFkZExpc3RQb3BvdXRCb3gpO1xuXG4gICAgICAgIGxldCBhZGRMaXN0RGlzcGxheVRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0RGlzcGxheVRhc2tiYXIuaWQgPSAnYWRkTGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0RGlzcGxheVRhc2tiYXIuY2xhc3NMaXN0ID0gJ2xpc3REaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5hcHBlbmQoYWRkTGlzdERpc3BsYXlUYXNrYmFyKTtcbiAgICAgICAgICAgIGxldCBhZGRMaXN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmlkID0gJ2FkZExpc3ROYW1lRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3ROYW1lRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdsaXN0SGVhZGVycycpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGFkZExpc3ROYW1lRGlzcGxheSk7XG4gICAgICAgICAgICBsZXQgYWRkTGlzdEV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdEV4aXRCdG4uaWQgPSAnYWRkTGlzdEV4aXRCdG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RXhpdEJ0bi5jbGFzc0xpc3QgPSAnYnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdEV4aXRCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDY7J1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGFkZExpc3RFeGl0QnRuKTtcbiAgICAgICAgLy9hZGRMaXN0IGlucHV0IGJveC8vXG4gICAgICAgIGxldCBhZGRMaXN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0SW5wdXRDb250YWluZXIuaWQgPSAnYWRkTGlzdElucHV0Q29udGFpbmVyJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmFwcGVuZChhZGRMaXN0SW5wdXRDb250YWluZXIpXG4gICAgICAgIFxuICAgIGJhc2UuYXBwZW5kKG1lbnVCYXJDb250YWluZXIpO1xuICAgIGJhc2UuYXBwZW5kKHRhc2tBbmRMaXN0Q29udGFpbmVyKTtcbn07IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRhc2tcIjtcbmltcG9ydCB7IGxpc3RBcnJheSwgYnRuQXJyYXksIGxpc3RBcnJheUN1cnJlbnQgfSBmcm9tIFwiLi9tZW51RGlzcGxheVwiO1xuXG5cblxubGV0IHBhcnNlZExpc3RBcnJheUN1cnJlbnRcbmxldCBwYXJzZWRMaXN0QXJyYXlcbmxldCBhc3NpZ25lZExpc3RBcnJheUN1cnJlbnRcbmxldCByZW9iamVjdGVkTGlzdEFycmF5Q3VycmVudCA9IFtdXG5sZXQgcmVvYmplY3RlZExpc3RBcnJheSA9IFtdXG5sZXQgbmV3QmVhdXRpZnVsTGlzdEFycmF5ID0gW11cbi8vY2FsbGVkIGluIGNsaWNrQnRuQWRkVG9CdG5BcnJheVxuZnVuY3Rpb24gc3RvcmVCdXR0b25zKCl7XG4gICAgbGV0IGFycmF5T2ZCdG5IVE1MID0gW107XG4gICAgLy9uZWVkIHRvIGdldCB0aGUgaW5uZXJIVE1MIG9mIHRoZSBidXR0b25zLCBhcyB0aGUgYnV0dG9ucyB0aGVtc2VsdmVzIGFyZSBtZWFuaW5nbGVzcyBjb252ZXJ0ZWQgdG8gc3RyaW5ncy8vXG4gICAgZm9yKGxldCBpPTA7IGk8YnRuQXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCB0ZXh0T2ZCdG4gPSBidG5BcnJheVtpXS5pbm5lckhUTUw7XG4gICAgICAgIGFycmF5T2ZCdG5IVE1MLnB1c2godGV4dE9mQnRuKTtcbiAgICB9XG4gICAgY29uc3QgYnRuQXJyYXlPYmogPSBKU09OLnN0cmluZ2lmeShhcnJheU9mQnRuSFRNTCk7IC8vc3RyaW5naWZ5IHRoZSBhcnJheVxuICAgIC8vY29uc29sZS5sb2coJ2xpc3RBcnJheUN1cnJlbnRPYmonKVxuICAgIC8vY29uc29sZS5sb2cobGlzdEFycmF5Q3VycmVudE9iaik7XG4gICAgY29uc29sZS5sb2coJ2J0bkFycmF5T2JqJyk7XG4gICAgY29uc29sZS5sb2coYnRuQXJyYXlPYmopO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2J0bkFycmF5JywgYnRuQXJyYXlPYmopOyAvL3NldCB0aGUga2V5IHRvIHRoZSBhcnJheSAmIHNhdmVcblxuICAgIGxldCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRuQXJyYXknKTsgLy9yZWNhbGxcbiAgICBsZXQgcGFyc2VkQnRuQXJyYXkgPSBKU09OLnBhcnNlKHN0cik7IC8vcGFyc2UgYmFjayB0byBvYmplY3RcbiAgICBjb25zb2xlLmxvZygncGFyc2VCdG4nKVxuICAgIGNvbnNvbGUubG9nKHBhcnNlZEJ0bkFycmF5KTtcbiAgICBjb25zb2xlLmxvZyhidG5BcnJheSlcbiAgICBcbiAgICBsZXQgc3RhcnRpbmdCdG5BcnJheUxlbmd0aCA9IGJ0bkFycmF5Lmxlbmd0aDsgLy9uZWVkIHRvIGRlZmluZSBsZW5ndGggaGVyZSBiZWNhdXNlIHRoZSBidG5BcnJheSBsZW5ndGggd2lsbCBjaGFuZ2UgYXMgaXQgaXMgc2hpZnRlZCBvdXRcbiAgICBmb3IobGV0IGk9MDtpPHN0YXJ0aW5nQnRuQXJyYXlMZW5ndGg7aSsrKXtcbiAgICAgICAgYnRuQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYnRuQXJyYXkpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdidG5BcnJheScpXG4gICAgY29uc29sZS5sb2coYnRuQXJyYXkpO1xuICAgIC8vYWx0ZXIgdGhlIGJ0bkFycmF5IGl0c2VsZiB0byByZS1hZGQgdGhlIEhUTUxcbiAgICBmb3IobGV0IGk9MDtpPHBhcnNlZEJ0bkFycmF5Lmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5pbm5lckhUTUwgPSBwYXJzZWRCdG5BcnJheVtpXTtcbiAgICAgICAgYnRuQXJyYXkucHVzaChidG4pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnYnRuQXJyYXknKVxuICAgIGNvbnNvbGUubG9nKGJ0bkFycmF5KVxufVxuXG4vL2ZvciBsb2FkaW5nIG9uIHBhZ2Ugc3RhcnQvL1xuZnVuY3Rpb24gZ2V0QnV0dG9ucygpe1xuICAgIGxldCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnRuQXJyYXknKTsgLy9yZWNhbGxcbiAgICBjb25zb2xlLmxvZyhzdHIpXG4gICAgbGV0IHBhcnNlZEJ0bkFycmF5ID0gSlNPTi5wYXJzZShzdHIpOyAvL3BhcnNlIGJhY2sgdG8gb2JqZWN0XG4gICAgZm9yKGxldCBpPTA7aTxwYXJzZWRCdG5BcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uaW5uZXJIVE1MID0gcGFyc2VkQnRuQXJyYXlbaV07XG4gICAgICAgIGJ0bkFycmF5LnB1c2goYnRuKTtcbiAgICB9XG59XG5cbi8vZmlyc3RCdG5cbi8qXG5mdW5jdGlvbiBmaXJzdEJ0bigpe1xuICAgIGxldCBmaXJzdExvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlyc3RMb2FkJyk7XG4gICAgaWYoZmlyc3RMb2FkID09IGZhbHNlKXtcbiAgICAgICAgZ2V0QnV0dG9ucztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0TG9hZCcsIGZhbHNlKVxuICAgICAgICBidG5BcnJheSA9IFtncm9jZXJ5QnRuLCBob3VzZUJ0bixdO1xuICAgIH1cbn1cbiovXG5cblxuXG4vL3NhdmVzIHRoZSBDVVJSRU5UTFkgU0VMRUNURUQgTElTVCBcbmZ1bmN0aW9uIHN0b3JlbGlzdEFycmF5KCl7XG4gICAgY29uc3QgbGlzdEFycmF5Q3VycmVudE9iaiA9IEpTT04uc3RyaW5naWZ5KGxpc3RBcnJheUN1cnJlbnQpXG4gICAgY29uc3QgbGlzdEFycmF5T2JqID0gSlNPTi5zdHJpbmdpZnkobGlzdEFycmF5KVxuICAgXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RBcnJheUN1cnJlbnQnLCBsaXN0QXJyYXlDdXJyZW50T2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdEFycmF5JywgbGlzdEFycmF5T2JqKTtcbn1cblxuZnVuY3Rpb24gcHJvZHVjZUxpc3RBcnJheSgpe1xuICAgIGxldCBzdHIyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpc3RBcnJheScpO1xuICAgIHBhcnNlZExpc3RBcnJheSA9IEpTT04ucGFyc2Uoc3RyMik7XG4gICAgbGV0IHBhcnNlZExpc3RBcnJheUxlbmd0aCA9IHBhcnNlZExpc3RBcnJheS5sZW5ndGg7XG4gICAvLyBsZXQgc3RhcnRpbmdMaXN0QXJyYXlMZW5ndGggPSBsaXN0QXJyYXkubGVuZ3RoOyAvL25lZWQgdG8gZGVmaW5lIGxlbmd0aCBoZXJlIGJlY2F1c2UgdGhlIGJ0bkFycmF5IGxlbmd0aCB3aWxsIGNoYW5nZSBhcyBpdCBpcyBzaGlmdGVkIG91dFxuICAgIFxuICAgIGZvcihsZXQgaT0wO2k8cGFyc2VkTGlzdEFycmF5TGVuZ3RoO2krKyl7IC8vZm9yIHRoZSBsZW5ndGggb2YgdGhlIHdob2xlIG9mIHBhcnNlZCBsaXN0IGFycmF5XG4gICAgICAgbGV0IG5ld0ludGVyaW9yQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpMj0wO2kyPHBhcnNlZExpc3RBcnJheVtpXS5sZW5ndGg7aTIrKyl7IC8vZm9yIHRoZSBsZW5ndGggb2YgdGhlIGkgc2VsZWN0ZWQgaXRlbSBpbiBwYXJzZWQgbGlzdCBhcnJheVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbnRlcmlvckFycmF5ID0gcGFyc2VkTGlzdEFycmF5W2ldIC8vaWRlbnRpZnkgdGhlIGN1cnJlbnQgb2JqZWN0XG4gICAgICAgICAgICBsZXQgY3VycmVudE9iamVjdCA9IGN1cnJlbnRJbnRlcmlvckFycmF5W2kyXTtcbiAgICAgICAgICAgIGxldCByZWZvcm1lZE9iamVjdCA9IG5ldyBhZGRUYXNrKGN1cnJlbnRPYmplY3QudGFza05hbWUsIGN1cnJlbnRPYmplY3QuZGVzY3JpcHRpb24sIGN1cnJlbnRPYmplY3QuZHVlRGF0ZSwgY3VycmVudE9iamVjdC5wcmlvcml0eSwgY3VycmVudE9iamVjdC5jb21wbGV0ZVN0YXR1cywgY3VycmVudE9iamVjdC5kZWxldGVFbGlnaWJsZSwgY3VycmVudE9iamVjdC5mb3JtZXJBcnJheVBvc2l0aW9uLCBjdXJyZW50T2JqZWN0LmN1cnJlbnRBcnJheVBvc2l0aW9uKTsgLy9NYWtlIGl0IGludG8gYW4gYWRkVGFza1xuICAgICAgICAgICAgY3VycmVudE9iamVjdCA9IHJlZm9ybWVkT2JqZWN0XG4gICAgICAgICAgICBuZXdJbnRlcmlvckFycmF5LnB1c2gocmVmb3JtZWRPYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RBcnJheS5wdXNoKG5ld0ludGVyaW9yQXJyYXkpXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3BhcnNlZExpc3RBcnJheUN1cnJlbnQnKVxuICAgIGNvbnNvbGUubG9nKHBhcnNlZExpc3RBcnJheUN1cnJlbnQpO1xufVxuXG5cbmV4cG9ydCB7c3RvcmVCdXR0b25zLCBnZXRCdXR0b25zLCBzdG9yZWxpc3RBcnJheSwgcHJvZHVjZUxpc3RBcnJheSwgcGFyc2VkTGlzdEFycmF5Q3VycmVudCwgcGFyc2VkTGlzdEFycmF5LCBuZXdCZWF1dGlmdWxMaXN0QXJyYXl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBza2VsZXRvbiBmcm9tICcuL3NrZWxldG9uJ1xuaW1wb3J0IHtlYXN5RXhwb3J0fSBmcm9tICcuL21lbnVEaXNwbGF5J1xuLy9pbXBvcnQgYXNzaWduQnV0dG9ucyBmcm9tICcuL2Fzc2lnbkJ1dHRvbnMnO1xuaW1wb3J0IGFkZE5ld0xpc3QgZnJvbSAnLi9hZGROZXdMaXN0JztcbmltcG9ydCBjbG9zZVBvcHVwcyBmcm9tICcuL2Nsb3NlUG9wdXBzJ1xuaW1wb3J0IHtzdG9yZUJ1dHRvbnMsIHBhcnNlZExpc3RBcnJheUN1cnJlbnR9IGZyb20gJy4vc3RvcmFnZSc7XG4vL2ltcG9ydCBkaXNwbGF5VGFza0RldGFpbHMgZnJvbSAnLi9kaXNwbGF5VGFza0RldGFpbHMnO1xuXG5cbnNrZWxldG9uICgpO1xuZWFzeUV4cG9ydCgpO1xuLy9hc3NpZ25CdXR0b25zKCk7XG4vL2Rpc3BsYXlUYXNrRGV0YWlscygpO1xuYWRkTmV3TGlzdCgpO1xuY2xvc2VQb3B1cHMoKTtcbi8vc3RvcmVCdXR0b25zKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==