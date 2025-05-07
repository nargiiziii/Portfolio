import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isStudent: { type: Boolean, required: true },
  },
  { collection: "students", timestamps: true }
);

const student = mongoose.model("students", studentSchema);
export default student;
