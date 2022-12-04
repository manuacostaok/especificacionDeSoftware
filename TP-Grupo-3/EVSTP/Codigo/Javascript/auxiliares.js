//Agrega una categoria a un contenedor de radiobutton
function agregarFiltro(filtro){
    $('#categorias').append('<input type="checkbox" name="categoria" id="filtro'+filtro+'" value='+filtro+'>');
    $('#categorias').append('<label for="filtro'+filtro+'">'+filtro+'</label><br>');
}

//Muestra la imagen seleccionada en el selector de imagen en donde corresponda
function mostrarImagen(event,idimagen) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById(idimagen).src= event.target.result;
   }
    reader.readAsDataURL(file);
}

//Agrega una categoria a una combobox
function agregarFiltroCombo(filtro){    
    $('#combobox_categorias').append('<option value="'+filtro+'">'+filtro+'</option>"');
}

//Devuelve si un elemento está contenido en un array
function _contiene(array, elem){
    for(var i = 0; i < array.length; i++){
      if(array[i] === elem){
        return true;
      }
    }
    return false;
  }

//Devuelve si un texto es vacío.
  function esVacio(input){
    return input == "" || input == null || input == undefined || input.trim().length == 0;
}
