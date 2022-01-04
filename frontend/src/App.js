import React from "react";
import { Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
