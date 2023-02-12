const { response } = require('express')
const Tweet = require('../models/tweet')

class TweetRepository{

    async createTweet(data){
        try {
            const create = await Tweet.create(data)
            return create
        } catch (error) {
            console.log(error)
        }
    }
    async get(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId)
            //console.log(tweet)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }
    async destroyTweet(tweetId){
        try {
            const tweet = await Tweet.findByIdAndRemove(id)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset,limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = TweetRepository