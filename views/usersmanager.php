<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>User Profile</title>
</head>

<body>
    <div class="wrapper">
        <?php require_once("sidebar.txt") ?>
        <div class="main-panel">
             <?php require_once("navbar.txt") ?>
            <div class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <!-- Users Forms start Here -->
                            <div class="row">
                                <div class="col-md-3 col-xs-12 col-sm-12 mt-1">
                                    <section class=" ">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-md-12 text-center ">
                                                    <nav class="nav-justified ">
                                                    <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                                        <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Users</a>
                                                        <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Roles</a>
                                                    </div>
                                                    </nav>
                                                    <div class="tab-content text-left" id="nav-tabContent">
                                                        <div class="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
                                                                <div class="pt-3"></div>
                                                                <div class="form-group">
                                                                    <label for="userslist">User</label>
                                                                    <select name="userslist" id="userslist" class='form-control form-control-sm mb-2'></select>
                                                                    <button class="btn btn-secondary btn-sm" id="changestatusbutton">Disable</button>
                                                                    <button class="btn btn-danger btn-sm" id="changepasswordbutton">Reset Password</button>
                                                                    <div id="userroles" class="mt-3">
                                                                        <p class='font-weight-bold'>Assigned Roles:</p>
                                                                        <div id="userroleslist">
                                                                            <!-- <div class='alert alert-info' role='alert'><i class='fas fa-info-circle fa-lg'></i> No roles defined currently.</div> -->
                                                                        </div>
                                                                    </div>

                                                                    <div id="useroutlets" class="mt-2">
                                                                        <p class='font-weight-bold'>Assigned Units:</p>
                                                                        <div id="useroutletslist">
                                                                            <!-- <div class='alert alert-info' role='alert'><i class='fas fa-info-circle fa-lg'></i> No outlets defined currently.</div>-->
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            
                                                            </div>
                                                        <div class="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                                                            <div class="pt-3"></div>
                                                            <div id="roles" class="roles"></div>
                                                            <div class="roleusers mt-3" id="roleusers"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                
                                <div class="col-md-8 col-xs-12 col-sm-12">
                                    <div id="userdetails" class="mt-2">
                                        <div class="card containergroup">
                                            <div class="card-header">
                                                <h5>User Details</h5>
                                            </div>
                                            <div class="card-body">
                                                <div id="errordiv"></div>
                                                <div class="row"> 
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <input type="hidden" id="userid" value="0">
                                                            <input type="hidden" id="accountactive" value="0">
                                                            <label for="username">Username:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-user fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="text" name="username" id="username" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="firstname">First Name:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-user-tie  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="text" name="firstname" id="firstname" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div> 
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="lastname">Last Name:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-user-tie  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="text" name="lastname" id="lastname" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div>   
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="middlename">Department:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="far fa-building  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <select name="department" id="department" class="form-control  form-control-sm"></select>
                                                            </div>  
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="password">Password:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-key  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="password" name="password" id="password" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div>  
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="confirmpassword">Confirm Password:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-key  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="password" name="confirmpassword" id="confirmpassword" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div>
                                                        
                                                        </div>      
                                                    </div>
                                                    
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="email">Email:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-envelope  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="email" name="email" id="email" class="form-control  form-control-sm"  autocomplete="off">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="form-group">
                                                            <label for="mobile">Mobile:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="fas fa-phone  fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="number" name="mobile" id="mobile" class="form-control  form-control-sm"  autocomplete="off"> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="check-group">
                                                            <input type="checkbox" class="check-control" id="systemadmin" name="systemadmin">
                                                            <label for="systemadmin" class="check-label">System Administrator</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="check-group">
                                                            <input type="checkbox" class="check-control" id="changepasswordonlogon" name="changepasswordonlogon">
                                                            <label for="changepasswordonlogon" class="check-label">Change password</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                        <div class="check-group">
                                                            <input type="checkbox" class="check-control" id="accountexpires" name="accountexpires">
                                                            <label for="accountexpires" class="check-label">Account Expires</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-xs-12 col-sm-12">
                                                    <div class="form-group">
                                                            <label for="mobile">Account Expires On:</label>
                                                            <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                    <span class="input-group-text"><i class="far fa-clock fa-sm fa-fw"></i></span>
                                                                </div>
                                                                <input type="text" name="accountexpireson " id="accountexpireson" class="form-control  form-control-sm"  autocomplete="off"> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col btn-group mt-2 btn-group-toggle" id="filterprivileges" data-toggle="buttons">
                                            
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col" id="userprivileges">  

                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-4 col-xs-12 col-sm-12 mb-2">
                                                <div class="check-group">
                                                    <input type="checkbox" class="check-control" id="selectalluserprivileges" name="selectalluserprivileges">
                                                    <label for="selectalluserprivileges" class="check-label">Select All</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8 col-xs-12 col-sm-12">
                                                <button class='btn btn-secondary btn-sm' id='saveuser'><i class="fas fa-save fa-lg"></i> Save User</button>
                                                <button class='btn btn-danger btn-sm' id='clearuser'><i class="fas fa-eraser fa-lg"></i> Clear Fields</button>
                                                <button class='btn btn-success btn-sm' id='adduserrole' data-toggle='modal' data-target='#userrolesadd'><i class="fas fa-plus-circle fa-lg"></i> Attach Role</button>
                                                <button class='btn btn-success btn-sm' id='adduseroutlet' data-toggle='modal' data-target='#useroutletsadd'><i class="fas fa-plus-circle fa-lg"></i> Attach Unit</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="roledetails" class="mt-2">
                                    <div class="row">
                                        <div class="col">
                                            <div class="card containergroup">
                                                <div class="card-header">
                                                    <h5>Role Details</h5>
                                                </div>
                                                <div class="card-body">
                                                    <div id="roleerrors" class="roleerrors"></div>
                                                    <div class="row">
                                                        <div class="col">
                                                            <div class="control-group">
                                                                <input type="hidden" id="roleid" name="roleid" value="0">
                                                                <label for="rolename">Role Name</label>
                                                                <input type="text" id="rolename" name="rolename" class='form-control form-control-sm'  autocomplete="off">
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="control-group">
                                                                <label for="roledescription">Role Description</label>
                                                                <input type="text" id="roledescription" name="roledescription" class='form-control form-control-sm'  autocomplete="off">
                                                                <p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col btn-group mt-2 btn-group-toggle" id="filterroleprivileges" data-toggle="buttons">
                                        
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col" id="roleprivileges" class="mt-2">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-md-2 mb-2">
                                            <div class="check-group">
                                                <input type="checkbox" class="check-control" id="selectallroleprivileges" name="selectallroleprivileges">
                                                <label for="selectallroleprivileges" class="check-label">Select All</label>
                                            </div>
                                        </div>
                                        <div class="col mb-2">
                                            <button class='btn btn-secondary btn-sm' id="saverole"><i class="fas fa-save fa-lg"> </i> Save Role</button>
                                            <button class='btn btn-danger btn-sm' id='deleterole'><i class="fas fa-times-circle fa-lg"></i> Delete Role</button>
                                            <button class='btn btn-info btn-sm' id='clearrole'><i class="fas fa-eraser fa-lg"></i> Clear Form</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade alert-dismissable fade" id="userrolesadd">
                                    <div class="modal-dialog">
                                        <div class="modal-content" id="heldsalesdetails">
                                            <div class="modal-header">
                                                <h5  class="modal-title" >Select Role(s) to add ...</h5>
                                                <button type="button" class="close" data-dismiss="modal">
                                                    <span>&times;</span>
                                                </button>
                                            </div> <!-- -->
                                            <div class="modal-body" id="">
                                                <div id="userroleerrors"></div>
                                                <div id="usernonroles"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary btn-sm" id="saveuserrole" >Save Roles</button>
                                                <button type="button" class="btn btn-danger btn-sm" id="cancelsaveuserrole" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade alert-dismissable fade" id="useroutletsadd">
                                    <div class="modal-dialog">
                                        <div class="modal-content" id="heldsalesdetails">
                                            <div class="modal-header">
                                                <h6 class="modal-title">Select Unit(s)</h6>
                                                <button type="button" class="close" data-dismiss="modal">
                                                    <span>&times;</span>
                                                </button>
                                            </div> <!-- -->
                                            <div class="modal-body" id="">
                                                <div id="useroutleterrors"></div>
                                                <div id="usernonoutlets"></div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary btn-sm" id="saveuseroutlet" >Save Unit(s)</button>
                                                <button type="button" class="btn btn-danger btn-sm" id="cancelsaveuseroutlet" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            <!-- Users Forms end Here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<?php require_once("footer.txt") ?>
<script src="../js/usersmanager.js"></script>
</html>
