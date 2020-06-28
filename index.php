<?php 

function redirect($url) {
    echo "http://localhost/rael/rael-avp1/?url={$url}";
}

include "includes/cabecalho.php";

$url = (isset($_GET['url'])) ? $_GET['url'] : null;

if (isset($url)) {
    if(file_exists("paginas/{$url}.php")) {
        include "paginas/{$url}.php";
    } else {
        include "paginas/erro.php";
    }
} else {
  include "paginas/index.php";
}

include "includes/rodape.php";

?>