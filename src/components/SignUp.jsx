import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import SignUp from "./Sign_Up";
function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  localStorage.setItem(
  "user",
  JSON.stringify({
    fullName: formData.fullName,
    email: formData.email
  })
);

navigate("/");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ""
    });
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.fullName.trim())
      validationErrors.fullName = "Full name is required.";

    if (!formData.email.trim())
      validationErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      validationErrors.email = "Invalid email.";

    if (!formData.phone.trim())
      validationErrors.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      validationErrors.phone = "Phone number must contain 10 digits.";

    if (!formData.password)
      validationErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      validationErrors.password =
        "Password must contain at least 6 characters.";

    if (!formData.confirmPassword)
      validationErrors.confirmPassword =
        "Please confirm your password.";
    else if (formData.confirmPassword !== formData.password)
      validationErrors.confirmPassword =
        "Passwords do not match.";

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        setMessage("Registration successful!");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage("Registration failed.");
      }
    } catch (error) {
      setMessage("Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Create Account</h2>

        {message && <p className="success">{message}</p>}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <p className="error">{errors.fullName}</p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email}</p>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <p className="error">{errors.phone}</p>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="error">{errors.password}</p>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p className="error">{errors.confirmPassword}</p>

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default SignUp;
