/* Crear un programa  que imprima en consola los numerps impares del 1 al 50 usando for */
 var varinicio = 1;
 var varfinal =50;

 for( varinicio = 1; varinicio <= varfinal; varinicio++){
    if(!(varinicio % 2 == 0))
    console.log("El numero es:"+varinicio+ ".Es impar");
 }
