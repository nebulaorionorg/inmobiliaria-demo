# Puricelli Inmobiliaria: fuentes de la demo

Consulta: **2026-10-21**. Demo comercial independiente, seleccion estatica sin conexion automatica al CRM, backend ni autenticacion. No se enviaron formularios ni se contacto a la inmobiliaria.

## Identidad y contacto

Fuentes: [inicio oficial](https://www.puricelliprop.com.ar/), [ventas](https://www.puricelliprop.com.ar/venta) y [alquileres](https://www.puricelliprop.com.ar/alquiler). Webfetch recupero catalogos y fichas; Playwright con Edge verifico el encabezado, logo y colores computados.

| Dato | Evidencia oficial aplicada |
| --- | --- |
| Marca | El sitio se presenta como Inmobiliaria Puricelli; nombre de la demo Puricelli Inmobiliaria |
| Historia | Inmobiliaria familiar de Benavidez desde 1991; el inicio menciona tres generaciones |
| Oficina | Av. Alvear 2819, Benavidez, Tigre, Buenos Aires: confirmada en el pie oficial, no solamente por el CSV |
| Telefono / WhatsApp | 11-4935-7568; https://wa.me/5491149357568 en el sitio oficial |
| Email | info@puricelliprop.com.ar |
| Instagram | https://www.instagram.com/inmobiliariapuricelli/ |
| Facebook y matricula | No recuperados del sitio consultado: campos vacios, sin enlaces supuestos |

Logo publico verificado por descarga: https://www.puricelliprop.com.ar/assets/logo-trans.png . Es el archivo que usa el encabezado mediante el optimizador de imagenes de Next.js; muestra isotipo negro, Inmobiliaria en rojo y Puricelli en verde.

Paleta: `primary #157037`, verde oscuro observado en los estilos oficiales y adecuado para texto blanco; `secondary #ed1c24`, adaptacion del rojo del logo; `ink #1b1c1c`, texto oscuro oficial observado. No se hereda el azul de la plantilla. Contraste del primario con texto blanco mayor que 4.5:1.

## Publicaciones

| ID demo / referencia publica | Operacion | Precio publicado | Fuente oficial | Superficies y observaciones |
| --- | --- | --- | --- | --- |
| pi-san-francisco / cmqtw1yqc007a55ed3j8f5buk | Venta, casa | USD Consultar, `price: null` | [Casa San Francisco](https://www.puricelliprop.com.ar/propiedades/cmqtw1yqc007a55ed3j8f5buk) | Lote 309, 400 m2 cubiertos, 824 m2 terreno, 4 dormitorios, 2 banos. No se inventa importe. |
| pi-azucenas / cmqtw1s6j003a55edk4kengos | Venta, casa | USD 580.000 | [Chalet Las Azucenas](https://www.puricelliprop.com.ar/propiedades/cmqtw1s6j003a55edk4kengos) | Las Azucenas 2900; 500 m2 cubiertos, 4 dormitorios, 2 banos. Terreno contradictorio: cuadro 1.870 m2 y descripcion 2.000 m2; `landArea: null`. No se calculan superficies a partir de frente y fondo. |
| pi-riberas / cmqtw1xpv006m55ede1hlo53v | Venta, terreno | USD 85.000 | [Riberas, Puertos del Lago](https://www.puricelliprop.com.ar/propiedades/cmqtw1xpv006m55ede1hlo53v) | Av. de los Lagos, lote 259. Descripcion: 625,18 m2, conservados en `landArea`; el cuadro muestra 625 m2 redondeados. Opcion de financiacion sin condiciones publicadas. |
| pi-alvear-alquiler / cmun5ea8000011319owpzratj | Alquiler, departamento | ARS 650.000 | [Departamento Av. Alvear](https://www.puricelliprop.com.ar/propiedades/cmun5ea8000011319owpzratj) | Av. Alvear 2190; planta alta, 1 dormitorio, 1 bano. No informa superficies: `area` y `landArea` en `null`. |

Las referencias son los identificadores publicos de las fichas oficiales, no codigos comerciales inventados. Se conservan las cuatro fichas como `source`, aunque algunas tambien enlazan publicaciones de Puricelli en Argenprop; no se agregan propiedades de otras inmobiliarias.

Fotografias: 12 URLs exactas de las galerias oficiales, bajo `https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/`, completas en `config.js`. Se conserva la foto principal de 1600 px y dos miniaturas publicadas por ficha, sin modificar parametros para fabricar URLs. Las miniaturas tienen menor resolucion. No se usan placeholders.

## Criterios y limites

- `area` se presenta como superficie cubierta; para el terreno no se transforma superficie de lote en construccion.
- Dormitorios y banos del terreno en `null`, no en cero. No se inventan caracteristicas ni cantidades faltantes.
- `credit: false` en las cuatro fichas: no se verifico aptitud bancaria; financiacion no equivale a apto credito.
- `operations` conserva Venta y Alquiler; `types` corresponde a Casa, Terreno y Departamento, presentes en esta seleccion.
- Las tres zonas y los tres heroIds usan propiedades de la seleccion. Benavidez tambien incluye San Francisco segun la ubicacion publicada por el cliente.
- Tres mensajes genericos ficticios marcados Ejemplo y un grafico simulado, nunca actividad real atribuida a Puricelli.
- Precio a consultar se conserva como `price: null`; el motor integrado lo muestra como Consultar precio, lo excluye de rangos y lo ordena al final, sin sustituirlo por cero.
- La consulta filtrada `/venta?tipo=Terreno` devolvio HTTP 500. El catalogo general `/venta` y la ficha de Riberas se recuperaron correctamente; no hubo que recurrir a terceros.
- Matricula, Facebook y superficies faltantes no recuperados. Precios, medidas, disponibilidad y condiciones requieren confirmacion oficial.
- Recursos remotos sujetos a disponibilidad. HTML usa `config.js` local, `../app.js` y `../styles.css` compartidos, sin modificarlos.

## Verificacion local

- `node --check puricelli-inmobiliaria/config.js`: correcto.
- Schema completo cotejado con la plantilla: 176 etiquetas; 4 propiedades, 3 heroIds y 3 zonas con referencias validas; IDs unicos ASCII y numeros desconocidos como `null`.
- Edge headless: inicio y ficha renderizados sin errores JavaScript; inicio movil de 390 px sin desborde horizontal.
- 12 URLs de imagenes y el logo respondieron HTTP 200 con contenido de imagen; el logo tambien cargo en el encabezado local.
- Contraste de `primary` sobre blanco: 6.17:1. No se ejecuto la suite completa compartida ni se modificaron tests.
- Integracion final: se verifico Consultar precio en tarjeta, hero, ficha y dashboard; filtros y ordenacion respetan el dato desconocido. Las superficies `null` no se muestran como cero. El motor compartido fue ajustado por la integracion principal, sin modificar los datos publicados.
