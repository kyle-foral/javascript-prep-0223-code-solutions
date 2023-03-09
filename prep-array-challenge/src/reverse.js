/* exported reverse */

function reverse(array) {
  const test = [];
  for (let i = array.length - 1; i >= 0; i--) {
    test.push(array[i]);
  } return test;
}
