import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginRegisterPage.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", firstName: "", lastName: "", phone: "", confirmPassword: "" });

  const handleToggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  const handlePasswordVisibilityToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? "Login" : "Register"} data:`, formData);
  };

  return (
    <div className="login-register-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {/* Common Email Field */}
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Conditionally Render Fields for Registration */}
          {!isLogin && (
            <>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Phone Number:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                 Password:
                <div className="password-wrapperr">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <div
                    className="password-eyee"
                    onClick={handlePasswordVisibilityToggle}
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </label>
            </>
          )}

          {/* Password Field */}
          <label>
          Confirm Password:
            <div className="password-wrapperr">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div
                className="password-eyee"
                onClick={handlePasswordVisibilityToggle}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </label>

          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

       
      </div>

      <div className="why-register-container">
  <h3>Why Register?</h3>
  <ul>
    <li>Access exclusive content and offers</li>
    <li>Track your orders and history</li>
    <li>Save your favorite items for later</li>
    <li>Receive personalized recommendations</li>
  </ul>
  <div className="quote">
    {isLogin
      ? "Already have an account? Login and continue where you left off."
      : "Register now to enjoy the full benefits of our platform!"}
  </div>
  <div className="toggle-link">
          <span>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button onClick={handleToggleForm}>
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
</div>

    </div>
  );
};

export default LoginRegisterPage;
