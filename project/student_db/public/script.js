document.addEventListener('DOMContentLoaded', () => {
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
            studentForm.reset();
          } else {
            alert('Error adding student: ' + result.message);
          }
        } catch (error) {
          alert('Error: ' + error);
        }
      });
    }
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
            staffForm.reset();
          } else {
            alert('Error adding staff: ' + result.message);
          }
        } catch (error) {
          alert('Error: ' + error);
        }
      });
    }

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
  async function removeStudent(id, name) {
    if (!confirm(`Are you sure you want to remove ${name}?`)) return;
  
    try {
      const res = await fetch(`/api/students/${id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        // Remove the row directly without reloading
        const row = document.querySelector(`button[onclick="removeStudent(${id}, '${name}')"]`).closest('tr');
        if (row) row.remove();
  
        // Optionally re-check if table is empty
        filterStudents();
      } else {
        alert(`Failed to remove ${name}.`);
      }
    } catch (err) {
      console.error('Error removing student:', err);
      alert('Something went wrong.');
    }
  }
  document.addEventListener('DOMContentLoaded', async () => {
    const tableBody = document.querySelector('#studentsBody');
    const staffResponse = await fetch('/api/staff');
    const staffData = await staffResponse.json();
  
    try {
      const res = await fetch('/api/students');
      const students = await res.json();
  
      students.forEach(student => {
        const staffMember = staffData.find(staff => staff.staff_id === student.staff_id);
        const staffName = staffMember ? staffMember.name : 'Not Assigned';
      
        // Format the DOB
        const formattedDob = new Date(student.dob).toLocaleDateString('en-GB'); // Format to DD-MM-YYYY
      
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.class}</td>
          <td>${formattedDob}</td> <!-- Display formatted DOB -->
          <td>${student.subject1}</td>
          <td>${student.subject2}</td>
          <td>${student.subject3}</td>
          <td>${student.subject4}</td>
          <td>${student.subject5}</td>
          <td>${staffName}</td>
        `;
        tableBody.appendChild(row);
      });
      
    } catch (err) {
      console.error('Error loading students:', err);
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="9">Error loading data</td>`;
      tableBody.appendChild(row);
    }
  });
  


  students.forEach(student => {
    const staffMember = staffData.find(staff => staff.staff_id === student.staff_id);
    const staffName = staffMember ? staffMember.name : 'Not Assigned';
  
    // Format the DOB
    const formattedDob = new Date(student.dob).toLocaleDateString('en-GB'); // Format to DD-MM-YYYY
  
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${formattedDob}</td> <!-- Display formatted DOB -->
      <td>${student.subject1}</td>
      <td>${student.subject2}</td>
      <td>${student.subject3}</td>
      <td>${student.subject4}</td>
      <td>${student.subject5}</td>
      <td>${staffName}</td>
    `;
    tableBody.appendChild(row);
  });
  