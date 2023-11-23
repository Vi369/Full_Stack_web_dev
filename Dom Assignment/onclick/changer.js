let popup = document.getElementById("clickbtn");

popup.addEventListener("click",function(){
    popup.style.backgroundColor = "red";
    alert("Happy birthday");
})
popup.addEventListener('mouseover',function(){
    popup.style.backgroundColor = "green";
});