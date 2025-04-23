// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Handle Student Form Submission (Add Student)
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
      studentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(studentForm);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch('/api/students', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (response.ok) {
            alert('Student added successfully');
            studentForm.reset(); // Reset form after submission
          } else {
            alert('Error adding student: ' + result.message);
          }
        } catch (error) {
          alert('Error: ' + error);
        }
      });
    }
  
    // Handle Staff Form Submission (Add Staff)
    const staffForm = document.getElementById('staffForm');
    if (staffForm) {
      staffForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(staffForm);
        const data = Object.fromEntries(formData.entries());
  
        try {
          const response = await fetch('/api/staff', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (response.ok) {
            alert('Staff added successfully');
            staffForm.reset(); // Reset form after submission
          } else {
            alert('Error adding staff: ' + result.message);
          }
        } catch (error) {
          alert('Error: ' + error);
        }
      });
    }
  
    // Fetch and display students
    const studentsTable = document.getElementById('studentsTable');
    if (studentsTable) {
      fetch('/api/students')
        .then(response => response.json())
        .then(students => {
          students.forEach(student => {
            const row = studentsTable.insertRow();
            row.innerHTML = `
              <td>${student.name}</td>
              <td>${student.class}</td>
              <td>${student.dob}</td>
              <td>${student.subject1}</td>
              <td>${student.subject2}</td>
              <td>${student.subject3}</td>
              <td>${student.subject4}</td>
              <td>${student.subject5}</td>
              <td>${student.department_id}</td>
              <td>${student.staff_id}</td>
            `;
          });
        });
    }
  
    // Fetch and display staff
    const staffTable = document.getElementById('staffTable');
    if (staffTable) {
      fetch('/api/staff')
        .then(response => response.json())
        .then(staff => {
          staff.forEach(member => {
            const row = staffTable.insertRow();
            row.innerHTML = `
              <td>${member.name}</td>
              <td>${member.subject}</td>
              <td>${member.department_id}</td>
            `;
          });
        });
    }
  });
  