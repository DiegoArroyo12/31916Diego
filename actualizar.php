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
        echo "<link rel='stylesheet' href='style.css'>";
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
        echo "<div class='main_1'>";
        echo "<button class='back'><a href='login.html'>Volver al Inicio</a></button>";
        echo "<table class='table' border='1'>";
        echo "<tr><th>Nombre</th><th>Dirección</th><th>Teléfono</th><th>Email</th><th>Usuario</th><th>Contraseña</th><th>ID</th></tr>";

        while ($fila = mysqli_fetch_assoc($resultado)) {
            echo "<tr>";
            echo "<td><input type='text' class='inputs' name='usuario' maxlength='255' value='" . $fila['nombre'] . "' required></td>";
            echo "<td><input type='text' class='inputs' name='direccion' maxlength='255' value='" . $fila['direccion'] . "' required></td>";
            echo "<td><input type='text' class='inputs' onkeypress='return valida(event)' name='telefono' maxlength='15' value='" . $fila['telefono'] . "' required></td>";
            echo "<td><input type='email' class='inputs' name='email' maxlength='40' value='" . $fila['correo'] . "' required></td>";
            echo "<td><input type='text' class='inputs' name='nombre_usuario' maxlength='255' value='" . $fila['nombre_usuario'] . "' required></td>";
            echo "<td><input type='text' class='inputs' name='password' maxlength='8' value='" . $fila['password'] . "' required></td>";
            echo "<td><input type='text' class='inputs' onkeypress='return valida(event)' name='id' maxlength='255' value='" . $fila['id'] . "' required></td>";
            echo "</tr>";
        }        

        echo "</table>";
        echo "<button type=submit class='submit'>ACTUALIZAR</button>";
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