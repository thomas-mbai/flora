<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Random Checks</title>
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
                            <div id="savediv"></div>
                            <div class="row"> 
                                <div class="col-md-4 col-xs-12 col-sm-12">
                                    <div class="form-group">
                                        <input type="hidden" id="checkid" value="0">
                                        <input type="hidden" name="receivingid" id="receivingid">
                                        <label for="tag">Tag:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-tag fa-sm fa-fw"></i></span>
                                            </div>
                                            <input type="number" name="tag" id="tag" class="form-control  form-control-sm" autocomplete="off">
                                        </div>

                                        <label for="unit">Unit:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-warehouse fa-sm fa-fw"></i></span>
                                            </div>
                                            <select name="unit" id="unit" class="form-control  form-control-sm"></select>
                                        </div>
                                        
                                        
                                        <label for="variety">Variety:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></span>
                                            </div>
                                            <select name="variety" id="variety" class="form-control  form-control-sm"></select>
                                        </div>

                                        <label for="stemlength">Stem Length:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-tape fa-fw fa-sm"></i></i></span>
                                            </div>
                                            <select name="stemlength" id="stemlength" class="form-control  form-control-sm"></select>
                                        </div>

                                        <label for="reportedquantity">Reported Quantity:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-hashtag fa-sm"></i></span>
                                            </div>
                                            <input type="number" name="reportedquantity" id="reportedquantity" class="form-control  form-control-sm"  autocomplete="off">
                                        </div>
                                        
                                        <label for="remarks">Remarks:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-comment-alt fa-sm"></i></span>
                                            </div>
                                            <textarea name="remarks" id="remarks" class="form-control  form-control-sm"></textarea>
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="col-md-8 col-xs-12 col-sm-12">
                                    <div class="row">
                                        <div class="col">
                                            <ul class="list-group" id="verifiedstemlengths">
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col">
                                            <ul class="list-group" id="problemsfound">
                                                <li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Problems Found<span><i class='fas fa-plus-circle fa-lg mt-1' id="addproblem"></i></span></li>     
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="check-group mt-2">
                                        <input type="checkbox" name="continousadd" id="continousadd">
                                        <label for="continousadd">Continous Add?</label>
                                    </div>
                                    <!-- Save Button-->
                                    <button class="btn btn-sm btn-success mt-3" id="savebutton"><i class="fas fa-save fa-lg fa-fw"></i> Save Check</button>
                                    <button id="clear" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal for Adding problems found -->
    <div class="modal fade alert-dismissable fade" id="problemsfoundmodal">
            <div class="modal-dialog">
                <div class="modal-content" id="problemsfoundcontentmodal">
                    <div class="modal-header">
                        <p  class="modal-title" ><h5>Provide Problem Details</h5></p>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="problemerrors" class="problemerrors"></div>
                        <div class="form-group">
                            <input type="hidden" name="problemid" id="problemid" value="0">
                            <label for="problemname">Problem: </label>
                            <select name="problemname" id="problemname" class='form-control form-control-sm'></select>
                            <label for="problemquantity">Stems Quantity: </label>
                            <input type="number" name="problemquantity" id="problemquantity" class='form-control form-control-sm'> 
                        </div>
                        <div class="check-group">
                            <input type="checkbox" name="problemcontinousadd" id="problemcontinousadd" class="check-control" value="1">
                            <label for="problemcontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" id="savedproblem"><i class="far fa-save fa-lg fa-fw"></i> Add to List</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="clearproblem"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear</button>
                        <button type="button" class="btn btn-danger btn-sm" id="closeproblem" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<?php require_once("footer.txt") ?>
<script src="../js/randomchecks.js"></script>
</html>
