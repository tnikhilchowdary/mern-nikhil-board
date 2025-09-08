import express from "express";
import notesRoute from "./routes/notesRoutes.js";

const PORT = process.env.PORT || 3000;
const app =  express();
app.use(express.json());

app.use("/api/notes", notesRoute);


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

