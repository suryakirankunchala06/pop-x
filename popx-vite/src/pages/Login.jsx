import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form className="form">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter password" />

        <button
          type="button"
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </form>
    </div>
  );
}