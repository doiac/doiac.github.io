// var background = new Image();
// background = "images/backgroundt.png";

function start(){
  showtime();
  reset_screen();
  clear();
  // $('#home img').attr('src','images/Icon/Home_Icon_clicked.svg');
  // HomeisClicked = true;
  // $('.home').css("display","block");
  check_footer();
  // $("#loading .pic").animate({
  //     width: "85%"
  // }, 100);
  // var button_0 = [];
  // var button_1 = [];
  // for(let i = 0;i < 3;i++)
  //   button_0[i] = document.getElementById('menu-0-option'+i);
  // for(let i = 0;i < 2;i++)
  //   button_1[i] = document.getElementById('menu-1-option'+i);
  // for(let i = 0;i < 3;i++){
  //   button_0[i].addEventListener('click', function(){
  //     clear();
  //     $('#0').css('color','#4D1F00');
  //     // $('#menu-0').hide(500);
  //     $('.menu-0-content-'+i).css("display","block");
  //     check_footer();
  //   }, false);
  // }
  // for(let i = 0;i < 2;i++){
  //   button_1[i].addEventListener('click', function(){
  //     clear();
  //     $('#1').css('color','#4D1F00');
  //     // $('#menu-1').hide(500);
  //     $('.menu-1-content-'+i).css("display","block");
  //     check_footer();
  //   }, false);
  // }
  // document.getElementById('2').addEventListener('click', function(){
  //   clear();
  //   $('#2').css('color','#4D1F00');
  //   $('.menu-2-content').css("display","block");
  //   reset_screen();
  //   check_footer();
  // },false);
  // document.getElementById('home').addEventListener('click', function(){
  //   clear();
  //   HomeisClicked = true;
  //   $('#home img').attr('src','images/Icon/Home_Icon_clicked.svg');
  //   $('.home').css("display","block");
  //   check_footer();
  // },false);
  // document.getElementById('to_menu_0_content_1').addEventListener('click',function(){
  //   button_0[1].click();
  // },false);
  // document.getElementById('to_menu_0_content_2').addEventListener('click',function(){
  //   button_0[2].click();
  // },false);
  // $('#home img').hover(function(){
  //   $(this).attr('src','images/Icon/Home_Icon_clicked.svg');
  // },
  // function() {
  //     if(HomeisClicked)
  //       return false;
  //     $(this).attr('src','images/Icon/Home_Icon.svg');
  //   }
  // );
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

function clear() {
  // HomeisClicked = false;
  for(let i = 0;i < 3;i++)
    $('#'+i).css('color','inherit');
  // $('#home img').attr('src','images/Icon/Home_Icon.svg');
  // $('.home').css('display','none');
  // for(let i = 0;i < 2;i++){
  //   for(let j = 0;j < 3;j++){
  //     if($('.menu-'+i+'-content-'+j).length)
  //       $('.menu-'+i+'-content-'+j).css("display","none");
  //   }
  // }
  // $('.menu-2-content').css("display","none");
}

function check_footer() {
  $("center").css('height',$('.show_content').height());
  // console.log($("center").height());
  // console.log($(window).height());
  // console.log($("#menu_top").height());
  // console.log($("footer").height());
  // console.log($("center").height()-$("#menu_top").height()-$("footer").height());
  // console.log($('.content-background').height());
  if($("center").height()-$("#menu_top").height()+$("footer").height()<$(window).height())
    $("center").css('height',$('.content-background').height()-$("footer").height()+'px');
}
function reset_screen() {
  $('.content-background').css('height',$(window).height());
  $('.center').css('height',$('header').height()-10+'px');
  // $('.paydiv-wrapper').css('height',$(window).height())+'px';
  if($(window).width()>800){
    $('#map').css('width',600);
    $('#poster').css('width',600);
  }
  else{
    $('#map').css('width',$(window).width()-250);
    $('#poster').css('width',$(window).width()-200);
  }
  if($(window).width()>840){
    document.getElementById('menu_separate-1').innerHTML = '&ensp;✧&ensp;';
  }
  else{
    document.getElementById('menu_separate-1').innerHTML = '<br>';
    if($(window).width()>320){
      document.getElementById('menu_separate-0').innerHTML = '&ensp;✧&ensp;';
      document.getElementById('menu_separate-2').innerHTML = '&ensp;✧&ensp;';
    }
    else{
      if($(window).width()>250){
        document.getElementById('menu_separate-0').innerHTML = '✧';
        document.getElementById('menu_separate-2').innerHTML = '✧';
      }
      else{
        for(let i = 0;i < 3; i++)
          document.getElementById('menu_separate-'+i).innerHTML = '';
      }
    }
  }

  reset_img_container();

  for(let i = 0;i < 3; i++){
    $('.home-content-'+i).css('padding-left',100+'px');
    $('.home-content-'+i).css('padding-right',100+'px');
  }
  $('#menu_top nav').each(function(){
    $(this).find('ul').css('width',$(this).width()+'px');
  });
  // $('ol').each(function(){
    // console.log($(this));
    // console.log($(this)[0].childNodes[1].offsetWidth);
    // $(this).css('width',$(this)[0].childNodes[1].offsetWidth);
    // $(this).css('width',$('.list_content').width()-40+'px');
  // });
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
