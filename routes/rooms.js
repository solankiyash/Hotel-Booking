import express from "express"
import { verifyAdmin } from "../Utils/verifyToken.js"
import { DeleteRoom, GETRooms, GetRoom, UpdateRooms, createRoom } from "../Controllers/rooms.js"

const router = express.Router()

router.post("/:hotelid",createRoom)
// UPDATE
router.put("/:id",verifyAdmin,UpdateRooms)

// DELETE

router.delete("/:id/:hotelid",verifyAdmin,DeleteRoom)

//GET

router.get("/:id",GetRoom)


//GET ALL

router.get("/",GETRooms)


export default router