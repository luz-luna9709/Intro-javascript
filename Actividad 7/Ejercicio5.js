/* Escribe un metodo que retorne el elemento mayor del arreglo */  
//Opcion1
var arr=[45,56,32,98,1000,5,23];
console.log(Math.max(...arr));

//Opcion2

    var arr = [45, 56, 32, 98, 1000, 5, 23];
    var max = 0
    for( var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log("El numero mayor del arreglo es:" + max);

