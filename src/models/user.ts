import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
  email: {
    type : String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false 
  },
  fullName: {
    type:String ,
    required: [true, "Full name y required"],
    maxLength: 50,
    minLength: 3
  }
})
const User = models.User|| model('User', userSchema)
export default User;