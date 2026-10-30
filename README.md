# Web Abogada Contador — Amparos de salud (Entre Ríos)

Página web de una sola página, hecha con HTML, CSS y JavaScript simples. No necesita instalar nada.

## Archivos
- `index.html` — el contenido de la página (textos, secciones).
- `styles.css` — colores, tipografías y diseño.
- `script.js` — menú del celular y envío del formulario por WhatsApp.

## Cómo verla
Hacé doble clic en `index.html` y se abre en tu navegador.

## Qué tenés que completar
1. **Número de WhatsApp**: en `script.js`, primera línea de configuración:
   `const WHATSAPP_NUMERO = "549XXXXXXXXXX";`
   Formato: 549 + código de área sin 0 + número sin 15. Ej.: Paraná (0343) 15 123-4567 → `5493431234567`.
2. **Datos de contacto**: en `index.html` buscá `[COMPLETAR` y reemplazá teléfono, email, dirección, tu nombre y matrícula.
3. **Tu foto** (opcional): guardá una foto como `foto.jpg` en esta carpeta y, en la sección "Sobre mí" de `index.html`, reemplazá `<span>AC</span>` por `<img src="foto.jpg" alt="Dra. Contador">`.

## Cambiar colores
En `styles.css`, al principio, están las variables `--verde`, `--verde-oscuro` y `--verde-claro`.

## Publicarla gratis en internet
- **Netlify Drop**: entrá a https://app.netlify.com/drop y arrastrá esta carpeta. Te da una dirección web al instante.
- **GitHub Pages**: subí los archivos a un repositorio y activá Pages en la configuración.
- Después podés comprar un dominio propio (por ejemplo en nic.ar, `abogadacontador.com.ar`) y conectarlo.

## Recomendaciones legales
- Revisá que la publicidad cumpla con las normas de ética del Colegio de la Abogacía de Entre Ríos.
- Si más adelante agregás testimonios, que sean reales y con autorización de cada cliente.
