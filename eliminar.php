<?php
// Código de conexión a la base de datos
include "conexion.php";
mysqli_set_charset($conexion, 'utf8');

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['eliminar'])) {
    $id_a_eliminar = $_POST['id_a_eliminar'];
    $consulta_eliminar = "DELETE FROM usuarios WHERE id = $id_a_eliminar";

    if (mysqli_query($conexion, $consulta_eliminar)) {
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
        echo "<h1 class='title'>Registro Eliminado Exitosamente</h1>";
        echo "<button class='back'><a href='eliminar.php'>Volver al Inicio</a></button>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
    } else {
        echo "<div style='font-size: 20px; text-align: center;'><b>Error al intentar eliminar el registro: " . mysqli_error($conexion) . "<b></div>";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['eliminar_todos'])) {
    $consulta_eliminar_todos = "TRUNCATE TABLE usuarios";

    if (mysqli_query($conexion, $consulta_eliminar_todos)) {
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
        echo "<h1 class='title'>Todos Los Registros Fueron Eliminados Exitosamente</h1>";
        echo "<button class='back'><a href='eliminar.php'>Volver al Inicio</a></button>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
    } else {
        echo "<div style='font-size: 20px; text-align: center;'><b>Error al intentar eliminar todos los registros: " . mysqli_error($conexion) . "<b></div>";
    }
}

$query_mostrar = "SELECT id, nombre, nombre_usuario, correo FROM usuarios";
$resultado = mysqli_query($conexion, $query_mostrar);

echo "<!DOCTYPE html>";
echo "<html lang='en'>";
echo "<head>";
echo "<meta charset='UTF-8'>";
echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
echo "<title>Leer</title>";
echo "<link rel='stylesheet' href='delete.css'>";
echo "</head>";
echo "<body>";
echo "<div class='main'>";
echo "<button class='back'><a href='index.html'>Volver al Inicio</a></button>";
echo "<table class='table' border='1'>";
echo "<tr><th>ID</th><th>Nombre</th><th>Usuario</th><th>Correo</th><th>Acción</th></tr>";

while ($fila = mysqli_fetch_assoc($resultado)) {
    echo "<tr>";
    echo "<td>" . $fila['id'] . "</td>";
    echo "<td>" . $fila['nombre'] . "</td>";
    echo "<td>" . $fila['nombre_usuario'] . "</td>";
    echo "<td>" . $fila['correo'] . "</td>";
    echo "<td>";
    echo "<form method='post'>";
    echo "<input type='hidden' name='id_a_eliminar' value='" . $fila['id'] . "'>";
    echo "<input class='confirm' type='submit' name='eliminar' value='Eliminar' onclick='return confirmarEliminacion()'>";
    echo "</form>";
    echo "</td>";
    echo "</tr>";
}

echo "</table>";
echo "<form method='post'>";
echo "<input class='eliminate' type='submit' name='eliminar_todos' value='Eliminar Todos' onclick='return confirmarEliminarTodos()'>";
echo "</form>";
echo "</div>";
echo "</body>";
echo "</html>";

mysqli_close($conexion);
?>
<script>
    function confirmarEliminacion() {
        return confirm('¿Estás seguro que deseas eliminar este registro?');
    }

    function confirmarEliminarTodos() {
        return confirm('¿Estás seguro que deseas eliminar TODOS los registros? Esta acción no se puede deshacer.');
    }
</script>
