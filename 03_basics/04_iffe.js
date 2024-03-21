// Immediatly Invoked Function Expressions (IIFE)

// we use this because of the pollution of globle scope
(function chai() {
  console.log(`db connected`);
})();

// by using arrow function
((name) => {
  console.log(`db connected two with ${name}`);
})(`dev kushwha`);
