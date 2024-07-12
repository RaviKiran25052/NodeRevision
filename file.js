const fs = require("fs");

const res1 = fs.readFileSync("./contacts.txt",'utf-8');
fs.readFile("./contacts.txt", "utf-8", (er,res2) => {
	if (er) {
		console.log("Error:", er);
	} else {
		console.log(res2);
		console.log(`\n`);
	}
});

console.log(res1);
