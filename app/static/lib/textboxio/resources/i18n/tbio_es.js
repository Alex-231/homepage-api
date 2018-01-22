/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"Comprobador de accesibilidad",running:"Comprobando...",issue:{counter:"Problema {0} de {1}",help:"Referencia WCAG 2.0: se abre en una ventana nueva",none:"No se han detectado problemas de accesibilidad"},previous:"Problema anterior",next:"Problema siguiente",repair:"Reparar problema",available:"Reparaci\xf3n disponible",ignore:"Ignorar"},image:{alttext:{empty:"Las im\xe1genes deben tener una descripci\xf3n con texto alternativo",filenameduplicate:"El texto alternativo no debe ser el mismo que el del nombre del archivo de imagen",set:"Escriba el texto alternativo:",validation:{empty:"El texto alternativo no puede quedar vac\xedo",filenameduplicate:"El texto alternativo no puede ser el mismo que el del nombre del archivo"}}},table:{caption:{empty:"Las tablas deben tener subt\xedtulos",summaryduplicate:"El subt\xedtulo y el resumen de la tabla no pueden tener el mismo valor",set:"Escriba el subt\xedtulo:",validation:{empty:"El subt\xedtulo no puede quedar vac\xedo",summaryduplicate:"El subt\xedtulo de la tabla no puede ser el mismo que el resumen de la tabla"}},summary:{empty:"Las tablas complejas deben tener res\xfamenes",set:"Escriba el resumen de la tabla:",validation:{empty:"El resumen no puede quedar vac\xedo",captionduplicate:"El resumen de la tabla no puede ser el mismo que el subt\xedtulo de la tabla"}},rowscells:{none:"Los elementos de la tabla deben contener etiquetas TR y TD"},headers:{none:"Las tablas deben tener por lo menos una celda de encabezado",set:"Escoja el encabezado de la tabla:",validation:{none:"Escoja entre encabezado de fila o de columna"}},headerscope:{none:"Los encabezados de la tabla se deben aplicar a una fila o a una columna",set:"Seleccione el alcance del encabezado:",scope:{row:"Fila",col:"Columna",rowgroup:"Grupo de filas",colgroup:"Grupo de columnas"}}},heading:{nonsequential:"Los encabezados deben aplicarse en orden secuencial. Por ejemplo: el Encabezado 1 debe ir seguido del Encabezado 2, no del Encabezado 3.",paragraphmisuse:"Este p\xe1rrafo parece un encabezado. Si se trata de un encabezado, escoja el nivel de encabezado correspondiente.",set:"Seleccione un nivel de encabezado:"},link:{adjacent:"Los enlaces adyacentes que tengan la misma URL se deben combinar en un solo enlace"},list:{paragraphmisuse:"Parece que el texto seleccionado es una lista. Las listas deben llevar el formato correspondiente con una etiqueta de lista."},contrast:{smalltext:"El texto debe tener una relaci\xf3n de contraste del color de al menos 4,5:1",largetext:"El texto grande debe tener una relaci\xf3n de contraste del color de al menos 3:1"},severity:{error:"Error",warning:"Advertencia",info:"Informaci\xf3n"}},aria:{autocorrect:{announce:"Autocorrecci\xf3n {0}"},label:{toolbar:"Barra de herramientas del editor de texto enriquecido",editor:"Editor de texto enriquecido Textbox.io - {0}",fullscreen:"Editor de texto enriquecido a pantalla completa Textbox.io - {0}",content:"Contenido modificable",more:"Haga clic para expandir o contraer"},help:{mac:"Pulse \u2303\u2325H para abrir la ayuda",ctrl:"Pulse CTRL MAY\xdaS H para abrir la ayuda"},color:{picker:"Selector de colores",menu:"Men\xfa del selector de colores"},font:{color:"Colores del texto",highlight:"Colores de resaltado",palette:"Paleta de colores"},context:{menu:{generic:"Men\xfa contextual"}},stepper:{input:{invalid:"El valor del tama\xf1o no es v\xe1lido"}},table:{headerdescription:"Pulse la barra espaciadora para activar la configuraci\xf3n. Pulse el tabulador para volver al selector de tabla.",cell:{border:{size:"Tama\xf1o del borde"}}},input:{invalid:"Entrada no v\xe1lida"},widget:{navigation:"Utilice las teclas de direcci\xf3n para navegar."},image:{crop:{size:"El tama\xf1o del recorte es de {0} p\xedxeles por {1} p\xedxeles"}}},color:{white:"Blanco",black:"Negro",gray:"Gris",metal:"Gris metal",smoke:"Humo",red:"Rojo",darkred:"Rojo oscuro",darkorange:"Naranja oscuro",orange:"Naranja",yellow:"Amarillo",green:"Verde",darkgreen:"Verde oscuro",mediumseagreen:"Verde mar medio",lightgreen:"Verde claro",lime:"Lima",mediumblue:"Azul medio",navy:"Azul marino",blue:"Azul",lightblue:"Azul claro",violet:"Violeta"},directionality:{rtldir:"Direcci\xf3n: de derecha a izquierda",ltrdir:"Direcci\xf3n: de izquierda a derecha"},parlance:{menu:"Men\xfa del idioma",set:"Definir idioma",ar:"\xc1rabe",ca:"Catal\xe1n",zh_cn:"Chino (simplificado)",zh_tw:"Chino (tradicional)",hr:"Croata",cs:"Checo",da:"Dan\xe9s",nl:"Holand\xe9s",en:"Ingl\xe9s",en_au:"Ingl\xe9s (Australia)",en_ca:"Ingl\xe9s (Canad\xe1)",en_gb:"Ingl\xe9s (Reino Unido)",en_us:"Ingl\xe9s (Estados Unidos)",fa:"Persa",fi:"Fin\xe9s",fr:"Franc\xe9s",fr_ca:"Franc\xe9s (Canad\xe1)",de:"Alem\xe1n",el:"Griego",he:"Hebreo",hu:"H\xfangaro",it:"Italiano",ja:"Japon\xe9s",kk:"Kazajo",ko:"Coreano",no:"Noruego",pl:"Polaco",pt_br:"Portugu\xe9s (Brasil)",pt_pt:"Portugu\xe9s (Portugal)",ro:"Rumano",ru:"Ruso",sk:"Eslovaco",sl:"Esloveno",es:"Espa\xf1ol",es_419:"Espa\xf1ol (Am\xe9rica Latina)",es_es:"Espa\xf1ol (Espa\xf1a)",sv:"Sueco",tt:"T\xe1rtaro",th:"Tailand\xe9s",tr:"Turco",uk:"Ucraniano"},taptoedit:"Pulse para editar",plaincode:{dialog:{title:"Vista de c\xf3digo",editor:"Editor de c\xf3digo fuente de HTML"}},help:{dialog:{accessibility:"Navegaci\xf3n con el teclado",a11ycheck:"Comprobaci\xf3n de accesibilidad",about:"Acerca de Textbox.io",markdown:"Formato Markdown",shortcuts:"Atajos del teclado"}},spelling:{context:{more:"M\xe1s",morelabel:"Submen\xfa M\xe1s opciones de ortograf\xeda"},none:"Ninguno",menu:"Idioma para ortograf\xeda"},specialchar:{open:"Car\xe1cter especial",dialog:"Insertar car\xe1cter especial",latin:"Latino",insert:"Insertar",punctuation:"Puntuaci\xf3n",currency:"Divisas","extended-latin-a":"Latino extendido A","extended-latin-b":"Latino extendido B",arrows:"Flechas",mathematical:"S\xedmbolo matem\xe1tico",miscellaneous:"Varios",selects:"Caracteres seleccionados",grid:"Caracteres especiales"},insert:{"menu-button":"Men\xfa Insertar",menu:"Insertar",link:"Enlace",image:"Imagen",table:"Tabla",horizontalrule:"Regla horizontal",media:"Multimedia"},media:{embed:"C\xf3digo de inserci\xf3n multimedia",insert:"Insertar",placeholder:"Pegar c\xf3digo de inserci\xf3n aqu\xed."},wordcount:{open:"Contar palabras",dialog:"Contar palabras",counts:"Recuento",selection:"Selecci\xf3n",document:"Documento",characters:"Caracteres",charactersnospaces:"Caracteres (sin espacios)",words:"Palabras"},list:{unordered:{menu:"Opciones de lista sin ordenar",default:"Sin ordenar por defecto",circle:"Sin ordenar por c\xedrculos",square:"Sin ordenar por cuadrados",disc:"Sin ordenar por discos"},ordered:{menu:"Opciones de lista ordenada",default:"Ordenado por defecto",decimal:"Ordenado por decimales","upper-alpha":"Ordenado alfab\xe9ticamente en may\xfascula","lower-alpha":"Ordenado alfab\xe9ticamente en min\xfascula","upper-roman":"Ordenado por caracteres latinos en may\xfascula","lower-roman":"Ordenado por caracteres latinos en min\xfascula","lower-greek":"Ordenado por caracteres griegos en min\xfascula"}},tag:{inline:{class:"span ({0})"},img:"imagen"},block:{normal:"Normal",p:"P\xe1rrafo",h1:"Encabezado 1",h2:"Encabezado 2",h3:"Encabezado 3",h4:"Encabezado 4",h5:"Encabezado 5",h6:"Encabezado 6",div:"Div",pre:"Pre",li:"Elemento de lista",td:"Celda",th:"Celda de encabezado",styles:"Men\xfa de estilos",dropdown:"Bloques",describe:"Estilo actual {0}",menu:"Estilos",label:{inline:"Estilos en l\xednea",table:"Estilos de tabla",line:"Estilos de l\xednea",media:"Estilos de medios",list:"Estilos de lista",link:"Estilos de enlaces"}},font:{"menu-button":"Men\xfa Fuente",menu:"Fuente",face:"Tipo de letra",size:"Tama\xf1o de fuente",coloroption:"Color",describe:"Fuente actual {0}",color:"Texto",highlight:"Resaltado",stepper:{input:"Establecer tama\xf1o de fuente",increase:"Aumentar tama\xf1o de fuente",decrease:"Reducir tama\xf1o de fuente"}},cog:{"menu-button":"Men\xfa Configuraci\xf3n",menu:"Configuraci\xf3n",spellcheck:"Revisor de ortograf\xeda",capitalisation:"Uso de may\xfasculas",autocorrect:"Autocorrecci\xf3n",linkpreviews:"Previsualizaci\xf3n de enlaces",help:"Ayuda"},alignment:{toolbar:"Men\xfa Alineaci\xf3n",menu:"Alineaci\xf3n",left:"Alinear a la izquierda",center:"Centrar",right:"Alinear a la derecha",justify:"Justificar",describe:"Alineaci\xf3n actual {0}"},category:{language:"Grupo de idiomas",undo:"Grupo de deshacer y rehacer",insert:"Grupo de insertar",style:"Grupo de estilos",emphasis:"Grupo de formato",align:"Grupo de alineaci\xf3n",listindent:"Grupo de lista y sangr\xeda",format:"Grupo de fuentes",tools:"Grupo de herramientas",table:"Grupo de tablas",image:"Grupo de edici\xf3n de im\xe1genes"},action:{undo:"Deshacer",redo:"Rehacer",bold:"Negrita",italic:"Cursiva",underline:"Subrayado",strikethrough:"Tachado",subscript:"Sub\xedndice",superscript:"Super\xedndice",removeformat:"Quitar formato",bullist:"Lista sin ordenar",numlist:"Lista ordenada",indent:"M\xe1s sangr\xeda",outdent:"Menos sangr\xeda",blockquote:"Blockquote",fullscreen:"Pantalla completa",search:"Di\xe1logo Buscar y reemplazar",a11ycheck:"Comprobar accesibilidad",toggle:{fullscreen:"Salir de pantalla completa"}},table:{menu:"Insertar tabla","column-header":"Columna de encabezado","row-header":"Fila de encabezado",float:"Alineaci\xf3n flotante",cell:{color:{border:"Color de borde",background:"Color de fondo"},border:{width:"Ancho de borde",stepper:{input:"Establecer ancho de borde",increase:"Aumentar ancho de borde",decrease:"Reducir ancho de borde"}}},context:{row:{title:"Submen\xfa de fila",menu:"Fila",insertabove:"Insertar arriba",insertbelow:"Insertar debajo"},column:{title:"Submen\xfa de columna",menu:"Columna",insertleft:"Insertar a la izquierda",insertright:"Insertar a la derecha"},cell:{merge:"Combinar celdas",unmerge:"Dividir celda","split-cols":"Dividir en columnas","split-rows":"Dividir en filas"},table:{title:"Submen\xfa de tabla",menu:"Tabla",properties:"Propiedades",delete:"Eliminar"},common:{delete:"Eliminar",normal:"Establecer como normal",header:"Establecer como encabezado"},palette:{show:"En la barra de herramientas hay disponibles opciones de edici\xf3n de tablas",hide:"Ya no est\xe1n disponibles las opciones de edici\xf3n de tablas"}},picker:{header:"Encabezado fijo",label:"Selector de tablas",describepicker:"Utilice las teclas de direcci\xf3n para configurar el tama\xf1o de la tabla.  Pulse el tabulador para ir a la configuraci\xf3n de encabezados de tablas. Pulse la tecla espaciadora o intro para introducir la tabla.",rows:"{0} de alto",cols:"{0} de ancho"},border:"Borde",summary:"Resumen",dialog:"Propiedades de tabla",caption:"Subt\xedtulo de tabla",width:"Ancho",height:"Altura"},align:{none:"No alinear",center:"Centrar",left:"Alinear a la izquierda",right:"Alinear a la derecha"},button:{ok:"Aceptar",cancel:"Cancelar",close:"Cancelar di\xe1logo"},banner:{close:"Cerrar banderola"},border:{on:"Activo",off:"Inactivo",labels:{on:"Borde activo",off:"Borde inactivo"}},loading:{wait:"Espere"},toolbar:{more:"M\xe1s",backbutton:"Atr\xe1s","switch-code":"Cambiar a vista c\xf3digo","switch-pencil":"Cambiar a vista dise\xf1o"},link:{context:{edit:"Editar enlace",follow:"Abrir enlace",ignore:"Ignorar enlace roto",remove:"Eliminar enlace"},dialog:{aria:{update:"Actualizar enlace",insert:"Insertar enlace",properties:"Propiedades de enlace",quick:"Opciones r\xe1pidas"},autocomplete:{open:"La lista de enlaces para autocompletar est\xe1 disponible. Siga escribiendo o utilice las flechas para subir y bajar para seleccionar las distintas sugerencias.",close:"La lista de enlaces para autocompletar est\xe1 cerrada",accept:"Sugerencia del enlace seleccionado {0}"},edit:"Editar",remove:"Quitar",preview:"Previsualizar",update:"Actualizar",insert:"Insertar",tooltip:"Enlace"},properties:{dialog:{title:"Propiedades de enlace"},text:{label:"Texto que mostrar",placeholder:"Escribir o pegar el texto que mostrar"},url:{label:"Direcci\xf3n URL del enlace o marcador",placeholder:"Introducir direcci\xf3n URL del enlace o marcador",invalid:"Puede que la direcci\xf3n URL del enlace sea incorrecta"},title:{label:"T\xedtulo",placeholder:"Escribir o pegar el t\xedtulo del enlace"},button:{remove:"Quitar"},target:{label:"Destino",none:"Ninguno",blank:"Nueva ventana",top:"P\xe1gina entera",self:"Mismo marco",parent:"Marco superior"}},anchor:{top:"Parte superior del documento",bottom:"Parte inferior del documento"}},fileupload:{title:"Insertar im\xe1genes",tablocal:"Archivos locales",tabweburl:"Direcci\xf3n URL de web",dropimages:"Deje caer im\xe1genes aqu\xed",chooseimage:"Escoger imagen que subir",web:{url:"Direcci\xf3n URL de imagen web:"},weburlhelp:"Escriba la URL para previsualizar la imagen. Las im\xe1genes grandes pueden tardar en aparecer.",invalid1:"No encontramos ninguna imagen en la URL que est\xe1 utilizando.",invalid2:"Compruebe que la URL est\xe1 bien escrita.",invalid3:"Aseg\xfarese de que la imagen a la que quiere acceder es p\xfablica y no est\xe1 protegida por contrase\xf1a ni en una red privada."},image:{context:{properties:"Propiedades de la imagen",palette:{show:"En la barra de herramientas hay disponibles opciones de edici\xf3n de im\xe1genes",hide:"Ya no est\xe1n disponibles las opciones de edici\xf3n de im\xe1genes"}},dialog:{title:"Propiedades de la imagen",fields:{align:"Alineaci\xf3n flotante",url:"Direcci\xf3n URL",urllocal:"Todav\xeda no se ha guardado la imagen",alt:"Texto alternativo",width:"Ancho",height:"Altura",constrain:{label:"Restringir proporciones",on:"Proporciones bloqueadas",off:"Proporciones desbloqueadas"}}},menu:"Insertar imagen","menu-button":"Insertar men\xfa de imagen","from-url":"Direcci\xf3n URL de web","from-camera":"\xc1lbum de c\xe1mara",toolbar:{rotateleft:"Rotar hacia la izquierda",rotateright:"Rotar hacia la derecha",fliphorizontal:"Voltear horizontalmente",flipvertical:"Voltear verticalmente",properties:"Propiedades de la imagen"},crop:{announce:"Entrando en la interfaz de recorte. Pulse la tecla intro para aplicar, y la tecla de escape para cancelar.",cancel:"Cancelando operaci\xf3n de recorte",begin:"Recortar imagen",apply:"Aplicar recorte",handle:{nw:"Controlador del recorte superior izquierdo",ne:"Controlador del recorte superior derecho",se:"Controlador del recorte inferior derecho",sw:"Controlador del recorte inferior izquierdo",shade:"M\xe1scara de recorte"}}},units:{"amount-of-total":"{0} de {1}"},search:{menu:"Buscar y reemplazar",field:{replace:"Campo de reemplazar",search:"Campo de buscar"},search:"Buscar",previous:"Anterior",next:"Siguiente",replace:"Reemplazar","replace-all":"Reemplazar todos",matchcase:"Coincidir may\xfasculas y min\xfasculas"},mentions:{initiated:"Menci\xf3n creada, siga escribiendo para que aparezca el texto predictivo",lookahead:{open:"Cuadro de lista de texto predictivo",cancelled:"Menci\xf3n cancelada",searching:"Buscando resultados",selected:"Menci\xf3n insertada de {0}",noresults:"Ning\xfan resultado"}},cement:{dialog:{paste:{title:"Opciones para pegar formato",instructions:"Escoja entre conservar o quitar el formato del contenido pegado.",merge:"Conservar formato",clean:"Quitar formato"},flash:{title:"Importar imagen local","trigger-paste":"Activar de nuevo la acci\xf3n de pegado desde el teclado para pegar el contenido con im\xe1genes.",missing:'Es necesario tener Adobe Flash para importar im\xe1genes desde Microsoft Office. Instale el reproductor <a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash Player</a>.',"press-escape":'Pulse <span class="ephox-polish-help-kbd">ESC</span> para ignorar las im\xe1genes locales y seguir editando.'}}},cloud:{error:{apikey:"Clave de API no v\xe1lida.",domain:"Su dominio ({0}) no es compatible con su clave de API.",plan:"Ha sobrepasado el n\xfamero de descargas de editores disponibles con su plan. Visite la p\xe1gina web para actualizarlo."},dashboard:"Dir\xedjase al panel de control del administrador"},errors:{paste:{notready:"No se ha cargado la funcionalidad de importaci\xf3n de Word. Espere y vuelva a intentarlo.",generic:"Ha ocurrido un error mientras se pegaba el contenido."},toolbar:{missing:{custom:{string:'Los comandos personalizados deben tener la propiedad "{0}", y debe ser una cadena'}},invalid:"La configuraci\xf3n de la barra de herramientas es inv\xe1lida ({0}). Consulte la consola para m\xe1s informaci\xf3n."},spelling:{missing:{service:"No se encuentra el servicio de correcci\xf3n ortogr\xe1fica: ({0})."}},images:{edit:{needsproxy:"Se requiere un proxy para editar las im\xe1genes de este dominio: ({0})",proxyerror:"No se puede comunicar con el proxy para editar esta imagen. Consulte la consola para m\xe1s informaci\xf3n.",generic:"Se ha producido un error al realizar la operaci\xf3n de edici\xf3n de imagen. Consulte la consola para m\xe1s informaci\xf3n."},disallowed:{local:"La acci\xf3n de pegado de im\xe1genes locales ha sido desactivada. Se han eliminado im\xe1genes locales del contenido pegado.",dragdrop:"Se ha desactivado la acci\xf3n de arrastrar y colocar."},upload:{unknown:"No se ha cargado la imagen",invalid:"No se han procesado todos los archivos: algunos no eran im\xe1genes v\xe1lidas",failed:"No se ha cargado la imagen: ({0}).",cors:"No se ha podido contactar con el servicio de carga de im\xe1genes. Posible error CORS: ({0})"},missing:{service:"No se encuentra el servicio de im\xe1genes: ({0}).",flash:"Es posible que la configuraci\xf3n de seguridad de su navegador est\xe9 impidiendo que se importen las im\xe1genes."},import:{failed:"No se han importado algunas im\xe1genes.",unsupported:"Tipo de imagen incompatible.",invalid:"La imagen no es v\xe1lida."}},webview:{image:"Las im\xe1genes copiadas directamente no se pueden pegar."},safari:{image:"Safari no permite que se peguen las im\xe1genes directamente.",url:"Soluciones alternativas propuestas",rtf:"Aprender a hacerlo","browser-settings":"Para pegar im\xe1genes, ajuste la configuraci\xf3n del navegador."},flash:{crashed:"No se han importado las im\xe1genes porque parece que Adobe Flash se ha quedado bloqueado. Puede haber sucedido por pegar documentos grandes."},http:{400:"Solicitud incorrecta: {0}",401:"Sin autorizaci\xf3n: {0}",403:"Prohibido: {0}",404:"No se ha encontrado: {0}",407:"Se requiere autenticaci\xf3n del proxy: {0}",409:"Conflicto de archivo: {0}",413:"Carga demasiado grande: {0}",415:"Tipo de medio no compatible: {0}",500:"Error del servidor interno: {0}",501:"No se ha implementado: {0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_es.js","strings for language es")({version:"2.3.0",strings:a})}();