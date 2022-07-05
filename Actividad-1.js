/* --Ejercicio 1-- */
/* Ingresar un numero y multiplicarlo por 2 y mostrar el resultado */

var numero =prompt("Ingresa un numero");
document.write("La multiplicacion es igual a :"+( parseInt(numero)*2 ) );

/* --Ejercicio 2-- */
/* Ingresar dos numeros y restarlos e Imprimir en pantalla la resta de ambos */

var Num1= prompt("Ingresa un número:");
var Num2= prompt("Ingresa otro número:");
document.write("La resta es = "+( parseInt(Num1)- parseInt(Num2) ) );


/* --Ejercicio 3-- */
/*Calcular el área de un círculo con un radio r=5.3 e Imprimir  el área en pantalla*/

const pi=3.1416;
var a;
var r=5.3;
a= pi*r*r;
document.write("El área del circulo es = "+a);

/* --Ejercicio 4-- */
/*Calcular el área de un rombo (D=8,d=6, Formula = a=D*d/2;)*/

var D=8;
var d=6;
a=D*d/2;
document.write("El área del rombo es = "+a);
