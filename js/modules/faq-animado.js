export default function initFaq() {
  const faqLista = document.querySelectorAll("[data-anime='accordion'] dt");
  const ativo = "ativo";

  if (faqLista.length) {
    faqLista[0].classList.add(ativo);
    faqLista[0].nextElementSibling.classList.add(ativo);
  }

  function addClassAtivo() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  faqLista.forEach((dt) => {
    dt.addEventListener("click", addClassAtivo);
  });
}
