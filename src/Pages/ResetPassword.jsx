// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Footer from "../Components/Footer";

// const ResetPassword = () => {
//   const { token } = useParams(); // Extract token from URL
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleResetPassword = async () => {

//     if (!newPassword) {
//       setError("Please enter a new password.");
//       return;
//     }
  
//     console.log("Sending request with:", { token, newPassword });
//     try {
//       const response = await fetch("https://virtual-backend-4.onrender.com/Resetpassword", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, newPassword }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to reset password.");
//       }

//       setMessage("Password reset successful! Redirecting to login...");
//       setError("");

//       setTimeout(() => {
//         navigate("/login"); // Redirect to login page
//       }, 2000);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>RESET PASSWORD</h2>
//       {message && <p style={styles.successMessage}>{message}</p>}
//       {error && <p style={styles.errorMessage}>{error}</p>}

//       <input
//         type="password"
//         placeholder="Enter new password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         style={styles.input}
//       />

//       <button style={styles.sendButton} onClick={handleResetPassword}>
//         Reset Password
//       </button>
      
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "400px",
//     margin: "50px auto",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     background: "#fff",
//   },
//   title: {
//     fontSize: "28px",
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     border: "1px solid #ff6a3d",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   sendButton: {
//     width: "100%",
//     padding: "12px",
//     background: "linear-gradient(to right, #FF6A3D, #FF3C3C)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   successMessage: {
//     color: "green",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
//   errorMessage: {
//     color: "red",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
// };

// export default ResetPassword;



// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // Extract token from query parameters
//   const queryParams = new URLSearchParams(location.search);
//   const token = queryParams.get("token");

//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleResetPassword = async () => {
//     if (!newPassword) {
//       setError("Please enter a new password.");
//       return;
//     }
//     if (!token) {
//       setError("Invalid or missing token.");
//       return;
//     }

//     try {
//       console.log("Sending request with:", { token, newPassword }); // Debugging

//       const response = await fetch("https://virtual-backend-4.onrender.com/Resetpassword", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, newPassword }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to reset password.");
//       }

//       setMessage("Password reset successful! Redirecting to login...");
//       setError("");

//       setTimeout(() => {
//         navigate("/login"); // Redirect to login page
//       }, 2000);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>RESET PASSWORD</h2>
//       {message && <p style={styles.successMessage}>{message}</p>}
//       {error && <p style={styles.errorMessage}>{error}</p>}

//       <input
//         type="password"
//         placeholder="Enter new password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         style={styles.input}
//       />

//       <button style={styles.sendButton} onClick={handleResetPassword}>
//         Reset Password
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: "400px",
//     margin: "50px auto",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     background: "#fff",
//   },
//   title: {
//     fontSize: "28px",
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "12px",
//     border: "1px solid #ff6a3d",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   sendButton: {
//     width: "100%",
//     padding: "12px",
//     background: "linear-gradient(to right, #FF6A3D, #FF3C3C)",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
//   successMessage: {
//     color: "green",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
//   errorMessage: {
//     color: "red",
//     fontSize: "14px",
//     marginBottom: "10px",
//   },
// };

// export default ResetPassword;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../pagesCSS/ResetPassword.css";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async () => {
    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }
    if (!token) {
      setError("Invalid or missing token.");
      return;
    }

    try {
      const response = await fetch("https://virtual-backend-4.onrender.com/Resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password.");
      }

      setMessage("Password reset successful! Redirecting to login...");
      setError("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="reset-container">
      <h2 className="reset-title">RESET PASSWORD</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="reset-input"
      />

      <button className="reset-button" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
