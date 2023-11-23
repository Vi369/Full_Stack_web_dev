let customerCart =["10","15","25","26","40"];

console.log(doubleQuntity(customerCart));

function doubleQuntity(cart){
    for(let i=0;i<cart.length;i++){
        cart[i] = cart[i]*2; 
    }
    return cart;
}