'use strict';
var fs = require('fs');
var dictionary = fs.readFileSync('words', 'utf8').split(/\n/g);

var input = "the noisy finger pushed the devil down the stairs";
var inputArr = input.split(/\s/g);
var output = "";
for(var word of inputArr) {
  var anagrams = findAnagrams(word, dictionary);
  output += anagrams.length? anagrams[0] : word;
  output += " ";
}
console.log(output);

function findAnagrams(word, dict) {
  var storage = [];

  for(var dictWord of dict) {
    if(word.length != dictWord.length || word == dictWord)
      continue;
    var map = {}, flag = true;
    for(var char of word)
      map[char] = map[char]? map[char]+1: 1;
    for(var char of dictWord) {
      if(!map[char] || (--map[char])<0) {
        flag = false;
        break;
      }
    }
    if(flag)
      storage.push(dictWord);
  }
  return storage;
}
