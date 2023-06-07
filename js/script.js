// MENU HAMBURGUER

const btnHamburguer = document.querySelector(".btn-mobile");
const menuMobile = document.querySelector(".navegacao ul.mobile");

function abrirMenu() {
  menuMobile.classList.toggle("ativo");
  btnHamburguer.classList.toggle("ativo");
}

btnHamburguer.addEventListener("click", abrirMenu);

// Scroll Suave links internos

function initScrollSuave() {
  const links = document.querySelectorAll(".navegacao ul a");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function removeMenu() {
    menuMobile.classList.remove("ativo");
    btnHamburguer.classList.remove("ativo");
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
    link.addEventListener("touchstart", scrollToSection);
    link.addEventListener("touchstart", removeMenu);
  });
}
initScrollSuave();

// Scroll Animado

function initAnimacaoScroll() {
  const header = document.querySelector(".header-bg");
  const firstSection = document.querySelector(".introducao");
  const sections = document.querySelectorAll(".js-scroll");
  const h2Contato = document.querySelector(".contato-h2");
  const footer = document.querySelector(".footer");
  if (sections.length && footer && header) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      const firstSectionTop = firstSection.getBoundingClientRect().top;
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
        }
      });
      const contatoTop = h2Contato.getBoundingClientRect().top;
      const isFooterVisible = contatoTop - windowMetade < 0;
      if (isFooterVisible) {
        h2Contato.classList.add("ativo");
        footer.classList.add("ativo");
      }
    }
    animaScroll();
  }

  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();

//Scroll Horizontal

function initScrollHorizontal() {}
const scrollCursos = document.querySelector(".cursos-section .cursos-ebooks");

const voltarCursos = document.querySelector("#btn-voltar-cursos");
function voltarScrollCursos() {
  scrollCursos.scrollLeft -= 120;
}
voltarCursos.addEventListener("click", voltarScrollCursos);

const avancarCursos = document.querySelector("#btn-avancar-cursos");
function avancarScrollCursos() {
  scrollCursos.scrollLeft += 120;
}
avancarCursos.addEventListener("click", avancarScrollCursos);

const scrollEbooks = document.querySelector(".ebooks-section .cursos-ebooks");

const voltarEbooks = document.querySelector("#btn-voltar-ebooks");
function voltarScrollEbooks() {
  scrollEbooks.scrollLeft -= 120;
}
voltarEbooks.addEventListener("click", voltarScrollEbooks);

const avancarEbooks = document.querySelector("#btn-avancar-ebooks");
function avancarScrollEbooks() {
  scrollEbooks.scrollLeft += 120;
}
avancarEbooks.addEventListener("click", avancarScrollEbooks);

initScrollHorizontal();
///////////////////

function initDetalhesBtn() {
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
initDetalhesBtn();

function initFaq() {
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
}
initFaq();
