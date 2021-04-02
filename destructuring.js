// const person = {name: "Jewel", age: 17, job: "facebooker", gFname: "Keya", address: "01717252621", friends: "Ove" };
// const {phone, name, age, job} = person;

// console.log(phone, name, age, job);

const friends  = ['Sakib Khan', 'Salman Khan', 'Amir Khan', 'Sharukh Khan'];


const [chotaFriends, ...restFriens] = friends;
console.log(restFriens);