// License of Mit, Please Credit While Using.
// Coded by Daksh, DakshMiglani.com
$(document).ready(function(){
    var json = document.getElementById('json');
    $('button').click(function(){
    var object = document.getElementById('obj').value;
    console.log(object);
    var a = JSON.stringify(object);
    json.innerHTML = a;
    });
  });
