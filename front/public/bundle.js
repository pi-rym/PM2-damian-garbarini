/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderizadoDePeliculas = __webpack_require__(/*! ./renderPelis */ \"./scripts/renderPelis.js\")\r\n\r\nconst getPelis = (data) =>{\r\n    data.forEach(renderizadoDePeliculas)\r\n}\r\n\r\n$.get(`https://students-api.2.us-1.fl0.io/movies`, getPelis);\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderPelis.js":
/*!********************************!*\
  !*** ./scripts/renderPelis.js ***!
  \********************************/
/***/ ((module) => {

eval("const seccionDePeliculas = document.getElementById('containerDePeliculas')\r\n\r\n\r\nfunction renderizadoDePeliculas (pelicula) {\r\n    \r\n    const peliculas = document.createElement('article')\r\n    peliculas.classList.add(\"peliculas\")\r\n    \r\n    const DescripcionPeliculas= document.createElement('div')\r\n    DescripcionPeliculas.classList.add(\"conPeli\")\r\n    \r\n    \r\n    peliculas.innerHTML = `<img src=\"${pelicula.poster}\" alt=\"${pelicula.title}\">`\r\n    \r\n    DescripcionPeliculas.innerHTML = ` \r\n    <h4>${pelicula.title} (${pelicula.year})</h4> \r\n    <p> Director: ${pelicula.director}</p>\r\n    <p> Duracion: ${pelicula.duration}</p>\r\n    <p> Genero: ${pelicula.genre.join(\", \")}</p>\r\n    <p class=\"calificacion\"> Rate: ${pelicula.rate}</p>\r\n    `\r\n    peliculas.appendChild(DescripcionPeliculas)\r\n    seccionDePeliculas.appendChild(peliculas)\r\n    \r\n}\r\n\r\nmodule.exports = renderizadoDePeliculas ;\n\n//# sourceURL=webpack://front/./scripts/renderPelis.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;