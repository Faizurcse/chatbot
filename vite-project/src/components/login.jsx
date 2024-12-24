import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      height: "97vh",
      width: "100%",
      backgroundImage: `url('./assets/loginbg.jpg')`, // Background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
    },
    content: {
      backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
      borderRadius: "12px",
      padding: "40px",
      maxWidth: "500px",
      textAlign: "center",
      // boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    title: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#333",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "18px",
      fontWeight: "400",
      color: "#666",
      marginBottom: "30px",
    },
    button: {
      width: "100%",
      padding: "12px",
      margin: "15px 0",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      transition: "all 0.3s ease",
    },
    loginButton: {
      backgroundColor: "#6a5acd",
      color: "#fff",
      boxShadow: "0 4px 10px rgba(106, 90, 205, 0.3)",
    },
    signupButton: {
      backgroundColor: "#fff",
      color: "#6a5acd",
      border: "2px solid #6a5acd",
    },
    footerLink: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#6a5acd",
      textDecoration: "none",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>
          Log in or sign up to explore smarter AI solutions tailored to your needs.
        </p>
        <button
          style={{ ...styles.button, ...styles.loginButton }}
          onClick={() => navigate("/chat")}
        >
          <FaSignInAlt size={20} /> Log In
        </button>
        {/* <button style={{ ...styles.button, ...styles.signupButton }}>
          <FaUserPlus size={20} /> Sign Up
        </button> */}
        <a href="#" style={styles.footerLink}>
          Stay logged out
        </a>
      </div>
    </div>
  );
};

export default Login;
