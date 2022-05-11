$(document).ready(function(){
    navitem=$("#discard"),
    varietyfield=$("#variety"),
    stemlengthfield=$("#stemlength"),
    headsizefield=$("#headsize")
    navitem.addClass("active"),
    categoryfield=$("#category"),
    quantityfield=$("#quantity"),
    reasonfield=$("#reason"),
    addtolistbutton=$("#addtolist"),
    errordiv=$("#errors"),
    gradeddiscardlist=$("#gradeddiscardlist"),
    ungradeddiscardlist=$("#ungradediscardlist"),
    clearformbutton=$("#clearform"),
    savebutton=$("#savebutton")
    // set module name
    setModuleName("Discard")
    // get varieties
    getFlowerVarieties(varietyfield,option='choose')
    getFlowerStemLength(stemlengthfield,option='choose')
    getFlowerHeadSize(headsizefield,option='choose')

    varietyfield.on("change",function(){
        varietyid=varietyfield.val()
        validateFlowerHeadSize(headsizefield,varietyid)
    })

    //listen to add to list button
    addtolistbutton.on("click",function(){
        var category=categoryfield.val(),
            variety=varietyfield.val(),
            stemlength=stemlengthfield.val(),
            headsize=headsizefield.val(),
            quantity=quantityfield.val(),
            reason=$.trim(reasonfield.val()),
            errors="",
            results="",
            categoryname=categoryfield.find("option:selected").html(),
            varietyname=varietyfield.find("option:selected").html(),
            stemlengthname=stemlengthfield.find("option:selected").html(),
            headsizename=headsizefield.find("option:selected").html(),
            message=""
        //check for blank fields
        if(category==""){
            errors="Please select discard category."
            categoryfield.focus()
        }else if(variety==""){
            errors="Please select discarded variety."
            varietyfield.focus()
        }else if(stemlength==""){
            errors="Please select discarded stem length."
            stemlengthfield.focus()
        }else if(!headsizefield.prop("disabled")){
            if(headsize==""){
                errors="Please select discarded flowers head size."
            }else{
                headsize=0
            }
        }else if(quantity=="" || parseFloat(quantity)==0){
            errors="Please provide correct quantity discarded."
            quantityfield.focus()
        }else if(reason==""){
            errors="Please provide discard reason."
            reasonfield.focus()
        }

        if(headsizefield.prop("disabled")){
            headsize=0
            headsizename="-"
        }

        if(errors==""){
            // add the items to the list
            results="<li class='list-group-item list-group-item-action removableitem'>"
            results+="<div class='flex-column'><div class='d-flex justify-content-between align-items-center'><h6>"+varietyname+"</h6><h6>"+quantity+"</h6></div>"
            results+="<div class='d-flex justify-content-between align-items-center'>"
            results+="<div>S: "+stemlengthname+" H:"+headsizename+"<br/>Reason:<br/>"+reason+"</div>"
            results+="<div d-flex justify-content-between align-items-center>"
            results+="<div><a href='javascript void(0)' class='editdata' data-category='"+category+"'data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-headsize='"+headsize+"' data-quantity='"+quantity+"' data-reason='"+reason+"'><span><i class='fas fa-edit fa-lg mt-1'></i></span></a></div>"
            results+="<div><a href='javascript void(0)' class='deletedata'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a></div>"
            results+="</div></div></div>"
            // add item to the appropriate list
            category=="graded"?$(results).appendTo(gradeddiscardlist):$(results).appendTo(ungradeddiscardlist)
            message=categoryname+" discard added to the list successfully."
            errordiv.html(showAlert('success',message))
            clearFields()
            categoryfield.focus()
            //clear the fields for a new entry
        }else{
            errordiv.html(showAlert('info',errors))
        }
    })

    function clearFields(){
        $("input").val("")
        $("select").val("")
        $("textarea").val("")
    }

    function clearLists(){
        $(".removableitem").remove()
    }

    clearformbutton.on("click",function(){
        // confirm whether to proceed with clearing the form
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to clear the form?",
            buttons: {
                success: {
                    label: "No, leave as is",
                    className: "btn-success",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, clear form",
                    className: "btn-danger",
                    callback: function() {
                        //console.log(parent)
                        clearFields()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    savebutton.on("click",function(){
        var items=[], errors="",message=""
        // add any graded discards if any to the items arrays
        gradeddiscardlist.find(".editdata").each(function(){
            var $this=$(this),
                category=$this.attr("data-category"),
                varietyid=$this.attr("data-variety"),
                stemlength=$this.attr("data-stemlength"),
                headsize=$this.attr("data-headsize"),
                quantity=$this.attr("data-quantity"),
                reason=$this.attr("data-reason")
                items.push({category:category,varietyid:varietyid,stemlength:stemlength,headsize:headsize,quantity:quantity,reason:reason})
        })

        // add any ungraded discards if any to the items arrays
        ungradeddiscardlist.find(".editdata").each(function(){
            var $this=$(this),
                category=$this.attr("data-category"),
                varietyid=$this.attr("data-variety"),
                stemlength=$this.attr("data-stemlength"),
                headsize=$this.attr("data-headsize"),
                quantity=$this.attr("data-quantity"),
                reason=$this.attr("data-reason")
                items.push({category:category,varietyid:varietyid,stemlength:stemlength,headsize:headsize,quantity:quantity,reason:reason})
        })

        // check if at least an item was added
        if(items.length>0){
            items=JSON.stringify(items)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savediscard:true,
                    items:items
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Items discarded successfully."
                        errordiv.html(showAlert('success',message))
                        clearLists()
                        clearFields()
                        categoryfield.focus()
                    }else{
                        errordiv.html(showAlert('danger',data))
                    }
                }
            )
        }else{
            errors="Sorry, discard lists are empty."
            errordiv.html(showAlert('info',errors))
        }
    })
})