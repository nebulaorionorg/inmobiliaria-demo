# Oliva Propiedades: fuentes y alcance

Consulta: **2026-10-21**. Demo comercial independiente, no sitio oficial. No existe integracion actual con el CRM, backend, autenticacion ni actualizacion automatica. La seleccion no equivale a un inventario vigente. No se enviaron formularios, consultas, emails ni mensajes de WhatsApp durante la investigacion.

Ampliacion: **4 -> 12 inmuebles distintos**, conservando sin cambios los cuatro registros iniciales, sus IDs, marca, contactos, paleta y disclaimers. Se mantiene el esquema completo de labels y se actualizan textos de conteo. Resultado: 12 ventas, 0 alquileres; 2 casas, 3 departamentos, 2 quintas, 1 duplex y 4 terrenos. Se agregaron 8 fichas, todas `featured: true`, sin crear unidades desde una seccion generica de proyectos.

## Identidad y contacto

- Sitio oficial: https://www.olivaprop.com.ar/
- Contacto oficial: https://www.olivaprop.com.ar/contacto/
- Presentacion institucional: https://www.olivaprop.com.ar/nosotros/
- Oficina corroborada en cabecera, contacto y pie: Moreno 1194, Oficina 7, 1er piso, Tortuguitas, Malvinas Argentinas. Coincide con el dato de referencia del CSV, pero la fuente usada es la web oficial.
- Telefono: 11 6540-3762. Email: olivapropiedadesventas@hotmail.com.
- WhatsApp: 5491165403762, obtenido del atributo `data-settings` del widget oficial `.joinchat` en la portada, mediante Playwright/Edge. No se infirio agregando un prefijo al telefono ni se abrio una conversacion.
- Instagram enlazado por la web: https://www.instagram.com/propiedadesoliva/
- Facebook enlazado en contacto: https://www.facebook.com/profile.php?id=100070697832428
- No se encontro una matricula profesional inequivoca: `brand.license` queda vacio. El nombre del agente que figura en las fichas no se transformo en una licencia.
- Logo de cabecera oficial: https://storage.googleapis.com/portales-prod-images/5140/web-images/2025/4/0deb36a6-f06e-4e13-a101-a1049c3c20a2.jpeg

## Paleta

Se inspeccionaron los estilos calculados de la portada y los pixeles del logo con Edge. `primary: #283f8f` es el azul real del sitio y logo de Oliva, no el azul por defecto de la plantilla. `secondary: #636363` y `ink: #222222` se observaron en la UI oficial. Los tres superan 4.5:1 de contraste frente a blanco. No se atribuye a la marca un manual de identidad no publicado.

## Publicaciones incluidas

