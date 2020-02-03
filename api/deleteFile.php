<?php
    $array_name_file = "../" . $_POST["nameFile"] . ".html";

    $file_del = $_POST["nameFile"] != "index" && file_exists($array_name_file) ? unlink($array_name_file) : false;

    echo $file_del ? "Файл удалён" : "Файл не найден";
  
?>