function convertToNumber(str){
    try{
        const value = Number(str);
        if(value%1===0){
            return value;
        }
        else{
            throw Error("Invalid number");
        }

    }
    catch (error){
        return "Invalid number"
    }
}

const str = "123";
const str2 = "abc";
console.log(convertToNumber(str));
console.log(convertToNumber(str2));