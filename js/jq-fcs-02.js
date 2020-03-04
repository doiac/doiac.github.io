$(document).ready(function(){
  $('#0').css('color','#28262C');
  $('#menu-0-option2').css('color','#28262C');
  align_poster();
  lecture_seperate();
  $(window).resize(function(){
    align_poster();
  });
});

function lecture_seperate(){
  var count = 0;
  $('.lecture').each(function(){
    if(count%2)
      $(this).css('background-color','rgba(191,192,192,0.9)');
    count+=1;
  });
}

function align_poster(){
  var min = 0;
  $('.img-container a img').each(function(){
    if($(this).height()>min)min = $(this).height();
  });
  $('.poster-img').css('min-height',min+'px');
  check_footer();
}
