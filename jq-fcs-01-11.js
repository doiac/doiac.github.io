$(document).ready(function(){
  reset_summary();
  $('#0').css('color','#4D1F00');
  $('#1').css('color','#4D1F00');
  $(window).resize(function(){
    reset_summary();
  });
});

function reset_summary() {
  for(let i=0;i<4;i++){
    $('#logo-'+i).css('height','auto');
    $('#summary-title-'+i).css('height','auto');
    $('#logo-'+i).css('width',$('#summary-'+i).width()*0.4);
    $('#logo-'+i+' img').attr('width',$('#summary-'+i).width()*0.4);
    $('#summary-title-'+i).css('width',$('#summary-'+i).width()*0.6-5);
    if($('#logo-'+i).height()>=$('#logo-'+i+' img').height()){
      $('#logo-'+i).css('height',$('#logo-'+i+' img').height());
    }
    if($('#logo-'+i).height()>=$('#summary-title-'+i).height())
      $('#summary-title-'+i).css('height',$('#logo-'+i).height());
    else
      $('#logo-'+i).css('height',$('#summary-title-'+i).height());
    if($(window).width()<1070){
      for(let i = 0;i < 4;i++)
        $('#summary-title-'+i).css('line-height','normal');
    }
    else
      $('#summary-title-'+i).css('line-height',($('#summary-title-'+i).height()/2)+'px');
    if($('#logo-'+i).height()>=$('#summary-title-'+i).height())
      $('#summary-title-'+i).css('height',$('#logo-'+i).height());
    else
      $('#logo-'+i).css('height',$('#summary-title-'+i).height())
  }
}
