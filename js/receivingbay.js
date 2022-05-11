$(document).ready(function(){
    var bucketfilldropdown=$("#bucketfill"),
        fullbucketsdiv=$(".fullbucket"),
        underfillbucketsdiv=$(".underfillbucket"),
        fullbucketslist=$("#fullbucketslist"),
        underfillbucketslist=$("#underfillbucketslist"),
        unitfield=$("#unit"),
        varietyfield=$("#variety"),
        stemlengthfield=$("#stemlength"),
        bucketcapacityfield=$("#bucketcapacity"),
        addtolistbutton=$("#addstems"),
        shiftfield=$("#shift"),
        fullbucketsfield=$("#fullbuckets"),
        underfillbucketsfield=$("#underfillbucketquantity"),
        errordiv=$("#errors"),
        selectfields=$("select"),
        inputfields=$("input"),
        continousadd=$("#continousadd"),
        stemstotaldiv=$("#stems"),
        bucketstotaldiv=$("#buckets"),
        fullbucketstable=$("#fullbucketstable"),
        underfillbuckettable=$("#underfillbucketstable"),
        shiftdiv=$("#shiftdiv"),
        driverfield=$("#driver"),
        savebutton=$("#savebutton"),
        savediv=$("#savediv"),
        clearbutton=$("#clear"),
        // make sidebar meny active
        navitem=$("#receivingbay")
        navitem.addClass("active"),
        pickingtimefield=$("#timepicked"),
        deliverytimefield=$("#timedelivered"),
        tagfield=$("#tag"),
        tagid=0,
        deliverydatediv=$("#delivery"),
        fields=$("#fields"),
        usedtags=[]
        // set module name
        setModuleName("Receiving Bay")
        // show user logged in
        setLoggedInUserName()

    // hide both bucket fill div's by default
      /*  fullbucketsdiv.hide()
    underfillbucketsdiv.hide()
    */
    //hide shift div
    shiftdiv.hide()

    // hide deliverydate
    deliverydatediv.hide()

    //hide fields only live the tag field
    fields.hide()
    // get all users and add to drivers drop down
    getUsers()

    // add titles on top of tables
    /*fullbucketslist.html(showAlert("info","Full Buckets List",1))
    underfillbucketslist.html(showAlert("info","Underfill Buckets List",1))*/
    continousadd.prop("checked",false)
    // get units
    getUnits()
    // get varieties
    getVarieties(0)
    // get stem length
    getStemLength()
    
    // assign shift automatically
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getshift:true
        },
        function(data){
            shiftfield.val(data[0].shift)
            shiftfield.prop("disabled",true)
        }
    )
    
    // set datepicker for both picking and delivery fields
    pickingtimefield.datetimepicker({
        controlType: 'select',
        oneLine: true,
        dateFormat: 'dd-M-yy'
    }).attr("readonly","readonly")

    deliverytimefield.datetimepicker({
        controlType: 'select',
        oneLine: true,
        dateFormat: 'dd-M-yy'
    }).attr("readonly","readonly")
    // listen to unitfield change and get flower varieties
    unitfield.on("change",function(){
        unitid=unitfield.val()
        if(unitid!=""){
            getVarieties(unitid)
        }
    })
    // hide errors whenever there is change in select or input field values
    selectfields.on("change",function(){
        errordiv.html("")
        savediv.html("")
    })

    inputfields.on("input",function(){
        errordiv.html("")
        savediv.html("")
    })

    // add flower stems to list
    addtolistbutton.on("click",function(){
        var shift=shiftfield.val(),
            unit=unitfield.val(),
            variety=varietyfield.val(),
            stemlength=stemlengthfield.val(),
            bucketcapacity=bucketcapacityfield.val(),
            driver=driverfield.val(),
            pickingdate=pickingtimefield.val(),
            collectiondate=deliverytimefield.val(),
            results="",
            errors="",
            tag=tagfield.val()

        // check for blank fields
        if(tag==""){
            errors="Please provide tag label"
            tagfield.focus()
        }else  if(pickingdate==""){
            errors="Please select the picking date"
        }else if(collectiondate==""){
            errors="Please select the delivery date"
        }else if(driver==""){
            errors="Please select driver"
            driverfield.focus()
        }else if(unit==""){
            errors="Please select unit"
            unitfield.focus()
        }else if(variety==""){
            errors="Please select flower variety"
            varietyfield.focus()
        }else if(stemlength==""){
            errors="Please select stem length"
            stemlengthfield.focus()
        }else if(fullbucketsfield.val()=="" && underfillbucketsfield.val()==""){
            errors="Please provide full or underfill quantity."
 
        }else if(usedtags.includes(tag)){
            errors=`The tag <strong>${tag}</strong> has already been added to the list`
        }
        //console.log("The tag id is: "+tagid)
        if(errors==""){
            var unitname=unitfield.find("option:selected").html(),
                varietyname=varietyfield.find("option:selected").html(),
                stemlengthname=stemlengthfield.find("option:selected").html(),
                underfillitems=[],
                underfilltotal=0
            // add the items to the list
            if(parseFloat(fullbucketsfield.val())>0){
                // add full bucket if any
                fullbucketquantity=fullbucketsfield.val()
                results+="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                results+="<div class='flex-column'><h6><h6><strong>#"+tag+" :</strong> "+varietyname+"</h6>"
                results+="<p><small>Unitname: "+unitname+", Stem Length: "+stemlengthname+"<br/> Bucket Capacity: "+bucketcapacity+", Buckets: <span class='buckets'>"+fullbucketquantity+"</span></small>"
                results+="<p class='small'>Picked: "+pickingdate+"<br/>Delivered: "+collectiondate+"</p></div>"
                results+="<div><span class='badge badge-info badge-pill quantity'> "+parseFloat(fullbucketquantity*bucketcapacity)+"</span> "
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-unit='"+unit+"' data-driver='"+driver+"' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+fullbucketquantity+"' data-bucketsize='"+bucketcapacity+"' data-pickingdate='"+pickingdate+"' data-deliverydate='"+collectiondate+"' data-tagid='"+tagid+"' data-varietyname='"+varietyname+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id='' data-tagname='"+tag+"'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                results+="</div></li>"
                $(results).appendTo(fullbucketslist)
            }
            if(underfillbucketsfield.val()!=""){
                underfillquantity=underfillbucketsfield.val()
                // generate array and add the items together

                // remove multiple spaces and replace with a single space
                // also remove both leading and trailing spaces
                underfillquantity = $.trim(underfillquantity.replace(/ +(?= )/g,''))
                underfillitems=underfillquantity.split(" ")
                for(var i=0;i<underfillitems.length;i++){
                    underfilltotal+=parseFloat(underfillitems[i])
                }
                results="<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>"
                results+="<div class='flex-column'><h6><strong>#"+tag+" </strong>: "+varietyname+"</h6>"
                results+="<p><small>Unitname: "+unitname+", Stem Length: "+stemlengthname+"</small>"
                results+="<p class='small'>Picked: "+pickingdate+"<br/>Delivered: "+collectiondate+"</p></div>"
                results+="<div><span class='badge badge-info badge-pill quantity'> "+parseFloat(underfillquantity)+"</span> "
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-driver='"+driver+"' data-unit='"+unit+"' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+underfillquantity+"' data-bucketsize='"+bucketcapacity+"' data-pickingdate='"+pickingdate+"' data-deliverydate='"+collectiondate+"' data-totalquantity='"+underfilltotal+"' data-tagid='"+tagid+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id='' data-tagname='"+tag+"'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>"
                results+="</div></li>"
                $(results).appendTo(underfillbucketslist)
            }
            //
            if(continousadd.prop("checked")){
                underfillbucketsfield.val("")
                fullbucketsfield.val("")
                fullbucketsfield.focus()
            }else{
                clearForm()
            }
            // add to used tags array
            usedtags.push(tag)
            errors="Collection details added to the list"
            errordiv.html(showAlert('success',errors))
            //compute the totals
            computetotals()
        }
        else{
            // report back the errors
            errordiv.html(showAlert('info',errors))
        }
    })

    // get bucket capacity when variety is selected
    varietyfield.on("change",function(){
        var varietyid=varietyfield.val()
        if(varietyid!=""){
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    getvarietydetails:true,
                    varietyid:varietyid
                },
                function(data){
                    bucketcapacityfield.val(data[0].bucketcapacity)
                }
            )
        }
    })
    // listen to selection of bucket fill drop down
    bucketfilldropdown.on("change",function(){
        if(bucketfilldropdown.val()=="full"){
            fullbucketsdiv.show()
            underfillbucketsdiv.hide()
        }else if(bucketfilldropdown.val()=="underfill"){
            fullbucketsdiv.hide()
            underfillbucketsdiv.show()
        }else{
            fullbucketsdiv.hide()
            underfillbucketsdiv.hide()
        }
    })

    function getUnits(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerunits:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].unitid+"'>"+data[i].unitname+"</option>"
                }
                unitfield.html(results)
            }
        )
    }

    function getVarieties(unitid){
        var dfd=new $.Deferred(),
            results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getunitvarieties:true,
                unitid:unitid
            },
            function(data){
                for (var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].varietyid+"'>"+data[i].varietyname+"</option>"
                }
                varietyfield.html(results)
                dfd.resolve()
            }
        )
        return dfd.promise()
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
                stemlengthfield.html(results)
            }
        )
    }

    function clearForm(){
        shiftfield.val("")
        unitfield.val("")
        varietyfield.val("")
        stemlengthfield.val(""),
        bucketfilldropdown.val("")
        bucketcapacityfield.val("")
        fullbucketsfield.val("")
        underfillbucketsfield.val("")
        driverfield.val("")
        pickingtimefield.val("")
        deliverytimefield.val("")
        tagfield.val("")
    }

    function emptyLists(){
        fullbucketslist.html("<li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Full Buckets Picked</li>")
        underfillbucketslist.html("<li class='list-group-item d-flex justify-content-between align-items-center font-weight-bold bg-info text-white'>Underfill Buckets Picked</li>")
    }

    function computetotals(){
        var stems=0, buckets=0
        fullbucketslist.find(".buckets").each(function(){
            //console.log($(this).html())
            buckets+=parseFloat($(this).html())
        })
        buckets+=parseFloat(underfillbucketslist.find("li").length-1)
        bucketstotaldiv.html($.number(buckets))

        fullbucketslist.find(".quantity").each(function(){
            stems+=parseFloat($(this).html())
        })
        underfillbucketslist.find(".quantity").each(function(){
            stems+=parseFloat($(this).html())
        })
        stemstotaldiv.html($.number(stems))
    }

    // listen to edit full bucket entry
    fullbucketslist.on("click",".editdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("td").parent("tr"),
            $this=$(this),
            shift=$this.attr("data-shift"),
            unit=$this.attr("data-unit"),
            variety=$this.attr("data-variety"),
            stemlength=$this.attr("data-stemlength"),
            quantity=$this.attr("data-quantity")
            bucketcapacity=$this.attr("data-bucketsize")
        shiftfield.val(shift)
        unitfield.val(unit)
        varietyfield.val(variety)
        stemlengthfield.val(stemlength)
        fullbucketsfield.val(quantity)
        bucketcapacityfield.val(bucketcapacity)
        // remove item from the list
        parent.remove()
        // compute totals
        computetotals()

        // hide any errors shown
        errordiv.html("")
    })

    // listen to edit underfill bucket entry
    underfillbucketslist.on("click",".editdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("td").parent("tr"),
            $this=$(this),
            shift=$this.attr("data-shift"),
            unit=$this.attr("data-unit"),
            variety=$this.attr("data-variety"),
            stemlength=$this.attr("data-stemlength"),
            quantity=$this.attr("data-quantity")
            
        shiftfield.val(shift)
        unitfield.val(unit)
        varietyfield.val(variety)
        stemlengthfield.val(stemlength)
        underfillbucketsfield.val(quantity)
        // remove item from the list
        parent.remove()
        // compute totals
        computetotals()

        // hide any errors shown
        errordiv.html("")
    })

    fullbucketslist.on("click",".deletedata",function(e){
        e.preventDefault()
        $this=$(this)
        console.log($this)
        var parent=$(this).parent("div").parent("li")
        var description= $(this).attr("data-tagname")
        bootbox.dialog({
           // title: "Confirm Item Removal!",
            message: "Confirm removal of tag <strong>"+description+"</strong> from the list of full buckets?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger",
                    callback: function() {
                        //console.log(parent)
                        parent.remove()
                        // remove the item from the list of already added items
                        removetagfromusedlist(description)
                        computetotals()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    underfillbucketslist.on("click",".deletedata",function(e){
        $this=$(this)
        var parent=$this.parent("div").parent("li")
        var description= $this.attr("data-tagname")

        e.preventDefault();
        bootbox.dialog({
           // title: "Confirm Item Removal!",
            message: "Confirm removal of tag <strong>"+description+"</strong> from the list of underfill buckets?",
            buttons: {
                success: {
                    label: "No, Keep",
                    className: "btn-success",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, Remove",
                    className: "btn-danger",
                    callback: function() {
                        //console.log(parent)
                        parent.remove()
                        // remove the tag from used list
                        removetagfromusedlist(description)
                        computetotals()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    function getUsers(){
        results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getdrivers:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].userid+"'>"+data[i].firstname+" "+data[i].lastname+"</option>"
                }
                driverfield.html(results)
            }
        )
    }

    savebutton.on("click",function(){
        var data=[],
            message="",
            errors=""
        // hide all errors 
        errordiv.html("")
        // check if there is at least a full bucket or an underfill bucket

        if(fullbucketslist.find("li").children().length>1 || underfillbucketslist.find("li").children().length>1){
            // get full buckets
            fullbucketslist.find("a.editdata").each(function(){
                var $this=$(this),
                unitid=$this.attr("data-unit"),
                varietyid=$this.attr("data-variety"),
                stemlength=$this.attr("data-stemlength"),
                quantity=$this.attr("data-quantity"),
                driverid=$this.attr("data-driver"),
                bucketcapacity=$this.attr("data-bucketsize"),
                pickingdate=$this.attr("data-pickingdate"),
                collectiondate=$this.attr("data-deliverydate")
                tagid=$this.attr("data-tagid")
                data.push({unitid:unitid,varietyid:varietyid,stemlength:stemlength,quantity:quantity,driverid:driverid, bucketcapacity:bucketcapacity,fullbucket:1,pickingdate:pickingdate,collectiondate:collectiondate,tagid:tagid})
            })

            // get underfill buckets
            underfillbucketslist.find("a.editdata").each(function(){
                var $this=$(this),
                unitid=$this.attr("data-unit"),
                varietyid=$this.attr("data-variety"),
                stemlength=$this.attr("data-stemlength"),
                quantity=$this.attr("data-totalquantity"),
                driverid=$this.attr("data-driver"),
                bucketcapacity=0,
                pickingdate=$this.attr("data-pickingdate"),
                collectiondate=$this.attr("data-deliverydate")
                tagid=$this.attr("data-tagid")
                data.push({unitid:unitid,varietyid:varietyid,stemlength:stemlength,quantity:quantity,driverid:driverid, bucketcapacity:bucketcapacity,fullbucket:0,pickingdate:pickingdate,collectiondate:collectiondate,tagid:tagid})
            })
            data=JSON.stringify(data)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savereceivedinventory:true,
                    items:data
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Flowers added to the Receiving Inventory successfully."
                        errordiv.html(showAlert('success',message))
                        // clear the fields
                        fullbucketslist.find("tbody").html("")
                        underfillbucketslist.find("tbody").html("")
                        computetotals()
                        clearForm()
                        emptyLists()
                        driverfield.focus()
                        // empty used tags array
                        usedtags=[]
                    }else{
                        errordiv.html(showAlert('warning',data))
                    }
                }
            )

        }else{
            errors="Please add at least a full or an underfill bucket first."
            errordiv.html(showAlert('warning',errors))
        }
    })

    clearbutton.on("click",function(){
        clearForm()
        emptyLists()
        driverfield.focus()
        errordiv.html("")
        savediv.html("")
    })

    //listen to enter keypress of the Tag field
    tagfield.keypress(function(event){	
        var keycode = (event.keyCode ? event.keyCode : event.which)
        // pad tagfield with zeros
        if(keycode == '13'){
            tag=tagfield.val()
            if(tag!==""){
                while (tag.length < 4) {
                    tag = '0' + tag;
                }
                tagfield.val(tag)
            }
           
            if(tag==""){
                errors="Please provide a Tag first"
                errordiv.html(showAlert('info',errors))
            }else{
                // get tag details
                $.getJSON(
                    "../controllers/transactionoperations.php",
                    {
                        getcollectiondetailsbytag:true,
                        tag:tag
                    },
                    function(data){
                        if(data.length>0){
                            // populate unit varieties before adding this
                            getVarieties(data[0].unitid).done(function(){
                                // populate the fields
                                pickingtimefield.val(data[0].pickingdate)
                                deliverytimefield.val(data[0].deliverydate)
                                driverfield.val(data[0].driverid)
                                unitfield.val(data[0].unitid)
                                stemlengthfield.val(data[0].stemlength)
                                bucketcapacityfield.val(data[0].bucketcapacity)
                                tagid=data[0].tagid
                                if(data[0].fullbucket==1){
                                    fullbucketsfield.val(data[0].quantity)
                                }else{
                                    underfillbucketsfield.val(data[0].quantity)
                                }
                                varietyfield.val(data[0].varietyid) 
                                // trigger add to list button
                                addtolistbutton.trigger("click")
                            })
                        }else{
                            errors="Tag not found"
                            errordiv.html(showAlert('warning',errors))
                        }
                    }
                )
            }
        } 
    }) 
    
    // pad zeros on lost focus of tagfield
    tagfield.on("focusout",function(){
        //console.log("Tag id lost focus")
        var tagid=tagfield.val()
        if(tagid!==""){
            while (tagid.length < 4) {
                tagid = '0' + tagid;
            }
            tagfield.val(tagid)
        }
    })

    function removetagfromusedlist(item){
        index=$.inArray(item,usedtags)
        if (index !== -1) {
            usedtags.splice(index, 1);
        }
    }
})