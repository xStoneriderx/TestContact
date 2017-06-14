var contacts =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("let closeButtons = document.querySelectorAll('[data-dismiss]');\r\nfor (let i = 0; i < closeButtons.length; i++) {\r\n    closeButtons[i].addEventListener('click', closeModals, false);\r\n}\r\n\r\nfunction closeModals (){\r\n    document.getElementsByClassName('modal-backdrop')[0].remove();\r\n    let modals = document.getElementsByClassName('modal')\r\n    for (let i = 0; i < modals.length; i++) {\r\n        modals[i].classList.remove('in');\r\n        modals[i].style.display = 'none';\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\r\n    showContact : function(contact) {\r\n        let modalBack = document.createElement('div');\r\n        modalBack.className = 'modal-backdrop fade in';\r\n        document.body.appendChild(modalBack);\r\n\r\n        let modal = document.getElementById(\"showContact\");\r\n        modal.classList.add('in');\r\n        modal.style.display = 'block';\r\n\r\n        let modalBody = document.getElementById(\"contactBody\");\r\n        modalBody.innerHTML = null;\r\n        let name = document.createElement('div');\r\n        name.className = 'contact__info';\r\n        name.innerHTML = 'Имя: '+contact.name;\r\n        modalBody.appendChild(name);\r\n        let tel = document.createElement('div');\r\n        tel.className = 'contact__info';\r\n        tel.innerHTML = 'Телефон: '+contact.tel;\r\n        modalBody.appendChild(tel);\r\n        let email = document.createElement('div');\r\n        email.className = 'contact__info';\r\n        email.innerHTML = 'E-mail: '+contact.email;\r\n        modalBody.appendChild(email);\r\n        let skype = document.createElement('div');\r\n        skype.className = 'contact__info';\r\n        skype.innerHTML = 'Skype: '+contact.skype;\r\n        modalBody.appendChild(skype);\r\n        let facebook = document.createElement('div');\r\n        facebook.className = 'contact__info';\r\n        facebook.innerHTML = 'Facebook: '+contact.facebook;\r\n        modalBody.appendChild(facebook);\r\n\r\n        let deleteButton = document.getElementById(\"deleteContact\");\r\n        let changeButton = document.getElementById(\"changeContact\");\r\n        deleteButton.dataset.id = contact.id;\r\n        changeButton.dataset.id = contact.id;\r\n\r\n\r\n        return (true);\r\n    },\r\n    editContact : function (contact) {\r\n        console.log(contact);\r\n        if (contact === false) {\r\n            let modalBack = document.createElement('div');\r\n            modalBack.className = 'modal-backdrop fade in';\r\n            document.body.appendChild(modalBack);\r\n        }\r\n\r\n        let modal = document.getElementById('editContact');\r\n        modal.classList.add('in');\r\n        modal.style.display = 'block';\r\n\r\n        let form = modal.querySelectorAll('form')[0];\r\n\r\n        let modalHeader = modal.getElementsByClassName('modal-title')[0];\r\n        modalHeader.innerHTML = contact !== false ? \"Изменение контакта\" : 'Создание контакта';\r\n\r\n        let modalButton = form.querySelector('button[type=\"submit\"]');\r\n        modalButton.innerHTML = contact !== false ? \"Измененить контакт\" : 'Создать контакт';\r\n\r\n        let inputs = form.querySelectorAll('input');\r\n        for (let i = 0; i < inputs.length; i++) {\r\n            inputs[i].value = contact !== false ? contact[inputs[i].name] : '';\r\n        }\r\n    },\r\n\r\n    hideAll : function(){\r\n        closeModals();\r\n    }\r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./modal.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./modal.js?");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("let allContacts = JSON.parse(localStorage.getItem('contacts'));\r\nlet counter = JSON.parse(localStorage.getItem('counter'));\r\nif (allContacts === null) allContacts = {};\r\nif (counter === null) counter = 0;\r\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\r\n    getAll : function() {\r\n        return (allContacts);\r\n    },\r\n    filter : function(reg){\r\n        let filterContacts = {};\r\n        let rex = new RegExp('.*(' + reg +')+.*', 'i');\r\n        for (let i in allContacts) {\r\n            let contact = allContacts[i];\r\n            if (rex.test(contact.name))  filterContacts[contact.id] = contact;\r\n        }\r\n        return (filterContacts);\r\n    },\r\n    get : function(id) {\r\n        return (allContacts[id]);\r\n    },\r\n    create : function(contact) {\r\n        contact.id = counter;\r\n        allContacts[counter] = contact;\r\n        let sAllContacts = JSON.stringify(allContacts);\r\n        localStorage.setItem('contacts', sAllContacts);\r\n        localStorage.setItem('counter', ++counter);\r\n        return (true);\r\n    },\r\n    update: function(id, contact) {\r\n        allContacts[id] = contact;\r\n        let sAllContacts = JSON.stringify(allContacts);\r\n        localStorage.setItem('contacts', sAllContacts);\r\n        return(true);\r\n    },\r\n    delete: function(id) {\r\n        delete allContacts[id];\r\n        let sAllContacts = JSON.stringify(allContacts);\r\n        localStorage.setItem('contacts', sAllContacts);\r\n        return(true);\r\n    },\r\n    deleteAll: function(id) {\r\n        allContacts = {};\r\n        let sAllContacts = JSON.stringify(allContacts);\r\n        localStorage.setItem('contacts', sAllContacts);\r\n        localStorage.setItem('counter', 0);\r\n        return(true);\r\n    }\r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./store.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./store.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./style.css\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/bootstrap/dist/css/bootstrap.css\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///../~/bootstrap/dist/css/bootstrap.css?");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap_dist_css_bootstrap_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_js__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_js__ = __webpack_require__(0);\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    let contactsContainer = document.getElementById(\"contactsContainer\");\r\n    renderAll();\r\n\r\n\r\n    function renderAll (allContacts){\r\n        if (typeof allContacts === 'undefined') allContacts = __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].getAll();\r\n        contactsContainer.innerHTML = null;\r\n        Object.keys(allContacts).map(function(objectKey) {\r\n            let contact = allContacts[objectKey];\r\n\r\n            let div = document.createElement('div');\r\n            div.className = 'col-md-3 col-md-offset-1 contact';\r\n            div.dataset.id = contact.id;\r\n            let name = document.createElement('div');\r\n            name.className = 'contact__name';\r\n            name.innerHTML = contact.name;\r\n            let tel = document.createElement('div');\r\n            tel.className = 'contact__tel';\r\n            tel.innerHTML = contact.tel;\r\n\r\n            div.appendChild(name);\r\n            div.appendChild(tel);\r\n            contactsContainer.appendChild(div);\r\n        });\r\n    }\r\n\r\n\r\n    contactsContainer.onclick = function(event) {\r\n        let target = event.target;\r\n        let contact = target.closest('.contact');\r\n        if (!contact) return;\r\n        if (!contactsContainer.contains(contact)) return;\r\n        openContact(contact);\r\n    };\r\n\r\n    function openContact (e){\r\n        let id = e.dataset.id;\r\n        let contact = __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].get(id);\r\n        __WEBPACK_IMPORTED_MODULE_3__modal_js__[\"a\" /* default */].showContact(contact);\r\n    }\r\n    document.getElementById(\"addContact\").addEventListener(\"click\", function() {\r\n        __WEBPACK_IMPORTED_MODULE_3__modal_js__[\"a\" /* default */].editContact(false);\r\n    });\r\n    document.getElementById(\"addTestContact\").addEventListener(\"click\", function() {\r\n        let contact = {\r\n            name: 'test',\r\n            tel: '+380444444444',\r\n            email: 'test',\r\n            skype: 'test',\r\n            facebook: 'test',\r\n            address: 'test'\r\n        };\r\n        __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].create(contact);\r\n        renderAll();\r\n    });\r\n    document.getElementById(\"deleteContact\").addEventListener(\"click\", function(e) {\r\n        let id = e.target.dataset.id;\r\n        __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].delete(id);\r\n        __WEBPACK_IMPORTED_MODULE_3__modal_js__[\"a\" /* default */].hideAll();\r\n        renderAll();\r\n    });\r\n    document.getElementById(\"changeContact\").addEventListener(\"click\", function(e) {\r\n        let id = e.target.dataset.id;\r\n        let contact = __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].get(id);\r\n        __WEBPACK_IMPORTED_MODULE_3__modal_js__[\"a\" /* default */].editContact(contact);\r\n    });\r\n    document.getElementById(\"deleteAll\").addEventListener(\"click\", function() {\r\n        __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].deleteAll();\r\n        renderAll();\r\n    });\r\n    document.getElementById(\"filter\").addEventListener(\"keyup\", function() {\r\n        let contacts = __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].filter(this.value);\r\n        renderAll(contacts);\r\n    });\r\n    document.getElementById(\"contactEdit\").addEventListener(\"submit\", function(e) {\r\n        e.preventDefault();\r\n        let contact ={};\r\n        let form = e.target;\r\n        let inputs = form.querySelectorAll('input');\r\n        for (let i = 0; i < inputs.length; i++) {\r\n            contact[inputs[i].name] = inputs[i].value;\r\n        }\r\n        if (contact.id !== '') __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].update(contact.id, contact);\r\n        else __WEBPACK_IMPORTED_MODULE_2__store_js__[\"a\" /* default */].create(contact);\r\n        renderAll();\r\n        __WEBPACK_IMPORTED_MODULE_3__modal_js__[\"a\" /* default */].hideAll();\r\n    });\r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./contacts.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./contacts.js?");

/***/ })
/******/ ]);