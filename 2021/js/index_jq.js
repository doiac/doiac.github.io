$(document).ready(function(){
  $("img").one("load", function() {
    // do stuff
    }).each(function() {
    if(this.complete) {
      // $(this).load(); // For jQuery < 3.0
      $(this).trigger('load'); // For jQuery >= 3.0
    }
  });

  console.log($('#com_00').find('img').height());
  resize_content();
  console.log('Ready done.');
  $(window).resize(function() {
    resize_content();
  });
});

function resize_content(){
  $('.inner_div').each(function(){
    $(this).css('height',$(this).parent().parent().height() +'px');
    if($(this).height() < $(this).find('img').height()){
      $(this).css('height',$(this).find('img').height()+'px');
    }
  });
  $('td').each(function(){
    $(this).css('height',$(this).find('.inner_div').height() +'px');
  });
}
