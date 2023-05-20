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
  const header = document.querySelector(".header-bg");
  const firstSection = document.querySelector(".introducao");
  const sections = document.querySelectorAll(".js-scroll");
  const h2Footer = document.querySelector(".contato-h2");
  const footer = document.querySelector(".footer");
  if (sections.length && footer && header) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      const firstSectionTop = firstSection.getBoundingClientRect().top;
      console.log(firstSectionTop);
      const headerSolid = firstSectionTop - 10 < 0;
      if (headerSolid) {
        header.classList.add("solid");
      } else {
        header.classList.remove("solid");
      }
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
      const h2FooterTop = h2Footer.getBoundingClientRect().top;
      const isFooterVisible = h2FooterTop - windowMetade < 200;
      if (isFooterVisible) {
        h2Footer.classList.add("ativo");
        footer.classList.add("ativo");
      } else {
        h2Footer.classList.remove("ativo");
        footer.classList.remove("ativo");
      }
    }
    animaScroll();
  }

  window.addEventListener("scroll", animaScroll);
}

initAnimacaoScroll();
