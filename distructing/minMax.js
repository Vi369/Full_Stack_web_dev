function minMaxIndentifire(arr){
const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);
return {min:minValue,max:maxValue};
}





// [5,3,2,7,1,9] expact min 1 max 9 
const arr =  [5,3,2,7,1,9];

 console.log(minMaxIndentifire(arr));