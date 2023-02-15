import {LikeRepository, TweetRepository} from "../repository/index.js";
import Tweet from '../models/tweet.js'
class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
     }

    async toggleLike(modelId, modelType, userId){ //api/vi/likes/toggle?id=modelId&type=Tweet
        console.log("modelId",modelId,"modelType" ,modelType,"userId",userId)
        if(modelType === 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId)
            console.log("likeable",likeable)
        }
        else if(modelType=== 'Comment')
        {
            //TODO
            //var likeable 
        }
        else{
            throw new Error('unKnown Model Type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        console.log("exists",exists)
        if(exists){
            console.log("exists")
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove()
            var isAdded = false
        }
        else{
            console.log("Not exists")
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded = true
        }
        return isAdded
    }
}

export default LikeService