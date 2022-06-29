var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Hellow World!!!</h1>", function(error){
    if(error){
        return console.error(error);
    }else{
        return console.log("File created successfully");
    }

});

const imgRef = 'https://raw.githubusercontent.com/atharnaqvi/jobInterview/master/images/img-home.jpg';

https.get(imgRef, function(response){
    response.pipe(fs.createWriteStream(__dirname + '/mainImage.jpg'))
});