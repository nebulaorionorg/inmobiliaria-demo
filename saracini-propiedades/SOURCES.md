# Saracini Propiedades: propuesta sin catalogo inventado

Consulta: **2026-10-22**. Se entrega configuracion completa y HTML para Saracini Propiedades, Belen de Escobar, con **0 propiedades**: no fue posible verificar fichas y fotos directamente. Se aplica la excepcion pedida: `properties=[]`, `home.heroIds=[]`, `zones=[]` y `types=[]`. No se sustituye esa falta con inmuebles de otra inmobiliaria, placeholders ni avisos parciales del buscador.

No se contacta a la inmobiliaria, no se abren enlaces de WhatsApp y no se envian emails ni formularios. Propuesta independiente, sin backend, autenticacion, CRM ni sincronizacion.

## Acceso y fuentes

| Fuente completa | Resultado y uso |
| --- | --- |
| https://www.saracinipropiedades.com.ar/ | URL indicada por el usuario y reconocida por el buscador como Saracini Propiedades. webfetch devuelve error de transporte; Edge devuelve ERR_CONNECTION_REFUSED. No se recupera HTML oficial. |
| https://saracinipropiedades.com.ar/ | Mismo error de transporte y rechazo de conexion en Edge. |
| http://www.saracinipropiedades.com.ar/ | Rechazo de conexion en Edge, sin contenido. No se usa como reemplazo inseguro para recursos. |
| http://saracinipropiedades.com.ar/ | Rechazo de conexion en Edge, sin contenido. |
| https://www.saracinipropiedades.com.ar/propiedades/ | Ruta encontrada en el buscador; webfetch falla por transporte. |
| https://html.duckduckgo.com/html/?q=Saracini+Propiedades+Escobar | Extractos indexados del sitio oficial y redes; confirma nombre y contexto Escobar. No prueba vigencia de los avisos. |
| https://html.duckduckgo.com/html/?q=site%3Asaracinipropiedades.com.ar+propiedad | Descubre fichas oficiales diferentes, pero no aporta una galeria de fotos atribuible y verificable. No se convierte ningun extracto en un inmueble de demo. |
| https://html.duckduckgo.com/html/?q=site%3Asaracinipropiedades.com.ar+contacto+email | Extracto del sitio oficial, ruta Galpon, con contacto: Cesar Diaz 972 - Escobar; 348-4407682; info@saracinipropiedades.com.ar; 348-4226749. Fuente indirecta, no lectura directa del pie. |
| https://www.saracinipropiedades.com.ar/tipo-propiedad/galpon/ | URL del resultado oficial al que corresponde el extracto de contactos; no se obtuvo su contenido directamente. |
| https://www.instagram.com/p/DYh-wLalSXP/ | El buscador atribuye a saracini.propiedades una publicacion del 19/05/2026 sobre nueva oficina en Cesar Diaz 972. webfetch solo obtiene pantalla/imagenes de acceso de Instagram, no el texto completo: no se presenta como confirmacion directa. |
| https://www.averi.com.ar/inmobiliaria/288-saracini-propiedades | Portal externo consultado solo como contraste. Muestra Mateo Gelves 770 y un numero de WhatsApp diferente al extracto oficial. No se adoptan direccion, numero, catalogo ni fotos del portal como fuente oficial. |
| https://www.google.com/search?q=%22Saracini%22+%22propiedades%22+Escobar | Edge recibe pantalla de trafico inusual; no se resuelve CAPTCHA ni se evade el bloqueo. |
| https://www.google.com/search?q=Saracini+Propiedades+Escobar+saracinipropiedades.com.ar | webfetch obtiene pagina de redireccion sin resultados utilizables. |
| https://www.google.com/search?q=site%3Asaracinipropiedades.com.ar&gbv=1 | webfetch obtiene pagina de redireccion sin resultados utilizables. |
| https://www.bing.com/search?q=%22saracinipropiedades.com.ar%22 | Resultados ajenos a la consulta; no se usan como evidencia. |
| https://www.bing.com/search?q=%22Saracini%22+%22propiedades%22+Escobar | Edge obtiene resultados ajenos/inutilizables; no se usan como evidencia. |

Se utiliza Playwright con Microsoft Edge y el modulo instalado en `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright`. No se cambia TLS global ni se inicializa CodeGraph: se respeta el fallo previo informado y se usa lectura directa de los archivos concretos de referencia.

## Fichas intentadas, no incorporadas

| Ficha oficial descubierta | Lo que permite ver el buscador | Limite |
| --- | --- | --- |
| https://www.saracinipropiedades.com.ar/propiedad/234654_casa-quinta-en-venta-el-cazador/ | Titulo de casa quinta en venta, tres ambientes, piscina y parque en El Cazador. | webfetch falla por transporte; Edge devuelve ERR_CONNECTION_REFUSED. No se obtiene precio, cuadro completo ni fotos propias verificadas. |
| https://www.saracinipropiedades.com.ar/propiedad/220783_lote-en-venta-en-puertos/ | Lote en Nativas, Puertos, aproximadamente 639 m2. | webfetch falla por transporte. No se puede confirmar estado comercial, precio ni imagen; no se asume disponibilidad por tratarse de un lote. |
| https://www.saracinipropiedades.com.ar/propiedad/226058_casa-en-venta-en-belen-de-escobar/ | Casa a reciclar sobre Patricias Mendocinas al 2000; el extracto menciona tres dormitorios y un bano. | webfetch falla por transporte. No se convierte la mencion indexada de apto credito en una condicion comprobada ni se completan precio o fotos. |

