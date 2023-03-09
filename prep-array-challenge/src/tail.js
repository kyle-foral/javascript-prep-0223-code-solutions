/* exported tail */

function tail(array) {
  const test = [];
  for (let i = 1; i < array.length; i++) {
    test.push(array[i]);
  } return test;
}
