# Natalia Alvarez Propiedades: fuentes y limites

Consulta: **2026-10-21**. Demo independiente ampliada de **3 a 12 inmuebles diferentes**, con doce fichas publicas del sitio oficial: siete casas, dos terrenos, dos departamentos y un local; seis ventas y seis alquileres. Se preservaron intactos los tres registros originales, sus IDs, la marca, los contactos y los disclaimers. Sin backend, autenticacion ni integracion automatizada con Tokko Broker o con la inmobiliaria. No se enviaron formularios, consultas ni emails.

## Fuentes publicas

| Fuente | Informacion observada |
| --- | --- |
| [Inicio](https://www.inmobiliariaalvarez.com.ar/) | Marca, logo, colores CSS, telefono, WhatsApp, direccion y enlaces de redes sociales. Pie identifica software Tokko Broker. |
| [Propiedades](https://www.inmobiliariaalvarez.com.ar/Propiedades) | Catalogo publico con precios, referencias y fotografias. Se seleccionaron casa, terreno y departamento; no se copio el listado completo ni el selector generico de tipos de Tokko. |
| [La Empresa](https://www.inmobiliariaalvarez.com.ar/s/La-Empresa) | Intermediacion en compra, venta y alquiler; confianza, seguridad, compromiso, integridad y profesionalismo. |
| [Tasacion](https://www.inmobiliariaalvarez.com.ar/Tasacion) | Enlace del menu oficial que ofrece el canal de tasacion; no se envio solicitud. |

Portada, listado y fichas se consultaron con `webfetch`. Playwright en Microsoft Edge confirmo el email publico decodificado en el enlace `mailto:` de portada y la carga del logo (863 x 491). No se incorporan datos de agentes individuales ni parametros de seguimiento.

La ampliacion reviso nuevamente el listado y abrio individualmente las nueve fichas adicionales con Edge, usando validacion TLS normal. Se comprobaron tipo, operacion, referencia, moneda, precio, descripcion, superficies declaradas y URLs exactas de la galeria de cada inmueble. Este es un nivel de verificacion documental de publicaciones publicas, no una comprobacion presencial, registral o de disponibilidad.

## Publicaciones y precios

| ID demo / referencia | Ficha publica | Operacion / precio | Datos comprobados |
| --- | --- | --- | --- |
| na-8443862 / IHO8443862 | [Lagar al 200](https://www.inmobiliariaalvarez.com.ar/p/8443862-Casa-en-Venta-en-Garin-Lagar-al-200) | Venta, USD 64.900 | Casa en Garin; 1 dormitorio, 1 bano, 300 m2 de lote, 80,06 m2 cubiertos, 20,22 m2 semicubiertos y 100,28 m2 de total construido. Tres cocheras, gas natural y jardin. |
| na-10338505 / ILA10338505 | [Martin H. Falco al 500](https://www.inmobiliariaalvarez.com.ar/p/10338505-Terreno-en-Venta-en-Garin-Martin-H.-Falco-al-500) | Venta, USD 69.000 | Terreno de 300 m2 en Garin. Frente publicado de 8,66 m, fondo de 34,64 m. Menciona pavimento. No se afirman conexiones de otros servicios ni edificabilidad. |
| na-11685865 / IAP11685865 | [Jose Hernandez al 1000](https://www.inmobiliariaalvarez.com.ar/p/11685865-Departamento-en-Alquiler-en-Garin-Jose-Hernandez-al-1000) | Alquiler, ARS 650.000 | Departamento en primer piso, 1 dormitorio, bano completo segun descripcion, 50 m2 cubiertos. La ficha menciona aumento trimestral del 10%; confirmar condiciones vigentes. |
| na-11928040 / IHO11928040 | [Isla Lennox al 500](https://www.inmobiliariaalvarez.com.ar/p/11928040-Casa-en-Alquiler-en-Barrio-Garin-Norte-ISLA-LENNOX-al-500) | Alquiler, ARS 650.000 | Casa en barrio Garin Norte, 4 ambientes, 2 dormitorios, 1 bano, 1 cochera, una planta. Cocina, patio, jardin, gas natural y apto mascotas segun ficha. Sin superficies publicadas: `area=null`, `landArea=null`. |
| na-7952069 / IHO7952069 | [Juan Manuel de Rosas al 400](https://www.inmobiliariaalvarez.com.ar/p/7952069-Casa-en-Alquiler-en-Garin-Juan-Manuel-de-Rosas-al-400) | Alquiler, ARS 900.000 | Casa amoblada de esquina en Garin; 2 dormitorios, 1 bano y 1 cochera. Terreno 228 m2, cubierta 82,5 m2, semicubierta 24,75 m2 y total construido 107,25 m2. Lavadero, gas natural y aire acondicionado. |
| na-11686147 / IHO11686147 | [Cayetano Bourdet al 1600](https://www.inmobiliariaalvarez.com.ar/p/11686147-Casa-en-Alquiler-en-Garin-Cayetano-Bourdet-al-1600) | Alquiler, ARS 900.000 | Casa de 2 plantas, 3 dormitorios, 1 bano, balcon y patio. Terreno 214 m2, cubierta 164,35 m2, sin total construido informado: `area=null`. Aviso menciona ajuste trimestral de 6%, a confirmar. |
| na-11685793 / IAP11685793 | [Cayetano Bourdet al 2500](https://www.inmobiliariaalvarez.com.ar/p/11685793-Departamento-en-Alquiler-en-Garin-Cayetano-Bourdet--al-2500) | Alquiler, ARS 700.000 | Departamento de 3 ambientes, 2 dormitorios, 1 bano, 60 m2 cubiertos y lavadero. Sin total construido ni terreno informado. Anunciado a estrenar; menciona ajuste trimestral por ICL. Es distinto del departamento de Jose Hernandez y de la casa de Bourdet al 1600. |
| na-8559555 / ILO8559555 | [2 de Abril 87](https://www.inmobiliariaalvarez.com.ar/p/8559555-Local-en-Alquiler-en-Garin-Centro-2-DE-ABRIL--87) | Alquiler, ARS 550.000 | Local en Garin centro, 1 bano y electricidad. Se conserva el total construido publicado de 33,12 m2. La ficha repite ese valor en cubierta y semicubierta: no se suman; la inconsistencia se explicita. Dormitorios y terreno no publicados. |
| na-7462559 / ILA7462559 | [John F. Kennedy al 1300](https://www.inmobiliariaalvarez.com.ar/p/7462559-Terreno-en-Venta-en-Barrio-El-Cazador-John-F.-Kennedy-al-1300) | Venta, USD 119.000 | Terreno de 1.000 m2 en esquina, salida a dos calles, El Cazador. Incluye casa existente a refaccionar o demoler, pileta y parrilla. Un solo registro por toda la oferta, sin inventar dormitorios ni superficie construida. No se validan usos urbanisticos sugeridos por la publicidad. |
| na-10505804 / IHO10505804 | [Los Almendros al 1300](https://www.inmobiliariaalvarez.com.ar/p/10505804-Casa-en-Venta-en-Pilar-Los-Almendros--al-1300) | Venta, USD 180.000 | Casa en Pilar: 3 dormitorios, 1 bano, 2 cocheras semicubiertas, piscina, galeria y lavadero. Terreno 576 m2, cubierta 83 m2, semicubierta 65 m2; sin total construido explicitado, `area=null`. |
| na-6409162 / IHO6409162 | [La Pista al 1200, El Ensueno](https://www.inmobiliariaalvarez.com.ar/p/6409162-Casa-en-Venta-en-Barrio-Privado-El-Ensue%C3%B1o-La-pista--al-1200) | Venta, USD 174.900 | Casa de una planta en lote interno de 741 m2, 152 m2 cubiertos, 3 dormitorios, 2 banos completos y 1 toilette adicional. Suite, galeria con parrilla y pileta. El toilette se informa aparte, no se suma al campo banos. Sin total construido: `area=null`. |
| na-7365549 / IHO7365549 | [Martin Coronado al 1200](https://www.inmobiliariaalvarez.com.ar/p/7365549-Casa-en-Venta-en-Ingeniero-Maschwitz-Martin-Coronado-al-1200) | Venta, USD 69.000 | La descripcion da numero 1237 en Ingeniero Maschwitz; 6 ambientes, 3 dormitorios, 1 bano, cochera cubierta, terreno de 355 m2 y 128,79 m2 cubiertos. Sin total construido. Apto credito hipotecario segun descripcion, aunque el campo estructurado dice no especificado: se indica la discrepancia, pendiente de banco/documentacion. No se utiliza el fondo de 100 m del formulario, no corroborado por el resto de medidas. |

Se conserva la moneda original, sin conversiones. `area` representa total construido en la interfaz: 100,28 m2 para Lagar, 107,25 m2 para Juan Manuel de Rosas y 33,12 m2 para el local. Las superficies solo cubiertas se mantienen en texto y no se convierten en total construido no informado. Los ceros de plantilla del listado no se presentan como superficies reales. Dormitorios, banos y superficies no publicados/no aplicables quedan en `null`. `credit=false` significa no verificado, no rechazo bancario. Solo Martin Coronado tiene `credit=true` por la afirmacion explicita de su descripcion, no como garantia de elegibilidad bancaria.

## Fotos y logo

Las **27 URLs fotograficas exactas** de `config.js` provienen de las galerias de las doce fichas: se conservan las nueve fotos originales y se agregan dos por cada uno de los nueve inmuebles nuevos. No se usan fotos de otros clientes ni placeholders. Los primeros dos archivos identificados de cada ficha adicional se conservaron con su URL publica original, sin descargar, recortar, convertir, eliminar marcas de agua ni editar.

| Recurso | Origen |
| --- | --- |
| Fotos de casa | [Galeria Lagar](https://www.inmobiliariaalvarez.com.ar/p/8443862-Casa-en-Venta-en-Garin-Lagar-al-200), archivos `w_pics/8443862_...jpg`. |
| Fotos de lote | [Galeria Falco](https://www.inmobiliariaalvarez.com.ar/p/10338505-Terreno-en-Venta-en-Garin-Martin-H.-Falco-al-500), archivos `w_pics/10338505_...jpg`. |
| Fotos de departamento | [Galeria Jose Hernandez](https://www.inmobiliariaalvarez.com.ar/p/11685865-Departamento-en-Alquiler-en-Garin-Jose-Hernandez-al-1000), archivos `w_pics/11685865_...jpg`. |
| Logo oficial remoto | [Logo_con_matricula.png](https://static.tokkobroker.com/tfw_images/9792_Inmobiliaria%20ALVAREZ/Logo_con_matricula.png), publicado en cabecera y pie. No se transcribe una matricula sin comprobacion legible. |

Las fotos nuevas se identifican por el ID de su propia ficha en `w_pics/<ID>_...jpg` (y un archivo `pictures/11686147_...jpg` publicado en esa galeria). Las fuentes individuales y los IDs constan en la tabla de doce inmuebles, y las URLs completas exactas permanecen en `images[]` de cada registro. Se verifico la decodificacion de las 27 fotos con TLS normal en Edge: HTTP 200, tipo `image/*`, ancho y alto positivos. Las 18 nuevas tienen dimensiones entre 900 y 1600 pixeles de ancho y entre 880 y 1200 de alto. No hay dependencia del TLS invalido de Nazareth ni cambios a certificados globales.

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

Ampliacion 2026-10-21: 3 a 12 registros, todos `featured=true`; nueve IDs adicionales unicos y esquema completo. Se compararon por igualdad profunda los tres registros iniciales, marca/contactos, disclaimers y panel, sin cambios. Configuracion serializada como JSON puro envuelto en `window.SITE_CONFIG`, sin logica nueva. Hero y zonas siguen apuntando a IDs existentes. Se actualizaron textos y tipos para incluir el local y el catalogo ampliado, sin modificar operaciones Venta/Alquiler ni el motor compartido. Se repitio la decodificacion de las 27 fotos, incluidas las nueve anteriores, con validacion TLS normal.
