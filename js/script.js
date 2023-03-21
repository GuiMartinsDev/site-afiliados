const botoesList = document.querySelectorAll(".detalhes-btn");
console.log(botoesList);
const botoesArray = [...botoesList];
console.log(botoesArray);

function mostrarDetalhes(event) {
  const botao = event.currentTarget;
  botao.classList.toggle("ativo");
}

botoesArray.forEach((botao) => {
  botao.addEventListener("click", mostrarDetalhes);
});
