permute([1,2,3,4,5]);

function permute(arr, preArr) {
  if(!preArr)
    preArr = [];
  if(arr.length <= 2) {
    console.log(arr);
    if(arr.length == 2) {
      console.log([arr[1], arr[0]]);
    }
    return null;
  }
  if(arr.length < 4) {
    permuteThree(arr, preArr);
    return null;
  }
  for(var i = 0; i<arr.length; i++) {
    permute(arr.slice(1), preArr.concat(arr[0]));
    circularShift(arr);
  }
}

function permuteThree(arr, preArr) {
  for(var i=0; i<3; i++) {
    console.log(preArr.concat(arr));
    console.log(preArr.concat([arr[0], arr[2], arr[1]]));
    circularShift(arr);
  }
}

function circularShift(arr) {
  var first = arr.shift();
  arr.push(first)
}
