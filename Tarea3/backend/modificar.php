<?php
    header('Content-type: application/json');
    header('Access-Control-Allow-Origin:*');

    $json=file_get_contents('php://input');
    $data=json_decode($json);

    $dataIndex=$data[0]; // Esto no se hace, agregare IDS a las notas, sera mas facil
    $dataNota=$data[1];

    $contenido= file_get_contents("notas.json");
    $dataFile= json_decode($contenido);
    array_splice($dataFile,$dataIndex,1,$dataNota);
    file_put_contents("notas.json",json_encode($dataFile));
      
    $mensaje="Se modifico correctamente la nota";
    echo json_encode($mensaje);
?>