export default function initScrollSuave() {
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
