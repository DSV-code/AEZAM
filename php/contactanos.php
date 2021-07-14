<?php
    //conectarnos con el servidor
    // $conectar=mysqli_connect('localhost','root','');
    // $conectar=mysqli_connect('127.0.0.1','root','');
    $conectar=mysqli_connect('sql10.freesqldatabase.com','sql10424863','81UUNY8n12');
    //verificamos la conexion
    if(!$conectar){
        echo"No se pudo conectar con el servidor";
    }else{
        // $base=$conectar->select_db('prueba');
        $base=$conectar->select_db('sql10424863');
        if(!$base){
            echo"No se encontro la base de datos";
        }
    }
    //recuperas las variables del formulario
    $nombre=$_POST['nombre'];
    $correo=$_POST['correo'];
    //hacemos la sentencia de sql
    $sql="INSERT INTO datos2 VALUES('$nombre', '$correo')";
    // $sql= "INSERT INTO `datos` (`nombre`, `correo`, `asunto`) VALUES ('l', 'l', 'l')";
    //ejecutamos la sentencia sql
    $ejecutar=$conectar->query($sql);
    //verificamos la ejecucion
    if(!$ejecutar){
        echo"Hubo un error";
    }else{
        echo"Datos guardados correctamente <br><a href='../index.html'>Volver</a>";
    }
?>