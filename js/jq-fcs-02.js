$(document).ready(function(){
  $('#0').css('color','#28262C');
  $('#menu-0-option2').css('color','#28262C');
  list_seperate();
});

function list_seperate(){
  var count = 0;
  $('ul li').each(function(){
    if(count%2)
      $(this).css('background-color','rgba(191,192,192,0.9)');
    count+=1;
  });
}
