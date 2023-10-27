import express from "express"
import Hotels from "../models/Hotels.js"
import { createError } from "../../Utils/error.js"
import { DeleteHotels, GETHotels, GetHotel, UpdateHotels, createHotels } from "../Controllers/hotels.js"

const router = express.Router()

// POST
router.post("/",createHotels)
// UPDATE
router.put("/:id",UpdateHotels)

// DELETE

router.delete("/:id",DeleteHotels)

//GET

router.get("/:id",GetHotel)


//GET ALL

router.get("/",GETHotels)

export default router