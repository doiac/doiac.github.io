function printlist(){
  var button = [];
  for(let i = 0 ; i < 4; i++)
    button[i] = document.getElementById('ic-'+i);
  for(let i = 0 ; i < 4; i++){
    button[i].addEventListener('click',function(){
      clear();
      document.getElementById('ic-'+i).style.color = '#4D1F00';
      document.getElementById('c-'+i).style.display = 'block';
      check_footer();
    },false);
  }
}

function clear(){
  for(let i = 0 ; i < 4; i++){
    document.getElementById('ic-'+i).style.color = 'inherit';
    document.getElementById('c-'+i).style.display = 'none';
  }
}

window.addEventListener('load',printlist,false);
