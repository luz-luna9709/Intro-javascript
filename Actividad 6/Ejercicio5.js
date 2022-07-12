/* Indexar parrot*/
var animals = ['eagle', 'parrot', 'monkey', 'boar', 'lion','cow'];
var comingSoonAnimals = ['panter', 'dragon', 'turtle'];
var concatenation = animals.concat(comingSoonAnimals);
concatenation.push('cow');
concatenation.pop('eagle');
console.log("Arreglos concatenados indexados:" + animals.indexOf('parrot'));

