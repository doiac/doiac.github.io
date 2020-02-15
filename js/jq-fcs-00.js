var urls = ['1I7fdd8A7JGud7YkFsMkYw5ENeryJvuXB','1dgdV8uqOWGfsJo3EHNvbYubdhBqwOEn7','1848cLDvAvCFU7yK_OFe1rMvmUM1rJB15','1YoMfEzoZaleuTId05xUDDbmByKYNi3D0','1nL5DOHR6U5HeCTQ_srArrXBEGocsZdUE']
$(document).ready(function(){
  $('#0').css('color','#28262C');
  $('#menu-0-option0').css('color','#28262C');
  $('p span').each(function(){
    // console.log($(this)[0].id);
    $(this).click(function(){
      $('#poster').hide();
      $('p span').each(function(){
        $(this).css('color','inherit');
        $(this).css('text-decoration-style','dotted');
      });
      $(this).css('color','#28262C');
      $(this).css('text-decoration-style','solid');
      $('#pdf-viewer').attr('src','https://drive.google.com/file/d/'+ urls[$(this)[0].id] +'/preview');
      $('#pdf-viewer').attr('height',$(window).height()*0.8+'px');
      if($('#pdf-viewer').css('display') == 'none')
        $('#pdf-viewer').css('display','block');
      check_footer();
    });
  });
});
