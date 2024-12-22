import React from "react";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <NotesList />
        <NoteEditor />
    </div>
);

export default Dashboard;
