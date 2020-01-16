$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>=$("header").height()){
        if($('#prepend_for_menu').length<=0){
          $('.show_content').prepend("<div id='prepend_for_menu'></div>");
          $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
          $('#prepend_for_menu').css('width','100%');
        }
        // $('.show_content').css('background-attachment','fixed');
        $('.content-background').css('position','fixed');
        $('.content-background').css('height','100%');
        // $('.content-background').css('position','fixed');
        $('#menu_top').css('top','0%');
        $('#menu_top').css('left','50%');
        $('#menu_top').css('margin-left','-'+$('#menu_top').width()/2+'px');
        $('#menu_top').css('position','fixed');
        // if($('#prepend_for_menu').length<=0){
        //   $('.show_content').prepend("<div id='prepend_for_menu'></div>");
        //   $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
        //   $('#prepend_for_menu').css('width','100%');
        // }
        // // $('.show_content').css('background-attachment','fixed');
        // $('.content-background').css('position','fixed');
        // $('.content-background').css('height','100%');
        // // $('.content-background').css('position','fixed');
    }
    else {
        $('#prepend_for_menu').remove();
        $('#menu_top').css('position','inherit');
        $('#menu_top').css('top','');
        $('#menu_top').css('left','');
        $('#menu_top').css('margin-left','');
        // $('.show_content').css('background-attachment','');
        $('.content-background').css('position','absolute');
        $('.content-background').css('height',$(window).height());
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
        // $('.show_content').css('background-attachment','fixed');
        $('.content-background').css('position','fixed');
        $('.content-background').css('height','100%');
        // $('.content-background').css('position','fixed');
    }
    else {
        $('#menu_top').css('position','inherit');
        $('#menu_top').css('top','');
        $('#menu_top').css('left','');
        $('#menu_top').css('margin-left','');
        $('#prepend_for_menu').remove();
        // $('.show_content').css('background-attachment','');
        $('.content-background').css('position','absolute');
        $('.content-background').css('height',$(window).height());
    }
    // if($('#prepend_for_menu').length>0)
    //   $('#prepend_for_menu').css('height',$('#menu_top').height()+'px');
  });
  // $('#2').click(function(){
  //   $('.menu-2-content').css('display','block');
  // });
  $('.menu nav').hover(function(){
    $(this).css('color','#4D1F00');
  },
  function() {
      $(this).css('color','inherit');
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
  $(function(){
    $('.menu-2-content .row div div').click(function(){
      // console.log($(this)[0].childNodes[1].attributes[1].value);
      // var $path = $(this).attr('src');
      $('.img-viewer img').attr('src',$(this)[0].childNodes[1].attributes[1].value);
      reset_img();
      $('.img-viewer').css('display','block');
      $('.viewer_background').css('display','block');
    });
  });
  $(function(){
      $('body').click(function(evt) {
          if(evt.target.className == "viewer_background") {
              // console.log(evt.target.className);
              $('.img-viewer img').attr('src','');
              $('.img-viewer').css('display','none');
              $('.viewer_background').css('display','none');
          }
      });
  });
  $(function() {
    $('.img-viewer').hover(function(){
      $(this).css('cursor','crosshair');
    },
    function(){
      $(this).css('cursor','auto');
    });
  });
  $(function() {
    $('.viewer_background').hover(function(){
      $(this).css('cursor','pointer');
    },
    function(){
      $(this).css('cursor','auto');
    });
  });
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          // console.log(target.offset().top);
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
