import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'


// App config

const PORT = process.env.PORT || 4000
const app = express()
connectDB()

// Initialize Middlewares 

app.use(express.json())
app.use(cors())

// API routes

app.get('/',(req,res)=>{
    res.send('API is running...')
})

app.use('/api/user',userRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
 
})