import React, { useState } from "react";
import { GrView } from "react-icons/gr";

import { BiHide } from "react-icons/bi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6">
            <h2 className="text-4xl font-semibold text-black">
              Get Your Device Repaired Anytime
            </h2>
            <p className="text-gray-700 mt-3">
              PhoneLab brings top-notch repair services. We specialize in
              repairing a variety of brands, ensuring convenience and expertise
              meet at your home. Your trusted tech solution awaits!
            </p>
            <div className="flex justify-center">
  <img src="https://dstemp.teq2web.com/images/phonelab-login.png" alt="Ismaa Image"/>
</div>

            <p className="text-gray-600 mt-6 text-sm">
              By creating an account, you agree with our
              <span className="text-blue-600 cursor-pointer">
                {" "}
                Terms of Service
              </span>
              ,{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
              , and our default Notification Settings.
            </p>
          </div>

          {/* Right Section (Login Form) */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-semibold text-center mb-6">Sign in</h3>

            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a valid email address"
                  required
                  aria-label="Email address"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-medium">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  required
                  minLength="6"
                  aria-label="Password"
                />
                <span
                  className="absolute right-3 top-9 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BiHide />: <GrView />}
                </span>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="mr-2" /> Remember me
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  id="login_btn"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
