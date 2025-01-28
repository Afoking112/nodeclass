const {usermodel} = require("../Model/User.model")



const todo = async(req,res)=>{
    const arr = await usermodel.find()
    console.log(arr);
    
    res.render("todo",{arr})
}

const Usertodo = async(req,res)=>{
    const {tittle,input} =req.body
    if (!tittle || !input) {
        message = "all field are mandatory"
        res.redirect("/todo")
    }else{
        const user = await usermodel.create(req.body)
        if(user){
            res.redirect("/todo")
            
        }
        res.render("todo",{arr})
   
}
}

module.exports = {Usertodo,todo}