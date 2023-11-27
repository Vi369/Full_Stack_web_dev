// 3 car description class 
class Car{
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year; 
    }

    getDescription(){
        return `this is a ${this.year},${this.company},${this.model}.`;
    }
}

const NewModel = new Car("sKoda", "Rapid", 2022 );

console.log(NewModel.getDescription());