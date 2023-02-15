import Likes from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository{
    constructor(){
        super(Likes)
    }
}

export default LikeRepository