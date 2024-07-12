// const http = require('http');
// const fs = require('fs');
// const url = require('url');
const express = require('express');

const app = express();

app.get("/", (req, res) => {
	res.send("Hi this is Home Page..!")
});
app.get("/about", (req, res) => {
	res.send("Hi "+ req.query.name + "..!, this is Ravi Kiran :)")
})

app.listen(8000, () => console.log("Server Started :)"));

// const myserver = http.createServer((app));
// myserver.listen(8000, () => console.log("Server Started..!"));
