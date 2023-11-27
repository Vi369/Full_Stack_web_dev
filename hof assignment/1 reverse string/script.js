const input = "hello jii";
//function to reverse the string
function reverseString(str) {
    return console.log(str.split("").reverse().join(""));
};
setTimeout(()=>{
    reverseString(input);}, 2000);