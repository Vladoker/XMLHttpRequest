<?php
$newFile = "../../" . $_POST["name"] . ".html"; // получаем названия от пользователя и дописываем расширения и путь

if(file_exists($newFile)) {
header("HTTP/1.0 400 Bad Request"); //Отправка пользователю ошибку

} else {
    fopen($newFile, "w");// записывает файл в каталог 
    echo $_POST["name"] . ".html";
}

?>