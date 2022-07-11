/* Indexar parrot*/
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
var concatenation = animals.concat(comingSoonAnimals);
concatenation.push('cow');
concatenation.pop('eagle');
console.log("Arreglos concatenados:" + concatenation.indexOf('parrot'));