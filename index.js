
const express= require("express");
const app = express();
app.get("/Hello", function(request, response){
    response.end("Hello World!");

}) 
app.listen(9000);
app.use(express.static("public"));