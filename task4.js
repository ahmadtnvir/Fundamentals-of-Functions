// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(str) {
//   let count = 0;
//   for (const num of str) {
//     if (num === "0") {
//       count += 1;
//     }
//   }
//   return count;
// }

// const binaryStr = count_zero("0101010101");
// console.log(binaryStr);

// !OR

function count_zero(str) {
  return str.split("0").length - 1;
}

// const binaryStr = count_zero("0101010101");
const binaryStr = count_zero("1010101010");
console.log(binaryStr);
