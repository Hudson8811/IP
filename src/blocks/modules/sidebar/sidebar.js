$(document).ready(function() {
	const news = $('.news');
	if (news.hasClass('news-active')) {
		$('.sidebar').addClass('sidebar-shown');
	}
});