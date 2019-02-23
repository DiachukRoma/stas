$(document).ready(function(){

	/*-----------------------------------
				Carousel
	------------------------------------*/
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    margin:35,
	    center:true,
	    stagePadding:1,
	    autoWidth:true,
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

})