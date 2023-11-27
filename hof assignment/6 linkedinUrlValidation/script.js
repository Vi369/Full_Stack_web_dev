const regEx = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|profile)\/[\w-]+(\/[a-z]{2}_[A-Z]{2})?\/?$/;

;

let example = 'https://www.linkedin.com/in/vikas-singh-varma';

function linkedinUrlValidation(url){
    if(regEx.test(url)){
        console.log("Is valid");
        return true;
    }else{
        console.log("Is not valid");
        return false;
    }
};

console.log(linkedinUrlValidation(example));

// examples
console.log("1",linkedinUrlValidation("https://linkedin.com/pub/mark-smith"));
console.log("2",linkedinUrlValidation("https://www.linkedin.com/profile/view?id=12345"));
console.log("3",linkedinUrlValidation("https://www.linkedin.com/in/johndoe/en_US"));
console.log("4",linkedinUrlValidation("https://www.linkedin.com/in/johndoe/en_Uk123/"));