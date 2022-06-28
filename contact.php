<?php 

    $host="localhost";
    $port=3306;
    $dbname="formulaire";
    $user="root";
    $pwd="";
    
            try{
                $newBD= new PDO("mysql:host=$host;port=$port;dbname=$dbname",$user,$pwd);
                echo "Connexion etablie";
            }catch(PDOException $e){
                die("Erreur :" .$e->getMessage());
            }
            if (isset($_POST["prenom"])&&
                isset($_POST["nom"])&&
                isset($_POST["email"])&&
                isset($_POST["pays"])&&
                isset($_POST["com"])){
                            $insertion=$newBD->prepare("INSERT INTO profil VALUES(NULL,:prenom,:nom,:pays,:com)");
                        $insertion->bindValue(":prenom",$_POST["prenom"]);
                        $insertion->bindValue(":nom",$_POST["nom"]);
                        $insertion->bindValue(":email",$_POST["email"]);
                        $insertion->bindValue(":pays",$_POST["pays"]);
                        $insertion->bindValue(":com",$_POST["com"]);
                    $verification= $insertion->execute();
                        if ($verification) {
                            echo "<br>Insertion reussie";
                        }else{
                            echo "Echec d'insertion";
                        }
                
                
                }else{
                    echo "Une variable n'est pas declaree et ou est null ";
                }



?>