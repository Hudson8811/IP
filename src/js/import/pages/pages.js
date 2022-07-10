//RADIO
$(document).ready(function() {
	$.each($('.radiobuttons__item'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function(event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked',false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked',true);
		return false;
	});
});


//select





const selectSingle1 = document.querySelector('.select1');
const selectSingle1_title = selectSingle1.querySelector('.select1--title');
const selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');

selectSingle1_title.addEventListener('click', () => {
	if ('active' === selectSingle1.getAttribute('data-state')) {
		selectSingle1.setAttribute('data-state', '');
	} else {
		selectSingle1.setAttribute('data-state', 'active');
	}
});

for (let i = 0; i < selectSingle1_labels.length; i++) {
	selectSingle1_labels[i].addEventListener('click', (evt) => {
		selectSingle1_title.textContent = evt.target.textContent;
		selectSingle1.setAttribute('data-state', '');
	});
}



const selectSingle2 = document.querySelector('.select2');
const selectSingle2_title = selectSingle2.querySelector('.select2--title');
const selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');

selectSingle2_title.addEventListener('click', () => {
	if ('active' === selectSingle2.getAttribute('data-state')) {
		selectSingle2.setAttribute('data-state', '');
	} else {
		selectSingle2.setAttribute('data-state', 'active');
	}
});

for (let i = 0; i < selectSingle2_labels.length; i++) {
	selectSingle2_labels[i].addEventListener('click', (evt) => {
		selectSingle2_title.textContent = evt.target.textContent;
		selectSingle2.setAttribute('data-state', '');
	});
}


const selectSingle_offices = document.querySelector('.select-offices');
const selectSingle_offices_title = selectSingle_offices.querySelector('.select-offices--title');
const selectSingle_offices_labels = selectSingle_offices.querySelectorAll('.select-offices--label');

selectSingle_offices_title.addEventListener('click', () => {
	if ('active' === selectSingle_offices.getAttribute('data-state')) {
		selectSingle_offices.setAttribute('data-state', '');
	} else {
		selectSingle_offices.setAttribute('data-state', 'active');
	}
});

for (let i = 0; i < selectSingle_offices_labels.length; i++) {
	selectSingle_offices_labels[i].addEventListener('click', (evt) => {
		selectSingle_offices_title.textContent = evt.target.textContent;
		selectSingle_offices.setAttribute('data-state', '');
	});
}