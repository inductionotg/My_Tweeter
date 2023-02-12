const mongoose = require('mongoose')
const {MONGO_URL} = require('./config')
console.log(MONGO_URL)
const connect = async() =>{
    await mongoose.connect(MONGO_URL);
}

module.exports = connect;