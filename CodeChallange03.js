"Use Strict";

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // #01
// const events = new Set([...gameEvents.values()]);
// console.log(events);

// // const events = [...gameEvents.values()];
// // console.log(events);

// // #02
// gameEvents.delete(64);
// console.log(gameEvents);

// // #03
// console.log(
//   `An event happend, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happend, on average, every ${time / gameEvents.size} minutes`
// );

// // #04
// for (let [min, event] of gameEvents) {
//   console.log(
//     min <= 45
//       ? `[First Half]: ${min}: ${event}`
//       : `[Second Half]: ${min}: ${event}`
//   );
// }
