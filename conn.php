<?php 
// Local server connection

//connect to database
$conn = mysqli_connect('localhost', 'afoakwa', '123', 'afqode');

// check connection
if(!$conn){
    echo 'Connection error: ' . mysqli_connect_error();
}










