
var subMenus;
$(document).ready(function() {
  var navRoot = $('#main-menu');
  //navRoot.on('mouseenter', "li", menuOpen);
  //navRoot.on('mouseout', "li>a", menuClose);
  var menuElm = $('.menu>li');
  for(var elm of menuElm) {
    //$(elm).on('mouseout', 'a', menuClose);

    $(elm).mouseenter($(elm), menuOpen);
    $(elm).mouseleave($(elm), menuClose);
  }
});

function menuOpen(evt) {
  console.log('in', evt.data);
  evt.data.addClass('show');
}

function menuClose(evt) {
  console.log('out', evt.data);
  evt.data.removeClass('show');
}
