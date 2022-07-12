/* Contruir un codigo bajo reglas utilizando un ciclo for con arreglos */

var arrays =[1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (var i = 0; i < arrays.length; i++) {
  if (arrays[i] > 3) {
    console.log("Valores mayores que 3:" + arrays[i]);
  }
}