import express from "express";
import notesRoute from "./routes/notesRoutes.js";
import {connectDb} from "./config.js/db.js";


const PORT = process.env.PORT || 3000;
const app =  express();
connectDb();
app.use(express.json());

app.use("/api/notes", notesRoute);


app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

