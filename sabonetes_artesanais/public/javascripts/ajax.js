api = {
  get: function(status){
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != '')
        $("#pag").html(data);
      else
        alert('sem conteúdo')
    }).fail(function(  ) {
      alert("Status de falha");
    });
  }
}

seq = {
  get: function(status){
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != '')

      else
        alert('sem conteúdo')
    }).fail(function(  ) {
      alert("Status de falha");
    });
  }
}

$(document).ready(function(){
  $("#materiasProduto").on('click', function(){
    if($(this).data('status')){
      seq.get($(this).data('status'));
    }
  });
});
