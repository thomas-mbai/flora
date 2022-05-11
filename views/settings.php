<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once("header.txt") ?>
    <title>Settings</title>
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
                            <!-- Form -Start Here -->
                            <div class="col-md-12 text-center ">
                                <nav class="nav-justified ">
                                <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#flowervarieties" role="tab" aria-controls="flowervarieties" aria-selected="true">Flower Varieties</a>
                                    <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#rejectreasons" role="tab" aria-controls="rejectreasons" aria-selected="false">Reject Reasons</a>
                                    <a class="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#units" role="tab" aria-controls="units" aria-selected="false">Units</a>
                                    <a class="nav-item nav-link" id="pop4-tab" data-toggle="tab" href="#departments" role="tab" aria-controls="departments" aria-selected="false">Departments</a>
                                    <!--<a class="nav-item nav-link" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">MPESA</a>-->
                                    <a class="nav-item nav-link" id="pop5-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Email</a>
                                    <a class="nav-item nav-link" id="pop6-tab" data-toggle="tab" href="#pop3" role="tab" aria-controls="pop3" aria-selected="false">SMS Gateway</a>
                                </div>
                                </nav>

                                <div class="tab-content text-left " id="nav-tabContent">
                                    <div class="tab-pane fade show active align-self-center" id="flowervarieties" role="tabpanel" aria-labelledby="flowervarieties-tab">
                                        <div class="pt-3"></div>
                                        <div id="flowervarietieserrors"></div>
                                        <table class="table table-sm striped" id="flowervarietiestable">
                                            <thead>
                                                <th>#</th>
                                                <th>Variety Name</th>
                                                <th>Bucket Capacity</th>
                                                <th>Measure Head Size</th>
                                                <th>Date Added</th>
                                                <th>Added By</th>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <button id="addnewvariety" class="btn btn-sm btn-success"><i class="fas fa-plus-circle fa-lg fa-fw"></i> Add New Variety</button>   
                                    </div>

                                    <div class="tab-pane fade" id="rejectreasons" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div class="pt-3"></div>
                                        <div id="rejectreasonerrors"></div>
                                        <table class="table table-sm striped" id="rejectreasonstable">
                                            <thead>
                                                <th>#</th>
                                                <th>Reject Reason</th>
                                                <th>Date Added</th>
                                                <th>Added By</th>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <button id="addnewrejectreason" class="btn btn-sm btn-success"><i class="fas fa-plus-circle fa-lg fa-fw"></i> Add New Reject Reason</button>  
                                    </div>

                                    <div class="tab-pane fade" id="units" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div class="pt-3"></div>
                                        <table class="table table-sm striped" id="unitstable">
                                            <thead>
                                                <th>#</th>
                                                <th>Unit Name</th>
                                                <th>Acreage (Acres)</th>
                                                <th>Date Added</th>
                                                <th>Added By</th>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <button id="addnewunit" class="btn btn-sm btn-success"><i class="fas fa-plus-circle fa-lg fa-fw"></i> Add New Unit</button>  
                                    </div>

                                    <div class="tab-pane fade" id="departments" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div class="pt-3"></div>
                                        <table class="table table-sm striped" id="departmentstable">
                                            <thead>
                                                <th>#</th>
                                                <th>Department Name</th>
                                                <th>Date Added</th>
                                                <th>Added By</th>
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                        <button id="addnewdepartment" class="btn btn-sm btn-success"><i class="fas fa-plus-circle fa-lg fa-fw"></i> Add New Department</button>  
                                    </div>

                                    <div class="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div class="pt-3"></div>
                                        <div class="row">
                                            <div class="col">
                                                <div id="emailerrors"></div>
                                                <div class="form-group">
                                                    <label for="senderemail">Sender Email Address</label>
                                                    <input type="email" id="senderemail" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="emailapssword">Password</label>
                                                    <input type="password" name="password" id="password" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="smtp">SMTP Server</label>
                                                    <input type="text" id="smtp" class="form-control form-control-sm">
                                                </div>
                                                <div class="from-group">
                                                    <label for="smtpport">SMTP Port</label>
                                                    <input type="number" id="smtpport" class="form-control form-control-sm">
                                                </div>
                                                <div>
                                                    <input type="checkbox" name="usessl" id="usessl">
                                                    <label for="usessl">Use SSL ?</label>
                                                </div>

                                                <button id="saveemail" class="btn btn-sm btn-success">Save Configuration</button>
                                            </div>
                                            <div class="col">
                                                <div id="testmailerrors"></div>
                                                <div class="form-group">
                                                    <label for="testemailaddress">Recipient Email Address</label>
                                                    <input type="text" id="testemailaddress" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="testemailsubject">Email Subject</label>
                                                    <input type="text" id="testemailsubject" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="testemailmessage">Message</label>
                                                    <textarea name="" id="testemailmessage" class="form-control form-control-sm"></textarea>
                                                </div>
                                                <button id="sendtestemail" class="btn btn-danger btn-sm">Send Test Email</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pop3" role="tabpanel" aria-labelledby="pop3-tab">
                                        <div class="pt-3"></div>
                                        <div class="row">
                                            <div class="col">
                                                <div id="smserrors"></div>
                                                <div class="form-group">
                                                    <label for="smssenderid">Sender ID</label>
                                                    <input type="text" id="smssenderid" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="smsusername">Username</label>
                                                    <input type="text" id="smsusername" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="smsapikey">API Key</label>
                                                    <input type="text" id="smsapikey" class="form-control form-control-sm">
                                                </div>
                                                <button id="savesms" class="btn btn-sm btn-success">Save Configuration</button>
                                            </div>

                                            <div class="col">
                                                <div id="testsmserrors"></div>
                                                <div class="form-group">
                                                    <label for="testsmsrecipient">Message Recipient</label>
                                                    <input type="text" id="testsmsrecipient" class="form-control form-control-sm">
                                                </div>
                                                <div class="form-group">
                                                    <label for="testsmsmessage">Test Message</label>
                                                    <textarea name="testsmsmessage" id="testsmsmessage"  class="form-control form-control-sm"></textarea>
                                                </div>
                                                <button id="sendtestmessage" class="btn btn-sm btn-success">Send Test Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div> 
            <!-- Add a new variety Modal -->
            <div class="modal fade alert-dismissable fade" id="varietydetailsmodal">
            
                <div class="modal-dialog">
                    <div class="modal-content" id="varietydetailscontentmodal">
                        <div class="modal-header">
                            <p  class="modal-title" ><h5>Flower Variety Details</h5></p>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="varietydetailserrors" class="varietydetailsberrors"></div>
                            <div class="form-group">
                                <input type="hidden" name="varietydetailsid" id="varietydetailsid" value="0">
                                <label for="varietyname">Variety Name: </label>
                                <input type="text" name="varietyname" id="varietyname" class='form-control form-control-sm varietyinputfields'> 
                            </div>
                            <div class="form-group">
                                <label for="bucketcapacity">Bucket Capacity: </label>
                                <input type="number" name="bucketcapacity" id="bucketcapacity" class='form-control form-control-sm varietyinputfields'>
                            </div>
                            <div class="check-group">
                                <input type="checkbox" name="measureheadsize" id="measureheadsize" class="check-control" value="1">
                                <label for="measureheadsize">Measure head size <i class="far fa-question-circle fa-lf fa-fw"></i></label>
                            </div>
                            <div class="check-group">
                                <input type="checkbox" name="varietycontinousadd" id="varietycontinousadd" class="check-control" value="1">
                                <label for="varietycontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" id="savevarietydetails"><i class="far fa-save fa-lg fa-fw"></i> Save Variety</button>
                            <button type="button" class="btn btn-secondary btn-sm" id="clearvarietydetails"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear Fields</button>
                            <button type="button" class="btn btn-danger btn-sm" id="closervarietydetails" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close Window</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal for Adding Reject Reason -->
        <div class="modal fade alert-dismissable fade" id="rejectreasonsmodal">
                <div class="modal-dialog">
                    <div class="modal-content" id="rejectreasonscontentmodal">
                        <div class="modal-header">
                            <p  class="modal-title" ><h5>Reject Reason Details</h5></p>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="rejectreasonserrors" class="rejectreasonserrors"></div>
                            <div class="form-group">
                                <input type="hidden" name="rejectreasonid" id="rejectreasonid" value="0">
                                <label for="rejectreason">Reject Reason: </label>
                                <input type="text" name="rejectreason" id="rejectreason" class='form-control form-control-sm varietyinputfields'> 
                            </div>
                            
                            <div class="check-group">
                                <input type="checkbox" name="rejectcontinousadd" id="rejectcontinousadd" class="check-control" value="1">
                                <label for="rejectcontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" id="saverejectreason"><i class="far fa-save fa-lg fa-fw"></i> Save Reason</button>
                            <button type="button" class="btn btn-secondary btn-sm" id="clearrejectreason"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear Fields</button>
                            <button type="button" class="btn btn-danger btn-sm" id="closerejectreason" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close Window</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Add reject reason modal -->

        <!-- Modal for Adding New Unit-->
        <div class="modal fade alert-dismissable fade" id="unitssmodal">
                <div class="modal-dialog">
                    <div class="modal-content" id="unitscontentmodal">
                        <div class="modal-header">
                            <p  class="modal-title" ><h5>Unit Details</h5></p>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="uniterrors" class="uniterrors"></div>
                            <div class="form-group">
                                <input type="hidden" name="unitid" id="unitid" value="0">
                                <label for="unitname">Unit Name: </label>
                                <input type="text" name="unitname" id="unitname" class='form-control form-control-sm unitinputfields'> 
                            </div>
                            <div class="form-group">
                                <label for="acreage">Acreage (Ha)</label>
                                <input type="text" name="acreage" id="acreage" class="form-control form-control-sm">
                            </div>
                            <div id="unitvarieties">
                            
                            </div>
                            <div class="check-group">
                                <input type="checkbox" name="unitcontinousadd" id="unitcontinousadd" class="check-control" value="1">
                                <label for="unitcontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" id="saveunit"><i class="far fa-save fa-lg fa-fw"></i> Save Unit</button>
                            <button type="button" class="btn btn-secondary btn-sm" id="clearunit"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear Fields</button>
                            <button type="button" class="btn btn-danger btn-sm" id="closeunit" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close Window</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Add reject reason modal -->

        <!-- Modal for Adding New Department-->
        <div class="modal fade alert-dismissable fade" id="departmentsmodal">
                <div class="modal-dialog">
                    <div class="modal-content" id="departmentscontentmodal">
                        <div class="modal-header">
                            <p  class="modal-title" ><h5>Department Details</h5></p>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="departmenterrors" class="departmenterrors"></div>
                            <div class="form-group">
                                <input type="hidden" name="departmentid" id="departmentid" value="0">
                                <label for="departmentname">Department Name: </label>
                                <input type="text" name="departmentname" id="departmentname" class='form-control form-control-sm unitinputfields'> 
                            </div>
                            <div class="check-group">
                                <input type="checkbox" name="departmentcontinousadd" id="departmentcontinousadd" class="check-control" value="1">
                                <label for="departmentcontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-sm" id="savedepartment"><i class="far fa-save fa-lg fa-fw"></i> Save Dept</button>
                            <button type="button" class="btn btn-secondary btn-sm" id="cleardepartment"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear Fields</button>
                            <button type="button" class="btn btn-danger btn-sm" id="closedepartment" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close Window</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Add reject reason modal -->
        <!-- Form Ends Here -->
            <!--<footer class="footer">
                <div class="container-fluid">
                    <nav>
                        <ul class="footer-menu">
                            
                        </ul>
                        <p class="copyright text-center">
                            ©
                            <span id="copyright"></span>
                        </p>
                    </nav>
                </div>
            </footer>
            -->
        </div>
    </div>
    
    
</body>
<?php require_once("footer.txt") ?>
<script src="../js/settings.js"></script>
</html>