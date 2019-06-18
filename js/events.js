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
      return 'img'.style();
    }
}

$(document).ready(function(){

// call functions here

});
