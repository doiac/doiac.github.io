var images = new Array()
function preload() {
  for (i = 0; i < preload.arguments.length; i++){
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
  console.log('Preload done.');
}

preload(
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
  "images/com_logo/tslines.png"
);
