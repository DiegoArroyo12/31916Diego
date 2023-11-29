<?php
//conexion a la base datos
include "conexion.php";
mysqli_set_charset($conexion,'utf8');

//declaracion de varibales para formulario

$usuario = $_POST['nombre_usuario'];

$buscarUsuario = "SELECT * FROM usuarios where nombre_usuario = '$usuario'";

$result = $conexion -> query($buscarUsuario);
$count = mysqli_num_rows($result);

if($count == 1 ){
    mysqli_query($conexion, "UPDATE usuarios SET
        nombre = '$_POST[usuario]',
        direccion = '$_POST[direccion]',
        telefono = '$_POST[telefono]',
        correo = '$_POST[correo]',
        nombre_usuario = '$_POST[nombre_usuario]',
        password = '$_POST[password]'
        WHERE nombre_usuario = $usuario");
    
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
        echo "<h1 class='title'>Se Actualizó Exitosamente El Usuario: </h1>";
        echo "<br>";
        echo "<h2 class='title'>$usuario</h2>";
        echo "<br>";
        echo "<button class='back'><a href='index.html'>Volver al Inicio</a></button>";
        echo "</div>";
        echo "</div>";
        echo "</body>";
        echo "</html>";
}else{
    mysqli_query($conexion, "INSERT INTO usuarios (
    nombre,
    direccion,
    telefono,
    correo,
    nombre_usuario,
    password)
        VALUES(
    '$_POST[usuario]',
    '$_POST[direccion]',
    '$_POST[telefono]',
    '$_POST[correo]',
    '$_POST[nombre_usuario]',
    '$_POST[password]'        
    )");

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
    echo "<h1 class='title'>Usuario Creado Exitosamente!</h1>";
    echo "<br>";
    echo "<h2 class='title'>Te Damos La Bienvenida $usuario</h2>";
    echo "<br>";
    echo "<button class='back'><a href='index.html'>Volver al Inicio</a></button>";
    echo "</div>";
    echo "</div>";
    echo "</body>";
    echo "</html>";
}
?>