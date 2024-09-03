let respuesta;
let usuario;
let respuestaUsuario;
let intentos;
let contador;

document.getElementById("subtitulo").textContent = "Intenta adivinar un número entre 1 y 10";

document.addEventListener('DOMContentLoaded', () => {
    Adivina()
});

const Adivina = () => {
    generarX();
    intentos = 5;
    contador = 0;
    console.log("Intentos: " + intentos);

    while (respuestaUsuario != respuesta && intentos>0){
        if (respuestaUsuario === null) {
            console.log("Juego Cerrado")
            return; 
        }
        modificarIntentos();
        ayuda();
    } 
    getUsuario();
    finJuego();
}

const getRespuestaUsuario = () => {
    respuestaUsuario = document.getElementById('respuestaUsuario').value;
    validar();
    return respuestaUsuario
};

const generarX = () =>{
    respuesta = Math.floor(Math.random()*(11 - 1) + 1);
    console.log("Respuesta: " + respuesta);
    return respuesta;
}

const getUsuario = () =>{
    usuario = document.getElementById("usuario").value;
    if (usuario === null || usuario === "") {
        console.log("Gracias por Jugar");
    } else{
        console.log("Gracias por Jugar " + usuario);
    }
}

const ayuda = () =>{
    ayudaLabel = document.getElementById('ayuda');
    if (respuestaUsuario < respuesta){
        if (respuestaUsuario === "" || intentos < 1){
            return;
        }
        console.log("La respuesta es un número mayor");
        ayudaLabel.style.display = 'block';
        ayudaLabel.textContent = "La respuesta es un número mayor";
    } else if (respuestaUsuario > respuesta){
        console.log("La respuesta es un número menor");
        ayudaLabel.style.display = 'block';
        ayudaLabel.textContent = "La respuesta es un número menor"
    }
}

const finJuego = () =>{
    resultado = document.getElementById('resultado');
    respuestaCorrecta = document.getElementById('respuesta');
    document.getElementById('finJuego').style.display = 'block';
    
    if (respuestaUsuario != respuesta){
        resultado.style.display = 'block';
        respuestaCorrecta.style.display = 'block';
        resultado.textContent = `HAZ PERDIDO ${usuario}`;
        respuestaCorrecta.textContent = `La respuesta era: ${respuesta}`;
        console.log(`HAZ PERDIDO, la respuesta era: ${respuesta}`);
    } else {
        resultado.style.display = 'flex';
        resultado.textContent = `HAS GANADO, encontraste la respuesta en tu intento No. ${contador}°`;
        console.log(`HAS GANADO ${usuario} \nEncontraste la respuesta en tu intento No. ${contador}°`)
    }
}

const validar = () =>{
        if (isNaN(respuestaUsuario) || respuestaUsuario === ""){
            console.log("Debes ingresar un número");
            alert("Debes ingresar un número");
            intentos ++
            contador --
        } else{
            console.log("Número Ingresado: " + respuestaUsuario);
        }
}

const modificarIntentos = () =>{
    if (respuestaUsuario != respuesta){
    intentos --;
    console.log("Intentos Restantes: " + intentos);
    document.getElementById("intentos").textContent = intentos;
    contador ++;
    } else {
        contador ++;
        return;
    }
}

const Volver = () => {
    window.location.href = '../../index.html';
};