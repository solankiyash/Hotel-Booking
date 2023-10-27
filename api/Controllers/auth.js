import { createError } from "../../Utils/error.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";

export const register = async (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        res.status(200).send("User has been created")
    } catch (error) {
        next(error)
    }
}

export const login = async (req,res,next) => {

    try {
        const user = await User.findOne({email:req.body.email})

        if(!user) return next(createError(400,"email is not valid"))

        const ispasswordcorrect = await bcrypt.compare(req.body.password,user.password)
        console.log(ispasswordcorrect)
        if(!ispasswordcorrect) return next(createError(401,"password is invalid"))

        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

        const {password,isAdmin,...otherDetails} = user._doc

        res.status(200).json({...otherDetails})
    } catch (error) {
        next(error)
    }
}