

$(document).ready(function(){



    n = 1;
    var items = Array('●'); 

    $('body').on( "mousemove", function(e) {
        // move #position on mouse move
        $('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px', 'color': getRandomColor,});
        // copy element on mousemove
        var clone = $('#position').clone();
        $('.page-'+n).append(clone);


        
        var item = items[Math.floor(Math.random()*items.length)];
        $('#position').html(item);
        $('body').append('<div class="page-0 page-'+n+'"></div>');
    });


    $('body').click(function(){
        // $('.page-0').css({ 'opacity': 0,});
        $('.after-text').fadeOut();
        // $('.bgbg').addClass("bgbgmv");
    });


    var getRandomColor = function(){
        var color = ["red","Yellow","green","#467bd7"]
        var randomColor = Math.floor(Math.random()*4)
        return color[randomColor]
    };


    $('.searchlight')
    .on('mousemove', function(event) {
        $(this).addClass('on').css({'margin-left': event.pageX - 150, 'margin-top': event.pageY - 150});
    })
    .on('mouseout', function(event) {
        $(this).removeClass('on');
    })
    .on('click', function() {
        $(this).fadeOut(function() {
            $(this).remove();
        });
    });

});









// $(document).ready(function(){
    
//     setInterval(function(){
    
//         $('img').each(function(){
//             var random = Math.floor(Math.random()*3);   
//             $(this).attr('src', 'assets/boop'+random+'.gif')
//         });
    
//     },1000);
    

// });