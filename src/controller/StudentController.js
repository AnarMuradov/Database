import { studentModel } from "../model/StudentModel.js";


export const getAllStudent = async (req, res) => {
    try {
      const student = await studentModel.find({});
      res.send(student);
    } catch (error) {
      res.send("");
    };
  }


  export const getStudentByID =  async (req, res) => {
    const { id } = req.params;
    const student = await studentModel.findById(id);
    res.send(student);
  }


  export const createStudent = async (req, res) => {
    try {
      const { name, age } = req.body;
      const newStudent = new studentModel({ name, age });
      await newStudent.save();
      res.send("posted");
    } catch (error) {
      res.send("");
    }
  
    res.send(error.message);
  }

  export const uptadeStudentByID = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const student = await studentModel.findByIdAndUpdate(id, { name, age });
    res.send(student);
  }

  export const deleteStudentByID = async (req, res) => {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    res.send("silindi");
  }