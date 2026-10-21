# Rivas Propiedades: fuentes de la demo

Consulta: **2026-10-21**. Demo independiente, sin backend ni CRM conectado. No se enviaron formularios, correos ni mensajes. Las publicaciones pueden cambiar o dejar de estar disponibles.

## Identidad y contactos

El negocio utilizado es **Rivas Propiedades de Tortuguitas**, en `rivaspropiedades.net`. No se utilizaron datos de `rivaspropiedades.com.ar`, de La Plata, ni propiedades de otras inmobiliarias.

| Campo | Valor incorporado | Fuente pública propia |
| --- | --- | --- |
| Nombre y localidad | Rivas Propiedades, Tortuguitas | [Inicio y título del documento](https://rivaspropiedades.net/) |
| Dirección | Directorio 380, Tortuguitas | El título del [sitio oficial](https://rivaspropiedades.net/) dice "Directorio n°380 Tortuguitas"; coincide con la pista del CSV. No se tomó la dirección de una propiedad como oficina. |
| Trayectoria | Actividad inmobiliaria desde 1989 en Tortuguitas | [Quiénes somos](https://rivaspropiedades.net/quienes-somos/) |
| Teléfono | 02320-491209; enlace `+542320491209` | Texto visible en la [cabecera institucional](https://rivaspropiedades.net/wp-content/uploads/2017/05/Rivas-Cabecera.jpg), enlazada en Quiénes somos |
| Email | rivaspropiedades@yahoo.com.ar | Texto visible en la misma [cabecera](https://rivaspropiedades.net/wp-content/uploads/2017/05/Rivas-Cabecera.jpg) |
| WhatsApp, Instagram, Facebook, matrícula | Cadenas vacías | No corroborados en las fuentes consultadas. No se dedujeron del teléfono ni del CSV. |
| Logo | URL de la cabecera institucional, sin recortes ni reconstrucción | [Rivas-Cabecera.jpg](https://rivaspropiedades.net/wp-content/uploads/2017/05/Rivas-Cabecera.jpg). Es una pieza compuesta, no un archivo de isotipo aislado; su reducción puede limitar la legibilidad. |
| Paleta de la demo | `primary #b5212b`, `secondary #a18412`, `ink #15252b` | Adaptación del rojo, amarillo y fondo oscuro de la cabecera. No son códigos oficiales publicados. Primario oscurecido para contraste sobre blanco; no se adoptó el azul genérico de Bootstrap. |

El teléfono y el correo se verificaron como **publicados**, no se probó su funcionamiento. La imagen institucional está alojada en una ruta de 2017: confirmar vigencia antes de uso comercial.

## Catálogo verificado

Las cinco fichas provienen del sitio oficial y se comprobaron también contra el inicio. Todos los precios son importes publicados, no estimaciones. Los identificadores ASCII son locales de la demo. Las referencias descriptivas no se presentan como códigos oficiales, porque estas fichas no publican uno.

| ID local / ficha original | Tipo / operación | Precio | Datos incorporados y límites |
| --- | --- | --- | --- |
| `rivas-chalet-chile-43` / [Santiago de Chile 43](https://rivaspropiedades.net/propiedad/chalet-en-zona-centrica-de-tortuguitas-a-150-mts-de-ffcc/) | Casa / Venta | USD 125.000 | Cinco ambientes, un baño, 110 m² cubiertos. La ficha dice 300 m² de superficie total, pero no identifica terreno por separado: `landArea: null`. Dormitorios no publicados: `null`. |
| `rivas-quinta-panama` / [Panamá entre El Callao y Combate de San Lorenzo](https://rivaspropiedades.net/propiedad/hermosa-casa-quinta-en-zona-residencial/) | Quinta / Venta | USD 99.000 | Cuatro ambientes y un baño. Publica 1.080 m² totales sin desglose: cubierta y terreno quedan en `null`. Dormitorios `null`. No se añadió una pileta que el texto no confirma. |
| `rivas-lote-astorga` / [Los Álamos casi Presidente Perón, Astorga](https://rivaspropiedades.net/propiedad/unico-lote-a-150-mtrs-de-estacion-tortuguitas-b-astorga/) | Terreno / Venta | USD 55.000 | Lote de 220 m², cero baños explícitos. Cubierta y dormitorios `null`. La ficha lo sitúa a 150 metros de la estación. No se garantizan conexiones de servicios. |
| `rivas-quinta-chile-1335` / [Santiago de Chile 1335](https://rivaspropiedades.net/propiedad/hermosa-casa-quinta-apta-para-credito-bancario-en-tortuguitas/) | Quinta / Venta | USD 185.000 | Cuatro ambientes, dos baños, 134 m² cubiertos, parque y pileta. Publica 1.080 m² totales, sin campo de terreno separado: `landArea: null`. Dormitorios `null`. `credit: true` solo porque el título dice apta para crédito bancario; sujeto a confirmación. |
| `rivas-monoambiente-centro` / [Monoambiente en Tortuguitas centro](https://rivaspropiedades.net/propiedad/alquiler-monoambiente-en-zona-centrica-de-tortuguitas/) | Departamento / Alquiler | ARS 400.000 mensuales | Un ambiente, un baño, sin expensas según ficha. No publica calle ni superficies. No se dedujo un dormitorio: `bedrooms: null`. |

Se conservan las operaciones `Venta` y `Alquiler`. Tipos normalizados de las publicaciones: Casa, Quinta, Terreno y Departamento. Todos son destacados de esta **selección editorial**, no una afirmación de que el cliente los haya marcado así. Solo la quinta de Santiago de Chile 1335 se marca apta crédito; `false` en las demás significa que la demo no tiene confirmación positiva.

## Fotografías y contenido

- Ocho URL remotas de fotografías propias: tres del chalet, una de Panamá, una de Astorga, dos de la quinta de Santiago de Chile 1335 y una del monoambiente. Las URL exactas están en `config.js` y proceden de las fichas o sus tarjetas del inicio. No hay imágenes de stock ni propiedades ajenas.
- Las fotos adicionales del chalet y de la quinta son miniaturas publicadas por el cliente. Se conservan sus nombres y dimensiones; se utiliza HTTPS del mismo servidor para evitar contenido mixto. No se inventaron URL de versiones grandes.
- Las fotos de las zonas y del bloque institucional reutilizan inmuebles seleccionados, con aviso explícito. No se presentan como vistas del barrio ni como fotos de la oficina.
- Descripciones resumidas de forma independiente, sin ampliar prestaciones no publicadas. Las superficies `area` se limitan a metros cubiertos expresos; la etiqueta completa indica "Superficie cubierta informada".
- Tres mensajes genéricos y la actividad del panel están identificados como simulados. No representan personas, consultas ni estadísticas reales.

## Límites y verificación

Se investigó con webfetch y Playwright sobre Microsoft Edge. El catálogo y las fichas fueron accesibles. [Contacto](https://rivaspropiedades.net/contacto/) muestra el shortcode `[contact-form-7 404 "No encontrado"]`, sin datos de contacto legibles: por eso se recurrió a la cabecera de Quiénes somos. La búsqueda de logo independiente en la API de medios no devolvió un logo; otra consulta de medios agotó el tiempo de espera. No se inicializó CodeGraph.

La demo es un corte de publicaciones al 21/10/2026, no una integración con WordPress. Precios, disponibilidad, medidas y aptitud crediticia requieren confirmación. El formulario compartido prepara un borrador local de correo; no envía por sí solo. Los contactos no corroborados quedan vacíos: el tratamiento visual y funcional de esos campos en el motor compartido queda a cargo de la integración principal, sin modificar aquí `app.js`.

Solo se entregan `index.html`, `config.js` y este documento. El esquema completo incluye 175 etiquetas y todas las secciones de la base. La verificación final comprende `node --check`, integridad de IDs/hero/zonas/categorías, comprobación remota de imágenes y recorrido de rutas en escritorio y móvil. No se conecta ni se publica en un CRM.

Resultado: sintaxis y esquema correctos; cinco fichas originales accesibles; ocho fotos y la cabecera con respuesta de imagen y decodificación correcta en Edge; 13 rutas recorridas, favoritos locales probados y comprobaciones de ancho a 1440 y 390 píxeles sin desbordes ni errores de JavaScript. Contraste del primario sobre blanco: 6,53:1. Algunas imágenes fuera de pantalla se cargan de forma diferida; la comprobación independiente confirmó las nueve.

Integración final: el motor común oculta WhatsApp y redes no corroboradas y omite superficies cuando ambas son `null`. Se verificaron importación, recarga y navegación sin introducir cifras ficticias ni canales de contacto supuestos.
