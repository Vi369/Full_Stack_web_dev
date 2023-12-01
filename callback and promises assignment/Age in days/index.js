// user-info obj 
const person1 = {
    firstName: "vikas singh",
    LastName: "varma",
    age: 22
}

// ageInDays function 
function ageInDays(userInfo, callback){
    const fullName = userInfo.firstName + " " + userInfo.LastName;
    const ageInDaysVariable = userInfo.age * 365;
    return callback(fullName, ageInDaysVariable);
}

// callback function
function logResult(name, ageInDays){
    return `the person's full name is ${name}, and their age in days is ${ageInDays}`;
}

// calling the function 
console.log(ageInDays(person1, logResult));