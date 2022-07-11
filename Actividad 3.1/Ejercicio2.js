/* Solicitar al usuario dos datos, y a partir de una estructura de control realizar las condiciones
necesarias para crear un juego de Piedra, Papel o Tijera.*/

let jugador1 = prompt('Selecciona tu movimiento jugador 1 (piedra/papel/tijera)');
let jugador2= prompt('Selecciona tu movimiento jugador 2 (piedra/papel/tijera)');

if(jugador1 =="piedra" && jugador2 == "papel"){
    console.log("El ganador es:jugador1");   
}
else if(jugador2 =="piedra" && jugador1 == "papel"){
    console.log("El ganador es:jugador2");  
}
else if(jugador1 =="tijera" && jugador2 == "papel"){
    console.log("El ganador es:jugador1");  
}
else if(jugador1 =="papel" && jugador2 == "tijera"){
    console.log("El ganador es:jugador2");  
}
else if(jugador1 =="tijera" && jugador2 == "piedra"){
    console.log("El ganador es:jugador2");  
}
else if(jugador1 =="piedra" && jugador2 == "tijera"){
    console.log("El ganador es:jugador2");  
}
else if(jugador1 == jugador2 || jugador2 == jugador1) {
  console.log("El ganador es: Empate")
}
