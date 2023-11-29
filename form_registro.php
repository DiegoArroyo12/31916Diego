<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registrar Usuario</title>
    <meta charset = "utf-8">
    <link rel="stylesheet" href="style.css">
</head>

<script>
    function valida(e){
        tecla = (document.all) ? e.keyCode : e.which;
        //Tecla de retroceso para borrar, siempre la permite
        if (tecla==8){
            return true;
        }

        //patron de entrada, en este caso solo acepta número
        patron =/[0-9]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }
</script>

<body>
    <h1 class="title">Registro</h1>
    <br>
    <br>
    <br>
    <div class="main">
        <form action="submit_registro.php" method="post" class="form">
            <!--Nombre-->
            <div class="form-group">
                <input class="inputs" type="text" name="usuario" maxlength="255" required>
                <label class="labels" for="usuario">Nombre Completo</label>
            </div>
            <br>
            <!-- Dirección -->
            <div class="form-group">
                <input class="inputs" type="text" name="direccion" maxlength="255" required>
                <label class="labels" for="direccion">Dirección</label>
            </div>
            <br>
            <!-- Telefono -->
            <div class="form-group">
                <input class="inputs" type="text" onkeypress="return valida(event)" name="telefono" maxlength="15" required>
                <label class="labels" for="telefono">Teléfono</label>
            </div>
            <br>
            <!-- Email -->
            <div class="form-group">
                <input class="inputs" type="email" name="correo" maxlength="35" required>
                <label class="labels" for="correo">Correo</label>
            </div>
            <br>
            <!--Nombre_usuario-->
            <div class="form-group">
                <input class="inputs" type="text" name="nombre_usuario" maxlength="255" required>
                <label class="labels" for="nombre_usuario">Usuario</label>
            </div>
            <br>
            <!--Password-->
            <div class="form-group">
                <input class="inputs" type="password" name="password" maxlength="8" required>
                <label class="labels" for="password">Contraseña</label>
            </div>

            <div></div>
            <div class="banner">
                <button class="register">Registrarme</button>
                <button class="return"><a href="index.html">Regresar</a></button>
            </div>   
        </form>
    </div>
 </body>
</html>