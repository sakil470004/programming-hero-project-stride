import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
export const UserContext = React.createContext(null);
const userDetails = {
  name: "John Doe",
  email: "js@gmail.com",
  age: 25,
  address: "New York",
  phone: "1234567890",
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value={userDetails}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
