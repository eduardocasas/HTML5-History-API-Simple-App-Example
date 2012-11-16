<?php
$uri = explode('/', $_SERVER['REQUEST_URI']);
$view = end($uri);
if (empty($view) || $view === 'index.php') {
    header('location: index');
}
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>history Object Example</title>
        <script src="js/jquery.js"></script>
        <script src="js/file.js"></script>
    </head>
    <body>
        <nav>
        <?php include 'views/'.$view.'.html'; ?>
        </nav>
        <button id="previous">Previous</button>
        <button id="forward">Forward</button>
        <p>Number of pages in the history stack: <span><span></p>
    </body>
</html>
