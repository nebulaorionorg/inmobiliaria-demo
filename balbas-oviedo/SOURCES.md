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

Las doce publicaciones se observaron en el sitio actual y en sus fichas propias. La ampliación del 21/10/2026 suma siete inmuebles a los cinco originales, cuyos registros e IDs se conservan sin cambios. Los códigos de referencia son los códigos públicos de esas fichas; los IDs `bo-...` son identificadores locales ASCII. Se preservan los tipos publicados **Casa Quinta** y **Lote** y se agregan **Casa** y **Departamento**.

| ID / código y ficha original | Tipo / operación | Precio | Datos incorporados y discrepancias |
| --- | --- | --- | --- |
| `bo-216932` / 216932 / [La Habana 300, Parque Alvear I](https://www.balbasoviedoprop.com.ar/ad/casa-en-tortuguitas-parque-alvear-1) | Casa Quinta / Venta | USD 98.000 | Tres dormitorios, dos baños, lote de 1.012 m², quincho y parque. `area: null`: cuadro de 120 m² cubiertos contra texto de 110 m² cubiertos y 20 m² semicubiertos. La discrepancia se explica en la descripción. Declara NO apto crédito bancario. |
| `bo-213653` / 213653 / [Brughetti 3600, Yei Porá](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-en-yei-pora) | Casa Quinta / Venta | USD 74.000 | A refaccionar, lote de 1.517 m², 100 m² cubiertos, un baño, quincho y pileta. `bedrooms: null`: el cuadro informa uno y el texto dos. La dirección del mapa dice Tortuguitas y el texto Yei Porá, José C. Paz; se deja visible la doble referencia. |
| `bo-213596` / 213596 / [Álvarez Jonte y Mayaguez, Parque Alvear I](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-4-ambientes-en-tortuguitas-parque-alvear-1) | Casa Quinta / Venta | USD 89.000 | Dos dormitorios, un baño, 57 m² cubiertos, lote de 470 m². La descripción agrega 52 m² semicubiertos, entrepiso, pileta de 8 por 4 metros, mobiliario incluido y gas envasado. No se sumaron los semicubiertos al campo `area`. |
| `bo-213707` / 213707 / [Almirante Brown 3500, Tortuguitas](https://www.balbasoviedoprop.com.ar/ad/lote-venta-en-tortuguitas) | Lote / Venta | USD 90.000 | Pileta, vestuario y construcción de 25 m² a terminar, sin especificación de cubierta: `area: null`. `landArea: null`: el cuadro y comienzo del texto dicen 800 m²; otro párrafo dice 802 m². La descripción conserva ambas cifras sin elegir una. No publica conteos de dormitorios y baños: `null`. |
| `bo-213692` / 213692 / [Lartigau Lespada 1700, Yei Porá](https://www.balbasoviedoprop.com.ar/ad/lote-venta-en-yei-pora) | Lote / Venta | USD 29.000 | Terreno de 373 m². No informa cubierta, dormitorios ni baños: `null`. Se anuncia listo para escriturar; no se interpreta como apto crédito. |

### Siete incorporaciones

| ID / código y ficha original | Tipo / operación | Precio publicado | Datos incorporados y excepciones |
| --- | --- | --- | --- |
| `bo-213662` / 213662 / [Crámer 4500, Yei Porá](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-4-ambientes-en-yei-pora) | Casa Quinta / Venta | USD 85.000 | Tres dormitorios, tres baños, 230 m² cubiertos y 729 m² sobre dos lotes, ofrecidos como una única propiedad. Quincho, entrepiso y gas envasado. Advertencias preservadas: requiere nueva perforación de agua y NO es apta crédito. No se agregó pileta. |
| `bo-217088` / 217088 / [Asamblea 3500, Parque Alvear I](https://www.balbasoviedoprop.com.ar/ad/lote-venta-tortuguitas-parque-alvear-1-1) | Lote / Venta | USD 45.000 | Lote en esquina de 319 m² frente a Plaza La Convivencia, con casa de dos plantas a reciclar completamente. Cubierta, dormitorios y baños no publicados: `null`. Se cuenta una sola vez aunque existe otro aviso con código 213718. |
| `bo-213673` / 213673 / [Santa Elena 470, Carumbé](https://www.balbasoviedoprop.com.ar/ad/casa-quinta-en-tortuguitas) | Casa Quinta / Venta | USD 189.000 | Tres dormitorios, dos baños, 133 m² cubiertos y lote de 2.411 m². Los 46 m² semicubiertos no se suman a `area`. Pileta, quincho, parrilla y riego automático. La posibilidad de subdividir no se presenta como autorización. No se incluye además el aviso de lote con 2.411 m² en Santa Elena. |
| `bo-213940` / 213940 / [Golf Club Junín, Altos del Barranco](https://www.balbasoviedoprop.com.ar/ad/casa-venta-en-altos-del-barranco-manuel-alberti) | Casa / Venta | USD 140.000 | Un dormitorio, dos baños, 70 m² cubiertos y terreno de 444 m². Quincho, parrilla, horno de barro y pileta. La calle se publica sin altura: no se inventa un número. Localidad Manuel Alberti, Pilar. |
| `bo-213686` / 213686 / [Rafaela 4900, Villa Luro](https://www.balbasoviedoprop.com.ar/ad/departamento-3-ambientes-en-villa-luro) | Departamento / Venta | USD 73.000 | Piso 10, dos dormitorios, un baño, 56 m² cubiertos y totales según el cuadro. Balcón, vista abierta, cocina separada y placares. Superficie de terreno no publicada: `null`. |
| `bo-213720` / 213720 / [Av. Díaz Vélez 3500, Almagro Norte](https://www.balbasoviedoprop.com.ar/ad/departamento-3-ambientes-en-almagro-norte) | Departamento / Venta | USD 145.000 | Piso 1, dos dormitorios, un baño, 71 m² cubiertos y 73 m² totales. Publica apto profesional y "APTO CREDITO": `credit: true`, sujeto a confirmación bancaria. También declara no accesibilidad física según Ley 5115; advertencia conservada. Terreno `null`. |
| `bo-213698` / 213698 / [Arquímedes 4050, Los Polvorines](https://www.balbasoviedoprop.com.ar/ad/departamento-en-los-polvorines-1) | Departamento / Venta | USD 49.000 | PH de tres ambientes con patio, dos dormitorios y dos baños; 87 m² cubiertos y totales. Valor publicado libre de gastos. Expensas todavía no cobradas con consorcio en trámite: no se garantiza que continúe sin expensas. No se agrega el otro aviso de 47 m² de la misma dirección. |

Los importes son USD nominales publicados, sin conversiones. Solo Almagro Norte, código 213720, se marca `credit: true` por afirmación expresa de la ficha. Las restantes quedan en `false`, como falta de confirmación positiva; La Habana y Crámer niegan expresamente la aptitud. `featured: true` en los doce indica la selección de esta demo, no una clasificación nueva atribuida al cliente.

Se mantienen `operations: ['Venta', 'Alquiler']`, pero **las doce fichas de esta selección son ventas**. El [listado actual de alquileres](https://www.balbasoviedoprop.com.ar/listing?user_id=2140&purpose=rent) devuelve "Propiedad no encontrada por sus criterios de búsqueda". No se inventaron alquileres para poblar la categoría ni se transformaron ventas en temporarios. El servicio de alquiler dirige a contacto y aclara el límite.

### Control de inmuebles distintos

Se revisaron las tres páginas actuales de [ventas, página 1](https://www.balbasoviedoprop.com.ar/listing?user_id=2140&purpose=sale), [página 2](https://www.balbasoviedoprop.com.ar/listing?user_id=2140&purpose=sale&page=2) y [página 3](https://www.balbasoviedoprop.com.ar/listing?user_id=2140&purpose=sale&page=3). No se contaron doce avisos sin revisar su identidad:

- La Habana 300 aparece con códigos 213638 y 216932, mismo precio, dimensiones y dormitorios: se conserva únicamente el registro original 216932.
- Asamblea 3500 aparece con códigos 217088 y 213718, 319 m² y USD 45.000: solo se incorpora 217088.
- Santa Elena aparece como quinta y como lote con 2.411 m² y USD 189.000: solo se selecciona la quinta 213673, sin afirmar que sean dos inmuebles distintos.
- Arquímedes 4050 tiene dos departamentos publicados con distintas dimensiones y precios, sin unidad precisa: solo se selecciona el de 87 m², código 213698. No es necesario suponer si el otro es independiente para alcanzar doce.
- Chacarita, código 222104, figura **Suspendida** en el listado y se excluye. En las doce fichas seleccionadas no se observaron marcas de vendida, reservada o suspendida; esto no acredita disponibilidad en tiempo real.

## Imágenes y textos

- Veintiséis URL remotas de fotografías del dominio oficial: se conservan las doce originales y se incorporan catorce, dos por ficha nueva. Todas las URL exactas se conservan en `config.js` y aparecen en las galerías de las fichas enlazadas.
- Se utilizan archivos originales publicados, no miniaturas inferidas, stock, reemplazos de otras inmobiliarias ni imágenes inventadas. Las fotos pueden contener marcas de agua del propio cliente.
- Las imágenes de zonas y del bloque institucional son fotos de esos inmuebles. Sus textos lo aclaran para no atribuirles una vista general del barrio o de la oficina.
- Descripciones propias resumidas, fieles a la información accesible y con las contradicciones expresas. La etiqueta `totalArea` indica "Superficie cubierta informada"; `area` no mezcla cubierta con terreno.
- Tres mensajes genéricos y los valores de actividad del panel son simulados y no contienen referencias a clientes ajenos ni se presentan como consultas reales.

## Límites y verificación

Investigación con webfetch y navegación Playwright en Microsoft Edge. El cambio de rutas del sitio hace que los enlaces antiguos no sean utilizables; las fichas de esta demo apuntan a las rutas actuales del mismo negocio. No se promete que la cartera actual contenga 41 resultados ni que el catálogo esté conectado a Pixel Inmobiliario. No se inicializó CodeGraph.

Se verifican datos publicados, no documentación dominial, mensuras, servicios efectivos, estado edilicio, disponibilidad ni validez registral de matrículas. Las contradicciones permanecen visibles y sus campos numéricos inciertos son `null`. Las superficies del título y planos deben prevalecer en una operación real.

En esta ampliación solo se modifican `config.js` y este documento. No se modifican el index ni el motor compartido. El esquema conserva 175 etiquetas, marca, contactos, mensajes simulados, hero y zonas existentes, con fecha 2026-10-21. El formulario solo prepara correo en la aplicación del visitante; no se ejecutó ningún envío. La publicación e integración general quedan a cargo del agente principal.

Resultado de la ampliación: `node --check` y esquema correctos; doce IDs y fuentes únicos, referencias hero/zonas válidas y registros originales conservados. Las doce fichas responden correctamente y cada foto figura en el HTML de su fuente. Las veintiséis fotos y el logo responden como imagen y se decodifican en Edge sin errores. Se recorrieron 20 rutas, se probaron favoritos locales y anchos de 1440 y 390 píxeles sin desbordes ni errores de JavaScript. Contraste del primario sobre blanco: 8,59:1. Las imágenes diferidas también se verificaron de forma independiente.

Integración final: la tarjeta de Almirante Brown omite la superficie cuando cubierta y terreno son `null`. El motor compartido fue corregido y probado sin sustituir datos inciertos por cero ni elegir una cifra contradictoria. La descripción conserva la salvedad de la fuente.
