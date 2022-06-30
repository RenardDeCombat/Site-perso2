<title>Dashboard Admin</title>
<?php
session_start();
if(isset($_SESSION['username'])){
    $username = $_SESSION['username'];
}
else
{
    header("Location: login.php");
}
?>

<h1 class=h1>Dashboard Admin</h1>
<table>
    <tr>

        
        <td><strong>Nom</strong></td>
        <td><strong>Prénom</strong></td>
        <td><strong>Email</strong></td>
        <td><strong>Sujet</strong></td>
        <td><strong>Message</strong></td>
    </tr>

<?php
$user = "root";
$pass = "";
try {
    $dbh = new PDO('mysql:host=localhost;dbname=formulaire', $user, $pass);
    foreach($dbh->query('SELECT * FROM `profil`') as $row) {
        $row = array_map("utf8_encode", $row);

        $name = $row['nom'];
        $lastname = $row['prenom'];
        $mail = $row['email'];
        $sujet = $row['sujet'];
        $message = $row['com'];
        


        
        
        echo "<tr> 
        
        <td>$name</td>
        <td>$lastname</td>
        <td>$mail</td>
        <td>$sujet</td>
        <td>$message</td>
        
        
        <td><a href='#' id='delete'>Supprimer</a></td>
        </tr>";
    }
    $dbh = null;
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>
</table>
<div id=logoutbutton>
    <a href="logout.php" id="logout">Se déconnecter </a>
</div>