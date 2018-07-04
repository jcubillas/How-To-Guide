/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/LatLongFields.jsx":
/*!**************************************!*\
  !*** ./src/client/LatLongFields.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LatLongFields; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass LatLongFields extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n    }\n\n    changeValue(field, value) {\n        this.props.onChange(this.props.id, field, value);\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"label\",\n                null,\n                this.props.title\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", value: this.props.value.address, onChange: e => this.changeValue(\"address\", e.target.value) })\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0xhdExvbmdGaWVsZHMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvTGF0TG9uZ0ZpZWxkcy5qc3g/ZTU4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRMb25nRmllbGRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZShmaWVsZCx2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmlkLGZpZWxkLHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMucHJvcHMudmFsdWUuYWRkcmVzc30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVZhbHVlKFwiYWRkcmVzc1wiLGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQU9BO0FBQ0E7QUFyQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/LatLongFields.jsx\n");

/***/ }),

/***/ "./src/client/Map.jsx":
/*!****************************!*\
  !*** ./src/client/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.markers = [];\n    }\n\n    showMap(elm) {\n        this.map = new google.maps.Map(elm, {\n            zoom: 4,\n            center: { lat: -25.344, lng: 131.036 // Bs As\n            } });\n        this.map.addListener(\"click\", event => {\n            const cords = event.latLng;\n            this.props.selectMapPoint({ lat: cords.lat(), lng: cords.lng() });\n        });\n    }\n\n    shouldComponentUpdate(nextProps, nextState) {\n        nextProps.markers.forEach(marker => {});\n        return false;\n    }\n\n    /*render(){\r\n        return <div style={{height:350,width:350}} ref={elm=>this.showMap(elm)}></div>\r\n    }*/\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L01hcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9NYXAuanN4Pzg3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFwKGVsbSl7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsbSx7XHJcbiAgICAgICAgICAgIHpvb206IDQsXHJcbiAgICAgICAgICAgIGNlbnRlciA6ICB7bGF0OiAtMjUuMzQ0LCBsbmc6IDEzMS4wMzZ9IC8vIEJzIEFzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjb3JkcyA9IGV2ZW50LmxhdExuZ1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE1hcFBvaW50KHtsYXQ6Y29yZHMubGF0KCksbG5nIDogY29yZHMubG5nKCl9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgbmV4dFByb3BzLm1hcmtlcnMuZm9yRWFjaCggbWFya2VyID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgIC8qcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3toZWlnaHQ6MzUwLHdpZHRoOjM1MH19IHJlZj17ZWxtPT50aGlzLnNob3dNYXAoZWxtKX0+PC9kaXY+XHJcbiAgICB9Ki9cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7O0FBMUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/Map.jsx\n");

/***/ }),

