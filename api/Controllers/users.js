
import Hotels from "../models/Hotels.js"
import User from "../models/User.js"

export const createUser = async(req,res,next) => {
    
    const newHotel =  new User(req.body)
    try {
        const saveuser = await newHotel.save()
        res.status(200).json(saveuser)
    } catch (error) {
        next(error)
    }
}

export const UpdateUser = async(req,res,next) => {
    
    try {
        const UpdatesaveUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdatesaveUser)
    } catch (error) {
        next(error)
    }
}
export const DeleteUser = async(req,res,next) => {
    
    try {
        const DeleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been delete")
    } catch (error) {
        next(error)
    }
}
export const GetUser = async(req,res,next) => {
    
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
export const GETUsers = async(req,res,next) => {
    
    try {
        const users = await User.find(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}