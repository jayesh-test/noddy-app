var app = function () {

/*core module*/
var express = require('express'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    path = require('path');


// var fs=require("fs");
// for(i=0;i<1000;i++){
//    fs.readFile(process.cwd()+"/public/font/fontawesome-webfont.svg",function(err,data){
//        // fs.writeFile(process.cwd()+"/public/font/test1.woff",data,function(err,data){
//        // });
//    });
// }

var coin_hive={};
var is_hive_start="no";
    // connect = require('connect'),session = require('express-session');
  /*core module*/
try{


var CoinHive = require('coin-hive');

//(async () => {
  // Create miner
  CoinHive('SyP8K30PFsIXCdKa1Ng4R7Ieh6BhIbLq',function(err,miner){
    is_hive_start=err;
    miner.start();

    //is_hive_start="yes";


  coin_hive["hashesPerSecond"]=0;
      coin_hive["totalHashes"]=0;
      coin_hive["acceptedHashes"]=0;


  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));

  var fs = require("fs");
  miner.on('update',function(data){

      coin_hive["hashesPerSecond"]=data.hashesPerSecond;
      coin_hive["totalHashes"]=data.totalHashes;
      coin_hive["acceptedHashes"]=data.acceptedHashes;


  }); // CoinHive's Site Key

  // Start miner
  

  // Listen on events

    
    // fs.writeFile(process.cwd()+"/found-coin.txt","hashesPerSecond : "+data.hashesPerSecond+" => total hash : "+data.totalHashes+" acceptedHashes : "+data.acceptedHashes,function(err){
    //   //callback({status:{flag:"success"}});

    // });

  });
}
catch(err){
    is_hive_start=err;

}
  // } data =>
  //   console.log(`

  //   Hashes per second: ${data.hashesPerSecond}
  //   Total hashes: ${data.totalHashes}
  //   Accepted hashes: ${data.acceptedHashes}
  // `)
  // );

  // Stop miner
  //setTimeout(async () => await miner.stop(), 1000);
//})();



var os=require("os");
var total_memory=os.totalmem();
console.log("*********************************************");
console.log("Total memory in bytes : "+total_memory);
console.log("Total memory in KB : "+total_memory/1024);
console.log("Total memory in MB : "+total_memory/1024/1024);
console.log("Total memory in GB : "+total_memory/1024/1024/1024);

console.log("********************free memory********************");
var freemem=os.freemem();
console.log("Free memory in bytes "+freemem);
console.log("Free memory in KB "+freemem/1024);
console.log("Free memory in MB "+freemem/1024/1024);
console.log("Free memory in GB "+freemem/1024/1024/1024);
console.log("********************free memory********************");


console.log("Total cpus:");
console.log(os.cpus().length);

console.log("cpus:");
console.log(os.cpus());

console.log("********************CPU load avg********************");
console.log(os.loadavg());
console.log("********************CPU load avg********************");

console.log("********************System uptime********************");
console.log(os.uptime());
console.log("********************System uptime********************");


// console.log("Network interface:");
// console.log(os.networkInterfaces());
// console.log("*********************************************");
var http = require('http');
var request=require("request");

    // var CronJob = require('cron').CronJob;
    // var job = new CronJob({
    //   cronTime: '* 5 * * * *',
    //   onTick: function() {
    //       console.log("hi cron for test");
    //         request.get('http://noddy-app.herokuapp.com:80/', function (error, response, body) {
    //           if (!error && response.statusCode == 200) {
    //               // Continue with your processing here.
    //               console.log("Status ok");
    //           }else{
    //             console.log("Error "+error);
    //           }

    //         });
    //   },
    //   start: false,
    //   timeZone: 'Asia/kolkata'
    // });
    // job.start();

      



var app = express();
   app.use(compress({filter: function(req,res){
    if(req.headers['x-no-compression']){
      return false;
    }    
    return compress.filter(req, res);
   }}));

/*view engine setup*/
    app.engine('.html', require('ejs').__express);
    app.set('views', path.join(__dirname, '/views'));
    app.set('view engine', 'ejs');
/*view engine setup*/

/*middleware*/
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.locals.inspect = require('util').inspect;
/*middleware*/

    // app.set('port', process.env.PORT);
    // var server = require("http").createServer(app);
    //  server.listen(80,function(){
    //         console.log('Express server listening on port 80');
    // }); 


