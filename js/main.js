$(function(){
	$('.photo__slider').slick({
		prevArrow: '<button class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
		autoplay: true,
	});
	$('.menu__btn').on('click', function(){
		$('.menu__list').slideToggle();
	});
	AOS.init();
});