const generarX = () =>{
    /* Función generadora de un número aleatorio entre 1 y 10 */
    respuesta = Math.floor(Math.random()*(11 - 1) + 1);
    console.log("Respuesta: " + respuesta);
    return respuesta;
}

let numeroAleatorio = generarX();   /* Número a adivinar */
let intentosTotales = 5;            /* Máximo de intentos */
let intentos = 0;                   /* Intentos realizados */

const getRespuestaUsuario = () => {
    /* Función para obtener la respuesta ingresada por el usuario */
    respuestaU = document.getElementById('respuestaUsuario').value;
    console.log(`Número del usuario: ${respuestaU}`)
    return respuestaU
};

const getUsuario = () =>{
    /* Función para obtener en nombre del usuario */
    usuario = document.getElementById("usuario").value;
    if (usuario === null || usuario === "") {
        console.log("Gracias por Jugar");
    } else{
        console.log("Gracias por Jugar " + usuario);
    }
    return usuario
}

/* Resultado del final del juego */
resultado = document.getElementById('resultado');
/* En caso de perder se muestra la respuesta correcta */
respuestaCorrecta = document.getElementById('respuesta');

/* Llama a la función Adivina con la tecla 'Enter' */
document.getElementById("respuestaUsuario").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      Adivina();
    }
  });

const Adivina = () => {
    /* Función principal del juego */
    let respuestaUsuario = getRespuestaUsuario();
    let numeroUsuario = parseInt(respuestaUsuario);

    if (numeroUsuario < 1 || numeroUsuario > 10 || isNaN(numeroUsuario)) {
        alert("Ingresa un número válido.")
    } else {
        intentos++
        console.log(`Intentos restates: ${intentosTotales - intentos}`)
        document.getElementById("intentos").textContent = (intentosTotales - intentos);

        if (numeroUsuario === numeroAleatorio) {
            ganador()
        } else if (intentos === intentosTotales) {
            perdedor()
        } else {
            if (numeroUsuario > numeroAleatorio) {
                ayuda(false)
            } else {
                ayuda(true)
            }
        }
    }
}

const setRespuestaUsuario = () => {
    /* Función para limpiar input */
    document.getElementById('respuestaUsuario').value = '';
    document.getElementById('usuario').value = '';
};

const ganador = () => {
    /* Función para mostrar un juego ganado */
    usuario = getUsuario()
    document.getElementById('finJuego').style.display = 'none';
    document.getElementById('ayuda').style.display = 'none';
    resultado.style.display = 'block';
    respuestaCorrecta.style.display = 'block';

    resultado.textContent = `HAZ GANADO ${usuario}`;
    respuestaCorrecta.textContent = `Encontraste la respuesta en tu intento No. ${intentos}°`;

    console.log(`HAS GANADO ${usuario} \nEncontraste la respuesta en tu intento No. ${intentos}°`)
};

const perdedor = () => {
    /* Función para mostrar un juego perdido */
    usuario = getUsuario()
    document.getElementById('finJuego').style.display = 'none';
    document.getElementById('ayuda').style.display = 'none';
    resultado.style.display = 'block';
    respuestaCorrecta.style.display = 'block';

    resultado.textContent = `HAZ PERDIDO ${usuario}`;
    respuestaCorrecta.textContent = `La respuesta era: ${respuesta}`;

    console.log(`HAZ PERDIDO, la respuesta era: ${respuesta}`);
};

const ayuda = (help) =>{
    /* Función para ayudar al usuario */
    ayudaLabel = document.getElementById('ayuda');
    if (help){
        console.log("La respuesta es un número mayor");
        ayudaLabel.style.display = 'flex';
        ayudaLabel.style = 'text-align: center;';
        ayudaLabel.textContent = "La respuesta es un número mayor";
    } else{
        console.log("La respuesta es un número menor");
        ayudaLabel.style.display = 'flex';
        ayudaLabel.style = 'text-align: center;';
        ayudaLabel.textContent = "La respuesta es un número menor"
    }
}

const Reiniciar = () => {
    /* Función para reiniciar el juego */
    numeroAleatorio = generarX();
    intentos = 0;

    document.getElementById('intentos').textContent = 5;
    document.getElementById('finJuego').style.display = 'block';
    document.getElementById('ayuda').style.display = 'none';

    resultado.style.display = 'none';
    resultado.textContent = '';
    respuestaCorrecta.textContent = '';

    setRespuestaUsuario()
};

const Volver = () => {
    /* Función para redirigir al menú principal */
    window.location.href = '../../index.html';
};