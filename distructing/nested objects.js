function extractValue(person){
    const{ name, address:{street}} = person;
// console.log(name);
// console.log(street);
return {name, street};

}



const person = {
    name: 'vikas varma',
    age: 22,
    address: {
      street: 'Gali no.4',
      city: 'Bilaspur ',
      country: 'India'
    }
  };
  
 console.log(extractValue(person));
