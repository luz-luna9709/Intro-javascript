/* Solicitar al usuario  2 numeros  y mostrar cual es menor */

var número1 = Number( prompt("Escribe un número"));
var número2 = Number(prompt("Escribe otro número"));

  if (número1 < número2) {
   console.log("El numero:" + número1 + ".Es menor que el segundo número ");
 } else {
    console.log("El numero:" + número2 + ".Es menor que el primer número");
}