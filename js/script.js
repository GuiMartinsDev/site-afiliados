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

const faqLista = document.querySelectorAll(".js-accordion dt");
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
