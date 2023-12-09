function formValidation(){
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var gender = document.registration.gender.value;

    if(userid_validation(uid,5,12)){
        if(passid_validation(passid)){
            if(allLetter(uname)){
                if(alphanumeric(uadd)){
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){
                                if(validatesex(gender)){
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function userid_validation(uid,mx,my){
    var uid_length = uid.value.length;
    if(uid_length == 0 || uid_length >= my || uid_length < mx){
        alert('User ID should not be empty / length be between ' + mx + " to " + my);
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(inputtxt){
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(inputtxt.value.match(paswd)){
        return true;
    }else{
        alert('Wrong...!Password is too weak');
        inputtxt.focus();
        return false;
    }
}
function allLetter(uname){
    var letters = /^[A-Za-z\s]+$/;
    if(uname.value.match(letters)){
        return true;
    }else{
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}
function alphanumeric(uadd){
    var letters = /^[ A-Za-z0-9!@#$%^&*(),.\s ]+$/;
    if(uadd.value.match(letters)){
        return true;
    }else{
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function countryselect(ucountry){
    if(ucountry.value == "Default"){
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }else{
        return true;
    }
}
function allnumeric(uzip){
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)){
        return true;
    }else{
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}
function ValidateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
        return true;
    }else{
        alert('You have entered an invalid email address!');
        uemail.focus();
        return false;
    }
}
function validatesex(gender){
    // x=0;
    // if(umsex.checked){
    //     x++;
    // }if(ufsex.checked){
    //     x++;
    // }if(x==0){
    //     alert('Select Male/Female');
    //     umsex.focus();
    //     return false;
    // }else{
    //     alert('Form Successfully Submitted');
    //     window.location.reload();
    //     return true;
    // }
    

    if(gender == ""){
        alert('Select Male/Female');
        return false;
    }else{
        alert('Form Successfully Submitted');
        window.location.reload();
        return true;
    }
    
}




