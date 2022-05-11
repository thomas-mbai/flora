<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Packaging</title>
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
                            <nav class="nav-justified ">
                                <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#unpack" role="tab" aria-controls="transfers" aria-selected="true">Unpack Containers</a>
                                    <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#package" role="tab" aria-controls="reject" aria-selected="false">Package Boxes</a>
                                    <a class="nav-item nav-link" id="pop4-tab" data-toggle="tab" href="#repack" role="tab" aria-controls="qualitycontrol" aria-selected="false">Repack Containers</a>
                                </div>
                            </nav>

                            <div class="tab-content text-left " id="nav-tabContent">
                                <!-- Unpack Tab -->
                                <div class="tab-pane fade show active align-self-center" id="unpack" role="tabpanel" aria-labelledby="flowervarieties-tab">
                                    <div class="row">
                                        <div class="col">
                                            <div id="unpackerrors" class="pt-3"></div>
                                        </div>
                                    </div>
                                    <div class="row"> 
                                        <div class="col-md-4 col-xs-12 col-sm-12">
                                            <label for="unpacktag">Tag:</label>
                                            <div class="input-group">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-tag fa-sm fa-fw"></i></span>
                                                </div>
                                                <input type="number" name="unpacktag" id="unpacktag" class="form-control  form-control-sm">
                                            </div>

                                            <div class="check-group mt-2">
                                                <input type="checkbox" name="continousadd" id="continousadd">
                                                <label for="continousadd">Continous Add?</label>
                                            </div>
                                            <button id="addstems" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                            <button id="clear" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                        </div>

                                        <div class="col-md-8 col-xs-12 col-sm-12 pt-3">
                                            <ul class="list-group mb-2" id="unpackeduckets">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Unpacked Buckets</li>     
                                            </ul>

                                            <button class="btn btn-sm btn-success mt-3" id="saveunpackedbuckets"><i class="fas fa-save fa-lg fa-fw"></i> Save Unpackedd Buckets</button>
                                        </div>
                                        
                                    </div>
                                </div>

                                <!-- Pack Boxes Tab -->
                                <div class="tab-pane fade" id="package" role="tabpanel" aria-labelledby="pop2-tab">
                                    <div id="errors" class="pt-3"></div>
                                    <div class="row"> 
                                        <div class="col-md-4 col-xs-12 col-sm-12">
                                            <div class="form-group">
                                                <input type="hidden" id="checkid" value="0">
                                                <label for="tag">Tag:</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-tag fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <input type="number" name="tag" id="tag" class="form-control  form-control-sm">
                                                </div>
                                                

                                                <label for="customers2">Customer:</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-user fa-sm fa-fw"></i></span>
                                                    </div>
                                                <select name="customers2" id="customers2" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="orders">Order:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-file-alt fa-sm fa-fw"></i></span>
                                                        </div>
                                                    <select name="orders" id="orders" class="form-control  form-control-sm">
                                                        <option value="">&lt;Choose One&gt;</option>
                                                    </select>
                                                </div>

                                                <label for="packagesize">Package Size:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-archive fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <select name="packagesize" id="packagesize" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="bunchingstyle">Bunching Style:</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-ribbon fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <select name="bunchingstyle" id="bunchingstyle" class="form-control  form-control-sm"></select>
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
                                                        <span class="input-group-text"><i class="fas fa-seedling fa-fw fa-sm"></i></i></span>
                                                    </div>
                                                    <select name="stemlength" id="stemlength" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="headsize">Headsize:</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-tree fa-fw fa-sm"></i></i></span>
                                                    </div>
                                                    <select name="headsize" id="headsize" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="quantity">Quantity:</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-hashtag fa-sm"></i></span>
                                                    </div>
                                                    <input type="number" name="quantity" id="quantity" class="form-control  form-control-sm"  autocomplete="off">
                                                </div>

                                                <label for="weight">Package Weight:</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-weight fa-sm"></i></span>
                                                    </div>
                                                    <input type="number" name="weight" id="weight" class="form-control  form-control-sm"  autocomplete="off">
                                                </div>

                                                <div class="check-group mt-2">
                                                    <input type="checkbox" name="continousadd" id="continousadd">
                                                    <label for="continousadd">Continous Add?</label>
                                                </div>
                                                <button id="addtolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                                <button id="clearform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                            </div>
                                        </div>

                                        <div class="col-md-8 col-xs-12 col-sm-12">
                                            <div class="row">
                                                <div class="col">
                                                    <ul class="list-group" id="packagedflowers">
                                                    <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Packaged Items</li>     
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            <!-- Save Button-->
                                            <button class="btn btn-sm btn-success mt-3" id="savebutton"><i class="fas fa-save fa-lg fa-fw"></i> Save Check</button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Repack Boxes Tab -->
                                <div class="tab-pane fade show align-self-center" id="repack" role="tabpanel" aria-labelledby="flowervarieties-tab">
                                    <div id="repackerrors" class="pt-3"></div>
                                    <div class="row">
                                        <div class="col-md-4 col-xs-12 col-sm-12">                                                
                                            <div class="form-group">
                                                <input type="hidden" id="checkid" value="0">
                                                <label for="repacktag">Tag:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-tag fa-sm"></i></span>
                                                    </div>
                                                    <input type="number" name="repacktag" id="repacktag" class="form-control  form-control-sm" autocomplete="off">
                                                </div>
                                                <label for="repackvariety">Variety:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <select name="repackvariety" id="repackvariety" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="repackstemlength">Stem Length:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-seedling fa-sm fa-fw"></i></span>
                                                    </div>
                                                    <select name="repackstemlength" id="repackstemlength" class="form-control  form-control-sm"></select>
                                                </div>
                                                
                                                <label for="repackbunchingstyle">Bunching Style:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-thermometer-quarter fa-sm"></i></span>
                                                    </div>
                                                    <select name="repackbunchingstyle" id="repackbunchingstyle" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="repackheadsize">Headsize:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fab fa-canadian-maple-leaf fa-sm"></i></span>
                                                    </div>
                                                    <select name="repackheadsize" id="repackheadsize" class="form-control  form-control-sm"></select>
                                                </div>

                                                <label for="repackquantity">Quantity:</label>
                                                <div class="input-group">
                                                        <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-hashtag fa-sm"></i></span>
                                                    </div>
                                                    <input type="number" name="repackquantity" id="repackquantity" class="form-control  form-control-sm" autocomplete="off">
                                                </div>

                                                <div class="check-group mt-2">
                                                    <input type="checkbox" name="repackcontinousadd" id="repackcontinousadd">
                                                    <label for="repackcontinousadd">Continous Add?</label>
                                                </div>
                                                <button id="addrepacktolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                                <button id="clearrepackform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                            </div>
                                        </div>

                                        <div class="col-md-8 col-xs-12 col-sm-12">
                                            <ul class="list-group" id="repackitemslist">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Repacked Buckets List</li>     
                                            </ul>
                                            <!-- Save Button-->
                                            <button class="btn btn-sm btn-success mt-3" id="saverepackstems"><i class="fas fa-save fa-lg fa-fw"></i> Store Repacked Stems</button>
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
<script src="../js/packaging.js"></script>
</html>
