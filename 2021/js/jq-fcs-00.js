var urls = ['1jwzAwUt1RIF0QJ752iHxr9sA5DFOjOhU','1Efrazt0aCc0POvByvgi7r_d4C7-JXLlM','1ERgcflJYHK1nmxf464R7clxGfTdgHD9q','1Jo8GUi5VXXXJp8owJlhxolpQKzKQPYwF','1lNZr9iKFnj9ypxp3y_xZ7psL4MPCRkVh']
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
