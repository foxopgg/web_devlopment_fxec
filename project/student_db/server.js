const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve HTML, CSS, JS

// POST - Add student
app.post('/students', async (req, res) => {
  try {
    const { name, class: className, dob, subject1, subject2, subject3, subject4, subject5, staff_id } = req.body;
    await pool.execute(
      `INSERT INTO students (name, class, dob, subject1, subject2, subject3, subject4, subject5, staff_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, className, dob, subject1, subject2, subject3, subject4, subject5, staff_id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding student");
  }
});

// GET - All students
app.get('/students', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM students');
  res.json(rows);
});

// POST - Add staff
app.post('/staff', async (req, res) => {
  try {
    const { name, subject } = req.body;
    await pool.execute(
      `INSERT INTO staff (name, subject) VALUES (?, ?)`,
      [name, subject]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding staff");
  }
});

// GET - All staff
app.get('/staff', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM staff');
  res.json(rows);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
