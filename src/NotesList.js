// NotesList.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const notesCollection = collection(db, "notes");

    useEffect(() => {
        const fetchNotes = async () => {
            const notesSnapshot = await getDocs(notesCollection);
            const notesList = notesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotes(notesList);
        };

        fetchNotes();
    }, []);

    const handleAddNote = async () => {
        try {
            const newNote = {
                content: "New note content", // Placeholder content
                history: [],
            };
            const docRef = await addDoc(notesCollection, newNote);
            setNotes([...notes, { id: docRef.id, ...newNote }]);
        } catch (error) {
            console.error("Error adding note: ", error);
        }
    };

    return (
        <div>
            <h1>Your Notes</h1>
            <button onClick={handleAddNote}>Add Note</button>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`}>{note.content}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesList;
