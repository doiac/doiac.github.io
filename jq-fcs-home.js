// $(document).ready(function(){
  // if($(window).width()>800)
  //   $('#map').css('width',600);
  // else
  //   $('#map').css('width',$(window).width()-250);
  // if($(window).width()>375){
  //   for(let i = 0;i < 3; i++){
  //     $('.home-content-'+i).css('padding-left',100+'px');
  //     $('.home-content-'+i).css('padding-right',100+'px');
  //   }
  // }
  // else {
  //   for(let i = 0;i < 3; i++){
  //     $('.home-content-'+i).css('padding-left',50+'px');
  //     $('.home-content-'+i).css('padding-right',50+'px');
  //   }
  // }
  // $(window).resize(function(){
  //   if($(window).width()>800)
  //     $('#map').css('width',600);
  //   else
  //     $('#map').css('width',$(window).width()-250);
  //   if($(window).width()>375){
  //     for(let i = 0;i < 3; i++){
  //       $('.home-content-'+i).css('padding-left',100+'px');
  //       $('.home-content-'+i).css('padding-right',100+'px');
  //     }
  //   }
  //   else {
  //     for(let i = 0;i < 3; i++){
  //       $('.home-content-'+i).css('padding-left',50+'px');
  //       $('.home-content-'+i).css('padding-right',50+'px');
  //     }
  //   }
  // });
// });
window.addEventListener('load',reset_map,false);

function reset_map(){
  $('.home-poster').css('height',$('.home-poster img').height()+'px');
  $('.map-content').css('height',$('#map').height()+10+'px');
  $('.map-text').css('margin-top','-'+$('.map-text').height()/2+'px');
  $('.map-image').css('height',$('#map').height()+'px');
  reset_screen();
  window.addEventListener('resize',function(){
    $('.home-poster').css('height',$('.home-poster img').height()+'px');
    $('.map-content').css('height',$('#map').height()+10+'px');
    $('.map-text').css('margin-top','-'+$('.map-text').height()/2+'px');
    $('.map-image').css('height',$('#map').height()+'px');
    reset_screen();
  },false);
}