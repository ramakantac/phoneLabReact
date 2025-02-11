import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../demojson/users.json"; 
import illustration from "../assets/phonelab-login.png";  
import "mdb-react-ui-kit/dist/css/mdb.min.css"; 
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setError("");
      console.log("Login successful!");
      navigate("/home");
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

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
            className="img-fluid my-3 mx-15"
            style={{ maxWidth: "70%" }}
          />
          <p className="text-muted small">
            By creating an account, you agree to our Terms of Service, Privacy
            Policy, and Notification Settings.
          </p>
        </MDBCol>

        {/* Login Section */}
        <MDBCol md="6" className="bg-white p-5 rounded-end shadow-sm">
          <form onSubmit={handleLogin}>
            <h2 className="mb-4 text-center">Sign in</h2>
            {error && (
              <p className="text-danger text-center small">{error}</p>
            )}

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
            <div className="position-relative">
              <MDBInput
                type={showPassword ? "text" : "password"}
                label="Password"
                id="password"
                className="mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle position-absolute"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Options */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
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