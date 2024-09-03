<?php
$host_db = "localhost";
$user_db = "root";
$pass_db = "OmarBases2409Diego";
$db_name = "registros";
$tbl_name = "usuarios";

$conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

if ($conexion->connect_error){
    die("La conexión falló: " . $conexion->connect_error);
}
?>