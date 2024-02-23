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
exports.id = "pages/rooms";
exports.ids = ["pages/rooms"];
exports.modules = {

/***/ "./src/context/connect.js":
/*!********************************!*\
  !*** ./src/context/connect.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Provider\": () => (/* binding */ Provider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useConnection\": () => (/* binding */ useConnection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useConnection = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\nconst Provider = ({ children  })=>{\n    const { 0: connection , 1: setConnection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const data = {\n        connection\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/socket\");\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        socket.connect();\n        socket.on(\"connect\", ()=>{\n            setConnection(socket);\n        });\n        return ()=>{\n            socket.off(\"connect\");\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            ...data\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/workspace/chatapp/src/context/connect.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDckM7QUFFbEMsTUFBTUssT0FBTyxpQkFBR0osb0RBQWEsRUFBRTtBQUN4QixNQUFNSyxhQUFhLEdBQUcsSUFBTU4saURBQVUsQ0FBQ0ssT0FBTyxDQUFDLENBQUM7QUFFaEQsTUFBTUUsUUFBUSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFFdEMsTUFBTSxLQUFDQyxVQUFVLE1BQUVDLGFBQWEsTUFBSVIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFHbEQsTUFBTVMsSUFBSSxHQUFHO1FBQ1RGLFVBQVU7S0FDYjtJQUVETixnREFBUyxDQUFDLElBQU07UUFDWlMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJCLE1BQU1DLE1BQU0sR0FBR1QsNERBQUUsRUFBRTtRQUNuQlMsTUFBTSxDQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUVqQkQsTUFBTSxDQUFDRSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQU07WUFDdkJMLGFBQWEsQ0FBQ0csTUFBTSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO1FBR0gsT0FBTyxJQUFNO1lBQ1RBLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pCLENBQUM7S0FDTCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0ksOERBQUNYLE9BQU8sQ0FBQ0UsUUFBUTtRQUFDVSxLQUFLLEVBQUU7WUFBRSxHQUFHTixJQUFJO1NBQUU7a0JBQy9CSCxRQUFROzs7OztpQkFDTSxDQUNyQjtDQUNMLENBQUM7QUFFRixpRUFBZUgsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNoYXQvLi9zcmMvY29udGV4dC9jb25uZWN0LmpzP2JkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgY29uc3QgdXNlQ29ubmVjdGlvbiA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2Nvbm5lY3Rpb24sIHNldENvbm5lY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBjb25uZWN0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKFwiL2FwaS9zb2NrZXRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IGlvKCk7XHJcbiAgICAgICAgc29ja2V0LmNvbm5lY3QoKTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb25uZWN0aW9uKHNvY2tldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ2Nvbm5lY3QnKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uZGF0YSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImlvIiwiQ29udGV4dCIsInVzZUNvbm5lY3Rpb24iLCJQcm92aWRlciIsImNoaWxkcmVuIiwiY29ubmVjdGlvbiIsInNldENvbm5lY3Rpb24iLCJkYXRhIiwiZmV0Y2giLCJzb2NrZXQiLCJjb25uZWN0Iiwib24iLCJvZmYiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/connect.js\n");

/***/ }),

/***/ "./src/pages/rooms/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/rooms/index.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rooms)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var context_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/connect */ \"./src/context/connect.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([context_connect__WEBPACK_IMPORTED_MODULE_1__]);\ncontext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Rooms() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-12 flex justify-center h-screen text-center items-center text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl\",\n                    children: \"Choose a room on the left and start chatting!\"\n                }, void 0, false, {\n                    fileName: \"/workspace/chatapp/src/pages/rooms/index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/chatapp/src/pages/rooms/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/chatapp/src/pages/rooms/index.jsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcm9vbXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDUjtBQUNJO0FBRTdCLFNBQVNJLEtBQUssR0FBRztJQUM1QixxQkFBTztrQkFDSCw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsdUVBQXVFO3NCQUNsRiw0RUFBQ0QsS0FBRzswQkFDQSw0RUFBQ0UsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLFVBQVU7OEJBQUMsK0NBQTZDOzs7Ozt3QkFBSTs7Ozs7b0JBQ3ZFOzs7OztnQkFDSjtxQkFDUDtDQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNoYXQvLi9zcmMvcGFnZXMvcm9vbXMvaW5kZXguanN4P2JjMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCJjb250ZXh0L2Nvbm5lY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb21zKCkge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEyIGZsZXgganVzdGlmeS1jZW50ZXIgaC1zY3JlZW4gdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+Q2hvb3NlIGEgcm9vbSBvbiB0aGUgbGVmdCBhbmQgc3RhcnQgY2hhdHRpbmchPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59Il0sIm5hbWVzIjpbInVzZUNvbm5lY3Rpb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvb21zIiwiZGl2IiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/rooms/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/rooms/index.jsx"));
module.exports = __webpack_exports__;

})();