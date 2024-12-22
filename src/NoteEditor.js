// NoteEditor.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const NoteEditor = () => {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [newContent, setNewContent] = useState("");

    useEffect(() => {
        const fetchNote = async () => {
            const docRef = doc(db, "notes", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const noteData = docSnap.data();
                // Ensure all timestamps are converted to JavaScript Date objects
                const updatedHistory = noteData.history.map((entry) => ({
                    ...entry,
                    timestamp: entry.timestamp ? entry.timestamp.toDate() : null, // Convert to Date
                }));
                setNote({ ...noteData, history: updatedHistory });
                setNewContent(noteData.content);
            } else {
                console.log("No such document!");
            }
        };

        fetchNote();
    }, [id]);

    const handleSaveNote = async () => {
        if (!newContent) return;

        const updatedHistory = [
            ...note.history,
            { content: newContent, timestamp: new Date() },
        ];
        const noteRef = doc(db, "notes", id);

        try {
            await updateDoc(noteRef, {
                content: newContent,
                history: updatedHistory,
            });
            setNote({ ...note, content: newContent, history: updatedHistory });
        } catch (error) {
            console.error("Error saving note: ", error);
        }
    };

    return (
        <div>
            <h2>Edit Note</h2>
            {note && (
                <div>
          <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows="10"
              cols="30"
          ></textarea>
                    <button onClick={handleSaveNote}>Save Note</button>
                    <h3>History</h3>
                    <ul>
                        {note.history.map((entry, index) => (
                            <li key={index}>
                                {entry.timestamp
                                    ? entry.timestamp.toString()
                                    : "No timestamp available"}: {entry.content}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NoteEditor;
