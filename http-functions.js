module.exports = function getHTML (options, callback) {

    /* Add your code here */
    var https = require('https');      

  
  let dataBuff = '';

  


    https.get(options, function (response) {
        


        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
      
        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            dataBuff += data;
            
            // console.log('Chunk Received:', dataBuff + "\n");
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stre
        response.on('end', function() {
          console.log('Response stream complete.');
          callback(dataBuff);

        });
  
  })
  
}
