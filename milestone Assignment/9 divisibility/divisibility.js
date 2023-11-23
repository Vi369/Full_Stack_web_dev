//divisiale by 3 but not by 2 

let arr = [10,3,15,16,17,200,500,400,40,6,80,1000,900,999,15000];

for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0 && arr[i]%2!=0){
        console.log(arr[i]);
    }
}