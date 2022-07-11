/* Solicitar al usuario un numero , si el numero es 1000 imprimir "Ganaste un premio". */

let NumUsuario= Number(prompt("Escriba un número para participar"));

if (NumUsuario == '1000'){
 console.log("¡Ganaste un premio!");
}
else{
    console.log("Número:" + NumUsuario + "¡Lo sentimos,sigue participando!");
}