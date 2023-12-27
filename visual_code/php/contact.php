<?php
$host = "localhost";
$dbUsername= "root";
$dbPassword="";
$dbname="rentacardb";

$conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);
if(!$conn){
echo "there is a problem";



}else
{

$name = $_POST['fname'];
$tel = $_POST['tel'];
$sub =$_POST['sub'];
$email =$_POST['email'];
$mess =$_POST['mess'];


$sql= "INSERT INTO `message`(`name`, `phone`, `email`, `subject`, `message`) VALUES ('$name','$tel','$email','$sub','$mess')";
$insert=mysqli_query($conn,$sql);
if(!$insert){
echo"there are problems";


}else{


echo "Your message has been sent!";

}


}






?>