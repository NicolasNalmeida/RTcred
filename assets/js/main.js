$('.btn-menu').on('click', function()
{
	$('.list-menu').removeClass('display-content');
	$('.btn-menu').addClass('display-content');
	$('.btn-close').removeClass('display-content');
	$('.logo').removeClass('display-content');
	$('.menu').addClass('color-menu');
});

$('.btn-close').on('click', function()
{
	$('.list-menu').addClass('display-content');
	$('.btn-menu').removeClass('display-content');
	$('.btn-close').addClass('display-content');
	$('.logo').addClass('display-content');
	$('.menu').removeClass('color-menu');
});

$('.slick-parceiros').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			 breakpoint: 992,
			 settings: {
		        slidesToShow: 3,
		        arrows: false
		      }
		},
		{
			 breakpoint: 610,
			 settings: {
		        slidesToShow: 2,
		        arrows: false
		      }
		},
		{
			 breakpoint: 420,
			 settings: {
		        slidesToShow: 1,
		        arrows: false
		      }
		}
	]
});

$(document).ready(function()
{
	scroll();
});

$(window).on('scroll', function(){
	scroll();
});

function close_toggle() {
	if ($(window).width() < 768) {
		$('.nav a').on('click', function(){
	    	$(".navbar-toggle").click();
		});
	}
	else {
		$('.nav a').off('click');
	}
}
close_toggle();

$(window).resize(close_toggle);

var $doc = $('html, body');
$('.link-menu').click(function() {
	$doc.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top - 70
	}, 600);
	return false;
});