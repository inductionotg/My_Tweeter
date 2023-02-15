
import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js'
class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet)
    }

    async createTweet(data){
        try {
            const create = await Tweet.create(data)
            return create
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

    async find(id){
        try {
            const result = await Tweet.findById(id).populate({path:'likes'})
            return result
        } catch (error) {
            console.log(error)
        }
    }k

}

export default TweetRepository