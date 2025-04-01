function openTab(tabName) {
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  document.getElementById(tabName).classList.add("active");
}
