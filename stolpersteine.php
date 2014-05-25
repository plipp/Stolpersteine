<?php
# see http://blog.edwards-research.com/2012/10/cross-domain-ajax-a-simple-workaround/
    $file = file_get_contents("http://www.berlin.de/ba-tempelhof-schoeneberg/derbezirk/simple-search-baukasten/index.php/index/all.json?q=");
    echo $file;
?>