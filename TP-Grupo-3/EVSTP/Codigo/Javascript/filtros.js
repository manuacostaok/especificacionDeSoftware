function filtrarFecha(fechaEnAdelante, fechaLimite, articulos){
    var ret = new Set();
    //Fechas Default para casos
    var defaultDate1 = new Date("2022-05-31");
    var defaultDate2 = new Date("2022-06-30");
    //Variables de los parametros
    let fechaMinima = fechaEnAdelante;
    let fechaMaxima = fechaLimite;
    var flagInicio = true;
    var flagFin = true;

    if(fechaMinima.getTime()!=defaultDate1.getTime()){
        flagInicio=false;
    }
    if(fechaMaxima.getTime()!=defaultDate2.getTime()){
        flagFin=false;
    }
    console.log(fechaMinima);
    //Recorro los artículos
    articulos.forEach(articulo => {
        let fechaArticuloInicio = new Date (articulo.fechaSalida);
        let fechaArticuloFin = new Date (articulo.fechaVuelta);
        if(!flagInicio && flagFin){
            if(fechaArticuloInicio.getTime()>=fechaMinima.getTime()){
                ret.add(articulo);
            }
        }
        if(flagInicio && !flagFin){
            if(fechaArticuloFin.getTime()<=fechaMaxima.getTime()){
                ret.add(articulo);
            }
        }
        if(!flagInicio && !flagFin){
            console.log("Minimo y Maximo");
            if((fechaArticuloInicio.getTime()>=fechaMinima.getTime())&&(fechaArticuloFin.getTime()<=fechaMaxima.getTime())){
                ret.add(articulo);
            }
        }
    });
    console.log(ret);
    return ret;
}

function filtrarCategoria(lugarOrigen, lugarDestino, articulos){
    var ret = new Set();

    flagOrigen = true;
    flagDestino = true;

    if(lugarOrigen.length!=0){
        flagOrigen=false;
    }
    if(lugarDestino.length!=0){
        flagDestino=false;
    }

    articulos.forEach(articulo => {
        //Si se busca por Destino solamente
        if(flagOrigen && !flagDestino){
            if(articulo.destino.includes(lugarDestino)){
                ret.add(articulo);
            }
        }
        //Si se busca por Origen solamente
        if(!flagOrigen && flagDestino){
            if(articulo.origen.includes(lugarOrigen)){
                ret.add(articulo);
            }
        }
        //Si se busca por ambos
        if(!flagOrigen && !flagDestino){
            if(articulo.origen.includes(lugarOrigen) && articulo.destino.includes(lugarDestino)){
                ret.add(articulo);
            }
        }
    });
    return ret;
}

function filtroIdaYVuelta(articulos){
    var ret = new Set();
    articulos.forEach(articulo => {
        if(articulo.origen == articulo.destino){
            ret.add(articulo);
        }
    });
    return ret;
}