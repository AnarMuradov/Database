import express from "express";
import {
  createuser,
  deleteuserByID,
  getAlluser,
  getuserByID,
  uptadeuserByID,
} from "../controller/UserController.js";

export const userRouter = express.Router();

userRouter.get("/", getAlluser);
userRouter.get("/:id", getuserByID);

userRouter.post("/", createuser);

userRouter.put("/:id", uptadeuserByID);

userRouter.delete("/:id", deleteuserByID);
