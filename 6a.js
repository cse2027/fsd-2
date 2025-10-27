import React, { useState, Component } from 'react';

// Functional Component using Props and State
function Student(props) {
  // useState Hook to handle internal state
  const [marks, setMarks] = useState(80);
  const { name, course } = props;

  const increaseMarks = () => {
    setMarks(marks + 5);
  };

  return (
    <div style={{ border: '2px solid gray', padding: '10px', margin: '10px' }}>
      <h2>Student Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Marks: {marks}</p>
      <button onClick={increaseMarks}>Increase Marks</button>
    </div>
  );
}

// Class Component using Props and State
class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: 5,
    };
  }

  addExperience = () => {
    this.setState({ experience: this.state.experience + 1 });
  };

  render() {
    const { name, subject } = this.props;
    const { experience } = this.state;

    return (
      <div style={{ border: '2px solid blue', padding: '10px', margin: '10px' }}>
        <h2>Teacher Name: {name}</h2>
        <p>Subject: {subject}</p>
        <p>Experience: {experience} years</p>
        <button onClick={this.addExperience}>Add Experience</button>
      </div>
    );
  }
}

// Parent Component rendering both
function PropsState() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Working with Props and State</h1>
      <Student name="John Doe" course="ReactJS" />
      <Teacher name="Mrs. Smith" subject="Web Development" />
    </div>
  );
}

export default PropsState;
