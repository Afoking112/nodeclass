const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    tittle:{type:String,require:true},
    input:{type:String,require:true}
})
const usermodel = mongoose.model("userCollection",userschema)


module.exports = {usermodel}
