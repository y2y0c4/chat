var requests = require('config/requests');
var request = require('request');
/*if you have to set timezone*/
//var moment = require('moment-timezone');
require('date-utils');

module.exports = function(app) {

	//prevent get method
	app.get('*',function(req, res) {
		throw new Error('Wrong Access/Get');
	});
	//handleing post method
	app.post('/:route*',functionn(req, res){
		var rout = req.params.route;
		if(req.params['0'] == ''){
			if(rout =='schedulingPush'){  //push Alam using jop schedule
				var y = req.body.year;
				var m = req.body.month;
				var d = req.body.day;
				var h = req.body.hour;
				var mi =req.body.min;
				var id = req.body.id;
				var time = new Date(y,m,d,h,mi);
				res.json({'response':"res"});
				requests.schedulingPush(id, time, function(found){
					console.log(found);
					res.json(found);
				});
			}
			else if(rout == 'loadmsg')){ //load messages from DB
				console.log("*******************");
				console.log("* loadmsg  called *");
				console.log("*******************");
				var index = req.body.index;
				var no_log = req.body.no_log;
				var numOfMsg = req.body.numOfMsg;
				var log_from = req.body.log_from;
				requests.loadmsg(index, no_log, numOfMsg, log_from, function(found){
					console.log(found);
					res.json(found);
				});
			}
			else if(rout == 'send'){  //send message using GCM
		 		console.log("********************");
				console.log("**  send  called  **");
				console.log("********************");
				var no_log =  req.body.no_log;
				var msg = req.body.log;	
				var to_id =  req.body.to_id;
				var from_id = req.body.from_id;
				var log_from = req.body.log_from;
				var device = req.body.device;
				//if local's time is not korean
				//var time_msg = moment().tz("Asia/Seoul").format("YYYY-MM-DD A hh:mm");
		        	var time_msg = new Date().toFormat('YYYY-MM-DD PP HH:MI');
		        	requests.send(no_log, log_from, msg, to_id, from_id, time_msg, device, function(found){
					console.log(found);
		        		res.json(found);
		        	});
			}
			else if(rout == 'makevideo'){  //update video channel on DB and push client some info
				console.log("*******************");
				console.log("* makevideo called *");
				console.log("*******************");
				var no_room = req.body.no_room;
				var to_id = req.body.to_id;
				var no_log = req.body.no_log;
				var facetime_no = req.body.facetime_no; 
				requests.makevideo(no_log, no_room, to_id, facetime_no, function(found){
					console.log(found);
					res.json(found);
				});
			}
			else if(rout == 'makechat'){ //make chat room 
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
			}
			else if(rout == 'responseMsg'){  //if you send to somebody somebody request responseMsg and get message
		 		console.log("*********************"); 
		 		console.log("* responseMsgcalled *"); 
		 		console.log("*********************"); 
		 		var no_log = req.body.no_log; 
		 		var no = req.body.no; 
		 		var status = req.body.status; 
		 		requests.responseMsg(no_log, no, status, function(found){ 
		 			console.log(found); 
		 			res.json(found); 
		 		}); 
			}
			
			else{
				throw new Error('Wrong Access/Post');
			}
		}
		else{
			throw new Error('Wrong Access/Post');
		}
	});
};
