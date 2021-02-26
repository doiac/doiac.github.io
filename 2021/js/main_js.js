var header_height, menu_btn, phone_menu_4;

function start(){
  $('.menu_btn').css('width',$('.menu_btn').height()+'px');
  menu_btn = document.getElementById('menu_btn');
  phone_menu_4 = document.getElementById('phone_menu_4');
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
  if(menu_btn.innerHTML == '☰'){
    $('header').css('height','');
    $('.menu_flex').css('height',$('header').height());
    $('.menu_btn').css('width',$('.menu_btn').height()+'px');
    header_height = $('header').height();
  }
  if($(window).outerWidth() >= 930){
    $('#phone_menu').hide();
    $("html").removeClass("noscroll");
    $('header').css('height',header_height + 'px');
    menu_btn.innerHTML = '☰';
  }
  if($(window).outerWidth()<=400){
    $('.bottom span').empty();
    $('.bottom span').append('Copyright &copy 2021<br>');
  }
  else
    $('.bottom span br').remove();

  reset_pdf();
  check_footer();
}
function reset_pdf(){
  $('.pdf').css('height',$(window).height()+'px');
}

function click_menu(){
  setTimeout(function(){
    if(menu_btn.innerHTML == '☰'){
        console.log('click');
        menu_btn.innerHTML = 'X';
        $('header').css('height',$(window).outerHeight()+'px');
        console.log($('header').height());
        $("html").addClass("noscroll");
        $('#title_nav_0, #title_nav_2').css('height', header_height + 'px');
        $('#phone_menu').removeClass('hide').addClass('show');
    }
    else if(menu_btn.innerHTML == 'X'){
        menu_btn.innerHTML = '☰';
        $("html").removeClass("noscroll");
        $('header').css('height',header_height + 'px');
        $('header').css('inherit');
        $('#phone_menu').removeClass('show').addClass('hide');
        phone_menu_4.innerHTML = '<a onclick="change_menu_text();" href="#">歷屆活動</a>';
        reset_screen();
    }
  },0);
}

function change_menu_text(){
  phone_menu_4.innerHTML = '<a href="https://doiac.github.io/2020/" target="_blank">2020</a>．<a href="https://ntoudoiac20190319.mystrikingly.com/" target="_blank">2019</a>';
}

window.addEventListener('load',start,false);
