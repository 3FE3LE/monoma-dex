import {Schema, model, models} from "mongoose"

const userSchema = new Schema({
  email: {
    type : String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8,'Minimum 8 characters'],
    select: false 
  },
  fullName: {
    type:String ,
    required: [true, "Full name y required"],
    maxLength: [50,'Maximum 50 characters'],
    minLength: [3,'Minimum 3 characters']
  }
})
const User = models.User|| model('User', userSchema)
export default User;