import { userModel } from "../model/UserModel.js";


export const getAlluser = async (req, res) => {
    try {
      const user = await userModel.find({});
      res.send(user);
    } catch (error) {
      res.send("");
    };
  }


  export const getuserByID =  async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.send(user);
  }


  export const createuser = async (req, res) => {
    try {
      const { name, age } = req.body;
      const newuser = new userModel({ name, age });
      await newuser.save();
      res.send("posted");
    } catch (error) {
      res.send("");
    }
  
    res.send(error.message);
  }

  export const uptadeuserByID = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = await userModel.findByIdAndUpdate(id, { name, age });
    res.send(user);
  }

  export const deleteuserByID = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    res.send("silindi");
  }