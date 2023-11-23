let color1 = "blue";
let color2 = "yellow";

switch(true){
    case (color1=="red" && color2=="blue")||(color1=="blue" && color2=="red"):
        console.log("Purple");
        break;
    case (color1=="red" && color2=="yellow")||(color1=="yellow" && color2=="red"):
        console.log("orange");
        break;
    case (color1=="blue" && color2=="yellow")||(color1=="yellow" && color2=="blue"):
        console.log("green");
        break;
    case (color1=="blue" && color2=="yellow")||(color1=="yellow" && color2=="blue"):
        console.log("green");
        break;
    default:
        console.log("Invalid color combination");

}