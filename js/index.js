$(document).ready(function(){
    usernamefield=$("#username"),
    passwordfield=$("#password"),
    loginbutton=$("#loginbutton"),
    errordiv=$("#errors"),
    message="",
    inputfields=$("input"),
    resetpassworddiv=$("#resetpassword"),
    loginformlink=$("#loginformlink"),
    logindiv=$("#loginform"),
    resetpassworderrordiv=$("#passwordreseterror"),
    resetpasswordbutton=$("#resetpassword"),
    resetpasswordusername=$("#resetpasswordusername"),
    changepasswordform=$("#changepasswordform"),
    changepasswordbutton=$("#changepassword"),
    changepasswordusernamefield=$("#changepasswordusername"),
    oldpasswordfield=$("#oldpassword"),
    newpasswordfield=$("#newpassword"),
    confirmnewpaswordfield=$("#confirmnewpassword"),
    loginformlink2=$("#loginformlink2"),
    passwordchangeerrordiv=$("#passwordchangeerror")

    resetpassworddiv.hide()
    changepasswordform.hide()

    resetpasswordlink=$("#resetpasswordlink")
    loginbutton.on("click",function(){
        if(usernamefield.val()==""){
            message="Please provide a Username"
            errordiv.html(showAlert("info",message))
            usernamefield.focus()
        }else if( passwordfield.val()==""){
            message="Please provide a Password"
            errordiv.html(showAlert("info",message))
            passwordfield.focus()
        }else{
            var username=usernamefield.val(),
                password=passwordfield.val()
            
             //window.location.href="dummy/user.php"
            $.post(
                "controllers/useroperations.php",
                {
                    loginuser:true,
                    username:username,
                    password:password
                },
                function(data){
                    data=$.trim(data)
                    console.log(data)
                    if(data=="account expired"){
                        errors="Your account is expired."
                        errordiv.html(showAlert("danger",errors))
                    }else if(data=="success"){
                        window.location.href="views/main.php"
                    }else if(data=="invalid credentials"){
                        errors="Invalid Username or Password."
                        errordiv.html(showAlert("info",errors))
                    }else if(data=="account inactive"){
                        errors="Your account is disabled."
                        errordiv.html(showAlert("info",errors))
                    }else if(data=="change password"){
                        changepasswordusernamefield.val(username)
                        changepasswordusernamefield.prop("disabled",true)
                        changepasswordform.show() 
                        oldpasswordfield.focus()
                        logindiv.hide()
                        resetpassworddiv.hide()
                    }else{
                        errordiv.html(showAlert("warning",data))
                    }
                }
            )
            console.log("Searching ...")
        }
    })

    inputfields.on("input",function(){
        errordiv.html("")
        resetpassworderrordiv.html("")
    })

    resetpasswordlink.on("click",function(e){
        e.preventDefault()
        resetpassworddiv.show()
        logindiv.hide()
        changepasswordform.hide()
    })

    loginformlink.on("click",function(e){
        e.preventDefault()
        logindiv.show()
        resetpassworddiv.hide()
        changepasswordform.hide()
    })

    resetpasswordbutton.on("click",function(){
        var username=resetpasswordusername.val()
        console.log("Username is:" +username)
        if(username===""){
            message="Please provide your username"
            resetpassworderrordiv.html(showAlert("info",message))
            resetpasswordusername.focus()
        }else{
            // reset password and ack
            $.post(
                "controllers/useroperations.php",
                {
                    resetuserpassword:true,
                    id:username,
                    password:''
                },
                function(data){
                    data=$.trim(data)
                    if(data=="success"){
                        message="Password reset successful.<br/>Please check email for OTP."
                        resetpassworderrordiv.html(showAlert("success",message))
                    }else if(data=="email not sent"){
                        message="Password reset successful.<br/>OTP not be sent on email."
                        resetpassworderrordiv.html(showAlert("success",message))
                    }else{
                        message="Password reset failed.<br/>"+data
                        resetpassworderrordiv.html(showAlert("warning",message))
                    }
                }
            )
        }
    })

    loginformlink2.on("click",function(e){
        e.preventDefault()
        logindiv.show()
        resetpassworddiv.hide()
        changepasswordform.hide()
    })

    changepasswordbutton.on("click",function(){
        var username=changepasswordusernamefield.val(),
            oldpassword=oldpasswordfield.val(),
            newpassword=newpasswordfield.val(),
            confirmnewpasword=confirmnewpaswordfield.val()
        // check for blank fields
        if(oldpassword==""){
            errors="Please provide old password"
            passwordchangeerrordiv.html(showAlert("info",errors))
            oldpasswordfield.focus()
        }else if(newpassword==""){
            errors="Please provide new password"
            passwordchangeerrordiv.html(showAlert("info",errors))
            newpasswordfield.focus()
        }else if(newpassword!=confirmnewpasword){
            errors="New passwords don't match."
            passwordchangeerrordiv.html(showAlert("info",errors))
        }else{
            // change password and ack
            $.post(
                "controllers/useroperations.php",
                {
                    changepassword:true,
                    oldpassword:oldpassword,
                    newpassword:newpassword,
                    username:username
                },
                function(data){
                    data=$.trim(data)
                    if(data=="Success"){
                        errors="Password sucessfully changed.<br/>"
                        passwordchangeerrordiv.html(showAlert("success",errors))
                    }else if(data=="Incorrect <strong>Old Password</strong> try again"){
                        passwordchangeerrordiv.html(showAlert("info",data))
                    }else{
                        passwordchangeerrordiv.html(showAlert("warning",data))
                    }
                }
            )
        }

    })
})