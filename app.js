const express=require("express")
const mongoose=require("mongoose")



const app=express()


app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/",function(req,res){
 res.render("home")
})

app.get("/aboutus",function(req,res){
    res.render("aboutus")
})
app.get("/contactus",function(req,res){
    res.render("contactus")
})

app.listen(5000,function(){
    console.log("Server started at the port 5000")
})


