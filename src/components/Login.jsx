import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../assets/phonelab-login.png";  
import "mdb-react-ui-kit/dist/css/mdb.min.css"; 
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleRememberMe = useCallback(() => {
    setRememberMe((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email === "admin@phonelab.com" && password === "admin123") {
        setError("");
        onLogin();
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    },
    [email, password, navigate, onLogin]
  );

  return (
    <MDBContainer className="login-page">
      <MDBRow className="align-items-center">
        {/* Info Section */}
        <MDBCol md="6" className="text-center bg-light py-5 rounded-start">
          <h1 className="mb-4">Get Your Device Repair Anytime</h1>
          <p>
            PhoneLab brings top-notch repair services. We specialize in
            repairing a variety of brands, ensuring convenience and expertise
            meet at your home. Your trusted tech solution awaits!
          </p>
          <img
            src={illustration}
            alt="Device Repair"
            className="img-fluid my-3"
            style={{ maxWidth: "70%" }}
          />
          <p className="text-muted small">
            By creating an account, you agree to our Terms of Service, Privacy
            Policy, and Notification Settings.
          </p>
        </MDBCol>

        {/* Login Section */}
        <MDBCol md="6" className="bg-white p-5 rounded-end shadow-sm">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Sign in</h2>
            {error && <p className="text-danger text-center small">{error}</p>}

            {/* Email Input */}
            <MDBInput
              type="email"
              label="Email address"
              id="email"
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password Input */}
            <div className="position-relative mb-4">
              <MDBInput
                type={showPassword ? "text" : "password"}
                label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle position-absolute"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Options */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="form-check-input"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <label htmlFor="rememberMe" className="form-check-label ms-2">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none small">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <div className="text-center">
              <MDBBtn type="submit" className="btn-primary">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
