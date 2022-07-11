/* Ordenar un arreglo */

var arrayOrdenado = [4,6,1,0,8,2,45,11,5,33,50,101];
arrayOrdenado.sort(function(a,b){
    return a-b});
console.log("Arreglo Ordenado:" + arrayOrdenado);