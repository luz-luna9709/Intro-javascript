//Mayores de 18 años que residen en un municipio fronterizo del Norte del pa

let fronterizo = false;
let edad=0;

edad =Number(prompt('Ingresa tu edad'));
if(edad > 18){
 fronterizo=prompt("Reside en un municipio fronterizo del norte del pais:(Yes/No)");
if(fronterizo == 'Yes'){
 console.log('Se puede vacunar');

} else{
 console.log('No se puede vacunar');
}
}

