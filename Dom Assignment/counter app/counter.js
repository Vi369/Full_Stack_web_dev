const add = document.getElementById("increment");
const sub = document.getElementById("decrement");
const displayValue = document.getElementById("displayValue");
const  resetbutton= document.getElementById("resetbtn");

// increment function 

add.addEventListener("click",()=>{
    let value = Number(displayValue.innerText);

    displayValue.innerText = value+1;
});
//decrement funtion

sub.addEventListener("click",()=>{
    let value = Number(displayValue.innerText);

    displayValue.innerText = value-1;
});
resetbutton.addEventListener("click",()=>{
    

    displayValue.innerText = 0;
});


