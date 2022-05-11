<?php
    require 'db.php';

    class User extends db{

        public function checkUser($userid,$field,$searchvalue){ 
            $sql="CALL spcheckuser({$userid},'{$field}','{$searchvalue}')";
            $rst=$this->getData($sql);   
            if($rst->rowCount()){
                return true;
            }else{
                return false;
            }         
        }

        public function saveUser($userid,$username,$password,$firstname,$lastname,$mobile,$email,$systemadmin,$accountactive,$changepasswordonlogon,$accountexpires,$accountexpireson,$departmentid){
            // check username
            if($this->checkUser($userid,'username',$username)){
                return "Sorry, Username already in use.";
            }else if ($this->checkUser($userid,'email',$email)){
               //check email 
                return "Sorry, Email address already in use.";
            }else if ($this->checkUser($userid,'mobile',$mobile)){
                // check mobile
                return "Sorry, Mobile Phone Number already in use.";
            }else{
                $sql="CALL  spsaveuser({$userid},'{$username}','{$password}','{$mobile}','{$email}','{$firstname}','{$lastname}',{$systemadmin},{$changepasswordonlogon},{$accountexpires},'{$accountexpireson}',{$departmentid},{$accountactive},{$_SESSION['userid']})";
                //echo $sql."<br/>";
                $rst=$this->getData($sql);   
                //echo $sql."<br/>";
                $row=$rst->fetch(PDO::FETCH_ASSOC);
                return $row['userid'];
            }
        }
    
        public function getUserNameFromId($id){
            $sql="CALL spgetuserdetails ('userid',{$id})";
            //echo $sql;
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                return $row['username'];
            }else{
                return '';
            }
        }

        public function getUserEmail($id){
            $sql="CALL spgetuserdetails ('userid',{$id})";
            //echo $sql;
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                return $row['email'];
            }else{
                return '';
            }
        }

        public function getUserIdFromUserName($username){
            $sql="CALL spgetuserdetails ('username','{$username}')";
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                return $row['userid'];
            }
        }

        public function validateLoginDetails($username,$password){
           $sql="CALL spgetuserdetails ('username','{$username}')";
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()>0){
                while ($row = $rst->fetch()) {
                    if($row['password'] == md5($password)){
                        return "ok";
                    }else{
                        return "invalid password";
                    }
                }
            }else{
                return "invalid username";
            }
		}
        

        public function checkUserAccount($id,$username){
           $sql="CALL spcheckuser ({$id},'{$username}')";
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                return true;
            }else{
                return false;
            }
        }

        public function disableUserAccount($id,$reason){
            $sql="CALL spchangeuseraccountstatus ({$id},'disable','{$reason}')";
            $rst=$this->connect()->query($sql);
            return "success";
        }

        public function enableUserAccount($id){
            $sql="CALL spchangeuseraccountstatus ({$id},'enable','')";
            $rst=$this->connect()->query($sql);
            return "success";
        }

        public function changeUserPassword($id,$oldpassword,$newpassword,$changepasswordonlogon){
            $username=$this->getUserNameFromId($id);
            // echo $this->validateLoginDetails($username,$password);
            if($this->validateLoginDetails($username,$oldpassword)=="ok"){
                $newpassword=md5($newpassword);
                $sql="CALL spchangeuserpassword ({$id},'{$newpassword}',{$changepasswordonlogon})";
                $rst=$this->connect()->query($sql);
                return "Success";
            }else{
                return "Incorrect <strong>Old Password</strong>, correct then try again";
            }
            
        }

        public function logUserIn($username,$password){
            $sql="CALL spgetuserdetails ('username','{$username}')";
            //echo $sql."<br/>";
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                $row = $rst->fetch();
                //while ($row == $rst->fetch()) {
                    if($row['accountexpired']==0){
                        if($row['password'] === md5($password)){
                            if($row['accountactive']==true){
                                if($row['changepasswordonlogon']==true){
                                    $_SESSION['userid']=$row['userid'];
                                    return "change password";
                                    $_SESSION['username']=$row['firstname'].' '.$row['lastname'];
                                }else{
                                    $_SESSION['userid']=$row['userid'];
                                    $_SESSION['username']=$row['firstname'].' '.$row['lastname'];
                                    return "success";
                                }
                                
                            }else{
                                return "account inactive";
                            } 
                        }else{
                            return "invalid credentials";
                        }
                    }else{
                        return "account expired";
                    } 
                //}
            }else{
                return "invalid credentials";
            }
        }

        public function logUserOut(){
            session_destroy();
        }

        public function getUsers(){
            $sql="CALL spgetallusers()";
            echo $this->getJSON($sql);
        }

        public function getUserDetails($userid){
            //$username=$this->getUserNameFromId($userid);
            $sql="CALL spgetuserdetails('userid',{$userid})";
            echo $this->getJSON($sql);
        }

        public function getLoggedInUserName(){
            //if(isset($_SESSION['username'])){
                echo json_encode($_SESSION['username']); 
           // }
        }

        public function getloggedinUserId(){
            //if(isset($_SESSION['userid'])){
                echo json_encode($_SESSION['userid']); 
           // }
        }
        public function logoffUser(){
            session_unset();
        }

        public function saveUserPrivilege($refno,$userid,$objectid){
            $sql="CALL spsaveprivileges ('{$refno}','user',{$userid},{$objectid},{$_SESSION['userid']})";
            $rst=$this->connect()->query($sql); 
        }

        public function checkUserPrivilege($objectid){
            $userid=$_SESSION['userid'];
            $sql="CALL spvalidateuserprivilege({$userid},{$objectid})";
            $rst=$this->connect()->query($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                if ($row['valid']==1){
                    echo 1;
                }
            }else{
                echo 0;
            }
        }

        /*public function getUsersList(){
            $sql="CALL spgetallusers()";
            return $this->getJSON($sql);
        }*/

        public function getUsersList($status){
            $sql="CALL spgetallusers('{$status}')";
            return $this->getJSON($sql);
        }

        public function getUserRoles($userid){
            $sql="CALL spgetuserroles('current',{$userid})";
            return $this->getJSON($sql);
        }

        public function getObjects(){
            $sql="CALL spgetobjects()";
            return $this->getJSON($sql);
        }

        public function getRoles(){
            $sql="CALL spgetroles()";
            echo $this->getJSON($sql);
        }

        public function getRoleUsers($roleid){
            $sql="CALL spgetroleusers({$roleid})";
            echo $this->getJSON($sql);
        }

        public function getRoleDetails($roleid){
            $sql="CALL spgetroledetails({$roleid})";
            echo $this->getJSON($sql);
        }

        public function getRolePrivileges($roleid){
            $sql="CALL spgetroleprivileges({$roleid})";
            echo $this->getJSON($sql);
        }

        public function getUserNonRoles($userid){
            $sql="CALL spgetnonuserroles({$userid})";
            echo $this->getJSON($sql);
        }

        public function removeUserRole($userid,$roleid){
            $sql="CALL spremoveuserrole({$userid},{$roleid})";
            return $this->getData($sql);
        }

        public function  getUserPrivileges($userid){
            $sql="CALL spgetuserprivileges({$userid})";
            return $this->getJSON($sql);
        }

        public  function getUsernameFromUserId($userid){
            $sql="CALL spgetuserdetails('userid',{$userid})";
            echo $sql."<br/>";
            $rst=$this->getData($sql);
            if($rst->rowCount()){
                $row=$rst->fetch();
                return $row['username'];
            }else{
                return '';
            }
        }

        public function saveTempPrivileges($category,$refno,$id,$objectid,$valid){
            // id is either userid or role id
            $sql="CALL spsavetempprivilege('{$category}','{$refno}',{$id},{$objectid},{$valid})";
           // echo $sql."<br/>";
            $rst=$this->getData($sql);
            if($rst){
                return 'success';
            }
        }

        public function checkRole($roleid,$rolename){
            $sql="CALL spcheckrole({$roleid},'{$rolename}')";
            $rst=$this->getData($sql);
            if($rst->rowCount()){
                return true;
            }else{
                return false;
            }     
        }

        public function savePrivileges($refno,$userid,$category){
            // category is either user or role
            $sql="CALL spsaveprivileges('{$refno}','{$category}',{$userid},{$_SESSION['userid']})";
            //echo $sql."<br/>";
            $rst=$this->getData($sql);
            return "Success";
        }
        
        public function saveRole($roleid,$rolename,$roledescription){
            if($this-> checkRole($roleid,$rolename)){
                return "Sorry, the role is already defined in the system.";
            }else{
                 $sql="CALL spsaverole({$roleid},'{$rolename}','{$roledescription}',{$_SESSION['userid']})";
                 //echo $sql;
                 $rst=$this->getData($sql);
                 //if($rst->rowCount()){
                 $row=$rst->fetch(PDO::FETCH_ASSOC);
                 return $row['roleid'];
            }
        } 

        public function resetUserPassword($id,$newpassword){
            $newpassword=md5($newpassword);
            $sql="CALL spchangeuserpassword ({$id},'{$newpassword}',1)";
            $rst=$this->connect()->query($sql);
            return "success";
        }

        public function addUserToRole($userid,$roleid){
            $sql="CALL spsaveroleuser({$userid},{$roleid},{$_SESSION['userid']})";
            //echo $sql."<br/>";
            $rst=$this->getData($sql);
            if($rst){
                return "success";
            }
        }

        public function getUserUnits($userid,$state){
            $sql="CALL spgetuserunits({$userid},'{$state}')";
            return $this->getJSON($sql);
        }

        public function getdrivers(){
            $sql="CALL spgetdrivers()";
            return $this->getJSON($sql);
        }

       
    }
?>