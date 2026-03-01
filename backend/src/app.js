import express from "express";
import routes from "./routes/notes.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors())

app.use("/api/notes", routes)

export default app;
