let color = ["red","pink","black","yellow","blue","green","grey","orange"];
let changer = document.getElementById("btn");
changer.addEventListener("click",colorChanger);

function colorChanger () {
    document.body.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
}



