//1.Con ayuda de la funcion porompt pedir dos datos al usuario:Nombre,edad.

let nombre =prompt('Ingresa tu nombre:');
let edad = Number(prompt('Ingresa tu edad:'));

 if( edad >= 18){
 console.log('Puedes ingresar a la discoteca');
  if(edad < 18){
    console.log('No puedes ingresar a la discoteca');
   }
}
   else if((nombre == 'Mario' || nombre == 'Carlos' ) && edad >= 18){
    console.log('Pueden ingresar a la zona VIP');
}







