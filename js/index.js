document.addEventListener("DOMContentLoaded", (event) => {
  const temaLocal = localStorage.getItem("tema");
  document.body.setAttribute("data-theme", temaLocal);
});

let idiomaAtual = "pt";

function alterarIdioma() {
  idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
  carregarIdioma(idiomaAtual);
}
function carregarIdioma(idioma) {
  fetch(`json/${idioma}.json`)
    .then((data) => data.json())
    .then((data) => {
      traduzirPagina(data);
    });

  function traduzirPagina(Linguagem) {
    document.querySelectorAll("[data-i18n]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-i18n");

      if (Linguagem[chave]) {
        elemento.textContent = Linguagem[chave];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-i18n-alt");

      if (Linguagem[chave]) {
        // elemento.textContent = Linguagem[chave];
        elemento.setAttribute("alt", Linguagem[chave]);
      }
    });
  }
}

function openTab(tabName) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
}

function alterarTema() {
  const tema = document.body.getAttribute("data-theme");
  const novoTema = tema == "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", novoTema);
  localStorage.setItem("tema", novoTema); 
  const btAlterarTema = document.getElementById("btAlterarTema");
  btAlterarTema.textContent = novoTema === "light" ? "Modo Dark" : "Modo Light";
}


