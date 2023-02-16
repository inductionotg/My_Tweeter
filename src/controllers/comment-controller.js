import CommentService from "../service/comment-service.js";
const commentService = new CommentService()
export const createCommentController = async(req,res) => {
    try {
        const response =  await commentService.createComment(req.query.modelId,
                        req.query.modelType,
                        req.body.userId,
                        req.body.content)
        return res.status(200).json({
            success:true,
            message:'Comment created successfully',
            data : response,
            err :{} 
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Comment not created successfully',
            data : {},
            err :error 
        })
    }
}