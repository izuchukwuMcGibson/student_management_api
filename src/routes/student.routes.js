const express = require("express");
const router = express.Router();
const {
  register,
  getStudents,
  getStudentById,
  getStudentbyIdAndUpdate,
  countStudents,
  deleteStudent,
} = require("../controller/student.controller");


router.post("/register", register);
router.get("/getStudents", getStudents);
router.get("/get-student/:id", getStudentById);
router.put("/update-student/:id", getStudentbyIdAndUpdate);
router.delete("/delete-student/:id", deleteStudent);
router.get("/count-students", countStudents);

module.exports = router;
