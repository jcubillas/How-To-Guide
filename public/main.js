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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LatLongFields; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass LatLongFields extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n    }\n\n    changeValue(field, value) {\n        this.props.onChange(this.props.id, field, value);\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"label\",\n                null,\n                this.props.title\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"div\",\n                    null,\n                    \"Lat:\"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"number\", value: this.props.value.lat, onChange: e => this.changeValue(\"lat\", e.target.value) })\n            ),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                null,\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"div\",\n                    null,\n                    \"Lon:\"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"number\", value: this.props.value.lng, onChange: e => this.changeValue(\"lng\", e.target.value) })\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L0xhdExvbmdGaWVsZHMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jbGllbnQvTGF0TG9uZ0ZpZWxkcy5qc3g/ZTU4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXRMb25nRmllbGRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWYWx1ZShmaWVsZCx2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmlkLGZpZWxkLHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5MYXQ6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZS5sYXR9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VWYWx1ZShcImxhdFwiLGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pkxvbjo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlLmxuZ30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmNoYW5nZVZhbHVlKFwibG5nXCIsZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQU5BO0FBWUE7QUFDQTtBQTFCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/LatLongFields.jsx\n");

/***/ }),

/***/ "./src/client/Map.jsx":
/*!****************************!*\
  !*** ./src/client/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.markers = [];\n    }\n\n    showMap(elm) {\n        this.map = new google.maps.Map(elm, {\n            zoom: 4,\n            center: { lat: -25.344, lng: 131.036 // Bs As\n            } });\n        this.map.addListener(\"click\", event => {\n            const cords = event.latLng;\n            this.props.selectMapPoint({ lat: cords.lat(), lng: cords.lng() });\n        });\n    }\n\n    shouldComponentUpdate(nextProps, nextState) {\n        nextProps.markers.forEach(marker => {});\n        return false;\n    }\n\n    /*render(){\r\n        return <div style={{height:500,width:500}} ref={elm=>this.showMap(elm)}></div>\r\n    }*/\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L01hcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9NYXAuanN4Pzg3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBzaG93TWFwKGVsbSl7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsbSx7XHJcbiAgICAgICAgICAgIHpvb206IDQsXHJcbiAgICAgICAgICAgIGNlbnRlciA6ICB7bGF0OiAtMjUuMzQ0LCBsbmc6IDEzMS4wMzZ9IC8vIEJzIEFzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjb3JkcyA9IGV2ZW50LmxhdExuZ1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdE1hcFBvaW50KHtsYXQ6Y29yZHMubGF0KCksbG5nIDogY29yZHMubG5nKCl9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XHJcbiAgICAgICAgbmV4dFByb3BzLm1hcmtlcnMuZm9yRWFjaCggbWFya2VyID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgIC8qcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3toZWlnaHQ6NTAwLHdpZHRoOjUwMH19IHJlZj17ZWxtPT50aGlzLnNob3dNYXAoZWxtKX0+PC9kaXY+XHJcbiAgICB9Ki9cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7O0FBMUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/Map.jsx\n");

/***/ }),

