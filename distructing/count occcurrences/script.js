function countWords(str){
    const words = str.split(" ");
    const myMap = new Map();
    

    for (let word of words){
        if(myMap.has(word)){
            myMap.set(word, myMap.get(word)+1);
        }
        else{
            myMap.set(word, 1);
        }
    }
    return myMap;
}
const sentence = "mere naam santosh hai main hockey ka bahut achha khiladi huwa karta tha ek din bhai ki gussa aa gya or unhone mera tang thod diya pr dil ke achhe hai dusri tang lagwa ki di tab se m langda hnn";
console.log(countWords(sentence))

