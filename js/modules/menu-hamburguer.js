export default function initMenuHamburguer() {
  const btnHamburguer = document.querySelector(".btn-mobile");
  const menuMobile = document.querySelector(".navegacao ul.mobile");

  function abrirMenu() {
    menuMobile.classList.toggle("ativo");
    btnHamburguer.classList.toggle("ativo");
  }

  btnHamburguer.addEventListener("click", abrirMenu);
}
