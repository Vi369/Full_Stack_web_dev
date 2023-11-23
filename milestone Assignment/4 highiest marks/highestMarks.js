let marks = [100,1500,900,700,400];
let highestMarks=0;
for(let i=0;i<marks.length;i++){
    if(highestMarks>marks[i]){
        continue;
    }
    else{
        highestMarks= marks[i];
    }
}
console.log(highestMarks);