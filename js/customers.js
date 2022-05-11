$(document).ready(function(){
    var customeridfield=$("#customerid"),
        customernamefield=$("#customername"),
        physicaladdressfield=$("#physicaladdress"),
        postaladdressfield=$("#postaladdress"),
        telephonefield=$("#telephone"),
        emailfield=$("#email"),
        errordiv=$("#errors"),
        savebutton=$("#savecustomer"),
        clearbutton=$("#clearcustomerform"),
        customerslist=$("#customerslist"),
        navitem=$("#customers"),
        continousaddcustomer=$("#continousaddcustomer"),
        inputfields=$("input"),
        selectfields=$("select")
        addorderbutton=$("#addorder"),
        ordermodal=$("#customerorder"),
        orderdatefield=$("#orderdate"),
        ordernofield=$("#ordernumber"),
        ordervarietyfield=$("#variety"),
        orderstemlengthfield=$("#stemlength"),
        orderheadsizefield=$("#headsize"),
        orderquantityfield=$("#quantity"),
        ordererrordiv=$("#orderdetailerrors"),
        addorderitembutton=$("#addorderitem"),
        orderdetailslist=$("#orderdetails"),
        saveorderbutton=$("#savedorder"),
        customerorderslist=$("#customerorders"),
        orderpackingratefield=$("#packrate"),
        orderboxtypefield=$("#boxtype"),
        orderboxesfield=$("#boxes")
    
    navitem.addClass("active")
    // set module name
    setModuleName("Customers")
    // get existing customers
    getCustomers()
    // check continous add by default
    continousaddcustomer.prop("checked",true)
    // set datepicker for order date
    orderdatefield.datepicker({minDate: new Date(), dateFormat: 'dd-M-yy'})
    // get flower varieties
    getFlowerVarieties(ordervarietyfield,'choose')
    // get flower stem length
    getFlowerStemLength(orderstemlengthfield,'choose')
    // get flower head size
    getFlowerHeadSize(orderheadsizefield,'choose')
    // get packing rate
    getPackRate(orderpackingratefield,'choose')
    // get box type
    getPackagingSizes(orderboxtypefield,'choose')

    savebutton.on("click",function(){
        // check blank fields
        var id=customeridfield.val(),
            name=customernamefield.val(),
            physicaladdress=physicaladdressfield.val(),
            postaladdress=postaladdressfield.val(),
            telephone=telephonefield.val(),
            email=emailfield.val(),
            errors="",
            message=""
        if(name==""){
            errors="Please provide customer name"
            customernamefield.focus()
        }else if(physicaladdress==""){
            errors="Please provide physical address"
            physicaladdressfield.focus()
        }else if(postaladdress==""){
            errors="Please provide postal address"
            postaladdressfield.focus()
        }

        if(errors==""){
            $.post(
                "../controllers/customeroperations.php",
                {
                    savecustomer:true,
                    id:id,
                    customername:name,
                    physicaladdress:physicaladdress,
                    postaladdress:postaladdress,
                    telephone:telephone,
                    email:email
                },
                function(data){
                    data=$.trim(data)
                    if(data=="exists"){
                        message="The customer already exists."
                        errordiv.html(showAlert("info", message))
                    }else if(data=="success"){
                        message="The customer has been saved succesully"
                        errordiv.html(showAlert("success", message))
                        // refresh customers list
                        getCustomers()
                        if(continousaddcustomer.prop("checked")){
                            clearForm()
                            customernamefield.focus()
                        }
                    }else{
                        errordiv.html(showAlert("danger", data))
                    }
                }
            )
        }else{
            errordiv.html(showAlert("warning", errors))
        }
    })

    // get existing customers
    function getCustomers(){
        var results
        $.getJSON(
            "../controllers/customeroperations.php",
            {
                getcustomers:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].id+"'>"+data[i].customername+"</option>"
                }
                customerslist.html(results)
            }
        )
    }

    customerslist.on("change",function(){
        var customerid=$(this).find("option:selected").val()
        errordiv.html("")
        $.getJSON(
            "../controllers/customeroperations.php",
            {
                getcustomerdetails:"true",
                customerid:customerid
            },
            function(data){
                customeridfield.val(data[0].id)
                customernamefield.val(data[0].customername)
                physicaladdressfield.val(data[0].physicaladdress)
                postaladdressfield.val(data[0].postaladdress)
                emailfield.val(data[0].email),
                telephonefield.val(data[0].mobile)
            }
        )
        // get customers orders
        getCustomerOrders(customerid)
    })

    function clearForm(){
        customeridfield.val("0")
        customernamefield.val("")
        physicaladdressfield.val("")
        postaladdressfield.val("")
        emailfield.val(""),
        telephonefield.val("")
    }
    
    // listen to clear customer form button click event
    clearbutton.on("click",function(){
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to clear the form ?",
            buttons: {
                success: {
                    label: "No, Leave as is",
                    className: "btn-success",
                    callback: function() {
                        $('.bootbox').modal('hide');
                    }
                },
                danger: {
                    label: "Yes, clear contents",
                    className: "btn-danger",
                    callback: function() {
                        //console.log(parent)
                        clearForm()
                        $('.bootbox').modal('hide');
                        customernamefield.focus()
                    }
                }
            }
        })
    })

    // hide error div whenever there is a change in any input field
    inputfields.on("input",function(){
        errordiv.html("")
        ordererrordiv.html("")
    })

    //display add order modal
    customerorderslist.on("click","#addorder", function(){
        console.log("Add clicked")
        ordermodal.modal("show")
    })

    // add order item to the list
    addorderitembutton.on("click",function(){
        var orderno=ordernofield.val(),
            orderdate=orderdatefield.val(),
            variety=ordervarietyfield.val(),
            stemlength=orderstemlengthfield.val(),
            headsize=orderheadsizefield.val(),
            quantity=orderquantityfield.val(),
            errors="",
            message="",
            results="",
            packrate=orderpackingratefield.val(),
            boxtype=orderboxtypefield.val(),
            boxes=orderboxesfield.val()
            varietyname=ordervarietyfield.find("option:selected").html(),
            stemlengthname=orderstemlengthfield.find("option:selected").html(),
            headsizename=orderheadsizefield.find("option:selected").html(),
            packratename=packrate //orderpackingratefield.find("option:selected").html(),
            boxtypename=orderboxtypefield.find("option:selected").html()
            headsizetext=""
        // check for blank fields
        if(orderno==""){
            errors="Please provide order number"
            ordernofield.focus()
        }else if(orderdate==""){
            errors="Please select order date"
            orderdatefield.focus()
        }else if(packrate==""){
            errors="Please select pack rate"
            orderpackingratefield.focus()
        }else if(variety==""){
            errors="Please select flower variety"
            ordervarietyfield.focus()
        }else if(stemlength==""){
            errors="Please select stem length"
            orderstemlengthfield.focus()
        }else if(!orderheadsizefield.prop("disabled")){
            if(headsize==""){
                errors="Please select head size"
                orderheadsizefield.focus()
            }else{
                headsizetext=", Head size: "+headsizename 
            } 
        }else if(boxtype==""){
            errors="Please select box type"
            orderboxtypefield.focus()
        }else if(quantity=="" || parseFloat(quantity)==0){
            errors="Please provide correct quantity"
            orderquantityfield.focus()
        }else if(boxes=="" || parseFloat(boxes)==0){
            errors="Please provide number of boxes to pack"
            orderboxesfield.focus()
        }

        if(headsize==""){
            headsize=0
        }

        if(errors==""){
            errordiv.html("")
            results+="<li class='list-group-item list-group-item-action flex-column justify-content-between align-items-start'>"
            results+="<div class='d-flex justify-content-between'><h6>"+varietyname+"</h6><p class='badge badge-info badge-pill'>"+quantity+"</p></div>"
            results+="<div class='d-flex justify-content-between'><div><small>Stem size:"+stemlengthname
            results+=headsizetext+", Pack Rate: "+packratename+"<br/>Box Type: "+boxtypename+", Boxes: "+boxes+"</small></div>"
            results+="<div><a href='javascript void(0)' class='editdata' data-variety='"+variety+"' data-stemlength='"+stemlength+"' data-headsize='"+headsize+"' data-quantity='"+quantity+"' data-packrate='"+packrate+"' data-boxtype='"+boxtype+"' data-boxes='"+boxes+"'><span><i class='fas fa-edit fa-lg mt-2'></i></span></a>&nbsp;&nbsp;&nbsp;"
            results+="<a href='javascript void(0)' class='deletedata'><span><i class='fas fa-trash fa-lg mt-2'></i></span></a></div></li>"
            $(results).appendTo(orderdetailslist)
            message="Order item added to the list"
            ordererrordiv.html(showAlert("success",message))
            // clear fields to enable add a new order item
            orderstemlengthfield.val("")
            orderheadsizefield.val("")
            ordervarietyfield.val("")
            orderquantityfield.val("")
            orderpackingratefield.val("")
            orderboxtypefield.val("")
            orderboxesfield.val("")
            ordervarietyfield.focus()
        }else{
            ordererrordiv.html(showAlert("info",errors))
        }
    })

    //listen to change in flower variety then disable head size as appropriate
    ordervarietyfield.on("change",function(){ 
        var varietyid=ordervarietyfield.val()
        if(varietyid!=""){
            validateFlowerHeadSize(orderheadsizefield,varietyid)
        }
    })

    // save customer order
    saveorderbutton.on("click",function(){
        var orderdetails=[],
            customerid=customerslist.find("option:selected").val(),
            orderno=ordernofield.val(),
            orderdate=orderdatefield.val(),
            errors=""
        // populate added order items
        orderdetailslist.find(".editdata").each(function(){
            $this=$(this)
            variety=$this.attr("data-variety"),
            stemlength=$this.attr("data-stemlength"),
            headsize=$this.attr("data-headsize")
            quantity=$this.attr("data-quantity")
            packrate=$this.attr("data-packrate")
            boxtype=$this.attr("data-boxtype")
            boxes=$this.attr("data-boxes")
            orderdetails.push({variety:variety,stemlength:stemlength,headsize:headsize,quantity:quantity,packrate:packrate,boxtype:boxtype,boxes:boxes})
        })
        // check for blank fields
        if(customerid==""||customerid==undefined){
            errors="Please select a customer first."
        }else if(orderno==""){
            errors="Please provide order number"
            ordernofield.focus()
        }else if(orderdate==""){
            errors="Please provide order date"
            orderdatefield.focus()
        }else if(orderdetails.length<=0){
            errors="Please add at least an order item"
        }
        //console.log(errors)
        if(errors==""){
            orderdetails=JSON.stringify(orderdetails)
            $.post(
                "../controllers/customeroperations.php",
                {
                    savecustomerorder:true,
                    customerid:customerid,
                    orderno:orderno,
                    orderdate:orderdate,
                    orderitems:orderdetails
                },
                function(data){
                    data=$.trim(data)
                    if(data=="exists"){
                        message="The order number is already in use"
                        ordererrordiv.html(showAlert("warning",message))
                        ordernofield.focus()
                    }else if(data=="success"){
                        message="The order has been saved successfully"
                        ordererrordiv.html(showAlert("success",message))
                        // check if continously adding and clear fields appropriately
                        clearForm()
                        ordernofield.focus()
                    }else{
                        ordererrordiv.html(showAlert("danger",data))
                    }
                }
            )
        }else{
            ordererrordiv.html(showAlert("info",errors))
        }
    })

    function clearForm(){
        ordernofield.val("")
        orderdatefield.val("")
        ordervarietyfield.val("")
        orderstemlengthfield.val("")
        orderheadsizefield.val("")
        orderquantityfield.val("")
        // empty listview to remain with heading only
        orderdetailslist.find(".editdata").each(function(){
            parent=$(this).parent("div").parent("div").parent("li")
            parent.remove()
        })
    }

    function getCustomerOrders(customerid){
        $.getJSON(
            "../controllers/customeroperations.php",
            {
                getcustomerorders:true,
                customerid:customerid
            },
            function(data){
                if(data.length>0){
                    var itemlist="",
                        previousorderno=data[0].orderno,
                        username='',
                        dateadded='',
                        orderid=0
                    // place the header for the customer orders list
                    results="<li class='list-group-item d-flex justify-content-between align-items-center bg-info text-white font-weight-bold'>Existing Orders<span><i class='fas fa-plus-circle fa-lg mt-1' id='addorder'></i></span></li>"
                    // initialize the first list item
                    results+="<li class='list-group-item list-group-item-action'>"
                    results+="<div class='flex-column'>"
                    results+="<div class='d-flex justify-content-between align-items-start'><h6>"+data[0].orderno+"</h6><p class='small'>"+data[0].orderdate+"</p></div>"
                    for(var i=0;i<data.length;i++){
                        if(data[i].orderno==previousorderno){
                            if(parseFloat(data[i].headsize)>0){
                                itemlist+="V: "+data[i].varietyname+" H: "+data[i].headsize+" S: "+data[i].stemlength+" Q: "+data[i].quantity+"<br/>"
                            }else{
                                itemlist+="V: "+data[i].varietyname+" S: "+data[i].stemlength+" Q: "+data[i].quantity+"<br/>"
                            } 
                        }
                        else{
                            // Add username and date added at the end of the list
                            itemlist+="<span class='small'>U: "+data[i].addedby+" T: "+data[i].dateadded+"</span>"
                            results+="<div class='d-flex justify-content-between'><div>"+itemlist+"</div>"
                            results+="<div><a href='javascript void(0)' class='editdata' data-id='"+data[i].orderid +"'><span><i class='fas fa-edit fa-lg mt-2'></i></span></a>&nbsp;&nbsp;&nbsp;"
                            results+="<a href='javascript void(0)' class='deletedata' data-id='"+data[i].orderid +"'><span><i class='fas fa-trash fa-lg mt-2'></i></span></a></div></div></div></li>"
                            previousorderno=data[i].orderno
                            // reset items list to contain the current data 
                            if(parseFloat(data[i].headsize)>0){
                                itemlist="V: "+data[i].varietyname+" H: "+data[i].headsize+" S: "+data[i].stemlength+" Q: "+data[i].quantity+"<br/>"
                            }else{
                                itemlist="V: "+data[i].varietyname+" S: "+data[i].stemlength+" Q: "+data[i].quantity+"<br/>"
                            } 
                            // a new list item
                            results+="<li class='list-group-item list-group-item-action'>"
                            results+="<div class='flex-column'><div class='d-flex justify-content-between align-items-start'><h6>"+data[i].orderno+"</h6><p class='small'>"+data[i].orderdate+"</p></div>"
                            username=data[i].addedby
                            dateadded=data[i].orderdate
                            orderid=data[i].orderid 
                        }
                        
                    }
                    // push the last item to the list
                    itemlist+="<span class='small'>U: "+username+" T: "+dateadded+"</span>"
                    results+="<div class='d-flex justify-content-between'><div>"+itemlist+"</div>"
                    results+="<div><a href='javascript void(0)' class='editdata' data-id='"+orderid+"'><span><i class='fas fa-edit fa-lg mt-2'></i></span></a>&nbsp;&nbsp;&nbsp;"
                    results+="<a href='javascript void(0)' class='deletedata' data-id='"+orderid+"'><span><i class='fas fa-trash fa-lg mt-2'></i></span></a></div></li>"
                    //console.log(results)
                    customerorderslist.html(results)
                } 
            }
        )
    }

    // edit order item
    orderdetailslist.on("click",".editdata", function(e){
        e.preventDefault()
        $this=$(this)
        parent=$this.parent("div").parent("div").parent("li")
        ordererrordiv.html("")
        orderstemlengthfield.val($this.attr("data-stemlength"))
        orderheadsizefield.val($this.attr("data-headsize"))
        ordervarietyfield.val($this.attr("data-variety"))
        orderquantityfield.val($this.attr("data-quantity"))
        orderpackingratefield.val($this.attr("data-packrate"))
        orderboxtypefield.val($this.attr("data-boxtype"))
        orderboxesfield.val($this.attr("data-boxes"))
        ordervarietyfield.focus() 
        // remove from the list
        parent.remove()
    })

    orderdetailslist.on("click",".deletedata", function(e){
        e.preventDefault()
        var $this=$(this),
            parent=$this.parent("div").parent("div").parent("li")
            //id=$this.attr("data-id")
        // open confirmation to delete
        ordererrordiv.html("")
        bootbox.dialog({
            // title: "Confirm Item Removal!",
            message: "Are you sure you want to remove the <strong>Order Item</strong> from the list?",
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
                        parent.remove()          
                        $('.bootbox').modal('hide')
                    }
                }
            }
        })
    })

    // listen to select fields change and hide notifications
    selectfields.on("change",function(){
        ordererrordiv.html("")
    })

    // listen to edit and delete order list
    customerorderslist.on("click",".editdata",function(e){
        e.preventDefault()
    })

    customerorderslist.on("click",".deletedata",function(e){
        e.preventDefault()
    })
})