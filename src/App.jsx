import React from "react";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
  
function App() {
  return (
    <>
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
      </Routes>
    </>
  );
}
export default App;

