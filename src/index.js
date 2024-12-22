import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Your main App component
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router> {/* Wrap your app with Router */}
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
