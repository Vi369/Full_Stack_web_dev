// greeting function 

function greeting(name){
    return new Promise((resolve, reject)=> {
        try{
            if((name !== "")){
                const greet = `Hello ${name}`;
                resolve(greet);
            }
            else{
                const error = "it's can't be empty"
                reject(error);
            }
            
        }
        catch(error){
            console.log(error);
        }
    })
}


// calling function 

console.log(greeting("vikas"));
