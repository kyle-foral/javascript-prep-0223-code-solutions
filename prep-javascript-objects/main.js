const person = {
  firstName: 'John ',
  lastName: 'Wick',
  hobby: 'playing with his dog'
};

console.log(person);

const fullname = person.firstName + person.lastName;

console.log("This person's name is:", fullname);

person.job = 'Firefighter';
console.log('The job is being a :', person.job);

person['previousjob'] = 'cop';
console.log('The previous job is:', person['previousjob']);

console.log(person);
