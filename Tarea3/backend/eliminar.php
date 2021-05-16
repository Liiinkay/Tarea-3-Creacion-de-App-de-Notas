<?php
    header('Content-type: application/json');
    header('Access-Control-Allow-Origin:*');

    $json=file_get_contents('php://input');
    $data=json_decode($json);

    $contenido= file_get_contents("notas.json");
    $dataFile= json_decode($contenido);
    array_splice($dataFile,$data,1);
    file_put_contents("notas.json",json_encode($dataFile));
      
    $mensaje="Se elimino correctamente la nota";
    echo json_encode($mensaje);
?>