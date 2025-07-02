const Student = require("../models/student.schema.js");
// define a model/ scheema

// // create new student
const register = async (req, res) => {
  const { firstName, lastName, age, studentClass, email } = req.body;

  try {
    // check if student with the same email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const student = new Student({
      firstName,
      lastName,
      age,
      studentClass,
      email,
    });
    await student.save();

    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
  //validate input
  try {
    if (!firstName || !lastName || !age || !studentClass || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Invalid input", error: error.message });
  }
};

const getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ students, length: students.length });
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
// Validate if student exists
    if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json({ student });
};

const getStudentbyIdAndUpdate = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, studentClass, email } = req.body;
  const updatedStudent = await Student.findByIdAndUpdate(
    id,
    { firstName, lastName, age, studentClass, email },
    { new: true }
  );
  res
    .status(200)
    .json({ message: "student updated successfully", updatedStudent });
};

const countStudents = async (req, res) => {
  const count = await Student.countDocuments();
  res.status(200).json({ count });
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const deletedStudent = await Student.findByIdAndDelete(id);
  res
    .status(200)
    .json({ message: "student deleted successfully" }, deletedStudent);
};

module.exports = {
  register,
  getStudents,
  getStudentById,
  getStudentbyIdAndUpdate,
  countStudents,
  deleteStudent,
};
