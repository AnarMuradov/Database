import express from 'express'
import mongoose from 'mongoose'
import { studentRouter } from './src/router/StudentRouter.js'
import { userRouter } from './src/router/UserRouter.js'
const app = express()
const port = 3000

app.use(express.json())
 
app.use("/student",studentRouter)
app.use("/user",userRouter)
  
    mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
      .then(() => console.log('Connected!')) 
      .catch(()=>console.error("Not connected!"))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

 