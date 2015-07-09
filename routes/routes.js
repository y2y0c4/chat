var requests = require('config/requests');
var request = require('request');
require('date-utils');

module.exports = function(app) {



	app.get('/', function(req, res) {

		res.end("Node-Android-Chat-Project"); 
	});



	app.post('/signup', function(req,res){
		console.log(req.body);
		var token = req.body.token;
		var userID = req.body.userID;
		var userPW = req.body.userPW;
		var name = req.body.name;
		var sex = req.body.sex;
		requests.signup(token, userID, userPW, name, sex, function(found){
			console.log(found);
			res.json(found);

		});

	});
	app.post('/loadmsg', function(req, res){
		var index = req.body.index;
		var no_log = req.body.no_log;
		console.log(req.body);
		requests.loadmsg(index, no_log, function(found){
			console.log(found);
			res.json(found);

		});

	});
	app.post('/send',function(req,res){
 	 
		var no_log =  req.body.no_log; 
		var msg = req.body.msg;
		var to_id =  req.body.to_id;
		var from_id = req.body.from_id;
		var time_msg = req.body.time_msg;
		var device = req.body.device;
		console.log(req.body);
		    
        	requests.send(no_log, from_id, msg, to_id, time_msg, device, function(found){
			console.log(found);
        		res.json(found);
        	});

	});	
	
	app.post('/makechat',function(req, res){
		var time_start = req.body.time_start;
		var partner = req.body.partner;
		var client = req.body.client;

		requests.makechat(time_start,partner,client, function(found){
			console.log(found);
			res.json(found);
		});
	});


};




