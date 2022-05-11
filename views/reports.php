<!DOCTYPE html>
<html lang="en">

<head>
<?php require_once("header.txt") ?>
<title>Reports</title>
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
                            <!-- Report selector and filter options -->
                            <div id="errors"></div>
                           <div class="row">
                                <div class="col-md-3 col-xs-12 col-sm-12">
                                    <select name="reportname" id="reportname" class="form-control form-control-sm">
                                        <option value="headsizestemwise">Headsize Stemwise Report</option>
                                        <option value="varietystemwisereport">Variety Stemwise Report</option>
                                        <option value="rejectionreport">Rejection Report</option>
                                        <option value="varietydispatchreport">Variety Dispatch Report</option>
                                        <option value="productionreport">Production Report</option>
                                        <option value="randomchecksreport">Random Checks Report</option>
                                        <option value="bunchersreport">Bunchers Report</option>
                                    </select>
                                </div>

                                <div class="col-md-9 col-xs-12 col-sm-12">
                                    <div class="d-flex justify-content-center">
                                        
                                        <div class="input-group mr-2">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-calendar fa-fw fa-sm"></i></i></span>
                                            </div>
                                            <input type="input" name="startdate" id="startdate" class="form-control  form-control-sm" placeholder="Start Date" autocomplete="off">
                                        </div>

                                        <div class="input-group mr-2">
                                                <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-calendar fa-fw fa-sm"></i></i></span>
                                            </div>
                                            <input type="input" name="enddate" id="enddate" class="form-control  form-control-sm" placeholder="End Date" autocomplete="off">
                                        </div>
                                        <div>
                                            <button id="applybutton" class="btn btn-sm btn-secondary">Apply</button>
                                        </div>
                                    </div>
                                </div>
                           </div> 
                           <!-- Report Body -->
                            <div class="row mt-2">
                                <div class="col">
                                    <div id="reportdetails"></div>
                                </div>
                            </div>
                            <!-- Report action buttons -->
                            <div class="row">
                                <div class="col">
                                    <button class="btn-sm btn-secondary btn" id="print"><i class="fas fa-print fa-lg fa-fw"></i> Print Report</button>
                                    <button class="btn-sm btn-secondary btn" id="export"><i class="fas fa-file-excel fa-lg fa-fw"></i> Export Report</button>
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
<script src="../js/reports.js"></script>
</html>
