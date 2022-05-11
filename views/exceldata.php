<?php
    $filename=$_GET['filename'];
    $startdate=$_GET['startdate'];
    $enddate=$_GET['enddate'];
    $reportname=$_GET['reportname'];
    $reportdata="<table><thead><tr><th>".$reportname."</th></tr></thead>";
    $reportdata.="<tbody><tr><td>Filter Options:</td></tr>";
    $reportdata.="<tr><td>Date From: ".$startdate."</td><td> Date To: ".$enddate."</td></tr><tr><td>&nbsp;</tr></tbody></table>";
    $reportdata.= $_GET["data"];
    header("Content-Type:application/vnd.ms-excel");
    header("content-disposition: attachment; filename=".$filename."_".rand().".xls");
    echo  $reportdata;
?>