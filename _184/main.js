function Randomizer(min, max) {
  var prime;
  setPrime();
  var x = Math.floor(Math.random()*(max-min)+min);

  this.getRandom = function() {
    x = ++x > max ? min : x;
    if(x >= prime)
      return x;
    var residue = x*x%prime;
    var ret = (x <= prime / 2) ? residue : prime - residue;
    if(ret < min)
      return this.getRandom();
    return ret;
  }

  function setPrime() {
    for(var i=max, flag; ; i--) {
      flag = true;
      for(var j=2; j<i; j++) {
        if(i%j==0) {
          flag = false;
          break;
        }
      }
      if(flag && i%4==3)
        return prime = i;
    }
    return prime = 4294967291;
  }

}
randr = new Randomizer(7, 104);
for(var i=0; i<30; i++)
  console.log(randr.getRandom());
