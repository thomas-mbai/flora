<?php
    require_once("db.php");
    class customer extends db{

        public function checkcustomer($id,$customername){
            $sql="CALL spcheckcustomer({$id},'{$customername}')";
            $rst=$this->getData($sql);
            return $rst->rowCount()?true:false;
        }

        public function savecustomer($id,$customername,$physicaladdress,$postaladdress,$telephone,$email){
            if($this->checkcustomer($id,$customername)){
                return "exists";
            }else{
                $sql="CALL spsavecustomers({$id},'{$customername}','{$physicaladdress}','{$postaladdress}','{$telephone}','{$email}',{$_SESSION['userid']})";
                //echo $sql."<br/>";
                $this->getData($sql);
                return "success";
            }
        }

        public function  getcustomers(){
            $sql="CALL spgetcustomers()";
            return $this->getJSON($sql);
        }

        public function getcustomerdetails($id){
            $sql="CALL spgetcustomerdetails({$id})";
            return $this->getJSON($sql);
        }

        public function savetempcustomerorder($refno,$varietyid,$stemlengthid,$headsize,$quantity,$packrate,$boxtype,$boxes){
            $sql="CALL spsavetempcustomerorderdetails('{$refno}',{$varietyid},{$stemlengthid},{$headsize},{$quantity},{$packrate},{$boxtype},{$boxes})";
            $this->getData($sql);
            return "success";
        }

        public function savecustomerorder($refno,$customerid,$orderno,$orderdate){
            $orderdate=$this->mySQLDate($orderdate);
            if($this->checkcustomerorderno($customerid,$orderno)){
                return "exists";
            }else{
                $sql="CALL spsavecustomerorder('{$refno}',{$customerid}, '{$orderno}','{$orderdate}',{$_SESSION['userid']})";
                $this->getData($sql);
                return "success";
            }

        }

        public function checkcustomerorderno($customerid,$orderno){
            $sql="CALL spcheckcustomerorderno({$customerid},'{$orderno}')";
            return $this->getData($sql)->rowCount()?true:false;
        }

        public function getcustomerorders($customerid){
            $sql="CALL spgetcustomerorders({$customerid})";
            return $this->getJSON($sql);
        }

        public function getdistinctcustomerorders($customerid){
            $sql="CALL spgetdistinctcustomerorders({$customerid})";
            return $this->getJSON($sql);
        }
    }
?>