import express from 'express'
import dotenv from 'dotenv'
import notFountMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import connectDB from './db/connect.js'
const app = express() 
dotenv.config()

// middlewares
notFountMiddleware , errorHandlerMiddleware

app.get('/',(req,res)=>{
    res.send('hello world!')
})

// Using Middlewares 
app.use(notFountMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000 

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`server is sucessfully running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

