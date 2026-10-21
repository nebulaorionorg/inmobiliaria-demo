# Pallotta Propiedades: fuentes de la demo

Consulta: **2026-10-21**. La demo contiene **5 inmuebles reales: 3 casas y 2 terrenos; 4 ventas y 1 alquiler**. Es una selección estática del sitio oficial, no una conexión a su CRM. No se utilizaron inmuebles, contactos ni mensajes del cliente de la plantilla.

## Publicaciones y precios

Todos los precios se transcribieron de la ficha individual, sin convertir monedas. `area` representa superficie **cubierta**, como indican las etiquetas de esta demo. Los códigos cortos `2bbb55`, `59776e` y `d1c311` son identificadores de la URL original, no referencias comerciales inventadas. Las referencias 1271 y 1186 aparecen en sus descripciones.

| ID demo / referencia | Ficha pública | Operación y precio | Datos corroborados / tratamiento |
|---|---|---|---|
| pp-2bbb55 / 2bbb55 | [Casa en Chubut 300, La Bota](https://pallottapropiedades.com.ar/p/casa-4-ambientes-benavidez-tigre-2bbb55) | Venta, USD 250.000 | 3 dormitorios, 1 baño y un toilette separado; 263 m² cubiertos. `landArea=null`: encabezado de 892 m² frente a descripción de 893 m². |
| pp-e9de65 / 1271 | [Cabaña en Arequipa 1068, La Bota](https://pallottapropiedades.com.ar/p/casa-4-ambientes-benavidez-tigre-e9de65) | Venta, USD 105.000 | 2 dormitorios, 1 baño, 53 m² cubiertos y lote de 312 m² según descripción. Los 26 m² semicubiertos se mencionan en el texto; no se usa el total inconsistente de 66 m² del encabezado. El estudio externo no se cuenta como tercer dormitorio. |
| pp-59776e / 59776e | [Terreno en Tierra del Fuego 616](https://pallottapropiedades.com.ar/p/terreno-benavidez-tigre-59776e) | Venta, USD 188.000 | 2.500 m² de terreno, 100 m² cubiertos publicados; dos casas a refaccionar/demoler y piscina. Dormitorios y baños no publicados: `null`. |
| pp-d72f2f / 1186 | [Lote en Corsini 800, La Bota](https://pallottapropiedades.com.ar/p/terreno-benavidez-tigre-d72f2f) | Venta, USD 64.900 | 720 m² de lote según título y descripción; servidumbre permanente y construcción a demoler. `area=null`: los 724 m² cubiertos del encabezado son inconsistentes. Dormitorios y baños: `null`. |
| pp-d1c311 / d1c311 | [Casa en C. El Sauce 350, La Bota](https://pallottapropiedades.com.ar/p/casa-3-ambientes-benavidez-d1c311) | Alquiler, ARS 1.100.000 | 2 dormitorios, 2 baños y 80 m² cubiertos. `landArea=null`: publica 150 m² totales, sin identificarlos como terreno. Disponibilidad anunciada en noviembre, entrada compartida y sin mascotas según aviso. |

## Contactos e identidad

| Dato | Valor verificado | Fuente pública y criterio |
|---|---|---|
| Marca e historia | Pallotta Propiedades; inmobiliaria familiar desde 2008 | [Inicio oficial](https://pallottapropiedades.com.ar/), sección Nosotros y datos estructurados públicos. |
| Oficina | Ricardo Fernandez 307, Benavídez, Buenos Aires | Pie del inicio oficial. Coincide con la dirección de referencia suministrada, pero se tomó de la web, no del CSV. |
| Teléfono | 11 3124 3301 | Pie del inicio y de las fichas. `phoneHref=+541131243301`, normalización internacional del mismo número argentino. |
| WhatsApp | Número publicado: 1131243301 | Enlaces `https://wa.me/1131243301` del inicio y de las fichas. Se normaliza como `5491131243301` para el enlace internacional móvil argentino, sin cambiar el número local. No se comprobó recepción ni se abrió una conversación. |
| Email | info@pallottapropiedades.com.ar | Enlace `mailto:` del pie oficial; no se envió correo. |
| Matrícula | CMCPSI 7031 | Pie del inicio oficial. No se atribuye un nombre de corredor que no haya sido corroborado. |
| Horario | Lunes a viernes de 10 a 17; sábados de 10 a 13 | Pie del inicio oficial. |
| Instagram | https://www.instagram.com/pallottapropiedades/ | Enlace publicado en el sitio oficial; no se inició sesión. |
| Facebook | https://www.facebook.com/InmobiliariaPallottaPropiedades | Enlace publicado en el sitio oficial. |
| Logo | PNG oficial, 1671 × 941 | [Archivo público enlazado por el sitio](https://vrnquikjmuxazzelbczq.supabase.co/storage/v1/object/public/captaciones/12d61ccb-7585-413d-8998-c295926b8754/site-logo/5c067e16-2866-407e-a067-7566cf0994c4.png). Decodificado correctamente con Edge. |
| Paleta | Primario `#7a1d26`, secundario `#672b30`, tinta `#1e1b19` | El HTML oficial define `--pl-accent:#7a1d26` y texto `#1E1B19`; el logo contiene bordó y tonos casi negros. El secundario es una adaptación oscura de esa familia para botones con texto blanco, no un color oficial atribuido. No se hereda el azul de otra inmobiliaria. |

## Fotografías y método

Las 15 URLs de fotografías de `config.js` se extrajeron de las respectivas fichas, no se construyeron suponiendo rutas. Cada inmueble incluye la imagen principal y dos imágenes adicionales publicadas. El host es `vrnquikjmuxazzelbczq.supabase.co`, dentro del espacio público de captaciones de Pallotta. Las imágenes adicionales con sufijo `_t.jpg` son versiones publicadas de 800 px, no fotografías ajenas. No se descargaron ni se modificaron los archivos originales y no se utilizó placeholder.

Las 15 fotografías y el logo se decodificaron con Playwright y Microsoft Edge, usando `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright`; todas devolvieron dimensiones naturales mayores que cero. El inicio y las cinco fichas fueron legibles con `webfetch`. La navegación del inicio con Edge respondió 403, pero las imágenes públicas cargaron correctamente y el contenido de las fichas fue accesible con `webfetch`.

## Límites y salvedades

- Las fichas de Chubut y Arequipa advierten edición de algunas fotografías con IA para quitar objetos personales. Esa advertencia se mantiene en las descripciones y el aviso general.
- El terreno de Tierra del Fuego menciona alturas de 12 m y de 9 m dentro de la misma publicación. No se promete capacidad constructiva, cantidad de unidades, subdivisión aprobada ni altura admisible.
- No se infieren superficies faltantes, dormitorios a partir de ambientes ni aptitud crediticia. `credit=false` significa que no se corroboró esa condición en estas fichas, no una certificación negativa. Los precios seleccionados sí están publicados; cualquier importe ausente debe permanecer `null`, nunca cero.
- Las dos tarjetas de zonas corresponden a La Bota y su localidad Benavídez, con inventario superpuesto; no simulan dos mercados independientes. Las imágenes son de propiedades, no panorámicas de barrio.
- Se mantuvo la interfaz genérica de la plantilla. No se inventó una sección de artículos ni se copió contenido editorial no verificado. La investigación refleja la versión pública actual del sitio, con buscador, servicios e información institucional.
- El alquiler anuncia noviembre sin garantía de vigencia futura. Depósito, honorarios, ajustes, garantías y disponibilidad deben confirmarse en el aviso original y con el equipo.
- Los destacados son una selección editorial de esta demo. Los tres mensajes, nombres de ejemplo y métricas del panel son ficticios, genéricos y están identificados como simulados.
- No hay conexión real al CRM, autenticación ni envíos automáticos. No se ejecutó contacto, no se enviaron emails ni se completaron formularios externos. Los vínculos oficiales quedan disponibles para uso voluntario del visitante.
- `node --check`, comparación de estructura y de las 175 etiquetas con la plantilla, esquema de propiedades y referencias de `heroIds`/`zones` verificados. La integración y las pruebas de navegación de la demo quedan a cargo del agente principal.
