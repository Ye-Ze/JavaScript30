// start with strings, numbers and booleans
// string
console.group();
let str1 = "ABC";
let str2 = str1;
console.log(`str1: ${str1}, str2: ${str2}`);
console.log("--change str2 to XYZ");
str2 = "XYZ";
console.log(`str1: ${str1}, str2: ${str2}`);
console.groupEnd();

console.group();
// number
let int1 = 100;
let int2 = int1;
console.log(`int1: ${int1}, int2: ${int2}`);
console.log("--change int2 to 200");
int2 = 200;
console.log(`int1: ${int1}, int2: ${int2}`);
console.groupEnd();

console.group();
// boolean
let bool1 = true;
let bool2 = bool1;
console.log(`bool1: ${bool1}, bool2: ${bool2}`);
console.log("--change bool2 to false");
bool2 = false;
console.log(`bool1: ${bool1}, bool2: ${bool2}`);
console.groupEnd();
// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

// You might think we can just do something like this:
const team1 = players;

// however what happens when we update that array?
team1[3] = "Chad";

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[3] = "Chad2";

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = "Chad3";

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Nobody";

// now when we update it, the original one isn't changed
const team5 = Array.from(players);
team5[3] = "No one";

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

const tom = {
  name: "Tom",
  age: 30,
  social: {
    twitter: "@tomyes",
    facebook: "tomyes.coolman",
  },
};
// and think we make a copy:
const man = person;
// man.number = 100;
// how do we take a copy instead?
const man2 = Object.assign({}, person, { number: 100 });
const tom2 = Object.assign({}, tom);
tom2.age = 31; // won't change original object.
// tom2.social.twitter = '@zzzzz';
// original value will change as well.

// We will hopefully soon see the object ...spread
const tom3 = JSON.parse(JSON.stringify(tom)); // change to string first, then change it back to object(JSON).
tom3.social.twitter = "@zzzzzz";

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
