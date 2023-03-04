/* Your JS goes in this file */

const age = 26;
// console.log(age);

function isAdult(age) {
  if (age > 18) { return true; } else { return false; }
}
console.log(isAdult(age));

const student1Score = 71;

function didStudentPass(score) {
  if (score >= 70) { return true; } else { return false; }
}
console.log(didStudentPass(student1Score));

const student2Score = 89;
function getCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else { return 'A++'; }
}
console.log(getCalculator(student2Score));

const season = 'summer';
function seasonMessenger(season) {
  if (season === 'summer') {
    return "it's hot today";
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are chaning';
  } else if (season === 'winter') {
    return "it's cold today";
  } else { return 'please enter a valid season'; }
}
console.log(seasonMessenger(season));

const dayOftTheWeek = 'sunday';
function dayDetector(dayOftTheWeek) {
  if (dayOftTheWeek === 'saturday' || dayOftTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else { return "It's a weekday!"; }
}
console.log(dayDetector(dayOftTheWeek));
