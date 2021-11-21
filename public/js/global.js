$("#btn-logout").on("click", () => {
  $("#modal-logout").modal("show");
})

$(".cancelar-logout").on("click", () => {
  $("#modal-logout").modal("hide");
})


$("#btn-excluir-cliente").on("click", () => {
  $("#modal-excluir-cliente").modal("show");
})

$(".cancelar-excluir-cliente").on("click", () => {
  $("#modal-excluir-cliente").modal("hide");
})

let clientes
let cliente = ejs.render('<%=clientes %>', {clientes : clientes})
console.log(clientes)