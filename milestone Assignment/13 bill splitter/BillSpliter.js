function billSplitter(costEachDish, numOfPeople){
    const totalBill = costEachDish*numOfPeople;
    const billPerPerson = totalBill / numOfPeople;
    // return object sahi rahega
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

let costOfEachDish = 50;
let numOfPeople = 8;
let bill = billSplitter(costOfEachDish,numOfPeople);
console.log(bill.totalBill);
console.log(bill.billPerPerson);