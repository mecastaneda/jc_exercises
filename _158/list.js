'use strict';
$(document).ready(function() {
  var ss = StickyScroller('#main-list', '.index', "#fake-index");
});

function StickyScroller(mainId, indexesClass, fakeIndexId) {

  // Set Up
  var mainList = $(mainId);
  var indexTitles = $(indexesClass);
  var fakeIndex = $(fakeIndexId);
  var sectionContainer = $('.section-container');
  var indexHeight = indexTitles[0].clientHeight;
  var listTopOffset = indexTitles[0].offsetTop;
  var downLimits = [];
  var upLimits = [];
  var indexContents = [];

  console.log('indexHeight', indexHeight);



  for(var elm of indexTitles) {
    downLimits.push(elm.offsetTop - listTopOffset);
    upLimits.push(elm.offsetTop + indexHeight - listTopOffset);
    //TODO: fix this up
  }
  $('.section-container').css("position", "relative");
  console.log('downLimits',downLimits);
  console.log('upLimits',upLimits);

  for (var txt of indexTitles) {
    indexContents.push(txt.innerText);
  }

  // Attach event, determins if scrolling up or down
  var lastScroll = 0;
  mainList.scroll(function() {
    var currScroll = mainList.scrollTop();
    console.log(currScroll);
    if(currScroll > lastScroll)
      scrollDown(currScroll);
    else
      scrollUp(currScroll);
    lastScroll = currScroll;
  });


  /* Determins if there needs to be a change in the view
     when scrolling DOWN */
  var currIndex = 0;
  function scrollDown(scrollPos) {
    if(scrollPos < downLimits[currIndex+1]) {
      if(scrollPos >= downLimits[currIndex+1]-indexHeight) {
        transitionFakeIndex(currIndex+1);
        console.log('hide fake index');
      }
    } else {
      changeFakeIndex(currIndex);
      currIndex++;
      console.log('change fake content', currIndex);
      /*var nextIndex = 0;
      var flag = true;
      for(var i=currIndex+1; i<downLimits.length; i++) {
        if(scrollPos > downLimits[i]) {
          nextIndex = i;
          flag = true;
        }
      }
      if(flag) {
        console.log('change fake content', nextIndex);
        changeFakeIndex(nextIndex);
        currIndex = nextIndex;
      } */
    }
  }
  /* Determins if there needs to be a change in the view
     when scrolling UP */
  function scrollUp(scrollPos) {
    if(currIndex == 0) return null;
    if(scrollPos <= downLimits[currIndex]) {
      if(scrollPos >= downLimits[currIndex]-24) {
        console.log('do soft change');
      } else {
        console.log("do hard change");
        changeFakeIndex(currIndex-1);
        currIndex--;
      }
    }
  }


  function changeFakeIndex(index) {
    fakeIndex.text(indexContents[index+1]);
    fakeIndex.removeClass("hidden");
    $(sectionContainer[index-1]).css("padding-top", "0");
    $(indexTitles[index-1]).removeClass("transition");
  }

  function transitionFakeIndex(index) {
    fakeIndex.addClass("hidden");
    $(sectionContainer[index-1]).css("padding-top", indexHeight+"px");
    $(indexTitles[index-1]).addClass("transition");
  }

}
