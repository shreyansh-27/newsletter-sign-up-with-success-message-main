function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        document.getElementById("email").classList.add("red-txt");
    }

    if(reg.test(emailField.value) == true){
        document.getElementById("email").classList.add("green-txt");
    }

    if(emailField.value == ""){
        document.getElementById("email").classList.remove("green-txt");
        document.getElementById("email").classList.remove("red-txt");
    }
}