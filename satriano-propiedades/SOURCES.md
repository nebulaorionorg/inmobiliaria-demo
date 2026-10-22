# Satriano Propiedades: tres publicaciones oficiales

Consulta: **2026-10-22**. Propuesta independiente de Nebula para Satriano Propiedades, Belen de Escobar. Se seleccionan **3 inmuebles distintos**, no doce ni todo el catalogo. No se contacta a la inmobiliaria, no se abren enlaces de WhatsApp y no se envian emails ni formularios. Sin backend, autenticacion, CRM ni actualizacion automatica.

> Propuesta independiente de Nebula. Sin vinculo comercial ni autorizacion de esta inmobiliaria.

La version con tildes exactas exigida para este aviso se conserva en `meta.proposalNotice` y en el `aside#proposal-notice` del HTML, despues del skip link y antes del header.

## Fuentes institucionales

| Fuente publica | Datos observados y uso |
| --- | --- |
| https://satriano.com.ar/ | Marca Satriano Propiedades; compra, alquiler, tasaciones y asesoramiento; oficina Mitre 399, Belen de Escobar; enlaces de redes y logo. Portada y fichas consultadas con webfetch y Microsoft Edge mediante Playwright, sin excepciones TLS. |
| https://satriano.com.ar/contacto/ | Oficina Mitre 399; telefonos (0348) 4426406 y (0348) 4425893; email info@satriano.com.ar; WhatsApp expresamente rotulado 011-15-5248-5030. Solo lectura de la pagina, sin completar su formulario. |
| https://satriano.com.ar/wp-content/uploads/2025/12/cropped-logo1-1.png | Logo publico del header, 200 x 66 px; imagen original remota, no redibujada. |
| https://www.instagram.com/satriano.propiedades/ | URL enlazada desde el sitio oficial; no se requiere iniciar sesion ni consultar publicaciones sociales. |
| https://www.facebook.com/satriano.propiedades.escobar | URL enlazada desde el sitio oficial; no se consulta contenido privado. |

## Marca y contactos

| Campo | Valor de la demo | Criterio |
| --- | --- | --- |
| Nombre / iniciales | Satriano Propiedades / ST | Nombre oficial; ST es abreviacion visual de la demo, no marca oficial adicional. |
| Descriptor / region | PROPIEDADES EN ESCOBAR / Buenos Aires, Argentina | Adaptacion editorial de la ubicacion publicada; sin codigo postal inferido. |
| Telefono / href | (0348) 442-6406 / +543484426406 | Primer fijo publicado, normalizado para `tel:`. El segundo fijo no se mezcla en un enlace unico. |
| WhatsApp / display | 5491152485030 / +54 9 11 5248-5030 | Normalizacion del numero expresamente identificado como WhatsApp en Contacto; no deducido de un fijo. No se abre wa.link ni wa.me. |
| Email | info@satriano.com.ar | Coincide con el pie institucional. El enlace del cuerpo de Contacto esta mal formado, por lo que se usa el texto y el `mailto:` del pie. |
| Direccion | Mitre 399, Belen de Escobar | Publicada en Contacto y pie. |
| Matricula | Cadena vacia | No verificada; no se inventa responsable ni colegio. |
| Primary / secondary / ink | #046d1e / #075b24 / #152b20 | Identidad verde adaptada. Edge observa #1baf37 en el boton Buscar y enlaces y #046d1e en otros elementos del sitio. Se elige el verde oscuro para texto blanco legible, no se afirma que exista un manual de marca. |
| Copyright | Propuesta independiente de Nebula. Marca y materiales pertenecen a sus respectivos titulares. | No se copia el copyright 2025 del sitio ni el del cliente de referencia. |

## Fichas y valores

Los IDs ASCII son claves internas de esta demo. `reference` conserva una referencia de ubicacion tomada del titulo oficial, no un codigo de corredor inventado. Todas tienen `featured=true` y `credit=false`; esto ultimo significa aptitud crediticia no verificada, no rechazo bancario.

| ID / referencia | Ficha oficial completa | Tipo / operacion / precio | Dormitorios / banos / superficies | Caracteristicas fieles y salvedades |
| --- | --- | --- | --- | --- |
| sat-rivadavia-400-1 / Rivadavia 400 1 grado | https://satriano.com.ar/listing/rivadavia-400-1-departamento-departamento-de-tres-ambientes-centrico-alquiler/ | Departamento / Alquiler / ARS 500000 | 2 / 1 / area=null, landArea=null | La descripcion informa living comedor, cocina a gas, bano y balcon terraza en PB; dos dormitorios con placard en PA; agua corriente y cloacas. El titulo dice tres ambientes, pero el campo tecnico dice 2: no se usa este campo como dormitorios. Publica 42 m2 cubiertos y 51 m2 como descubiertos, sin total construido claro: no se equiparan a total ni terreno, no se suman. |
| sat-25-de-mayo-800 / 25 De Mayo 800 | https://satriano.com.ar/listing/25-de-mayo-800-local-excelente-local-amplio-sobre-la-av-25-de-mayo/ | Local / Alquiler / ARS 3500000 | null / 1 / area=null, landArea=null | Avenida 25 de Mayo 800, Escobar; oficina, entrepiso lateral, frente vidriado, cortina automatizada, agua y electricidad. Descripcion: salon de 187 m2. Campos tecnicos: 233 m2 cubiertos y otros 233 m2 descubiertos. No se interpreta como 466 m2 ni como terreno de 233 m2; quedan los valores originales explicados en descripcion y ambos campos numericos null. Bano y antebano no se convierten en dos banos. |
| sat-da-vinci / Da Vinci | https://satriano.com.ar/listing/da-vinci-terreno-terreno-en-venta/ | Terreno / Venta / USD 55000 | null / null / area=null, landArea=507 | Calle Da Vinci, sin altura publicada. La descripcion identifica expresamente terreno de 507 m2 y medidas 12,67 x 40 m; se usa la superficie declarada, no una recalculada. Alambrado con puerta y gas natural pago; agua, electricidad y pavimento figuran en servicios. No se afirma conexion efectiva, edificabilidad, dominio ni entrega. |

