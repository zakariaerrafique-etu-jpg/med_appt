import React, { useState } from "react";

app.use("/api/auth", authRoutes);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful", data);
      // enregistrer le token si nécessaire
      // rediriger l'utilisateur
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
};

