import React from "react";

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out");
  };

  return (
    <nav>
      <h2>StayHealthy</h2>
      <ul>
        <li>Home</li>
        <li>Appointments</li>
        <li>Sign Up</li>
        <li>Login</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;

