class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    getPassword() {
        return this.password.replace(/./g, "*");
    }

    setPassword(newPassword){
        let containNumber = false;
        let uppercaseLatter = false;
        for(let i = 0; i <= newPassword.length; i++){
            
            const char = newPassword.charAt(i);
            if(!isNaN(char)){
                containNumber = true;
            } else if(char === char.toUpperCase()){
                uppercaseLatter = true;
            }

        }
        
        if(newPassword.length >= 8 && containNumber && uppercaseLatter){
                this.password = newPassword;
        } else{
            console.log("password must be 8 character and at least 1 number and 1 uppercase character");
        }
    }
}

const user  = new User("vikas", "password@123");
console.log(user.getPassword());

user.setPassword("11111111");

user.setPassword("myPassword@123");
console.log(user.getPassword());



