# Balbas Oviedo: fuentes de la demo

Consulta: **2026-10-21**. Demo independiente, sin backend ni CRM conectado. No se enviaron formularios, correos, WhatsApp ni solicitudes de tasación. Precios y disponibilidad requieren confirmación.

## Fuente actual e identidad

La URL proporcionada, [búsqueda antigua de ventas](https://www.balbasoviedoprop.com.ar/busqueda/todo/venta/), responde **404**. La variante sin `www` y sin barra final también devuelve 404. Sin embargo, el [inicio del mismo dominio](https://www.balbasoviedoprop.com.ar/) está operativo y publica fichas propias con rutas `/ad/` y un [listado de ventas actual](https://www.balbasoviedoprop.com.ar/listing?user_id=2140&purpose=sale). No se recurrió a inmuebles ajenos ni se dio por vigente el resultado histórico de 41 publicaciones.

| Campo | Valor incorporado | Fuente pública propia |
| --- | --- | --- |
| Nombre | Balbas Oviedo Propiedades | [Inicio](https://www.balbasoviedoprop.com.ar/) y [logo](https://www.balbasoviedoprop.com.ar/uploads/avatar/1777293877oov8o-balbaslogo.jpg) |
| Descriptor de la demo | Soluciones inmobiliarias | Denominación del encargo; el logo y sitio actuales utilizan "Propiedades". No implica una nueva razón social. |
| Oficina | Tortuguitas, Buenos Aires, Argentina | [Contacto](https://www.balbasoviedoprop.com.ar/contactenos). No se incorporó Bogotá 359 del CSV: el sitio actual no corrobora esa dirección con calle y número. |
| Teléfono | +54 9 11 3801-0700 | [Contacto](https://www.balbasoviedoprop.com.ar/contactenos) y cabecera del inicio |
| WhatsApp | `5491138010700` | Enlace `wa.me` publicado en el [inicio](https://www.balbasoviedoprop.com.ar/) y en las fichas; no inferido del teléfono |
| Email | info@balbasoviedoprop.com.ar | [Contacto](https://www.balbasoviedoprop.com.ar/contactenos) |
| Instagram | `https://www.instagram.com/balbasoviedo.prop/` | Enlace del pie del [sitio oficial](https://www.balbasoviedoprop.com.ar/) |
| Facebook | `https://www.facebook.com/balbasoviedo.prop` | Enlace del mismo pie |
| Profesional y matrículas publicadas | Sebastian Balbas Oviedo; CMCPSM 2868; CUCICBA 9012 | [Contacto](https://www.balbasoviedoprop.com.ar/contactenos) y [ficha de La Habana](https://www.balbasoviedoprop.com.ar/ad/casa-en-tortuguitas-parque-alvear-1). No se verificaron en registros profesionales externos. |
| Logo | Archivo remoto oficial sin modificaciones | [balbaslogo.jpg](https://www.balbasoviedoprop.com.ar/uploads/avatar/1777293877oov8o-balbaslogo.jpg), utilizado como logo en la cabecera del sitio |
| Paleta | `primary #4c4c4c`, `secondary #6f6f6c`, `ink #161616` | Adaptación monocromática del logo plateado sobre negro y los grises del sitio. No son tokens de un manual de marca. Primario contrastado sobre blanco; se evita el azul genérico del framework. |

Los contactos se verificaron como publicaciones del cliente, no mediante llamadas o mensajes. Se conservan únicamente las dos redes que admite el esquema compartido; no se inventaron perfiles.

## Catálogo y precios

Las cinco publicaciones se observaron en el sitio actual y en sus fichas propias. Los códigos de referencia son los códigos públicos de esas fichas; los IDs `bo-...` son identificadores locales ASCII. Se preservan los tipos publicados **Casa Quinta** y **Lote**.

| ID / código y ficha original | Tipo / operación | Precio | Datos incorporados y discrepancias |
| --- | --- | --- | --- |
| `bo-216932` / 216932 / [La Habana 300, Parque Alvear I](https://www.balbasoviedoprop.com.ar/ad/casa-en-tortuguitas-parque-alvear-1) | Casa Quinta / Venta | USD 98.000 | Tres dormitorios, dos baños, lote de 1.012 m², quincho y parque. `area: null`: cuadro de 120 m² cubiertos contra texto de 110 m² cubiertos y 20 m² semicubiertos. La discrepancia se explica en la descripción. Declara NO apto crédito bancario. |
| `bo-213653` / 213653 / [Brughetti 3600, Yei Porá](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-en-yei-pora) | Casa Quinta / Venta | USD 74.000 | A refaccionar, lote de 1.517 m², 100 m² cubiertos, un baño, quincho y pileta. `bedrooms: null`: el cuadro informa uno y el texto dos. La dirección del mapa dice Tortuguitas y el texto Yei Porá, José C. Paz; se deja visible la doble referencia. |
| `bo-213596` / 213596 / [Álvarez Jonte y Mayaguez, Parque Alvear I](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-4-ambientes-en-tortuguitas-parque-alvear-1) | Casa Quinta / Venta | USD 89.000 | Dos dormitorios, un baño, 57 m² cubiertos, lote de 470 m². La descripción agrega 52 m² semicubiertos, entrepiso, pileta de 8 por 4 metros, mobiliario incluido y gas envasado. No se sumaron los semicubiertos al campo `area`. |
| `bo-213707` / 213707 / [Almirante Brown 3500, Tortuguitas](https://www.balbasoviedoprop.com.ar/ad/lote-venta-en-tortuguitas) | Lote / Venta | USD 90.000 | Pileta, vestuario y construcción de 25 m² a terminar, sin especificación de cubierta: `area: null`. `landArea: null`: el cuadro y comienzo del texto dicen 800 m²; otro párrafo dice 802 m². La descripción conserva ambas cifras sin elegir una. No publica conteos de dormitorios y baños: `null`. |
| `bo-213692` / 213692 / [Lartigau Lespada 1700, Yei Porá](https://www.balbasoviedoprop.com.ar/ad/lote-venta-en-yei-pora) | Lote / Venta | USD 29.000 | Terreno de 373 m². No informa cubierta, dormitorios ni baños: `null`. Se anuncia listo para escriturar; no se interpreta como apto crédito. |

Los importes son USD nominales publicados, sin conversiones. `credit: false` en todas las fichas: no existe confirmación positiva de aptitud crediticia y La Habana la niega expresamente. `featured: true` indica la selección de esta demo, no una nueva clasificación atribuida al cliente.

Se mantienen `operations: ['Venta', 'Alquiler']` como exige el esquema, pero **las cinco fichas de esta selección son ventas**. El sitio sí enlaza alquileres; no se inventaron unidades ni precios para poblar esa categoría. El servicio de alquiler dirige a contacto y aclara el límite.

## Imágenes y textos

- Doce URL remotas de fotografías del dominio oficial: tres de La Habana, dos de Brughetti, tres de Álvarez Jonte, dos de Almirante Brown y dos de Lartigau Lespada. Todas las URL exactas se conservan en `config.js` y aparecen en las galerías de las fichas enlazadas.
- Se utilizan archivos originales publicados, no miniaturas inferidas, stock, reemplazos de otras inmobiliarias ni imágenes inventadas. Las fotos pueden contener marcas de agua del propio cliente.
- Las imágenes de zonas y del bloque institucional son fotos de esos inmuebles. Sus textos lo aclaran para no atribuirles una vista general del barrio o de la oficina.
- Descripciones propias resumidas, fieles a la información accesible y con las contradicciones expresas. La etiqueta `totalArea` indica "Superficie cubierta informada"; `area` no mezcla cubierta con terreno.
- Tres mensajes genéricos y los valores de actividad del panel son simulados y no contienen referencias a clientes ajenos ni se presentan como consultas reales.

## Límites y verificación

Investigación con webfetch y navegación Playwright en Microsoft Edge. El cambio de rutas del sitio hace que los enlaces antiguos no sean utilizables; las fichas de esta demo apuntan a las rutas actuales del mismo negocio. No se promete que la cartera actual contenga 41 resultados ni que el catálogo esté conectado a Pixel Inmobiliario. No se inicializó CodeGraph.

Se verifican datos publicados, no documentación dominial, mensuras, servicios efectivos, estado edilicio, disponibilidad ni validez registral de matrículas. Las contradicciones permanecen visibles y sus campos numéricos inciertos son `null`. Las superficies del título y planos deben prevalecer en una operación real.

Solo se entregan `index.html`, `config.js` y este documento. El esquema completo incluye 175 etiquetas y las secciones de la demo base. La verificación final comprende `node --check`, referencias internas de catálogo, imágenes remotas y rutas en escritorio y móvil. El formulario solo prepara correo en la aplicación del visitante; no se ejecutó ningún envío. La publicación e integración general quedan a cargo del agente principal.

Resultado: sintaxis y esquema correctos; cinco fichas originales accesibles; doce fotos y el logo con respuesta de imagen y decodificación correcta en Edge; 13 rutas recorridas, favoritos locales probados y comprobaciones de ancho a 1440 y 390 píxeles sin desbordes ni errores de JavaScript. Contraste del primario sobre blanco: 8,59:1. Las imágenes diferidas también se verificaron de forma independiente.

Integración final: la tarjeta de Almirante Brown omite la superficie cuando cubierta y terreno son `null`. El motor compartido fue corregido y probado sin sustituir datos inciertos por cero ni elegir una cifra contradictoria. La descripción conserva la salvedad de la fuente.
