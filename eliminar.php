<?php
// Código de conexión a la base de datos
include "conexion.php";
mysqli_set_charset($conexion,'utf8');

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
    echo "<form method='post'>";
    echo "<input type='hidden' name='id_a_eliminar' value='" . $fila['id'] . "'>";
    echo "<input type='hidden' name='confirmacion' value='SI'>"; 
    echo "<input class='confirm' type='submit' name='eliminar' value='Eliminar'>";
    echo "</form>";
    echo "</td>";
    echo "</tr>";
}

echo "</table>";
echo "</div>";
echo "</body>";
echo "</html>";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['confirmacion'])) {
    // El formulario de confirmación ha sido enviado

    // Verificar si se ha confirmado la eliminación
    if ($_POST['confirmacion'] === 'SI') {
        // Procesar la eliminación
        if (isset($_POST['eliminar'])) { 
            $id_a_eliminar = $_POST['id_a_eliminar']; 

            $consulta_eliminar = "DELETE FROM usuarios WHERE id = $id_a_eliminar";

            if (mysqli_query($conexion, $consulta_eliminar)) {
                echo "<div style='font-size: 20px; text-align: center;'><b>Registro Eliminado Exitosamente<b></div>";
            } else {
                echo "<div style='font-size: 20px; text-align: center;'><b>Error al intentar eliminar el registro: . mysqli_error($conexion)<b></div>";
            }
        }
    } else {
        echo "<div style='font-size: 20px; text-align: center;'><b>Debes Confirmar La Selección<b></div>";
    }
}

mysqli_close($conexion);
?>
<script>
function confirmarEliminacion() {
    return confirm('¿Estás seguro que deseas eliminar este registro?');
}
</script>