// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import "./styles.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/notes" element={<NotesList />} />
                <Route path="/note/:id" element={<NoteEditor />} />
            </Routes>
        </div>
    );
};

export default App;
