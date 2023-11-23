const emailInput = document.getElementById("email");
const PasswordInput = document.getElementById("password");
const validationMessage = document.getElementById("displayMessage");
// let flag = true;


function validator(){
    const email = emailInput.value;
    const password = PasswordInput.value;
    if(!email.includes("@")||password.length <8){
        validationMessage.textContent = "Invalid Email or Password";
        validationMessage.style.color = "red";
        // flag = false;
    }
    else{
        validationMessage.textContent = "Valid Email or Password";
        validationMessage.style.color = "green";
        // flag = true;
    }
    return false // for showing green message becasue form just submitted message is not showing 
 //uncomment in future
    // if(flag){
    //     return true;
    // }
    // else{
    //     return false;
    // }

}
