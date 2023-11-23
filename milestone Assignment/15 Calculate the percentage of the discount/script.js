const calculateDiscountPercentage = (originalPrice,DiscountPrice)=>{
    const discountAmount = originalPrice - DiscountPrice;
    const discountPersentage = (discountAmount / originalPrice)*100;
    return discountPersentage.toFixed(2);
};

// calling function 
console.log(calculateDiscountPercentage(600,570));
