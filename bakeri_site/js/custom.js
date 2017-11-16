$(document).ready(function(){
	

	var height;
	height = parseInt($("header .header_section").height()) + parseInt($(".full_container").height());

	console.log(height);


	$(".main_menu li a").click(function(e){
	var id_to_go = $(this).attr("href");
	$("html,body").animate({scrollTop: $(id_to_go).offset().top-height
	},600);

	})

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