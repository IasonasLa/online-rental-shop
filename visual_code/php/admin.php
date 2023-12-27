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
$name=$_POST['username'];
$pass=$_POST['password'];
if($name=='root' && $pass=='admin123'){
$sql="SELECT * FROM `client` WHERE 1";
$result=mysqli_query($conn,$sql);

echo "<table border='1'
<tr>
<td align=center><b>UserName</b></td>
<td align=center><b>Full Name</b></td>
<td align=center><b>Email</b></td>
";

while($data=mysqli_fetch_assoc($result)){

    echo"<tr>";
    echo"<td align=center>".$data['user']."</td>";
    echo"<td align=center>".$data['name']."</td>";
    echo"<td align=center>".$data['email']."</td>";
    echo"</tr>";

}
echo"</table>";
mysqli_close($conn);


}else{
echo "This is the admin area. Please try again";




}



}


    
?>