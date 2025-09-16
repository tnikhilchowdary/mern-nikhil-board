import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await fetch("http://localhost:5000/api/notes", {
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({title, content}),
        });
        if(!res.ok){
            throw new Error("Failed To create note");
        }

        await res.json();
        navigate("/NotesList")
    }
    catch(err){
        console.log("Error Creating Note", err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        
      </div>
    </div>
  );
}

export default CreatePage;
