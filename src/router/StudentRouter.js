import express from "express";
import { createStudent, deleteStudentByID, getAllStudent, getStudentByID, uptadeStudentByID } from "../controller/StudentController.js";

export const studentRouter = express.Router();

studentRouter.get("/", getAllStudent);

studentRouter.get("/:id",getStudentByID);

studentRouter.post("/",createStudent);

studentRouter.put("/:id", uptadeStudentByID);

studentRouter.delete("/:id", deleteStudentByID);
