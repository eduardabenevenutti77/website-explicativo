document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o ícone SVG
  const icon = document.querySelector(".svg-icon-sidebar");

  // Seleciona o menu sidebar
  const sidebar = document.querySelector(".sidebar");

  // Adiciona um evento de clique ao ícone SVG
  icon.addEventListener("click", function () {
    // Alterna a classe 'open' no menu sidebar
    sidebar.classList.toggle("open");
  });
});
