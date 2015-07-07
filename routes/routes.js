var requests = require('config/requests');
var request = require('request');
require('date-utils');

module.exports = function(app) {



	app.get('/', function(req, res) {

		res.end("Node-Android-Chat-Project"); 
	});

	/*app.get('/test', function(req, res){
	
		requests.tmpfunc(function (found){
			console.log("found : " + found+" : found");
			console.log(found);
			res.json(found);
		});
				
	});*/


	// app.post('/login',function(req,res){
	// 	var name = req.body.name;
 //       		var mobno = req.body.mobno;
 //        	var reg_id = req.body.reg_id;
	
			
	// 	requests.login(name,mobno,reg_id,function (found) {
	// 		console.log(found);
	// 		res.json(found);
	// });		
	// });
	// app.post('/e_room', function(req,res){
	// 	var 
	// 	requests

	// });
	app.post('/send',function(req,res){
 	 
    
    var msg = req.body.msg;
    var to_id =  req.body.to_id;
    var from_id = req.body.from_id;
    //var time_msg = req.body.time_msg;
    var dt = new Date();
    var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
    var time_msg = "[" +  d + "]";
    console.log(req.body);
    
    requests.send(from_id, to_id, msg, time_msg, function(found){
      console.log(found);
      
      //res.json(found);
    });
        /*
		var fromu = req.body.from;
		var fromn = req.body.fromn;
        	var to = req.body.to;
        	var msg = req.body.msg;

			console.log('fromu = ' + fromu + ', fromn = ' + fromn);
			console.log('to = ' + to);
		requests.send(fromn,fromu,to,msg,function (found) {
			console.log(found);
			console.log('msg='+msg);
			res.json(found);
	});		*/
	});

	// app.post('/test',function(req,res){
	// 	var tmp = req.body;
	// 	console.log(tmp);
		

	// })
	// app.post('/getuser',function(req,res){
	// 	var mobno = req.body.mobno;
			
	// 	requests.getuser(mobno,function (found) {
	// 		console.log(found);
	// 		res.json(found);
	// });		
	// });

	// app.post('/logout',function(req,res){
	// 	var mobno = req.body.mobno;

			
	// 	requests.removeuser(mobno,function (found) {
	// 		console.log(found);
	// 		res.json(found);
	// });		
	// });

	
};




