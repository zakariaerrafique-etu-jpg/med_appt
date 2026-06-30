import React, { useState } from "react";

function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  return (
    <div>
      <input name="name" placeholder="Name" />
      <input name="phone" placeholder="Phone" />
      <input type="date" />
      <input type="time" />
      <button>Book</button>
    </div>
  );
}

export default AppointmentForm;

