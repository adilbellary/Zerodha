import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const endpoint = isLogin
      ? "http://localhost:3002/api/login"
      : "http://localhost:3002/api/signup";
    try {
      // Only send username for signup
      const payload = isLogin
        ? { email: form.email, password: form.password }
        : form;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
  localStorage.setItem("token", data.token);
  // Redirect to dashboard app with token in URL
  window.location.href = "http://localhost:3000/?token=" + data.token;
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "40px auto",
      padding: 32,
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      fontFamily: 'Segoe UI',
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 24, fontWeight: 700, fontSize: 32 }}>
        {isLogin ? "Login" : "Signup"}
      </h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              marginBottom: 14,
              padding: "10px 12px",
              border: "1px solid #ccc",
              borderRadius: 6,
              fontSize: 16,
            }}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: 14,
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 6,
            fontSize: 16,
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            marginBottom: 18,
            padding: "10px 12px",
            border: "1px solid #ccc",
            borderRadius: 6,
            fontSize: 16,
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 18,
            cursor: "pointer",
            marginBottom: 10,
            transition: "background 0.2s",
          }}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <button
        onClick={() => {
          setIsLogin(!isLogin);
          setError("");
        }}
        style={{
          width: "100%",
          padding: "10px 0",
          background: "#f5f5f5",
          color: "#222",
          border: "1px solid #ccc",
          borderRadius: 6,
          fontWeight: 500,
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
      </button>
      {error && (
        <div style={{ color: "#d32f2f", marginTop: 14, textAlign: "center", fontWeight: 500 }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Signup;
