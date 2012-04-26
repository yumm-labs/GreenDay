jQuery(function(){
	jQuery("#bf_page_menu li a:eq(0)").addClass("selected");
	jQuery("#bf_page_menu li a").click(function(){
		jQuery("#bf_page_menu li a").removeClass("selected",function(){
			jQuery(this).animate(3000);
		});
		var get_id = jQuery(this).data("content");
		jQuery('html,body').animate({scrollTop: jQuery("#"+get_id).offset().top}, 1500);
		jQuery(this).addClass("selected");
	});
});


/*Don't use navigation arrow keys*/
jQuery(document).keydown(function(e){
    if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 ) { 
    e.preventDefault();
       return false;
    }
});

/*Remove hash from the url*/
jQuery(function(){
	if (location.href.indexOf("#") > -1) {
    	location.assign(location.href.replace(/\/?#/, "/"));
	}
});


jQuery(function(){
jQuery("#title_image_home").click(function(){
	var href = window.location.href;
	jQuery(this).attr("href",href);
});
});