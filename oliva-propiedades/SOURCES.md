# Oliva Propiedades: fuentes y alcance

Consulta: **2026-10-21**. Demo comercial independiente, no sitio oficial. No existe integracion actual con el CRM, backend, autenticacion ni actualizacion automatica. La seleccion no equivale a un inventario vigente. No se enviaron formularios, consultas, emails ni mensajes de WhatsApp durante la investigacion.

## Identidad y contacto

- Sitio oficial: https://www.olivaprop.com.ar/
- Contacto oficial: https://www.olivaprop.com.ar/contacto/
- Presentacion institucional: https://www.olivaprop.com.ar/nosotros/
- Oficina corroborada en cabecera, contacto y pie: Moreno 1194, Oficina 7, 1er piso, Tortuguitas, Malvinas Argentinas. Coincide con el dato de referencia del CSV, pero la fuente usada es la web oficial.
- Telefono: 11 6540-3762. Email: olivapropiedadesventas@hotmail.com.
- WhatsApp: 5491165403762, obtenido del atributo `data-settings` del widget oficial `.joinchat` en la portada, mediante Playwright/Edge. No se infirio agregando un prefijo al telefono ni se abrio una conversacion.
- Instagram enlazado por la web: https://www.instagram.com/propiedadesoliva/
- Facebook enlazado en contacto: https://www.facebook.com/profile.php?id=100070697832428
- No se encontro una matricula profesional inequivoca: `brand.license` queda vacio. El nombre del agente que figura en las fichas no se transformo en una licencia.
- Logo de cabecera oficial: https://storage.googleapis.com/portales-prod-images/5140/web-images/2025/4/0deb36a6-f06e-4e13-a101-a1049c3c20a2.jpeg

## Paleta

Se inspeccionaron los estilos calculados de la portada y los pixeles del logo con Edge. `primary: #283f8f` es el azul real del sitio y logo de Oliva, no el azul por defecto de la plantilla. `secondary: #636363` y `ink: #222222` se observaron en la UI oficial. Los tres superan 4.5:1 de contraste frente a blanco. No se atribuye a la marca un manual de identidad no publicado.

## Publicaciones incluidas

| ID demo / referencia oficial | Ficha oficial exacta | Precio publicado | Datos usados |
| --- | --- | --- | --- |
| oliva-210249 / OLI-210249 | https://www.olivaprop.com.ar/propiedad/210249_casa-en-venta-c-cochera-en-tortuguitas/ | USD 100.000 | Tucuman 149, Tortuguitas; casa en venta; 4 dormitorios, 2 banos; terreno 350 m2; cochera cubierta. Construccion: `null`, por contradiccion entre texto y tabla. |
| oliva-234783 / OLI-234783 | https://www.olivaprop.com.ar/propiedad/234783_casa-en-venta-c-cochera/ | USD 115.000 | Francisco Beazley 3150, Los Polvorines; casa en venta; 2 dormitorios, 1 bano; 100 m2 cubiertos y 180 m2 de terreno. |
| oliva-235771 / OLI-235771 | https://www.olivaprop.com.ar/propiedad/235771_terreno-200m2-tortuguitas/ | USD 32.000 | Bahia Thetis 758, Tortuguitas; terreno en venta de 200 m2, 10 x 20 m. La ficha publica 0 banos; dormitorios y construccion no aplicables quedan `null`. |
| oliva-214426 / OLI-214426 | https://www.olivaprop.com.ar/propiedad/214426_dpto-en-pozo-en-san-miguel/ | USD 95.000 | Harmony 4, Urquiza 1255, San Miguel; departamento en venta/en construccion; 1 dormitorio, 1 bano, 48 m2 cubiertos. Terreno: `null`. |

Las cuatro fichas se consultaron completas mediante webfetch. La portada y el listado https://www.olivaprop.com.ar/tipo-propiedad/departamento/ sirvieron para descubrir las publicaciones; no se tomaron inmuebles de otras inmobiliarias. Todos los objetos se marcan `featured: true` como seleccion editorial de la demo, no como afirmacion de que todos sean destacados comerciales del cliente. `credit: false` significa que esta demo no afirma aptitud crediticia.

## Imagenes exactas

