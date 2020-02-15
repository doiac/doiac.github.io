$(document).ready(function(){
  $('#0').css('color','#28262C');
  $('#menu-0-option0').css('color','#28262C');
  $('p span').each(function(){
    // console.log($(this)[0].id);
    $(this).click(function(){
      $('#poster').hide();
      $('#pdf-viewer').attr('src','http://docs.google.com/gview?url=https://doiac.github.io/files/AMD'+ $(this)[0].id +'.pdf&embedded=true');
      $('#pdf-viewer').attr('height',$(window).height()*0.8+'px');
      if($('#pdf-viewer').css('display') == 'none')
        $('#pdf-viewer').css('display','block');
      check_footer();
    });
  });
});
