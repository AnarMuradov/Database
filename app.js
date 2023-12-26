import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 3000

app.use(express.json())
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const studentModel =mongoose.model('azstudent',studentSchema)

app.get('/', async (req, res) => {
try {
  const student =await studentModel.find({})
  res.send(student)
} catch (error) {
  res.send("")
}3
  })

  app.get('/:id', async (req, res) => {
    const {id} =req.params
    const result = data.findById(x=>x.id === +id)
    res.send(result)

  })
   
  app.post('/', async(req, res) => {
    try {
      const {name,age} =req.body
      const newStudent =new studentModel({name,age})
      await newStudent.save()
      res.send("posted")
    } catch (error) {
      res.send("")
    }
   
    res.send(error.message)
  })
  
  app.put('/:id', async (req, res) => {
    const {id} =req.params
    const {name,age} =req.body
    const student = await studentModel.findByIdAndUpdate(id,{name,age})
    res.send("putlandi")
  })
  
  app.delete('/:id', async (req, res) => {
    const {id} =req.params
    const student = await studentModel.findByIdAndDelete(id)
    res.send("silindi")
  })
  
    mongoose.connect('mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/')
      .then(() => console.log('Connected!')) 
      .catch(()=>console.error("Not connected!"))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

 