# Demos inmobiliarias por cliente

Un solo repositorio para varias inmobiliarias: cada cliente tiene su URL y configuración, con diseño y comportamiento compartidos. HTML, CSS y JavaScript sin framework, backend, compilación ni dependencias de ejecución. La primera propuesta es **Cristian Mooswalder Propiedades**, inspirada en el preview público de Homelengo.

## GitHub Pages

Base de publicación: <https://nebulaorionorg.github.io/inmobiliaria-demo/>.

| Ruta | Contenido |
| --- | --- |
| `/inmobiliaria-demo/` | Directorio de propuestas registradas en `sites.js` |
| `/inmobiliaria-demo/cristian-moos/` | Propuesta de Cristian Mooswalder |
| `/inmobiliaria-demo/cristian-moos/#/propiedades` | Catálogo de ese cliente |
| `/inmobiliaria-demo/cristian-moos/#/panel` | Dashboard de ese cliente |

La carpeta identifica a la inmobiliaria; el fragmento `#/...` identifica una sección dentro de su sitio. No se necesitan reglas de reescritura ni un fallback SPA: GitHub Pages sirve el `index.html` real de cada carpeta. Una ruta de cliente inexistente devuelve 404. Los enlaces antiguos de la raíz con `#/...` redirigen a Cristian Moos conservando el fragmento.

La publicación sirve los archivos estáticos de la raíz de la rama `main`. No necesita compilación ni backend. Las actualizaciones de esa rama se publican automáticamente con GitHub Pages.

## Abrir

1. Abrí `index.html` con doble clic en Edge o Chrome y elegí una inmobiliaria. También podés abrir `cristian-moos/index.html` directamente.
2. Navegá por Inicio, Propiedades, Nosotros, Contacto y Favoritos del cliente seleccionado.
3. Entrá a **Panel demo** para ver el dashboard, las propiedades, los mensajes simulados y la configuración.

No hace falta iniciar un servidor ni instalar Node. Las fotografías, el logo oficial y la fuente Manrope necesitan conexión a Internet. Si las imágenes fallan, se muestra un respaldo SVG local; la tipografía tiene respaldo de sistema.

## Qué Funciona

| Vista | Funcionalidad |
| --- | --- |
| Inicio | Portada con tres propiedades, buscador, categorías, zonas y servicios |
| Propiedades | Diez publicaciones reales, tarjetas/lista, filtros combinados y estados vacíos |
| Detalle | Precio, datos disponibles, galería con teclado, consulta y enlace a la publicación original |
| Favoritos | Selección persistente en el navegador, compartida con el panel |
| Contacto | Validación y preparación de un email; enlaces reales a teléfono, WhatsApp y Google Maps |
| Dashboard | Resumen, búsqueda por referencia, estados locales, favoritos y lectura de mensajes ficticios |
| Marca y contenido | Importación, exportación y restauración de configuración JSON |

El filtro y el ordenamiento por precio requieren elegir **USD** o **ARS** en **Más filtros**. Nunca se comparan importes de monedas diferentes ni se convierten precios. La indicación de apto crédito significa que así figura en la fuente, no una aprobación bancaria.

## Agregar Una Inmobiliaria

1. Creá una carpeta en la raíz con un slug único, por ejemplo `otra-inmobiliaria`. Usá solo minúsculas, números y guiones; no renombres un cliente publicado sin migrar sus enlaces y datos locales.
2. Copiá `cristian-moos/index.html` y `cristian-moos/config.js` dentro de esa carpeta. No copies `app.js`, `styles.css` ni los assets compartidos.
3. Adaptá todo el contenido de su `config.js`. En su `index.html`, actualizá título, descripción y color inicial del navegador, manteniendo las rutas relativas de scripts y CSS.
4. Agregá una entrada en `sites.js` con `slug`, `name` y `description`, siguiendo el ejemplo existente. El slug debe coincidir exactamente con el nombre de la carpeta.
5. Abrí el directorio local y probá la nueva tarjeta. Al publicar los archivos, la URL será `/inmobiliaria-demo/otra-inmobiliaria/`.

No hay una segunda inmobiliaria ficticia publicada: el segundo cliente utilizado en las pruebas solo existe en memoria dentro del harness.

## Cambiar Contenido

La fuente de contenido es **`<slug>/config.js`**, por ejemplo `cristian-moos/config.js`. El objeto entre `window.SITE_CONFIG =` y el `;` final es JSON estricto, sin funciones, comentarios ni comas finales. El pequeño envoltorio JavaScript evita los errores CORS de `fetch("config.json")` al abrir mediante `file://`.

| Sección | Qué cambiar |
| --- | --- |
| `brand` | Nombre, logo, iniciales, colores `primary`, `secondary` e `ink`, contactos, dirección y matrícula |
| `meta` | Descripción, fecha de consulta y advertencias |
| `navigation`, `labels` | Navegación y textos de interfaz, incluidos formularios y dashboard |
| `home`, `zones` | Textos comerciales, servicios, portada y zonas |
| `properties` | Publicaciones, precios, moneda, medidas, fotos y fuente |
| `dashboard` | Ejemplos claramente identificados de actividad y mensajes |

