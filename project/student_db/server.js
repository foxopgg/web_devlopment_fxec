// server.js
const express = require('express');
const path = require('path');  // Use path to resolve file locations
const pool = require('./db');  // Database pool connection
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Home route (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ensure path is correct
});

// Other routes for serving specific pages
app.get('/view-students.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view-students.html')); // Serve the view-students.html file
});

app.get('/add-student.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-student.html')); // Serve the add-student.html file
});

app.get('/add-staff.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-staff.html')); // Serve the add-staff.html file
});

app.get('/view-staff.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view-staff.html')); // Serve the view-staff.html file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/students', async (req, res) => {
  try {
    const { name, class: studentClass, dob, subject1, subject2, subject3, subject4, subject5, department_id, staff_id } = req.body;
    const [result] = await pool.execute(
      `INSERT INTO students (name, class, dob, subject1, subject2, subject3, subject4, subject5, department_id, staff_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, studentClass, dob, subject1, subject2, subject3, subject4, subject5, department_id, staff_id]
    );
    // Respond with a JSON object
    res.status(201).json({ message: 'Student added successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding student' }); // Ensure the error response is also JSON
  }
});

// API route for adding staff
app.post('/api/staff', async (req, res) => {
  try {
    const { name, subject, department_id } = req.body;
    const [result] = await pool.execute(
      `INSERT INTO staff (name, subject, department_id) VALUES (?, ?, ?)`,
      [name, subject, department_id]
    );
    res.status(201).json({ message: 'Staff added successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding staff' });
  }
});
// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
});

// Get all staff
app.get('/api/staff', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM staff');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch staff' });
  }
});


// Serve the front-end HTML files for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Path to your main HTML file
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
