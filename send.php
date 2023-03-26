<?php

include "conn.php";

$first_name = $last_name = $email = $number = $company = $link = $message ='';
$errors = array('first_name' => '', 'last_name' => '', 'email' => '', 'number' => '', 'company' => '', 'link' => '', 'message' => '');



// the path to store the uploaded image


if (isset($_POST['submit'])) {


    $first_name = mysqli_real_escape_string($conn, $_POST['first_name']);
    $last_name = mysqli_real_escape_string($conn, $_POST['last_name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $number = mysqli_real_escape_string($conn, $_POST['number']);
    $company = mysqli_real_escape_string($conn, $_POST['company']);
    $link = mysqli_real_escape_string($conn, $_POST['link']);
    $message  = mysqli_real_escape_string($conn, $_POST['message']);

    



    // create sql
    $sql = "INSERT INTO forms(first_name,last_name,email,number,company,link,message) 
    VALUES('$first_name','$last_name','$email',$number,'$company','$link','$message')";

    // save to db and check

    $result = mysqli_query($conn, $sql);


    if ($result) {
        header("Location: thank/thank.php");
    } else {
        header("Location: index.php");
    }




    // Now lets move the uploaded image into the folder: images
    // move_uploaded_file($_FILES['image']['tmp_name'], $target);
      

    // Now lets move the uploaded image into the folder: images
    // if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
    //     header("Location: thank_you.php");
    // } else {
    //     header("Location: home.php");
    // }
} // end POST check