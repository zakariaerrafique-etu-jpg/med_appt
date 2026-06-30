import React, { useState } from "react";

function ProfileCard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
      <button>Save</button>
    </div>
  );
}

export default ProfileCard;

