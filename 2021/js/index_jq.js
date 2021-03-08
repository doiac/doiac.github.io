$(document).ready(function(){

  console.log($('#com_00').find('img').height());
  resize_logo_content();
  resize_JRF_content();

  console.log('Ready done.');
  $(window).resize(function() {
    resize_logo_content();
    resize_JRF_content();
  });
});

function resize_logo_content(){
  $('.inner_div').each(function(){
    $(this).css('height',$(this).parent().parent().height() +'px');
    if($(this).height() < $(this).find('img').height()){
      $(this).css('height',$(this).find('img').height()+'px');
    }
  });
  $('.company_logo td').each(function(){
    $(this).css('height',$(this).find('.inner_div').height() +'px');
  });
}

function resize_JRF_content(){
  if($(window).outerWidth()<=1200 && $('#mobile_view_JRF_img td').is(':empty')){
    $('#mobile_view_JRF_img').removeClass('blank_tr');
    $('#mobile_view_JRF_img').after('<tr id="add_for_JRF" class="blank_tr"></tr>');
    $('#mobile_view_JRF_img td').append('<img class="JRF" src="images/exhibition_activities/抽iphone12.png" alt="求職登記表抽獎懶人包">');
    $('#JRF_img').empty();
    $('#JRF_text').attr('colspan','2');
  }
  else if($(window).outerWidth() > 1200 && $('#JRF_img').is(':empty')){
    $('#mobile_view_JRF_img td').empty();
    $('#mobile_view_JRF_img').addClass('blank_tr');
    $('#add_for_JRF').remove();
    $('#JRF_text').attr('colspan','');
    $('#JRF_img').append('<img src="images/exhibition_activities/抽iphone12.png" alt="求職登記表抽獎懶人包">');
  }
}
