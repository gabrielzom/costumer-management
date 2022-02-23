
function getParam() {
  form = document.getElementById("form")
  form.action = window.location.pathname + "?_method=PUT"
}

$("#btn-logout").on("click", () => {
  $("#modal-logout").modal("show");
})

$(".cancelar-logout").on("click", () => {
  $("#modal-logout").modal("hide");
})

function excluirCliente(id) {
  document.querySelector("#excluir-cliente").setAttribute("action",`/clientes/excluir/${id}?_method=DELETE`)
  $("#modal-excluir-cliente").modal("show");
}

$(".cancelar-excluir-cliente").on("click", () => {
  $("#modal-excluir-cliente").modal("hide");
})


function excluirHistorico(id) {
  document.querySelector("#excluir-historico").setAttribute("action",`/clientes/historico/excluir/${id}?_method=DELETE`)
  $("#modal-excluir-historico").modal("show");
}

$(".cancelar-excluir-historico").on("click", () => {
  $("#modal-excluir-historico").modal("hide");
})


function excluirUsuario(id) {
  document.querySelector("#excluir-usuario").setAttribute("action",`/usuario/excluir/${id}?_method=DELETE`)
  $("#modal-excluir-usuario").modal("show");
}

$(".cancelar-excluir-usuario").on("click", () => {
  $("#modal-excluir-usuario").modal("hide");
})

$("#btn-close-msg").on("click", () => {
  $(".container").remove("#div-msg-warning")
})