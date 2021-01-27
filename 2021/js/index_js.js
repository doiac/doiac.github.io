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
  "images/com_logo/military intelligence bureau.png",
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
  "images/com_logo/tslines.png"];

window.onload = function() {
  setTimeout(function() {
  // // reference to <head>
  // var head = document.getElementsByTagName('head')[0];
  // // a new CSS
  // var css = document.createElement('link');
  // css.type = "text/css";
  // css.rel = "stylesheet";
  // css.href = "http://domain.tld/preload.css";
  // // a new JS
  // var js = document.createElement("script");
  // js.type = "text/javascript";
  // js.src = "http://domain.tld/preload.js";
  // // preload JS and CSS
  // head.appendChild(css);
  // head.appendChild(js);
  // preload image
  for( i = 0; i < preload_images.length; i++)
    new Image().src = preload_images[i];
  }, 1000);
};
