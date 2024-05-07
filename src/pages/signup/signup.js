import "./signup.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5050/api/users/register", {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });
      navigate("/login");
    } catch (error) {
      event.target.reset();
      setError(error.response.data);
    }
  };

  return (
    <main className="signup-page">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>
        <h4 className="signup__details">Username</h4>
        <input
          className="signup__input"
          type="text"
          name="username"
          label="Username"
        />
        <h4 className="signup__details">Email</h4>
        <input
          className="signup__input"
          type="text"
          name="email"
          label="Email"
        />
        <h4 className="signup__details">Password</h4>
        <input
          className="signup__input"
          type="password"
          name="password"
          label="Password"
        />
        <button className="signup__button">Sign up</button>
        <p>{error}</p>
      </form>
      <p className="signup__login">
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}
