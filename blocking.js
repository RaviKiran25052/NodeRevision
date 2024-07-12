const fs = require('fs');

console.log('Asynchronous operations');
console.log('1');
fs.readFile('./contacts.txt', 'utf-8', (err, res) => {
	console.log(res);
});
console.log('2');


console.log('\nSynchronous operations');
console.log('1');
const res = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(res);
console.log('2');
console.log('\n');