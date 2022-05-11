<?php
    require_once("../models/customer.php");
    $customer= new customer();
    if(isset($_POST['savecustomer'])){
        $id=$_POST['id'];
        $customername=$_POST['customername'];
        $physicaladdress=$_POST['physicaladdress'];
        $postaladdress=$_POST['postaladdress'];
        $telephone=$_POST['telephone'];
        $email=$_POST['email'];
        echo $customer->savecustomer($id,$customername,$physicaladdress,$postaladdress,$telephone,$email);
    }
    if(isset($_GET['getcustomers'])){
        echo $customer->getcustomers();
    }
    if(isset($_GET['getcustomerdetails'])){
        $id=$_GET['customerid'];
        echo $customer->getcustomerdetails($id);
    }
    if(isset($_POST['savecustomerorder'])){
        
        $orderitems=json_decode(stripcslashes($_POST['orderitems']),TRUE);
        $refno=mt_rand(1000,9999);
        $customerid=$_POST['customerid'];
        $orderno=$_POST['orderno'];
        $orderdate=$_POST['orderdate'];

        foreach($orderitems as $orderitem){
            $varietyid=$orderitem['variety'];
            $stemlengthid=$orderitem['stemlength'];
            $headsize=$orderitem['headsize'];
            $quantity=$orderitem['quantity'];
            $packrate=$orderitem['packrate'];
            $boxtype=$orderitem['boxtype'];
            $boxes=$orderitem['boxes'];
            $customer->savetempcustomerorder($refno,$varietyid,$stemlengthid,$headsize,$quantity,$packrate,$boxtype,$boxes);
        }

        echo $customer->savecustomerorder($refno,$customerid,$orderno,$orderdate);
    }
    if(isset($_GET['getcustomerorders'])){
        $customerid=$_GET['customerid'];
        echo $customer->getcustomerorders($customerid);
    }
    if(isset($_GET['getdistinctcustomerorders'])){
        $customerid=$_GET['customerid'];
        echo $customer-> getdistinctcustomerorders($customerid);
    }
?>