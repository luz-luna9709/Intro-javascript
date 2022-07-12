/* Iterar un arreglo e imprimir cada uno de los elementos de una forma ordenada. */

var arrays = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for (var j = 0; j < arrays.length; j++) {
  arrays.sort(function (a, b) {
    return a - b;
  });
  console.log("Arreglos ordenados:" + arrays[j]);
}