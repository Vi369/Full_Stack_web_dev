class Person{
    constructor(name ="unknown", age=0){
        this.name = name;
        this.age = age;    
    }
    // method get details
    getDetails(){
        return `name:${this.name}, Age:${this.age}`
    }
}
//
 const newPerson = new Person();
 console.log(newPerson);

// expected 
const person1 = new Person("mithun", 20);
console.log(person1);
const person2 = new Person();
console.log(person2);