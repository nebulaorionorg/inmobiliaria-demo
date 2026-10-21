# Cerezo Propiedades: fuentes y alcance

Consulta: **2026-10-21**. Demo comercial independiente, no sitio oficial. No existe integracion actual con el CRM, backend, autenticacion ni actualizacion automatica. La seleccion no equivale a un inventario vigente. No se enviaron formularios, consultas, emails ni mensajes de WhatsApp durante la investigacion.

Ampliacion: **4 -> 12 inmuebles distintos**, conservando los cuatro registros iniciales y sus IDs, marca, contactos, paleta y disclaimers. Se mantiene el esquema completo de labels y se actualizan textos de conteo. Resultado: 7 ventas y 5 alquileres; 4 casas, 3 departamentos, 2 quintas, 2 terrenos y 1 local. Se agregaron 8 fichas oficiales, todas `featured: true`, sin generar unidades desde secciones de emprendimientos.

## Metodo y fuentes oficiales

Webfetch devolvio HTML Next.js pero la extraccion Markdown de la portada quedo vacia. Se utilizo realmente Playwright con Microsoft Edge, cargado desde `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright`. Se leyeron el texto visible, las galerias y los datos publicos `__NEXT_DATA__` de las fichas, sin autenticacion ni acceso a un CRM privado.

- Portada: https://www.cerezopropiedades.com.ar/
- Catalogo oficial: https://www.cerezopropiedades.com.ar/properties
- Contacto: https://www.cerezopropiedades.com.ar/contact
- Historia y responsable: https://www.cerezopropiedades.com.ar/company
- Emprendimientos: https://www.cerezopropiedades.com.ar/containers
- Para descubrir los terrenos se selecciono el tipo Terreno en el buscador publico del catalogo y se pulso Buscar, sin enviar una consulta comercial. La URL se mantuvo en `/properties`; un simple `?typeId=5` no aplico el filtro. No se utilizaron fuentes de otros anunciantes.

## Identidad y contacto

- Oficina corroborada en contacto y pie: Directorio 61, Tortuguitas, Malvinas Argentinas, Buenos Aires. Coincide con el dato de referencia del CSV, pero la fuente usada es la web oficial.
- Telefono de oficina: +54 2320 494879. Celular publicado: +54 11 6878-6943. Email: info@cerezopropiedades.com.ar.
- WhatsApp exacto: `541168786943`, corroborado por los enlaces `https://wa.me/541168786943` y el ajuste publico `settings.whatsApp`. Se conserva el formato real del enlace oficial, sin agregar un 9 supuesto.
- La Empresa informa que es una inmobiliaria familiar fundada en 1957 por Luis Cerezo. Responsable publicada: Amelia Cristina Cerezo, martillera publica, Col. San Martin 1986. Se reproduce esa denominacion, sin inferir otra matricula.
- Instagram: no aparece uno corroborable; `brand.instagram` queda vacio.
- Facebook: se conserva el enlace exacto publicado, aunque lleva a una ruta de bandeja de entrada y podria requerir sesion: https://www.facebook.com/cerezoprop/inbox/?mailbox_id=403707723069107
- Logo oficial de cabecera: https://static1.adinco.net/5712_r/logo_u_5fd3b484004c5.jpg

## Paleta

Los datos publicos de diseno de la web informan `primary_color: #666666` y `secondary_color: #222222`. Se usa `primary: #666666`, `ink: #222222` y un acento `secondary: #526139` oscurecido a partir del verde oliva observado en el logo, no una declaracion de un codigo corporativo oficial. Los tres superan 4.5:1 de contraste frente a blanco. No se usa azul de plantilla.

## Publicaciones incluidas

