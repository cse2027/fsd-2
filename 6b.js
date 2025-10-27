src/ 
  ├── Students.js 
  ├── App.css 
  ├── Students.scss 
  ├── index.js

//student.js
import React from "react";
import "./App.css";
import "./Students.scss";

function Students() {
  const students = [
    { id: 1, name: "Ravi", course: "React" },
    { id: 2, name: "Priya", course: "Node.js" },
    { id: 3, name: "Kiran", course: "MongoDB" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Student List</h1>
      <div className="card-container">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;

//app.css
.app-container {
  text-align: center;
  background-color: #f0f4f8;
  padding: 30px;
}

.title {
  color: #0077cc;
  font-size: 2rem;
  margin-bottom: 20px;
}
//Studnets.scss
$card-bg: #fff;
$card-border: #ccc;
$card-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.student-card {
  background: $card-bg;
  border: 1px solid $card-border;
  box-shadow: $card-shadow;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #0077cc;
  }

  h3 {
    color: #333;
    margin: 0 0 8px 0;
  }

  p {
    color: #666;
    margin: 0;
  }
}

