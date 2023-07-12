import { btnHamburguer, menuMobile } from "./menu-hamburguer.js";

export default function initScrollSuave() {
  const links = document.querySelectorAll("[data-links='menu']");
  const eventsType = ["click", "touchstart"];

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
    eventsType.forEach((eventType) => {
      link.addEventListener(eventType, scrollToSection);
      link.addEventListener(eventType, removeMenu);
    });
  });
}
