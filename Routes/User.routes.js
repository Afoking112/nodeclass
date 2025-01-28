const express = require("express")
const userRouter = express.Router()
const {Usertodo,todo} = require("../Controllers/User.controller")


userRouter.get("/todo",todo)
userRouter.post("/user/todo",Usertodo)



module.exports = userRouter