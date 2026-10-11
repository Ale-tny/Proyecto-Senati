// Pide confirmación antes de cerrar sesión
document.querySelector(".cerrar").addEventListener("click", (e) => {
  if (!confirm("¿Seguro que quieres cerrar sesión?")) {
    e.preventDefault(); // se queda en la página
  }
});