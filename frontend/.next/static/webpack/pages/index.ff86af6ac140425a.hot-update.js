"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/StatsCard.js":
/*!*********************************!*\
  !*** ./components/StatsCard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StatsCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TrackCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrackCard */ \"./components/TrackCard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction StatsCard(param) {\n    let { WSURL  } = param;\n    _s();\n    const [ConnectionStatus, setConnectionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Initiating\");\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const SocksInit = async ()=>{\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(WSURL);\n            await socket.current.on(\"statsres\", (data)=>{\n                setData(data);\n            });\n            setInterval(()=>{\n                socket.current.volatile.emit(\"statsreq\");\n            }, 1000);\n            socket.current.on(\"connect\", ()=>{\n                setConnectionStatus(\"Up\");\n            });\n            socket.current.on(\"disconnect\", ()=>{\n                setConnectionStatus(\"Down\");\n            });\n        };\n        SocksInit();\n        return ()=>{\n            socket.current.disconnect();\n        };\n    }, [\n        WSURL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-2 border-2  rounded transition-all delay-500  bg-contain bg-cover bg-no-repeat  bg-[url('https://source.unsplash.com/2000x600/?server')]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-wrap mb-4 justify-between  bg-black/70 border-black border-2  rounded p-4 font-bold text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Host: \",\n                            Data.hostname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"OS: \",\n                            Data.platform,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Uptime: \",\n                            Data.uptime\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"status\",\n                className: \"flex flex-col items-center justify-center  p-2 text-center  md:space-x-4 space-y-4 md:space-y-0 md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        name: \"Memory\",\n                        percent: Data.memUsage,\n                        used: Data.usedmem,\n                        total: Data.totalmem\n                    }, void 0, false, {\n                        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TrackCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        name: \"Disk\",\n                        percent: Data.diskUsage,\n                        used: Data.usedDiskSpace,\n                        total: Data.totalDiskSpace\n                    }, void 0, false, {\n                        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center  p-2 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-center p-2 \\n            rounded animate-pulse \\n            bg-\".concat(ConnectionStatus === \"Initiating\" ? \"yellow\" : ConnectionStatus === \"Up\" ? \"green\" : \"red\", \"-500\"),\n                    children: ConnectionStatus === \"Initiating\" ? \"Connecting\" : ConnectionStatus === \"Up\" ? \"Online\" : \"Offline\"\n                }, void 0, false, {\n                    fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kali/dev/Sys-stats-panel/frontend/components/StatsCard.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(StatsCard, \"J70HIsdGcNA88/zIHO2Ax0YenuI=\");\n_c = StatsCard;\nvar _c;\n$RefreshReg$(_c, \"StatsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YXRzQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDYztBQUNoQjtBQUdyQixTQUFTSyxVQUFXLEtBQU8sRUFBRTtRQUFULEVBQUNDLE1BQUssRUFBQyxHQUFQOztJQUUvQixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU1VLFNBQVNSLDZDQUFNQTtJQUVyQkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1VLFlBQVksVUFBWTtZQUMxQkQsT0FBT0UsT0FBTyxHQUFHYixvREFBRUEsQ0FBQ007WUFFcEIsTUFBTUssT0FBT0UsT0FBTyxDQUFDQyxFQUFFLENBQUMsWUFBWSxDQUFDQyxPQUFTO2dCQUFFTCxRQUFRSztZQUFNO1lBQzlEQyxZQUFZLElBQUk7Z0JBQUNMLE9BQU9FLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDQyxJQUFJLENBQUM7WUFBVyxHQUFHO1lBRTVEUCxPQUFPRSxPQUFPLENBQUNDLEVBQUUsQ0FBQyxXQUFXLElBQU07Z0JBQy9CTixvQkFBb0I7WUFDeEI7WUFHQUcsT0FBT0UsT0FBTyxDQUFDQyxFQUFFLENBQUMsY0FBYyxJQUFNO2dCQUNsQ04sb0JBQW9CO1lBQ3hCO1FBQ0o7UUFDQUk7UUFDQSxPQUFNLElBQU07WUFBQ0QsT0FBT0UsT0FBTyxDQUFDTSxVQUFVO1FBQUU7SUFDNUMsR0FBRztRQUFDYjtLQUFNO0lBSVYscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7OzBCQUtmLDhEQUFDQztnQkFBR0QsV0FBVTs7a0NBSWQsOERBQUNFOzs0QkFBRzs0QkFBT2QsS0FBS2UsUUFBUTs7Ozs7OztrQ0FDeEIsOERBQUNEOzs0QkFBRzs0QkFBS2QsS0FBS2dCLFFBQVE7NEJBQUM7Ozs7Ozs7a0NBQ3ZCLDhEQUFDRjs7NEJBQUc7NEJBQVNkLEtBQUtpQixNQUFNOzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ047Z0JBQUlPLElBQUc7Z0JBQ1JOLFdBQVU7O2tDQUlWLDhEQUFDakIsa0RBQVNBO3dCQUFDd0IsTUFBSzt3QkFBU0MsU0FBU3BCLEtBQUtxQixRQUFRO3dCQUMvQ0MsTUFBTXRCLEtBQUt1QixPQUFPO3dCQUFFQyxPQUFPeEIsS0FBS3lCLFFBQVE7Ozs7OztrQ0FDeEMsOERBQUM5QixrREFBU0E7d0JBQUN3QixNQUFLO3dCQUFPQyxTQUFTcEIsS0FBSzBCLFNBQVM7d0JBQzlDSixNQUFNdEIsS0FBSzJCLGFBQWE7d0JBQUVILE9BQU94QixLQUFLNEIsY0FBYzs7Ozs7Ozs7Ozs7OzBCQUdwRCw4REFBQ2pCO2dCQUFJQyxXQUFVOzBCQUVmLDRFQUFDaUI7b0JBQUtqQixXQUFXLHdFQUc0QyxPQURwRGQscUJBQW1CLGVBQ2hCLFdBQVVBLHFCQUFtQixPQUFLLFVBQVEsS0FBSyxFQUFFOzhCQUM1REEscUJBQW1CLGVBQ1IsZUFBY0EscUJBQW1CLE9BQUssV0FBUyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQU01RSxDQUFDO0dBbkV1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGF0c0NhcmQuanM/NGZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUcmFja0NhcmQgZnJvbSBcIi4vVHJhY2tDYXJkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdHNDYXJkICh7V1NVUkx9KSB7XG5cbiAgICBjb25zdCBbQ29ubmVjdGlvblN0YXR1cywgc2V0Q29ubmVjdGlvblN0YXR1c10gPSB1c2VTdGF0ZShcIkluaXRpYXRpbmdcIilcbiAgICBjb25zdCBbRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgICBjb25zdCBzb2NrZXQgPSB1c2VSZWYoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgU29ja3NJbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhXU1VSTCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHNvY2tldC5jdXJyZW50Lm9uKFwic3RhdHNyZXNcIiwgKGRhdGEpID0+IHsgc2V0RGF0YShkYXRhKSB9KTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpPT57c29ja2V0LmN1cnJlbnQudm9sYXRpbGUuZW1pdChcInN0YXRzcmVxXCIpfSwgMTAwMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW9uU3RhdHVzKFwiVXBcIikgXG4gICAgICAgICAgICB9IClcblxuXG4gICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldENvbm5lY3Rpb25TdGF0dXMoXCJEb3duXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFNvY2tzSW5pdCgpXG4gICAgICAgIHJldHVybigpID0+IHtzb2NrZXQuY3VycmVudC5kaXNjb25uZWN0KCl9XG4gICAgfSwgW1dTVVJMXSlcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMiBib3JkZXItMiBcbiAgICAgICAgICAgIHJvdW5kZWQgdHJhbnNpdGlvbi1hbGwgZGVsYXktNTAwIFxuICAgICAgICAgICAgYmctY29udGFpbiBiZy1jb3ZlciBiZy1uby1yZXBlYXQgXG4gICAgICAgICAgICBiZy1bdXJsKCdodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMjAwMHg2MDAvP3NlcnZlcicpXVwiPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtYi00IGp1c3RpZnktYmV0d2VlbiBcbiAgICAgICAgICAgIGJnLWJsYWNrLzcwIGJvcmRlci1ibGFjayBib3JkZXItMiBcbiAgICAgICAgICAgIHJvdW5kZWQgcC00IGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgIDxsaT5Ib3N0OiB7RGF0YS5ob3N0bmFtZX08L2xpPlxuICAgICAgICA8bGk+T1M6IHtEYXRhLnBsYXRmb3JtfSA8L2xpPlxuICAgICAgICA8bGk+VXB0aW1lOiB7RGF0YS51cHRpbWV9PC9saT5cblxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGlkPVwic3RhdHVzXCIgXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFxuICAgICAgICAgICAgcC0yIHRleHQtY2VudGVyIFxuICAgICAgICAgICAgbWQ6c3BhY2UteC00IHNwYWNlLXktNCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cblxuICAgICAgICA8VHJhY2tDYXJkIG5hbWU9XCJNZW1vcnlcIiBwZXJjZW50PXtEYXRhLm1lbVVzYWdlfVxuICAgICAgICB1c2VkPXtEYXRhLnVzZWRtZW19IHRvdGFsPXtEYXRhLnRvdGFsbWVtfSAvPlxuICAgICAgICA8VHJhY2tDYXJkIG5hbWU9XCJEaXNrXCIgcGVyY2VudD17RGF0YS5kaXNrVXNhZ2V9IFxuICAgICAgICB1c2VkPXtEYXRhLnVzZWREaXNrU3BhY2V9IHRvdGFsPXtEYXRhLnRvdGFsRGlza1NwYWNlfSAgLz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcbiAgICAgICAgcC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtY2VudGVyIHAtMiBcbiAgICAgICAgICAgIHJvdW5kZWQgYW5pbWF0ZS1wdWxzZSBcbiAgICAgICAgICAgIGJnLSR7Q29ubmVjdGlvblN0YXR1cz09PVwiSW5pdGlhdGluZ1wiP1xuICAgICAgICAgICAgICAgICAgICBcInllbGxvd1wiOihDb25uZWN0aW9uU3RhdHVzPT09XCJVcFwiP1wiZ3JlZW5cIjpcInJlZFwiKX0tNTAwYH0+XG4gICAgICAgIHtDb25uZWN0aW9uU3RhdHVzPT09XCJJbml0aWF0aW5nXCI/XG4gICAgICAgICAgICAgICAgICAgIFwiQ29ubmVjdGluZ1wiOihDb25uZWN0aW9uU3RhdHVzPT09XCJVcFwiP1wiT25saW5lXCI6XCJPZmZsaW5lXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbn1cbiJdLCJuYW1lcyI6WyJpbyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVHJhY2tDYXJkIiwiU3RhdHNDYXJkIiwiV1NVUkwiLCJDb25uZWN0aW9uU3RhdHVzIiwic2V0Q29ubmVjdGlvblN0YXR1cyIsIkRhdGEiLCJzZXREYXRhIiwic29ja2V0IiwiU29ja3NJbml0IiwiY3VycmVudCIsIm9uIiwiZGF0YSIsInNldEludGVydmFsIiwidm9sYXRpbGUiLCJlbWl0IiwiZGlzY29ubmVjdCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJob3N0bmFtZSIsInBsYXRmb3JtIiwidXB0aW1lIiwiaWQiLCJuYW1lIiwicGVyY2VudCIsIm1lbVVzYWdlIiwidXNlZCIsInVzZWRtZW0iLCJ0b3RhbCIsInRvdGFsbWVtIiwiZGlza1VzYWdlIiwidXNlZERpc2tTcGFjZSIsInRvdGFsRGlza1NwYWNlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StatsCard.js\n"));

/***/ })

});