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

    const txt = document.createElement("p");
    txt.innerHTML = details;
    txt.dataset.detalhes = "paragrafo";
    txt.classList.add("font-p");
    modalDetalhes.appendChild(txt);
    modalContainer.classList.add("ativo");
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
