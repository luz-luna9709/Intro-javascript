/* Programa  para encontrar el numero de ocurrencias que existen de una letra en una cadena.
Considerar  la cadena de texto y la letra a buscar como los parámetros. */
function cadenas(){
var cadena = prompt('Ingresa una palabra:');
var letra =prompt("Elige una letra:");
var arrays = cadena.split("");
var position = 0;
var i;
for( i = 0; i < arrays.length; i++){
    if(arrays[i] == letra){
        position= Number(position)+1;
    }
}  
console.log("La palabra es:"+ cadena+ ".Se eligio la letra:"+ letra + ".Se repite:" + position + "-veces");
}
