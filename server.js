const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req, res) => {

	if (req.url === '/favicon.ico') return res.end();
	// console.log(req.headers);

	const myurl = url.parse(req.url, true); // true - to parse the url
	console.log(myurl);

	const log = `${Date.now()}: ${req.url}\n`
	fs.appendFile('log.txt', log, (err, data) => {

		switch (myurl.pathname) { // req.url
			case '/':
				res.end("Home Page");
				break;
			case '/about':
				res.end("Hi..!, This is Ravi Kiran.");
				break;
			case '/contact':
				const name = myurl.query.name;
				const age = myurl.query.age;
				res.end(`Name: ${name}\nAge: ${age}\n\nI will contact you soon..!`);
				break;
			default:
				res.end("404 not found...!")
				break;
		}
	})
});

myserver.listen(8000, () => console.log("Server Started..!"));
