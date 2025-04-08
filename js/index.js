document.addEventListener("DOMContentLoaded", (event) => {
  const temaLocal = localStorage.getItem("tema");
  document.body.setAttribute("data-theme", temaLocal);
});

function openTab(tabName) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
}

function alterarTema() {
  const tema = document.body.getAttribute("data-theme");
  const novoTema = tema == "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", novoTema);

  const btAlterarTema = document.getElementById("btAlterarTema");
  btAlterarTema.textContent = "Light";
  if (novoTema == "light") {
    btAlterarTema.textContent = "Dark";
  }
}