Cada URL se extrajo de la galeria de su propia ficha. No se usan fotos de stock, fotos de otros clientes ni placeholders. Se seleccionaron tres imagenes por ficha; no se reproduce la galeria completa. URLs remotas sujetas a cambios o restricciones del servidor original.

### OLI-210249

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/c6cff464-427f-447b-a52b-5a0624b655c3.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/66014700-bb36-4f80-bbe0-f6f0c59bc429.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/4/5bdf098f-93fa-4620-a99f-a2dd8c2556f1.jpeg

### OLI-234783

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/b32d7f55-31b4-43fe-812e-e6ea98f5fcac.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/13cb53fb-a859-48f9-b808-555931bab747.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/9/73b2a543-1518-4db9-8f83-d8f8987eb7f8.jpeg

### OLI-235771

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/e02f887e-1a05-4a8a-970d-df000230ec88.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/3798bbc4-117b-4c1d-92d7-8ddbc70c2b48.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/10/98bd2f05-8a1b-45b8-af8b-34b0e665af15.jpeg

### OLI-214426

- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/3921592d-545e-49b9-ad7a-a40927838284.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/64a64e47-a1d4-49ff-9156-1fc1790a0814.jpeg
- https://storage.googleapis.com/portales-prod-images/5140/property-images/2026/5/7a29c017-db74-47ff-8b91-749b3d0de588.jpeg

## Limites y decisiones

- OLI-210249: el texto anuncia 150 m2 construidos y la tabla indica 100 m2 cubiertos/total. No se elige arbitrariamente uno: `area: null`; se explicita en la descripcion. La tabla informa 350 m2 de terreno. El enlace de mapa de la ficha parece apuntar fuera de Tortuguitas; no se incorporaron coordenadas ni ese enlace.
- OLI-234783: se usan los 100 m2 cubiertos, no los 180 m2 totales que incluyen 80 m2 descubiertos. `area` representa construccion, `landArea` terreno.
- OLI-235771: USD 32.000 es el precio de venta, no el anticipo de USD 19.200. El plan publicado de 48 cuotas de USD 420 tiene un total distinto del precio de contado; no se mezclan ambas condiciones ni se anuncia una cuota como precio total.
- OLI-214426: el encabezado y la tabla publican USD 95.000, aunque el texto menciona otros valores desde para unidades del proyecto. Se mantiene el precio de la ficha seleccionada. Sus 5 m2 descubiertos no se presentan como construidos. Las imagenes del proyecto pueden ser renders y no garantizan una obra terminada ni una fecha de entrega.
- No se incorporaron alquileres no investigados para llenar el catalogo. Se conservan `operations: ['Venta', 'Alquiler']`, pero esta seleccion solo tiene ventas y el texto lo aclara.
- Mensajes y grafico del panel son simulados, sin estadisticas reales ni referencias a propiedades concretas. No se copio actividad de otro cliente.
- Fecha de verificacion no implica vigencia actual de precio, financiacion, disponibilidad, documentacion ni servicios. Deben confirmarse con Oliva.
- Solo se crean `index.html`, `config.js` y este archivo en la carpeta del cliente. El HTML utiliza el `app.js` y `styles.css` compartidos sin modificarlos. Los numeros no corroborados quedan `null`, no cero ficticio.

## Comprobaciones locales

- `node --check oliva-propiedades/config.js`: correcto.
- Esquema completo del cliente base: 176 labels (incluida la etiqueta adicional `consultPrice`), 4 inmuebles, IDs ASCII unicos, operaciones, tipos, valores numericos/null, fuentes HTTPS propias y referencias `heroIds`/`zones`: correctos.
- Edge a 1440 px y 390 px: inicio, catalogo, detalle, nosotros, contacto y panel (resumen, mensajes y configuracion) cargaron sin errores JavaScript ni desbordamiento horizontal.
- Las 12 imagenes de inmuebles y el logo respondieron correctamente con contenido de imagen al comprobar sus URLs.
- Contraste frente a blanco: primary 9.55:1, secondary 6.01:1, ink 15.91:1.
- No se modificaron archivos compartidos, registros de sitios ni pruebas del proyecto. No se realizaron commits ni push.
