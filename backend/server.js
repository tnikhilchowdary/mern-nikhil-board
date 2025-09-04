import express from "express";
const PORT = 5000;
const app =  express();

app.get("/api/notes", (req, res) => {
    res.send("You got 5 Notes, welcome to the Backend");
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

