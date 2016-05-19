var array = [1, 2, 3, 4, 5, 6, 7];
rm(array,3);
console.log(array); // [1, 2, 3, 5, 6, 7];

function rm(arr, numElm) {
  arr.splice(numElm, 1);
}
