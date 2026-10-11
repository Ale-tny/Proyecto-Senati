// LLAMAMOS AL FORMULARIO Y A LOS 2 INPUTS (dom) //
const form = document.querySelector("form");
const inputEmail = document.querySelector("#email");
const inputPass = document.getElementById("password");

// Datos predeterminados
const userEmail = "admin@gmail.com";
const userPass = "123456789";

// Evento de enviar (submit): se activa al presionar INICIAR
form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita que la página se recargue

  // Obtener los valores de los inputs
  const correo = inputEmail.value.trim();
  const clave = inputPass.value.trim();

  // Validacion 1: Comprobar si los campos estan vacios
  if (correo === "" || clave === "") {
    alert("Error: Debes completar todos los campos.");
    return;
  }

  // Validacion 2: La clave debe tener exactamente 9 digitos
  if (clave.length !== 9) {
    alert("Error: La contraseña debe tener 9 digitos.");
    return;
  }

  // Validacion 3: Credenciales
  if (correo === userEmail && clave === userPass) {
    window.location.href = "dashboard.html"; // VERDADERO
  } else {
    alert("Error: El usuario o contraseña es incorrecta.");
  }
});