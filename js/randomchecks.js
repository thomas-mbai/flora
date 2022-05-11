$(document).ready(function(){
    var unitfield=$("#unit"),
        varietyfield=$("#variety"),
        stemlengthfield=$("#stemlength"),
        bucketcapacityfield=$("#bucketcapacity"),
        errordiv=$("#errors"),
        selectfields=$("select"),
        inputfields=$("input"),
        continousadd=$("#continousadd"),
        savebutton=$("#savebutton"),
        savediv=$("#savediv"),
        clearbutton=$("#clear"),
        reportedquantityfield=$("#reportedquantity"),
        verifiedstemlengthslist=$("#verifiedstemlengths"),
        problemsfield=$("#problemname"),
        problemsquantityfield=$("#problemquantity")
        problemsmodal=$("#problemsfoundmodal"),
        addproblembutton=$("#addproblem"),
        saveproblembutton=$("#savedproblem"),
        problemerrorsdiv=$("#problemerrors"),
        problemlist=$("#problemsfound"),
        problemcontinousadd=$("#problemcontinousadd"),
        remarksfield=$("#remarks"),
        // make sidebar meny active
        navitem=$("#randomchecks"),
        tagfield=$("#tag"),
        receivingidfield=$("#receivingid")

        navitem.addClass("active")
        // set module name
        setModuleName("Random Checks")
        // show user logged in
        setLoggedInUserName()
        // get problems i.e. flower reject reasons
        getproblems()
        // set continous add for problems
        problemcontinousadd.prop("checked",true)
    // add titles on top of tables
   // checkedunits.html(showAlert("info","Verified Stem Lengths",1))
  
    continousadd.prop("checked",true)
    // get units
    getUnits()
    // get varieties
    getVarieties(0)
    // get stem length
    getStemLength()

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
        var results="<option value=''>&lt;Choose One&gt;</option>",
            dfd=new $.Deferred()
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
        var results="<option value=''>&lt;Choose One&gt;</option>",
            verifiedstemlengths="<li class='list-group-item d-flex justify-content-between align-items-center active font-weight-bold'>Verified Stem Length Quantities</li>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getstemlength:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].stemlengthid+"'>"+data[i].stemlength+"</option>"

                    verifiedstemlengths+="<li  class='list-group-item list-group-item-action d-flex justify-content-between align-items-center'  id='"+data[i].stemlengthid+"'>"
                    verifiedstemlengths+="<div class='stemlengthname'>"+data[i].stemlength+"</div>"
                    verifiedstemlengths+="<div class='flex-column'>"
                    verifiedstemlengths+="<span class='badge badge-info badge-pill'>0</span>&nbsp;&nbsp;&nbsp;&nbsp;"
                    verifiedstemlengths+="<a href='javascript void(0)' class='editdata'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>&nbsp;&nbsp;&nbsp;&nbsp;"
                    verifiedstemlengths+="<a href='javascript void(0)' class='resetdata'><span><i class='fas fa-trash fa-lg mt-1'></i></span></a> "
                    verifiedstemlengths+="</div></li>"  
                }
                verifiedstemlengthslist.html(verifiedstemlengths)
                stemlengthfield.html(results)
            }
        )
    }

    function clearForm(){       
        unitfield.val("")
        varietyfield.val("")
        stemlengthfield.val("")
        reportedquantityfield.val(""),
        remarksfield.val("")
        receivingidfield.val("")
        tagfield.val("")
    }

   /* function computetotals(){
        var reported=0, verified=0, difference=0

        checkedunitstable.find(".reported").each(function(){
            reported+=parseFloat($(this).html())
        })

        checkedunitstable.find(".verified").each(function(){
            verified+=parseFloat($(this).html())
        })

        checkedunitstable.find(".difference").each(function(){
            difference+=parseFloat($(this).html())
        })

        reporteddiv.html($.number(reported,2))
        verifieddiv.html($.number(verified,2))
        differencediv.html($.number(difference,2))
        
    }*/

    
    savebutton.on("click",function(){
        var data=[],
            message="",
            errors="",
            unitid=unitfield.val(),
            varietyid=varietyfield.val(),
            stemlengthid=stemlengthfield.val(),
            reportedquantity=reportedquantityfield.val(),
            verifiedquantities=[],
            problems=[],
            remarks=remarksfield.val(),
            receivingid=receivingidfield.val()

        verifiedstemlengthslist.find("li").each(function(){
            var stemlength=$(this).attr("id"),
                quantity=$(this).find(".badge").html()
            if(parseFloat(quantity)>0){
                verifiedquantities.push({stemlength:stemlength,quantity:quantity})
            }
        })

        problemlist.find("li").each(function(){
            var faultid=$(this).attr("id"),
                quantity=$(this).find(".badge").html()
            if(parseFloat(quantity)>0){
                problems.push({faultid:faultid,quantity:quantity})
            }
        })

        // hide all errors 
        errordiv.html("")
        // check for blank fields
        if(unitid==""){
            errors="Please select unit first."
            unitfield.focus()
        }else if(varietyid==""){
            errors="Please select variety"
            varietyfield.focus()
        }else if(stemlengthid==""){
            errors="Please select stem length"
            stemlengthfield.focus()
        }else if(reportedquantity==""  || parseFloat(reportedquantity)==0){
            errors="Please provide correct quantity reported"
            reportedquantityfield.focus()
        }else if(verifiedquantities.length<=0){
            errors="Please add at least a verified stem length quantity"
        }

        if(errors==""){
            // save 
            verifiedquantities=JSON.stringify(verifiedquantities)
            problems=JSON.stringify(problems)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    saveflowerrandomcheck:true,
                    unitid:unitid,
                    varietyid:varietyid,
                    stemlength:stemlengthid,
                    remarks:remarks,
                    counted:reportedquantity,
                    verifieddetails:verifiedquantities,
                    faults:problems,
                    receivingid:receivingid
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Random check saved successfully."
                        savediv.html(showAlert('success',message))
                        // clear the fields
                        emptyLists()
                        clearForm()
                        tagfield.focus()
                    }else{
                        savediv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            // show error
            savediv.html(showAlert('info',errors))
        }
    })

    clearbutton.on("click",function(){
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to clear the form?",
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
                         clearForm()
                         emptyLists()
                        unitfield.focus()
                        //errordiv.html("")
                        savediv.html("")
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
        
    })

    function getproblems(){
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerrejectreasons:true
            },
            function(data){
                var results="<option value=''>&lt;Choose One&gt;</option>"
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].description+"</option>"
                }
                problemsfield.html(results)
            }
        )
    }

    addproblembutton.on("click",function(){
        problemsfield.val("")
        problemsquantityfield.val("")
        problemerrorsdiv.html("")
        problemsmodal.modal('show')
    })

    saveproblembutton.on("click",function(){
        var problemname=problemsfield.find("option:selected").html(),
            problemid=problemsfield.val(),
            quantity=problemsquantityfield.val(),
            errors=""
        // check for blank fields
        if(problemid==""){
            errors="Please select a problem first."
            problemsfield.focus()
        }else if(quantity=="" || parseFloat(quantity)==0){
            errors="Please provide correct quantity."
            problemsquantityfield.focus()
        }

        if(errors==""){
            // add to the list
            var problem="<li  class='child list-group-item list-group-item-action d-flex justify-content-between align-items-center' id='"+problemid+"'>"
            problem+="<div class='problemname'>"+problemname
            problem+="</div>"
            problem+="<div class='flex-column'>"
            problem+="<span class='badge badge-info badge-pill'> "+quantity+"</span>&nbsp;&nbsp;&nbsp;&nbsp;"
            problem+="<a href='javascript void(0)' class='editdata'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a>&nbsp;&nbsp;&nbsp;&nbsp;"
            problem+="<a href='javascript void(0)' class='resetdata'><span><i class='fas fa-trash fa-lg mt-1'></i></span></a> "
            problem+="</div></li>"    
            $(problem).appendTo(problemlist)
            problemerrorsdiv.html(showAlert('success',"Problem added to the list successfully"))
            if(problemcontinousadd.prop("checked")==true){
                problemsfield.val("")
                problemsquantityfield.val("")
                problemsfield.focus()
            }
        }else{
            // display the error
            problemerrorsdiv.html(showAlert('info',errors))
        }
    })

    verifiedstemlengthslist.on("click",".editdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("div").parent("li")
        bootbox.prompt({
            title:"Provide quantity verified",
            size: 'small',
            message: "Enter quantity verified",
            inputType: 'number',
            callback: function (result) {
                if(parseFloat(result)>0){
                    parent.find(".badge").html(result)
                } 
            }
        });
    })

    verifiedstemlengthslist.on("click",".resetdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("div").parent("li")
            itemname=parent.find(".stemlengthname").html()
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to remove <strong>"+itemname+"</strong>cm stems from the list?",
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
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
    })

    problemlist.on("click",".editdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("div").parent("li"),
            id=parent.attr("id"),
            quantity=parent.find(".badge").html()
        console.log(quantity)
        // show edit window
        problemsfield.val(id)
        problemsquantityfield.val(parseFloat(quantity))
        problemerrorsdiv.html("")
        problemsmodal.modal('show')
        parent.remove()
    })

    problemlist.on("click",".resetdata",function(e){
        e.preventDefault()
        var parent = $(this).parent("div").parent("li")
            itemname=parent.find(".problemname").html()
        bootbox.dialog({
            // title: "Confirm Item Removal!",
             message: "Are you sure you want to remove <strong>"+itemname+"</strong> from problems list?",
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
                         $('.bootbox').modal('hide');
                     }
                 }
             }
         })
    })

    function emptyLists(){
        // reset verified stem lengths to Zero (0)
        verifiedstemlengthslist.find("li").each(function(){
            $(this).find(".badge").html("0")
        })
        // remove all problems
        problemlist.find("li.child").remove()
    }

    tagfield.keypress(function(event){	
        var keycode = (event.keyCode ? event.keyCode : event.which),
            tag=tagfield.val()
        if(keycode == '13'){
            if(tag==""){
                errors="Please provide a Tag first"
                errordiv.html(showAlert('info',errors))
            }else{
                while (tag.length < 4) {
                    tag= '0' + tag;
                }
                tagfield.val(tag)
                // get tag details
                $.getJSON(
                    "../controllers/transactionoperations.php",
                    {
                        getreceivinginventorybytag:true,
                        tag:tag
                    },
                    function(data){
                        if(data.length>0){
                            // populate unit varieties before adding this
                            getVarieties(data[0].unitid).done(function(){
                                // populate the fields
                                unitfield.val(data[0].unitid)
                                varietyfield.val(data[0].varietyid)
                                stemlengthfield.val(data[0].stemlengthid)
                                if(data[0].fullbucket==1){
                                    reportedquantityfield.val(parseFloat(data[0].quantity*data[0].bucketcapacity))
                                }else{
                                    reportedquantityfield.val(data[0].quantity)
                                }
                                receivingidfield.val(data[0].id)
                            })
                        }else{
                            errors="Tag was not found"
                            savediv.html(showAlert('warning',errors))
                        }
                    }
                )
            }
        } 
    }) 
})