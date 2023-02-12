const { TweetRepository } = require('../repository/index')

class TweetService {

    constructor(){
        this.tweetRepository = new TweetRepository()
    }

    async create(data){
        try {
            const content = data.content 
            const tags = content.match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags
            console.log(tags)
            const tagSub = tags.map((tag)=>tag.substring(1))
            console.log(tagSub)
            const tweet = await this.tweetRepository.createTweet(data)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = TweetService