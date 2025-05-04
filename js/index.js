document.addEventListener("DOMContentLoaded", (event) => {
  document.body.setAttribute("data-theme", "light"); 
  const themeButton = document.getElementById("btAlterarTema");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  themeIcon.classList.add("fa-moon"); 
  themeText.textContent = "Modo Escuro";
  themeButton.classList.add("hover-dark"); 
  themeButton.classList.remove("hover-light");
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
        elemento.innerHTML = Linguagem[chave];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-i18n-alt");

      if (Linguagem[chave]) {
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
  const themeButton = document.getElementById("btAlterarTema");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (tema === "light") {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    themeText.textContent = "Modo Claro"; 
    themeButton.classList.remove("hover-dark");
    themeButton.classList.add("hover-light");
  } else {
    document.body.setAttribute("data-theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    themeText.textContent = "Modo Escuro"; 
    themeButton.classList.remove("hover-light");
    themeButton.classList.add("hover-dark");
  }
}