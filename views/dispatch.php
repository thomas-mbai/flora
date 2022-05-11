<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Dispatch</title>
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
                            <div id="errors"></div>
                            <div class="row"> 
                                <div class="col-md-4 col-xs-12 col-sm-12">
                                    <div class="form-group">
                                        <input type="hidden" id="checkid" value="0">
                                        <label for="headsize">Tag:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-tag fa-fw fa-sm"></i></i></span>
                                            </div>
                                            <input type="text" name="tag" id="tag" class="form-control  form-control-sm">
                                        </div>
                                        
                                        <div class="check-group mt-2">
                                            <input type="checkbox" name="continousadd" id="continousadd">
                                            <label for="continousadd">Continous Add?</label>
                                        </div>
                                        <button id="addtolist" class=" btn btn-sm btn-success mt-3">Add to List <i class="fas fa-arrow-alt-circle-right fa-lg fa-fw"></i></button>
                                        
                                    </div>
                                </div>

                                <div class="col-md-8 col-xs-12 col-sm-12">
                                    <div class="row">
                                        <div class="col">
                                            <ul class="list-group" id="dispatchedflowers">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Packages to Dispatch</li>     
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- Save Button-->
                                    <button class="btn btn-sm btn-success mt-3" id="savebutton"><i class="fas fa-save fa-lg fa-fw"></i> Dispatch Package</button>
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
<script src="../js/dispatch.js"></script>
</html>
