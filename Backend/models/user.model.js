const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
  name : { type: String, require: true},
  email: { type: String, require: true },
  password: { type: String, require: true },
  confirm_password: { type: String, required: true },
  user_type:{type:String,enum:["customer","seller"],required:true}
},{
  versionKey:"false"
});

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}