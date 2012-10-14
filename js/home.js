$(document).ready(function() {
	// Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
    $("#about_us").mouseenter(function(){
    	$(this).animate({
    		"top":"117px",
    		"left":"508px",
    		"width":"180px",
            "height":"130px"
    	}, 100);

    	$(this).children("div").animate({
    		"width":"162px",
            "height":"100px"
    	},100);


    	$(this).children("img").animate({
    		"top":"-5px",
    		"left":"136px",
    		"height":"79px"
             
    	},100);

    	$(this).children("a").css({
    		"opacity":"1"
    	},100);


    });

    $("#about_us").mouseleave(function(){
    	$(this).animate({
    	    "top":"159px",
    		"left":"660px",
    		"width":"25px",
            "height":"21px"
    	},100);

    	$(this).children("div").animate({
    		"width":"0px",
            "height":"0px"
    	},100);

    	$(this).children("a").animate({
    		"opacity":"0"
    	});

    	$(this).children("img").animate({
            "height":"52px",
            "top":"-1px",
    		"left":"-6px"
    	},100);

    });





});
