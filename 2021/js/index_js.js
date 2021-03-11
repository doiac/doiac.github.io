var preload_images = [
  "images/com_logo/chinese maritime transport ltd.jpg",
  "images/com_logo/culines.jpg",
  "images/com_logo/fpmc.png",
  "images/com_logo/yangming.png",
  "images/com_logo/uming.png",
  "images/com_logo/twport.png",
  "images/com_logo/tonglit.png",
  "images/com_logo/sinotech.png",
  "images/com_logo/pacificstargroup.jpg",
  "images/com_logo/t3ex-tec.png",
  "images/com_logo/national security bureau.png",
  "images/com_logo/tci-bio.png",
  "images/com_logo/tradevan.png",
  "images/com_logo/hong yi ecological.jpg",
  "images/com_logo/mos_burger.png",
  "images/com_logo/ctx-risks.png",
  "images/com_logo/dekra-ist.jpg",
  "images/com_logo/ecove.png",
  "images/com_logo/mercuries life insurance.jpg",
  "images/com_logo/interasia.png",
  "images/com_logo/chinalife.png",
  "images/com_logo/microtechfoods.png",
  "images/com_logo/nextrongroup.jpg",
  "images/com_logo/pecl.jpg",
  "images/com_logo/rdrc_mnd.png",
  "images/com_logo/tctarget.png",
  "images/com_logo/lawbroker.png",
  "images/com_logo/unimicron.png",
  "images/com_logo/ieeuc.png",
  "images/com_logo/tslines.png",
  "images/com_logo/chienshing.jpg",
  "images/com_logo/cip.png",
  "images/com_logo/ckpublic.png",
  "images/com_logo/crclass.jpg",
  "images/com_logo/ctci.png",
  "images/com_logo/cwptw.png",
  "images/com_logo/decathlon.png",
  "images/com_logo/gallant_ocean_international.png",
  "images/com_logo/groupwagon.png",
  "images/com_logo/ieiworld.jpg",
  "images/com_logo/king-freight.png",
  "images/com_logo/laurel.png",
  "images/com_logo/lianhwa.jpg",
  "images/com_logo/lungteh.png",
  "images/com_logo/magicallogistic.png",
  "images/com_logo/mol.jpg",
  "images/com_logo/nanshanlife.png",
  "images/com_logo/nipponexpress.jpg",
  "images/com_logo/sigurd.jpg",
  "images/com_logo/songchuan.png",
  "images/com_logo/swancor-renewable.png",
  "images/com_logo/tbcl.png",
  "images/com_logo/upcc.jpg",
  "images/com_logo/wellchoose.png",
  "images/com_logo/yilin.png"];

// window.onload = function() {
//   setTimeout(function() {
//     for( i = 0; i < preload_images.length; i++)
//       new Image().src = preload_images[i];
//   }, 1000);
// };

$(document).ready(function(e) {
    //showing startup image. By default it will be display:none via css.
    $('.company_logo').show();

    //load img
    var total = preload_images.length;
    var imgLoaded = 0;
    for (var i in preload_images) {
      for(var j = 0; j < 55; j++){
        $("com_0" + j + " img").on('load', function() {
            imgLoaded++;
            if (imgLoaded == total) {
                //when all images loaded we hide start up image.
                $('.company_logo').hide();
            }
        }).on('error',function() {
            imgLoaded++;
            if (imgLoaded == total) {
                //when all images loaded even error in img loading, we hide startup image.
                $('.company_logo').hide();
            }
        }).attr("src", preload_images[i]);
      }
    }

  sact();
  setInterval(function(){
    sact();
  }, 5000);

  $( window ).on('load',function() {
    if(Cookies.get('FIRST_RELOAD') === Cookies.get('nothing')){
      Cookies.set('FIRST_RELOAD', '1');
      location.reload(false);
    }
    else
      Cookies.remove('FIRST_RELOAD');
  });

  // if (!!window.performance && window.performance.navigation.type === 1) {
  //           // console.log('Reloading');
  //           window.location.replace('https://doiac.github.io/2021/');
  //     }
});

function sact(){
  var sheetid = '119RvgAjI7yff0y2STp0g6QEh26HWROzFKb1i-8Chncc',
      sheetno = 2,
      dataurl = 'https://spreadsheets.google.com/feeds/list/' + sheetid + '/' + sheetno + '/public/values?alt=json-in-script&callback=?';
  $.getJSON(dataurl,
      function(json) {
          var e = json.feed.entry;
              $(e).each(function() {
                $('#threshold').text(this.gsx$_cn6ca.$t);
            });
      }
  );
}