El objetivo eran tres inmuebles propios diferentes. Las referencias de busqueda, incluso SAR-236190 en Durero 1743 y SAR-207976 en Camilo Fateche 285, no bastan para cargar un catalogo con fotos exactas y ficha verificada. No se mezclan precios o medidas entre extractos. No se declara que Saracini no tenga propiedades; solamente que esta demo no pudo verificarlas.

## Valores de configuracion

| Campo | Valor | Evidencia y salvedad |
| --- | --- | --- |
| Marca / nombre corto | Saracini Propiedades / Saracini | Usuario y resultados del dominio oficial. |
| Iniciales / descriptor | SR / PROPIEDADES EN ESCOBAR | Adaptacion textual de demo, no un logo oficial. |
| Sitio | https://www.saracinipropiedades.com.ar/ | URL indicada por el usuario; inaccesible en esta consulta. |
| Direccion | Cesar Diaz 972, Escobar | Extracto indexado del sitio oficial y anuncio social indexado coincidente. No se usa Mateo Gelves 770 del portal externo. Pendiente de confirmacion directa. |
| Region | Buenos Aires, Argentina | Contexto de Belen de Escobar indicado por el usuario; sin codigo postal inventado. |
| Telefono / phoneHref | 348-4407682 / +543484407682 | Texto del contacto oficial indexado, normalizado para `tel:`. El segundo numero indexado, 348-4226749, se documenta pero no se mezcla en un unico enlace. Ambos requieren confirmacion directa. |
| Email | info@saracinipropiedades.com.ar | Extracto oficial indexado, no inferido del dominio. Pendiente de confirmacion directa. |
| WhatsApp / display | Cadena vacia / cadena vacia | No se convierte ninguno de los telefonos en WhatsApp. No se adopta el numero de Averi. |
| Logo / matricula / Instagram / Facebook | Cadenas vacias | No se recuperan/verifican directamente. No se extraen imagenes de acceso social ni favicons como logo. |
| Primary / secondary / ink | #374151 / #4b5563 / #202936 | Paleta neutra provisional de Nebula, no atribuida a Saracini: la paleta oficial no pudo verificarse. No se reutilizan los colores del cliente de referencia. |
| Properties / heroIds / zones / types | Arrays vacios | Sin fichas, fotos ni relaciones falsas. No se inventan IDs o referencias. |
| Operaciones | Venta, Alquiler | Vocabulario del motor; no implica que haya ofertas verificadas en esta demo. |
| Fecha | 2026-10-22 | Fecha de consulta e intento, no de verificacion directa de inventario. La etiqueta visible explica esa diferencia. |
| Copyright | Propuesta independiente de Nebula. Marca y materiales pertenecen a sus respectivos titulares. | Sin copiar copyright ni datos de otra inmobiliaria. |

No existen precios ni valores numericos de propiedades porque no se crean registros. Tampoco se crean imagenes de relleno, renders, assets descargados, hero fotografico ni zonas. Los tres mensajes genericos y la actividad del panel son ejemplos simulados, no consultas o metricas de Saracini.

## Integracion del motor compartido

`config.js` conserva todas las claves del esquema de `cristian-moos/config.js`, incluidas sus 175 etiquetas, con los datos especificos reemplazados y `meta.proposalNotice` adicional. Es exclusivamente `window.SITE_CONFIG =` y JSON. El HTML conserva los nodos y referencias `config.js`, `../app.js` y `../styles.css`. El aviso exacto es **Propuesta independiente de Nebula. Sin vinculo comercial ni autorizacion de esta inmobiliaria.**, con las tildes requeridas en JSON/HTML; el `aside` tiene ID y clase `proposal-notice`, `role=note`, despues del skip link y antes del header.

En la investigacion inicial se detecto que `heroMarkup` y `aboutBlock` exigian un inmueble. La integracion principal resolvio ese limite: inicio y nosotros ahora presentan contenido institucional sin propiedades, fotografias ni controles ficticios. La importacion admite inventario vacio y valida que no haya referencias inexistentes. El aviso independiente se muestra antes del header en rutas publicas y dentro de la nota de demostracion en el panel.

La unidad se limita a `saracini-propiedades/config.js`, `saracini-propiedades/index.html` y este documento. Puede retirarse sin modificar archivos compartidos. No se modifican motor, estilos, directorio, tests ni documentacion compartida. No se realiza commit ni push.

## Verificacion realizada

- `node --check saracini-propiedades/config.js`: correcto, codigo de salida 0. JSON interno analizado con `JSON.parse` y evaluado en VM como `window.SITE_CONFIG`.
- Comparacion recursiva con el esquema completo de referencia: todas las claves conservadas, 175 etiquetas, tres mensajes genericos simulados, fecha 2026-10-22, operaciones Venta/Alquiler y arrays vacios deliberados. Sin datos especificos del cliente de referencia ni relaciones inventadas.
- Contraste blanco sobre primary provisional `#374151`: **10,31:1**, superior a 4,5:1. No es una paleta oficial verificada.
- Referencias `config.js`, `../app.js`, `../styles.css` y favicon compartido existentes. Edge confirma scripts con `defer`, montajes, texto exacto del aviso, `role=note` y orden skip link / aviso / header.
- La carga directa de `#/propiedades` en servidor HTTP efimero renderiza el catalogo con **0 tarjetas** y el texto explicativo. No hay fotos de propiedades ni logo que verificar; no se descarga ningun asset.
- Integracion final: portada, nosotros, catalogo, contacto, favoritos y panel recorridos a 1440 y 390 px sin errores JavaScript ni desbordamiento. El inventario vacio se importa, exporta y conserva tras recargar; las referencias falsas de hero se rechazan.
- Se verifico el aviso independiente visible y su incorporacion en la nota del panel, sin superposicion con la barra lateral. Esta validacion es local; las pruebas contra Pages se ejecutan por separado al completar la publicacion autorizada.