| ID demo / referencia oficial | Ficha oficial exacta | Precio publicado | Datos usados |
| --- | --- | --- | --- |
| oliva-210249 / OLI-210249 | https://www.olivaprop.com.ar/propiedad/210249_casa-en-venta-c-cochera-en-tortuguitas/ | USD 100.000 | Tucuman 149, Tortuguitas; casa en venta; 4 dormitorios, 2 banos; terreno 350 m2; cochera cubierta. Construccion: `null`, por contradiccion entre texto y tabla. |
| oliva-234783 / OLI-234783 | https://www.olivaprop.com.ar/propiedad/234783_casa-en-venta-c-cochera/ | USD 115.000 | Francisco Beazley 3150, Los Polvorines; casa en venta; 2 dormitorios, 1 bano; 100 m2 cubiertos y 180 m2 de terreno. |
| oliva-235771 / OLI-235771 | https://www.olivaprop.com.ar/propiedad/235771_terreno-200m2-tortuguitas/ | USD 32.000 | Bahia Thetis 758, Tortuguitas; terreno en venta de 200 m2, 10 x 20 m. La ficha publica 0 banos; dormitorios y construccion no aplicables quedan `null`. |
| oliva-214426 / OLI-214426 | https://www.olivaprop.com.ar/propiedad/214426_dpto-en-pozo-en-san-miguel/ | USD 95.000 | Harmony 4, Urquiza 1255, San Miguel; departamento en venta/en construccion; 1 dormitorio, 1 bano, 48 m2 cubiertos. Terreno: `null`. |
| oliva-203969 / OLI-203969 | https://www.olivaprop.com.ar/propiedad/203969_casa-quinta-de-900m2-con-pileta/ | USD 57.000 | Quinta en venta, Trinidad 3700, Jose C. Paz; 2 dormitorios, 1 bano, 40 m2 cubiertos y terreno de 900 m2. Pileta. |
| oliva-214412 / OLI-214412 | https://www.olivaprop.com.ar/propiedad/214412_depto-3-ambientes-en-san-miguel/ | USD 77.000 | Departamento en venta, Sarmiento 1125, piso 8 A, San Miguel; 2 dormitorios, 1 bano y 53 m2 cubiertos. Publicado como actualmente alquilado y apto credito hipotecario. |
| oliva-168410 / OLI-168410 | https://www.olivaprop.com.ar/propiedad/168410_departamento-en-venta-de-1-dormitorio-en-jose-c-paz/ | USD 42.000 | Departamento en venta de Complejo Colon, Cristobal Colon 3260, Jose C. Paz; 1 dormitorio, 1 bano y 40 m2 cubiertos. |
| oliva-174451 / OLI-174451 | https://www.olivaprop.com.ar/propiedad/174451_casa-quina-ubicado/ | USD 130.000 | Quinta en venta, Laprida y Tobago, Jose C. Paz; 2 dormitorios, 2 banos, 90 m2 cubiertos y 880 m2 de terreno. |
| oliva-232632 / OLI-232632 | https://www.olivaprop.com.ar/propiedad/232632_terreno-700m2-tortuguitas/ | USD 75.000 | Terreno en venta, Buenos Aires 1000, Tortuguitas; superficie publicada 700 m2, 0 banos publicados; construccion y dormitorios `null`. |
| oliva-160766 / OLI-160766 | https://www.olivaprop.com.ar/propiedad/160766_duplex-en-complejo/ | USD 63.000 | Duplex en venta, Capitan Martinez 1232, Jose C. Paz; 2 dormitorios, 64 m2 cubiertos; banos `null` por discrepancia; terreno `null`. |
| oliva-234504 / OLI-234504 | https://www.olivaprop.com.ar/propiedad/234504_terreno-de-440m2/ | USD 45.000 | Terreno en venta, Humboldt 2250, Yei Pora, Jose C. Paz; 440 m2 y 0 banos publicados; construccion y dormitorios `null`. |
| oliva-235772 / OLI-235772 | https://www.olivaprop.com.ar/propiedad/235772_pileta-y-quincho-en-tortuguitas/ | USD 65.000 | Terreno en venta con pileta y quincho, Canning 4050, Tortuguitas; 300 m2; construccion, dormitorios y banos `null`. |

Las cuatro fichas iniciales se consultaron completas mediante webfetch. Las ocho adicionales se investigaron completas con Playwright/Microsoft Edge, usando `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright`: texto visible, encabezado, tabla de detalles y galerias propias. La portada y el listado https://www.olivaprop.com.ar/tipo-propiedad/departamento/ sirvieron para descubrir publicaciones; no se tomaron inmuebles de otras inmobiliarias. Todos los objetos se marcan `featured: true` como seleccion editorial de la demo, no como afirmacion de que todos sean destacados comerciales del cliente. `credit: false` significa que esta demo no afirma aptitud crediticia; OLI-214412 tiene `credit: true` porque la descripcion y las caracteristicas oficiales dicen expresamente apto credito hipotecario.

Listados adicionales investigados: https://www.olivaprop.com.ar/tipo-propiedad/casa-quinta/ y https://www.olivaprop.com.ar/tipo-propiedad/casa/. La pagina https://www.olivaprop.com.ar/estado/en-alquiler/ devolvio **0 propiedades** tanto en webfetch como en Edge. No se inventan alquileres para completar variedad ni se incorporan temporarios bajo alquiler permanente. Se mantienen las operaciones en orden `Venta`, `Alquiler`.

## Imagenes exactas

Cada URL se extrajo de la galeria de su propia ficha. No se usan fotos de stock, fotos de otros clientes ni placeholders. Se conservan tres imagenes por ficha inicial y se agregan dos por cada ficha nueva; no se reproduce la galeria completa. URLs remotas sujetas a cambios o restricciones del servidor original.

