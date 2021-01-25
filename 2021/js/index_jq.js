$(document).ready(function(){
  $('.title_img').css('width',$('#title_img').width()+'px');
  $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');
  // $('.head_title nav p').css('line-height',$('#title_nav_0').height()+'px');
  $( window ).resize(function() {
    $('.title_img').css('width',$('#title_img').width()+'px');
    $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');
    // $('.head_title nav p').css('line-height',$('#title_nav_0').height()+'px');
  });
});
