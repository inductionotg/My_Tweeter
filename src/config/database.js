import  mongoose from 'mongoose'
import  configuration  from './config.js'
export const connect = async() =>{
    await mongoose.connect( configuration .MONGO_URL);
}