| ID demo / codigo oficial | Ficha oficial exacta | Precio publicado | Datos usados |
| --- | --- | --- | --- |
| cerezo-528 / 528 | https://www.cerezopropiedades.com.ar/cerezo-528 | USD 75.000 | Casa en Parque Alvear I, San Blas al 900, Tortuguitas; venta; 2 dormitorios en ficha, 1 bano; terreno 588 m2; construccion `null`. |
| cerezo-527 / 527 | https://www.cerezopropiedades.com.ar/cerezo-527 | ARS 600.000 | Departamento en alquiler, Misiones al 700, Tortuguitas; 1 dormitorio, 1 bano; superficies no publicadas: `null`. |
| cerezo-474 / 474 | https://www.cerezopropiedades.com.ar/cerezo-474 | USD 65.000 | Terreno de 657 m2 en Parque Alvear I, San Salvador al 900, Tortuguitas; venta; dormitorios, banos y construccion: `null`. |
| cerezo-447 / 447 | https://www.cerezopropiedades.com.ar/cerezo-447 | USD 275.000 | Terreno de 1.155 m2, Moreno al 100, estacion Tortuguitas; venta; zonificacion comercial y residencial publicada; dormitorios, banos y construccion: `null`. |
| cerezo-533 / 533 | https://www.cerezopropiedades.com.ar/cerezo-533 | USD 170.000 | Quinta en venta, San Lorenzo al 3700, Tortuguitas; 4 banos, terreno 611 m2; dormitorios `null` por contradiccion, construccion `null`. |
| cerezo-532 / 532 | https://www.cerezopropiedades.com.ar/cerezo-532 | USD 180.000 | Quinta en venta, Venezuela al 100, Tortuguitas; 4 dormitorios, 2 banos y terreno de 2.400 m2; construccion `null`. |
| cerezo-531 / 531 | https://www.cerezopropiedades.com.ar/cerezo-531 | ARS 900.000 | Casa en alquiler, Brughetti al 3800, Yei Pora, Tortuguitas, Jose C. Paz; 2 dormitorios segun contador y descripcion, 2 banos, terreno de 1.500 m2; construccion `null`. |
| cerezo-526 / 526 | https://www.cerezopropiedades.com.ar/cerezo-526 | ARS 650.000 | Departamento en alquiler, Gral San Martin al 1400, Manuel Alberti; 1 dormitorio, 1 bano; superficies `null`. Expensas publicadas ARS 70.000 aparte. |
| cerezo-525 / 525 | https://www.cerezopropiedades.com.ar/cerezo-525 | USD 109.000 | Casa en venta, Einstein al 3500, Parque Alvear I; 3 dormitorios, 2 banos, 140 m2 cubiertos y terreno 630 m2. |
| cerezo-521 / 521 | https://www.cerezopropiedades.com.ar/cerezo-521 | USD 79.000 | Casa en venta con terminaciones pendientes, Houssay al 3100, Parque Alvear II; 2 dormitorios, 2 banos, terreno 300 m2; construccion `null`. |
| cerezo-518 / 518 | https://www.cerezopropiedades.com.ar/cerezo-518 | ARS 800.000 | Local en alquiler, Av. Eva Duarte de Peron al 800, Grand Bourg; 2 banos en descripcion; dormitorios y superficies `null`. |
| cerezo-515 / 515 | https://www.cerezopropiedades.com.ar/cerezo-515 | ARS 700.000 | Departamento en alquiler, Brasil al 1600, Tortuguitas; 2 dormitorios, 1 bano; superficies `null`. |

Todos los objetos se marcan `featured: true` como seleccion editorial de la demo, no como afirmacion de que todos sean destacados comerciales del cliente. `credit: false` no certifica una inaptitud: no se afirma aptitud crediticia. No se convierte a USD el alquiler; se respeta el precio en pesos de la ficha, no el campo interno `normalized_price`.

Las ocho fichas nuevas se descubrieron en el catalogo oficial `/properties` y se abrieron individualmente en Edge. Se contrastaron texto visible y JSON publico: operacion, moneda original, precio, superficies, distribucion y estado. Todas mostraron `statusId: 1`, `propertyOccupied: false` y `periodTemporalRent: null`, sin distintivos de reservado o vendido en sus fichas. Se mantienen `operations: ['Venta', 'Alquiler']` en ese orden; no se incorporaron temporarios ni anuncios de otros clientes.

## Imagenes exactas

Se extrajeron estas URLs de los elementos de la galeria visible de cada ficha, no se construyeron nombres de archivo ni se tomaron fotos de otras propiedades. Se conservan hasta tres por inmueble inicial y se agregan una o dos por inmueble nuevo. No se usan placeholders. Las URLs son remotas y pueden cambiar o dejar de admitir acceso.

