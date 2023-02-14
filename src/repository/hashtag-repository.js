import HashTag from '../models/hastags.js'

class HashTagRepository {

    async createHashTag(data){
        try {
            const create = await HashTag.create(data)
            return create
        } catch (error) {
            console.log(error)
        }
    }

    async bulkCreate(data){
        try {
            const tags = await HashTag.insertMany(data)
            return tags
        } catch (error) {
            console.log(error)
        }
    }
    async get(tagId){
        try {
            const tweet = await HashTag.findById(tagId)
            //console.log(tweet)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }
    async destroyHashTag(tagId){
        try {
            const tweet = await HashTag.findByIdAndRemove(id)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async findByName(data){
        console.log(data)
        try {
            const findName = await HashTag.find({
                title:data
            })
            console.log(findName)
            return findName
        } catch (error) {
            console.log(error)
        }
    }

}

export default HashTagRepository