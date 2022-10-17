function myfunction()
{
    var un = document.loginform.usr.value;
    var ps = document.loginform.pwd.value;
    var username = "meera";
    var password = "12345";
    if(un == "" || ps == "")
    {
        window.alert("Please enter the field");
    }
    else if(username == un && password == ps)
    {
        window.alert("successfull");
    }
    else
    {
        window.alert("Incorrect Username and password");
    }
}