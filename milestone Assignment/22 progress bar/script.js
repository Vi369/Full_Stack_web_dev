// event for scroll
document.addEventListener("scroll",updateProgressBar);
// function that calculate current position on page 
function updateProgressBar(){
const {scrollTop, scrollHeight} = document.documentElement;

const scrollPersent = scrollTop /(scrollHeight - window.innerHeight)*100;
// update the progress bar
document.getElementById("progressBar").style.width = scrollPersent +"%";
}

