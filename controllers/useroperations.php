<?php 
    require_once("../models/user.php");
    require_once("../models/mail.php");

    $user=new user();
    $mail= new mail();

    if(isset($_POST['loginuser'])){
        $username=$_POST['username'];
        $password=$_POST['password'];
        echo ($user->logUserIn($username,$password));
        //echo json_encode($result);
    }
    if(isset($_GET['getuserdetails'])){
        $userid=$_GET['userid'];
        $user->getUserDetails('userid',$userid);
    }
    if(isset($_POST['deleteuser'])){
        $userid=$_POST['userid'];
        $user->deleteUser($userid);
    }
    if(isset($_GET['getloggedinusername'])){
        $user->getLoggedInUserName();
    }
    if(isset($_GET['getloggedinuserid'])){
        $user->getloggedinUserId();
    }
    if(isset($_GET['logout'])){
        $user->logoffUser();
        //redirect to the login page
        header('Location: ../index.php'); 
    }
    if(isset($_POST['saveuserprivileges'])){
        $pattern='::';
        $userid=$_POST['userid'];
        $privileges=explode(",",json_decode($_POST['privileges']));
        if(count($privileges)>0){
            // the array is not empty
            foreach($privileges as $privilege){
                //echo print_r(explode($pattern,$otherspare));
                $privilegedetail=explode($pattern,$privilege);
                $objectid=$privilegedetail[0];
                $valid=$privilegedetail[1];
                $user-> saveUserPrivilege($userid,$objectid,$valid);
            }
            echo "Success";
        }
    }

    if(isset($_POST['getuserprivilege'])){
        $objectid=$_POST['objectid'];
        $user->checkUserPrivilege($objectid);
    }

    if(isset($_GET['getuserslist'])){
        $status=!isset($_GET['status'])?'active':$_GET['status'];
        echo $user->getUsersList($status);
    }

    if(isset($_GET['getuserroles'])){
        $userid=$_GET['userid'];
        echo $user->getUserRoles($userid);
    }

    if(isset($_GET['getobjects'])){
        if(isset($_GET['moduleid'])){
            $moduleid=$_GET['moduleid'];
        }else{
            $moduleid='';
        }
        echo $user->getObjects($moduleid);
    }

    if(isset($_GET['getroles'])){
        $user->getRoles();
    }
 
    if(isset($_GET['getroleusers'])){
        $roleid=$_GET['roleid'];
        $user->getRoleUsers($roleid);
    }
 
    if(isset($_POST['saverole'])){
        $category='role';
        $roleid=$_POST['roleid'];
        $rolename=$_POST['rolename'];
        $roledescription=$_POST['roledescription'];
        $refno=mt_rand(1000,9999);
        $tableData = stripcslashes($_POST['TableData']);
        // Decode the JSON array
        $tableData = json_decode($tableData,TRUE);
        // save the role
        $roleid=$user->saveRole($roleid,$rolename,$roledescription);
        $category='role';
        if(is_numeric($roleid)){
             foreach($tableData as $roleprivilege){
                 $objectid=$roleprivilege['id'];
                 $valid=$roleprivilege['valid'];
                 $user->saveTempPrivileges($category,$refno,$roleid,$objectid,$valid);
             }
             echo $user->savePrivileges($refno,$roleid,$category);
        }else{
            echo $roleid;
        }
    }
 
    if(isset($_GET['getroledetails'])){
        $roleid=$_GET['roleid'];
        $user->getRoleDetails($roleid);
    }
 
    if(isset($_GET['getroleprivileges'])){
        $roleid=$_GET['roleid'];
        $user-> getRolePrivileges($roleid);
    }
    if(isset($_GET['getrolesforassignment'])){
        $user->getRolesForAssignment();
    }
    if(isset($_GET['getusernonroles'])){
        $userid=$_GET['userid'];
        $user->getUserNonRoles($userid);
    }
    if(isset($_POST['saveuserroles'])){
     $userid=$_POST['userid'];
     $tableData = stripcslashes($_POST['TableData']);
     // Decode the JSON array
     $tableData = json_decode($tableData,TRUE);
     foreach($tableData as $userrole){
         $roleid=$userrole['roleid'];
         $user->addUserToRole($userid,$roleid);
     }
     echo "success";
    }
    if(isset($_POST['removeuserrole'])){
        $userid=$_POST['userid'];
        $roleid=$_POST['roleid'];
        $user->removeUserRole($userid,$roleid);
    }

    if(isset($_GET['getusersdetails'])){
        $userid=$_GET['userid'];
        //$username=$user->getUsernameFromUserId($userid);
        echo $user->getUserDetails($userid);
    }

    if(isset($_GET['getuserprivileges'])){
        $userid=$_GET['userid'];
        echo $user->getUserPrivileges($userid);
    }
    if(isset($_POST['saveuser'])){
        $userid=$_POST['userid'];
        $username=$_POST['username'];
        $password=md5($_POST['password']);
        $email=$_POST['email'];
        $mobile=$_POST['mobile'];
        $firstname=$_POST['firstname'];
        $lastname=$_POST['lastname'];
        $systemadmin=$_POST['systemadmin'];
        $changepasswordonlogon=$_POST['changepasswordonlogon'];
        $accountactive=1;#$_POST['accountactive'];
        $accountexpires=$_POST['accountexpires'];
        $accountexpireson=$_POST['accountexpireson'];
        $departmentid=$_POST['departmentid'];
        $refno=mt_rand(1000,9999);
        $category='user';

        $tableData = stripcslashes($_POST['TableData']);
        // Decode the JSON array
        $tableData = json_decode($tableData,TRUE);
        // save the user and return user id
        $userid= $user->saveUser($userid,$username,$password,$firstname,$lastname,$mobile,$email,$systemadmin,$accountactive,$changepasswordonlogon,$accountexpires,$accountexpireson,$departmentid);
        //echo "The user id is: '".$userid."'<br/>";
        if(is_numeric($userid)){
            foreach($tableData as $userprivilege){
                $objectid=$userprivilege['id'];
                $valid=$userprivilege['valid'];
                $user->saveTempPrivileges($category,$refno,$userid,$objectid,$valid);
            }
            echo $user->savePrivileges($refno,$userid,$category);
        }else{
            echo $userid;
        } 
   }

   if(isset($_POST['resetuserpassword'])){
        $id=$_POST['id'];
        $password=$_POST['password'];
        // check if username was provided and change to userid
        if(!is_numeric($id)){
            $id=$user->getUserIdFromUserName($id);
        }
        if($password==""){
            $password=mt_rand(1000,9999);
        }
        if ($user->resetUserPassword($id,$password)=="success"){
            // send email
            // get the user's email
            // echo "The password is: ".$password."<br/>";
            $email=$user->getUserEmail($id);
            $message="Hello,<br/>Your password has been reset to <strong> ".$password."</strong><br>Please use this One-Time Password to access the system.<br/>You will be required to change your password to a new password upon Login.<br/> Kind Regards,<br/> Flora Password Manager";
            $sendemail=$mail->sendEmail($email,"OTP Password Reset",$message,"Password Manager");
            if($sendemail=="success"){
                echo "success";
            }else{
                echo $sendemail;
            }
        }else{
            // return error message
            echo "An errror occured during password reset.";
        }
    }
    if(isset($_POST['changepassword'])){
       $oldpassword=$_POST['oldpassword'];
       $newpassword=$_POST['newpassword'];
       $userid=$_SESSION['userid'];
       echo $user->changeUserPassword($userid,$oldpassword,$newpassword,0);
    }
    if(isset($_GET['getuserunits'])){
        $userid=$_GET['userid'];
        echo $user->getUserUnits($userid,'assigned');
    }
    if(isset($_GET['usernonunits'])){
        $userid=$_GET['userid'];
        echo $user->getUserUnits($userid,'non-assigned');
    }
    if(isset($_GET['getdrivers'])){
        echo $user->getdrivers();
    }
?>