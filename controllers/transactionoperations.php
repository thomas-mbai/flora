<?php
    require_once("../models/transactions.php");
    $transaction=new transaction();

    if(isset($_POST['saveflowercollection'])){
        $refno=mt_rand(1000,9999);
        $tableData = stripcslashes($_POST['TableData']);
        // Decode the JSON array
        $tableData = json_decode($tableData,TRUE);
        foreach($tableData as $collectionitem){
            $unitid=$collectionitem['unitid'];
            $varietyid=$collectionitem['varietyid'];
            $stemlength=$collectionitem['stemlength'];
            $quantity=$collectionitem['quantity'];
            $driverid=$collectionitem['driverid'];
            $bucketcapacity=$collectionitem['bucketcapacity'];
            $fullbucket=$collectionitem['fullbucket'];
            $pickingdate=$collectionitem['pickingdate'];
            $collectiondate=$collectionitem['collectiondate'];
            $tagid=$collectionitem['tagid'];
            $harvesterid=$collectionitem['harvesterid'];
            $transaction->savetempcollectiondetails($refno,$unitid,$varietyid,$stemlength,$quantity,$driverid,$bucketcapacity,$fullbucket,$pickingdate,$collectiondate,$tagid,$harvesterid);
        }
        echo $transaction->savecollectiondetails($refno);
    }
    if(isset($_POST['saveflowerrandomcheck'])){
        $refno=mt_rand(1000,9999);
        $unitid=$_POST['unitid'];
        $varietyid=$_POST['varietyid'];
        $stemlength=$_POST['stemlength'];
        $counted=$_POST['counted'];
        $remarks=$_POST['remarks'];
        $receivingid=$_POST['receivingid'];
        // get verified details
        $verifieddetails=stripcslashes($_POST['verifieddetails']);
        $verifieddetails=json_decode($verifieddetails,TRUE);
        
        // get faults
        $faults=stripcslashes($_POST['faults']);
        $faults=json_decode($faults,TRUE);

        $id=0;
        // temp save verified details
        foreach($verifieddetails as $detail){
            $stemlengthid=$detail['stemlength'];
            $quantity=$detail['quantity'];
            $transaction->savetemprandomcheckverification($refno,$stemlengthid,$quantity);
        }

        // temp save faults
        foreach($faults as $detail){
            $faultid=$detail['faultid'];
            $quantity=$detail['quantity'];
            $transaction->savetemprandomcheckfaults($refno,$faultid,$quantity);
        }

        // save the random check
        echo $transaction->saverandomcheck($id,$unitid,$varietyid,$stemlength,$counted,$refno,$remarks,$receivingid);
    }

    if(isset($_POST['saveqcpassed'])){
        $id=$_POST['id'];
        $varietyid=$_POST['varietyid'];
        $bunchstyleid=$_POST['bunchstyleid'];
        $buncherid=$_POST['buncherid'];
        echo $transaction->savequalitycontrolpassed($id,$varietyid,$bunchstyleid,$buncherid);
    }
    if(isset($_GET['getcurrentqcpassed'])){
        $startdate=date("Y/m/d");
        $enddate=date("Y/m/d");
        $userid=$_SESSION['userid'];
        echo $transaction->getqualitycontrolpassed($startdate,$enddate,$userid);
    }
    if(isset($_GET['getqualitycontroltally'])){
        $startdate=date("Y/m/d");
        $enddate=date("Y/m/d");
        echo $transaction->getqualitycontroltally($startdate,$enddate);
    }
    if(isset($_POST['savegradinghallinventory'])){
        $source='Receiving Bay';
        $narration='Transferred from receiving inventory';
        $refno=mt_rand(1000,9999);
        $inventory=stripcslashes($_POST['inventory']);
        $inventory=json_decode($inventory,TRUE);

        foreach($inventory as $item){
            $varietyid=$item['varietyid'];
            $stemlengthid=$item['stemlengthid'];
            $quantity=$item['quantity'];
            $fullbucket=$item['fullbucket'];
            $bucketcapacity=$item['bucketcapacity'];
            $receivingid=$item['receivingid'];
            $transaction->savetempgradinghallinventory($refno,$varietyid,$stemlengthid,$quantity,$fullbucket,$bucketcapacity,$receivingid);
        }
        echo $transaction->savegradinghallinventory($refno,$source,$narration);
    }
    if(isset($_POST['savegradingreject'])){
        $rejects=stripcslashes($_POST['rejects']);
        $rejects=json_decode($rejects,TRUE);
        $refno=mt_rand(1000,9999);
        foreach($rejects as $rejecteditem){
            $varietyid=$rejecteditem['varietyid'];
            $buncherid=$rejecteditem['buncherid'];
            $rejectid=$rejecteditem['rejectid'];
            $quantity=$rejecteditem['quantity'];
            $transaction->savetempgradingreject($refno,$varietyid,$buncherid,$rejectid,$quantity);
        }
        echo $transaction->savegradingreject($refno);
    }
    if(isset($_POST['savegradingstorage'])){
        $items=stripcslashes($_POST['items']);
        $items=json_decode($items,TRUE);
        $refno=mt_rand(1000,9999);
        $source='Grading Hall';
        $narration='Transferred from Grading Hall';
        foreach($items as $item){
            $varietyid=$item['varietyid'];
            $bunchingstyleid=$item['bunchingstyleid'];
            $stemlengthid=$item['stemlengthid'];
            $quantity=$item['quantity'];
            $headsizeid=$item['headsizeid'];
            $tag=$item['tag'];
            $transaction->savetempgradingstorageinventory($refno,$tag,$varietyid,$bunchingstyleid,$stemlengthid,$headsizeid,$quantity);
        }
        echo $transaction->savegradingstorageinventory($refno,$source,$narration);
    }
    if(isset($_GET['getcollectiondetailsbytag'])){
        $tag=$_GET['tag'];
        echo $transaction->getcollectiondetailsbytag($tag);
    }
    if(isset($_POST['savereceivedinventory'])){
        $refno=mt_rand(1000,9999);
        $items=json_decode(stripcslashes($_POST['items']),TRUE);
        foreach($items as $item){
            $driverid=$item['driverid'];
            $varietyid=$item['varietyid'];
            $unitid=$item['unitid'];
            $stemlengthid=$item['stemlength'];
            $tagid=$item['tagid'];
            $pickingdate=$item['pickingdate'];
            $collectiondate=$item['collectiondate'];
            $quantity=$item['quantity'];
            $fullbucket=$item['fullbucket'];
            $bucketcapacity=$item['bucketcapacity'];
            $tagid=$item['tagid'];
            $transaction->savetempreceivinginventory($refno,$driverid,$varietyid,$unitid,$stemlengthid,$tagid,$pickingdate,$collectiondate,$quantity,$fullbucket,$bucketcapacity);
        }
        echo $transaction->savereceivedinventory($refno);
    }
    if(isset($_GET['getreceivinginventorybytag'])){
        $tag=$_GET['tag'];
        echo $transaction->getreceivedinventorybytag($tag);
    }
    if(isset($_POST['savepackaginglist'])){
        $items=json_decode(stripcslashes($_POST['items']),TRUE);
        $refno=$transaction->randomNumber();
        foreach($items as $item){
            $tagid=$item['tagid'];
            $customerid=$item['customerid'];
            $orderid=$item['orderid'];
            $varietyid=$item['varietyid'];
            $packagesizeid=$item['packagesizeid'];
            $stemlengthid=$item['stemlengthid'];
            $headsizeid=$item['headsize'];
            $quantity=$item['quantity'];
            $weight=$item['weight'];
            $bunchingstyleid=$item['bunchingstyleid'];
            $transaction->savetemppackinglist($refno,$tagid,$customerid,$orderid,$varietyid,$packagesizeid,$stemlengthid,$bunchingstyleid,$headsizeid,$quantity,$weight);
        }
        echo $transaction->savepackinglist($refno);
    }
    if(isset($_GET['getpackinglist'])){
        $tag=$_GET['tag'];
        echo $transaction->getpackinglist($tag);
    }
    if(isset($_POST['savedispatch'])){
        $items=json_decode(stripcslashes($_POST['items']),TRUE);
        $refno=$transaction->randomNumber();
        foreach($items as $item){
            $packingid=$item['id'];
            $transaction->savetempdispatch($refno,$packingid);
        }
        echo $transaction->savedispatch($refno);
    }
    if(isset($_POST['savediscard'])){
        $refno=$transaction->randomNumber();
        $items=json_decode(stripcslashes($_POST['items']),TRUE);
        foreach($items as $item){
            $category=$item['category'];
            $varietyid=$item['varietyid'];
            $stemlength=$item['stemlength'];
            $headsize=$item['headsize'];
            $quantity=$item['quantity'];
            $reason=$item['reason'];
            $transaction->savetempdiscards($refno,$category,$varietyid,$stemlength,$headsize,$quantity,$reason);
        }
        echo $transaction->savediscards($refno);
    }
    if(isset($_GET['getbucketedgradedflowers'])){
        $tag=$_GET['tag'];
        echo $transaction->getbucketedgradedflowers($tag);
    }
    if(isset($_POST['saveunpackedgradedbuckets'])){
        $refno=rand(1000,9999);
        $buckets=json_decode(stripcslashes($_POST['buckets']),TRUE);
        foreach($buckets as $bucket){
            $id=$bucket['id'];
            $transaction->savetempgradedunpackedbucket($refno,$id);
        }
        echo $transaction->savegradedunpackedbucket($refno);
    }
    if(isset($_POST['deletequalitycontrolpass'])){
        $id=$_POST['id'];
        echo $transaction->deletequalitycontrolpass($id);
    }
?>