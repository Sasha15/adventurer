;(function ($) {
	function menuAnimation(){
		$('.menu-icon').click(function(){
			if($(window).width()<641){
				$('.sandwich-icon').toggleClass('open');
				$('.top-bar-section').slideToggle();
			}
		})
	}
	$( document ).ready(function() {
		$('.loupe').click(function(){
			$('.search-form input, .search-form button').fadeToggle();
		})
		menuAnimation();

	});
	$(window).resize(function () {

	});

}(jQuery));