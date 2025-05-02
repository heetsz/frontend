import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SignUp, SignIn } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

function App() {
  const { user } = useUser();

  useEffect(() => {
    const sendUser = async () => {
      if (!user) return;

      const data = {
        name: user.fullName || "USER",
        phone: user.phoneNumbers[0]?.phoneNumber || "N/A",
      };

      try {
        const existingUsers = await axios.get("http://localhost:5000/users");
        console.log(existingUsers.data)
        const userExists = existingUsers.data.some(
          (existingUser) => existingUser.email === data.phone
        );

        if (userExists) {
          console.log("✅ User already exists :", data.phone);
          localStorage.setItem("userExists", true);
          return;
        }
        localStorage.setItem("userExists", false);
        await axios.post("http://localhost:5000/users", data);
        console.log("✅ User sent to DB:", data);
      } catch (err) {
        console.error("❌ Failed to send user:", err.message);
      }
    };

    sendUser();
  }, [user]); // Triggers only when the user logs in

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                signUpUrl="/signup"
                forceRedirectUrl={"/home"}
              />
            }
          />
          <Route
            path="/login"
            element={
              <SignIn
                signUpUrl="/signup"
                forceRedirectUrl={"/home"}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                signInUrl="/login"
                forceRedirectUrl={"/home"}
              />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
