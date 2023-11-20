<?php
// Código de conexión a la base de datos
include "conexion.php";
mysqli_set_charset($conexion,'utf8');

if(isset($_POST['eliminar']) && isset($_POST['id_a_eliminar'])){ 
    $id_a_eliminar = $_POST['id_a_eliminar']; 

    // Verificar si se ha confirmado la eliminación
    if(isset($_POST['confirmacion']) && $_POST['confirmacion'] === 'SI'){ 
        $consulta_eliminar = "DELETE FROM usuarios WHERE id = $id_a_eliminar";

        if(mysqli_query($conexion, $consulta_eliminar)){
            echo "Registro eliminado exitosamente";
        } else {
            echo "Error al intentar eliminar el registro: " . mysqli_error($conexion);
        }
    } else {
        echo "Debes confirmar la eliminación";
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
echo "<link rel='stylesheet' href='style.css'>";
echo "</head>";
echo "<body>";
echo "<div class='main_1'>";
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
    echo "<form method='post' onsubmit='return confirmarEliminacion()'>";
    echo "<input type='hidden' name='id_a_eliminar' value='" . $fila['id'] . "'>";
    echo "<input class='confirm' type='submit' name='eliminar' value='Eliminar'>";
    echo "</form>";
    echo "</td>";
    echo "</tr>";
}

echo "</table>";
echo "</div>";
echo "</body>";
echo "</html>";

mysqli_close($conexion);
?>
<script>
function confirmarEliminacion() {
    return confirm('¿Estás seguro que deseas eliminar este registro?');
}
</script>