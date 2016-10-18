$(document).ready(function() {

	var height = $(window).height();

	$(window).scroll(function() {
		if($(window).scrollTop() > 797) {
			$(".decals").addClass("is-visible");
		}
	});

});