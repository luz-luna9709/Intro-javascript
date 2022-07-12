/* Definir si una palabra es un Palindromo */

function Palindromo(cadena){
const cadena=prompt("Ingresa una palabra:");
const word1 = cadena.split("").reverse().join("");
const word2 = cadena.split("").reverse().join("");

if(word1 == cadena || word2== cadena){
console.log("La palabra:" + cadena + ".Es un palindromo");

}else{
    console.log("La palabra:" + cadena + ".No es un palindromo");
}

}