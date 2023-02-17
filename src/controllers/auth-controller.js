import UserService from "../service/user-service.js";

const userService = new UserService()
export const signUp = async(req,res) =>{
    try {
        const result = await userService.signUp({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })

        return res.status(201).json({
            success:true,
            messgae:'User Created successfully',
            response:result,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            messgae:'User not Created successfully',
            response:{},
            err:{error}
        })
    }
}