### Codigo 528

- https://static1.adinco.net/6359356_p/extra_large_u_6ac95f645a837.jpg
- https://static1.adinco.net/6359356_p/extra_large_u_6ac960a0ea2a0.jpg
- https://static1.adinco.net/6359356_p/extra_large_u_6ac95f6803933.jpg

### Codigo 527

- https://static1.adinco.net/0674356_p/extra_large_u_6ab6a373c2623.jpg
- https://static1.adinco.net/0674356_p/extra_large_u_6ab6a373c1eb2.jpg
- https://static1.adinco.net/0674356_p/extra_large_u_6ab6a37455386.jpg

### Codigo 474

- https://static1.adinco.net/9730636_p/extra_large_u_68518d2488acd.jpg

### Codigo 447

- https://static1.adinco.net/8271036_c/extra_large_u_677d8509f2c67.jpg
- https://static1.adinco.net/8271036_c/extra_large_u_677d8507d62ee.jpg
- https://static1.adinco.net/8271036_c/extra_large_u_6766d7857e871.jpg

### Ocho fichas nuevas: imagenes verificadas con Edge

Las 15 URLs siguientes aprobaron `HTMLImageElement.decode()` en Microsoft Edge, con ancho y alto naturales mayores a cero. El codigo 518 publica una sola imagen; no se duplica para simular una galeria mayor. No se descargaron assets locales.

| Codigo | Foto 1 | Foto 2 |
| --- | --- | --- |
| 533 | https://static1.adinco.net/8532456_p/extra_large_u_6ad77acb6a4e0.jpg | https://static1.adinco.net/8532456_p/extra_large_u_6ad77f21a533f.jpg |
| 532 | https://static1.adinco.net/3712456_p/extra_large_u_6ad6aa4991053.jpg | https://static1.adinco.net/3712456_p/extra_large_u_6ad6aa234aa8c.jpg |
| 531 | https://static1.adinco.net/6500456_p/extra_large_u_6ad4de325afd2.jpg | https://static1.adinco.net/6500456_p/extra_large_u_6ad4dda364589.jpg |
| 526 | https://static1.adinco.net/5527156_p/extra_large_u_6a7267dd871ed.jpg | https://static1.adinco.net/5527156_p/extra_large_u_6a7267dd5ce6c.jpg |
| 525 | https://static1.adinco.net/9271156_p/extra_large_u_6abd6ef22617f.jpg | https://static1.adinco.net/9271156_p/extra_large_u_6abd76385a8c3.jpg |
| 521 | https://static1.adinco.net/1714056_p/extra_large_u_6a34264a3342d.jpg | https://static1.adinco.net/1714056_p/extra_large_u_6a34247ca38b3.jpg |
| 518 | https://static1.adinco.net/4828846_p/extra_large_u_69f90dba921e5.jpg | No publica una segunda foto. |
| 515 | https://static1.adinco.net/8496846_p/extra_large_u_69f2a58cd2877.jpg | https://static1.adinco.net/8496846_p/extra_large_u_6a1b089d56b34.jpg |

## Limites y decisiones

