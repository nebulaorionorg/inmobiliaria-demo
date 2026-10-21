# Bustamante Propiedades: fuentes de la demo

Consulta: **2026-10-21**. Demo comercial independiente, sin conexion automatica al CRM, backend ni autenticacion. Seleccion estatica, no catalogo completo. No se enviaron formularios ni se contacto a la inmobiliaria.

## Identidad y contacto

Fuente principal: [sitio oficial](https://www.bustamantepropiedades.com/), incluidos sus datos estructurados RealEstateAgent y el pie de pagina. Webfetch recupero el HTML; Playwright con Edge permitio leer las fichas y comprobar estilos e imagenes.

| Dato | Evidencia oficial aplicada |
| --- | --- |
| Marca | Bustamante Propiedades; razon social Bustamante Propiedades S.A. |
| Oficina | Patricias Argentinas 4345, Garin, Buenos Aires, CP 1619: confirmado por el JSON-LD oficial, no solamente por la referencia CSV |
| Telefono | +54 11 4044-0900, visible en el pie |
| WhatsApp | https://wa.me/5491140440900, enlace del pie oficial; el sitio tiene otro enlace especifico para vendedores, no se mezcla con este canal general |
| Email | info@bustamantepropiedades.com |
| Corredora | Natalia M. Teltschik, CMZC 437, en las fichas y el pie |
| Instagram | https://www.instagram.com/bustamantepropiedades, sameAs oficial |
| Facebook | https://www.facebook.com/inmobiliariabustamante, sameAs oficial |
| Especialidad | Countries y barrios cerrados de Tigre, Nordelta, Villanueva, Pilar y Escobar |

Logo publico comprobado: https://www.bustamantepropiedades.com/assets/website/image/bustamantepropiedades-logo.png . Es el logo del encabezado, no una recreacion.

Paleta: `primary #0f234e`, marino oficial observado en los estilos computados del sitio; `secondary #69f0ae`, menta oficial; `ink #111b30`, adaptacion oscura de apoyo. El marino es propio de Bustamante, no el azul heredado de una plantilla. Contraste del primario con texto blanco mayor que 4.5:1.

## Publicaciones

| ID demo / referencia | Operacion | Precio publicado | Fuente oficial | Superficies y observaciones |
| --- | --- | --- | --- | --- |
| bp-12007 / 12007 | Venta, casa | USD 495.000 | [San Francisco](https://www.bustamantepropiedades.com/12007-venta-casa-san-francisco-villanueva-tigre) | 260 m2 cubiertos, 900 m2 terreno, 4 dormitorios y 3 banos en caracteristicas. El cuarto dormitorio admite uso de escritorio. |
| bp-10986 / 10986 | Venta, casa | USD 850.000 sin muebles | [Estancias del Pilar](https://www.bustamantepropiedades.com/10986-venta-casa-estancias-del-pilar-km-50-al-60-pilar) | 360 m2 cubiertos, 2.100 m2 terreno, 4 dormitorios, 4 banos. La ficha ofrece USD 900.000 con muebles. Se usa el importe principal de USD 850.000; el cuerpo tiene un error tipografico en ese importe. |
| bp-12495 / 12495 | Venta, lote | USD 145.000 | [Lote San Francisco](https://www.bustamantepropiedades.com/12495-venta-lote-san-francisco-villanueva-tigre) | 822 m2 de terreno. Sin superficie cubierta, dormitorios ni banos publicados: `null`. Publicado como escriturado y con proyecto aprobado; confirmar documentacion. |
| bp-12089 / 12089 | Alquiler temporario, casa | USD 6.000, 01/01/2027 al 31/01/2027 | [Enero en San Francisco](https://www.bustamantepropiedades.com/12089-alquiler-enero-casa-san-francisco-villanueva-tigre) | 255 m2 cubiertos, 85 m2 semicubiertos, 3 dormitorios y 3 banos. Terreno contradictorio: descripcion 1.250 m2, caracteristicas 1.260 m2; `landArea: null`. No es alquiler anual ni precio extrapolable a otro mes. |

Se conservan sin cambios los cuatro registros originales y se agregan ocho publicaciones distintas, para un total de **12**. Las imagenes son URLs exactas de las galerias oficiales, bajo `https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/`, conservadas completas en `config.js`: **27 fotos**, sin placeholders. El lote 12495 tiene proyecto y renders en su galeria original; la demo advierte que no representan construccion existente y conserva solamente sus primeras dos imagenes publicadas. No se fabricaron URLs de mayor resolucion.

## Ampliacion a doce publicaciones

Fuentes de descubrimiento: [inicio oficial](https://www.bustamantepropiedades.com/) y [alquiler anual en Villanueva](https://www.bustamantepropiedades.com/barrio-cerrado/alquiler-anual/casa/villanueva). Cada ficha fue abierta individualmente con Playwright/Edge el 2026-10-21. Dos fotos exactas por nuevo registro, ambas decodificadas en Edge.

| ID / referencia | Operacion y precio publicado | Ficha oficial | Fotos exactas | Datos y condiciones |
| --- | --- | --- | --- | --- |
| bp-11705 / 11705 | Venta, USD 1.090.000 con muebles | [Casa Castores](https://www.bustamantepropiedades.com/11705-venta-casa-castores-nordelta-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-castores-nordelta-tigre-171231-thumbnail.JPG), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-castores-nordelta-tigre-171275-thumbnail.JPG) | 400 m2 cubiertos, 960 m2 terreno, 4 dormitorios y 3 banos. Lote interno, no lote sobre laguna. |
| bp-12459 / 12459 | Venta, USD 779.000 | [Casa San Isidro Labrador](https://www.bustamantepropiedades.com/12459-venta-casa-san-isidro-labrador-villanueva-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-san-isidro-labrador-villanueva-tigre-216996-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-san-isidro-labrador-villanueva-tigre-216998-thumbnail.jpg) | 320 m2 cubiertos, 800 m2 terreno, 4 dormitorios y 5 banos. Habitacion de planta baja tambien descripta como escritorio. Ascensor hidraulico segun titulo oficial. |
| bp-12351 / 12351 | Venta, USD 1.490.000 | [Casa El Yacht](https://www.bustamantepropiedades.com/12351-venta-casa-el-yacht-nordelta-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-el-yacht-nordelta-tigre-214189-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-casa-el-yacht-nordelta-tigre-214161-thumbnail.jpg) | Se usa superficie cubierta 384 m2, no los 465 m2 totales mencionados en descripcion; 800 m2 terreno, 5 dormitorios y 8 banos del cuadro. El quinto dormitorio tambien admite uso de family/playroom. |
| bp-12530 / 12530 | Venta, USD 275.000 | [Departamento Castanos](https://www.bustamantepropiedades.com/12530-venta-departamento-castanos-nordelta-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-departamento-castanos-nordelta-tigre-221650-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-departamento-castanos-nordelta-tigre-221652-thumbnail.jpg) | 71 m2 cubiertos, 14 m2 semicubiertos no sumados, 144 m2 terreno segun cuadro; 2 dormitorios y 2 banos. |
| bp-12196 / 12196 | Venta, USD 170.000 | [Lote Santa Catalina](https://www.bustamantepropiedades.com/12196-venta-lote-santa-catalina-villanueva-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-lote-santa-catalina-villanueva-tigre-195362-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-lote-santa-catalina-villanueva-tigre-195364-thumbnail.jpg) | 864 m2 de terreno, sin cubierta, dormitorios ni banos publicados. `credit: true` exclusivamente porque la descripcion dice expresamente apto credito; no es aprobacion bancaria. |
| bp-10445 / 10445 | Venta, USD 270.000 | [Lote a la laguna San Francisco](https://www.bustamantepropiedades.com/10445-venta-lote-san-francisco-villanueva-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-lote-san-francisco-villanueva-tigre-197422-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/venta-lote-san-francisco-villanueva-tigre-197424-thumbnail.jpg) | 824 m2 de terreno, costa de laguna 20,75 m. Distinto del 12495: este esta a la laguna, aquel es interno y tiene 822 m2. Sin cubierta, dormitorios ni banos publicados. |
| bp-12606 / 12606 | Alquiler anual, USD 3.000 | [Casa San Marco](https://www.bustamantepropiedades.com/12606-alquiler-anual-casa-san-marco-villanueva-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/alquiler-anual-casa-san-marco-villanueva-tigre-215923-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/alquiler-anual-casa-san-marco-villanueva-tigre-215925-thumbnail.jpg) | 195 m2 cubiertos, 900 m2 terreno, 4 dormitorios y 3 banos. Cuarta habitacion o playroom. Anual es modalidad de contrato; no se extrapola importe total anual ni periodicidad de pago no explicitada. |
| bp-11676 / 11676 | Alquiler anual, USD 2.900 | [Casa Santa Catalina](https://www.bustamantepropiedades.com/11676-alquiler-anual-casa-santa-catalina-villanueva-tigre) | [Foto 1](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/alquiler-anual-casa-santa-catalina-villanueva-tigre-170122-thumbnail.jpg), [foto 2](https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/alquiler-anual-casa-santa-catalina-villanueva-tigre-170124-thumbnail.jpg) | 218 m2 cubiertos, terreno aproximado 990,41 m2 en descripcion y 990 m2 redondeados en cuadro; se conserva precision original. 3 dormitorios y 3 banos. Vestidor principal cerrado con un placard disponible segun aviso. |

## Criterios y limites

- `area` significa superficie cubierta en esta demo, reflejado en las etiquetas; no se suman semicubiertos ni terreno.
- Direccion de las propiedades: se informa el barrio cuando la ficha no publica calle y altura; no se inventa ubicacion exacta.
- `credit: false` salvo 12196, publicado expresamente como apto credito. Escritura y financiacion no equivalen a aptitud crediticia.
- `operations` conserva Venta y Alquiler, en ese orden. Hay dos alquileres anuales y el temporario original para enero de 2027, identificado en titulo y descripcion. La etiqueta general de alquiler ya no atribuye enero a los anuales.
- Todas las propiedades son destacadas de la seleccion demostrativa; no es una promesa de disponibilidad.
- Hero y zonas apuntan solo a la seleccion de doce propiedades, con una zona adicional para Nordelta. No se utilizaron propiedades de otras inmobiliarias.
- Cartera final: 8 casas, 3 lotes y 1 departamento; 9 ventas y 3 alquileres, todos `featured: true`. Los cuatro registros originales y todos sus IDs se mantienen intactos.
- Se excluyo el alquiler 12611 de San Rafael: la lista oficial lo marca Reservado. Los ocho agregados no mostraban estado vendido, reservado o alquilado en las fichas/listas consultadas; no se afirma disponibilidad garantizada.
- No se agregan variantes de venta, alquiler o meses distintos de una misma propiedad para completar el conteo. Cada nuevo registro corresponde a una ficha y un inmueble diferente.
- Tres mensajes genericos ficticios y grafico simulado, identificados como ejemplos, no consultas reales.
- La disponibilidad, las expensas, los gastos y la documentacion requieren confirmacion. Se omiten expensas variables de la seleccion.
- La demo depende de recursos remotos oficiales y del motor compartido `../app.js` y `../styles.css`; no los modifica.

## Verificacion local

- `node --check bustamante-propiedades/config.js`: correcto.
- Schema completo validado: 176 etiquetas; 12 propiedades, 3 heroIds y 3 zonas con referencias validas; IDs, referencias y fichas unicos. Numeros desconocidos en `null`, campos completos y JSON puro envuelto en `window.SITE_CONFIG`.
- Prueba inicial de cuatro registros: inicio y ficha sin errores JavaScript, inicio movil de 390 px sin desborde horizontal; sus 11 imagenes y logo respondieron HTTP 200.
- Ampliacion: las 16 fotos nuevas se cargaron y decodificaron con `Image.decode()` en Edge, todas con dimensiones positivas (420 px de ancho). No se crearon recursos locales ni se alteraron URLs para aumentar resolucion.
- Catalogo local ampliado en Edge a 390 px: 12 tarjetas renderizadas, sin errores JavaScript ni desborde horizontal. Cada nueva ficha y sus dos fotos estan enlazadas en la tabla anterior.
- Contraste de `primary` sobre blanco: 15.32:1. No se ejecuto la suite completa compartida ni se modificaron tests.