/***/ "./src/client/Result.jsx":
/*!*******************************!*\
  !*** ./src/client/Result.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// borra todas las paradas intermedias\nfunction beautifyRoute(points) {\n    console.log(points);\n    return points.reduce((route, point) => {\n        const resp = route.concat(point);\n\n        if (resp.length < 3) {\n            return resp;\n        }\n\n        if (resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id && resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id) {\n            resp.splice(resp.length - 2, 1);\n            return resp;\n        }\n        return resp;\n    }, []);\n}\n\nfunction Result(props) {\n    if (!props.route || !props.route.length) return null;\n    const route = beautifyRoute(props.route);\n    console.log(route);\n    let lastPoint = \"\";\n    let action = \"\";\n    let label = \"\";\n    let classNameAction = \"\";\n    let classNameLabel = \"\";\n    const lis = route.map((point, i) => {\n        if (lastPoint == \"\") {\n            action = \"Caminar hasta \" + point.name + \".\";\n            label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n            classNameAction = \"fas fa-walking\";\n            classNameLabel = \"fas fa-bus\";\n        } else {\n            if (lastPoint.branch_id != point.branch_id) {\n                action = \"Bajarse en \" + point.name + \".\";\n                label = \"Tomar ahi mismo el colectivo del ramal #\" + point.branch_id + \".\";\n                classNameAction = \"fas fa-sort-down\";\n                classNameLabel = \"fas fa-bus\";\n            } else {\n                action = \"Bajarse en \" + point.name + \".\";\n                label = \"Caminar hacia destino.\";\n                classNameAction = \"fas fa-sort-down\";\n                classNameLabel = \"fas fa-walking\";\n            }\n        }\n\n        lastPoint = point;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"li\",\n            { key: i },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameAction }),\n            \"  \",\n            action,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", { className: classNameLabel }),\n            \"  \",\n            label\n        );\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"ul\",\n        null,\n        lis\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1Jlc3VsdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9SZXN1bHQuanN4P2M0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gYm9ycmEgdG9kYXMgbGFzIHBhcmFkYXMgaW50ZXJtZWRpYXNcclxuZnVuY3Rpb24gYmVhdXRpZnlSb3V0ZSggcG9pbnRzICl7XHJcbiAgICBjb25zb2xlLmxvZyhwb2ludHMpXHJcbiAgICByZXR1cm4gcG9pbnRzLnJlZHVjZSggKHJvdXRlLHBvaW50KT0+IHtcclxuICAgICAgICBjb25zdCByZXNwID0gcm91dGUuY29uY2F0KHBvaW50KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHJlc3AubGVuZ3RoIDwgMyl7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDFdLmJyYW5jaF9pZCAmJlxyXG4gICAgICAgICAgICByZXNwW3Jlc3AubGVuZ3RoIC0gM10uYnJhbmNoX2lkID09PSByZXNwW3Jlc3AubGVuZ3RoIC0gMl0uYnJhbmNoX2lkICl7XHJcbiAgICAgICAgICAgIHJlc3Auc3BsaWNlKCByZXNwLmxlbmd0aCAtIDIgLCAxIClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BcclxuXHJcbiAgICB9ICxbXSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdCAocHJvcHMpe1xyXG4gICAgaWYoISBwcm9wcy5yb3V0ZSB8fCAhcHJvcHMucm91dGUubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBudWxsIFxyXG4gICAgY29uc3Qgcm91dGUgPSBiZWF1dGlmeVJvdXRlKHByb3BzLnJvdXRlKVxyXG4gICAgY29uc29sZS5sb2cocm91dGUpXHJcbiAgICBsZXQgbGFzdFBvaW50ID0gXCJcIjtcclxuICAgIGxldCBhY3Rpb24gPSBcIlwiO1xyXG4gICAgbGV0IGxhYmVsID0gXCJcIjtcclxuICAgIGxldCBjbGFzc05hbWVBY3Rpb24gPSBcIlwiO1xyXG4gICAgbGV0IGNsYXNzTmFtZUxhYmVsID0gXCJcIjtcclxuICAgIGNvbnN0IGxpcyA9IHJvdXRlLm1hcCggKHBvaW50LGkpICA9PntcclxuICAgICAgICBpZihsYXN0UG9pbnQgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IFwiQ2FtaW5hciBoYXN0YSBcIiArIHBvaW50Lm5hbWUgKyBcIi5cIjtcclxuICAgICAgICAgICAgbGFiZWwgPSBcIlRvbWFyIGFoaSBtaXNtbyBlbCBjb2xlY3Rpdm8gZGVsIHJhbWFsICNcIiArIHBvaW50LmJyYW5jaF9pZCArIFwiLlwiO1xyXG4gICAgICAgICAgICBjbGFzc05hbWVBY3Rpb24gPSBcImZhcyBmYS13YWxraW5nXCI7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZUxhYmVsID0gXCJmYXMgZmEtYnVzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihsYXN0UG9pbnQuYnJhbmNoX2lkICE9IHBvaW50LmJyYW5jaF9pZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJCYWphcnNlIGVuIFwiICsgcG9pbnQubmFtZSArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIlRvbWFyIGFoaSBtaXNtbyBlbCBjb2xlY3Rpdm8gZGVsIHJhbWFsICNcIiArIHBvaW50LmJyYW5jaF9pZCArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lQWN0aW9uID0gXCJmYXMgZmEtc29ydC1kb3duXCI7XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVMYWJlbCA9IFwiZmFzIGZhLWJ1c1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gXCJCYWphcnNlIGVuIFwiICsgcG9pbnQubmFtZSArIFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNhbWluYXIgaGFjaWEgZGVzdGluby5cIjtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZUFjdGlvbiA9IFwiZmFzIGZhLXNvcnQtZG93blwiO1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lTGFiZWwgPSBcImZhcyBmYS13YWxraW5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcclxuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PGkgY2xhc3NOYW1lPXtjbGFzc05hbWVBY3Rpb259PjwvaT4gIHthY3Rpb259PGJyLz48aSBjbGFzc05hbWU9e2NsYXNzTmFtZUxhYmVsfT48L2k+ICB7bGFiZWx9PC9saT5cclxuICAgIH0pXHJcbiAgICByZXR1cm4gPHVsPntsaXN9PC91bD5cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/Result.jsx\n");

/***/ }),

