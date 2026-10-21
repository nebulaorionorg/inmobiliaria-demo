# Rodriguez Jurado: fuentes de la demo

Consulta: **2026-10-21**. La demo contiene **4 inmuebles reales: 2 casas y 2 lotes; 3 ventas y 1 alquiler**. Reproduce una selección estática del catálogo público, sin conexión real a Xintel ni al CRM. Todos los inmuebles y contactos pertenecen a esta inmobiliaria.

## Publicaciones y precios

Las fichas se completan mediante JavaScript. `webfetch` mostró inicialmente la estructura sin datos; los valores, descripciones y fotos se verificaron después de la carga con Playwright y Microsoft Edge. `area` significa superficie **cubierta**, como indican las etiquetas de esta demo. No se convirtió ninguna moneda.

| ID demo / referencia | Ficha pública | Operación y precio | Datos corroborados / tratamiento |
|---|---|---|---|
| rj-roj565 / ROJ565 | [Casa en Ingeniero Maschwitz](https://rodriguezjurado.com.ar/casa-en-venta-en-ingeniero-maschwitz-ficha-roj565) | Venta, USD 297.000 | Calle Buenos Aires, 3 dormitorios, 3 baños, 203 m² cubiertos, 2.500 m² de lote. La ficha muestra apto crédito y la descripción lo ratifica. No se copió como dirección la numeración del widget de Street View. |
| rj-roj537 / ROJ537 | [Seis lotes en Benavídez](https://rodriguezjurado.com.ar/lote-en-venta-en-benavidez-ficha-roj537) | Venta, USD 950.000 | Libertad entre Río Negro y La Pampa; 15.000 m² publicados y descripción de seis parcelas de 2.500 m². Se usa ese total como `landArea`. No hay superficie construida, dormitorios ni baños corroborados: `null`. |
| rj-roj909 / ROJ909 | [Lote para desarrollo multifamiliar](https://rodriguezjurado.com.ar/lote-en-venta-en-benavidez-ficha-roj909) | Venta, USD 950.000 | Avenida Alvear esquina Uruguay, orientación noreste; 5.429 m² de superficie total de lote, mapeados a `landArea`. Construcción, dormitorios y baños no publicados: `null`. Es una ficha diferente de ROJ537 pese a coincidir el precio. |
| rj-roj1133 / ROJ1133 | [Casa a la laguna en El Cantón](https://rodriguezjurado.com.ar/casa-en-alquiler-en-el-canton-ficha-roj1133) | Alquiler permanente, USD 1.700 por mes | Barrio Norte; 4 baños, 201,44 m² cubiertos, 56,73 m² semicubiertos, lote de 801 m². `bedrooms=null`: título de 5 dormitorios frente a ficha técnica de 4; descripción de cuatro arriba y visitas/escritorio abajo. Solo hay planos aprobados para pileta, no se afirma que esté construida. |

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

Cada inmueble utiliza tres fotografías extraídas de su propia ficha, alojadas en `https://cdn-images.xintelweb.com/upload/`. Las URLs completas, incluidos sus parámetros publicados, se conservan en `config.js`. Las 12 imágenes y el logo se decodificaron correctamente con Playwright y Microsoft Edge, con dimensiones naturales positivas. No se generaron rutas por conjetura, no se descargaron o editaron archivos originales y no se utilizó placeholder.

Se utilizó `C:/Users/matia/AppData/Local/Temp/opencode/node_modules/playwright` con el canal `msedge`. Solo se consultaron páginas públicas y las solicitudes de lectura necesarias para cargar su catálogo. No se ejecutaron formularios de contacto, no se enviaron mensajes o emails y no se accedió al portal privado de clientes.

## Límites y salvedades

- Las fichas publican contactos de asesores distintos del número general. La demo usa exclusivamente la sede de Benavídez para sus botones de contacto, sin atribuir consultas a un asesor concreto.
- La superficie total de las fichas de lotes se interpreta como terreno por su tipología y descripción. En las casas se utiliza la superficie cubierta, nunca el total del lote como construcción.
- La cantidad de dormitorios de ROJ1133 permanece `null` por contradicción entre título y ficha. No se deduce a partir de la cantidad de ambientes. No se inventa dirección exacta cuando solo hay nombre de barrio o calle.
- Solo ROJ565 tiene `credit=true`, por corroboración explícita de apto crédito. `credit=false` en las demás significa que no se corroboró la condición, no una evaluación crediticia negativa.
- ROJ537 ofrece venta conjunta o por separado. El precio transcripto es el de la ficha completa; no se infieren precios individuales. Zonificación, subdivisiones y factibilidad de desarrollos deben verificarse con el municipio y profesionales.
- Precios, gastos, disponibilidad y medidas son informativos, no contractuales y pueden cambiar. El estado local del panel no representa el estado comercial real. Los destacados son una selección editorial de la demo.
- Los tres mensajes y las métricas de actividad son ficticios, genéricos y explícitamente simulados. No hay backend, autenticación ni conexión real al CRM/Xintel. Los formularios de la demo solo preparan borradores para envío voluntario.
- `node --check`, comparación de estructura y de las 175 etiquetas con la plantilla, esquema de propiedades y referencias de `heroIds`/`zones` verificados. La integración y las pruebas de navegación de la demo quedan a cargo del agente principal.