### OLI-210249

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/c6cff464-427f-447b-a52b-5a0624b655c3.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/66014700-bb36-4f80-bbe0-f6f0c59bc429.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/5bdf098f-93fa-4620-a99f-a2dd8c2556f1.jpeg

### OLI-234783

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/b32d7f55-31b4-43fe-812e-e6ea98f5fcac.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/13cb53fb-a859-48f9-b808-555931bab747.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/73b2a543-1518-4db9-8f83-d8f8987eb7f8.jpeg

### OLI-235771

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/e02f887e-1a05-4a8a-970d-df000230ec88.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/3798bbc4-117b-4c1d-92d7-8ddbc70c2b48.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/98bd2f05-8a1b-45b8-af8b-34b0e665af15.jpeg

### OLI-214426

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/3921592d-545e-49b9-ad7a-a40927838284.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/64a64e47-a1d4-49ff-9156-1fc1790a0814.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/7a29c017-db74-47ff-8b91-749b3d0de588.jpeg

### Ocho fichas nuevas: imagenes verificadas con Edge

Las 16 URLs siguientes aprobaron `HTMLImageElement.decode()` en Microsoft Edge y devolvieron ancho y alto naturales mayores a cero. Son las URLs exactas leidas de sus galerias, sin construir nombres ni descargar assets locales.

| Referencia | Foto 1 | Foto 2 |
| --- | --- | --- |
| OLI-203969 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/2/6c3091d5-7da6-4e35-a7a9-fe7a9c262841.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/2/f4050a86-0f6c-4267-869d-00fc8260e6a5.jpeg |
| OLI-214412 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/f4e6712b-e0d8-4d5c-bebb-70482f754a83.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/e645c428-3fca-48e4-bcee-8c8b3e6b8031.jpeg |
| OLI-168410 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/6/78573ea4-c757-4c49-bbac-0fc17300210b.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/6/67913306-3321-4f07-8bfc-eeec9fabd985.jpeg |
| OLI-174451 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/8/bdd7d70c-8c5b-4990-bb68-3f2786400ff9.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/8/0ab70c8a-534e-4b3e-8871-a2d4a2175b68.jpeg |
| OLI-232632 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/1e199c45-b96d-416f-93ae-7cc7245b7b84.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/c371c51e-783b-49e4-8824-d48af765495e.jpeg |
| OLI-160766 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/4/52cf103c-c56b-4b9a-afa6-39d548289c87.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2025/4/0882a650-4832-4353-8c2b-d8627f54e289.jpeg |
| OLI-234504 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/3e1a8167-ecd4-47e6-94bb-8a3a7b3834c8.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/0a1babd2-4e47-4061-9c4a-e2d507b682fa.jpeg |
| OLI-235772 | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/cd786e24-9eb3-48b4-a45f-92704f005257.jpeg | https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/535519d1-0e13-4851-8201-62ae99500542.jpeg |

## Limites y decisiones

