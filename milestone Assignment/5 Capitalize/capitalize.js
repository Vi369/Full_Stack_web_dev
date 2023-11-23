let userName = "vikas";

let firstLetterCapitalize = userName[0]===userName[0].toUpperCase()?userName[0]:userName[0].toUpperCase();

let result = userName.replace(userName[0],firstLetterCapitalize);

console.log(result);