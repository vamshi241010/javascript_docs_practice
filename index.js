//empty code
let balance = 100;

async function withdraw(amount) {
  const current = balance;
  await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
  balance = current - amount;
}

Promise.all([
  withdraw(30),
  withdraw(50)
]).then(() => {
  console.log(balance); // Sometimes 50, sometimes 20
});
