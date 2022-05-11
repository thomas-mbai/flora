<?php
    require_once("db.php");
    class transaction extends db{
        public function savetempcollectiondetails($refno,$unitid,$varietyid,$stemlength,$quantity,$driverid,$bucketcapacity,$fullbucket,$pickingdate,$collectiondate,$tagid,$harvesterid){
            /*echo $pickingdate."<br/>";
            echo $collectiondate."<br/>";*/
            $pickingdate=$this->mySQLDateTime($pickingdate);
            $collectiondate=$this->mySQLDateTime($collectiondate);
            $sql="CALL spsavetempcollection('{$refno}',{$unitid},{$varietyid},{$stemlength},{$quantity},{$driverid},{$bucketcapacity},{$fullbucket},'{$pickingdate}','{$collectiondate}',{$tagid},{$harvesterid})";
            $this->getData($sql);
            return "success";
        }

        public function savecollectiondetails($refno){
            // always assuming we are addiing new
            $id=0;
            $sql="CALL spsavecollection({$id},'{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function savetemprandomcheck($refno, $unitid,$varietyid,$stemlength,$reported,$verified){
            $sql="CALL spsavetemprandomchecks('{$refno}',{$unitid},{$varietyid},{$stemlength},{$reported},{$verified})";
            $this->getData($sql);
            return "success";
        }

        public function saverandomcheck($id,$unitid,$varietyid,$stemlength,$counted,$refno,$remarks,$receivingid){
            $sql="CALL spsaverandomchecks({$id},{$unitid},{$varietyid},{$stemlength},{$counted},'{$refno}',{$_SESSION['userid']},'{$remarks}',{$receivingid})";
            $this->getData($sql);
            return "success";
        }

        public function savetemprandomcheckverification($refno,$stemlength,$quantity){
            $sql="CALL spsavetemprandomcheckverification('{$refno}',{$stemlength},{$quantity})";
            $this->getData($sql);
            return "success";
        }

        public function savetemprandomcheckfaults($refno,$faultid,$quantity){
            $sql="CALL spsavetemprandomcheckfaults('{$refno}',{$faultid},{$quantity})";
            $this->getData($sql);
            return "success";
        }

        public function savequalitycontrolpassed($id,$varietyid,$bunchstyleid,$buncherid){
            $sql="CALL spsavequalitycontrolpassed({$id},{$varietyid},{$bunchstyleid},{$buncherid},{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function getqualitycontrolpassed($startdate,$enddate,$userid){
            $sql="CALL spgetqualitycontrolpassed('{$startdate}','{$enddate}',{$userid})";
            return $this->getJSON($sql);
        }

        public function getqualitycontroltally($startdate,$enddate){
            $sql="CALL spgetqualitycontroltally('{$startdate}','{$enddate}')";
            return $this->getJSON($sql);
        }

        public function savetempgradinghallinventory($refno,$varietyid,$stemlengthid,$quantity,$fullbucket,$bucketcapacity,$receivingid){
            $sql="CALL spsavetempgradinghallinventory('{$refno}',{$varietyid},{$stemlengthid},{$quantity},{$fullbucket},{$bucketcapacity},{$receivingid})";
            $this->getData($sql);
            return "success";
        }

        public function savegradinghallinventory($refno,$source,$narration){
            $sql="CALL spsavegradinghallinventory('{$refno}','{$source}','{$narration}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function savetempgradingreject($refno,$varietyid,$buncherid,$rejectid,$quantity){
            $sql="CALL spsavetempgradingreject('{$refno}',{$varietyid},{$buncherid},{$rejectid},{$quantity})";
            $this->getData($sql);
            return "success";
        }

        public function savegradingreject($refno){
            $sql="CALL spsavegradingreject('{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function savetempgradingstorageinventory($refno,$tag,$varietyid,$bunchingstyleid,$stemlengthid,$headsizeid,$quantity){
            $sql="CALL spsavetempgradingstorageinventory('{$refno}','{$tag}',{$varietyid},{$bunchingstyleid},{$stemlengthid},{$headsizeid},{$quantity})";
            $this->getData($sql);
            return "success";
        }

        public function savegradingstorageinventory($refno,$source,$narration){
            $sql="CALL spsavegradingstorageinventory('{$refno}','{$source}','{$narration}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function getcollectiondetailsbytag($tag){
            $sql="CALL spgetcollectiondetailsbytag('{$tag}')";
            return $this->getJSON($sql);
        }

        public function savetempreceivinginventory($refno,$driverid,$varietyid,$unitid,$stemlengthid,$tagid,$pickingdate,$collectiondate,$quantity,$fullbucket,$bucketcapacity){
            $collectiondate=$this->mySQLDateTime($collectiondate);
            $pickingdate=$this->mySQLDateTime($pickingdate);
            $sql="CALL spsavetempreceivinginventory('{$refno}',{$driverid},{$varietyid},{$unitid},{$stemlengthid},{$tagid},'{$pickingdate}','{$collectiondate}',{$quantity},{$fullbucket},{$bucketcapacity})";
            $this->getData($sql);
            return "success";
        }

        public function savereceivedinventory($refno){
            $sql="CALL spsavereceivinginventory('{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function getreceivedinventorybytag($tag){
            $sql="CALL spgetreceivedinventorybytag('{$tag}')";
            return $this->getJSON($sql);
        }

        public function savetemppackinglist($refno,$tagid,$customerid,$orderid,$varietyid,$packagesizeid,$stemlengthid,$bunchingstyleid,$headsizeid,$quantity,$weight){
            $sql="CALL spsavetemppackinglist('{$refno}',{$customerid},{$orderid},{$tagid},{$packagesizeid},{$bunchingstyleid},{$varietyid},{$stemlengthid},{$headsizeid},{$quantity},{$weight})";
             $this->getData($sql);
             return "success";
        }

        public function savepackinglist($refno){
            $sql="CALL spsavepackinglist('{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return"success";
        }

        public function getpackinglist($tag){
            $sql="CALL spgetpackinglist('{$tag}')";
            return $this->getJSON($sql);
        }

        public function savetempdispatch($refno,$packingid){
            $sql="CALL spsavetempdispatch('{$refno}',{$packingid})";
            $this->getData($sql);
            return "success";
        }

        public function savedispatch($refno){
            $sql="CALL spsavedispatch('{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        public function savetempdiscards($refno,$category,$varietyid,$stemlength,$headsize,$quantity,$reason){
            $sql="CALL spsavetempdiscards('{$refno}','{$category}',{$varietyid},{$stemlength},{$headsize},{$quantity},'{$reason}')";
            $this->getData($sql);
            return "success";
        }

        public function savediscards($refno){
            $sql="CALL spsavediscards('{$refno}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }

        function getbucketedgradedflowers($tag){
            $sql="CALL spgetbucketedgradedinventory('{$tag}')";
            return $this->getJSON($sql);
        }

        function savetempgradedunpackedbucket($refno,$id){
            $sql="CALL spsavegradedinventoryunpackbucket('{$refno}',{$id})";
            $this->getData($sql);
            return "success";
        }

        function savegradedunpackedbucket($refno){
            $sql="CALL spunpackgradedinventorybuckets('{$refno}')";
            $this->getData($sql);
            return "success";
        }

        function deletequalitycontrolpass($id){
            $sql="CALL `spdeletequalitycontrolpass`({$id})";
            $this->getData($sql);
            return "success";
        }
    }
?>