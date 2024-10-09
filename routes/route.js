let express=require("express")
const { register} = require("../controllers/usercontroller")

let route=new express.Router()
route.post('/register',register)

module.exports=route
