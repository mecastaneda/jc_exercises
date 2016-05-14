var str = "The quick brown fox jumped over the lazy dog";
var ptrn = "q*ic*";
console.log('result:', myRegEx(ptrn, str));

function myRegEx(ptr, str) {
  if(ptr.legnth > str.length)
    return "";
  var match = "";
  for(var i=0; i < str.length; i++) {
    for(var j=0, k=i; j < ptr.length; j++) {
      if(str[k] == ptr[j] || ptr[j] == '*') {
        match += str[k++];
      }
    }
    if(match.length == ptr.length)
      return match;
    match = "";
  }
  return "";
}
