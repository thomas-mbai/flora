var tagexists, tagstatus, tagid, storagetagstatus
// set the logged in user
setLoggedInUserName()

function setLoggedInUserName(){
    var username=''
    $.getJSON(
        "../controllers/useroperations.php",
        {
            getloggedinusername:true
        },
        function(data){
            username=$.trim(data.toString())
            $("#loggedinusername").html(username)
        }
    ).fail(function (jqxhr, status, error) { 
        //console.log('error', status, error) 
    }
)}

function pad(number, length) {
    s=number.toString()
    for(var i=length;i>=1;i--){
        s="0"+s
    }
    return s
}

function getCopyrightDate(){
    var placement=$("#copyright")
    placement.html(new Date().getFullYear())
}

function setModuleName(modulename){
var modulenameplacement=$("#navbrand")
modulenameplacement.html(modulename)
}

function getFlowerVarieties(selectBox,option='all'){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getflowervarieties:true
        },
        function(data){
            var results=''
            results=option=='all'?"<option value='0'>&lt;All&gt;</option>":"<option value=''>&lt;Choose One&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].varietyid+"'>"+data[i].varietyname+"</option>"
            }
            selectBox.html(results)  
        }
    )
}

function getFlowerStemLength(selectBox,option='all'){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getstemlength:true
        },
        function(data){
            var results=''
            results=option=='all'?"<option value='0'>&lt;All&gt;</option>":"<option value=''>&lt;Choose One&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].stemlengthid+"'>"+data[i].stemlength+"</option>"
            }
            selectBox.html(results)  
        }
    )
}

function getFlowerHeadSize(selectBox,option='all'){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getflowerheadsizes:true
        },
        function(data){
            var results=''
            results=option=='all'?"<option value='0'>&lt;All&gt;</option>":"<option value=''>&lt;Choose One&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].id+"'>"+data[i].headsize+"</option>"
            }
            selectBox.html(results)  
        }
    )
}

function validateFlowerHeadSize(selectbox,varietyid){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getvarietydetails:true,
            varietyid:varietyid
        },
        function(data){
            if(parseInt(data[0].measurehead)===1){
                selectbox.prop("disabled",false)
            }else{
                selectbox.prop("disabled",true)
            }
        }
    )
}

function getCurrentDate(){
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, '-')
    return formattedDate
}

function getCurrentDateTime(){
    const time = new Date(),
        date=getCurrentDate(),
        timestring=("0" + time.getHours()).slice(-2)   + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2)
    return date+" "+timestring
}

function getPackRate(selectbox, option='choose'){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getbunchingsizes:true
        },
        function(data){
            var results=option=='choose'?"<option value=''>&lt;Choose One&gt;</option>":"<option value='0'>&lt;All&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].id+"'>"+data[i].quantity+"</option>"
            }
            selectbox.html(results)
        }
    )
}

function getPackagingSizes(selectbox, option='choose'){
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            getpackagingsizes:true
        },
        function(data){
            var results=option=='choose'?"<option value=''>&lt;Choose One&gt;</option>":"<option value='0'>&lt;All&gt;</option>"
            for(var i=0;i<data.length;i++){
                results+="<option value='"+data[i].id+"'>"+data[i].description+"</option>"
            }
            selectbox.html(results)
        }
    )
}

function getTagStatus(taglabel){
    var dfd=new $.Deferred()
    checkTag(taglabel).done(function(){
        //console.log("Tag Exists: "+tagexists)
        if(tagexists==true){
            $.getJSON(
                "../controllers/settingsoperations.php",
                {
                    gettagstatus:true,
                    taglabel:taglabel
                },
                function(data){
                    //console.log(data.length)
                    tagstatus=data.length>0?'The Tag is already in use.':'inactive'
                    //console.log(tagstatus)
                    dfd.resolve()
                }
            )
        }else{
            tagstatus="The Tag was not found in the system."
            dfd.resolve()
        } 
    })
    return dfd.promise()
}

function checkTag(taglabel){
    var dfd=new $.Deferred(),results
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            gettagdetails:true,
            taglabel:taglabel
        },
        function(data){
            if(data.length>0){
                tagexists=true
                tagid=data[0].tagid
            }else{
                tagexists=false
            }
            //console.log("Tag Exists: "+tagexists)
            dfd.resolve()
        }
    )
    return dfd.promise()
}

function padzeros(tag){
    if(tag!==""){
        while (tag.length < 4) {
            tag = '0' + tag;
        }
    }
    return tag
}

function gettagstatus(tag){
    // check if the tag is available for use
    dfd= new $.Deferred()
    $.getJSON(
        "../controllers/settingsoperations.php",
        {
            checktagstatus:true,
            tag:tag
        },
        function(data){
            //data=$.trim(data.toString())
            storagetagstatus=data[0].status
            dfd.resolve()
        }
    )
    //console.log(storagetagstatus)
    return dfd.promise()
}