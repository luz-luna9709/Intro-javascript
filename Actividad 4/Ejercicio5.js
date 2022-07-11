/* Imprimir una lista de números del 1 al 100 y excluir un rango de 10 números , el inicio y
 el fin del rango lo determinara el usuario */

let rangoinicial=prompt("Ingresa el rango inicial de 10 numeros:")
let rangofinal=prompt("Ingresa el rango final de 10 numeros:")
let rangototal=rangofinal-rangoinicial;
let numeros=100;

if(rango == 10){
    for (let i = 1; i <= numeros; i++) {
        if(i >= rangoinicial && i <= rangofinal){
            console.log("Se elimina el rango:"+i);
            continue
        }else{
            console.log(" El número: "+i)
        }
    }
}else if(rango>10){
    console.log("Error el rango de números es mayor a 10")
}else{
    console.log("Error el rango de números es menor a 10")   
}