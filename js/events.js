//define functions here
function getIt() {
  $('p').on('click', function(key){
    if(key){
    alert("Hey!");
    return;
    }
    })
}

function frameIt() {
  $('img').on('load', function() {
      return 'img'.style;
    })
}

function pressIt(){
  $('input').on('keydown', function(key) {
    if(key.which === 71){
      alert('g was pressed');
      return;
    }
  })
}

$(document).ready(function(){

// call functions here

});
