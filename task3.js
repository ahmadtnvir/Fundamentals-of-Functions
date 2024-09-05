// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
  const length = arr.length;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / length;
}

const array = make_avg([1, 2, 3, 4, 5]);
console.log(array);
