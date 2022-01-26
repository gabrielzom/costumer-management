$(document).ready(function() {
  $("#valor").mask("000.000,00" , {
    reverse : true
  })

  if ($("#cpf_cnpj").text().length >= 14) {
    $("#cpf_cnpj").mask("00.000.000/0000-00")

  } else {
    $("#cpf_cnpj").mask("000.000.000-0000")
  }
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


let date = ['2021-11-07','2021-11-08']
let data = document.getElementsByClassName("moment")

for (let i=0; i<data.length; i++) {
  data[i].innerHTML = moment(data[i].innerHTML).format("DD/MM/YYYY")
}