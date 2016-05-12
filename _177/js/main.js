$(document).ready(function() {
  $('#loaderBtn').click(function() {
    $('#placeholder').before().load('previous.html .post');
  });
});
