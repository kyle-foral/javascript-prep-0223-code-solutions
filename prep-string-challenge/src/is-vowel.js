/* exported isVowel */

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lower = char.toLowerCase();
  for (let i = 0; i < vowels.length; i++) {
    if (lower === vowels[i]) {
      return true;
    }
  }
  return false;
}
