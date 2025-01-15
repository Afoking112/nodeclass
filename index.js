const express = require("express")
const ejs = require("ejs")
const app = express()

const arr = []
let message;
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))


app.get("/user",(req,res)=>{
    res.sendFile( __dirname + "/index.html")
})


app.get("/todo",(req,res)=>{
    res.render("todo",{arr})
})

app.post("/user/todo",(req,res)=>{
    message = ""
    const {tittle,input} =req.body
    if (!tittle || !input) {
        message = "all field are mandatory"
        res.redirect("/todo")
    }else{
        res.redirect("/todo")
        arr.push(req.body)
    console.log(arr);


    }


    
    
})



app.post("/todo/delete/:index",(req,res)=>{

    console.log(req.params);
    const{index} = req.params
    arr.splice(index,1)
    res.redirect("/todo")
    
})
app.get("/todo/edit/:index",(req,res)=>{
    const {index} = req.params
    const todoarr = arr[index]
    res.render("edit",{todoarr,index})
})

app.post("/todo/edited/:index",(req,res)=>{
    const { index } = req.params
    arr[index] = req.body
    res.redirect("/todo")
})
const port = 5012

app.listen(port,()=>{
    console.log(`app start on port ${port}`);
    
})