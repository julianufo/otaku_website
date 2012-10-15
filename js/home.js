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

    	// $(this).children("a").css({
    	// 	"opacity":"1"
    	// },100);


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

    	// $(this).children("a").animate({
    	// 	"opacity":"0"
    	// });

    	$(this).children("img").animate({
            "height":"52px",
            "top":"-1px",
    		"left":"-6px"
    	},100);

    });

    $("#recruit_mask").mouseenter(function(){

 	    $(this).animate({
    		"top":"210px",
    		"left":"246px",
    		"width":"208px",
            "height":"103px"
    	}, 100);

    	$(".recruit").animate({
    		"top":"220px",
    		"left":"250px",
    		"width":"208px",
            "height":"103px"
    	}, 100);

    	$(this).children("div").animate({
    		"width":"162px",
            "height":"110px"
    	},50);


    	$(".recruit").children("img").animate({
    		"top":"9px",
    		"left":"136px",
    		"height":"110px"     
    	},100);

    	// $(this).children("a").css({
    	// 	"opacity":"1"
    	// },100);


    });


    $("#recruit_mask").mouseleave(function(){
    	$(this).animate({
    	    "top":"280px",
    		"left":"426px",
    		"width":"25px",
            "height":"40px"
    	},100);

    	$(".recruit").animate({
    	    "top":"280px",
    		"left":"426px",
    		"width":"25px",
            "height":"40px"
    	},100);

    	$(this).children("div").animate({
    		"width":"0px",
            "height":"0px"
    	},100);

    	$(".recruit").children("img").animate({
            "height":"52px",
            "top":"-1px",
    		"left":"-6px"
    	},100);

    });

    $("#product_mask").mouseenter(function(){
 	    $(this).animate({
    		"top":"400px",
    		"left":"358px",
    		"width":"181px",
            "height":"130px"
    	}, 100);

    	$(".product").animate({
    		"top":"400px",
    		"left":"358px",
    		"width":"181px",
            "height":"130px"
       	}, 100);

    	$(this).children("div").animate({
    		"width":"144px",
            "height":"95px"
    	},100);


    	$(".product").children("img").animate({
    		"top":"31px",
    		"left":"-6px",
    		"height":"89px"
             
    	},100);

    });


    $("#product_mask").mouseleave(function(){
    	$(this).animate({
    	    "top":"474px",
    		"left":"376px",
    		"width":"27px",
            "height":"40px"
    	},100);

    	$(".product").animate({
    	    "top":"474px",
    		"left":"376px",
    		"width":"27px",
            "height":"40px"
    	},100);

    	$(this).children("div").animate({
    		"width":"0px",
            "height":"0px"
    	},100);

    	$(".product").children("img").animate({
            "height":"52px",
            "top":"-1px",
    		"left":"-6px"
    	},100);

    });

    $("#cooperator_mask").mouseenter(function(){
 	    $(this).animate({
    		"top":"343px",
    		"left":"540px",
    		"width":"200px",
            "height":"100px"
    	}, 100);

    	$(".cooperator").animate({
    		"top":"343px",
    		"left":"540px",
    		"width":"200px",
            "height":"100px"
       	}, 100);

    	$(this).children("div").animate({
    		"width":"148px",
            "height":"93px"
    	},100);


    	$(".cooperator").children("img").animate({
    		"top":"11px",
    		"left":"-6px",
    		"height":"103px"
             
    	},100);

    });


    $("#cooperator_mask").mouseleave(function(){
    	$(this).animate({
    	    "top":"411px",
    		"left":"565px",
    		"width":"27px",
            "height":"30px"
    	},100);

    	$(".cooperator").animate({
    	    "top":"411px",
    		"left":"565px",
    		"width":"27px",
            "height":"30px"
    	},100);

    	$(this).children("div").animate({
    		"width":"0px",
            "height":"0px"
    	},100);

    	$(".cooperator").children("img").animate({
            "height":"52px",
            "top":"-1px",
    		"left":"-6px"
    	},100);

    });




});
