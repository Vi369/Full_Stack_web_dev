let personName = "vikas";
let personNameUppercase = personName.toUpperCase();
let count = 0;

for(let i=0; i<personNameUppercase.length; i++){
    if(personNameUppercase[i]=="A"||personNameUppercase[i]=="E"||personNameUppercase[i]=="I"||personNameUppercase[i]=="O"||personNameUppercase[i]=="U")
    {
        count++;
    }

}
console.log(count);

