/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),\n/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)\n/* harmony export */ });\n// task_5/js/main.ts\r\n// Function to sum Major Credits\r\nfunction sumMajorCredits(subject1, subject2) {\r\n    const totalCredits = subject1.credits + subject2.credits;\r\n    return { credits: totalCredits, brand: \"MajorCredits\" }; // Returning MajorCredits type\r\n}\r\n// Function to sum Minor Credits\r\nfunction sumMinorCredits(subject1, subject2) {\r\n    const totalCredits = subject1.credits + subject2.credits;\r\n    return { credits: totalCredits, brand: \"MinorCredits\" }; // Returning MinorCredits type\r\n}\r\n// Test Code\r\nconst major1 = { credits: 3, brand: \"MajorCredits\" };\r\nconst major2 = { credits: 4, brand: \"MajorCredits\" };\r\nconst minor1 = { credits: 2, brand: \"MinorCredits\" };\r\nconst minor2 = { credits: 3, brand: \"MinorCredits\" };\r\nconst totalMajor = sumMajorCredits(major1, major2);\r\nconst totalMinor = sumMinorCredits(minor1, minor2);\r\nconsole.log(\"Total Major Credits:\", totalMajor.credits); // Should print 7\r\nconsole.log(\"Total Minor Credits:\", totalMinor.credits); // Should print 5\r\n\n\n//# sourceURL=webpack://task_5/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;