# 📘 Student Management API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage student records — supporting full **CRUD** operations, email uniqueness validation, and student counting.



## 🔗 Live URL / Base URL

http://localhost:3500/api/students



## 📦 Features

- Register a student (with unique email validation)
- Get all students
- Get a student by ID
- Update a student
- Delete a student
- Count total number of students


## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose



## 🧪 Endpoints & Usage

### ➕ Register a Student

**POST** `/register`

**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 21,
  "studentClass": "SS3",
  "email": "john.doe@example.com"
}
Response:

201 Created: Student created successfully

409 Conflict: Email already exists

📥 Get All Students
GET /getStudents

Response:

json
{
  "students": [...],
  "length": 5
}
🔍 Get Student by ID
GET /get-student/:id

Response:

200 OK: Student object

404 Not Found: If student does not exist

✏️ Update Student
PUT /update-student/:id

Body:

json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "age": 22,
  "studentClass": "SS2"
}
❌ Delete Student
DELETE /delete-student/:id

Response:

json

{
  "message": "student deleted successfully"
}
🔢 Count Students
GET /count

Response:

json

{
  "count": 10
}
⚠️ Error Handling
404 Not Found: Student does not exist

409 Conflict: Email already exists

500 Internal Server Error: Server-side issue

🧑‍💻 Author
GitHub: @izuchukwuMcGibson

Project Repo: student_management_api

✅ Setup Instructions

# 1. Clone the repo
git clone https://github.com/izuchukwuMcGibson/student_management_api.git

# 2. Navigate to project directory
cd student_management_api

# 3. Install dependencies
npm install

# 4. Create a .env file
MONGO_URI=<your-mongodb-uri>

# 5. Start the server
npm run dev
App runs on http://localhost:3500 by default




