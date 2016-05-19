$(document).ready(function() {
  var loginTmpl = $('#template-login').html();
  var signUpTmpl = $('#template-signup').html();
  var target = $('#target');
  var loginBtn = $('#loginBtn');
  var signupBtn = $('#signupBtn');
  loginBtn.click([target, loginTmpl], tmplInsert);
  signupBtn.click([target, signUpTmpl], tmplInsert);
});

function tmplInsert(evt) {
  evt.preventDefault();
  console.log('hey', evt.data);
  evt.data[0].html(evt.data[1]);
  evt.data[0].addClass('show');
  $('#closeBtn').click(function() {
    evt.data[0].removeClass('show');
    setTimeout(function() {
      evt.data[0].html('');
    }, 500);

  })
}
