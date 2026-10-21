# Verificación de la demo

Pruebas ejecutadas el **21/10/2026** en Windows, con Node **v24.18.0** y Microsoft Edge en modo headless mediante Playwright. El sitio se abrió con **`file://`**, sin servidor de aplicación.

## Resultados

| Comprobación | Resultado |
| --- | --- |
| `node --check app.js` | Sintaxis válida |
| `node --check config.js` | Sintaxis válida |
| `node --test tests/data.test.cjs` | 7 pruebas aprobadas |
| `tests/browser.cjs` | 123 comprobaciones de navegador aprobadas |
| `tests/accessibility.cjs` | 0 infracciones axe en las 14 combinaciones de vista y ancho auditadas |

Las pruebas del navegador recorren inicio, catálogo, detalle, contacto, nosotros, favoritos, resumen del panel, propiedades del panel, mensajes y configuración a **360, 390, 768, 1024, 1440 y 1920 px**. No detectaron desbordamiento horizontal de página. Las tablas y la navegación del panel permiten desplazamiento interno en pantallas pequeñas.

Se probaron filtros combinados, rango y orden de precios por moneda, búsqueda por referencia, resultados vacíos, vista de lista, favoritos y persistencia, galería por teclado y Escape, validación de formulario, generación del borrador de email, estados locales, búsqueda en el panel, mensajes leídos, importación/exportación de JSON, rechazo de JSON inválido y restauración de configuración.

También se simuló el bloqueo de imágenes remotas y de `localStorage`: el respaldo SVG y la marca de texto funcionaron, los favoritos siguieron operativos en memoria y se informó la limitación. No se detectaron errores JavaScript ni recursos locales faltantes en el recorrido.

Se extrajeron los colores dominantes de los píxeles del logo oficial: `#A92C18`, `#C55F08` y `#211915`. Después de aplicarlos se repitieron las pruebas de navegador y axe, y se revisaron las nuevas capturas de inicio móvil y panel de escritorio. Se verificaron los colores efectivos de botones, detalles y pie, la importación de la paleta, el rechazo de colores inválidos y la compatibilidad con JSON anteriores sin los dos colores nuevos.

La auditoría axe cubre inicio, catálogo, detalle, contacto, panel, mensajes y configuración a **390 y 1440 px**, con las reglas etiquetadas `wcag2a`, `wcag2aa`, `wcag21a` y `wcag21aa`. Se corrigieron contrastes y nombres accesibles detectados durante la primera ejecución. No equivale a una certificación WCAG completa ni sustituye una prueba con lectores de pantalla.

## Repetir

No se requieren dependencias para abrir el sitio ni para las siete pruebas de datos. Las pruebas de navegador necesitan Playwright y Edge; la auditoría adicional necesita axe-core. Las herramientas se instalaron fuera del workspace, en la carpeta temporal aprobada.

Comandos de navegador ejecutados:

```powershell
node tests/browser.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright" "C:\Users\matia\AppData\Local\Temp\opencode"
node tests/accessibility.cjs "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\playwright" "C:\Users\matia\AppData\Local\Temp\opencode\node_modules\axe-core\axe.min.js"
```

Las rutas a las herramientas pueden sustituirse por las de una instalación existente. El último argumento de `browser.cjs` es opcional y permite generar capturas en una carpeta que ya exista. `BROWSER_CHANNEL` permite cambiar el canal de Chromium instalado.

Capturas generadas en `C:\Users\matia\AppData\Local\Temp\opencode`:

- `demo-home-desktop.png`
- `demo-home-mobile.png`
- `demo-detail-desktop.png`
- `demo-dashboard-desktop.png`
- `demo-dashboard-mobile.png`

Se inspeccionaron visualmente las capturas de inicio, detalle y dashboard en escritorio y las de inicio y dashboard en móvil. También se observaron capturas de la referencia pública para comparar la dirección visual. No hay comparación automatizada píxel a píxel ni afirmación de reproducción exacta de la plantilla.

## Fuera de Alcance

- No se probaron Safari, Firefox ni dispositivos móviles físicos.
- No se enviaron mensajes, emails, llamadas ni formularios reales al cliente. Se verificaron las direcciones y los borradores generados; la entrega externa depende de la aplicación elegida.
- No se garantiza la permanencia de imágenes, Google Fonts o enlaces externos. La conexión en vivo a Tokko no existe.
- No se comprobó disponibilidad comercial actual, documentación de inmuebles, elegibilidad bancaria ni exactitud catastral de superficies.
- No se realizó despliegue, commit, PR, instalación de servidor ni modificación de configuración de OpenCode.
