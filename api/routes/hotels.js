import express from "express"
import { DeleteHotels, GETHotels, GetHotel, UpdateHotels, createHotels,countByCity,countByType } from "../Controllers/hotels.js"
import { verifyAdmin } from "../Utils/verifyToken.js"

const router = express.Router()

// POST
router.post("/",verifyAdmin,createHotels)
// UPDATE
router.put("/:id",verifyAdmin,UpdateHotels)

// DELETE

router.delete("/:id",verifyAdmin,DeleteHotels)

//GET

router.get("/find/:id",GetHotel)


//GET ALL

router.get("/",GETHotels)
router.get("/countByCity",countByCity)
router.get("/countByType",countByType)


export default router