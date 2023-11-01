import express from "express"
import {UpdateUser,DeleteUser,GetUser,GETUsers} from "../Controllers/users.js"
import {verifyAdmin, verifyToken, verifyUser} from "../Utils/verifyToken.js"

const router = express.Router()



//authenticated

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user you are logged in")
// })
// router.get("/checkuser/:id",verifyUser,(req,res)=>{
//     res.send("hello user you are login and you can delete your account!")
// })
// router.get("/checkAdmin/:id",verifyAdmin,(req,res)=>{
//     res.send("hello user you are login and you can delete all accounts!")
// })
// UPDATE
router.put("/:id",verifyUser,UpdateUser)

// DELETE

router.delete("/:id",verifyUser,DeleteUser)

//GET

router.get("/:id",verifyUser,GetUser)


//GET ALL

router.get("/",verifyAdmin,GETUsers)

export default router


