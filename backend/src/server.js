import express from "express";
import notesRoute from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import cors from "cors";


const PORT = process.env.PORT || 5000;
const app =  express();
connectDb();
app.use(cors());
app.use(express.json());
app.use("/api/notes", notesRoute);


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

