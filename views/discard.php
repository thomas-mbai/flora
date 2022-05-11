<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Discards</title>
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

                                        <label for="category">Category:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-sitemap fa-sm fa-fw"></i></span>
                                            </div>
                                            <select name="category" id="category" class="form-control  form-control-sm">
                                                <option value="">&lt;Choose One&gt;</option>
                                                <option value="graded">Graded</option>
                                                <option value="ungraded">Ungraded</option>
                                            </select>
                                        </div>

                                        <label for="variety">Variety:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-spa fa-sm fa-fw"></i></i></span>
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
                                                <span class="input-group-text"><i class="fas fa-tree fa-sm fa-fw"></i></span>
                                            </div>
                                            <select name="headsize" id="headsize" class="form-control  form-control-sm"></select>
                                        </div>

                                        <label for="quantity">Quantity:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-hashtag fa-sm fa-fw"></i></span>
                                            </div>
                                            <input type="text" name="quantity" id="quantity" class="form-control  form-control-sm"  autocomplete="off" >
                                        </div>

                                        <label for="reason">Reason:</label>
                                        <div class="input-group">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-comment-alt fa-sm fa-fw"></i></span>
                                            </div>
                                            <textarea name="reason" id="reason" class="form-control  form-control-sm"  autocomplete="off" ></textarea>
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
                                    <!-- Graded discard List -->
                                    <div class="row">
                                        <div class="col">
                                            <!-- <div id="savediv"></div> -->
                                            <ul class="list-group mb-2" id="gradeddiscardlist">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Graded Discard</li>     
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    
                                    <!-- Ungraded discard List -->
                                    <div class="row">
                                        <div class="col">
                                            <ul class="list-group mb-2" id="ungradediscardlist">
                                                <li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Ungraded Discard</li>     
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- show total stems discarded -->
                                    <!-- Save Button-->
                                    <button class="btn btn-sm btn-success mt-3" id="savebutton"><i class="fas fa-save fa-lg fa-fw"></i> Save Discarded Flowers</button>
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
<script src="../js/discard.js"></script>
</html>
