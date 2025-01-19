import React, { useState } from "react";
import axios from "axios";

const LangflowInteraction = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: inputValue }]);
    setInputValue("");
    setLoading(true);
    setError("");

    try {
      const result = await axios.post("http://localhost:3000/api/langflow", {
        inputValue: inputValue,
        inputType: "chat",
        outputType: "chat",
        stream: false,
      });

      if (result.data.success) {
        setMessages((prev) => [...prev, { type: "bot", text: result.data.output }]);
      } else {
        setError("Failed to get response from the server.");
      }
    } catch (err) {
      setError("An error occurred: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/path-to-your-uploaded-image.png")`, // Replace with the image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "90%",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Transparent black for contrast
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "20px",
            color: "#FFD700", // Gold color for accent
          }}
        >
          Langflow Chatbot
        </h1>

        <div
          style={{
            border: "1px solid #555",
            borderRadius: "16px",
            padding: "15px",
            height: "400px",
            overflowY: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.05)", // Semi-transparent for layering
            boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: msg.type === "user" ? "flex-end" : "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  maxWidth: "75%",
                  padding: "12px",
                  borderRadius: "16px",
                  background: msg.type === "user"
                    ? "linear-gradient(135deg, #6A5ACD, #483D8B)"
                    : "linear-gradient(135deg, #3A3A3A, #1C1C1C)",
                  color: "#fff",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#E63946", // Error red
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "flex" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: "14px",
              fontSize: "16px",
              border: "none",
              borderRadius: "8px",
              marginRight: "10px",
              outline: "none",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent input
              color: "#fff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              background: loading
                ? "rgba(255, 255, 255, 0.5)"
                : "linear-gradient(135deg, #FF7F50, #FF4500)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.2s ease",
            }}
            disabled={loading}
            onMouseOver={(e) => {
              if (!loading) e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              if (!loading) e.target.style.transform = "scale(1)";
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LangflowInteraction;