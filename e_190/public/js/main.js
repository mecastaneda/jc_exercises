var async = {
  getAll: function(ajaxArray, cb) {
    cb = cb || function(){};
    $.when.apply(this, ajaxArray).done(cb);
  }
}

var ajax1 = $.get('/person');
var ajax2 = $.get('/contacts');
var ajax3 = $.get('/settings');
async.getAll([ajax1, ajax2, ajax3], function(data1, data2, data3) {
  console.log('all are done, data:', data1, data2, data3);
});
