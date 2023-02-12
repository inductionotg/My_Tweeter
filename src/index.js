const express = require('express')

const app = express()

const { PORT } = require('./config/config')
const connect = require('./config/database')

const TweetService = require('./service/tweet-service')
const tweet = new TweetService()
const Tweet = require('./models/tweet')
const startAndSetupServer = async() =>{

    app.listen(PORT, async()=>{
        console.log('Server started on',`${PORT}`)
        await connect()
        console.log('Mongo connected')
        /*
        tweet.create({
            content:'hello india , how are you #india'
        })
        */
       const res=await Tweet.find({
        content:['hello India,#BGT','Hello']
       })
       console.log(res)
    })
}

startAndSetupServer()