//Funções executadas através de Ajax

//Mostrar Matérias inseridas no produto selecionado
mat_pro = {
  get: function(status){
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != '')
        $("#tabs").html($("#tabs").html()+data);
      else
        alert('sem conteúdo')
    }).fail(function(  ) {
      alert("Status de falha");
    });
  },
  list: function(status) {
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != ''){
        $("#div_materias").html(data);
      } else {
        alert('sem conteúdo');
      }
    }).fail(function(  ) {
      alert("status de falha");
    });
  },
  insert: function(status) {
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != ''){
        alert(data);
      } else {
        alert('sem conteúdo');
      }
    }).fail(function(  ) {
      alert("status de falha");
    });
  }
}

$(document).ready(function(){
  $("#materiasProduto").on('click', function(){
    if($(this).data('status')){
      mat_pro.get($(this).data('status'));
    }
  });

  $("#materias_get").on('click', function(){
    if($(this).data('status')){
      mat_pro.list($(this).data('status'));
    }
  });

  $(".addMat").on('click', function(){
    if($(this).data('status')){
      mat_pro.insert($(this).data('status'));
    }
  });
});
