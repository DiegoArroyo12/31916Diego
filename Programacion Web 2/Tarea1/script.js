const IMC  = () => {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;

    console.log(nombre);
    console.log(edad);
    console.log(peso);
    console.log(estatura);

    
    let imc = parseInt(peso) / (parseInt(estatura)^2);
    imc = Math.round(imc);
    console.log(imc)
    
    document.querySelectorAll('.contenido').forEach(element => element.style.display = 'none');
    document.querySelector('.mensaje').style.display = 'block';
    document.getElementById("volver").style.display = 'block';
    
    document.getElementsByClassName("mensaje")[0].textContent = `Hola ${nombre}, a tus ${edad} años tienes un IMC de ${imc}`;
};

const volver = () => {
    // Mostrar contenido inicial
    document.querySelectorAll('.contenido').forEach(element => element.style.display = 'flex');

    // Ocultar mensaje y botón "Calcular Nuevo"
    document.querySelector('.mensaje').style.display = 'none';
    document.getElementById("volver").style.display = 'none';
};