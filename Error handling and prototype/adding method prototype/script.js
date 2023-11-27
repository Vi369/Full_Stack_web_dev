class Student{
    constructor(name){
        this.name = name;
    }
}

Student.prototype.printDetails = function (){
    return `Hello, the student is ${this.name}`;
}

const student = new Student("vikas");
console.log(student.printDetails());

// we use this in one more way because in javascript function also a object 

function newStudent(name){
    this.name = name;
}

newStudent.prototype.printDetails2 = function (){
    return `Hello, the student is ${this.name}`;
}

const student1 = new newStudent("vidhi");
console.log(student1.printDetails2());