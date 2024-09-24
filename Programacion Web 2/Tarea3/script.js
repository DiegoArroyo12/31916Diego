// Obtenemos el acceso a los productos
var camisa = document.getElementById("Camisa");
var pantalon = document.getElementById("Pantalon");
var zapatos = document.getElementById("Zapatos");
var sombrero = document.getElementById("Sombrero");

// Obtenemos los inputs de cantidad de cada producto
var inCamisa = document.getElementById("nCamisa");
var inPantalon = document.getElementById("nPantalon");
var inZapatos = document.getElementById("nZapatos");
var inSombrero = document.getElementById("nSombrero");

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
    precio: parseInt(camisa.value),
    cantidad: parseInt(inCamisa.value)
};
var pantalonObject = {
    producto: "Pantalón",
    precio: parseInt(pantalon.value),
    cantidad: parseInt(inPantalon.value)
};
var zapatosObject = {
    producto: "Zapatos",
    precio: parseInt(zapatos.value),
    cantidad: parseInt(inZapatos.value)
};
var sombreroObject = {
    producto: "Sombrero",
    precio: parseInt(sombrero.value),
    cantidad: parseInt(inSombrero.value)
};

// Función para cambiar el color del botón de 'Camisa'
camisa.addEventListener("click", (event) => {
    if (estiloCamisa.backgroundColor === "rgb(176, 179, 37)") {
        camisa.style.backgroundColor = "green";
        inCamisa.style.display = "block";
        console.log(`Camisa - $${camisa.value} - Agregado`)
    } else {
        camisa.style.backgroundColor = "rgb(176, 179, 37)";
        inCamisa.style.display = "none";
        console.log(`Camisa - $${camisa.value} - Eliminado`)
    }
});

// Evitar que el clic en el input propague el evento hacia el botón camisa
inCamisa.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el clic en el input dispare el clic en el botón camisa
});

inCamisa.addEventListener('input', function() {
    camisaObject.cantidad = parseInt(inCamisa.value) || 0;
    console.log(`Camisas: ${camisaObject.cantidad}\nTotal: ${camisaObject.cantidad * camisaObject.precio}`);
});

// Función para cambiar el color del botón de 'Pantalón'
pantalon.addEventListener("click", (event) => {
    if (estiloPantalon.backgroundColor === "rgb(176, 179, 37)") {
        pantalon.style.backgroundColor = "green"; 
        inPantalon.style.display = "block";   
        console.log(`Pantalón - $${pantalon.value} - Agregado`)
    } else {
        pantalon.style.backgroundColor = "rgb(176, 179, 37)";
        inPantalon.style.display = "none";
        console.log(`Pantalón - $${pantalon.value} - Eliminado`)
    }
});

inPantalon.addEventListener("click", (event) => {
    event.stopPropagation();
});

inPantalon.addEventListener('input', function() {
    pantalonObject.cantidad = parseInt(inPantalon.value) || 0;
    console.log(`Pantalones: ${pantalonObject.cantidad}\nTotal: ${pantalonObject.cantidad * pantalonObject.precio}`);
});

// Función para cambiar el color del botón de 'Zapatos'
zapatos.addEventListener("click", (event) => {
    if (estiloZapatos.backgroundColor === "rgb(176, 179, 37)") {
        zapatos.style.backgroundColor = "green";   
        inZapatos.style.display = "block"; 
        console.log(`Zapatos - $${zapatos.value} - Agregado`)
    } else {
        zapatos.style.backgroundColor = "rgb(176, 179, 37)";
        inZapatos.style.display = "none";
        console.log(`Zapatos - $${zapatos.value} - Eliminado`)
    }
});

inZapatos.addEventListener("click", (event) => {
    event.stopPropagation();
});

inZapatos.addEventListener('input', function() {
    zapatosObject.cantidad = parseInt(inZapatos.value) || 0;
    console.log(`Zapatos: ${zapatosObject.cantidad}\nTotal: ${zapatosObject.cantidad * zapatosObject.precio}`);
});

// Función para cambiar el color del botón de 'Sombrero'
sombrero.addEventListener("click", (event) => {
    if (estiloSombrero.backgroundColor === "rgb(176, 179, 37)") {
        sombrero.style.backgroundColor = "green";
        inSombrero.style.display = "block";
        console.log(`Sombrero - $${sombrero.value} - Agregado`)
    } else {
        sombrero.style.backgroundColor = "rgb(176, 179, 37)";
        inSombrero.style.display = "none";
        console.log(`Sombrero - $${sombrero.value} - Eliminado`)
    }
});

inSombrero.addEventListener("click", (event) => {
    event.stopPropagation();
});

inSombrero.addEventListener('input', function() {
    sombreroObject.cantidad = parseInt(inSombrero.value) || 0;
    console.log(`Sombreros: ${sombreroObject.cantidad}\nTotal: ${sombreroObject.cantidad * sombreroObject.precio}`);
});

// Función para realizar y mostrar el cálculo del carrito
const comprar = () => {
    const totales = [];                                     // Arreglo para los precios
    const productos = [];                                   // Arreglo para los productos
    const cantidades = [];                                  // Arreglo para la cantidad de productos
    let html = "";                                          // Variable para mostar el carrito
    let consoleCarrito = "Carrito:\n";                      // Variable para mostrar el carrito en consola

    // Si el color de los botones es verde, tomamos el valor y lo agregamos al carrito
    if (estiloCamisa.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(camisaObject.precio * camisaObject.cantidad)
        productos.push(camisaObject.producto)
        cantidades.push(camisaObject.cantidad)
    }

    if (estiloPantalon.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(pantalonObject.precio * pantalonObject.cantidad)
        productos.push(pantalonObject.producto)
        cantidades.push(pantalonObject.cantidad)
    }

    if (estiloZapatos.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(zapatosObject.precio * zapatosObject.cantidad)
        productos.push(zapatosObject.producto)
        cantidades.push(zapatosObject.cantidad)
    }
    
    if (estiloSombrero.backgroundColor === "rgb(0, 128, 0)") {
        totales.push(sombreroObject.precio * sombreroObject.cantidad)
        productos.push(sombreroObject.producto)
        cantidades.push(sombreroObject.cantidad)
    }

    // Mostramos los elementos del carrito
    for (let i = 0; i < productos.length; i++) {
        html += `<li>${productos[i]} - ${cantidades[i]}</li>`;
        consoleCarrito += `${productos[i]} - ${cantidades[i]}\n`
    }
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
    inCamisa.style.display = "none";
    inPantalon.style.display = "none";
    inZapatos.style.display = "none";
    inSombrero.style.display = "none";
    texto.style.display = "none";
    total.style.display = "none";
    precio.style.display = "none";
    lista.innerHTML = "";
};