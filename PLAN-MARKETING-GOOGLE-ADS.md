# Plan de marketing en Google — Abogada Contador

Guía para aprender y lanzar publicidad en Google para **abogadacontador.com.ar** (amparos de salud en Paraná y Entre Ríos). Escrita para alguien que empieza de cero: primero los conceptos, después qué hacer paso a paso.

> Nada de esto garantiza consultas ni posiciones. La publicidad se ajusta probando y midiendo.

---

## 1. Conceptos básicos (glosario)

| Término | Qué significa | Ejemplo en tu caso |
|---|---|---|
| **SEO** | Aparecer *gratis* en los resultados normales de Google. Lleva meses. | Que tu guía de PAMI aparezca al buscar "amparo PAMI Paraná". |
| **SEM / Google Ads** | Aparecer *pagando* arriba de todo, marcado como "Patrocinado". Es inmediato. | Tu anuncio sale apenas lo activás. |
| **Palabra clave** | La búsqueda que elegís para que se muestre tu anuncio. | `amparo de salud paraná` |
| **Término de búsqueda** | Lo que la persona *realmente* escribió. Puede diferir de tu palabra clave. | Escribió "abogada obra social me negó medicamento". |
| **Concordancia** | Qué tan parecida tiene que ser la búsqueda a tu palabra clave. | `[exacta]`, `"de frase"`, amplia (sin signos). |
| **Palabra negativa** | Búsquedas para las que **no** querés aparecer. Ahorra mucha plata. | `gratis`, `modelo de amparo`, `trabajo`. |
| **Impresión** | Una vez que tu anuncio se mostró. | — |
| **Clic** | Alguien tocó tu anuncio y entró a la web. Pagás por cada clic. | — |
| **CPC** (costo por clic) | Cuánto te cuesta, en promedio, cada clic. | — |
| **CTR** | % de personas que vieron el anuncio y lo tocaron. Más alto = anuncio más relevante. | 5 % = 5 de cada 100. |
| **Conversión** | La acción que te importa. **En tu web: tocar WhatsApp o enviar el formulario.** | — |
| **Costo por conversión** | Cuánto te costó cada consulta. **Es el número más importante.** | Gasto ÷ consultas. |
| **Nivel de calidad** | Nota de 1 a 10 que Google da a cada palabra clave según anuncio + página. Mejor nota = pagás menos. | Por eso cada tema tiene su propia página. |
| **Puja / estrategia de oferta** | Cómo decide Google cuánto pagar por cada clic. | "Maximizar clics" al principio. |
| **Recursos (ex extensiones)** | Datos extra debajo del anuncio: teléfono, dirección, enlaces. | Botón de llamada, enlace a "Amparo contra PAMI". |
| **Landing page** | La página a la que llega quien toca el anuncio. | `/amparo-pami/` |
| **GA4** | Google Analytics 4: mide qué pasa dentro de tu web. Gratis. | De dónde vienen las visitas, qué tocan. |

---

## 2. Objetivo y público

- **Objetivo**: conseguir consultas por WhatsApp de personas con una negativa o demora de cobertura de salud.
- **Quién busca**: pacientes y familiares, muchas veces con urgencia, casi siempre desde el **celular**.
- **Dónde**: provincia de Entre Ríos, con foco en Paraná y alrededores.
- **Cuándo**: tu web dice "lunes a domingo 9 a 18 h"; los anuncios pueden mostrarse todo el día, pero conviene ver en qué horarios llegan consultas y ajustar.

---

## 3. Antes de gastar un peso (checklist de preparación)

- [ ] **Google Business Profile** (la ficha de Google Maps) creada y verificada, con dirección, horario y teléfono reales. Se vincula con Ads para mostrar la ubicación.
- [ ] **Google Search Console** verificado y sitemap enviado (ver `SEO-LANZAMIENTO.md`).
- [ ] **Cuenta de Google Analytics 4** creada → copiar el ID que empieza con `G-`.
- [ ] **Cuenta de Google Ads** creada (en modo experto, *no* "modo inteligente") → copiar el ID que empieza con `AW-`.
- [ ] Pegar ambos IDs en las páginas de la web (ver sección 9).
- [ ] En GA4, marcar `clic_whatsapp` y `envio_formulario` como **eventos clave**, e importarlos en Google Ads como conversiones.
- [ ] **Verificación de anunciante**: Google la pide a todos los anunciantes (DNI/CUIT y datos del estudio). Hacerla apenas la solicite para que no se pausen los anuncios.
- [ ] Revisar que los textos cumplan las **normas de publicidad del Colegio de la Abogacía de Entre Ríos** (vos sabés mejor que nadie cuáles aplican).

---

## 4. Estructura de la campaña

**Una sola campaña de Búsqueda** (texto en Google). No usar al principio Performance Max, Display ni YouTube: gastan rápido y en tu rubro traen consultas de menor calidad.

