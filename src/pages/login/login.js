import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/api/users/login",
        {
          username: event.target.username.value,
          password: event.target.password.value,
        }
      );
      console.log(response);
      localStorage.setItem("token", response.data.token);

      navigate("/homepage");
    } catch (error) {
      setError(error.response.data.error);
    }
  };
  return (
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <h4 className="login__details">Username</h4>
        <input
          className="login__input"
          type="text"
          name="username"
          label="username"
        />
        <h4 className="login__details">Password</h4>
        <input
          className="login__input"
          type="password"
          name="password"
          label="Password"
        />
        <button className="login__button">Log in</button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <p className="login__signup">
        Need an account? <Link to="/">Sign up</Link>
      </p>
    </main>
  );
}
