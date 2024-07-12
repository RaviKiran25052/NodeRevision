const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);
console.log('1');
fs.readFile('./contacts.txt', 'utf-8', (err, res) => {
	console.log(res);
});
console.log('2');
console.log('3');