# Nazareth Propiedades: fuentes y limites

Consulta: **2026-10-21**. Demo independiente, sin backend, autenticacion ni integracion automatizada con el sitio de Nazareth. No se enviaron formularios, consultas ni emails.

## Resultado

Se reproducen tres registros del sitio publico: dos casas identificadas por numero de opcion y el lote adjunto publicado con precio separado en la opcion 174. No equivalen a disponibilidad confirmada. El sitio tiene un pie de copyright de 2014 y no muestra fecha de actualizacion de sus publicaciones; la fecha de consulta no certifica su vigencia.

`webfetch` fallo por transporte tanto para la portada como para una imagen. La investigacion se completo con Playwright en Microsoft Edge, usando HTTPS; portada y categorias devolvieron HTTP 200 al admitir errores de certificado. Una segunda comprobacion, sin esa excepcion, devolvio **ERR_CERT_AUTHORITY_INVALID** tanto en portada como en la foto de casa180_1. Para no depender de ese TLS, se descargo y preservo la foto original de la opcion 180 en `assets/nazareth-propiedades/`, dentro de los assets compartidos de la raiz del proyecto, con autorizacion expresa para ese binario. Se sirve localmente, no desde el dominio fuente. Los enlaces originales se conservan como fuentes, pero pueden mostrar una advertencia de seguridad.

## Fuentes publicas

