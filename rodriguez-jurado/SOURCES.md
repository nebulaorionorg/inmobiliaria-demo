# Rodriguez Jurado: fuentes de la demo

Consulta: **2026-10-21**. La demo contiene **12 inmuebles reales: 8 casas, 3 lotes y 1 departamento; 9 ventas y 3 alquileres**. Se conservaron íntegros los cuatro registros originales y se añadieron ocho distintos. Reproduce una selección estática del catálogo público, sin conexión real a Xintel ni al CRM. Todos los inmuebles y contactos pertenecen a esta inmobiliaria.

## Publicaciones y precios

Las fichas se completan mediante JavaScript. `webfetch` mostró inicialmente la estructura sin datos; los valores, descripciones y fotos se verificaron después de la carga con Playwright y Microsoft Edge. `area` significa superficie **cubierta**, como indican las etiquetas de esta demo. No se convirtió ninguna moneda.

| ID demo / referencia | Ficha pública | Operación y precio | Datos corroborados / tratamiento |
|---|---|---|---|
| rj-roj565 / ROJ565 | [Casa en Ingeniero Maschwitz](https://rodriguezjurado.com.ar/casa-en-venta-en-ingeniero-maschwitz-ficha-roj565) | Venta, USD 297.000 | Calle Buenos Aires, 3 dormitorios, 3 baños, 203 m² cubiertos, 2.500 m² de lote. La ficha muestra apto crédito y la descripción lo ratifica. No se copió como dirección la numeración del widget de Street View. |
| rj-roj537 / ROJ537 | [Seis lotes en Benavídez](https://rodriguezjurado.com.ar/lote-en-venta-en-benavidez-ficha-roj537) | Venta, USD 950.000 | Libertad entre Río Negro y La Pampa; 15.000 m² publicados y descripción de seis parcelas de 2.500 m². Se usa ese total como `landArea`. No hay superficie construida, dormitorios ni baños corroborados: `null`. |
| rj-roj909 / ROJ909 | [Lote para desarrollo multifamiliar](https://rodriguezjurado.com.ar/lote-en-venta-en-benavidez-ficha-roj909) | Venta, USD 950.000 | Avenida Alvear esquina Uruguay, orientación noreste; 5.429 m² de superficie total de lote, mapeados a `landArea`. Construcción, dormitorios y baños no publicados: `null`. Es una ficha diferente de ROJ537 pese a coincidir el precio. |
| rj-roj1133 / ROJ1133 | [Casa a la laguna en El Cantón](https://rodriguezjurado.com.ar/casa-en-alquiler-en-el-canton-ficha-roj1133) | Alquiler permanente, USD 1.700 por mes | Barrio Norte; 4 baños, 201,44 m² cubiertos, 56,73 m² semicubiertos, lote de 801 m². `bedrooms=null`: título de 5 dormitorios frente a ficha técnica de 4; descripción de cuatro arriba y visitas/escritorio abajo. Solo hay planos aprobados para pileta, no se afirma que esté construida. |

## Ampliación a 12 inmuebles

Las ocho fichas adicionales se leyeron en Edge después de completar la carga de sus datos públicos. Todas tienen `featured=true`, dos fotografías propias y el mismo esquema que los registros anteriores. Se añadió `Departamento` a `types`; `operations` sigue siendo `["Venta","Alquiler"]`. Los importes permanecen en la moneda publicada, sin conversión. Las tres opciones de alquiler seleccionadas no se anuncian como temporarias; ROJ1141 declara expresamente alquiler permanente. Ningún inmueble aparece dos veces por estar ofrecido también en venta.

| ID demo / referencia | Ficha pública adicional | Operación y precio | Datos corroborados / límites |
|---|---|---|---|
| rj-roj1024 / ROJ1024 | [Casa, San Matías Área 5](https://rodriguezjurado.com.ar/casa-en-venta-en-san-matas-ficha-roj1024) | Venta, USD 580.000 | 3 dormitorios, 4 baños, 237 m² cubiertos, 66 m² semicubiertos y lote de 1.028 m². Laguna, pileta y muelle según descripción. |
| rj-roj814 / ROJ814 | [Casa a la laguna, Santa Clara](https://rodriguezjurado.com.ar/casa-en-venta-en-santa-clara-tigre-ficha-roj814) | Venta, USD 430.000 | 3 dormitorios, 4 baños, 180 m² cubiertos y lote de 823 m². La ficha cargada muestra **Apto crédito**: `credit=true`, sujeto a confirmación de la entidad financiera. |
| rj-roj1079 / ROJ1079 | [Casa, San Pablo](https://rodriguezjurado.com.ar/casa-en-venta-en-san-pablo-ficha-roj1079) | Venta, USD 240.000 | 4 dormitorios, 3 baños, 150 m² cubiertos, 30 m² semicubiertos y lote de 500 m² según ficha. El texto repite una distribución distinta de la planta alta y difiere en orientación; no se promete esa distribución u orientación. |
| rj-roj732 / ROJ732 | [Departamento, Saravi Village](https://rodriguezjurado.com.ar/departamento-en-alquiler-en-saravi-village-ficha-roj732) | Alquiler, USD 450 por mes | 32 m² cubiertos y baño completo según descripción. `bedrooms=null`: se anuncia monoambiente pero parte del texto menciona dos ambientes y dormitorio. `landArea=null`. No se crea un segundo registro con el precio de venta también visible. |
| rj-roj1141 / ROJ1141 | [Casa en alquiler permanente, El Cantón Islas](https://rodriguezjurado.com.ar/casa-en-alquiler-en-el-canton-ficha-roj1141) | Alquiler permanente, USD 5.700 por mes | 5 dormitorios, 6 baños, 518 m² cubiertos y lote de 1.910 m² según ficha. No se trasladan a `area` los totales redondeados de 693/693,5 m². No se incluye la ficha de venta de la misma propiedad. |
| rj-roj579 / ROJ579 | [Residencia, La Bota, Benavídez](https://rodriguezjurado.com.ar/casa-en-venta-en-benavidez-ficha-roj579) | Venta, USD 1.150.000 | 4 dormitorios en la casa principal, 400 m² cubiertos y 5.000 m² de lote. `bathrooms=null`: ficha de cuatro baños y descripción con adicionales en construcciones auxiliares. La ficha cargada muestra **Apto crédito**: `credit=true`. |
| rj-roj1017 / ROJ1017 | [Fracción junto a River Oaks, Maschwitz](https://rodriguezjurado.com.ar/lote-en-venta-en-ingeniero-maschwitz-ficha-roj1017) | Venta, USD 800.000 | 10.229 m² de terreno según título, ficha y descripción. Construcciones para reciclar sin medidas o conteos: `area`, `bedrooms` y `bathrooms` en `null`. Zonificación publicada Re1, sin garantizar factibilidad. |
| rj-roj1003 / ROJ1003 | [Residencia sobre tres lotes, Los Ñanduces](https://rodriguezjurado.com.ar/casa-en-venta-en-ingeniero-maschwitz-ficha-roj1003) | Venta, USD 850.000 | 590 m² cubiertos, 4 baños y terreno conjunto de 9.542 m². `bedrooms=null`: ficha de cuatro frente a tres en la descripción de la casa principal y una casa de caseros sin distribución. No se infieren precios por parcela ni se crean registros separados. |

## Contactos e identidad

| Dato | Valor verificado | Fuente pública y criterio |
|---|---|---|
| Marca y actividad | Rodriguez Jurado Propiedades; ventas, alquileres, desarrollos, asesoramiento y tasaciones | [Inicio oficial](https://rodriguezjurado.com.ar/), navegación, presentación institucional y servicios. |
| Oficina principal de esta demo | Chubut 190, Benavídez, Tigre, Provincia de Buenos Aires | Inicio y pie de las fichas. Se verificó en la web, no se tomó del CSV. [Mapa enlazado oficialmente](https://maps.app.goo.gl/NQ1gZ2RKyv6p5ZwJA). |
| Teléfono / WhatsApp Benavídez | +54 9 11 3198-4500 | Inicio y pies de página, enlace oficial `https://wa.me/+5491131984500`; la demo normaliza la ruta a dígitos `5491131984500`. No se comprobó recepción ni se abrió conversación. |
| Email Benavídez | info@rodriguezjurado.com.ar | Enlace `mailto:` del inicio y pie oficial. No se envió correo. |
| Oficina Pilar | Julio A. Roca 359, Of. 206, Edificio Meet, Pilar | Inicio oficial. Se menciona institucionalmente, sin mezclar sus canales con los de Benavídez. |
| Canales Pilar, no usados como principales | pilar@rodriguezjurado.com.ar; +54 9 11 6092-4488 | Inicio oficial, bloque Pilar. |
| Matrícula | Maria Silvina Rodriguez Jurado, CMCPSI 5290 | Pie del sitio, texto de matriculada responsable. |
| Instagram | https://www.instagram.com/rodriguezjuradoprop/ | Enlace publicado en el sitio oficial. |
| Facebook | https://www.facebook.com/RodriguezJuradoPropiedades/ | Enlace publicado en el sitio oficial. |
| Logo | PNG oficial, 537 × 536 | [Logo institucional](https://rodriguezjurado.com.ar/img/logo-nosotros.png), presente en la sección institucional y pie. Carga y decodificación corroboradas con Edge. Se eligió la versión institucional, no el SVG blanco de la cabecera oficial, para conservar legibilidad sobre la UI clara. |
| Paleta | Primario `#034c8c`, secundario `#326d56`, tinta `#071940` | [CSS oficial](https://rodriguezjurado.com.ar/css/style.css): azul `#034C8C`, tinta azul `#071940`, verde `#3E8468`. El secundario de la demo oscurece el verde oficial para mejorar el contraste con blanco; no se presenta como código corporativo exacto. El azul se conserva porque está corroborado en la identidad real. |

## Desarrollo e inventario

| Fuente | Uso en la demo / decisión |
|---|---|
| [Ventas](https://rodriguezjurado.com.ar/propiedades?ope=V) | Descubrimiento de fichas de casas y lotes. No se reproduce el total del catálogo como inventario propio de la demo. |
| [Alquileres](https://rodriguezjurado.com.ar/propiedades?ope=A) | Descubrimiento del alquiler permanente ROJ1133. Los valores de venta cero de fichas de alquiler no se toman como precios reales. |
| [Emprendimientos](https://rodriguezjurado.com.ar/emprendimientos) y enlaces del inicio oficial | Tarjeta de servicio con enlace al catálogo oficial de desarrollos. No se inventaron unidades, precios ni estado de obra. |
| [Green Palmers](https://rodriguezjurado.com.ar/edificio-green-palmers-en-ingeniero-maschwitz-escobar-emprendimiento-6) | Nombre y destino corroborados en los enlaces del inicio cargado con Edge. |
| [Aldara](https://rodriguezjurado.com.ar/condominio-aldara-en-benavdez-tigre-emprendimiento-18) | Nombre y destino corroborados en los enlaces del inicio cargado con Edge. |
| [HQ Benavidez](https://rodriguezjurado.com.ar/edificio-hq-benavidez-en-benavdez-tigre-emprendimiento-22) | Nombre y destino corroborados en los enlaces del inicio cargado con Edge. |
| [ROJ799, alquiler en Benavídez](https://rodriguezjurado.com.ar/casa-en-alquiler-en-benavidez-ficha-roj799) | Consultada y excluida: la ficha muestra el estado **Reservada**. No se ofrece como disponible en esta demo. |
| [ROJ1076, San Pablo](https://rodriguezjurado.com.ar/casa-en-venta-en-san-pablo-ficha-roj1076) | Consultada pero no incluida. La selección final prioriza Benavídez y Escobar; no arrastra sus datos ni sus imágenes. |

## Fotografías y método

Los cuatro inmuebles originales conservan sus tres fotografías y cada una de las ocho altas utiliza dos fotografías de su propia ficha, todas alojadas en `https://cdn-images.xintelweb.com/upload/`. Las URLs completas, incluidos sus parámetros publicados, se conservan en `config.js`. Las 28 imágenes, incluidas las 16 nuevas, se decodificaron correctamente en la verificación de la ampliación con Playwright y Microsoft Edge, con dimensiones naturales positivas. El logo conserva su URL y verificación anterior. No se generaron rutas por conjetura, no se descargaron o editaron archivos originales y no se utilizó placeholder ni fue necesario crear assets locales.

Se utilizó `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright` con el canal `msedge`. Solo se consultaron páginas públicas y las solicitudes de lectura necesarias para cargar su catálogo. No se ejecutaron formularios de contacto, no se enviaron mensajes o emails y no se accedió al portal privado de clientes.

## Límites y salvedades

- Las fichas publican contactos de asesores distintos del número general. La demo usa exclusivamente la sede de Benavídez para sus botones de contacto, sin atribuir consultas a un asesor concreto.
- La superficie total de las fichas de lotes se interpreta como terreno por su tipología y descripción. En las casas se utiliza la superficie cubierta, nunca el total del lote como construcción.
- La cantidad de dormitorios de ROJ1133 permanece `null` por contradicción entre título y ficha. No se deduce a partir de la cantidad de ambientes. No se inventa dirección exacta cuando solo hay nombre de barrio o calle.
- ROJ565, ROJ814 y ROJ579 tienen `credit=true`, por corroboración explícita de apto crédito en sus fichas cargadas. `credit=false` en las demás significa que no se corroboró la condición, no una evaluación crediticia negativa.
- ROJ732 deja sin confirmar dormitorios por la contradicción monoambiente/dos ambientes; ROJ579 no fija el total de baños de sus construcciones y ROJ1003 no fija el total de dormitorios de la casa y vivienda de caseros. Los límites se explicitan también en las fichas de la demo.
- No se observó estado reservado o vendido en las ocho altas seleccionadas. Además de excluir ROJ799 por reserva, no se incluyó ROJ1103, cuyo texto informa que está actualmente alquilado y anuncia disponibilidad futura el 15/12/2026. La ruta consultada para ROJ733 no devolvió datos completos; tampoco se incorporó. Los anuncios de San Pablo ROJ1075/ROJ1076 no se usaron para completar el conteo.
- Se evita duplicar la propiedad de ROJ1141 mediante su ficha de venta y se conserva un único registro de ROJ732 aunque publique precio de venta y alquiler. El alquiler permanente ROJ1141 es una propiedad distinta de ROJ1133: difieren barrio interno, superficies, lote, características y fotografías.
- ROJ537 ofrece venta conjunta o por separado. El precio transcripto es el de la ficha completa; no se infieren precios individuales. Zonificación, subdivisiones y factibilidad de desarrollos deben verificarse con el municipio y profesionales.
- Precios, gastos, disponibilidad y medidas son informativos, no contractuales y pueden cambiar. El estado local del panel no representa el estado comercial real. Los destacados son una selección editorial de la demo.
- Los tres mensajes y las métricas de actividad son ficticios, genéricos y explícitamente simulados. No hay backend, autenticación ni conexión real al CRM/Xintel. Los formularios de la demo solo preparan borradores para envío voluntario.
- `node --check`, comparación de estructura y de las 175 etiquetas con la plantilla, esquema de propiedades y referencias de `heroIds`/`zones` verificados. La integración y las pruebas de navegación de la demo quedan a cargo del agente principal.
- Ampliación verificada: 12 IDs y fichas únicos, 12 destacados, 28 URLs de fotos sin reutilización entre inmuebles y ocho altas de dos imágenes cada una. Se compararon hashes SHA-256 para demostrar que los cuatro registros anteriores, marca/contactos, etiquetas, mensajes, `heroIds` y `zones` permanecieron íntegros. Solo se editaron `config.js` y este documento dentro de este directorio.
