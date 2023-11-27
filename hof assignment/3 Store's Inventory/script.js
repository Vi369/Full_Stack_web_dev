let items= {
    item1: 5.5,
    item2: 6,
    item3: 6.5,
    item4: 7,
    item5: 6.9,
    item6: 10,
    item7: 10.9
};

let exchangeRate = 80;
//map returning a array 
let updateItems = Object.keys(items).map((key)=>{
    const pricesInRupees = items[key]*exchangeRate;
    return {[key]:pricesInRupees};
});

let convertedPriceItems = Object.assign({}, ...updateItems);

console.log(convertedPriceItems);




