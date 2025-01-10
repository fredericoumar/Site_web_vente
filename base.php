<?php
$serveur="l127.0.0.1";
$utilisateur="frederic";
$mot_de_passe="root";
$nom_de_la_base_de_donnee="basenumero1";


    try{
        $connexion =new PDO("mysql:host=127.0.0.1;dbname=basenumero1",frederic,root);
        $connexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
           echo "connexion reussie";
    }
            catch (PDOException $e){
                echo "echec de la connexion:"  . $e->getMessage();
            }



?>