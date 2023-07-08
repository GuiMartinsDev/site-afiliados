export default function initDetalhesBtn() {
  const botoesDetails = document.querySelectorAll(".detalhes-btn");
  const modalContainer = document.querySelector("[data-modal='container']");
  const modalDetalhes = document.querySelector(
    "[data-modal='container'] .modal-detalhes"
  );
  const btnFechar = document.querySelector("[data-modal='fechar']");

  function mostrarDetalhes(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const botao = event.currentTarget;

    const details = botao.nextElementSibling.innerHTML;

    const divDt = document.createElement("div");
    divDt.innerHTML = details;
    divDt.dataset.detalhes = "div";
    divDt.classList.add("font-p", "div-detalhes-ativo");
    modalDetalhes.appendChild(divDt);
    setTimeout(() => {
      modalContainer.classList.add("ativo");
    }, 300);
  }

  function fecharDetalhes(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    modalContainer.classList.remove("ativo");
    modalDetalhes.innerHTML = "";
  }

  botoesDetails.forEach((botao) => {
    ["click", "touchstart"].forEach((userEvent) => {
      botao.addEventListener(userEvent, mostrarDetalhes);
    });
  });
  btnFechar.addEventListener("click", fecharDetalhes);
  btnFechar.addEventListener("touchstart", fecharDetalhes);
}
