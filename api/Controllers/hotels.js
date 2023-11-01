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
    const {max,min,limit,...others} =  req.query

    const maxx = parseInt(max)
    const minn = parseInt(min)  
    try {
        const hotels = await Hotels.find({...others,cheapestPrice:{$gt:minn ,$lte:maxx}}).limit(limit)
        res.status(200).json(hotels)
    } catch (error) {   
        next(error)
    }
}
export const countByCity = async(req,res,next) => {

    const cities = req.query.cities.split(",")
    
    try {
        const list = await Promise.all(cities.map((city)=>{
            return Hotels.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}
export const countByType = async(req,res,next) => {
    
    try {
       const hotelCount = await Hotels.countDocuments({type:"hotel"})
       const apartmentCount = await Hotels.countDocuments({type:"apartment"})
       const resortCount = await Hotels.countDocuments({type:"resort"})
       const villaCount = await Hotels.countDocuments({type:"villa"})
       const cabinCount = await Hotels.countDocuments({type:"cabin"})

        res.status(200).json([
            {type:"hotel",count:hotelCount},
            {type:"apartment",count:apartmentCount},
            {type:"resort",count:resortCount},
            {type:"villa",count:villaCount},
            {type:"cabin",count:cabinCount}
        ])
    } catch (error) {
        next(error)
    }
}