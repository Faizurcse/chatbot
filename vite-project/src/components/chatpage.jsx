import React, { useState } from "react";
import { FaPaperPlane, FaUser, FaRobot, FaPlus, FaSun, FaMoon } from "react-icons/fa";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const startNewChat = () => {
    const newChat = { id: chats.length + 1, name: `Chat ${chats.length + 1}`, messages: [] };
    setChats([...chats, newChat]);
    setCurrentChat(newChat.id);
    setMessages([]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const updatedChats = chats.map((chat) =>
      chat.id === currentChat ? { ...chat, messages: [...chat.messages, userMessage] } : chat
    );
    setChats(updatedChats);

    setTimeout(() => {
      const aiResponse = { type: "ai", text: "This is a simulated AI response." };
      setMessages((prev) => [...prev, aiResponse]);

      const updatedChatsWithAI = chats.map((chat) =>
        chat.id === currentChat ? { ...chat, messages: [...chat.messages, aiResponse] } : chat
      );
      setChats(updatedChatsWithAI);
    }, 100);
  };

  const switchChat = (id) => {
    const chat = chats.find((c) => c.id === id);
    setCurrentChat(chat.id);
    setMessages(chat.messages);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "97vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: darkMode ? "#1E1E1E" : "#f7f7f7",
        color: darkMode ? "#FFFFFF" : "#000000",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "300px",
          backgroundColor: darkMode ? "#2E2E2E" : "#FFFFFF",
          borderRight: `1px solid ${darkMode ? "#444" : "#DDD"}`,
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ fontSize: "20px", margin: 0 }}>Chat AI</h2>
          <button
            onClick={toggleDarkMode}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: darkMode ? "#FFD700" : "#4F46E5",
              fontSize: "20px",
            }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div
          style={{
            padding: "12px",
            marginBottom: "15px",
            backgroundColor: darkMode ? "#444" : "#e6e6ff",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
          onClick={startNewChat}
        >
          <FaPlus style={{ marginRight: "8px" }} />
          Start New Chat
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => switchChat(chat.id)}
              style={{
                padding: "12px",
                margin: "8px 0",
                backgroundColor: chat.id === currentChat ? (darkMode ? "#555" : "#d6d6f5") : darkMode ? "#2E2E2E" : "#f9f9f9",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
            >
              {chat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        

        {/* Chat Body */}
        <div
          style={{
            flex: 1,
            padding: "25px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
                backgroundColor: msg.type === "user" ? (darkMode ? "#375A7F" : "#E1F5FE") : darkMode ? "#444" : "#FFFDE7",
                padding: "15px",
                borderRadius: "12px",
                alignSelf: msg.type === "user" ? "flex-end" : "flex-start",
                maxWidth: "70%",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {msg.type === "user" ? (
                <FaUser color={darkMode ? "#FFD700" : "#2196F3"} size={22} />
              ) : (
                <FaRobot color={darkMode ? "#FFA500" : "#FFB300"} size={22} />
              )}
              <span style={{ fontSize: "15px" }}>{msg.text}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px",
            paddingBottom:"1rem",
            backgroundColor: darkMode ? "#2E2E2E" : "#fff",
            boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: "12px",
              fontSize: "15px",
              border: `1px solid ${darkMode ? "#555" : "#ddd"}`,
              borderRadius: "8px",
              marginRight: "12px",
              outline: "none",
              backgroundColor: darkMode ? "#444" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            style={{
              backgroundColor: darkMode ? "#375A7F" : "#4F46E5",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 18px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Send <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
