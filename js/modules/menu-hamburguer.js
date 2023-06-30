export const btnHamburguer = document.querySelector(".btn-mobile");
export const menuMobile = document.querySelector(".navegacao ul.mobile");
export default function initMenuHamburguer() {
  function abrirMenu() {
    menuMobile.classList.toggle("ativo");
    btnHamburguer.classList.toggle("ativo");
  }

  btnHamburguer.addEventListener("click", abrirMenu);
}
