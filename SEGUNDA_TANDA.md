# Segunda tanda: demos inmobiliarias independientes

Se prepararon diez propuestas independientes a partir del relevamiento del **22 de octubre de 2026**. Esta tanda contiene **24 publicaciones verificadas en ocho demos** y **dos presentaciones institucionales sin inventario confirmado**. No se contactó a estas inmobiliarias, no se enviaron emails ni se ejecutaron formularios de consulta.

**Publicación autorizada por el usuario:** las diez propuestas se distribuyen en el mismo repositorio y GitHub Pages que la primera tanda. Su disponibilidad debe comprobarse contra el despliegue correspondiente antes de usar los enlaces en un email comercial. La autorización para publicar no autoriza contactar a las inmobiliarias ni enviar correos.

## Selección y fuentes

| Inmobiliaria | Ruta bajo `/inmobiliaria-demo/` | Publicaciones | Alcance y fuentes |
| --- | --- | ---: | --- |
| Capasso Inmobiliaria | `capasso-inmobiliaria/` | 0 | Institucional. Referencias históricas insuficientes para ofrecer inmuebles; [fuentes y límites](capasso-inmobiliaria/SOURCES.md). |
| María Gutiérrez Propiedades | `maria-gutierrez/` | 3 | Casa, lote y departamento; [fuentes y valores](maria-gutierrez/SOURCES.md). |
| Del Corral Inmobiliaria | `del-corral/` | 3 | Casas y departamento; [fuentes y valores](del-corral/SOURCES.md). |
| Marta Palacios Propiedades | `marta-palacios/` | 3 | Selección de casas en Escobar y Matheu; [fuentes y valores](marta-palacios/SOURCES.md). |
| Saracini Propiedades | `saracini-propiedades/` | 0 | Institucional. Sitio rechazó la conexión y no se pudieron verificar fichas ni fotos; [intentos y límites](saracini-propiedades/SOURCES.md). |
| Satriano Propiedades | `satriano-propiedades/` | 3 | Departamento, local y terreno; [fuentes y valores](satriano-propiedades/SOURCES.md). |
| Canle Propiedades | `canle-propiedades/` | 3 | Tres publicaciones de venta; [fuentes y valores](canle-propiedades/SOURCES.md). |
| Iacouzzi Propiedades | `iacouzzi-propiedades/` | 3 | Tres publicaciones propias de venta; [fuentes y valores](iacouzzi-propiedades/SOURCES.md). |
| Díaz Propiedades | `diaz-propiedades/` | 3 | Casa, departamento y terreno; [fuentes y valores](diaz-propiedades/SOURCES.md). |
| Micuccio Propiedades | `micuccio-propiedades/` | 3 | Casa, departamento en alquiler y terreno; [fuentes y valores](micuccio-propiedades/SOURCES.md). |

Cada carpeta contiene `index.html`, `config.js` y `SOURCES.md`. Los recursos locales de Díaz y Micuccio están en `assets/<slug>/`, desde la raíz del proyecto. Los demás recursos identificados se cargan desde sus direcciones públicas originales. No se usaron inmuebles ni fotografías de otros clientes para completar faltantes.

El registro `sites.js` marca estas entradas con `batch: 2`, diferenciándolas del alcance de la primera tanda. La selección breve de esta tanda no reduce las doce publicaciones de cada demo anterior ni los diez inmuebles de Cristian Moos.

## Abrir y revisar

1. Abrir el `index.html` de la raíz con doble clic y elegir una de las diez nuevas tarjetas.
2. Comprobar la marca y el aviso visible: **Propuesta independiente de Nebula. Sin vínculo comercial ni autorización de esta inmobiliaria.**
3. Recorrer inicio, catálogo, fichas, nosotros y contacto, tanto en escritorio como en móvil.
4. En el panel, verificar que la actividad y los mensajes son simulados y que se conserva la identificación de propuesta independiente.

En Capasso y Saracini no hay fotografías de propiedades, sliders ni fichas ficticias: inicio y nosotros tienen una presentación institucional, y el catálogo explica el límite. La importación y exportación de JSON también funciona con un inventario vacío. No se afirma que estas empresas no tengan inmuebles; solo que no se pudo incorporar una selección verificada en esta consulta.

El aviso utiliza `meta.proposalNotice` de la configuración distribuida. Importar otra configuración en el navegador no elimina la identificación independiente de esa ruta. En el panel, el aviso se incluye dentro de su nota demostrativa para no superponerse con la barra lateral.

## Límites de la información

- Capasso publica datos de contacto y dirección en un sitio histórico con referencias de 2016. Se conservan como datos históricos, no como oficina o canales reconfirmados actualmente.
- Saracini no permitió una lectura directa. Los contactos encontrados en extractos indexados del dominio oficial están documentados como pendientes de confirmación directa; no constituyen un destinatario comercial validado.
- Precios, condiciones, disponibilidad, superficies y aptitud crediticia deben confirmarse con cada inmobiliaria. Las cantidades desconocidas permanecen en `null`.
- Las fotos pueden contener ediciones o vistas de proyectos; las salvedades específicas están en cada ficha y documento de fuentes.
- `Venta` y `Alquiler` son el vocabulario del motor. Un filtro vacío no implica que la inmobiliaria no ofrezca esa operación en su catálogo completo. Del Corral y Marta Palacios solo tienen ventas dentro de esta selección.
- El dashboard no es un CRM, no hay autenticación y el formulario únicamente prepara un borrador de correo. Las pruebas no enviaron mensajes ni abrieron los canales de contacto.
- No se crearon destinatarios comerciales, campañas ni emails HTML a partir de los contactos de las demos. Esa etapa requiere validación y aprobación separadas.

## Verificación realizada

```powershell
node --test tests/data.test.cjs
node tests/batch-two.cjs "RUTA_A_PLAYWRIGHT" local "CARPETA_EXISTENTE_PARA_CAPTURAS" "RUTA_A_AXE_MIN_JS"
```

La prueba de esta tanda recorrió las diez demos a **1440 y 390 px**, sus 24 fichas y 64 imágenes o logos. Se aprobaron **1.591 comprobaciones**, incluida navegación, avisos, filtros, favoritos, exportación, importación, recarga y rechazo de referencias inexistentes. No hubo errores JavaScript, desbordes ni recursos locales faltantes.

Se ejecutaron **40 auditorías axe** de inicio y contacto, sin infracciones automáticas. En 20 auditorías hubo comprobaciones incompletas que requieren revisión manual, principalmente contraste sobre imágenes; no equivale a una certificación de accesibilidad.

Las pruebas de datos y los recorridos de la primera tanda siguen separados para conservar sus requisitos de catálogo más amplio. Las herramientas de verificación no son dependencias del sitio ni requieren un backend de aplicación.

## Antes de enviar

La publicación de esta revisión fue autorizada. Antes de enviar una propuesta, comprobar que el despliegue de GitHub Pages terminó correctamente y que la URL directa funciona en navegador. Después corresponde validar por separado el destinatario comercial y aprobar el email personalizado. Un resultado HTTP 200 del directorio no sustituye la revisión de cada demo y de su identidad.
