// ===== CONFIGURACIÓN =====
// Tu número de WhatsApp en formato internacional, sin "+", espacios ni guiones.
// Ejemplo para Paraná (0343) 15 123-4567  ->  "5493431234567"
const WHATSAPP_NUMERO = "5493435030827";
const MENSAJE_INICIAL = "Hola, quisiera hacer una consulta sobre un amparo de salud.";

function linkWhatsApp(texto) {
  return "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(texto);
}

// Botones de WhatsApp (encabezado y botón flotante)
document.querySelectorAll(".js-whatsapp").forEach(function (boton) {
  boton.href = linkWhatsApp(MENSAJE_INICIAL);
  boton.target = "_blank";
  boton.rel = "noopener";
});

// Menú en celular
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {
  const abierto = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", abierto);
  menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Formulario de contacto -> WhatsApp
const form = document.getElementById("contact-form");
const errorMsg = form.querySelector(".form__error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const campos = form.querySelectorAll("[required]");
  let valido = true;
  campos.forEach(function (campo) {
    const vacio = campo.value.trim() === "";
    campo.classList.toggle("is-invalid", vacio);
    campo.setAttribute("aria-invalid", vacio);
    if (vacio) valido = false;
  });

  errorMsg.hidden = valido;
  if (!valido) {
    form.querySelector(".is-invalid").focus();
    return;
  }

  const dato = function (id) { return document.getElementById(id).value.trim(); };
  const texto =
    "Hola, quisiera hacer una consulta sobre un amparo de salud.\n\n" +
    "*Nombre:* " + dato("nombre") + "\n" +
    "*Teléfono:* " + dato("telefono") + "\n" +
    "*Localidad:* " + dato("localidad") + "\n" +
    "*Obra Social / Prepaga:* " + dato("obra-social") + "\n\n" +
    "*Situación:* " + dato("mensaje");

  window.open(linkWhatsApp(texto), "_blank", "noopener");
  form.reset();
});

form.querySelectorAll("[required]").forEach(function (campo) {
  campo.addEventListener("input", function () {
    campo.classList.remove("is-invalid");
    campo.removeAttribute("aria-invalid");
  });
});

// Año del pie de página
document.getElementById("year").textContent = new Date().getFullYear();
