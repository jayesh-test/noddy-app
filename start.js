var app = require("./app");
var port = process.env.PORT || 5000;


var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

//console.log("CPU count = "+numCPUs);

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {  
  app.listen(port);  
}


/*single process*/
//  app.listen(port);
/*single process*/