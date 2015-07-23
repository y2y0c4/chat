var requests = require('config/requests');
var request = require('request');
var moment = require('moment-timezone');


module.exports = function(app) {

	app.get('/', function(req, res) {
	
		res.end("Node-Mobile-Chat-Project"); 
	});

	app.post('/loadmsg', function(req, res){
		console.log("**********************");
		console.log("*  loadmsg   called  *");
		console.log("**********************");
		var index = req.body.index;
		var no_log = req.body.no_log;
		var numOfMsg = req.body.numOfMsg;

		requests.loadmsg(index, no_log, numOfMsg, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/send',function(req,res){
 		console.log("**********************");
		console.log("**   send  called   **");
		console.log("**********************");
		var no_log =  req.body.no_log; 
		var msg = req.body.log;		  	
		var to_id =  req.body.to_id;   
		var log_from = req.body.log_from;
		var device = req.body.device;  
		var time_msg = moment().tz("Asia/Seoul").format("YYYY-MM-DD A hh:mm");    

        requests.send(no_log, log_from, msg, to_id, time_msg, device, function(found){
			console.log(found);
        		res.json(found);
        	});

	});	

	app.post('/makevideo',function(req, res){
		console.log("**********************");
		console.log("*  makevideo called  *");
		console.log("**********************");
		var no_room = req.body.no_room;
		var to_id = req.body.to_id;
		var no_log = req.body.no_log;
		var facetime_no = req.body.facetime_no;

		requests.makevideo(no_log, no_room, to_id, facetime_no, function(found){
			console.log(found);
			res.json(found);
		});
	});
	app.post('/makechat',function(req, res){
		console.log("**********************");
		console.log("*  makechat  called  *");
		console.log("**********************");
		var time_start = req.body.time_start;
		var partner = req.body.partner;
		var client = req.body.client;

		requests.makechat(time_start,partner,client, function(found){
			console.log(found);
			res.json(found);
		});
	});
};

