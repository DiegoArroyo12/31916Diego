<?php
// Código de conexión a la base de datos
include "conexion.php";
mysqli_set_charset($conexion,'utf8');

if(isset($_POST['eliminar'])){ // Si se envió el formulario para eliminar
    $id_a_eliminar = $_POST['id_a_eliminar']; // Obtener el ID del elemento a eliminar

    // Consulta para eliminar el elemento de la base de datos
    $consulta_eliminar = "DELETE FROM usuarios WHERE id = $id_a_eliminar";

    if(mysqli_query($conexion, $consulta_eliminar)){
        echo "Registro eliminado exitosamente";
    } else {
        echo "Error al intentar eliminar el registro: " . mysqli_error($conexion);
    }
}

// Código para mostrar la tabla y botón de eliminación de elementos
$query_mostrar = "SELECT id, nombre_usuario, correo FROM usuarios"; // Tu consulta SQL para mostrar los datos

$resultado = mysqli_query($conexion, $query_mostrar);

echo "<table border='1'>";
echo "<tr><th>ID</th><th>Usuario</th><th>Correo</th><th>Acción</th></tr>";

while ($fila = mysqli_fetch_assoc($resultado)) {
    echo "<tr>";
    echo "<td>" . $fila['id'] . "</td>";
    echo "<td>" . $fila['nombre_usuario'] . "</td>";
    echo "<td>" . $fila['correo'] . "</td>";
    echo "<td>";
    echo "<form method='post'>";
    echo "<input type='hidden' name='id_a_eliminar' value='" . $fila['id'] . "'>";
    echo "<input type='submit' name='eliminar' value='Eliminar'>";
    echo "</form>";
    echo "</td>";
    echo "</tr>";
}

echo "</table>";

mysqli_close($conexion); // Cerrar la conexión a la base de datos
?>
