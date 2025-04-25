const express = require('express');
const path = require('path');
const pool = require('./db');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});


app.get('/view-students.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view-students.html')); 
});

app.get('/add-student.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-student.html')); 
});

app.get('/add-staff.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'add-staff.html')); 
});

app.get('/view-staff.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view-staff.html'));
});


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
    res.status(201).json({ message: 'Student added successfully', id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding student' }); 
  }
});


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

app.get('/api/students', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM students');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
});

app.get('/api/staff', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM staff');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch staff' });
  }
});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/admin/removal-logs', async (req, res) => {
  try {
    const [logs] = await pool.query('SELECT * FROM removal_logs ORDER BY removed_at DESC');
    res.json(logs);
  } catch (err) {
    console.error('Error fetching logs:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  const studentId = req.params.id;
  const { reason } = req.body;

  if (!reason) return res.status(400).send("Removal reason required.");

  try {
    // 1. Get the student data before deleting
    const [student] = await db.query("SELECT * FROM students WHERE id = ?", [studentId]);
    if (!student) return res.status(404).send("Student not found");

    // 2. Delete the student
    await db.query("DELETE FROM students WHERE id = ?", [studentId]);

    // 3. Log the removal
    await db.query(`
      INSERT INTO removed_students (id, name, class, dob, subject1, subject2, subject3, subject4, subject5, staff, removal_reason, removed_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `, [
      student.id,
      student.name,
      student.class,
      student.dob,
      student.subject1,
      student.subject2,
      student.subject3,
      student.subject4,
      student.subject5,
      student.staff,
      reason
    ]);

    res.status(200).send("Student removed and logged.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
});
app.post('/api/students/remove/:id', async (req, res) => {
  const studentId = req.params.id;
  const { reason } = req.body;

  if (!reason) return res.status(400).send("Removal reason required.");

  try {
    const [rows] = await pool.query("SELECT * FROM students WHERE id = ?", [studentId]);
    const student = rows[0];
    if (!student) return res.status(404).send("Student not found");

    await pool.query("DELETE FROM students WHERE id = ?", [studentId]);

    await pool.query(`
      INSERT INTO removed_students 
      (id, name, class, dob, subject1, subject2, subject3, subject4, subject5, staff, removal_reason, removed_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `, [
      student.id,
      student.name,
      student.class,
      student.dob,
      student.subject1,
      student.subject2,
      student.subject3,
      student.subject4,
      student.subject5,
      student.staff_id,
      reason
    ]);

    res.status(200).send("Student removed and logged.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
});
app.get('/api/students', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT students.*, staff.name AS staff_name 
      FROM students
      LEFT JOIN staff ON students.staff_id = staff.id
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
});
app.get('/api/staff', async (req, res) => {
  try {
    const [staff] = await pool.query('SELECT id AS staff_id, name, subject, department_id FROM staff');
    res.json(staff);
  } catch (err) {
    console.error('Error fetching staff:', err);
    res.status(500).json({ message: 'Failed to fetch staff' });
  }
});
