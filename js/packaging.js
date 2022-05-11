$(document).ready(function(){
    var packagingsizefield=$("#packagesize"),
        bunchingsizefield=$("#bunchingstyle"),
        varietyfield=$("#variety"),
        headsizefield=$("#headsize"),
        stemlengthfield=$("#stemlength"),
        addbutton=$("#addtolist"),
        packaginglist=$("#packagedflowers"),
        navitem=$("#packaging"),
        quantityfield=$("#quantity"),
        errordiv=$("#errors"),
        continousaddfield=$("#continousadd"),
        customerfield=$("#customers2"),
        customerorders=$("#orders"),
        weightfield=$("#weight"),
        tagfield=$("#tag"),
        savebutton=$("#savebutton"),
        inputfields=$("input"),
        selectfields=$("select"),
        repackedvarietylist=$("#repackvariety"),
        repackedstemlengthlist=$("#repackstemlength"),
        repackedbunchingstylelist=$("#repackbunchingstyle"),
        repackedheadsizeslist=$("#repackheadsize"),
        repackeaddtolistbutton=$("#addrepacktolist"),
        repacksavebutton=$("#saverepackstems"),
        repackedtag=$("#repacktag"),
        repackerrordiv=$("#repackerrors"),
        repackusedtags=[],
        repackitemslist=$("#repackitemslist"),
        unpacktag=$("#unpacktag"),
        unpackerrordiv=$("#unpackerrors"),
        usedunpacktags=[],
        unpackitemslist=$("#unpackeduckets"),
        saveunpackedbucketbutton=$("#saveunpackedbuckets"),
        repackquantity=$("#repackquantity"),
        repackcontinousadd=$("#repackcontinousadd")
        
    getPackagingSize()
    getBunchingStyles()
    getVarieties()
    getStemLengths()
    getHeadSizes()
    //get cuustomers
    getCustomers()
    getbunchingstyle()

    navitem.addClass("active")
    // set module name
    setModuleName("Packaging")
    continousaddfield.prop("checked",true)
    //get packaging size field
    function getPackagingSize(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getpackagingsizes:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].description+"</option>"
                }
                packagingsizefield.html(results)
            }
        )
    }

    // get bunching sizes
    function getBunchingStyles(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getbunchingsizes:true,
                standard:"All"
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].quantity+"</option>"
                }
                bunchingsizefield.html(results)
            }
        ) 
    }

    function getVarieties(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowervarieties:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].varietyid+"'>"+data[i].varietyname+"</option>"
                }
                varietyfield.html(results)
                repackedvarietylist.html(results)
            }
        )  
    }

    function getStemLengths(){
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
                repackedstemlengthlist.html(results)
            }
        )  
    }

    function getHeadSizes(){
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
                headsizefield.html(results)
                repackedheadsizeslist.html(results)
            }
        )  
    }

    function getbunchingstyle(){
        var bunchingstyle="<option value=''>&lt;Choose One&gt;"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getbunchingsizes:true,
                standard:'All'
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    bunchingstyle+="<option value="+data[i].id+"'>"+data[i].quantity+"</option>"
                }
                repackedbunchingstylelist.html(bunchingstyle)
            }
        )
    }

    addbutton.on("click",function(){
        var results="",
            packagingsize=packagingsizefield.val(),
            bunchingstyle=bunchingsizefield.val(),
            variety=varietyfield.val(),
            stemlength=stemlengthfield.val(),
            headsize=headsizefield.val(),
            quantity=quantityfield.val(),
            customer=customerfield.val(),
            order=customerorders.val()
            weight=weightfield.val(),
            tag=tagfield.val()
            errors=""

        //check for blank fields
        if(tag==""){
            errors="Please provide tag"
            tagfield.focus()
        }else if(customer==""){
            errors="Please select a customer"
            customerfield.focus()
        }else if(order==""){
            errors="Please select an order"
            customerorders.focus()
        }else if(packagingsize==""){
            errors="Please select package size"
            packagingsizefield.focus()
        }else if(bunchingstyle==""){
            errors="Please select bunching size"
            bunchingsizefield.focus()
        }else if(variety==""){
            errors="Please select variety"
            varietyfield.focus()
        }else if(stemlength==""){
            errors="Please select stem length"
            stemlengthfield.focus()
        }else if(!headsizefield.prop("disabled")){
            if(headsize==""){
                errors="Please select head size"
                headsizefield.focus()
            }else{
                headsizename=headsizefield.find("option:selected").html()
            }
        }else if(quantity=="" || parseFloat(quantity)==0){
            errors="Please provide correct quantity"
            quantityfield.focus()
        }else if(weight==""|| parseFloat(weight)==0){
            errors="Please provide correct package weight"
            weightfield.focus()
        }

        if(headsize==""){
            headsize=0
        }
        if(tag!==""){
            //check if the tag is in use or if it exists
            getTagStatus(tag).done(function(){ 
                if (tagstatus!='inactive'){
                    errors=tagstatus
                    tagfield.focus()  
                }
                if(errors==""){
                    packagesizename=packagingsizefield.find("option:selected").html(),
                    bunchingstylename=bunchingsizefield.find("option:selected").html(),
                    varietyname=varietyfield.find("option:selected").html(),
                    headsizename=headsize==0?"-":headsizefield.find("option:selected").html(),
                    stemlengthname=stemlengthfield.find("option:selected").html(),
                    customername=customerfield.find("option:selected").html(),
                    ordername=customerorders.find("option:selected").html()
        
                    results+="<li class='list-group-item list-group-item-action removableitem'>"
                    results+="<div class='flex-column'><div class='d-flex justify-content-between align-items-center'><h6>#"+tag+": "+customername+"</h6><h6>"+ordername+"</h6></div>"
                    results+="<div class='d-flex justify-content-between align-items-center'>"
                    results+="<div class='small'>V: "+varietyname+" P: "+packagesizename+" L: "+stemlengthname+" B:"+bunchingstylename+" H: "+headsizename+" Q: "+quantity+" W: "+weight+"</div>"
                    results+="<div>&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-quantity='"+quantity+"' data-bunchingstyle='"+bunchingstyle+"', data-packagesize='"+packagingsize+"' data-headsize='"+headsize+"' data-tag='"+tagid+"' data-customer='"+customer+"' data-order='"+order+"' data-weight='"+weight+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>"
                    results+="&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata' data-id=''><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a></div>"
                    results+="</div></div></li>"
                    $(results).appendTo(packaginglist)
                    errordiv.html(showAlert('success',"Package has been added to the list"))
                    //clear fields
        
                }else{
                    errordiv.html(showAlert('info',errors))
                }
            })  
        }
        

    })

    varietyfield.on("change",function(){
        varietyid=varietyfield.val()
        if(varietyid!=""){
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    getvarietydetails:true,
                    varietyid:varietyid
                },
                function(data){
                    if(parseFloat(data[0].measurehead)===1){
                        headsizefield.prop("disabled",false)
                    }else{
                        headsizefield.prop("disabled",true)
                    }
                }
            )
        }
    })

    function getCustomers(){
        var results="<option value=''>&lt;Choose One&gt;</option>"
        $.getJSON(
            "../controllers/customeroperations.php",
            {
                getcustomers:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].customername+"</option>"
                }
                //console.log(results)
                customerfield.html(results)
            }
        )
    }

    customerfield.on("change",function(){
        customerid=customerfield.val()
        $.getJSON(
            "../controllers/customeroperations.php",
            {
                getdistinctcustomerorders:true,
                customerid:customerid
            },
            function(data){
                var results="<option value=''>&lt;Choose One&gt;</option>"
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].orderno+"</option>"
                }
                customerorders.html(results)
            }
        )
    })

    savebutton.on("click",function(){
        var items=[], errors=""
        packaginglist.find(".editdata").each(function(){
            $this=$(this)
            tagid=$this.attr("data-tag")
            customerid=$this.attr("data-customer")
            orderid=$this.attr("data-order")
            varietyid=$this.attr("data-variety")
            packagesizeid=$this.attr("data-packagesize")
            stemlengthid=$this.attr("data-stemlength")
            bunchingstyleid=$this.attr("data-bunchingstyle")
            quantity=$this.attr("data-quantity")
            weight=$this.attr("data-weight")
            headsize=$this.attr("data-headsize")
            items.push({tagid:tagid,customerid:customerid,orderid:orderid,varietyid:varietyid,packagesizeid:packagesizeid,stemlengthid:stemlengthid,bunchingstyleid:bunchingstyleid,quantity:quantity,weight:weight,headsize:headsize})
        })
        // check if the tag is available for use
        /*$.getJSON(
            "../controllers/settingsoperations.php",
            {
                gettagstatus:true,
                tag:tag
            },
            function(data){
                data=$.trim(data.toString())
                if(data=="used"){
                    errors="Sorry, the tag is already in use"
                }
            }
        )*/
        if(errors!==""){
            errordiv.html(showAlert('info',errors))
        }else if(items.length>0){
            items=JSON.stringify(items)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savepackaginglist:true,
                    items:items
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Packaging data saved successfully."
                        errordiv.html(showAlert('success',message))
                        // clear the fields
                        //emptyLists()
                        clearForm()
                        clearList()
                        tagfield.focus()
                    }else{
                        errordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            errors="Please add at least an item in the packaging list"
            errordiv.html(showAlert('info',errors))
        }
    })

    function clearForm(){
        inputfields.val("")
        selectfields.val("")
    }

    function clearList(){
        packaginglist.find(".removableitem").remove()
    }

    inputfields.on("input",function(){
        errordiv.html("")
    })

    selectfields.on("change",function(){
        errordiv.html("")
    })

    tagfield.on('focusout',()=>{
        tag=tagfield.val()
        tagfield.val(padzeros(tag))
    })
    
    repackedtag.on('focusout',()=>{
        tag=repackedtag.val()
        repackedtag.val(padzeros(tag)) 
    })

    // disable headsize if not capturing 
    repackedvarietylist.on("change",()=>{
        varietyid=repackedvarietylist.val()
        if(varietyid!=""){
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    getvarietydetails:true,
                    varietyid:varietyid
                },
                function(data){
                    if(parseFloat(data[0].measurehead)===1){
                        repackedheadsizeslist.prop("disabled",false)
                    }else{
                        repackedheadsizeslist.prop("disabled",true)
                    }
                }
            )
        }
    })

    unpacktag.keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which),
            tag=unpacktag.val(),
            errors="",
            results=""
        if(keycode == '13'){
            tag=padzeros(tag)
            unpacktag.val(tag)
            if(usedunpacktags.includes(tag)){
                errors=`The tag<strong> ${tag}</strong> has already been added to the list`
                unpackerrordiv.html(showAlert('info',errors))
            }else{
                $.getJSON(
                    "../controllers/transactionoperations.php",
                    {
                        getbucketedgradedflowers:true,
                        tag:tag
                    },
                    function(data){
                        if(data.length>0){
                            results=`<li class='list-group-item list-group-item-action d-flex justify-content-between align-items-center editdata' data-id='${data[0].id}'>`
                            results+=`<div class='flex-column'><h6><strong>${tag}</strong>: ${data[0].varietyname}</h6>`
                            results+=`<p><small>Stem Length: ${data[0].stemlength} Bunching Style:${data[0].bunchingstyle}  Quantity: ${data[0].quantity}</small></div>`
                            results+=`<div><span class='badge badge-info badge-pill quantity'> ${parseFloat(data[0].quantity*data[0].bunchingstyle)}</span> `
                            //results+=`&nbsp;&nbsp;<a href='javascript void(0)' class='editdata item' ><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>`
                            results+=`&nbsp;&nbsp;<a href='javascript void(0)' class='deletedata'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a>`
                            results+=`</div></li>`
                            errors=`The tag <strong>${tag}</strong> has been added to the list successfully`
                            unpackerrordiv.html(showAlert('success',errors))
                            unpacktag.val("")
                            unpacktag.focus()
                            usedunpacktags.push(tag)
                            $(results).appendTo(unpackitemslist)
                        }else{
                            errors=`Tag <strong>${tag}</strong> was not found.`
                            unpackerrordiv.html(showAlert('info',errors))
                        }
                    }
                )
            }  
        }
    })

    unpacktag.on("input",()=>{
        unpackerrordiv.html("")
    })

    // save unpacked buckets
    saveunpackedbucketbutton.on("click",()=>{
        var items=[],
        errors=""
        unpackitemslist.find("li.editdata").each(function(){
            $this=$(this)
            id=$this.attr("data-id")
            if(id!==undefined){
                items.push({id:id})
            }
        })

        console.log(items)
        if(items.length>0){
            itemslist=JSON.stringify(items)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    saveunpackedgradedbuckets:true,
                    buckets:itemslist
                },
                (data)=>{
                    data=$.trim(data)
                    if(data=="success"){
                        errors="The containers have been unpacked successfully"
                        unpackerrordiv.html(showAlert('success',errors))
                        unpackitemslist.find(".editdata").remove()
                        usedunpacktags=[]
                    }else{
                        errors=`Sorry an error occured.<br/>${data}`
                        unpackerrordiv.html(showAlert('danger',errors))
                    }
                }
            )/**/
        }else{
            errors="Please provide at least a container to unpack"
            unpackerrordiv.html(showAlert('info',errors))
        }
    })

    repackeaddtolistbutton.on("click",()=>{
        console.log("clicked")
        var variety=repackedvarietylist.val(),
            stemlength=repackedstemlengthlist.val(),
            headsize=repackedheadsizeslist.val(),
            quantity=repackquantity.val(),
            bunchingstyleid=repackedbunchingstylelist.val()
            errors="",
            message="",
            tag= repackedtag.val(),
            repackerroranchor=document.getElementById("repackerrors")
        //check for blank fields
       // console.log("The tag is: "+tag)
        if(tag==""){
            errors="Please enter tag"
            repackedtag.focus()
        }else if(variety==""){
            errors="Please select variety"
            repackedvarietylist.focus()
        }else if(stemlength==""){
            errors="Please select stem length"
            repackedstemlengthlist.focus()
        }else if(bunchingstyleid==""){
            errors="Please select bunching style"
            repackedbunchingstylelist.focus()
        }else if(quantity=="" || parseFloat(quantity)<=0){
            errors="Please provide correct quantity"
            repackquantity.focus()
        }else if(!repackedheadsizeslist.prop("disabled")){
            if(headsize==""){
                errors="Please select head size"
                repackedheadsizeslist.focus()
            }    
        }else{
            headsize="0"
        }
        if(repackusedtags.includes(tag)){
            errors="The tag has already been added to the list"
        }
        // check if the tag is being used already
        gettagstatus(tag).done(function(){
            if (storagetagstatus=="used"){
                errors="The tag is already in use."
            }
            if(errors==""){
                var varietyname=repackedvarietylist.find("option:selected").html(),
                    stemlengthname=repackedstemlengthlist.find("option:selected").html(),
                    headsizename=repackedheadsizeslist.find("option:selected").html(),
                    bunchstylename=repackedbunchingstylelist.find("option:selected").html(),
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
                $(results).appendTo(repackitemslist)
                // add tag to already used tags array
                repackusedtags.push(tag)
                message="Flowers added to storage list."
                repackerrordiv.html(showAlert('success',message))
                // scroll to view messages at the top of the page
                repackerroranchor.scrollIntoView()
                if (repackcontinousadd.prop("checked")){
                    repackedheadsizeslist.val("")
                    repackquantity.val("")
                    //storageheadsizefield.focus()
                    repackedtag.val("")
                    repackedtag.focus()
                }else{
                    clearStorageForm()
                }
                
            }else{
                repackerrordiv.html(showAlert('info',errors))
                repackerroranchor.scrollIntoView()
            }
        })
    })

    repacksavebutton.on("click",()=>{
        var items=[]
        repackitemslist.find(".editdata").each(function(){
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
                        message="Flowers repacked into containers successfully."
                        repackerrordiv.html(showAlert('success',message))
                        // clear the fields
                        repackitemslist.html("")
                        // reset usedtags
                        repackusedtags=[]
                    }else{
                        repackerrordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            errors="Please provide units to be stored first."
            repackerrordiv.html(showAlert('info',errors))
        }
    })

    function clearStorageForm(){
        repackedvarietylist.val("")
        repackedstemlengthlist.val("")
        repackedheadsizeslist.val("")
        repackquantity.val("")
        repackedvarietylist.focus()
        repackusedtags=[]
    }

})