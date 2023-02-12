const express = require('express')

const app = express()

const { PORT } = require('./config/config')
const connect = require('./config/database')

const TweetService = require('./service/tweet-service') 
const tweeto = new TweetService()
const tweet = new TweetService()
const Tweet = require('./models/tweet')
const HashTagRepository = require('./repository/hashtag-repository')
const hash = new HashTagRepository()
const startAndSetupServer = async() =>{

    app.listen(PORT, async()=>{
        console.log('Server started on',`${PORT}`)
        await connect()
        console.log('Mongo connected')
        const res =await  tweeto.create({
            content:'Is #working #tweet #virat #rohit'
        })
        console.log(res)
        /*
        let res = await hash.findByName(['bgt1'])
        res = res.map((tag)=>tag.title)
        console.log("uui",res)
        */
        /*
        const res = await tweet.create({
            content:'hello #ritesh #badrealtionship #novalue'
        })
        */
       // console.log(res)
       /*
       const res=await Tweet.find({
        content:['hello India,#BGT','Hello']
       })*/
       /*
       const res = await hash.bulkCreate(
        [
            {
                title:'bgt',
                tweets:[]
            },
            {
                title:'bgt1',
                tweets:[]
            },
            {
                title:'bgt2',
                tweets:[]
            }
        ]
       )

       console.log(res)
       */
    })
}

startAndSetupServer()