Las tres fichas muestran categoria Venta o Alquiler y precio, sin texto visible de reservada, vendida o alquilada. Su presencia online no confirma disponibilidad. En particular, el terreno no recibe un estado comercial o juridico inferido a partir de las fotos. Las fichas muestran fecha de alta 14/10/2026, que no se convierte en fecha de actualizacion o verificacion.

## Fotografias propias de cada ficha

Cada URL se extrajo de la galeria de su propia ficha. Son enlaces exactos, sin construir nombres por patron. Se conservan remotas: **9 fotografias, 3 por inmueble**, sin descargas ni carpetas de assets nuevas. No se reutilizan entre inmuebles. Las tres portadas inspeccionadas visualmente muestran fotografias del inmueble, no renders; las bandas blancas originales forman parte de los archivos y no se retocan. No se certifica fecha, autoria ni estado actual del inmueble por una imagen.

| Propiedad | URL exacta de imagen |
| --- | --- |
| Rivadavia, portada | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6aaab03c0a329-1.jpg |
| Rivadavia, imagen 2 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6aaab03c17d4e-1.jpg |
| Rivadavia, imagen 3 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6aaab03cbf779-1.jpg |
| Local, portada | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac94216638d5.jpg |
| Local, imagen 2 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac9421763a38.jpg |
| Local, imagen 3 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac942168f100.jpg |
| Terreno, portada | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac7a2085e918-1.jpg |
| Terreno, imagen 2 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac7a208a84a8-1.jpg |
| Terreno, imagen 3 | https://satriano.com.ar/wp-content/uploads/2026/10/extra_large_6ac7a2091d81a-1.jpg |

`home.heroIds` contiene exactamente esos tres IDs. La unica zona es Belen de Escobar y utiliza la foto del departamento de Rivadavia: el texto advierte que no es una vista general de la ciudad. No se inventan fotos de barrios ni cobertura adicional. Las imagenes remotas pueden dejar de estar disponibles o cambiar en origen.

## Alcance e integracion

Se conserva el esquema completo de `cristian-moos/config.js`, incluidas las 175 etiquetas, sustituyendo identidad, contactos, region, textos institucionales y mensajes. `config.js` contiene exclusivamente `window.SITE_CONFIG =` y JSON, sin logica. Los tipos corresponden a los tres inmuebles y las operaciones son Venta y Alquiler. Los tres mensajes genericos y la actividad del panel son simulados, no datos comerciales de Satriano.

El HTML conserva montajes y referencias `config.js`, `../app.js` y `../styles.css`; agrega el aviso independiente requerido. Estilos del aviso, ocultacion del acceso al panel e integracion en directorio corresponden al principal. No se editan motor, estilos, directorio, tests ni documentacion compartida. La presencia de enlaces o formulario en el motor no supone que se hayan utilizado.

La unidad completa se limita a `satriano-propiedades/config.js`, `satriano-propiedades/index.html` y este documento; puede retirarse sin tocar archivos compartidos. No se realiza commit ni push.

## Verificacion realizada

- `node --check satriano-propiedades/config.js`: correcto, codigo de salida 0. JSON interno analizado ademas con `JSON.parse` y evaluado en VM como `window.SITE_CONFIG`.
- Comparacion recursiva con el esquema completo de referencia: todas las claves conservadas, 175 etiquetas, tres mensajes simulados, IDs unicos y ASCII, tipos/operaciones validos, numeros positivos o null, hero y zonas referidos a inmuebles existentes. Sin datos de marca, telefonos, mensajes, ubicacion ni URLs del cliente de referencia.
- Contraste blanco sobre primary `#046d1e`: **6,54:1**, superior a 4,5:1. El verde mas claro del sitio no se usa como fondo primario con texto blanco.
- Referencias locales existentes; orden de scripts con `defer`, nodos de montaje, aviso exacto, `role=note` y posicion del aviso comprobados en el DOM de Edge.
- Las tres fichas originales se volvieron a abrir en Edge: cada una enlaza las tres URLs que tiene asignadas en la demo. No se encontraron rotulos visibles de reservada, vendida o alquilada. Verificacion documental, no confirmacion comercial.
- **9/9 fotos y 1/1 logo** cargan y decodifican desde el origen de la demo local en Edge, sin excepciones TLS. Cada JPEG mide 1920 x 1080 px; el logo 200 x 66 px. Sin fallback ocultando errores de carga.
- Prueba mediante servidor HTTP efimero, sin archivos de servidor en el proyecto: inicio, catalogo, las tres fichas, nosotros, contacto, panel y mensajes a **1440 y 390 px**. Todas renderizan sin errores JavaScript ni desborde horizontal. Filtro Venta devuelve 1; Alquiler, 2. Galeria abre correctamente.
- No se completa ni envia ningun formulario, no se abren enlaces telefonicos o de WhatsApp, no se prepara ni envia correo. No se crean tests en el repositorio ni se modifican archivos compartidos.
