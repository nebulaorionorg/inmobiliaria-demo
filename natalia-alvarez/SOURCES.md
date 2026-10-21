# Natalia Alvarez Propiedades: fuentes y limites

Consulta: **2026-10-21**. Demo independiente con tres fichas publicas del sitio oficial. Sin backend, autenticacion ni integracion automatizada con Tokko Broker o con la inmobiliaria. No se enviaron formularios, consultas ni emails.

## Fuentes publicas

| Fuente | Informacion observada |
| --- | --- |
| [Inicio](https://www.inmobiliariaalvarez.com.ar/) | Marca, logo, colores CSS, telefono, WhatsApp, direccion y enlaces de redes sociales. Pie identifica software Tokko Broker. |
| [Propiedades](https://www.inmobiliariaalvarez.com.ar/Propiedades) | Catalogo publico con precios, referencias y fotografias. Se seleccionaron casa, terreno y departamento; no se copio el listado completo ni el selector generico de tipos de Tokko. |
| [La Empresa](https://www.inmobiliariaalvarez.com.ar/s/La-Empresa) | Intermediacion en compra, venta y alquiler; confianza, seguridad, compromiso, integridad y profesionalismo. |
| [Tasacion](https://www.inmobiliariaalvarez.com.ar/Tasacion) | Enlace del menu oficial que ofrece el canal de tasacion; no se envio solicitud. |

Portada, listado y fichas se consultaron con `webfetch`. Playwright en Microsoft Edge confirmo el email publico decodificado en el enlace `mailto:` de portada y la carga del logo (863 x 491). No se incorporan datos de agentes individuales ni parametros de seguimiento.

## Publicaciones y precios

| ID demo / referencia | Ficha publica | Operacion / precio | Datos comprobados |
| --- | --- | --- | --- |
| na-8443862 / IHO8443862 | [Lagar al 200](https://www.inmobiliariaalvarez.com.ar/p/8443862-Casa-en-Venta-en-Garin-Lagar-al-200) | Venta, USD 64.900 | Casa en Garin; 1 dormitorio, 1 bano, 300 m2 de lote, 80,06 m2 cubiertos, 20,22 m2 semicubiertos y 100,28 m2 de total construido. Tres cocheras, gas natural y jardin. |
| na-10338505 / ILA10338505 | [Martin H. Falco al 500](https://www.inmobiliariaalvarez.com.ar/p/10338505-Terreno-en-Venta-en-Garin-Martin-H.-Falco-al-500) | Venta, USD 69.000 | Terreno de 300 m2 en Garin. Frente publicado de 8,66 m, fondo de 34,64 m. Menciona pavimento. No se afirman conexiones de otros servicios ni edificabilidad. |
| na-11685865 / IAP11685865 | [Jose Hernandez al 1000](https://www.inmobiliariaalvarez.com.ar/p/11685865-Departamento-en-Alquiler-en-Garin-Jose-Hernandez-al-1000) | Alquiler, ARS 650.000 | Departamento en primer piso, 1 dormitorio, bano completo segun descripcion, 50 m2 cubiertos. La ficha menciona aumento trimestral del 10%; confirmar condiciones vigentes. |

Se conserva la moneda original, sin conversiones. `area` representa total construido en la interfaz: se usa 100,28 para la casa y `null` para terreno y departamento. Para este ultimo solo se publico superficie cubierta de 50 m2; se mantiene en descripcion y caracteristicas, sin equipararla a un total construido no informado. Los ceros de plantilla del listado no se presentan como superficies reales. Dormitorios, banos y superficies no aplicables del lote quedan en `null`. Ninguna ficha seleccionada especifica credito: `credit=false` significa no verificado.

## Fotos y logo

Las nueve URLs fotograficas exactas de `config.js` provienen de las galerias de estas tres fichas, tres fotos por inmueble. No se usan fotos de otros clientes ni placeholders.

| Recurso | Origen |
| --- | --- |
| Fotos de casa | [Galeria Lagar](https://www.inmobiliariaalvarez.com.ar/p/8443862-Casa-en-Venta-en-Garin-Lagar-al-200), archivos `w_pics/8443862_...jpg`. |
| Fotos de lote | [Galeria Falco](https://www.inmobiliariaalvarez.com.ar/p/10338505-Terreno-en-Venta-en-Garin-Martin-H.-Falco-al-500), archivos `w_pics/10338505_...jpg`. |
| Fotos de departamento | [Galeria Jose Hernandez](https://www.inmobiliariaalvarez.com.ar/p/11685865-Departamento-en-Alquiler-en-Garin-Jose-Hernandez-al-1000), archivos `w_pics/11685865_...jpg`. |
| Logo oficial remoto | [Logo_con_matricula.png](https://static.tokkobroker.com/tfw_images/9792_Inmobiliaria%20ALVAREZ/Logo_con_matricula.png), publicado en cabecera y pie. No se transcribe una matricula sin comprobacion legible. |

El sitio advierte que las imagenes tienen edicion estetica digital asistida por IA y que algunas son ilustrativas. Se conserva esa advertencia en la demo. No se afirma que ninguna imagen concreta este libre de edicion ni se sustituye una inspeccion presencial.

La portada declara `#940200` como color de acento con texto blanco, `#c8a3a3` como fondo y `#d1c7c7` como detalle. La demo conserva `primary=#940200` y adapta los secundarios a `secondary=#784747`, `ink=#2b2020` para contraste; estos ultimos son una adaptacion, no valores oficiales.

## Contactos verificados

| Campo | Valor publico / origen |
| --- | --- |
| Telefono general | 01138145802, enlace `tel:` del pie de portada. Se normaliza a +541138145802. |
| WhatsApp general | +5491138145802, enlace oficial de portada y de consulta en las fichas. |
| Email institucional | nataliaalvarez.inmobiliaria@gmail.com, enlace `mailto:` de portada tras decodificacion publica de Cloudflare. |
| Oficina | Presidente Peron 1083, Garin, Buenos Aires, Argentina; cabecera y pie del sitio, no inferida del CSV. |
| Instagram | [nataliaalvarezinmobiliaria_](https://www.instagram.com/nataliaalvarezinmobiliaria_/), enlazado desde el sitio. |
| Facebook | [Perfil institucional](https://www.facebook.com/profile.php?id=100078771070082), enlazado desde el sitio. |

Las fichas tambien muestran un telefono de sucursal/ventas distinto. Para la demo se priorizan los contactos generales de la portada; no se mezclan con el contacto personal de la productora. No se verifico una matricula textual; `license=''`.

## Alcance

Precios, disponibilidad, medidas y condiciones deben confirmarse con la inmobiliaria. Las imagenes remotas pueden cambiar o dejar de estar disponibles. La fecha de consulta no implica verificacion registral ni inspeccion fisica. Se conservan las operaciones Venta y Alquiler y solo los tipos de la seleccion. Los tres mensajes son ejemplos ficticios genericos, explicitamente identificados; la actividad del panel tambien es simulada. No hay estadisticas comerciales reales ni sincronizacion automatica.

## Verificacion tecnica

Configuracion evaluada con Node.js/VM como `window.SITE_CONFIG`, JSON interno valido y todas las claves de la referencia conservadas, incluidas las 175 etiquetas. Se comprobaron tipos numericos/null, IDs unicos, referencias de hero/zonas, tres mensajes ficticios y ausencia de datos del cliente de referencia. HTML analizado con DOMParser en Edge; nodos de montaje, orden de scripts con `defer` y referencias locales correctos. Las nueve fotos devolvieron HTTP 200 y dimensiones 1280 x 960; el logo devolvio HTTP 200 y 863 x 491, sin desactivar la validacion de certificados en la comprobacion final. Contraste blanco/primary: 9,26:1. No se ejecuto el flujo general de la aplicacion compartida: la integracion y esa prueba quedan a cargo del principal.
