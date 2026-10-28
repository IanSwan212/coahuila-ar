const S=[
 {id:"identidad",x:4,y:3,w:62,h:17,c:"Historia",th:"var(--verde)",t:"Cuna de la Revolución",f:["<b>Venustiano Carranza</b> nació en Cuatro Ciénegas (1859)","<b>Francisco I. Madero</b> nació en Parras (1873)","El <b>Plan de Guadalupe</b> (1913) se firmó en Ramos Arizpe","3.er estado más extenso del país (≈151,500 km², 7.7% del territorio)"],o:"Sin Coahuila no se entiende el México moderno.",s:"Fuentes: INEGI; registros históricos."},
 {id:"catedral",x:58,y:3,w:26,h:23,c:"Patrimonio",th:"#8a5a1c",sk:"#bfd3ea",t:"Catedral de Santiago",f:["Iniciada en <b>1745</b>, bendecida en <b>1800</b>","Torre de <b>81 m</b>: la catedral más alta del norte de México","Catedral desde 1891 (Diócesis de Saltillo)"],o:"Barroco de piedra en pleno desierto.",s:"Fuentes: Vanguardia; Wikipedia."},
 {id:"cultura",x:2,y:26,w:38,h:16,c:"Cultura",th:"var(--rosa)",sk:"#f2e8d3",t:"Sarape y vino",f:["El <b>sarape de Saltillo</b>, icono textil de México","<b>Casa Madero</b> (Parras, 1597): la vinícola más antigua de América","Parras, Pueblo Mágico desde 2004"],o:"El vino más antiguo del continente es coahuilense.",s:"Fuentes: Casa Madero; Vinetur."},
 {id:"dinos",x:51,y:27,w:32,h:13,c:"Paleontología",th:"#8a6a3a",sk:"#f3d9a4",t:"Tierra de dinosaurios",f:["<b>Coahuilaceratops magnacuerna</b>: primer ceratópsido nombrado en México, cuernos de más de 1 m","<b>Velafrons coahuilensis</b>: hadrosaurio hallado cerca de Saltillo (2007)","El Museo del Desierto ha descrito 9 especies fósiles nuevas"],o:"Si México tiene dinosaurios, los tiene Coahuila.",s:"Fuentes: Vanguardia; ScienceDaily."},
 {id:"tradicion",x:3,y:42,w:32,h:14,c:"Tradición",th:"var(--sol)",tf:"var(--ink)",sk:"#f6d27a",t:"Fiestas y cabalgatas",f:["Cabalgatas y charrería","Danza de matachines en fiestas patronales","Feria de Saltillo y Feria de la Uva en Parras"],o:"La tradición aquí se monta a caballo.",s:"Fuente: Secretaría de Cultura de Coahuila."},
 {id:"comida",x:49,y:56,w:13,h:10,c:"Gastronomía",th:"var(--barro)",sk:"#3b2a1f",t:"Sabor norteño",f:["<b>Pan de pulque</b> de Saltillo, horneado en la ciudad desde el siglo XIX","Cabrito al pastor, carne asada, discada y machacado","Tortilla de harina y dulces de nuez de Parras"],o:"Carne asada los domingos: patrimonio no oficial.",s:"Fuente: Secretaría de Cultura de Coahuila."},
 {id:"etnias",x:62,y:42,w:38,h:18,c:"Etnias",th:"var(--verde)",sk:"#f2e8d3",t:"Kikapú y mascogos",f:["Los <b>kikapú</b> recibieron tierras en El Nacimiento, Múzquiz, a mediados del siglo XIX","Los <b>mascogos</b>, descendientes de seminolas negros, llegaron en <b>1852</b> huyendo de la esclavitud","Ambos defendieron la frontera a cambio de tierra y libertad"],o:"Coahuila fue refugio de libertad.",s:"Fuentes: National Geographic; INPI. La ruta del mapa es ilustrativa."},
 {id:"poblacion",x:4,y:57,w:46,h:25,c:"Población",th:"var(--azul)",sk:"#f2e8d3",t:"3,146,771 habitantes",f:["Censo 2020: 15.º lugar nacional, edad mediana de 29 años","Más de 42 mil nacimientos registrados en 2025","19,978 defunciones registradas en 2024 (preliminar)","Analfabetismo de 1.66% en 2020, de los más bajos del país"],o:"Gente que trabaja, estudia y se queda.",s:"Fuentes: INEGI; Data México; Milenio."},
 {id:"desierto",x:51,y:64,w:38,h:15,c:"Naturaleza",th:"#a0612e",sk:"#9fd0ea",t:"Desierto vivo",f:["<b>Cuatro Ciénegas</b>: pozas con estromatolitos, de las formas de vida más antiguas","Sierra de Arteaga: bosque y nieve en invierno","Desierto chihuahuense"],o:"El desierto aquí está lleno de vida.",s:"Fuente: CONANP."},
 {id:"escolaridad",x:8,y:82,w:44,h:11,c:"Educación",th:"var(--verde)",sk:"#f2e8d3",t:"10.4 años de escolaridad",f:["Promedio de 15 años y más, Censo 2020","Media nacional: 9.7 años","Solo CDMX (11.5), Nuevo León (10.7) y Querétaro (10.5) están arriba","<b>UAdeC</b>: la Universidad Autónoma de Coahuila, con unidades en Saltillo, Torreón y el norte del estado","<b>UAAAN</b>: la Universidad Autónoma Agraria Antonio Narro, en Saltillo, fundada en 1923 y referente nacional en agronomía"],o:"Más años en el aula que la media de México.",s:"Fuentes: INEGI; SEP."},
 {id:"reto",x:51,y:80,w:39,h:13,c:"Reto actual",th:"var(--barro)",t:"Preservar la identidad",f:["Apoyar a tejedores de sarape y talleres familiares","Llevar el patrimonio a escuelas y medios digitales","Reconocer a los pueblos kikapú y mascogo"],o:"Defender Coahuila empieza por conocerlo.",s:""}
];
const PICS={"comida": [{"f": "img/comida-0.jpg", "cap": "Pan de pulque de Saltillo, panadería Los Álamos (desde 1890)"}, {"f": "img/comida-1.jpg", "cap": "Carne al asador junto a las brasas, la misma técnica del cabrito al pastor"}, {"f": "img/comida-2.jpg", "cap": "Carne asada con cebollitas al carbón"}, {"f": "img/comida-3.jpg", "cap": "Discada norteña con tortillas"}, {"f": "img/comida-4.jpg", "cap": "Dulces de nuez y ate, tradición de Parras"}, {"f": "img/comida-5.jpg", "cap": "Costales de cebolla y chile jalapeño, Mercado Alianza de Torreón"}, {"f": "img/comida-6.jpg", "cap": "Mercado Alianza de Torreón"}, {"f": "img/comida-7.jpg", "cap": "Puestos del Mercado Alianza, Torreón"}, {"f": "img/comida-8.jpg", "cap": "Mercado de Piedras Negras"}], "identidad": [{"f": "img/identidad-0.jpg", "cap": "Venustiano Carranza firma el Plan de Guadalupe, 26 de marzo de 1913"}, {"f": "img/identidad-1.jpg", "cap": "Entrada a la Hacienda Plan de Guadalupe, Ramos Arizpe"}, {"f": "img/identidad-2.jpg", "cap": "Patio restaurado de la Hacienda de Guadalupe"}, {"f": "img/identidad-3.jpg", "cap": "Muros originales y obelisco de la Hacienda de Guadalupe"}, {"f": "img/identidad-4.jpg", "cap": "Casa de Francisco I. Madero, Parras"}, {"f": "img/identidad-5.jpg", "cap": "Monumento ecuestre a Venustiano Carranza, Saltillo"}, {"f": "img/identidad-6.jpg", "cap": "Hacienda de Guadalupe, Ramos Arizpe, donde se firmó el Plan de 1913"}, {"f": "img/identidad-7.jpg", "cap": "Museo Casa Carranza, Cuatro Ciénegas"}], "catedral": [{"f": "img/catedral-0.jpg", "cap": "La catedral iluminada de noche, Saltillo"}, {"f": "img/catedral-1.jpg", "cap": "La catedral al atardecer con la Sierra de Zapalinamé al fondo"}, {"f": "img/catedral-2.jpg", "cap": "Nave interior de la catedral"}, {"f": "img/catedral-3.jpg", "cap": "Fachada y torre de la Catedral de Santiago, Saltillo"}, {"f": "img/catedral-4.jpg", "cap": "La catedral en 1889 (Archivo Municipal de Saltillo)"}], "cultura": [{"f": "img/cultura-0.jpg", "cap": "Sarape de Saltillo con su rombo central"}, {"f": "img/cultura-1.jpg", "cap": "Postal antigua: tejedor de sarape en su telar"}, {"f": "img/cultura-2.jpg", "cap": "Viñedos de Parras con la sierra al fondo"}, {"f": "img/cultura-3.jpg", "cap": "Bodega de Casa Madero, Parras"}, {"f": "img/cultura-4.jpg", "cap": "Museo del Sarape, Saltillo"}, {"f": "img/cultura-5.jpg", "cap": "Sala del Museo del Sarape, Saltillo"}], "tradicion": [{"f": "img/tradicion-0.jpg", "cap": "Cabalgata en Sabinas, Coahuila"}, {"f": "img/tradicion-1.jpg", "cap": "Escaramuza charra en un lienzo de la sierra coahuilense"}, {"f": "img/tradicion-2.jpg", "cap": "Pisa de la uva en la Feria de la Uva y el Vino, Parras"}, {"f": "img/tradicion-3.jpg", "cap": "Danza de caballitos en el aniversario de Viesca (25 de julio)"}, {"f": "img/tradicion-4.jpg", "cap": "Danza de caballitos de Viesca"}, {"f": "img/tradicion-5.jpg", "cap": "Matlachinada 2014: matachines de todo Coahuila"}, {"f": "img/tradicion-6.jpg", "cap": "Fuegos artificiales en la inauguración de la Feria de Saltillo"}, {"f": "img/tradicion-7.jpg", "cap": "Niño en altar de muertos, Saltillo (Fototeca del Archivo Municipal)"}, {"f": "img/tradicion-8.jpg", "cap": "Ballet folclórico presentando bailes de Coahuila"}, {"f": "img/tradicion-9.jpg", "cap": "Bailes de Coahuila"}, {"f": "img/tradicion-10.jpg", "cap": "Traje de danza tradicional de Coahuila"}, {"f": "img/tradicion-11.jpg", "cap": "Tapete de aserrín del Festival de la Muerte 2015, hecho por estudiantes de la UAdeC"}], "dinos": [{"f": "img/dinos-0.jpg", "cap": "Sala de dinosaurios del Museo del Desierto, Saltillo"}, {"f": "img/dinos-1.jpg", "cap": "Esqueleto montado de Coahuilaceratops magnacuerna"}, {"f": "img/dinos-2.jpg", "cap": "Réplica de nido de huevos en la zona paleontológica de Rincón Colorado, General Cepeda"}, {"f": "img/dinos-3.jpg", "cap": "Museo de Rincón Colorado, General Cepeda"}, {"f": "img/dinos-4.jpg", "cap": "Coahuilaceratops, ejemplar CPC 276 de la Colección Paleontológica de Coahuila"}, {"f": "img/dinos-5.jpg", "cap": "Mamut en el Museo del Desierto, Saltillo"}, {"f": "img/dinos-6.jpg", "cap": "Laboratorio del Museo del Desierto"}], "poblacion": [{"f": "img/poblacion-0.jpg", "cap": "Palacio de Gobierno y fuente de los Tlaxcaltecas, centro de Saltillo"}, {"f": "img/poblacion-1.jpg", "cap": "Cristo de las Noas, Torreón"}, {"f": "img/poblacion-2.jpg", "cap": "Parroquia de Santiago Apóstol, Monclova"}, {"f": "img/poblacion-3.jpg", "cap": "Saltillo"}], "desierto": [{"f": "img/desierto-0.jpg", "cap": "Sierra de Arteaga nevada en invierno"}, {"f": "img/desierto-1.jpg", "cap": "Desierto coahuilense con yucas, nopales y matorral"}, {"f": "img/desierto-2.jpg", "cap": "Poza Azul, Cuatro Ciénegas"}, {"f": "img/desierto-3.jpg", "cap": "Dunas de yeso, Cuatro Ciénegas"}, {"f": "img/desierto-4.jpg", "cap": "Sierra de Zapalinamé, Arteaga"}], "escolaridad": [{"f": "img/escolaridad-0.jpg", "cap": "Rectoría de la Universidad Autónoma de Coahuila, Saltillo"}, {"f": "img/escolaridad-1.jpg", "cap": "Universidad Autónoma Agraria Antonio Narro (UAAAN) y su emblema, el Buitre, Saltillo"}, {"f": "img/escolaridad-2.jpg", "cap": "Escuela Normal de Parras"}], "reto": [{"f": "img/reto-0.jpg", "cap": "Taller y tienda de sarapes en Saltillo"}, {"f": "img/reto-1.jpg", "cap": "Sarapes y recuerdos de un taller familiar saltillense"}, {"f": "img/reto-2.jpg", "cap": "Acueducto en Bella Unión, Arteaga"}], "etnias": [{"f": "img/etnias-0.jpg", "cap": "Mural de una mujer mascoga en El Nacimiento de los Negros, Múzquiz (Elihu Rgz / Nazas Gráfico)"}, {"f": "img/etnias-1.jpg", "cap": "Baile en la celebración mascoga del 19 de junio (Juneteenth), El Nacimiento de los Negros"}, {"f": "img/etnias-2.jpg", "cap": "Comunidad kikapú construyendo una casa tradicional de varas"}, {"f": "img/etnias-3.jpg", "cap": "Múzquiz, Coahuila"}]};
const E=[["Aguascalientes",10.0,5616,1425607,291386,23.7,7.50],["Baja California",10.2,71450,3769020,341995,13.4,55.28],["Baja California Sur",10.1,73909,798447,288733,13.3,16.28],["Campeche",9.6,57507,928363,548087,45.1,10.01],["Chiapas",7.8,73311,5543828,90074,67.4,11.19],["Chihuahua",9.9,247455,3741869,328771,17.6,51.15],["Ciudad de México",11.5,1494,9209944,536656,24.0,8.69],["Coahuila",10.4,151595,3146771,357585,18.2,3.04],["Colima",10.0,5627,731391,298038,20.5,121.90],["Durango",9.7,123451,1832650,238719,34.3,3.39],["Guanajuato",8.8,30607,6166934,240938,33.0,40.44],["Guerrero",8.4,63595,3540685,119607,60.4,52.54],["Hidalgo",9.4,20821,3082841,181764,41.0,7.63],["Jalisco",9.9,78595,8348151,289592,21.8,16.55],["Estado de México",10.1,22357,16992418,172188,42.9,11.08],["Michoacán",8.6,58599,4748846,186696,41.7,25.20],["Morelos",9.9,4879,1971520,180783,41.1,67.41],["Nayarit",9.7,27857,1235456,183275,29.3,11.64],["Nuevo León",10.7,64156,5784442,440113,16.0,25.10],["Oaxaca",8.1,93793,4132148,148795,58.4,20.67],["Puebla",9.2,34306,6583278,179879,54.0,13.36],["Querétaro",10.5,11699,2368467,316432,21.7,6.88],["Quintana Roo",10.2,44705,1857985,267202,27.0,29.68],["San Luis Potosí",9.6,61138,2822255,270293,35.5,13.12],["Sinaloa",10.2,57365,3026943,223446,21.6,25.40],["Sonora",10.4,179355,2944840,362358,21.7,37.14],["Tabasco",9.7,24731,2402598,274391,46.5,27.86],["Tamaulipas",9.9,80249,3527735,280606,26.8,9.26],["Tlaxcala",9.8,3997,1342977,135712,52.5,8.71],["Veracruz",8.7,71826,8062579,177905,51.7,9.54],["Yucatán",9.6,39524,2320898,230091,38.8,1.85],["Zacatecas",9.2,75275,1622138,207062,44.2,22.04]];
// cada indicador: columna, etiqueta, fuente, si "menos es mejor", formato
const K=[
 {i:1,l:"Años de escolaridad",src:"INEGI, Censo 2020",low:false,f:v=>v.toFixed(1)+" años"},
 {i:4,l:"PIB por habitante",src:"Citibanamex con datos INEGI, 2024 (estimación)",low:false,f:v=>"$"+Math.round(v).toLocaleString("es-MX")},
 {i:5,l:"Población en pobreza",src:"CONEVAL, 2022",low:true,f:v=>v.toFixed(1)+"%"},
 {i:6,l:"Homicidios por 100 mil hab.",src:"SESNSP, 2024 (preliminar)",low:true,f:v=>v.toFixed(1)},
 {i:2,l:"Superficie",src:"INEGI",low:false,f:v=>v.toLocaleString("es-MX")+" km²"},
 {i:3,l:"Población",src:"INEGI, Censo 2020",neutral:true,f:v=>v.toLocaleString("es-MX")}
];