Configuración:
- **Red**: solo Búsqueda de Google. *Destildar* "Red de Display" y "Socios de búsqueda" al principio.
- **Ubicación**: Entre Ríos. Opción "Presencia: personas que están o suelen estar en la ubicación".
- **Idioma**: español.
- **Dispositivos**: todos (se revisa después).

**Grupos de anuncios = una página cada uno**. Así el anuncio habla de lo mismo que la página y el Nivel de calidad sube.

| Grupo | Página de destino | Palabras clave de ejemplo |
|---|---|---|
| Genérico | `/` | `"abogado amparo salud"`, `[abogada amparo paraná]`, `"amparo de salud entre ríos"`, `"abogado obra social paraná"` |
| Medicamentos | `/amparo-medicamentos/` | `"amparo por medicamentos"`, `"obra social no cubre medicamento"`, `"prepaga niega medicamento"` |
| Discapacidad | `/amparo-discapacidad/` | `"amparo discapacidad"`, `"obra social no cubre terapia"`, `"cud cobertura obra social"` |
| PAMI | `/amparo-pami/` | `"amparo contra pami"`, `"pami no autoriza"`, `"abogado pami paraná"` |
| OSER | `/amparo-oser/` | `"amparo oser"`, `"amparo iosper"`, `"oser no cubre"` |
| Prepagas | `/amparo-prepagas/` | `"amparo contra prepaga"`, `"prepaga no autoriza cirugía"`, `"abogado prepaga paraná"` |
| Cirugías | `/amparo-cirugias/` | `"amparo por cirugía"`, `"obra social no autoriza cirugía"`, `"amparo prótesis"` |

Empezá con **concordancia de frase** (`"..."`) y **exacta** (`[...]`). La amplia trae búsquedas muy variadas y conviene dejarla para cuando ya haya datos.

### Palabras negativas (cargar desde el día 1, a nivel campaña)

`gratis`, `gratuito`, `modelo`, `escrito`, `formulario`, `pdf`, `word`, `ejemplo`, `plantilla`, `trabajo`, `empleo`, `sueldo`, `curso`, `carrera`, `facultad`, `tesis`, `monografía`, `jurisprudencia`, `fallo`, `wikipedia`, `amparo laboral`, `amparo sindical`, `defensoría`, `turnos`, `cartilla`, `farmacia`, `teléfono pami` (quien busca el teléfono de PAMI no busca abogada).

> Cada semana vas a sumar más mirando el informe de **Términos de búsqueda** (sección 7).

---

## 5. Anuncios modelo

Google usa "anuncios de búsqueda responsivos": cargás hasta **15 títulos (máx. 30 caracteres)** y **4 descripciones (máx. 90)** y Google los combina. Google te avisa si te pasás del largo.

**Títulos generales (sirven para todos los grupos):**
- Amparo de Salud en Paraná
- Abogada en Entre Ríos
- ¿Te Negaron la Cobertura?
- Consultá por WhatsApp
- Medida Cautelar Urgente
- Matrícula Provincial y Federal
- Atención en Toda la Provincia
- Dra. González Contador

**Títulos por grupo** (agregar 2–3 en cada uno):
- Amparo por Medicamentos · Amparo por Discapacidad · Amparo contra PAMI · Amparo contra OSER · Amparo contra Prepagas · Amparo por Cirugías

**Descripciones:**
- Si tu Obra Social o Prepaga negó o demora una cobertura, te asesoro. Escribime hoy.
- Atención personal en Paraná y toda Entre Ríos. Gran parte del trámite es a distancia.
- Presento amparos con pedido de medida cautelar cuando la situación es urgente.
- Contame tu caso por WhatsApp y te digo qué documentación necesitás.

**Recursos (agregar todos):**
- **Llamada**: tu número.
- **Ubicación**: se toma de Google Business Profile.
- **Enlaces de sitio**: Medicamentos, Discapacidad, PAMI, Prepagas (cada uno a su página).
- **Textos destacados**: "Atención los 7 días", "Toda Entre Ríos", "Justicia provincial y federal".

---

## 6. Reglas de Google que tenés que respetar

- **No prometer resultados** ("ganamos tu caso", "100 % garantizado"): Google lo trata como afirmación engañosa y además choca con la ética profesional.
- **No nombrar medicamentos de venta bajo receta en los anuncios** (ni marcas ni principios activos): Google restringe la publicidad de productos farmacéuticos. Hablá de "medicamentos", "tratamientos", "alto costo".
- **Nada de remarketing ni audiencias basadas en salud**: Google prohíbe mostrar anuncios a personas según condiciones de salud. No crees listas tipo "visitó la página de discapacidad" para perseguirlas con anuncios.
- **Nunca enviar datos de salud a Google Analytics**: la web solo envía *en qué página* se tocó WhatsApp, nunca el texto del mensaje ni datos del formulario. Mantenerlo así.
- **La página tiene que cumplir lo que dice el anuncio**: si el anuncio dice "cirugías", tiene que llevar a la página de cirugías.
- **Política de privacidad visible**: ya está en `/politica-de-privacidad/` y enlazada en el pie. Revisá el texto vos como abogada.

