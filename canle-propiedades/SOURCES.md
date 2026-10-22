# Canle Propiedades: fuentes de la demo

Consulta: **2026-10-22**. Seleccion de **3 publicaciones distintas**, todas en venta, obtenidas del sitio publico de Canle. Propuesta independiente de Nebula. Sin vinculo comercial ni autorizacion de esta inmobiliaria.

## Fuentes publicas

- [Inicio y destacados](https://www.canlepropiedades.com.ar/).
- [Contacto oficial](https://www.canlepropiedades.com.ar/contacto/).
- [Tasaciones](https://www.canlepropiedades.com.ar/tasaciones/).

El pie publico atribuye el desarrollo a [CRM Inmobiliario - 2clics](https://www.2clics.app/). Esa atribucion no acredita acceso al CRM privado, una API disponible ni una integracion implementada. Esta demo usa una seleccion estatica de fichas publicas; no se accedio a cuentas, administracion ni formularios de acceso.

## Tres Fichas

| Referencia y fuente exacta | Precio publicado | Datos utilizados | Fotografias originales |
| --- | --- | --- | --- |
| [CAN-236934: Las Brisas, Zelaya](https://www.canlepropiedades.com.ar/propiedad/236934_casa-en-venta-en-las-brisas-country-club-zelaya/) | USD 140.000 | Casa; 3 dormitorios; 2 banos; 123 m2 cubiertos y totales; terreno 614 m2. Publicada apta credito. | [Foto 1](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/10/1fa46ad2-222e-4119-81ed-af54c194e57d_wm.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/10/0bb3dd04-162b-4a9b-a7bb-1fb37dc757ff_wm.jpeg) |
| [CAN-233373: Santa Isabel II](https://www.canlepropiedades.com.ar/propiedad/233373_casa-en-venta-santa-isabel-ii/) | USD 145.000 | Casa; 3 dormitorios; 3 banos en Detalles; 146 m2 cubiertos y totales; terreno 613 m2. No se marca apta credito. | [Foto 1](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/9/4c3e8d4b-899c-4a3b-ac50-2db1e65caaa3_wm.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/9/d021f07b-bd50-44e4-84a9-15488e83c20b_wm.jpeg) |
| [CAN-232607: El Cazador](https://www.canlepropiedades.com.ar/propiedad/232607_casa-en-venta-en-el-cazador/) | USD 270.000 | Casa a estrenar; 4 dormitorios y 3 banos en Detalles; 142 m2 cubiertos, 38 semicubiertos, 180 totales; terreno 986 m2. Publicada apta credito. | [Foto 1](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/9/4feae465-088d-4a4a-83fb-79e54196ad4b_wm.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/4560/property-images/2026/10/17a6eb40-8eb6-4b54-ab87-4c80a9447e31_wm.jpeg) |

## Identidad y Contacto

| Dato | Valor y evidencia |
| --- | --- |
| Marca | Canle Propiedades, identificada en el inicio y las tres fichas. |
| Logo | [Imagen oficial del encabezado](https://storage.googleapis.com/portales-prod-images/4560/web-images/2024/9/1919fc40-e5ce-40ff-a15a-0ded25481940.png), verificada visualmente: marca roja Canle sobre fondo blanco/transparente. Se enlaza sin redibujar. |
| Paleta demo | Rojo `#c51c29`, secundario `#941821`, tinta `#28191b`. Adaptacion de la identidad observada, no manual de marca oficial. Primario oscurecido para contraste con blanco >= 4,5:1. |
| Telefono | `11 6753-3200`, en Contacto y pie; `1167533200` en las fichas. Enlace normalizado `+541167533200`, sin agregar indicador de celular. |
| Email | `mcanlepropiedades@gmail.com`, en Contacto y fichas. |
| Oficina | Bernardo de Irigoyen 1320, Escobar, en Contacto. |
| Redes | [Instagram](https://www.instagram.com/canlepropiedades) y [Facebook](https://www.facebook.com/canleinmobiliaria), destinos publicados en Contacto; no se verifico titularidad por autenticacion. |
| WhatsApp y matricula | Strings vacios: no se valido un destino directo de WhatsApp ni una matricula profesional. No se deducen del telefono o del nombre de la agente. |

## Criterios y Limites

- Las tres fichas indican **En venta**; no se observo una marca de reservado o vendido para estos inmuebles al consultar. Esto no certifica disponibilidad actual.
- `area` reproduce el total construido publicado: 123, 146 y 180 m2. `landArea` reproduce el terreno publicado. No se estiman superficies ni se suman valores para completar datos ausentes.
- Santa Isabel II: se conservan los 3 banos de Detalles, pero la descripcion menciona dos banos completos, un toilette y otro toilette para piscina. La demo advierte esta diferencia. Tambien conserva la condicion de cesion de boleto y falta de escrituracion actual indicada en la fuente.
- El Cazador: se conservan los 4 dormitorios de Detalles; el relato describe tres con posibilidad de dividir un espacio. La demo pide confirmar la distribucion, sin inventar un cuarto dormitorio construido.
- `credit: true` solo en Las Brisas y El Cazador por mencion explicita; no constituye aprobacion bancaria. `false` en Santa Isabel no afirma imposibilidad crediticia.
- Canle advierte expresamente en las tres fichas que **las fotos pueden estar modificadas por IA**, son ilustrativas y no contractuales. No se afirma que sean fotografias sin editar ni se presenta un render como obra terminada verificada. Se conserva la advertencia en descripciones, nota de zonas y disclaimer.
- Se usan 2 URLs de la galeria de cada ficha, con su marca de agua original. No hay fotos de otras inmobiliarias, stock ni assets locales nuevos.
- Precios en USD, sin conversiones, estimaciones ni expensas copiadas. El filtro conserva `Venta` y `Alquiler` en ese orden por contrato del motor; esta seleccion solo tiene ventas, no alquileres inventados.
- Textos de presentacion redactados para la demo a partir del alcance publico del sitio. No se inventan antiguedad de la empresa, premios, cifras comerciales ni matriculas.
- Las 175 etiquetas mantienen el esquema completo de referencia. Tres mensajes genericos y toda la actividad del panel son **simulados**, no contactos reales ni estadisticas de Canle. Estados y favoritos son locales, no operaciones sobre un CRM.
- No se enviaron consultas, emails, formularios ni mensajes, ni se realizaron llamadas. Solo se consultaron recursos publicos y se probaron rutas locales de demostracion.
- Limite de cambios de esta unidad: `canle-propiedades/config.js`, `canle-propiedades/index.html` y este documento. El motor, el estilo y el comportamiento compartido del aviso/panel son externos a esta unidad.

## Verificacion Local

- `node --check canle-propiedades/config.js`: correcto.
- Validacion ejecutada con Node: esquema completo de referencia, 175 etiquetas, 3 IDs ASCII unicos, tipos numericos/null, operaciones en orden, referencias de hero y zonas, aviso exacto y 3 mensajes simulados. Sin residuos de Moos ni Tokko.
- Las 3 URLs `source` devolvieron HTTP 200 y contenian sus referencias y las 2 URLs de imagen utilizadas por ficha. Las 6 imagenes se decodificaron correctamente en Edge; el logo original (1024 x 499) y las fotos fueron revisados visualmente.
- Contraste WCAG calculado del primario `#c51c29` frente a blanco: **5,88:1**.
- Edge headless a 1440 x 1000 y 390 x 844: inicio, catalogo de 3 tarjetas, las 3 fichas, galerias, nosotros y contacto; aviso exacto visible antes del header, logo cargado, enlaces de fuente y contactos correctos. Sin errores JavaScript ni desbordamiento horizontal en inicio y fichas.
- No se enviaron formularios ni se activaron enlaces de contacto. Cero solicitudes de escritura observadas. Scripts de comprobacion y capturas solo en el directorio temporal, no en el proyecto.
