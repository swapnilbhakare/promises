// const { reject } = require("async");

console.log("person1 : shows ticket");
console.log("person2 : shows ticket");
const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getCandy = new Promise((resolve, reject) => resolve(`candy`));

  const getcolddrink = new Promise((resolve, reject) => resolve(`coffee`));

  let ticket = await promiseWifeBringingTicks;

  let [popcorn, candy, coke] = await Promise.all([
    getPopcorn,
    getCandy,
    getcolddrink,
  ]);

  console.log(`${popcorn}, ${candy},${coke}}`);

  return ticket;
};
preMovie().then((m) => console.log(`person3: show ${m}`));

console.log("person4 : shows ticket");
console.log("person5 : shows ticket");

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ticket");
//     }, 3000);
//   });
//   const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log("wifi: I have the ticks");
//     console.log(`person3 : shows ${t}`);
//     console.log("husband : we should go in");
//     console.log("Wife : no i am hungry");
//     return new Promise((resolve, reject) => {
//       resolve(`${t} popcorn`);
//     });
//   });

//   const getButter = getPopcorn.then((t) => {
//     console.log("Husband : i go tsome popcorn");
//     console.log(`person3 : shows ${t}`);
//     console.log("husband :  we should go in");
//     console.log("Wife : I need butter on my popcorn");
//     return new Promise((resolve, reject) => {
//       resolve(`${t} popcorn`);
//     });
//   });

//   getButter.then((t) => console.log(t));
