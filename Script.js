"Use Strict";

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHour: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via Del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via Del Sole, 21",
//   starterIndex: 3,
// });

// const { resname, openingHour, catagories } = restaurant;
// console.log(resname, openingHour, catagories);

// // Giving Name
// const {
//   resname: resturantName,
//   openingHour: hours,
//   catagories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHour;
// console.log(o, c);

////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Destruturing Op == Unpacking OP
// const [x, y, z] = arr;
// console.log(x, y, z);

// // , , == Second elemnt will be skiped
// let [main, , secondary] = restaurant.catagories;
// console.log("Main : " + main, "Secondary : " + secondary);

// // // Old Way
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // New Way ( It's a Trick )
// [main, secondary] = [secondary, main];
// console.log("Main : " + main, "Secondary : " + secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(`The Starter is ${starter} and the main dish is ${mainCourse}.`);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // nested Destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Spread Operator === ...
// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);

/////
/////
// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHour: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join Arrays
// const menu = [...mainMenuCopy, ...newMenu];
// console.log(menu);

// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu2);

// // Iterables : Arrays, Stringsm Maps, Sets, not Objects

// const strName = "Iman";
// const letters = [...strName, " ", "s."];
// console.log(letters);
// console.log(...strName);

// const ingredinets = [
//   prompt("let's make pasta! Ingrendient 1 ?"),
//   prompt("let's make pasta! Ingrendient 2 ?"),
//   prompt("let's make pasta! Ingrendient 3 ?"),
// ];

// restaurant.orderPasta(...ingredinets);

// Objects
// const newResturant = { ...restaurant, founder: "Iman", foundingIn: 2012 };
// console.log(newResturant);

// const resturantCopy = { ...restaurant };
// resturantCopy.resname = "Ristorante Roma";
// console.log(resturantCopy.resname);
// console.log(restaurant.resname);

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHour: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredint, ...otherIngredients) {
//     console.log(mainIngredint);
//     console.log(otherIngredients);
//   },
// };

// Spread
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// Rest
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherfoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherfoods);

// objects
// const { sat, ...weekdays } = restaurant.openingHour;
// console.log(sat, weekdays);

// Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// add(7, 6, 9, 7, 2, 4, 8, 2, 1, 4, 6, 8, 6, 3, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("Mushrooms", "onions", "olives", "Spinach");
// restaurant.orderPizza("Mushrooms");

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHour: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 12,
//       close: 22,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredint, ...otherIngredients) {
//     console.log(mainIngredint);
//     console.log(otherIngredients);
//   },
// };

// console.log("-------OR--------");
// Use ANY data type, return ANY data type, Short-Circuiting
// Short-Circuiting : if the first value is truthy value it will be returned immediately
// console.log(3 || "iman");
// console.log("" || "iman");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// const guests2 = restaurant.numGuests || "There is no guests list";
// console.log(guests2);

// // Nullish Values (??) : null and undefined (not 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log("-------And-------");
// console.log(0 && "Iman");
// console.log(7 && "Iman");

// console.log("hello" && 23 && null && "iman");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushrooms", "Garlic");
// }

// restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Garlic");

// ------------------------------------------------------

// const rest1 = {
//   name: "Capri",
//   //   numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   Owner: "Iman",
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // OR Assignment operator
// // this op has problem with zero because zero is a falsey value
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Solution : Logical Nullish Operator
// // Nullish Assignement OP (Null Or Undefiend)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.Owner = rest1.Owner && "<ANNONYMOUS>";
// // rest2.Owner = rest2.Owner && "<ANNONYMOUS>";
// // Logical AND Asignment
// // Only Assingn if the value is treuthy and we dont get undefined
// rest1.Owner &&= "<ANNONYMOUS>";
// rest2.Owner &&= "<ANNONYMOUS>";

// console.log(rest1);
// console.log(rest2);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHour = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDaysp[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // old way
//   //   order: function (starterIndex, mainIndex) {
//   //     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   //   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },

//   // Old  Way
//   //   openingHour : openingHour;
//   // New Way
//   openingHour,

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredint, ...otherIngredients) {
//     console.log(mainIngredint);
//     console.log(otherIngredients);
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// checked this my self
// menu.forEach((items) => {
//   console.log(items);
// });

// Old School Way
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// console.log([...menu.entries()]);

// New ways
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHour = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // old way
//   //   order: function (starterIndex, mainIndex) {
//   //     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   //   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // Old  Way
//   //   openingHour : openingHour;
//   // New Way
//   openingHour,

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// if (restaurant.openingHour.mon) console.log(restaurant.openingHour.mon.open);
// if (restaurant.openingHour.fri) console.log(restaurant.openingHour.fri.open);

// WITH Optional Chaning
// console.log(restaurant.openingHour.mon?.open);
// console.log(restaurant.openingHour.fri?.open);
// console.log(restaurant.openingHour.sat?.open);

// console.log(restaurant.openingHour?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   //console.log(day);
//   const open = restaurant.openingHour[day]?.open ?? "Closed";
//   console.log(`On ${day}, We Open at ${open}`);
// }

// // Optional chaning for Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// // Optional chaning for arrays
// const users = [
//   {
//     name: "iman",
//     email: "Imanking251@gmail.com",
//   },
// ];

// console.log(users[0]?.name ?? "User Array Empty");
// console.log(users[4]?.name ?? "User Array Empty");

// property Names
// const properties = Object.keys(openingHour);
// console.log(properties);

// let openSrt = `We are open on ${properties.length} Days : `;

// for (const day of Object.keys(openingHour)) {
//   openSrt += `${day} ,`;
// }
// console.log(openSrt);

// // properties Values
// const values = Object.values(openingHour);
// console.log(values);

// const entries1 = Object.entries(openingHour);
// console.log(entries1);

// for (const [day, { open, close }] of entries1) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// in the set all duplicates will be ignored
// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Pasta",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(ordersSet);

// console.log(new Set("Iman"));
// console.log(new Set());

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// console.log(ordersSet);
// // There is no way to retrive data from set

// for (const order of ordersSet) console.log(order);

// ordersSet.clear();
// console.log(ordersSet);

// Example
// const staf = ["Waiter", "Cheif", "Waiter", "Manager", "Cheif", "Waiter"];
// console.log(staf);
// const stafUnique = [...new Set(staf)];
// console.log(stafUnique);
// console.log(
//   new Set("Waiter", "Cheif", "Waiter", "Manager", "Cheif", "Waiter").size
// );

// console.log(new Set("ImanMohammadi").size);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHour = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // old way
//   //   order: function (starterIndex, mainIndex) {
//   //     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   //   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // Old  Way
//   //   openingHour : openingHour;
//   // New Way
//   openingHour,

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");
// console.log(rest);

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are Open :)")
//   .set(false, "We are Closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get("1"));
// console.log(rest.get(1));

