const form = document.querySelector("form");
const input = document.querySelector(".campo input");
const ojo = document.querySelector(".campo i");
const escaner = document.querySelector(".escaner");
const video = document.querySelector(".escaner video");
const boton = document.querySelector(".boton");

// Código de empleado predeterminado
const codigoEmpleado = "EMP2026";

// Ojito: mostrar / ocultar el código de empleado
ojo.addEventListener("click", () => {
  const estaOculto = input.type === "password";
  input.type = estaOculto ? "text" : "password";
  ojo.classList.toggle("fa-eye", estaOculto);
  ojo.classList.toggle("fa-eye-slash", !estaOculto);
});

// Iniciar escaneo: valida el código, abre la cámara y pasa al dashboard
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validacion 1: el campo no puede estar vacio
  const codigo = input.value.trim();
  if (codigo === "") {
    alert("Error: Debes ingresar tu código de empleado.");
    return;
  }

  // Validacion 2: el código debe ser el correcto
  if (codigo !== codigoEmpleado) {
    alert("Error: El código de empleado es incorrecto.");
    return;
  }

  boton.disabled = true;
  boton.textContent = "Abriendo cámara...";

  let stream;
  try {
    // Le pide permiso al usuario para usar la cámara frontal
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });
  } catch (error) {
    alert("No se pudo acceder a la cámara. Revisa los permisos del navegador.");
    boton.disabled = false;
    boton.textContent = "Iniciar Escaneo";
    return;
  }

  // Muestra la cámara en el círculo
  video.srcObject = stream;
  escaner.classList.add("escaneando");
  boton.textContent = "Escaneando...";

  // Simula 3 segundos de escaneo, apaga la cámara y pasa al dashboard
  setTimeout(() => {
    stream.getTracks().forEach((pista) => pista.stop());
    window.location.href = "dashboard.html";
  }, 3000);
});