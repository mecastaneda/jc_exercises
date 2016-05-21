var array = [3,2,1,0,-3,2,2,-2];

console.log(equate(array));

function equate(arr) {
  var result = [];
  for(var i=0; i<arr.length; i++) {
    for(var j=i+1; j<arr.length; j++) {
      for(var k=j+1; k<arr.length; k++) {
        if(arr[i]+arr[j]+arr[k] == 0) {
          result.push([arr[i],arr[j],arr[k]])
        }
      }
    }
  }
  return result;
}
