# SEO — estado al 30 de octubre de 2026

Implementado: títulos y descripciones únicos, canonical HTTPS, identidad WebSite/LegalService/Person, metadatos sociales, guía enlazada desde inicio, autor visible, sitemap con el inicio y cinco guías (medicamentos, discapacidad, PAMI, OSER y prepagas), imágenes WebP con dimensiones y carga diferida, enlaces WhatsApp sin dependencia de JS, contenido visible sin JS y página 404 noindex.

Comprobado: recursos/enlaces locales, JSON-LD válido y redirecciones 301 de HTTP y www hacia HTTPS sin www. Esto no equivale a validar resultados enriquecidos ni indexación en Google.

Agregado el 16 de noviembre de 2026 (preparación para Google Ads, ver `PLAN-MARKETING-GOOGLE-ADS.md`):
- `google-tag.js` en todas las páginas: GA4 + Google Ads con IDs de ejemplo; no carga nada hasta pegar los reales.
- Eventos `clic_whatsapp` y `envio_formulario` en `script.js`, sin enviar datos personales ni de salud.
- Página `/politica-de-privacidad/` enlazada desde el pie y el formulario (texto a revisar por la Dra.).
- Nueva guía `/amparo-cirugias/` (cirugías, prótesis, internación), enlazada desde el inicio, el pie y el sitemap (ahora 7 URLs).

Pendiente fuera del código:
- Crear GA4 y Google Ads, pegar los IDs en `google-tag.js`, marcar `clic_whatsapp` y `envio_formulario` como eventos clave e importarlos a Ads.
- Inspeccionar en Search Console la nueva URL `/amparo-cirugias/`.
- Crear propiedad de dominio en Google Search Console y verificarla con TXT en DNS. Alternativa: propiedad de prefijo URL con archivo de verificación.
- Enviar https://abogadacontador.com.ar/sitemap.xml e inspeccionar las seis URLs para solicitar indexación.
- Crear/verificar Google Business Profile con nombre real, domicilio, horarios y teléfono confirmados. Vincular su URL cuando exista.
- Medir PageSpeed móvil y Core Web Vitals. La API devolvió HTTP 429; no hay puntuación verificada.
- Revisar búsquedas, impresiones y consultas reales en Search Console para decidir qué guías útiles crear después.
- Actualizar la imagen social con el logo aprobado; no se considera un bloqueo de indexación.

No se garantiza posición ni fecha de indexación. No se agregaron reseñas, valoraciones, sedes o perfiles sociales inventados.
