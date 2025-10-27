import React, { Component } from "react";

// Functional Component - Header
function Header() {
  return (
    <header
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>Student Information Portal</h1>
    </header>
  );
}

// Functional Component - Footer
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>© 2025 College Management System</p>
    </footer>
  );
}

// Class Component - StudentCard
class StudentCard extends Component {
  render() {
    const { name, roll, branch } = this.props;

    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "15px",
          margin: "15px",
          width: "250px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>{name}</h3>
        <p>
          <b>Roll No:</b> {roll}
        </p>
        <p>
          <b>Branch:</b> {branch}
        </p>
      </div>
    );
  }
}

// Parent component that nests Header, StudentCard(s) and Footer
function NestingComponent() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <StudentCard name="Mohan Kumar" roll="21BQ1A05G3" branch="CSE" />
        <StudentCard name="Priya Sharma" roll="21BQ1A04F1" branch="ECE" />
        <StudentCard name="Ravi Teja" roll="21BQ1A012H2" branch="IT" />
      </div>
      <Footer />
    </div>
  );
}

export default NestingComponent;
