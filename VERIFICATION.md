# Verificación de la demo

Pruebas ejecutadas el **21/10/2026** en Windows, con Node **v24.18.0** y Microsoft Edge en modo headless mediante Playwright. El sitio se abrió con **`file://`**, sin servidor de aplicación.

## Resultados

| Comprobación | Resultado |
| --- | --- |
| `node --check app.js` | Sintaxis válida |
| `node --check cristian-moos/config.js` | Sintaxis válida |
| `node --test tests/data.test.cjs` | 9 pruebas aprobadas |
| `tests/browser.cjs` | 126 comprobaciones de navegador aprobadas |
| `tests/multi-site.cjs` | 285 comprobaciones HTTP multicliente aprobadas con el registro local ampliado |
| `tests/clients-browser.cjs` con axe | 2.855 comprobaciones locales aprobadas en las 11 demos |
| `tests/accessibility.cjs` | 0 infracciones axe en las 16 combinaciones de vista y ancho auditadas |
| `tests/batch-two.cjs` con axe | 1.591 comprobaciones locales aprobadas en las diez propuestas nuevas; 40 auditorías sin infracciones automáticas |

Las pruebas del navegador recorren inicio, catálogo, detalle, contacto, nosotros, favoritos, resumen del panel, propiedades del panel, mensajes y configuración a **360, 390, 768, 1024, 1440 y 1920 px**. No detectaron desbordamiento horizontal de página. Las tablas y la navegación del panel permiten desplazamiento interno en pantallas pequeñas.

Se probaron filtros combinados, rango y orden de precios por moneda, búsqueda por referencia, resultados vacíos, vista de lista, favoritos y persistencia, galería por teclado y Escape, validación de formulario, generación del borrador de email, estados locales, búsqueda en el panel, mensajes leídos, importación/exportación de JSON, rechazo de JSON inválido y restauración de configuración.

También se simuló el bloqueo de imágenes remotas y de `localStorage`: el respaldo SVG y la marca de texto funcionaron, los favoritos siguieron operativos en memoria y se informó la limitación. No se detectaron errores JavaScript ni recursos locales faltantes en el recorrido.

Se extrajeron los colores dominantes de los píxeles del logo oficial: `#A92C18`, `#C55F08` y `#211915`. Después de aplicarlos se repitieron las pruebas de navegador y axe, y se revisaron las nuevas capturas de inicio móvil y panel de escritorio. Se verificaron los colores efectivos de botones, detalles y pie, la importación de la paleta, el rechazo de colores inválidos y la compatibilidad con JSON anteriores sin los dos colores nuevos.

La auditoría axe cubre el directorio y las vistas de inicio, catálogo, detalle, contacto, panel, mensajes y configuración a **390 y 1440 px**, con las reglas etiquetadas `wcag2a`, `wcag2aa`, `wcag21a` y `wcag21aa`. Se corrigieron contrastes y nombres accesibles detectados durante las ejecuciones, incluido el número de tarjeta del directorio. No equivale a una certificación WCAG completa ni sustituye una prueba con lectores de pantalla.

## Rutas Multicliente

El directorio abre tanto con `file://` como por HTTP. La entrada de Cristian Moos ahora está en `cristian-moos/index.html`, con su configuración en la misma carpeta. Se probaron enlaces locales y la redirección de fichas compartidas con la URL anterior.

El harness multicliente sirve los archivos bajo `/demo-repo/`, emulando el prefijo de GitHub Pages. Un segundo cliente existe solo en memoria; no se añadió una inmobiliaria ficticia al sitio. Se bloqueó la red externa. Las pruebas verifican recargas de catálogo y fichas con HTTP 200, enlaces dentro de su carpeta, recursos compartidos, fallback de imágenes, importación/exportación y aislamiento de favoritos, estados, mensajes y configuración incluso con el mismo JSON importado en ambas rutas. También verifican que restaurar el segundo cliente no altere el primero y que rutas inexistentes devuelvan 404.

Estos resultados corresponden a pruebas locales de la nueva estructura; no implican que esta revisión ya se haya subido o desplegado en GitHub Pages.

