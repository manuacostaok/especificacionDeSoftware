function bootstrap() {
    cargarLista(pasajes);
  }
  
  //Carga la lista HTML con los articulos
  function cargarLista(arrayArticulos){
    $("#rowCajaPasajes").empty();  
    for (let i = 0; i < arrayArticulos.length; i++) {
      let articulo = arrayArticulos[i];
  
      let nombre = "Tipo de Buque: " + articulo.tipobuque;
      let cantidadPasajerosDisponibles = "Boletos disponibles: " + articulo.cantidadPasajerosDisponibles;
      let precio = "Precio: " + articulo.precio;
      let origen = "Origen: " + articulo.origen;
      let destino = "Destino: " + articulo.destino;
      let dias = "Cantidad de Dias: " + articulo.dias;
      let categoria = "Categoría: " + articulo.tipoviaje;
      let fechaSalida = "Salida: " + articulo.fechaSalida;
      let fechaVuelta = "Vuelta: " + articulo.fechaVuelta;

      console.log(nombre);
  
      agregarCard(nombre,cantidadPasajerosDisponibles,precio,origen,destino,dias,categoria,fechaSalida,fechaVuelta);
    }
  }
  
  function filtrarPasajes(){
    $("#mensaje_filtro").text("");
    //Obtengo el las palabras de la busqueda y la categoria seleccionada
    var defaultDate1 = new Date("2022-05-31");
    var defaultDate2 = new Date("2022-06-30");
    var fecha1 = new Date($("#filtroRangoFecha1").val());
    var fecha2 = new Date($("#filtroRangoFecha2").val());
    var lugarOrigen = $("#filtroSalida").val();
    var lugarDestino = $("#filtroDestino").val();
    var idaVuelta = (document.getElementById("filtroIdaVuelta")).checked;
  
    let pFilt = false; //primer filtro
    let sFilt = false; //segundo filtro
    let tFilt = false; //tercer filtro

    var sinFechas = (fecha1.getTime()==defaultDate1.getTime() && fecha2.getTime()==defaultDate2.getTime());
    var sinDestinos = (lugarOrigen.length == 0 && lugarDestino.length == 0);
    var sinFiltros = ( sinFechas && sinDestinos && !idaVuelta);

    var articulosEncontrados = new Set();
    //Ningun filtro seleccionado
    if(sinFiltros){
      cargarLista(pasajes);
    }
    else{
      //Filtro para las fechas
        if(fecha1.getTime()!=defaultDate1.getTime() || fecha2.getTime()!=defaultDate2.getTime()){

          articulosEncontrados = filtrarFecha(fecha1, fecha2, pasajes);
          pFilt = true;
        }
      //Filtro por categoria
        if(lugarOrigen.length != 0 || lugarDestino.length != 0){
        //Usaste el primer filtro?
            (pFilt)?
                //SI, entonces sigo con el mismo conjunto
                (articulosEncontrados = filtrarCategoria(lugarOrigen, lugarDestino, articulosEncontrados),
                sFilt = true):
                //NO, entonces uso el conjunto completo
                (articulosEncontrados = filtrarCategoria(lugarOrigen, lugarDestino, pasajes), sFilt = true);
        }  

        //Filtro por Ida y Vuelta
        if(idaVuelta){
        //Usaste el primer o segundo filtro?
            (pFilt || sFilt)?
              //SI, entonces sigo con el mismo conjunto y activo el tercer filtro 
              (articulosEncontrados = filtroIdaYVuelta(articulosEncontrados),
              tFilt = true):
              //NO, entonces uso el conjunto completo y activo el tercer filtro
              (articulosEncontrados = filtroIdaYVuelta(pasajes),
              tFilt = true);
      }
      actualizar(Array.from(articulosEncontrados));
    }
  }
  
  //CAMBIAR NOMBRES
  function actualizar(articulosFiltrados){
    if(articulosFiltrados.size == 0){
      $("#mensaje_filtro").text("No se pudo encontrar ningun articulo con los filtros seleccionados.");
    }
    cargarLista(articulosFiltrados);
  }
  
  /*Dibuja una Card con un producto en la caja de Cards*/
  function agregarCard(nombre,cantidadPasajerosDisponibles,precio,origen,destino,dias,categoria,fechaSalida,fechaVuelta){
    let codigo = '<div class="card">'
    codigo += '<div class="card-body">'
    codigo += '<ul>'
    codigo += '<li><h3 id="nombre-articulo">'+nombre+'</h3></li>'
    codigo += '<li><h3 id="precio-articulo">'+cantidadPasajerosDisponibles+'</h3></li>'
    codigo += '<li><h3 id="precio-articulo">'+precio+'</h3></li>'
    codigo += '<li><p>'+origen+'</p></li>'
    codigo += '<li><p>'+destino+'</p></li>'
    codigo += '<li><h2>'+dias+'</h2></li>'
    codigo += '<li><p>'+categoria+'</p></li>'
    codigo += '<li><p>'+fechaSalida+'</p></li>'
    codigo += '<li><p>'+fechaVuelta+'</p></li>'
    codigo += '</ul>'
    codigo += '</div>'
    codigo += '</div>'
    $('#rowCajaPasajes').append(codigo);
  }
  