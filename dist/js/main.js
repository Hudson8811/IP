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
  $('.page').click(function (e) {
    $('.login-header').removeClass('active');
  });
  $('.header__btn-menu').click(function (e) {
    $('.header__btn-menu').toggleClass('js-active-btn-menu');
    $('.menu').toggleClass('js-active-menu');
    $('body').toggleClass('js-overflow-active');
    $('.header__btn-sidebar').removeClass('js-active-btn-sidebar');
    $('.sidebar').removeClass('js-active-sidebar');
  });
  $('.header__btn-sidebar').click(function (e) {
    $('.header__btn-sidebar').toggleClass('js-active-btn-sidebar');
    $('.sidebar').toggleClass('js-active-sidebar');
    $('body').toggleClass('js-overflow-active');
    $('.header__btn-menu').removeClass('js-active-btn-menu');
    $('.menu').removeClass('js-active-menu');
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

/***/ "./src/js/import/calendar.js":
/*!***********************************!*\
  !*** ./src/js/import/calendar.js ***!
  \***********************************/
/***/ (function() {

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function () {
  $(function () {
    $(".select-offices--title").click(function () {
      $(".select-offices").toggleClass("active");
      $('.select-offices--content').toggleClass("active");
    });
    $(".swiper-pagination-bullet").click(function () {
      $(".select-offices").removeClass("active");
      $('.select-offices--content').removeClass("active");
    });
  });
  $(document).click(function (e) {
    var login = $(".select-offices");

    if (!login.is(e.target) && login.has(e.target).length === 0) {
      $(".select-offices, .select-offices--content").removeClass('active');
    }
  });
  $(function () {
    $(".hover-block").mouseover(function () {
      $(this).addClass('active');
    });
    $(".hover-block").mouseout(function () {
      $(this).removeClass('active');
    });
  });
  $(function () {
    $(".calendar-slide__item").click(function () {
      if (!$(".hover-block").hasClass('active')) {
        $(".calendar-slide__item").removeClass('active');
        $(this).addClass('active');
      }
    });
  });
  $(document).click(function (e) {
    var calendar = $(".calendar-slide__item");

    if (!calendar.is(e.target) && calendar.has(e.target).length === 0) {
      $(".calendar-slide__item").removeClass('active');
    }
  });
  $(function () {
    $(".autoreply__item-calendar-row input").click(function () {
      $(".autoreply__item-calendar").addClass("active");
    });
  });

  if ($('#datepicker').length > 0) {
    var picker = new easepick.create({
      element: "#datepicker",
      css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/calendar-styles.css"],
      lang: "ru-RU",
      calendars: 2,
      autoApply: true,
      zIndex: 10,
      plugins: ['RangePlugin'],
      RangePlugin: {
        tooltip: true
      },
      setup: function setup(picker) {
        picker.on('hide', function (e) {
          var autoreply__item_calendar = document.querySelector('.autoreply__item-calendar');
          autoreply__item_calendar.classList.remove('active');
        });
        picker.on('select', function (e) {
          $('#datepicker').trigger('select');
        });
        picker.on('clear', function (e) {
          $('#datepicker').trigger('clear');
        });
      }
    });
  }

  if ($('#datepicker-page-calendar').length > 0) {
    var calPageDatePickerInp = $('#datepicker-page-calendar'),
        dpWrap = calPageDatePickerInp.closest('.js-datepicker-calendar-wrap'),
        dpMonthName = dpWrap.find('.js-datepicker-calendar-month'),
        dpControls = dpWrap.find('.js-datepicker-calendar-controls'),
        isDpOpen = false;
    dpEasepickSettings = {};
    dpEasepickSettings.plugins = ['LockPlugin'];
    dpEasepickSettings.LockPlugin = {
      minDate: new Date()
    };

    if ($('#mycal').hasClass('mycal--admin')) {
      dpEasepickSettings.plugins = [];
      dpEasepickSettings.LockPlugin = {};
    }

    var calPageDatePicker = new easepick.create({
      element: "#datepicker-page-calendar",
      css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css", "styles/calendar-styles.css"],
      lang: "ru-RU",
      calendars: 2,
      autoApply: true,
      zIndex: 10,
      plugins: dpEasepickSettings.plugins,
      date: new Date(),

      /*RangePlugin: {
      	tooltip: true,
      },*/
      LockPlugin: dpEasepickSettings.LockPlugin,
      setup: function setup(currentDP) {
        currentDP.on('hide', function (e) {
          console.log('hide');
          dpWrap.removeClass('datepicker-page-calendar__wrap--active');
        });
        currentDP.on('select', function (e) {
          console.log('select');
          $('#datepicker-page-calendar').trigger('select');
          var selectedMonthName = capitalizeFirstLetter(currentDP.getDate().format('MMMM', "ru-RU"));
          dpMonthName.html(selectedMonthName);
          isDpOpen = false;
        });
        currentDP.on('render', function (e) {
          console.log('render');
          var selectedMonthName = capitalizeFirstLetter(currentDP.getDate().format('MMMM', "ru-RU"));
          dpMonthName.html(selectedMonthName);
        });
        currentDP.on('clear', function (e) {
          $('#datepicker-page-calendar').trigger('clear');
        });
      }
    });
    dpControls.on('click', function () {
      if (isDpOpen) {
        isDpOpen = false;
      } else {
        dpWrap.addClass('datepicker-page-calendar__wrap--active');
        calPageDatePicker.show();
        var coordinates = calPageDatePicker.adjustPosition(dpMonthName[0]);
        coordinates.top -= 17;
        console.log(coordinates);
        console.log(calPageDatePicker.ui.container.style.top);
        calPageDatePicker.ui.container.style.top = "".concat(coordinates.top, "px ");
        calPageDatePicker.ui.container.style.left = "".concat(coordinates.left, "px");
        isDpOpen = true;
      }
    });
    /*calPageDatePicker.hide();
    calPageDatePicker.getDate();*/
  }
});

/***/ }),

/***/ "./src/js/import/login.js":
/*!********************************!*\
  !*** ./src/js/import/login.js ***!
  \********************************/
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

/***/ "./src/js/import/pages.js":
/*!********************************!*\
  !*** ./src/js/import/pages.js ***!
  \********************************/
/***/ (function() {

var lastDataFancyMapTriggered;
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
  var autoreply = document.querySelector('.autoreply');
  var massage_icon = document.querySelector('.massage-icon');

  if (autoreply) {
    massage_icon.classList.add('active');
  }

  var signature = document.querySelector('.signature');
  var signature_icon = document.querySelector('.signature-icon');

  if (signature) {
    signature_icon.classList.add('active');
  }

  var offices_calendar = document.querySelector('.offices-calendar');
  var calendar_icon = document.querySelector('.calendar-icon');

  if (offices_calendar) {
    calendar_icon.classList.add('active');
  }

  var people = document.querySelector('.people');
  var call_icon = document.querySelector('.call-icon');

  if (people) {
    call_icon.classList.add('active');
  }
}); //MAP

/* Landing page scripts */

/* $(document).ready(function() {
	$('.usage').click(function(e) {
		e.preventDefault();
		$('.editor-window').slideToggle(200);
	});

	$(document).on('mousemove', '.mapplic-layer', function(e) {
		var map = $('.mapplic-map'),
		x = (e.pageX - map.offset().left) / map.width(),
			y = (e.pageY - map.offset().top) / map.height();
			$('.mapplic-coordinates-x').text(parseFloat(x).toFixed(4));
			$('.mapplic-coordinates-y').text(parseFloat(y).toFixed(4));
		});

		$('.editor-window .window-mockup').click(function() {
			$('.editor-window').slideUp(200);
		});
	}); */

jQuery(function () {
  var css = '.mapplic-filtered svg [id^=landmark] > * {opacity: 1 !important; }';
  var mapJsonSrc = '/jslibs/mall.json';
  var jsLibsPath = '/jslibs/';

  if (document.location.href.includes('.github.io')) {
    mapJsonSrc = '/IP/dist/jslibs/mall-github.json';
    jsLibsPath = '/IP/dist/jslibs/';
  }

  var mapsContent = []; //данные о сотрудниках из базы

  var mapsContentSpecial = []; //данные о специальных комнатах(переговорные)

  $.getJSON(jsLibsPath + 'map-data.json', function (data) {
    mapsContent = data;
    $.getJSON(jsLibsPath + 'map-data-special-rooms.json', function (dataSpecial) {
      mapsContentSpecial = dataSpecial;
      map = $('#mapplic').mapplic({
        source: mapJsonSrc,
        customcss: css,
        sidebar: true,
        sidebartoggle: true,
        alphabetic: true,
        height: 560,
        developer: false,
        searchdescription: true,
        searcheverywhere: true,
        animations: true,
        minimap: false,
        marker: 'hidden',
        fillcolor: '#CFEDFF',
        fullscreen: false,
        thumbholder: true,
        maxscale: 3,
        employeeszoom: 2
      });
      /*
      		map.on('mapready', function (e, self) {
      			console.log('Map is ready!')
      			// self grants direct access to the map object
      			// The map will be focused on the washing machine by default
      		});
      				map.on('svgloaded', function (e, svg, id) {
      			console.log(id + ' svgloaded.');
      			// svg element and floor id returned
      		});
      				// Location opened
      		map.on('locationopened', function (e, location) {
      			// location grants full access to the location
      			console.log(location.title + ' opened.');
      		});
      				// Location closed
      		map.on('locationclosed', function (e) {
      			console.log('Location closed.');
      		});
      				// Level switched
      		map.on('levelswitched', function (e, level) {
      			console.log('Switched to ' + level + ' level.');
      		});
      				// Position changed
      		map.on('positionchanged', function (e, self) {
      			// self grants direct access to the map object
      			console.log('Pan or zoom performed, current scale: ' + self.scale);
      		});
      		*/

      /*
      <div class="map-myinfo-item"><div class="map-myinfo-item__title">204</div><div class="map-myinfo-item__desc"><p>Ю. Королёва</p><p>О. Клубкова</p><p>Е. Воронкина</p></div></div>
      */
      //[0]- mt, [1] - ml

      /*_l1_f2_specialp3
      _l1_f2_specialp4
      _l1_f2_specialp5*/

      var roomsPositionCorrection = {
        '_l1_f2_r_230': ['0', '31'],
        '_l1_f2_s_p3': ['18', '0']
      };
      map.on('levelswitched', function (e, level) {
        var currentLocation;
        var currentFloor;

        try {
          currentLocation = parseInt(level.match(/_l(\d+)/)[1]);
          currentFloor = parseInt(level.match(/_f(\d+)/)[1]);
        } catch (err) {
          console.log('Странное название карты. Вывод сотрудников невозможен');
          return;
        }
        /*console.log('location=' + currentLocation);
        console.log('floor=' + currentFloor);
        console.log('------------');*/
        // self grants direct access to the map object
        // The map will be focused on the washing machine by default
        //self.moveTo(0.67, 0.62, 3, 0);


        setTimeout(function () {
          var $map = $('#mapplic .mapplic-map');
          var thisLevelLayer = $('#mapplic .mapplic-layer[data-floor="' + level + '"]');

          if (!thisLevelLayer.hasClass('mapplic-visible')) {
            return;
          }

          var thisLevelLayerOffset = thisLevelLayer.offset();

          if (thisLevelLayer.find('.map-myinfo').length > 0) {
            console.log('Для данного слоя сотрудники уже были выведены');
            return;
          }

          if (level === 'map_l' + currentLocation + '_f' + currentFloor) {
            mapsContent.forEach(function (mapsContent_lvl) {
              if (mapsContent_lvl.location === currentLocation) {
                mapsContent_lvl.floors.forEach(function (mapsContent_floor) {
                  if (mapsContent_floor.floor === currentFloor) {
                    console.log('данные для текущего этажа найдены. начинаю вывод');
                    var svg = thisLevelLayer.find('svg');
                    var svgOffset = svg.offset();
                    var roomsLayer = thisLevelLayer.find('#MLOC_l' + currentLocation + '_f' + currentFloor + '_rooms');
                    var roomsOffset = roomsLayer.offset();
                    var matrix_match = $map.css('transform').match(/matrix\((.*?)\)/);

                    if (typeof matrix_match[1] === 'undefined') {
                      console.log('Ошибка. Не имеет matrix transform. ');
                      return;
                    }

                    var matrixTransformArray = matrix_match[1].replace(' ', '').split(',');
                    var matrixTransform = {
                      a: matrixTransformArray[0],
                      //Изменение масштаба по горизонтали. Значение больше 1 расширяет элемент, меньше 1, наоборот, сжимает.
                      b: matrixTransformArray[1],
                      //Наклон по вертикали. Положительное значение наклоняет вверх, отрицательное вниз.
                      c: matrixTransformArray[2],
                      //Наклон по горизонтали. Положительное значение наклоняет влево, отрицательное вправо.
                      d: matrixTransformArray[3],
                      //Изменение масштаба по вертикали. Значение больше 1 расширяет элемент, меньше 1 — сжимает.
                      tx: matrixTransformArray[4],
                      //Смещение по горизонтали в пикселях. Положительное значение сдвигает элемент вправо на заданное число пикселей, отрицательное значение сдвигает влево.
                      ty: matrixTransformArray[5] //Смещение по вертикали в пикселях. При положительном значении элемент опускается на заданное число пикселей вниз или вверх при отрицательном значении.

                    };
                    var halfWofMap = $map.width() / 2;
                    var mapOffset = $map.offset();
                    var needZoomOfTextLayer = 1 / matrixTransform.a;
                    thisLevelLayer.append('<div class="map-myinfo"></div>');
                    var mytextLayer = thisLevelLayer.find('.map-myinfo');
                    var mytextLayerOffset = mytextLayer.offset();
                    mapsContent_floor.rooms.forEach(function (mapsContent_room) {
                      var roomId = '_l' + currentLocation + '_f' + currentFloor + '_r_' + mapsContent_room.index;
                      var roomSvgObject = roomsLayer.find('#' + roomId);
                      mytextLayer.append('<div class="map-myinfo-item" data-room=' + roomId + '><div class="map-myinfo-item__title">' + mapsContent_room.index + '</div><div class="map-myinfo-item__desc"></div></div>');
                      var thisRoomInfoItem = mytextLayer.find('.map-myinfo-item[data-room="' + roomId + '"]');
                      var thisRoomText = thisRoomInfoItem.find('.map-myinfo-item__desc');

                      if (typeof roomsPositionCorrection[roomId] !== 'undefined') {
                        thisRoomInfoItem.css('margin-top', roomsPositionCorrection[roomId][0] + 'px');
                        thisRoomInfoItem.css('margin-left', roomsPositionCorrection[roomId][1] + 'px');
                      }

                      mapsContent_room.emplyees.forEach(function (mapsContent_emplyee) {
                        //mapsContent_emplyee.name
                        thisRoomText.append('<a href="' + mapsContent_emplyee.link + '">' + mapsContent_emplyee.name + '</a>');
                      });
                      thisRoomInfoItem.css('top', (roomSvgObject.offset().top - mapOffset.top) * needZoomOfTextLayer).css('left', (roomSvgObject.offset().left - mapOffset.left) * needZoomOfTextLayer);
                    });
                  }
                });
              }
            });
            mapsContentSpecial.forEach(function (mapsContentSpecial_lvl) {
              if (mapsContentSpecial_lvl.location === currentLocation) {
                mapsContentSpecial_lvl.floors.forEach(function (mapsContentSpecial_floor) {
                  if (mapsContentSpecial_floor.floor === currentFloor) {
                    console.log('данные для текущего этажа найдены. начинаю вывод');
                    var svg = thisLevelLayer.find('svg');
                    var svgOffset = svg.offset();
                    var roomsLayer = thisLevelLayer.find('#MNOINT_l' + currentLocation + '_f' + currentFloor + '_special-rooms');
                    var roomsOffset = roomsLayer.offset();
                    var matrix_match = $map.css('transform').match(/matrix\((.*?)\)/);

                    if (typeof matrix_match[1] === 'undefined') {
                      console.log('Ошибка. Не имеет matrix transform. ');
                      return;
                    }

                    var matrixTransformArray = matrix_match[1].replace(' ', '').split(',');
                    var matrixTransform = {
                      a: matrixTransformArray[0],
                      //Изменение масштаба по горизонтали. Значение больше 1 расширяет элемент, меньше 1, наоборот, сжимает.
                      b: matrixTransformArray[1],
                      //Наклон по вертикали. Положительное значение наклоняет вверх, отрицательное вниз.
                      c: matrixTransformArray[2],
                      //Наклон по горизонтали. Положительное значение наклоняет влево, отрицательное вправо.
                      d: matrixTransformArray[3],
                      //Изменение масштаба по вертикали. Значение больше 1 расширяет элемент, меньше 1 — сжимает.
                      tx: matrixTransformArray[4],
                      //Смещение по горизонтали в пикселях. Положительное значение сдвигает элемент вправо на заданное число пикселей, отрицательное значение сдвигает влево.
                      ty: matrixTransformArray[5] //Смещение по вертикали в пикселях. При положительном значении элемент опускается на заданное число пикселей вниз или вверх при отрицательном значении.

                    };
                    var needZoomOfTextLayer = 1 / matrixTransform.a;
                    var halfWofMap = $map.width() / 2;
                    var mapOffset = $map.offset();

                    if (!thisLevelLayer.find('.map-myinfo').length > 0) {
                      thisLevelLayer.append('<div class="map-myinfo"></div>');
                    }

                    var mytextLayer = thisLevelLayer.find('.map-myinfo');
                    var mytextLayerOffset = mytextLayer.offset();
                    mapsContentSpecial_floor.rooms.forEach(function (mapsContentSpecial_room) {
                      console.log(mapsContentSpecial_room);
                      var roomId = '_l' + currentLocation + '_f' + currentFloor + '_s_' + mapsContentSpecial_room.index;
                      var roomSvgObject = roomsLayer.find('[id="' + roomId + '"]');
                      mytextLayer.append('<div class="map-myinfo-item" data-room=' + roomId + '><div class="map-myinfo-item__title">' + mapsContentSpecial_room.title + '</div><div class="map-myinfo-item__desc"></div></div>');
                      var thisRoomInfoItem = mytextLayer.find('.map-myinfo-item[data-room="' + roomId + '"]');
                      var thisRoomText = thisRoomInfoItem.find('.map-myinfo-item__desc');

                      if (typeof roomsPositionCorrection[roomId] !== 'undefined') {
                        thisRoomInfoItem.css('margin-top', roomsPositionCorrection[roomId][0] + 'px');
                        thisRoomInfoItem.css('margin-left', roomsPositionCorrection[roomId][1] + 'px');
                      }

                      mapsContentSpecial_room.info.forEach(function (mapsContentSpecial_info) {
                        //mapsContentSpecial_emplyee.name
                        thisRoomText.append('<p>' + mapsContentSpecial_info.row + '</p>');
                      });
                      thisRoomInfoItem.css('top', (roomSvgObject.offset().top - mapOffset.top) * needZoomOfTextLayer).css('left', (roomSvgObject.offset().left - mapOffset.left) * needZoomOfTextLayer);
                    });
                  }
                });
              }
            });
          }
        }, 500); //!!! МОГУТ БЫТЬ ПРОБЛЕМЫ. ТОГДА УВЕЛИЧИТЬ ЗАДЕРЖКУ
      });
      $("[data-fancy-map]").on('click', function () {
        lastDataFancyMapTriggered = $(this);
      });
      Fancybox.bind("[data-fancy-map]", {
        dragToClose: false,
        on: {
          reveal: function reveal(fancybox, slide) {
            $('#mapplic').trigger('resize');
            map.data('mapplic').showLocation(lastDataFancyMapTriggered.data('id'));
          }
        }
      });
    });
  });
});

/***/ }),

