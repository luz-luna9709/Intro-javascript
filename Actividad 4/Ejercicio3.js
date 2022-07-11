/* Crear un programa que pregunte un número y mostrar los números multiplos  de 5 desde 1 hasta 
el número introducido por el usuario usando DO. */

let NumDO =Number(prompt("Ingrese un Número:"));
let varcontDO = 1;

do{
    if(varcontDO % 5 == 0){
        console.log("El numero "+ varcontDO + ". Es multiplo de 5" )
    
        }
        varcontDO++;

}while(varcontDO <= NumDO);