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
/***/ (() => {

eval("\n// Example usage of Teacher and Directors interfaces\nvar teacher3 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    fullTimeEmployee: false,\n    location: 'London',\n    contract: false, // Additional property\n};\nconsole.log(teacher3);\nvar director1 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    location: 'New York',\n    fullTimeEmployee: true,\n    numberOfReports: 10,\n};\nconsole.log(director1);\n// Implement the printTeacher function\nvar printTeacher = function (firstName, lastName) {\n    return \"\".concat(firstName.charAt(0), \". \").concat(lastName);\n};\n// Example usage of printTeacher function\nconsole.log(printTeacher(\"John\", \"Doe\")); // Output: J. Doe\n// Implementation of StudentClass\nvar StudentClass = /** @class */ (function () {\n    function StudentClass(firstName, lastName) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n    }\n    StudentClass.prototype.workOnHomework = function () {\n        return \"Currently working\";\n    };\n    StudentClass.prototype.displayName = function () {\n        return this.firstName;\n    };\n    return StudentClass;\n}());\n// Example usage\nvar student = new StudentClass(\"John\", \"Doe\");\nconsole.log(student.displayName()); // Output: John\nconsole.log(student.workOnHomework()); // Output: Currently working\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;