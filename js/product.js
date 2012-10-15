var products=[{"name":"baidu","image":"img/home/button-2.png"},
{"name":"google","image":"img/home/button-3.png"},
{"name":"yahoo","image":"img/home/button-1.png"}];
var pause = false;
var index = 2;

jQuery(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs;
   setInterval(function(){
       if(!pause){
           if(index == products.length){
               index = 0;
           }  	
           var product_info = products[index];
           //遍历数组，每次取2个值
           var product_left = $('<div id="'+product_info.name+'" class="product_left product_common element">');
           var product_left_img = $('<img src="'+product_info.image+'">');
           var product_left_des = $('<p>'+product_info.name+'</p>');
           product_left.append(product_left_img).append(product_left_des);
           index++;

           if(index == products.length){
               index = 0;
           }  	
           var product_info = products[index];
           //遍历数组，每次取2个值
           var product_right = $('<div id="'+product_info.name+'" class="product_right product_common element">');
           var product_right_img = $('<img src="'+product_info.image+'">');
           var product_right_des = $('<p>'+product_info.name+'</p>');
           product_right.append(product_right_img).append(product_right_des);
           index++;

           $("#post_wall").empty().append(product_left).append(product_right);
       }
   },2000);

   $("#post_wall").mouseenter(function(){
       pause = true;
       $(this).children("div").addClass('animation_pause');

   });

   $("#post_wall").mouseleave(function(){
       pause = false;
       $(this).children("div").removeClass('animation_pause');
   });
});