/***/ "./src/client/Result.jsx":
/*!*******************************!*\
  !*** ./src/client/Result.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// borra todas las paradas intermedias\nfunction beautifyRoute(points) {\n    console.log(points);\n    return points.reduce((route, point) => {\n        const resp = route.concat(point);\n\n        if (resp.length < 3) {\n            return resp;\n        }\n\n        if (resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id && resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id) {\n            resp.splice(resp.length - 2, 1);\n            return resp;\n        }\n        return resp;\n    }, []);\n}\n\nfunction Result(props) {\n    if (!props.route || !props.route.length) return null;\n    const route = beautifyRoute(props.route);\n    console.log(\"route\");\n    console.log(route);\n    let lastPoint = \"\";\n    let action = \"\";\n    let label = \"\";\n    let classNameAction = \"\";\n    let classNameLabel = \"\";\n    const lis = route.map((point, i) => {\n        if (lastPoint == \"\") {\n            action = \"Caminar hasta \" + point.name + \".\";\n            label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n            classNameAction = \"fas fa-walking\";\n            classNameLabel = \"fas fa-bus\";\n        } else {\n            if (lastPoint.branch_id != point.branch_id) {\n                action = \"Bajarse en \" + point.name + \".\";\n                if (i == route.length - 1) {\n                    label = \"Caminar hacia destino.\";\n                    classNameLabel = \"fas fa-walking\";\n                } else {\n                    label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n                    classNameLabel = \"fas fa-bus\";\n                }\n\n                classNameAction = \"fas fa-sort-down\";\n            } else {\n                action = \"Bajarse en \" + point.name + \".\";\n                label = \"Caminar hacia destino.\";\n                classNameAction = \"fas fa-sort-down\";\n                classNameLabel = \"fas fa-walking\";\n            }\n        }\n\n        lastPoint = point;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"li\",\n            { key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameAction }),\n            \"  \",\n            action,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameLabel }),\n            \"  \",\n            label\n        );\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"ul\",\n        null,\n        lis\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1Jlc3VsdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9SZXN1bHQuanN4P2M0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gYm9ycmEgdG9kYXMgbGFzIHBhcmFkYXMgaW50ZXJtZWRpYXNcclxuZnVuY3Rpb24gYmVhdXRpZnlSb3V0ZSggcG9pbnRzICl7XHJcbiAgICBjb25zb2xlLmxvZyhwb2ludHMpXHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSggKHJvdXRlLHBvaW50KT0+IHtcclxuICAgICAgICBjb25zdCByZXNwID0gcm91dGUuY29uY2F0KHBvaW50KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJlc3AubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDFdLmJyYW5jaF9pZCAmJlxyXG4gICAgICAgICAgICByZXNwW3Jlc3AubGVuZ3RoIC0gM10uYnJhbmNoX2lkID09PSByZXNwW3Jlc3AubGVuZ3RoIC0gMl0uYnJhbmNoX2lkICl7XHJcbiAgICAgICAgICAgIHJlc3Auc3BsaWNlKCByZXNwLmxlbmd0aCAtIDIgLCAxIClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BcclxuXHJcbiAgICB9ICxbXSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCAocHJvcHMpe1xyXG4gICAgaWYoISBwcm9wcy5yb3V0ZSB8fCAhcHJvcHMucm91dGUubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgY29uc3Qgcm91dGUgPSBiZWF1dGlmeVJvdXRlKHByb3BzLnJvdXRlKVxyXG4gICAgY29uc29sZS5sb2coXCJyb3V0ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlKTtcclxuICAgIGxldCBsYXN0UG9pbnQgPSBcIlwiO1xyXG4gICAgbGV0IGFjdGlvbiA9IFwiXCI7XHJcbiAgICBsZXQgbGFiZWwgPSBcIlwiO1xyXG4gICAgbGV0IGNsYXNzTmFtZUFjdGlvbiA9IFwiXCI7XHJcbiAgICBsZXQgY2xhc3NOYW1lTGFiZWwgPSBcIlwiO1xyXG4gICAgY29uc3QgbGlzID0gcm91dGUubWFwKCAocG9pbnQsaSkgID0+e1xyXG4gICAgICAgIGlmKGxhc3RQb2ludCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgYWN0aW9uID0gXCJDYW1pbmFyIGhhc3RhIFwiICsgcG9pbnQubmFtZSArIFwiLlwiO1xyXG4gICAgICAgICAgICBsYWJlbCA9IFwiVG9tYXIgYWhpIG1pc21vIGVsIGNvbGVjdGl2byBkZWwgcmFtYWwgI1wiICsgcG9pbnQuYnJhbmNoX2lkICsgXCIuXCI7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZUFjdGlvbiA9IFwiZmFzIGZhLXdhbGtpbmdcIjtcclxuICAgICAgICAgICAgY2xhc3NOYW1lTGFiZWwgPSBcImZhcyBmYS1idXNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGxhc3RQb2ludC5icmFuY2hfaWQgIT0gcG9pbnQuYnJhbmNoX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBcIkJhamFyc2UgZW4gXCIgKyBwb2ludC5uYW1lICsgXCIuXCI7XHJcbiAgICAgICAgICAgICAgICBpZihpID09IHJvdXRlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2FtaW5hciBoYWNpYSBkZXN0aW5vLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZUxhYmVsID0gXCJmYXMgZmEtd2Fsa2luZ1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlRvbWFyIGFoaSBtaXNtbyBlbCBjb2xlY3Rpdm8gZGVsIHJhbWFsICNcIiArIHBvaW50LmJyYW5jaF9pZCArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZUxhYmVsID0gXCJmYXMgZmEtYnVzXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVBY3Rpb24gPSBcImZhcyBmYS1zb3J0LWRvd25cIjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJCYWphcnNlIGVuIFwiICsgcG9pbnQubmFtZSArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNhbWluYXIgaGFjaWEgZGVzdGluby5cIjtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZUFjdGlvbiA9IFwiZmFzIGZhLXNvcnQtZG93blwiO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lTGFiZWwgPSBcImZhcyBmYS13YWxraW5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcclxuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGkgY2xhc3NOYW1lPXtjbGFzc05hbWVBY3Rpb259PjwvaT4gIHthY3Rpb259PGJyLz48aSBjbGFzc05hbWU9e2NsYXNzTmFtZUxhYmVsfT48L2k+ICB7bGFiZWx9PC9saT5cclxuICAgIH0pXHJcbiAgICByZXR1cm4gPHVsPntsaXN9PC91bD5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/Result.jsx\n");

/***/ }),

