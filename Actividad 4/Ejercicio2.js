/* Crear un programa que pregunte un número y mostrar los números multiplos  de 5 desde 1 hasta el número introducido por el usuario. */

let numero =Number(prompt("Ingrese un Número:"));
let varcont = 1;

while(varcont <= numero){

    if(varcont % 5 == 0){
    console.log("El numero "+ varcont + ". Es multiplo de 5" )

    }
    varcont++;
}