/***/ "./src/js/import/searchDropdown.js":
/*!*****************************************!*\
  !*** ./src/js/import/searchDropdown.js ***!
  \*****************************************/
/***/ (function() {

/*
var searchTest = {
	'Аиша Булгакова': 1,
	'Аиша Малышева': 2,
	'Александр Акимов': 3,
	'Александр Алехин': 4,
	'Александр Блинов': 5,
	'Александр Иванов': 6,
	'Александр Потапов': 7,
	'Александр Семенов': 8,
	'Александр Соколов': 9,
	'Александр Швецов': 10,
	'Александра Виноградова': 11,
	'Алексей Королев': 12,
	'Алексей Орлов': 13,
	'Алиса Новикова': 14,
	'Алиса Овчинникова': 15,
	'Алия Маслова': 16,
	'Алёна Андреева': 17,
	'Алёна Верещагина': 18,
	'Алёна Попова': 19,
	'Амина Завьялова': 20,
	'Амина Наумова': 21,
	'Анастасия Попова': 22,
	'Анастасия Чижова': 23,
	'Ангелина Ермакова': 24,
	'Ангелина Сорокина': 25,
	'Андрей Попов': 26,
	'Анна Зайцева': 27,
	'Анна Никифорова': 28,
	'Анна Шестакова': 29,
	'Арина Леонтьева': 30,
	'Арина Миронова': 31,
	'Арина Румянцева': 32,
	'Арсений Королев': 33,
	'Арсений Рябов': 34,
	'Артемий Горбунов': 35,
	'Артемий Исаев': 36,
	'Артемий Овчинников': 37,
	'Артём Маслов': 38,
	'Артём Семенов': 39,
	'Артём Смирнов': 40,
	'Артём Сычев': 41,
	'Валерия Кузина': 42,
	'Валерия Сорокина': 43,
	'Варвара Рябова': 44,
	'Варвара Соколова': 45,
	'Варвара Фокина': 46,
	'Василий Гришин': 47,
	'Василиса Клюева': 48,
	'Василиса Чернова': 49,
	'Василиса Щеглова': 50,
	'Вера Балашова': 51,
	'Вера Калугина': 52,
	'Вероника Мельникова': 53,
	'Виктория Ковалева': 54,
	'Виктория Моргунова': 55,
	'Виктория Морозова': 56,
	'Виктория Пахомова': 57,
	'Владимир Герасимов': 58,
	'Владимир Новиков': 59,
	'Владислав Овчинников': 60,
	'Владислав Шубин': 61,
	'Георгий Демидов': 62,
	'Герман Борисов': 63,
	'Григорий Бирюков': 64,
	'Даниил Захаров': 65,
	'Даниил Федоров': 66,
	'Даниэль Субботин': 67,
	'Дарья Зорина': 68,
	'Дарья Короткова': 69,
	'Дарья Крылова': 70,
	'Дарья Лаврова': 71,
	'Денис Фадеев': 72,
	'Диана Афанасьева': 73,
	'Диана Плотникова': 74,
	'Дмитрий Киселев': 75,
	'Дмитрий Кузнецов': 76,
	'Дмитрий Сахаров': 77,
	'Дмитрий Фадеев': 78,
	'Ева Бородина': 79,
	'Ева Ильина': 80,
	'Ева Лебедева': 81,
	'Ева Мальцева': 82,
	'Евгения Матвеева': 83,
	'Егор Блинов': 84,
	'Егор Козлов': 85,
	'Елизавета Гордеева': 86,
	'Елизавета Емельянова': 87,
	'Елизавета Кононова': 88,
	'Елизавета Кузнецова': 89,
	'Елизавета Панина': 90,
	'Елизавета Пономарева': 91,
	'Захар Бабушкин': 92,
	'Зоя Минина': 93,
	'Иван Гаврилов': 94,
	'Иван Кузнецов': 95,
	'Иван Федоров': 96,
	'Илья Грачев': 97,
	'Илья Журавлев': 98,
	'Камила Аксенова': 99,
	'Кира Быкова': 100,
	'Кира Климова': 101,
	'Кирилл Попов': 102,
	'Кирилл Хомяков': 103,
	'Кристина Терентьева': 104,
	'Кристина Яковлева': 105,
	'Ксения Васильева': 106,
	'Ксения Соболева': 107,
	'Лев Агеев': 108,
	'Лев Аксенов': 109,
	'Лев Бобров': 110,
	'Лидия Комарова': 111,
	'Майя Крылова': 112,
	'Макар Лукьянов': 113,
	'Макар Овчинников': 114,
	'Максим Афанасьев': 115,
	'Максим Калинин': 116,
	'Максим Козлов': 117,
	'Максим Крылов': 118,
	'Максим Лаврентьев': 119,
	'Максим Мельников': 120,
	'Максим Михайлов': 121,
	'Максим Парфенов': 122,
	'Максим Сорокин': 123,
	'Маргарита Софронова': 124,
	'Марианна Никитина': 125,
	'Марина Жданова': 126,
	'Марина Куликова': 127,
	'Мария Болдырева': 128,
	'Мария Иванова': 129,
	'Мария Маслова': 130,
	'Мария Сорокина': 131,
	'Мария Чернышева': 132,
	'Марк Климов': 133,
	'Матвей Беляев': 134,
	'Матвей Назаров': 135,
	'Матвей Павлов': 136,
	'Милана Давыдова': 137,
	'Милана Хромова': 138,
	'Мирон Тихонов': 139,
	'Мирослав Поляков': 140,
	'Мирослава Елисеева': 141,
	'Мирослава Петухова': 142,
	'Мирослава Плотникова': 143,
	'Михаил Абрамов': 144,
	'Михаил Зотов': 145,
	'Михаил Иванов': 146,
	'Михаил Кондратьев': 147,
	'Михаил Платонов': 148,
	'Михаил Швецов': 149,
	'Ника Васильева': 150,
	'Ника Краснова': 151,
	'Ника Федорова': 152,
	'Никита Антонов': 153,
	'Никита Кожевников': 154,
	'Никита Козловский': 155,
	'Никита Русаков': 156,
	'Никита Токарев': 157,
	'Ольга Михайлова': 158,
	'Павел Давыдов': 159,
	'Павел Ларин': 160,
	'Павел Яковлев': 161,
	'Платон Виноградов': 162,
	'Платон Козлов': 163,
	'Платон Розанов': 164,
	'Полина Артамонова': 165,
	'Полина Митрофанова': 166,
	'Полина Семенова': 167,
	'Полина Титова': 168,
	'Полина Юдина': 169,
	'Роберт Леонов': 170,
	'Роман Прохоров': 171,
	'Роман Филиппов': 172,
	'Савва Макаров': 173,
	'Сафия Антонова': 174,
	'Светлана Назарова': 175,
	'Семён Горбачев': 176,
	'Сергей Левин': 177,
	'София Иванова': 178,
	'София Семенова': 179,
	'Софья Козлова': 180,
	'Софья Коровина': 181,
	'Софья Осипова': 182,
	'Софья Сазонова': 183,
	'Станислав Мартынов': 184,
	'Степан Ильин': 185,
	'Степан Смирнов': 186,
	'Таисия Белова': 187,
	'Татьяна Иванова': 188,
	'Тимофей Голованов': 189,
	'Тимофей Михайлов': 190,
	'Тимофей Муравьев': 191,
	'Тимофей Орлов': 192,
	'Тимур Краснов': 193,
	'Ульяна Горбунова': 194,
	'Элина Савельева': 195,
	'Юлия Завьялова': 196,
	'Юрий Тимофеев': 197,
	'Ярослав Ефремов': 198,
	'Ярослав Масленников': 199
};
function searchEmulator(request) {
	var result = {};

	for (key in searchTest) {
		if (key.includes(request)) {
			result[key] = searchTest[key];
		}
	}

	return result;
}

$.fn.searchDropdown = function (options = {}) {
	if (!this.length > 0) {
		return this;
	}
	// настройки по умолчанию (объектный литерал настроек),
	// расширяемые с помощью параметров, которые были переданы
	var settings = $.extend({
		variableExample: '',
		onSelect : function(){},
		onUnSelect : function(){},
	}, options);
	var $this = $(this),
		selected = false,
		textInp = $this.find('.search-dropdown-input'),
		idInp = $this.find('.search-dropdown-db-id'),
		dd = $this.find('.search-dropdown-dd'),
		//ddInner = $this.find('.search-dropdown-dd__inner'),
		searchSimplebar = new SimpleBar(dd[0], { autoHide: false });
	//this.parent().append('');


	textInp.on('keyup input', function () {
		var request = textInp.val();

		dd.removeClass('search-dropdown-dd--active');

		if(selected && request!==textInp.attr('data-selected')){
			textInp.attr('data-selected', '');
			idInp.val('');
			selected=false;
			settings.onUnSelect();
		}

		if (request.length > 1) {

			var searchResult = searchEmulator(request);
			var resultStr = '';


			if (!$.isEmptyObject(searchResult)) {
				for (key in searchResult) {
					resultStr += '<div class="search-dropdown-dd__item" data-id="' + searchResult[key] + '">' + key + '</div>';
				}
				resultStr = '<div class="search-dropdown-dd__inner">' + resultStr + '</div>';

				$(searchSimplebar.getContentElement()).html(resultStr);

				var ddInner = $this.find('.search-dropdown-dd__inner');
				var markOptions=[];
				markOptions['separateWordSearch']=false;
				ddInner.unmark({
					done: function () {
						ddInner.mark(request, markOptions);
					}
				});

				searchSimplebar.recalculate();

				dd.addClass('search-dropdown-dd--active');
			}
		}
	});

	dd.on('click', '.search-dropdown-dd__item', function(){
		console.log('click');
		textInp.val($(this).text());
		textInp.attr('data-selected', $(this).text());
		idInp.val($(this).attr('data-id'));
		dd.removeClass('search-dropdown-dd--active');
		selected=true;
		settings.onSelect();
	});
	textInp.on('blur', function(){
		setTimeout(function(){
			dd.removeClass('search-dropdown-dd--active');
		}, 300);
	});

	return this;
};


$(document).ready(function () {
	$('.js-search-dropdown').searchDropdown();


});

*/

/***/ }),

