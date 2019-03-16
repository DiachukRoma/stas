$(document).ready(function(){

	/*-----------------------------------
				Carousel
	------------------------------------*/
	$('.owl-carousel').each(function(i) {
	    var owl = $(this);
	    owl.owlCarousel({
	        items: 1,
	        loop: true,
    		smartSpeed: 1000,
	        singleItem: true,
	        rewindNav: false,
	        dots: true,
	    });
	    var allowTransitionLeft = false;
	    var allowTransitionRight = true;
	    owl.on('mousewheel', '.owl-stage', function (e) {
	        e.preventDefault();
	        if (e.deltaY < 0) {
	            if( allowTransitionRight ) {
	                allowTransitionRight = false;
	                owl.trigger('next.owl');
	            };
	        } else {
	            if (allowTransitionLeft) {
	                allowTransitionLeft = false;
	                owl.trigger('prev.owl');
	            };
	        }
	    }).on('translated.owl.carousel', function (e) {
	        allowTransitionRight = (e.item.count > 0 );
	        allowTransitionLeft = (e.item.index > 0);
	    });
	});

	/*-----------------------------------
				Preloader
	------------------------------------*/
	var itemPreload = ['HEllO', 'My name is Stas', 'I am web designer'];
	function preloadFunc(item){
		for (var i = 0; i < item.length; i++) {
		    (function(i) {
		        setTimeout(function() { 
		        	$('.preloader .text').css('display', 'none');
		        	$('.preloader .text').html(item[i]).fadeIn(600);
		        }, i * 1200);
		    })(i);
		}
		setTimeout(function(){
			$('.work').removeClass('visiVis');
			$('.preloader').fadeOut();
		}, 3600);
	}
	preloadFunc(itemPreload);

	/*-----------------------------------
					Menu
	------------------------------------*/
	$('.nav li').click(function() {
		var classItem = $(this).data('item');
		if(!($(this).hasClass('active'))){
			$('.nav li').removeClass('active');
			$(this).addClass('active');

			$('.sectionBlock').removeClass('active');
			$('.'+ classItem).addClass('active');					
		}
	});

	$('.logo img').click(function(){
		if(!($('.temp').hasClass('active'))){
			$('.sectionBlock').removeClass('active');
			$('.temp').css('animation-delay', '0s').addClass('active');
			$('.nav li').removeClass('active');
		}
	});	
})