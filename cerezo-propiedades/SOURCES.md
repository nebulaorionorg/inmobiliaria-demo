# Cerezo Propiedades: fuentes y alcance

Consulta: **2026-10-21**. Demo comercial independiente, no sitio oficial. No existe integracion actual con el CRM, backend, autenticacion ni actualizacion automatica. La seleccion no equivale a un inventario vigente. No se enviaron formularios, consultas, emails ni mensajes de WhatsApp durante la investigacion.

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

Todos los objetos se marcan `featured: true` como seleccion editorial de la demo, no como afirmacion de que todos sean destacados comerciales del cliente. `credit: false` no certifica una inaptitud: no se afirma aptitud crediticia. No se convierte a USD el alquiler; se respeta el precio en pesos de la ficha, no el campo interno `normalized_price`.

## Imagenes exactas

Se extrajeron estas URLs de los elementos de la galeria visible de cada ficha, no se construyeron nombres de archivo ni se tomaron fotos de otras propiedades. Se seleccionaron hasta tres por inmueble. No se usan placeholders. Las URLs son remotas y pueden cambiar o dejar de admitir acceso.

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

## Limites y decisiones

- Codigo 528: la ficha cuenta 2 dormitorios, pero la descripcion especifica un dormitorio principal y escritorio o segundo dormitorio pequeno. Se conserva el numero estructurado, con la salvedad visible en la descripcion. Se informa expresamente que es a refaccionar. Los 588 m2 son terreno; no se presentan como construccion.
- Codigo 527: no se publica ninguna superficie. `area` y `landArea` quedan `null`, no cero ni estimaciones. La ficha especifica primer piso por escalera y que no se permiten mascotas. Confirmar requisitos, disponibilidad y condiciones del alquiler.
- Integracion final del renderer: la tarjeta del departamento 527 omite la superficie porque ambos campos son `null`. Se corrigio el fallback comun y se verifico que no se muestre 0 m2 ficticio; el catalogo conserva intactos los datos desconocidos.
- Codigos 474 y 447: los metros publicados son superficie de terreno, aunque la etiqueta de la web sea superficie total; no son metros construidos. No se multiplicaron frentes y fondos para recalcular superficies ni se afirmo edificabilidad autorizada.
- Las fichas muestran direcciones por cuadra (`al 900`, `al 700`, `al 100`). Se respeta ese nivel de precision; no se expone como exacta una numeracion del JSON interno.
- La seccion oficial `/containers` devolvio 0 resultados. No se inventaron emprendimientos. El codigo 447 es un terreno publicado como ideal para emprendimiento; se mantiene `type: Terreno` y se aclara que no es un desarrollo activo, aprobado o con unidades en venta.
- En el codigo 447, el gas figura en la zona, a instalar; no se anuncia como conectado.
- Mensajes y grafico del panel son simulados, sin estadisticas reales ni referencias a inmuebles concretos. No se copio actividad de otro cliente.
- Fecha de verificacion no implica vigencia actual de precio, disponibilidad, documentacion ni servicios. Deben confirmarse directamente con Cerezo.
- Solo se crean `index.html`, `config.js` y este archivo en la carpeta del cliente. El HTML utiliza el `app.js` y `styles.css` compartidos sin modificarlos. Los numeros no corroborados quedan `null`.

## Comprobaciones locales

- `node --check cerezo-propiedades/config.js`: correcto.
- Esquema completo del cliente base: 176 labels (incluida la etiqueta adicional `consultPrice`), 4 inmuebles, IDs ASCII unicos, operaciones, tipos, valores numericos/null, fuentes HTTPS propias y referencias `heroIds`/`zones`: correctos.
- Edge a 1440 px y 390 px: inicio, catalogo, detalle, nosotros, contacto y panel (resumen, mensajes y configuracion) cargaron sin errores JavaScript ni desbordamiento horizontal. Esta comprobacion de carga no elimina la limitacion visual de superficies desconocidas descrita arriba.
- Las 10 imagenes de inmuebles y el logo respondieron correctamente con contenido de imagen al comprobar sus URLs.
- Contraste frente a blanco: primary 5.74:1, secondary 6.71:1, ink 15.91:1.
- No se modificaron archivos compartidos, registros de sitios ni pruebas del proyecto. No se realizaron commits ni push.
