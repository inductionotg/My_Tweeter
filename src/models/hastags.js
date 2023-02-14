import  mongoose from 'mongoose'

const hashtagSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    ]
},{timestamps:true})

hashtagSchema.pre('save',function(next){

    this.title = this.title.toLowerCase()
    console.log(this)
    next()
})

const HashTag = mongoose.model('HashTag',hashtagSchema)
export default HashTag