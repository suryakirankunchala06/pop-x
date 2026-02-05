import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      <h1>Create your PopX account</h1>

      <form className="form">
        <label>Full Name*</label>
        <input placeholder="Marry Doe" />

        <label>Phone number*</label>
        <input placeholder="Marry Doe" />

        <label>Email address*</label>
        <input placeholder="Marry Doe" />

        <label>Password*</label>
        <input placeholder="Marry Doe" />

        <label>Company name</label>
        <input placeholder="Marry Doe" />

        <div className="radio-group">
          <span>Are you an Agency?*</span>
          <div className="radio-options">
            <label>
              <input type="radio" name="agency" defaultChecked /> Yes
            </label>
            <label>
              <input type="radio" name="agency" /> No
            </label>
          </div>
        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={() => navigate("/account")}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}