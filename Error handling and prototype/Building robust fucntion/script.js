function getPerson(obj){
    try{
        if(typeof obj !=='object' || obj==null || !('name' in obj) || !('age' in obj)){
            throw new Error("Invalid parameter");
        }
        else{
            return "name: " +obj.name + "  " + "Age:"+ obj.age;
        }
    }
    catch (error){
        return "Invalid Parameter";
    }
}


console.log(getPerson({name:"vikas", age:22}));
console.log(getPerson({name:"vikas"}));
console.log(getPerson({age: 22}));
console.log(getPerson({}));
console.log(getPerson());