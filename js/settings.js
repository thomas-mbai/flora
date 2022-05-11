$(document).ready(function(){
    var consumerkeyfield=$("#consumerkey"),
        consumersecretfield=$("#consumersecret"),
        validationurlfield=$("#validationurl"),
        confirmationurlfield=$("#confirmationurl"),
        paybillnofield=$("#paybillnumber"),
        savempesabutton=$("#savempesa"),
        mpesaerrors=$("#mpesaerrors"),

        emailaddressfield=$("#senderemail")
        emailapsswordfield=$("#password"),
        smtpserverfield=$("#smtp"),
        smtpportfield=$("#smtpport"),
        usesslfield=$("#usessl"),
        saveemailconfigurationbutton=$("#saveemail"),
        emailerrors=$("#emailerrors"),

        smssenderidfield=$("#smssenderid"),
        smsusernamefield=$("#smsusername"),
        smsapikeyfield=$("#smsapikey"),
        savesmsconfigurationbutton=$("#savesms"),
        smserrors=$("#smserrors"),

        testsmsrecipients=$("#testsmsrecipient"),
        testsmsmessage=$("#testsmsmessage"),
        testsmssendbutton=$("#sendtestmessage"),
        testsmserrors=$("#testsmserrors"),

        testemailaddress=$("#testemailaddress"),
        testemailsubject=$("#testemailsubject"),
        testemailmessage=$("#testemailmessage"),
        sendtestemail=$("#sendtestemail"),
        testemailerrors=$("#testmailerrors"),
       
        varietydetailsmodal=$("#varietydetailsmodal"),
        addvarietybutton=$("#addnewvariety"),
        navitem=$("#settings"),
        savevarietydetailsbutton=$("#savevarietydetails"),
        varietynamefield=$("#varietyname"),
        bucketcapacityfield=$("#bucketcapacity"),
        varietyidfield=$("#varietydetailsid"),
        varietydetailserrors=$("#varietydetailserrors"),
        varietyinputfields=$(".varietyinputfields"),
        varietymeasureheadfield=$("#measureheadsize"),
        varietycontinousadd=$("#varietycontinousadd"),
        flowervarietiestable=$("#flowervarietiestable"),

        addrejectreasonbutton=$("#addnewrejectreason"),
        rejectreasonmodal=$("#rejectreasonsmodal"),
        rejectreasonidfield=$("#rejectreasonid"),
        rejectreasonfield=$("#rejectreason"),
        rejectreasonerrors=$("#rejectreasonserrors"),
        saverejectreasonbutton=$("#saverejectreason"),
        rejectreasoncontinousadd=$("#rejectcontinousadd"),
        rejectreasonstable=$("#rejectreasonstable"),

        addunitbutton=$("#addnewunit"),
        unitmodal=$("#unitssmodal"),
        uniterrors=$("#uniterrors"),
        unitnamefield=$("#unitname"),
        acreagefield=$("#acreage"),
        unitidfield=$("#unitid"),
        unitcontinousaddfield=$("#unitcontinousadd"),
        unitstable=$("#unitstable"),
        saveunitbutton=$("#saveunit"),

        adddepartmentbutton=$("#addnewdepartment"),
        departmentmodal=$("#departmentsmodal"),
        departmentidfield=$("#departmentid"),
        departmentnamefield=$("#departmentname"),
        departmenterrors=$("#departmenterrors"),
        savedepartmentbutton=$("#savedepartment"),
        departmentcontinousadd=$("#departmentcontinousadd"),
        departmentstable=$("#departmentstable"),
        unitvarieties=$("#unitvarieties")

    // Display copyright year
    getCopyrightDate()
    // Display module name
    setModuleName("Settings")
    // make link button active
    navitem.addClass("active")
    // show user logged in
    setLoggedInUserName()
    // get existing flower varieties
    getFlowerVarieties()
    // get existing flower reject reasons
    getFlowerRejectReasons()
    // get existing flower units
    getFlowerUnits()
    // get existing departments
    getDepartments()

    // list to add department modal
    adddepartmentbutton.on("click",function(){
        departmentmodal.modal('show')
    })

    //listen to save department button
    savedepartmentbutton.on("click",function(){
        var departmentid=departmentidfield.val(),
            departmentname=departmentnamefield.val(),
            errors="",
            message=""
        if(departmentname==""){
            errors="Please provide department name"
            departmenterrors.html(showAlert('info',errors))
            departmentnamefield.focus()
        }else{
            $.post(
                "../controllers/settingsoperations.php",
                {
                    savedepartment:true,
                    departmentid:departmentid,
                    departmentname:departmentname
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="The department was saved successfully."
                        departmenterrors.html(showAlert('success',message))
                        // refresh departments list
                        getDepartments()
                        if(departmentcontinousadd.val()==1){
                            departmentidfield.val("0")
                            departmentnamefield.val("")
                            departmentnamefield.focus()
                        }
                    }else if(data=="exists"){
                        message="The department name is already in use."
                        departmenterrors.html(showAlert('info',message))
                    }else{
                        departmenterrors.html(showAlert('warning',data))
                    }
                }
            )
        }
    })

    //listen to add unit modal
    addunitbutton.on("click",function(){
        unitmodal.modal('show')
    })

    // listen to save unit button click
    saveunitbutton.on("click",function(){
        var unitid=unitidfield.val(),
            unitname=unitnamefield.val(),
            acreage=acreagefield.val(),
            errors="",
            message="",
            data=[]
        
            unitvarieties.find(".unitvariety").each(function(){
                if ($(this).prop("checked")){
                    varietyid=$(this).prop("id")
                    data.push({varietyid: varietyid})
                }
            })
        // generate all the checked varieties assisgned to the unit
        // check for blank fields
        if(unitname==""){
            errors="Please provide unit name"
            unitnamefield.focus()
        }else if(acreage=="" || parseFloat(acreage)==0){
            errors="Please provide acreage"
            acreagefield.focus()
        }else if(unitvarieties.length==0){
            errors="Please select at least a Flower variety"
        }
        if(errors==""){
            // save the unit
            data=JSON.stringify(data)
            $.post(
                "../controllers/settingsoperations.php",
                {
                    saveflowerunit:true,
                    unitid:unitid,
                    unitname:unitname,
                    acreage:acreage,
                    TableData:data
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="The flower unit saved successfully."
                        uniterrors.html(showAlert('success',message))
                        // reset flower variety checked
                        unitvarieties.find(".unitvariety").prop("checked",false)
                        getFlowerUnits()
                        if(unitcontinousaddfield.val()==1){
                            unitidfield.val("0")
                            unitnamefield.val("")
                            acreagefield.val("")
                            unitnamefield.focus()
                        }
                    }else if(data=="exists"){
                        message="Flower unit already exists in the system."
                        uniterrors.html(showAlert('info',message))
                    }else{
                        uniterrors.html(showAlert('danger',data))
                    }
                }
            )
        }else{
            // display errors
            uniterrors.html(showAlert('info',errors))
        }
    })

    //listen to click of add new variety
    addvarietybutton.on("click",function(data){
        varietydetailsmodal.modal('show')
    })

    // listen to save variety
    savevarietydetailsbutton.on("click",function(){
        var varietyid=varietyidfield.val(),
            varietyname=varietynamefield.val(),
            bucketcapacity=bucketcapacityfield.val(),
            varietyid=varietyidfield.val(),
            measureheadsize=varietymeasureheadfield.val()==0?0:1
            errors="",
            message=""
        // check for blank fields
        if(varietyname==""){
            errors="Please provide variety name"
            varietynamefield.focus()
        }else if(bucketcapacity=="" || parseFloat(bucketcapacity)==0){
            errors="Please provide variety bucket capacity"
            bucketcapacityfield.focus()
        }

        if(errors==""){
            // save the variety
            $.post(
                "../controllers/settingsoperations.php",
                {
                    saveflowervariety:true,
                    id:varietyid,
                    varietyname:varietyname,
                    bucketcapacity:bucketcapacity,
                    measureheadsize:measureheadsize
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="The variety <strong>"+varietyname+"</strong> saved successfully."
                        varietydetailserrors.html(showAlert('success',message))
                        // check if continous add then clear the fields
                        if(varietycontinousadd.val()==1){
                            varietyidfield.val("0"),
                            varietynamefield.val(""),
                            bucketcapacityfield.val(""),
                            varietymeasureheadfield.val("0")
                            varietynamefield.focus()
                            // reresh the list 
                            getFlowerVarieties()
                        }
                    }else if(data=="exists"){
                        message="The flower variety name is already in use."
                        varietydetailserrors.html(showAlert('info',message)) 
                    }else{
                        varietydetailserrors.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            // display errors
            varietydetailserrors.html(showAlert('info',errors))
        }

    })
    // listen to variety input fields on change
    varietyinputfields.on("input",function(){
        varietydetailserrors.html("")
    })

    // list to click event of add reject reason
    addrejectreasonbutton.on("click",function(){
        console.log("Clicked")
        rejectreasonmodal.modal('show')
    })

    // listen to save reject reason
    saverejectreasonbutton.on("click",function(){
        var reasonid=rejectreasonidfield.val(),
            rejectreason=rejectreasonfield.val(),
            errors="",
            message=""
        // check for blank fields
        if(rejectreason==""){
            errors="Please provide reject reason"
            rejectreasonfield.focus()
            rejectreasonerrors.html(showAlert('info', errors))
        }else{
            // save the reject reason
            $.post(
                "../controllers/settingsoperations.php",
                {
                    saveflowerrejectreason:true,
                    rejectid:reasonid,
                    rejectreason:rejectreason
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Flower reject reason was saved successfully"
                        rejectreasonerrors.html(showAlert('success', message))
                        // check if continous add is checked and clear fields to a new reject reason
                        if(rejectreasoncontinousadd.val()==1){
                            rejectreasonidfield.val("0")
                            rejectreasonfield.val("")
                            rejectreasonfield.focus()
                        }
                        // refresh the reject reasons list
                        getFlowerRejectReasons()
                    }else if(data=="exists"){
                        message="Flower reject reason already exists in the system."
                        rejectreasonerrors.html(showAlert('info', message))
                    }else{
                        rejectreasonerrors.html(showAlert('danger', data))
                    }
                }
            )
        }
    })

    // get email configuration
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getemailconfiguration:true
        },
        function(data){
            if(data.length>0){
                emailaddressfield.val(data[0].emailaddress)
                emailapsswordfield.val(data[0].password)
                smtpserverfield.val(data[0].smtpserver)
                smtpportfield.val(data[0].smtpport)
                usesslfield.prop("checked",data[0].usessl==1?true:false)
            }
        }
    )

    // get SMS configuration
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getsmsconfiguration:true
        },
        function(data){
            if(data.length>0){
                smssenderidfield.val(data[0].senderid)
                smsusernamefield.val(data[0].username)
                smsapikeyfield.val(data[0].apikey)
            }
        }
    )

    // save email configuration
    saveemailconfigurationbutton.on("click",function(){
        var emailaddress=emailaddressfield.val(),
            emailpassword=emailapsswordfield.val(),
            smtpserver=smtpserverfield.val(),
            smtpport=smtpportfield.val(),
            usessl=usesslfield.prop("checked")?1:0,
            errors="",
            results=""
        // check for blank fields
        if(emailaddress==""){
            errors="Please provide Sender Email Address"
        }else if(emailpassword==""){
            errors="Please provide Email Account Password"
        }else if(smtpserver==""){
            errors="Please provide SMTP server"
        }else if(smtpport==""){
            errors="Please provide SMTP port"
        }
        if(errors==""){
            $.post(
                "../controllers/settingsoperations.php",
                {
                    saveemailconfiguration:true,
                    emailaddress:emailaddress,
                    password:emailpassword,
                    smtpserver:smtpserver,
                    smtpport:smtpport,
                    usessl:usessl
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        results="Email configuration saved successfully."
                        emailerrors.html(showAlert('success',results))
                        //results="<p class='text-success'><i class='fas fa-check-circle fa-fw fa-lg'></i> Email configuration saved successfully.</p>"
                    }else{ 
                        results=data
                        emailerrors.html(showAlert('warning',results))
                       
                    }
                }
            )
        }else{
            emailerrors.html(showAlert('info',errors))
        }
    })

    //save sms configuration
    savesmsconfigurationbutton.on("click",function(){
        var senderid=smssenderidfield.val(),
            username=smsusernamefield.val(),
            apikey=smsapikeyfield.val(),
            errors="",
            results=""
        if(senderid==""){
            errors="Please provide Sender ID"
        }else if(username==""){
            errors="Please provide Username"
        }else if(apikey==""){
            errors="Please provide API Key"
        }

        if(errors==""){
            $.post(
                "../controllers/settingsoperations.php",
                {
                    savesmsconfiguration:true,
                    senderid:senderid,
                    username:username,
                    apikey:apikey
                },
                function(data){
                    data=$.trim(data) 
                    if(data=="success"){
                        results="SMS configuration saved successfully."
                        smserrors.html(showAlert('success',results))
                        
                    }else{
                        results=data
                        smserrors.html(showAlert('warning',results))
                    }
                }
            )
        }else{
            smserrors.html(showAlert('info',errors))
        }
    }) 

    testsmssendbutton.on("click",function(){
        var recipient=testsmsrecipients.val(),
            message=testsmsmessage.val(),
            errors="",
            results=""
        
        if(recipient==""){
            errors="Please provide the Recipient(s) number in International Format"
        }else if(message==""){
            errors="Please provide a Message for the Recipients"
        }
        if(errors==""){
            testsmserrors.html(showAlert('info', "Sending SMS. Please Wait ..."))
            $.post(
                "../controllers/sendsms.php",
               {
                    sendsms:true,
                    recipient:recipient,
                    message:message
               },
               function(data){
                    data=$.trim(data)
                    console.log(data)
                    if(data=="success"){
                        results="Test SMS has been sent successfully"
                        testsmserrors.html(showAlert('success',results))
                    }else{
                        errors=data
                        testsmserrors.html(showAlert('warning',data))
                    }

               }
            )
        }else{
            testsmserrors.html(showAlert('info',errors))
        }
    })

    // send test email
    sendtestemail.on("click",function(){
        var emailaddress=testemailaddress.val(),
            subject=testemailsubject.val()
            message=testemailmessage.val(),
            errors="",
            results=""
        if(emailaddress==""){
            errors="Please provide the recipients email address"
        }else if(subject==""){
            errors="Please provide the Email subject"
        }else if(message==""){
            errors="Please provide the Email Message"
        }
        if(errors==""){
            testemailerrors.html(showAlert('info',"Sending Mail. Please Wait ..."))
            $.post(
                "../controllers/sendmail.php",
                {
                    sendemail:true,
                    recipient:emailaddress,
                    subject:subject,
                    message:message
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        results="Test email sent successfully."
                        testemailerrors.html(showAlert('success',results))
                    }else{
                        testemailerrors.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            testemailerrors.html(showAlert('info',errors))
        }
    })

    function getFlowerVarieties(){
        var results="",
            results1="<label>Applicable Varieties</label><div class='card containergroup mt-2 mb-2'><div class='card-body scrollablesmall'><table class='table table-sm table-borderless'>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowervarieties:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<tr><td>"+parseFloat(i+1)+"</td>"
                    results+="<td>"+data[i].varietyname+"</td>"
                    results+="<td>"+data[i].bucketcapacity+"</td>"
                    results+="<td>"+data[i].measurehead+"</td>"
                    results+="<td>"+data[i].dateadded+"</td>"
                    results+="<td>"+data[i].addedby+"</td>"
                    results+="<td><a href='javascript void(0)' class='editvariety' data-id='"+data[i].varietyid+"'><span><i class='fas fa-edit fa-sm'></i></span></a></td>"
                    results+="<td><a href='javascript void(0)' class='deletevariety' data-id='"+data[i].varietyid+"'><span><i class='fas fa-trash fa-sm text-danger'></i></span></a></td></tr>"
                    
                    results1+="<tr><td><input type='checkbox' id='"+data[i].varietyid+"' class='unitvariety'>&nbsp;&nbsp;"
                    results1+=data[i].varietyname+"</td></tr>"
                }  
                
                results1+="</table> </div> </div>"
                unitvarieties.html(results1)
                flowervarietiestable.find("tbody").html(results)
            }
        )
    }

    function getFlowerRejectReasons(){
        var results=""
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerrejectreasons:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<tr><td>"+parseFloat(i+1)+"</td>"
                    results+="<td>"+data[i].description+"</td>"
                    results+="<td>"+data[i].dateadded+"</td>"
                    results+="<td>"+data[i].addedby+"</td>"
                    results+="<td><a href='javascript void(0)' class='editrejectreason' data-id='"+data[i].id+"'><span><i class='fas fa-edit fa-sm'></i></span></a></td>"
                    results+="<td><a href='javascript void(0)' class='deleterejectreason' data-id='"+data[i].id+"'><span><i class='fas fa-trash fa-sm text-danger'></i></span></a></td></tr>"
                }
                rejectreasonstable.find("tbody").html(results)
            }
        )
    }

    function getFlowerUnits(){
        var results=""
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getflowerunits:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<tr><td>"+parseFloat(i+1)+"</td>"
                    results+="<td>"+data[i].unitname+"</td>"
                    results+="<td>"+data[i].size+"</td>"
                    results+="<td>"+data[i].dateadded+"</td>"
                    results+="<td>"+data[i].addedby+"</td>"
                    results+="<td><a href='javascript void(0)' class='editunit' data-id='"+data[i].unitid+"'><span><i class='fas fa-edit fa-sm'></i></span></a></td>"
                    results+="<td><a href='javascript void(0)' class='deleteunit' data-id='"+data[i].unitid+"'><span><i class='fas fa-trash fa-sm text-danger'></i></span></a></td></tr>"
                }
                unitstable.find("tbody").html(results)
            }
        )
    }

    function getDepartments(){
        var results=""
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getdepartments:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<tr><td>"+parseFloat(i+1)+"</td>"
                    results+="<td>"+data[i].departmentname+"</td>"
                    results+="<td>"+data[i].dateadded+"</td>"
                    results+="<td>"+data[i].addedby+"</td>"
                    results+="<td><a href='javascript void(0)' class='editdepartment' data-id='"+data[i].departmentid+"'><span><i class='fas fa-edit fa-sm'></i></span></a></td>"
                    results+="<td><a href='javascript void(0)' class='deletedepartment' data-id='"+data[i].departmentid+"'><span><i class='fas fa-trash fa-sm text-danger'></i></span></a></td></tr>"
                }
                departmentstable.find("tbody").html(results)
            }
        )
    }

    // edit unit details
    /* */
    unitstable.on("click",'.editunit', function(e){
        e.preventDefault()
        $this=$(this)
        id=$this.attr("data-id")
        // get unit details
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getunitdetails:true,
                id:id
            },
            function(data){
                unitnamefield.val(data[0].unitname)
                acreagefield.val(data[0].size)
                unitidfield.val(data[0].unitid)
            }
        )
        // get unit varieties
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getunitvarieties:true,
                unitid:id
            },
            function(data){
                // untick all the checkboxes first
                unitvarieties.find(".unitvariety").prop("checked",false)
                for(var i=0;i<data.length;i++){
                    unitvarieties.find(".unitvariety").each(function(){
                        if ($(this).prop("id")==data[i].varietyid){
                            $(this).prop("checked",true)
                        }
                    })
                }
            }
        )
        // show modal
        unitmodal.modal("show")
        // hide unit modal errors or messages
        uniterrors.html("")
    })
   
})