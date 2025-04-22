// Add Student
document.getElementById("studentForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    const response = await fetch("/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      alert("Student added successfully!");
      this.reset();
      loadStudents();
    } else {
      alert("Failed to add student.");
    }
  });
  
  // Add Staff
  document.getElementById("staffForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    const response = await fetch("/staff", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      alert("Staff added successfully!");
      this.reset();
      loadStaff();
    } else {
      alert("Failed to add staff.");
    }
  });
  
  // Load Students
  async function loadStudents() {
    const res = await fetch("/students");
    const students = await res.json();
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";
  
    students.forEach((s) => {
      const row = `<tr>
        <td>${s.name}</td>
        <td>${s.class}</td>
        <td>${s.dob}</td>
        <td>${s.subject1}</td>
        <td>${s.subject2}</td>
        <td>${s.subject3}</td>
        <td>${s.subject4}</td>
        <td>${s.subject5}</td>
        <td>${s.staff_id}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
  
  // Load Staff
  async function loadStaff() {
    const res = await fetch("/staff");
    const staff = await res.json();
    const tbody = document.querySelector("#staffTable tbody");
    tbody.innerHTML = "";
  
    staff.forEach((s) => {
      const row = `<tr>
        <td>${s.name}</td>
        <td>${s.subject}</td>
      </tr>`;
      tbody.innerHTML += row;
    });
  }
  
  // Initial load
  loadStudents();
  loadStaff();
  