const express = require("express")
const ejs = require("ejs")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const connect = require("./Dbconfig/Db.connect")
const userrouter = require("./Routes/User.routes")



let message;
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/", userrouter)




app.get("/user",(req,res)=>{
    res.sendFile( __dirname + "/index.html")
})




app.post("/user/todo", async(req,res)=> {
   
    const {tittle,input} =req.body
    if (!tittle || !input) {
        message = "all field are mandatory"
        res.redirect("/todo")
    }else{
        const user = await usermodel.create(req.body)
        if(user){
            res.redirect("/todo")
            
        }
   
    }


    
    
})



app.post("/todo/delete/:id",async(req,res)=>{
try {
    const { id } = req.params;
    await usermodel.findByIdAndDelete(id);
    res.redirect("/todo");
} catch (error) {
    console.log(error);
    
}
    console.log(req.params);
    
    
})
app.get("/todo/edit/:id",async(req,res)=>{
    try {
    const {id} = req.params
    const todoarr = await usermodel.findById(id)
    res.render("edit",{todoarr})
    } catch (error) {
        console.log(error);
        
    }
   
})

app.post("/todo/edited/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const {tittle,input} = req.body;
        await usermodel.findByIdAndUpdate(id,{tittle,input})
        res.redirect("/todo")
    } catch (error) {
        console.log(error);
        
        
    }
    
})

connect()

const port = 5012

app.listen(port,()=>{
    console.log(`app start on port ${port}`);
    
})