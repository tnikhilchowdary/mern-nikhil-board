import React, { useState, useEffect } from "react";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);


  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notes");
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.log("Error Fetching Notes", err);
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
      
        const res = await fetch(`http://localhost:5000/api/notes/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content }),
        });

        if (!res.ok) throw new Error("Failed to update note");

        const updatedNote = await res.json();
        setNotes(notes.map((n) => (n._id === editId ? updatedNote : n)));
        setEditId(null);
      } else {
        // CREATE
        const res = await fetch("http://localhost:5000/api/notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content }),
        });

        if (!res.ok) throw new Error("Failed to create note");

        const newNote = await res.json();
        setNotes([...notes, newNote]);
      }

      setTitle("");
      setContent("");
    } catch (err) {
      console.log("Error Saving Note", err);
    }
  };


  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete note");

      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      console.log("Error Deleting Note", err);
    }
  };


  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note._id);
  };

  return (
    <div style={{ padding: "20px" }}>
   
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
            required
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          {editId ? "Update Note" : "Add Note"}
        </button>
      </form>
      <div>
        <h1>Welcome to the NotesList</h1>
        <ul>
          {notes.map((note) => (
            <li
              key={note._id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            >
              <strong>{note.title}</strong>: {note.content}
              <div style={{ marginTop: "8px" }}>
                <button
                  onClick={() => handleEdit(note)}
                  style={{ marginRight: "10px" }}
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(note._id)}>🗑 Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreatePage;
