import React, {useState, useCallback} from "react";
// import {useNavigate} from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {MDBInput, MDBBtn} from "mdb-react-ui-kit";

function LoginForm({LoginFormReturn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [msgBox, setMsgBox] = useState(<p></p>);

    const handleSubmit = useCallback(
        (e) => {
            setIsLoading(true);
            setMsgBox(<p className="text-success text-center" style={{fontWeight
                    :600}}>Loading! Please Wait...</p>);
            e.preventDefault();
            if (email === "admin@phonelab.com" && password === "admin123") {
                LoginFormReturn({success:true,msg:'Success'});
                setMsgBox(<p className="text-success text-center" style={{fontWeight
                        :600}}>Success! Redirecting...</p>);
            } else {
                LoginFormReturn({success:false , msg:"Invalid email or password!"});
                setMsgBox(<p className="text-danger text-center" style={{fontWeight
                        :600}}>Invalid email or password!</p>);
                setIsLoading(false);
                setTimeout(() => {
                    setMsgBox(<p></p>); // Clear the message after 1 second
                }, 2000);

            }
        },
    );

    return (
        <form onSubmit={handleSubmit}>
                        <h2 className="mb-4 text-center">Sign in
                            <span> {msgBox} </span>
                        </h2>
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
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </span>
                        </div>

                        {/* Options */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            {/*<div className="d-flex align-items-center">*/}
                            {/*    <input*/}
                            {/*        type="checkbox"*/}
                            {/*        id="rememberMe"*/}
                            {/*        className="form-check-input"*/}
                            {/*        checked={rememberMe}*/}
                            {/*        onChange={handleRememberMe}*/}
                            {/*    />*/}
                            {/*    <label htmlFor="rememberMe" className="form-check-label ms-2">*/}
                            {/*        Remember me*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <a href="#" className="text-decoration-none small">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <div className="text-center">
                            <MDBBtn type="submit" disabled={isLoading} className="btn-primary" size='lg' >
                                Login
                            </MDBBtn>
                        </div>
                    </form>
    );
}

export default LoginForm;
