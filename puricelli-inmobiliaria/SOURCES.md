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

Las referencias son los identificadores publicos de las fichas oficiales, no codigos comerciales inventados. Se conservan sin cambios los cuatro registros originales y se agregan ocho distintos, para un total de **12**. Todos usan fichas oficiales como `source`, aunque algunas tambien enlazan publicaciones de Puricelli en Argenprop; no se agregan propiedades de otras inmobiliarias.

Fotografias: **28 URLs exactas** de las galerias oficiales, bajo `https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/`, completas en `config.js`. Se conservan las 12 fotos de los cuatro registros originales. Cada nuevo registro tiene la principal publicada con parametro de 1600 px y una segunda foto distinta, publicada como miniatura de 240 px, sin modificar parametros para fabricar URLs. El tamano efectivo puede ser menor al parametro. Las miniaturas tienen menor resolucion. No se usan placeholders.

## Ampliacion a doce publicaciones

Fuentes de descubrimiento: [venta oficial](https://www.puricelliprop.com.ar/venta) y [alquiler oficial](https://www.puricelliprop.com.ar/alquiler). Cada ficha se abrio individualmente en Playwright/Edge el 2026-10-21, y las dos fotos nuevas por registro se cargaron y decodificaron.

| ID / referencia publica | Operacion y precio publicado | Ficha oficial | Fotos exactas | Datos y condiciones |
| --- | --- | --- | --- | --- |
| pi-mitre / cmvay9qxa0001btmxd5j7ikjn | Venta, USD 85.000 | [Casa Mitre](https://www.puricelliprop.com.ar/propiedades/cmvay9qxa0001btmxd5j7ikjn) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmvay9qxa0001btmxd5j7ikjn/47a6b8d4-d349-4007-986e-59e0a8ce2588_4OWJRwMy1.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmvay9qxa0001btmxd5j7ikjn/5a9d0281-aa3b-4c52-b4c2-11e1d6a829dc_2Z4Ef1dDy.jpg?tr=w-240,c-at_max) | Mitre 2933: 80 m2 cubiertos de la casa segun descripcion; no se suman metros desconocidos del monoambiente al fondo. Terreno 350 m2, 3 dormitorios, 2 banos del cuadro. Casa y monoambiente se cuentan como una oferta. |
| pi-chile / cmtrngwkt0001mn0kk329kvgg | Venta, USD 155.000 | [Casa Chile](https://www.puricelliprop.com.ar/propiedades/cmtrngwkt0001mn0kk329kvgg) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmtrngwkt0001mn0kk329kvgg/WhatsApp_Image_2026-09-07_at_4.22.43_PM_gkP914QQc.jpeg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmtrngwkt0001mn0kk329kvgg/WhatsApp_Image_2026-09-07_at_4.23.44_PM__1__NVJOWzEUD.jpeg?tr=w-240,c-at_max) | Chile 3114: 180 m2 cubiertos, 688 m2 terreno, 4 dormitorios y 4 banos; dos plantas, pileta y parrilla. |
| pi-belgrano / cmqtw1t8d003y55edxbwora6u | Venta, USD 70.000 | [Terreno Belgrano](https://www.puricelliprop.com.ar/propiedades/cmqtw1t8d003y55edxbwora6u) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1t8d003y55edxbwora6u/1_082vBMWVC.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1t8d003y55edxbwora6u/2_TNllCxncJ.jpg?tr=w-240,c-at_max) | Belgrano 2200: 300 m2 de lote; tinglado de 36 m2, sin convertirlo en cubierta habitable. Dormitorios, banos y `area` no informados: `null`. Servicios segun descripcion oficial. |
| pi-la-pista / cmqtw1thf004355edz503ioe0 | Venta, USD 62.000 | [Terreno La Pista](https://www.puricelliprop.com.ar/propiedades/cmqtw1thf004355edz503ioe0) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1thf004355edz503ioe0/1_lgubDCsW7.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1thf004355edz503ioe0/2_76XE8yo53x.jpg?tr=w-240,c-at_max) | La Pista 2100, Ingeniero Maschwitz: 412 m2 de terreno. Sin cubierta, dormitorios, banos ni servicios publicados; no se completan por suposicion. |
| pi-calzadilla-monoambientes / cmqtw1yh6007455edpk05x2t6 | Venta, USD 120.000 | [Conjunto Calzadilla](https://www.puricelliprop.com.ar/propiedades/cmqtw1yh6007455edpk05x2t6) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1yh6007455edpk05x2t6/1_iKTAvf2z6.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmqtw1yh6007455edpk05x2t6/2_DEuco1zd8.jpg?tr=w-240,c-at_max) | Calzadilla 700: una ficha de cinco monoambientes, no cinco registros ni precio por unidad. 200 m2 cubiertos, 5 banos, dormitorios no informados. 425 m2 totales no se convierten en terreno: `landArea: null`. No se reproduce la promesa de renta asegurada del texto comercial. |
| pi-ituzaingo-alquiler / cmtli81kb00019c9x6zqacogj | Alquiler, ARS 650.000 | [Departamento Ituzaingo](https://www.puricelliprop.com.ar/propiedades/cmtli81kb00019c9x6zqacogj) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmtli81kb00019c9x6zqacogj/546c37f5-5bed-409a-82fe-e8a0f52fff34_YSlOso44L.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmtli81kb00019c9x6zqacogj/0b6575e5-8abc-4c7b-baf9-f8dff822f491_nDjI6CdNqz.jpg?tr=w-240,c-at_max) | Ituzaingo 2829: 1 dormitorio, 1 bano, planta alta y balcon. Solo 40 m2 totales, no cubierta: `area` y `landArea` en `null`. Sin plazo contractual publicado. Distinto del alquiler de Av. Alvear 2190 aunque ambos publiquen ARS 650.000. |
| pi-cordoba-alquiler / cmta9aaa2000bifzcm9124a8x | Alquiler, ARS 1.500.000 | [Casa Cordoba](https://www.puricelliprop.com.ar/propiedades/cmta9aaa2000bifzcm9124a8x) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmta9aaa2000bifzcm9124a8x/7_Lh6ow-i5Y.jpg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmta9aaa2000bifzcm9124a8x/9_2JafEaeJy.jpg?tr=w-240,c-at_max) | Cordoba 2858, fondo: 2 dormitorios, 2 banos, dos plantas, balcon y patio. Sin superficies ni plazo contractual publicados. |
| pi-alvear-local / cmv1esysn00017q6o1eustmig | Alquiler, ARS 900.000 | [Local Av. Alvear](https://www.puricelliprop.com.ar/propiedades/cmv1esysn00017q6o1eustmig) | [Foto 1](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmv1esysn00017q6o1eustmig/IMG_1280_GoBXH8sdB.jpeg?tr=w-1600,c-at_max), [foto 2](https://ik.imagekit.io/pbnr63qbu/puricelli/propiedades/cmv1esysn00017q6o1eustmig/IMG_1275_4TNH-BAd_.jpeg?tr=w-240,c-at_max) | Av. Alvear 2174: local 4 x 10 m, entrepiso 4 x 5 m y 1 bano. Cuadro: 60 m2 totales, sin desglose de cubierta; `area`, terreno y dormitorios en `null`. No se inventa destino habilitado ni plazo. |

## Criterios y limites

- `area` se presenta como superficie cubierta; para el terreno no se transforma superficie de lote en construccion.
- Dormitorios y banos del terreno en `null`, no en cero. No se inventan caracteristicas ni cantidades faltantes.
- `credit: false` en las doce fichas: no se verifico aptitud bancaria; financiacion no equivale a apto credito.
- `operations` conserva Venta y Alquiler, en ese orden; `types` corresponde a Casa, Terreno, Departamento y Local, presentes en esta seleccion.
- Las cuatro zonas y los tres heroIds usan propiedades de la seleccion. Se suma Ingeniero Maschwitz. Benavidez tambien incluye San Francisco segun la ubicacion publicada por el cliente.
- Cartera final: 5 casas, 3 terrenos, 3 publicaciones de departamento (incluye el conjunto unico de monoambientes) y 1 local; 8 ventas y 4 alquileres, todos `featured: true`.
- Ninguna ficha agregada mostraba estado vendido, reservado o alquilado. No se duplican unidades de una oferta conjunta ni variantes de venta/alquiler; direcciones, referencias y galerias corresponden a avisos distintos. No se garantiza disponibilidad.
- Los nuevos alquileres no se anuncian como temporarios ni se les atribuye un plazo o periodicidad no publicada. Confirmar contratos y condiciones directamente con Puricelli.
- Tres mensajes genericos ficticios marcados Ejemplo y un grafico simulado, nunca actividad real atribuida a Puricelli.
- Precio a consultar se conserva como `price: null`; el motor integrado lo muestra como Consultar precio, lo excluye de rangos y lo ordena al final, sin sustituirlo por cero.
- La consulta filtrada `/venta?tipo=Terreno` devolvio HTTP 500. El catalogo general `/venta` y la ficha de Riberas se recuperaron correctamente; no hubo que recurrir a terceros.
- Matricula, Facebook y superficies faltantes no recuperados. Precios, medidas, disponibilidad y condiciones requieren confirmacion oficial.
- Recursos remotos sujetos a disponibilidad. HTML usa `config.js` local, `../app.js` y `../styles.css` compartidos, sin modificarlos.

## Verificacion local

- `node --check puricelli-inmobiliaria/config.js`: correcto.
- Schema completo validado: 176 etiquetas; 12 propiedades, 3 heroIds y 4 zonas con referencias validas; IDs, referencias y fichas unicos. Numeros desconocidos en `null`, campos completos y JSON puro envuelto en `window.SITE_CONFIG`.
- Prueba inicial de cuatro registros: inicio y ficha sin errores JavaScript, inicio movil de 390 px sin desborde horizontal; sus 12 imagenes y logo respondieron HTTP 200.
- Ampliacion: las 16 imagenes nuevas se cargaron y decodificaron con `Image.decode()` en Edge, todas con dimensiones positivas. No se descargaron recursos al repositorio ni se alteraron las URLs publicadas.
- Catalogo local ampliado en Edge a 390 px: 12 tarjetas renderizadas, sin errores JavaScript ni desborde horizontal. Cada nueva ficha y sus dos fotos estan enlazadas en la tabla anterior.
- Contraste de `primary` sobre blanco: 6.17:1. No se ejecuto la suite completa compartida ni se modificaron tests.
- Integracion final: se verifico Consultar precio en tarjeta, hero, ficha y dashboard; filtros y ordenacion respetan el dato desconocido. Las superficies `null` no se muestran como cero. El motor compartido fue ajustado por la integracion principal, sin modificar los datos publicados.
