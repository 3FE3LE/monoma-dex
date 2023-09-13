import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
  email: {
    type : String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false 
  },
  fullName: {
    type:String ,
    required: true,
    maxLength: 50,
    minLength: 3
  }
})
const User = models.User|| model('User', userSchema)
export default User;