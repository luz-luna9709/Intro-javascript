//Funcion para buscar una palabra dentro de una oracion

function Oracion(){
    var textoOracion = prompt('¡Ingrese una Oracion!');
    var palabra = prompt("Ingrese la palabra a buscar:") 
    var Buscar = textoOracion.search(palabra);

  if(Buscar >=0){
    console.log( true +":La palabra existe dentro de la oracion." + "palabra:" + palabra + ".Oracion:" +textoOracion); 
  }
  else {
    console.log( false +":La palabra no existe dentro de la oracion");
}

}

