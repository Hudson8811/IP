
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



	const autoreply = document.querySelector('.autoreply');
	const massage_icon = document.querySelector('.massage-icon');
	if (autoreply) {
		massage_icon.classList.add('active')
	}

	const signature = document.querySelector('.signature');
	const signature_icon = document.querySelector('.signature-icon');
	if (signature) {
		signature_icon.classList.add('active')
	}

	const offices_calendar = document.querySelector('.offices-calendar');
	const calendar_icon = document.querySelector('.calendar-icon');
	if (offices_calendar) {
		calendar_icon.classList.add('active')
	}

	const people = document.querySelector('.people');
	const call_icon = document.querySelector('.call-icon');
	if (people) {
		call_icon.classList.add('active')
	}
});






//MAP

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

	var mapsContent = [];//данные о сотрудниках из базы
	var mapsContentSpecial = [];//данные о специальных комнатах(переговорные)
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
				'_l1_f2_s_p3': ['18', '0'],
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
				setTimeout(() => {

					var $map = $('#mapplic .mapplic-map');
					var thisLevelLayer = $('#mapplic .mapplic-layer[data-floor="' + level + '"]');

					if(!thisLevelLayer.hasClass('mapplic-visible')){
						return;
					}

					var thisLevelLayerOffset = thisLevelLayer.offset();

					if (thisLevelLayer.find('.map-myinfo').length > 0) {
						console.log('Для данного слоя сотрудники уже были выведены');
						return;
					}


					if (level === 'map_l' + currentLocation + '_f' + currentFloor) {
						mapsContent.forEach(mapsContent_lvl => {
							if (mapsContent_lvl.location === currentLocation) {
								mapsContent_lvl.floors.forEach(mapsContent_floor => {
									if (mapsContent_floor.floor === currentFloor) {
										console.log('данные для текущего этажа найдены. начинаю вывод');

										var svg = thisLevelLayer.find('svg');
										var svgOffset = svg.offset();

										var roomsLayer = thisLevelLayer.find('#MLOC_l'+currentLocation+'_f'+currentFloor+'_rooms');

										var roomsOffset = roomsLayer.offset();

										var matrix_match = $map.css('transform').match(/matrix\((.*?)\)/);

										if (typeof (matrix_match[1]) === 'undefined') {
											console.log('Ошибка. Не имеет matrix transform. ');
											return;
										}
										var matrixTransformArray = matrix_match[1].replace(' ', '').split(',');
										var matrixTransform = {
											a: matrixTransformArray[0],//Изменение масштаба по горизонтали. Значение больше 1 расширяет элемент, меньше 1, наоборот, сжимает.
											b: matrixTransformArray[1],//Наклон по вертикали. Положительное значение наклоняет вверх, отрицательное вниз.
											c: matrixTransformArray[2],//Наклон по горизонтали. Положительное значение наклоняет влево, отрицательное вправо.
											d: matrixTransformArray[3],//Изменение масштаба по вертикали. Значение больше 1 расширяет элемент, меньше 1 — сжимает.
											tx: matrixTransformArray[4],//Смещение по горизонтали в пикселях. Положительное значение сдвигает элемент вправо на заданное число пикселей, отрицательное значение сдвигает влево.
											ty: matrixTransformArray[5],//Смещение по вертикали в пикселях. При положительном значении элемент опускается на заданное число пикселей вниз или вверх при отрицательном значении.
										};

										var halfWofMap = $map.width() / 2;
										var mapOffset = $map.offset();

										var needZoomOfTextLayer = 1 / matrixTransform.a;


										thisLevelLayer.append('<div class="map-myinfo"></div>');
										var mytextLayer = thisLevelLayer.find('.map-myinfo');
										var mytextLayerOffset = mytextLayer.offset();


										mapsContent_floor.rooms.forEach(mapsContent_room => {

											var roomId = '_l' + currentLocation + '_f' + currentFloor + '_r_' + mapsContent_room.index;
											var roomSvgObject = roomsLayer.find('#' + roomId);


											mytextLayer.append('<div class="map-myinfo-item" data-room=' + roomId + '><div class="map-myinfo-item__title">' + mapsContent_room.index + '</div><div class="map-myinfo-item__desc"></div></div>');

											var thisRoomInfoItem = mytextLayer.find('.map-myinfo-item[data-room="' + roomId + '"]');

											var thisRoomText = thisRoomInfoItem.find('.map-myinfo-item__desc');

											if (typeof (roomsPositionCorrection[roomId]) !== 'undefined') {

												thisRoomInfoItem.css('margin-top', roomsPositionCorrection[roomId][0] + 'px');
												thisRoomInfoItem.css('margin-left', roomsPositionCorrection[roomId][1] + 'px');
											}

											mapsContent_room.emplyees.forEach(mapsContent_emplyee => {
												//mapsContent_emplyee.name
												thisRoomText.append('<a href="'+mapsContent_emplyee.link+'">' + mapsContent_emplyee.name + '</a>');

											});


											thisRoomInfoItem
												.css('top', (roomSvgObject.offset().top - mapOffset.top) * needZoomOfTextLayer)

												.css('left', (roomSvgObject.offset().left - mapOffset.left) * needZoomOfTextLayer);


										});
									}
								});
							}
						});

						mapsContentSpecial.forEach(mapsContentSpecial_lvl => {
							if (mapsContentSpecial_lvl.location === currentLocation) {
								mapsContentSpecial_lvl.floors.forEach(mapsContentSpecial_floor => {
									if (mapsContentSpecial_floor.floor === currentFloor) {
										console.log('данные для текущего этажа найдены. начинаю вывод');

										var svg = thisLevelLayer.find('svg');
										var svgOffset = svg.offset();

										var roomsLayer = thisLevelLayer.find('#MNOINT_l'+currentLocation+'_f'+currentFloor+'_special-rooms');
										var roomsOffset = roomsLayer.offset();

										var matrix_match = $map.css('transform').match(/matrix\((.*?)\)/);


										if (typeof (matrix_match[1]) === 'undefined') {
											console.log('Ошибка. Не имеет matrix transform. ');
											return;
										}
										var matrixTransformArray = matrix_match[1].replace(' ', '').split(',');
										var matrixTransform = {
											a: matrixTransformArray[0],//Изменение масштаба по горизонтали. Значение больше 1 расширяет элемент, меньше 1, наоборот, сжимает.
											b: matrixTransformArray[1],//Наклон по вертикали. Положительное значение наклоняет вверх, отрицательное вниз.
											c: matrixTransformArray[2],//Наклон по горизонтали. Положительное значение наклоняет влево, отрицательное вправо.
											d: matrixTransformArray[3],//Изменение масштаба по вертикали. Значение больше 1 расширяет элемент, меньше 1 — сжимает.
											tx: matrixTransformArray[4],//Смещение по горизонтали в пикселях. Положительное значение сдвигает элемент вправо на заданное число пикселей, отрицательное значение сдвигает влево.
											ty: matrixTransformArray[5],//Смещение по вертикали в пикселях. При положительном значении элемент опускается на заданное число пикселей вниз или вверх при отрицательном значении.
										};

										var needZoomOfTextLayer = 1 / matrixTransform.a;

										var halfWofMap = $map.width() / 2;
										var mapOffset = $map.offset();

										if (!thisLevelLayer.find('.map-myinfo').length > 0) {
											thisLevelLayer.append('<div class="map-myinfo"></div>');
										}
										var mytextLayer = thisLevelLayer.find('.map-myinfo');
										var mytextLayerOffset = mytextLayer.offset();


										mapsContentSpecial_floor.rooms.forEach(mapsContentSpecial_room => {
											console.log(mapsContentSpecial_room);


											var roomId = '_l' + currentLocation + '_f' + currentFloor + '_s_' + mapsContentSpecial_room.index;
											var roomSvgObject = roomsLayer.find('[id="' + roomId + '"]');


											mytextLayer.append('<div class="map-myinfo-item" data-room=' + roomId + '><div class="map-myinfo-item__title">' + mapsContentSpecial_room.title + '</div><div class="map-myinfo-item__desc"></div></div>');


											var thisRoomInfoItem = mytextLayer.find('.map-myinfo-item[data-room="' + roomId + '"]');

											var thisRoomText = thisRoomInfoItem.find('.map-myinfo-item__desc');

											if (typeof (roomsPositionCorrection[roomId]) !== 'undefined') {

												thisRoomInfoItem.css('margin-top', roomsPositionCorrection[roomId][0] + 'px');
												thisRoomInfoItem.css('margin-left', roomsPositionCorrection[roomId][1] + 'px');
											}

											mapsContentSpecial_room.info.forEach(mapsContentSpecial_info => {
												//mapsContentSpecial_emplyee.name
												thisRoomText.append('<p>' + mapsContentSpecial_info.row + '</p>');

											});


											thisRoomInfoItem
												.css('top', (roomSvgObject.offset().top - mapOffset.top) * needZoomOfTextLayer)

												.css('left', (roomSvgObject.offset().left - mapOffset.left) * needZoomOfTextLayer);


										});
									}
								});
							}
						});


					}

				}, 500);//!!! МОГУТ БЫТЬ ПРОБЛЕМЫ. ТОГДА УВЕЛИЧИТЬ ЗАДЕРЖКУ

			});

			$("[data-fancy-map]").on('click', function(){
				lastDataFancyMapTriggered=$(this);
			});
			Fancybox.bind("[data-fancy-map]", {
				dragToClose: false,
				on: {
					reveal: (fancybox, slide) => {
						$('#mapplic').trigger('resize');

						map.data('mapplic').showLocation(lastDataFancyMapTriggered.data('id'));
					}
				}
			});
		});
	});




});
