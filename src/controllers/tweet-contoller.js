import TweetService from "../service/tweet-service.js";
const tweetService = new TweetService()
export const createTweet = async(req,res) => {
    try {
        const response = await tweetService.create(req.body)
        return res.status(201).json({
            success:true,
            message:'Successfully created the tweet',
            data : response,
            err :{} 
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to  create the tweet',
            data : {},
            err :error 
        })
    }
}