# Del Corral Inmobiliaria: fuentes de la propuesta

Consulta: **2026-10-22**. Propuesta independiente de Nebula. Sin vínculo comercial ni autorización de esta inmobiliaria.

Demo estática de **3 propiedades distintas**, no catálogo completo, backend ni CRM. Las fichas y sus precios son información pública consultada, no confirmación de disponibilidad. No se enviaron formularios, emails ni mensajes de WhatsApp. No se consultaron estados comerciales privados.

## Contactos e identidad

| Dato | Valor utilizado | Fuente exacta |
| --- | --- | --- |
| Marca | Del Corral Inmobiliaria | [Inicio](https://delcorral.com.ar/) y [Nosotros](https://delcorral.com.ar/nosotros/) |
| Oficina | Fitz Roy 5655, Benavídez, Tigre | [Inicio, encabezado y pie](https://delcorral.com.ar/) |
| Teléfono | 11 2241-5211; enlace normalizado `+541122415211` | [Inicio](https://delcorral.com.ar/) |
| WhatsApp | +54 9 11 2241-5211 | [Enlace oficial del inicio](https://wa.me/5491122415211), verificado sin abrir conversación |
| Email | santiago@delcorral.com.ar | [Inicio](https://delcorral.com.ar/) |
| Responsable | Santiago del Corral, CMCPSI 6127 | [Pie del inicio](https://delcorral.com.ar/) |
| Instagram | inmobiliariacingolanidelcorral | [Perfil enlazado desde el inicio](https://www.instagram.com/inmobiliariacingolanidelcorral/) |
| Facebook | `''`, no verificado | No se identificó un perfil oficial en las páginas consultadas |
| Logo original | PNG remoto, sin redibujar | [Archivo oficial](https://delcorral.com.ar/content/empresas/cdc/imagenes/logo.png) |
| Paleta | Primary `#bf0d0d`, secondary `#851010`, ink `#251b1b` | Rojo `rgb(191, 13, 13)` observado en el [inicio oficial](https://delcorral.com.ar/); tonos complementarios de la propuesta. Primary sobre blanco: **6,41:1** |
| Presentación institucional | Oficina en Benavídez; venta, alquiler y tasaciones en Zona Norte | [Nosotros](https://delcorral.com.ar/nosotros/) |

## Tres fichas seleccionadas

Todas figuran públicamente como **Venta**, en **USD**. No se seleccionaron avisos identificados como vendidos o reservados ni proyectos con renders. No se afirma disponibilidad actual. `featured: true` significa destacada en esta selección independiente, no una prioridad comercial privada.

| ID de demo / referencia oficial | Ficha original y precio publicado | Datos trasladados y excepciones |
| --- | --- | --- |
| `dc-cdc0069` / `CDC0069` | [El Naudir 100](https://delcorral.com.ar/inmueble/casa-venta-4-ambientes-el-naudir-escobar-gba-zona-norte-lp616690), **USD 295.000** | Casa; 3 dormitorios, 3 baños; una planta; paneles solares, piso radiante, galería, parrilla y piscina. `area: 210` es la suma explícita de 160 m² cubiertos y 50 m² semicubiertos. `landArea: 780` sigue la ficha; el texto dice 781,2 m². La discrepancia está advertida en la descripción. |
| `dc-cdc0082` / `CDC0082` | [Vila Marina 2 100](https://delcorral.com.ar/inmueble/casa-venta-4-ambientes-vila-marina-ii-villanueva-tigre-lp616703), **USD 285.000** | Casa; 3 dormitorios, 2 baños; lote 405 m²; 160 m² cubiertos + 25 m² semicubiertos = `area: 185`, coincidente con superficie propia. Dos plantas, galería, parrilla, jardín, piso radiante eléctrico y DVH. El acceso al agua y las amarras se describen como servicios del barrio, no como amarra propia. |
| `dc-cdc0291` / `CDC0291` | [Av. del Libertador 3800](https://delcorral.com.ar/inmueble/departamento-venta-4-ambientes-libertador-rio-martinez-san-isidro-lp720237), **USD 900.000** | Departamento; piso completo en Torre Bouchard, piso 14; 3 baños; 177 m² cubiertos + 45 m² semicubiertos = 222 m² publicados como total. Dos cocheras y dos bauleras. `bedrooms: null`: la ficha dice 3, el detalle dice 2 y el texto distingue dependencia. `landArea: null`, no informado. Ubicación según la ficha/URL: Libertador / Río, Martínez, San Isidro; el texto también menciona La Lucila. Ambas diferencias se explicitan. |

## Fotografías exactas

URLs extraídas de la galería de cada ficha anterior. Se conservan las query strings originales. No se utilizan fotos de otra inmobiliaria, imágenes de zonas genéricas ni imágenes generadas.

| Propiedad | Orden | URL exacta |
| --- | --- | --- |
| CDC0069 | 1 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0069/CDC0069_033.jpg?9750048 |
| CDC0069 | 2 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0069/CDC0069_061.jpg?9750088 |
| CDC0069 | 3 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0069/CDC0069_055.jpg?9750082 |
| CDC0082 | 1 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0082/CDC0082_062.jpg?11512644 |
| CDC0082 | 2 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0082/CDC0082_042.jpg?10781484 |
| CDC0082 | 3 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0082/CDC0082_044.jpg?10781488 |
| CDC0291 | 1 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0291/CDC0291_057.jpg?11512629 |
| CDC0291 | 2 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0291/CDC0291_055.jpg?9669019 |
| CDC0291 | 3 | https://cdn.tecnogestion.com.ar/multimedia/CDC/CDC/CDC0291/CDC0291_004.jpg?9668924 |

## Alcance y límites

- Acceso público mediante `webfetch` y navegador Edge. Cada `source` apunta al sitio original del cliente, no a un agregador.
- `credit: false` en las tres fichas significa que no se comprobó una mención de aptitud crediticia; no significa que se haya comprobado su inelegibilidad.
- `types` contiene Casa y Departamento; `operations` contiene únicamente Venta porque las tres fichas seleccionadas son ventas. Los alquileres de la inmobiliaria no se importaron a esta selección breve.
- `heroIds` y `zones[].propertyId` referencian exclusivamente estas tres fichas. Las fotos de zonas son de esos inmuebles, no panorámicas del barrio.
- Configuración completa y autónoma, con las 175 etiquetas del esquema base; no depende en ejecución de la configuración de otro cliente. Tres mensajes y actividad del panel expresamente simulados, sin personas ni consultas reales.
- Aviso independiente en `meta.proposalNotice` y en un `aside` después del skip link, antes del header. Su estilo corresponde a la hoja compartida, fuera del alcance de estos archivos.
- Recursos remotos sujetos a cambios, retirada o restricciones del servidor original. No se descargaron activos ni se crearon carpetas `assets`.
- Únicos archivos de esta entrega: `del-corral/index.html`, `del-corral/config.js` y `del-corral/SOURCES.md`. No se modificó la aplicación ni la hoja de estilos compartidas.

## Verificación local

- `node --check del-corral/config.js`: correcto. Esquema completo comparado con la base: 175 etiquetas, 3 mensajes simulados y 3 propiedades; IDs únicos, tipos, operaciones, números y referencias de hero/zonas válidos. Sin datos residuales del cliente base ni etiqueta HTML `base`.
- Edge/Playwright: inicio, catálogo, las tres fichas, nosotros, contacto, panel, mensajes y configuración, a 1440 y 390 px: **20 comprobaciones de ruta**, sin errores JavaScript ni desbordamiento horizontal. Catálogo de tres tarjetas y aviso independiente antes del header comprobados. Sin enviar formularios ni activar enlaces de contacto.
- Las **9 fotos y el logo** respondieron HTTP 200 con tipo imagen y dimensiones decodificables. No se garantiza su permanencia futura en los servidores originales.
- La unidad es removible eliminando únicamente los tres archivos de `del-corral/`; no se requieren cambios compartidos para retirar esta demo. No se realizaron commits ni publicaciones.
