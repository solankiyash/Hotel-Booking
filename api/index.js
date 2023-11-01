import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authrouter from "./routes/auth.js"
import usersrouter from "./routes/user.js"
import hotelsrouter from "./routes/hotels.js"
import roomsrouter from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"



const app = express()
dotenv.config()

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connect to mongodb")
    } catch (error) {
        throw error
    }
    
}


mongoose.connection.on("disconnected",()=>{
    console.log("mongodb is disconnect")
})

app.get("/",(req,res)=>{
    res.send("hello f")
})

// middel were
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth",authrouter)
app.use("/api/users",usersrouter)
app.use("/api/hotels",hotelsrouter)
app.use("/api/rooms",roomsrouter)



app.listen(8000,()=>{
    connect()
    console.log("Connecting...")
})

