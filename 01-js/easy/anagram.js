/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let dict = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(var cha of str1){
    if(dict[cha]){
      dict[cha]++;
    }
    else {
      dict[cha]=1;
    }
  }

  for(var cha of str2){
    if(dict[cha]==null || dict[cha]<=0){
      return false;
    }
    else{
      dict[cha]--;

      if(dict[cha]==0){
        delete dict[cha];
      }
    }
  }
  var sizw = Object.keys(dict).length;
  if(sizw == 0)
    return true;
  else return false;
}

module.exports = isAnagram;
