import  express from 'express'
import bodyParser from 'body-parser'
const app = express()

import configuration  from './config/config.js'
import {connect} from './config/database.js'

import TweetService from './service/tweet-service.js' 
import apiRoutes from './routes/index.js'
const tweeto = new TweetService()
/*
const tweet = new TweetService()
const Tweet = require('./models/tweet')
const HashTagRepository = require('./repository/hashtag-repository')
const hash = new HashTagRepository()
*/
const startAndSetupServer = async() =>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',apiRoutes)
    app.listen(configuration.PORT, async()=>{
        console.log(configuration)
        console.log('Server started on',`${configuration.PORT}`)
        await connect()
        console.log('Mongo connected')
       
        /*
        let res = await hash.findByName(['bgt1'])
        res = res.map((tag)=>tag.title)
        console.log("uui",res)
        */
        /*
        const res = await tweeto.create({
            content:'#Code #MOUSE?'
        })
        
       console.log(res)*/
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