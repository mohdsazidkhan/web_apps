$(document).ready(function(){
	$(".main_menu li a").click(function(e){
		var id_to_go = $(this).attr("href");
		$("html,body").animate({scrollTop: $(id_to_go).offset().top
		},600);

	})

	/*var windowsize = $(window).width();

	$(window).resize(function() {

	  windowsize = $(window).width();

	   if ( windowsize < 991) {
	        $('.right_cont_menu').addClass('collapse');
		}
		else {
		    $('.right_cont_menu').removeClass('collapse');
		}
	});
*/

	$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
       $('.main_header').addClass('fixed_header');
       $('.navbar').addClass('fixed_navbar');
    }
    else {
       $('.main_header').removeClass('fixed_header');
       $('.navbar').removeClass('fixed_navbar');
    }
    });

    $(".btn_navbar").click(function(e){
	  $('.main_menu_top').slideToggle();
	})

	

	
})