| Fuente | Informacion observada |
| --- | --- |
| [Inicio](https://www.nazarethpropiedades.com.ar/Inicio/) | Marca textual, puertas abiertas desde 1982; compra, venta, alquiler y administracion; tasaciones, planos y mensuras. |
| [Contacto](https://www.nazarethpropiedades.com.ar/Contacto/) | Pie institucional: 0348-4471248, info@nazarethpropiedades.com.ar, Presidente Peron 957, Garin, partido de Escobar, Buenos Aires. El mapa de origen muestra un error de Google Maps; no se incorpora ese mapa ni sus parametros. |
| [Casas](https://www.nazarethpropiedades.com.ar/Casas/) | Opcion 180, Cigliutti 180; opcion 93, 2 de Abril 535; opcion 174, casa y lote adjunto con precios separados. Publicaciones dentro de una pagina colectiva, sin ficha individual enlazable. |
| [Lotes](https://www.nazarethpropiedades.com.ar/Lotes/) | Oferta agrupada en barrio Beliera, calle Francia; varias dimensiones y tres precios sin vinculo a parcelas individuales. No se incluye en la demo para evitar precios ambiguos. |
| [Locales](https://www.nazarethpropiedades.com.ar/Locales/) | Venta y alquiler de locales anunciados; no incluidos en la seleccion. |
| [Departamentos](https://www.nazarethpropiedades.com.ar/Departamentos/) | Solo texto de plantilla e imagen generica; no se genero ninguna propiedad a partir de esa pagina. |

## Publicaciones y precios

| ID demo / referencia | Fuente | Operacion / precio observado | Datos usados y limites |
| --- | --- | --- | --- |
| naz-180 / opcion 180 | [Casas](https://www.nazarethpropiedades.com.ar/Casas/) | Venta, USD 120.000 | Cigliutti 180; 2 dormitorios, 1 bano, cocina comedor, living, garage y gas natural. Sin superficies publicadas. |
| naz-93 / opcion 93 | [Casas](https://www.nazarethpropiedades.com.ar/Casas/) | Venta, USD 95.000 | 2 de Abril 535; 2 dormitorios, 1 bano, cocina comedor y galeria. Sin superficies ni foto individual identificada. |
| naz-174-lote / opcion 174, lote adjunto | [Casas](https://www.nazarethpropiedades.com.ar/Casas/) | Venta, USD 60.000 | El texto distingue casa de USD 100.000 y lote adjunto de USD 60.000, ambos con dimensiones de 10 x 50 m. Se incluye solo el lote. No publica direccion: `address=''`. No se calcula una superficie total a partir de las dimensiones: `landArea=null`; las medidas originales se conservan en texto. Confirmar la posibilidad de venta separada. |

La pagina Casas pertenece al sitio institucional de Garin; esa es la localidad contextual usada para los tres registros, no una verificacion catastral de cada ubicacion. Confirmar ubicacion exacta, documentacion, condiciones y disponibilidad directamente con la inmobiliaria. No se comprobo aptitud crediticia: `credit=false` significa no verificada, no rechazo bancario.

## Fotos e identidad

- [Imagen casa180_1](https://www.nazarethpropiedades.com.ar/gallery_gen/10e4bbbd930c415c68d1148d6d18d942_990x1306.7741935484.jpeg): URL exacta del elemento `img` de Casas, con `alt="casa180_1"`. Se preserva el binario original, sin recorte, conversion ni edicion, en `assets/nazareth-propiedades/casa-180.jpg`, relativo a la raiz del proyecto donde reside `app.js`, no al directorio del cliente. El archivo se movio desde la ubicacion anidada incorrecta; no queda duplicado ni el subdirectorio vacio que lo contenia. Solo se asigna a `naz-180`; no representa la opcion 93 ni el lote de opcion 174.
- Descarga publica realizada con Playwright `APIRequestContext.get` y `ignoreHTTPSErrors:true` exclusivamente en esa peticion a la URL exacta. Se desactivaron las redirecciones para impedir que la excepcion alcanzara otro origen; no se modificaron permisos TLS globales. Respuesta HTTP 200, `Content-Type: image/jpeg`, firma JPEG valida, **943.652 bytes**, **980 x 1306 pixeles**. SHA-256: `eab5fc8cf42b65fe192b49333fab758d812c8aa309cc0464b412c1018a30db59`. Se verificaron identidad de bytes y decodificacion del archivo local en Edge.
- La referencia local no necesita excepciones TLS ni peticiones al sitio de Nazareth. Al integrar y publicar la demo en Pages, la foto se servira por el HTTPS de Pages junto con el resto de archivos; esta tarea no publica el sitio.
- `assets/placeholder.svg`: marcador propio, explicitamente no fotografico, conservado para la opcion 93 y el lote adjunto de opcion 174, sin foto individual identificada. No se asignan las cabeceras genericas del sitio a propiedades. Se mantiene `zones=[]`, sin incorporar nuevas tarjetas de zonas.
- No se recupero un logo independiente. El nombre de marca es texto blanco en el sitio; `brand.logo=''`. La imagen GIF del pie no se adopta como logo.
- El menu activo muestra el acento `rgb(210,143,92)` (`#d28f5c`). Se adapta la identidad calida a `primary=#6f442c`, `secondary=#8a5635`, `ink=#30251e`, oscureciendo los fondos para texto blanco legible. Son colores de adaptacion de la demo, no un manual de marca oficial.
- No se verificaron WhatsApp, redes sociales ni matricula; esos campos quedan vacios. No se transforma el telefono fijo en WhatsApp.

## Alcance de la demo

Se mantienen Venta y Alquiler como operaciones; no se inventan alquileres para completar el filtro. Los tipos Casa y Terreno corresponden a esta seleccion. Hay tres mensajes ficticios genericos, rotulados como tales, y actividad de panel simulada. No son consultas ni metricas de Nazareth. La interfaz, los estados y favoritos son demostrativos; los datos no se sincronizan con el sitio real.

## Verificacion tecnica

Configuracion evaluada con Node.js/VM como `window.SITE_CONFIG`, JSON interno valido y todas las claves de la referencia conservadas, incluidas las 175 etiquetas. Se comprobaron tipos numericos/null, IDs unicos, referencias de hero, tres mensajes ficticios y ausencia de datos del cliente de referencia. HTML analizado con DOMParser en Edge; nodos de montaje, orden de scripts con `defer` y referencias locales correctos. Placeholder local existente. La foto local de opcion 180 se decodifico en Edge con dimensiones de 980 x 1306, sin conexion al origen; los otros dos registros conservan sus placeholders. Tras mover el JPEG a los assets de la raiz, se verifico que `new URL(images[0], assetBase)` apunta al archivo existente, usando `assetBase = new URL('.', URL_de_app.js)` como en la aplicacion. Tamano y SHA-256 coinciden con el original; la ruta de `config.js` no se modifico. Contraste blanco/primary: 8,27:1. No se ejecuto el flujo general de la aplicacion compartida: la integracion y esa prueba quedan a cargo del principal.
