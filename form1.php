<?php

$nombre1 = $_POST['nombre1'];
$apellido1 = $_POST['apellido1'];
$correo1 = $_POST['correo1'];
$telefono1 = $_POST['telefono1'];
$mensaje1 = $_POST['mensaje1'];

$mensaje = "Este mensaje fue enviado por " . $nombre1 . "\r\n";
$mensaje .= "Su correo es: " . $correo1 . "\r\n";
$mensaje .= "Mensaje: " . $mensaje1 . "\r\n";

$para = 'alejandro.daniele88@gmail.com';
$asunto = 'Consulta';

mail($para, $asunto, utf8_decode($mensaje1), $header);

header('location:index.html');

?>