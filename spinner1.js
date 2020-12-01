// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// ... fill in the rest yourself ...
let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let x = 0
for (let line of arr) {
  x += 200
  setTimeout(() => {
  process.stdout.write('\r' + line)
  }, x)
}
let finish = arr.length * 200
setTimeout(() => {
  console.log()
}, finish)