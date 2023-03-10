/* exported capitalize */

function capitalize(word) {
  const cap = word[0].toUpperCase();
  const rest = word.slice(1);
  const lower = rest.toLowerCase();
  const final = cap + lower;
  return final;
}
