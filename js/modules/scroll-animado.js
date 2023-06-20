export default function initAnimacaoScroll() {
  const header = document.querySelector(".header-bg");
  const firstSection = document.querySelector(".introducao");
  const sections = document.querySelectorAll("[data-section='content']");
  if (sections.length && header) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      const firstSectionTop = firstSection.getBoundingClientRect().top;
      const headerSolid = firstSectionTop - 10 < 0;
      if (headerSolid || window.innerWidth < 720) {
        header.classList.add("solid");
      } else {
        header.classList.remove("solid");
      }
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        const direcao = section.dataset.anima;
        if (isSectionVisible) {
          section.classList.add("ativo", direcao);
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
