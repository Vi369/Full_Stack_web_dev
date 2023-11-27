const regEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

const ExampleUrl = "//https//vikasvarma.com";

function urlValidationCheck(url){
    if(regEx.test(url)){
        console.log("Is valid");
        return true;
    }else{
        console.log("Is not valid");
        return false;
    }
};

console.log(urlValidationCheck(ExampleUrl));

//
console.log("1",urlValidationCheck('https://www.example.com'));
console.log("2",urlValidationCheck('https://example123.com'));
console.log("3",urlValidationCheck('http://example!@#$.com'));

