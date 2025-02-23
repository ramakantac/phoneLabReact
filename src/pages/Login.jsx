import React, {useState, useCallback} from "react";
import {useNavigate} from "react-router-dom";
import illustration from "../assets/phonelab-login.png";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import LoginForm from "../components/LoginForm";
import store from "../useStore.js";


function Login() {
    const navigate = useNavigate();
    const setAuthenticated = store((state) => state.setAuthenticated);
    const LoginFormReturnValue = (result) => {
        if (result.success) {
            setAuthenticated(true);
            navigate("/dashboard");
        }
    };

    return (
        <MDBContainer  fluid className="login-page" style={{backgroundColor: "#F5F5F8"}}>
            <MDBRow className="align-items-center">
                {/* Info Section */}
                <MDBCol md="7" className="text-center py-5 rounded-start">
                    <h1 className="mb-4" style={{fontWeight
                            :600,color:"black"}}>Get Your Device Repair Anytime</h1>
                    <p style={{color:"black"}}>
                        PhoneLab brings top-notch repair services. We specialize in
                        repairing a variety of brands, ensuring convenience and expertise
                        meet at your home. Your trusted tech solution awaits!
                    </p>
                    <img
                        src={illustration}
                        alt="Device Repair"
                        className="img-fluid my-3"
                        style={{maxWidth: "70%"}}
                    />
                    <p className="text-muted small">
                        By creating an account, you agree to our Terms of Service, Privacy
                        Policy, and Notification Settings.
                    </p>
                </MDBCol>

                {/* Login Section */}
                <MDBCol md="5" className="bg-white p-5 rounded-end shadow-sm">
                    <LoginForm LoginFormReturn={LoginFormReturnValue}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
