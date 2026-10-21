# Demo inmobiliaria: tareas

- [x] Comprobar workspace: vacio, sin Git ni indice CodeGraph; no se inicializa ninguno.
- [x] Consultar preview de ThemeForest y seguir iframe a homelengo.vercel.app.
- [x] Consultar catalogo, fichas, fotos y contacto publico de cristianmoos.com.
- [x] Implementar portada, catalogo, detalle con galeria y contacto responsive.
- [x] Implementar favoritos y dashboard demostrativo con estado local.
- [x] Centralizar marca, textos y propiedades en configuracion JSON compatible con file://.
- [x] Verificar sintaxis, datos, navegacion y responsive; documentar resultados reales.
- [x] Entregar instrucciones y fuentes, sin commit ni despliegue.

## Alcance

Maquetacion original inspirada en la referencia publica. Sin compra, descarga ni reutilizacion de codigo o recursos de la plantilla. Solo HTML, CSS y JavaScript sin dependencias de ejecucion. Los contactos y precios proceden del cliente; no hay backend, autenticacion ni analitica real.

## Unidades de trabajo

1. Sitio y contenido: index.html, styles.css, app.js, config.js y recurso de respaldo.
2. Verificacion y entrega: scripts de prueba, README.md, SOURCES.md y esta lista.

Cada unidad es removible por sus propios archivos; no hay archivos preexistentes ni cambios ajenos que revertir. No se crearan commits.

## Evidencia

- Node: sintaxis valida de app.js y config.js; 6 pruebas de datos aprobadas.
- Edge/Playwright: 115 comprobaciones aprobadas mediante file://, sin servidor.
- Responsive: 10 vistas en 6 anchos (360 a 1920 px), sin overflow horizontal de pagina.
- Axe: 14 combinaciones auditadas sin infracciones de las reglas WCAG A/AA seleccionadas.
- Fuentes, limitaciones y comandos completos en SOURCES.md y VERIFICATION.md.
- Sin indice CodeGraph, agentes persistentes, backend, commits, PR ni despliegue.
