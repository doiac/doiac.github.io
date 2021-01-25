$(document).ready(function(){
  $('.title_img').css('width',$('#title_img').width()+'px');
  $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');
  // $('.head_title nav p').css('line-height',$('#title_nav_0').height()+'px');
  $('.menu_4').hover(function(){
    $(this).find('#arrow').hover(function(){
      $('ul').show();
      $('#arrow').attr('src','images/Icon/arrow.svg');
      $('.menu_4_text a').css('color','white');
      $('.menu_4_text a').css('text-shadow','-1px 1px 0 #FCA619, 1px 1px 0 #FCA619, 1px -1px 0 #FCA619, -1px -1px 0 #FCA619');
    });
    $(this).find('a').hover(function(){
      $('ul').show();
      $('#arrow').attr('src','images/Icon/arrow.svg');
      $('.menu_4_text a').css('color','white');
      $('.menu_4_text a').css('text-shadow','-1px 1px 0 #FCA619, 1px 1px 0 #FCA619, 1px -1px 0 #FCA619, -1px -1px 0 #FCA619');
    });
  },
    function(){
      $('ul').hide();
      $('#arrow').attr('src','images/Icon/arrow_origin.svg');
      $('.menu_4_text a').css('color','inherit');
      $('.menu_4_text a').css('text-shadow','inherit');
    });

  $( window ).resize(function() {
    $('.title_img').css('width',$('#title_img').width()+'px');
    $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');
    // $('.head_title nav p').css('line-height',$('#title_nav_0').height()+'px');
    reset_screen();
  });
});
