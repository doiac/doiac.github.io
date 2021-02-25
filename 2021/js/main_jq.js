$(document).ready(function(){
  $('.title_img').css('width',$('#title_img').width()+'px');
  $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');

  $('.menu_4').hover(function(){
    // console.log('menu_4');
    $(this).find('#arrow').hover(function(){
      // console.log('arrow');
      $('ul').show();
      $('#arrow').attr('src','images/Icon/arrow.svg');
      $('#enterprise_arrow').attr('src','../images/Icon/arrow.svg');
      // $('.menu_4_text a').css('color','white');
      $('.menu_4_text a').css('text-shadow','-1px 1px 0 #FCA619, 1px 1px 0 #FCA619, 1px -1px 0 #FCA619, -1px -1px 0 #FCA619');
    });
    $(this).find('a').hover(function(){
      // console.log('a');
      $('ul').show();
      $('#arrow').attr('src','images/Icon/arrow.svg');
      $('#enterprise_arrow').attr('src','../images/Icon/arrow.svg');
      // $('.menu_4_text a').css('color','white');
      $('.menu_4_text a').css('text-shadow','-1px 1px 0 #FCA619, 1px 1px 0 #FCA619, 1px -1px 0 #FCA619, -1px -1px 0 #FCA619');
    });
  },
    function(){
      // console.log('menu_4 exit');
      $('ul').hide();
      $('#arrow').attr('src','images/Icon/arrow_origin.svg');
      $('#enterprise_arrow').attr('src','../images/Icon/arrow_origin.svg');
      $('.menu_4_text a').css('color','inherit');
      $('.menu_4_text a').css('text-shadow','inherit');
    });

  // $('.menu_btn').hover(function(){
  //
  // });

  $( window ).resize(function() {
    $('.title_img').css('width',$('#title_img').width()+'px');
    $('.title_text').css('width',$('#title_nav_0').width()*(1-$('.title_img').width()/$('#title_nav_0').width()-0.05)+'px');
    reset_screen();
  });
});
