let UserCart = ["pizza","Cold Drink","chips","lolly-Pop","chitken","chitken","pizza"];

function RemoveDuplicates(Cart){
    let NewCart = [];
    for(let i=0; i<Cart.length;i++){
        if(NewCart.indexOf(Cart[i])==-1){
            NewCart.push(Cart[i]);
        }
    }
    return NewCart;
};
//calling
let NewCart = RemoveDuplicates(UserCart);

console.log(NewCart);
