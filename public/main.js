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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// borra todas las paradas intermedias\nfunction beautifyRoute(points) {\n\n    return points.reduce((route, point) => {\n        const resp = route.concat(point);\n\n        if (resp.length < 3) {\n            return resp;\n        }\n        if (resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id && resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id) {\n            resp.splice(resp.length - 2, 1);\n            return resp;\n        }\n        return resp;\n    }, []);\n}\n\nfunction Result(props) {\n    if (!props.route || !props.route.length) return null;\n    const route = beautifyRoute(props.route);\n    let lastPoint = \"\";\n    let action = \"\";\n    let label = \"\";\n    let classNameAction = \"\";\n    let classNameLabel = \"\";\n    const lis = route.map((point, i) => {\n        if (lastPoint == \"\") {\n            action = \"Caminar hasta \" + point.name + \".\";\n            label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n            classNameAction = \"fas fa-walking\";\n            classNameLabel = \"fas fa-bus\";\n        } else {\n            if (lastPoint.branch_id != point.branch_id) {\n                action = \"  Bajarse en \" + point.name + \".\";\n                if (i == route.length - 1) {\n                    label = \" Caminar hacia destino.\";\n                    classNameLabel = \"fas fa-walking\";\n                } else {\n                    label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n                    classNameLabel = \"fas fa-bus\";\n                }\n\n                classNameAction = \"fas fa-sort-down\";\n            } else {\n                action = \"  Bajarse en \" + point.name + \".\";\n                label = \" Caminar hacia destino.\";\n                classNameAction = \"fas fa-sort-down\";\n                classNameLabel = \"fas fa-walking\";\n            }\n        }\n\n        lastPoint = point;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"li\",\n            { key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameAction }),\n            \"  \",\n            action,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameLabel }),\n            \"  \",\n            label\n        );\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"ul\",\n        null,\n        lis\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1Jlc3VsdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9SZXN1bHQuanN4P2M0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gYm9ycmEgdG9kYXMgbGFzIHBhcmFkYXMgaW50ZXJtZWRpYXNcclxuZnVuY3Rpb24gYmVhdXRpZnlSb3V0ZSggcG9pbnRzICl7XHJcblxyXG4gICAgcmV0dXJuIHBvaW50cy5yZWR1Y2UoIChyb3V0ZSxwb2ludCk9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IHJvdXRlLmNvbmNhdChwb2ludClcclxuICAgICAgICBcclxuICAgICAgICBpZihyZXNwLmxlbmd0aCA8IDMpe1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDFdLmJyYW5jaF9pZCAmJlxyXG4gICAgICAgICAgICByZXNwW3Jlc3AubGVuZ3RoIC0gM10uYnJhbmNoX2lkID09PSByZXNwW3Jlc3AubGVuZ3RoIC0gMl0uYnJhbmNoX2lkICl7XHJcbiAgICAgICAgICAgIHJlc3Auc3BsaWNlKCByZXNwLmxlbmd0aCAtIDIgLCAxIClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BcclxuXHJcbiAgICB9ICxbXSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCAocHJvcHMpe1xyXG4gICAgaWYoISBwcm9wcy5yb3V0ZSB8fCAhcHJvcHMucm91dGUubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgY29uc3Qgcm91dGUgPSBiZWF1dGlmeVJvdXRlKHByb3BzLnJvdXRlKVxyXG4gICAgbGV0IGxhc3RQb2ludCA9IFwiXCI7XHJcbiAgICBsZXQgYWN0aW9uID0gXCJcIjtcclxuICAgIGxldCBsYWJlbCA9IFwiXCI7XHJcbiAgICBsZXQgY2xhc3NOYW1lQWN0aW9uID0gXCJcIjtcclxuICAgIGxldCBjbGFzc05hbWVMYWJlbCA9IFwiXCI7XHJcbiAgICBjb25zdCBsaXMgPSByb3V0ZS5tYXAoIChwb2ludCxpKSAgPT57XHJcbiAgICAgICAgaWYobGFzdFBvaW50ID09IFwiXCIpe1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBcIkNhbWluYXIgaGFzdGEgXCIgKyBwb2ludC5uYW1lICsgXCIuXCI7XHJcbiAgICAgICAgICAgIGxhYmVsID0gXCJUb21hciBhaGkgbWlzbW8gZWwgY29sZWN0aXZvIGRlbCByYW1hbCAjXCIgKyBwb2ludC5icmFuY2hfaWQgKyBcIi5cIjtcclxuICAgICAgICAgICAgY2xhc3NOYW1lQWN0aW9uID0gXCJmYXMgZmEtd2Fsa2luZ1wiO1xyXG4gICAgICAgICAgICBjbGFzc05hbWVMYWJlbCA9IFwiZmFzIGZhLWJ1c1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYobGFzdFBvaW50LmJyYW5jaF9pZCAhPSBwb2ludC5icmFuY2hfaWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbiA9IFwiICBCYWphcnNlIGVuIFwiICsgcG9pbnQubmFtZSArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgaWYoaSA9PSByb3V0ZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIiBDYW1pbmFyIGhhY2lhIGRlc3Rpbm8uXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lTGFiZWwgPSBcImZhcyBmYS13YWxraW5nXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiVG9tYXIgYWhpIG1pc21vIGVsIGNvbGVjdGl2byBkZWwgcmFtYWwgI1wiICsgcG9pbnQuYnJhbmNoX2lkICsgXCIuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lTGFiZWwgPSBcImZhcyBmYS1idXNcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZUFjdGlvbiA9IFwiZmFzIGZhLXNvcnQtZG93blwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBcIiAgQmFqYXJzZSBlbiBcIiArIHBvaW50Lm5hbWUgKyBcIi5cIjtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gXCIgQ2FtaW5hciBoYWNpYSBkZXN0aW5vLlwiO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lQWN0aW9uID0gXCJmYXMgZmEtc29ydC1kb3duXCI7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVMYWJlbCA9IFwiZmFzIGZhLXdhbGtpbmdcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RQb2ludCA9IHBvaW50O1xyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48aSBjbGFzc05hbWU9e2NsYXNzTmFtZUFjdGlvbn0+PC9pPiAge2FjdGlvbn08YnIvPjxpIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGFiZWx9PjwvaT4gIHtsYWJlbH08L2xpPlxyXG4gICAgfSlcclxuICAgIHJldHVybiA8dWw+e2xpc308L3VsPlxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/Result.jsx\n");

