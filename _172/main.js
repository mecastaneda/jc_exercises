

var DateTime = Date;

(function() {
  var getDay = Date.prototype.getDay;
  var d = new Date();
  var days = {
    0: "Sunday", 1: "Monday",
    2: "Tuesday", 3: "Wednesday",
    4: "Thursday", 5: "Friday",
    6: "Saturday"
  };
  DateTime.prototype.getDay = function() {
    var todayNum = getDay.call(d);
    return days[todayNum];
  };
  DateTime.prototype.getTomorrow = function() {
    var todayNum = getDay.call(d);
    return days[todayNum+1];
  };
})();

var date = new DateTime();
console.log("Today is:", date.getDay());
console.log("Tomorrow is:", date.getTomorrow());
