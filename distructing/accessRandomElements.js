function arraydestructuring(arr){
    const [first, second, ...rest] = arr;
    const last = rest[rest.length -1];
    return [first,second,last];
}


const arr = [1,2,4,6,8,1]  //[1,2,4,6,8,1] expact [1,2,1]

console.log(arraydestructuring(arr));