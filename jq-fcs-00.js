$(document).ready(function(){
  $('#0').css('color','#4D1F00');
  $('#menu-0-option0').css('color','#4D1F00');
  if($(window).width()>800){
    $('#poster').css('width',600);
  }
  else{
    $('#poster').css('width',$(window).width()-200);
  }
  $(window).resize(function(){
    if($(window).width()>800){
      $('#poster').css('width',600);
    }
    else{
      $('#poster').css('width',$(window).width()-200);
    }
  });
});