

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

