import React from "react";

function DoctorCard({ doctor, onCancel }) {
  return (
    <div>
      <h3>{doctor.name}</h3>
      <p>{doctor.speciality}</p>
      <p>{doctor.experience} years</p>
      <p>{doctor.rating}</p>

      <button onClick={() => onCancel(doctor.id)}>
        Cancel Appointment
      </button>
    </div>
  );
}
const [appointments, setAppointments] = useState(
  JSON.parse(localStorage.getItem("appointments")) || []
);

const handleCancelAppointment = (id) => {
  const updatedAppointments = appointments.filter(
    (appointment) => appointment.id !== id
  );

  setAppointments(updatedAppointments);
  localStorage.setItem(
    "appointments",
    JSON.stringify(updatedAppointments)
  );
};  
export default DoctorCard; 

