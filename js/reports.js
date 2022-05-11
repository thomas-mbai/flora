$(document).ready(function(){
    navitem=$("#reports"),
    startdatefield=$("#startdate"),
    enddatefield=$("#enddate"),
    applybutton=$("#applybutton"),
    errordiv=$("#errors"),
    reportfield=$("#reportname"),
    reportdetails=$("#reportdetails"),
    exportbutton=$("#export"),
    printbutton=$("#print")

    navitem.addClass("active")
    setModuleName("Reports")

    startdatefield.datepicker({dateFormat: 'dd-M-yy',maxDate:new Date()})
    enddatefield.datepicker({dateFormat: 'dd-M-yy',maxDate:new Date()})

    applybutton.on("click",function(){
        var errors="",
        startdate=startdatefield.val(),
        enddate=enddatefield.val(),
        reportoption=reportfield.val()
        reportname="",
        addprintcarbutton=false
        results="<table class='table table-sm table-striped'><thead><tr>"
        //check for blank fields
        if(startdate==""){
            errors="Please select a start date first"
            //startdatefield.focus()
        }else if(enddate==""){
            errors="Please select end date first"
            //enddatefield.focus()
        }
        if(errors==""){
            switch (reportoption) {
                case "headsizestemwise":
                    reportname="getheadsizestemwisereport"
                    break;
                case "varietystemwisereport":
                    reportname="getvarietystemwisereport"
                    break;
                case "rejectionreport":
                    reportname="getrejectionreport"
                    break;
                case "varietydispatchreport":
                    reportname="getvarietydispatchreport"
                    break;
                case "productionreport":
                    reportname="getproductionreport"
                    break;
                case "randomchecksreport":
                    reportname="getrandomchecksreport"
                    break;
            }
            $.getJSON(
                "../controllers/reportoperations.php",
                {
                    reportname:reportname,
                    startdate:startdate,
                    enddate:enddate
                },
                function(data){
                    // create the table header
                    for(var i in data[0]){
                        // only the random checks report should have the id collumn
                        if (i=="Check ID"){
                            addprintcarbutton=true
                        }
                        // Headsizes start with a H. which we are replacing with Blanks
                        results+="<th>"+i.replace("H.","")+"</th>"
                    }
                    // add an extra collumn to hold the generate CAR button
                    if (addprintcarbutton){
                       results+="<th>&nbsp;</th>"
                    }
                    results+="</tr></thead>"
                    // create the table body
                    results+="<tbody>"
                    for(var i=0;i<data.length;i++){
                        results+="<tr>"
                        for(x in data[i]){
                            //console.log(data[i]) 
                            // skip the first column values when adding CAR details
                            //console.log(data[0][x])
                            //if(data[0][x]!=="id"){
                                //x+=1
                                results+="<td class='"+x+"'>"+data[i][x]+"</td>"
                           // }
                           
                        }
                        if(addprintcarbutton){
                            results+=`<td><button data-id='${data[i].id}' data-CARbutton='1' class='btn btn-sm btn-success'>Generate CAR</button><td>`
                        }
                        results+="</tr>"
                    }
                    results+="</tbody>"
                    results+="</table>"
                    // create the table footer
                    reportdetails.html(results)
                }
            )
        }else{
            errordiv.html(showAlert('info', errors))
        }
    })

    exportbutton.on("click",function(e){
        e.preventDefault()
        var filename=reportfield.find("option:selected").html().replace(" ","_"),
            reportname=reportfield.find("option:selected").html(),
            startdate=startdatefield.val(),
            enddate=enddatefield.val(),
            excel_data=reportdetails.html()
        page="exceldata.php?filename="+filename+"&data="+excel_data+"&startdate="+startdate+"&enddate="+enddate+"&reportname="+reportname
        window.location=page
    })

    printbutton.on("click",function(){
        var reportname=reportfield.find("option:selected").html(),
            startdate=startdatefield.val(),
            enddate=enddatefield.val(),
            reportbody=""
            reportbody="<table><thead><tr><th>"+reportname+"</th></thead>"
            reportbody+="<tbody><tr><td>Filter Options</td></tr>"
            reportbody+="<tr><td>Start Date: "+startdate+"</td>"
            reportbody+="<td>End Date: "+enddate+"</td></tr><tr><td>&nbsp;</td></tr></tbody></table>"
            reportbody+=reportdetails.html()
            
            wme=window.open("","","width=900, height=700")
            wme.document.write(reportbody)
            wme.document.close()
            wme.focus()
            wme.print()
            wme.close()
    })
})