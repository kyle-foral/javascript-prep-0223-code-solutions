// create your loops here.

function whileLoop1() {
  const test = [];
  let i = 0;
  while (i < 10) {
    test.push(i);
    i++;
  } return test;
}
console.log('whileLoop1', whileLoop1());

function whileLoop2() {
  const test = [];
  let i = 0;
  while (i < 19) {
    test.push(i);
    i += 2;
  } return test;
}
console.log('whileLoop2', whileLoop2());

function forLoop1() {
  const test = [];
  let i = 0;
  for (i = 0; i < 10; i++) {
    test.push(i);
  } return test;
}
console.log('forloop1', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion: ', i);
  }
}
console.log(forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};

function forInLoop1(object) {
  const array = [];
  for (const property in object) {
    array.push(property);
  }
  return array;
}
console.log('forInLoop1', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
console.log('forInLoop2', forInLoop2(object));