/***/ "./src/js/import/select.js":
/*!*********************************!*\
  !*** ./src/js/import/select.js ***!
  \*********************************/
/***/ (function() {

$(document).ready(function () {
  var autoreply__item_select = document.querySelector('.autoreply__item--inner');
  var autoreply__item_select_title = autoreply__item_select.querySelector('.autoreply__item--row');
  var autoreply__item_select_labels = autoreply__item_select.querySelectorAll('.autoreply__item--label');
  autoreply__item_select_title.addEventListener('click', function () {
    autoreply__item_select.classList.toggle('active');
  });

  for (var i = 0; i < autoreply__item_select_labels.length; i++) {
    autoreply__item_select_labels[i].addEventListener('click', function (evt) {
      autoreply__item_select_title.textContent = evt.target.textContent;
      autoreply__item_select.classList.remove('active');
    });
  }
});
$(document).ready(function () {
  var selectSingle1 = document.querySelector('.select1');

  if (selectSingle1 !== null) {
    (function () {
      var selectSingle1_title = selectSingle1.querySelector('.select1--title');
      var selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');
      selectSingle1_title.addEventListener('click', function () {
        selectSingle1.classList.toggle('active');
      });

      for (var i = 0; i < selectSingle1_labels.length; i++) {
        selectSingle1_labels[i].addEventListener('click', function (evt) {
          selectSingle1_title.textContent = evt.target.textContent;
          selectSingle1.classList.remove('active');
        });
      }

      $(document).click(function (e) {
        var selectSingle1 = document.querySelector('.select1');
        var selectSingle1_title = $(".select1--title");

        if (!selectSingle1_title.is(e.target) && selectSingle1_title.has(e.target).length === 0) {
          selectSingle1.classList.remove('active');
        }
      });
      $('.select1--label-all').click(function () {
        $('.select1--label-left').removeClass('active');
        $('.select1--label-right').removeClass('active');
      });
      $('.select1--label-right').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.select1--label-left').removeClass('active');
      });
      $('.select1--label-left').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.select1--label-right').removeClass('active');
      });
    })();
  }

  var selectSingle2 = document.querySelector('.select-c1');

  if (selectSingle2 !== null) {
    (function () {
      var selectSingle2_title = selectSingle2.querySelector('.select-c1--title');
      var selectSingle2_labels = selectSingle2.querySelectorAll('.select-c1--label');
      selectSingle2_title.addEventListener('click', function () {
        selectSingle2.classList.toggle('active');
      });

      for (var i = 0; i < selectSingle2_labels.length; i++) {
        selectSingle2_labels[i].addEventListener('click', function (evt) {
          selectSingle2_title.textContent = evt.target.textContent;
          selectSingle2.classList.remove('active');
        });
      }

      $(document).click(function (e) {
        var selectSingle2 = document.querySelector('.select-c1');
        var selectSingle2_title = $(".select-c1--title");

        if (!selectSingle2_title.is(e.target) && selectSingle2_title.has(e.target).length === 0) {
          selectSingle2.classList.remove('active');
        }
      });
    })();
  }
});

