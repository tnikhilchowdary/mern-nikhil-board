import express from "express";
const PORT = 5000;
const app =  express();

app.get("/api/notes", (req, res) => {
    res.status(200).send("You got 20 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Note Created Succesfully"});
})

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note Updated Succesfully"});
})

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note Deleted Succesfully!"});
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