- OLI-210249: el texto anuncia 150 m2 construidos y la tabla indica 100 m2 cubiertos/total. No se elige arbitrariamente uno: `area: null`; se explicita en la descripcion. La tabla informa 350 m2 de terreno. El enlace de mapa de la ficha parece apuntar fuera de Tortuguitas; no se incorporaron coordenadas ni ese enlace.
- OLI-234783: se usan los 100 m2 cubiertos, no los 180 m2 totales que incluyen 80 m2 descubiertos. `area` representa construccion, `landArea` terreno.
- OLI-235771: USD 32.000 es el precio de venta, no el anticipo de USD 19.200. El plan publicado de 48 cuotas de USD 420 tiene un total distinto del precio de contado; no se mezclan ambas condiciones ni se anuncia una cuota como precio total.
- OLI-214426: el encabezado y la tabla publican USD 95.000, aunque el texto menciona otros valores desde para unidades del proyecto. Se mantiene el precio de la ficha seleccionada. Sus 5 m2 descubiertos no se presentan como construidos. Las imagenes del proyecto pueden ser renders y no garantizan una obra terminada ni una fecha de entrega.
- Se excluyo https://www.olivaprop.com.ar/propiedad/181704_casa-con-financiacion/: el listado de casas la muestra en venta pero la ficha tiene un distintivo **RESERVADO**. No se anadio al config. Tampoco se incluyo OLI-234923, una ficha que agrupa varios lotes sin identificar una unidad concreta, para no fabricar cuatro inmuebles desde un anuncio conjunto.
- OLI-203969: el encabezado y la tabla actualizada el 20/10/2026 dicen USD 57.000, mientras el texto conserva USD 64.000. Se usa el precio publicado en los campos de precio y se avisa la diferencia. No se reemplaza por una cuota o anticipo.
- OLI-168410: encabezado y tabla USD 42.000 frente a USD 40.000 en la descripcion. Se usa USD 42.000 con salvedad visible. Se incorpora la ficha concreta de un departamento, no una cantidad supuesta de unidades del Complejo Colon.
- OLI-214412: la venta sigue publicada pero el texto dice que el departamento esta alquilado. Se conserva como venta con ocupacion explicitada, no como alquiler disponible ni como entrega inmediata desocupada. Las expensas ARS 230.000 se mencionan aparte, sin sumarlas al precio USD. La aptitud crediticia es una afirmacion de la ficha y debe confirmarla el banco.
- OLI-160766: la tabla publica 1 bano y el texto describe uno de servicio mas otro completo; `bathrooms: null`. `landArea: null`: los 186 m2 descubiertos y 250 m2 totales no acreditan por si solos una parcela individual. La tabla pone expensas de $1 y el texto dice sin expensas; no se reproduce ese importe como costo fiable. Se normaliza a tipo `Duplex` por el titulo y la descripcion de dos plantas, aunque el portal lo agrupe bajo Casas. El texto oficial incluye una referencia historica de SitioInmuebles: no se reutiliza esa referencia como ID ni se importa otra ficha de ese portal.
- OLI-232632: se conserva la superficie total publicada de 700 m2; no se recalcula con frente/fondo de la tabla. OLI-234504: la escritura y financiacion son afirmaciones de la publicacion, no verificaciones registrales ni aptitud bancaria.
- OLI-235772: precio de encabezado y tabla USD 65.000 frente a USD 62.000 en descripcion. `bathrooms: null` por tabla 0 frente a bano de quincho en texto; `area: null` porque no se mide el quincho, aunque haya campos genericos en cero. Se mantiene como terreno con mejoras, no como vivienda con dormitorios inventados.
- No se incorporaron alquileres no investigados para llenar el catalogo. Se conservan `operations: ['Venta', 'Alquiler']`, pero esta seleccion solo tiene ventas y el texto lo aclara.
- Mensajes y grafico del panel son simulados, sin estadisticas reales ni referencias a propiedades concretas. No se copio actividad de otro cliente.
- Fecha de verificacion no implica vigencia actual de precio, financiacion, disponibilidad, documentacion ni servicios. Deben confirmarse con Oliva.
- En esta ampliacion solo se modifican `config.js` y este archivo. Se mantienen los IDs iniciales y las referencias `heroIds` y `zones`. No se modifica HTML, engine compartido ni limite visual de la home; su ampliacion queda para la integracion principal. No fue necesario crear assets. Los numeros no corroborados quedan `null`, no cero ficticio.

## Comprobaciones locales

- `node --check oliva-propiedades/config.js`: correcto.
- Esquema JSON completo: 176 labels actuales conservadas, 12 inmuebles, IDs/referencias/fuentes/direcciones unicos, operaciones y tipos correctos, cantidades/precios numericos o `null`, fuentes HTTPS propias y referencias `heroIds`/`zones` validas.
- Las comprobaciones previas de carga de la demo base a 1440 px y 390 px se conservan como antecedente; no se modificaron los archivos del renderer en esta ampliacion.
- Comprobacion nueva en Edge a 1440 px y 390 px: 12 tarjetas en el catalogo y los 8 detalles nuevos cargaron sin errores JavaScript ni desbordamiento horizontal. Se verifico automaticamente que SOURCES contiene la ficha y cada foto de los 12 objetos.
- Las 12 imagenes iniciales y el logo habian respondido correctamente. Las 16 fotos nuevas se comprobaron adicionalmente con `Image.decode()` en Edge: **16/16 correctas**, sin placeholders. Total del catalogo ampliado: 28 imagenes.
- Contraste frente a blanco: primary 9.55:1, secondary 6.01:1, ink 15.91:1.
- No se modificaron archivos compartidos, registros de sitios ni pruebas del proyecto. No se realizaron commits ni push.
