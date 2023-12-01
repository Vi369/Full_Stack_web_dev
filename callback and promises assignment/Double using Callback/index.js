function justDouble(array, callback){
const DoubleOfArray = array.map( (num)=>{
    return callback(num);
})
return DoubleOfArray;
}

// callback fuction
function DoubleTheValue(num){
    return num * num;
}

// array of integers
const numbers = [1,5,2,6,4,9,11,15] 

// call the function 
console.log(justDouble(numbers, DoubleTheValue));


