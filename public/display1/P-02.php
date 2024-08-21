<!-- Write a Php program to demonstrate date function. -->

<?php
    date_default_timezone_set("Asia/Kolkata"); 
    $a = date("G"); 

    echo "Current hour is: $a<br>"; 

    if ($a >= 0 && $a <= 5) {
        echo "It's late night";
    } elseif ($a >= 6 && $a <= 11) {
        echo "Good morning";
    } elseif ($a >= 12 && $a <= 16) {
        echo "Good afternoon";
    } elseif ($a >= 17 && $a <= 23) {
        echo "Good evening";
    }

    echo "<br>";
    $b = date("l");
    echo "Today is $b";
?>
