// var background = new Image();
// background = "images/backgroundt.png";

function start(){
  // showtime();
  document.getElementById('showbox').innerHTML = "最後更新：<span class='alpa_num'>2020.02.15</span>&ensp;"
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
  set_menu();
  check_footer();
}

function set_menu(){
  $('#menu-0').css('width',$('#nav-0').width()+$('#nav-0 h3').css('font-size').slice(0,-2)*1.0+'px');
  $('#menu-0').css('height','auto');
  $('#menu-1').css('width',$('#nav-1').width()+'px');
  $('#menu-1').css('height','auto');
  $('#nav-home').css('height',$('#nav-0').height()+'px');
  $('#nav-home').css('width',$('#nav-0').height()+'px');
  $('#home-icon').attr('height',$('#nav-0 h3').css('font-size'));
  $('#home-icon').attr('width','auto');
  $('.separate').each(function(){
    $(this).css('height',$('#nav-0').height()+'px');
  });
}

function showtime(){
    var NowDate=new Date();
    var y=NowDate.getFullYear();
    var mn=NowDate.getMonth();
    var d=NowDate.getDate();
    var h=NowDate.getHours();
    var m=NowDate.getMinutes();
    var s=NowDate.getSeconds();　
    document.getElementById('showbox').innerHTML = padding(y,4)+ '.'+ padding(mn+1,2)+ '.'+ padding(d,2)+ ' '+ padding(h,2)+ ':'+ padding(m,2)+ ':'+ padding(s,2)+ "&nbsp";
    setTimeout('showtime()',1000);
}
function padding(num, length){
    return (Array(length).join("0") + num).slice(-length);
}

window.addEventListener('load',start,false);
