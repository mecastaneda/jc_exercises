var objX = {};

var objA = {
  prop1: 12,
  prop2: function(){},
  prop3: {},
  prop4: objX
}

var objB = {
  prop1: 12,
  prop2: function(){},
  prop3: {},
  prop4: objX,
  prop5: "xcxc"
}

console.log(getDifProps(objA, objB));


function getDifProps(obj1, obj2) {
  var retObj = {};

  for(var key1 in obj1) {
    if(obj2[key1]) {
      if(obj1[key1] !== obj2[key1]) {
        retObj[key1] = obj1[key1];
        retObj[key1+"_copy"] = obj2[key1];
      }
    } else {
      retObj[key1] = obj1[key1];
    }
  }

  for(var key2 in obj2) {
    if(!obj1[key2])
      retObj[key2] = obj2[key2];
  }

  return retObj;
}
