# Capasso Inmobiliaria: fuentes y limites

Consulta: **2026-10-22**. Propuesta independiente de Nebula. Sin vinculo comercial ni autorizacion de esta inmobiliaria. No se contacto al negocio, enviaron formularios o correos, ni se publico la propuesta.

## Resultado

**0 propiedades, 0 heroIds y 0 zonas.** El sitio oficial historico permite reconocer el negocio y antiguas referencias, pero no permite verificar operacion ni disponibilidad actual. No se asigno Venta o Alquiler por suposicion. El contenido de la demo es institucional, no un catalogo vigente.

## Fuentes oficiales

| Fuente exacta | Evidencia consultada el 2026-10-22 | Uso y limites |
| --- | --- | --- |
| https://capassoinmobiliaria5.webnode.es/ | CAPASSO Inmobiliaria, Tortuguitas; pie de pagina de 2016 | Identidad y localidad. No se trasladan las promesas de satisfaccion, cientos de hogares ni 15 anos de experiencia como hechos actuales. |
| https://capassoinmobiliaria5.webnode.es/contacto/ | Directorio 310, Tortuguitas; (+54) 02320-625 100; capassoinmobiliaria@gmail.com | Contactos atribuidos expresamente al sitio historico, no reconfirmados. Telefono normalizado a +542320625100, sin cambiar sus digitos locales. |
| https://capassoinmobiliaria5.webnode.es/nuestro-equipo/ | Sergio Capasso, corredor y martillero publico; Emanuel Aranda, socio/gerente | Contexto historico, sin atribuir vigencia del equipo ni inventar matricula. `license` queda vacio. |
| https://capassoinmobiliaria5.webnode.es/inmuebles/ | Casa en Los Potrillos (Pilar), chalet en El Recuerdo (Pilar), Tortugas ONE en Blanco Encalada 3120, quinta en Oliden 2768 | Hay nombres, ubicaciones y fotos historicas, pero no precio, moneda, operacion ni disponibilidad verificable. No se incorporan al catalogo. |
| https://capassoinmobiliaria5.webnode.es/inmuebles2/ | Seccion Galeria / Inmuebles sin fichas ni datos en el HTML o render consultado | No permite completar inventario. |
| https://capassoinmobiliaria5.webnode.es/lotes/ | Titulo Lotes, sin fichas ni datos en el HTML o render consultado | No se crean terrenos ficticios. |
| https://capassoinmobiliaria5.webnode.es/construccion-pozo/ | Imagenes y texto historico sobre departamentos de 1 o 2 ambientes y entrega pactada en 18 meses | No hay proyecto individual, precio, direccion o fecha de inicio verificable. No se reutiliza el plazo ni la financiacion como oferta vigente. Las imagenes parecen promocionales; no se usan como fotos de inmuebles reales. |

## Precios e inventario excluido

| Referencia historica | Precio / moneda | Datos faltantes | Decision |
| --- | --- | --- | --- |
| Los Potrillos, Pilar | No publicados | Operacion, disponibilidad, superficies, dormitorios y banos | Excluida |
| El Recuerdo, Pilar | No publicados | Operacion, disponibilidad, superficies, dormitorios y banos | Excluida |
| Tortugas ONE, Tortuguitas | No publicados | Unidad concreta, operacion, disponibilidad y medidas | Excluida; no se afirma que siga a estrenar |
| Quinta en Oliden 2768 | No publicados | Operacion, disponibilidad, superficies, dormitorios y banos | Excluida |
| Lotes / Pozo | No publicados | Identificacion suficiente de una propiedad y condiciones vigentes | Excluidos |

## Identidad y recursos

| Elemento | Decision |
| --- | --- |
| Marca | CAPASSO Inmobiliaria, nombre del encabezado oficial; no la errata "Cappaso" de contacto. |
| Logo | El encabezado oficial es tipografico, no se identifico un archivo de logo propio. `brand.logo` es `''`; se usa el fallback del motor, sin fabricar un logo. |
| Paleta | Render oficial revisado con Playwright/Edge: negro, blanco y grises. Primario #343434, secundario #555555, tinta #222222. El azul de la barra Webnode no se atribuye a la inmobiliaria. |
| Contraste | #343434 sobre blanco: aproximadamente 12.45:1, superior a 4.5:1. |
| Fotos | No se incorporaron fotos ni fondos de plantilla, imagenes de terceros o recursos binarios. No hay assets locales nuevos. |
| Redes | WhatsApp e Instagram no verificados: vacios. Facebook muestra un texto capasso.propiedades pero enlaza a un example-account: se omite por inconsistencia. |

## Demo y dependencia

- `config.js` conserva el esquema completo de referencia, incluidas sus 175 etiquetas; no depende de otra configuracion en tiempo de ejecucion.
- Aviso independiente en `meta.proposalNotice` y en el HTML, despues del skip-link y antes del header.
- Tres mensajes genericos explicitamente ficticios y actividad semanal simulada; no son datos de Capasso.
- La fecha documenta la consulta de fuentes, no una reconfirmacion comercial de los datos antiguos.
- Integracion final: el motor compartido admite `properties=[]` y `home.heroIds=[]`, con presentacion institucional sin fotos ni controles de propiedades. El aviso tiene estilo y permanece visible en las rutas publicas; dentro del panel se incluye en la nota demostrativa.
- Unidad removible: solo `capasso-inmobiliaria/`. No se modifican recursos compartidos, otros clientes ni Git.

## Verificacion realizada

| Comprobacion el 2026-10-22 | Resultado |
| --- | --- |
| `node --check capasso-inmobiliaria/config.js` | Correcto. |
| JSON puro dentro de `window.SITE_CONFIG`, claves del esquema, 175 labels y ausencia de datos Moos | Correcto. Arrays vacios intencionales; operaciones preservadas y tres mensajes ficticios. |
| Playwright con Edge, 1440 x 1000 y 390 x 844 | Aviso presente, visible y situado entre skip-link y header. Sin desbordamiento horizontal en las rutas probadas. |
| Inicio y Nosotros tras la integracion | Renderizan sin errores ni propiedades ficticias, con hero y presentacion institucional. |
| Catalogo vacio, Contacto, Favoritos y cuatro rutas del Panel | Renderizan con el motor actual, sin nuevos errores en esas rutas. |
| Fotos / logo | No corresponde verificar decodificacion: no se incorporaron archivos ni URLs de imagen. |

Integracion principal comprobada en escritorio y movil: inicio, nosotros, catalogo, contacto, favoritos y panel; importacion y exportacion de inventario vacio, recarga y rechazo de referencias de hero inexistentes. No se realizo contacto comercial. La publicacion y su verificacion en Pages se gestionan por separado, con autorizacion del usuario.
