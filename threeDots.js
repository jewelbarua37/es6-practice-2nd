const ages = [15, 20, 25, 30, 18];
const ages2 = [12, 52, 41, 30, 63];
const ages3 = [12, 52, 41, 30, 63];
const allAges = ages.concat(ages2).concat(ages3).concat([666]);
const allAges2 = [...ages, ...ages2, 101, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 250;
const sochib = 326;

const maximum = Math.max(business, minister, sochib);
console.log(maximum);

