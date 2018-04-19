$(document).ready(function(){

	n = 1;
	var items = Array('o','pea','green','O',);

	$('body').on( "mousemove", function(e) {
		// move #position on mouse move
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px', 'color': getRandomColor,});
		// copy element on mousemove
		var clone = $('#position').clone();
		$('.page-'+n).append(clone);
	});

	$('body').click(function(){
		n++;
		var item = items[Math.floor(Math.random()*items.length)];
		$('#position').html(item);
		$('body').append('<div class="break"></div><div class="page-'+n+'"></div>');
	});

	var getRandomColor = function(){
		var color = ["red","Yellow","blue","#467bd7"]
		var randomColor = Math.floor(Math.random()*4)
		return color[randomColor]
	};

});