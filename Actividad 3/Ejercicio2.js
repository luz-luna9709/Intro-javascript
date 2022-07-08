//Embarazadas mayores de 18 años con mas de 9 semanas de gestacion
function vacuna(){

let edad=0;
let sexo='';
let embarazada =false;
let semanas = 0;

edad =Number(prompt('Ingresa tu edad'));
if(edad > 18){
  sexo = prompt("Selecciona tu sexo:(M/F)");
  if(sexo == 'F'){
    embarazada= prompt('¿Estas embarazada?');

    if(embarazada == 'true'){
        semanas = prompt('¿Cuantas semanas de gestacion tienes?');

        if(semanas >= 9){
            console.log("Aplica para la vacuna");
         }
         else{
            console.log("No se puede vacunar");
        }
        
     }
  }
}

}
