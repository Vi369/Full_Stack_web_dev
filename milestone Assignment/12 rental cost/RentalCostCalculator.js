//     "Economy": 4000,
//     "midsize":10000,
//     "Luxury": 20000


let numberOfDays = 50;
let car = "Luxury";

let totalcost = rentalcosts(numberOfDays,car);
console.log(totalcost);

function rentalcosts(num,car){
    if(car=="Economy"){
        return num*4000;
    }
    else if(car=="midsize"){
        return num*10000;
    }
    else{
        return num*20000;
    }
}