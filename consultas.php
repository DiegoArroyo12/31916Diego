<?php
// Realizar la conexión a la base de datos (código de conexión a la base de datos)
include "conexion.php";
mysqli_set_charset($conexion,'utf8');

// Consulta SQL
$query = "SELECT * FROM usuarios";

// Ejecutar la consulta
$resultado = mysqli_query($conexion, $query);

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
    echo "<body>";
    echo "<div class='main_1'>";
    echo "<button class='back'><a href='index.html'>Volver al Inicio</a></button>";
    echo "<table class='table' border='1'>";
    echo "<tr><th>Nombre</th><th>Dirección</th><th>Teléfono</th><th>Email</th><th>Usuario</th><th>Contraseña</th><th>Fecha</th><th>ID</th></tr>";

    while ($fila = mysqli_fetch_assoc($resultado)) {
        echo "<tr>";
        echo "<td>" . $fila['nombre'] . "</td>";
        echo "<td>" . $fila['direccion'] . "</td>";
        echo "<td>" . $fila['telefono'] . "</td>";
        echo "<td>" . $fila['correo'] . "</td>";
        echo "<td>" . $fila['nombre_usuario'] . "</td>";
        echo "<td>" . $fila['password'] . "</td>";
        echo "<td>" . $fila['Fecha_Registro'] . "</td>";
        echo "<td>" . $fila['id'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
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
        echo "<h1 class='title'>No Se Encontraron Resultados</h1>";
        echo "<br>";
        echo "<button class='back'><a href='index.html'>Volver al Inicio</a></button>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
}

// Cerrar la conexión a la base de datos (si es necesario)
mysqli_close($conexion);
?>
