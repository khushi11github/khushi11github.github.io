import http from 'http';




let server = http.createServer((req,res)=>{
    res.send("Request Received ");
    res.send("Request Recievd")

})



server.listen(8080,()=>{
    console.log("server started at port at 8080");
})

