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
		$('.main-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	});
	$(window).resize(function () {

	});

}(jQuery));