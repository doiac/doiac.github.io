$(document).ready(function(){
  // showtime();
  $('#0').css('color','#28262C');
  $('#1').css('color','#28262C');
  $(window).resize(function(){
    reset_screen();
    reset_summary();
  });
});

function reset_summary() {
  for(let i=0;i<5;i++){
    $('#logo-'+i).css('height','auto');
    $('#summary-title-'+i).css('height','auto');
    $('#logo-'+i).css('width',$('#summary-'+i).width()*0.4);
    $('#logo-'+i+' img').attr('width',$('#summary-'+i).width()*0.4);
    $('#summary-title-'+i).css('width',$('#summary-'+i).width()*0.6-5+'px');
    $('#logo-'+i).css('height',$('#logo-'+i+' img').height());
    // if($(window).width()<1070)
    //   $('#summary-title-'+i).css('line-height','normal');
    // else if($('#summary-title-'+i).height()<$('#logo-'+i).height())
    //   $('#summary-title-'+i).css('line-height',$('#summary-title-'+i).height()/2+'px');
  }
  table_seperate();
  aligned();
  check_footer();
}

function table_seperate(){
  var count = 0;
  $('tbody tr').each(function(){
    if(count%2)
      $(this).css('background-color','rgba(191,192,192,0.9)');
    count+=1;
  });
}

function aligned(){
  for(let i = 0; i < 5;i++){
    if($('#logo-'+i).height()>=$('#summary-title-'+i).height())
      $('#summary-title-'+i).css('height',$('#logo-'+i).height());
    else
      $('#logo-'+i).css('height',$('#summary-title-'+i).height());
  }
}
