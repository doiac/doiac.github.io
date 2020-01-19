// var background = new Image();
// background = "images/backgroundt.png";

function start(){
  showtime();
  reset_screen();
  // $("#loading .pic").animate({
  //     width: "85%"
  // }, 100);
  window.addEventListener('resize', reset_screen, true);
  // $("#loading .pic").animate({
  //     width: "90%"
  // }, 100);
  const ripple = el => {
    let d = el.dataset.ripple.split('-'),
    s = 'rgba(3,149,229,0.4)',
    e = 'rgba(3,149,229,1)';
    d[2] = Number(d[2]) + 4;
    el.dataset.ripple = d.join('-');
    el.style.background = `radial-gradient(circle at ${d[0]}px ${d[1]}px, ${s} 0%, ${s} ${d[2]}%, ${e} ${d[2] + 0.1}%)`;

    window.requestAnimationFrame(() => {
      if (el.dataset.ripple && d[2] < 100) ripple(el);
    });
  };

  const start_animate = ev => {
    ev.target.dataset.ripple = `${ev.offsetX}-${ev.offsetY}-0`;
    ripple(ev.target);
  };

  const stop = ev => {
    let el = document.querySelector('[data-ripple]');
    if(el){
      delete el.dataset.ripple;
      el.style.background = 'none';
    }
  };
  // Events
  document.querySelectorAll('.highlight').forEach(el => el.addEventListener('mousedown', start_animate));
  document.addEventListener('mouseup', stop);
  // $("#loading .pic").animate({
  //     width: "100%"
  // }, 100, function() {
  //     $("#loading").fadeOut('slow');
  // });
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
  $('#menu-0').css('width',$('#nav-0').width()+$('#menu-0 ul').prevObject[0].fonts.size*2+'px');
  $('#menu-0').css('height','auto');
  $('#menu-1').css('width',$('#nav-1').width()+'px');
  $('#menu-1').css('height','auto');
  reset_img_container();
  reset_img_viewer();
  check_footer();
}

function reset_img_container() {
  if($(window).width()>=510)
    $('.menu-2-content').css('width',$(window).width()-300+'px');
  else
    $('.menu-2-content').css('width','210px');
  $('.row').css('width',$('.menu-2-content').width()+'px');
  $('.center_inside div').each(function(){
    // console.log($(this));
    // console.log($(this).parent('.center_inside'));
    // console.log($(this)[0].childNodes[1].height);
    if($(window).width()>=510){
      $(this).parent('.center_inside').css('width',$(this).parents('.row').width()/3-10+'px');
      if($(this).parent('.center_inside').width()<=$(this)[0].childNodes[1].height){
        $(this).parent('.center_inside').css('height',$(this).parents('.row').width()/3-10+'px');
      }
      else {
        $(this).parent('.center_inside').css('width',$(this).parents('.row').height()+'px');
        // $(this).parent('.center_inside').css('height',$(this)[0].childNodes[1].height+'px');
      }
    }
    else{
      $(this).parent('.center_inside').css('width',$(this).parents('.row').width()/3-10+'px');
      if($(this).parent('.center_inside').width()<=$(this)[0].childNodes[1].height){
        $(this).parent('.center_inside').css('height',$(this).parents('.row').width()/3-10+'px');
      }
      else {
        $(this).parent('.center_inside').css('width',$(this).parents('.row').height()+'px');
        // $(this).parent('.center_inside').css('height',$(this)[0].childNodes[1].height+'px');
      }
    }
    $(this).css('margin-left','-'+$(this)[0].childNodes[1].width/2+'px');
    $(this).css('margin-top','-'+$(this)[0].childNodes[1].height/2+'px');
  });
}

function reset_img_viewer() {
  $('.img-viewer').css('width',$(window).width()/1.7+'px');
  $('.img-viewer').css('height',$(window).height()/1.7+'px');
  if($('.img-viewer img').attr('src')!='')
    reset_img();
  reset_img_viewer_pos();

  // console.log($('.img-viewer').css('width')+'\n'+
  //             $('.img-viewer').css('height')+'\n'+
  //             $('.img-viewer').css('margin-top')+'\n'+
  //             $('.img-viewer').css('margin-left')+'\n'+
  //             $('.img-viewer img').css('height')
  //           );
}
function reset_img() {
  var proportion = $('.img-viewer img').prop("naturalWidth")/$('.img-viewer img').prop("naturalHeight");
  // console.log(proportion);
  // console.log($('.img-viewer img').width());
  // console.log($('.img-viewer').width());
  if($('.img-viewer img').width()>$('.img-viewer').width()){
    $('.img-viewer img').attr('width',$('.img-viewer').width());
    $('.img-viewer').css('height',$('.img-viewer').width()/proportion+'px');
    // console.log($('.img-viewer').width());
    $('.img-viewer img').attr('height',$('.img-viewer').height());
  }
  else if($('.img-viewer img').width()<$('.img-viewer').width()){
    $('.img-viewer img').attr('width',$('.img-viewer').width());
    $('.img-viewer').css('height',$('.img-viewer').width()/proportion+'px');
    // console.log($('.img-viewer').width());
    $('.img-viewer img').attr('height',$('.img-viewer').height());
  }
  else {
    $('.img-viewer img').attr('height',$('.img-viewer').height());
    $('.img-viewer').css('width',$('.img-viewer').height()*proportion+'px');
    $('.img-viewer img').attr('width',$('.img-viewer').width());
  }
  if($('.img-viewer img').height()>$(window).height()-50) {
    $('.img-viewer').css('height',$(window).height()/1.7+'px');
    $('.img-viewer img').attr('height',$('.img-viewer').height());
    $('.img-viewer').css('width',$('.img-viewer').height()*proportion+'px');
    $('.img-viewer img').attr('width',$('.img-viewer').width());
  }
  reset_img_viewer_pos();
}
function reset_img_viewer_pos() {
  $('.img-viewer').css('margin-top',-($('.img-viewer').height()/2)+'px');
  $('.img-viewer').css('margin-left',-($('.img-viewer').width()/2)+'px');
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
