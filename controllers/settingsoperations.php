<?php
require_once("../models/settings.php");
$settings=new settings;

if(isset($_POST['saveemailconfiguration'])){
    $emailaddress=$_POST['emailaddress'];
    $emailpassword=$_POST['password'];
    $smtpserver=$_POST['smtpserver'];
    $smtpport=$_POST['smtpport'];
    $usessl=$_POST['usessl'];
    echo $settings->saveemailconfiguration($emailaddress,$emailpassword,$smtpserver,$smtpport,$usessl);
}
if(isset($_GET['getemailconfiguration'])){
    echo $settings->getemailconfiguration();
}
if(isset($_POST['savesmsconfiguration'])){
    $senderid=$_POST['senderid'];
    $username=$_POST['username'];
    $apikey=$_POST['apikey'];
    echo $settings->savesmsconfiguration($senderid,$username,$apikey);
}
if(isset($_GET['getsmsconfiguration'])){
    echo $settings->getsmsconfiguration();
}
if(isset($_POST['saveflowervariety'])){
    $id=$_POST['id'];
    $varietyname=$_POST['varietyname'];
    $bucketcapacity=$_POST['bucketcapacity'];
    $measureheadsize=$_POST['measureheadsize'];
    echo $settings->saveflowervariety($id,$varietyname,$bucketcapacity,$measureheadsize);
}
if(isset($_GET['getflowervarieties'])){
    echo $settings->getflowervarieties();
}
if(isset($_POST['saveflowerrejectreason'])){
    $id=$_POST['rejectid'];
    $name=$_POST['rejectreason'];
    echo $settings->saveflowerrejectreason($id,$name);
}
if(isset($_GET['getflowerrejectreasons'])){
    echo $settings->getflowerrejectreasons();
}
if(isset($_POST['saveflowerunit'])){
    $id=$_POST['unitid'];
    $unitname=$_POST['unitname'];
    $acreage=$_POST['acreage'];
    $refno=mt_rand(1000,9999);
    $tableData = stripcslashes($_POST['TableData']);
    // Decode the JSON array
    $tableData = json_decode($tableData,TRUE);
    $unitid= $settings->saveflowerunit($id,$unitname,$acreage);
    if(is_numeric($unitid)){
        // save temp unit varieties
        foreach($tableData as $unitvariety){
            $varietyid=$unitvariety['varietyid'];
            $settings->savetempunitflowervariety($refno,$unitid,$varietyid);
        }
        // save varieties
        echo $settings->saveunitflowervariety($refno,$unitid);
    }else{
        echo $unitid;
    }

}
if(isset($_GET['getflowerunits'])){
    echo $settings->getflowerunits();
}
if(isset($_POST['savedepartment'])){
    $departmentid=$_POST['departmentid'];
    $departmentname=$_POST['departmentname'];
    echo $settings->savedepartment($departmentid,$departmentname);
}
if(isset($_GET['getdepartments'])){
    echo $settings->getdepartments();
}
if(isset($_GET['getsystemmodules'])){
    $settings->getsystemmodules();
}
if(isset($_GET['getstemlength'])){
    echo $settings->getstemlength();
}
if(isset($_GET['getvarietydetails'])){
    $varietyid=$_GET['varietyid'];
    echo $settings->getvarietydetails($varietyid);
}
if(isset($_GET['getunitvarieties'])){
    $unitid=$_GET['unitid'];
    echo $settings->getunitvarieties($unitid);
}
if(isset($_GET['getshift'])){
    echo $settings->getshift();
}
if(isset($_GET['getbunchers'])){
    echo $settings-> getbunchers();
}
if(isset($_GET['getflowerheadsizes'])){
    echo $settings->getflowerheadsizes();
}
if(isset($_GET['getbunchingsizes'])){
    if(!isset($_GET['standard'])){
        $standard='All';
    }else{
        $standard=$_GET['standard'];
    }
    
    echo $settings->getbunchingsizes($standard);
}
if(isset($_GET['getpackagingsizes'])){
    echo $settings->getpackagingsizes();
}
if(isset($_GET['gettagdetails'])){
    $taglabel=$_GET['taglabel'];
    echo $settings->gettagdetails($taglabel);
}
if(isset($_GET['gettagstatus'])){
    $taglabel=$_GET['taglabel'];
    echo $settings->gettagstatus($taglabel);
}
if(isset($_GET['getharvesters'])){
    echo $settings->getharvesters();
}
if(isset($_GET['getunitdetails'])){
    $id=$_GET['id'];
    echo $settings->getflowerunitdetails($id);
}
if(isset($_GET['checktagstatus'])){
    $tag=$_GET['tag'];
    echo $settings->checktagstatus($tag);
}
?>