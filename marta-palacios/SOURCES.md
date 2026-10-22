# Marta Palacios Propiedades: fuentes de la propuesta

Consulta: **2026-10-22**. Propuesta independiente de Nebula. Sin vínculo comercial ni autorización de esta inmobiliaria.

Demo estática de **3 propiedades distintas**, no catálogo completo, backend ni CRM. Los avisos siguen accesibles públicamente; su antigüedad no permite asegurar disponibilidad actual. No se enviaron formularios, emails ni mensajes de WhatsApp. No se consultaron estados comerciales privados.

## Contactos e identidad

| Dato | Valor utilizado | Fuente exacta |
| --- | --- | --- |
| Marca | Marta Palacios Propiedades | [Inicio](https://palaciosmartaprop.com.ar/) |
| Oficina | Av. San Martín 519, Belén de Escobar | [Inicio, texto institucional y pie](https://palaciosmartaprop.com.ar/) |
| Teléfono principal | 348 435-9002; enlace normalizado `+543484359002` | [Inicio](https://palaciosmartaprop.com.ar/) y [ficha de Coprovi, bloque de contacto](https://palaciosmartaprop.com.ar/properties/hermosa-casa-en-coprovi-apta-credito-hipotecario/) |
| Otro teléfono público | 348 467-7897; documentado, no utilizado como principal | [Pie del inicio](https://palaciosmartaprop.com.ar/) |
| Email | info@palaciosmartaprop.com.ar | [Inicio](https://palaciosmartaprop.com.ar/) y las tres fichas |
| WhatsApp | `''` en número y presentación, sin enlace oficial verificable | No se deduce WhatsApp de un teléfono ni de imágenes llamadas WhatsApp |
| Matrícula | `''`, no comprobada | No se inventa un número profesional a partir del nombre |
| Instagram y Facebook | `''`, sin perfiles oficiales comprobados | El inicio enlaza `facebook.com/codefactory47/` y enlaces genéricos de Twitter, que se excluyen por ser de plantilla/ajenos |
| Logo original | PNG remoto `Logo3.png`, sin redibujar | [Archivo oficial](https://palaciosmartaprop.com.ar/wp-content/uploads/2021/12/Logo3.png) |
| Paleta | Primary `#76501d`, secondary `#f3bc65`, ink `#303c40` | [Inicio oficial](https://palaciosmartaprop.com.ar/): acento ocre `rgb(243, 188, 101)` y logo gris. Primary es una adaptación oscurecida para legibilidad, no un código oficial atribuido a la marca. Primary sobre blanco: **7,15:1** |
| Presentación institucional | Creación en 2004 y actividad inmobiliaria en Belén de Escobar | [Texto institucional del inicio](https://palaciosmartaprop.com.ar/) |

## Tres fichas seleccionadas

Todas figuran como **Venta**, tipo **Casa**, con moneda expresamente indicada como **DOLARES**. No se seleccionaron avisos identificados como vendidos o reservados ni proyectos con renders. `featured: true` significa destacada en esta selección independiente, no una prioridad comercial privada.

| ID interno de demo | Ficha original y precio publicado | Datos trasladados y excepciones |
| --- | --- | --- |
| `mp-lauria-9-julio` | [Casa en Lauria y 9 de Julio](https://palaciosmartaprop.com.ar/properties/hermosa-casa-en-venta-en-calle-lauria-y-9-de-julio/), **USD 125.000** | Escobar; 4 ambientes; la ficha enumera cocina, comedor, living, galería, garaje semicubierto, parrilla y patio semicubierto. Dormitorios, baños, superficie construida y lote en `null`: no se deducen de ambientes ni de fotos. Dirección según título, sin atribuir la altura mostrada por Street View. |
| `mp-coprovi` | [Casa en Coprovi apta crédito hipotecario](https://palaciosmartaprop.com.ar/properties/hermosa-casa-en-coprovi-apta-credito-hipotecario/), **USD 67.000** | Escobar; 3 ambientes y 1 garaje/entrada para auto. Cocina, comedor y enrejado enumerados. `credit: true` respaldado por título y descripción «APTA HIPOTECARIO». Sujeto a documentación y aprobación bancaria, no garantía de financiación. Dormitorios, baños y ambas superficies en `null`. No hay calle/altura publicadas, se utiliza Coprovi. |
| `mp-matheu-reina-elena` | [Casa en Matheu Reina Elena](https://palaciosmartaprop.com.ar/properties/casa-en-venta-en-matheu-reina-elena/), **USD 61.000** | Matheu; lote 686 m²; 4 ambientes, 3 dormitorios y 1 baño con antebaño; comedor, cocina separada, galería y espacio libre. `area: null`, superficie construida no informada. «Reina Elena» procede del título; no se inventa altura de calle. |

`reference: ''` en las tres fichas porque no se observó un código comercial público. Los IDs ASCII de la demo son identificadores técnicos propios, no referencias atribuidas a la inmobiliaria. `credit: false` en Lauria y Matheu indica que no se comprobó una mención de aptitud crediticia, no una inelegibilidad comprobada.

## Fotografías exactas

Se utilizan **5 fotos**, entre 1 y 3 por inmueble, sin repetir fotografías como si fueran tomas diferentes. Las fotos de otros avisos del bloque «Propiedades similares» se excluyeron.

| Propiedad | Orden | URL exacta y procedencia |
| --- | --- | --- |
| Lauria y 9 de Julio | 1 | https://palaciosmartaprop.com.ar/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-16-at-23.41.51-1-1170x600-c-center.jpeg ; imagen principal de su ficha |
| Coprovi | 1 | https://palaciosmartaprop.com.ar/wp-content/uploads/2025/07/WhatsApp-Image-2026-10-16-at-4.58.36-PM-554x360-c-center.jpeg ; tarjeta de esa misma propiedad en el inicio, coincidente con el archivo identificado por `og:image` de la ficha |
| Matheu Reina Elena | 1 | https://palaciosmartaprop.com.ar/wp-content/uploads/2025/05/WhatsApp-Image-2025-07-16-at-21.32.32-800x0-c-center.jpeg ; galería de su ficha |
| Matheu Reina Elena | 2 | https://palaciosmartaprop.com.ar/wp-content/uploads/2025/05/WhatsApp-Image-2025-07-16-at-21.32.33-800x0-c-center.jpeg ; galería de su ficha |
| Matheu Reina Elena | 3 | https://palaciosmartaprop.com.ar/wp-content/uploads/2025/05/WhatsApp-Image-2025-07-16-at-21.32.35-800x0-c-center.jpeg ; galería de su ficha |

## Acceso y límites

- `webfetch` falló con error de transporte para el dominio con y sin `www`, incluyendo una ficha. Edge mediante Playwright cargó inicio y las tres fichas con HTTP 200. El dominio con `www` redirige al dominio sin `www`.
- La galería de Coprovi no entregó una foto utilizable, sino un placeholder. Se emplea su propia foto de tarjeta del inicio, validada como JPEG 554 x 360 con HTTP 200; no una foto prestada de un aviso similar. Su metadata apunta a la [variante de 300 x 233](https://palaciosmartaprop.com.ar/wp-content/uploads/2025/07/WhatsApp-Image-2026-10-16-at-4.58.36-PM-300x233.jpeg), también comprobada. Se conserva el nombre de archivo tal como lo publica el servidor, aunque su ruta y nombre contienen fechas diferentes.
- Los mensajes relativos «hace 1 año» del sitio no se presentan como fechas de verificación. La fecha de consulta de esta propuesta es 2026-10-22.
- `types: ["Casa"]` y `operations: ["Venta"]` reflejan exclusivamente estas tres fichas. La inmobiliaria tiene otras categorías y una sección de alquileres, no importadas a esta selección.
- Configuración completa y autónoma, con las 175 etiquetas del esquema base. Tres mensajes y actividad del panel expresamente simulados, sin datos de personas ni consultas reales. `heroIds` y `zones[].propertyId` apuntan solo a estas tres fichas.
- Aviso independiente en `meta.proposalNotice` y en un `aside` después del skip link, antes del header. Su estilo corresponde a la hoja compartida, fuera del alcance de estos archivos.
- WhatsApp, redes y matrícula desconocidos quedan vacíos; no se inventan para completar la interfaz. La aplicación compartida es responsable de ocultar acciones sin un canal disponible.
- Todos los activos permanecen remotos y sujetos a cambios o retirada del servidor original. No se crearon carpetas `assets` ni se descargaron binarios.
- Únicos archivos de esta entrega: `marta-palacios/index.html`, `marta-palacios/config.js` y `marta-palacios/SOURCES.md`. No se modificó la aplicación ni la hoja de estilos compartidas.

## Verificación local

- `node --check marta-palacios/config.js`: correcto. Esquema completo comparado con la base: 175 etiquetas, 3 mensajes simulados y 3 propiedades; IDs únicos, tipos, operaciones, números y referencias de hero/zonas válidos. Sin datos residuales del cliente base ni etiqueta HTML `base`.
- Edge/Playwright: inicio, catálogo, las tres fichas, nosotros, contacto, panel, mensajes y configuración, a 1440 y 390 px: **20 comprobaciones de ruta**, sin errores JavaScript ni desbordamiento horizontal. Catálogo de tres tarjetas y aviso independiente antes del header comprobados. Sin enviar formularios ni activar enlaces de contacto.
- Las **5 fotos y el logo** respondieron HTTP 200 con tipo imagen y dimensiones decodificables. No se garantiza su permanencia futura en los servidores originales.
- La unidad es removible eliminando únicamente los tres archivos de `marta-palacios/`; no se requieren cambios compartidos para retirar esta demo. No se realizaron commits ni publicaciones.
