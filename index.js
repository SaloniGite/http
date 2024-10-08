const http = require('http')
const server = http.createServer(function(req,res){
//    res.end("helllooooo")
   console.log("meoooo meoooo")   
   if (req.url == '/profile'){
    res.end("its my profile")
}

if (req.url == '/accoount'){
    res.end("its my acccount")
}
//    console log works when each time the server gets the request 
})




server.listen(3000 , function(){
    console.log("the end ")
    //  hwhen respnose is sent each time

})