$(document).ready(function(){
    var receivedvarietyfield=$("#receivedvariety"),
        receivedstemlengthfield=$("#receivedstemlength"),
        receivedbucketsize=$("#receivedbucketsize"),
        receivedfullbucketsfield=$("#fullbuckets"),
        receivedunderfillbucketsfield=$("#underfillbucket"),
        rejectedstemsdiv=$("#rejectedstemsdiv"),
        rejectedvarietyfield=$("#rejectedvariety"),
        rejectedreasonfield=$("#rejectedreason"),
        navitem=$("#grading"),
        rejectbuncherfield=$("#rejectedbuncher"),
        addreceivedbutton=$("#addreceivetolist"),
        clearreceivedbutton=$("#clearreceiveform"),
        receivedfullbucketstable=$("#receivedfullbucketstable"),
        receivedunderfillbucketstable=$("#receivedunderfillbucketstable"),
        receivedcontinousadd=$("#receivedcontinousadd"),
        receivedstemsdiv=$("#receivedstems"),
        receivedbucketsdiv=$("#receivedbuckets"),
        receivederrordiv=$("#receivederrors"),
        receivedsavebutton=$("#savereceivedbutton"),
        receivedfullbucketslist=$("#receivedfullbucketslist"),
        receivedunderfillbucketslist=$("#receivedunderfillbucketslist"),
        rejectaddbutton=$("#addrejecttolist"),
        rejectclearbutton=$("#clearrejectform"),
        rejectedstemsfield=$("#rejectedstems"),
        rejecterrordiv=$("#rejectederrors"),
        rejectedcontinousadd=$("#rejectcontinousadd"),
        rejectedstemslist=$("#rejectedstemslist"),
        rejectedstemssavebutton=$("#saverejectedstems"),
        storagevarietyfield=$("#storagevariety"),
        storagestemlengthfield=$("#storagestemlength"),
        storageheadsizefield=$("#storageheadsize"),
        storagequantityfield=$("#storagequantity"),
        storageaddbutton=$("#addstoragetolist"),
        storageclearbutton=$("#clearstorageform"),
        storageerrordiv=$("#storageerrors"),
        storagestemstable=$("#storagestemstable"),
        storagecontinousadd=$("#storagecontinousadd"),
        storagebunchingstylefield=$("#storagebunchingstyle"),
        storageitemslist=$("#storageitemslist"),
        storagesavebutton=$("#saverestoragestems"),
        qcvarietylist=$("#qcvariety"),
        bunchingstylelist=$("#bunchingstyle"),
        qcbuncherslist=$("#qcbunchers"),
        saveqcpassedbutton=$("#addqcpassed"),
        qcerrordiv=$("#qcerrordiv"),
        qcid=$("#qcid"),
        addedqclist=$("#qclist"),
        qctally=$("#qctally"),
        tagfield=$("#tag"),
        receivingidfield=$("#receivingid"),
        usedtags=[],
        qcvarietycount=8,
        qcvarietycurrentpage=1,
        totalvarietycount=0,
        qcfirstpage=$("#firstvarietyitem"),
        qclastpage=$("#lastvarietyitem"),
        qcnextpage=$("#nextvarietyitem"),
        qcpreviouspage=$("#previousvarietyitem"),
        bunchercount=25,
        bunchercurrentpage=1,
        bunchertotal=0,
        firstbuncher=$("#firstbunchers"),
        nextbunchers=$("#nextbunchers"),
        previousbunchers=$("#previousbunchers"),
        lastbunchers=$("#lastbunchers"),
        savestoragetag=$("#savestoragetag"),
        usedstoragetags=[],
        selectfields=$("select"),
        inputfields=$("input"),
        receiptvariablefield=$("#receiptvariablefields")

    navitem.addClass("active")
    // set module name
    setModuleName("Grading")
    // show user logged in
    setLoggedInUserName()
    // get flower varieties
    getFlowerVarieties()
    // get stem lengths
    getStemLength()
    // get flower reject reasons
    getFlowerRejectReasons()
    // get bunchers
    getbunchers()
    // get flower head sizes
    getFlowerHeadSizes()
    // get bunching style
    getbunchingstyle()
    // show recently added qc items
    getcurrentlysavedqc()
    // get current quality control tally
    getcurrentqctally()

    // check received continous add
    receivedcontinousadd.prop("checked",false)
    rejectedcontinousadd.prop("checked",true)
    storagecontinousadd.prop("checked",true)
    
    // hide receipt variable fields
    receiptvariablefield.hide()

    //receivedfullbuckets.html(showAlert('info', "Received Full Buckets",1))
    //receivedunderfillbuckets.html(showAlert('info', "Received Underfill Buckets",1))
    rejectedstemsdiv.html(showAlert('info', "Rejected Stems List",1))
    // pad zeros to savestorage tag
    savestoragetag.on("focusout",function(){
        tag=savestoragetag.val()
        tag=padzeros(tag)
        savestoragetag.val(tag)
    })

    // navigate varieties using pagination
    function navigateqcvarieties(page){
        var min=0, max=0
        switch (page) {
            case "start":
                qcvarietycurrentpage=1
                max=qcvarietycount
                break;
            case "next":
                qcvarietycurrentpage+=1
                max=qcvarietycount*qcvarietycurrentpage
                min=max-qcvarietycount
                break;
            case "previous":
                qcvarietycurrentpage-=1
                max=qcvarietycount*qcvarietycurrentpage
                min=max-qcvarietycount
                break;
            case "end":
                qcvarietycurrentpage=parseInt(totalvarietycount/qcvarietycount)
                max=totalvarietycount
                min=totalvarietycount-qcvarietycount
                break;
        }
        // console.log(min+", "+max)
        min=min<0?0:min
        for(i=min;i<=max;i++){
            qcvarietylist.find(".list-group-item").each(function(){
                //console.log($(this).attr("data-count"))
                var counter=parseInt($(this).attr("data-count"))
                if(counter>=min && counter<=max){
                    $(this).show()
                }else{
                    $(this).hide()
                }
            })
        }
    }

    function navigateqcbunchers(page){
        var min=0,max=0
        switch (page) {
            case "start":
                bunchercurrentpage=1
                max=bunchercount
                break;
            case "next":
                bunchercurrentpage+=1
                max=bunchercount*bunchercurrentpage
                min=max-bunchercount
                break;
            case "previous":
                bunchercurrentpage-=1
                max=bunchercount*bunchercurrentpage
                min=max-bunchercount
                break;
            case "end":
                bunchercurrentpage=parseInt(bunchertotal/bunchercount)
                max=bunchertotal
                min=bunchertotal-bunchercount
                break;
        }
        qcbuncherslist.find("tr td").each(function(){
            val=parseInt($(this).text())
            if(val>min && val<=max){
                $(this).show()
            }else{
                $(this).hide()
            }
        })
    }
    qcfirstpage.on("click",function(){
        navigateqcvarieties("first")
    })

    qcnextpage.on("click",function(){
        navigateqcvarieties("next")
    })

    qcpreviouspage.on("click", function(){
        navigateqcvarieties("previous")
    })

    qclastpage.on("click",function(){
        navigateqcvarieties("last")
    })

    firstbuncher.on("click",function(){
        navigateqcbunchers("first")
    })

    nextbunchers.on("click",function(){
        navigateqcbunchers("next")
    })

    previousbunchers.on("click",function(){
        navigateqcbunchers("previous")
    })

    lastbunchers.on("click",function(){})
    function getFlowerVarieties(){
        var results="<option value=''>&lt;Choose One&gt;</option>",
            qcvariety="",
            i=0
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowervarieties:true
            },
            function(data){
                totalvarietycount=data.length
                for( i=0;i<data.length;i++){
                    //var count=i+1
                    results+="<option value='"+data[i].varietyid+"'>"+data[i].varietyname+"</option>"
                    qcvariety+="<li class='list-group-item' data-count='"+i+"' id='"+data[i].varietyid+"'>"+data[i].varietyname+"</li>"
                }  
                receivedvarietyfield.html(results)
                rejectedvarietyfield.html(results)
                storagevarietyfield.html(results)
                //console.log(qcvariety)
                $(qcvariety).appendTo(qcvarietylist)
                // how the first qcvariety
                qcvarietylist.find(".list-group-item").each(function(){
                    //console.log($(this).attr("data-count"))
                    if(parseInt($(this).attr("data-count"))>qcvarietycount){
                        $(this).hide()
                    }
                })
            }
        )
    }

    function getStemLength(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getstemlength:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].stemlengthid+"'>"+data[i].stemlength+"</option>"
                }
                receivedstemlengthfield.html(results)
                storagestemlengthfield.html(results)
            }
        )
    }

    // listen to received variety selection then get bucket size
    receivedvarietyfield.on("click",function(){
        var varietyid=receivedvarietyfield.val()
        if(varietyid==""){
            receivedbucketsize.val("")
        }else{
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    getvarietydetails:true,
                    varietyid:varietyid
                },
                function(data){
                    receivedbucketsize.val(data[0].bucketcapacity)
                }
            )
        }
    })

    function getFlowerRejectReasons(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerrejectreasons:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].description+"</option>"
                }
                rejectedreasonfield.html(results)
            }
        )
    }

    function getbunchers(){
        var results="<option value=''>&lt;Choose One&gt;</option>",
            x=0,
            buncherslist="<table class='table mt-3'><tr>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getbunchers:true
            },
            function(data){
                bunchertotal=data.length
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].buncherid+"'>"+data[i].bunchername+"</option>"
                     // populate quality control bunchers list
                     if(x<=4){
                        x+=1
                    }else{
                        buncherslist+="</tr><tr>"
                        x=1
                    }
                    buncherslist+="<td id='"+data[i].buncherid+"' class='text-center'><span class='lead'>"+data[i].bunchername+"</span></td>"
                }

                rejectbuncherfield.html(results)

                buncherslist+="</tr></table"
                $(buncherslist).appendTo(qcbuncherslist)
                // show the first batch only
                qcbuncherslist.find("tr td").each(function(){
                    val=parseInt($(this).text())
                    if(val>bunchercount){
                        $(this).hide()
                    }
                    //console.log(val)
                })
            }
        )
    }

    // listen to add received flowers button
    addreceivedbutton.on("click",function(){
        var variety=receivedvarietyfield.val(),
            stemlength=receivedstemlengthfield.val(),
            receivedfullbuckets=receivedfullbucketsfield.val(),
            receivedunderfillbuckets=receivedunderfillbucketsfield.val(),
            errors="",results="", receivingid=0, tag=tagfield.val()
        // check for blank fields
        if(variety==""){
            errors="Please select flower variety"
            receivedvarietyfield.focus()
        }else if(stemlength==""){
            errors="Please select stem  length"
            receivedstemlengthfield.focus()
        }else if(receivedfullbuckets=="" && receivedunderfillbuckets==""){
            errors="Please provide Full or underfill quantity."
        }
        if(errors==""){
                var itemcount,
                varietyname=receivedvarietyfield.find("option:selected").html(),
                stemlengthname=receivedstemlengthfield.find("option:selected").html(),
                underfillitems=[],
                underfilltotal=0
                receivingid=receivingidfield.val()
            // add the items to the list
            if(parseFloat(receivedfullbucketsfield.val())>0){
                // add full bucket if any
                fullbucketquantity=receivedfullbucketsfield.val()
                bucketcapacity=receivedbucketsize.val()
                results+="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                results+="<div class='flex-column'><h6>#"+tag+" "+varietyname+"</h6>"
                results+="<p><small>Stem Length: "+stemlengthname+"&nbsp;&nbsp; Bucket Capacity:"+bucketcapacity+"&nbsp;&nbsp; Buckets: <span class='buckets'>"+fullbucketquantity+"</span></small></p></div>"
                results+="<div><span class='badge badge-info badge-pill quantity'> "+parseFloat(fullbucketquantity*bucketcapacity)+"</span> "
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+fullbucketquantity+"' data-bucketsize='"+bucketcapacity+"'  data-receivingid='"+receivingid+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id=''><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                results+="</div></li>"
                //console.log(results)
                $(results).appendTo(receivedfullbucketslist)
            }
            if(receivedunderfillbucketsfield.val()!=""){
                underfillquantity=receivedunderfillbucketsfield.val()
                // generate array and add the items together

                // remove multiple spaces and replace with a single space
                // also remove both leading and trailing spaces
                underfillquantity = $.trim(underfillquantity.replace(/ +(?= )/g,''))
                underfillitems=underfillquantity.split(" ")
                for(var i=0;i<underfillitems.length;i++){
                    underfilltotal+=parseFloat(underfillitems[i])
                }

                results="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                results+="<div  class='flex-column'><h6>#"+tag+" "+varietyname+"</h6>"
                results+="<p><small>Stem Length: "+stemlengthname+"</small></p></div>"
                results+="<div><span class='badge badge-info badge-pill quantity'> "+underfilltotal+"</span> "
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+underfillquantity+"' data-totalquantity='"+underfilltotal+"' data-receivingid='"+receivingid+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                results+="</div></li>"
                //console.log(results)
                $(results).appendTo(receivedunderfillbucketslist)
            }
            //
            if(receivedcontinousadd.prop("checked")){
                receivedunderfillbucketsfield.val("")
                receivedfullbucketsfield.val("")
                receivedfullbucketsfield.focus()
            }else{
                clearReceivedForm()
            }
            errors="Receipt details added to the list"
            receivederrordiv.html(showAlert('success',errors))
            //compute the totals
            computetotals()      
        }else{
            receivederrordiv.html(showAlert('info',errors))
        }
    })

    function clearReceivedForm(){
        receivedvarietyfield.val("")
        receivedstemlengthfield.val(""),
        receivedbucketsize.val("")
        receivedfullbucketsfield.val("")
        receivedunderfillbucketsfield.val("")
        tagfield.val("")
        tagfield.focus()
    }

    function computetotals(){
        var stems=0, buckets=0
        receivedfullbucketslist.find(".buckets").each(function(){
            //console.log($(this).html())
            buckets+=parseFloat($(this).html())
        })
        buckets+=parseFloat(receivedunderfillbucketslist.children().length-1) // ignore the heading
        receivedbucketsdiv.html($.number(buckets))

        receivedfullbucketslist.find(".quantity").each(function(){
            stems+=parseFloat($(this).html())
        })
        receivedunderfillbucketslist.find(".quantity").each(function(){
            stems+=parseFloat($(this).html())
        })
        receivedstemsdiv.html($.number(stems))
    }

    clearreceivedbutton.on("click",function(){
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to clear the form?",
             buttons: {
                  danger: {
                     label: "Yes, clear the form",
                     className: "btn-danger btn-sm",
                     callback: function() {
                         //console.log(parent)
                         clearReceivedForm()
                         $('.bootbox').modal('hide');
                     }
                 },
                 success: {
                     label: "No, leave the form as is",
                     className: "btn-success btn-sm",
                     callback: function() {
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
    })
    
    //listen to reject add button
    rejectaddbutton.on("click",function(){
        var buncher=rejectbuncherfield.val(),
            variety=rejectedvarietyfield.val(),
            reason=rejectedreasonfield.val(),
            stems=rejectedstemsfield.val(),
            errors="",
            message=""
        // check for blank fields
        if(buncher==""){
            errors="Please select a buncher"
            rejectbuncherfield.focus()
        }else if(variety==""){
            errors="Please select a flower variety"
            rejectedvarietyfield.focus()
        }else if(reason==""){
            errors="Please select rejection reason"
            rejectedreasonfield.focus()
        }else if(stems=="" || parseFloat(stems)==0){
            errors="Please provide stems rejected"
            rejectedstemsfield.focus()
        }
        if(errors==""){
                var bunchername=rejectbuncherfield.find("option:selected").html(),
                    varietyname=rejectedvarietyfield.find("option:selected").html(),
                    reasonname=rejectedreasonfield.find("option:selected").html(),
                    results=""
                   
                    results+="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center item'>"
                    results+="<div class='flex-column'><h6>"+reasonname+"</h6>"
                    results+="<p><small>Buncher: "+bunchername+"&nbsp;&nbsp; Variety:"+varietyname+"</small></p></div>"
                    results+="<div><span class='badge badge-info badge-pill quantity'> "+parseFloat(stems)+"</span> "
                    results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-variety='"+variety+"' data-buncher='"+buncher+"' data-quantity='"+stems+"' data-rejectid='"+reason+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                    results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id=''><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                    results+="</div></li>"
                    $(results).appendTo(rejectedstemslist)
                    message="Flowers rejected added to list."
                    rejecterrordiv.html(showAlert('success',message))
                    if (rejectedcontinousadd.prop("checked")){
                        rejectedreasonfield.val("")
                        rejectedstemsfield.val("")
                        rejectedreasonfield.focus()
                    }else{
                        clearRejectedForm()
                    }
        }else{
            rejecterrordiv.html(showAlert('info',errors))
        }
    })

    function clearRejectedForm(){
        rejectbuncherfield.val("")
        rejectedvarietyfield.val("")
        rejectedreasonfield.val("")
        rejectedstemsfield.val("")
        rejectbuncherfield.focus()
        rejectedstemslist.find(".item").remove()
    }

    // listen to clear button in reject tab
    rejectclearbutton.on("click", function(){
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to clear the form?",
             buttons: {
                  danger: {
                     label: "Yes, clear form",
                     className: "btn-danger btn-sm",
                     callback: function() {
                         //console.log(parent)
                         rejecterrordiv.html("")
                         clearRejectedForm()
                         $('.bootbox').modal('hide');
                     }
                 },
                 success: {
                     label: "No, maintain form content",
                     className: "btn-success btn-sm",
                     callback: function() {
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
    })

    function getFlowerHeadSizes(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerheadsizes:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].headsize+"</option>"
                }  
                storageheadsizefield.html(results)
            }
        ) 
    }

    // listen to add storage item 
    storageaddbutton.on("click",function(){
        var variety=storagevarietyfield.val(),
            stemlength=storagestemlengthfield.val(),
            headsize=storageheadsizefield.val(),
            quantity=storagequantityfield.val(),
            bunchingstyleid=storagebunchingstylefield.val()
            errors="",
            message="",
            tag= savestoragetag.val(),
            storagemessageanchor=document.getElementById("storageerrors")
        //check for blank fields
       // console.log("The tag is: "+tag)
        if(tag==""){
            errors="Please enter tag"
            savestoragetag.focus()
        }else if(variety==""){
            errors="Please select variety"
            storagevarietyfield.focus()
        }else if(stemlength==""){
            errors="Please select stem length"
            storagestemlengthfield.focus()
        }else if(bunchingstyleid==""){
            errors="Please select bunching style"
            storagebunchingstylefield.focus()
        }else if(quantity=="" || parseFloat(quantity)<=0){
            errors="Please provide correct quantity"
            storagequantityfield.focus()
        }else if(!storageheadsizefield.prop("disabled")){
            if(headsize==""){
                errors="Please select head size"
                storageheadsizefield.focus()
            }    
        }else{
            headsize="0"
        }
        if(usedstoragetags.includes(tag)){
            errors="The tag has already been added to the list"
        }
        // check if the tag is being used already
        gettagstatus(tag).done(function(){
            console.log(storagetagstatus)
            if (storagetagstatus=="used"){
                errors="The tag is already in use."
            }
            if(errors==""){
                var varietyname=storagevarietyfield.find("option:selected").html(),
                    stemlengthname=storagestemlengthfield.find("option:selected").html(),
                    headsizename=storageheadsizefield.find("option:selected").html(),
                    bunchstylename=storagebunchingstylefield.find("option:selected").html(),
                    results=""
                if(headsize=="0"){
                    headsizename="-"
                }
                results+="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                results+="<div class='flex-column'><h6>#"+tag+": "+varietyname+"</h6>"
                results+="<p><small>Bunch style : "+bunchstylename+", Stem length: "+stemlengthname+"<br/> Headsize : "+headsizename+", Bunches: "+quantity+"</small></p></div>"
                results+="<div><span class='badge badge-info badge-pill quantity'> "+parseFloat(quantity*bunchstylename)+"</span> "
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-tag='"+tag+"' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+quantity+"' data-headsize='"+headsize+"' data-bunchingstyle='"+bunchingstyleid+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id=''><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                results+="</div></li>"
                $(results).appendTo(storageitemslist)
                // add tag to already used tags array
                usedstoragetags.push(tag)
                message="Flowers added to storage list."
                storageerrordiv.html(showAlert('success',message))
                // scroll to view messages at the top of the page
                storagemessageanchor.scrollIntoView()
                if (storagecontinousadd.prop("checked")){
                    storageheadsizefield.val("")
                    storagequantityfield.val("")
                    //storageheadsizefield.focus()
                    savestoragetag.val("")
                    savestoragetag.focus()
                }else{
                    clearStorageForm()
                }
                
            }else{
                storageerrordiv.html(showAlert('info',errors))
                storagemessageanchor.scrollIntoView()
            }
        })
    })

    function clearStorageForm(){
        storagevarietyfield.val("")
        storagestemlengthfield.val("")
        storageheadsizefield.val("")
        storagequantityfield.val("")
        storagevarietyfield.focus()
        usedstoragetags=[]
    }

    // listen to storage clear button click
    storageclearbutton.on("click",function(){
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to clear the form?",
             buttons: {
                  danger: {
                     label: "Yes, clear the form",
                     className: "btn-danger sm",
                     callback: function() {
                         //console.log(parent)
                         storageerrordiv.html("")
                         storagestemstable.find("tbody").html("")
                         clearStorageForm()
                         $('.bootbox').modal('hide');
                     }
                 },
                 success: {
                     label: "No, maintain form content",
                     className: "btn-success sm",
                     callback: function() {
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
    })

    // validate whether headsize is required
    storagevarietyfield.on("change",function(){
        varietyid=storagevarietyfield.val()
        if(varietyid!=""){
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    getvarietydetails:true,
                    varietyid:varietyid
                },
                function(data){
                    if(parseFloat(data[0].measurehead)===1){
                        storageheadsizefield.prop("disabled",false)
                    }else{
                        storageheadsizefield.prop("disabled",true)
                    }
                }
            )
        }
    })

    function getbunchingstyle(){
        var results="<table class='table mt-3'><tr>",
            storagebunchingstyle="<option value=''>&lt;Choose One&gt;"
            x=0
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getbunchingsizes:true,
                standard:'All'
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    storagebunchingstyle+="<option value="+data[i].id+"'>"+data[i].quantity+"</option>"
                    if(x<=4){
                        x+=1
                    }else{
                        results+="</tr><tr>"
                        x=1
                    }
                    results+="<td id='"+data[i].id+"' class='text-center'><span class='lead'>"+data[i].quantity+"</span></td>"
                }
                results+="</tr></table"
                $(results).appendTo(bunchingstylelist)
                storagebunchingstylefield.html(storagebunchingstyle)
            }
        )
    }

    // highlight selected qc variety
    qcvarietylist.on("click","li",function(){
        // unselect selected choice first
        $this=$(this)
        qcvarietylist.find(".chosen").removeClass('chosen')
        // highlight the selected choice
        $this.addClass("chosen")
        qcerrordiv.html("")
    })

    // highlight selected QC bunching style
    bunchingstylelist.on("click","td",function(){
        $this=$(this)
        bunchingstylelist.find(".chosen").removeClass("chosen")
        $this.addClass("chosen")
        qcerrordiv.html("")
    })

    // highlight selected QC buncher
    qcbuncherslist.on("click","td",function(){
        $this=$(this)
        qcbuncherslist.find(".chosen").removeClass("chosen")
        $this.addClass("chosen")
        qcerrordiv.html("")
    })

    saveqcpassedbutton.on("click",function(){
        var varietyid=qcvarietylist.find(".chosen").attr("id"),
            bunchstyleid=bunchingstylelist.find(".chosen").find("span").html(),
            buncherid=qcbuncherslist.find(".chosen").find("span").html(),
            errors="",
            id=qcid.val()
        
        // check for blank fields
       
        if(varietyid==undefined ){
            errors="Please select a flower variety"
        }else if(bunchstyleid==undefined){
            errors="Please select bunch style "
        }else if(buncherid==undefined){
            errors="Please select a buncher"
        }

        if(errors==""){
            $.post(
                "../controllers/transactionoperations.php",
                {
                    saveqcpassed:true,
                    id:id,
                    varietyid:varietyid,
                    bunchstyleid:bunchstyleid,
                    buncherid:buncherid
                },
                function(data){
                    if(data=="success"){
                        message="Quality controll saved successfully."
                        qcerrordiv.html(showAlert('success',message))
                        // refresh the list
                        getcurrentlysavedqc()
                        getcurrentqctally()
                        // clear the buncher field
                        qcbuncherslist.find(".chosen").removeClass("chosen")
                    }else{
                        qcerrordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            qcerrordiv.html(showAlert('info',errors))
        }
    })

    // get current saved qc
    function getcurrentlysavedqc(){
        var results="<li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Recently Added QC Passes</li>",count=0
        $.getJSON(
            "../controllers/transactionoperations.php",
            {
                getcurrentqcpassed:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<li class='list-group-item list-group-item-action flex-column justify-content-between align-items-start'>"
                    results+="<div class='d-flex w-100 justify-content-between'><h6>"+data[i].varietyname+"</h6><small>"+data[i].addedon+"</small></div>"
                    results+="<p class='d-flex w-100 justify-content-between'><span><small>Bunch Style: "+data[i].quantity+"&nbsp;&nbsp; Buncher:"+data[i].bunchername+"</small></span>"
                    results+="<a href='javascript void(0)' class='deletedata' data-id='"+data[i].id+"'><span><i class='fas fa-trash fa-sm mt-2'></i></span></a></p></li>"
                }
                addedqclist.html(results)
            }
        )
    }

    function getcurrentqctally(){
        var results="<li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>General Tally</li>", 
            previousbuncher="",itemlist="",totalcount=0
        $.getJSON(
            "../controllers/transactionoperations.php",
            {
                getqualitycontroltally:true
            },
            function(data){
                if(data.length>0){
                    previousbuncher=data[0].bunchername
                    // add the first buncher
                    results+="<li  class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                    results+="<div class='flex-column'><h6>Buncher "+data[0].bunchername+"</h6>"
                    totalcount=data[0].totalcount
                    for(var i=0;i<data.length;i++){
                        if(data[i].bunchername==previousbuncher){
                            itemlist+=data[i].varietyname+" ("+data[i].varietycount+"), "
                        }else{
                            // add the listitem
                            results+="<p><small>"+itemlist+"</small></p></div>"   
                            results+="<div>"   
                            results+="<span class='badge badge-info badge-pill lead'> "+totalcount+"</span> </div></li>"  
                            
                            // add the new buncher
                            results+="<li  class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                            results+="<div class='flex-column'><h6>Buncher "+data[i].bunchername+"</h6>"

                            // reset the items list
                            itemlist=data[i].varietyname+" ("+data[i].varietycount+"), "
                            previousbuncher=data[i].bunchername
                            totalcount=data[i].totalcount
                        }
                    }
                    // add the last item since items list will not have changed
                    results+=" <p><small>"+itemlist+"</small></p></div>"   
                    results+=" <div>"   
                    results+="<span class='badge badge-info badge-pill'> "+totalcount+"</span> </div></li>"  

                    // output the results
                    qctally.html(results)
                }
                
            }
        )
    }

    // save received inventory
    receivedsavebutton.on("click",function(){
        // check that we have at least a full or half fill bucket
        var buckets=[]
        receivedfullbucketslist.find("li").find(".item").each(function(){
            var $this=$(this),
                varietyid=$this.attr("data-variety"),
                stemlength=$this.attr("data-stemlength"),
                quantity=$this.attr("data-quantity"),
                bucketcapacity=$this.attr("data-bucketsize"),
                receivingid=$this.attr("data-receivingid")
                buckets.push({varietyid:varietyid,stemlengthid:stemlength,quantity:quantity,bucketcapacity:bucketcapacity,fullbucket:1,receivingid:receivingid})

        })

        receivedunderfillbucketslist.find("li").find(".item").each(function(){
            var $this=$(this),
            varietyid=$this.attr("data-variety"),
            stemlength=$this.attr("data-stemlength"),
            quantity=$this.attr("data-totalquantity"),
            receivingid=$this.attr("data-receivingid")
            buckets.push({varietyid:varietyid,stemlengthid:stemlength,quantity:quantity,bucketcapacity:0,fullbucket:0,receivingid:receivingid})
        })

        // check for blank fields
        if(buckets.length>0){
            buckets=JSON.stringify(buckets)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savegradinghallinventory:true,
                    inventory:buckets
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Flowers received successfully."
                        receivederrordiv.html(showAlert('success',message))
                        // clear the fields
                        clearReceivedForm()
                        clearReceivedLists()
                        computetotals()

                    }else{
                        receivederrordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            errors="Please provide quantity received."
            receivederrordiv.html(showAlert('info',errors))
        }
    })

    function clearReceivedLists(){
        receivedfullbucketslist.html("<li class='list-group-item d-flex justify-content-between align-items-center  font-weight-bold'>Received Full Buckets</li>")
        receivedunderfillbucketslist.html("<li class='list-group-item d-flex justify-content-between align-items-center  font-weight-bold'>Received Underfill Buckets</li>")
    }

    // listen to edit received full bucket item
    receivedfullbucketslist.on("click",".editdata",function(e){
        e.preventDefault()
        var $this=$(this),
            parent = $this.parent("div").parent("li")
        receivedvarietyfield.val($this.attr("data-variety"))
        receivedstemlengthfield.val($this.attr("data-stemlength"))
        receivedfullbucketsfield.val($this.attr("data-quantity"))
        receivedbucketsize.val($this.attr("data-bucketsize"))
        parent.remove()
        computetotals()
    })

    // listen to edit received underfill bucket item
    receivedunderfillbucketslist.on("click",".editdata",function(e){
        e.preventDefault()
        var $this=$(this),  
            parent = $this.parent("div").parent("li")
        receivedvarietyfield.val($this.attr("data-variety"))
        receivedstemlengthfield.val($this.attr("data-stemlength"))
        receivedunderfillbucketsfield.val($this.attr("data-quantity"))
        receivedbucketsize.val($this.attr("data-bucketsize"))
        parent.remove()
        computetotals()
    })

    // delete received full bucket list item
    receivedfullbucketslist.on("click",".deletedata",function(e){
        e.preventDefault()
        var $this=$(this),  
        parent = $this.parent("div").parent("li"),
        itemname=parent.find("h6").html()
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to remove <strong>"+itemname+"</strong> from the list?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success btn-sm",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger btn-sm",
                    callback: function() {
                        //console.log(parent)
                        parent.remove()
                        computetotals()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })

    })

    // delete received underfill bucket item
    receivedunderfillbucketslist.on("click",".deletedata",function(e){
        e.preventDefault()
        var $this=$(this),  
        parent = $this.parent("div").parent("li"),
        itemname=parent.find("h6").html()
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to remove <strong>"+itemname+"</strong> from the list?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success btn-sm",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger btn-sm",
                    callback: function() {
                        //console.log(parent)
                        parent.remove()
                        computetotals()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    rejectedstemssavebutton.on("click",function(){
        var rejects=[];
        rejectedstemslist.find(".editdata").each(function(){
            $this=$(this)
            varietyid=$this.attr("data-variety"),
            buncherid=$this.attr("data-buncher"),
            rejectid=$this.attr("data-rejectid"),
            quantity=$this.attr("data-quantity")
            rejects.push({varietyid:varietyid,buncherid:buncherid,rejectid:rejectid,quantity:quantity})
        })
        if(rejects.length>0){
            rejects=JSON.stringify(rejects)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savegradingreject:true,
                    rejects:rejects
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Rejected flowers saved successfully."
                        clearRejectedForm()
                        rejecterrordiv.html(showAlert('success',message))
                        // clear the fields
                    }else{
                        rejecterrordiv.html(showAlert('warning',data))
                    }
                }
            ) 
        }else{
            errors="Please provide at least a reject"
            rejecterrordiv.html(showAlert('info',errors))
        }
    })

    //listen to edit rejected stem
    rejectedstemslist.on("click",".editdata",function(e){
        e.preventDefault()
        var $this=$(this),
            parent=$this.find("div").find("li")

        rejectedvarietyfield.val($this.attr("data-variety"))
        rejectbuncherfield.val($this.attr("data-buncher")) 
        rejectedreasonfield.val($this.attr("data-rejectid"))
        rejectedstemsfield.val($this.attr("data-quantity"))
        parent.remove()
    })

    rejectedstemslist.on("click",".deletedata",function(e){
        e.preventDefault()
        var $this=$(this),  
        parent = $this.parent("div").parent("li"),
        itemname=parent.find("h6").html()
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to remove <strong>"+itemname+"</strong> from the list?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success btn-sm",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger btn-sm",
                    callback: function() {
                        //console.log(parent)
                        parent.remove()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    storagesavebutton.on("click",function(){
        var items=[]
        storageitemslist.find(".editdata").each(function(){
            var $this=$(this),
                tag=$this.attr("data-tag"),
                varietyid=$this.attr("data-variety"),
                bunchingstyleid=$this.attr("data-bunchingstyle"),
                stemlengthid=$this.attr("data-stemlength"),
                headsizeid=$this.attr("data-headsize"),
                quantity=$this.attr("data-quantity")
            items.push({tag:tag,varietyid:varietyid,bunchingstyleid:bunchingstyleid,stemlengthid:stemlengthid,headsizeid:headsizeid,quantity:quantity})
        })

        if(items.length>0){
            items=JSON.stringify(items)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savegradingstorage:true,
                    items:items
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Flowers added to Storage successfully."
                        storageerrordiv.html(showAlert('success',message))
                        // clear the fields
                        storageitemslist.html("")
                        // reset usedtags
                        usedstoragetags=[]
                    }else{
                        storageerrordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            errors="Please provide units to be stored first."
            storageerrordiv.html(showAlert('info',errors))
        }
    })

    //listen to press return key of tag field
    tagfield.keypress(function(event){	
        var keycode = (event.keyCode ? event.keyCode : event.which),
            tag=tagfield.val(),
            errors=""
        if(keycode == '13'){
            if(tag==""){
                errors="Please provide a Tag first"
                receivederrordiv.html(showAlert('info',errors))
            }else {
                // get tag details
                // append zeros to taglist if less than 4 characters
                while (tag.length < 4) {
                    tag = '0' + tag;
                }
                tagfield.val(tag)
                if(usedtags.includes(tag)){
                    console.log(usedtags)
                    errors=`The tag <strong>${tag}</strong> has already been added to the list.`
                    receivederrordiv.html(showAlert('info',errors))
                }
                if(errors==""){
                    $.getJSON(
                        "../controllers/transactionoperations.php",
                        {
                            getreceivinginventorybytag:true,
                            tag:tag
                        },
                        function(data){
                            if(data.length>0){
                                receivedfullbucketsfield.val("")
                                receivedunderfillbucketsfield.val("")
                                // populate unit varieties before adding this
                                // populate the fields
                                //unitfield.val(data[0].unitid)
                                receivingidfield.val(data[0].id)
                                receivedvarietyfield.val(data[0].varietyid)
                                receivedstemlengthfield.val(data[0].stemlengthid)
                                receivedbucketsize.val(data[0].bucketcapacity)
                                if(data[0].fullbucket==1){
                                    receivedfullbucketsfield.val(data[0].quantity)
                                }else{
                                    receivedunderfillbucketsfield.val(data[0].quantity)
                                }
                                usedtags.push(tag)
                                addreceivedbutton.trigger("click")
                            }else{
                                errors="Tag was not found"
                                receivederrordiv.html(showAlert('warning',errors))
                            }
                        }
                    )
                }else{
                    receivederrordiv.html(showAlert('info',errors))
                }
            }
        } 
    }) 

    //listen to change events in storage div and hide errors
    selectfields.on("change",function(){
        storageerrordiv.html("")
    })

    inputfields.on("input",function(){
        storageerrordiv.html("")
        receivederrordiv.html("")
    })

    addedqclist.on("click",".deletedata", function(e){
        e.preventDefault()
        var $this=$(this),
            parent=$this.parent("p").parent("li"),
            id=$this.attr("data-id")
        // open confirmation to delete
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to remove the <strong>QC Pass</strong> from the list?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success btn-sm",
                    callback: function() {
                        $('.bootbox').modal('hide')
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger btn-sm",
                    callback: function() {
                        //console.log(parent)
                        // delete the quality control pass
                        $.post(
                            "../controllers/transactionoperations.php",
                            {
                                deletequalitycontrolpass:true,
                                id:id
                            },
                            function(data){
                                var message=""
                                if(data=="success"){
                                    // refresh the bunchers counter list
                                    parent.remove()
                                    message="The quality control pass has been removed successfully."
                                    qcerrordiv.html(showAlert("success",message))
                                    getcurrentqctally()  
                                }else{
                                    message=`Sorry, an error occured ${data}`
                                    qcerrordiv.html(showAlert("danger",message))
                                }
                            }
                        )                
                        $('.bootbox').modal('hide')
                    }
                }
            }
        })
    })
})