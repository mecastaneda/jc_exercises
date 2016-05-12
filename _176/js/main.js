var wrapper;
var previousBtn;
var nextBtn;
var endBtn;
var ctrlContainers;
var currentForm = 0;

$(document).ready(function() {
  wrapper = $('#wrapper');
  // control btns
  previousBtn = $('#previousBtn').click(backHandler);
  nextBtn = $('#nextBtn').click(nextHandler);
  endBtn = $('#endBtn');
  ctrlContainers = $('.ctrl');
});

function nextHandler() {
  if(currentForm == 0) {
    previousBtn.prop('disabled', false);
    wrapper.css('left', '-900px');
  } else if(currentForm == 1) {
    nextBtn.prop('disabled', true);
    endBtn.prop('disabled', false);
    wrapper.css('left', '-1750px');
  }
  currentForm=(currentForm+1)%3;
}

function backHandler() {
  if(currentForm == 1) {
    previousBtn.prop('disabled', true);
    wrapper.css('left', '-50px');
    currentForm--;
  } else if (currentForm == 2) {
    nextBtn.prop('disabled', false);
    wrapper.css('left', '-900px');
    endBtn.prop('disabled', true);
    currentForm--;
  }
}
