const express = require('express');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/student.routes');


const app = express();
const port = 3500;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/students', studentRoutes);

app.listen(port, ()=> {
  connectDB();
  console.log(`Server is running on http://localhost:${port}`);
})