/***/ }),

/***/ "./src/js/import/select2.js":
/*!**********************************!*\
  !*** ./src/js/import/select2.js ***!
  \**********************************/
/***/ (function() {

$(document).ready(function () {
  $('.js-simple-select2').each(function (index) {
    var placeholder = $(this).attr('data-placeholder');

    if (typeof placeholder !== 'undefined' && placeholder.length > 0) {
      $(this).addClass('simple-select2--placeholder-selected');
    }

    $(this).select2({
      language: 'ru',
      theme: 'custom-theme',
      minimumResultsForSearch: Infinity,
      //width: '100%',
      dropdownAutoWidth: true,
      width: 'auto',
      dropdownParent: $(this).siblings('.simple-select2-items-wrapper')
    }).on('select2:open', function (e) {
      $(this).siblings('.simple-select2-items-wrapper').addClass('simple-select2-items-wrapper--show');
    }).on('select2:closing', function (e) {
      if ($(this).attr('data-close-anvaliable') !== '1') {
        e.preventDefault();
        var $this = $(this);
        $(this).attr('data-close-anvaliable', '1');
        $(this).siblings('.simple-select2-items-wrapper').removeClass('simple-select2-items-wrapper--show');
        setTimeout(function () {
          $this.select2('close');
        }, 350);
      } else {
        $(this).attr('data-close-anvaliable', '2');
      } //$(this).select2('close');

    }).on('select2:select', function (e) {
      $(this).removeClass('simple-select2--placeholder-selected');
    });
  });
  $('.js-simple-select2-month').each(function (index) {
    var placeholder = $(this).attr('data-placeholder');

    if (typeof placeholder !== 'undefined' && placeholder.length > 0) {
      $(this).addClass('simple-select2--placeholder-selected');
    }

    $(this).select2({
      language: 'ru',
      theme: 'custom-theme select2-container--custom-theme--month',
      minimumResultsForSearch: Infinity,
      //width: '100%',
      dropdownAutoWidth: true,
      width: 'auto',
      dropdownParent: $(this).siblings('.simple-select2-items-wrapper')
    }).on('select2:open', function (e) {
      $(this).siblings('.simple-select2-items-wrapper').addClass('simple-select2-items-wrapper--show');
    }).on('select2:closing', function (e) {
      if ($(this).attr('data-close-anvaliable') !== '1') {
        e.preventDefault();
        var $this = $(this);
        $(this).attr('data-close-anvaliable', '1');
        $(this).siblings('.simple-select2-items-wrapper').removeClass('simple-select2-items-wrapper--show');
        setTimeout(function () {
          $this.select2('close');
        }, 350);
      } else {
        $(this).attr('data-close-anvaliable', '2');
      } //$(this).select2('close');

    }).on('select2:select', function (e) {
      $(this).removeClass('simple-select2--placeholder-selected');
    });
  });
});

/***/ }),