## Repetir

No se requieren dependencias para abrir el sitio ni para las nueve pruebas de datos. Las pruebas de navegador necesitan Playwright y Edge; la auditoría adicional necesita axe-core. Las herramientas se instalaron fuera del workspace, en la carpeta temporal aprobada. El servidor HTTP de `multi-site.cjs` se abre únicamente durante la prueba y se cierra al terminar; no forma parte de la aplicación.

Comandos de navegador ejecutados:

```powershell
node tests/browser.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright" "C:\Users\matia\AppData\Local\Temp\opencode"
node tests/accessibility.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright" "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\axe-core\axe.min.js"
node tests/multi-site.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright"
node tests/clients-browser.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright" local "C:\Users\matia\AppData\Local\Temp\opencode" "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\axe-core\axe.min.js"
```

Las rutas a las herramientas pueden sustituirse por las de una instalación existente. El último argumento de `browser.cjs` es opcional y permite generar capturas en una carpeta que ya exista. `BROWSER_CHANNEL` permite cambiar el canal de Chromium instalado.

Capturas generadas en `C:\Users\matia\AppData\Local\Temp\opencode`:

- `demo-home-desktop.png`
- `demo-home-mobile.png`
- `demo-detail-desktop.png`
- `demo-dashboard-desktop.png`
- `demo-dashboard-mobile.png`

Se inspeccionaron visualmente las capturas de inicio, detalle y dashboard en escritorio y las de inicio y dashboard en móvil. También se observaron capturas de la referencia pública para comparar la dirección visual. No hay comparación automatizada píxel a píxel ni afirmación de reproducción exacta de la plantilla.

## Once Demos

La ampliación incorpora 79 publicaciones respecto de la selección inicial: hay 130 fichas en total, con 12 por cada una de las diez inmobiliarias nuevas y 10 de Cristian Moos. La portada admite hasta 12 destacadas, sin recortar la nueva selección a seis. Las pruebas verificaron las 130 fichas, 269 URLs de imágenes y logos decodificadas, 110 recorridos de ancho sin desbordes y 44 auditorías axe de inicio y contacto a 390 y 1440 px. No se detectaron infracciones automáticas; las comprobaciones de contraste sobre fotografías y degradados que axe no puede resolver requieren revisión manual y no constituyen una certificación. Se revisaron las nuevas capturas de Natalia Alvarez en escritorio y Oliva en móvil, además de las capturas anteriores de Nazareth, Pallotta y Puricelli. La prueba de todos los clientes también verificó importación, recarga, canales vacíos ocultos, superficies desconocidas omitidas y tratamiento de precios a consultar en las vistas, filtros y ordenación.

## Segunda Tanda

La [segunda tanda](SEGUNDA_TANDA.md) se verificó localmente el 22/10/2026: 24 fichas, 64 imágenes o logos, diez recorridos de rutas en escritorio y móvil y dos catálogos vacíos deliberados. Hay 20 auditorías axe con comprobaciones incompletas que requieren revisión manual. Se volvió a ejecutar la primera tanda con `clients-browser.cjs` sin axe: 2.787 comprobaciones aprobadas, con sus 130 fichas y 269 recursos originales. Ninguna de estas pruebas publica las diez propuestas nuevas ni valida destinatarios comerciales.

## Fuera de Alcance

- No se probaron Safari, Firefox ni dispositivos móviles físicos.
- No se enviaron mensajes, emails, llamadas ni formularios reales al cliente. Se verificaron las direcciones y los borradores generados; la entrega externa depende de la aplicación elegida.
- No se garantiza la permanencia de imágenes, Google Fonts o enlaces externos. La conexión en vivo a Tokko no existe.
- No se comprobó disponibilidad comercial actual, documentación de inmuebles, elegibilidad bancaria ni exactitud catastral de superficies.
- Las pruebas no instalan un servidor de aplicación ni modifican la configuración de OpenCode. Los commits y despliegues se realizan únicamente con autorización del usuario; no autorizan envíos de emails ni contacto comercial.
