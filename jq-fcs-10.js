$(document).ready(function(){
  $('#1').css('color','#28262C');
  $('#menu-1-option0').css('color','#28262C');
  $('#ic-0').css('color','#28262C');
  $('#c-0').css('display','block');
  check_footer();
  if($(window).width()>1000)
    $('.title').css('width','200px');
  else
    $('.title').css('width','20%');
  $('.c-title').css('margin-left',$('.title').width()+'px');
  $('.list_content ol').css('margin-left',$('.title').width()+'px');
  $(window).resize(function(){
    if($(window).width()>1000)
      $('.title').css('width','200px');
    else
      $('.title').css('width','20%');
    $('.list_content ol').css('margin-left',$('.title').width()+'px');
  });
  $(window).scroll(function(){
    if($(window).scrollTop()>=$("header").height()){
      $('.title').css('position','fixed');
      $('.title').css('top','20%');
    }
    else{
      $('.title').css('position','absolute');
      $('.title').css('top','50px');
    }
  });
});
