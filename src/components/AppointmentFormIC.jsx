import { useState } from "react";

function AppointmentFormIC() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />

      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentFormIC;
