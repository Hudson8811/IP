$(document).ready(function() {
	$('.header__man').click(function(event) {
		$('.login-header').toggleClass('active');
	});
	$(document).click( function(e){ 
		var login = $( ".login-header, .header__man" );
		if ( !login.is(e.target) && login.has(e.target).length === 0 ) { 
			login.removeClass('active'); 
		}
	});
});