- Codigo 528: la ficha cuenta 2 dormitorios, pero la descripcion especifica un dormitorio principal y escritorio o segundo dormitorio pequeno. Se conserva el numero estructurado, con la salvedad visible en la descripcion. Se informa expresamente que es a refaccionar. Los 588 m2 son terreno; no se presentan como construccion.
- Codigo 527: no se publica ninguna superficie. `area` y `landArea` quedan `null`, no cero ni estimaciones. La ficha especifica primer piso por escalera y que no se permiten mascotas. Confirmar requisitos, disponibilidad y condiciones del alquiler.
- Integracion final del renderer: la tarjeta del departamento 527 omite la superficie porque ambos campos son `null`. Se corrigio el fallback comun y se verifico que no se muestre 0 m2 ficticio; el catalogo conserva intactos los datos desconocidos.
- Codigos 474 y 447: los metros publicados son superficie de terreno, aunque la etiqueta de la web sea superficie total; no son metros construidos. No se multiplicaron frentes y fondos para recalcular superficies ni se afirmo edificabilidad autorizada.
- Las fichas muestran direcciones por cuadra (`al 900`, `al 700`, `al 100`). Se respeta ese nivel de precision; no se expone como exacta una numeracion del JSON interno.
- La seccion oficial `/containers` devolvio 0 resultados. No se inventaron emprendimientos. El codigo 447 es un terreno publicado como ideal para emprendimiento; se mantiene `type: Terreno` y se aclara que no es un desarrollo activo, aprobado o con unidades en venta.
- En el codigo 447, el gas figura en la zona, a instalar; no se anuncia como conectado.
- Codigo 533: titulo/contador indican cuatro dormitorios pero el texto enumera tres. `bedrooms: null`, con salvedad visible, en lugar de elegir una cifra. Los 611 m2 corresponden al terreno de los datos publicos, no a metros construidos; `area: null`.
- Codigo 532: 2.400 m2 es terreno, no construccion. El texto diferencia un toilette y un bano completo; el contador los agrupa como dos banos. No se anuncia aptitud crediticia en esta demo aun cuando el JSON publico del portal incluya esa bandera; se adopta un criterio conservador sin sustituir la confirmacion profesional/bancaria.
- Codigo 531: titulo tres dormitorios frente a dos en contador y descripcion. Se usan los dos de la distribucion y se explica la contradiccion en el resumen. Los 1.500 m2 son terreno; no se presentan como construidos.
- Codigo 525: se usan 140 m2 de `coveredArea`, no los 630 m2 de terreno/total como construccion. Codigo 521: la descripcion dice que faltan terminaciones; no se presenta como lista para habitar ni se inventan metros cubiertos.
- Codigos 526, 515 y 518 no publican superficies: `area` y `landArea` quedan `null`. En 518 los dos banos proceden del texto; los dormitorios no corresponden a un dato residencial verificable y quedan `null`, no un cero inferido.
- Codigo 526: ARS 650.000 es alquiler, ARS 70.000 son expensas adicionales publicadas. Se mantienen separados en la descripcion, sin convertir monedas ni sumarlos al campo `price`. Requisitos, actualizaciones y disponibilidad deben confirmarse con Cerezo.
- Ninguno de los nuevos anuncios se presenta como emprendimiento ni se multiplican unidades por cantidad de fotos. No se incluyen temporarios, reservados ni vendidos.
- Mensajes y grafico del panel son simulados, sin estadisticas reales ni referencias a inmuebles concretos. No se copio actividad de otro cliente.
- Fecha de verificacion no implica vigencia actual de precio, disponibilidad, documentacion ni servicios. Deben confirmarse directamente con Cerezo.
- En esta ampliacion solo se modifican `config.js` y este archivo. Se mantienen los IDs iniciales y las referencias `heroIds` y `zones`. No se modifica HTML, engine compartido ni limite visual de la home; su ampliacion queda para la integracion principal. No fue necesario crear assets. Los numeros no corroborados quedan `null`.

## Comprobaciones locales

- `node --check cerezo-propiedades/config.js`: correcto.
- Esquema JSON completo: 176 labels actuales conservadas, 12 inmuebles, IDs/referencias/fuentes/direcciones unicos, operaciones y tipos correctos, cantidades/precios numericos o `null`, fuentes HTTPS propias y referencias `heroIds`/`zones` validas.
- Las comprobaciones previas de carga de la demo base a 1440 px y 390 px se conservan como antecedente. No se modificaron archivos del renderer ni se reintrodujo el fallback de cero para superficies desconocidas.
- Comprobacion nueva en Edge a 1440 px y 390 px: 12 tarjetas en el catalogo y los 8 detalles nuevos cargaron sin errores JavaScript ni desbordamiento horizontal. Se verifico automaticamente que SOURCES contiene la ficha y cada foto de los 12 objetos.
- Las 10 imagenes iniciales y el logo habian respondido correctamente. Las 15 fotos nuevas se comprobaron adicionalmente con `Image.decode()` en Edge: **15/15 correctas**, sin placeholders. Total del catalogo ampliado: 25 imagenes.
- Contraste frente a blanco: primary 5.74:1, secondary 6.71:1, ink 15.91:1.
- No se modificaron archivos compartidos, registros de sitios ni pruebas del proyecto. No se realizaron commits ni push.