/***/ }),

/***/ "./src/client/RouteForm.jsx":
/*!**********************************!*\
  !*** ./src/client/RouteForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LatLongFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatLongFields */ \"./src/client/LatLongFields.jsx\");\n\n\n\nclass RouterForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            from: { address: \"\" },\n            to: { address: \"\" }\n        };\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(id, field, value) {\n        this.setState(prevState => {\n            const newField = Object.assign({}, prevState[id], { [field]: value });\n            return Object.assign({}, prevState, { [id]: newField });\n        });\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            { className: 'inputs' },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'from',\n                title: 'From',\n                value: this.state.from,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'to',\n                title: 'To',\n                value: this.state.to,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { className: 'btn btn-primary margin-button', onClick: () => this.props.onFind(this.state) },\n                'Search'\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1JvdXRlRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9Sb3V0ZUZvcm0uanN4PzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF0TG9uZ0ZpZWxkcyBmcm9tICcuL0xhdExvbmdGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJvbSA6IHthZGRyZXNzIDogXCJcIn0sXHJcbiAgICAgICAgICAgIHRvIDogeyBhZGRyZXNzIDogXCJcIn1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGlkLGZpZWxkLHZhbHVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCBwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGaWVsZCA9IE9iamVjdC5hc3NpZ24oe30scHJldlN0YXRlW2lkXSx7W2ZpZWxkXTp2YWx1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHByZXZTdGF0ZSx7W2lkXTpuZXdGaWVsZH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPExhdExvbmdGaWVsZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxMYXRMb25nRmllbGRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWFyZ2luLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25GaW5kKHRoaXMuc3RhdGUpfT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFjQTtBQUNBO0FBbkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/RouteForm.jsx\n");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ \"./src/client/Map.jsx\");\n/* harmony import */ var _RouteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteForm */ \"./src/client/RouteForm.jsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Result */ \"./src/client/Result.jsx\");\n/* harmony import */ var _navbar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.jsx */ \"./src/client/navbar.jsx\");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  constructor(props) {\n    super(props);\n    this.findRoute = this.findRoute.bind(this);\n    this.generateMap = this.generateMap.bind(this);\n    this.state = { route: {} };\n  }\n\n  toLatLng(address) {\n    return fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDwpxOB_1gTbUHGwkyQ6XdCRXZG6hX3t94&address=\" + address).then(r => r.json()).then(msg => ({\n      lat: msg.results[0].geometry.location.lat,\n      lng: msg.results[0].geometry.location.lng\n    }));\n  }\n\n  findRoute(routeData) {\n    const fromP = this.toLatLng(routeData.from.address);\n    const toP = this.toLatLng(routeData.to.address);\n\n    Promise.all([fromP, toP]).then(([from, to]) => {\n      fetch(\"/route\", {\n        method: \"POST\",\n        headers: {\n          \"content-type\": \"application/json\"\n        },\n        body: JSON.stringify({ from, to })\n      }).then(resp => resp.json()).then(resp => {\n        if (resp.error) {\n          throw new Error(resp.error);\n        } else return resp;\n      }).then(route => this.setState({ route })).then(this.generateMap).catch(alert);\n    });\n  }\n\n  generateMap() {\n    const points = this.state.route;\n    console.log(\"POINTS\");\n    console.log(points);\n    const gPoints = points.map(s => ({ lat: parseFloat(s.latitude), lng: parseFloat(s.longitude), number: s.number, name: s.name, branch_id: s.branch_id, id: s.id }));\n\n    const waypoints = gPoints.slice(1, -1).map(p => ({ location: p, stopover: false }));\n\n    let request = {\n      origin: gPoints[0],\n      destination: gPoints[gPoints.length - 1],\n      waypoints: waypoints,\n      optimizeWaypoints: true,\n      travelMode: 'DRIVING'\n    };\n\n    directionsService.route(request, function (result, status) {\n      if (status == 'OK') {\n        directionsDisplay.setDirections(result);\n        directionsDisplay.setOptions({\n          suppressMarkers: true,\n          polylineOptions: {\n            visible: true\n          }\n        });\n      } else {\n        console.error(response);\n      }\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { onFind: this.findRoute }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { route: this.state.route })\n    );\n  }\n\n}\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n// Mapa de google maps\nvar directionsDisplay = new google.maps.DirectionsRenderer({\n  polylineOptions: { strokeColor: \"#4a4a4a\", strokeWeight: 5 },\n  suppressMarkers: false });\nvar directionsService = new google.maps.DirectionsService();\nlet routesDisplays = [];\n\nvar bsas = { lat: -34.6037, lng: -58.3816 };\n\nvar map = new google.maps.Map(document.getElementById('map'), {\n  zoom: 12,\n  center: bsas\n});\ndirectionsDisplay.setMap(map);\n\nfetch(\"/allRoutes\").then(resp => resp.json()).then(console.log).catch(console.error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2luZGV4LmpzeD85OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vTWFwJztcclxuaW1wb3J0IFJvdXRlckZvcm0gZnJvbSAnLi9Sb3V0ZUZvcm0nO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcclxuaW1wb3J0IE5hdkJhclJlYWN0IGZyb20gJy4vbmF2YmFyLmpzeCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmZpbmRSb3V0ZSA9IHRoaXMuZmluZFJvdXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXAgPSB0aGlzLmdlbmVyYXRlTWFwLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHJvdXRlIDoge30gfVxyXG4gIH1cclxuXHJcbiAgdG9MYXRMbmcoYWRkcmVzcyl7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2tleT1BSXphU3lEd3B4T0JfMWdUYlVIR3dreVE2WGRDUlhaRzZoWDN0OTQmYWRkcmVzcz1cIiArIGFkZHJlc3MpXHJcbiAgICAgIC50aGVuKCByID0+IHIuanNvbigpIClcclxuICAgICAgLnRoZW4obXNnID0+ICh7XHJcbiAgICAgICAgbGF0IDogbXNnLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LFxyXG4gICAgICAgIGxuZyA6IG1zZy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xyXG4gICAgICB9KSlcclxuICB9XHJcblxyXG4gIGZpbmRSb3V0ZShyb3V0ZURhdGEpe1xyXG4gICAgY29uc3QgZnJvbVAgPSB0aGlzLnRvTGF0TG5nKHJvdXRlRGF0YS5mcm9tLmFkZHJlc3MpXHJcbiAgICBjb25zdCB0b1AgPSB0aGlzLnRvTGF0TG5nKHJvdXRlRGF0YS50by5hZGRyZXNzKVxyXG4gICAgXHJcbiAgICBQcm9taXNlLmFsbChbZnJvbVAsdG9QXSlcclxuICAgICAgLnRoZW4oIChbZnJvbSx0b10pID0+IHtcclxuICAgICAgICBmZXRjaChcIi9yb3V0ZVwiLHtcclxuICAgICAgICAgICAgbWV0aG9kIDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5IDogSlNPTi5zdHJpbmdpZnkoe2Zyb20sdG99KVxyXG4gICAgICAgICAgfSkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3AuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChyZXNwLmVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHJldHVybiByZXNwICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oIHJvdXRlID0+IHRoaXMuc2V0U3RhdGUoe3JvdXRlfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZ2VuZXJhdGVNYXApXHJcbiAgICAgICAgICAgIC5jYXRjaChhbGVydClcclxuICAgICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVNYXAoKSB7XHJcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLnN0YXRlLnJvdXRlO1xyXG4gICAgY29uc29sZS5sb2coXCJQT0lOVFNcIik7XHJcbiAgICBjb25zb2xlLmxvZyhwb2ludHMpXHJcbiAgICBjb25zdCBnUG9pbnRzID0gcG9pbnRzLm1hcCggcyA9PiAoe2xhdDpwYXJzZUZsb2F0KHMubGF0aXR1ZGUpLGxuZzpwYXJzZUZsb2F0KHMubG9uZ2l0dWRlKSwgbnVtYmVyOiBzLm51bWJlciwgbmFtZTogcy5uYW1lLCBicmFuY2hfaWQ6IHMuYnJhbmNoX2lkLCBpZDogcy5pZH0pKTtcclxuXHJcbiAgICBjb25zdCB3YXlwb2ludHMgPSAgZ1BvaW50cy5zbGljZSgxLCAtMSkubWFwKCBwID0+ICh7IGxvY2F0aW9uIDogcCAsIHN0b3BvdmVyIDogZmFsc2V9KSlcclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgb3JpZ2luOiBnUG9pbnRzWzBdLFxyXG4gICAgICBkZXN0aW5hdGlvbjogZ1BvaW50c1tnUG9pbnRzLmxlbmd0aCAtIDFdLFxyXG4gICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcclxuICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRydWUsICAgXHJcbiAgICAgIHRyYXZlbE1vZGU6ICdEUklWSU5HJ1xyXG4gICAgfTtcclxuXHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cykge1xyXG4gICAgICBpZiAoc3RhdHVzID09ICdPSycpIHtcclxuICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldE9wdGlvbnMoe1xyXG4gICAgICAgICAgICAgIHN1cHByZXNzTWFya2VyczogdHJ1ZSxcclxuICAgICAgICAgICAgICBwb2x5bGluZU9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICB9KSAgICAgXHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyUmVhY3QvPlxyXG4gICAgICAgIDxSb3V0ZXJGb3JtIG9uRmluZD17dGhpcy5maW5kUm91dGV9Lz5cclxuICAgICAgICA8UmVzdWx0IHJvdXRlPXt0aGlzLnN0YXRlLnJvdXRlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG59XHJcblxyXG5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5cclxuLy8gTWFwYSBkZSBnb29nbGUgbWFwc1xyXG52YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHsgXHJcbiAgICAgIHBvbHlsaW5lT3B0aW9uczoge3N0cm9rZUNvbG9yOlwiIzRhNGE0YVwiLHN0cm9rZVdlaWdodDo1fSwgXHJcbiAgICAgIHN1cHByZXNzTWFya2VyczogZmFsc2UgfSk7XHJcbnZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcclxubGV0IHJvdXRlc0Rpc3BsYXlzID0gW107XHJcblxyXG52YXIgYnNhcyA9IHtsYXQ6IC0zNC42MDM3LCBsbmc6IC01OC4zODE2fTtcclxuXHJcbnZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gIHpvb206IDEyLFxyXG4gIGNlbnRlcjogYnNhc1xyXG59KVxyXG5kaXJlY3Rpb25zRGlzcGxheS5zZXRNYXAobWFwKTtcclxuXHJcbmZldGNoKFwiL2FsbFJvdXRlc1wiKVxyXG4gIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXHJcbiAgLnRoZW4oY29uc29sZS5sb2cpXHJcbiAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBcEZBO0FBQ0E7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/index.jsx\n");

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