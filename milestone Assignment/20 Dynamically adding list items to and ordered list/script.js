const listItems = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"

]
const list = document.getElementById("listItem");
const addItem = document.getElementById("addItem");
// index
let currentItemIndex = 0;

addItem.addEventListener("click",()=>{
    if(currentItemIndex<listItems.length){
        // console.log("hii");
    const newItem = document.createElement("li");
    newItem.innerHTML = listItems[currentItemIndex];
    list.appendChild(newItem);
    currentItemIndex++;
    }
    else{
        alert("all items have been added.");
    }
})