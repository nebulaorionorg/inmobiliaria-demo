# Fuentes y datos de la demo

Consulta realizada el **21/10/2026**. Los precios son los importes publicados al consultar las fuentes, no una garantía de disponibilidad ni una validación comercial o legal.

## Referencia Visual

- Preview solicitado: <https://preview.themeforest.net/item/homelengo-real-estate-html-template/full_screen_preview/54970867>.
- El iframe público del preview apunta a <https://homelengo.vercel.app/>.
- Dashboard público consultado: <https://homelengo.vercel.app/dashboard.html>.
- Se inspeccionaron la portada y el dashboard en navegador y la información pública de presentación: Manrope, azul principal, fondo claro, navegación blanca, buscador redondeado, tarjetas y panel lateral oscuro.
- La implementación es original. No se adquirió, copió ni incorporó la plantilla o sus archivos al proyecto. Los SVG son propios. No se utilizan fotografías, logos, iconos ni scripts de Homelengo.

## Cliente y Contacto

Fuente: <https://www.cristianmoos.com/>. El HTML público expone el logo oficial, datos de contacto, áreas de actividad, enlaces sociales y matrícula.

| Dato | Valor publicado |
| --- | --- |
| Marca | Cristian Mooswalder Propiedades |
| Teléfono | 0348-4445615 |
| WhatsApp | +5491155800659 |
| Email | info@cristianmoos.com |
| Oficina | Colectora Este Nº 2301, Ingeniero Maschwitz, Buenos Aires, Argentina, CP 1623 |
| Matrícula | Cristian Mooswalder Col. Nº 306 Z-C |
| Instagram | <https://www.instagram.com/cristianmooswalder/> |
| Facebook | <https://www.facebook.com/cristianmooswalder/> |

El número internacional para el enlace telefónico se corroboró también en las fichas: `+54 348 4445615`. Los enlaces de Google Maps son búsquedas por la dirección publicada, no coordenadas inventadas ni un mapa georreferenciado verificado.

## Catálogo

La portada del cliente carga sus destacados mediante el endpoint público <https://www.cristianmoos.com/home_properties/>. Se consultó ese fragmento y las fichas disponibles. Para alquileres se consultó <https://www.cristianmoos.com/Alquiler>.

| Referencia | Propiedad | Operación | Moneda e importe | Respaldo |
| --- | --- | --- | --- | --- |
| [14510](https://www.cristianmoos.com/p/5543991-Casa-en-Venta-en-Muelles-Barrio-Muelles-Puertos-del-Lago) | Muelles, Puertos del Lago | Venta | USD 1.200.000 | Destacado y ficha individual |
| [15066](https://www.cristianmoos.com/p/7955907-Casa-en-Venta-en-Maschwitz-Club) | Maschwitz Club | Venta | USD 180.000 | Destacado y ficha individual |
| [14797](https://www.cristianmoos.com/p/6593128-Casa-en-Venta-en-Parque-Alta-Vista-Tronador-al-400) | Tronador al 400, Parque Alta Vista | Venta | USD 135.000 | Destacado y ficha individual |
| [15062](https://www.cristianmoos.com/p/7859215-Quinta-en-Venta-en-Ingeniero-Maschwitz-Echeverria-726) | Quinta en Echeverría 726 | Venta | USD 180.000 | Destacado y ficha individual |
| [14992](https://www.cristianmoos.com/p/7289188-Casa-en-Venta-en-Barrio-El-Cazador-El-Cazador) | Barrio El Cazador | Venta | USD 349.000 | Destacado y ficha individual |
| [14028](https://www.cristianmoos.com/p/4242852-Casa-en-Venta-en-Fincas-Del-Lago-Maschwitz-Barrio-Cerrado) | Fincas del Lago | Venta | USD 195.000 | Solo destacado; enlace individual devuelve la portada |
| [14534](https://www.cristianmoos.com/p/5454731-Terreno-en-Venta-en-Escobar-Islandia-y-Don-Pereira) | Terreno, Islandia y Don Pereira | Venta | USD 57.000 | Destacado público |
| [14237](https://www.cristianmoos.com/p/4709623-Departamento-en-Alquiler-en-Green-Style-Ruta-26) | Departamento, Green Style | Alquiler | USD 850 | Listado de alquileres |
| [15086](https://www.cristianmoos.com/p/7977727-Casa-en-Alquiler-en-L.%C3%91anduces-Los-%C3%91anduces) | Casa, Los Ñanduces | Alquiler | USD 2.100 | Listado de alquileres |
| [13828](https://www.cristianmoos.com/p/3836739-Departamento-en-Alquiler-en-Belen-De-Escobar-Escobar-centro) | Departamento, Escobar centro | Alquiler | ARS 950.000 | Listado de alquileres |

## Criterios y Límites

- Los nombres se ajustaron para facilitar su lectura y las descripciones son resúmenes propios de datos publicados, no transcripciones comerciales completas.
- Muelles: el detalle de superficies informa 339,59 m² construidos, aunque el encabezado redondea a 339 m². La demo usa el dato detallado. Se conservan cuatro dormitorios y cuatro baños según la información básica; el relato distingue los tres dormitorios en suite de planta alta.
- Maschwitz Club: se usan tres dormitorios según la ficha, aunque la descripción habla de cuatro habitaciones. No se dedujeron dormitorios adicionales.
- Parque Alta Vista: se mantiene la advertencia de que el baño de la suite está a terminar.
- Fincas del Lago: el destacado permite corroborar USD 195.000, cuatro dormitorios y 286 m² construidos, pero su enlace individual no entregó una ficha. Baños y superficie de terreno quedan en `null` y no se agregaron amenities ni una descripción inventada.
- Los campos no disponibles en los listados de alquileres quedan en `null`. No se asume un plazo contractual ni una periodicidad confirmada para los importes.
- Green Style menciona desocupación a fin de agosto sin una fecha completa verificable. La demo recomienda confirmar disponibilidad y no presenta esa fecha como vigente.
- Solo El Cazador se identifica como publicado apto crédito entre las propiedades seleccionadas. Debe confirmarse con la entidad bancaria. `credit: false` en las demás significa que no se incorporaron como publicadas apto crédito, no un dictamen de inelegibilidad.
- Las fotografías y el logo se cargan desde las direcciones públicas originales de `static.tokkobroker.com`. Se preservan las marcas de agua. Su disponibilidad remota puede cambiar.
- Las fotos de zonas son fotos de propiedades publicadas, no fotografías urbanas verificadas. La imagen del bloque institucional también está identificada como una propiedad del catálogo, no como una foto de la oficina.
- Los textos de acompañamiento, los servicios y las llamadas a la acción son redacción de la demo basada en las actividades publicadas. No se inventaron años de trayectoria, ventas realizadas, premios, testimonios ni agentes.
- Los mensajes, identidades de ejemplo y gráfico del dashboard son ficticios y se señalan como simulados. Los contadores de propiedades y favoritos se calculan sobre los datos reales de la demo y el estado local.

Esta demo no implica aprobación o afiliación con ThemeForest, Themesflat ni la inmobiliaria. Antes de una publicación comercial definitiva, corresponde confirmar datos, disponibilidad y autorización de uso de marca e imágenes con su titular.
