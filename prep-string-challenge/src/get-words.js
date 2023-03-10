/* exported getWords */

function getWords(string) {
  if (string) {
    const test = string.split(' ');
    return test;
  }
  return [];
}
