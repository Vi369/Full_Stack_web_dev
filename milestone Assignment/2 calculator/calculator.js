let num1 = 10;
let num2 = 20;
let result = 0;

let operation = "%";

switch(operation){
   case "+":
      result = num1+num2;
      console.log(result);
      break;
   case "-":
      result = num1-num2;
      console.log(result);
      break;
   case "*":
      result = num1*num2;
      console.log(result);
      break;
   case "/":
      result = num1/num2;
      console.log(result);
      break;
   default:
      console.log("Invalid operator");
}

