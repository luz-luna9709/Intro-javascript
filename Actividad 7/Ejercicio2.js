/* Funcion para suma de los elementos de un arreglo. */

function SumaArrays(){

 const numbers =[1,2,3,4,5,10,11];
 let suma =0;
 let j;

 for(j = 0; j < numbers.length;j++){
    suma +=numbers[j];
 }
 console.log("La Suma de los elementos es: "+ suma);
}
