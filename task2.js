// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function conditionalNumbers(num) {
//   if (num % 2 !== 0) {
//     return num * 2;
//   }
//   return num / 2;
// }

// const number1 = conditionalNumbers(3);
// const number2 = conditionalNumbers(4);
// console.log(number1, number2);


function conditionalNumbers(num) {
    return num % 2 !== 0 ? num * 2 : num / 2;
  }
  
  const number1 = conditionalNumbers(3);
  const number2 = conditionalNumbers(4);
  console.log(number1, number2);