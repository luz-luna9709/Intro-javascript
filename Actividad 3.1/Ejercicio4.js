/* Crear un programa que determine si un número introducido en un Prompt es par o no, 
 respuesta en un alert. */

var NparOimpar = Number(prompt("Ingresa un número: "));

if(NparOimpar % 2 == 0){
    alert( "El número " + NparOimpar +   "es par");
}
else{
    alert( "El número " + NparOimpar +  "es impar");
}