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
    })
;

$(document).ready(function(){
    
    setInterval(function(){
    
        $('img').each(function(){
            var random = Math.floor(Math.random()*3);   
            $(this).attr('src', 'assets/boop'+random+'.gif')
        });
    
    },1000);
    

});