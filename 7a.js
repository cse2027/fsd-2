import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Conditional Rendering Example</h1>

      {isLoggedIn ? (
        <h2>Welcome back, User!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;
