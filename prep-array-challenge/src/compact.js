/* exported compact */

function compact(array) {
  const test = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) { test.push(array[i]); }
  } return test;
}
