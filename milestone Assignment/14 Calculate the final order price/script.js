const customerCart = [
    {price:250, quantity: 5 },
    {price: 500, quantity: 10},
    {price: 100, quantity: 100}
];

const totalCost = (obj)=>{
    let total = 0;
    for(let i=0;i<obj.length;i++){
        total += obj[i].price*obj[i].quantity;
    }
    return total;
}

console.log(totalCost(customerCart));