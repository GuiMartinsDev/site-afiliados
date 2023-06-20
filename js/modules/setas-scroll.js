export default function initScrollHorizontalSetas() {
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
}
