/* Solicitar 3 numeros y mostrar cual de los numeros es mayor. */

var número1 = Number( prompt("Ingresa un número"));
var número2 = Number(prompt("Ingresa otro número"));
var número3 = Number(prompt("Escribe otro número"));

  if (número1 > número2 && número1 > número3) {
   console.log("El numero:" + número1 + ".Es el número mayor ingresado");
 } else if(número2 > número1 && número2 > número3) {
   console.log("El numero:" + número2 + ".Es el número mayor ingresado");
  }else if(número3 > número1 && número3 > número2){
   console.log("El numero:" + número3 + ".Es el número mayor ingresado");
}else if(número1 == número2 && número2 == número3){
    console.log("Los numeros son iguales");
 }
 else if(número1 ==número2 && número1 > número3){
    console.log("El numero:" + número1 + ".y el número:" + número2 +".Son los números  mayores");
 }
 else if(número1 == número3 && número1 > número2){
    console.log("El numero:" + número1 + ".y el número:" + número3 +".Son los números  mayores");
 }
 else if(número2 == número3 && número2 > número1){
    console.log("El numero:" + número2 + ".y el número:" + número3 +".Son los números  mayores");
 }
 else if(número3 == número2 && número3 > número1){
    console.log("El numero:" + número3 + ".y el número:" + número2 +".Son los números  mayores")
 }
 else{
    console.log("Termina la validacion");
 }



