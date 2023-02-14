//const { TweetRepository, HashTagRepository } = require('../repository/index')
import TweetRepository from '../repository/tweet-repository.js'
import HashTagRepository from '../repository/hashtag-repository.js'
class TweetService {

    constructor(){
        this.tweetRepository = new TweetRepository()
        this.hashtagRepository = new HashTagRepository()
    }

    async create(data){
        try {
            const content = data.content 
            const tags = content.match(/#[a-zA-Z0-9_]+/g) //this regex extracts hashtags
            console.log(tags)
            const tagSub = tags.map((tag)=>tag.substring(1)).map((tag)=>tag.toLowerCase())
            console.log("sdsdsd",tagSub)
            const tweet = await this.tweetRepository.createTweet(data)
            let alreadyPresentedTags = await this.hashtagRepository.findByName(tagSub)
            console.log("alreadyPresentedTags111",alreadyPresentedTags)
            let titleOfPresentedtags = alreadyPresentedTags.map(tag=>tag.title)
            console.log("alreadyPresentedTags",titleOfPresentedtags)

            let newTags = tagSub.filter(tag=>!titleOfPresentedtags.includes(tag))
            console.log("newTags1",newTags)
            newTags = newTags.map(tag=>{
                return { 
                    title:tag,
                    tweets:[tweet.id]
                }
            })
            console.log("newTags2",newTags)
            const response = await this.hashtagRepository.bulkCreate(newTags)
            alreadyPresentedTags.forEach((tag)=>{
                tag.tweets.push(tweet.id)
                tag.save()
            })
            return tweet
        } catch (error) {
            console.log(error)
        }
    }
}

export default TweetService