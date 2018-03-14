
// $( ".img_r12" ).click(function() {
// 	// $(".img_r12").append('<img class = "img_r12" src="img/r12.jpg" width="90%" height="auto">');
// 	$(".img_r12").css({
// 		"transform" : "rotate("20deg")"
// 	});
  
// });



$('document').ready(function() {

	$('body').click(function(){
		$(this).removeClass();
		$(this).addClass('fade');
	});
	
	$('#content').clone().insertAfter('#content');


	$(document).scroll(function(){
		if((document.documentElement.clientHeight + $(document).scrollTop()) >= (document.body.offsetHeight/2)+document.documentElement.clientHeight )$(document).scrollTop(0);
	});
}); 