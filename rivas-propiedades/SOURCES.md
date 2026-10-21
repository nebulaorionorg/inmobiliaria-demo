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

Las doce fichas provienen del sitio oficial y se comprobaron también contra el inicio. La ampliación del 21/10/2026 suma siete propiedades a las cinco originales, cuyos registros e IDs se conservan sin cambios. Todos los precios son importes publicados, no estimaciones. Los identificadores ASCII son locales de la demo. Las referencias descriptivas no se presentan como códigos oficiales, porque estas fichas no publican uno.

| ID local / ficha original | Tipo / operación | Precio | Datos incorporados y límites |
| --- | --- | --- | --- |
| `rivas-chalet-chile-43` / [Santiago de Chile 43](https://rivaspropiedades.net/propiedad/chalet-en-zona-centrica-de-tortuguitas-a-150-mts-de-ffcc/) | Casa / Venta | USD 125.000 | Cinco ambientes, un baño, 110 m² cubiertos. La ficha dice 300 m² de superficie total, pero no identifica terreno por separado: `landArea: null`. Dormitorios no publicados: `null`. |
| `rivas-quinta-panama` / [Panamá entre El Callao y Combate de San Lorenzo](https://rivaspropiedades.net/propiedad/hermosa-casa-quinta-en-zona-residencial/) | Quinta / Venta | USD 99.000 | Cuatro ambientes y un baño. Publica 1.080 m² totales sin desglose: cubierta y terreno quedan en `null`. Dormitorios `null`. No se añadió una pileta que el texto no confirma. |
| `rivas-lote-astorga` / [Los Álamos casi Presidente Perón, Astorga](https://rivaspropiedades.net/propiedad/unico-lote-a-150-mtrs-de-estacion-tortuguitas-b-astorga/) | Terreno / Venta | USD 55.000 | Lote de 220 m², cero baños explícitos. Cubierta y dormitorios `null`. La ficha lo sitúa a 150 metros de la estación. No se garantizan conexiones de servicios. |
| `rivas-quinta-chile-1335` / [Santiago de Chile 1335](https://rivaspropiedades.net/propiedad/hermosa-casa-quinta-apta-para-credito-bancario-en-tortuguitas/) | Quinta / Venta | USD 185.000 | Cuatro ambientes, dos baños, 134 m² cubiertos, parque y pileta. Publica 1.080 m² totales, sin campo de terreno separado: `landArea: null`. Dormitorios `null`. `credit: true` solo porque el título dice apta para crédito bancario; sujeto a confirmación. |
| `rivas-monoambiente-centro` / [Monoambiente en Tortuguitas centro](https://rivaspropiedades.net/propiedad/alquiler-monoambiente-en-zona-centrica-de-tortuguitas/) | Departamento / Alquiler | ARS 400.000 mensuales | Un ambiente, un baño, sin expensas según ficha. No publica calle ni superficies. No se dedujo un dormitorio: `bedrooms: null`. |

### Siete incorporaciones

| ID local / ficha original | Tipo / operación | Precio publicado | Datos incorporados y excepciones |
| --- | --- | --- | --- |
| `rivas-depto-fonavi-torre-2` / [Ex Fonavi, Torre 2, piso 5](https://rivaspropiedades.net/propiedad/excelente-depto-en-barrio-24-de-febrero-ex-fonavi/) | Departamento / Venta | USD 60.000 | Cuatro ambientes, tres dormitorios, un baño, balcón, ascensor y aire acondicionado. Publica 68,31 m² totales, no cubierta separada: `area: null`; terreno `null`. La localización se publica como Garín / Tortuguitas. Listo para escriturar no equivale a apto crédito: `credit: false`. |
| `rivas-tinglado-lavallol-4041` / [Felipe Lavallol 4041](https://rivaspropiedades.net/propiedad/tinglado-industrial-de-usos-multiples-con-oficina-en-el-corazon-de-tortuguitas-apta-para-credito/) | Galpón / Venta | USD 130.000 | Tinglado de usos múltiples con oficina, tres ambientes, dos baños y 170 m² cubiertos. Publica 350 m² totales sin terreno separado: `landArea: null`. Dormitorios `null`. Apto crédito explícito, sujeto a confirmación; no se infieren habilitaciones. |
| `rivas-chalet-santa-maria-1139` / [Santa María 1139, Manuel Alberti](https://rivaspropiedades.net/propiedad/hermoso-chalet-en-manuel-alberti-a-metros-de-av-hipolito-yrigoyen-y-a-300-mt-de-estacion-de-m-alb/) | Casa / Venta | USD 120.000 | Vivienda principal con departamento al fondo, como una sola oferta. Cuadro de cuatro ambientes, un baño y 143,68 m² cubiertos; 300 m² totales sin terreno separado. No desglosa baños del anexo ni dormitorios: se conserva el baño publicado y `bedrooms: null`, con advertencia en la descripción. |
| `rivas-casa-nobel-4605` / [Alfredo Nobel 4605, El Chelito](https://rivaspropiedades.net/propiedad/importante-propiedad-en-b-el-chelito-tortuguitas-apta-credito/) | Casa / Venta | USD 138.000 | Seis ambientes, dos baños y 144 m² cubiertos aproximados. La ficha publica 351 m² totales sin terreno separado; dormitorios y terreno `null`. Título explícito apta crédito, sujeto a confirmación. |
| `rivas-lote-laprida-7278` / [Narciso Laprida 7278, Del Viso](https://rivaspropiedades.net/propiedad/hermoso-lote-en-zona-residencial-de-del-viso-oportunidad/) | Terreno / Venta | USD 36.000 | Lote de 330 m² y cero baños explícitos. Cubierta y dormitorios `null`. Gas y electricidad enumerados en la ficha no garantizan conexiones efectivas. Precio a conversar, sin modificar su importe. |
| `rivas-quinta-moreno-1492` / [Moreno 1492, Tortuguitas](https://rivaspropiedades.net/propiedad/casa-quinta-en-tortuguitas-2-chalets-zona-exclusiva-a-300-mtrs-de-estacion/) | Quinta / Venta | USD 200.000 | Dos chalets en una única oferta, contada una sola vez. Ocho ambientes y dos baños. Cubierta `190` resulta de sumar los 120 m² del chalet principal y 70 m² del secundario, ambos publicados; no es una medición independiente. Total aproximado de 1.693 m² sin terreno separado: `landArea: null`. Dormitorios `null`. |
| `rivas-monoambiente-washington` / [Washington, José C. Paz](https://rivaspropiedades.net/propiedad/alquiler-monoambiente-sobre-la-calle-washington/) | Departamento / Alquiler | ARS 450.000 mensuales | Un ambiente, un baño y expensas cero. La calle aparece en el título, sin altura. No publica superficies ni dormitorio independiente: `area`, `landArea` y `bedrooms` en `null`. No se presenta como alquiler temporal. |

Se conservan las operaciones `Venta` y `Alquiler`: diez ventas y dos alquileres mensuales. Tipos normalizados de las publicaciones: Casa, Quinta, Terreno, Departamento y el nuevo tipo Galpón. Los doce son destacados de esta **selección editorial**, no una afirmación de que el cliente los haya marcado así. La quinta de Santiago de Chile 1335, el tinglado de Felipe Lavallol 4041 y la casa de Alfredo Nobel 4605 se marcan aptos crédito por afirmación expresa de sus fichas; `false` en las demás significa que la demo no tiene confirmación positiva.

No se dividieron las dos construcciones de Moreno ni la vivienda con anexo de Santa María para incrementar el conteo. Las doce ofertas tienen fuentes y ubicaciones distintas; no se incorporaron avisos de varias unidades sin distinguirlas como si fueran registros independientes. En las fichas seleccionadas no se observaron marcas de vendido, reservado o suspendido. Eso no acredita disponibilidad en tiempo real.

## Fotografías y contenido

- Veintiuna URL remotas de fotografías propias: se conservan las ocho originales y se agregan trece, dos por ficha nueva salvo Washington, que tiene una. Las URL exactas están en `config.js` y proceden de las fichas o sus tarjetas del inicio. No hay imágenes de stock ni propiedades ajenas.
- Las fotos adicionales del chalet y de la quinta son miniaturas publicadas por el cliente. Se conservan sus nombres y dimensiones; se utiliza HTTPS del mismo servidor para evitar contenido mixto. No se inventaron URL de versiones grandes.
- Las fotos de las zonas y del bloque institucional reutilizan inmuebles seleccionados, con aviso explícito. No se presentan como vistas del barrio ni como fotos de la oficina.
- Descripciones resumidas de forma independiente, sin ampliar prestaciones no publicadas. Las superficies `area` se limitan a metros cubiertos expresos; la etiqueta completa indica "Superficie cubierta informada".
- Tres mensajes genéricos y la actividad del panel están identificados como simulados. No representan personas, consultas ni estadísticas reales.

## Límites y verificación

Se investigó con webfetch y Playwright sobre Microsoft Edge. El catálogo y las fichas fueron accesibles. [Contacto](https://rivaspropiedades.net/contacto/) muestra el shortcode `[contact-form-7 404 "No encontrado"]`, sin datos de contacto legibles: por eso se recurrió a la cabecera de Quiénes somos. La búsqueda de logo independiente en la API de medios no devolvió un logo; otra consulta de medios agotó el tiempo de espera. No se inicializó CodeGraph.

La demo es un corte de publicaciones al 21/10/2026, no una integración con WordPress. Precios, disponibilidad, medidas y aptitud crediticia requieren confirmación. El formulario compartido prepara un borrador local de correo; no envía por sí solo. Los contactos no corroborados quedan vacíos: el tratamiento visual y funcional de esos campos en el motor compartido queda a cargo de la integración principal, sin modificar aquí `app.js`.

En esta ampliación solo se modifican `config.js` y este documento. No se modifican el index ni el motor compartido. El esquema completo conserva 175 etiquetas, marca, contactos, mensajes simulados, hero y zonas existentes. La fecha sigue siendo 2026-10-21. No se conecta ni se publica en un CRM.

Resultado de la ampliación: `node --check` y esquema correctos; doce IDs y fuentes únicos, referencias hero/zonas válidas y registros originales conservados. Las doce fichas originales responden correctamente y cada foto figura en el HTML de su fuente. Las veintiuna fotos y la cabecera responden como imagen y se decodifican en Edge sin errores. Se recorrieron 20 rutas, se probaron favoritos locales y anchos de 1440 y 390 píxeles sin desbordes ni errores de JavaScript. Contraste del primario sobre blanco: 6,53:1. Algunas imágenes fuera de pantalla son diferidas; la comprobación independiente confirmó las 22.

Integración final: el motor común oculta WhatsApp y redes no corroboradas y omite superficies cuando ambas son `null`. Se verificaron importación, recarga y navegación sin introducir cifras ficticias ni canales de contacto supuestos.
