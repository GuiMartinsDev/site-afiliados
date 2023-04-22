const botoesDetails = document.querySelectorAll(".detalhes-btn");

function mostrarDetalhes(event) {
  const botao = event.currentTarget;
  botao.classList.toggle("active");
  const details = botao.nextElementSibling;
  details.classList.toggle("ativo");
}

botoesDetails.forEach((botao) => {
  botao.addEventListener("click", mostrarDetalhes);
});