// --- cartel con franja "Coahuila en datos" ---
// el cartel creció de 1491 a 2031 px de alto: se ajustan las zonas originales
S.forEach(s => { s.y = +(s.y * 1491 / 2031).toFixed(2); s.h = +(s.h * 1491 / 2031).toFixed(2); });
S.push(...[
 {
  "id": "migracion",
  "c": "Migración",
  "th": "var(--verde)",
  "t": "77 mil llegaron de otros estados",
  "f": [
   "Entre 2015 y 2020 llegaron unas <b>77 mil personas</b> de otras entidades (2.4% de la población)",
   "Principales orígenes: <b>Veracruz</b> (15.7%), <b>Durango</b> (12.6%) y <b>Nuevo León</b> (11.6%)",
   "Causas: reunirse con la familia <b>37.1%</b>, buscar trabajo <b>21.9%</b>, cambio u oferta de trabajo <b>15.1%</b>, estudiar <b>6.8%</b>",
   "Intensidad migratoria hacia Estados Unidos: <b>baja</b> (CONAPO, 2020)"
  ],
  "o": "Coahuila atrae a quien busca trabajo y familia.",
  "x": 2.84,
  "y": 78.99,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "inmigracion",
  "c": "Inmigración",
  "th": "var(--azul)",
  "t": "0.9% nació en otro país",
  "f": [
   "<b>28,295 personas</b> nacidas en otro país viven en Coahuila (Censo 2020)",
   "<b>21,791</b> nacieron en Estados Unidos (77%), 1,622 en Honduras y 660 en El Salvador",
   "Municipios con más población nacida en otro país: <b>Piedras Negras</b> (6,769) y <b>Acuña</b> (5,383)",
   "En 2010 eran 22,662: aumentaron <b>25%</b> en diez años"
  ],
  "o": "Frontera abierta al mundo.",
  "x": 26.76,
  "y": 78.99,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "rural",
  "c": "Zonas rurales",
  "th": "var(--barro)",
  "t": "8.3% vive en zonas rurales",
  "f": [
   "En 2020, <b>8.3%</b> vivía en localidades de menos de 2,500 habitantes; en 2000 era <b>10.6%</b>",
   "<b>91.7%</b> vive en zonas urbanas y <b>71.2%</b> en ciudades de 100 mil habitantes o más",
   "Hay <b>6 localidades</b> con más de 100 mil habitantes"
  ],
  "o": "Un estado cada vez más urbano.",
  "x": 50.68,
  "y": 78.99,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "economia",
  "c": "Actividades económicas",
  "th": "var(--rosa)",
  "t": "Una economía industrial",
  "f": [
   "Valor de la economía en 2024: <b>industria 50.7%</b>, <b>servicios 39.4%</b> y <b>campo 2.3%</b> (INEGI)",
   "PIB 2024: <b>922,286 millones de pesos</b> (valores constantes)",
   "<b>60 de cada 100</b> personas de 12 años y más son económicamente activas",
   "Sobresalen las industrias manufactureras, en especial la automotriz, y la minería"
  ],
  "o": "Coahuila produce lo que mueve a México.",
  "x": 74.6,
  "y": 78.99,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "analfabetismo",
  "c": "Analfabetismo",
  "th": "var(--verde)",
  "t": "1.7% de analfabetismo",
  "f": [
   "La tasa bajó de <b>3.9%</b> en 2000 a <b>2.6%</b> en 2010 y a <b>1.7%</b> en 2020",
   "De los estados con <b>menor analfabetismo</b> del país",
   "Grado promedio de escolaridad: <b>10.4 años</b> (2020)"
  ],
  "o": "Casi todos saben leer y escribir.",
  "x": 2.84,
  "y": 89.04,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "educativo",
  "c": "Nivel educativo",
  "th": "var(--azul)",
  "t": "Nivel educativo",
  "f": [
   "Población de 15 años y más (2020): <b>secundaria 32.9%</b>, <b>bachillerato 20.4%</b>, <b>primaria 17.6%</b>",
   "El grado promedio subió de <b>8.4 años</b> (2000) a <b>10.4</b> (2020)",
   "<b>4.º lugar nacional</b>; la media del país es 9.7"
  ],
  "o": "Cada generación estudia más.",
  "x": 26.76,
  "y": 89.04,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "suelo",
  "c": "Suelo",
  "th": "var(--barro)",
  "t": "Tierra de matorral desértico",
  "f": [
   "El <b>matorral desértico</b> (rosetófilo y micrófilo) cubre cerca del <b>75%</b> del territorio",
   "Pastizal <b>~8%</b>, agricultura <b>~5%</b> y asentamientos humanos apenas <b>0.05%</b> (INEGI, Serie V)",
   "Predominan los <b>calcisoles, leptosoles y regosoles</b>: suelos delgados, pedregosos y ricos en calcio"
  ],
  "o": "Un desierto que sabe dar vida.",
  "x": 50.68,
  "y": 89.04,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 },
 {
  "id": "fenomenos",
  "c": "Fenómenos poblacionales",
  "th": "var(--rosa)",
  "t": "Cómo cambia la población",
  "f": [
   "<b>Crecimiento</b>: 1.4% anual entre 2010 y 2020",
   "<b>Envejecimiento</b>: la edad mediana pasó de 23 años (2000) a 29 (2020)",
   "<b>Menos hijos</b>: de 2.5 a 2.1 hijos por mujer",
   "<b>Concentración urbana</b>: Saltillo (879,958) y Torreón (720,848) reúnen el 51% de la población",
   "<b>Hogares más pequeños</b>: de 4.2 a 3.5 ocupantes por vivienda"
  ],
  "o": "Una población que crece, madura y se urbaniza.",
  "x": 74.6,
  "y": 89.04,
  "w": 22.46,
  "h": 9.19,
  "s": ""
 }
]);
