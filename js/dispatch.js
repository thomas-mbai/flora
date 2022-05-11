$(document).ready(function(){
    var navitem=$("#dispatch"),
        errordiv=$("#errors"),
        packaginglist=$("#dispatchedflowers"),
        tagfield=$("#tag")
        continousaddfield=$("#continousadd"),
        savebutton=$("#savebutton")

    navitem.addClass("active")
    // set module name
    setModuleName("Dispatch")
    continousaddfield.prop("checked",true)

    tagfield.on("keypress", function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which),
            tag=tagfield.val(),
            results="",
            message=""
        if(keycode == '13'){
            if(tag==""){
                errors="Please provide a Tag first"
                errordiv.html(showAlert('info',errors))
            }else{
                // get tag details
                tag=padzeros(tag)
                tagfield.val(tag)
                $.getJSON(
                    "../controllers/transactionoperations.php",
                    {
                        getpackinglist:true,
                        tag:tag
                    },
                    function(data){
                        if(data.length>0){
                            results="<li class='list-group-item list-group-item-action removableitem'>"
                            results+="<div class='flex-column' data-id='"+data[0].id+"'>"
                            results+="<div class='d-flex justify-content-between align-items-center'><h6>#"+data[0].taglabel+" : "+data[0].customername+"</h6><h6>"+data[0].orderno+"</div>"
                            results+="<div class='d-flex justify-content-between align-items-center'>"
                            results+="<div><small>V: "+data[0].varietyname+" P: "+data[0].packingsizename+" B: "+data[0].bunchingstylename+" S:"+data[0].stemlengthname+" H:"+data[0].headsizename
                            results+=" Q:"+data[0].quantity+" W:"+data[0].weight+"</small></div>"
                            results+="<div><a href='javascript void(0)' class='deletedata' data-id='"+data[0].id+"'><span><i class='fas fa-trash-alt fa-lg mt-1'></i></span></a></div>"
                            // close both d-flex div and div-column div
                            results+="</div></div></li>"
                            $(results).appendTo(packaginglist)
                            message="Packing list item added successfully"
                            errordiv.html(showAlert('success',message))
                            tagfield.val("")
                            tagfield.focus()
                        }else{
                            errors="Tag was not found"
                            tagfield.focus()
                            errordiv.html(showAlert('warning',errors))
                        }
                    }
                )
            }
        } 
    })

    savebutton.on("click",function(){
        var items=[], id
        packaginglist.find(".deletedata").each(function(){
            id=$(this).attr("data-id")
            items.push({id:id})
        })
        // check if at least an item has been done
        if(items.length>0){
            items=JSON.stringify(items)
            $.post(
                "../controllers/transactionoperations.php",
                {
                    savedispatch:true,
                    items:items
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        errordiv.html(showAlert('success',"Package(s) dispatched successfully"))
                        // clear the list
                        clearList()
                    }else{
                        errordiv.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            errors="Please provide at least an item to dispatch"
            errordiv.html(showAlert('info',errors))
        }
    })

    function clearList(){
        packaginglist.find(".removableitem").remove()
        tagfield.val("")
        tagfield.focus()
    }
})