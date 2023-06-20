export default function initDetalhesBtn() {
  const botoesDetails = document.querySelectorAll(".detalhes-btn");

  function mostrarDetalhes(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const botao = event.currentTarget;
    botao.classList.toggle("active");

    const details = botao.nextElementSibling;
    details.classList.toggle("ativo");
  }

  botoesDetails.forEach((botao) => {
    botao.addEventListener("click", mostrarDetalhes);
    botao.addEventListener("touchstart", mostrarDetalhes);
  });
}
