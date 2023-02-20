"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/tweaks";
exports.ids = ["pages/tweaks"];
exports.modules = {

/***/ "./pages/tweaks.tsx":
/*!**************************!*\
  !*** ./pages/tweaks.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Slider({ min , max , value , onChange  }) {\n    const { 0: sliderValue , 1: setSliderValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);\n    const handleSliderChange = (event)=>{\n        const newValue = parseInt(event.target.value);\n        setSliderValue(newValue);\n        onChange(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"slider\",\n                children: \"Slider:\"\n            }, void 0, false, {\n                fileName: \"/Users/jbert/Desktop/BuildandRun-v2/my-app/apps/app/pages/tweaks.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"range\",\n                id: \"slider\",\n                name: \"slider\",\n                min: min,\n                max: max,\n                value: sliderValue,\n                onChange: handleSliderChange\n            }, void 0, false, {\n                fileName: \"/Users/jbert/Desktop/BuildandRun-v2/my-app/apps/app/pages/tweaks.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jbert/Desktop/BuildandRun-v2/my-app/apps/app/pages/tweaks.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2Vha3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFTakMsU0FBU0UsTUFBTSxDQUFDLEVBQUVDLEdBQUcsR0FBRUMsR0FBRyxHQUFFQyxLQUFLLEdBQUVDLFFBQVEsR0FBZSxFQUFFO0lBQ2pFLE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlQLCtDQUFRLENBQUNJLEtBQUssQ0FBQztJQUVyRCxNQUFNSSxrQkFBa0IsR0FBRyxDQUFDQyxLQUEwQyxHQUFLO1FBQ3pFLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNHLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDO1FBQzdDRyxjQUFjLENBQUNHLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCTCxRQUFRLENBQUNLLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7OzBCQUNGLDhEQUFDQyxPQUFLO2dCQUFDQyxPQUFPLEVBQUMsUUFBUTswQkFBQyxTQUFPOzs7OztvQkFBUTswQkFDdkMsOERBQUNDLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxPQUFPO2dCQUNaQyxFQUFFLEVBQUMsUUFBUTtnQkFDWEMsSUFBSSxFQUFDLFFBQVE7Z0JBQ2JqQixHQUFHLEVBQUVBLEdBQUc7Z0JBQ1JDLEdBQUcsRUFBRUEsR0FBRztnQkFDUkMsS0FBSyxFQUFFRSxXQUFXO2dCQUNsQkQsUUFBUSxFQUFFRyxrQkFBa0I7Ozs7O29CQUM1Qjs7Ozs7O1lBQ0UsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdHdlYWtzLnRzeD82YmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFNsaWRlclByb3BzIHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTbGlkZXIoeyBtaW4sIG1heCwgdmFsdWUsIG9uQ2hhbmdlIH06IFNsaWRlclByb3BzKSB7XG4gIGNvbnN0IFtzbGlkZXJWYWx1ZSwgc2V0U2xpZGVyVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuXG4gIGNvbnN0IGhhbmRsZVNsaWRlckNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0U2xpZGVyVmFsdWUobmV3VmFsdWUpO1xuICAgIG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInNsaWRlclwiPlNsaWRlcjo8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgIGlkPVwic2xpZGVyXCJcbiAgICAgICAgbmFtZT1cInNsaWRlclwiXG4gICAgICAgIG1pbj17bWlufVxuICAgICAgICBtYXg9e21heH1cbiAgICAgICAgdmFsdWU9e3NsaWRlclZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2xpZGVyQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2xpZGVyIiwibWluIiwibWF4IiwidmFsdWUiLCJvbkNoYW5nZSIsInNsaWRlclZhbHVlIiwic2V0U2xpZGVyVmFsdWUiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweaks.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tweaks.tsx"));
module.exports = __webpack_exports__;

})();