// Horizontales
function Horizontales(){
    function cadenaHorizontal(caracter, cantidad) {
        let cadena = "";
        for (let i = 0; i < cantidad; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      const caracter = "x";
      const cantidad = 4;
      const resultado = cadenaHorizontal(caracter, cantidad);
      console.log(resultado);
}

// Verticales
function Verticales(){
    function cadenaVertical(caracter, cantidad) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidad; i++) {
          cadenaVertical += caracter + "\n";
        }
      
        return cadenaVertical;
      }
      
      const caracter = "x";
      const cantidad = 4;
      const resultado = cadenaVertical(caracter, cantidad);
      console.log(resultado);
}

// nx
function nx(){
    cantidadH = parseInt(prompt("Ingresa la Cantidad Horizontal:"))
    cantidadV = parseInt(prompt("Ingresa la Cantidad Vertical:"))
    const caracter = "x";
    function cadenaHorizontal(caracter, cantidadH) {
        let cadena = "";
    
        for (let i = 0; i < cantidadH; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      
      function cadenaVertical(caracter, cantidadV) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidadV; i++) {
          cadenaVertical += caracter + "\n";
        }
        return cadenaVertical;
      }
      const resultadoH = cadenaHorizontal(caracter, cantidadH);
      console.log(resultadoH);
      const resultadoV = cadenaVertical(caracter, cantidadV);
      console.log(resultadoV);
}

// cuadrado
function cuadrado(){
    cantidadH = 4;
    cantidadV = 4;
    const caracter = "x";
    function crearCadena(caracter, cantidadH) {
        let cadena = "";
    
        for (let i = 0; i < cantidadH; i++) {
          cadena += caracter + " ";
        }
        return cadena;
      }
      
      function cadenaVertical(caracter, cantidadV) {
        let cadenaVertical = "";
      
        for (let i = 0; i < cantidadV; i++) {
          cadenaVertical += resultadoH + "\n";
        }
        return cadenaVertical;
      }
      const resultadoH = crearCadena(caracter, cantidadH);
      const resultadoV = cadenaVertical(caracter, cantidadV);
      console.log(resultadoV);
}

// tablas
function tablas(){
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log();
      }
}