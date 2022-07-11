/* Concatenar dos arreglos agregar un nuevo animal*/
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
var concatenation = animals.concat(comingSoonAnimals);
concatenation.push('cow');
console.log("Arreglos concatenados:" + concatenation);