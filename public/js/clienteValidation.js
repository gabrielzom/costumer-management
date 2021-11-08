$(document).ready(function() {
  $("#valor").mask("000.000,00" , {
    reverse : true
  })
})

$("#cnpj_cpf").on("keypress", function(){
  $(this).mask("000.000.000-0000")
    if ($(this).val().length > 14) {
      $(this).mask("00.000.000/0000-00")
    }
})

$("#telefone").on("keypress", function(){
  $(this).mask("(00) 0000-00000")
  $(this).on("change", function() {
    if ($(this).val().length == 15) {
      $(this).mask("(00) 00000-0000")
    } else {
      $(this).mask("(00) 0000-00000")
    }
  }) 
})