---

## 7. Presupuesto y estrategia de oferta

**Cómo calcular el monto inicial** (los costos en pesos cambian mucho, por eso no doy una cifra fija):
1. En Google Ads → Herramientas → **Planificador de palabras clave**, buscá tus palabras y mirá el "rango de oferta de la parte superior de la página".
2. Presupuesto diario sugerido para empezar: **CPC alto del rango × 10 clics por día**.
3. Mantenerlo **30 días sin tocar demasiado**: Google necesita ese tiempo para aprender.
4. Tené en cuenta que sobre lo gastado se **suman impuestos** en la factura.

**Estrategia de oferta por etapas:**
| Etapa | Cuándo | Estrategia |
|---|---|---|
| 1. Aprendizaje | Mes 1 | **Maximizar clics**, con un límite máximo de CPC (el valor alto del Planificador). |
| 2. Optimización | Cuando tengas ~15–30 conversiones en 30 días | **Maximizar conversiones**. |
| 3. Escala | Cuando el costo por consulta sea estable | **CPA objetivo** con el costo por consulta que te sirve. |

**¿Cuánto podés pagar por una consulta?** Pensalo así: si de cada 5 consultas 1 se convierte en cliente, y un caso te deja X de honorarios, podés pagar hasta X ÷ 5 por consulta y seguir ganando. Anotalo: es tu brújula.

---

## 8. Rutina de seguimiento

**Cada semana (15 minutos):**
1. **Términos de búsqueda**: Campañas → Estadísticas → Términos de búsqueda. Lo que no tiene que ver → agregar como **negativa**. Lo que sí tiene que ver y trae consultas → agregar como palabra clave.
2. Mirar **costo por conversión** por grupo de anuncios. El que gasta y no trae consultas: bajar su presupuesto o pausarlo.
3. Revisar que no haya anuncios **rechazados** (Google avisa con un ícono rojo).

**Cada mes:**
1. Comparar con el mes anterior: clics, CTR, consultas, costo por consulta.
2. Contar cuántas consultas reales de WhatsApp vinieron de Google (preguntá "¿cómo me encontraste?" o fijate si el mensaje llegó con el texto predeterminado de la página).
3. Probar 1 cambio a la vez (un título nuevo, un ajuste de horario) para saber qué funcionó.
4. Mirar en Search Console qué búsquedas traen visitas gratis: son ideas para nuevas guías.

**Planilla simple sugerida** (una fila por mes): gasto · clics · conversiones · consultas reales · clientes nuevos · costo por cliente.

---

## 9. Qué ya quedó preparado en la web

- **Etiqueta de Google** en todas las páginas. **Todo se configura en un solo archivo: `google-tag.js`**. Reemplazá `G-XXXXXXXXXX` y `AW-XXXXXXXXXX` por tus IDs y publicá. Mientras estén los de ejemplo, no se carga nada.
- **Medición de conversiones** (ya funciona en cuanto pegues los IDs):
  - `clic_whatsapp` → cada vez que alguien toca un botón de WhatsApp (dice desde qué página).
  - `envio_formulario` → cuando alguien completa el formulario y se abre WhatsApp.
- **Conversión de Google Ads**: lo más fácil es **importar** `clic_whatsapp` desde GA4 a Google Ads (Objetivos → Conversiones → Nueva → Importar → Google Analytics 4). Si en cambio creás la conversión directamente en Ads, te da una etiqueta tipo `AW-123456789/AbC-dEfGh`: la parte después de la barra va en `ADS_ETIQUETA_CONVERSION` dentro de `google-tag.js`. Usá una sola de las dos formas para no contar doble.
- **Política de privacidad** en `/politica-de-privacidad/`.
- **Nueva página de cirugías, prótesis e internación** en `/amparo-cirugias/`, lista para su propio grupo de anuncios.

---

## 10. Hoja de ruta

| Semana | Qué hacer |
|---|---|
| 1 | Business Profile, Search Console, GA4 y cuenta de Ads. Pegar IDs. Verificación de anunciante. |
| 2 | Crear la campaña con 3 grupos para empezar (Genérico, Medicamentos, Prepagas). Cargar negativas. Lanzar. |
| 3 | Primera revisión de términos de búsqueda. Sumar negativas. Comprobar que llegan conversiones. |
| 4 | Agregar grupos PAMI, OSER, Discapacidad y Cirugías. |
| 5–8 | Revisión semanal. Pasar a "Maximizar conversiones" si hay datos suficientes. |
| Mes 3 | Balance: costo por cliente. Decidir si subir, mantener o bajar presupuesto. |

### Canales complementarios (gratis)
- **Google Business Profile**: publicar novedades, cargar fotos reales del estudio, pedir **reseñas reales** a clientes satisfechos (nunca inventadas ni pagadas).
- **Nuevas guías** según lo que muestre Search Console (ej. tratamientos de fertilidad, internación domiciliaria).
- **WhatsApp Business**: respuestas rápidas y horario configurado, porque es donde llegan todas las consultas.
