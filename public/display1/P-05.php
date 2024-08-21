<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program Five</title>
</head>
<body>
    <form action="" method="post">
        <div>
            Enter the loop number:
            <input type="number" name="lines" value="<?php echo $_POST["lines"] ?? ""; ?>" id="">
        </div>
        <div>
            Enter the symbol:
            <input type="text" name="symbol" value="<?php echo $_POST["symbol"] ?? ""; ?>" id="">
        </div>
        <input type="submit" value="submit" name="submit">
    </form>

 <?php

    if(isset($_POST['lines']) && isset($_POST['symbol'])){
        $lines = $_POST['lines'];
        $symbol = $_POST['symbol'];

        for($i=0;$i<$lines; $i++){
            echo str_repeat($symbol, $i + 1) . "<br>";
        }
    }

?>
</body>
</html>
