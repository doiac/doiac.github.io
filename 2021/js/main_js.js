function start(){
  reset_screen();
  window.addEventListener('resize', reset_screen, false);
}

function check_footer() {
  $("center").css('height',$('.show_content').height());
  if($(window).scrollTop()>$('header').height() && $("center").height()<$(window).height()-$('footer').height()){
    $("center").css('height',$(window).height()-$('footer').height()+'px');
  }
  else if($(window).scrollTop()<$('header').height() && $("center").height()+$("header").height()+$("footer").height()<$(window).height())
    $("center").css('height',$(window).height()-$('header').height()-$('footer').height()+'px');
}
function reset_screen() {
  $('.center').css('height',$('header').height()-10+'px');
  check_footer();
}

window.addEventListener('load',start,false);