Para previsualizar cambios sin editar archivos, usá **Panel demo > Marca y contenido > Exportar configuración JSON**, modificá los valores del JSON exportado e importalo desde esa misma pantalla. Solo afecta a la ruta del cliente actual; no agrega otra inmobiliaria ni cambia su URL. Para distribuir los cambios, actualizá el objeto de su `config.js`; la importación no modifica archivos.

La configuración importada tiene prioridad en ese navegador. **Restaurar demo original** vuelve a leer el contenido distribuido en `config.js` y permite ver los cambios hechos en él después de recargar la página.

La paleta se tomó del logo oficial: terracota `#A92C18` para acciones y enlaces, ocre `#C55F08` para detalles decorativos y negro cálido `#211915` para texto, pie y panel. Los fondos suaves se derivan del color principal. Los JSON anteriores que solo contienen `primary` siguen siendo compatibles.

Reglas del catálogo:

- Conservá la estructura y las claves de la exportación. La importación valida el esquema y admite archivos de hasta 2 MB.
- Usá identificadores `id` únicos, como `5543991` o `casa-01`. `home.heroIds` y `zones[].propertyId` deben apuntar a propiedades existentes.
- `price` es un número sin separadores; `currency` es `USD` o `ARS`. La presentación se formatea en español de Argentina.
- Usá `null` para superficies, dormitorios o baños desconocidos. No uses cero para representar un dato no verificado.
- `images` y `brand.logo` admiten direcciones HTTPS o rutas relativas bajo `assets/`. Esas rutas siempre apuntan a la carpeta compartida de la raíz, no a la carpeta del cliente. Podés organizar fotos en `assets/otra-inmobiliaria/`. `source` conserva el enlace público de origen.
- `featured: true` incluye la propiedad entre las primeras seis destacadas. `credit: true` debe respaldarse en la fuente.
- Las operaciones usan el orden venta/alquiler en `operations`; mantené ese orden si cambiás sus nombres.
- `brand.logo` puede quedar vacío para utilizar el nombre y el símbolo local en lugar del logo remoto.

## Qué No Hace

- No hay login, usuarios reales, CRM, integración con Tokko, estadísticas reales ni actualización automática del catálogo.
- El dashboard es público. Sus mensajes y gráfico son simulados. Pausar una propiedad solo cambia su estado local en el panel, no el catálogo público ni la web del cliente.
- El formulario no envía correos por sí solo. Prepara un borrador `mailto:` que el visitante debe abrir y enviar desde su aplicación de correo. No se enviaron consultas reales durante las pruebas.
- Favoritos, estados, mensajes leídos y configuraciones importadas se guardan con `localStorage`, separados por el slug de la ruta, incluso al importar el mismo JSON en dos clientes. Se conserva el almacenamiento ya publicado de Cristian Moos. No se comparten entre equipos; las políticas de almacenamiento de `file://` dependen del navegador. Si se bloquea, la demo sigue funcionando en memoria.
- La separación por ruta es organizativa, no una barrera de seguridad: todos los archivos y demos son públicos y las páginas comparten origen. No se deben cargar datos privados ni credenciales en las configuraciones.
- Es una selección consultada el 21/10/2026. Precios, condiciones, periodicidad de alquileres y disponibilidad deben confirmarse con la inmobiliaria.
- No es una implementación de producción ni una copia exacta de todos los componentes de la plantilla. No se compró ni incorporó código o recursos de Homelengo.

## Archivos

| Archivo | Propósito |
| --- | --- |
| `index.html`, `directory.js`, `sites.js` | Directorio y registro de inmobiliarias |
| `<slug>/index.html` | Entrada estática de cada inmobiliaria |
| `<slug>/config.js` | Contenido y marca de ese cliente en un objeto JSON |
| `app.js` | Vistas, navegación por hash e interacciones |
| `styles.css` | Maquetación original y responsive |
| `assets/*.svg` | Favicon y respaldo gráfico local |
| `tests/` | Pruebas opcionales de datos, navegador y accesibilidad |
| `SOURCES.md` | Fuentes, precios y límites de verificación |
| `VERIFICATION.md` | Comandos ejecutados y alcance real de las pruebas |
| `TASKS.md` | Tareas y estado de la entrega |

Para las pruebas de datos, si tenés Node: `node --test tests/data.test.cjs`. Las pruebas de navegador son opcionales y requieren Playwright; no forman parte de la ejecución del sitio. `tests/multi-site.cjs` verifica dos clientes bajo un prefijo de repositorio con un servidor HTTP exclusivo de pruebas y sin depender de Internet. Consultá [VERIFICATION.md](VERIFICATION.md).
