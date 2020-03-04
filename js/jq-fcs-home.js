window.addEventListener('load',reset_map,false);

function reset_map(){
  $('.home-poster').css('height',$('.home-poster img').height()+'px');
  $('.map-option').css('height',$('.map-option-0').height()+'px');
  $('.map-content').css('height',$('#map').height()+$('.map-option').height()+20+'px');
  reset_screen();
  window.addEventListener('resize',function(){
    $('.home-poster').css('height',$('.home-poster img').height()+'px');
    $('.map-option').css('height',$('.map-option-0').height()+'px');
    $('.map-content').css('height',$('#map').height()+$('.map-option').height()+20+'px');
    reset_screen();
  },false);
  $('.map-option-0').hover(function(){
      $('.map-option-1').css('background-color','rgba(249,245,255, 0.8)');
      $(this).css('background-color','#BFC0C0');
      $('.file-link').hide();
      $('.map-image').stop(true).show(300);
    },
    function(){
      // pass
      }
  );
  $('.map-option-1').hover(function(){
      $('.map-option-0').css('background-color','rgba(249,245,255, 0.8)');
      $(this).css('background-color','#BFC0C0');
      $('.map-image').hide();
      $('.file-link').stop(true).show(300);
    },
    function(){
      // pass
      }
  );
}
