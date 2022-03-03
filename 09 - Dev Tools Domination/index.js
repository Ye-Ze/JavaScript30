const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello world!");

// Interpolated
// %s -- string
console.log("Hi %s!", "girls");
// %d -- integer
console.log("I'm %d years old!", 25);
// %f -- float
console.log("It's $f euros.", 23.5);
// %o -- object
console.log("This is an object: %o", {
  firstName: "Amber",
  lastName: "Simpson",
  age: 20,
});

// Styled
// %c -- styled
console.log(
  "I'm not just a log. I'm %cCONSOLE DOT LOG!!",
  "font-size: 1.5rem; color: red; background-color: #333;"
);

// warning!
console.warn(
  "<-- a warning sign in %c Watch out! ",
  "background-color: #eeaf1e;color: #fff;"
);

// Error :|
console.error(
  "<-- an error sign %c Oh Darn! ",
  "background-color: red; color:#fff;"
);

// Info
console.info(
  "<-- an info sign %c Practice makes perfect! ",
  "background-color:#274ed0;color: #fff"
);

// Testing
console.log("[== log Testing ==]");
console.log("-- console.assert() --");
console.log("1. it'll return nothing if true.");
console.assert(1 === 1, "Hey it's true");
console.log("2. it'll return the message if false.");
console.assert(1 === 0, "Hey you're wrong");
console.log("3. you can also check the DOM or something.");
const p = document.querySelector("p");
console.assert(
  p.innerHTML.match("Break"),
  "There is no 'Break' in <p> here, try 'BREAK'"
);

// clearing
console.clear();
console.log("[== log clearing ==]");
console.log('use "console.clear()" to clear console.');
console.log("or hit Ctrl+L.");

// Viewing DOM Elements
console.log("[== Viewing DOM Elements ==]");
console.log(p);
console.log("[== use console.dir() to view the properties of the element ==]");
console.dir(p);

// Table
console.log("[== console.table() ==]");
console.log("-- simply console.table() all out --");
console.table(dogs);
console.log("-- console.table() specified things out --");
console.table(dogs, ["age"]);

// Grouping together
console.log("[== Grouping together ==]");
dogs.forEach((dog) => {
  console.group();
  console.groupCollapsed;
  console.log(`${dog.name}`);
  console.log(`${dog.age}`);
  console.log(`${dog.name} is ${dog.age} years old.`);
  console.groupEnd();
});

// counting
console.log("[== Counting ==]");
console.log("-- counts only contents inside of console.count() --");
console.count("chcolate");
console.count("candy");
console.count("chcolate");
console.count("candy");
console.count("chcolate");
console.count("potato chips");
console.count("chcolate");

// timing
console.log("[== Timing ==]");
console.time("fetching data");
fetch("https://api.github.com/users/Ye-Ze")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
