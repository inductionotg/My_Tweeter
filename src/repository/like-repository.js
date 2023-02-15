import Likes from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Likes)
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Likes.findOne(data)
            console.log("likerepo",like)
            return like
        } catch (error) {
            throw error
        }
    }
}

export default LikeRepository