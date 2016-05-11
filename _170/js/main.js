var template;
var inputs;
var target;

$(document).ready(function() {
  template = $('#template').html();
  Mustache.parse(template);
  inputs = $('#form-register input:text');
  target = $('#target');
  $('#submmitBtn').click(function() {
    var values = [];
    for (elm of inputs) {
      values.push($(elm).val())
    }
    showModal({name: values[0], food: values[1], toy:values[2]}, function() {
      console.log('the user clicked yes!');
    });
  });
});

function showModal(data, cb) {
  cb = cb || function() {};
  var rendered = Mustache.render(template, data);
  target.addClass("on");
  target.html(rendered);
  $("#yesBtn").click(function() {
    target.removeClass("on");
    target.html("");
    cb();
  });
  $("#noBtn").click(function() {
    target.removeClass("on");
    target.html("");
  });
}
