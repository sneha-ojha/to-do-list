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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\nfunction renderProjects(projects) {\r\n    const taskList = document.getElementById('taskList');\r\n    taskList.innerHTML = ''; // Clear existing tasks\r\n  \r\n    projects.forEach(project => {\r\n      // Create a task card\r\n      const taskCard = document.createElement('div');\r\n      taskCard.classList.add('todo-card', 'bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'relative');\r\n    \r\n      taskCard.innerHTML = `\r\n        <h3 class=\"text-2xl font-semibold mb-2\">${project.title}</h3>\r\n        <p class=\"text-gray-700 mb-2\">${project.description}</p>\r\n        <p class=\"text-gray-500 mb-2\"><strong>Due:</strong> ${project.dueDate}</p>\r\n        <p class=\"text-${priorityColor(project.priority)} mb-2\"><strong>Priority:</strong> ${project.priority}</p>\r\n        <p class=\"text-gray-600 mb-4\"><strong>Notes:</strong> ${project.notes}</p>\r\n        <ul class=\"mb-4\">\r\n          <strong>Checklist:</strong>\r\n          ${project.checklistItems.map(item => `<li> - ${item}</li>`).join('')}\r\n        </ul>\r\n        <button class=\"bg-red-500 text-white p-2 rounded-lg shadow-lg absolute bottom-4 right-4 remove-task\">Delete</button>\r\n      `;\r\n    \r\n      // Append task card to task list\r\n      taskList.appendChild(taskCard);\r\n    \r\n      // Add delete functionality\r\n      taskCard.querySelector('.remove-task').addEventListener('click', function() {\r\n        removeTodoFromStorage(project.id);\r\n        renderProjects(loadProjects());\r\n      });\r\n    });\r\n  }\r\n  \r\n  // Helper function to get priority color\r\n  function priorityColor(priority) {\r\n    switch(priority) {\r\n      case 'Low': return 'green-500';\r\n      case 'Medium': return 'yellow-500';\r\n      case 'High': return 'red-500';\r\n      default: return 'gray-500';\r\n    }\r\n  }\r\n  \r\n  // Helper function to remove todo from localStorage\r\n  function removeTodoFromStorage(id) {\r\n    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];\r\n    const updatedProjects = savedProjects.filter(project => project.id !== id);\r\n    localStorage.setItem('projects', JSON.stringify(updatedProjects));\r\n  }\r\n  \n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  // Load and render projects\r\n  const projects = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)(projects);\r\n\r\n  // Add event listener for the new task form\r\n  document.getElementById('todoForm').addEventListener('submit', function(e) {\r\n    e.preventDefault();\r\n\r\n    // Get form values\r\n    const title = document.getElementById('title').value;\r\n    const description = document.getElementById('description').value;\r\n    const dueDate = document.getElementById('dueDate').value;\r\n    const priority = document.getElementById('priority').value;\r\n    const notes = document.getElementById('notes').value;\r\n  \r\n    const checklistItems = Array.from(document.querySelectorAll('#checklist li')).map(li => li.innerText);\r\n\r\n    // Create a new todo\r\n    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addTodo)({\r\n      title,\r\n      description,\r\n      dueDate,\r\n      priority,\r\n      notes,\r\n      checklistItems\r\n    });\r\n\r\n    // Clear form\r\n    document.getElementById('todoForm').reset();\r\n    document.getElementById('checklist').innerHTML = '';\r\n\r\n    // Add todo to the list\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.renderProjects)((0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadProjects)());\r\n  });\r\n\r\n  // Add checklist functionality\r\n  document.getElementById('addChecklistItem').addEventListener('click', function() {\r\n    const itemText = document.getElementById('checklistItem').value;\r\n    if (itemText !== '') {\r\n      const li = document.createElement('li');\r\n      li.innerText = itemText;\r\n      document.getElementById('checklist').appendChild(li);\r\n      document.getElementById('checklistItem').value = ''; // Clear input\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects)\n/* harmony export */ });\nfunction loadProjects() {\r\n    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];\r\n  \r\n    // Ensure todos array exists for each project\r\n    savedProjects.forEach(project => {\r\n      if (!Array.isArray(project.todos)) {\r\n        project.todos = [];\r\n      }\r\n    });\r\n  \r\n    console.log(\"Loaded projects: \", savedProjects); // Debugging\r\n    return savedProjects;\r\n  }\r\n  \n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo)\n/* harmony export */ });\nfunction addTodo({\r\n    title,\r\n    description,\r\n    dueDate,\r\n    priority,\r\n    notes,\r\n    checklistItems\r\n  }) {\r\n    const newTodo = {\r\n      id: Date.now(), // Unique ID for the todo\r\n      title,\r\n      description,\r\n      dueDate,\r\n      priority,\r\n      notes,\r\n      checklistItems\r\n    };\r\n  \r\n    // Save todo to localStorage\r\n    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];\r\n    savedProjects.push(newTodo);\r\n    localStorage.setItem('projects', JSON.stringify(savedProjects));\r\n  \r\n    return newTodo;\r\n  }\r\n  \n\n//# sourceURL=webpack://to-do-list/./src/todo.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;