var bodyParser = require('body-parser');
var path = require('path'); 
var User = require('../db/models/user');
var bluebird = require('bluebird'); 

module.exports.main = {
	get: function (req, res) {
		res.redirect('/signin'); 
	}
}; 

module.exports.signin = {
	get: function (req, res) {
		console.log('got here? '); 
		res.sendFile(path.normalize(__dirname + '/../../public/index.html')); 
	}, 

	post: function (req, res) {
		console.log('post request', req.body); 
		new User({name: req.body.name, id: req.body.id}).save().then(function(data){
			console.log('user should have saved',data); 
		})
		// db.query(`INSERT INTO users (name) VALUES ('${req.body.name}', '${req.body.id}');`, function (err, data) {
		// 	if (err) {
		// 		console.log(err, 'error in query'); 
		// 	} else {
		// 		res.sendStatus(200); 
		// 		console.log('user found'); 
		// 	}
		// })
	}
}; 

module.exports.create = {
	get: function (req, res) {
		res.send('success'); 
	}, 

	post: function (req, res) {
		res.send('success'); 
	}
}