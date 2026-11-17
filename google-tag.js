// ===== MEDICIÓN DE GOOGLE (Analytics 4 + Google Ads) =====
// Pegá acá tus IDs. Mientras queden los de ejemplo (con XXXX), no se carga nada.
const GOOGLE_ANALYTICS_ID = "G-XXXXXXXXXX";   // Google Analytics 4 → Administrar → Flujos de datos
const GOOGLE_ADS_ID = "AW-XXXXXXXXXX";        // Google Ads → Objetivos → Conversiones → Configuración de la etiqueta
// Opcional: la parte después de la barra de la etiqueta de conversión de Ads
// (ej. en "AW-123456789/AbC-dEfGh" es "AbC-dEfGh"). Si importás las conversiones desde GA4, dejala vacía.
const ADS_ETIQUETA_CONVERSION = "";

(function () {
  const esReal = function (id) { return id && id.indexOf("XXXX") === -1; };
  const ids = [GOOGLE_ANALYTICS_ID, GOOGLE_ADS_ID].filter(esReal);

  // Sin IDs reales: función vacía para que el resto del sitio funcione igual.
  window.registrarConversion = function () {};
  if (!ids.length) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag("js", new Date());
  ids.forEach(function (id) { gtag("config", id); });

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ids[0];
  document.head.appendChild(s);

  // Importante: nunca enviar datos personales ni de salud (nombre, mensaje, obra social).
  // Solo el tipo de acción y la página donde ocurrió.
  window.registrarConversion = function (evento) {
    gtag("event", evento, { pagina: location.pathname });
    if (esReal(GOOGLE_ADS_ID) && ADS_ETIQUETA_CONVERSION) {
      gtag("event", "conversion", { send_to: GOOGLE_ADS_ID + "/" + ADS_ETIQUETA_CONVERSION });
    }
  };
})();
