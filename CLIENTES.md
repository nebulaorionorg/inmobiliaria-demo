# Demos publicadas por inmobiliaria

El repositorio contiene **11 demos y 51 publicaciones seleccionadas**: Cristian Moos y las diez inmobiliarias del relevamiento de Garín, Benavídez y Tortuguitas. Se consultaron los sitios públicos de cada negocio el **21/10/2026**, sin enviar mensajes, consultas ni formularios.

Directorio: <https://nebulaorionorg.github.io/inmobiliaria-demo/>.

## Enlaces y selección

| Inmobiliaria | Demo directa | Publicaciones | Fuentes de esta selección |
| --- | --- | ---: | --- |
| Cristian Mooswalder | [cristian-moos](https://nebulaorionorg.github.io/inmobiliaria-demo/cristian-moos/) | 10 | [Fuentes](SOURCES.md) |
| Nazareth Propiedades | [nazareth-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/nazareth-propiedades/) | 3 | [Fuentes](nazareth-propiedades/SOURCES.md) |
| Natalia Alvarez Propiedades | [natalia-alvarez](https://nebulaorionorg.github.io/inmobiliaria-demo/natalia-alvarez/) | 3 | [Fuentes](natalia-alvarez/SOURCES.md) |
| Bustamante Propiedades | [bustamante-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/bustamante-propiedades/) | 4 | [Fuentes](bustamante-propiedades/SOURCES.md) |
| Puricelli Inmobiliaria | [puricelli-inmobiliaria](https://nebulaorionorg.github.io/inmobiliaria-demo/puricelli-inmobiliaria/) | 4 | [Fuentes](puricelli-inmobiliaria/SOURCES.md) |
| Pallotta Propiedades | [pallotta-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/pallotta-propiedades/) | 5 | [Fuentes](pallotta-propiedades/SOURCES.md) |
| Rodriguez Jurado Propiedades | [rodriguez-jurado](https://nebulaorionorg.github.io/inmobiliaria-demo/rodriguez-jurado/) | 4 | [Fuentes](rodriguez-jurado/SOURCES.md) |
| Oliva Propiedades | [oliva-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/oliva-propiedades/) | 4 | [Fuentes](oliva-propiedades/SOURCES.md) |
| Cerezo Propiedades | [cerezo-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/cerezo-propiedades/) | 4 | [Fuentes](cerezo-propiedades/SOURCES.md) |
| Rivas Propiedades | [rivas-propiedades](https://nebulaorionorg.github.io/inmobiliaria-demo/rivas-propiedades/) | 5 | [Fuentes](rivas-propiedades/SOURCES.md) |
| Balbas Oviedo Propiedades | [balbas-oviedo](https://nebulaorionorg.github.io/inmobiliaria-demo/balbas-oviedo/) | 5 | [Fuentes](balbas-oviedo/SOURCES.md) |

En cada demo, `#/propiedades` abre su catálogo, `#/contacto` sus canales de contacto y `#/panel` el dashboard simulado. La identidad, configuración y almacenamiento local permanecen separados por ruta.

## Datos y alcance

- Cada configuración utiliza la marca, paleta adaptada, contactos e inmuebles de su propio sitio. Las fuentes incluyen las fichas consultadas y sus precios, sin conversiones de moneda.
- Es una selección estática, no el catálogo completo ni una integración con Tokko, Xintel, WordPress u otro sistema de gestión.
- Los precios desconocidos se conservan como `null` y se muestran como **Consultar precio**. No se incluyen en rangos de precios y se ordenan al final.
- Las superficies y cantidades desconocidas o contradictorias permanecen en `null`; las tarjetas no las sustituyen por cero. Los datos publicados como cero se distinguen de los no informados.
- Solo se muestran los canales de contacto corroborados. No se transforma un teléfono fijo en WhatsApp ni se inventan redes o matrículas.
- Los destacados son una selección editorial de las demos. Los mensajes y gráficos del dashboard son ficticios, están identificados como simulados y no representan actividad real del negocio.
- No se envió ninguna consulta comercial durante el trabajo. La demostración no implica aprobación, contratación ni afiliación de estas inmobiliarias con Nebula.

## Salvedades importantes

| Cliente | Límite que debe tenerse en cuenta |
| --- | --- |
| Nazareth | Catálogo público sin fecha de actualización y con certificado HTTPS inválido en el origen. La foto identificada de Casa 180 se conserva localmente para servirla de forma segura desde Pages. Casa 93 y el lote usan un gráfico no fotográfico: no se asignaron imágenes de otros inmuebles. Confirmar vigencia y condiciones antes del contacto comercial. |
| Natalia Alvarez | Se mantiene la advertencia de su sitio sobre edición estética digital con IA y fotografías ilustrativas. |
| Bustamante | Una ficha corresponde al alquiler temporario de enero de 2027; no es un alquiler anual. El lote incluye imágenes de un proyecto, no una construcción existente. |
| Puricelli | Casa San Francisco publica precio a consultar. Otras superficies presentan discrepancias que se explican sin elegir cifras arbitrarias. |
| Pallotta | Algunas publicaciones advierten fotografías editadas con IA. Se mantienen advertencias sobre superficies y condiciones de alquiler. |
| Rodriguez Jurado | Se excluyó una ficha marcada como reservada. La casa de El Cantón tiene dormitorios contradictorios y solo planos de pileta, no una piscina construida confirmada. |
| Oliva | El departamento en pozo se identifica como proyecto y sus imágenes pueden ser renders. No se presenta una cuota o anticipo de un terreno como precio total. |
| Cerezo | No se corroboraron emprendimientos activos. El terreno anunciado como ideal para desarrollar sigue siendo un lote, no un proyecto aprobado. |
| Rivas | Se utilizó exclusivamente `rivaspropiedades.net`, de Tortuguitas, no el negocio de La Plata. El logo disponible es una cabecera compuesta; WhatsApp y redes no corroborados se ocultan. |
| Balbas Oviedo | La búsqueda antigua del CSV devuelve 404. Se utilizaron el inicio y las fichas actuales del mismo dominio. No se atribuyen las 41 publicaciones del relevamiento histórico al catálogo actual. |

Precios, disponibilidad, contratos, superficies, servicios, documentación y aptitud crediticia requieren confirmación con cada inmobiliaria. Las fotografías remotas pueden dejar de estar disponibles. Se preservan las marcas de agua y no se utilizan fotografías de otros clientes para completar faltantes.

## Verificación técnica

La prueba `tests/clients-browser.cjs` recorre las demos tanto localmente como contra una base HTTPS, sin enviar formularios ni abrir los canales externos de contacto. Comprueba fichas, filtros, imágenes, favoritos, configuración y vistas móviles. Su argumento opcional de axe permite auditar inicio y contacto en ambos anchos.

```powershell
node --test tests/data.test.cjs
node tests/clients-browser.cjs "RUTA_A_PLAYWRIGHT" local
node tests/clients-browser.cjs "RUTA_A_PLAYWRIGHT" "https://nebulaorionorg.github.io/inmobiliaria-demo/"
```

Consultar [VERIFICATION.md](VERIFICATION.md) para el alcance de las otras suites. El harness usa Node y Playwright solo para verificar; las demos siguen funcionando sin servidor de aplicación ni dependencias de ejecución.
