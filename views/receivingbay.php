<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Receiving Bay</title>
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
                            <div id="errors" class="mt-2"></div>
                            <div class="row"> 
                                <div class="col-md-4 col-xs-12 col-sm-12">                                    
                                    <div class="form-group">
                                        <input type="hidden" id="collectionid" value="0">
                                        
                                        <div id="shiftdiv">
                                            <label for="shift">Shift:</label>
                                            <div class="input-group">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-clock fa-sm fa-fw"></i></span>
                                                </div>
                                                <select name="shift" id="shift" class="form-control  form-control-sm">
                                                    <option value="">&lt;Choose One&gt;</option>
                                                    <option value="morning">Morning</option>
                                                    <option value="evening">Evening</option>
                                                </select>
                                            </div>
                                        </div>

                                        <label for="tag">Tag:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-tag fa-sm fa-fw"></i></span>
                                            </div>
                                            <input type="number" name="tag" id="tag" class="form-control  form-control-sm">
                                        </div>
                                        <div id="fields">
                                            <label for="timepicked">Picking Time:</label>
                                            <div class="input-group">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-clock fa-sm"></i></span>
                                                </div>
                                                <input type="text" name="timepicked" id="timepicked" class="form-control  form-control-sm">
                                            </div>
                                            <div id="delivery">
                                                <label for="timedelivered">Delivery Time:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-clock fa-sm"></i></span>
                                                    </div>
                                                    <input type="text" name="timedelivered" id="timedelivered" class="form-control  form-control-sm">
                                                </div><!-- -->
                                            </div>
                                            
                                            <label for="driver">Driver:</label>
                                            <div class="input-group">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-peace fa-sm fa-fw"></i></span>
                                                </div>
                                                <select name="driver" id="driver" class="form-control  form-control-sm"></select>
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
                                                    <span class="input-group-text"><i class="fas fa-th-list fa-sm fa-fw"></i></span>
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
                                            
                                            <div class="fullbucket">
                                                <label for="bucketcapacity">Bucket Capacity:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-ruler-vertical fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <input type="text" name="bucketcapacity" id="bucketcapacity" class="form-control  form-control-sm"  autocomplete="off" disabled>
                                                </div>
                                                
                                                <label for="fullbuckets">Full Buckets:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-thermometer-full fa-sm"></i></span>
                                                    </div>
                                                    <input type="number" name="fullbuckets" id="fullbuckets" class="form-control  form-control-sm"  autocomplete="off">
                                                </div>

                                            </div>
                                            
                                            <div class="underfillbucket">
                                                <label for="underfillbucketquantity">Underfill Bucket Quantity (Separate with a Space):</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-thermometer-quarter fa-sm"></i></span>
                                                    </div>
                                                    <input type="text" name="underfillbucketquantity" id="underfillbucketquantity" class="form-control  form-control-sm"  autocomplete="off">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="check-group mt-2">
                                            <input type="checkbox" name="continousadd" id="continousadd">
                                            <label for="continousadd">Continous Add?</label>
                                        </div>
                                        <button id="addstems" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                        <button id="clear" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                    </div>
                                </div>

                                <div class="col-md-8 col-xs-12 col-sm-12">
                                    <!-- Full Buckets List -->
                                    <div class="row">
                                        <div class="col">
                                            <!-- <div id="savediv"></div> -->
                                            <ul class="list-group mb-2" id="fullbucketslist">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Full Buckets Picked</li>     
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    <!-- Underfill Buckets List -->
                                    <div class="row">
                                        <div class="col">
                                            <ul class="list-group mb-2" id="underfillbucketslist">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Underfill Buckets Picked</li>     
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- show total stems and buckets -->
                                    <ul class="list-group mb-2" id="totals">
                                        <li class='list-group-item d-flex justify-content-between align-items-center bg-info text-white'>
                                            TOTALS:&nbsp;&nbsp;Stems:&nbsp;&nbsp;<span id="stems">0.00</span>&nbsp;&nbsp;Buckets:&nbsp;&nbsp;<span id="buckets">0.00</span>
                                        </li>     
                                    </ul>
                                    <!-- Save Button-->
                                    <button class="btn btn-sm btn-success mt-3" id="savebutton"><i class="fas fa-save fa-lg fa-fw"></i> Save Flower Collection</button>
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
<script src="../js/receivingbay.js"></script>
</html>
