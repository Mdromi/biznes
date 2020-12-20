/*MixItup */
/*var mixer = mixitup('.gallery');*/
var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});
/*owl Carousel */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 300,
        loop: true,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }

    });
});
$(document).ready(function(){
	//Wow Plugin
	new WOW().init();
	/*Top Button */
	$('.top').click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
    });
	$(".top").hide();
	/*Top Button Hide */
    $(window).scroll(function(){
	  var ourWindow = $(this).scrollTop();
	  if(ourWindow<700){
		  $('.top').fadeOut();
	  }else{
		  $('.top').fadeIn();
	  }
	  //Menu Fixed
	  if(ourWindow>100){
		  $('body').addClass('fixed');
	  }else{
		  $('body').removeClass('fixed');
	  }
	  //Menu Active Class
	  $('.navbar-nav li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
       $('a[href*="#"]').click(function(e){
       		e.preventDefault();
					
       	
       });
	  
	  
  });

});

$(document).ready(function(){
	$('.navbar-nav a[href^="#"]').click(function(){
		e.preventDefault();
		var target = this.hash();	
		//$('.navbar-nav a[href^="#"]').hash();	
		$('html, body').animate({
		scrollTop: $(target).offset() .top - 75,
		}, 1000);
	});
});


