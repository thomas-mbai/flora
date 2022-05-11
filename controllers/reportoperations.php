<?php
require_once("../models/reports.php");
$report=new report();
if(isset($_GET['reportname'])){
    $reportname=$_GET['reportname'];
    $startdate=$_GET['startdate'];
    $enddate=$_GET['enddate'];
    if($reportname=="getheadsizestemwisereport"){
        echo $report-> getheadsizestemwisereport($startdate,$enddate);
    }elseif ($reportname=="getvarietystemwisereport") {
        echo $report->getvarietystemwisereport($startdate,$enddate);
    }elseif ($reportname=="getrejectionreport"){
        echo $report->getrejectionreport($startdate,$enddate);
    }elseif($reportname=="getvarietydispatchreport"){
        echo $report->getvarietydispatchreport($startdate,$enddate);
    }elseif($reportname=="getproductionreport"){
        echo $report->getproductionreport($startdate,$enddate);
    }elseif($reportname=="getrandomchecksreport"){
        echo $report->getrandomchecksreport($startdate,$enddate);
    }
}

?>