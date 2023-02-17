import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre('save',function (next){
    /**
     * Jo object pura banke atta hai , usko hum 'this' keyword se access kar sakte hai
     * Why we didn't use the arrow function? Because we want to have this,in normal fun only we can access this
     * Jo bhi schema ka result aya , usko hum this ke thorugh access kar sakte hai
     * this refers to the current document about to be saved.
     * We can use this method also,below commented one
     * const encryptedPassword = bcrypt.hashSync(this.password,SALT)
        this.password = encryptedPassword
        
     */
    console.log(this)
    const user = this;
    console.log("user",user,"this",this)
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password,SALT)
    user.password = encryptedPassword
    next();
})

const User = mongoose.model('User',userSchema)
export default User