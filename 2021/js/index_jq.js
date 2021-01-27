$(document).ready(function(){
  resize_content();

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
}
