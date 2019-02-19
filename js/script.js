$(document).ready(function(){

	/*-----------------------------------
				Carousel
	------------------------------------*/
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    nav:true,
	    margin:10,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },            
	        960:{
	            items:4
	        },
	        1200:{
	            items:4
	        }
	    }
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.deltaY>0) {
	        owl.trigger('next.owl');
	    } else {
	        owl.trigger('prev.owl');
	    }
	    e.preventDefault();
	});

	/*-----------------------------------
				Preloader
	------------------------------------*/
	var itemPreload = ['HEllO', 'My name is Stas', 'I am web designer'];

	console.log(itemPreload);


})