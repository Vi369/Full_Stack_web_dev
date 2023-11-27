// main code 

function filterByCategory(products){
    return function(category){
        return products.filter(
            (product)=>{
                return product.category=== category;
            }
        )
    }
}





const products = [
{name:"Shirt", category: "Clothing"},
{name:"Pants", category: "Clothing"},
{name:"Hat", category: "Accessories"},
{name:"Sunglasses", category: "Accessories"},
];

const ClothingProducts = filterByCategory(products)("Clothing");

//  output
console.log(ClothingProducts);