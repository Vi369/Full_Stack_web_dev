const img = document.getElementById("img");

let positionY = 0;
let positionX = 0;

document.addEventListener("keydown",function(event){
    switch(event.key){
        case "ArrowLeft":
            positionX -= 10;
            break;
        case "ArrowUp": 
            positionY -= 10;
            break;
        case "ArrowRight":
            positionX +=10; 
            break;
        case "ArrowDown": 
        positionY +=10;
        break;
    }
    img.style.top = positionY + "px";
    img.style.left = positionX + "px"
})