// let time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.size);
// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// // console.log(rest);

// const arr = [1, 2];

// rest.set(arr, "test");
// console.log(rest);

// console.log(rest.get(arr));

// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);

// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHour = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   resname: "Classico Italiano",
//   location: "via Angelo Taventi 23 , Firenze, Italy",
//   catagories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // old way
//   //   order: function (starterIndex, mainIndex) {
//   //     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   //   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // Old  Way
//   //   openingHour : openingHour;
//   // New Way
//   openingHour,

//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address = "",
//   }) {
//     console.log(
//       `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} Will be Delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const question = new Map([
//   ["question", "what is the best programming language in the world?"],
//   [1, "C"],
//   [2, "java"],
//   [3, "javascript"],
//   [4, "C#"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);

// console.log(question);

// // Convert Object to map
// const hoursMap = new Map(Object.entries(openingHour));
// console.log(hoursMap);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("Your Answer ?"));
// console.log(answer);
// console.log(question.get(answer === question.get("correct")));

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Working With Strings 01
// const airLine = "TAP Air Iran";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log("B737"[0]);

// console.log(airLine.length);
// console.log("b737".length);

// console.log(airLine.indexOf("r"));
// console.log(airLine.lastIndexOf("r"));
// console.log(airLine.indexOf("Iran"));
// console.log(airLine.indexOf("iran"));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(" ")));
// console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMidlleSeat = function (seat) {
//   // B And E are Middle Seats
//   const s = seat.slice(-1);
//   console.log(
//     s === "B" || s === "E" ? "You got the middle Seat 😁" : "You got lucky 😎"
//   );
//   //   if (s === "B" || s === "E") {
//   //     console.log("You got the middle Seat");
//   //   } else {
//   //     console.log("You got lucky");
//   //   }
// };

// checkMidlleSeat("11B");
// checkMidlleSeat("23C");
// checkMidlleSeat("3E");

// console.log(new String("Iman"));
// console.log(typeof new String("Iman"));

// console.log(typeof new String("Iman").slice(1));

// Working with String 02
const airLine = "TAP Air Iran";

// console.log(airLine.toLocaleLowerCase());
// console.log(airLine.toUpperCase());

// console.log("IMAN".toLowerCase());
// console.log("iman".toUpperCase());

// const passenger = "iMaN"; // Iman
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passenger);
// console.log(passengerLower);
// console.log(passengerCorrect);

// function correctingPassengerName(passengername) {
//   const lowerName = passengername.toLowerCase();
//   const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
//   return `[Name Correction]: ${correctName} | [Input Value]: ${passengername}`;
// }

// console.log(correctingPassengerName("iMAn"));
// console.log(correctingPassengerName("raNA"));
// console.log(correctingPassengerName("bEhRUz"));

// Comparing Emails

// const email = "imanking251@gmail.com";
// const loginEmail = "  Imanking251@gmail.Com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// function compareTwoEmails(correctEmail, inputedEmail) {
//   const normalizedInputedEmail = inputedEmail.toLowerCase().trim();
//   const normalizedCorrectEmail = correctEmail.toLowerCase().trim();

//   console.log(normalizedCorrectEmail);
//   console.log(normalizedInputedEmail);

//   console.log(
//     normalizedCorrectEmail === normalizedInputedEmail
//       ? "The Emails are the same 😄"
//       : "the Emais aren't the same 😅"
//   );
// }

// compareTwoEmails("Imanking251@gmail.com", "   iManKing251@Gmail.cOM");

// Replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceGB);
// console.log(priceUS);

// const announcement =
//   "All passengers come to bording door 23, Boarding door 23!";

// console.log(announcement.replace("door", "gate"));

// // console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));

// Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("A"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the New Airbus family");
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snakcs and a gun for protection");

// console.log("a+very+nice+string".split("+"));
// console.log("iman Mohammadi".split(" "));

// const [firstName, lastName] = "iman Mohammadi".split(" ");
// console.log(firstName, lastName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("iman mohammadi");

// Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+"));
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("iman".padStart(20, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(4334741415217585));
// console.log(maskCreditCard(2544214));

// Repeat
// const message = "Bad weather.. All Departures Delayed... ";

// console.log(message.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(2);
// planesInLine(9);
// planesInLine(14);