/***/ "./src/client/RouteForm.jsx":
/*!**********************************!*\
  !*** ./src/client/RouteForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LatLongFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LatLongFields */ \"./src/client/LatLongFields.jsx\");\n\n\n\nclass RouterForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = {\n            from: { lat: -34.5997051, lng: -58.398990069999996 },\n            to: { lat: -34.58940382, lng: -58.42911291 }\n        };\n        this.onChange = this.onChange.bind(this);\n    }\n\n    onChange(id, field, value) {\n        this.setState(prevState => {\n            const newField = Object.assign({}, prevState[id], { [field]: value });\n            return Object.assign({}, prevState, { [id]: newField });\n        });\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'div',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'from',\n                title: 'From',\n                value: this.state.from,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LatLongFields__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                id: 'to',\n                title: 'To',\n                value: this.state.to,\n                onChange: this.onChange }),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'button',\n                { onClick: () => this.props.onFind(this.state) },\n                'Search'\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1JvdXRlRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9Sb3V0ZUZvcm0uanN4PzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF0TG9uZ0ZpZWxkcyBmcm9tICcuL0xhdExvbmdGaWVsZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJvbSA6IHsgbGF0IDogLTM0LjU5OTcwNTEgLCBsbmcgOiAtNTguMzk4OTkwMDY5OTk5OTk2fSxcclxuICAgICAgICAgICAgdG8gOiB7IGxhdCA6IC0zNC41ODk0MDM4MiAsIGxuZyA6IC01OC40MjkxMTI5MX1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGlkLGZpZWxkLHZhbHVlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCBwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdGaWVsZCA9IE9iamVjdC5hc3NpZ24oe30scHJldlN0YXRlW2lkXSx7W2ZpZWxkXTp2YWx1ZX0pXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHByZXZTdGF0ZSx7W2lkXTpuZXdGaWVsZH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExhdExvbmdGaWVsZHMgXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGcm9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxMYXRMb25nRmllbGRzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uRmluZCh0aGlzLnN0YXRlKX0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBY0E7QUFDQTtBQW5DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/RouteForm.jsx\n");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map */ \"./src/client/Map.jsx\");\n/* harmony import */ var _RouteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteForm */ \"./src/client/RouteForm.jsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Result */ \"./src/client/Result.jsx\");\n/* harmony import */ var _navbar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar.jsx */ \"./src/client/navbar.jsx\");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  constructor(props) {\n    super(props);\n    this.findRoute = this.findRoute.bind(this);\n    this.generateMap = this.generateMap.bind(this);\n    this.state = { route: {} };\n  }\n\n  findRoute(routeData) {\n    // console.log(routeData)\n    fetch(\"/route\", {\n      method: \"POST\",\n      headers: {\n        \"content-type\": \"application/json\"\n      },\n      body: JSON.stringify(routeData)\n    }).then(resp => resp.json()).then(route => this.setState({ route })).then(this.generateMap).catch(alert);\n  }\n\n  generateMap() {\n    const points = this.state.route;\n    console.log(\"points\");\n    console.log(points);\n    points.map(s => ({ lat: s.latitude, lng: s.longitude, number: s.number, name: s.name, branch_id: s.branch_id, id: s.id }));\n\n    const waypoints = points.slice(1, -1).map(p => ({ location: p, stopover: false }));\n\n    let request = {\n      origin: points[0],\n      destination: points[points.length - 1],\n      waypoints: waypoints,\n      optimizeWaypoints: true,\n      travelMode: 'DRIVING'\n    };\n\n    directionsService.route(request, function (result, status) {\n      if (status == 'OK') {\n        routesDisplays[branch.id].setMap(map);\n        routesDisplays[branch.id].setDirections(result);\n        routesDisplays[branch.id].setOptions({\n          suppressMarkers: false,\n          polylineOptions: {\n            visible: true\n          }\n        });\n      } else {\n        console.error(response);\n      }\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { onFind: this.findRoute }),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_4__[\"default\"], { route: this.state.route })\n    );\n  }\n\n}\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n// Mapa de google maps\nvar directionsDisplay = new google.maps.DirectionsRenderer({\n  polylineOptions: { strokeColor: \"#4a4a4a\", strokeWeight: 5 },\n  suppressMarkers: false });\nvar directionsService = new google.maps.DirectionsService();\n\nvar bsas = { lat: -34.6037, lng: -58.3816 };\n\nvar map = new google.maps.Map(document.getElementById('map'), {\n  zoom: 12,\n  center: bsas\n});\ndirectionsDisplay.setMap(map);\n\nfetch(\"/allRoutes\").then(resp => resp.json()).then(console.log).catch(console.error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2luZGV4LmpzeD85OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTWFwIGZyb20gJy4vTWFwJztcclxuaW1wb3J0IFJvdXRlckZvcm0gZnJvbSAnLi9Sb3V0ZUZvcm0nO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcclxuaW1wb3J0IE5hdkJhclJlYWN0IGZyb20gJy4vbmF2YmFyLmpzeCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmZpbmRSb3V0ZSA9IHRoaXMuZmluZFJvdXRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuZ2VuZXJhdGVNYXAgPSB0aGlzLmdlbmVyYXRlTWFwLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHJvdXRlIDoge30gfVxyXG4gIH1cclxuXHJcblxyXG4gIGZpbmRSb3V0ZShyb3V0ZURhdGEpe1xyXG4gICAgLy8gY29uc29sZS5sb2cocm91dGVEYXRhKVxyXG4gICAgZmV0Y2goXCIvcm91dGVcIix7XHJcbiAgICAgIG1ldGhvZCA6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgIFwiY29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keSA6IEpTT04uc3RyaW5naWZ5KHJvdXRlRGF0YSlcclxuICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuICAgICAgLnRoZW4oIHJvdXRlID0+IHRoaXMuc2V0U3RhdGUoe3JvdXRlfSkpXHJcbiAgICAgIC50aGVuKHRoaXMuZ2VuZXJhdGVNYXApXHJcbiAgICAgIC5jYXRjaChhbGVydClcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlTWFwKCkge1xyXG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5zdGF0ZS5yb3V0ZTtcclxuICAgIGNvbnNvbGUubG9nKFwicG9pbnRzXCIpO1xyXG4gICAgY29uc29sZS5sb2cocG9pbnRzKTtcclxuICAgIHBvaW50cy5tYXAoIHMgPT4gKHtsYXQ6cy5sYXRpdHVkZSxsbmc6cy5sb25naXR1ZGUsIG51bWJlcjogcy5udW1iZXIsIG5hbWU6IHMubmFtZSwgYnJhbmNoX2lkOiBzLmJyYW5jaF9pZCwgaWQ6IHMuaWR9KSk7XHJcblxyXG4gICAgY29uc3Qgd2F5cG9pbnRzID0gIHBvaW50cy5zbGljZSgxLCAtMSkubWFwKCBwID0+ICh7IGxvY2F0aW9uIDogcCAsIHN0b3BvdmVyIDogZmFsc2V9KSlcclxuXHJcbiAgICBsZXQgcmVxdWVzdCA9IHtcclxuICAgICAgb3JpZ2luOiBwb2ludHNbMF0sXHJcbiAgICAgIGRlc3RpbmF0aW9uOiBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdLFxyXG4gICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcclxuICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRydWUsICAgXHJcbiAgICAgIHRyYXZlbE1vZGU6ICdEUklWSU5HJ1xyXG4gICAgfTtcclxuXHJcbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cykge1xyXG4gICAgICBpZiAoc3RhdHVzID09ICdPSycpIHtcclxuICAgICAgICAgIHJvdXRlc0Rpc3BsYXlzW2JyYW5jaC5pZF0uc2V0TWFwKG1hcCk7XHJcbiAgICAgICAgICByb3V0ZXNEaXNwbGF5c1ticmFuY2guaWRdLnNldERpcmVjdGlvbnMocmVzdWx0KTtcclxuICAgICAgICAgIHJvdXRlc0Rpc3BsYXlzW2JyYW5jaC5pZF0uc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgICBwb2x5bGluZU9wdGlvbnMgOiB7XHJcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICB9KSAgICAgXHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyUmVhY3QvPlxyXG4gICAgICAgIDxSb3V0ZXJGb3JtIG9uRmluZD17dGhpcy5maW5kUm91dGV9Lz5cclxuICAgICAgICA8UmVzdWx0IHJvdXRlPXt0aGlzLnN0YXRlLnJvdXRlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG59XHJcblxyXG5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5cclxuLy8gTWFwYSBkZSBnb29nbGUgbWFwc1xyXG52YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHsgXHJcbiAgICAgIHBvbHlsaW5lT3B0aW9uczoge3N0cm9rZUNvbG9yOlwiIzRhNGE0YVwiLHN0cm9rZVdlaWdodDo1fSwgXHJcbiAgICAgIHN1cHByZXNzTWFya2VyczogZmFsc2UgfSk7XHJcbnZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcclxuXHJcbnZhciBic2FzID0ge2xhdDogLTM0LjYwMzcsIGxuZzogLTU4LjM4MTZ9O1xyXG5cclxudmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgem9vbTogMTIsXHJcbiAgY2VudGVyOiBic2FzXHJcbn0pXHJcbmRpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChtYXApO1xyXG5cclxuZmV0Y2goXCIvYWxsUm91dGVzXCIpXHJcbiAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcclxuICAudGhlbihjb25zb2xlLmxvZylcclxuICAuY2F0Y2goY29uc29sZS5lcnJvcikiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQWxFQTtBQUNBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/index.jsx\n");

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