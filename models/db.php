<?php 
    session_start();
    $sql='';
    class db{
        private $servername;
        private $username;
        private $password;
        private $dbname;
        private $charset;
              
        public function connect(){

            $this->servername="localhost";
            $this->username="root";
            $this->password="k@r1bun1";
            $this->charset="utf8mb4";
            $this->dbname="flora";
            
            try{
                $dsn="mysql:host=".$this->servername.";dbname=".$this->dbname.";charset=".$this->charset;
                $pdo=new PDO($dsn,$this->username,$this->password);
                $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                return $pdo;
            }catch(PDOException $e){
                echo "Connection failed: ".$e->getMessage();
            }
        }

        public function mySQLDate($date){
            $date = DateTime::createFromFormat('d-M-Y', $date);
            return $date->format('Y-m-d');
        }

        public function mySQLDateTime($date){
            $date=date_create($date);
            $date=date_format($date,"Y-m-d H:i:s");
            return $date;
        }


        public function getData($sql){
            return $this->connect()->query($sql);
        }

        public function getJSON($sql){
            $rst=$this->getData($sql);
            return json_encode($rst->fetchAll(PDO::FETCH_ASSOC));
        }

        public function randomNumber(){
            return mt_rand(1000,9999);
        }
    }
?>