/* exported reverseWord */

function reverseWord(word) {
  let test = [];
  for (let i = word.length - 1; i >= 0; i--) {
    test += word[i];
  } return test;
}