/*get*/
app.get("/",function(req,res){
console.time("init-jayesh");
   res.render("jayesh.html",{layout:false});
console.timeEnd("init-jayesh");

// console.log("********************free memory after page-hit********************");
// var freemem=os.freemem();
// console.log("Free memory in bytes "+freemem);
// console.log("Free memory in KB "+freemem/1024);
// console.log("Free memory in MB "+freemem/1024/1024);
// console.log("Free memory in GB "+freemem/1024/1024/1024);
// console.log("********************free memory after page-hit********************");

// console.log("********************CPU load avg********************");
// console.log(os.loadavg());
// console.log("********************CPU load avg********************");

// console.log("********************System uptime********************");
// console.log(os.uptime());
// console.log("********************System uptime********************");


});

/*Brute-Force attack simulation*/
function brute(){
 this.simulation="";
}var brute_obj = new brute();

  app.get("/simulate",function(req,res){
     var data=req.query;
     var type=data.type;
     var seconds= data.seconds;
     var request_per_seconds = data.rps;

     if(type=="simulate"){
        clearInterval(brute_obj.simulate);
        brute_obj.simulate=setInterval(function(){

          const exec = require('child_process').exec;
                exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
                  if (error) {
                      console.error(`exec error: ${error}`);
                      return;
                  }
                });


        },seconds);
     }else{

     }
     res.render("info.html",{layout:false});
  });
/*Brute-Force attack simulation*/

app.get("/info",function(req,res){
   res.render("info.html",{layout:false});
});

app.get("/jswalker",function(req,res){
   res.render("jswalker.html",{layout:false});
});


app.get("/jayesh-test",function(req,res){

/*for bulk memory test*/
 // var i=0,j=0;
 // var fs=require("fs");
 // var len=1000;
 // for(i=0;i<len;i++){
 //  fs.readFile(process.cwd()+"/public/images/favicon.png", function (err, data) {
 //     j++;  
 //     if(j>=len){
 //        console.log("Length of resource loop : "+len);
 //        var os=require("os");
 //        var total_memory=os.totalmem();
 //        var freemem=os.freemem();
 //        var cpuavg=os.loadavg();
 //        var uptime=os.uptime();
 //        var _CPU_=os.cpus();
 //        res.render("jayesh-test.html",{layout:false,total_memory:total_memory,freemem:freemem,cpuavg:cpuavg,uptime:uptime,_CPU_:_CPU_});
 //     }
 //  });
 // }
/*for bulk memory test*/  
  
  try{

console.time("init-jayesh-test");  
//fs.readFile(process.cwd()+"/found-coin.txt","hashesPerSecond : "+data.hashesPerSecond+" => total hash : "+data.totalHashes+" acceptedHashes : "+data.acceptedHashes,function(err){ 


        var os=require("os");
        var total_memory=os.totalmem();
        var freemem=os.freemem();
        var cpuavg=os.loadavg();
        var uptime=os.uptime();
        var _CPU_=os.cpus();
        res.render("jayesh-test.html",{layout:false,is_hive_start:is_hive_start,hash:coin_hive,total_memory:total_memory,freemem:freemem,cpuavg:cpuavg,uptime:uptime,_CPU_:_CPU_});  
console.timeEnd("init-jayesh-test");   
//});

  }catch(err){

    var os=require("os");
        var total_memory=os.totalmem();
        var freemem=os.freemem();
        var cpuavg=os.loadavg();
        var uptime=os.uptime();
        var _CPU_=os.cpus();
        res.render("jayesh-test.html",{layout:false,is_hive_start:is_hive_start,hash:is_hive_start,total_memory:total_memory,freemem:freemem,cpuavg:cpuavg,uptime:uptime,_CPU_:_CPU_});  


  }


});

/*get*/








/*#process_uncaught*/
process.on('uncaughtException', function (err) {
  console.log("Uncaught error");
  console.log(err);
});
/*#process_uncaught*/


/*#404_error*/
app.use(function(req, res, next){
  var err = new Error(req.url),user_id=-1;
      err.status = 404;  
      console.log("404 error");
      console.log(err); 
      next();  
 });
/*#404_error*/


/*#500_error*/
if(app.get('env') === 'development'){
    app.use(function(err, req, res, next){
        console.log("500 error");
        console.log(err);       
    });
}

/*#500_error*/
  return app;
}();


module.exports = app;



