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

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const footer = document.querySelector(".footer");
  if (sections.length && footer) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
      const footerTop = footer.getBoundingClientRect().top;
      const isFooterVisible = footerTop - windowMetade < 130;
      if (isFooterVisible) {
        footer.classList.add("ativo");
      } else {
        footer.classList.remove("ativo");
      }
    }
    animaScroll();
  }

  window.addEventListener("scroll", animaScroll);
}

initAnimacaoScroll();