/***/ "./src/js/import/swiper.js":
/*!*********************************!*\
  !*** ./src/js/import/swiper.js ***!
  \*********************************/
/***/ (function() {

var swiper = new Swiper(".swiper-offices-calendar", {
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
  effect: 'fade'
});
var swiper2 = new Swiper(".select-offices--title", {
  thumbs: {
    swiper: swiper
  },
  effect: 'fade',
  pagination: {
    el: ".select-offices--content-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".meeting-rooms__swiper-mosk", {
  effect: 'fade',
  pagination: {
    el: ".meeting-rooms-mosk-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".meeting-rooms__swiper-pit", {
  effect: 'fade',
  pagination: {
    el: ".meeting-rooms-pit-pagination",
    clickable: true
  },
  allowTouchMove: false
});
var swiper2 = new Swiper(".calendar__swiper-inner1", {
  effect: 'fade',
  navigation: {
    nextEl: ".calendar-slide__next1",
    prevEl: ".calendar-slide__prev1"
  }
});

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
/* harmony import */ var _import_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/login */ "./src/js/import/login.js");
/* harmony import */ var _import_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/swiper */ "./src/js/import/swiper.js");
/* harmony import */ var _import_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _import_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/select */ "./src/js/import/select.js");
/* harmony import */ var _import_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _import_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./import/calendar */ "./src/js/import/calendar.js");
/* harmony import */ var _import_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_import_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import/pages */ "./src/js/import/pages.js");
/* harmony import */ var _import_pages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_import_pages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _import_searchDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import/searchDropdown */ "./src/js/import/searchDropdown.js");
/* harmony import */ var _import_searchDropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_import_searchDropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _import_select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import/select2 */ "./src/js/import/select2.js");
/* harmony import */ var _import_select2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_import_select2__WEBPACK_IMPORTED_MODULE_7__);

 //import "./import/svg-text.js";







}();
/******/ })()
;
//# sourceMappingURL=main.js.map