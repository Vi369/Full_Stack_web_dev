function manipulateString(str, callback){
    return callback(str);
}

// callback function
function logString(str){
    return str.toUpperCase();
}

// call the function 
console.log(manipulateString("hello world !", logString));