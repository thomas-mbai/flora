<?php
    require_once("db.php");
    class report extends db{
       
        public function getheadsizestemwisereport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLdate($enddate);
            $sql="CALL spgetheadsizestemwisereport('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }

        public function getvarietystemwisereport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLDate($enddate);
            $sql="CALL spgetvarietystemwisereport('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }

        public function getrejectionreport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLDate($enddate);
            $sql="CALL spgetrejectionreport('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }

        public function getvarietydispatchreport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLDate($enddate);
            $sql="CALL spgetvarietydispatchreport('{$startdate}','{$enddate}')";
            return $this->getJSON($sql); 
        }

        public function getproductionreport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLdate($enddate);
            $sql="CALL `spgetproductionreport`('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }

        public function getrandomchecksreport($startdate,$enddate){
            $startdate=$this->mySQLDate($startdate);
            $enddate=$this->mySQLdate($enddate);
            $sql="CALL `spgetrandomchecksreport`('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }
    }
?>