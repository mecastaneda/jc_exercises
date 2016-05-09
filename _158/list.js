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
  var indexContents = [];

  for(var elm of indexTitles) {
    downLimits.push(elm.offsetTop - listTopOffset);
  }
  $('.section-container').css("position", "relative");

  for (var txt of indexTitles) {
    indexContents.push(txt.innerText);
  }

  // Attach event, determins if scrolling up or down
  var lastScroll = 0;
  mainList.scroll(function() {
    var currScroll = mainList.scrollTop();
    if(currScroll > lastScroll)
      scrollDown(currScroll);
    else
      scrollUp(currScroll);
    lastScroll = currScroll;
  });


  /* Determins if there needs to be a change in the view
     when scrolling DOWN */
  var currIndex = 0;
  var transitionDownComplete = true;
  var transitionUpComplete = true;
  function scrollDown(scrollPos) {
    if(!transitionUpComplete) {
      currIndex--;
      transitionUpComplete = true;
    }
    if(scrollPos < downLimits[currIndex+1]) {
      if(scrollPos >= downLimits[currIndex+1]-indexHeight) {
        transitionFakeIndex(currIndex+1);
        transitionDownComplete = false;
      }
    } else {
      changeFakeIndex(currIndex+1, currIndex-1);
      currIndex++;
      transitionDownComplete = true;
    }
  }
  /* Determins if there needs to be a change in the view
     when scrolling UP */
  function scrollUp(scrollPos) {
    if(!transitionDownComplete) {
      currIndex++;
      transitionDownComplete = true;
    }
    if(scrollPos <= downLimits[currIndex]) {
      if(scrollPos >= downLimits[currIndex]-indexHeight) {
        transitionFakeIndex(currIndex);
        transitionUpComplete = false;
      } else {
        changeFakeIndex(currIndex-1, currIndex-1);
        currIndex--;
        transitionUpComplete = true;
      }
    }
  }


  function changeFakeIndex(nextIndex, prevIndex) {
    fakeIndex.text(indexContents[nextIndex]);
    fakeIndex.removeClass("hidden");
    $(sectionContainer[prevIndex]).css("padding-top", "0");
    $(indexTitles[prevIndex]).removeClass("transition");
  }

  function transitionFakeIndex(index) {
    fakeIndex.addClass("hidden");
    $(sectionContainer[index-1]).css("padding-top", indexHeight+"px");
    $(indexTitles[index-1]).addClass("transition");
  }

}
