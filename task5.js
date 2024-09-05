// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

const number = odd_even(3);
console.log(number);
