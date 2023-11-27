const delayTime = 3;
let timeCount = delayTime;

const interval = setInterval(()=>{
    console.log(`time remaining: ${timeCount}seconds` );
    timeCount--;
    if(timeCount <1){
        clearInterval(interval);
        console.log("Random number: ",Math.random());
        
    }
},1000)