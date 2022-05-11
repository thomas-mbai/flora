<?php
require_once("db.php");
class settings extends db{

    public function saveemailconfiguration($emailaddress,$emailpassword,$smtpserver,$smtpport,$usessl){
        $sql="CALL spsaveemailconfiguration('{$emailaddress}','{$emailpassword}','{$smtpserver}',{$smtpport},{$usessl})";
        $this->getData($sql);
        return"success";
    }

    public function getemailconfiguration(){
        $sql="CALL spgetemailconfiguration()";
        return $this->getJSON($sql);
    }

    public function savesmsconfiguration($senderid,$username,$apikey){
        $sql="CALL spsavesmsconfiguration('{$senderid}','{$username}','{$apikey}')";
        $this->getData($sql);
        return "success";
    }

    public function getsmsconfiguration(){
        $sql="CALL spgetsmsconfiguration()";
        return $this->getJSON($sql);
    }

    public function getsmsconfigurationasobject(){
        $sql="CALL spgetsmsconfiguration()";
        return $this->getData($sql);
    }

    public function getemailconfigurationasobject(){
        $sql="CALL spgetemailconfiguration()";
        return $this->getData($sql);
    }

    public function saveflowervariety($id,$varietyname,$bucketcapacity,$measureheadsize){
        if(!$this->checkflowervariety($id,$varietyname)){
            $sql="CALL spsaveflowervariety({$id},'{$varietyname}',{$bucketcapacity},{$measureheadsize},{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }else{
            return "exists";
        }

    }

    public function checkflowervariety($id,$name){
        $sql="CALL spcheckflowervariety({$id},'{$name}')";
        $rst=$this->getData($sql);
        return $rst->rowCount()?true:false;
    }

    public function getflowervarieties(){
        $sql="CALL spgetflowervarieties()";
        return $this->getJSON($sql);
    }

    public function checkflowerrejectreason($id,$name){
        $sql="CALL spcheckflowerrejectreason({$id},'{$name}')";
        $rst=$this->getData($sql);
        return $rst->rowCount()?true:false;
    }

    public function saveflowerrejectreason($id,$name){
        if(!$this->checkflowerrejectreason($id,$name)){
            $sql="CALL spsaveflowerrejectreason({$id},'{$name}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }else{
            return "exists";
        }
    }

    public function getflowerrejectreasons(){
        $sql="CALL spgetflowerrejectreasons()";
        return $this->getJSON($sql);
    }

    public function checkflowerunit($id,$unitname){
        $sql="CALL spcheckflowerunit({$id},'{$unitname}')";
        $rst=$this->getData($sql);
        return $rst->rowCount()?true:false;
    }

    public function saveflowerunit($id,$unitname,$acreage){
        if(!$this->checkflowerunit($id,$unitname)){
            $sql="CALL spsaveflowerunit({$id},'{$unitname}',{$acreage},{$_SESSION['userid']})";
            $rst=$this->getData($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                return $row['unitid'];
            }
        }else{
            return "exists";
        }
    }

    public function getflowerunits(){
        $sql="CALL spgetflowerunits()";
        return $this->getJSON($sql);
    }

    public function checkdepartment($departmentid,$departmentname){
        $sql="CALL spcheckdepartment({$departmentid},'{$departmentname}')";
        $rst=$this->getData($sql);
        return $rst->rowCount()?true:false;
    }

    public function savedepartment($departmentid,$departmentname){
        if(!$this->checkdepartment($departmentid,$departmentname)){
            $sql="CALL spsavedepartment({$departmentid},'{$departmentname}',{$_SESSION['userid']})";
            $this->getData($sql);
            return "success";
        }else{
            return "exists";
        }
    }

    public function getdepartments(){
        $sql="CALL spgetdepartments()";
        return $this->getJSON($sql);
    }

    public function getsystemmodules(){
        $sql="CALL spgetsystemmodules()";
        return $this->getJSON($sql);
    }

    public function getstemlength(){
        $sql="CALL spgetstemlength()";
        return $this->getJSON($sql);
    }

    public function getvarietydetails($varietyid){
        $sql="CALL spgetvarietydetails({$varietyid})";
        return $this->getJSON($sql);
    }

    public function savetempunitflowervariety($refno,$unitid,$varietyid){
        $sql="CALL spsavetempunitvarieties('{$refno}',{$unitid},{$varietyid})";
        $this->getData($sql);
        return "success";
    }

    public function saveunitflowervariety($refno,$unitid){
        $sql="CALL spsaveunitvarieties('{$refno}',{$unitid})";
        $this->getData($sql);
        return "success";
    }

    public function getunitvarieties($unitid){
        $sql="CALL spgetunitvarieties({$unitid})";
        return $this->getJSON($sql);
    }

    public function getshift(){
        $sql="CALL spgetshift()";
        return $this->getJSON($sql);
    }

    public function getbunchers(){
        $sql="CALL spgetbunchers()";
        return $this->getJSON($sql);
    }

    public function getflowerheadsizes(){
        $sql="CALL spgetheadsizes()";
        return $this->getJSON($sql);
    }

    public function getbunchingsizes($standard){
        $sql="CALL spgetbunchingsizes('{$standard}')";
        return $this->getJSON($sql);
    }

    public function getpackagingsizes(){
        $sql="CALL spgetpackagingsize()";
        return $this->getJSON($sql);
    }

    public function gettagstatus($taglabel){
        $sql="CALL spgettagstatus('{$taglabel}')";
        return $this->getJSON($sql);
    }

    public function gettagdetails($taglabel){
        $sql="CALL spgettagdetails('{$taglabel}')";
        return $this->getJSON($sql);
    }

    public function getharvesters(){
        $sql="CALL spgetharvesters()";
        return $this->getJSON($sql);
    }

    public function getflowerunitdetails($id){
        $sql="CALL spgetunitdetails({$id})";
        return $this->getJSON($sql);
    }

    public function checktagstatus($tag){
        $sql="CALL spchecktagstatus('{$tag}')";
        $rst= $this->getData($sql);
        $response=new stdClass();
        $response->status=$rst->rowCount()?"used":"available";
        return json_encode([$response]);
    }
}
?>