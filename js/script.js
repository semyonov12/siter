$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		slidesToShow: 3,
		draggable:false,
		centerMode:true,
		variableWidth:true,
		autoPlay:true,
	})
});

$(document).ready(function(){
	$('.slider2').slick({
		draggable:false,
		centerMode:true,
		variableWidth:true,
		autoPlay:true,
	})
});

$(function(){
	$('.up').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');

	})
	$('.header__list').click(function(event) {
        $('.header__burger,.menu').removeClass('active');
        $('body').removeClass('lock');
    })
})





