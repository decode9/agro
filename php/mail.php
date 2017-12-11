<?php


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if(isset($name) && isset($email) && isset($phone) && isset($message)){
    // Varios destinatarios
    $para  = 'jorgebastidas9@gmail.com'; // atención a la coma

    // título
    $título = 'Contacto Desde www.agroindustrialtrading.com';

    // mensaje
    $mensaje = '
    <html>
    <head>
      <title>Contancto Desde www.agroindustrialtrading.com</title>
    </head>
    <body>
      <p>El usuario '. $name .' Se ha contactado a traves de agroindustrialtrading.com</p>
      <table>
        <tr>
          <td>Nombre</td><td>'. $name .'</td>
        </tr>
        <tr>
          <td>Correo</td><td>'. $email .'</td>
        </tr>
        <tr>
          <td>Telefono</td><td>'. $phone .'</td>
        </tr>
        <tr>
          <td>Mensaje</td><td>'. $message .'</td>
        </tr>
      </table>
    </body>
    </html>
    ';

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    // Cabeceras adicionales
    $cabeceras .= 'To: Web Contact <jorgebastidas9@gmail.com>' . "\r\n";
    $cabeceras .= 'From: NoReply <noreply@agroindustrialtrading.com>' . "\r\n";


    // Enviarlo
    mail($para, $título, $mensaje, $cabeceras);

    $result = array('result' => 'Message Success');
    echo json_encode($result);
}
?>
