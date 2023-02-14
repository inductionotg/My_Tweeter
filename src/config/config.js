import  config  from "dotenv"
import  dotenv from 'dotenv'

dotenv.config()

const connection={
    PORT : process.env.PORT,
    MONGO_URL : process.env.MONGO_URL
}
export default connection

