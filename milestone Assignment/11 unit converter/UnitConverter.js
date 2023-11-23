let celsius = 15;

let fahrdnhdite = CelsiusToFahrdnhditConverter(celsius);
console.log(fahrdnhdite)

function CelsiusToFahrdnhditConverter(cel){
    return (cel*9/5)+32;
}