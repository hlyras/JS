//Funções executadas através de Ajax
mat_pro = {
  get: function(status){
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != '')
        $(".div_tabela").html(data);
      else
        alert('sem conteúdo')
    }).fail(function(  ) {
      alert("Status de falha");
    });
  },
  insert: function(status) {
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != ''){
        //do not use alerts here
      } else {
        alert('sem conteúdo');
      }
    }).fail(function(  ) {
      alert("status de falha");
    });
  },
  remove: function(status) {
    $.ajax({
      url: "http://localhost:3000" + status
    }).done(function( data ) {
      if(data != undefined && data != ''){
        alert("Materia removida com sucesso");
      } else {
        alert('sem conteúdo');
      }
    }).fail(function(  ) {
      alert("status de falha");
    });
  }
}

$(document).ready(function(){
  $(".materiasProduto").on('click', function(){
    if($(this).data('status')){
      mat_pro.get($(this).data('status'));
    }
  });
  $(".addMat").on('click', function(){
    if($(this).data('status')){
      mat_pro.insert($(this).data('status'));
    }
  });
  $(".removeMat").on('click', function(){
    if($(this).data('status')){
      mat_pro.remove($(this).data('status'));
    }
  });
});
