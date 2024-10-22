document.addEventListener("DOMContentLoaded", function () {
  const icon = document.querySelector(".svg-icon-sidebar");

  const sidebar = document.querySelector(".sidebar");

  icon.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
});
