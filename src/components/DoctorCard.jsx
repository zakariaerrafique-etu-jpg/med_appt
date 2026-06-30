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

export default DoctorCard;