/***/ "./src/client/RouteForm.jsx":
/*!**********************************!*\
  !*** ./src/client/RouteForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LatLongFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatLongFields */ \"./src/client/LatLongFields.jsx\");\n\n\n\nclass RouterForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            from: { lat: -34.5997051, lng: -58.398990069999996 },\n            to: { lat: -34.58940382, lng: -58.42911291 }\n        };\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(id, field, value) {\n        this.setState(prevState => {\n            const newField = Object.assign({}, prevState[id], { [field]: value });\n            return Object.assign({}, prevState, { [id]: newField });\n        });\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'inputs' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'from',\n                title: 'From',\n                value: this.state.from,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'to',\n                title: 'To',\n                value: this.state.to,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { className: 'btn btn-primary margin-button', onClick: () => this.props.onFind(this.state) },\n                'Search'\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1JvdXRlRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9Sb3V0ZUZvcm0uanN4PzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF0TG9uZ0ZpZWxkcyBmcm9tICcuL0xhdExvbmdGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJvbSA6IHsgbGF0IDogLTM0LjU5OTcwNTEgLCBsbmcgOiAtNTguMzk4OTkwMDY5OTk5OTk2fSxcclxuICAgICAgICAgICAgdG8gOiB7IGxhdCA6IC0zNC41ODk0MDM4MiAsIGxuZyA6IC01OC40MjkxMTI5MX1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGlkLGZpZWxkLHZhbHVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCBwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGaWVsZCA9IE9iamVjdC5hc3NpZ24oe30scHJldlN0YXRlW2lkXSx7W2ZpZWxkXTp2YWx1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHByZXZTdGF0ZSx7W2lkXTpuZXdGaWVsZH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPExhdExvbmdGaWVsZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxMYXRMb25nRmllbGRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWFyZ2luLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25GaW5kKHRoaXMuc3RhdGUpfT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFjQTtBQUNBO0FBbkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/RouteForm.jsx\n");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ \"./src/client/Map.jsx\");\n/* harmony import */ var _RouteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteForm */ \"./src/client/RouteForm.jsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Result */ \"./src/client/Result.jsx\");\n/* harmony import */ var _navbar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.jsx */ \"./src/client/navbar.jsx\");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  constructor(props) {\n    super(props);\n    this.findRoute = this.findRoute.bind(this);\n    this.generateMap = this.generateMap.bind(this);\n    this.state = { route: {} };\n  }\n\n  findRoute(routeData) {\n    console.log(routeData);\n\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDwpxOB_1gTbUHGwkyQ6XdCRXZG6hX3t94\" + \"&address=\" + routeData.from.address).then(r => r.json()).then(msg => {\n      routeData.from.lat = msg.results[0].geometry.location.lat;\n      routeData.from.lng = msg.results[0].geometry.location.lng;\n    });\n\n    fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDwpxOB_1gTbUHGwkyQ6XdCRXZG6hX3t94\" + \"&address=\" + routeData.to.address).then(r => r.json()).then(msg => {\n      routeData.to.lat = msg.results[0].geometry.location.lat;\n      routeData.to.lng = msg.results[0].geometry.location.lng;\n    });\n\n    console.log(routeData.to.lat);\n\n    fetch(\"/route\", {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\"\n      },\n      body: JSON.stringify(routeData)\n    }).then(resp => resp.json()).then(route => this.setState({ route })).then(this.generateMap).catch(alert);\n  }\n\n  generateMap() {\n    const points = this.state.route;\n    console.log(\"points\");\n    console.log(points);\n    points.map(s => ({ lat: s.latitude, lng: s.longitude, number: s.number, name: s.name, branch_id: s.branch_id, id: s.id }));\n\n    const waypoints = points.slice(1, -1).map(p => ({ location: p, stopover: false }));\n\n    let request = {\n      origin: points[0],\n      destination: points[points.length - 1],\n      waypoints: waypoints,\n      optimizeWaypoints: true,\n      travelMode: 'DRIVING'\n    };\n\n    directionsService.route(request, function (result, status) {\n      if (status == 'OK') {\n        routesDisplays[branch.id].setMap(map);\n        routesDisplays[branch.id].setDirections(result);\n        routesDisplays[branch.id].setOptions({\n          suppressMarkers: false,\n          polylineOptions: {\n            visible: true\n          }\n        });\n      } else {\n        console.error(response);\n      }\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { onFind: this.findRoute }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { route: this.state.route })\n    );\n  }\n\n}\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n// Mapa de google maps\nvar directionsDisplay = new google.maps.DirectionsRenderer({\n  polylineOptions: { strokeColor: \"#4a4a4a\", strokeWeight: 5 },\n  suppressMarkers: false });\nvar directionsService = new google.maps.DirectionsService();\n\nvar bsas = { lat: -34.6037, lng: -58.3816 };\n\nvar map = new google.maps.Map(document.getElementById('map'), {\n  zoom: 12,\n  center: bsas\n});\ndirectionsDisplay.setMap(map);\n\nfetch(\"/allRoutes\").then(resp => resp.json()).then(console.log).catch(console.error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2luZGV4LmpzeD85OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vTWFwJztcclxuaW1wb3J0IFJvdXRlckZvcm0gZnJvbSAnLi9Sb3V0ZUZvcm0nO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcclxuaW1wb3J0IE5hdkJhclJlYWN0IGZyb20gJy4vbmF2YmFyLmpzeCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmZpbmRSb3V0ZSA9IHRoaXMuZmluZFJvdXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXAgPSB0aGlzLmdlbmVyYXRlTWFwLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHJvdXRlIDoge30gfVxyXG4gIH1cclxuXHJcblxyXG4gIGZpbmRSb3V0ZShyb3V0ZURhdGEpe1xyXG4gICAgY29uc29sZS5sb2cocm91dGVEYXRhKVxyXG5cclxuICAgIGZldGNoKFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9QUl6YVN5RHdweE9CXzFnVGJVSEd3a3lRNlhkQ1JYWkc2aFgzdDk0XCIgKyBcIiZhZGRyZXNzPVwiICsgcm91dGVEYXRhLmZyb20uYWRkcmVzcylcclxuICAgICAgLnRoZW4oIHIgPT4gci5qc29uKCkgKVxyXG4gICAgICAudGhlbihtc2cgPT4ge1xyXG4gICAgICAgIHJvdXRlRGF0YS5mcm9tLmxhdCA9IG1zZy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICByb3V0ZURhdGEuZnJvbS5sbmcgPSBtc2cucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgZmV0Y2goXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lEd3B4T0JfMWdUYlVIR3dreVE2WGRDUlhaRzZoWDN0OTRcIiArIFwiJmFkZHJlc3M9XCIgKyByb3V0ZURhdGEudG8uYWRkcmVzcylcclxuICAgICAgLnRoZW4oIHIgPT4gci5qc29uKCkgKVxyXG4gICAgICAudGhlbihtc2cgPT4ge1xyXG4gICAgICAgIHJvdXRlRGF0YS50by5sYXQgPSBtc2cucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQ7XHJcbiAgICAgICAgcm91dGVEYXRhLnRvLmxuZyA9IG1zZy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlRGF0YS50by5sYXQpO1xyXG5cclxuICAgIGZldGNoKFwiL3JvdXRlXCIse1xyXG4gICAgICBtZXRob2QgOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVycyA6IHtcclxuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHkgOiBKU09OLnN0cmluZ2lmeShyb3V0ZURhdGEpXHJcbiAgICB9KS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXHJcbiAgICAgIC50aGVuKCByb3V0ZSA9PiB0aGlzLnNldFN0YXRlKHtyb3V0ZX0pKVxyXG4gICAgICAudGhlbih0aGlzLmdlbmVyYXRlTWFwKVxyXG4gICAgICAuY2F0Y2goYWxlcnQpXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZU1hcCgpIHtcclxuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuc3RhdGUucm91dGU7XHJcbiAgICBjb25zb2xlLmxvZyhcInBvaW50c1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHBvaW50cyk7XHJcbiAgICBwb2ludHMubWFwKCBzID0+ICh7bGF0OnMubGF0aXR1ZGUsbG5nOnMubG9uZ2l0dWRlLCBudW1iZXI6IHMubnVtYmVyLCBuYW1lOiBzLm5hbWUsIGJyYW5jaF9pZDogcy5icmFuY2hfaWQsIGlkOiBzLmlkfSkpO1xyXG5cclxuICAgIGNvbnN0IHdheXBvaW50cyA9ICBwb2ludHMuc2xpY2UoMSwgLTEpLm1hcCggcCA9PiAoeyBsb2NhdGlvbiA6IHAgLCBzdG9wb3ZlciA6IGZhbHNlfSkpXHJcblxyXG4gICAgbGV0IHJlcXVlc3QgPSB7XHJcbiAgICAgIG9yaWdpbjogcG9pbnRzWzBdLFxyXG4gICAgICBkZXN0aW5hdGlvbjogcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSxcclxuICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLCAgIFxyXG4gICAgICB0cmF2ZWxNb2RlOiAnRFJJVklORydcclxuICAgIH07XHJcblxyXG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUocmVxdWVzdCwgZnVuY3Rpb24ocmVzdWx0LCBzdGF0dXMpIHtcclxuICAgICAgaWYgKHN0YXR1cyA9PSAnT0snKSB7XHJcbiAgICAgICAgICByb3V0ZXNEaXNwbGF5c1ticmFuY2guaWRdLnNldE1hcChtYXApO1xyXG4gICAgICAgICAgcm91dGVzRGlzcGxheXNbYnJhbmNoLmlkXS5zZXREaXJlY3Rpb25zKHJlc3VsdCk7XHJcbiAgICAgICAgICByb3V0ZXNEaXNwbGF5c1ticmFuY2guaWRdLnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgcG9seWxpbmVPcHRpb25zIDoge1xyXG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xyXG4gICAgICB9XHJcbiAgfSkgICAgIFxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdkJhclJlYWN0Lz5cclxuICAgICAgICA8Um91dGVyRm9ybSBvbkZpbmQ9e3RoaXMuZmluZFJvdXRlfS8+XHJcbiAgICAgICAgPFJlc3VsdCByb3V0ZT17dGhpcy5zdGF0ZS5yb3V0ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxufVxyXG5cclxucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcbi8vIE1hcGEgZGUgZ29vZ2xlIG1hcHNcclxudmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7IFxyXG4gICAgICBwb2x5bGluZU9wdGlvbnM6IHtzdHJva2VDb2xvcjpcIiM0YTRhNGFcIixzdHJva2VXZWlnaHQ6NX0sIFxyXG4gICAgICBzdXBwcmVzc01hcmtlcnM6IGZhbHNlIH0pO1xyXG52YXIgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2U7XHJcblxyXG52YXIgYnNhcyA9IHtsYXQ6IC0zNC42MDM3LCBsbmc6IC01OC4zODE2fTtcclxuXHJcbnZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gIHpvb206IDEyLFxyXG4gIGNlbnRlcjogYnNhc1xyXG59KVxyXG5kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobWFwKTtcclxuXHJcbmZldGNoKFwiL2FsbFJvdXRlc1wiKVxyXG4gIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXHJcbiAgLnRoZW4oY29uc29sZS5sb2cpXHJcbiAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQW5GQTtBQUNBO0FBcUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/index.jsx\n");

/***/ }),

/***/ "./src/client/navbar.jsx":
/*!*******************************!*\
  !*** ./src/client/navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBarReact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass NavBarReact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"nav\",\n            { className: \"navbar navbar-expand-sm navbar-light navbar-style\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"ul\",\n                { className: \"navbar-nav\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"li\",\n                    { className: \"nav-item active\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        \"a\",\n                        { className: \"navbar-brand\", href: \"#\" },\n                        \"How-to Guide\"\n                    )\n                )\n            )\n        );\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L25hdmJhci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9uYXZiYXIuanN4PzFhM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJhclJlYWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gbmF2YmFyLWxpZ2h0IG5hdmJhci1zdHlsZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+SG93LXRvIEd1aWRlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBZEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/navbar.jsx\n");

/***/ })

/******/ });