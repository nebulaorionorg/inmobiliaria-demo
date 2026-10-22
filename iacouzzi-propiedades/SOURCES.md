# Iacouzzi Propiedades: fuentes de la demo

Consulta: **2026-10-22**. Seleccion de **3 inmuebles distintos** del catalogo publico: una casa, un departamento y un terreno, todos en venta. Propuesta independiente de Nebula. Sin vinculo comercial ni autorizacion de esta inmobiliaria.

## Fuentes Publicas

- [Inicio e informacion institucional](https://www.iacouzzipropiedades.com.ar/).
- [Catalogo publico de venta](https://www.iacouzzipropiedades.com.ar/estado/en-venta/).
- [Contacto oficial](https://www.iacouzzipropiedades.com.ar/contacto/).

El pie publico atribuye el desarrollo a [CRM Inmobiliario - 2clics](https://www.2clics.app/). No acredita acceso al CRM privado ni una integracion implementada en esta demo. Las fichas son accesibles sin iniciar sesion. No se accedio a administracion, cuentas ni formularios de acceso.

## Tres Fichas

| Referencia y fuente exacta | Precio publicado | Datos utilizados | Fotografias originales |
| --- | --- | --- | --- |
| [IAC-223834: casa en Loma Verde](https://www.iacouzzipropiedades.com.ar/propiedad/223834_casa-en-venta-c-cochera-en-loma-verde/) | USD 115.000 | Casa a estrenar; 2 dormitorios; 1 bano; 73,08 m2 cubiertos, 19,83 semicubiertos y 92,91 totales; terreno 328 m2. Publicada apta credito. | [Foto 1](https://storage.googleapis.com/portales-prod-images/3096/property-images/2026/7/e3c3f4b7-e2dd-4a9a-ad19-81797aca00af.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/3096/property-images/2026/7/e0d9c1fc-fded-4ac7-9c8d-fc4e6dda37b1.jpeg) |
| [IAC-236199: departamento en Escobar](https://www.iacouzzipropiedades.com.ar/propiedad/236199_departamento-en-venta-2-ambientes-en-belen-de-escobar/) | USD 65.000 | 2 ambientes; 1 dormitorio; 1 bano; 50 m2 cubiertos y 4 descubiertos, 54 totales. `area: 50`; terreno no informado (`null`). | [Foto 1](https://storage.googleapis.com/portales-prod-images/3096/property-images/2024/1/25a3836e-6bfd-4385-b23c-53e67f3edc08.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/3096/property-images/2024/1/721b666c-5b85-4589-8445-edf5d4f30886.jpeg) |
| [IAC-236300: terreno en Los Arenales](https://www.iacouzzipropiedades.com.ar/propiedad/236300_terreno-lote-en-venta-de-289m2-ubicado-en-ingeniero-maschwitz/) | USD 53.000 | Lote de 289 m2; `landArea: 289`, construido `null`, dormitorios no informados (`null`), bano 0 explicito en Detalles. | [Foto 1](https://storage.googleapis.com/portales-prod-images/3096/property-images/2026/10/cb0d3043-fa7f-4ec5-9ddc-3a33eceb5d75.jpeg), [foto 2](https://storage.googleapis.com/portales-prod-images/3096/property-images/2026/10/62c222d2-5865-4c53-b0d3-6abfd2fe41d5.jpeg) |

## Identidad y Contacto

| Dato | Valor y evidencia |
| --- | --- |
| Marca | Iacouzzi Propiedades, identificada en inicio, logo y fichas. |
| Logo | [JPEG oficial del encabezado](https://storage.googleapis.com/portales-prod-images/3096/web-images/2024/5/65bd54ca-f571-492a-a094-ccac62e2a097.jpeg), verificado visualmente: tipografia blanca sobre azul oscuro. Se enlaza sin redibujar. |
| Paleta demo | Azul `#1b2344`, secundario `#35446d`, tinta `#171c2b`. Adaptacion de la identidad observada, no manual oficial. Primario con contraste blanco >= 4,5:1. |
| Telefono principal | `03484420778` en Contacto y ficha de Loma Verde; presentado `0348 442-0778` y normalizado `+543484420778`. |
| Segundo telefono publicado | `03484237312` en Contacto y `3484237312` en otras fichas. No se transforma en enlace WhatsApp por inferencia. |
| Email | `info@iacouzzipropiedades.com.ar`, en Contacto, encabezado y fichas. |
| Oficina | Colon 786, Belen de Escobar, en Contacto. Se normalizan tildes para la presentacion, no la numeracion. |
| Redes | [Instagram](https://www.instagram.com/iacouzzi_propiedades/) y [Facebook](https://www.facebook.com/profile.php?id=100089670587414), destinos publicados en Contacto; sin verificacion autenticada de titularidad. |
| WhatsApp y matricula | Strings vacios: no se valido destino directo de WhatsApp ni matricula profesional. El nombre del agente no se convierte en matricula ni razon social. |

## Criterios y Limites

- Las tres fichas indican **En venta**; no se observo marca de reservado o vendido en estos inmuebles al consultar. Esto no certifica disponibilidad actual.
- Cada inmueble ocupa una sola ficha en esta seleccion. El departamento tambien aparece ofrecido en alquiler en una publicacion relacionada: no se duplica ese inmueble como una cuarta opcion ni como otro hero.
- `area` representa superficie construida, no superficie descubierta: casa 92,91 m2 totales publicados (cubiertos y semicubiertos), departamento 50 m2 cubiertos. Los 54 m2 totales del departamento incluyen 4 descubiertos y se explican en la descripcion. No se asigna ese balcon como terreno.
- Los Arenales: los 289 m2 corresponden al lote segun titulo, descripcion y superficie total. No se usan los otros tamanos de lotes que menciona el relato ni se calcula el area multiplicando frente y fondo. Las fotos muestran el entorno publicado del barrio; no acreditan limites de una unidad especifica, lo que se aclara en la demo.
- `credit: true` solo en la casa de Loma Verde por mencion explicita en descripcion y caracteristicas. Los otros `false` significan que no se presenta esa condicion, no que se haya verificado una prohibicion.
- Se omiten expensas: el departamento presenta importes distintos en relato y Detalles. No se elige ni se actualiza uno por inferencia. La distribucion de un dormitorio y un bano sigue los campos de Detalles, sin sumar un toilette adicional mencionado en el relato.
- Dos URLs de la galeria original por inmueble, sin fotos de terceros, generacion de imagenes ni assets locales nuevos. No se identifico una indicacion de render en las seis imagenes seleccionadas; no se afirma inspeccion presencial ni estado de obra verificado.
- Precios en USD, sin conversiones ni estimaciones. Operaciones `Venta`, `Alquiler` en ese orden por contrato del motor; las tres fichas de esta muestra son ventas.
- Textos institucionales propios para esta propuesta, basados en los servicios que presenta el inicio. No se inventan trayectoria cuantificada, premios, matriculas ni volumen de operaciones.
- Las 175 etiquetas conservan el esquema completo de referencia. Tres mensajes genericos y toda la actividad del panel son **simulados**, no consultas ni estadisticas de Iacouzzi. Estados y favoritos son locales, no operaciones sobre un CRM.
- No se enviaron consultas, formularios, emails ni mensajes, ni se realizaron llamadas. Solo se consultaron recursos publicos y se probaron rutas locales de demostracion.
- Limite de cambios de esta unidad: `iacouzzi-propiedades/config.js`, `iacouzzi-propiedades/index.html` y este documento. Motor, estilos y comportamiento compartido del aviso/panel quedan fuera de esta unidad.

## Verificacion Local

- `node --check iacouzzi-propiedades/config.js`: correcto.
- Validacion ejecutada con Node: esquema completo de referencia, 175 etiquetas, 3 IDs ASCII unicos, tipos numericos/null, operaciones en orden, referencias de hero y zonas, aviso exacto y 3 mensajes simulados. Sin residuos de Moos ni Tokko.
- Las 3 URLs `source` devolvieron HTTP 200 y contenian sus referencias y las 2 URLs de imagen utilizadas por ficha. Las 6 imagenes se decodificaron correctamente en Edge; el logo original (1280 x 1280) y las fotos fueron revisados visualmente.
- Contraste WCAG calculado del primario `#1b2344` frente a blanco: **15,32:1**.
- Edge headless a 1440 x 1000 y 390 x 844: inicio, catalogo de 3 tarjetas, las 3 fichas, galerias, nosotros y contacto; aviso exacto visible antes del header, logo cargado, enlaces de fuente y contactos correctos. Sin errores JavaScript ni desbordamiento horizontal en inicio y fichas.
- No se enviaron formularios ni se activaron enlaces de contacto. Cero solicitudes de escritura observadas. Scripts de comprobacion y capturas solo en el directorio temporal, no en el proyecto.
