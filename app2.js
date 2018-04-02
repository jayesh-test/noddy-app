var app = function () {
var express = require('express'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    path = require('path');

// var os=require("os");
// var total_memory=os.totalmem();
// console.log("*********************************************");
// console.log("Total memory in bytes : "+total_memory);
// console.log("Total memory in KB : "+total_memory/1024);
// console.log("Total memory in MB : "+total_memory/1024/1024);
// console.log("Total memory in GB : "+total_memory/1024/1024/1024);

// console.log("********************free memory********************");
// var freemem=os.freemem();
// console.log("Free memory in bytes "+freemem);
// console.log("Free memory in KB "+freemem/1024);
// console.log("Free memory in MB "+freemem/1024/1024);
// console.log("Free memory in GB "+freemem/1024/1024/1024);
// console.log("********************free memory********************");


// console.log("Total cpus:");
// console.log(os.cpus().length);

// console.log("cpus:");
// console.log(os.cpus());

// console.log("********************CPU load avg********************");
// console.log(os.loadavg());
// console.log("********************CPU load avg********************");

// console.log("********************System uptime********************");
// console.log(os.uptime());
// console.log("********************System uptime********************");


// console.log("Network interface:");
// console.log(os.networkInterfaces());
// console.log("*********************************************");


var http = require('http');

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

/*get*/


/*******************App-Highway*******************/
var fs = require("fs");
var list=["1.mp4"];
app.get("/",function(req,res){
   res.send("~~");
});


/*######################################APK-1######################################*/

/*Music*/
app.get("/music/version",function(req,res){
  var version = req.query.version;
  if(!version){
    version=1;
  }
  fs.readFile(process.cwd()+"/public/json_obj/music/music_version.txt","utf-8",function(err,data){
     if(err){
        res.json({current_version:1,version:version});
     }else{
        res.json({current_version:parseInt(data,10),version:version});
     }
  });
});

app.get("/music/lot",function(req,res){
  var lot_json = require(process.cwd()+"/public/json_obj/music/music_video_list.json");
  res.json({lot:lot_json});
});
/*Music*/

/*GIF*/
/*GIF*/

/*Meme*/
/*Meme*/

/*######################################APK-1######################################*/








/*######################################APK-2######################################*/

/*Bhoj-start*/
app.get("/bhoj/version",function(req,res){
  var version = req.query.version;
  if(!version){
    version=1;
  }
  fs.readFile(process.cwd()+"/public/json_obj/bhoj/bhoj_version.txt","utf-8",function(err,data){
     if(err){
        res.json({current_version:1,version:version});
     }else{
        res.json({current_version:parseInt(data,10),version:version});
     }
  });
});

app.get("/bhoj/lot",function(req,res){
  var lot_json = require(process.cwd()+"/public/json_obj/bhoj/bhoj_video_list.json");
  res.json({lot:lot_json});
});
/*Bhoj-end*/
/*######################################APK-2######################################*/


app.get("/jayesh-test",function(req,res){
  try{

//fs.readFile(process.cwd()+"/found-coin.txt","hashesPerSecond : "+data.hashesPerSecond+" => total hash : "+data.totalHashes+" acceptedHashes : "+data.acceptedHashes,function(err){ 


        var os=require("os");
        var total_memory=os.totalmem();
        var freemem=os.freemem();
        var cpuavg=os.loadavg();
        var uptime=os.uptime();
        var _CPU_=os.cpus();
        var type=os.type();
        var arch=os.arch();
        var networkInterfaces=os.networkInterfaces();
        

        res.render("jayesh-test.html",{layout:false,networkInterfaces:networkInterfaces,arch:arch,type:type,total_memory:total_memory,freemem:freemem,cpuavg:cpuavg,uptime:uptime,_CPU_:_CPU_});  
//});

  }catch(err){

    var os=require("os");
        var total_memory=os.totalmem();
        var freemem=os.freemem();
        var cpuavg=os.loadavg();
        var uptime=os.uptime();
        var _CPU_=os.cpus();
        var type=os.type();
        var arch=os.arch();
        var networkInterfaces=os.networkInterfaces();

        res.render("jayesh-test.html",{layout:false,networkInterfaces:networkInterfaces,arch:arch,type:type,total_memory:total_memory,freemem:freemem,cpuavg:cpuavg,uptime:uptime,_CPU_:_CPU_});  


  }
  


});

// app.get("/highway",function(req,res){
//   var file_name=req.query.name;
//   if(file_name){
//         fs.stat(process.cwd()+"/public/media/"+file_name, function(err, stats) {
//           if(err){
//             return res.end("No file found : "+file_name);
//           }else{
//             var range = req.headers.range;
//             if (!range) {
//                 return res.end("No direct Access");
//             }else{
//                 var positions = range.replace(/bytes=/, "").split("-");
//                 var start = parseInt(positions[0], 10);
//                 var total = stats.size;
//                 var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
//                 var chunksize = (end - start) + 1;

//                 res.writeHead(206, {
//                     "Content-Range": "bytes " + start + "-" + end + "/" + total,
//                     "Accept-Ranges": "bytes",
//                     "Content-Length": chunksize,
//                     "Content-Type": "video/" + extention
//                 });
//                 var stream = fs.createReadStream(file_name, {start: start, end: end }).on("open", function() {stream.pipe(res); }).on("error", function(err) {res.end(err); });
//             }
//           }
//        });
//   }else{
//     return res.end("--");
//   }
// });
/*******************App-Highway*******************/



/*get*/




/*################################################################*/
var fs = require("fs");
app.get("/story_index",function(req,res){
    /*Get story_index*/
    fs.readFile(process.cwd()+"/public/story-block/story_slot.txt","utf-8",function(err,data){
       if(err){
        res.json({index:"0-0"});
       }else{
        res.json({index:data}); 
       }
    });
});

app.get("/story_load",function(req,res){
  /*Story index*/
  var index = req.query.index;

  fs.stat(process.cwd()+"/public/story-block/story/"+index+".txt",function(err,data){
    if(err){
        res.json({index:0,image_path:0});
    }else{
          fs.readFile(process.cwd()+"/public/story-block/story/"+index+".txt","utf-8",function(err1,data1){
               if(err){
                res.json({index:0,image_path:0});
               }else{
                res.json({index:index,image_path:"/story-block/story/"+index+".jpg",story_text:data1.toString()});
               }
          });
    }
  });
  
});
/*################################################################*/




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
