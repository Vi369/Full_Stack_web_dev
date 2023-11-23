const inputBox = document.getElementById("inputBox");
const addTask = document.getElementById("addTask");
let todo =document.getElementById("todo");

addTask.addEventListener("click", ()=>{
    if(inputBox.value==''){
        alert("kyu majak kar raha bhai check kr phir se (:")
    }else{
   
        let task = document.createElement("li");
        task.innerText = inputBox.value;

        todo.appendChild(task);
      }
      inputBox.value ='';
      
});