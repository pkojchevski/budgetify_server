var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
//var config = require('./config/db');
var logger = require('morgan');
var cors = require('cors');
var http = require('http');
var SuperLogin = require('superlogin');
var superloginConfig = require('./superlogin.config.js');
var port = process.env.PORT || 3000;
//require('dotenv').config();

// app.listen(port, function() {
//   console.log("Listening on port " + port);
// });




//app.use(express.static(__dirname+'/client/src'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(multer({ dest: './uploads/' }));
// app.use(cors());

//console.log("__dirname:"+__dirname);
//app.use(express.static(path.join(__dirname, 'client')));

// /* GET home page. */
 // app.get('/', function(req, res, next) {
 //   //Path to your main file
 //   res.status(200).sendFile(path.join(__dirname+'../client/src/index.html'));
 // });

app.use(logger('dev'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if ('OPTIONS' === req.method) {
  res.send(200);
}
else {
  next();
}

});

// console.log('config.dbUrl:'+config.dbUrl);
// mongoose.connect(config.dbUrl);

var superlogin = new SuperLogin(superloginConfig);

app.use('/auth', superlogin.router);

// app.post('/auth/register',function(req, res) {
//    console.log('req.body:',JSON.stringify(req.body));
// });
app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'));


// app.get('/expenses', function(req, res) {
//   Expense.find({}).exec(function(err, expenses) {
//     if(err) {
//       res.send('error:'+err);
//     } else {
//       console.log('expense:'+JSON.stringify(expenses));
//       res.json(expenses);
//     }
//   });
// });

// app.get('/incomes', function(req, res) {
//   Income.find({}).exec(function(err, incomes) {
//     if(err) {
//       res.send('error:'+err);
//     } else {
//       console.log('incomes:'+JSON.stringify(incomes));
//       res.json(incomes);
//     }
//   });
// });

// app.get('/records/bydate/:createdAt', function(req, res) {
//   //console.log("date:"+JSON.stringify(new Date(req.params.prodData)));
//   Record.find({"createdAt":new Date(req.params.createdAt)}).exec(function(err, record) {
//     if(err) {
//       res.send('error has occured:'+err);
//     } else {
//       console.log('record:'+JSON.stringify('record by date:'+record));
//       if(record.length !== 0) {
//           res.json(record);
//       } else {
//           res.json([record]);
//       }

//       }
//   })
// });

// app.get('/records/bydateandname/:createdAt/:name',function(req, res) {
//   console.log("params from $http.get:"+JSON.stringify(req.params));
//   Record.find({"createdAt":new Date(req.params.createdAt), 'name':req.params.name}).exec(function(err, record) {
//     if(err) {
//       res.send(err);
//     } else {
//       console.log('record:'+JSON.stringify(record));
//       res.json(record);
//       }
//   })
// });

// app.get('/records/month/:date1/:date2',function(req, res) {
//   Record.find({'createdAt':{"$gte":req.params.date1,
//   "$lt":req.params.date2}}).exec(function(err, records) {
//     if(err) {
//       res.send('error has occured');
//     } else {
//       console.log('month in record:'+JSON.stringify(records));
//       res.json(records);
//     //   if(records.lebngth !== 0) {
//     //       console.log(JSON.stringify('records by period:'+records));
//     //   res.json(records);
//     // } else {
//     //   res.json([records]);
//     // }
//   }
//   });
// });

// app.post('/records', function(req,res) {
//   var newRecord = new Record();
// console.log("post:"+JSON.stringify(req.body));
//   newRecord.name = req.body.name;
//   newRecord.value = req.body.value;
//   newRecord.income = req.body.income;
//   newRecord.img = req.body.img;
//   newRecord.createdAt = req.body.createdAt;
//   newRecord.details = req.body.details;
//   newRecord.save(function(err,record) {
//     if(err) {
//       res.send("error");
//     } else {
//       console.log('record:'+JSON.stringify(record));
//       res.send(record);
//     }
//   });
// });

// app.put('/records', function(req,res) {
//   Record.findOneAndUpdate({
//     _id:req.body._id
//   }, req.body, function(err, record) {
//     if(err) {
//       res.send({status:'error', msg:'error'});
//     } else {
//       console.log('dailyRecords:'+record);
//       res.send({status:'success', msg:'record is updated'});
//     }

//       }
//     );
// });

// app.delete('/records/:recordId', function(req,res) {
//   console.log('record delete:'+JSON.stringify(req.params));
//   Record.findByIdAndRemove(req.params.recordId, function(err, record) {
//     if(err) {
//       res.send({status:'error', msg:'error'});
//     } else {
//       console.log('dailyRecords:'+record);
//       res.send({status:'success', msg:'record is updated'});
//     }

//       }
//     );
// });

