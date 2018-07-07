const express = require('express'); 
const app = express(); 
const mysql = require ('mysql'); 

/** Pre configuration 
*************************************/ 

// Getting Current Working Directory 
var cwd = process.cwd(); 

// Configure Database 
var connection = mysql.createConnection({
	host: 'server189.web-hosting.com', 
	user: 'paulncks_radiofree', 
	password: 'radiofree123', 
	database: 'paulncks_radiofree'
}); 

connection.connect(); 

connection.query('', function(err, rows, fields) {
	console.log('rows: ' + rows);
	console.log('fields: ' + fields); 
	console.log('error: ' + err); 
});

/** Routing 
*************************************/ 
app.get('/register', function(req, res) {

	res.sendFile(cwd + '/register.html'); 
}); 

app.get('/login', function(req, res) {

	res.sendFile(cwd + '/login.html');
}); 


app.listen(3000, () => console.log("Example app listeneing on port 3000"))
console.log('hello world');


