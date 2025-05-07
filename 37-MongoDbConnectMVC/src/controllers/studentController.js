import student from "../models/studentModel.js";
import mongoose from "mongoose";

export const addStudent = async (req, res) => {
  try {
    let newStudent = new student(req.body);
    await newStudent.save();

    return res.status(201).send("created student", newStudent);
  } catch (error) {
    return res.status(500).send("server error");
  }
};

export const getStudents = async (req, res) => {
  try {
    let students = await student.find();
    return res.status(201).send(students);
  } catch (error) {
    return res.status(500).send("server error");
  }
};

export const getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    let findStudent = await student.findById(id);

    if(!findStudent){
        res.status(404).send("student not found")
    }

    res.status(200).send(findStudent)

  } catch (error) {
    return res.status(500).send("server error");
  }
};


export const deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        let deleteStudent = await student.findByIdAndDelete(id)
        if(!deleteStudent){
            res.status(400).send("student not deleted")
        }

        res.status(200).send("student deleted")

    } catch (error) {
        return res.status(500).send("server error");  
    } 
}


export const updateProduct = async(req, res) => {
    const id = req.params.id;
    try {
        let newStudent = req.body;
        let updatedStudent = await student.findByIdAndUpdate(id, newStudent);

        if(!updatedStudent) {
            res.status(400).send("student not updated!")
        }

    } catch (error) {
        return res.status(500).send("server error");  
    }
}