class Employee{
    constructor(name, position, salary){
        this.name = name;
        this.posittion = position;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}
const empolyee1 = new Employee("vikas", "Developer", 80000);

console.log(empolyee1.getSalary());
