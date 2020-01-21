$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=$("header").height()){
        if($('#prepend_for_menu').length<=0){
          $('.show_content').prepend("<div id='prepend_for_menu'></div>");
          $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
          $('#prepend_for_menu').css('width','100%');
        }
        $('#menu_top').css('top','0%');
        $('#menu_top').css('left','50%');
        $('#menu_top').css('margin-left','-'+$('#menu_top').width()/2+'px');
        $('#menu_top').css('position','fixed');
    }
    else {
        $('#prepend_for_menu').remove();
        $('#menu_top').css('position','inherit');
        $('#menu_top').css('top','');
        $('#menu_top').css('left','');
        $('#menu_top').css('margin-left','');
    }
  });

  $(window).resize(function() {
    if($(window).scrollTop()>=$("header").height()){
        $('#menu_top').css('top','0%');
        $('#menu_top').css('left','50%');
        $('#menu_top').css('margin-left','-'+$('#menu_top').width()/2+'px');
        $('#menu_top').css('position','fixed');
        if($('#prepend_for_menu').length<=0){
          $('.show_content').prepend("<div id='prepend_for_menu'></div>");
          $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
          $('#prepend_for_menu').css('width','100%');
        }
        else
          $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
    }
    else {
        $('#menu_top').css('position','inherit');
        $('#menu_top').css('top','');
        $('#menu_top').css('left','');
        $('#menu_top').css('margin-left','');
        $('#prepend_for_menu').remove();
    }
  });
  $('#home-icon').hover(function(){
    $(this).attr('src','images/Icon/Home_Icon_clicked.svg');
  },
  function() {
      if(location.href.slice(-10,-5)!='index')
        $(this).attr('src','images/Icon/Home_Icon.svg');
    }
  );
  $(function(){
    $(".menu #nav-0").hover(function() {
      $("#menu-0").stop(true).show('slow');
    },
    function() {
        $('#menu-0').stop(true).hide('slow');
      }
    );
    $(".menu #nav-1").hover(function() {
      $("#menu-1").stop(true).show('slow');
    },
    function() {
        $('#menu-1').stop(true).hide('slow');
      }
    );
  });
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, "slow");
          return false;
        }
      }
    });
  });
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
});
