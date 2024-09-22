// Obtenemos el acceso a los productos
var camisa = document.getElementById("Camisa");
var pantalon = document.getElementById("Pantalon");
var zapatos = document.getElementById("Zapatos");
var sombrero = document.getElementById("Sombrero");

// Elementos para mostrar el total de la compra
var texto = document.getElementById("carrito");
var lista = document.getElementById("productos");
var total = document.getElementById("total");
var precio = document.getElementById("precio");

// Variables para obtener el color actual de los botones de los productos
const estiloCamisa = getComputedStyle(camisa);
const estiloPantalon = getComputedStyle(pantalon);
const estiloZapatos = getComputedStyle(zapatos);
const estiloSombrero = getComputedStyle(sombrero);

// Variables Json para los productos
var camisaObject = {
    producto: "Camisa",
    precio: parseInt(camisa.value)
};
var pantalonObject = {
    producto: "Pantalón",
    precio: parseInt(pantalon.value)
};
var zapatosObject = {
    producto: "Zapatos",
    precio: parseInt(zapatos.value)
};
var sombreroObject = {
    producto: "Sombrero",
    precio: parseInt(sombrero.value)
};

// Función para cambiar el color del botón de 'Camisa'
camisa.addEventListener("click", (event) => {
    if (estiloCamisa.backgroundColor === "rgb(176, 179, 37)") {
        camisa.style.backgroundColor = "green";    
        console.log(`Camisa - $${camisa.value} - Agregado`)
    } else {
        camisa.style.backgroundColor = "rgb(176, 179, 37)";
        console.log(`Camisa - $${camisa.value} - Eliminado`)
    }
});

// Función para cambiar el color del botón de 'Pantalón'
pantalon.addEventListener("click", (event) => {
    if (estiloPantalon.backgroundColor === "rgb(176, 179, 37)") {
        pantalon.style.backgroundColor = "green";    
        console.log(`Pantalón - $${pantalon.value} - Agregado`)
    } else {
        pantalon.style.backgroundColor = "rgb(176, 179, 37)";
        console.log(`Pantalón - $${pantalon.value} - Eliminado`)
    }
});

// Función para cambiar el color del botón de 'Zapatos'
zapatos.addEventListener("click", (event) => {
    if (estiloZapatos.backgroundColor === "rgb(176, 179, 37)") {
        zapatos.style.backgroundColor = "green";    
        console.log(`Zapatos - $${zapatos.value} - Agregado`)
    } else {
        zapatos.style.backgroundColor = "rgb(176, 179, 37)";
        console.log(`Zapatos - $${zapatos.value} - Eliminado`)
    }
});

// Función para cambiar el color del botón de 'Sombrero'
sombrero.addEventListener("click", (event) => {
    if (estiloSombrero.backgroundColor === "rgb(176, 179, 37)") {
        sombrero.style.backgroundColor = "green";    
        console.log(`Sombrero - $${sombrero.value} - Agregada`)
    } else {
        sombrero.style.backgroundColor = "rgb(176, 179, 37)";
        console.log(`Sombrero - $${sombrero.value} - Eliminado`)
    }
});

// Función para realizar y mostrar el cálculo del carrito
const comprar = () => {
    const totales = [];                                     // Arreglo para los precios
    const productos = [];                                   // Arreglo para los productos
    let html = "";                                          // Variable para mostar el carrito
    let consoleCarrito = "Carrito:\n";                      // Variable para mostrar el carrito en consola

    // Si el color de los botones es verde, tomamos el valor y lo agregamos al carrito
    if (estiloCamisa.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(camisaObject.precio)
        productos.push(camisaObject.producto)
    }

    if (estiloPantalon.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(pantalonObject.precio)
        productos.push(pantalonObject.producto)
    }

    if (estiloZapatos.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(zapatosObject.precio)
        productos.push(zapatosObject.producto)
    }
    
    if (estiloSombrero.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(sombreroObject.precio)
        productos.push(sombreroObject.producto)
    }

    // Mostramos los elementos del carrito
    productos.forEach(element => {
        html += `<li>${element}</li>`;
        consoleCarrito += `${element} \n`;
    });
    lista.innerHTML = html;
    
    // Sumamos todos los elementos de el arreglo 'totales'
    const suma = totales.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
    precio.textContent = suma;              // Asignamos el total 
    consoleCarrito += `Total: $${suma}`;    // Agregamos el total
    console.log(consoleCarrito)             // Mostramos en consola el total

    // Mostramos los elementos ocultos 
    texto.style.display = "block";
    total.style.display = "flex";
    precio.style.display = "flex";
};

// Función para borrar los elementos del carrito y volver a comprar
const borrar = () => {
    camisa.style.background = "#b0b325";
    pantalon.style.background = "#b0b325";
    zapatos.style.background = "#b0b325";
    sombrero.style.background = "#b0b325";
    texto.style.display = "none";
    total.style.display = "none";
    precio.style.display = "none";
    lista.innerHTML = "";
};