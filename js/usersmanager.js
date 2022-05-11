$(document).ready(function(){

    var userdetailstab=$("#userdetails"),
        roledetailstab=$("#roledetails"),
        userprivileges=$("#userprivileges"),
        roleprivileges=$("#roleprivileges"),  
        userslist=$("#userslist"),
        userroleslist=$("#userroleslist"),
        useridfield=$("#userid"),
        usernamefield=$("#username"),
        passwordfield=$("#password"),
        confirmpasswordfiel=$("#confirmpassword"),
        firstnamefield=$("#firstname"),
        middlenamefield=$("#middlename"),
        lastnamefield=$("#lastname"),
        emailfield=$("#email"),
        mobilefield=$("#mobile"),
        changestatusbutton=$("#changestatusbutton"),
        systemadminbutton=$("#systemadmin"),
        changepasswordonlogonbutton=$("#changepasswordonlogon"),
        accountactivefield=$("#accountactive"),
        saveuserbutton=$("#saveuser"),
        errordiv=$("#errordiv"),
        clearuserbutton=$("#clearuser"),
        rolesdropdown=$("#roles"),
        roleusers=$("#roleusers"),
        saverolebutton=$("#saverole"),
        roleidfield=$("#roleid"),
        rolenamefield=$("#rolename"),
        roledescriptionfield=$("#roledescription"),
        roleerrors=$("#roleerrors"),
        adduserrole=$("#adduserrole"),
        addroleuser=$("#addroleuser"),
        usernonroles=$("#usernonroles"),
        userroleerrors=$("#userroleerrors"),
        saveuserrole=$("#saveuserrole"),
        filterprivileges=$("#filterprivileges"),
        filterroleprivileges=$("#filterroleprivileges"),
        selectalluserprivileges=$("#selectalluserprivileges"),
        selectallroleprivileges=$("#selectallroleprivileges"),
        resetpasswordbutton=$("#changepasswordbutton"),
        nonuseroutlets=$("#usernonoutlets"),
        saveuseroutlet=$("#saveuseroutlet"),
        useroutleterror=$("#useroutleterrors"),
        userouletlist=$("#useroutletslist"),
        navitem=$("#usersmanager"),
        results="",
        departmentfield=$("#department"),
        accountexpiresfield=$("#accountexpires"),
        accountexpiresonfield=$("#accountexpireson")
        accountexpiresonfield.datepicker({minDate: new Date()})

    // disable account expiry date by default
    accountexpiresonfield.prop("disabled",true)
    // default to no assigned values
    userroleslist.html(showAlert('info',"No roles assigned",1))
    userouletlist.html(showAlert('info',"No units assigned",1))

    // listen to click event of account expires drop down
    accountexpiresfield.on("click",function(){
        if(accountexpiresfield.prop("checked")){
            accountexpiresonfield.prop("disabled",false)
        }else{
            accountexpiresonfield.prop("disabled",true)
            accountexpiresonfield.val("")
        }
    })

    // set all datepickers to have dd-mmm-yyyy format
    $.datepicker.setDefaults({
        dateFormat: 'dd-M-yy'
    })
    // Display copyright year
    getCopyrightDate()
    // Display module name
    setModuleName("Users Manager")
    // make link button active
    navitem.addClass("active")
    // get system modules
    getSystemModules()
    // set logged in user
    setLoggedInUserName()
    // hide roles tab details by default
    roledetailstab.hide()
    //get all users
    getUsers()
    // get existing roles
    getRoles()
    // get departments
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getdepartments:true
        },
        function(data){
            results="<option value=''>&lt;Choose One&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].departmentid+"'>"+data[i].departmentname+"</option>"
            }
            console.log(results)
            departmentfield.html(results)
        }
    )
    // get all objects
    $.getJSON(
        "../controllers/useroperations.php",
        {
            getobjects:true
        },function(data){
            var results="<div class='card containergroup mt-2 mb-2'><div class='card-header'><h5>Privileges</h5></div><div class='card-body scrollableprivilege'><table class='table table-sm table-borderless'>"
            for(var i=0;i<data.length;i++){
                results+="<tr data-module='"+data[i].module+"'><td><input type='checkbox' id='"+data[i].objectid+"' class='checkoption'>&nbsp;&nbsp;"
                results+=data[i].description+"</td></tr>"
            }
            results+="</table> </div> </div>"
            userprivileges.html(results)
            roleprivileges.html(results)
        }
    )

    $('#nav-tab a').click(function (link) {
        selection=link.currentTarget.innerText
        if (selection=="Users"){
            userdetailstab.show()
            roledetailstab.hide()
        }else{
            userdetailstab.hide()
            roledetailstab.show() 
        }
    })

    userslist.on("change",function(){
        var userid=userslist.val()
        errordiv.html("")
        // get users details
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getusersdetails:true,
                userid:userid
            },
            function(data){
                useridfield.val(data[0].userid)
                usernamefield.val(data[0].username)
                firstnamefield.val(data[0].firstname)
                lastnamefield.val(data[0].lastname)
                mobilefield.val(data[0].mobile)
                emailfield.val(data[0].email)
                passwordfield.prop("disabled",true)
                confirmpasswordfiel.prop("disabled",true)
                departmentfield.val(data[0].departmentid)
                // check status and change the caption od change status button as approriate
                if(data[0].accountactive==1){
                    changestatusbutton.html( "Disable" )
                    accountactivefield.val(1)
                }else{
                    changestatusbutton.html( "Enable" )
                    accountactivefield.val(0)
                }
                if(data[0].systemadmin==1){
                    systemadminbutton.prop("checked",true)
                }else{
                    systemadminbutton.prop("checked",false)
                }
                if(data[0].changepaswordonlogon==1){
                    changepasswordonlogonbutton.prop("checked",true)
                }else{
                    changepasswordonlogonbutton.prop("checked",false)
                }
            }
        )

        // get user roles
        if(userid!=""){
            $.getJSON(
                "../controllers/useroperations.php",
                {
                    getuserroles:true,
                    userid:userid
                },
                function(data){
                    if(data.length>0){
                        var userroles="<table class='table table-sm'>"
                        for(var i=0;i<data.length;i++){
                            userroles+="<tr class='clickable-row' id='"+data[i].roleid+"'>"
                            userroles+="<td>"+data[i].rolename+"</td>"
                            userroles+="<td><a href='javascript void(0)' class='deleteuserrole text-danger' data-id='"+data[i].roleid+"'><span><i class='fas fa-trash-alt fa-lg'></i></span></a></td></tr>"
                        }
                        userroles+="<table>"
                        userroleslist.html(userroles)
                    }else{
                        userroles="No roles(s) assigned"
                        userroleslist.html(showAlert('info',userroles,1))
                    }
                
                
                }
            )
        }
        // get user non-outlets
        if(userid!=""){
            $.getJSON(
                "../controllers/useroperations.php",
                {
                    usernonunits:true,
                    userid:userid
                },
                function(data){
                    var results=''
                    for(var i=0;i<data.length;i++){
                        results+="<input type='checkbox' class='"+data[i].unitid+" useroutlettoadd' id='"+data[i].unitid+"'>&nbsp;"+data[i].unitname+"<br/>"
                    }
                    nonuseroutlets.html(results)
                }
            )
        }
        
        // get user outlets 
        if(userid!=""){
            getuseroutlets(userid)
        }
       
        // get users privileges
        $.getJSON(
            "../controllers/useroperations.php",
            {
                userid:userid,
                getuserprivileges:true
            },
            function(data){
                //remove all checks based on class 
                $(".checkoption").prop("checked",false)
                for(var i=0;i<data.length;i++){
                    // locate the object on the list
                    if(data[i].valid==1){
                        //$("#"+data[i].objectid).prop("checked",true)
                        $("#userprivileges").find(".checkoption").each(function(){
                            if($(this).prop("id")==data[i].objectid){
                                $(this).prop("checked",true)
                                //data.push({id: id, valid:1})
                            }
                        })
                    }
                }
            }
        )
    })

    saveuserbutton.on("click",function(){
        // check for blank fields
        var userid=useridfield.val(),
            username=usernamefield.val(),
            password=passwordfield.val(),
            confirmpassword=confirmpasswordfiel.val()
            firstname=firstnamefield.val(),
            lastname=lastnamefield.val(),
            mobile=mobilefield.val(),
            email=emailfield.val()
            systemadmin=systemadminbutton.prop("checked")?1:0,
            accountactive=accountactivefield.val()==1?1:0,
            changepasswordonlogon=changepasswordonlogonbutton.prop("checked")?1:0,
            errors='',
            data=[],
            departmentid=departmentfield.val(),
            accountexpires=accountexpiresfield.prop("checked")?1:0
            accountexpiredate=accountexpires==1?accountexpiresonfield.val():'31-Dec-2100'
        if(username==""){
            errors="Please provide a <strong>Username</strong>"
            usernamefield.focus()
        }else if(firstname==""){
            errors="Please provide <strong>First Name</strong></p>"
            firstnamefield.focus()
        }else if(lastname==""){
            errors="Please provide <strong>Last Name/strong></p>"
            middlenamefield.focus()
        }else if(departmentid==""){
            errors="Please select the <strong>Department</strong>"
            departmentfield.focus()
        }else if (password=="" && !passwordfield.prop("disabled")){
            errors="Please provide a <strong>Password</strong></p>"
            passwordfield.focus()
        }else if(email==""){
            errors="Please provide <strong>Email Address</strong></p>"
            emailfield.focus()
        }else if(mobile==""){
            errors="Please provide <strong>Mobile Number</strong></p>"
            mobilefield.focus()
        }else if(password!=confirmpassword && !passwordfield.prop("disabled")){ 
            // check if password entries match
            errors="<strong>Password</strong> entries do not match</p>"
        }else if(accountexpires==1 && accountexpiresonfield.val()==""){
            errors="Please provide <strong>Account Expiry Date</strong>"
            accountexpiresonfield.focus()
        }

        /* get the privileges set */
        $("#userprivileges").find(".checkoption").each(function(){
            if($(this).prop("checked")){
                id=$(this).prop("id")
                data.push({id: id, valid:1})
            }
        })

        TableData=JSON.stringify(data)

        if(errors==""){ 
            // save the user  
            errordiv.html(showAlert('info',"Processing..."))
           $.post(
               "../controllers/useroperations.php",
               {
                   saveuser:true,
                   userid:userid,
                   username:username,
                   password:password,
                   firstname:firstname,
                   lastname:lastname,
                   email:email,
                   mobile:mobile,
                   systemadmin:systemadmin,
                   changepasswordonlogon: changepasswordonlogon,
                   accountactive:accountactive,
                   accountexpires:accountexpires,
                   accountexpireson:accountexpiredate,
                   departmentid:departmentid,
                   TableData:TableData
               },
               function(data){
                    data=$.trim(data)
                    if(data=="Success"){
                        errors="User has been saved sucessfully."
                        errordiv.html(showAlert('success',errors))
                        //errors="<p class='alert alert-success'>The User has been saved successfully.</p>"
                        // clear the form
                        clearUserForm()
                        // refresh the list
                        getUsers()
                    }else if(data=="Sorry, Username already in use." || data=="Sorry, Email address already in use." || data=="Sorry, Mobile Phone Number already in use."){
                        errordiv.html(showAlert('info',data))
                    }else{
                         errordiv.html(showAlert('warning',data))
                    }
               }
           )
        }else{
            errordiv.html(showAlert('info',errors))
        }
    })
    
    clearuserbutton.on("click", clearUserForm)
    
    function clearUserForm(){
        useridfield.val(0)
        usernamefield.val("")
        passwordfield.val("")
        confirmpasswordfiel.val("")
        firstnamefield.val("")
        middlenamefield.val("")
        lastnamefield.val("")
        mobilefield.val("")
        emailfield.val("")
        systemadminbutton.prop("checked",0)
        accountactivefield.val(1)
        changepasswordonlogonbutton.prop("checked",1)
        accountexpiresfield.prop("checked",0)
        accountexpiresonfield.val("")
        departmentfield.val("")
        // reset all issued privileges
        $(".checkoption").prop("checked",false)
        passwordfield.prop("disabled",false)
        confirmpasswordfiel.prop("disabled",false)
        usernamefield.focus()
    }

    function getUsers(){
        // get users list
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getuserslist:true
            },
            function(data){
                var results="<option value=''>&lt;Choose One&gt;</option>"
                for(var i=0;i<data.length;i++){
                    results+="<option value='"+data[i].userid+"'>"+data[i].firstname+" "+data[i].lastname+"</option>"
                }
                userslist.html(results)
            }
        )
    }

    // listen to change event of any text box
    $("input").on("input",function(){
        errordiv.html("")
        roleerrors.html("")
    })

    function getRoles(){
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getroles:true
            },
            function(data){
                if(data.length>0){
                    var results="<label for='rolelist'>Rolename:</label><select name='roleslist' id='roleslist' class='form-control form-control-sm'><option value=''>&lt;Choose One&gt;</option>"
                    for(var i=0;i<data.length;i++){
                        results+="<option value='"+data[i].id+"'>"+data[i].rolename+"</option>"
                    }
                    results+='</select>'
                    rolesdropdown.html(results) 
                }else{
                    results="No roles defined"
                    rolesdropdown.html(showAlert('info',results,1))
                }
               
            }
        )
    }

    // listen to click event of roles dop down
    $("body").on("click",'#roleslist',function(){
        //console.log("clicked")
        var roleid=$(this).val()
        if(roleid!=""){
            $.getJSON(
                "../controllers/useroperations.php",
                {
                    getroleusers:true,
                    roleid:roleid
                },
                function(data){
                    if(data.length>0){
                        var results="<p class='font-weight-bold'>Users in the Role:</p><table class='table table-sm'>"
                        for(var i=0;i<data.length;i++){
                            results+="<tr><td id='"+data[i].userid+"'>"+data[i].firstname+" "+data[i].lastname+"</td>"
                            results+="<td><a href='javascript void(0)' class='deleteroleuser text-danger'><span><i class='fas fa-trash-alt fa-lg'></i></span></a></td></tr>"
                        }
                        results+="</table>"
                        roleusers.html(results)
                    }else{
                        results="Currently no users"
                        roleusers.html(showAlert('info',results,1))
                    }
                }
            )

            // get role details for editing
            $.getJSON(
                "../controllers/useroperations.php",
                {
                    getroledetails:true,
                    roleid:roleid
                },
                function(data){
                    roleidfield.val(data[0].id)
                    rolenamefield.val(data[0].rolename)
                    roledescriptionfield.val(data[0].roledescription)
                }
            )

            // get role privileges
            $.getJSON(
                "../controllers/useroperations.php",
                {
                    getroleprivileges:true,
                    roleid:roleid
                },
                function(data){
                    $("#roleprivileges").find(".checkoption").prop("checked",false)
                    for (var i=0;i<data.length;i++){
                        $("#roleprivileges").find(".checkoption").each(function(){
                            //console.log($(this).prop("id"))
                            if($(this).prop("id")==data[i].objectid){
                               // console.log("Match Found!")
                               if(data[i].valid==1){
                                   $(this).prop("checked",true)
                               }
                            }
                        })
                    }
                }
            )
        }
    })

    saverolebutton.on("click",function(){
        var roleid=roleidfield.val(),
            rolename=rolenamefield.val(),
            roledescription=roledescriptionfield.val(),
            errors='',
            data=[],
            results
        // check blank fields
        if(rolename==""){
            errors="Please provide <strong>Role Name</strong>"
            rolenamefield.focus()
        }else if(roledescription==""){
            errors="Please provide <strong>Role Name</strong>"
            roledescriptionfield.focus()
        }
        if(errors==""){
            // generate selected privileges
            $("#roleprivileges").find(".checkoption").each(function(){
                if($(this).prop("checked")){
                    id=$(this).prop("id")
                    data.push({id: id, valid:1})
                }
            })
            TableData=JSON.stringify(data)
            $.post(
                "../controllers/useroperations.php",
                {
                    saverole:true,
                    rolename:rolename,
                    roledescription:roledescription,
                    roleid:roleid,
                    TableData:TableData
                },
                function(data){
                    data=$.trim(data)
                    if(data==="Success"){
                        results="Role has been saved successfully"
                        roleerrors.html(showAlert('success',results))
                        // refresh list
                        // clear form
                    }else{
                        roleerrors.html(showAlert('warning',data))
                    }
                }
            )
        }else{
            roleerrors.html(showAlert('info',errors))
        }
    })

    adduserrole.on("click",function(){
        // get all roles not belonging to the user
        userid=useridfield.val()
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getusernonroles:true,
                userid:userid
            },
            function(data){
                var results=''
                for(var i=0;i<data.length;i++){
                    results+="<input type='checkbox' class='"+data[i].id+" usersrolestoadd'>&nbsp;"+data[i].rolename+"<br/>"
                }
              //console.log(results)
                usernonroles.html(results)
            }
        )
    })

    saveuserrole.on("click",function(){
        data=[]
        $(".usersrolestoadd").each(function(){
            var roleid,userid=useridfield.val()
            if($(this).prop("checked")){
                roleid=$(this).prop('class').split(' ')[0]
                data.push({roleid: roleid})
            }
        })
        //console.log(data)
        if(data.length>0){
            TableData=JSON.stringify(data)
            $.post(
                "../controllers/useroperations.php",
                {
                    saveuserroles:true,
                    userid:userid,
                    TableData:TableData
                },
                function(data){
                    // check if successful
                    data=$.trim(data)
                    if(data=="success"){
                        results="Role(s) added to the user successfully."
                        userroleerrors.html(showAlert('success',results))
                    }else{
                        userroleerrors.html(showAlert('danger',data))
                    }
                    
                }
            )
        }else{
            results="Please select a <strong>ROLE</strong> first.</div>"
            userroleerrors.html(showAlert('info',results))
        }
    })

    userroleslist.on("click",".deleteuserrole",function(e){
        e.preventDefault();
        var id = $(this).attr('data-id')
        var parent = $(this).parent("td").parent("tr")
        var itemname=parent.find("td").eq(0).text()
        var userid=useridfield.val()
        bootbox.dialog({
            title: "Confirm Role Removal!",
            message: "Remove <strong>"+itemname+"</strong> role from the user?",
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
                        $.post(
                            "../controllers/useroperations.php",
                            {
                                userid:userid,
                                roleid:id,
                                removeuserrole:true
                            },
                            function(data){

                            }
                        )
                        parent.remove()
                        $('.bootbox').modal('hide');
                    }
                }
            }
        })
    })

    function getSystemModules(){
        var results="<label class='btn btn-secondary btn-sm active  privilegefilter' data-id='all'><input type='radio' name='options'>All Privileges</label>"
        $.getJSON(
            "../controllers/settingsoperations.php",
            {
                getsystemmodules:true
            },
            function(data){
                for(var i=0;i<data.length;i++){
                    results+="<label class='btn btn-secondary btn-sm privilegefilter' data-id='"+data[i].module+"'><input type='radio' name='options'><span class='text-capitalize'>"+data[i].module+"</span></label>"
                }
                filterprivileges.html(results)
                filterroleprivileges.html(results)
            }
        )
    }
    
    //listen to filter user privileges
    filterprivileges.on("click",".privilegefilter",function(){
        var module=$(this).attr("data-id")
        filterprivileges.find(".privilegefilter").removeClass("active")
        // make the selected button active
        $(this).addClass("active")
        //console.log(module)
        userprivileges.find("tr").each(function(){
            if(module=="all"){
                // show the row
                $(this).show()
            }else{
                //console.log($(this).attr("data-module"))
                if($(this).attr("data-module")==module){
                    // show the module
                    $(this).show()
                }else{
                    // hide the module
                    $(this).hide()
                }
            }
        })
    })

    // listen to filter role privileges
    filterroleprivileges.on("click",".privilegefilter",function(){
        var module=$(this).attr("data-id")
        filterroleprivileges.find(".privilegefilter").removeClass("active")
        // make the selected button active
        $(this).addClass("active")
        //console.log(module)
        roleprivileges.find("tr").each(function(){
            if(module=="all"){
                // show the row
                $(this).show()
            }else{
                //console.log($(this).attr("data-module"))
                if($(this).attr("data-module")==module){
                    // show the module
                    $(this).show()
                }else{
                    // hide the module
                    $(this).hide()
                }
            }
        })
    })
    
    // select or diselect all user privileges
    selectalluserprivileges.on("click",function(){
        //console.log(selectalluserprivileges.prop("checked"))
        userprivileges.find("tr").each(function(){
            if($(this).is(":visible")){
                if(selectalluserprivileges.prop("checked")){
                    $(this).find("input:checkbox:first").prop("checked",true)
                }else{
                    $(this).find("input:checkbox:first").prop("checked",false)
                }
            }
        })
    })

    //listen to select or deselect all role privileges
    selectallroleprivileges.on("click",function(){
        //console.log(selectalluserprivileges.prop("checked"))
        roleprivileges.find("tr").each(function(){
            if($(this).is(":visible")){
                if(selectallroleprivileges.prop("checked")){
                    $(this).find("input:checkbox:first").prop("checked",true)
                }else{
                    $(this).find("input:checkbox:first").prop("checked",false)
                }
            }
        })
    })

    // listen to enable or Disable user account button
    changestatusbutton.on("click",function(){
        var activity="", userid=userslist.val()
        // check if a user is selected
        if(userid!=""){
            if(changestatusbutton.html()=="Disable"){
                activity="disable"
                // show dialog box to confirm disable
                bootbox.prompt({
                    title: "Why do you want to disable the account?", 
                    centerVertical: true,
                    callback: function(result){ 
                        //console.log(result); 
                        $.post(
                            "../controllers/useroperations.php",
                            {
                                changeaccountstatus:true,
                                activity:activity,
                                id:userid,
                                reason:result
                            },
                            function(data){
                                data=$.trim(data)
                                if(data=="success"){
                                    results="User's account has been <strong>Disabled</strong> successfully"
                                    errordiv.html(showAlert('success',results))
                                }else{
                                    errordiv.html(showAlert('warning',data))
                                }
                                // clear the form
                                clearUserForm()
                                userslist.val("")
                            }
                        )
                    }
                })
            }else{
                activity="enable"
                $.post(
                    "../controllers/useroperations.php",
                    {
                        changeaccountstatus:true,
                        activity:activity,
                        id:userid,
                        reason:""
                    },
                    function(data){
                        data=$.trim(data)
                        if(data=="success"){
                            errordiv.html(showAlert('success',"User's account has ben <strong>Enabled</strong> successfully."))
                           //results="<div class='alert alert-success' role='alert'><i class='fas fa-check-circle fa-lg'></i> User's account has ben <strong>Enabled</strong> successfully.</div>"
                        }else{
                            //results="<div class='alert alert-danger' role='alert'><i class='fas fa-times-circle fa-lg'></i> "+data+"</div>"
                            errordiv.html(showAlert('warning',data))
                        }
                        errordiv.html(results)
                        // clear the form
                        clearUserForm()
                        userslist.val("")
                    }
                )
            }
        }else{
            // prompt to select user
            results="Please select a User first."
            errordiv.html(showAlert('info',results))
        }
    })

    // listen to reset password button
    resetpasswordbutton.on("click",function(){
        userid=userslist.val()
        bootbox.prompt({
            title: "Please type a RESET password", 
            centerVertical: true,
            inputType: 'password',
            callback: function(result){ 
                //console.log(result); 
                $.post(
                    "../controllers/useroperations.php",
                    {
                        resetuserpassword:true,
                        password:result,
                        id:userid
                    },
                    function(data){
                        data=$.trim(data)
                        if(data=="success"){
                            results="User's password has been <strong>RESET</strong> successfully."
                            errordiv.html(showAlert('success',results))
                        }else{
                            errordiv.html(showAlert('warning',data))
                            //results="<div class='alert alert-danger' role='alert'><i class='fas fa-times-circle fa-lg'></i> "+data+"</div>"
                        }
                        //errordiv.html(results)
                        // clear the form
                        clearUserForm()
                        userslist.val("")
                    }
                )
            }
        })
    })

    saveuseroutlet.on("click",function(){
        var outlets=[]
        $(".useroutlettoadd").each(function(){
            if($(this).prop("checked")){
                outlets.push({id:$(this).attr("id")})
            }
        })
        if(outlets.length==0){
            errors="Please select at least a Unit"
            useroutleterror.html(showAlert('info',errors))
        }else{
            // save the outlets
            var ouletsadded=JSON.stringify(outlets),
            userid=useridfield.val()
            // update the outlets list
            $.post(
                "../controllers/posoperations.php",
                {
                    saveuseroutlet:true,
                    userid:userid,
                    outletid:ouletsadded
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        results="Outlet successfully assigend to the user."
                        useroutleterror.html(showAlert('success',results))
                    }else{
                        useroutleterror.html(showAlert('warning',data))
                    }
                    
                }
            )
        }
    })

    function getuseroutlets(userid){
        $.getJSON(
            "../controllers/useroperations.php",
            {
                getuserunits:true,
                userid:userid
            },
            function(data){
                var results=""  
                if(data.length>0){
                    var results="<table class='table table-sm'>"
                    for(var i=0;i<data.length;i++){
                        results+="<tr><td id='"+data[i].unitid+"'>"+data[i].unitname+"</td>"
                        results+="<td><a href='javascript void(0)' class='deleteuseroutlet text-danger' data-id="+data[i].unitid+"><span><i class='fas fa-trash-alt fa-lg'></i></span></a></td></tr>"
                    }
                    results+="</table>"
                    userouletlist.html(results)
                }else{
                    results="No unit(s) assigned"
                    userouletlist.html(showAlert('info',results,1))
                }
               
            }
        )
    }

    userouletlist.on("click",".deleteuseroutlet",function(e){
        e.preventDefault();
        var id = $(this).attr('data-id')
        var parent = $(this).parent("td").parent("tr")
        var itemname=parent.find("td").eq(0).text()
        //var userid=useridfield.val()
        bootbox.dialog({
            title: "Confirm Unit Removal!",
            message: "Remove <strong>"+itemname+"</strong> unit from the user?",
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
                        $.post(
                            "../controllers/posoperations.php",
                            {
                                id:id,
                                deleteuseroutlet:true
                            },
                            function(data){
                                data=$.trim(data)
                                // refresh users outlets
                                if(data=="success"){
                                    results="Unit <strong>"+itemname+"</strong> has been removed from the user successfully"
                                    errordiv.html(showAlert('success',results))
                                }else{
                                    errordiv.html(showAlert('warning',data))
                                }
                                //errordiv.html(results)
                                userid=useridfield.val()
                                getuseroutlets(userid)
                            }
                        )
                        parent.remove()
                        $('.bootbox').modal('hide');

                    }
                }
            }
        })
    })
})