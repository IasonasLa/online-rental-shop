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

$user = $_POST['user'];
$name = $_POST['fname'];
$email =$_POST['email'];


$sql= "INSERT INTO `client`(`user`, `name`, `email`) VALUES ('$user','$name','$email')";
$insert=mysqli_query($conn,$sql);
if(!$insert){
echo"there are problems,You might have already register in the Newsletter";


}else{


echo "You have beed registered";

}


}






?>