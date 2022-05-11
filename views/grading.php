<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once("header.txt") ?>
    <title>Grading</title>
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
                                        <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#receive" role="tab" aria-controls="transfers" aria-selected="true">Receive</a>
                                        <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#rejects" role="tab" aria-controls="reject" aria-selected="false">Reject</a>
                                        <a class="nav-item nav-link" id="pop4-tab" data-toggle="tab" href="#qualitycontrol" role="tab" aria-controls="qualitycontrol" aria-selected="false">Review</a>
                                        <a class="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#storage" role="tab" aria-controls="units" aria-selected="false">Storage</a>
                                    </div>
                                </nav>

                                <div class="tab-content text-left " id="nav-tabContent">
                                    <div class="tab-pane fade show active align-self-center" id="receive" role="tabpanel" aria-labelledby="flowervarieties-tab">
                                        <div id="receivederrors" class="pt-3"></div>
                                        <div class="row ">
                                            <div class="col-md-4 col-xs-12 col-sm-12"> 
                                                <div class="form-group">
                                                    <input type="hidden" id="checkid" value="0">
                                                    <input type="hidden" name="receivingid" id="receivingid">
                                                    <label for="tag">Tag:</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-tag fa-sm fa-fw"></i></span>
                                                        </div>
                                                        <input type="number" name="tag" id="tag" class="form-control  form-control-sm">
                                                    </div>
                                                    <!-- Fields are not needed fro display since the tag carries all their data henece no need for selection or data entry -->
                                                    <div id="receiptvariablefields">
                                                            <label for="receivedvariety">Variety:</label>
                                                            <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></span>
                                                            </div>
                                                            <select name="receivedvariety" id="receivedvariety" class="form-control  form-control-sm"></select>
                                                        </div>

                                                        <label for="receivedstemlength">Stem Length:</label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-tape fa-fw fa-sm"></i></i></span>
                                                            </div>
                                                            <select name="receivedstemlength" id="receivedstemlength" class="form-control  form-control-sm"></select>
                                                        </div>

                                                        <label for="receivedbucketsize">Bucket Capacity:</label>
                                                            <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-weight fa-fw fa-sm"></i></i></span>
                                                            </div>
                                                            <input type="text" name="receivedbucketsize" id="receivedbucketsize" class="form-control  form-control-sm" disabled>
                                                        </div>


                                                        <label for="fullbuckets">Full Buckets:</label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-thermometer-full fa-sm"></i></span>
                                                            </div>
                                                            <input type="number" name="fullbuckets" id="fullbuckets" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>

                                                        <label for="underfillbucket">Underfill Bucket (Separate with a Space):</label>
                                                            <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-thermometer-empty fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="underfillbucket" id="underfillbucket" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>
                                                    </div>
                                                    

                                                    <div class="check-group mt-2">
                                                        <input type="checkbox" name="receivedcontinousadd" id="receivedcontinousadd">
                                                        <label for="receivedcontinousadd">Continous Add?</label>
                                                    </div>
                                                    <button id="addreceivetolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                                    <button id="clearreceiveform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                                </div>
                                            </div>
                                            <div class="col-md-8 col-xs-12 col-sm-12">
                                                
                                                <ul class="list-group mb-2" id="receivedfullbucketslist">
                                                    <li class='list-group-item font-weight-bold bg-success text-white'>Received Full Buckets</li>     
                                                </ul>
                                                
                                                <ul class="list-group mb-2" id="receivedunderfillbucketslist">
                                                    <li class='list-group-item font-weight-bold bg-secondary text-white'>Received Underfill Buckets</li>     
                                                </ul>

                                                <ul class="list-group mb-2" id="receivedunderfillbucketslist">
                                                    <li class='list-group-item bg-info text-white'>TOTALS:&nbsp;&nbsp;&nbsp; Stems:&nbsp;&nbsp;<span id="receivedstems">0.00</span>&nbsp;&nbsp; Buckets:&nbsp;&nbsp;<span id="receivedbuckets">0.00</span></li>     
                                                </ul> 

                                                <button class="btn btn-sm btn-success mt-3" id="savereceivedbutton"><i class="fas fa-save fa-lg fa-fw"></i> Save Received Flowers</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="rejects" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div id="rejectederrors"class="pt-3"></div>
                                        <div class="row">
                                            <div class="col-md-4 col-xs-12 col-sm-12">                                                
                                                <div class="form-group">
                                                    <input type="hidden" id="checkid" value="0">                                                    
                                                    <label for="rejectedcategory">Category:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-folder fa-fw fa-sm"></i></i></span>
                                                        </div>
                                                        <select name="rejectedcategory" id="rejectedcategory" class="form-control  form-control-sm">
                                                            <option value="">&lt;Choose One&gt;</option>
                                                            <option value="ungraded">Ungraded</option>
                                                            <option value="graded">Graded</option>
                                                        </select>
                                                    </div>

                                                    <label for="rejectedbuncher">Buncher:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-user fa-fw fa-sm"></i></i></span>
                                                        </div>
                                                        <select name="rejectedbuncher" id="rejectedbuncher" class="form-control  form-control-sm"></select>
                                                    </div>

                                                    <label for="rejectedvariety">Variety:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></span>
                                                        </div>
                                                        <select name="rejectedvariety" id="rejectedvariety" class="form-control  form-control-sm"></select>
                                                    </div>

                                                    <label for="rejectedreason">Reason:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-comment-alt fa-sm fa-fw"></i></span>
                                                        </div>
                                                        <select name="rejectedreason" id="rejectedreason" class="form-control  form-control-sm"></select>
                                                    </div>
                                                   
                                                    <label for="rejectedstems">Stems:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-hashtag fa-sm"></i></span>
                                                        </div>
                                                        <input type="number" name="rejectedstems" id="rejectedstems" class="form-control  form-control-sm"  autocomplete="off">
                                                    </div>

                                                    <div class="check-group mt-2">
                                                        <input type="checkbox" name="rejectcontinousadd" id="rejectcontinousadd">
                                                        <label for="rejectcontinousadd">Continous Add?</label>
                                                    </div>
                                                    <button id="addrejecttolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                                    <button id="clearrejectform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                                </div>
                                            </div>

                                            <div class="col-md-8 col-xs-12 col-sm-12">
                                                <!-- <div id="rejectedstemsdiv"></div>-->
                                                <ul class="list-group mb-2" id="rejectedstemslist">
                                                    <li class='list-group-item font-weight-bold bg-success text-white'>Ungraded Rejected Stems</li>     
                                                </ul>
                                                <!-- Save Button-->
                                                <button class="btn btn-sm btn-success mt-3" id="saverejectedstems"><i class="fas fa-save fa-lg fa-fw"></i> Save Rejected Stems</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="storage" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div id="storageerrors" class="pt-2"></div>
                                        <div class="row">
                                            <div class="col-md-4 col-xs-12 col-sm-12">                                                
                                                <div class="form-group">
                                                    <input type="hidden" id="checkid" value="0">
                                                    <label for="savestoragetag">Tag:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-tag fa-sm"></i></span>
                                                        </div>
                                                        <input type="number" name="savestoragetag" id="savestoragetag" class="form-control  form-control-sm" autocomplete="off">
                                                    </div>
                                                    <label for="storagevariety">Variety:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></span>
                                                        </div>
                                                        <select name="storagevariety" id="storagevariety" class="form-control  form-control-sm"></select>
                                                    </div>

                                                    <label for="storagestemlength">Stem Length:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-seedling fa-sm fa-fw"></i></span>
                                                        </div>
                                                        <select name="storagestemlength" id="storagestemlength" class="form-control  form-control-sm"></select>
                                                    </div>
                                                   
                                                    <label for="storagebunchingstyle">Bunching Style:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-thermometer-quarter fa-sm"></i></span>
                                                        </div>
                                                        <select name="storagebunchingstyle" id="storagebunchingstyle" class="form-control  form-control-sm"></select>
                                                    </div>

                                                    <label for="storageheadsize">Headsize:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fab fa-canadian-maple-leaf fa-sm"></i></span>
                                                        </div>
                                                        <select name="storageheadsize" id="storageheadsize" class="form-control  form-control-sm"></select>
                                                    </div>

                                                    <label for="storagequantity">Quantity:</label>
                                                    <div class="input-group">
                                                            <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-hashtag fa-sm"></i></span>
                                                        </div>
                                                        <input type="number" name="storagequantity" id="storagequantity" class="form-control  form-control-sm" autocomplete="off">
                                                    </div>

                                                    <div class="check-group mt-2">
                                                        <input type="checkbox" name="storagecontinousadd" id="storagecontinousadd">
                                                        <label for="storagecontinousadd">Continous Add?</label>
                                                    </div>
                                                    <button id="addstoragetolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                                    <button id="clearstorageform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                                </div>
                                            </div>

                                            <div class="col-md-8 col-xs-12 col-sm-12">
                                                <ul class="list-group" id="storageitemslist">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Graded Storage List</li>     
                                                </ul>
                                                <!-- Save Button-->
                                                <button class="btn btn-sm btn-success mt-3" id="saverestoragestems"><i class="fas fa-save fa-lg fa-fw"></i> Store Graded Stems</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="qualitycontrol" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div id="qcerrordiv" class="pt-3"></div>
                                        <div class="row">
                                            <div class="col-md-4 col-xs-12 col-sm-12 mb-2" >
                                                <input type="hidden" name="qcid" id="qcid" value="0">
                                                <ul class="list-group" id="qcvariety">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Select Flower Variety</li>     
                                                </ul>
                                                <!-- Add navigation buttons -->
                                                <button id="firstvarietyitem" class="btn btn-sm btn-success mt-3">First</button>
                                                <button id="previousvarietyitem" class="btn btn-sm  btn-success mt-3">Prev</button>
                                                <button id="nextvarietyitem" class="btn btn-sm  btn-success mt-3">Next</button>
                                                <button id="lastvarietyitem" class="btn btn-sm  btn-success mt-3">Last</button>
                                            </div>
                                            <div class="col-md-4 col-xs-12 col-sm-12 mb-2" >
                                                <ul class="list-group" id="bunchingstyle">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Select Bunching Style</li>     
                                                </ul>
                                            </div>
                                            
                                            <div class="col-md-4 col-xs-12 col-sm-12 mb-2" >
                                                <ul class="list-group" id="qcbunchers">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Select Buncher</li>     
                                                </ul>
                                                <div class="buttons">
                                                     <!-- Add navigation buttons -->
                                                    <button id="firstbunchers" class="btn btn-sm btn-success mt-2">First</button>
                                                    <button id="previousbunchers" class="btn btn-sm  btn-success mt-2">Prev</button>
                                                    <button id="nextbunchers" class="btn btn-sm  btn-success mt-2">Next</button>
                                                    <button id="lastbunchers" class="btn btn-sm  btn-success mt-2">Last</button>
                                                </div>
                                                <button class="btn btn-success mt-2 btn-sm w-100" id="addqcpassed">Approve Review <i class="fas fa-check-circle fa-lg"></i></button>
                                            </div>
                                        </div>

                                        <div class="row mt-3">
                                            <div class="col-md-6 col-xs-12 col-sm-12 mb-2">
                                                <ul class="list-group" id="qclist">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Recently Added QC Passes</li>     
                                                </ul>
                                            </div>
                                            <div class="col-md-6 col-xs-12 col-sm-12 mb-2">
                                                <ul class="list-group" id="qctally">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>General Tally</li>     
                                                </ul>
                                            </div>
                                        </div>
                                       
                                    </div>

                                    <div class="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                                        <div class="row pt-3">
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
                                        <div class="row pt-3">
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
        </div>
    </div>
    
    
</body>
<?php require_once("footer.txt") ?>
<script src="../js/grading.js"></script>
</html>