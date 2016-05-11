Date.prototype.tomorrow = function() {
  var todayNum = this.getDay();
  var days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  return "Tomorrow is " + days[todayNum+1];
}

console.log("What day is tomorrow?");
console.log((new Date()).tomorrow());
