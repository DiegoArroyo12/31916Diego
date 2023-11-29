<?php
// Validar las credenciales de usuario
include "conexion.php"; // Incluye tu archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    // Verificar las credenciales en la base de datos
    $consulta_verificacion = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' AND password='$password'";
    $resultado = mysqli_query($conexion, $consulta_verificacion);

    // Verificar si hay resultados y mostrarlos en una tabla HTML
    if ($resultado && mysqli_num_rows($resultado) > 0) {
        echo "<!DOCTYPE html>";
        echo "<html lang='en'>";
        echo "<head>";
        echo "<meta charset='UTF-8'>";
        echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        echo "<title>Leer</title>";
        echo "<link rel='stylesheet' href='update.css'>";
        echo "</head>";
        echo "<script>";
        echo "function valida(e){";
        echo "tecla = (document.all) ? e.keyCode : e.which;";
        echo "if (tecla==8){";
        echo "return true;}";
        echo "patron =/[0-9]/;";
        echo "tecla_final = String.fromCharCode(tecla);";
        echo "return patron.test(tecla_final);}";
        echo "</script>";
        echo "<body>";
        echo "<div class='main'>";
        while ($fila = mysqli_fetch_assoc($resultado)) {
            echo "<div class='inp_1'>";
            echo "<label class='label'>Nombre Completo:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' name='nombre' maxlength='255' value='" . $fila['nombre'] . "' required>";
            echo "</div>";
            echo "<label class='label'>Dirección:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' name='direccion' maxlength='255' value='" . $fila['direccion'] . "' required>";
            echo "</div>";
            echo "<label class='label'>Teléfono:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' onkeypress='return valida(event)' name='telefono' maxlength='15' value='" . $fila['telefono'] . "' required>";
            echo "</div>";
            echo "<label class='label'>Correo:</label>";
            echo "<div class='inp'>";
            echo "<input type='email' class='input' name='email' maxlength='40' value='" . $fila['correo'] . "' required>";
            echo "</div>";
            echo "</div>";
            echo "<div class='inp_1'>";
            echo "<label class='label'>Usuario:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' name='nombre_usuario' maxlength='255' value='" . $fila['nombre_usuario'] . "' required>";
            echo "</div>";
            echo "<label class='label'>Contraseña:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' name='password' maxlength='8' value='" . $fila['password'] . "' required>";
            echo "</div>";
            echo "<label class='label'>ID:</label>";
            echo "<div class='inp'>";
            echo "<input type='text' class='input' onkeypress='return valida(event)' name='id' maxlength='255' value='" . $fila['id'] . "' required>";
            echo "</div>";
            echo "<button type=submit class='button'>ACTUALIZAR</button>";
            echo "<button class='button'><a href='login.html'>Cerrar Sesión</a></button>";
            echo "</div>";
        }
        echo "</div>";
        echo "</body>";
        echo "</html>";
    } else {
        echo "<!DOCTYPE html>";
        echo "<html lang='en'>";
        echo "<head>";
        echo "<meta charset='UTF-8'>";
        echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        echo "<title>Exito</title>";
        echo "<link rel='stylesheet' href='style.css'>";
        echo "</head>";
        echo "<body>";
        echo "<div class='main_1'>";
        echo "<div class='answer'>";
        echo "<h1 class='title'>NO SE ENCONTRÓ NINGÚN USUARIO LLAMADO:</h1>";
        echo "<br>";
        echo "<h2 class='title'>$usuario</h2>";
        echo "<br>";
        echo "<button class='back'><a href='login.html'>Volver al Inicio</a></button>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
    }
}

mysqli_close($conexion);
?>