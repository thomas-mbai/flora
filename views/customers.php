<!DOCTYPE html>
<html lang="en">
<head>
    <?php require_once("header.txt") ?>
    <title>Customers</title>
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
                            <div class="row">
                                <div class="col-3">
                                    <button class="btn btn-sm btn-secondary w-100 mt-1 text-left" id="addcustomer"><i class="fas fa-user-plus fa-lg"></i> Add New</button>
                                    <button class="btn btn-sm btn-secondary w-100 mt-1 text-left" id="filtercustomer"><i class="fas fa-filter fa-lg"></i>Filter</button>
                                    <button class="btn btn-sm btn-secondary w-100 mt-1 text-left" id="deletecustomer"><i class="fas fa-trash fa-lg"></i> Delete</button>
                                    <div class="mt-2">
                                        <select name="customerslist" id="customerslist" multiple class="form-control form-control-sm"></select>
                                    </div>
                                </div>
                                <div class="col-9 text-center ">
                                    <nav class="nav-justified ">
                                        <div class="nav nav-tabs " id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#biodata" role="tab" aria-controls="biodata" aria-selected="true">Bio Data</a>
                                            <a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false">Orders</a>
                                            <a class="nav-item nav-link" id="pop4-tab" data-toggle="tab" href="#dispatches" role="tab" aria-controls="dispatches" aria-selected="false">Dispatches</a>
                                        </div>
                                    </nav>

                                    <div class="tab-content text-left " id="nav-tabContent">
                                        <div class="tab-pane fade show active align-self-center" id="biodata" role="tabpanel" aria-labelledby="flowervarieties-tab">
                                            <div id="errors" class="pt-2"></div>
                                            <div class="row ">
                                                <div class="col-md-5 col-xs-12 col-sm-12"> 
                                                    <div class="form-group">
                                                        <input type="hidden" id="customerid" value="0">
                                                        <label for="customername">Customer Name:</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-user-tie fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="customername" id="customername" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>

                                                        <label for="physicaladdress">Physical Address:</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-map-marker-alt fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="physicaladdress" id="physicaladdress" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>

                                                        <label for="postaladdress">Postal Address:</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-envelope fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="postaladdress" id="postaladdress" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>
                                                        
                                                        <label for="telephone">Telephone:</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-phone-square fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="telephone" id="telephone" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>

                                                        <label for="email">Email:</label>
                                                        <div class="input-group">
                                                                <div class="input-group-prepend">
                                                                <span class="input-group-text"><i class="fas fa-at fa-sm"></i></span>
                                                            </div>
                                                            <input type="text" name="email" id="email" class="form-control  form-control-sm"  autocomplete="off">
                                                        </div>
                                                        <div class="check-group mt-2">
                                                            <input type="checkbox" name="continousaddcustomer" id="continousaddcustomer">
                                                            <label for="continousaddcustomer">Continous Add?</label>
                                                        </div>
                                                        <button id="savecustomer" class=" btn btn-sm btn-success mt-3">Save Customer <i class="fas fa-save fa-lg fa-fw"></i></button>
                                                        <button id="clearcustomerform" class=" btn btn-sm btn-danger mt-3">Clear Form <i class="fas fa-broom fa-lg fa-fw"></i></button>
                                                    </div>
                                                </div>
                                                <div class="col-md-7 col-xs-12 col-sm-12">
                                                    
                                                    <ul class="list-group mb-2" id="dashboard">
                                                        <li class='list-group-item font-weight-bold bg-success text-white'>Customers Dashboard</li>     
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="pop2-tab">
                                            <div id="ordererrors"class="pt-2"></div>
                                            <ul class="list-group" id="customerorders">
                                                <li class='list-group-item d-flex justify-content-between align-items-center bg-info text-white font-weight-bold'>Existing Orders<span><i class='fas fa-plus-circle fa-lg mt-1' id="addorder"></i></span></li> 
                                            </ul>
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
    <!-- Modal for adding order -->
    <div class="modal fade alert-dismissable fade" id="customerorder">
            <div class="modal-dialog">
                <div class="modal-content" id="customercontentmodal">
                    <div class="modal-header">
                        <p  class="modal-title" ><h5>Provide Order Details</h5></p>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="orderdetailerrors" class="orderdetailerrors"></div>
                        <div class="form-group">
                            <input type="hidden" name="orderid" id="orderid" value="0">
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="ordernumber">Order Number: </label>
                                    <input type="text" name="ordernumber" id="ordernumber" class='form-control form-control-sm' autocomplete="false"> 
                                </div>

                                <div class="col-md-4">
                                    <label for="orderdate">Order Date: </label>
                                    <input type="text" name="orderdate" id="orderdate" class='form-control form-control-sm' autocomplete="false"> 
                                </div>

                                <div class="col-md-3">
                                    <label for="variety">Pack Rate: </label>
                                    <input type="number" name="packrate" id="packrate" class='form-control form-control-sm'>
                                </div>

                            </div>
                            
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="variety">Variety: </label>
                                    <select name="variety" id="variety" class='form-control form-control-sm'></select>
                                </div>
                                <div class="col-md-4">
                                    <label for="stemlength">Stem Length: </label>
                                    <select name="stemlength" id="stemlength" class='form-control form-control-sm'></select>
                                </div>
                                 <div class="col-md-3">
                                    <label for="headsize">Head size: </label>
                                    <select name="headsize" id="headsize" class='form-control form-control-sm'></select>
                                </div>
                               
                            </div>
                            
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="boxtype">Box Type: </label>
                                    <select name="boxtype" id="boxtype" class='form-control form-control-sm'></select>
                                </div>
                                <div class="col-md-4">
                                    <label for="quantity">Quantity: </label>
                                    <input type="number" name="quantity" id="quantity" class='form-control form-control-sm' autocomplete="false"> 
                                </div>
                                <div class="col-md-3">
                                    <label for="boxes">Boxes: </label>
                                    <input type="number" name="boxes" id="boxes" class='form-control form-control-sm' autocomplete="false"> 
                                </div>
                            </div>
                            <div class="mt-1">
                                <button type="button" class="btn btn-success btn-sm" id="addorderitem"><i class="fas fa-plus-circle  fa-lg fa-fw"></i> Add Order Item to List</button>
                            </div>
                        </div>
                        <ul class="list-group mb-2 mt-2" id="orderdetails">
                            <li class='list-group-item d-flex justify-content-between align-items-center bg-info text-white font-weight-bold'>Ordered Items</li>     
                        </ul>
                        <div class="check-group">
                            <input type="checkbox" name="ordercontinousadd" id="ordercontinousadd" class="check-control" value="1">
                            <label for="ordercontinousadd">Continous Add <i class="far fa-question-circle fa-lg fa-fw"></i></label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary btn-sm" id="savedorder"><i class="far fa-save fa-lg fa-fw"></i> Save Order</button>
                        <button type="button" class="btn btn-secondary btn-sm" id="clearorder"><i class="fas fa-broom  fa-lg fa-fw"></i> Clear</button>
                        <button type="button" class="btn btn-danger btn-sm" id="closeorder" data-dismiss="modal"><i class="far fa-times-circle fa-fw fa-lg"></i> Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<?php require_once("footer.txt") ?>
<script src="../js/customers.js"></script>
</html>