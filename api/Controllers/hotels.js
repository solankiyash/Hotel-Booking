import Hotels from "../models/Hotels.js"

export const createHotels = async(req,res,next) => {
    
    const newHotel =  new Hotels(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(error)
    }
}


export const UpdateHotels = async(req,res,next) => {
    
    try {
        const UpdatesaveHotel = await Hotels.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdatesaveHotel)
    } catch (error) {
        next(error)
    }
}
export const DeleteHotels = async(req,res,next) => {
    
    try {
        const DeleteHotel = await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been delete")
    } catch (error) {
        next(error)
    }
}
export const GetHotel = async(req,res,next) => {
    
    try {
        const Hotel = await Hotels.findById(req.params.id)
        res.status(200).json(Hotel)
    } catch (error) {
        next(error)
    }
}
export const GETHotels = async(req,res,next) => {
    
    try {
        const hotels = await Hotels.find(req.params.id)
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}