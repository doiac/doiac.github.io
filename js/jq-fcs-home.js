var click = false;

$(document).ready(function(){
  if($(window).width()>800)
    $('#map').css('width',600);
  else
    $('#map').css('width',$(window).width()-250);
  for(let i = 0;i < 3; i++){
    $('.home-content-'+i).css('padding-left',100+'px');
    $('.home-content-'+i).css('padding-right',100+'px');
  }
  $(window).resize(function(){
    if($(window).width()>800)
      $('#map').css('width',600);
    else
      $('#map').css('width',$(window).width()-250);
  });
});
