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
                    <div class="row">
                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Production</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-hand-scissors fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Picked Flowers</small><span><br/>
                                                    <span class="lead">10,500</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-random fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Random Checks</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-warehouse fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Units Colleted</small><span><br/>
                                                    <span class="lead">14</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-hands fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Received Flowers</small><span><br/>
                                                    <span class="lead">10,500</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-spa fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Varieties Picked</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Orders</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-tasks fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Orders Required</small><span><br/>
                                                    <span class="lead">71</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-box-open fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Boxes Required</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-weight fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Packed Weight</small><span><br/>
                                                    <span class="lead">14</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-layer-group fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Order Volume</small><span><br/>
                                                    <span class="lead">2,100</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-archive fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Boxes Packed</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Grading</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-seedling fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Stems Received</small><span><br/>
                                                    <span class="lead">5,500</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-ban fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Rejected</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-server fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Moved to Storage</small><span><br/>
                                                    <span class="lead">14</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-balance-scale fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Graded</small><span><br/>
                                                    <span class="lead">10,500</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-stopwatch fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Total Quantity</small><span><br/>
                                                    <span class="lead">0</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Bunching</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-user-circle fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Bunchers</small><span><br/>
                                                    <span class="lead">80</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-spa fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Varieties Bunched</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-stopwatch fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Total Bunches</small><span><br/>
                                                    <span class="lead">14</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-ribbon fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Bunching Styles</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-gift fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Verified Bunches</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Dispatch</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-user-tie fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Customers</small><span><br/>
                                                    <span class="lead">21</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-weight-hanging fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Dispatched Weight</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-ruler fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span ><small>Stem Length</small><span><br/>
                                                    <span class="lead">14</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-shipping-fast fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Orders Dispatched</small><span><br/>
                                                    <span class="lead">40</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-spa fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Varieties</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xs-12 col-sm-12">
                            <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Discard</h6>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-column align-items-center justify-content-start">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-spa fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Varieties</small><span><br/>
                                                    <span class="lead">21</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-comment-alt fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Reasons</small><span><br/>
                                                    <span class="lead">8</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-square-full fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Ungraded</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- Another column -->

                                        <div class="flex-column align-items-center justify-content-start ml-3">
                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-ruler fa-2x fa-fw text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Stem Length</small><span><br/>
                                                    <span class="lead">40</span>
                                                </div>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-start">
                                                <div class="bg-danger pt-2 pl-2 pb-2 pr-2 rounded">
                                                    <i class="fas fa-check-square fa-2x fa-fw  text-white"></i>                
                                                </div>
                                                <div class='pl-2'>
                                                    <span><small>Graded</small><span><br/>
                                                    <span class="lead">12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                
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
</html>
