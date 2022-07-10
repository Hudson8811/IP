/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

$(document).ready(function () {
  $('.header__man').click(function (event) {
    $('.login-header').toggleClass('active');
  });
  $(document).click(function (e) {
    var login = $(".login-header, .header__man");

    if (!login.is(e.target) && login.has(e.target).length === 0) {
      login.removeClass('active');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/***/ (function() {

$(document).ready(function () {
  $('.menu__item--click').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
  var philosophi = document.querySelector('.philosophi-block');

  if (philosophi) {
    $('.philosophi-link, .bureau-item').addClass('active-menu');
  }

  var offices = document.querySelector('.offices');

  if (offices) {
    $('.offices-link, .bureau-item').addClass('active-menu');
  }

  var people = document.querySelector('.people');

  if (people) {
    $('.people-link').addClass('active-menu');
  }

  var docs = document.querySelector('.docs');

  if (docs) {
    $('.docs-link').addClass('active-menu');
  }
});

/***/ }),

/***/ "./src/blocks/modules/sidebar/sidebar.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sidebar/sidebar.js ***!
  \***********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/sidebar/sidebar */ "./src/blocks/modules/sidebar/sidebar.js");
/* harmony import */ var _modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/import/pages/calendar.js":
/*!*****************************************!*\
  !*** ./src/js/import/pages/calendar.js ***!
  \*****************************************/
/***/ (function() {

$(function () {
  var $datepicker = $('.js-datepicker');
  var datepicker = $datepicker.datepicker({
    autoClose: false,
    classes: 'datepicker__calendar',
    position: 'bottom center',
    offset: 22,
    range: true,
    multipleDatesSeparator: '  '
  });
});

/***/ }),

/***/ "./src/js/import/pages/login.js":
/*!**************************************!*\
  !*** ./src/js/import/pages/login.js ***!
  \**************************************/
/***/ (function() {

var togglePassword = document.querySelector('.form-login__eye');
var password = document.querySelector('.form-login__input-password');

if (togglePassword) {
  togglePassword.addEventListener('click', function (e) {
    var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('active');
  });
}

/***/ }),

/***/ "./src/js/import/pages/pages.js":
/*!**************************************!*\
  !*** ./src/js/import/pages/pages.js ***!
  \**************************************/
/***/ (function() {

//RADIO
$(document).ready(function () {
  $.each($('.radiobuttons__item'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.radiobuttons__item', function (event) {
    $(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
    $(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  });
}); //select

var selectSingle1 = document.querySelector('.select1');
var selectSingle1_title = selectSingle1.querySelector('.select1--title');
var selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');
selectSingle1_title.addEventListener('click', function () {
  if ('active' === selectSingle1.getAttribute('data-state')) {
    selectSingle1.setAttribute('data-state', '');
  } else {
    selectSingle1.setAttribute('data-state', 'active');
  }
});

for (var i = 0; i < selectSingle1_labels.length; i++) {
  selectSingle1_labels[i].addEventListener('click', function (evt) {
    selectSingle1_title.textContent = evt.target.textContent;
    selectSingle1.setAttribute('data-state', '');
  });
}

var selectSingle2 = document.querySelector('.select2');
var selectSingle2_title = selectSingle2.querySelector('.select2--title');
var selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');
selectSingle2_title.addEventListener('click', function () {
  if ('active' === selectSingle2.getAttribute('data-state')) {
    selectSingle2.setAttribute('data-state', '');
  } else {
    selectSingle2.setAttribute('data-state', 'active');
  }
});

for (var _i = 0; _i < selectSingle2_labels.length; _i++) {
  selectSingle2_labels[_i].addEventListener('click', function (evt) {
    selectSingle2_title.textContent = evt.target.textContent;
    selectSingle2.setAttribute('data-state', '');
  });
}

var selectSingle_offices = document.querySelector('.select-offices');
var selectSingle_offices_title = selectSingle_offices.querySelector('.select-offices--title');
var selectSingle_offices_labels = selectSingle_offices.querySelectorAll('.select-offices--label');
selectSingle_offices_title.addEventListener('click', function () {
  if ('active' === selectSingle_offices.getAttribute('data-state')) {
    selectSingle_offices.setAttribute('data-state', '');
  } else {
    selectSingle_offices.setAttribute('data-state', 'active');
  }
});

for (var _i2 = 0; _i2 < selectSingle_offices_labels.length; _i2++) {
  selectSingle_offices_labels[_i2].addEventListener('click', function (evt) {
    selectSingle_offices_title.textContent = evt.target.textContent;
    selectSingle_offices.setAttribute('data-state', '');
  });
}

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_pages_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/pages/login */ "./src/js/import/pages/login.js");
/* harmony import */ var _import_pages_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_pages_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_pages_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/pages/calendar */ "./src/js/import/pages/calendar.js");
/* harmony import */ var _import_pages_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_pages_calendar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_pages_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/pages/pages */ "./src/js/import/pages/pages.js");
/* harmony import */ var _import_pages_pages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_pages_pages__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=main.js.map