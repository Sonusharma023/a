var password = document.getElementById("password");

function getpassword(){
    var chars = "01234567890mnjkhoitrqedaxczvbgpoiyqazxcvfsgdbhmjutqfhcbcn^#D@!D^*()U";
    var passwordLength = 12;
    var password ="";
    for(var i = 0; i<=passwordLength; i++){
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber, randomnumber +1);
    }
    document.getElementById("password").value = password;
}

function copypassword(){
    var copytext = document.getElementById("password");
    copytext.select();
    copytext.setSelectionRange(0,999);
    document.execCommand("copy")
}
