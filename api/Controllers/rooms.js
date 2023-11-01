import Room from "../models/Room.js"
import Hotels from "../models/Hotels.js"

 export const createRoom = async(req,res,next) => {
   const hotelId = req.params.hotelid;
   const newRoom = new Room(req.body)
   
   try {
    const savedRoom = await newRoom.save()
    try {
        await Hotels.findByIdAndUpdate(hotelId,{$push :{room:savedRoom._id}})
    } catch (error) {
        next(error)
        
    }
    res.status(200).json(savedRoom)
   } catch (error) {
    next(error)
   }
 }  


 export const UpdateRooms = async(req,res,next) => {
    
    try {
        const UpdatesaveRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdatesaveRoom)
    } catch (error) {
        next(error)
    }
}
export const DeleteRoom = async(req,res,next) => {
   const hotelId = req.params.hotelid;
    
    try {
         await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotels.findByIdAndUpdate(hotelId,{$pull :{room:req.params.id}})
        } catch (error) {
            next(error)
            
        }
        res.status(200).json("Room has been delete")
    } catch (error) {
        next(error)
    }
}
export const GetRoom = async(req,res,next) => {
    
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}
export const GETRooms = async(req,res,next) => {
    
    try {
        const rooms = await Room.find(req.params.id)
        res.status(200).json(rooms)
    } catch (error) {
        next(error)
    }
}