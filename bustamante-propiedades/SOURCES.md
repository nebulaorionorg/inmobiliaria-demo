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

Las imagenes son URLs exactas de las galerias oficiales, bajo `https://www.bustamantepropiedades.com/storage/bustamantepropiedades/public/`, conservadas completas en `config.js`. Se incluyeron 11 imagenes, sin placeholders. El lote tiene proyecto y renders en su galeria original; la demo advierte que no representan construccion existente y conserva solamente sus primeras dos imagenes publicadas. No se fabricaron URLs de mayor resolucion.

## Criterios y limites

- `area` significa superficie cubierta en esta demo, reflejado en las etiquetas; no se suman semicubiertos ni terreno.
- Direccion de las propiedades: se informa el barrio cuando la ficha no publica calle y altura; no se inventa ubicacion exacta.
- `credit: false` en todas: escritura no equivale a aptitud crediticia verificada.
- `operations` conserva Venta y Alquiler. La unica ficha de alquiler es temporaria y se identifica en titulo, descripcion, servicios, disclaimer y etiqueta de precio.
- Todas las propiedades son destacadas de la seleccion demostrativa; no es una promesa de disponibilidad.
- Hero y zonas apuntan solo a estas cuatro propiedades. No se utilizaron propiedades de otras inmobiliarias.
- Tres mensajes genericos ficticios y grafico simulado, identificados como ejemplos, no consultas reales.
- La disponibilidad, las expensas, los gastos y la documentacion requieren confirmacion. Se omiten expensas variables de la seleccion.
- La demo depende de recursos remotos oficiales y del motor compartido `../app.js` y `../styles.css`; no los modifica.

## Verificacion local

- `node --check bustamante-propiedades/config.js`: correcto.
- Schema completo cotejado con la plantilla: 176 etiquetas; 4 propiedades, 3 heroIds y 2 zonas con referencias validas; IDs unicos ASCII y numeros desconocidos como `null`.
- Edge headless: inicio y ficha renderizados sin errores JavaScript; inicio movil de 390 px sin desborde horizontal.
- 11 URLs de imagenes y el logo respondieron HTTP 200 con contenido de imagen; el logo tambien cargo en el encabezado local.
- Contraste de `primary` sobre blanco: 15.32:1. No se ejecuto la suite completa compartida ni se modificaron tests.
